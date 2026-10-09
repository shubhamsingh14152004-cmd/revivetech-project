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
 Layers,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const ANDROID_BRANDS = [
 {
 name:"OnePlus",
 models:"OnePlus 12 / 12R, OnePlus 11, 10 Pro, Nord 4 / CE 3",
 focus:"Alert slider, Warp/SuperVOOC charge port, 120Hz Fluid AMOLED",
 },
 {
 name:"Xiaomi / Redmi / POCO",
 models:"Xiaomi 14 / 13 Pro, Redmi Note 13 / 12, POCO X6 / F6",
 focus:"Motherboard CPU reballing, camera glass, HyperOS bootloop fix",
 },
 {
 name:"Vivo & iQOO",
 models:"Vivo X100 Pro, V30 / V29, iQOO 12 / Neo 9 Pro",
 focus:"Zeiss camera gimbal module, curved AMOLED touch, FlashCharge",
 },
 {
 name:"Oppo",
 models:"Find X7 / X6, Reno 12 / 11 Pro, F25 / F23",
 focus:"Curved display lamination, SuperVOOC battery, microphone flex",
 },
 {
 name:"Realme",
 models:"Realme GT 6, Realme 12 Pro+, Narzo 70 Pro",
 focus:"Periscope lens replacement, 120W charging dock, display repair",
 },
 {
 name:"Google Pixel",
 models:"Pixel 9 / 9 Pro, Pixel 8 / 8a, Pixel 7 / 6 Pro",
 focus:"Tensor overheating diagnosis, camera bar glass, fingerprint calibration",
 },
 {
 name:"Motorola",
 models:"Edge 50 Ultra / Fusion, Razr 50 / 40 Ultra, Moto G84",
 focus:"Razr flip display repair, Pantone curved glass, battery swap",
 },
];

const FAQS = [
 {
 question:"Do you maintain fast charging (VOOC, Warp, Dart, 120W HyperCharge) after repair?",
 answer:
"Yes! When we replace charging ports or battery assemblies on OnePlus, Xiaomi, Vivo, Oppo, or Realme phones, we use genuine sub-boards with fast-charging controller ICs to preserve high-wattage fast charging protocols.",
 },
 {
 question:"How do you repair POCO or Redmi CPU reboot loops / sudden death?",
 answer:
"Sudden death on certain Snapdragon-powered Redmi and POCO devices is caused by micro-fractures in lead-free CPU solder balls under high thermal stress. Our lab technicians perform precision micro-BGA reballing to permanently resolve the issue.",
 },
 {
 question:"Can you fix curved edge AMOLED screens without changing the entire frame?",
 answer:
"Yes. Using OCA optical vacuum lamination machines, if your AMOLED panel displays clear picture and touch functions normally, we can perform precision outer glass de-lamination, saving up to 50% compared to an entire assembly swap.",
 },
 {
 question:"What warranty do you provide on Android repairs?",
 answer:
"All Android phone repairs include Revora's 90-Day Priority Warranty covering touch accuracy, display clarity, and parts reliability.",
 },
];

export const Route = createFileRoute("/android-repair")({
 head: () => ({
 meta: [
 {
 title:"Android Phone Repair — OnePlus, Xiaomi, Vivo, Oppo, Realme, Pixel | Revora",
 },
 {
 name:"description",
 content:
"Expert Android phone repair. Fast screen replacement, battery swap, fast charging sub-board & motherboard CPU reballing for OnePlus, Xiaomi, Vivo, Oppo, Realme & Pixel.",
 },
 {
 name:"keywords",
 content:
"Android phone repair, Xiaomi repair, OnePlus repair, Vivo repair, Oppo repair, Realme repair, Motorola repair, Google Pixel repair, POCO repair, Android screen replacement, Android battery replacement",
 },
 {
 property:"og:title",
 content:"Android Phone Repair — OnePlus, Xiaomi, Vivo, Oppo, Realme, Pixel | Revora",
 },
 {
 property:"og:description",
 content:
"Specialized repairs for all major Android brands. SuperVOOC/HyperCharge retention, curved AMOLED lamination, 90-day warranty.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/android-repair`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/android-repair` }],
 }),
 component: AndroidRepairPage,
});

function AndroidRepairPage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Repair", url: `${SITE_URL}/repair` },
 { name:"Android Repair", url: `${SITE_URL}/android-repair` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Android Smartphone Multi-Brand Repair",
 description:
"Comprehensive multi-brand Android repair services covering OnePlus, Xiaomi, Vivo, Oppo, Realme, Google Pixel, and Motorola smartphones.",
 serviceType:"Android Phone Repair",
 url: `${SITE_URL}/android-repair`,
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
 <span className="text-brand font-medium">Android Repair</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-background to-background">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Sparkles className="w-3.5 h-3.5 text-brand" />
 Multi-Brand Android Specialists • SuperVOOC & HyperCharge Ready
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Expert Multi-Brand{""}
 <span className="text-brand">
 Android Phone Repair
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Fast, reliable repair solutions for OnePlus, Xiaomi, POCO, Vivo, Oppo, Realme, Motorola, and Google Pixel. From curved OLED glass replacement and fast-charging ports to CPU reballing, we restore performance to factory benchmarks.
 </p>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
 <Link
 to="/repair"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-ink text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all hover:scale-105"
 >
 <Wrench className="w-4 h-4" />
 <span>Book Android Repair Online</span>
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
 <span>30-45 Minute Express Bench</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-brand" />
 <span>90-Day Priority Warranty</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-brand" />
 <span>OEM Protocol Retention</span>
 </div>
 </div>
 </div>
 </section>

 {/* Brand Showcase Grid */}
 <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Android Brands We Service
 </h2>
 <p className="text-slate-500 text-sm mt-2">
 lab diagnosis and genuine replacement components across all leading Android manufacturers.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {ANDROID_BRANDS.map((brand, idx) => (
 <div
 key={idx}
 className="bg-white border border-line p-6 rounded-2xl flex flex-col justify-between hover:border-brand transition-colors shadow-xs"
 >
 <div>
 <div className="w-10 h-10 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand mb-4">
 <Cpu className="w-5 h-5" />
 </div>
 <h3 className="text-lg font-bold text-ink">{brand.name} Repair</h3>
 <div className="mt-2 text-xs text-brand font-semibold">
 Models: {brand.models}
 </div>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 Specialized Focus: {brand.focus}
 </p>
 </div>
 <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
 <span className="text-xs text-brand-ink font-semibold">90-Day Warranty</span>
 <Link
 to="/repair"
 className="text-xs font-semibold text-brand hover:text-brand-ink flex items-center gap-1"
 >
 <span>Book Repair</span>
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
 Frequently Asked Questions About Android Repairs
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
