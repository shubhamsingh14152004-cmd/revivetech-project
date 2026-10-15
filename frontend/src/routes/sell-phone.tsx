import React, { useState } from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import { TradeInCalculator } from"../components/TradeInCalculator";
import {
 SeoJsonLd,
 getServiceSchema,
 getBreadcrumbSchema,
 getFaqSchema,
 SITE_URL,
} from"../components/SeoJsonLd";
import {
 Smartphone,
 ShieldCheck,
 Zap,
 Truck,
 CheckCircle2,
 Lock,
 ArrowRight,
 Sparkles,
 RefreshCw,
 Coins,
 AlertTriangle,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";

const FAQS = [
 {
 question:"Can I sell a completely dead phone that doesn't turn on?",
 answer:
"Yes. Revora's phone buyback is only for phones that will not power on. Share the model and your location so we can confirm whether an assessment is available.",
 },
 {
 question:"How and when do I receive payment for my old phone?",
 answer:
"We confirm any offer and the payment method with you after the phone is assessed. Contact us with the model and location for current availability.",
 },
 {
 question:"Is personal data safely removed from phones sold to Revora?",
 answer:
"A phone that will not turn on may still contain personal data. Ask us about data handling before arranging an assessment, and do not share passwords or account credentials over chat.",
 },
 {
 question:"Do I need the original box, bill, and charger to sell my phone?",
 answer:
"Tell us the phone model and your area first. We will explain what is needed if an assessment can be arranged; a box or charger does not change our dead-phone-only buyback policy.",
 },
 {
 question:"How do I ask about selling a dead phone in Mumbai?",
 answer:
"Send us the phone model and your Mumbai, Navi Mumbai, or Thane area on WhatsApp. We will confirm whether we can assess it and discuss any collection and payment details before you proceed.",
 },
 {
 question:"Do you buy phones with a cracked screen or that still work?",
 answer:
"No. Buyback is only for phones that will not power on. If a phone has a cracked screen or is old but still turns on, it is not eligible for buyback. You can ask us about repair separately.",
 },
];

export const Route = createFileRoute("/sell-phone")({
 head: () => ({
 meta: [
 {
 title:"Sell a Dead Phone in Mumbai | Revora Buyback",
 },
 {
 name:"description",
 content:
"Sell a dead phone that will not power on. Revora serves Mumbai, Navi Mumbai, and Thane; contact us to confirm assessment availability.",
 },
 {
 name:"keywords",
 content:
"sell dead phone Mumbai, dead phone buyback Mumbai, sell phone that will not turn on, dead mobile buyer Mumbai, band phone becho, dead phone price",
 },
 {
 property:"og:title",
 content:"Sell a Dead Phone in Mumbai | Revora Buyback",
 },
 {
 property:"og:description",
 content:
"Revora buys phones only when they will not power on. Ask about assessment availability in Mumbai, Navi Mumbai, and Thane.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/sell-phone`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/sell-phone` }],
 }),
 component: SellPhonePage,
});

function SellPhonePage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Sell Phone", url: `${SITE_URL}/sell-phone` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Dead Phone Buyback Enquiries",
 description:
"Buyback enquiries for mobile phones that will not power on in Mumbai, Navi Mumbai, and Thane. Contact Revora to confirm assessment availability and terms.",
 serviceType:"Mobile Phone Buyback & Recycling",
 url: `${SITE_URL}/sell-phone`,
 });

 const faqSchema = getFaqSchema(FAQS);

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
 <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6">
 {/* Breadcrumb Visual */}
 <div className="border-b border-line bg-white py-3 mb-6">
 <div className="text-xs text-slate-500 flex items-center gap-2">
 <Link to="/" className="hover:text-brand transition-colors">
 Home
 </Link>
 <span>/</span>
 <span className="text-brand font-medium">Sell Phone</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-10 text-center max-w-3xl mx-auto mb-10">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Sparkles className="w-3.5 h-3.5 text-brand" />
 Dead phones only · Mumbai, Navi Mumbai & Thane
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Sell a Dead Phone That Won't Turn On &{""}
 <span className="text-brand">
 Request a Buyback Assessment
 </span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Revora's buyback is only for phones that will not power on. Share your phone model and area to ask whether an assessment is available; we will confirm any offer, collection, and payment details with you first.
 </p>

 <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-brand" />
 <span>Offer confirmed after assessment</span>
 </div>
 <div className="flex items-center gap-2">
 <Truck className="w-4 h-4 text-brand" />
 <span>Ask about collection in your area</span>
 </div>
 <div className="flex items-center gap-2">
 <Lock className="w-4 h-4 text-brand" />
 <span>Ask us about data handling</span>
 </div>
 </div>
 </section>

 {/* Interactive Buyback Calculator Section */}
 <section className="py-8 mb-14">
 <div className="mb-8 text-center">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Request a Dead Phone Assessment
 </h2>
 <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
 Select your brand and model. We buy phones that will not power on only. Send your details to ask about assessment availability and any offer.
 </p>
 </div>

 <TradeInCalculator />
 </section>

 {/* Buyback eligibility */}
 <section className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-line shadow-xs">
 <div className="mx-auto max-w-3xl rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-8 text-center">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">What phones qualify for buyback?</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
 We consider phones that will not power on. A phone that still works is not eligible for buyback, even if it is old, scratched, or has a cracked screen. For a working phone with a fault, ask about repair instead.
 </p>
 <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
 <Link to="/sell-dead-phone" className="rounded-full bg-brand px-5 py-3 text-white hover:bg-brand-ink focus-ring">Dead phone buyback details</Link>
 <Link to="/repair" className="rounded-full border border-line bg-white px-5 py-3 text-ink hover:border-brand hover:text-brand focus-ring">Ask about repair</Link>
 </div>
 </div>
 </section>

 {/* 3 Step Process */}
 <section className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-line shadow-xs">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 How Revora Buyback Works
 </h2>
 <p className="text-slate-500 text-sm mt-2">
 Learn how to ask about an assessment for a phone that will not power on.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
 <div className="bg-background p-6 rounded-2xl border border-line relative">
 <span className="text-4xl font-black text-brand/10 absolute top-4 right-4">01</span>
 <div className="w-12 h-12 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand mb-4">
 <Zap className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-semibold text-ink">Share phone details</h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 Share the model, storage, and your area. We will confirm whether an assessment is available and discuss an offer after inspection.
 </p>
 </div>

 <div className="bg-background p-6 rounded-2xl border border-line relative">
 <span className="text-4xl font-black text-brand/10 absolute top-4 right-4">02</span>
 <div className="w-12 h-12 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand mb-4">
 <Truck className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-semibold text-ink">Confirm assessment availability</h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 We will let you know whether an assessment or collection can be arranged for your location before you decide.
 </p>
 </div>

 <div className="bg-background p-6 rounded-2xl border border-line relative">
 <span className="text-4xl font-black text-brand/10 absolute top-4 right-4">03</span>
 <div className="w-12 h-12 rounded-xl bg-brand-tint border border-brand/30 flex items-center justify-center text-brand mb-4">
 <Coins className="w-6 h-6" />
 </div>
 <h3 className="text-lg font-semibold text-ink">Review any offer first</h3>
 <p className="text-xs text-slate-600 mt-2 leading-relaxed">
 If we can assess the phone, we will explain any offer and payment details before you choose whether to proceed.
 </p>
 </div>
 </div>
 </section>

 {/* FAQs Section */}
 <section className="mb-14 max-w-4xl mx-auto">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Frequently Asked Questions About Selling Your Phone
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

 <div className="mt-12 text-center">
 <p className="text-sm text-slate-600">
 Prefer to repair your smartphone instead of selling it?
 </p>
 <Link
 to="/repair"
 className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-brand hover:text-brand-ink"
 >
 <span>Check Same-Day Phone Repair Options</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </section>
 </main>

 <SiteFooter />
 </div>
 );
}
