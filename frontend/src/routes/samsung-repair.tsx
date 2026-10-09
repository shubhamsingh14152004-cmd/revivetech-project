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
 Layers,
 Cpu,
 RefreshCw,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const SAMSUNG_SERIES = [
"Galaxy S24 Ultra / S24+ / S24",
"Galaxy S23 Ultra / S23+ / S23",
"Galaxy S22 Ultra / S22+ / S22",
"Galaxy S21 FE / S21 Ultra",
"Galaxy Z Fold 6 / Fold 5 / Fold 4",
"Galaxy Z Flip 6 / Flip 5 / Flip 4",
"Galaxy Note 20 Ultra / Note 10+",
"Galaxy A55 / A54 / A35 / A34",
"Galaxy A73 / A53 / A52s",
"Galaxy M54 / M34 / F54",
];

const SAMSUNG_SERVICES = [
 {
 title:"Dynamic AMOLED 2X Display Replacement",
 desc:"Original 120Hz LTPO AMOLED panels with ultrasonic in-display fingerprint calibration and factory water-resistant adhesive seals.",
 time:"35 - 50 Mins",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"Galaxy Green Line & Screen Glitch Fix",
 desc:"Laser micro-bonding for Samsung AMOLED flex cables showing vertical green/pink lines after OTA software updates or drops.",
 time:"Same-Day",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"Galaxy Z Fold & Flip Hinge / Inner Screen Fix",
 desc:"Specialized ultra-thin glass (UTG) replacement, folding crease recalibration, and mechanical spine hinge cleaning.",
 time:"Same-Day / 24h",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"Super Fast Charging Port & Flex Cable",
 desc:"OEM 25W / 45W charging sub-board replacement for 'Moisture detected in charging port' errors, slow charge, or loose cables.",
 time:"30 - 45 Mins",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"Original High-Density Battery Replacement",
 desc:"Safe replacement of swollen, fast-draining Samsung lithium batteries with zero BMS safety code errors.",
 time:"30 - 40 Mins",
 warranty:"90-Day Priority Warranty",
 },
 {
 title:"Exynos / Snapdragon Logic Board Repair",
 desc:"Advanced reballing and repair for reboot loops, sudden death, camera black screen, and Wi-Fi/Bluetooth IC failure.",
 time:"Same-Day / 24h",
 warranty:"90-Day Priority Warranty",
 },
];

const FAQS = [
 {
 question:"Does the in-display ultrasonic fingerprint sensor work after screen replacement?",
 answer:
"Yes. We use genuine Dynamic AMOLED assemblies with integrated optical or ultrasonic fingerprint pass-through. Our technicians recalibrate the sensor following factory diagnostics.",
 },
 {
 question:"Can you fix the vertical green line on my Samsung Galaxy screen?",
 answer:
"Yes! Green or pink vertical lines usually stem from a micro-crack in the display driver flex COF (Chip-on-Film). Depending on the panel, we can laser-bond the flex cable or replace the AMOLED display assembly.",
 },
 {
 question:"Do you repair Samsung Galaxy Z Fold and Z Flip foldable phones?",
 answer:
"Yes. Our lab facility is equipped with vacuum lamination jigs and UTG (Ultra Thin Glass) alignment tools for Samsung Z Fold and Z Flip folding screens and gear hinges.",
 },
 {
 question:"Is there a warranty on Samsung repairs?",
 answer:
"Every Samsung Galaxy repair comes with Revora's comprehensive 90-Day Priority Warranty covering touch functionality and display performance against defects.",
 },
];

export const Route = createFileRoute("/samsung-repair")({
 head: () => ({
 meta: [
 {
 title:"Samsung Repair Near Me — Galaxy Screen, Green Line & Battery Fix | Revora",
 },
 {
 name:"description",
 content:
"Official-grade Samsung Galaxy phone repair. Dynamic AMOLED screens, green line laser repair, Z Fold/Flip hinge fix & battery swap. 90-day warranty & same-day service.",
 },
 {
 name:"keywords",
 content:
"Samsung repair near me, Samsung phone repair, Samsung Galaxy screen replacement, Samsung battery replacement, Samsung green line fix, Galaxy S24 repair, Galaxy Z Fold repair, fix Samsung phone",
 },
 {
 property:"og:title",
 content:"Samsung Repair Near Me — Galaxy Screen, Green Line & Battery Fix | Revora",
 },
 {
 property:"og:description",
 content:
"Precision repairs for Samsung Galaxy S, Fold, Flip, and A series. 100% genuine AMOLED, ultrasonic fingerprint retention, 90-day warranty.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/samsung-repair`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/samsung-repair` }],
 }),
 component: SamsungRepairPage,
});

function SamsungRepairPage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Repair", url: `${SITE_URL}/repair` },
 { name:"Samsung Repair", url: `${SITE_URL}/samsung-repair` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Samsung Galaxy Smartphone Repair",
 description:
"Certified Samsung Galaxy phone repairs including Dynamic AMOLED screen replacement, green line laser bonding, Z Fold/Flip UTG hinge repairs, and 45W fast-charging sub-boards.",
 serviceType:"Samsung Mobile Repair",
 url: `${SITE_URL}/samsung-repair`,
 });

 const faqSchema = getFaqSchema(FAQS);

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
 <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1">
 {/* Breadcrumb Navigation */}
 <div className="border-b border-line bg-white py-3">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-muted flex items-center gap-2">
 <Link to="/" className="hover:text-brand transition-colors">
 Home
 </Link>
 <span>/</span>
 <Link to="/repair" className="hover:text-brand transition-colors">
 Repair
 </Link>
 <span>/</span>
 <span className="text-brand font-semibold">Samsung Repair</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-transparent to-transparent">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Sparkles className="w-3.5 h-3.5 text-brand" />
 Dynamic AMOLED 2X Specialists • 90-Day Priority Warranty
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Certified{""}
 <span className="text-brand">
 Samsung Galaxy Repair
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 From flagship Galaxy S24 Ultra screens and Z Fold flexible displays to green line laser fixes and fast-charging port replacements, Revora provides lab-grade Samsung repairs with 100% functional fingerprint calibration.
 </p>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
 <Link
 to="/repair"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-ink text-white font-semibold text-sm shadow-md transition-all hover:scale-105"
 >
 <Wrench className="w-4 h-4 text-white" />
 <span>Book Samsung Repair Online</span>
 </Link>
 <a
 href="tel:+918591770877"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-background border border-line text-ink font-semibold text-sm transition-all shadow-xs"
 >
 <PhoneCall className="w-4 h-4 text-brand" />
 <span>Call Technician: +91 8591770877</span>
 </a>
 </div>

 <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted">
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4 text-brand" />
 <span>35-50 Min Express Turnaround</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-brand" />
 <span>90-Day Priority Warranty</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-brand" />
 <span>Ultrasonic Fingerprint Calibrated</span>
 </div>
 </div>
 </div>
 </section>

 {/* Samsung Services Grid */}
 <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Samsung Galaxy Specialized Repairs
 </h2>
 <p className="text-muted text-sm mt-2">
 Factory calibrated optical and electrical equipment for Samsung AMOLED, Z-Fold hinges, and motherboards.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {SAMSUNG_SERVICES.map((srv, idx) => (
 <div
 key={idx}
 className="bg-white border border-line p-6 rounded-2xl flex flex-col justify-between hover:border-brand transition-colors shadow-xs"
 >
 <div>
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand">
 <Cpu className="w-5 h-5 text-brand" />
 </div>
 <span className="text-xs px-2.5 py-1 rounded-full bg-brand-tint text-brand-ink border border-brand/30 font-semibold">
 {srv.time}
 </span>
 </div>
 <h3 className="text-lg font-bold text-ink mb-2">{srv.title}</h3>
 <p className="text-xs sm:text-sm text-muted leading-relaxed">
 {srv.desc}
 </p>
 </div>
 <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
 <span className="text-xs text-brand font-semibold">{srv.warranty}</span>
 <Link
 to="/repair"
 className="text-xs font-semibold text-ink hover:text-brand flex items-center gap-1"
 >
 <span>Book Fix</span>
 <ArrowRight className="w-3.5 h-3.5 text-brand" />
 </Link>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Models Supported */}
 <section className="py-12 bg-white border-y border-line">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl sm:text-2xl font-bold text-ink text-center mb-6">
 Popular Samsung Galaxy Models Serviced
 </h2>
 <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
 {SAMSUNG_SERIES.map((model, idx) => (
 <span
 key={idx}
 className="px-3.5 py-1.5 rounded-lg bg-background border border-line text-xs text-ink hover:border-brand transition-colors"
 >
 {model}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* FAQs */}
 <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Frequently Asked Questions About Samsung Repairs
 </h2>

 <div className="space-y-4">
 {FAQS.map((faq, index) => (
 <details
 key={index}
 className="group bg-white border border-line rounded-xl p-5 open:bg-background transition-colors shadow-xs"
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
 </section>
 </main>

 <SiteFooter />
 </div>
 );
}
