import React, { useState } from"react";
import { createFileRoute, Link } from"@tanstack/react-router";
import { SiteHeader } from"../components/SiteHeader";
import { SiteFooter } from"../components/SiteFooter";
import {
 SeoJsonLd,
 getLocalBusinessSchema,
 getBreadcrumbSchema,
 getFaqSchema,
 SITE_URL,
} from"../components/SeoJsonLd";
import { waHref } from"../lib/whatsapp";
import {
 MapPin,
 Wrench,
 Truck,
 ShieldCheck,
 Clock,
 PhoneCall,
 CheckCircle2,
 Gift,
 Coins,
 Building2,
} from"lucide-react";
import { WhatsAppIcon } from"../components/WhatsAppIcon";
import heroPhone from"../assets/hero-phone.jpg";
import { api } from"../services/api";
import { toast } from"sonner";

const MUMBAI_LOCALITIES = [
"Andheri (East & West)",
"Bandra & Khar",
"Dadar & Lower Parel",
"Borivali & Kandivali",
"Goregaon & Malad",
"Powai & Chandivali",
"Ghatkopar & Vikhroli",
"Kurla & Chembur",
"Thane (West & Ghodbunder)",
"Navi Mumbai (Vashi, Nerul, Belapur)",
"Mira Road & Bhayandar",
"South Mumbai (Colaba, Nariman Point, Marine Lines)",
];

const FAQS = [
 {
 question:"Do you offer fast mobile phone repair across all areas of Mumbai?",
 answer:
"Yes! Our doorstep technicians cover Western Suburbs (Bandra to Borivali), Central Suburbs (Dadar to Mulund & Thane), Harbour Line, South Mumbai, and Navi Mumbai with fast fast technician dispatch.",
 },
 {
 question:"How fast can a technician reach my location in Mumbai?",
 answer:
"For express repair bookings, a technician arrives within 45 to 90 minutes of booking confirmation, carrying genuine OEM replacement displays and diagnostic tools.",
 },
 {
 question:"Can I sell a phone that will not power on in Mumbai?",
 answer:
"Revora buys phones only when they will not power on. Contact us with your model and Mumbai area to ask whether an assessment is available.",
 },
 {
 question:"Is there any extra pickup charge for Thane or Navi Mumbai?",
 answer:
"No! Doorstep service is completely free across Mumbai, Navi Mumbai, and Thane. No hidden travel or inspection fees are charged.",
 },
];

export const Route = createFileRoute("/mobile-repair-mumbai")({
 head: () => ({
 meta: [
 {
 title:"Mobile Phone Repair in Mumbai — Professional Doorstep Service | Revora",
 },
 {
 name:"description",
 content:
"Fast mobile phone repair in Mumbai. Fast screen replacement, battery repair & dead phone fix at your home or office. Free doorstep visit in Andheri, Bandra, Borivali, Thane & Navi Mumbai.",
 },
 {
 name:"keywords",
 content:
"mobile repair Mumbai, phone repair Mumbai, mobile repair near me Mumbai, sell dead phone Mumbai, dead phone buyback Mumbai, doorstep mobile repair Mumbai, iPhone repair Mumbai, Samsung repair Mumbai",
 },
 {
 property:"og:title",
 content:"Mobile Phone Repair in Mumbai — Professional Doorstep Service | Revora",
 },
 {
 property:"og:description",
 content:
"Fast mobile phone repairs & instant old phone buyback in Mumbai. Free doorstep visit, doorstep repair & 90-day warranty.",
 },
 {
 property:"og:url",
 content: `${SITE_URL}/mobile-repair-mumbai`,
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
 links: [{ rel:"canonical", href: `${SITE_URL}/mobile-repair-mumbai` }],
 }),
 component: MobileRepairMumbaiPage,
});

function MobileRepairMumbaiPage() {
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [area, setArea] = useState(MUMBAI_LOCALITIES[0]);
 const [issue, setIssue] = useState("Screen Replacement");
 const [isSubmitting, setIsSubmitting] = useState(false);

 const localBusinessSchema = getLocalBusinessSchema();
 const breadcrumbSchema = getBreadcrumbSchema([
 { name:"Home", url: SITE_URL },
 { name:"Mobile Repair Mumbai", url: `${SITE_URL}/mobile-repair-mumbai` },
 ]);
 const faqSchema = getFaqSchema(FAQS);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!name || !phone) {
 toast.error("Please enter your name and phone number");
 return;
 }
 setIsSubmitting(true);
 try {
 await api.submitRepairRequest({
 customerName: name,
 phoneNumber: phone,
 phoneBrand:"Mumbai Doorstep",
 phoneModel: area ||"Mumbai",
 serviceType:"Doorstep Repair Mumbai",
 problemDescription: issue,
 });
 toast.success("Mumbai Service Booked!", {
 description: `Our technician for ${area} will call you within 15 minutes to confirm timing.`,
 });
 setName("");
 setPhone("");
 } catch (err: any) {
 toast.error("Error booking request", { description: err.message });
 } finally {
 setIsSubmitting(false);
 }
 };

 return (
 <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
 <SeoJsonLd schema={[localBusinessSchema, breadcrumbSchema, faqSchema]} />
 <SiteHeader />

 <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6">
 {/* Breadcrumb Navigation */}
 <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
 <Link to="/" className="hover:text-brand transition">Home</Link>
 <span>/</span>
 <span className="text-brand font-semibold">Mobile Repair Mumbai</span>
 </nav>

 {/* Hero Header */}
 <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
 <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-ink border border-brand/30 bg-brand-tint">
 <MapPin className="h-3.5 w-3.5 text-brand" />
 <span>Serving All Localities Across Mumbai, Thane & Navi Mumbai</span>
 </div>

 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-tight">
 Mobile Phone Repair <span className="text-brand">In Mumbai</span>
 </h1>

 <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
 Book professional, fast mobile phone repair services in Mumbai. We provide certified certified screen replacement, battery fix, and dead motherboard repairs right at your doorstep with zero visiting fee.
 </p>

 <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-brand-ink">
 <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-brand" /> Free Doorstep Visit in Mumbai</span>
 <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand" /> Doorstep Repair</span>
 <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand" /> 90-Day Priority Warranty</span>
 </div>
 </div>

 {/* Quick Booking Form Card */}
 <section className="mb-14 max-w-2xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-line shadow-xs">
 <div className="text-center space-y-2 mb-6">
 <h2 className="text-2xl font-bold text-ink">Schedule Free Mumbai Doorstep Service</h2>
 <p className="text-xs text-slate-500">
 Select your Mumbai locality to dispatch the nearest verified mobile technician.
 </p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-4">
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">Your Full Name *</label>
 <input
 type="text"
 required
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Pooja Mehta"
 className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 outline-none focus:border-brand"
 />
 </div>

 <div className="grid sm:grid-cols-2 gap-4">
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">10-Digit Phone Number *</label>
 <input
 type="tel"
 required
 maxLength={10}
 value={phone}
 onChange={(e) => setPhone(e.target.value.replace(/\D/g,""))}
 placeholder="9820012345"
 className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 outline-none focus:border-brand"
 />
 </div>

 <div>
 <label className="text-xs font-semibold text-ink block mb-1">Mumbai Area / Locality *</label>
 <select
 value={area}
 onChange={(e) => setArea(e.target.value)}
 className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand"
 >
 {MUMBAI_LOCALITIES.map((loc) => (
 <option key={loc} value={loc}>{loc}</option>
 ))}
 </select>
 </div>
 </div>

 <div>
 <label className="text-xs font-semibold text-ink block mb-1">Required Service *</label>
 <select
 value={issue}
 onChange={(e) => setIssue(e.target.value)}
 className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand"
 >
 <option value="Screen Replacement">Mobile Screen Replacement (Free Tempered Glass)</option>
 <option value="Battery Replacement">Battery Replacement (100% Health)</option>
 <option value="Charging Port Repair">Charging Port Repair / Loose Pin</option>
 <option value="Dead Phone Repair">Dead Phone Repair (Won't Power On)</option>
 <option value="Sell Old Phone">Sell Old / Used Phone for Cash</option>
 </select>
 </div>

 <button
 type="submit"
 disabled={isSubmitting}
 className="w-full rounded-xl bg-brand hover:bg-brand-ink py-3.5 text-sm font-bold text-white shadow-md shadow-brand/20 transition cursor-pointer"
 >
 {isSubmitting ?"Dispatching Technician..." :"Book Free Doorstep Service in Mumbai"}
 </button>
 </form>

 <div className="mt-6 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs">
 <span className="text-slate-500">Direct Mumbai Support:</span>
 <div className="flex items-center gap-2">
 <a href="tel:8591770877" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-ink font-bold hover:text-brand transition border border-line">
 <PhoneCall className="h-3 w-3 text-brand" /> +91 8591770877
 </a>
 <a href={waHref("REPAIR", { note: "Repair in Mumbai" })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-tint text-brand-ink font-bold border border-brand/30">
 <WhatsAppIcon className="h-3 w-3 fill-brand" /> WhatsApp
 </a>
 </div>
 </div>
 </section>

 {/* Mumbai Coverage Localities Grid */}
 <section className="mb-14 rounded-3xl bg-white p-6 sm:p-10 border border-line space-y-6 shadow-xs">
 <div className="text-center max-w-2xl mx-auto space-y-2">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Mumbai Doorstep Coverage Areas
 </h2>
 <p className="text-xs text-slate-500">
 We dispatch mobile technicians across all residential and business hubs in the Mumbai Metropolitan Region:
 </p>
 </div>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
 {MUMBAI_LOCALITIES.map((loc) => (
 <div key={loc} className="rounded-xl bg-background border border-line p-3.5 flex items-center gap-2 text-ink">
 <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
 <span>{loc}</span>
 </div>
 ))}
 </div>
 </section>

 {/* FAQs */}
 <section className="mb-14 space-y-6">
 <div className="text-center max-w-2xl mx-auto space-y-2">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink">
 Mumbai Phone Repair & Selling FAQs
 </h2>
 <p className="text-xs text-slate-500">
 Answers for Mumbai customers regarding turnaround, visiting fees, and payment.
 </p>
 </div>

 <div className="grid gap-4 max-w-3xl mx-auto">
 {FAQS.map((faq, idx) => (
 <div key={idx} className="rounded-2xl bg-white p-5 border border-line space-y-2 shadow-xs">
 <h3 className="text-sm font-bold text-ink flex items-start gap-2">
 <span className="text-brand">Q.</span>
 <span>{faq.question}</span>
 </h3>
 <p className="text-xs text-muted leading-relaxed pl-5">
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
