import { defineNitroConfig } from "nitro/config";

const backendUrl = process.env["BACKEND_API_URL"] || process.env["VITE_API_URL"];
const hasExternalBackend = Boolean(
  backendUrl &&
  !backendUrl.includes("localhost") &&
  !backendUrl.includes("127.0.0.1")
);

export default defineNitroConfig({
  preset: "vercel",
  vercel: {
    functions: {
      runtime: "nodejs22.x",
    },
  },
  ...(hasExternalBackend
    ? {
        routeRules: {
          "/api/**": { proxy: `${backendUrl!.replace(/\/+$/, "")}/**` },
        },
      }
    : {}),
});
