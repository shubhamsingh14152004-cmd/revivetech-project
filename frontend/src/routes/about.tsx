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
        title: "About Revora — Certified Cleanroom Phone Repair & Buyback",
      },
      {
        name: "description",
        content:
          "Learn about Revora: India's trusted smartphone repair, buyback, and electronics circular economy platform. Cleanroom repair benches, NIST data sanitization & 90-day warranty.",
      },
      {
        name: "keywords",
        content:
          "about Revora, phone repair company, cleanroom mobile repair, trustworthy phone repair shop, certified smartphone technicians",
      },
      {
        property: "og:title",
        content: "About Revora — Certified Cleanroom Phone Repair & Buyback",
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
        content: `${SITE_URL}/images/hero-phone.jpg`,
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
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-[#E5E7EB] bg-white py-3 mb-6">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-medium">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-10 text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#007F5F]" />
            Engineering Excellence • Circular Technology
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A26] tracking-tight leading-tight">
            Reviving Hardware,{" "}
            <span className="text-[#007F5F]">
              Protecting Our Planet
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Revora was founded with a single mission: to eliminate throwaway culture in consumer electronics by pairing precision cleanroom micro-soldering with transparent, fair buybacks for old and dead mobile devices.
          </p>
        </section>

        {/* Core Pillars */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#102A26] mb-3">Cleanroom Precision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our central facility is outfitted with Class 1000 laminar flow hoods, anti-static ESD flooring, optical stereo microscopes, and high-frequency soldering stations to execute flawless BGA and flex repairs.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F] mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#102A26] mb-3">Absolute Data Privacy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe your personal photos, financial apps, and private chats are sacred. For repairs, we never ask for your device passcode unless strictly required for biometric calibration. For buybacks, we follow NIST 800-88 cryptographic wiping.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F] mb-6">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#102A26] mb-3">Zero-Landfill Philosophy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Millions of smartphones rot in drawers or poison soil in landfills. When you sell an unrepairable dead phone to Revora, functional ICs are reclaimed, and non-salvageable battery chemicals and motherboards are routed to licensed smelters.
              </p>
            </div>
          </div>
        </section>

        {/* 100-Point Inspection Commitment */}
        <section className="mb-14 rounded-3xl bg-white p-8 border border-[#E5E7EB] shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26]">
              Our 100-Point Quality Commitment
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Every smartphone repaired or refurbished by Revora undergoes rigorous algorithmic and manual stress tests.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm text-[#102A26]">
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Digitizer multi-touch matrix</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>OLED color uniform calibration</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Battery cycle capacity & thermals</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Face ID / Fingerprint sensor pass</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Front & rear optical autofocus</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Loudspeaker & earpiece decibel</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Dual microphone noise cancelling</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#007F5F] shrink-0" />
              <span>Wi-Fi 6, Bluetooth & 5G antenna</span>
            </div>
          </div>

          <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
            <Link
              to="/repair"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white text-sm font-semibold transition-colors shadow-md shadow-[#007F5F]/20"
            >
              <span>Explore Repair Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sell-phone"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#102A26] text-sm font-semibold transition-colors"
            >
              <span>Check Buyback Value</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
