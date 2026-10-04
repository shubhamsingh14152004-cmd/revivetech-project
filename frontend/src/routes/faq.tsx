import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getFaqSchema,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  HelpCircle,
  Search,
  Sparkles,
  ArrowRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const ALL_FAQS = [
  {
    category: "Phone Repairs",
    question: "How long does a typical phone repair take at Revora?",
    answer:
      "Most common smartphone repairs—such as screen replacement, battery swap, charging port repair, and camera lens replacement—take between 30 and 45 minutes on our certified bench desk. Motherboard micro-soldering or complex liquid damage treatments typically take 24 to 48 hours.",
  },
  {
    category: "Phone Repairs",
    question: "Do you use genuine OEM-grade replacement screens and parts?",
    answer:
      "Yes. We use certified OEM-grade displays with True Tone calibration for iPhones and genuine Dynamic AMOLED 120Hz panels with in-display fingerprint calibration for Samsung and Android flagships. All parts are rigorously bench-tested prior to installation.",
  },
  {
    category: "Phone Repairs",
    question: "Will my phone data be erased during a repair?",
    answer:
      "No! Hardware replacements like displays, batteries, cameras, and charging ports do not alter or wipe your flash memory storage. Your photos, contacts, WhatsApp chats, and apps remain 100% intact.",
  },
  {
    category: "Phone Repairs",
    question: "What does the 90-Day VIP Warranty cover?",
    answer:
      "Our 90-Day VIP Warranty covers touch digitizer unresponsiveness, ghost touching, color discolouration, premature battery drain, and replacement component craftsmanship against manufacturing defects. (Physical drops and accidental liquid spills occurring after repair are excluded).",
  },
  {
    category: "Selling & Buyback",
    question: "Can I sell a phone that is completely dead and won't turn on?",
    answer:
      "Yes! Revora buys completely non-functional, water-damaged, or motherboard-shorted phones. We salvage working IC chips, camera modules, and chassis brackets, and send non-recoverable materials to authorized e-waste recyclers. Choose 'Dead' in our calculator for an instant cash quote.",
  },
  {
    category: "Selling & Buyback",
    question: "How and when do I get paid after selling my phone?",
    answer:
      "Payment is executed instantly on the spot. Once our doorstep executive conducts a 5-minute physical and diagnostic verification, the agreed cash amount is transferred immediately via UPI (GPay, PhonePe, Paytm) or IMPS bank transfer.",
  },
  {
    category: "Selling & Buyback",
    question: "How do you ensure my personal data is permanently destroyed?",
    answer:
      "For bootable smartphones, we run automated NIST 800-88 compliant cryptographic multi-pass data wipes that render past user profiles, images, and data irretrievable. For permanently dead units, internal storage flash chips are physically shredded or demagnetized.",
  },
  {
    category: "Selling & Buyback",
    question: "Do I need the original box, bill, and accessories to sell?",
    answer:
      "Having the original box, bill, and charger increases your payout bonus, but they are not strictly mandatory. A valid government photo ID (Aadhaar or Driving License) is mandatory for anti-theft compliance.",
  },
  {
    category: "Logistics & Security",
    question: "How does the free doorstep pickup and return service work?",
    answer:
      "When booking a repair or selling a device, you select your address and a convenient time window. Our logistics partner arrives with tamper-evident, anti-static security pouches. You receive a digital tracking receipt the moment your phone is handed over.",
  },
  {
    category: "Logistics & Security",
    question: "What areas do you serve?",
    answer:
      "We provide express doorstep pickup in major metropolitan hubs and nationwide courier pickup across all serviced PIN codes in India. All parcels are fully transit-insured.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title: "Frequently Asked Questions — Phone Repair & Buyback | Revora",
      },
      {
        name: "description",
        content:
          "Got questions about phone repairs, selling dead phones, doorstep pickups, data wiping, or warranties? Find answers to all Revora frequently asked questions.",
      },
      {
        name: "keywords",
        content:
          "Revora FAQ, phone repair questions, sell dead phone questions, doorstep phone repair, mobile repair warranty, screen replacement time",
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions — Phone Repair & Buyback | Revora",
      },
      {
        property: "og:description",
        content:
          "Clear, honest answers about repair turnarounds, OEM parts, dead phone buybacks, and 90-day warranties.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/faq`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ]);

  const faqSchema = getFaqSchema(
    ALL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const categories = ["All", "Phone Repairs", "Selling & Buyback", "Logistics & Security"];

  const filteredFaqs = ALL_FAQS.filter((f) => {
    const matchesCategory =
      activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#475569] flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-semibold">FAQ</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-[#007F5F]" />
              Help Center & Knowledge Base
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A26] tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007F5F] to-[#005B46]">
                Questions
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Find instant answers to common questions about repairing your smartphone, selling old or dead devices for cash, doorstep courier security, and warranties.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-[#6B7280] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. screen, dead phone, warranty, doorstep)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#E5E7EB] text-[#102A26] placeholder-slate-400 text-sm focus:outline-none focus:border-[#007F5F] shadow-xs"
              />
            </div>
          </div>
        </section>

        {/* FAQ List with Category Tabs */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#007F5F] text-white shadow-md shadow-[#007F5F]/20"
                    : "bg-white text-[#475569] hover:text-[#102A26] border border-[#E5E7EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions Accordions */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-xs">
              <p className="text-[#6B7280] text-sm">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-xs font-semibold text-[#007F5F] hover:text-[#005B46] underline cursor-pointer"
              >
                Clear search and filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <details
                  key={index}
                  open={index === 0}
                  className="group bg-white border border-[#E5E7EB] rounded-xl p-5 open:bg-[#FAFAF7] transition-colors shadow-xs"
                >
                  <summary className="font-semibold text-[#102A26] cursor-pointer flex items-center justify-between text-base">
                    <span>{faq.question}</span>
                    <span className="text-[#007F5F] group-open:rotate-180 transition-transform ml-4">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 text-sm text-[#475569] leading-relaxed border-t border-[#E5E7EB] pt-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] uppercase font-semibold bg-[#DDF5EA] text-[#005B46] border border-[#43C59E]/30 mb-2">
                      {faq.category}
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* Need more help CTA card */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#DDF5EA] via-white to-[#DDF5EA] border border-[#43C59E]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h3 className="text-lg font-bold text-[#102A26]">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Our technicians are ready to assist you right now via call or chat.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white text-xs font-semibold transition-colors shadow-md shadow-[#007F5F]/20"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call +91 8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

