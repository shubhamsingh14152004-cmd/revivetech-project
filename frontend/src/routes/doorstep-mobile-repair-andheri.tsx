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
    question: "How does doorstep mobile repair work in Andheri (East & West)?",
    answer:
      "When you book a repair, our verified technician arrives at your home or office in Andheri (East & West) carrying genuine OEM-grade replacement parts and diagnostic equipment. Most repairs like screens and batteries are completed right in front of you.",
  },
  {
    question: "Do you buy phones that will not power on in Andheri (East & West)?",
    answer:
      "Revora buys phones only when they will not power on. Share the model and location to ask whether an assessment is available.",
  },
  {
    question: "Is there any visiting or inspection fee in Andheri (East & West)?",
    answer:
      "No! Doorstep pickup and evaluation is completely free across Andheri (East & West) and the entire Mumbai Metropolitan Region with zero hidden visiting charges.",
  },
  {
    question: "What happens if I decline the buyback valuation offer?",
    answer:
      "You have complete freedom to decline. If the verified condition results in an offer that you decline, your phone is returned immediately with zero cancellation fee.",
  },
  {
    question: "What warranty do you offer on repairs in Andheri (East & West)?",
    answer:
      "All replacement screens, batteries, and hardware components come with Revora's official 90-day warranty covering manufacturing defects and touch unresponsiveness.",
  },
];

export const Route = createFileRoute("/doorstep-mobile-repair-andheri")({
  head: () => ({
    meta: [
      {
        title: "Doorstep Mobile Repair & Buyback in Andheri | Revora",
      },
      {
        name: "description",
        content: "Fast doorstep mobile phone repair & dead phone buyback in Andheri East & West, Lokhandwala & MIDC. 90-day warranty, tested parts, and instant UPI payment.",
      },
      {
        name: "keywords",
        content: "doorstep mobile repair Andheri, phone repair Andheri East, mobile repair Lokhandwala, sell dead phone Andheri, iPhone repair Andheri West, mobile screen repair MIDC",
      },
      {
        property: "og:title",
        content: "Doorstep Mobile Repair & Buyback in Andheri | Revora",
      },
      {
        property: "og:description",
        content: "Fast doorstep mobile phone repair & dead phone buyback in Andheri East & West, Lokhandwala & MIDC. 90-day warranty, tested parts, and instant UPI payment.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/doorstep-mobile-repair-andheri`,
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
        content: "Doorstep Mobile Repair & Buyback in Andheri | Revora",
      },
      {
        name: "twitter:description",
        content: "Fast doorstep mobile phone repair & dead phone buyback in Andheri East & West, Lokhandwala & MIDC. 90-day warranty, tested parts, and instant UPI payment.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/revora-logo-horizontal.png`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/doorstep-mobile-repair-andheri` }],
  }),
  component: LocalityPage,
});

function LocalityPage() {
  const serviceSchema = getServiceSchema({
    name: "Doorstep Mobile Repair & Buyback in Andheri (East & West)",
    description: "Fast doorstep mobile phone repair & dead phone buyback in Andheri East & West, Lokhandwala & MIDC. 90-day warranty, tested parts, and instant UPI payment.",
    category: "https://schema.org/MobilePhoneRepairService",
    url: `${SITE_URL}/doorstep-mobile-repair-andheri`,
  });

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Locations", url: `${SITE_URL}/mobile-repair-mumbai` },
    { name: "Andheri (East & West)", url: `${SITE_URL}/doorstep-mobile-repair-andheri` },
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
            <span className="text-brand font-semibold">Andheri (East & West)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>Verified Service Hub • Andheri (East & West)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight leading-tight">
                Doorstep Mobile Repair & Phone Buyback in Andheri
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Living or working in Andheri East or West? Revora provides professional doorstep mobile phone repairs and instant phone buyback right at your doorstep. We service corporate offices in MIDC and residences across Lokhandwala with zero visiting fee.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-line text-xs sm:text-sm text-muted space-y-1">
                <span className="font-bold text-ink block">Key Landmarks & Coverage Areas:</span>
                <span>Lokhandwala Complex, Seven Bungalows, Versova Link Road, Chakala, Sakinaka, MIDC Andheri, and JB Nagar</span>
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
                    pageName: "Doorstep Mobile Repair in Andheri (East & West)",
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
              <h3 className="font-bold text-ink text-lg">Why Choose Revora in Andheri (East & West)?</h3>
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
                Our certified technicians bring genuine screens, fresh batteries, and charging flex assemblies to your location in Andheri, completing repairs in your direct presence.
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
                Want to sell a phone that will not power on in Andheri? Send us its model and your area to ask whether an assessment is available. We will confirm any offer and payment details before you proceed.
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
              <p className="text-muted text-sm mt-2">Pick your smartphone brand and condition for a direct quote on WhatsApp with free doorstep pickup in Andheri (East & West).</p>
            </div>
            <TradeInCalculator />
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl font-black text-ink text-center">Frequently Asked Questions in Andheri (East & West)</h2>
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
