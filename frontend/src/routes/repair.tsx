import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { RepairBooking } from "../components/RepairBooking";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  Truck,
  CheckCircle2,
  Cpu,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const FAQS = [
  {
    question: "How fast is same-day mobile phone repair at Revora?",
    answer:
      "Most screen replacements, battery swaps, and camera lens fixes take only 30 to 45 minutes on our certified cleanroom benches. You can book an express slot online or request free doorstep courier collection.",
  },
  {
    question: "What warranty do you provide on phone repairs?",
    answer:
      "All phone repairs include our 90-Day VIP Warranty Shield covering touch responsiveness, display performance, and component craftsmanship against manufacturing defects.",
  },
  {
    question: "Do you use OEM-grade replacement parts?",
    answer:
      "Yes. We use certified OEM-grade displays with true color calibration and high-capacity battery cells tested to match original device specifications.",
  },
  {
    question: "Phone repair karwana hai: Kitna time lagta hai aur process kya hai?",
    answer:
      "Aap online booking karein ya +91 8591770877 par call karein. Screen aur battery replacement 30 se 45 minute me ho jata hai. Free doorstep pickup aur delivery provide ki jaati hai.",
  },
  {
    question: "Phone chalu nahi ho raha: Kya dead phone thik ho jayega?",
    answer:
      "Haan! Agar aapka phone band ho gaya hai ya chalu nahi ho raha hai, hamare cleanroom technicians motherboard micro-soldering aur power IC repair ke zariye use revive karte hain. 90-day warranty milti hai.",
  },
];

export const Route = createFileRoute("/repair")({
  head: () => ({
    meta: [
      {
        title: "Phone Repair Near Me — Mobile Repair Karwana Hai | Revora",
      },
      {
        name: "description",
        content:
          "Phone repair karwana hai? Expert mobile repair service. OEM screen replacement, battery swap & motherboard repair within 45 mins. Free doorstep pickup & 90-day warranty across India.",
      },
      {
        name: "keywords",
        content:
          "phone repair near me, mobile repair near me, phone repair karwana hai, mobile repair karwana hai, phone thik karwana hai, band phone repair, phone chalu nahi ho raha repair, mobile screen replacement, phone battery replacement, same day phone repair",
      },
      {
        property: "og:title",
        content: "Phone Repair Near Me — Mobile Repair Karwana Hai | Revora",
      },
      {
        property: "og:description",
        content:
          "Need phone repair? Certified cleanroom technicians fix cracked screens, dead batteries, and liquid damage within 45 mins. 90-day warranty & free doorstep pickup.",
      },
      { property: "og:url", content: `${SITE_URL}/repair` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/images/hero-phone.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Same-Day Mobile Phone Repair | Revora" },
      {
        name: "twitter:description",
        content: "OEM screen replacement, battery fixes & motherboard micro-soldering. Free doorstep pickup.",
      },
      { name: "twitter:image", content: `${SITE_URL}/images/hero-phone.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/repair` },
    ],
  }),
  component: RepairPage,
});

function RepairPage() {
  const serviceSchema = getServiceSchema({
    name: "Mobile Phone Repair Service",
    description:
      "Certified same-day mobile phone screen replacement, battery swap, and motherboard micro-soldering with 90-day warranty and free doorstep courier collection.",
    serviceType: "Mobile Phone Repair",
    url: `${SITE_URL}/repair`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Phone Repair", url: `${SITE_URL}/repair` },
  ]);

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white">
      <SeoJsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        {/* Hero Section */}
        <section className="relative pt-8 pb-12 text-center max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <li>
                <Link to="/" className="hover:text-[#007F5F] transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#007F5F] font-semibold">Phone Repair</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-4 py-1.5 text-xs font-semibold text-[#005B46] border border-[#43C59E]/30 mb-4">
            <Wrench className="h-3.5 w-3.5 text-[#007F5F]" />
            <span>Certified Cleanroom Phone Repair Lab</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#102A26] leading-tight">
            Fast, Certified <span className="text-[#007F5F]">Phone Repair Near You</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Cracked screen, fast-draining battery, or dead motherboard? Revora delivers precision repairs in 45 minutes using OEM-grade components, backed by a 90-day warranty and 100% free doorstep courier pickup.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#005B46]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E5E7EB] shadow-xs">
              <Clock className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>45-Min Express Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E5E7EB] shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>90-Day VIP Warranty</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E5E7EB] shadow-xs">
              <Truck className="h-3.5 w-3.5 text-[#007F5F]" />
              <span>Free Doorstep Pickup Across India</span>
            </div>
          </div>
        </section>

        {/* Repair Services Grid */}
        <section className="py-8 mb-12">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#007F5F] font-bold">
              Comprehensive Hardware Diagnostics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A26] mt-1">
              Common Phone Problems We Fix Daily
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              Cleanroom ESD-safe workstations ensure zero dust contamination during delicate internal servicing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white p-6 border border-[#E5E7EB] hover:border-[#007F5F] transition shadow-xs">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#DDF5EA] text-[#007F5F] mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">
                Screen & OLED Replacement
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Fix shattered glass, black spots, colored vertical lines, and unresponsive touch. Precision lamination restores factory touch response.
              </p>
              <Link
                to="/screen-repair"
                className="inline-flex items-center gap-1.5 text-xs text-[#007F5F] hover:underline font-bold mt-4"
              >
                <span>Learn about Screen Repair</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-[#E5E7EB] hover:border-[#007F5F] transition shadow-xs">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#DDF5EA] text-[#007F5F] mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">
                Battery Replacement
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Restore full day battery life. Brand-new high capacity cells solve rapid battery draining, random shutdowns, and battery swelling.
              </p>
              <Link
                to="/battery-replacement"
                className="inline-flex items-center gap-1.5 text-xs text-[#007F5F] hover:underline font-bold mt-4"
              >
                <span>Learn about Battery Repair</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-[#E5E7EB] hover:border-[#007F5F] transition shadow-xs">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#DDF5EA] text-[#007F5F] mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#102A26]">
                Motherboard Micro-Soldering
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Microscopic trace repair, Power IC chip replacement, audio codec rework, and NAND memory repair for phones declared dead elsewhere.
              </p>
              <Link
                to="/charging-port-repair"
                className="inline-flex items-center gap-1.5 text-xs text-[#007F5F] hover:underline font-bold mt-4"
              >
                <span>Charging & Board Fixes</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Booking Module */}
        <section className="py-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-[#007F5F] font-bold">
              Instant Online Reservation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] mt-1">
              Book Your Repair Slot (10-Digit Mobile Required)
            </h2>
          </div>
          <RepairBooking />
        </section>

        {/* Supported Brands Navigation */}
        <section className="py-12 border-t border-[#E5E7EB]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#102A26]">
              Specialized Repair By Brand
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your smartphone manufacturer for device-specific repair guides and pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            <Link
              to="/iphone-repair"
              className="p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] flex items-center justify-between group transition shadow-xs"
            >
              <span className="font-bold text-[#102A26] group-hover:text-[#007F5F]">Apple iPhone</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#007F5F]" />
            </Link>
            <Link
              to="/samsung-repair"
              className="p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] flex items-center justify-between group transition shadow-xs"
            >
              <span className="font-bold text-[#102A26] group-hover:text-[#007F5F]">Samsung Galaxy</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#007F5F]" />
            </Link>
            <Link
              to="/android-repair"
              className="p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] flex items-center justify-between group transition shadow-xs"
            >
              <span className="font-bold text-[#102A26] group-hover:text-[#007F5F]">OnePlus & Pixel</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#007F5F]" />
            </Link>
            <Link
              to="/android-repair"
              className="p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] flex items-center justify-between group transition shadow-xs"
            >
              <span className="font-bold text-[#102A26] group-hover:text-[#007F5F]">Xiaomi, Vivo & Oppo</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#007F5F]" />
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 border-t border-[#E5E7EB] max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#102A26]">
              Phone Repair FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-5 border border-[#E5E7EB] shadow-xs"
              >
                <h3 className="text-sm font-bold text-[#102A26]">
                  {faq.question}
                </h3>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
