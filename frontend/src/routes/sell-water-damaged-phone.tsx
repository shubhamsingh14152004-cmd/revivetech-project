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
  Droplets,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Wrench,
  Smartphone,
  Cpu,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";
import { waHref } from "../lib/whatsapp";

const WATER_DAMAGE_FAQS = [
  {
    question: "Can I sell a phone that fell in water and stopped working?",
    answer:
      "Yes. Even after severe liquid exposure or saltwater damage, modular hardware components like camera modules, aluminum/titanium frame brackets, vibration motors, and speakers often remain undamaged. Revora buys liquid-damaged smartphones across Mumbai, Thane, and Navi Mumbai.",
  },
  {
    question: "What should I do right after my phone suffers liquid damage?",
    answer:
      "Do not connect a charger or try to power on a wet phone, as this causes catastrophic electrical shorts on the logic board. Avoid putting it in uncooked rice (rice dust clogs ports). Request a quote and book doorstep pickup so our technicians can inspect the hardware.",
  },
  {
    question: "Can I sell a water-damaged phone if I cannot turn it on to format it?",
    answer:
      "Yes. Data security is assured. If the device cannot boot, our technician notes down device serial numbers. In our lab, non-recoverable storage chips undergo physical sanitization or destruction before eco-recycling.",
  },
  {
    question: "What happens if I decline the doorstep valuation offer?",
    answer:
      "You have zero obligation. If the physical condition verified at doorstep results in a revised offer that you decline, your phone is returned immediately with zero cancellation fee and zero doorstep visiting charges.",
  },
  {
    question: "How do I get paid for my liquid-damaged smartphone?",
    answer:
      "Payment is transferred immediately via UPI (Google Pay, PhonePe, Paytm) or direct bank transfer before our technician leaves your location.",
  },
];

export const Route = createFileRoute("/sell-water-damaged-phone")({
  head: () => ({
    meta: [
      {
        title: "Sell Water Damaged Phone | Liquid Damage Buyback | Revora",
      },
      {
        name: "description",
        content:
          "Sell water-damaged or liquid-submerged smartphones in Mumbai, Thane & Navi Mumbai. Direct valuation, free doorstep pickup, and instant UPI payment.",
      },
      {
        name: "keywords",
        content:
          "sell water damaged phone, liquid damage phone buyback, sell wet phone, phone dropped in water sell, water damage mobile buyer Mumbai, band phone becho",
      },
      {
        property: "og:title",
        content: "Sell Water Damaged Phone | Liquid Damage Buyback | Revora",
      },
      {
        property: "og:description",
        content:
          "Sell water-damaged or liquid-submerged smartphones in Mumbai, Thane & Navi Mumbai. Direct valuation, free doorstep pickup, and instant UPI payment.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/sell-water-damaged-phone`,
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
        content: "Sell Water Damaged Phone | Liquid Damage Buyback | Revora",
      },
      {
        name: "twitter:description",
        content:
          "Sell water-damaged or liquid-submerged smartphones in Mumbai, Thane & Navi Mumbai. Direct valuation, free doorstep pickup, and instant UPI payment.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/revora-logo-transparent.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sell-water-damaged-phone` }],
  }),
  component: SellWaterDamagedPhonePage,
});

function SellWaterDamagedPhonePage() {
  const serviceSchema = getServiceSchema({
    name: "Sell Water Damaged Phone Buyback",
    description:
      "Liquid damage and non-working phone buyback with free doorstep collection across Mumbai, Thane, and Navi Mumbai.",
    category: "https://schema.org/RecycleAction",
    url: `${SITE_URL}/sell-water-damaged-phone`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Sell Phone", url: `${SITE_URL}/sell-phone` },
    { name: "Sell Water Damaged Phone", url: `${SITE_URL}/sell-water-damaged-phone` },
  ]);

  const faqSchema = getFaqSchema(WATER_DAMAGE_FAQS);

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
            <span className="text-brand font-semibold">Water Damaged Phone</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                <Droplets className="w-3.5 h-3.5 text-blue-600" />
                <span>Liquid Damage Buyback • Free Doorstep Collection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-tight">
                Sell Water-Damaged & <span className="text-brand">Non-Working Phones</span>
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Did your phone drop in water, get caught in the monsoon rain, or suffer liquid corrosion? Even if it shows zero signs of life, internal modular components still hold salvage value. We inspect and buy liquid-damaged phones with <strong>free doorstep collection and direct UPI payment</strong> across Mumbai, Thane, and Navi Mumbai.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3 rounded-full bg-brand hover:bg-brand-ink text-white font-bold text-sm shadow-md transition-colors"
                >
                  Value Your Wet Phone
                </a>
                <a
                  href={waHref("SELL_DEAD", {
                    brand: "Phone",
                    model: "Water Damaged Device",
                    fault: "Liquid damaged, non-booting",
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
              <h3 className="font-bold text-ink text-lg">Why Sell Liquid-Damaged Devices to Revora?</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Component Salvage:</strong> Original camera lenses, titanium frames, and buttons retain value.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Zero-Fee Decline Policy:</strong> If you decline our doorstep offer, your phone is returned immediately with no visiting charge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Doorstep Pickup:</strong> Technicians cover Andheri, Bandra, Dadar, Borivali, Thane, and Vashi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Responsible Recycling:</strong> Toxic batteries and unusable circuit boards are diverted from landfills.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trade-In Calculator */}
        <section id="calculator" className="py-10 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-ink">Get an Instant Valuation Request</h2>
              <p className="text-muted text-sm mt-2">Select your phone model and choose "Dead / Non-Functional" condition for a direct quote on WhatsApp.</p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* 4-Step Valuation Workflow */}
        <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-ink text-center mb-10">
            How Liquid-Damaged Phone Valuation Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">1</span>
              <h4 className="font-bold text-ink">Request Quote</h4>
              <p className="text-xs text-muted leading-relaxed">Share your brand, model, and liquid damage history on WhatsApp.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">2</span>
              <h4 className="font-bold text-ink">Doorstep Inspection</h4>
              <p className="text-xs text-muted leading-relaxed">Our verified technician arrives at your location in Mumbai, Thane, or Navi Mumbai.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">3</span>
              <h4 className="font-bold text-ink">Offer Confirmed</h4>
              <p className="text-xs text-muted leading-relaxed">Final offer is confirmed on the spot. If you decline, zero fee is charged and device is returned.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-line space-y-3 shadow-xs">
              <span className="h-8 w-8 rounded-full bg-brand-tint text-brand font-bold flex items-center justify-center text-sm">4</span>
              <h4 className="font-bold text-ink">Instant Transfer</h4>
              <p className="text-xs text-muted leading-relaxed">Payment is transferred directly via UPI or bank transfer before handover.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl font-black text-ink text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {WATER_DAMAGE_FAQS.map((faq, idx) => (
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
