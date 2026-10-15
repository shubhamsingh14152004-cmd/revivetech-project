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
  MapPin,
  Wrench,
  Truck,
  ShieldCheck,
  CheckCircle2,
  RefreshCcw,
  Zap,
  PhoneCall,
  Smartphone,
} from "lucide-react";
import { waHref } from "../lib/whatsapp";

const LOCAL_FAQS = [
  {
    question: "How does doorstep mobile repair work in Thane (West & Ghodbunder)?",
    answer:
      "When you book a repair, our verified technician arrives at your home or office in Thane (West & Ghodbunder) carrying genuine OEM-grade replacement parts and diagnostic equipment. Most repairs like screens and batteries are completed right in front of you.",
  },
  {
    question: "Do you buy phones that will not power on in Thane (West & Ghodbunder)?",
    answer:
      "Revora buys phones only when they will not power on. Share the model and location to ask whether an assessment is available.",
  },
  {
    question: "Is there any visiting or inspection fee in Thane (West & Ghodbunder)?",
    answer:
      "No! Doorstep pickup and evaluation is completely free across Thane (West & Ghodbunder) and the entire Mumbai Metropolitan Region with zero hidden visiting charges.",
  },
  {
    question: "What happens if I decline the buyback valuation offer?",
    answer:
      "You have complete freedom to decline. If the verified condition results in an offer that you decline, your phone is returned immediately with zero cancellation fee.",
  },
  {
    question: "What warranty do you offer on repairs in Thane (West & Ghodbunder)?",
    answer:
      "All replacement screens, batteries, and hardware components come with Revora's official 90-day warranty covering manufacturing defects and touch unresponsiveness.",
  },
];

export const Route = createFileRoute("/phone-repair-thane")({
  head: () => ({
    meta: [
      {
        title: "Phone Repair & Dead Phone Buyback in Thane | Revora",
      },
      {
        name: "description",
        content: "Doorstep phone repair in Thane West, Ghodbunder & Majiwada. Phone buyback is only for devices that will not power on; contact Revora to confirm current assessment availability.",
      },
      {
        name: "keywords",
        content: "phone repair Thane, mobile repair Thane West, sell dead phone Thane, doorstep phone repair Ghodbunder, iPhone repair Thane, purana phone becho Thane",
      },
      {
        property: "og:title",
        content: "Phone Repair & Dead Phone Buyback in Thane | Revora",
      },
      {
        property: "og:description",
        content: "Doorstep phone repair in Thane West, Ghodbunder & Majiwada. Phone buyback is only for devices that will not power on; contact Revora to confirm current assessment availability.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/phone-repair-thane`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/revora-logo-horizontal.png`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Phone Repair & Dead Phone Buyback in Thane | Revora",
      },
      {
        name: "twitter:description",
        content: "Doorstep phone repair in Thane West, Ghodbunder & Majiwada. Phone buyback is only for devices that will not power on; contact Revora to confirm current assessment availability.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/revora-logo-horizontal.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/phone-repair-thane` }],
  }),
  component: LocalityPage,
});

function LocalityPage() {
  const serviceSchema = getServiceSchema({
    name: "Doorstep Mobile Repair & Buyback in Thane (West & Ghodbunder)",
    description: "Doorstep phone repair in Thane West, Ghodbunder & Majiwada. Phone buyback is only for devices that will not power on; contact Revora to confirm current assessment availability.",
    category: "https://schema.org/MobilePhoneRepairService",
    url: `${SITE_URL}/phone-repair-thane`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Locations", url: `${SITE_URL}/mobile-repair-mumbai` },
    { name: "Thane (West & Ghodbunder)", url: `${SITE_URL}/phone-repair-thane` },
  ]);

  const faqSchema = getFaqSchema(LOCAL_FAQS);

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
            <Link to="/mobile-repair-mumbai" className="hover:text-brand transition-colors">
              Mumbai Service Areas
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">Thane (West & Ghodbunder)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>Verified Service Hub • Thane (West & Ghodbunder)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-tight">
                Doorstep Mobile Repair & Dead Phone Buyback in Thane
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Looking for mobile repair in Thane or buyback for a phone that will not power on? Contact Revora with your model and area to confirm repair and dead-phone assessment availability.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-line text-xs sm:text-sm text-muted space-y-1">
                <span className="font-bold text-ink block">Key Landmarks & Coverage Areas:</span>
                <span>Ghodbunder Road, Majiwada, Naupada, Wagle Estate, Pokhran Road, Viviana Mall vicinity, and Thane Station West</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3 rounded-full bg-brand hover:bg-brand-ink text-white font-bold text-sm shadow-md transition-colors"
                >
                  Sell Dead Phone
                </a>
                <a
                  href={waHref("PAGE_CONTEXT", {
                    pageName: "Doorstep Mobile Repair in Thane (West & Ghodbunder)",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-ink border border-line font-bold text-sm shadow-xs transition-colors"
                >
                  Book Repair on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Benefits Card */}
            <div className="lg:col-span-5 bg-white border border-line rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-ink text-lg">Why Choose Revora in Thane (West & Ghodbunder)?</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>90-Day Warranty:</strong> Tested OEM-grade replacement displays, batteries, and charging ports.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Zero Visiting Fee:</strong> Doorstep pickup and evaluation is 100% free with zero hidden charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Instant UPI Payment:</strong> Ask about buyback for phones that will not power on. We will confirm any offer and payment details before you proceed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Wrench className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Zero-Fee Decline:</strong> If you decline our buyback offer, your device is returned with no fee.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dual Service Details Section */}
        <section className="py-12 bg-white border-y border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-50 border border-line space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink">Doorstep Mobile Repairs</h3>
              <p className="text-sm text-muted leading-relaxed">
                Whether you have a cracked iPhone display, Samsung AMOLED lines, or rapid battery drain, our mobile technician travels directly to your home or office in Thane with testing equipment and replacement modules.
              </p>
              <ul className="text-xs text-muted space-y-2 pt-2">
                <li>• Screen & OLED display replacement</li>
                <li>• Battery replacement with health calibration</li>
                <li>• Type-C / Lightning charging port replacement</li>
                <li>• Motherboard diagnostics for dead units</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-50 border border-line space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink">Dead Phone Buyback</h3>
              <p className="text-sm text-muted leading-relaxed">
                Have a dead phone that won't turn on (band phone bechna hai)? We calculate the salvage value of modular components and pay you instantly on the spot via UPI before taking the device.
              </p>
              <ul className="text-xs text-muted space-y-2 pt-2">
                <li>• Buyback is only for phones that will not power on</li>
                <li>• Phones that still turn on are not eligible, even if damaged</li>
                <li>• Contact us to confirm assessment availability and any offer</li>
                <li>• NIST 800-88 compliant data wiping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trade-In Calculator */}
        <section id="calculator" className="py-12 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-ink">Calculate Your Trade-In Valuation</h2>
              <p className="text-muted text-sm mt-2">Pick your smartphone brand and condition for a direct quote on WhatsApp with free doorstep pickup in Thane (West & Ghodbunder).</p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl font-black text-ink text-center">Frequently Asked Questions in Thane (West & Ghodbunder)</h2>
            <div className="space-y-4">
              {LOCAL_FAQS.map((faq, idx) => (
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
