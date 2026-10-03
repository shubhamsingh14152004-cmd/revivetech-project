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
      "All OnePlus phone repairs include Revora's 90-Day VIP Warranty covering touch accuracy, display performance, and craftsmanship.",
  },
];

export const Route = createFileRoute("/oneplus-repair")({
  head: () => ({
    meta: [
      {
        title: "OnePlus Repair Near Me — Screen, Green Line & Battery Fix | Revora",
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
        content: "OnePlus Repair Near Me — Screen, Green Line & Battery Fix | Revora",
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
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-[#007F5F] transition-colors">
              Repair
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-medium">OnePlus Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-[#FAFAF7] to-[#FAFAF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#007F5F]" />
              Fluid AMOLED Specialists • SuperVOOC Protocol Retained
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A26] tracking-tight leading-tight">
              Specialized{" "}
              <span className="text-[#007F5F]">
                OnePlus Phone Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              From OnePlus 12 and 11 Pro screens and vertical green line fixes to SuperVOOC charging docks and alert sliders, Revora provides cleanroom-grade repairs with 90-day warranty coverage and zero data loss.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white font-semibold text-sm shadow-md shadow-[#007F5F]/20 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book OnePlus Repair Online</span>
              </Link>
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#102A26] font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#007F5F]" />
                <span>Call Technician: +91 8591770877</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#007F5F]" />
                <span>35-45 Minute Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007F5F]" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#007F5F]" />
                <span>Free Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26]">
              OnePlus Repair Solutions
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Factory calibrated optical and micro-electronic repair equipment for all OnePlus models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ONEPLUS_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] p-6 rounded-2xl flex flex-col justify-between hover:border-[#007F5F] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#DDF5EA] text-[#005B46] border border-[#43C59E]/30 font-medium">
                      {srv.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102A26] mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-xs text-[#007F5F] font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-[#007F5F] hover:text-[#005B46] flex items-center gap-1"
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
        <section className="py-14 bg-[#FAFAF7] border-t border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] text-center mb-8">
              Frequently Asked Questions About OnePlus Repairs
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-[#E5E7EB] rounded-xl p-5 open:bg-slate-50 transition-colors shadow-xs"
                >
                  <summary className="font-semibold text-[#102A26] cursor-pointer flex items-center justify-between text-base">
                    <span>{faq.question}</span>
                    <span className="text-[#007F5F] group-open:rotate-180 transition-transform ml-4">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed border-t border-[#E5E7EB] pt-3">
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
