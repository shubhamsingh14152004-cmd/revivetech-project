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
  IndianRupee,
  MapPin,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "How do I sell my old mobile phone online with SellRepair?",
    answer:
      "Selling your old phone is fast and seamless: 1) Select your brand, model, and condition on our online calculator to get an instant valuation. 2) Schedule a free doorstep pickup in Mumbai or pan-India. 3) Our verified technician performs a 5-minute diagnostic and transfers your cash immediately via UPI or bank transfer.",
  },
  {
    question: "Can I sell used and second-hand phones in any condition?",
    answer:
      "Yes! We buy phones in all working and cosmetic conditions: flawless, minor scratches, heavy wear, broken screens, battery issues, and even completely dead devices that do not turn on.",
  },
  {
    question: "Is my personal data completely erased before selling?",
    answer:
      "Yes. Every device undergoes certified NIST 800-88 military-grade data sanitization. All customer accounts, personal photos, chats, and banking tokens are permanently destroyed, and you receive an official data destruction guarantee.",
  },
  {
    question: "Purana mobile bechna hai: Do you provide doorstep pickup in Mumbai?",
    answer:
      "Aap Mumbai, Navi Mumbai aur Thane me ghar baithe apna purana mobile bech sakte hain. Same-day express doorstep pickup is available with instant on-the-spot UPI payment before our technician leaves.",
  },
  {
    question: "What documents do I need to sell my old phone?",
    answer:
      "To comply with legal anti-theft standards, you only need one valid government photo ID (such as Aadhaar Card or Driving License) and the device unlock password/PIN so our technician can verify basic hardware.",
  },
];

export const Route = createFileRoute("/sell-old-phone")({
  head: () => ({
    meta: [
      {
        title: "Sell Old Mobile Phone Online — Instant Cash & Free Doorstep Pickup | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Sell your old mobile phone for the highest cash price. Free doorstep evaluation in Mumbai & India, instant UPI payment, and 100% certified data wipe. Value your used phone now.",
      },
      {
        name: "keywords",
        content:
          "sell old mobile phone, sell old phone, sell used mobile phone, sell used phone, sell second hand mobile, sell old smartphone, sell my old phone, sell my mobile phone, sell mobile phone online, sell phone near me, sell old phone near me, mobile phone buyers near me, used phone buyers near me, purana phone becho, purana mobile becho, purana phone sell karo, purana mobile sell karo",
      },
      {
        property: "og:title",
        content: "Sell Old Mobile Phone Online — Instant Cash & Doorstep Pickup | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Get the best valuation for your old or used smartphone. Free doorstep pickup in Mumbai & across India with instant UPI transfer.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-old-phone`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/sell-old-phone` }],
  }),
  component: SellOldPhonePage,
});

function SellOldPhonePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sell Old Phone", path: "/sell-old-phone" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Sell Old Mobile Phone Buyback Service",
    description:
      "Instant trade-in cash valuation, doorstep pickup, and certified data wiping for old and used smartphones.",
    url: "/sell-old-phone",
    category: "Electronics Buyback & Trade-In",
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
          <span className="text-white font-semibold">Sell Old Phone</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 font-label border border-white/20">
            <Coins className="h-3.5 w-3.5 text-gold" />
            <span>Guaranteed Highest Market Value · Instant Cash via UPI</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Sell Old Mobile Phone <span className="chrome">For Top Cash</span>
          </h1>

          <p className="font-display text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Get an instant cash valuation for your old, used, or second-hand smartphone. Enjoy complimentary doorstep pickup across Mumbai and all major cities in India with zero deduction hassle.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-emerald-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Instant UPI / Bank Transfer</span>
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" /> Free Doorstep Collection</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> NIST 800-88 Data Sanitization</span>
          </div>
        </div>

        {/* Valuation Calculator Section */}
        <section id="valuation-calculator" className="mb-14 scroll-mt-24">
          <TradeInCalculator />
        </section>

        {/* How It Works Section */}
        <section className="mb-14 rounded-3xl bg-white/[0.03] p-6 sm:p-10 border border-white/10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-white mb-8">
            How Selling Your Old Phone Works in 3 Simple Steps
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-black/40 p-6 border border-white/10 space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white font-bold font-display">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-white">Check Your Price Online</h3>
              <p className="text-xs text-white/70 leading-relaxed font-display">
                Select your brand, model, and physical condition. Our intelligent valuation algorithm computes fair market pricing in under 60 seconds.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10 space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-ink font-bold font-display">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-white">Free Doorstep Pickup</h3>
              <p className="text-xs text-white/70 leading-relaxed font-display">
                Schedule a convenient pickup time. Our trained executive visits your doorstep in Mumbai or arranges insured courier pickup pan-India.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10 space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-ink font-bold font-display">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-white">Instant Spot Payment</h3>
              <p className="text-xs text-white/70 leading-relaxed font-display">
                Following a quick 5-minute diagnostic check, payment is sent directly to your Google Pay, PhonePe, Paytm, or bank account on the spot.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Brands Grid */}
        <section className="mb-14 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white text-center">
            Supported Phone Brands for Instant Buyback
          </h2>
          <p className="text-center text-xs text-white/70 max-w-xl mx-auto font-display">
            We buy old smartphones across every major flagship and budget manufacturer in India:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center font-display text-xs">
            {["Apple iPhone", "Samsung Galaxy", "OnePlus", "Xiaomi / Redmi", "Vivo", "Oppo", "Realme", "Google Pixel", "Motorola", "Nothing / POCO"].map((brand) => (
              <div key={brand} className="rounded-xl bg-white/5 border border-white/10 p-3.5 text-white font-semibold hover:border-brand/40 transition">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions About Selling Old Phones
            </h2>
            <p className="text-xs text-white/60 font-display">
              Clear answers to common questions about valuations, data privacy, and doorstep logistics.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white/[0.03] p-5 border border-white/10 space-y-2">
                <h3 className="font-display text-sm font-bold text-white flex items-start gap-2">
                  <span className="text-accent font-mono">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-white/70 leading-relaxed pl-5 font-display">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services Internal Links */}
        <section className="mb-8 rounded-2xl bg-gradient-to-r from-brand/20 to-accent/10 p-6 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-base font-bold text-white">Need to repair rather than sell?</h3>
            <p className="text-xs text-white/70 font-display">
              We offer 45-minute doorstep mobile repairs with genuine OEM parts and a 90-day warranty.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/doorstep-mobile-repair" className="rounded-full bg-brand px-5 py-2.5 text-xs font-bold font-label text-white hover:brightness-110 transition">
              Doorstep Mobile Repair
            </Link>
            <Link to="/sell-damaged-phone" className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold font-label text-white hover:bg-white/20 transition">
              Sell Damaged Phone
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
