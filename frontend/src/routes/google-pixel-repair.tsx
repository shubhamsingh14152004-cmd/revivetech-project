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

const PIXEL_SERVICES = [
  {
    title: "Actua & Super Actua OLED Screen Replacement",
    desc: "OEM 120Hz LTPO OLED displays with Google Pixel fingerprint calibration software integration and factory color profiles.",
    time: "35 - 50 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Pixel Camera Bar Glass & Sensor Replacement",
    desc: "Specialized cold-laser removal and replacement of cracked visor camera bar glass without dust settling on 50MP sensors.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Tensor SoC Thermal & Battery Service",
    desc: "Replacement of fast-draining batteries and thermal paste/graphite sheet reapplication to prevent Tensor overheating throttling.",
    time: "30 - 40 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "USB-C PD Fast Charging Port Replacement",
    desc: "OEM USB Power Delivery (USB-PD) charging flex swap resolving slow charging and computer detection issues.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "Does the fingerprint sensor work after Google Pixel screen replacement?",
    answer:
      "Yes! When replacing a Pixel display, we run Google's official optical fingerprint calibration tool to pair the new sensor with your Pixel's Titan M2 security chip.",
  },
  {
    question: "Can you fix cracked glass on the iconic Google Pixel camera bar?",
    answer:
      "Yes. We specialize in laser separation of the rear camera visor glass, ensuring no glass shards or dust compromise the lenses or periscope prism.",
  },
  {
    question: "What warranty do you provide on Google Pixel repairs?",
    answer:
      "All Google Pixel repairs come backed by ReviveTech's 90-Day VIP Warranty covering touch accuracy, display quality, and replacement parts.",
  },
];

export const Route = createFileRoute("/google-pixel-repair")({
  head: () => ({
    meta: [
      {
        title: "Google Pixel Repair Near Me — Actua OLED Screen & Camera Fix | ReviveTech",
      },
      {
        name: "description",
        content:
          "Expert Google Pixel repair. Actua OLED screen replacement, fingerprint calibration, camera bar glass repair & battery swap for Pixel 9, 8 & 7. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "Google Pixel repair, Pixel repair near me, Google Pixel service center, Pixel screen replacement, Pixel camera bar repair, Pixel battery replacement, Pixel 9 repair, Pixel 8 repair, Pixel 7 repair",
      },
      {
        property: "og:title",
        content: "Google Pixel Repair Near Me — Actua OLED Screen & Camera Fix | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Certified repairs for Google Pixel 9, 8, and 7 series. Fingerprint calibration, camera bar glass replacement, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/google-pixel-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/google-pixel-repair` }],
  }),
  component: GooglePixelRepairPage,
});

function GooglePixelRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Google Pixel Repair", url: `${SITE_URL}/google-pixel-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Google Pixel Smartphone Repair Service",
    description:
      "Cleanroom repair for Google Pixel smartphones including Actua OLED screen replacement, Titan M2 fingerprint calibration, and camera visor glass repair.",
    serviceType: "Google Pixel Mobile Repair",
    url: `${SITE_URL}/google-pixel-repair`,
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
            <span className="text-purple-400 font-medium">Google Pixel Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Google Pixel Specialists • Fingerprint Calibration Software
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-300">
                Google Pixel Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              From Pixel 9, 8 Pro, and 7 Actua OLED screen replacements and camera bar visor glass fixes to Tensor thermal service and battery swaps, ReviveTech provides cleanroom-grade repairs with 90-day warranty coverage.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Pixel Repair Online</span>
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
              Google Pixel Specialized Services
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Optical fingerprint recalibration and camera visor restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PIXEL_SERVICES.map((srv, idx) => (
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
              Frequently Asked Questions About Google Pixel Repairs
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
