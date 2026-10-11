import React from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import {
 SeoJsonLd,
 getServiceSchema,
 getBreadcrumbSchema,
 getFaqSchema,
 SITE_URL,
} from"../components/SeoJsonLd";
import {
 ShieldCheck,
 Zap,
 Clock,
 CheckCircle2,
 ArrowRight,
 Sparkles,
 PhoneCall,
 Wrench,
 Smartphone,
 Eye,
 Layers,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const SCREEN_TYPES = [
 {
 type:"Glass-Only OCA Refurbishing",
 suitableFor:"Glass is shattered, but display colors and touch work perfectly.",
 benefit:"Retain your 100% original OEM OLED panel and save up to 40% cost.",
 time:"45 - 60 Mins",
 },
 {
 type:"Full OLED / Dynamic AMOLED Assembly",
 suitableFor:"Display has black bleeding spots, colored lines, or touch has dead zones.",
 benefit:"Brand new OEM-grade 120Hz display with full TrueTone & fingerprint compatibility.",
 time:"30 - 45 Mins",
 },
 {
 type:"In-Cell FHD+ IPS LCD Display",
 suitableFor:"Budget-friendly screen replacement for mid-range and budget smartphones.",
 benefit:"High brightness, durable Corning Gorilla Glass with zero ghost-touch issues.",
 time:"30 Mins",
 },
];

const FAQS = [
 {
 question:"What is the difference between glass replacement and screen replacement?",
 answer:
"A smartphone screen consists of three layers: outer protective glass, capacitive touch digitizer, and the internal OLED/LCD image panel. If your screen turns on clearly with no bleeding or lines, we can de-laminate only the broken glass using OCA lamination, saving you significant money. If the inner panel has ink spots, lines, or touch failure, the full screen assembly must be swapped.",
 },
 {
 question:"Will I lose my phone data during a screen replacement?",
 answer:
"No! Screen replacements do not touch your motherboard, flash storage, or software. Your photos, contacts, WhatsApp messages, and apps remain 100% untouched.",
 },
 {
 question:"Do replacement screens come with a warranty?",
 answer:
"Yes. Every screen installed by Revora comes with a 90-Day Priority Warranty against touch unresponsiveness, ghost touching, color discolouration, and manufacturing defects.",
 },
 {
 question:"Phone ki screen toot gayi hai: Kya sirf glass change ho sakta hai ya poora display badalna padega?",
 answer:
"Agar display me picture bilkul saaf aa rahi hai aur touch chal raha hai, to OCA lamination ke zariye sirf toota hua outer glass change ho sakta hai jisse aapka 40% tak paisa bachta hai. Agar display me ink spots, black spots ya color lines aa gayi hain, to complete assembly change karni padti hai.",
 },
];

export const Route = createFileRoute("/screen-repair")({
 head: () => ({
 meta: [
 {
 title:"Mobile Screen Replacement & Repair Near Me — Phone Ki Screen Toot Gayi | Revora",
 },
 {
 name:"description",
 content:
"Phone ki screen toot gayi? Fast mobile phone screen replacement. OEM OLED & glass repair for iPhone, Samsung, OnePlus & Xiaomi with tested parts. 90-day warranty & free doorstep pickup.",
 },
 {
 name:"keywords",
 content:
"phone ki screen toot gayi, mobile screen repair, screen replacement, mobile display repair, cracked screen repair, broken phone screen repair, phone display replacement, phone glass replacement, iPhone screen replacement, Samsung screen repair, screen repair near me",
 },
 {
 property:"og:title",
 content:"Mobile Screen Replacement & Repair Near Me — Phone Ki Screen Toot Gayi | Revora",
 },
 {
 property:"og:description",
 content:
"Cracked screen? Get OEM-grade screen replacement with 90-day warranty, zero data loss, and free doorstep collection.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/screen-repair`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/screen-repair` }],
 }),
 component: ScreenRepairPage,
});

function ScreenRepairPage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Repair", url: `${SITE_URL}/repair` },
 { name:"Screen Repair", url: `${SITE_URL}/screen-repair` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Mobile Phone Screen & Display Replacement",
 description:
"lab display replacement for cracked glass, broken OLED panels, and touch digitizer failures across all major smartphone models.",
 serviceType:"Smartphone Screen Repair",
 url: `${SITE_URL}/screen-repair`,
 });

 const faqSchema = getFaqSchema(FAQS);

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
 <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1">
 {/* Breadcrumb Navigation */}
 <div className="border-b border-line bg-white py-3">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
 <Link to="/" className="hover:text-brand transition-colors">
 Home
 </Link>
 <span>/</span>
 <Link to="/repair" className="hover:text-brand transition-colors">
 Repair
 </Link>
 <span>/</span>
 <span className="text-brand font-medium">Screen Repair</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-background to-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Eye className="w-3.5 h-3.5 text-brand" />
 OEM-Grade Calibration • Zero Data Loss assured
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Same-Day Mobile{""}
 <span className="text-brand">
 Screen Replacement
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Don't let a shattered glass or unresponsive touch slow you down. Revora replaces cracked smartphone screens with certified OEM-grade displays in just 30 to 45 minutes, backed by our comprehensive 90-Day Priority Warranty.
 </p>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
 <Link
 to="/repair"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-ink text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all hover:scale-105"
 >
 <Wrench className="w-4 h-4" />
 <span>Book Screen Repair Online</span>
 </Link>
 <a
 href="tel:+918591770877"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-line text-ink font-semibold text-sm transition-all"
 >
 <PhoneCall className="w-4 h-4 text-brand" />
 <span>Call Technician: +91 8591770877</span>
 </a>
 </div>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4 text-brand" />
 <span>30-45 Mins Average Fix</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-brand" />
 <span>90-Day Priority Touch Warranty</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-brand" />
 <span>Free Doorstep Pickup</span>
 </div>
 </div>
 </div>
 </section>

 {/* Screen Replacement Tiers */}
 <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Transparent Display Replacement Options
 </h2>
 <p className="text-slate-500 text-sm mt-2">
 We diagnose your phone honestly so you only pay for what actually needs fixing.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {SCREEN_TYPES.map((tier, idx) => (
 <div
 key={idx}
 className="bg-white border border-line p-6 rounded-2xl flex flex-col justify-between hover:border-brand transition-colors shadow-xs"
 >
 <div>
 <div className="w-10 h-10 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand mb-4">
 <Smartphone className="w-5 h-5" />
 </div>
 <h3 className="text-lg font-bold text-ink mb-2">{tier.type}</h3>
 <div className="text-xs text-brand font-semibold mb-2">
 {tier.time} Express Turnaround
 </div>
 <p className="text-xs text-slate-600 leading-relaxed mb-3">
 <strong className="text-ink">When to choose:</strong> {tier.suitableFor}
 </p>
 <p className="text-xs text-slate-600 leading-relaxed">
 <strong className="text-ink">Key benefit:</strong> {tier.benefit}
 </p>
 </div>
 <div className="mt-6 pt-4 border-t border-line">
 <Link
 to="/repair"
 className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-tint hover:bg-brand text-brand-ink hover:text-white text-xs font-semibold transition-all"
 >
 <span>Check Price & Book</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* FAQs */}
 <section className="py-14 bg-background border-t border-line">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Screen Replacement FAQs
 </h2>

 <div className="space-y-4">
 {FAQS.map((faq, index) => (
 <details
 key={index}
 className="group bg-white border border-line rounded-xl p-5 open:bg-slate-50 transition-colors shadow-xs"
 >
 <summary className="font-semibold text-ink cursor-pointer flex items-center justify-between text-base">
 <span>{faq.question}</span>
 <span className="text-brand group-open:rotate-180 transition-transform ml-4">
 ▼
 </span>
 </summary>
 <p className="mt-3 text-sm text-muted leading-relaxed border-t border-line pt-3">
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
