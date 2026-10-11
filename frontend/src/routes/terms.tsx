import React from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import {
  SeoJsonLd,
  getBreadcrumbSchema,
  SITE_URL,
} from"../components/SeoJsonLd";
import { ShieldCheck, FileCheck, AlertCircle, Wrench, RefreshCw } from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title:"Terms of Service & 90-Day Warranty Policy — Revora",
      },
      {
        name:"description",
        content:
"Revora Terms of Service: Device trade-in valuation terms, ownership verification requirements, doorstep repair conditions, and 90-Day Priority Warranty terms.",
      },
      {
        name:"keywords",
        content:
"Revora terms of service, phone trade in terms, mobile repair warranty, 90 day repair warranty India, phone buyback terms",
      },
      {
        property:"og:title",
        content:"Terms of Service & 90-Day Warranty Policy — Revora",
      },
      {
        property:"og:description",
        content:
"Read Revora's official service terms, trade-in quote policies, and 90-Day Priority Warranty guidelines.",
      },
      {
        property:"og:url",
        content: `${SITE_URL}/terms`,
      },
      {
        property:"og:image",
        content: `${SITE_URL}/images/hero-phone.jpg`,
      },
      {
        name:"twitter:card",
        content:"summary_large_image",
      },
    ],
    links: [{ rel:"canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name:"Home", url: SITE_URL },
    { name:"Terms of Service", url: `${SITE_URL}/terms` },
  ]);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-line bg-white py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-muted flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">Terms of Service</span>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-b border-line bg-gradient-to-b from-brand-tint/50 via-transparent to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-4">
            <FileCheck className="w-4 h-4 text-brand" />
            <span>Transparent Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Terms of Service & Warranty Conditions
          </h1>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            Effective Date: October 3, 2026. By booking a repair, requesting a trade-in quote, or scheduling doorstep service with Revora, you agree to these service terms.
          </p>
        </section>

        {/* Content Body */}
        <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 text-muted text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-brand" />
              <span>1. Phone Valuation, Final Offer & Zero-Fee Decline Policy</span>
            </h2>
            <ul className="space-y-2 pl-5 list-disc text-muted">
              <li>
                <strong className="text-ink">Device Ownership Requirement:</strong> You confirm that you are the lawful owner of the device handed over for buyback and that the device is free from financial liens or illegal acquirements. Government ID verification is conducted for compliance.
              </li>
              <li>
                <strong className="text-ink">Doorstep Verification & Offer Confirmation:</strong> Initial quotations provided on WhatsApp are preliminary guides. The final offer is confirmed on the spot following a physical hardware and functional inspection by our verified doorstep technician.
              </li>
              <li>
                <strong className="text-ink">Zero-Fee Decline Guarantee:</strong> If the physical inspection reveals discrepancies and you choose not to accept the final offer, you may decline with zero penalty. Your device is handed back immediately with zero cancellation fee and zero doorstep visiting charges.
              </li>
              <li>
                <strong className="text-ink">Instant Direct Payment:</strong> Once you confirm and accept the offer, payment is transferred immediately via UPI or direct bank transfer before device handover.
              </li>
              <li>
                <strong className="text-ink">Account Unlinking:</strong> Before handing over a working device, you must remove all iCloud (iOS) or Google FRP accounts.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <Wrench className="w-5 h-5 text-brand" />
              <span>2. 90-Day Repair Warranty Terms</span>
            </h2>
            <p>
              Every screen, battery, or hardware component repair performed by Revora is backed by our official <strong className="text-ink">90-Day Warranty</strong>:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-muted">
              <li>
                <strong className="text-ink">What is Covered:</strong> Touch digitizer responsiveness failures, display flickering, battery capacity defects, and replacement component manufacturing flaws.
              </li>
              <li>
                <strong className="text-ink">What is Excluded:</strong> Subsequent accidental physical drops, cracked glass incurred after repair handover, liquid immersion, or unauthorized third-party tampering.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand" />
              <span>3. Doorstep Service, Booking & Cancellation</span>
            </h2>
            <p>
              Doorstep pickup and repair services operate across Mumbai, Thane, and Navi Mumbai with zero visiting fees. You may reschedule or cancel your booking window at any time prior to technician dispatch with zero penalty.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-ink flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-brand" />
              <span>4. Limitation of Liability & Data Backup</span>
            </h2>
            <p>
              While Revora exercises precision precautions, we strongly advise backing up device data prior to motherboard repairs. Revora is not liable for pre-existing internal liquid corrosion damage or worn NAND flash chips on non-booting devices.
            </p>
          </div>

          {/* Contact Block */}
          <div className="p-6 rounded-2xl bg-white border border-line space-y-2 shadow-xs">
            <h3 className="text-base font-bold text-ink">Need Clarification on Warranty or Service Terms?</h3>
            <p className="text-xs text-muted">
              Contact our support team directly at <a href="mailto:support@sellrepairphone.org" className="text-brand hover:underline font-medium">support@sellrepairphone.org</a> or call/WhatsApp <a href="tel:+918591770877" className="text-brand hover:underline font-medium">+91 85917 70877</a>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

