import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { RepairBooking } from "../components/RepairBooking";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  Cpu,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  Microscope,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "Phone chalu nahi ho raha? Can a completely dead phone be repaired?",
    answer:
      "Yes, absolutely! Over 80% of dead phones that do not turn on (phone chalu nahi ho raha) can be revived. Common root causes include dead battery cells, shorted VDD capacitors, failed Power Management ICs (PMIC), or dry solder joints under the CPU. Our cleanroom technicians trace micro-current shorts under thermal imaging to repair the motherboard without requiring a costly board swap.",
  },
  {
    question: "Band phone thik karne me kitna kharcha aur time lagta hai?",
    answer:
      "Diagnosis takes 2 to 4 hours on our precision cleanroom bench. Minor shorts (charging IC, power flex, or capacitor shorts) are repaired on the same day. Complex CPU or dual-layer motherboard reballing takes 24 to 48 hours. You receive a transparent quote before any repair begins.",
  },
  {
    question: "Will my data (photos, contacts, chats) be safe during dead phone motherboard repair?",
    answer:
      "Yes! Our first priority during dead phone repair is data preservation. Unlike official service centers that simply wipe or replace motherboards, ReviveTech works directly on component-level traces so your NAND flash storage remains intact with all your photos, WhatsApp chats, and personal data.",
  },
  {
    question: "What if my dead phone cannot be repaired?",
    answer:
      "If a device is declared non-repairable due to severe PCB fractures or cracked silicon dies, you don't pay high repair fees. Furthermore, you can instantly sell your dead phone for cash via our Dead Phone Buyback program.",
  },
  {
    question: "Do you offer free doorstep pickup for dead phone repair?",
    answer:
      "Yes. We provide complimentary insured doorstep pickup across major metropolitan areas and pan-India courier service. Your device is sealed in an anti-static security pouch with real-time digital tracking.",
  },
];

export const Route = createFileRoute("/dead-phone-repair")({
  head: () => ({
    meta: [
      {
        title: "Dead Phone Repair Near Me — Band Phone Thik Karna | ReviveTech",
      },
      {
        name: "description",
        content:
          "Phone chalu nahi ho raha? Expert dead phone repair service. Motherboard micro-soldering, power IC repair & data recovery for iPhone, Samsung & Android. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "dead phone repair, dead mobile repair, band phone repair, band phone thik karna, phone chalu nahi ho raha repair, mobile not turning on repair, dead phone repair near me, phone motherboard repair, mobile IC repair, phone dead ho gaya repair",
      },
      {
        property: "og:title",
        content: "Dead Phone Repair Near Me — Band Phone Thik Karna | ReviveTech",
      },
      {
        property: "og:description",
        content:
          "Phone not turning on? Specialised cleanroom motherboard micro-soldering and power IC repair with 90-day warranty and free doorstep collection.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/dead-phone-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/dead-phone-repair` }],
  }),
  component: DeadPhoneRepairPage,
});

function DeadPhoneRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Dead Phone Repair", url: `${SITE_URL}/dead-phone-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Dead Phone & Motherboard IC Repair Service",
    description:
      "Precision diagnosis and component-level micro-soldering for smartphones that fail to turn on, sudden death, power rail shorts, and damaged PMIC chips.",
    serviceType: "Electronics & Motherboard Repair",
    url: `${SITE_URL}/dead-phone-repair`,
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
            <span className="text-purple-400 font-medium">Dead Phone Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/25 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Microscope className="w-3.5 h-3.5 text-purple-400" />
              Thermal Short Detection • 80%+ Revival Rate • Zero Data Loss Priority
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Dead Phone Repair Service —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Band Phone Thik Karwao
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Phone chalu nahi ho raha? Whether your phone suddenly died, stopped charging, or got stuck on a black screen after an update or drop, ReviveTech diagnoses and repairs motherboard shorts at component level with a 90-day warranty.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#book-dead-repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Dead Phone Diagnosis</span>
              </a>
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
                <span>Same-Day Short Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Free Doorstep Collection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Do Phones Go Dead? Causes & Solutions */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Phones Stop Turning On (Phone Band Kyu Hota Hai?)
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Most dead phones do not need complete motherboard replacements. We isolate the single damaged micro-chip or capacitor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Power Rail Short Circuit (VCC_MAIN)</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                When a micro-capacitor breaks down, it pulls the entire main power line to ground. The phone refuses to boot to protect the CPU. We find and replace the shorted element using thermal imaging.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Power Management IC (PMIC) Failure</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Using uncertified high-voltage fast chargers or car adapters can blow the PMIC chip. We micro-solder a brand-new factory PMIC chip onto the PCB.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CPU / RAM Dry Solder (BGA Reballing)</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Excessive gaming heat or drops cause microscopic solder balls under the Snapdragon or Apple Silicon chip to crack. We desolder, re-ball, and reseat the chip.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Booking Form */}
        <section id="book-dead-repair" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Book Your Dead Phone Repair
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Free doorstep pickup across your locality. Complete 10-point diagnostic check before repair.
            </p>
          </div>

          <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            <RepairBooking />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Dead Phone Repair FAQs (अक्सर पूछे जाने वाले सवाल)
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
              <h3 className="text-lg font-bold text-white">Prefer to sell your dead phone for cash instead?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-4">
                Get instant UPI cash for dead, broken, or water-damaged phones with zero pickup fees.
              </p>
              <Link
                to="/dead-phone-buyback"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Check Dead Phone Buyback Price (Dead Phone Becho)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
