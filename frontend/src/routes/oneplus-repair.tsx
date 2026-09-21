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

const ONEPLUS_SERVICES = [
  {
    title: "Fluid AMOLED Display Replacement",
    desc: "120Hz ProXDR AMOLED panels with accurate color tuning, original touch response, and in-display fingerprint scanner recalibration.",
    time: "35 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "OnePlus Green Line Screen Fix",
    desc: "Specialized laser micro-bonding for vertical green or pink lines appearing on OnePlus 9, 10, and 11 series AMOLED displays.",
    time: "Same-Day",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Warp & SuperVOOC Fast Charging Sub-Board",
    desc: "Sub-board dock replacement retaining 65W, 80W, and 100W SuperVOOC rapid charging protocols with zero thermal throttling.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Dual-Cell Battery Swap",
    desc: "Original dual-cell battery assemblies providing all-day power with zero overheating and genuine battery health stats.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Alert Slider & Volume Flex Cable Repair",
    desc: "Hardware restoration for sticky, unresponsive, or damaged 3-stage alert sliders and volume buttons.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "OxygenOS CrashDump / Motherboard Repair",
    desc: "Qualcomm Snapdragon CPU reballing and Qualcomm crashdump mode recovery for sudden dead OnePlus devices.",
    time: "Same-Day / 24h",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "OnePlus green line repair: Can you fix the vertical line without changing the entire screen?",
    answer:
      "Yes! In many cases where the AMOLED panel itself is undamaged and only the display driver Chip-on-Flex (COF) has micro-fractures, our laser bonding machine can fix the green line without replacing the entire expensive display assembly.",
  },
  {
    question: "Will SuperVOOC / Warp fast charging still work after charging port repair?",
    answer:
      "Yes. We exclusively install OEM sub-boards with genuine SuperVOOC protocol chips, retaining full 65W, 80W, and 100W rapid charging speeds.",
  },
  {
    question: "How long does OnePlus screen replacement take?",
    answer:
      "A complete OnePlus display replacement is executed in 35 to 45 minutes on our ESD-safe cleanroom bench. Free doorstep pickup is available.",
  },
  {
    question: "What warranty do you provide on OnePlus repairs?",
    answer:
      "All OnePlus phone repairs include Sagar Tech's 90-Day VIP Warranty covering touch accuracy, display performance, and craftsmanship.",
  },
];

export const Route = createFileRoute("/oneplus-repair")({
  head: () => ({
    meta: [
      {
        title: "OnePlus Repair Near Me — Screen, Green Line & Battery Fix | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Official-grade OnePlus phone repair. Fluid AMOLED screen replacement, green line laser fix, SuperVOOC charge port & battery swap. 90-day warranty & same-day service.",
      },
      {
        name: "keywords",
        content:
          "OnePlus repair, OnePlus repair near me, OnePlus screen replacement, OnePlus green line fix, OnePlus battery replacement, OnePlus service center, OnePlus charging port repair, OnePlus 12 repair, OnePlus 11 repair",
      },
      {
        property: "og:title",
        content: "OnePlus Repair Near Me — Screen, Green Line & Battery Fix | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Fast, certified OnePlus phone repairs. SuperVOOC fast-charge retention, green line laser repair, 90-day warranty, free doorstep pickup.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/oneplus-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/oneplus-repair` }],
  }),
  component: OnePlusRepairPage,
});

function OnePlusRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "OnePlus Repair", url: `${SITE_URL}/oneplus-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "OnePlus Smartphone Repair Service",
    description:
      "Specialized OnePlus phone repairs including 120Hz Fluid AMOLED screen replacement, green line laser fix, SuperVOOC fast-charging sub-boards, and CPU reballing.",
    serviceType: "OnePlus Mobile Repair",
    url: `${SITE_URL}/oneplus-repair`,
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
            <span className="text-purple-400 font-medium">OnePlus Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-red-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              Fluid AMOLED Specialists • SuperVOOC Protocol Retained
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
                OnePlus Phone Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              From OnePlus 12 and 11 Pro screens and vertical green line fixes to SuperVOOC charging docks and alert sliders, SellRepair provides cleanroom-grade repairs with 90-day warranty coverage and zero data loss.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book OnePlus Repair Online</span>
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
                <span>35-45 Minute Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>Free Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              OnePlus Repair Solutions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Factory calibrated optical and micro-electronic repair equipment for all OnePlus models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ONEPLUS_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400">
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
                  <span className="text-xs text-red-300 font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-white hover:text-red-300 flex items-center gap-1"
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
              Frequently Asked Questions About OnePlus Repairs
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
