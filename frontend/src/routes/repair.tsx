import React, { useState } from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import { RepairBooking } from"../components/RepairBooking";
import {
 SeoJsonLd,
 getServiceSchema,
 getBreadcrumbSchema,
 getFaqSchema,
 SITE_URL,
} from"../components/SeoJsonLd";
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
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";
import { NAV_BRANDS } from "../content/nav";
import { ExperienceHighlights } from "../components/ExperienceHighlights";

const FAQS = [
 {
 question:"How do I ask about mobile phone repair at Revora?",
 answer:
"Share your phone model, symptoms, and location. We can discuss assessment, pricing, and current service availability before you decide.",
 },
 {
 question:"What warranty do you provide on phone repairs?",
 answer:
"Repair terms can vary by device and service. Contact us to confirm the terms that apply to your repair before proceeding.",
 },
 {
 question:"Do you use OEM-grade replacement parts?",
 answer:
"Parts and options vary by device and repair. Contact us with your model and we can discuss available options.",
 },
 {
 question:"Phone repair karwana hai: Kitna time lagta hai aur process kya hai?",
 answer:
"Aap online booking karein ya +91 8591770877 par call karein. Screen aur battery replacement 30 se 45 minute me ho jata hai. Free doorstep pickup aur delivery provide ki jaati hai.",
 },
 {
 question:"Phone chalu nahi ho raha: Kya dead phone thik ho jayega?",
 answer:
"Phone ke model aur symptoms ke saath humse contact karein. Assessment ke baad available repair options aur applicable terms discuss kiye ja sakte hain.",
 },
];

export const Route = createFileRoute("/repair")({
 head: () => ({
 meta: [
 {
 title:"Mobile Phone Repair in Mumbai | Revora",
 },
 {
 name:"description",
 content:
"Ask Revora about mobile phone repair in Mumbai, Navi Mumbai and Thane. Share your phone model and symptoms to discuss assessment, service options and availability.",
 },
 {
 name:"keywords",
 content:
"phone repair near me, mobile repair near me, phone repair karwana hai, mobile repair karwana hai, phone thik karwana hai, band phone repair, phone chalu nahi ho raha repair, mobile screen replacement, phone battery replacement, doorstep phone repair",
 },
 {
 property:"og:title",
 content:"Mobile Phone Repair in Mumbai | Revora",
 },
 {
 property:"og:description",
 content:
"Ask about phone repair options in Mumbai, Navi Mumbai and Thane. Share your phone model and symptoms with Revora.",
 },
 { property:"og:url", content: `${SITE_URL}/repair` },
 { property:"og:type", content:"website" },
 { property:"og:image", content: `${SITE_URL}/images/hero-phone.jpg` },
 { name:"twitter:card", content:"summary_large_image" },
 { name:"twitter:title", content:"Doorstep Mobile Phone Repair | Revora" },
 {
 name:"twitter:description",
 content:"OEM screen replacement, battery fixes & motherboard micro-soldering. Free doorstep pickup.",
 },
 { name:"twitter:image", content: `${SITE_URL}/images/hero-phone.jpg` },
 ],
 links: [
 { rel:"canonical", href: `${SITE_URL}/repair` },
 ],
 }),
 component: RepairPage,
});

function RepairPage() {
 const serviceSchema = getServiceSchema({
 name:"Mobile Phone Repair Service",
 description:
"Mobile phone repair enquiries for screen, battery, charging, and other device issues in Mumbai, Navi Mumbai and Thane.",
 serviceType:"Mobile Phone Repair",
 url: `${SITE_URL}/repair`,
 });

 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Phone Repair", url: `${SITE_URL}/repair` },
 ]);

 const faqSchema = getFaqSchema(FAQS);

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
 <SeoJsonLd schema={[serviceSchema, breadcrumbSchema, faqSchema]} />

 <SiteHeader />

 <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20">
 {/* Hero Section */}
 <section className="relative pt-8 pb-12 text-center max-w-3xl mx-auto">
 <nav aria-label="Breadcrumb" className="mb-4">
 <ol className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
 <li>
 <Link to="/" className="hover:text-brand transition">
 Home
 </Link>
 </li>
 <li>/</li>
 <li className="text-brand font-semibold">Phone Repair</li>
 </ol>
 </nav>

 <div className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-1.5 text-xs font-semibold text-brand-ink border border-brand/30 mb-4">
 <Wrench className="h-3.5 w-3.5 text-brand" />
 <span>Mobile phone repair enquiries</span>
 </div>

 <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
 Mobile Phone Repair <span className="text-brand">in Mumbai</span>
 </h1>

 <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
 Cracked screen, battery, charging, or other phone issue? Share your device model and symptoms to discuss repair options, pricing, and current availability.
 </p>

 </section>

 <ExperienceHighlights />

 {/* Repair Services Grid */}
 <section className="py-8 mb-12">
 <div className="text-center mb-10">
 <span className="text-xs uppercase tracking-widest text-brand font-bold">
 Comprehensive Hardware Diagnostics
 </span>
 <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mt-1">
 Common Phone Problems We Fix Daily
 </h2>
 <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
 Service options depend on the phone model, issue, and assessment.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 <div className="rounded-2xl bg-white p-6 border border-line hover:border-brand transition shadow-xs">
 <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand mb-4">
 <Sparkles className="h-5 w-5" />
 </div>
 <h3 className="text-lg font-bold text-ink">
 Screen & OLED Replacement
 </h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 Fix shattered glass, black spots, colored vertical lines, and unresponsive touch. Precision lamination restores factory touch response.
 </p>
 <Link
 to="/screen-repair"
 className="inline-flex items-center gap-1.5 text-xs text-brand hover:underline font-bold mt-4"
 >
 <span>Learn about Screen Repair</span>
 <ArrowRight className="h-3 w-3" />
 </Link>
 </div>

 <div className="rounded-2xl bg-white p-6 border border-line hover:border-brand transition shadow-xs">
 <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand mb-4">
 <Zap className="h-5 w-5" />
 </div>
 <h3 className="text-lg font-bold text-ink">
 Battery Replacement
 </h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 Restore full day battery life. Brand-new high capacity cells solve rapid battery draining, random shutdowns, and battery swelling.
 </p>
 <Link
 to="/battery-replacement"
 className="inline-flex items-center gap-1.5 text-xs text-brand hover:underline font-bold mt-4"
 >
 <span>Learn about Battery Repair</span>
 <ArrowRight className="h-3 w-3" />
 </Link>
 </div>

 <div className="rounded-2xl bg-white p-6 border border-line hover:border-brand transition shadow-xs">
 <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand mb-4">
 <Cpu className="h-5 w-5" />
 </div>
 <h3 className="text-lg font-bold text-ink">
 Motherboard Micro-Soldering
 </h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 Microscopic trace repair, Power IC chip replacement, audio codec rework, and NAND memory repair for phones declared dead elsewhere.
 </p>
 <Link
 to="/charging-port-repair"
 className="inline-flex items-center gap-1.5 text-xs text-brand hover:underline font-bold mt-4"
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
 <span className="text-xs uppercase tracking-widest text-brand font-bold">
 Instant Online Reservation
 </span>
 <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-1">
 Book Your Repair Slot (10-Digit Mobile Required)
 </h2>
 </div>
 <RepairBooking />
 </section>

 {/* Supported Brands Navigation */}
 <section className="py-12 border-t border-line">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold text-ink">
 Specialized Repair By Brand
 </h2>
 <p className="text-xs text-slate-500 mt-1">
 Select your smartphone manufacturer for device-specific repair guides and pricing.
 </p>
 </div>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
 {NAV_BRANDS.map(brand => (
 <Link
 key={brand.href}
 to={brand.href as any}
 className="p-4 rounded-xl bg-white border border-line hover:border-brand flex items-center justify-between group transition shadow-xs"
 >
 <span className="font-bold text-ink group-hover:text-brand">{brand.name}</span>
 <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand" />
 </Link>
 ))}
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-12 border-t border-line max-w-4xl mx-auto">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold text-ink">
 Phone Repair FAQs
 </h2>
 </div>
 <div className="space-y-4">
 {FAQS.map((faq, idx) => (
 <div
 key={idx}
 className="rounded-2xl bg-white p-5 border border-line shadow-xs"
 >
 <h3 className="text-sm font-bold text-ink">
 {faq.question}
 </h3>
 <p className="text-xs text-muted mt-2 leading-relaxed">
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
