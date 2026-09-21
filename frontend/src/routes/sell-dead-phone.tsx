import React from "react";
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
  AlertTriangle,
  CheckCircle2,
  Coins,
  ShieldCheck,
  Truck,
  Zap,
  IndianRupee,
  Wrench,
  Smartphone,
  Cpu,
  RefreshCcw,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const DEAD_PHONE_FAQS = [
  {
    question: "Can I really sell a dead phone that won't turn on or charge?",
    answer:
      "Yes! Even if your smartphone has zero power, doesn't respond to chargers, or suffered motherboard damage, its physical hardware components (cameras, titanium/aluminum housing, mic arrays, vibration motors, sub-flex boards) retain tangible salvage value. We buy dead phones daily across Mumbai and India.",
  },
  {
    question: "How do you determine the price of a completely dead smartphone?",
    answer:
      "Our valuation engine calculates the salvage potential based on brand, model, and physical integrity. Original OEM cameras, undamaged rear glass, biometric sensors, and housing retain 15% to 40% of standard refurbishment value.",
  },
  {
    question: "Band phone bechna hai: How does doorstep pickup work for dead phones?",
    answer:
      "Apna phone brand aur model select karein, doorstep inspection schedule karein. Humara verified technician aapke ghar aakar physical condition check karega aur spot cash ya instant UPI transfer karega bina kisi delay ke.",
  },
  {
    question: "What happens to my private data if I cannot turn on the phone to format it?",
    answer:
      "Data security is our #1 priority. If a device cannot boot into recovery mode, our cleanroom technicians either desolder and electrically wipe the NAND flash chip under NIST 800-88 guidelines or physically shred the storage chip upon request.",
  },
  {
    question: "Should I repair my dead phone or sell it directly?",
    answer:
      "If the motherboard replacement or CPU reballing cost exceeds 50% of the phone's current second-hand market value, selling the dead phone for immediate cash is financially smarter than paying expensive repair bills.",
  },
];

export const Route = createFileRoute("/sell-dead-phone")({
  head: () => ({
    meta: [
      {
        title: "Sell Dead Phone for Cash — Band Phone Becho Online | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Sell your dead mobile phone that won't turn on for instant cash. Fair salvage price for non-working, short-circuited, or motherboard-damaged smartphones with free doorstep pickup in Mumbai & India.",
      },
      {
        name: "keywords",
        content:
          "sell dead phone, sell dead mobile, sell dead phone near me, sell phone that won't turn on, sell phone that does not turn on, band phone becho, dead phone price, dead mobile buyer, dead phone cash price, sell non working phone, dead phone scrap value, sell motherboard damaged phone",
      },
      {
        property: "og:title",
        content: "Sell Dead Phone for Instant Cash | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Don't throw away a dead phone! Get fair market salvage cash for phones that won't power on. Free doorstep pickup & instant UPI payout.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-dead-phone`,
      },
      {
        property: "og:image",
        content: heroPhone,
      },
    ],
  }),
  component: SellDeadPhonePage,
});

function SellDeadPhonePage() {
  const serviceSchema = getServiceSchema(
    "Sell Dead Mobile Phone & Component Buyback",
    "Instant valuation and cash payout service for completely dead, shorted, or water-damaged smartphones that do not power on. Doorstep pickup in Mumbai and all-India coverage.",
    "https://schema.org/RecycleAction"
  );

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Sell Dead Phone", item: `${SITE_URL}/sell-dead-phone` },
  ]);

  const faqSchema = getFaqSchema(DEAD_PHONE_FAQS);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-brand-500 selection:text-black">
      <SeoJsonLd schema={[serviceSchema, breadcrumbs, faqSchema]} />
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-neutral-800/80 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-6 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Dead Phone Buyback • Instant Cash Payout
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Sell Dead Phone That Won't Turn On —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
                Band Phone Becho for Instant Cash
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Don't leave dead smartphones sitting in your drawer. Whether your phone suffered water submersion, motherboard short-circuit, or power failure, we unlock its salvage value with <strong>free doorstep collection and instant cash or UPI payout</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-neutral-400 mb-10">
              <span className="flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-brand-400" /> Phones that won't turn on
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-brand-400" /> Motherboard & IC dead
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-brand-400" /> Certified cleanroom data wipe
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-brand-400" /> Spot cash & UPI in Mumbai
              </span>
            </div>
          </div>
        </section>

        {/* Live Calculator Section */}
        <section className="py-16 bg-neutral-900/40 border-b border-neutral-800/80" id="calculator">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">
                Salvage Valuation Tool
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold mt-2">
                Calculate What Your Dead Phone Is Worth Today
              </h2>
              <p className="text-neutral-400 text-sm mt-2 max-w-xl mx-auto">
                Select your device brand and model below. Mark power status as dead to view genuine recycling salvage valuation.
              </p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* Why Dead Phones Have Real Cash Value */}
        <section className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Why Does a Dead Phone Still Have Cash Value?
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              When a smartphone's motherboard or power IC fails, 80% of its physical sub-assemblies usually remain in mint condition. Rather than polluting landfills, these high-grade parts are harvested for micro-soldering repairs and circular electronics recycling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High-End OEM Camera Modules</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Optical zoom lenses, ultra-wide sensors, and selfie cameras on dead iPhones and Galaxies rarely die with the motherboard. These original sensors command premium salvage prices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Original Enclosure & Back Glass</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Pristine aluminum or titanium chassis, gorilla glass backs, volume rockers, and SIM trays are in huge demand by cleanroom refurbishment labs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Internal Sub-Flex Boards & Motors</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Taptic engines, charging flex ribbons, ear-speakers, and antenna bands are safely harvested to bring other broken phones back to life.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step Simple Selling Process */}
        <section className="py-16 bg-neutral-900/30 border-y border-neutral-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Simple & Fast</span>
              <h2 className="text-2xl sm:text-4xl font-bold mt-2">How to Sell Your Dead Phone in 4 Easy Steps</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="text-2xl font-black text-brand-400 mb-2">01</div>
                <h3 className="text-base font-bold text-white mb-1">Check Quote</h3>
                <p className="text-xs text-neutral-400">Select model and tick 'Phone Won't Turn On' for instant fair valuation.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="text-2xl font-black text-brand-400 mb-2">02</div>
                <h3 className="text-base font-bold text-white mb-1">Book Pickup</h3>
                <p className="text-xs text-neutral-400">Pick a convenient doorstep time slot anywhere in Mumbai or surrounding regions.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="text-2xl font-black text-brand-400 mb-2">03</div>
                <h3 className="text-base font-bold text-white mb-1">Quick Inspection</h3>
                <p className="text-xs text-neutral-400">Our executive tests exterior parts and verifies IMEI/chassis authenticity.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="text-2xl font-black text-brand-400 mb-2">04</div>
                <h3 className="text-base font-bold text-white mb-1">Instant Cash / UPI</h3>
                <p className="text-xs text-neutral-400">Payment credited to your Google Pay, PhonePe, Paytm or bank account on the spot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certified Privacy & Data Destruction Guarantee */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                What About Your Personal Data on a Dead Phone?
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Many owners fear selling dead phones because they cannot perform a factory reset. At <strong>SellRepairPhone</strong>, we strictly observe NIST 800-88 hardware sanitization. Non-bootable motherboards have their storage chips electrically grounded or demagnetized in cleanroom facilities, guaranteeing that zero photos, messages, or bank credentials can ever be recovered.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-400">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Physical Destruction Available</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Valid Purchase Invoice Provided</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Government ID Verified Executives</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-neutral-900/40 border-t border-neutral-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Common Questions</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">Frequently Asked Questions About Selling Dead Mobiles</h2>
            </div>

            <div className="space-y-4">
              {DEAD_PHONE_FAQS.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800/80">
                  <h3 className="text-base font-bold text-white mb-2 flex items-start gap-2">
                    <span className="text-brand-400">Q.</span> {faq.question}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-400 text-sm mb-4">Want to see if your dead phone can be revived instead?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/dead-phone-repair"
                  className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold text-white transition inline-flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4 text-brand-400" /> Dead Phone Repair Diagnostic
                </Link>
                <Link
                  to="/doorstep-mobile-repair"
                  className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-sm font-semibold text-black transition inline-flex items-center gap-2"
                >
                  <Truck className="w-4 h-4" /> Book Doorstep Technician
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
