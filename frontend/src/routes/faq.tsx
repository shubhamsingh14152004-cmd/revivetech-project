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
    question: "How long does a typical phone repair take at ReviveTech?",
    answer:
      "Most common smartphone repairs—such as screen replacement, battery swap, charging port repair, and camera lens replacement—take between 30 and 45 minutes on our certified cleanroom benches. Motherboard micro-soldering or complex liquid damage treatments typically take 24 to 48 hours.",
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
      "Yes! SellRepair buys completely non-functional, water-damaged, or motherboard-shorted phones. We salvage working IC chips, camera modules, and chassis brackets, and send non-recoverable materials to authorized e-waste recyclers. Choose 'Dead' in our calculator for an instant cash quote.",
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
        title: "Frequently Asked Questions — Phone Repair & Buyback | SellRepair",
      },
      {
        name: "description",
        content:
          "Got questions about phone repairs, selling dead phones, doorstep pickups, data wiping, or warranties? Find answers to all ReviveTech frequently asked questions.",
      },
      {
        name: "keywords",
        content:
          "ReviveTech FAQ, phone repair questions, sell dead phone questions, doorstep phone repair, mobile repair warranty, screen replacement time",
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions — Phone Repair & Buyback | SellRepair",
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
        content: heroPhone,
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
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">FAQ</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              Help Center & Knowledge Base
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Questions
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Find instant answers to common questions about repairing your smartphone, selling old or dead devices for cash, doorstep courier security, and warranties.
            </p>

            {/* Search Input */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. screen, dead phone, warranty, doorstep)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 shadow-xl"
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions Accordions */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-white/5 p-8">
              <p className="text-slate-400 text-sm">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-xs font-semibold text-purple-400 hover:text-purple-300 underline"
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
                  className="group bg-slate-900/50 border border-white/10 rounded-xl p-5 open:bg-slate-900/80 transition-colors"
                >
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between text-base">
                    <span>{faq.question}</span>
                    <span className="text-purple-400 group-open:rotate-180 transition-transform ml-4">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2">
                      {faq.category}
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          )}

          {/* Need more help CTA card */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-pink-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Our technicians are ready to assist you right now via call or chat.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-purple-900/30"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call +91 8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
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
