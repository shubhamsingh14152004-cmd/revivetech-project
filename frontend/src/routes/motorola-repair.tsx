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
  Cpu,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const MOTOROLA_SERVICES = [
  {
    title: "pOLED Curved & Flat Screen Replacement",
    desc: "Original 144Hz pOLED displays for Motorola Edge and Moto G series with 100% responsive touch and in-display fingerprint calibration.",
    time: "35 - 50 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Motorola Razr Foldable Display & Hinge Repair",
    desc: "Specialized Ultra Thin Glass (UTG) replacement, zero-gap teardrop hinge alignment, and crease recalibration.",
    time: "Same-Day / 24h",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "TurboPower 68W / 125W Charging Port Sub-Board",
    desc: "OEM Type-C dock replacement supporting original Motorola TurboPower fast charging protocols with zero heating.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Li-Ion Battery Swap",
    desc: "Factory-grade battery cell replacement restoring all-day endurance with full thermal sensor integration.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "Do you repair Motorola Razr flip folding phones?",
    answer:
      "Yes! Our cleanroom facility is equipped with folding screen vacuum jigs and micro-alignment tools specifically designed for Motorola Razr flip inner displays and teardrop hinges.",
  },
  {
    question: "Does TurboPower fast charging work after port repair?",
    answer:
      "Yes. We install OEM sub-boards featuring certified TurboPower controller ICs to maintain peak wattage.",
  },
  {
    question: "What warranty do you provide on Motorola repairs?",
    answer:
      "All Motorola phone repairs include Sagar Tech's 90-Day VIP Warranty covering touch accuracy, display performance, and craftsmanship.",
  },
];

export const Route = createFileRoute("/motorola-repair")({
  head: () => ({
    meta: [
      {
        title: "Motorola Repair Near Me — Edge, Razr & Moto G Screen & Battery Fix | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Expert Motorola phone repair. pOLED screen replacement, Razr folding hinge fix, TurboPower port & battery swap. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "Motorola repair, Moto repair near me, Motorola service center, Moto G screen replacement, Motorola Razr repair, Motorola battery replacement, Motorola Edge repair",
      },
      {
        property: "og:title",
        content: "Motorola Repair Near Me — Edge, Razr & Moto G Screen & Battery Fix | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Certified repairs for Motorola Edge, Razr, and Moto G series. TurboPower fast charge retention, pOLED screen replacement, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/motorola-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/motorola-repair` }],
  }),
  component: MotorolaRepairPage,
});

function MotorolaRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Motorola Repair", url: `${SITE_URL}/motorola-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Motorola Smartphone Repair Service",
    description:
      "Cleanroom repair for Motorola Edge, Razr foldables, and Moto G smartphones including pOLED display replacement, TurboPower sub-boards, and battery swaps.",
    serviceType: "Motorola Mobile Repair",
    url: `${SITE_URL}/motorola-repair`,
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
            <span className="text-purple-400 font-medium">Motorola Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Motorola Edge & Razr Specialists • TurboPower Ready
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
                Motorola Phone Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              From Motorola Edge curved pOLED screens and Razr folding hinge recalibration to Moto G battery replacements and TurboPower charging ports, SellRepair provides cleanroom-grade repairs with 90-day warranty coverage.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Motorola Repair Online</span>
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
                <span>35-50 Minute Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Free Doorstep Collection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Motorola Specialized Services
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Cleanroom pOLED screen lamination and TurboPower controller components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOTOROLA_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {srv.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-indigo-300 font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-white hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Book Fix</span>
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
              Frequently Asked Questions About Motorola Repairs
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
