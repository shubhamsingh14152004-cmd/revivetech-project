import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
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

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error("Root Route Error:", error);
  const router = useRouter();
  const err = error instanceof Error ? error : new Error(String(error || "Unknown error"));

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        {err && (
          <div className="mt-4 text-left p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs font-mono text-destructive overflow-auto max-h-60">
            <p className="font-bold">{err.name}: {err.message}</p>
            {err.stack && (
              <pre className="mt-2 text-[11px] whitespace-pre-wrap opacity-80">
                {err.stack}
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
      { title: "Revora — Sell Your Old Phone & Get It Repaired" },
      { name: "description", content: "Sell your old, used, damaged, or dead smartphone for top cash payouts or book 45-minute doorstep mobile repair with Revora across Mumbai & nearby areas." },
      { name: "author", content: "Revora — Phone Buyback & Cleanroom Repair" },
      { property: "og:site_name", content: "Revora" },
      { property: "og:title", content: "Revora — Sell Your Old Phone & Get It Repaired" },
      { property: "og:description", content: "Sell your old, used, damaged, or dead smartphone for top cash payouts or book 45-minute doorstep mobile repair with Revora across Mumbai & nearby areas." },
      { property: "og:url", content: "https://sellrepairphone.org/" },
      { property: "og:image", content: "https://sellrepairphone.org/images/revora-logo-transparent.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@RevoraIndia" },
      { name: "twitter:title", content: "Revora — Sell Your Old Phone & Get It Repaired" },
      { name: "twitter:description", content: "Sell old, broken, or dead phones for cash with Revora. Get instant valuation, free doorstep pickup & 45-min repair." },
      { name: "twitter:image", content: "https://sellrepairphone.org/images/revora-logo-transparent.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preload", href: "/images/revora-logo-transparent.png", as: "image" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Chakra+Petch:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "64x64" },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://sellrepairphone.org/" },
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

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 400);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAF7] transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-4 text-center px-4">
        {/* Revora Glowing Icon Badge */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DDF5EA] p-3 shadow-lg shadow-[#007F5F]/15 animate-pulse border border-[#43C59E]/30">
          <img
            src="/images/revora-logo-transparent.png"
            alt="Revora Logo"
            className="h-14 w-14 object-contain"
          />
        </div>

        {/* Brand Name & Tagline */}
        <div className="flex flex-col items-center">
          <span className="font-display text-2xl font-bold tracking-tight text-[#102A26]">
            Revora
          </span>
          <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#007F5F] mt-0.5">
            Sell · Repair · Recycle
          </span>
        </div>

        {/* Smooth Preloader Progress Bar */}
        <div className="w-40 h-1 bg-[#E5E7EB] rounded-full overflow-hidden mt-2 relative">
          <div className="h-full bg-[#007F5F] rounded-full animate-progress" />
        </div>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Dynamically initialize GA4 if VITE_GA_MEASUREMENT_ID is configured
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <ClientOnlyToaster />
    </QueryClientProvider>
  );
}
