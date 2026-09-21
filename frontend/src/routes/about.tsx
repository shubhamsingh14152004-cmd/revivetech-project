import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  ShieldCheck,
  Cpu,
  Recycle,
  Sparkles,
  Users,
  Award,
  CheckCircle2,
  Wrench,
  Lock,
  ArrowRight,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Sagar Tech — Certified Cleanroom Phone Repair & Buyback",
      },
      {
        name: "description",
        content:
          "Learn about Sagar Tech: India's trusted smartphone repair, buyback, and electronics circular economy platform. Cleanroom repair benches, NIST data sanitization & 90-day warranty.",
      },
      {
        name: "keywords",
        content:
          "about Sagar Tech, phone repair company, cleanroom mobile repair, trustworthy phone repair shop, certified smartphone technicians",
      },
      {
        property: "og:title",
        content: "About Sagar Tech — Certified Cleanroom Phone Repair & Buyback",
      },
      {
        property: "og:description",
        content:
          "Reviving smartphones with cleanroom engineering, zero e-waste philosophy, and transparent pricing.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/about`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About Us", url: `${SITE_URL}/about` },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Engineering Excellence • Circular Technology
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Reviving Hardware,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Protecting Our Planet
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Sagar Tech was founded with a single mission: to eliminate throwaway culture in consumer electronics by pairing precision cleanroom micro-soldering with transparent, fair buybacks for old and dead mobile devices.
            </p>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cleanroom Precision</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our central facility is outfitted with Class 1000 laminar flow hoods, anti-static ESD flooring, optical stereo microscopes, and high-frequency soldering stations to execute flawless BGA and flex repairs.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Absolute Data Privacy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We believe your personal photos, financial apps, and private chats are sacred. For repairs, we never ask for your device passcode unless strictly required for biometric calibration. For buybacks, we follow NIST 800-88 cryptographic wiping.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero-Landfill Philosophy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Millions of smartphones rot in drawers or poison soil in landfills. When you sell an unrepairable dead phone to Sagar Tech, functional ICs are reclaimed, and non-salvageable battery chemicals and motherboards are routed to licensed smelters.
              </p>
            </div>
          </div>
        </section>

        {/* 100-Point Inspection Commitment */}
        <section className="py-14 bg-[#0e0d15]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Our 100-Point Quality Commitment
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Every smartphone repaired or refurbished by Sagar Tech undergoes rigorous algorithmic and manual stress tests.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Digitizer multi-touch matrix</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OLED color uniform calibration</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Battery cycle capacity & thermals</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Face ID / Fingerprint sensor pass</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Front & rear optical autofocus</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Loudspeaker & earpiece decibel</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual microphone noise cancelling</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wi-Fi 6, Bluetooth & 5G antenna</span>
              </div>
            </div>

            <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-purple-900/30"
              >
                <span>Explore Repair Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/sell-phone"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-colors"
              >
                <span>Check Buyback Value</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
