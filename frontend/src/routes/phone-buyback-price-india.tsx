import React, { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SeoJsonLd } from "../components/SeoJsonLd";

// This file exists to manage the visibility and SEO of the legacy /phone-buyback-price-india URL.
export const Route = createFileRoute("/phone-buyback-price-india")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Redirecting... | Revora" }
    ],
    links: [
      { rel: "canonical", href: "https://www.sellrepairphone.org/sell-phone" }
    ]
  }),
  component: RedirectComponent,
});

function RedirectComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/sell-phone", replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6 text-center">
      <SeoJsonLd schema={[]} />
      <div className="animate-pulse">
        <h1 className="text-xl font-bold text-ink mb-2">Redirecting to new Sell Phone page...</h1>
        <p className="text-muted text-sm">Please wait while we take you to the right place.</p>
      </div>
    </div>
  );
}
