import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TradeInCalculator } from "../components/TradeInCalculator";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  ShieldCheck,
  Building2,
  Lock,
  Recycle,
  Coins,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  Truck,
  PhoneCall,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "What is the difference between trade-in and selling for cash?",
    answer:
      "At Sagar Tech, both options provide upfront liquidity. You can choose direct instant cash (via UPI or bank transfer) or receive a premium credit voucher with bonus value toward a certified refurbished phone upgrade.",
  },
  {
    question: "Do you accept corporate and bulk phone buyback orders?",
    answer:
      "Yes. We support corporate fleet upgrades, IT asset disposition (ITAD), and bulk enterprise smartphone buybacks. We provide formal GST invoices, serialised asset reconciliation reports, and certified NIST 800-88 data sanitization certificates.",
  },
  {
    question: "How is device data sanitized before refurbishing or recycling?",
    answer:
      "Every single device enters our digital sanitization dock where proprietary firmware flashing overwrites internal flash storage blocks. We provide digital Certificates of Erasure upon request.",
  },
  {
    question: "What happens to phones that cannot be repaired or refurbished?",
    answer:
      "Non-recoverable mobile phones are routed through our zero-landfill e-waste recycling pipeline. Hazardous elements like lithium and lead are safely sequestered, while precious metals (gold, copper, rare-earths) are reclaimed.",
  },
];

export const Route = createFileRoute("/buyback")({
  head: () => ({
    meta: [
      {
        title: "Mobile Phone Buyback & Trade-In Program | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Upgrade and trade in old, damaged, or company fleet phones. Best market valuation, zero-landfill e-waste recycling & NIST 800-88 certified data destruction.",
      },
      {
        name: "keywords",
        content:
          "phone buyback, mobile phone trade in, corporate phone buyback, smartphone trade in program, itad phone recycling, device buyback, sell old phone fleet",
      },
      {
        property: "og:title",
        content: "Mobile Phone Buyback & Trade-In Program | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Consumer & enterprise mobile phone buyback. Guaranteed highest value, certified data destruction, and fast doorstep logistics.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/buyback`,
      },
      {
        property: "og:image",
        content: heroPhone,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/buyback` }],
  }),
  component: BuybackPage,
});

function BuybackPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Buyback Program", url: `${SITE_URL}/buyback` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Smartphone Buyback & IT Asset Disposition (ITAD)",
    description:
      "Enterprise and individual smartphone trade-in and buyback solutions with verified data destruction and instant payouts.",
    serviceType: "Electronics Buyback & Recycling",
    url: `${SITE_URL}/buyback`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Buyback Program</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Recycle className="w-3.5 h-3.5 text-emerald-400" />
              Circular Economy • Zero-Landfill Mobile Recycling
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise & Individual{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Phone Buyback Program
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Maximize the residual recovery value of obsolete or defective smartphones. We service individuals upgrading their daily driver and enterprises cycling company mobile fleets with verifiable chain-of-custody documentation.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified NIST 800-88 Wiping</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Asset Disposition Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Instant Bulk / Single Liquidation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trade-in Calculator Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Instant Buyback Valuation
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Get an instant guaranteed buyback price for consumer phones right now.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <TradeInCalculator />
          </div>
        </section>

        {/* Corporate Fleet Buyback Highlights */}
        <section className="py-14 bg-[#0e0d15]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-semibold mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  For Corporates & Startups
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Corporate IT Asset Disposition (ITAD) for Mobile Devices
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                  Upgrading your company sales team phones or retiring executive iPhones? SellRepair handles complete end-to-end logistics, serialized inventory audits, cryptographic flash storage sanitization, and bulk wire transfer settlement.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Cryptographic Data Erasure</h4>
                      <p className="text-xs text-slate-400">Complete sanitization exceeding international privacy compliance standards (GDPR, HIPAA, and Indian DPDP Act).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Serialized Asset Reconciliation</h4>
                      <p className="text-xs text-slate-400">Detailed itemized manifests tracking IMEI, brand, model, battery health, and liquidation pricing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Insured Pan-India Logistics</h4>
                      <p className="text-xs text-slate-400">Tamper-evident transit boxes with insured direct collection from branch offices nationwide.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="tel:+918591770877"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-purple-900/30"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Corporate Desk: +91 8591770877</span>
                  </a>
                  <a
                    href="mailto:supportsellphone@gmail.com?subject=Corporate%20Buyback%20Inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-colors"
                  >
                    <span>Email Fleet Inquiry</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl font-extrabold text-purple-400">100%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Data Erasure Guarantee</div>
                  <p className="text-[11px] text-slate-400 mt-2">Certified tamper-proof destruction certificates generated for each serial number.</p>
                </div>
                <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl font-extrabold text-pink-400">24h</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Audit Settlement</div>
                  <p className="text-[11px] text-slate-400 mt-2">Swift inspection and immediate corporate wire transfer upon device receipt.</p>
                </div>
                <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl font-extrabold text-emerald-400">0%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Landfill Impact</div>
                  <p className="text-[11px] text-slate-400 mt-2">All unrecoverable components routed through authorized green e-waste smelters.</p>
                </div>
                <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl font-extrabold text-amber-400">Top-Tier</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Valuation Matrix</div>
                  <p className="text-[11px] text-slate-400 mt-2">Direct-to-refurbisher pipeline eliminates middlemen markdowns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Phone Buyback & Trade-In FAQs
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-900/50 border border-white/10 rounded-xl p-5 open:bg-slate-900/80 transition-colors"
              >
                <summary className="font-semibold text-white cursor-pointer flex items-center justify-between text-base">
                  <span>{faq.question}</span>
                  <span className="text-purple-400 group-open:rotate-180 transition-transform ml-4">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
