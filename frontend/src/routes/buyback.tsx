import React from"react";
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
 ShieldCheck,
 Building2,
 Lock,
 Recycle,
 Coins,
 CheckCircle2,
 ArrowRight,
 Sparkles,
 FileText,
 Truck,
 PhoneCall,
} from"lucide-react";
import heroPhone from"../assets/hero-phone.jpg";
import { siteConfig } from "../config/siteConfig";

const FAQS = [
 {
 question:"What is the difference between trade-in and selling for cash?",
 answer:
"Contact Revora with your phone model and condition to ask about an assessment. If a quote is provided, confirm the final offer, payment method, and applicable terms before deciding.",
 },
 {
 question:"Do you accept corporate and bulk phone buyback orders?",
 answer:
"Contact us with your organization’s requirements and device details. We can confirm whether a bulk buyback assessment is available and discuss applicable documentation and data-handling terms.",
 },
 {
 question:"How is device data sanitized before refurbishing or recycling?",
 answer:
"Before handing over a working device, back up your data, sign out of accounts, remove SIM and memory cards, and factory-reset it. Contact Revora first if a device cannot be powered on, and confirm the handling process before proceeding.",
 },
 {
 question:"What happens to phones that cannot be repaired or refurbished?",
 answer:
"Ask Revora how an unrepairable or non-working device can be handled. Confirm any recycling arrangements and applicable terms directly with the team.",
 },
];

export const Route = createFileRoute("/buyback")({
 head: () => ({
 meta: [
 {
 title:"Mobile Phone Buyback & Trade-In Program | Revora",
 },
 {
 name:"description",
 content:
"Ask Revora about selling or trading in a phone. Share the model and condition to confirm whether an assessment is available in your area.",
 },
 {
 name:"keywords",
 content:
"phone buyback, mobile phone trade in, corporate phone buyback, smartphone trade in program, itad phone recycling, device buyback, sell old phone fleet",
 },
 {
 property:"og:title",
 content:"Mobile Phone Buyback & Trade-In Program | Revora",
 },
 {
 property:"og:description",
 content:
"Phone buyback enquiries for Mumbai, Navi Mumbai, and Thane. Contact Revora to confirm assessment availability and terms.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/buyback`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/buyback` }],
 }),
 component: BuybackPage,
});

function BuybackPage() {
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Buyback Program", url: `${SITE_URL}/buyback` },
 ]);

 const serviceSchema = getServiceSchema({
 name:"Smartphone buyback enquiries",
 description:
"Phone buyback enquiries for individuals and organizations. Confirm assessment availability, any final offer, payment, and data-handling terms with Revora.",
 serviceType:"Mobile phone buyback enquiries",
 url: `${SITE_URL}/buyback`,
 });

 const faqSchema = getFaqSchema(FAQS);

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
 <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6">
 {/* Breadcrumbs */}
 <div className="border-b border-line bg-white py-3 mb-6">
 <div className="text-xs text-slate-500 flex items-center gap-2">
 <Link to="/" className="hover:text-brand transition-colors">
 Home
 </Link>
 <span>/</span>
 <span className="text-brand font-medium">Buyback Program</span>
 </div>
 </div>

 {/* Hero Section */}
 <section className="relative py-10 text-center max-w-3xl mx-auto mb-10">
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
 <Recycle className="w-3.5 h-3.5 text-brand" />
 Phone buyback enquiries
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
 Phone Buyback{""}
 <span className="text-brand">Enquiries</span>
 </h1>

 <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
 Share your device model, condition, and location to ask about an assessment. We can confirm current availability, any final offer, and applicable terms before you decide.
 </p>

 <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-brand" />
 <span>Mumbai · Navi Mumbai · Thane</span>
 </div>
 <div className="flex items-center gap-2">
 <FileText className="w-4 h-4 text-brand" />
 <span>Availability confirmed by enquiry</span>
 </div>
 <div className="flex items-center gap-2">
 <Coins className="w-4 h-4 text-brand" />
 <span>Device assessment on request</span>
 </div>
 </div>
 </section>

 {/* Trade-in Calculator Section */}
 <section className="py-8 mb-14">
 <div className="mb-8 text-center">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Request a Buyback Assessment
 </h2>
 <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
 Share your device details to ask about assessment availability. Any estimate may change after the device is assessed.
 </p>
 </div>

 <TradeInCalculator />
 </section>

 {/* Corporate Fleet Buyback Highlights */}
 <section className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-line shadow-xs">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-tint text-brand-ink text-xs font-semibold mb-4 border border-brand/30">
 <Building2 className="w-3.5 h-3.5" />
 For Corporates & Startups
 </div>
 <h2 className="text-2xl sm:text-3xl font-bold text-ink leading-snug">
 Corporate IT Asset Disposition (ITAD) for Mobile Devices
 </h2>
 <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
 For bulk device enquiries, share the device count, models, condition, and location. Revora can confirm whether an assessment is available and discuss documentation, data handling, logistics, and payment terms.
 </p>

 <div className="mt-6 space-y-3">
 <div className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-semibold text-ink">Data handling</h4>
 <p className="text-xs text-slate-600">Back up and remove personal data before handover where possible. Contact us to confirm how non-working devices are handled.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-semibold text-ink">Device information</h4>
 <p className="text-xs text-slate-600">Share model, quantity, condition, and location so we can discuss assessment availability.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-semibold text-ink">Service terms</h4>
 <p className="text-xs text-slate-600">Confirm service area, collection options, documentation, and payment terms with Revora before proceeding.</p>
 </div>
 </div>
 </div>

 <div className="mt-8 flex flex-wrap gap-4">
 <a
 href="tel:+918591770877"
 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand hover:bg-brand-ink text-white text-sm font-semibold transition-colors shadow-md shadow-brand/20"
 >
 <PhoneCall className="w-4 h-4" />
 <span>Call Corporate Desk: +91 8591770877</span>
 </a>
 <a
 href={`mailto:${siteConfig.email}?subject=Corporate%20Buyback%20Inquiry`}
 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-line text-ink text-sm font-semibold transition-colors"
 >
 <span>Email Fleet Inquiry</span>
 </a>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="bg-background border border-line p-6 rounded-2xl">
 <div className="text-lg font-extrabold text-brand">Assessment</div>
 <div className="text-xs text-ink font-semibold mt-1">By device and condition</div>
 <p className="text-[11px] text-slate-600 mt-2">Contact Revora to confirm how your phone can be assessed.</p>
 </div>
 <div className="bg-background border border-line p-6 rounded-2xl">
 <div className="text-lg font-extrabold text-brand-ink">Final offer</div>
 <div className="text-xs text-ink font-semibold mt-1">Confirm before handover</div>
 <p className="text-[11px] text-slate-600 mt-2">Confirm payment method and applicable terms with Revora.</p>
 </div>
 <div className="bg-background border border-line p-6 rounded-2xl">
 <div className="text-lg font-extrabold text-brand">Service area</div>
 <div className="text-xs text-ink font-semibold mt-1">Mumbai region</div>
 <p className="text-[11px] text-slate-600 mt-2">Ask us to confirm availability for your location.</p>
 </div>
 <div className="bg-background border border-line p-6 rounded-2xl">
 <div className="text-lg font-extrabold text-brand-ink">Estimate</div>
 <div className="text-xs text-ink font-semibold mt-1">Not a final offer</div>
 <p className="text-[11px] text-slate-600 mt-2">The final offer may depend on an in-person device assessment.</p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQs */}
 <section className="mb-14 max-w-4xl mx-auto">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Phone Buyback & Trade-In FAQs
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
 </section>
 </main>

 <SiteFooter />
 </div>
 );
}
