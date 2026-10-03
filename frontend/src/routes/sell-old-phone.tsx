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
    question: "How do I sell my old mobile phone online with Revora?",
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
        title: "Sell Old Mobile Phone Online — Instant Cash & Free Doorstep Pickup | Revora",
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
        content: "Sell Old Mobile Phone Online — Instant Cash & Doorstep Pickup | Revora",
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
    { name: "Home", url: SITE_URL },
    { name: "Sell Old Phone", url: `${SITE_URL}/sell-old-phone` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Sell Old Mobile Phone Buyback Service",
    description:
      "Instant trade-in cash valuation, doorstep pickup, and certified data wiping for old and used smartphones.",
    serviceType: "Electronics Buyback & Trade-In",
    url: `${SITE_URL}/sell-old-phone`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#007F5F] transition">Home</Link>
          <span>/</span>
          <span className="text-[#007F5F] font-semibold">Sell Old Phone</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#005B46] border border-[#43C59E]/30 bg-[#DDF5EA]">
            <Coins className="h-3.5 w-3.5 text-[#007F5F]" />
            <span>Guaranteed Highest Market Value · Instant Cash via UPI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#102A26] leading-tight">
            Sell Old Mobile Phone <span className="text-[#007F5F]">For Top Cash</span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Get an instant cash valuation for your old, used, or second-hand smartphone. Enjoy complimentary doorstep pickup across Mumbai and all major cities in India with zero deduction hassle.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-[#005B46]">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#007F5F]" /> Instant UPI / Bank Transfer</span>
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-[#007F5F]" /> Free Doorstep Collection</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#007F5F]" /> NIST 800-88 Data Sanitization</span>
          </div>
        </div>

        {/* Valuation Calculator Section */}
        <section id="valuation-calculator" className="mb-14 scroll-mt-24">
          <TradeInCalculator />
        </section>

        {/* How It Works Section */}
        <section className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-[#E5E7EB] shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#102A26] mb-8">
            How Selling Your Old Phone Works in 3 Simple Steps
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FAFAF7] p-6 border border-[#E5E7EB] space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#007F5F] text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">Check Your Price Online</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select your brand, model, and physical condition. Our intelligent valuation algorithm computes fair market pricing in under 60 seconds.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAFAF7] p-6 border border-[#E5E7EB] space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#005B46] text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">Free Doorstep Pickup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule a convenient pickup time. Our trained executive visits your doorstep in Mumbai or arranges insured courier pickup pan-India.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAFAF7] p-6 border border-[#E5E7EB] space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#43C59E] text-[#102A26] font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">Instant Spot Payment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following a quick 5-minute diagnostic check, payment is sent directly to your Google Pay, PhonePe, Paytm, or bank account on the spot.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Brands Grid */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] text-center">
            Supported Phone Brands for Instant Buyback
          </h2>
          <p className="text-center text-xs text-slate-500 max-w-xl mx-auto">
            We buy old smartphones across every major flagship and budget manufacturer in India:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center text-xs">
            {["Apple iPhone", "Samsung Galaxy", "OnePlus", "Xiaomi / Redmi", "Vivo", "Oppo", "Realme", "Google Pixel", "Motorola", "Nothing / POCO"].map((brand) => (
              <div key={brand} className="rounded-xl bg-white border border-[#E5E7EB] p-3.5 text-[#102A26] font-semibold hover:border-[#007F5F] transition shadow-xs">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26]">
              Frequently Asked Questions About Selling Old Phones
            </h2>
            <p className="text-xs text-slate-500">
              Clear answers to common questions about valuations, data privacy, and doorstep logistics.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
                <h3 className="text-sm font-bold text-[#102A26] flex items-start gap-2">
                  <span className="text-[#007F5F] font-mono">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services Internal Links */}
        <section className="mb-8 rounded-2xl bg-[#DDF5EA] p-6 border border-[#43C59E]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#005B46]">Need to repair rather than sell?</h3>
            <p className="text-xs text-[#102A26]">
              We offer 45-minute doorstep mobile repairs with genuine OEM parts and a 90-day warranty.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/doorstep-mobile-repair" className="rounded-full bg-[#007F5F] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#005B46] transition">
              Doorstep Mobile Repair
            </Link>
            <Link to="/sell-damaged-phone" className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#102A26] border border-[#E5E7EB] hover:bg-slate-50 transition">
              Sell Damaged Phone
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
