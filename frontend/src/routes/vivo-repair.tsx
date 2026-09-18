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

const VIVO_SERVICES = [
  {
    title: "Curved AMOLED Display Replacement",
    desc: "3D curved edge AMOLED panels with optical in-display fingerprint sensor recalibration and original 120Hz refresh rates.",
    time: "35 - 50 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "FlashCharge 80W / 120W Port Dock",
    desc: "Original Type-C sub-board replacement preserving proprietary Vivo and iQOO FlashCharge protocols.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Zeiss Gimbal & Periscope Camera Module",
    desc: "Optical image stabilization (OIS) gimbal repair and sapphire camera glass replacement for Vivo X-series flagships.",
    time: "45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Dual-Cell Battery Replacement",
    desc: "Safe replacement of fast-draining or swollen batteries with factory safety thermistors.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "Do you repair both Vivo and iQOO smartphones?",
    answer:
      "Yes! We service all Vivo X-series, V-series, Y-series, and iQOO gaming smartphones with OEM parts and cleanroom diagnostic equipment.",
  },
  {
    question: "Does the in-display fingerprint sensor work after curved AMOLED screen replacement?",
    answer:
      "Yes. We use original curved AMOLED displays that support optical in-display fingerprint authentication, followed by optical recalibration.",
  },
  {
    question: "What warranty do you provide on Vivo repairs?",
    answer:
      "All Vivo and iQOO repairs come backed by ReviveTech's 90-Day VIP Warranty covering touch accuracy, display quality, and replacement parts.",
  },
];

export const Route = createFileRoute("/vivo-repair")({
  head: () => ({
    meta: [
      {
        title: "Vivo & iQOO Repair Near Me — Curved Screen, Camera & Battery Fix | ReviveTech",
      },
      {
        name: "description",
        content:
          "Expert Vivo & iQOO phone repair. Curved AMOLED screen replacement, FlashCharge port, Zeiss camera repair & battery swap. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "Vivo repair, iQOO repair, Vivo repair near me, Vivo screen replacement, Vivo service center, Vivo FlashCharge repair, Vivo battery replacement, Vivo X100 repair, Vivo V30 repair",
      },
      {
        property: "og:title",
        content: "Vivo & iQOO Repair Near Me — Curved Screen, Camera & Battery Fix | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Certified repairs for Vivo and iQOO. FlashCharge retention, curved AMOLED screen replacement, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/vivo-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/vivo-repair` }],
  }),
  component: VivoRepairPage,
});

function VivoRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Vivo Repair", url: `${SITE_URL}/vivo-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Vivo & iQOO Smartphone Repair Service",
    description:
      "Specialized cleanroom repairs for Vivo and iQOO phones including curved AMOLED screen replacement, FlashCharge sub-boards, and Zeiss camera gimbal repairs.",
    serviceType: "Vivo Mobile Repair",
    url: `${SITE_URL}/vivo-repair`,
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
            <span className="text-purple-400 font-medium">Vivo Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Curved AMOLED Specialists • FlashCharge Protocol Retained
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                Vivo & iQOO Phone Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Cracked curved AMOLED, broken Zeiss camera gimbal, or slow FlashCharge? ReviveTech provides certified component replacements with a 90-day warranty and free doorstep collection.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Vivo Repair Online</span>
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
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Free Doorstep Collection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Vivo & iQOO Specialized Services
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Optical vacuum lamination and certified FlashCharge hardware components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VIVO_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
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
                  <span className="text-xs text-blue-300 font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-white hover:text-blue-300 flex items-center gap-1"
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
              Frequently Asked Questions About Vivo Repairs
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
