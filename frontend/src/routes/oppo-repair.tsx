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
 Cpu,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const OPPO_SERVICES = [
 {
 title:"Curved 3D AMOLED Screen Replacement",
 desc:"Original AMOLED displays with 10-bit color accuracy, 120Hz refresh rates, and factory ultrasonic/optical fingerprint calibration.",
 time:"35 - 45 Mins",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"SuperVOOC 67W / 80W / 100W Charging Sub-Board",
 desc:"OEM Type-C dock sub-board swap retaining full SuperVOOC fast charging capability without heating or throttling.",
 time:"30 - 45 Mins",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"MariSilicon / Snapdragon Logic Board Repair",
 desc:"Micro-soldering repair for audio ICs, power ICs, and camera signal processing chips on Reno and Find series devices.",
 time:"Same-Day / 24h",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"High-Cycle Battery Replacement",
 desc:"Fresh lithium-ion polymer cells tested for 1,600+ charge cycles with factory battery health stats and zero swelling.",
 time:"30 Mins",
 warranty:"90-Day Priority Warranty",
 },
];

const FAQS = [
 {
 question:"Do you repair Oppo Reno and Find series smartphones?",
 answer:
"Yes. We specialize in Oppo Reno 12, 11, 10 series, Find X series, and F-series smartphones using genuine OEM parts on lab benches.",
 },
 {
 question:"Does SuperVOOC charging work after port replacement?",
 answer:
"Yes. We exclusively install genuine sub-boards featuring SuperVOOC communication ICs to ensure rapid battery charging.",
 },
 {
 question:"What warranty do you provide on Oppo phone repairs?",
 answer:
"All Oppo repairs include Revora's 90-Day Priority Warranty covering touch accuracy, display performance, and craftsmanship.",
 },
];

export const Route = createFileRoute("/oppo-repair")({
 head: () => ({
 meta: [
 {
 title:"Oppo Repair Near Me — Reno & Find Series Screen & Battery Fix | Revora",
 },
 {
 name:"description",
 content:
"Expert Oppo phone repair. Curved AMOLED screen replacement, SuperVOOC charge port & battery swap for Reno & Find series. 90-day warranty & free doorstep pickup.",
 },
 {
 name:"keywords",
 content:
"Oppo repair, Oppo repair near me, Oppo screen replacement, Oppo service center, Oppo SuperVOOC repair, Oppo Reno repair, Oppo battery replacement, Oppo Find X repair",
 },
 {
 property:"og:title",
 content:"Oppo Repair Near Me — Reno & Find Series Screen & Battery Fix | Revora",
 },
 {
 property:"og:description",
 content:
"Fast, reliable Oppo phone repairs. SuperVOOC fast charge retention, curved AMOLED screen replacement, and 90-day warranty.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/oppo-repair`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/oppo-repair` }],
 }),
 component: OppoRepairPage,
});

function OppoRepairPage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Repair", url: `${SITE_URL}/repair` },
 { name:"Oppo Repair", url: `${SITE_URL}/oppo-repair` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Oppo Smartphone Repair Service",
 description:
"Precision lab repair for Oppo smartphones including curved AMOLED display replacement, SuperVOOC fast-charging sub-boards, and battery swaps.",
 serviceType:"Oppo Mobile Repair",
 url: `${SITE_URL}/oppo-repair`,
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
 <span className="text-brand font-medium">Oppo Repair</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-background to-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Sparkles className="w-3.5 h-3.5 text-brand" />
 Oppo Reno & Find Specialists • SuperVOOC Ready
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Specialized{""}
 <span className="text-brand">
 Oppo Phone Repair
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Broken curved screen, fast-draining battery, or charging port issues on your Oppo Reno or Find phone? Revora provides lab-grade repairs with 90-day warranty coverage and free doorstep pickup.
 </p>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
 <Link
 to="/repair"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-ink text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all hover:scale-105"
 >
 <Wrench className="w-4 h-4" />
 <span>Book Oppo Repair Online</span>
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
 <span>35-45 Minute Express Turnaround</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-brand" />
 <span>90-Day Priority Warranty</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-brand" />
 <span>Free Doorstep Collection</span>
 </div>
 </div>
 </div>
 </section>

 {/* Services Grid */}
 <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Oppo Specialized Services
 </h2>
 <p className="text-slate-500 text-sm mt-2">
 Optical vacuum lamination and certified SuperVOOC hardware components.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {OPPO_SERVICES.map((srv, idx) => (
 <div
 key={idx}
 className="bg-white border border-line p-6 rounded-2xl flex flex-col justify-between hover:border-brand transition-colors shadow-xs"
 >
 <div>
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand">
 <Cpu className="w-5 h-5" />
 </div>
 <span className="text-xs px-2.5 py-1 rounded-full bg-brand-tint text-brand-ink border border-brand/30 font-medium">
 {srv.time}
 </span>
 </div>
 <h3 className="text-lg font-bold text-ink mb-2">{srv.title}</h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 {srv.desc}
 </p>
 </div>
 <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
 <span className="text-xs text-brand font-semibold">{srv.warranty}</span>
 <Link
 to="/repair"
 className="text-xs font-semibold text-brand hover:text-brand-ink flex items-center gap-1"
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
 <section className="py-14 bg-background border-t border-line">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Frequently Asked Questions About Oppo Repairs
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
