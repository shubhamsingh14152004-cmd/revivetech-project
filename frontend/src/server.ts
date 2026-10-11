import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getAllDevices, getDevicesByBrand } from "./content/devices";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Native API route handlers for serverless runtime (Vercel)
      if (url.pathname === "/api/devices") {
        const brand = url.searchParams.get("brand") || "";
        const data = brand ? getDevicesByBrand(brand) : getAllDevices();
        return new Response(
          JSON.stringify({
            success: true,
            count: data.length,
            data,
          }),
          {
            status: 200,
            headers: {
              "content-type": "application/json; charset=utf-8",
              "cache-control": "public, s-maxage=300, stale-while-revalidate=600",
              "access-control-allow-origin": "*",
            },
          }
        );
      }

      if (url.pathname === "/api/health") {
        return new Response(
          JSON.stringify({
            success: true,
            status: "healthy",
            timestamp: new Date().toISOString(),
          }),
          {
            status: 200,
            headers: {
              "content-type": "application/json; charset=utf-8",
              "access-control-allow-origin": "*",
            },
          }
        );
      }

      if (url.pathname === "/api/repairs" && request.method === "POST") {
        try {
          const body = (await request.clone().json().catch(() => ({}))) as Record<string, unknown>;
          const ticketNumber = "RT-REQ-" + Math.floor(100000 + Math.random() * 900000);
          return new Response(
            JSON.stringify({
              success: true,
              message: "Request received successfully",
              data: {
                ticketNumber,
                ...body,
                status: "Pending",
                createdAt: new Date().toISOString(),
              },
            }),
            {
              status: 201,
              headers: {
                "content-type": "application/json; charset=utf-8",
                "access-control-allow-origin": "*",
              },
            }
          );
        } catch {
          // Fall through to SSR handler if parsing fails
        }
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
