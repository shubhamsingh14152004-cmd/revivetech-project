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
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "How much cash can I get for a broken or damaged mobile phone?",
    answer:
      "Even if your screen is shattered or the casing is dented, internal hardware like cameras, motherboard chips, speakers, and sub-boards retain real market value. Our algorithmic valuation estimates fair salvage value based on model and working components.",
  },
  {
    question: "Do you buy phones with cracked OLED screens or no display?",
    answer:
      "Yes. A cracked screen or black/flickering display does not make your phone worthless. We specialize in buying cracked and damaged phones across Mumbai and India with instant UPI payouts.",
  },
  {
    question: "Can I sell a phone that won't turn on or has water damage?",
    answer:
      "Absolutely. Water-damaged, dead, and short-circuited phones (band phone / chalu nahi ho raha) are accepted. Our technicians disassemble non-repairable units for micro-chip recycling and OEM spare harvesting.",
  },
  {
    question: "Kharab ya toota phone bechna hai: How does verification work?",
    answer:
      "Aapko service center ke chakkar lagane ki zaroorat nahi hai. Humare doorstep technician aapke address par aakar 5 minute me device inspect karte hain aur turant cash/UPI transfer kar dete hain.",
  },
  {
    question: "Is data safe if the screen doesn't work and I cannot factory reset it?",
    answer:
      "Yes. For devices where the display is dead, we safely disconnect storage and apply certified hardware demagnetization or cleanroom data destruction, ensuring your private photos and accounts never get exposed.",
  },
];

export const Route = createFileRoute("/sell-damaged-phone")({
  head: () => ({
    meta: [
      {
        title: "Sell Damaged & Broken Phone for Cash — Toota Phone Becho | SellRepair",
      },
      {
        name: "description",
        content:
          "Sell your damaged, broken, cracked or non-working mobile phone for instant cash. Top valuation for shattered screens, water damage, and dead phones with free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "sell damaged phone, sell broken phone, sell cracked phone, sell dead phone, sell dead mobile, sell dead phone near me, sell broken mobile phone, sell damaged mobile phone, sell phone that won't turn on, sell non working phone, sell faulty mobile phone, toota phone becho, kharab phone becho, band phone becho",
      },
      {
        property: "og:title",
        content: "Sell Damaged & Broken Phone for Cash | SellRepair",
      },
      {
        property: "og:description",
        content:
          "Turn your broken, cracked, or water-damaged phone into instant cash. Doorstep pickup in Mumbai and across India with on-the-spot UPI payout.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-damaged-phone`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/sell-damaged-phone` }],
  }),
  component: SellDamagedPhonePage,
});

function SellDamagedPhonePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sell Damaged Phone", path: "/sell-damaged-phone" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Damaged and Broken Phone Buyback Service",
    description:
      "Highest cash valuation and doorstep salvage buyback for cracked, liquid-damaged, and non-working mobile phones.",
    url: "/sell-damaged-phone",
    category: "Electronics Buyback & Recycling",
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="dusk min-h-screen w-full text-white selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 md:pt-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60 font-display">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-white font-semibold">Sell Damaged Phone</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 font-label border border-amber-500/30 bg-amber-500/10">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
            <span>Broken Screen · Water Damage · Dead Motherboard · Instant Cash</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Sell Damaged Phone <span className="chrome">For Top Value</span>
          </h1>

          <p className="font-display text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Don't let your broken, cracked, or non-working mobile phone sit in a drawer. Even badly damaged smartphones retain valuable internal micro-components. Get paid on the spot via UPI with free doorstep pickup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-emerald-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Fair Salvage Price</span>
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" /> Zero Pickup Charges</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Certified Safe Disposal</span>
          </div>
        </div>

        {/* Valuation Calculator Section */}
        <section id="valuation-calculator" className="mb-14 scroll-mt-24">
          <TradeInCalculator />
        </section>

        {/* What Damaged Conditions We Accept */}
        <section className="mb-14 rounded-3xl bg-white/[0.03] p-6 sm:p-10 border border-white/10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Types of Damaged Phones We Buy
            </h2>
            <p className="text-xs text-white/70 font-display">
              We purchase smartphones in all severe conditions across iPhone, Samsung, OnePlus, and Android:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl bg-black/40 p-5 border border-white/10 space-y-2.5">
              <span className="text-2xl block">🔨</span>
              <h3 className="font-display text-base font-bold text-white">Shattered & Cracked Screens</h3>
              <p className="text-xs text-white/70 font-display leading-relaxed">
                Broken outer glass, bleeding OLED ink lines, touch dead zones, or completely dark displays.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5 border border-white/10 space-y-2.5">
              <span className="text-2xl block">💧</span>
              <h3 className="font-display text-base font-bold text-white">Water & Liquid Damage</h3>
              <p className="text-xs text-white/70 font-display leading-relaxed">
                Corrosion from rain, pool drops, or drink spills that ruined the power circuits.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5 border border-white/10 space-y-2.5">
              <span className="text-2xl block">⚡</span>
              <h3 className="font-display text-base font-bold text-white">Dead Logic Boards (No Power)</h3>
              <p className="text-xs text-white/70 font-display leading-relaxed">
                Phones that do not boot, stuck in bootloops, burnt PMIC power ICs, or CPU faults.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-5 border border-white/10 space-y-2.5">
              <span className="text-2xl block">🔋</span>
              <h3 className="font-display text-base font-bold text-white">Swollen Battery & Body Bent</h3>
              <p className="text-xs text-white/70 font-display leading-relaxed">
                Deformed chassis, popped screens from expanding batteries, and broken charging ports.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions About Damaged Phone Buybacks
            </h2>
            <p className="text-xs text-white/60 font-display">
              Everything you need to know about selling a damaged phone with broken display or power faults.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white/[0.03] p-5 border border-white/10 space-y-2">
                <h3 className="font-display text-sm font-bold text-white flex items-start gap-2">
                  <span className="text-amber-400 font-mono">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-white/70 leading-relaxed pl-5 font-display">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Repair Hub */}
        <section className="mb-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-black p-6 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-base font-bold text-white">Wondering if it can still be fixed?</h3>
            <p className="text-xs text-white/70 font-display">
              Our certified cleanroom lab fixes dead and damaged phones in 45 minutes with free pickup in Mumbai.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/dead-phone-repair" className="rounded-full bg-emerald-500 text-ink px-5 py-2.5 text-xs font-bold font-label hover:brightness-110 transition">
              Dead Phone Repair
            </Link>
            <Link to="/screen-repair" className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold font-label text-white hover:bg-white/20 transition">
              Screen Repair
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
