import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroPhone from "../assets/hero-phone.jpg";
import { TradeInCalculator } from "../components/TradeInCalculator";
import { DiagnosticWizard } from "../components/DiagnosticWizard";
import { FaqSection } from "../components/FaqSection";
import { FloatingDock } from "../components/FloatingDock";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { api } from "../services/api";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Truck,
  IndianRupee,
  Wrench,
  CheckCircle2,
  PhoneCall,
  Phone,
  Send,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Lock,
  Loader2,
  Gift,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getLocalBusinessSchema,
  getWebSiteSchema,
  SITE_URL,
} from "../components/SeoJsonLd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Revora — Sell Your Old Phone & Get It Repaired",
      },
      {
        name: "description",
        content:
          "Sell your old, used, damaged, or dead smartphone for top cash payouts or book 45-minute doorstep mobile repair with Revora across Mumbai & nearby areas.",
      },
      {
        name: "keywords",
        content:
          "Revora, sell old smartphone, sell used phone, phone repair Mumbai, doorstep mobile repair, sell dead phone, sell broken phone, purana mobile becho",
      },
      {
        property: "og:title",
        content: "Revora — Sell Your Old Phone & Get It Repaired",
      },
      {
        property: "og:description",
        content:
          "Sell your old, used, damaged, or dead smartphone for top cash payouts or book 45-minute doorstep mobile repair with Revora across Mumbai & nearby areas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: "https://sellrepairphone.org/images/revora-logo-transparent.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sellrepairphone.org/images/revora-logo-transparent.png" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  const [activeTab, setActiveTab] = useState<"sell" | "repair" | "triage">("sell");

  // Custom Quote Form state
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteModel, setQuoteModel] = useState("");
  const [quoteService, setQuoteService] = useState("Sell your dead phone");
  const [quoteDetails, setQuoteDetails] = useState("");
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

  // Repair Modal states (Free Doorstep & Free Glass Protector & Cover)
  const [isRepairModalOpen, setIsRepairModalOpen] = useState(false);
  const [repairCustomerName, setRepairCustomerName] = useState("");
  const [repairPhone, setRepairPhone] = useState("");
  const [repairModel, setRepairModel] = useState("");
  const [repairIssue, setRepairIssue] = useState("");
  const [repairAddress, setRepairAddress] = useState("");
  const [isSubmittingRepair, setIsSubmittingRepair] = useState(false);

  const openRepairPopup = () => {
    setQuoteService("Repair your phone");
    setIsRepairModalOpen(true);
  };

  const handleRepairModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!repairCustomerName || !repairPhone) {
      toast.error("Please provide your name and phone number");
      return;
    }
    setIsSubmittingRepair(true);
    try {
      const response = await api.submitRepairRequest({
        customerName: repairCustomerName.trim(),
        phoneNumber: repairPhone.trim(),
        phoneModel: repairModel.trim() || "Phone Repair",
        serviceType: "Repair your phone",
        problemDescription: `${repairIssue.trim() || "General Repair"} · Claimed Offer: Free Doorstep Service + Free Glass Protector & Cover`,
        address: repairAddress.trim(),
        preferredOption: "Free Doorstep Service",
      });

      const ticket =
        response.data?.ticketNumber ||
        `RT-REP-${Math.floor(1000 + Math.random() * 9000)}`;
      toast.success(`🎉 Repair Booked & Free Perks Claimed! Ref #${ticket}`, {
        description: `Free Doorstep Pickup scheduled. Free Glass Protector & Cover reserved for ${repairPhone}!`,
        duration: 7000,
      });

      setIsRepairModalOpen(false);
      setRepairCustomerName("");
      setRepairPhone("");
      setRepairModel("");
      setRepairIssue("");
      setRepairAddress("");
    } catch (err: any) {
      toast.error("Booking Failed", {
        description: err.message || "Could not submit repair booking.",
      });
    } finally {
      setIsSubmittingRepair(false);
    }
  };

  const handleCustomQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName || !quotePhone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setIsSubmittingQuote(true);
    try {
      const response = await api.submitRepairRequest({
        customerName: quoteName,
        phoneNumber: quotePhone,
        phoneModel: quoteModel || "Custom Phone Model",
        serviceType: quoteService,
        problemDescription: quoteDetails,
      });

      const ticket = response.data?.ticketNumber || `RT-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
      toast.success(`🎉 Quote Request Registered! Ref #${ticket}`, {
        description: `A senior technician will text ${quotePhone} within 15 minutes with a fixed price.`,
        duration: 6000,
      });
      setQuoteName("");
      setQuotePhone("");
      setQuoteModel("");
      setQuoteDetails("");
    } catch (err: any) {
      toast.error("Submission Failed", {
        description: err.message || "Could not submit quote request to server.",
      });
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <div className="min-h-screen w-full bg-[#FAFAF7] text-[#102A26] selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[localBusinessSchema, websiteSchema]} />
      <SiteHeader onOpenRepairModal={openRepairPopup} />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-10 md:pt-14 md:pb-16 overflow-hidden">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#005B46] font-label border border-[#43C59E]/30">
              <span className="h-2 w-2 rounded-full bg-[#007F5F] animate-pulse shrink-0" />
              <span>Cleanroom Diagnostics · Instant Payouts · 45-Min Fix</span>
            </div>

            <h1 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#102A26]">
              Sell old mobile phones, <span className="text-[#007F5F] block sm:inline">& repair your phone.</span>
            </h1>

            <p className="font-display mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#475569]">
              Sell your old, used, damaged, or dead phone for top cash payouts. Or book 45-minute doorstep mobile repair with complimentary tempered glass & cover and 90-day VIP warranty.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#sell-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] px-6 py-3.5 text-sm font-bold text-white shadow-md transition font-label cursor-pointer text-center"
              >
                <IndianRupee className="h-4 w-4 text-white" />
                <span>Sell Phone (Instant Cash Quote)</span>
              </a>
              <button
                type="button"
                onClick={openRepairPopup}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#102A26] hover:bg-[#FAFAF7] transition font-label border border-[#E5E7EB] hover:border-[#007F5F] cursor-pointer shadow-xs text-center"
              >
                <Wrench className="h-4 w-4 text-[#007F5F]" />
                <span>Repair Phone (Free Doorstep)</span>
                <span className="rounded-full bg-[#DDF5EA] px-2 py-0.5 text-[10px] text-[#005B46] font-mono uppercase tracking-wider font-bold">Free Perks</span>
              </button>
            </div>

            {/* Direct Helpline & WhatsApp */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs font-display">
              <span className="text-[#6B7280] font-medium">Direct Support:</span>
              <a
                href="tel:8591770877"
                className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-[#FAFAF7] px-3 py-1 font-mono font-bold text-[#102A26] border border-[#E5E7EB] transition hover:text-[#007F5F]"
                title="Call 8591770877"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#007F5F]" />
                <span>8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 px-3 py-1 font-mono font-bold text-emerald-800 border border-emerald-200 transition"
                title="WhatsApp 8591770877"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-800" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="font-display mt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#E5E7EB] pt-5 w-full text-xs text-[#6B7280]">
              <div>
                <span className="font-display text-xl sm:text-2xl font-black text-[#102A26] block">
                  4.9★
                </span>
                <span className="text-[#6B7280]">12,400+ Revivals</span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-black text-[#007F5F] block">
                  45m
                </span>
                <span className="text-[#6B7280]">Avg. Turnaround</span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-black text-[#007F5F] block">
                  ₹2.5L+
                </span>
                <span className="text-[#6B7280]">Paid to Customers</span>
              </div>
            </div>
          </div>

          {/* Right Column (Hero Visual Card with Straight, Upright Cartoon Video - Watermark Clipped) */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-3xl bg-white p-2.5 sm:p-3 border border-[#E5E7EB] shadow-lg overflow-hidden">
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#005B46]/5">
                <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
                  <video
                    src="/videos/revora-animation.mp4"
                    poster={heroPhone}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-[1.09] -translate-x-[2%] -translate-y-[2%] rounded-2xl block mx-auto"
                  >
                    <track kind="captions" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation Hub */}
      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-white p-2 border border-[#E5E7EB] shadow-xs">
          {[
            { id: "sell", label: "Value & Sell Dead Phone", target: "sell-calculator" },
            { id: "repair", label: "Repair & Priority Quote", target: "quote" },
            { id: "triage", label: "Smart Diagnostic Triage", target: "diagnostic-triage" },
          ].map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.target}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`rounded-2xl px-4 py-2.5 text-xs font-bold font-display transition cursor-pointer ${activeTab === tab.id
                  ? "bg-[#007F5F] text-white shadow-xs"
                  : "text-[#102A26] hover:bg-[#FAFAF7]"
                }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 1: Instant Trade-In Valuation Calculator */}
      <section id="sell-calculator" className="mx-auto max-w-6xl px-5 py-10 scroll-mt-24">
        <div id="sell" className="scroll-mt-24">
          <TradeInCalculator />
        </div>
      </section>

      {/* SECTION 2: AI Phone Diagnostic & Triage Troubleshooter */}
      <section id="diagnostic-triage" className="mx-auto max-w-6xl px-5 py-10 scroll-mt-24">
        <DiagnosticWizard />
      </section>

      {/* SECTION 8: Searchable FAQ Accordion */}
      <section id="faq" className="mx-auto max-w-6xl px-5 py-10 scroll-mt-24">
        <FaqSection />
      </section>

      {/* SECTION 9: Custom VIP Quote & In-Store Appointment Request Form */}
      <section id="quote" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-24">
        {/* Promotional Highlight for Free Doorstep & Free Glass Protector & Cover */}
        <div className="mb-6 rounded-3xl bg-[#DDF5EA] p-6 md:p-8 border border-[#43C59E]/30 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#005B46] border border-[#43C59E]/30">
                  <Truck className="h-3.5 w-3.5 text-[#007F5F]" />
                  Free Doorstep Service
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#005B46] border border-[#43C59E]/30">
                  <Gift className="h-3.5 w-3.5 text-[#007F5F]" />
                  Free Glass Protector & Cover
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-mono font-bold text-[#102A26] border border-[#E5E7EB]">
                  <Clock className="h-3.5 w-3.5 text-[#007F5F]" />
                  Repair within 24hrs
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#102A26] tracking-tight">
                Special Perk: Free Glass Protector & Cover on Every Phone Repair!
              </h3>
              <p className="font-display text-sm text-[#005B46] leading-relaxed">
                If you get your phone repaired here, you will get a <span className="text-[#007F5F] font-bold underline">free glass protector and cover</span>. Plus, enjoy our 100% complimentary <span className="text-[#007F5F] font-bold underline">Free Doorstep Service</span> with zero pickup or drop charges!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={openRepairPopup}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] text-white px-6 py-3.5 text-sm font-bold font-label shadow-md transition cursor-pointer"
              >
                <Gift className="h-4 w-4 text-white" />
                <span>Claim Perks & Book Repair</span>
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 md:p-10 border border-[#E5E7EB] shadow-lg relative overflow-hidden">
          <div className="mb-8 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1 text-xs font-semibold text-[#005B46] font-label border border-[#43C59E]/30 mb-2">
              <PhoneCall className="h-3.5 w-3.5 text-[#007F5F]" />
              15-Minute Response Guaranteed
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-[#102A26]">
              Request a Custom VIP Tech Quote
            </h2>
            <p className="font-display mt-2 text-sm text-[#6B7280]">
              Have a rare phone, bulk dead devices from your business, or a
              complex logic board fault? Message our master cleanroom techs.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs text-[#6B7280] font-medium">Or reach us directly:</span>
              <a
                href="tel:8591770877"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#FAFAF7] hover:bg-[#E5E7EB] border border-[#E5E7EB] px-3.5 py-1.5 text-xs font-mono font-bold text-[#102A26] transition hover:text-[#007F5F]"
                title="Call 8591770877"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#007F5F]" />
                <span>Call 8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#DDF5EA] hover:bg-[#cbf0df] border border-[#43C59E]/30 px-3.5 py-1.5 text-xs font-mono font-bold text-[#005B46] transition"
                title="WhatsApp 8591770877"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-[#005B46]" />
                <span>WhatsApp 8591770877</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleCustomQuoteSubmit} className="grid gap-4 md:grid-cols-2 relative z-10">
            <label className="font-display text-xs text-[#102A26]">
              <span className="font-semibold">Full Name *</span>
              <input
                type="text"
                required
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
                placeholder="Alex Taylor"
                className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]/30"
              />
            </label>

            <label className="font-display text-xs text-[#102A26]">
              <span className="font-semibold">Phone Number (For Fast SMS Quote) *</span>
              <input
                type="tel"
                required
                value={quotePhone}
                onChange={(e) => setQuotePhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]/30"
              />
            </label>

            <label className="font-display text-xs text-[#102A26]">
              <span className="font-semibold">Phone Model & Storage</span>
              <input
                type="text"
                value={quoteModel}
                onChange={(e) => setQuoteModel(e.target.value)}
                placeholder="e.g. iPhone 15 Pro Max 512GB, Galaxy S24 Ultra…"
                className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]/30"
              />
            </label>

            <label className="font-display text-xs text-[#102A26]">
              <span className="font-semibold">Service Needed</span>
              <select
                value={quoteService}
                onChange={(e) => setQuoteService(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] outline-none transition focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]/30 cursor-pointer"
              >
                <option value="Sell your dead phone" className="bg-white text-[#102A26]">
                  Sell your dead phone
                </option>
                <option value="Repair your phone" className="bg-white text-[#102A26]">
                  Repair your phone
                </option>
              </select>
            </label>

            <label className="font-display md:col-span-2 text-xs text-[#102A26]">
              <span className="font-semibold">Device Condition & Symptoms</span>
              <textarea
                rows={3}
                value={quoteDetails}
                onChange={(e) => setQuoteDetails(e.target.value)}
                placeholder="e.g. Dropped in water, won't charge, need photos recovered if possible…"
                className="mt-1.5 w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]/30"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmittingQuote}
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] px-7 py-3.5 text-sm font-bold text-white shadow-md transition font-label cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmittingQuote ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Registering Quote Request…</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit for Instant 15-Minute Review</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Multilingual / Hinglish Popular Search Intents & FAQs */}
      <section className="mx-auto max-w-6xl px-5 py-12 border-t border-[#E5E7EB]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#007F5F]" />
            अक्सर पूछे जाने वाले सवाल • Frequently Asked Questions
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102A26]">
            Phone Repair & Selling Guide in Hindi & Hinglish
          </h2>
          <p className="font-display text-xs sm:text-sm text-[#6B7280] mt-1">
            Answers to common questions for users searching in Hindi / Hinglish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors shadow-xs">
            <h3 className="font-bold text-[#102A26] text-sm mb-2">
              Q: Purana phone ya dead phone bechna hai — kaise beche?
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Agar aapko purana ya band phone bechna hai, Revora par 1 minute me online valuation check kar sakte hain. Free doorstep pickup book karein aur pickup ke samay instant UPI cash payment paayein.
            </p>
            <div className="mt-3">
              <a href="/dead-phone-buyback" className="text-[#007F5F] font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Dead Phone Becho (Get Instant Quote)</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors shadow-xs">
            <h3 className="font-bold text-[#102A26] text-sm mb-2">
              Q: Phone chalu nahi ho raha? Kya dead phone repair ho sakta hai?
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Haan! Phone band ho gaya ho ya chalu nahi ho raha ho, hamare cleanroom lab me motherboard IC micro-soldering aur power chip repair ke zariye bina data delete kiye 80%+ phones ko thik kiya jata hai.
            </p>
            <div className="mt-3">
              <a href="/dead-phone-repair" className="text-[#007F5F] font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Band Phone Thik Karwao (Book Diagnosis)</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors shadow-xs">
            <h3 className="font-bold text-[#102A26] text-sm mb-2">
              Q: Phone ki screen toot gayi ya display me lines aa rahi hain?
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Original OEM Dynamic AMOLED aur True Tone displays se 30 se 45 minute ke andar screen replace ki jaati hai. Har screen replacement par 90-day VIP warranty milti hai.
            </p>
            <div className="mt-3">
              <a href="/screen-repair" className="text-[#007F5F] font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Screen Replacement Rates & Booking</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors shadow-xs">
            <h3 className="font-bold text-[#102A26] text-sm mb-2">
              Q: Phone ki battery jaldi khatam hoti hai ya charge nahi ho raha?
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              Degraded battery swap aur USB-C / Lightning charging port repair express 30 minute me ho jata hai. Fast charging protocol 100% preserve rehta hai.
            </p>
            <div className="mt-3">
              <a href="/battery-replacement" className="text-[#007F5F] font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Battery & Charging Port Options</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Site Comprehensive SEO Footer */}
      <SiteFooter />

      {/* Floating Dock & AI Chat Support Widget */}
      <FloatingDock onOpenRepairModal={openRepairPopup} />

      {/* REPAIR OFFER POPUP MODAL: Free Doorstep Service + Free Glass Protector & Cover */}
      {isRepairModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsRepairModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 text-[#102A26] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsRepairModalOpen(false)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-[#FAFAF7] hover:bg-[#E5E7EB] text-[#6B7280] transition cursor-pointer border border-[#E5E7EB]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Offer Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DDF5EA] px-3 py-1 text-xs font-bold text-[#005B46] border border-[#43C59E]/30 font-label">
                <Gift className="h-3.5 w-3.5 text-[#007F5F] animate-bounce" />
                EXCLUSIVE REPAIR PERKS
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#DDF5EA] px-2.5 py-1 text-xs font-mono font-bold text-[#005B46] border border-[#43C59E]/30">
                <Clock className="h-3 w-3 text-[#007F5F]" />
                Repair in 24hrs
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#102A26] leading-tight">
              Repair Your Phone
            </h2>
            <p className="font-display text-xs sm:text-sm text-[#6B7280] mt-1">
              Book certified cleanroom repair with special customer bonuses.
            </p>

            {/* Highlight Box with Free Doorstep and Free Gifts */}
            <div className="mt-4 rounded-2xl bg-[#FAFAF7] p-4 border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#DDF5EA] text-[#007F5F] border border-[#43C59E]/30">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#102A26]">
                    Free Doorstep Service
                  </h4>
                  <p className="font-display text-xs text-[#6B7280]">
                    Zero pickup & delivery fees! Our certified tech collects your phone right at your doorstep.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-3 flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#DDF5EA] text-[#007F5F] border border-[#43C59E]/30">
                  <Gift className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#102A26]">
                    Free Glass Protector & Cover Included
                  </h4>
                  <p className="font-display text-xs text-[#6B7280]">
                    If you get your phone repaired here, you will get a <span className="text-[#007F5F] font-bold underline">free glass protector and cover</span>!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons inside Modal */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="tel:8591770877"
                className="flex-1 flex items-center justify-between gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] text-white pl-4 pr-1.5 py-1.5 shadow-xs border border-[#007F5F] transition"
                title="Call 8591770877"
              >
                <span className="font-display text-xs font-bold">Call Us</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <Phone className="h-3 w-3 text-white stroke-[2.4]" />
                </span>
              </a>

              <a
                href="https://wa.me/918591770877?text=Hi%20Revora%2C%20I%20want%20to%20claim%20the%20Free%20Doorstep%20repair%20and%20Free%20Glass%20Protector%20%2B%20Cover%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between gap-2 rounded-full bg-[#16803D] hover:bg-[#14532D] text-white pl-4 pr-1.5 py-1.5 shadow-xs border border-[#16803D] transition"
                title="WhatsApp 8591770877"
              >
                <span className="font-display text-xs font-bold">WhatsApp Us</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                </span>
              </a>
            </div>

            {/* Quick Doorstep Repair Booking Form */}
            <form onSubmit={handleRepairModalSubmit} className="mt-5 space-y-3 text-left">
              <div>
                <label className="block text-[11px] font-medium text-[#102A26] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={repairCustomerName}
                  onChange={(e) => setRepairCustomerName(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs text-[#102A26] placeholder:text-slate-400 focus:border-[#007F5F] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-[#102A26] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={repairPhone}
                    onChange={(e) => setRepairPhone(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs text-[#102A26] placeholder:text-slate-400 focus:border-[#007F5F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#102A26] mb-1">
                    Phone Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. iPhone 13, OnePlus 9"
                    value={repairModel}
                    onChange={(e) => setRepairModel(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs text-[#102A26] placeholder:text-slate-400 focus:border-[#007F5F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#102A26] mb-1">
                  What needs to be fixed?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Broken screen, battery dead, camera blur"
                  value={repairIssue}
                  onChange={(e) => setRepairIssue(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs text-[#102A26] placeholder:text-slate-400 focus:border-[#007F5F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#102A26] mb-1">
                  Doorstep Pickup Address / Area *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Enter your flat/house no., street, and locality for Free Doorstep Pickup"
                  value={repairAddress}
                  onChange={(e) => setRepairAddress(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-xs text-[#102A26] placeholder:text-slate-400 focus:border-[#007F5F] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingRepair}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white py-3 px-4 text-xs font-extrabold uppercase tracking-wider font-label shadow-md transition disabled:opacity-50 cursor-pointer"
              >
                {isSubmittingRepair ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span>Booking Doorstep Service...</span>
                  </>
                ) : (
                  <>
                    <Gift className="h-4 w-4 text-white" />
                    <span>Claim Free Gifts & Book Doorstep Repair</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-[#6B7280] text-center flex items-center justify-center gap-2 pt-1">
                <span>✓ Free Doorstep Pickup</span>
                <span>·</span>
                <span>✓ Free Glass Protector & Cover</span>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
