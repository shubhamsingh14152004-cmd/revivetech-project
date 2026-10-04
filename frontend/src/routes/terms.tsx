import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import { ShieldCheck, FileCheck, AlertCircle, Wrench, RefreshCw } from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title: "Terms of Service & 90-Day Warranty Policy — Revora",
      },
      {
        name: "description",
        content:
          "Revora Terms of Service: Device trade-in valuation terms, ownership verification requirements, doorstep repair conditions, and 90-Day VIP Warranty terms.",
      },
      {
        name: "keywords",
        content:
          "Revora terms of service, phone trade in terms, mobile repair warranty, 90 day repair warranty India, phone buyback terms",
      },
      {
        property: "og:title",
        content: "Terms of Service & 90-Day Warranty Policy — Revora",
      },
      {
        property: "og:description",
        content:
          "Read Revora's official service terms, trade-in quote policies, and 90-Day VIP Warranty guidelines.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/terms`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/hero-phone.jpg`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Terms of Service", url: `${SITE_URL}/terms` },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-[#475569] flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-semibold">Terms of Service</span>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-transparent to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-4">
            <FileCheck className="w-4 h-4 text-[#007F5F]" />
            <span>Transparent Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A26] tracking-tight">
            Terms of Service & Warranty Conditions
          </h1>
          <p className="mt-3 text-[#475569] text-sm sm:text-base leading-relaxed">
            Effective Date: October 3, 2026. By booking a repair, requesting a trade-in quote, or scheduling doorstep service with Revora, you agree to these service terms.
          </p>
        </section>

        {/* Content Body */}
        <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 text-[#475569] text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#007F5F]" />
              <span>1. Phone Trade-In & Buyback Lock-In Terms</span>
            </h2>
            <ul className="space-y-2 pl-5 list-disc text-[#475569]">
              <li>
                <strong className="text-[#102A26]">Device Ownership Guarantee:</strong> You confirm that you are the lawful owner of the device handed over for buyback and that the device is free from financial liens or illegal acquirements.
              </li>
              <li>
                <strong className="text-[#102A26]">Physical Inspection Verification:</strong> Online price calculations are initial estimations. Final payout is confirmed upon physical inspection by our verified doorstep technician. If the physical condition matches your selection, the full locked quote is transferred instantly via UPI or Cash.
              </li>
              <li>
                <strong className="text-[#102A26]">Account Unlinking:</strong> Before handing over a device, you must sign out of iCloud (iOS) or Google FRP accounts.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#007F5F]" />
              <span>2. 90-Day VIP Repair Warranty Terms</span>
            </h2>
            <p>
              Every certified screen, battery, or hardware component repair performed by Revora is backed by our official <strong className="text-[#102A26]">90-Day VIP Warranty</strong>:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-[#475569]">
              <li>
                <strong className="text-[#102A26]">What is Covered:</strong> Touch digitizer responsiveness failures, display flickering, battery capacity defects, and replacement component manufacturing flaws.
              </li>
              <li>
                <strong className="text-[#102A26]">What is Excluded:</strong> Subsequent accidental physical drops, cracked glass incurred after repair handover, liquid immersion, or unauthorized third-party tampering.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#007F5F]" />
              <span>3. Doorstep Service & Courier Logistics</span>
            </h2>
            <p>
              Free doorstep pickup and delivery services operate across major metro hubs. For mail-in repairs outside doorstep zones, insured courier shipping kits are dispatched to your registered address.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#007F5F]" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p>
              While Revora exercises precision precautions, we strongly advise backing up device data prior to micro-soldering motherboard repairs. Revora is not liable for pre-existing liquid corrosion damage or NAND flash chip wear.
            </p>
          </div>

          {/* Contact Block */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2 shadow-xs">
            <h3 className="text-base font-bold text-[#102A26]">Need Clarification on Warranty or Service Terms?</h3>
            <p className="text-xs text-[#6B7280]">
              Contact our support coordinator at <a href="mailto:supportsellphone@gmail.com" className="text-[#007F5F] hover:underline font-medium">supportsellphone@gmail.com</a> or call <a href="tel:8591770877" className="text-[#007F5F] hover:underline font-medium">+91 8591770877</a>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

