import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  Truck,
  Wrench,
  Clock,
  ShieldCheck,
  Gift,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Smartphone,
  Layers,
  Zap,
  Battery,
  Flame,
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import heroPhone from "../assets/hero-phone.jpg";
import { api } from "../services/api";
import { toast } from "sonner";

const FAQS = [
  {
    question: "How does Doorstep Mobile Repair work with Revora?",
    answer:
      "It is 100% hassle-free: 1) Book your repair online or call/WhatsApp us at 8591770877. 2) Our verified cleanroom technician visits your home or office in Mumbai at your selected time. 3) The technician diagnoses your device and completes the fix (screen, battery, port, or speaker) in 30 to 45 minutes right in front of you.",
  },
  {
    question: "Are there any doorstep pickup or visiting charges?",
    answer:
      "Zero! Our doorstep pickup and delivery service is completely free in Mumbai, Navi Mumbai, and Thane. You only pay for the actual repair and parts replacement as quoted upfront.",
  },
  {
    question: "What is the Free Glass Protector and Cover offer?",
    answer:
      "For every screen or hardware repair booked with us, you receive a complimentary premium 9H tempered glass screen protector and a protective phone cover installed free of charge.",
  },
  {
    question: "Do you offer warranty on doorstep repairs?",
    answer:
      "Yes. All hardware repairs come with an official 90-Day VIP Warranty certificate covering touch accuracy, display color fidelity, and replacement part reliability.",
  },
  {
    question: "Which phone brands can be repaired at doorstep?",
    answer:
      "We provide doorstep service for Apple iPhone, Samsung Galaxy, OnePlus, Xiaomi, Redmi, Vivo, Oppo, Realme, Motorola, Google Pixel, and POCO models.",
  },
];

export const Route = createFileRoute("/doorstep-mobile-repair")({
  head: () => ({
    meta: [
      {
        title: "Doorstep Mobile Repair Near Me — 45-Min Service at Home | Revora",
      },
      {
        name: "description",
        content:
          "Book doorstep mobile phone repair in Mumbai & across India. Screen replacement, battery repair & charging port fix in 45 minutes. Free tempered glass, cover & 90-day warranty.",
      },
      {
        name: "keywords",
        content:
          "doorstep mobile repair, mobile repair at home, phone repair near me, mobile repair near me, mobile repair service near me, mobile repair service, broken phone repair, screen replacement, battery replacement, charging port repair, phone repair Mumbai, mobile repair Mumbai",
      },
      {
        property: "og:title",
        content: "Doorstep Mobile Repair Near Me — 45-Min Home Service | Revora",
      },
      {
        property: "og:description",
        content:
          "Expert mobile phone repair at your home or office. Same-day 45-min fix with OEM parts, free tempered glass + cover, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/doorstep-mobile-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/doorstep-mobile-repair` }],
  }),
  component: DoorstepRepairPage,
});

function DoorstepRepairPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("Screen Broken / Touch Issue");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Doorstep Mobile Repair", url: `${SITE_URL}/doorstep-mobile-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Doorstep Mobile Phone Repair Service",
    description:
      "Express same-day mobile phone repair at home or office with 45-minute turnaround and 90-day warranty.",
    url: `${SITE_URL}/doorstep-mobile-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !model) {
      toast.error("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await api.submitRepairRequest({
        customerName: name,
        phoneNumber: phone,
        phoneBrand: model.split(" ")[0] || "Smartphone",
        phoneModel: model,
        serviceType: "Doorstep Repair",
        problemDescription: issue,
      });
      toast.success("Doorstep Repair Booked!", {
        description: "Our Mumbai technician will call you within 15 minutes to confirm the visit time.",
      });
      setName("");
      setPhone("");
      setModel("");
    } catch (err: any) {
      toast.error("Booking error", { description: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#007F5F] transition">Home</Link>
          <span>/</span>
          <span className="text-[#007F5F] font-semibold">Doorstep Mobile Repair</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#005B46] border border-[#43C59E]/30 bg-[#DDF5EA]">
            <Truck className="h-3.5 w-3.5 text-[#007F5F]" />
            <span>Zero Visiting Fee · Free Doorstep Pickup & Drop · 45-Min Fix</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#102A26] leading-tight">
            Doorstep Mobile Repair <span className="text-[#007F5F]">At Your Home</span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Get your mobile phone repaired at your doorstep in Mumbai or via insured pan-India pickup. From cracked screens and draining batteries to dead motherboards, our certified technicians fix it in under 45 minutes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-[#005B46]">
            <span className="flex items-center gap-1.5"><Gift className="h-4 w-4 text-[#007F5F]" /> Free Tempered Glass + Back Cover</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#007F5F]" /> 45-Min Turnaround</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#007F5F]" /> 90-Day VIP Warranty</span>
          </div>
        </div>

        {/* Booking Form Card */}
        <section className="mb-14 max-w-2xl mx-auto rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-10 shadow-xs relative">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-[#102A26]">Book Your Doorstep Technician Visit</h2>
            <p className="text-xs text-slate-500">
              Technician reaches your doorstep with original OEM parts & diagnostic toolkit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[#102A26] block mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rohit Sharma"
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none focus:border-[#007F5F]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#102A26] block mb-1">10-Digit Mobile Number *</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="9876543210"
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none focus:border-[#007F5F] font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#102A26] block mb-1">Phone Model *</label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. iPhone 13, OnePlus 11"
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none focus:border-[#007F5F]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#102A26] block mb-1">Select Phone Issue *</label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] outline-none focus:border-[#007F5F]"
              >
                <option value="Screen Broken / Touch Issue">Screen Broken / Cracked Glass / Touch Not Working</option>
                <option value="Battery Draining / Swollen">Battery Draining Fast / Battery Replacement</option>
                <option value="Phone Not Charging">Charging Port Broken / Phone Not Charging</option>
                <option value="Phone Dead / Not Turning On">Phone Dead / Band Phone / Not Turning On</option>
                <option value="Water Damage">Water / Liquid Spilled</option>
                <option value="Camera / Speaker Fault">Camera Blurred / Speaker Crackling</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#007F5F] hover:bg-[#005B46] py-3.5 text-sm font-bold text-white shadow-md shadow-[#007F5F]/20 transition cursor-pointer"
            >
              {isSubmitting ? "Booking Your Technician..." : "Confirm Doorstep Booking (Free Pickup)"}
            </button>
          </form>

          {/* Direct Phone & WhatsApp contact */}
          <div className="mt-6 pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">Need immediate help? Call or WhatsApp:</span>
            <div className="flex items-center gap-2">
              <a href="tel:8591770877" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-[#102A26] font-mono font-bold hover:text-[#007F5F] transition border border-[#E5E7EB]">
                <PhoneCall className="h-3 w-3 text-[#007F5F]" /> 8591770877
              </a>
              <a href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20book%20doorstep%20repair." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DDF5EA] text-[#005B46] font-mono font-bold border border-[#43C59E]/30">
                <WhatsAppIcon className="h-3 w-3 fill-[#007F5F]" /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Common Doorstep Repair Services */}
        <section className="mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] text-center">
            Popular Doorstep Phone Repair Services
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
              <Wrench className="h-6 w-6 text-[#007F5F]" />
              <h3 className="text-base font-bold text-[#102A26]">Screen Replacement</h3>
              <p className="text-xs text-slate-600">OEM OLED and high-grade displays fitted in 45 minutes with free 9H tempered glass.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
              <Battery className="h-6 w-6 text-[#007F5F]" />
              <h3 className="text-base font-bold text-[#102A26]">Battery Replacement</h3>
              <p className="text-xs text-slate-600">High-capacity genuine cells for iPhone and Android with 90-day warranty certification.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
              <Zap className="h-6 w-6 text-[#007F5F]" />
              <h3 className="text-base font-bold text-[#102A26]">Charging Port Repair</h3>
              <p className="text-xs text-slate-600">Fix loose cables, lint debris, burnt sub-board flex, and slow charging issues in 30 minutes.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
              <Flame className="h-6 w-6 text-[#007F5F]" />
              <h3 className="text-base font-bold text-[#102A26]">Dead Phone Diagnostic</h3>
              <p className="text-xs text-slate-600">Motherboard short clearing and PMIC power management IC micro-soldering.</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26]">
              Frequently Asked Questions About Doorstep Repairs
            </h2>
            <p className="text-xs text-slate-500">
              Transparency on timing, security, parts quality, and warranty.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-5 border border-[#E5E7EB] space-y-2 shadow-xs">
                <h3 className="text-sm font-bold text-[#102A26] flex items-start gap-2">
                  <span className="text-[#007F5F] font-mono">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed pl-5">
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
