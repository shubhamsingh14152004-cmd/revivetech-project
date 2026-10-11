import { QueryClient, QueryClientProvider } from"@tanstack/react-query";
import {
 Outlet,
 Link,
 createRootRouteWithContext,
 useRouter,
 HeadContent,
 Scripts,
 type ErrorComponentProps,
} from"@tanstack/react-router";
import { useEffect, useState, type ReactNode } from"react";
import { Toaster } from"../components/ui/sonner";

import appCss from"../styles.css?url";
import { initGA } from"../lib/analytics";
import { Logo } from "../components/Logo";

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
 const err = error instanceof Error ? error : new Error(String(error ||"Unknown error"));

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
 <div className="mt-4 text-left p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive overflow-auto max-h-60">
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
      { name: "theme-color", content: "var(--brand)" },
      { title: "Revora | Sell Old Phones & Doorstep Mobile Repair" },
      { name: "description", content: "Sell your smartphone or book doorstep mobile repair with Revora across Mumbai, Navi Mumbai and Thane. Request a direct quote and pickup on WhatsApp." },
      { name: "author", content: "Revora" },
      { property: "og:site_name", content: "Revora" },
      { property: "og:title", content: "Revora | Sell Old Phones & Doorstep Mobile Repair" },
      { property: "og:description", content: "Sell your smartphone or book doorstep mobile repair with Revora across Mumbai, Navi Mumbai and Thane. Request a direct quote and pickup on WhatsApp." },
      { property: "og:url", content: "https://www.sellrepairphone.org/" },
      { property: "og:image", content: "https://www.sellrepairphone.org/images/revora-logo-transparent.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Revora | Sell Old Phones & Doorstep Mobile Repair" },
      { name: "twitter:description", content: "Sell your smartphone or book doorstep mobile repair with Revora across Mumbai, Navi Mumbai and Thane. Request a direct quote and pickup on WhatsApp." },
      { name: "twitter:image", content: "https://www.sellrepairphone.org/images/revora-logo-transparent.png" },
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
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://www.sellrepairphone.org/" },
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

function RouteProgressBar() {
  const router = useRouter();
  const isLoading = router.state.status === 'pending';
  
  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, height: '2px', backgroundColor: '#007F5F', zIndex: 10000,
        transition: 'width 200ms ease-out, opacity 200ms ease-out',
        width: isLoading ? '60%' : '100%',
        opacity: isLoading ? 1 : 0,
        pointerEvents: 'none'
      }}
    />
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouteProgressBar />
      <Outlet />
      <ClientOnlyToaster />
    </QueryClientProvider>
  );
}
