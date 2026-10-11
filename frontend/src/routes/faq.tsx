import React, { useState } from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import {
 SeoJsonLd,
 getFaqSchema,
 getBreadcrumbSchema,
 SITE_URL,
} from"../components/SeoJsonLd";
import { waHref } from"../lib/whatsapp";
import {
 HelpCircle,
 Search,
 Sparkles,
 ArrowRight,
 PhoneCall,
 MessageCircle,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const ALL_FAQS = [
  {
    category: "Selling & Buyback",
    question: "Where can I sell my dead phone in Mumbai?",
    answer:
      "You can sell non-functional, water-damaged, or completely dead phones (band phone becho) directly to Revora. We provide free doorstep pickup across Mumbai, Thane, and Navi Mumbai, inspect the salvage value of modular hardware components, and pay immediately via UPI or bank transfer before leaving.",
  },
  {
    category: "Selling & Buyback",
    question: "Who buys a phone that does not switch on?",
    answer:
      "Revora buys smartphones that do not power on or boot. Even when logic boards are shorted or water-damaged, modular parts such as OEM camera sensors, displays, speakers, and chassis retain salvage value. Non-recoverable materials are routed to authorized green e-waste recyclers.",
  },
  {
    category: "Selling & Buyback",
    question: "Where can I sell a broken or cracked iPhone?",
    answer:
      "You can sell broken, cracked, liquid-damaged, and dead iPhones with Revora. Simply select your model and condition in our valuation calculator or message us on WhatsApp to receive a direct quote and schedule free doorstep collection across Mumbai, Thane, and Navi Mumbai.",
  },
  {
    category: "Selling & Buyback",
    question: "Can I sell a water-damaged or liquid-submerged phone?",
    answer:
      "Yes! Even after severe liquid exposure, internal modular components often remain valuable. Revora evaluates water-damaged Apple and Android smartphones and provides direct on-the-spot payment without requiring you to visit a repair shop.",
  },
  {
    category: "Selling & Buyback",
    question: "What happens if I decline the final valuation offer at my doorstep?",
    answer:
      "You have zero obligation. If the physical condition verified by our technician results in a revised offer that you choose not to accept, you can decline with zero penalty. Your phone is returned immediately with zero visiting fee and zero cancellation charges.",
  },
  {
    category: "Selling & Buyback",
    question: "How do I sell my old phone for instant payment? (Purana phone becho)",
    answer:
      "If you want to sell your used phone (purana phone becho / dead phone bechna hai), select your brand and model on our calculator or contact us on WhatsApp. Our doorstep executive conducts a quick verification and transfers your payment instantly via UPI (GPay, PhonePe, Paytm) or IMPS before taking the phone.",
  },
  {
    category: "Selling & Buyback",
    question: "Do I need the original box, bill, and accessories to sell?",
    answer:
      "Having the original box, bill, and charger increases your device valuation, but they are not mandatory. A valid government photo ID (Aadhaar or Driving License) is required for legal ownership verification and anti-theft compliance.",
  },
  {
    category: "Selling & Buyback",
    question: "How do you ensure my personal data is permanently destroyed?",
    answer:
      "For bootable smartphones, we run automated NIST 800-88 compliant cryptographic sanitization that renders past profiles, photos, and accounts irretrievable. For permanently dead units, internal flash memory chips are physically decommissioned or destroyed before metal recycling.",
  },
  {
    category: "Phone Repairs",
    question: "Can I get doorstep mobile repair at my home or office? (Phone repair karwana hai)",
    answer:
      "Yes! For common repairs like cracked screens, battery replacements, and charging jack repairs, our mobile technician brings genuine replacement parts and precision tools directly to your doorstep in Mumbai, Thane, or Navi Mumbai, backed by our 90-day warranty.",
  },
  {
    category: "Phone Repairs",
    question: "Do you use genuine OEM-grade replacement screens and parts?",
    answer:
      "Yes. We use certified OEM-grade displays with proper calibration for iPhones and genuine Dynamic AMOLED panels with in-display fingerprint responsiveness for Samsung and Android flagships. All replacement modules are bench-tested before installation.",
  },
  {
    category: "Phone Repairs",
    question: "Will my phone data be erased during a repair?",
    answer:
      "No! Standard hardware replacements such as screens, batteries, cameras, and charging ports do not alter flash memory storage. Your photos, contacts, WhatsApp chats, and apps remain 100% intact.",
  },
  {
    category: "Phone Repairs",
    question: "What does the 90-Day Warranty cover?",
    answer:
      "Our 90-Day Warranty covers touch digitizer unresponsiveness, display flickering, premature battery capacity drop, and manufacturing defects on replacement parts. (Subsequent physical drops and liquid spills occurring after repair handover are excluded).",
  },
  {
    category: "Logistics & Service Areas",
    question: "Is doorstep phone pickup available across Mumbai, Thane, and Navi Mumbai?",
    answer:
      "Yes! Doorstep pickup and repair operates across Western Suburbs (Andheri, Bandra, Borivali, Goregaon, Malad), Central Suburbs (Dadar, Kurla, Chembur, Ghatkopar, Powai), Thane (Thane West, Ghodbunder, Majiwada), and Navi Mumbai (Vashi, Nerul, Belapur, Seawoods) with zero visiting fee.",
  },
];

export const Route = createFileRoute("/faq")({
 head: () => ({
 meta: [
 {
 title:"Frequently Asked Questions — Phone Repair & Buyback | Revora",
 },
 {
 name:"description",
 content:
"Got questions about phone repairs, selling dead phones, doorstep pickups, data wiping, or warranties? Find answers to all Revora frequently asked questions.",
 },
 {
 name:"keywords",
 content:
"Revora FAQ, phone repair questions, sell dead phone questions, doorstep phone repair, mobile repair warranty, screen replacement time",
 },
 {
 property:"og:title",
 content:"Frequently Asked Questions — Phone Repair & Buyback | Revora",
 },
 {
 property:"og:description",
 content:
"Clear, honest answers about repair turnarounds, OEM parts, dead phone buybacks, and 90-day warranties.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/faq`,
 },
 {
 property:"og:image",
 content: `${SITE_URL}/images/hero-phone.jpg`,
 },
 {
 name:"twitter:card",
 content:"summary_large_image",
 },
 ],
 links: [{ rel:"canonical", href: `${SITE_URL}/faq` }],
 }),
 component: FaqPage,
});

function FaqPage() {
 const [searchQuery, setSearchQuery] = useState("");
 const [activeCategory, setActiveCategory] = useState("All");

 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"FAQ", url: `${SITE_URL}/faq` },
 ]);

 const faqSchema = getFaqSchema(
 ALL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
 );

 const categories = ["All","Phone Repairs","Selling & Buyback","Logistics & Security"];

 const filteredFaqs = ALL_FAQS.filter((f) => {
 const matchesCategory =
 activeCategory ==="All" || f.category === activeCategory;
 const matchesSearch =
 searchQuery.trim() ==="" ||
 f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
 f.answer.toLowerCase().includes(searchQuery.toLowerCase());
 return matchesCategory && matchesSearch;
 });

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
 <SeoJsonLd schema={[breadcrumbSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1">
 {/* Breadcrumb Navigation */}
 <div className="border-b border-line bg-white py-3">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-muted flex items-center gap-2">
 <Link to="/" className="hover:text-brand transition-colors">
 Home
 </Link>
 <span>/</span>
 <span className="text-brand font-semibold">FAQ</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-transparent to-transparent">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <HelpCircle className="w-3.5 h-3.5 text-brand" />
 Help Center & Knowledge Base
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Frequently Asked{""}
 <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-ink">
 Questions
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Find instant answers to common questions about repairing your smartphone, selling old or dead devices for cash, doorstep courier security, and warranties.
 </p>

 {/* Search Input */}
 <div className="mt-8 max-w-xl mx-auto relative">
 <Search className="w-5 h-5 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
 <input
 type="text"
 placeholder="Search questions (e.g. screen, dead phone, warranty, doorstep)..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-line text-ink placeholder-slate-400 text-sm focus:outline-none focus:border-brand shadow-xs"
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
 ?"bg-brand text-white shadow-md shadow-brand/20"
 :"bg-white text-muted hover:text-ink border border-line"
 }`}
 >
 {cat}
 </button>
 ))}
 </div>

 {/* Questions Accordions */}
 {filteredFaqs.length === 0 ? (
 <div className="text-center py-12 bg-white rounded-2xl border border-line p-8 shadow-xs">
 <p className="text-muted text-sm">
 No matching questions found for"{searchQuery}".
 </p>
 <button
 onClick={() => {
 setSearchQuery("");
 setActiveCategory("All");
 }}
 className="mt-4 text-xs font-semibold text-brand hover:text-brand-ink underline cursor-pointer"
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
 className="group bg-white border border-line rounded-xl p-5 open:bg-background transition-colors shadow-xs"
 >
 <summary className="font-semibold text-ink cursor-pointer flex items-center justify-between text-base">
 <span>{faq.question}</span>
 <span className="text-brand group-open:rotate-180 transition-transform ml-4">
 ▼
 </span>
 </summary>
 <div className="mt-3 text-sm text-muted leading-relaxed border-t border-line pt-3">
 <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] uppercase font-semibold bg-brand-tint text-brand-ink border border-brand/30 mb-2">
 {faq.category}
 </span>
 <p>{faq.answer}</p>
 </div>
 </details>
 ))}
 </div>
 )}

 {/* Need more help CTA card */}
 <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-tint via-white to-brand-tint border border-brand/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
 <div>
 <h3 className="text-lg font-bold text-ink">Still have questions?</h3>
 <p className="text-xs sm:text-sm text-muted mt-1">
 Our technicians are ready to assist you right now via call or chat.
 </p>
 </div>
 <div className="flex items-center gap-3 shrink-0">
 <a
 href="tel:+918591770877"
 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-ink text-white text-xs font-semibold transition-colors shadow-md shadow-brand/20"
 >
 <PhoneCall className="w-3.5 h-3.5" />
 <span>Call +91 8591770877</span>
 </a>
 <a
 href={waHref("GENERAL")}
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

