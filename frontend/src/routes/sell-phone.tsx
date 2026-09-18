import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TradeInCalculator } from "../components/TradeInCalculator";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  Smartphone,
  ShieldCheck,
  Zap,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Coins,
  AlertTriangle,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "Can I sell a completely dead phone that doesn't turn on?",
    answer:
      "Yes! ReviveTech buys completely dead, water-damaged, and motherboard-faulty phones. We salvage functional ICs, camera sensors, chassis components, and recycle hazardous materials responsibly. Simply choose 'Dead / Non-Functional' in our calculator for an instant cash quote.",
  },
  {
    question: "How and when do I receive payment for my old phone?",
    answer:
      "Payment is disbursed instantly on the spot. Once our doorstep executive performs a 5-minute visual and hardware verification, the agreed cash amount is transferred immediately via UPI (Google Pay, PhonePe, Paytm) or IMPS bank transfer.",
  },
  {
    question: "Is personal data safely removed from phones sold to ReviveTech?",
    answer:
      "Absolutely. For working devices, we perform military-grade NIST 800-88 cryptographic data erasure that renders prior photos, accounts, and files permanently unrecoverable. For dead devices, storage flash chips are demagnetized or shredded.",
  },
  {
    question: "Do I need the original box, bill, and charger to sell my phone?",
    answer:
      "Original accessories and invoice are not mandatory, but having the original box and bill can fetch you an extra trade-in bonus. A valid government photo ID (Aadhaar/Driving License) is required at pickup for anti-theft verification.",
  },
  {
    question: "Purana phone kaha beche: How does doorstep pickup work for selling used phones?",
    answer:
      "Aap ghar baithe apna purana mobile sell kar sakte hain. ReviveTech provides free doorstep collection across India. Simply calculate your device value online, schedule a pickup, and receive cash directly via UPI before our representative leaves.",
  },
  {
    question: "Phone bechna hai: Can I sell broken screen or dead phones here?",
    answer:
      "Haan! Chahe phone ki screen toot gayi ho, dead ho gaya ho, ya purana model ho, ReviveTech buys phones in all conditions with instant valuation and certified data wipe.",
  },
];

export const Route = createFileRoute("/sell-phone")({
  head: () => ({
    meta: [
      {
        title: "Sell Old Phone Online — Purana Phone Becho for Instant Cash | ReviveTech",
      },
      {
        name: "description",
        content:
          "Purana phone becho for highest instant cash! Sell old, used, broken, or dead mobile phones online. Free doorstep pickup, instant UPI payment & certified data wipe.",
      },
      {
        name: "keywords",
        content:
          "purana phone becho, purana mobile becho, phone bechna hai, mobile bechna hai, purana phone kaha beche, ghar baithe phone becho, sell old phone, sell used phone, sell dead phone, dead phone becho, band phone becho, phone buyback, old phone sell, sell mobile phone near me",
      },
      {
        property: "og:title",
        content: "Sell Old Phone Online — Purana Phone Becho for Instant Cash | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Instant cash valuation for your old or dead mobile phone. Free doorstep pickup & immediate UPI payout across India.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-phone`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/sell-phone` }],
  }),
  component: SellPhonePage,
});

function SellPhonePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Sell Phone", url: `${SITE_URL}/sell-phone` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Sell Old Phone & Dead Phone Buyback",
    description:
      "Sell used, cracked, broken, or completely dead mobile phones for instant cash payouts with complimentary doorstep pickup and secure data wiping.",
    serviceType: "Mobile Phone Buyback & Recycling",
    url: `${SITE_URL}/sell-phone`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Visual */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Sell Phone</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Highest Buyback Value Guaranteed • Free Doorstep Collection
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sell Old, Broken &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Dead Phones for Instant Cash
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Turn your idle smartphones into real money within 24 hours. Whether your phone is in pristine condition, cracked, water-damaged, or completely dead, ReviveTech guarantees honest valuations and on-the-spot UPI payment.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Bank/UPI Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-purple-400" />
                <span>Zero Pickup Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-pink-400" />
                <span>NIST 800-88 Data Sanitization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Buyback Calculator Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Instant Valuation Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Select your brand, model, storage, and condition below to view your guaranteed payout and schedule a free doorstep pickup.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <TradeInCalculator />
          </div>
        </section>

        {/* Condition Grading Guide */}
        <section className="py-14 bg-[#0e0d15]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Phone Condition Grading Guide
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                We accept mobile phones in every conceivable state. Here is how our transparent valuation tiers work:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">
                    A+
                  </div>
                  <h3 className="text-lg font-bold text-white">Flawless / Like New</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    No scratches or dents. Original screen with zero discolouration. Battery health above 85%. All cameras, Wi-Fi, and biometric sensors 100% operational.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-emerald-400 font-semibold">
                  Up to 75% Payout of Resale
                </div>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-bold">
                    B
                  </div>
                  <h3 className="text-lg font-bold text-white">Good / Minor Wear</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Minor scratches on the back or frame from regular use. Display intact without cracks. All ports and buttons fully responsive.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-blue-400 font-semibold">
                  High Market Payout
                </div>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 font-bold">
                    C
                  </div>
                  <h3 className="text-lg font-bold text-white">Cracked / Broken Glass</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Shattered front glass or back panel. Display panel or touch digitizer damaged, lines on screen, or degraded battery requiring replacement.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-amber-400 font-semibold">
                  Solid Hardware Salvage Value
                </div>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-red-500/20 flex flex-col justify-between bg-red-950/10">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 font-bold">
                    D
                  </div>
                  <h3 className="text-lg font-bold text-white">Dead / Damaged Phone</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Phone does not power on, stuck in bootloop, water-damaged, or motherboard has short circuits. We purchase for micro-IC parts & eco-recycling!
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-500/20 text-xs text-red-400 font-semibold flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5" />
                  Guaranteed Cash Instead of E-Waste
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Step Process */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How ReviveTech Buyback Works
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Three effortless steps to sell your old or damaged mobile phone without haggling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/10 relative">
              <span className="text-4xl font-black text-purple-500/20 absolute top-4 right-4">01</span>
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Check Instant Quote</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Select your device model and honest condition above. Our dynamic valuation engine calculates the highest competitive market quote in seconds.
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/10 relative">
              <span className="text-4xl font-black text-purple-500/20 absolute top-4 right-4">02</span>
              <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Doorstep Pickup</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Choose a pickup date and time that suits you. Our field technician arrives at your doorstep with anti-static packaging to inspect the device.
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/10 relative">
              <span className="text-4xl font-black text-purple-500/20 absolute top-4 right-4">03</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Instant UPI Cash</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Once verified, the payout is transferred immediately to your bank account or UPI address before our executive leaves your premises.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Frequently Asked Questions About Selling Your Phone
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

            <div className="mt-12 text-center">
              <p className="text-sm text-slate-400">
                Prefer to repair your smartphone instead of selling it?
              </p>
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-purple-400 hover:text-purple-300"
              >
                <span>Check Same-Day Phone Repair Options</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
