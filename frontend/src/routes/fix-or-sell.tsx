import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SeoJsonLd, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";
import { ArrowRight, Wrench, ShoppingBag } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Route = createFileRoute("/fix-or-sell")({
  head: () => ({
    meta: [
      { title: "Should I Fix or Sell My Broken Phone? | Revora" },
      { name: "description", content: "Compare the real costs of high-grade OEM screen replacement versus purchasing a brand new smartphone. Make the mathematically superior choice." },
      { property: "og:title", content: "Should I Fix or Sell My Broken Phone? | Revora" },
      { property: "og:description", content: "Compare the real costs of high-grade OEM screen replacement versus purchasing a brand new smartphone." },
      { property: "og:url", content: `${SITE_URL}/fix-or-sell` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fix-or-sell` }],
  }),
  component: FixOrSellPage,
});

function FixOrSellPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Fix or Sell", url: `${SITE_URL}/fix-or-sell` },
  ]);

  const articleSchema = {
    "@type": "Article",
    "@id": `${SITE_URL}/fix-or-sell#article`,
    headline: "Should I Fix or Sell My Broken Phone?",
    description: "Compare the real costs of repair versus purchasing a brand new smartphone.",
    author: { "@type": "Organization", name: siteConfig.brandName },
    publisher: { "@id": `${SITE_URL}/#org` },
    datePublished: "2026-10-09T00:00:00+00:00",
    dateModified: "2026-10-09T00:00:00+00:00",
  };

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, articleSchema]} />
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-line bg-white py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[13px] text-muted flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors p-1">Home</Link>
            <span>/</span>
            <span className="text-brand font-bold p-1">Repair Economics Guide</span>
          </div>
        </div>

        <article className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink leading-tight mb-6">
            Should I fix my broken phone or sell it and buy new?
          </h1>

          <p className="text-[16px] md:text-[18px] text-ink leading-relaxed font-medium bg-brand-50 border border-brand-200 p-6 rounded-2xl mb-10">
            The decision to repair or sell depends on <strong>depreciation math</strong>. Replacing an AMOLED or OLED panel on a 1-to-2-year-old flagship restores 100% usability for a fraction of the cost of a new device. However, if the logic board is severely crushed, selling it to <strong>Revora</strong> for salvage parts is often the smarter financial move.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full text-left text-[14px] md:text-[15px]">
              <tbody>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 w-1/3 font-bold text-ink">When to Repair</th><td className="py-4 px-6 text-muted">Screen damage, battery degradation, broken cameras, charging ports.</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">When to Sell</th><td className="py-4 px-6 text-muted">Motherboard destroyed, repair cost exceeds 50% of phone's current resale value.</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Repair Timeline</th><td className="py-4 px-6 text-muted">30-45 mins (Screens/Batteries)</td></tr>
                <tr><th className="bg-background py-4 px-6 font-bold text-ink">Payout Timeline</th><td className="py-4 px-6 text-muted">payment (Doorstep Pickup)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-ink mb-6">Depreciation Truths</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            A new ₹80,000 phone depreciates by roughly 30% the moment the seal is opened. When you buy a new phone, you are absorbing that massive initial depreciation hit all over again. In contrast, spending ₹8,000 on a high-grade OEM screen replacement protects your investment. Always ensure your repair center installs grade-A panels that preserve 120Hz refresh rates, true color calibration, and in-display fingerprint sensitivity.
          </p>

          <h2 className="text-2xl font-bold text-ink mb-6">The 50% Rule</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            Our master technicians recommend the 50% rule: If the total cost to repair your broken phone exceeds 50% of the phone's current market value (if it were working perfectly), you should sell it. Otherwise, repairing is the mathematically superior choice.
          </p>

          <h2 className="text-2xl font-bold text-ink mb-6">What about Pre-Loved Flagships?</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            If your phone is truly beyond economical repair, buying a certified pre-loved flagship from our store allows you to skip the heavy 30% depreciation hit of a brand new box. Every phone is bench-tested, sanitized, fitted with fresh battery cells, and backed by a 1-year Revora shield warranty.
          </p>

          <div className="mt-12 p-6 md:p-8 rounded-3xl bg-brand hover:bg-brand-600 transition text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Check the repair cost now</h3>
              <p className="text-[14px] text-white/90">Get a transparent quote in 10 seconds.</p>
            </div>
            <Link to="/repair" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-ink font-bold text-[15px] transition focus-ring shadow-sm whitespace-nowrap">
              <Wrench className="w-5 h-5 text-brand" /> Repair Estimator
            </Link>
          </div>

          <div className="text-[13px] text-muted border-t border-line pt-6 mt-12 flex justify-between items-center">
            <span>Last updated: October 2026.</span>
            <Link to="/blog" className="font-bold text-brand hover:underline p-2 -m-2">Back to Guides</Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
