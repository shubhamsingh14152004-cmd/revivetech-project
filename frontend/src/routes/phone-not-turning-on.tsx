import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SeoJsonLd, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";
import { ArrowRight, Wrench, IndianRupee } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Route = createFileRoute("/phone-not-turning-on")({
  head: () => ({
    meta: [
      { title: "My Phone is Not Turning On: How to Fix or Sell It | Revora" },
      { name: "description", content: "Phone won't turn on or charge? Learn the most common causes, how our lab recovers dead motherboards, and how to sell a dead phone for cash." },
      { property: "og:title", content: "My Phone is Not Turning On: How to Fix or Sell It | Revora" },
      { property: "og:description", content: "Learn the common causes of dead phones, how we fix them via micro-soldering, and how to sell them for salvage cash." },
      { property: "og:url", content: `${SITE_URL}/phone-not-turning-on` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/phone-not-turning-on` }],
  }),
  component: PhoneNotTurningOnPage,
});

function PhoneNotTurningOnPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Phone Not Turning On", url: `${SITE_URL}/phone-not-turning-on` },
  ]);

  const articleSchema = {
    "@type": "Article",
    "@id": `${SITE_URL}/phone-not-turning-on#article`,
    headline: "My Phone is Not Turning On: How to Fix or Sell It",
    description: "Phone won't turn on or charge? Learn the most common causes and how to fix or sell.",
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
            <span className="text-brand font-bold p-1">Dead Phone Guide</span>
          </div>
        </div>

        <article className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink leading-tight mb-6">
            My phone is not turning on. Can it be fixed?
          </h1>

          <p className="text-[16px] md:text-[18px] text-ink leading-relaxed font-medium bg-brand-50 border border-brand-200 p-6 rounded-2xl mb-10">
            Yes. <strong>Revora</strong> specializes in repairing phones that will not turn on or charge. Using advanced micro-soldering, we isolate short-circuits on the motherboard caused by liquid damage or power surges. If it's beyond repair, we offer assured cash payouts for the salvage value of the device.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full text-left text-[14px] md:text-[15px]">
              <tbody>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 w-1/3 font-bold text-ink">Common Causes</th><td className="py-4 px-6 text-muted">Liquid damage, shorted PMIC, dead battery, broken display.</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Repair Time</th><td className="py-4 px-6 text-muted">24 to 48 Hours for complex motherboard micro-soldering.</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Data Recovery</th><td className="py-4 px-6 text-muted">High success rate. Data is recovered when the board boots up.</td></tr>
                <tr><th className="bg-background py-4 px-6 font-bold text-ink">Buyback Alternative</th><td className="py-4 px-6 text-muted">payment paid for the remaining OEM parts (cameras, housing).</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-ink mb-6">Common reasons your phone is dead</h2>
          <ul className="space-y-4 list-disc list-inside text-[15px] md:text-[16px] text-muted leading-relaxed mb-10">
            <li><strong>Dead Display:</strong> The phone is actually on (vibrates or rings), but the screen is completely crushed or internally shorted.</li>
            <li><strong>Liquid Damage:</strong> Water infiltration has caused corrosion and short-circuited a major power rail (like VDD_MAIN on iPhones).</li>
            <li><strong>Dead Battery:</strong> The battery has swelled or chemically failed and refuses to accept a charge.</li>
            <li><strong>Broken Charging Port:</strong> The port is packed with lint or physically broken, preventing the battery from charging.</li>
          </ul>

          <h2 className="text-2xl font-bold text-ink mb-6">How our lab fixes dead motherboards</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            A phone that refuses to boot or charge is commonly called 'dead', but that does not make it useless scrap. Over 70% of internal smartphone modules operate independently of the main motherboard. If the motherboard itself is shorted, our technicians use thermal imaging cameras and schematics to trace the exact microscopic capacitor or chip that has failed. We then use hot air rework stations to remove and replace the faulty chip, allowing the device to boot normally and saving your data.
          </p>

          <h2 className="text-2xl font-bold text-ink mb-6">Repair vs Sell: Which makes sense?</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            If replacing a motherboard or performing extensive CPU reballing costs more than 50% of the phone's current second-hand value, selling the dead phone for immediate salvage cash is the mathematically superior choice. High-value salvage parts like Sony IMX camera sensors, pristine aluminum frames, and haptic feedback motors retain substantial trade value.
          </p>

          <div className="mt-12 p-6 md:p-8 rounded-3xl bg-background border border-line shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/repair" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-ink hover:bg-black text-white font-bold text-[15px] transition focus-ring shadow-sm">
              <Wrench className="w-5 h-5" /> Book Diagnostic Repair
            </Link>
            <Link to="/sell-dead-phone" className="flex-1 flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-brand hover:bg-brand-600 text-white font-bold text-[15px] transition focus-ring shadow-sm">
              <IndianRupee className="w-5 h-5" /> Get Cash for Dead Phone
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
