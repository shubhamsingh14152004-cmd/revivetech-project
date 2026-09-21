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

const XIAOMI_SERVICES = [
  {
    title: "120W HyperCharge Charging Sub-Board",
    desc: "Original charging dock replacement supporting 67W and 120W HyperCharge with dual-charge pumps and safety temperature sensors.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "POCO & Redmi CPU Reballing (Sudden Death Fix)",
    desc: "Specialized micro-BGA reballing for POCO X3, X3 Pro, and Redmi Note devices suffering from sudden black screen reboot loops.",
    time: "Same-Day / 24h",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "AMOLED / DotDisplay Screen Replacement",
    desc: "120Hz AMOLED panels with accurate colors, high brightness, and 100% in-display fingerprint and touch digitizer calibration.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Battery Replacement",
    desc: "Brand new high-density lithium polymer battery cells matching factory 5000mAh+ capacity with zero fast-drain issues.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Camera Glass & Sensor Replacement",
    desc: "Sapphire rear camera lens replacement and 108MP / 200MP sensor swap for blurry photos and broken glass.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "MIUI / HyperOS Restart Loop Fix",
    desc: "Motherboard PMIC and eMMC / UFS flash storage repair for devices stuck on the Mi or HyperOS boot logo.",
    time: "Same-Day",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "How do you fix POCO X3 Pro sudden death / motherboard dead issue?",
    answer:
      "Sudden death on POCO X3 and Redmi Note series is typically caused by micro-cracking in the lead-free solder balls underneath the dual-stacked CPU and RAM due to thermal cycling. Our technicians remove, clean, and reball the processor with high-silver solder, permanently resolving the issue with a 90-day warranty.",
  },
  {
    question: "Will 67W or 120W HyperCharge still work after charging port replacement?",
    answer:
      "Yes. We install OEM charging sub-boards featuring certified charge IC controllers so your Xiaomi or Redmi phone continues charging at full 67W or 120W speeds.",
  },
  {
    question: "Do you repair both Redmi and POCO phones?",
    answer:
      "Yes! SellRepair provides comprehensive cleanroom hardware and motherboard repair for all Xiaomi, Redmi, and POCO smartphones.",
  },
  {
    question: "What warranty do you provide on Xiaomi repairs?",
    answer:
      "Every Xiaomi repair includes ReviveTech's 90-Day VIP Warranty covering touch accuracy, display performance, and parts integrity.",
  },
];

export const Route = createFileRoute("/xiaomi-repair")({
  head: () => ({
    meta: [
      {
        title: "Xiaomi, Redmi & POCO Repair Near Me — CPU Reball & Screen Fix | SellRepair",
      },
      {
        name: "description",
        content:
          "Expert Xiaomi, Redmi & POCO phone repair. POCO X3 CPU reballing, AMOLED screen replacement, 120W HyperCharge port & battery swap. 90-day warranty & same-day service.",
      },
      {
        name: "keywords",
        content:
          "Xiaomi repair, Redmi repair, POCO repair, Xiaomi service center, Redmi screen replacement, POCO CPU reballing, POCO X3 dead repair, Redmi battery replacement, Xiaomi repair near me",
      },
      {
        property: "og:title",
        content: "Xiaomi, Redmi & POCO Repair Near Me — CPU Reball & Screen Fix | SellRepair",
      },
      {
        property: "og:description",
        content:
          "Specialized repair for Xiaomi, Redmi & POCO. Sudden death CPU reballing, AMOLED display replacement, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/xiaomi-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/xiaomi-repair` }],
  }),
  component: XiaomiRepairPage,
});

function XiaomiRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Xiaomi Repair", url: `${SITE_URL}/xiaomi-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Xiaomi, Redmi & POCO Smartphone Repair",
    description:
      "Cleanroom repair services for Xiaomi, Redmi, and POCO smartphones including CPU BGA reballing, AMOLED display replacement, and HyperCharge charging docks.",
    serviceType: "Xiaomi Mobile Repair",
    url: `${SITE_URL}/xiaomi-repair`,
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
            <span className="text-purple-400 font-medium">Xiaomi Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-orange-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              POCO & Redmi CPU Reball Specialists • 120W HyperCharge Ready
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                Xiaomi, Redmi & POCO Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Facing POCO sudden death, Redmi restart loops, or a cracked DotDisplay? SellRepair provides cleanroom motherboard micro-soldering, CPU reballing, and display replacement with 90-day warranty coverage.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Xiaomi Repair Online</span>
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
                <span>30-45 Minute Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Free Doorstep Collection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Xiaomi & Redmi Specialized Services
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              From CPU micro-BGA reballing to OEM AMOLED screen assemblies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {XIAOMI_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-orange-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
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
                  <span className="text-xs text-orange-300 font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-white hover:text-orange-300 flex items-center gap-1"
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
              Frequently Asked Questions About Xiaomi Repairs
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
