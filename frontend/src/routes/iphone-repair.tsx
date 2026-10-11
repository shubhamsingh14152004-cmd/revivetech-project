import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import { Wrench, PhoneCall, CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { claim } from "../config/claims";

const FAQS = [
  {
    question: "Will Face ID and display continue working after screen replacement?",
    answer: "Yes. Revora certified technicians use specialized EEPROM programmers to migrate original screen serial data, maintaining full display functionality and Face ID security.",
  },
  {
    question: "How long does an iPhone screen or battery swap take?",
    answer: `Standard iPhone screen replacements and battery swaps are completed in 30 to 45 minutes on our lab benches. ${claim("doorstep_repair") ? claim("doorstep_repair") + " and courier return are also available." : "Courier return is also available."}`,
  },
  {
    question: "Do you fix water damaged or bootlooped iPhones (Apple logo stuck)?",
    answer: "Yes. We specialize in component-level iPhone motherboard repair. If your iPhone is stuck in an Apple loop or dropped in water, we isolate short-circuits rather than pushing an expensive board replacement.",
  },
  {
    question: "What warranty comes with iPhone repairs?",
    answer: `Every iPhone repair comes backed by Revora's ${claim("repair_warranty_90") || "90-Day Warranty"} covering touch responsiveness, display flickering, and component integrity.`,
  },
];

export const Route = createFileRoute("/iphone-repair")({
  head: () => ({
    meta: [
      { title: "iPhone Repair Near Me — Apple Screen & Battery Replacement | Revora" },
      { name: "description", content: `Fast high-quality iPhone screen and battery replacements in Mumbai. ${claim("repair_warranty_90") || "90-day warranty"}, lab bench testing, ${claim("free_pickup") || "free pickup"}. Book online.` },
      { property: "og:title", content: "iPhone Repair Near Me — Apple Screen & Battery Replacement | Revora" },
      { property: "og:description", content: `Fast high-quality iPhone screen and battery replacements in Mumbai. ${claim("repair_warranty_90") || "90-day warranty"}, lab bench testing, ${claim("free_pickup") || "free pickup"}.` },
      { property: "og:url", content: `${SITE_URL}/iphone-repair` },
      { property: "og:image", content: `${SITE_URL}/og/iphone-repair.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/iphone-repair` }],
  }),
  component: IphoneRepairPage,
});

function IphoneRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "iPhone Repair", url: `${SITE_URL}/iphone-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Apple iPhone Repair & Display Replacement",
    description: "Precision Apple iPhone repairs including display replacement, high-capacity battery swap, rear laser glass de-bonding, and motherboard component repair.",
    serviceType: "Apple Smartphone Repair",
    url: `${SITE_URL}/iphone-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-line bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[13px] text-muted flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors p-1">Home</Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-brand transition-colors p-1">Repair</Link>
            <span>/</span>
            <span className="text-brand font-bold p-1">iPhone Repair</span>
          </div>
        </div>

        <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink leading-tight mb-6">
            Where can I get reliable iPhone repair in Mumbai?
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-ink leading-relaxed font-medium bg-brand-50 border border-brand-200 p-6 rounded-2xl mb-10">
            <strong>Revora</strong> provides expert iPhone repair services across <strong>Mumbai, Navi Mumbai, and Thane</strong>. From display replacements to logic board repair, our technicians use high-quality parts. {claim("repair_time_45") || "Most screen and battery swaps are completed in under 45 minutes"} with a {claim("repair_warranty_90") || "90-day warranty"}.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full text-left text-[14px] md:text-[15px]">
              <tbody>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 w-1/3 font-bold text-ink">Service Time</th><td className="py-4 px-6 text-muted">{claim("repair_time_45") || "30 - 45 Minutes"}</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Warranty</th><td className="py-4 px-6 text-muted">{claim("repair_warranty_90") || "90-Day Warranty"}</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Service Area</th><td className="py-4 px-6 text-muted">Mumbai, Navi Mumbai, Thane {claim("free_pickup") ? `(${claim("free_pickup")})` : ""}</td></tr>
                <tr className="border-b border-line"><th className="bg-background py-4 px-6 font-bold text-ink">Payment Accepted</th><td className="py-4 px-6 text-muted">{claim("upi_payout") || "UPI, Bank Transfer"}</td></tr>
                <tr><th className="bg-background py-4 px-6 font-bold text-ink">Data Handling</th><td className="py-4 px-6 text-muted">100% Data Integrity preserved during hardware swaps</td></tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link to="/repair" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-brand hover:bg-brand-600 text-white font-bold text-[15px] transition focus-ring min-h-[48px] shadow-sm">
              <Wrench className="w-5 h-5" /> Book iPhone Repair
            </Link>
            <a href="tel:+918591770877" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-background border border-line text-ink font-bold text-[15px] transition focus-ring min-h-[48px] shadow-sm">
              <PhoneCall className="w-5 h-5 text-brand" /> +91 85917 70877
            </a>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold text-ink mb-6">How does the iPhone repair process work?</h2>
            <ol className="space-y-4 list-decimal list-inside text-[15px] md:text-[16px] text-muted leading-relaxed">
              <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Get a Quote:</strong> Select your iPhone model and issue on our online estimator for an instant upfront price.</li>
              <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Schedule Service:</strong> Book a free doorstep pickup or visit our Mumbai lab.</li>
              <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Expert Repair:</strong> Our ESD-certified technicians perform the repair using high-quality components.</li>
              <li className="p-4 rounded-xl bg-white border border-line"><strong className="text-ink">Quality Check & Return:</strong> Your device passes a 22-point diagnostic test before being securely returned.</li>
            </ol>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold text-ink mb-6">Can I fix an iPhone that won't turn on?</h2>
            <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-4">
              Yes, a dead iPhone can often be revived. {claim("buys_dead_phones") && `We also offer buybacks: ${claim("buys_dead_phones")}.`} We specialize in motherboard repairs. If your device suffered liquid damage or a power surge, our technicians will use thermal imaging and schematics to trace and replace shorted components.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, index) => (
                <details key={index} className="group bg-white border border-line rounded-2xl p-5 open:bg-brand-50/50 transition-colors shadow-sm">
                  <summary className="font-bold text-ink cursor-pointer flex items-center justify-between text-[15px] md:text-[16px] min-h-[48px] outline-none">
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-brand group-open:rotate-180 transition-transform shrink-0">▼</span>
                  </summary>
                  <p className="mt-4 text-[14px] md:text-[15px] text-muted leading-relaxed border-t border-line/50 pt-4" lang={faq.answer.includes("Kya aap") ? "hi-Latn" : "en"}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="text-[13px] text-muted border-t border-line pt-6 mb-8 flex justify-between items-center">
            <span>Last updated: October 2026.</span>
            <div className="flex gap-4">
              <Link to="/sell-phone" className="font-bold text-brand hover:underline p-2 -m-2">Sell your iPhone instead?</Link>
              <Link to="/contact" className="font-bold text-brand hover:underline p-2 -m-2">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
