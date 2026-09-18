import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
        title: "ReviveTech — Phone Repair Near Me, Sell Dead Phone & Instant Buyback",
      },
      {
        name: "description",
        content:
          "Same-day mobile phone repair near you & instant cash buyback for dead or old phones. OEM screen replacement, battery fix, free doorstep pickup & 90-day warranty across India.",
      },
      {
        name: "keywords",
        content:
          "phone repair near me, mobile repair near me, sell dead phone, sell old phone, purana phone becho, purana mobile becho, dead phone becho, band phone becho, kharab phone becho, band phone repair, band phone thik karna, phone chalu nahi ho raha, phone repair, phone buyback, iPhone repair near me, Samsung repair near me, mobile screen replacement, phone battery replacement, Android phone repair",
      },
      {
        property: "og:title",
        content: "ReviveTech — Phone Repair Near Me, Sell Dead Phone & Instant Buyback",
      },
      {
        property: "og:description",
        content:
          "Same-day mobile phone repair & top cash for dead or used phones. Free doorstep pickup, instant payment, and 90-day warranty.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: heroPhone },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPhone },
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
    <div className="dusk min-h-screen w-full text-white selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[localBusinessSchema, websiteSchema]} />
      <SiteHeader onOpenRepairModal={openRepairPopup} />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-16">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 font-label border border-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 live-pulse" />
              <span>Cleanroom Diagnostics · Instant Payouts · 45-Min Fix</span>
            </div>

            <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">
              Sell <span className="chrome">dead phone</span>, and repair your phone.
            </h1>

            <p className="font-display mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              Sell broken, cracked, liquid-damaged, or dead devices for real cash.
              Or drop it off for 45-minute cleanroom micro-soldering and pick it
              up glowing like brand new.
            </p>

            {/* Quick Action CTA Pill Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#sell-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_oklch(0.704_0.192_37.126/45%)] transition hover:brightness-110 font-label cursor-pointer"
              >
                <IndianRupee className="h-4 w-4" />
                <span>Sell Dead Phone (Top Cash Offer)</span>
              </a>
              <button
                type="button"
                onClick={openRepairPopup}
                className="glass-card inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 font-label border border-white/20 cursor-pointer hover:border-accent/40 shadow-lg"
              >
                <Wrench className="h-4 w-4 text-accent" />
                <span>Repair Phone (Free Doorstep)</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 font-mono uppercase tracking-wider font-bold">Free Gifts</span>
              </button>
            </div>

            {/* Direct Helpline & WhatsApp */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-display">
              <span className="text-white/60 font-medium">Direct Tech Support:</span>
              <a
                href="tel:8591770877"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1 font-mono font-bold text-white border border-white/15 transition hover:text-accent"
                title="Call 8591770877"
              >
                <PhoneCall className="h-3.5 w-3.5 text-brand" />
                <span>8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877?text=Hi%20ReviveTech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 px-3 py-1 font-mono font-bold text-emerald-300 border border-emerald-500/30 transition"
                title="WhatsApp 8591770877"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-400" />
                <span>8591770877</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="font-display mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-white/75">
              <div>
                <span className="font-display text-2xl font-black text-white block">
                  4.9★
                </span>
                <span className="text-white/60">12,400+ Revivals</span>
              </div>
              <div>
                <span className="font-display text-2xl font-black text-emerald-400 block">
                  45m
                </span>
                <span className="text-white/60">Avg. Turnaround</span>
              </div>
              <div>
                <span className="font-display text-2xl font-black text-accent block">
                  ₹2.5 Lakh+
                </span>
                <span className="text-white/60">Paid to Customers</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="sun-orb absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 md:h-80 md:w-80" />
            
            <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/20 via-white/10 to-transparent p-3 backdrop-saturate-150 border border-white/20 shadow-2xl">
              <img
                src={heroPhone}
                alt="ReviveTech cleanroom mobile phone repair and dead phone buyback laboratory"
                width={1024}
                height={1280}
                loading="eager"
                fetchPriority="high"
                className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl object-cover outline-1 -outline-offset-1 outline-white/15"
              />
            </div>

            {/* Floating Live Badge #1 */}
            <div className="chrome-plate absolute -left-4 top-8 rounded-2xl px-4 py-3 shadow-2xl animate-float">
              <p className="font-label text-[10px] uppercase tracking-wider text-ink/70 font-bold">
                Instant Payout
              </p>
              <p className="font-display text-xl font-extrabold text-ink">Top Cash</p>
              <span className="text-[10px] text-ink/80 font-display font-medium">For Your Dead Phone</span>
            </div>

            {/* Floating Live Badge #2 */}
            <div className="glass-card absolute -right-3 bottom-10 rounded-2xl px-4 py-3 shadow-2xl border border-white/20">
              <div className="flex items-center gap-1.5 text-emerald-400 font-label text-[10px] font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
                <span>Cleanroom QC Passed</span>
              </div>
              <p className="font-display text-sm font-bold text-white mt-0.5">
                Ready for Pickup
              </p>
              <span className="text-[10px] text-white/60 font-display">
                Original 120Hz OLED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation Hub */}
      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-black/40 p-2 border border-white/10">
          {[
            { id: "sell", label: "💰 Value & Sell Dead Phone", target: "sell-calculator" },
            { id: "repair", label: "🛠️ Repair & VIP Quote", target: "quote" },
            { id: "triage", label: "🤖 AI Diagnostic Triage", target: "diagnostic-triage" },
          ].map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.target}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`rounded-2xl px-4 py-2.5 text-xs font-bold font-display transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand text-white shadow-lg shadow-brand/30"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
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
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-[#161f1c] to-amber-950/50 p-6 md:p-8 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/40">
                  <Truck className="h-3.5 w-3.5 text-emerald-400" />
                  Free Doorstep Service
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/40">
                  <Gift className="h-3.5 w-3.5 text-amber-400" />
                  Free Glass Protector & Cover
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-mono font-bold text-white/90 border border-white/20">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  Repair within 24hrs
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Special Perk: Free Glass Protector & Cover on Every Phone Repair!
              </h3>
              <p className="font-display text-sm text-white/80 leading-relaxed">
                If you get your phone repaired here, you will get a <span className="text-amber-300 font-bold underline decoration-amber-400/60">free glass protector and cover</span>. Plus, enjoy our 100% complimentary <span className="text-emerald-300 font-bold underline decoration-emerald-400/60">Free Doorstep Service</span> with zero pickup or drop charges!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={openRepairPopup}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-ink px-6 py-3.5 text-sm font-bold font-label shadow-[0_8px_25px_rgba(16,185,129,0.4)] transition hover:scale-105 cursor-pointer"
              >
                <Gift className="h-4 w-4 text-ink" />
                <span>Claim Perks & Book Repair</span>
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl glass-card p-6 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

          <div className="mb-8 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent font-label border border-accent/30 mb-2">
              <PhoneCall className="h-3.5 w-3.5" />
              15-Minute Response Guaranteed
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-white">
              Request a Custom VIP Tech Quote
            </h2>
            <p className="font-display mt-2 text-sm text-white/70">
              Have a rare phone, bulk dead devices from your business, or a
              complex logic board fault? Message our master cleanroom techs.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs text-white/70 font-medium">Or reach us directly:</span>
              <a
                href="tel:8591770877"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-1.5 text-xs font-mono font-bold text-white transition hover:text-accent"
                title="Call 8591770877"
              >
                <PhoneCall className="h-3.5 w-3.5 text-accent" />
                <span>Call 8591770877</span>
              </a>
              <a
                href="https://wa.me/918591770877?text=Hi%20ReviveTech%2C%20I%20want%20to%20sell%20or%20repair%20my%20phone."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-mono font-bold text-emerald-300 transition"
                title="WhatsApp 8591770877"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-400" />
                <span>WhatsApp 8591770877</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleCustomQuoteSubmit} className="grid gap-4 md:grid-cols-2 relative z-10">
            <label className="font-display text-xs text-white/80">
              <span className="font-medium">Full Name *</span>
              <input
                type="text"
                required
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
                placeholder="Alex Taylor"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="font-display text-xs text-white/80">
              <span className="font-medium">Phone Number (For Fast SMS Quote) *</span>
              <input
                type="tel"
                required
                value={quotePhone}
                onChange={(e) => setQuotePhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="font-display text-xs text-white/80">
              <span className="font-medium">Phone Model & Storage</span>
              <input
                type="text"
                value={quoteModel}
                onChange={(e) => setQuoteModel(e.target.value)}
                placeholder="e.g. iPhone 15 Pro Max 512GB, Galaxy S24 Ultra…"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="font-display text-xs text-white/80">
              <span className="font-medium">Service Needed</span>
              <select
                value={quoteService}
                onChange={(e) => setQuoteService(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer"
              >
                <option value="Sell your dead phone" className="bg-ink text-white">
                  Sell your dead phone
                </option>
                <option value="Repair your phone" className="bg-ink text-white">
                  Repair your phone
                </option>
              </select>
            </label>

            <label className="font-display md:col-span-2 text-xs text-white/80">
              <span className="font-medium">Device Condition & Symptoms</span>
              <textarea
                rows={3}
                value={quoteDetails}
                onChange={(e) => setQuoteDetails(e.target.value)}
                placeholder="e.g. Dropped in water, won't charge, need photos recovered if possible…"
                className="mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmittingQuote}
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_oklch(0.704_0.192_37.126/45%)] transition hover:brightness-110 font-label cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
      <section className="mx-auto max-w-6xl px-5 py-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            अक्सर पूछे जाने वाले सवाल • Frequently Asked Questions
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Phone Repair & Selling Guide in Hindi & Hinglish
          </h2>
          <p className="font-display text-xs sm:text-sm text-white/70 mt-1">
            Answers to common questions for users searching in Hindi / Hinglish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
            <h3 className="font-bold text-white text-sm mb-2 text-purple-300">
              Q: Purana phone ya dead phone bechna hai — kaise beche?
            </h3>
            <p className="text-white/70 leading-relaxed">
              Agar aapko purana ya band phone bechna hai, ReviveTech par 1 minute me online valuation check kar sakte hain. Free doorstep pickup book karein aur pickup ke samay instant UPI cash payment paayein.
            </p>
            <div className="mt-3">
              <a href="/dead-phone-buyback" className="text-purple-400 font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Dead Phone Becho (Get Instant Quote)</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
            <h3 className="font-bold text-white text-sm mb-2 text-emerald-300">
              Q: Phone chalu nahi ho raha? Kya dead phone repair ho sakta hai?
            </h3>
            <p className="text-white/70 leading-relaxed">
              Haan! Phone band ho gaya ho ya chalu nahi ho raha ho, hamare cleanroom lab me motherboard IC micro-soldering aur power chip repair ke zariye bina data delete kiye 80%+ phones ko thik kiya jata hai.
            </p>
            <div className="mt-3">
              <a href="/dead-phone-repair" className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Band Phone Thik Karwao (Book Diagnosis)</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
            <h3 className="font-bold text-white text-sm mb-2 text-blue-300">
              Q: Phone ki screen toot gayi ya display me lines aa rahi hain?
            </h3>
            <p className="text-white/70 leading-relaxed">
              Original OEM Dynamic AMOLED aur True Tone displays se 30 se 45 minute ke andar screen replace ki jaati hai. Har screen replacement par 90-day VIP warranty milti hai.
            </p>
            <div className="mt-3">
              <a href="/screen-repair" className="text-blue-400 font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                <span>Screen Replacement Rates & Booking</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
            <h3 className="font-bold text-white text-sm mb-2 text-amber-300">
              Q: Phone ki battery jaldi khatam hoti hai ya charge nahi ho raha?
            </h3>
            <p className="text-white/70 leading-relaxed">
              Degraded battery swap aur USB-C / Lightning charging port repair express 30 minute me ho jata hai. Fast charging protocol 100% preserve rehta hai.
            </p>
            <div className="mt-3">
              <a href="/battery-replacement" className="text-amber-400 font-semibold hover:underline inline-flex items-center gap-1 text-xs">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsRepairModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#12111d] border border-brand/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsRepairModalOpen(false)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Offer Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30 font-label">
                <Gift className="h-3.5 w-3.5 animate-bounce" />
                EXCLUSIVE REPAIR PERKS
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-mono font-bold text-amber-300 border border-amber-500/30">
                <Clock className="h-3 w-3 text-accent" />
                Repair in 24hrs
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Repair Your Phone
            </h2>
            <p className="font-display text-xs sm:text-sm text-white/70 mt-1">
              Book certified cleanroom repair with special customer bonuses.
            </p>

            {/* Highlight Box with Free Doorstep and Free Gifts */}
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-[#18201a] to-amber-950/50 p-4 border border-emerald-500/40 shadow-inner space-y-3">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-emerald-300">
                    Free Doorstep Service
                  </h4>
                  <p className="font-display text-xs text-white/80">
                    Zero pickup & delivery fees! Our certified tech collects your phone right at your doorstep.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Gift className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-amber-300">
                    Free Glass Protector & Cover Included
                  </h4>
                  <p className="font-display text-xs text-white/80">
                    If you get your phone repaired here, you will get a <span className="text-amber-200 font-bold underline">free glass protector and cover</span>!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons inside Modal */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="tel:8591770877"
                className="flex-1 flex items-center justify-between gap-2 rounded-full bg-[#489535] hover:bg-[#3d832c] text-white pl-4 pr-1.5 py-1.5 shadow-md border border-white/20 transition hover:scale-102"
                title="Call 8591770877"
              >
                <span className="font-display text-xs font-bold">Call Us</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <Phone className="h-3 w-3 text-white stroke-[2.4]" />
                </span>
              </a>

              <a
                href="https://wa.me/918591770877?text=Hi%20ReviveTech%2C%20I%20want%20to%20claim%20the%20Free%20Doorstep%20repair%20and%20Free%20Glass%20Protector%20%2B%20Cover%20offer."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-1.5 py-1.5 shadow-md border border-white/20 transition hover:scale-102"
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
                <label className="block text-[11px] font-medium text-white/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={repairCustomerName}
                  onChange={(e) => setRepairCustomerName(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-white/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={repairPhone}
                    onChange={(e) => setRepairPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-white/80 mb-1">
                    Phone Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. iPhone 13, OnePlus 9"
                    value={repairModel}
                    onChange={(e) => setRepairModel(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-white/80 mb-1">
                  What needs to be fixed?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Broken screen, battery dead, camera blur"
                  value={repairIssue}
                  onChange={(e) => setRepairIssue(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-white/80 mb-1">
                  Doorstep Pickup Address / Area *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Enter your flat/house no., street, and locality for Free Doorstep Pickup"
                  value={repairAddress}
                  onChange={(e) => setRepairAddress(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingRepair}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-ink py-3 px-4 text-xs font-extrabold uppercase tracking-wider font-label shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {isSubmittingRepair ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-ink" />
                    <span>Booking Doorstep Service...</span>
                  </>
                ) : (
                  <>
                    <Gift className="h-4 w-4 text-ink" />
                    <span>Claim Free Gifts & Book Doorstep Repair</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-white/50 text-center flex items-center justify-center gap-2 pt-1">
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
