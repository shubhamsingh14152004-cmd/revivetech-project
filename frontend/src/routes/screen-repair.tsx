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
import {
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Wrench,
  Smartphone,
  Eye,
  Layers,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const SCREEN_TYPES = [
  {
    type: "Glass-Only OCA Refurbishing",
    suitableFor: "Glass is shattered, but display colors and touch work perfectly.",
    benefit: "Retain your 100% original OEM OLED panel and save up to 40% cost.",
    time: "45 - 60 Mins",
  },
  {
    type: "Full OLED / Dynamic AMOLED Assembly",
    suitableFor: "Display has black bleeding spots, colored lines, or touch has dead zones.",
    benefit: "Brand new OEM-grade 120Hz display with full TrueTone & fingerprint compatibility.",
    time: "30 - 45 Mins",
  },
  {
    type: "In-Cell FHD+ IPS LCD Display",
    suitableFor: "Budget-friendly screen replacement for mid-range and budget smartphones.",
    benefit: "High brightness, durable Corning Gorilla Glass with zero ghost-touch issues.",
    time: "30 Mins",
  },
];

const FAQS = [
  {
    question: "What is the difference between glass replacement and screen replacement?",
    answer:
      "A smartphone screen consists of three layers: outer protective glass, capacitive touch digitizer, and the internal OLED/LCD image panel. If your screen turns on clearly with no bleeding or lines, we can de-laminate only the broken glass using OCA lamination, saving you significant money. If the inner panel has ink spots, lines, or touch failure, the full screen assembly must be swapped.",
  },
  {
    question: "Will I lose my phone data during a screen replacement?",
    answer:
      "No! Screen replacements do not touch your motherboard, flash storage, or software. Your photos, contacts, WhatsApp messages, and apps remain 100% untouched.",
  },
  {
    question: "Do replacement screens come with a warranty?",
    answer:
      "Yes. Every screen installed by ReviveTech comes with a 90-Day VIP Warranty against touch unresponsiveness, ghost touching, color discolouration, and manufacturing defects.",
  },
  {
    question: "How long does mobile screen replacement take?",
    answer:
      "Express bench screen replacements are completed in approximately 30 to 45 minutes. Doorstep courier pickup and drop-off are also available across all serviced PIN codes.",
  },
];

export const Route = createFileRoute("/screen-repair")({
  head: () => ({
    meta: [
      {
        title: "Mobile Screen Replacement & Repair Near Me — 30 Min Fix | ReviveTech",
      },
      {
        name: "description",
        content:
          "Fast mobile phone screen replacement. OEM OLED & glass repair for iPhone, Samsung, OnePlus & Xiaomi within 30-45 mins. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "mobile screen replacement, phone screen repair, cracked phone screen, fix broken screen, phone display repair near me, iPhone screen replacement, Samsung screen repair",
      },
      {
        property: "og:title",
        content: "Mobile Screen Replacement & Repair Near Me — 30 Min Fix | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Cracked screen? Get same-day OEM screen replacement with 90-day warranty, zero data loss, and free doorstep collection.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/screen-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/screen-repair` }],
  }),
  component: ScreenRepairPage,
});

function ScreenRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Screen Repair", url: `${SITE_URL}/screen-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Mobile Phone Screen & Display Replacement",
    description:
      "Cleanroom display replacement for cracked glass, broken OLED panels, and touch digitizer failures across all major smartphone models.",
    serviceType: "Smartphone Screen Repair",
    url: `${SITE_URL}/screen-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-purple-400 transition-colors">
              Repair
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Screen Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              OEM-Grade Calibration • Zero Data Loss Guaranteed
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Same-Day Mobile{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Screen Replacement
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Don't let a shattered glass or unresponsive touch slow you down. ReviveTech replaces cracked smartphone screens with certified OEM-grade displays in just 30 to 45 minutes, backed by our comprehensive 90-Day VIP Warranty.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Screen Repair Online</span>
              </Link>
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Technician: +91 8591770877</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>30-45 Mins Average Fix</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Touch Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Free Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Screen Replacement Tiers */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Transparent Display Replacement Options
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              We diagnose your phone honestly so you only pay for what actually needs fixing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCREEN_TYPES.map((tier, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tier.type}</h3>
                  <div className="text-xs text-purple-300 font-semibold mb-2">
                    {tier.time} Express Turnaround
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    <strong className="text-slate-200">When to choose:</strong> {tier.suitableFor}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200">Key benefit:</strong> {tier.benefit}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    to="/repair"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <span>Check Price & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Screen Replacement FAQs
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
