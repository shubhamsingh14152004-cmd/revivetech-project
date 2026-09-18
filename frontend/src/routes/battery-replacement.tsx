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
  BatteryCharging,
  AlertTriangle,
  Flame,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const BATTERY_SYMPTOMS = [
  {
    title: "Battery Health Below 80%",
    desc: "Apple iOS and Android power diagnostics display service warnings and throttle processor clock speeds, resulting in laggy animations.",
  },
  {
    title: "Unexpected Shutdowns",
    desc: "Device powers off abruptly at 20% to 40% battery charge under moderate loads like taking photos or making calls.",
  },
  {
    title: "Swollen or Bulging Battery",
    desc: "The battery has expanded, pushing the screen or back cover away from the chassis. This is an urgent fire hazard requiring immediate safe disposal.",
  },
  {
    title: "Rapid Battery Drain",
    desc: "The charge drops rapidly even in standby mode, requiring you to carry a power bank or charger everywhere.",
  },
];

const FAQS = [
  {
    question: "How long does a phone battery replacement take?",
    answer:
      "A smartphone battery swap takes approximately 25 to 35 minutes on our static-safe workbench. Technicians test charge acceptance, thermals, and BMS calibration before handoff.",
  },
  {
    question: "Do your replacement batteries show 100% health in iOS settings?",
    answer:
      "Yes. For Apple iPhones, we calibrate replacement high-cycle battery cells or transfer the original BMS controller flex so your device recognizes maximum battery capacity without non-genuine warning popups.",
  },
  {
    question: "Is a swollen phone battery dangerous?",
    answer:
      "Yes! A swollen lithium-ion battery indicates electrolyte breakdown and flammable gas accumulation. Continuing to charge a bulging battery can cause thermal runaway or fire. Do not puncture or press on it; bring it to ReviveTech immediately for safe extraction and eco-disposal.",
  },
  {
    question: "What warranty do you provide on replacement batteries?",
    answer:
      "All replacement batteries come with ReviveTech's 90-Day VIP Warranty covering rapid discharge, swelling, or premature capacity loss.",
  },
];

export const Route = createFileRoute("/battery-replacement")({
  head: () => ({
    meta: [
      {
        title: "Phone Battery Replacement Near Me — 30 Min Battery Swap | ReviveTech",
      },
      {
        name: "description",
        content:
          "Fast phone battery replacement for iPhone, Samsung, OnePlus & Xiaomi. High-capacity, OEM-tested cells with 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "phone battery replacement, mobile battery replacement near me, iPhone battery replacement, Samsung battery replacement, swollen phone battery fix, battery draining fast repair",
      },
      {
        property: "og:title",
        content: "Phone Battery Replacement Near Me — 30 Min Battery Swap | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Restore all-day battery life. Genuine high-cycle cells installed within 30 minutes with 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/battery-replacement`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/battery-replacement` }],
  }),
  component: BatteryReplacementPage,
});

function BatteryReplacementPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Battery Replacement", url: `${SITE_URL}/battery-replacement` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Smartphone Battery Replacement Service",
    description:
      "Professional replacement of degraded, rapid-draining, or swollen mobile phone batteries with certified high-cycle capacity cells.",
    serviceType: "Mobile Battery Repair",
    url: `${SITE_URL}/battery-replacement`,
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
            <span className="text-purple-400 font-medium">Battery Replacement</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              High-Capacity Grade-A Cells • Full Day Battery Life Restored
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Express Phone{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
                Battery Replacement
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Tired of constant low battery anxiety and mid-day shutdowns? ReviveTech installs high-density lithium cells engineered for maximum longevity and factory thermal stability, completed in just 30 minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Battery Swap Online</span>
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
                <span>25-35 Mins Fix</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                <span>100% Health Recalibration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Symptoms */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Signs Your Smartphone Battery Needs Urgent Replacement
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              If your phone demonstrates any of the following symptoms, replace the battery promptly before internal motherboard damage occurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BATTERY_SYMPTOMS.map((symp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{symp.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{symp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Battery Replacement FAQs
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
