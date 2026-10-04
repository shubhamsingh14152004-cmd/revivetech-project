import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "../components/ui/sonner";

import appCss from "../styles.css?url";
import { initGA } from "../lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Root Route Error:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        {error && (
          <div className="mt-4 text-left p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs font-mono text-destructive overflow-auto max-h-60">
            <p className="font-bold">{error.name}: {error.message}</p>
            {error.stack && (
              <pre className="mt-2 text-[11px] whitespace-pre-wrap opacity-80">
                {error.stack}
              </pre>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#007F5F" },
      { title: "Revora | Sell Old & Dead Phones for Cash in Mumbai" },
      { name: "description", content: "Sell old, broken, or dead phones for cash with Revora. Get a phone valuation, arrange convenient pickup, and explore phone repair services across Mumbai and nearby areas." },
      { name: "author", content: "Revora — Sagar Tech Mobile Repair & Buyback" },
      { property: "og:site_name", content: "Revora" },
      { property: "og:title", content: "Revora | Sell Old & Dead Phones for Cash in Mumbai" },
      { property: "og:description", content: "Sell old, broken, or dead phones for cash with Revora. Get a phone valuation, arrange convenient pickup, and explore phone repair services across Mumbai and nearby areas." },
      { property: "og:url", content: "https://www.sellrepairphone.org" },
      { property: "og:image", content: "https://www.sellrepairphone.org/images/revora-logo-full.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@RevoraIndia" },
      { name: "twitter:title", content: "Revora | Sell Old & Dead Phones for Cash in Mumbai" },
      { name: "twitter:description", content: "Sell old, broken, or dead phones for cash with Revora. Get instant valuation, free doorstep pickup & 45-min repair." },
      { name: "twitter:image", content: "https://www.sellrepairphone.org/images/revora-logo-full.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Chakra+Petch:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://www.sellrepairphone.org" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ClientOnlyToaster() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <Toaster richColors position="top-right" />;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Dynamically initialize GA4 if VITE_GA_MEASUREMENT_ID is configured
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <ClientOnlyToaster />
    </QueryClientProvider>
  );
}
