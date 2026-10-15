import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SeoJsonLd, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";
import { ShieldCheck, ArrowRight, Smartphone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Route = createFileRoute("/how-we-wipe-your-data")({
  head: () => ({
    meta: [
      { title: "How We Wipe Your Data Before Buying Your Phone | Revora" },
      { name: "description", content: "Learn how Revora ensures 100% data security using military-grade NIST 800-88 wipes and physical memory destruction for dead phones." },
      { property: "og:title", content: "How We Wipe Your Data Before Buying Your Phone | Revora" },
      { property: "og:description", content: "Learn how Revora ensures 100% data security using military-grade NIST 800-88 wipes and physical memory destruction for dead phones." },
      { property: "og:url", content: `${SITE_URL}/how-we-wipe-your-data` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/how-we-wipe-your-data` }],
  }),
  component: DataWipePage,
});

function DataWipePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "How We Wipe Your Data", url: `${SITE_URL}/how-we-wipe-your-data` },
  ]);

  const articleSchema = {
    "@type": "Article",
    "@id": `${SITE_URL}/how-we-wipe-your-data#article`,
    headline: "How We Wipe Your Data Before Buying Your Phone",
    description: "Learn how Revora ensures 100% data security using military-grade NIST 800-88 wipes.",
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
            <span className="text-brand font-bold p-1">Data Security</span>
          </div>
        </div>

        <article className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink leading-tight mb-6">
            How do we safely wipe personal data before selling a phone?
          </h1>

          <p className="text-[16px] md:text-[18px] text-ink leading-relaxed font-medium bg-brand-50 border border-brand-200 p-6 rounded-2xl mb-10">
            <strong>Revora</strong> ensures your data is permanently destroyed before any phone is reused or recycled. For working devices, we use a <strong>NIST 800-88 military-grade 3-pass hardware wipe</strong>. For dead devices that cannot be turned on, the <strong>NAND flash memory chip is physically destroyed</strong>.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full text-left text-[14px] md:text-[15px]">
              <tbody>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 w-1/3 font-bold text-ink">Working Phones</th><td className="py-4 px-6 text-muted">NIST 800-88 Military-Grade Wipe</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Dead Phones</th><td className="py-4 px-6 text-muted">Physical Destruction of Memory Chip</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Cloud Accounts</th><td className="py-4 px-6 text-muted">Assistance provided to safely sign out of iCloud/Google accounts</td></tr>
                <tr><th className="bg-background py-4 px-6 font-bold text-ink">Data Recovery</th><td className="py-4 px-6 text-muted">100% impossible post-wipe</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-ink mb-6">4 Steps to Prepare Your Phone for Sale</h2>
          <ol className="space-y-4 list-decimal list-inside text-[15px] md:text-[16px] text-muted leading-relaxed mb-10">
            <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Backup Your Data:</strong> Ensure all photos, contacts, and files are backed up to Google Drive, iCloud, or local storage.</li>
            <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Sign Out of Cloud Accounts:</strong> Disabling 'Find My' (iOS) and removing Google Accounts removes Factory Reset Protection (FRP). This is required for selling the device.</li>
            <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Erase All Content and Settings:</strong> Perform an encrypted factory reset through your device's settings.</li>
            <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Remove SIM and SD Cards:</strong> Don't forget to take out your physical SIM and memory cards before handing over the device.</li>
          </ol>

          <h2 className="text-2xl font-bold text-ink mb-6">What if the phone screen is broken or completely dead?</h2>
          <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-6">
            If your screen is unresponsive, we can help you connect via USB-OTG with a mouse, or guide you through using Apple's iCloud Web 'Erase Device' feature. If the phone is completely dead and cannot boot, we physically extract and destroy the NAND memory chip so your data can never be recovered by anyone.
          </p>

          <div className="mt-12 p-6 md:p-8 rounded-3xl bg-brand hover:bg-brand-600 transition text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to sell securely?</h3>
              <p className="text-[14px] text-white/90">Get an instant quote and free doorstep pickup in Mumbai.</p>
            </div>
            <Link to="/sell-dead-phone" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-ink font-bold text-[15px] transition focus-ring shadow-sm whitespace-nowrap">
              <Smartphone className="w-5 h-5 text-brand" /> Get Buyback Price
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
