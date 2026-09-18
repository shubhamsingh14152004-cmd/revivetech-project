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
  Coins,
  ShieldCheck,
  Zap,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Recycle,
  AlertTriangle,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "Dead phone becho: Can I really get cash for a phone that won't turn on at all?",
    answer:
      "Yes! Even if your phone is completely dead (band phone / chalu nahi ho raha), its internal hardware components still hold real value. Original OLED flex circuits, camera modules, chassis housing, speakers, and micro-ICs can be salvaged for refurbishing or eco-recycling. ReviveTech pays instant cash for dead phones via UPI or IMPS.",
  },
  {
    question: "Kharab phone kaise beche: How does doorstep dead phone selling work?",
    answer:
      "Selling your dead phone takes 3 simple steps: 1) Select your brand and model in our calculator above and choose 'Dead'. 2) Enter your 10-digit mobile number and address to book a free doorstep pickup. 3) Our logistics technician arrives, confirms the device model, and transfers the cash payout instantly to your bank or UPI before leaving.",
  },
  {
    question: "What about my personal photos and data inside the dead phone?",
    answer:
      "Security is guaranteed. For dead phones where the storage chips cannot boot, our cleanroom recycling process physically de-solders and demagnetizes the NAND flash chip according to NIST 800-88 data destruction standards, rendering prior data 100% unrecoverable.",
  },
  {
    question: "Do you buy water damaged or smashed phones?",
    answer:
      "Yes, we purchase phones that fell in water, phones run over by vehicles, smashed screens, bent frames, or phones rejected by other street shops.",
  },
  {
    question: "Do I need the original invoice, box, or charger to sell a dead phone?",
    answer:
      "No bill or box is strictly needed to sell a dead phone. However, you must provide a valid government photo ID (Aadhaar or Driving License) during doorstep verification for anti-theft compliance.",
  },
];

export const Route = createFileRoute("/dead-phone-buyback")({
  head: () => ({
    meta: [
      {
        title: "Sell Dead Phone for Cash — Dead Mobile Becho | ReviveTech",
      },
      {
        name: "description",
        content:
          "Dead phone becho for highest instant cash! Sell non-working, broken, water-damaged, or completely dead mobiles. Free doorstep pickup & instant UPI payment across India.",
      },
      {
        name: "keywords",
        content:
          "dead phone sell, dead mobile sell, sell dead phone, dead phone becho, band phone becho, kharab phone becho, dead phone buyback, sell dead phone near me, dead phone price, dead phone kaise beche, phone chalu nahi ho raha sell",
      },
      {
        property: "og:title",
        content: "Sell Dead Phone for Cash — Dead Mobile Becho | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Turn your dead smartphone into instant cash today. Free doorstep collection, transparent valuation, and immediate UPI payment.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/dead-phone-buyback`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/dead-phone-buyback` }],
  }),
  component: DeadPhoneBuybackPage,
});

function DeadPhoneBuybackPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Buyback", url: `${SITE_URL}/buyback` },
    { name: "Sell Dead Phone", url: `${SITE_URL}/dead-phone-buyback` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Dead Phone Buyback & Broken Mobile Purchasing",
    description:
      "Buyback service paying instant cash for completely non-functional, water-damaged, motherboard-dead, or broken screen smartphones with free doorstep collection.",
    serviceType: "Electronics Buyback & Recycling",
    url: `${SITE_URL}/dead-phone-buyback`,
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
            <Link to="/buyback" className="hover:text-purple-400 transition-colors">
              Buyback
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Sell Dead Phone</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/25 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-6">
              <Coins className="w-3.5 h-3.5 text-emerald-400" />
              Instant Cash for Dead & Broken Mobiles • Free Doorstep Collection
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sell Dead Phone for Cash —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Band Phone Becho Online
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Don't throw away your dead phone! Even if your mobile does not power on, has a shattered display, or motherboard failure, ReviveTech buys it for top salvage cash with on-the-spot UPI payment and zero doorstep pickup fees.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Bank / UPI Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-purple-400" />
                <span>Zero Pickup Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-pink-400" />
                <span>Certified Data Shredding</span>
              </div>
            </div>
          </div>
        </section>

        {/* TradeInCalculator Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Instant Dead Phone Price Calculator
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Select your brand and model below. Select 'Dead / Non-Functional' condition to lock in your payout.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <TradeInCalculator />
          </div>
        </section>

        {/* Why ReviveTech Pays for Dead Mobiles */}
        <section className="py-14 bg-[#0e0d15]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                What Can You Sell? (Kaisa Phone Bikega?)
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                We accept smartphones in every conceivable condition across iPhone, Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, and Pixel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Phone Won't Turn On</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Complete sudden death, black screen, or burned motherboard. We salvage cameras, battery coils, and chassis brackets.
                </p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Water Damaged Mobiles</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dropped in water, pool, or rain. Even with severe corrosion, silicon raw materials are responsibly recycled.
                </p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Smashed & Bent Chassis</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Crushed in accidents, bent frames, or detached back panels. We accept heavily damaged phones without fuss.
                </p>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-xl border border-white/10">
                <h3 className="text-base font-bold text-white mb-2">Old Obsolete Devices</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  5 to 8 year old phones lying forgotten in drawers. Turn them into cash instead of letting them turn into toxic e-waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Dead Phone Selling FAQs (अक्सर पूछे जाने वाले सवाल)
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
              Want to see if your dead phone can be repaired before selling it?
            </p>
            <Link
              to="/dead-phone-repair"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-purple-400 hover:text-purple-300"
            >
              <span>Check Dead Phone Repair Options (Band Phone Thik Karwao)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
