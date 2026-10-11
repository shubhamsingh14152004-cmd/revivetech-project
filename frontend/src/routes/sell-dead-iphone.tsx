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
  CheckCircle2,
  ShieldCheck,
  Truck,
  Cpu,
  RefreshCcw,
  Zap,
} from "lucide-react";
import { waHref } from "../lib/whatsapp";

const DEAD_IPHONE_FAQS = [
  {
    question: "Can I sell a dead iPhone that won't turn on or charge?",
    answer:
      "Yes. Even if your iPhone has a dead logic board, power IC failure, or cracked back glass, modular parts like original Apple camera assemblies, OLED display panels, titanium/aluminum chassis, and Taptic Engines retain recovery value.",
  },
  {
    question: "Do you buy iPhones with liquid damage or saltwater immersion?",
    answer:
      "Yes. We buy liquid-damaged iPhones across Mumbai, Thane, and Navi Mumbai. If authorized service centers declared it unfixable, Revora assesses the salvageable modular components and provides immediate payment.",
  },
  {
    question: "What must I do with my Apple ID / iCloud before selling?",
    answer:
      "For anti-theft compliance, you must remove the device from your iCloud account (via iCloud.com/find if the device cannot boot). We only buy legitimately owned Apple devices with proof of ownership or government photo ID.",
  },
  {
    question: "What happens if I decline the final valuation offer at doorstep?",
    answer:
      "You have complete freedom to decline. If the verified condition results in an offer you do not accept, our technician returns your iPhone immediately with zero cancellation fee and zero visiting charge.",
  },
  {
    question: "Which iPhone models do you buy in dead condition?",
    answer:
      "We buy all models from iPhone 11, iPhone 12, iPhone 13, iPhone 14, iPhone 15, to iPhone 16 series in non-working, broken, or dead condition.",
  },
];

export const Route = createFileRoute("/sell-dead-iphone")({
  head: () => ({
    meta: [
      {
        title: "Sell Dead iPhone Online | Broken iPhone Buyback | Revora",
      },
      {
        name: "description",
        content:
          "Sell your dead, broken, or water-damaged iPhone in Mumbai, Thane & Navi Mumbai. Free doorstep collection, instant UPI payment, and zero-fee decline.",
      },
      {
        name: "keywords",
        content:
          "sell dead iPhone, sell broken iPhone Mumbai, dead iPhone buyback, sell water damaged iPhone, sell non working iPhone, iPhone motherboard dead sell, band iPhone becho",
      },
      {
        property: "og:title",
        content: "Sell Dead iPhone Online | Broken iPhone Buyback | Revora",
      },
      {
        property: "og:description",
        content:
          "Sell your dead, broken, or water-damaged iPhone in Mumbai, Thane & Navi Mumbai. Free doorstep collection, instant UPI payment, and zero-fee decline.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-dead-iphone`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/revora-logo-transparent.png`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Sell Dead iPhone Online | Broken iPhone Buyback | Revora",
      },
      {
        name: "twitter:description",
        content:
          "Sell your dead, broken, or water-damaged iPhone in Mumbai, Thane & Navi Mumbai. Free doorstep collection, instant UPI payment, and zero-fee decline.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/revora-logo-transparent.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sell-dead-iphone` }],
  }),
  component: SellDeadIPhonePage,
});

function SellDeadIPhonePage() {
  const serviceSchema = getServiceSchema({
    name: "Sell Dead iPhone Buyback",
    description:
      "Dead and broken iPhone buyback with free doorstep collection across Mumbai, Thane, and Navi Mumbai.",
    category: "https://schema.org/RecycleAction",
    url: `${SITE_URL}/sell-dead-iphone`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Sell Phone", url: `${SITE_URL}/sell-phone` },
    { name: "Sell Dead iPhone", url: `${SITE_URL}/sell-dead-iphone` },
  ]);

  const faqSchema = getFaqSchema(DEAD_IPHONE_FAQS);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[serviceSchema, breadcrumbs, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-line bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-xs text-muted flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/sell-phone" className="hover:text-brand transition-colors">
              Sell Phone
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">Sell Dead iPhone</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-brand" />
                <span>Apple iPhone Buyback • Free Doorstep Collection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-tight">
                Sell Dead iPhone Online in <span className="text-brand">Mumbai, Thane & Navi Mumbai</span>
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Has your iPhone stopped turning on? Got a dead motherboard, water submersion, or shattered front and back glass? Don't leave it in your drawer. Revora buys dead and non-working iPhones with <strong>free doorstep collection and instant UPI payment</strong> across Mumbai, Thane, and Navi Mumbai.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3 rounded-full bg-brand hover:bg-brand-ink text-white font-bold text-sm shadow-md transition-colors"
                >
                  Value Your Dead iPhone
                </a>
                <a
                  href={waHref("SELL_DEAD", {
                    brand: "Apple",
                    model: "iPhone",
                    fault: "Dead / Non-booting",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-ink border border-line font-bold text-sm shadow-xs transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Benefits Card */}
            <div className="lg:col-span-5 bg-white border border-line rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-ink text-lg">Why Sell Your Dead iPhone to Revora?</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Component Salvage:</strong> Original Apple camera sensors, Face ID flex, and chassis brackets retain high value.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Zero-Fee Decline Policy:</strong> If you decline our final doorstep offer, your iPhone is returned with zero fee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Doorstep Pickup:</strong> Verified technicians cover Andheri, Bandra, Dadar, Borivali, Thane, and Vashi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Data Destruction:</strong> Flash memory chips on unbootable units are physically decommissioned safely.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trade-In Calculator */}
        <section id="calculator" className="py-10 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-ink">Get a Valuation Request</h2>
              <p className="text-muted text-sm mt-2">Select your Apple iPhone model and pick "Dead / Non-Functional" condition for a direct quote on WhatsApp.</p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* 4-Step Valuation Workflow */}
        <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-ink text-center mb-10">
            How Dead iPhone Valuation Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">1</span>
              <h4 className="font-bold text-ink">Quote Request</h4>
              <p className="text-xs text-muted leading-relaxed">Choose your iPhone model and state on our site or message us on WhatsApp.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">2</span>
              <h4 className="font-bold text-ink">Doorstep Verification</h4>
              <p className="text-xs text-muted leading-relaxed">Our verified executive visits your home or office in Mumbai, Thane, or Navi Mumbai.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">3</span>
              <h4 className="font-bold text-ink">Offer Confirmed</h4>
              <p className="text-xs text-muted leading-relaxed">Final offer is confirmed on the spot. If you decline, zero fee is charged and device is returned.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">4</span>
              <h4 className="font-bold text-ink">Instant Transfer</h4>
              <p className="text-xs text-muted leading-relaxed">Payment is transferred directly via UPI or bank transfer before device handover.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl font-black text-ink text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {DEAD_IPHONE_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-line bg-neutral-50/50 space-y-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
