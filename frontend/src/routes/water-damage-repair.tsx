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
  Droplets,
  AlertTriangle,
  Cpu,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const WATER_STEPS = [
  {
    step: "1. Immediate Power Down & Disassembly",
    desc: "Technicians disconnect the battery immediately to cut off active voltage that causes electrolytic motherboard corrosion.",
  },
  {
    step: "2. Ultrasonic Chemical Bath",
    desc: "The circuit board is submerged in an industrial ultrasonic transducer using pure 99.9% isopropyl alcohol and chemical flux to dissolve mineral salts.",
  },
  {
    step: "3. Thermal Camera Short Detection",
    desc: "Infrared thermal imaging highlights shorted capacitors and overheated power ICs under microscopic voltage injection.",
  },
  {
    step: "4. Component Micro-Soldering",
    desc: "Corroded SMD resistors, diodes, and BGA power management ICs are replaced with fresh leaded solder joints.",
  },
];

const FAQS = [
  {
    question: "Does putting a wet phone in rice actually work?",
    answer:
      "NO! The 'rice trick' is an urban myth that damages phones further. Rice does not draw moisture out of sealed internal enclosures. Instead, raw starch powder enters speaker grilles and charging ports, creating sticky cement that accelerates copper trace corrosion. Power off your phone immediately and bring it to a professional repair lab.",
  },
  {
    question: "Can data be recovered from a water-damaged phone that won't turn on?",
    answer:
      "Yes! In over 85% of liquid damage cases, flash memory NAND chips survive intact. Even if the screen or entire phone is beyond economical repair, we can revive the CPU/NAND rail to extract your photos, contacts, and personal data.",
  },
  {
    question: "What should I do right after dropping my phone in water?",
    answer:
      "1) Turn the device OFF immediately. 2) Do NOT plug it into a charger. 3) Do NOT shake the phone or blow hot air with a hairdryer (which forces water deeper into display layers). 4) Book an express emergency cleanroom slot with Sagar Tech.",
  },
  {
    question: "Phone pani me gir gaya: Kya karna chahiye aur kya phone thik ho sakta hai?",
    answer:
      "Agar phone pani me gir gaya ho: 1) Phone ko turant switch off karein. 2) Charger me bilkul mat lagayein. 3) Chawal (rice) me mat daalein kyunki rice se corrosion badhti hai. 4) Sagar Tech me ultrasonic chemical bath ke liye book karein. 85%+ pani me gire phones bilkul thik ho jaate hain.",
  },
];

export const Route = createFileRoute("/water-damage-repair")({
  head: () => ({
    meta: [
      {
        title: "Phone Water Damage Repair Near Me — Phone Pani Me Gir Gaya | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Phone pani me gir gaya? Emergency phone water damage repair. Ultrasonic circuit cleaning, motherboard micro-soldering & data recovery. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "phone pani me gir gaya repair, mobile pani me gir gaya repair, phone water damage repair, dropped phone in water fix, liquid damage phone repair, wet phone repair, water damage repair near me",
      },
      {
        property: "og:title",
        content: "Phone Water Damage Repair Near Me — Phone Pani Me Gir Gaya | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Dropped phone in water? Ultrasonic bath cleaning, board short clearing, and 85%+ data recovery success rate.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/water-damage-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/water-damage-repair` }],
  }),
  component: WaterDamageRepairPage,
});

function WaterDamageRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Water Damage Repair", url: `${SITE_URL}/water-damage-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Mobile Phone Liquid & Water Damage Treatment",
    description:
      "Cleanroom chemical de-oxidation, ultrasonic bath treatment, and component-level micro-soldering for liquid-damaged smartphones.",
    serviceType: "Water Damage Electronics Repair",
    url: `${SITE_URL}/water-damage-repair`,
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
            <span className="text-purple-400 font-medium">Water Damage Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-6">
              <Droplets className="w-3.5 h-3.5 text-blue-400" />
              Emergency Cleanroom Treatment • 85%+ Data Recovery Rate
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Emergency Phone{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400">
                Water Damage Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Dropped your phone in water, pool, or coffee? Act quickly before galvanic oxidation destroys delicate logic board copper traces. Our lab combines ultrasonic chemical baths, thermal imaging, and micro-soldering to resurrect drowned devices.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Emergency Diagnosis</span>
              </Link>
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Urgent Helpline: +91 8591770877</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Same-Day Chemical Bath</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Board Micro-Soldering</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Our 4-Stage Liquid Recovery Protocol
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              How we stop corrosion and safely salvage drowned circuitry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WATER_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-base font-bold text-white mb-2 text-blue-300">
                  {step.step}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Water Damage FAQs
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

            <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-slate-900 border border-blue-500/20">
              <h3 className="text-lg font-bold text-white">Device beyond economical repair?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-4">
                We buy water-damaged and dead phones for scrap IC value with instant UPI cash payout.
              </p>
              <Link
                to="/sell-phone"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Sell Dead Phone for Cash</span>
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
