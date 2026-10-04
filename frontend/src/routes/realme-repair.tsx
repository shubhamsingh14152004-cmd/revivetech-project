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
  Cpu,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const REALME_SERVICES = [
  {
    title: "120Hz Ultra Smooth AMOLED Screen Replacement",
    desc: "Vibrant AMOLED and IPS displays with 100% responsive touch digitizer and optical in-display fingerprint scanner calibration.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Dart / SuperDart / UltraDart Fast Charging Port",
    desc: "Original Type-C charging docks supporting 33W, 67W, and 120W SuperDart protocol with dual-cell protection.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "High-Capacity Li-Po Battery Replacement",
    desc: "Fresh, factory-tested battery cells for Realme GT, Narzo, and numbered series with zero overheating and long endurance.",
    time: "30 Mins",
    warranty: "90-Day VIP Warranty",
  },
  {
    title: "Periscope Camera & Rear Glass Replacement",
    desc: "Precision lens replacement for 200MP and periscope zoom camera modules on Realme Pro+ smartphones.",
    time: "30 - 45 Mins",
    warranty: "90-Day VIP Warranty",
  },
];

const FAQS = [
  {
    question: "Do you repair both Realme GT and Narzo series smartphones?",
    answer:
      "Yes! We service all Realme smartphones including the flagship GT series, mid-range Number series (Realme 12, 11), Narzo series, and C-series phones.",
  },
  {
    question: "Does SuperDart / UltraDart charging work after port repair?",
    answer:
      "Yes. We install OEM sub-boards with genuine Dart Charge chips so your phone charges at peak factory wattage.",
  },
  {
    question: "What warranty do you provide on Realme repairs?",
    answer:
      "All Realme phone repairs include Revora's 90-Day VIP Warranty covering touch accuracy, display performance, and craftsmanship.",
  },
];

export const Route = createFileRoute("/realme-repair")({
  head: () => ({
    meta: [
      {
        title: "Realme Repair Near Me — GT, Narzo & Number Series Screen & Battery Fix | Revora",
      },
      {
        name: "description",
        content:
          "Expert Realme phone repair. AMOLED screen replacement, SuperDart charging port & battery swap for Realme GT, Narzo & Pro series. 90-day warranty & free doorstep pickup.",
      },
      {
        name: "keywords",
        content:
          "Realme repair, Realme repair near me, Realme screen replacement, Realme service center, Realme battery replacement, Realme charging port repair, Realme GT repair, Realme Narzo repair",
      },
      {
        property: "og:title",
        content: "Realme Repair Near Me — GT, Narzo & Number Series Screen & Battery Fix | Revora",
      },
      {
        property: "og:description",
        content:
          "Fast, certified Realme phone repairs. SuperDart fast charge retention, AMOLED screen replacement, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/realme-repair`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/hero-phone.jpg`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/realme-repair` }],
  }),
  component: RealmeRepairPage,
});

function RealmeRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Realme Repair", url: `${SITE_URL}/realme-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Realme Smartphone Repair Service",
    description:
      "Precision cleanroom repair for Realme smartphones including AMOLED display replacement, SuperDart charging sub-boards, and battery swaps.",
    serviceType: "Realme Mobile Repair",
    url: `${SITE_URL}/realme-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-[#007F5F] transition-colors">
              Repair
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-medium">Realme Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-[#FAFAF7] to-[#FAFAF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#007F5F]" />
              Realme GT & Narzo Specialists • SuperDart Ready
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A26] tracking-tight leading-tight">
              Specialized{" "}
              <span className="text-[#007F5F]">
                Realme Phone Repair
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Cracked screen, fast-draining battery, or charging port issues on your Realme smartphone? Revora provides cleanroom-grade repairs with 90-day warranty coverage and free doorstep pickup.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white font-semibold text-sm shadow-md shadow-[#007F5F]/20 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Realme Repair Online</span>
              </Link>
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#102A26] font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#007F5F]" />
                <span>Call Technician: +91 8591770877</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#007F5F]" />
                <span>30-45 Minute Express Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007F5F]" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#007F5F]" />
                <span>Free Doorstep Collection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26]">
              Realme Specialized Services
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Optical vacuum lamination and certified SuperDart hardware components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REALME_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] p-6 rounded-2xl flex flex-col justify-between hover:border-[#007F5F] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#DDF5EA] text-[#005B46] border border-[#43C59E]/30 font-medium">
                      {srv.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102A26] mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-xs text-[#007F5F] font-semibold">{srv.warranty}</span>
                  <Link
                    to="/repair"
                    className="text-xs font-semibold text-[#007F5F] hover:text-[#005B46] flex items-center gap-1"
                  >
                    <span>Book Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#FAFAF7] border-t border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] text-center mb-8">
              Frequently Asked Questions About Realme Repairs
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-[#E5E7EB] rounded-xl p-5 open:bg-slate-50 transition-colors shadow-xs"
                >
                  <summary className="font-semibold text-[#102A26] cursor-pointer flex items-center justify-between text-base">
                    <span>{faq.question}</span>
                    <span className="text-[#007F5F] group-open:rotate-180 transition-transform ml-4">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed border-t border-[#E5E7EB] pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
