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
  Apple,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const IPHONE_MODELS = [
  "iPhone 16 Pro Max",
  "iPhone 16 Pro",
  "iPhone 16 Plus",
  "iPhone 16",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13",
  "iPhone 12 Pro Max",
  "iPhone 12",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone XR / XS",
  "iPhone X",
];

const IPHONE_SERVICES = [
  {
    title: "True Tone OLED Screen Replacement",
    desc: "Restore authentic colors, 120Hz ProMotion fluid touch, and original True Tone serialization calibration using certified OEM-grade display assemblies.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Battery Replacement",
    desc: "Eliminate unexpected shutdowns and sluggish throttling. We install brand-new high-cycle lithium-ion cells with 100% maximum capacity calibration.",
    time: "25 - 35 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Back Glass Laser Precision Removal",
    desc: "Cold-laser chassis de-bonding allows shattered rear glass replacement without heating sensitive internal logic boards or camera magnets.",
    time: "60 - 90 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Face ID & Front Sensor Restoration",
    desc: "Micro-soldering repair for dot projector, flood illuminator, and ambient light sensors to recover disabled Face ID functionality safely.",
    time: "60 - 120 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Lightning / USB-C Port Replacement",
    desc: "Fix loose cables, slow charging, and data transfer failures with clean flex cable dock swaps or debris extraction.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Motherboard BGA Micro-Soldering",
    desc: "Dual-layer logic board separation, short-circuit clearing, audio IC, power management IC (PMIC), and NAND chip repairs.",
    time: "Same-Day / 24h",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "Will Face ID and True Tone continue working after screen replacement?",
    answer:
      "Yes! Unlike uncertified street shops where Face ID and True Tone are permanently lost, ReviveTech technicians use specialized EEPROM programmers to migrate original screen serial data, maintaining full True Tone and Face ID security.",
  },
  {
    question: "How long does an iPhone screen or battery swap take?",
    answer:
      "Standard iPhone screen replacements and battery swaps are completed in 30 to 45 minutes on our static-free cleanroom benches. Doorstep pickup and courier return are also available.",
  },
  {
    question: "Do you fix water damaged or bootlooped iPhones (Apple logo stuck)?",
    answer:
      "Yes. We specialize in component-level iPhone micro-soldering. If your iPhone is stuck in an Apple loop or dropped in water, we isolate short-circuits on the sandwiched motherboard rather than pushing an expensive board replacement.",
  },
  {
    question: "What warranty comes with iPhone repairs?",
    answer:
      "Every iPhone repair comes backed by ReviveTech's 90-Day VIP Warranty covering touch responsiveness, display flickering, and component integrity.",
  },
];

export const Route = createFileRoute("/iphone-repair")({
  head: () => ({
    meta: [
      {
        title: "iPhone Repair Near Me — Apple Screen & Battery Replacement | ReviveTech",
      },
      {
        name: "description",
        content:
          "Certified iPhone repair service. OEM TrueTone OLED screens, high-capacity battery swap, back glass laser repair & Face ID fix. 90-day warranty & same-day service.",
      },
      {
        name: "keywords",
        content:
          "iPhone repair near me, Apple phone repair, iPhone screen replacement, iPhone battery replacement, iPhone back glass repair, fix iPhone near me, iPhone 16 repair, iPhone 15 repair, iPhone 14 repair, iPhone 13 repair",
      },
      {
        property: "og:title",
        content: "iPhone Repair Near Me — Apple Screen & Battery Replacement | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Fast OEM-grade iPhone screen and battery replacements with True Tone retention. 90-day warranty, cleanroom bench testing, free pickup.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/iphone-repair`,
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
    description:
      "Precision Apple iPhone repairs including TrueTone OLED display replacement, high-capacity battery swap, rear laser glass de-bonding, and logic board micro-soldering.",
    serviceType: "Apple Smartphone Repair",
    url: `${SITE_URL}/iphone-repair`,
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
            <span className="text-purple-400 font-medium">iPhone Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              True Tone & ProMotion Restored • 90-Day VIP Warranty
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Specialized{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                iPhone Repair Service
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Don't compromise your premium Apple iPhone with inferior third-party parts. ReviveTech provides certified OEM-grade display calibration, battery swaps, laser back glass separation, and logic board micro-soldering.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book iPhone Repair Online</span>
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
                <span>30-45 Minute Express Bench</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Free Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* iPhone Services Matrix */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              iPhone Repair Services We Provide
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Every repair is executed by ESD-certified master technicians with calibrated precision tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IPHONE_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
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
                  <span className="text-xs text-purple-300 font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-white hover:text-purple-300 flex items-center gap-1"
                  >
                    <span>Book Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Models Supported */}
        <section className="py-12 bg-[#0e0d15]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
              Supported Apple iPhone Models
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {IPHONE_MODELS.map((model, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs text-slate-300 hover:border-purple-500/40 hover:text-white transition-colors"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions About iPhone Repairs
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

          <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 to-slate-900 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white">Have a damaged iPhone you prefer to sell?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-4">
              Get an instant cash valuation for dead, broken, or used iPhones with free doorstep pickup.
            </p>
            <Link
              to="/sell-phone"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Sell Your iPhone for Instant Cash</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
