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
    question: "How does doorstep mobile repair work in Navi Mumbai (Vashi, Nerul & Belapur)?",
    answer:
      "When you book a repair, our verified technician arrives at your home or office in Navi Mumbai (Vashi, Nerul & Belapur) carrying genuine OEM-grade replacement parts and diagnostic equipment. Most repairs like screens and batteries are completed right in front of you.",
  },
  {
    question: "Can I sell a dead or broken phone in Navi Mumbai (Vashi, Nerul & Belapur)?",
    answer:
      "Yes! Revora buys old, damaged, water-damaged, and completely dead phones across Navi Mumbai (Vashi, Nerul & Belapur). Our technician inspects the device at your doorstep and transfers payment immediately via UPI or bank transfer.",
  },
  {
    question: "Is there any visiting or inspection fee in Navi Mumbai (Vashi, Nerul & Belapur)?",
    answer:
      "No! Doorstep pickup and evaluation is completely free across Navi Mumbai (Vashi, Nerul & Belapur) and the entire Mumbai Metropolitan Region with zero hidden visiting charges.",
  },
  {
    question: "What happens if I decline the buyback valuation offer?",
    answer:
      "You have complete freedom to decline. If the verified condition results in an offer that you decline, your phone is returned immediately with zero cancellation fee.",
  },
  {
    question: "What warranty do you offer on repairs in Navi Mumbai (Vashi, Nerul & Belapur)?",
    answer:
      "All replacement screens, batteries, and hardware components come with Revora's official 90-day warranty covering manufacturing defects and touch unresponsiveness.",
  },
];

export const Route = createFileRoute("/phone-repair-navi-mumbai")({
  head: () => ({
    meta: [
      {
        title: "Phone Repair & Dead Phone Buyback Navi Mumbai | Revora",
      },
      {
        name: "description",
        content: "Doorstep mobile repair and dead phone buyback in Navi Mumbai: Vashi, Nerul, Belapur & Seawoods. Free doorstep pickup, 90-day warranty, and instant UPI payment.",
      },
      {
        name: "keywords",
        content: "phone repair Navi Mumbai, mobile repair Vashi, sell dead phone Navi Mumbai, doorstep mobile repair Nerul, iPhone repair Belapur, band phone becho Vashi",
      },
      {
        property: "og:title",
        content: "Phone Repair & Dead Phone Buyback Navi Mumbai | Revora",
      },
      {
        property: "og:description",
        content: "Doorstep mobile repair and dead phone buyback in Navi Mumbai: Vashi, Nerul, Belapur & Seawoods. Free doorstep pickup, 90-day warranty, and instant UPI payment.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/phone-repair-navi-mumbai`,
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
        content: "Phone Repair & Dead Phone Buyback Navi Mumbai | Revora",
      },
      {
        name: "twitter:description",
        content: "Doorstep mobile repair and dead phone buyback in Navi Mumbai: Vashi, Nerul, Belapur & Seawoods. Free doorstep pickup, 90-day warranty, and instant UPI payment.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/revora-logo-horizontal.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/phone-repair-navi-mumbai` }],
  }),
  component: LocalityPage,
});

function LocalityPage() {
  const serviceSchema = getServiceSchema({
    name: "Doorstep Mobile Repair & Buyback in Navi Mumbai (Vashi, Nerul & Belapur)",
    description: "Doorstep mobile repair and dead phone buyback in Navi Mumbai: Vashi, Nerul, Belapur & Seawoods. Free doorstep pickup, 90-day warranty, and instant UPI payment.",
    category: "https://schema.org/MobilePhoneRepairService",
    url: `${SITE_URL}/phone-repair-navi-mumbai`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Locations", url: `${SITE_URL}/mobile-repair-mumbai` },
    { name: "Navi Mumbai (Vashi, Nerul & Belapur)", url: `${SITE_URL}/phone-repair-navi-mumbai` },
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
            <span className="text-brand font-semibold">Navi Mumbai (Vashi, Nerul & Belapur)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>Verified Service Hub • Navi Mumbai (Vashi, Nerul & Belapur)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-tight">
                Doorstep Mobile Repair & Dead Phone Buyback in Navi Mumbai
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Need fast mobile screen replacement or want to sell a dead smartphone in Navi Mumbai? Revora provides certified doorstep mobile repairs backed by a 90-day warranty, plus transparent phone buyback with free doorstep pickup across Vashi, Nerul, Belapur, and Seawoods.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-line text-xs sm:text-sm text-muted space-y-1">
                <span className="font-bold text-ink block">Key Landmarks & Coverage Areas:</span>
                <span>Vashi Sector 17, Palm Beach Road, Nerul, Belapur CBD, Seawoods Grand Central, Sanpada, and Kopar Khairane</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3 rounded-full bg-brand hover:bg-brand-ink text-white font-bold text-sm shadow-md transition-colors"
                >
                  Sell Phone (Free Pickup)
                </a>
                <a
                  href={waHref("PAGE_CONTEXT", {
                    pageName: "Doorstep Mobile Repair in Navi Mumbai (Vashi, Nerul & Belapur)",
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
              <h3 className="font-bold text-ink text-lg">Why Choose Revora in Navi Mumbai (Vashi, Nerul & Belapur)?</h3>
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
                  <span><strong>Instant UPI Payment:</strong> Sell old or dead phones and get paid before the technician leaves.</span>
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
                Avoid travelling to crowded service centers in Vashi. Our mobile technician arrives at your home or office with bench-calibrated displays, batteries, and charging ports.
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
              <h3 className="text-xl font-bold text-ink">Sell Old & Dead Phones</h3>
              <p className="text-sm text-muted leading-relaxed">
                Got a phone with water damage or a motherboard failure? Sell it directly to Revora. We inspect hardware salvage value and pay you immediately via UPI or bank transfer with zero visiting charges.
              </p>
              <ul className="text-xs text-muted space-y-2 pt-2">
                <li>• Sell old & used phones for immediate UPI payment</li>
                <li>• Sell cracked, broken screen & water-damaged phones</li>
                <li>• Sell dead phones that do not turn on (band phone becho)</li>
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
              <p className="text-muted text-sm mt-2">Pick your smartphone brand and condition for a direct quote on WhatsApp with free doorstep pickup in Navi Mumbai (Vashi, Nerul & Belapur).</p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl font-black text-ink text-center">Frequently Asked Questions in Navi Mumbai (Vashi, Nerul & Belapur)</h2>
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
