import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  BookOpen,
  Calendar,
  ShieldCheck,
  Smartphone,
  Wrench,
  BatteryCharging,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const ARTICLES = [
  {
    id: "data-wipe-guide",
    title: "How to Safely Wipe Personal Data Before Selling Your Phone (NIST 800-88 Guidelines)",
    category: "Data Privacy & Security",
    readTime: "6 min read",
    date: "September 2026",
    summary:
      "A complete technical checklist to unlink iCloud, disable Android Factory Reset Protection (FRP), and sanitize flash storage before handing your device over.",
    content: [
      "Selling an old smartphone requires more than just deleting your gallery photos. Without properly unlinking cloud accounts, your personal photos, credit card details, and WhatsApp history could remain recoverable.",
      "Step 1: Backup to Cloud (Google Drive / iCloud) or local PC storage.",
      "Step 2: Sign out of Apple ID or Google Account. Crucial: Disabling 'Find My' (iOS) and removing Google Accounts removes Factory Reset Protection (FRP), allowing the next owner to activate the phone smoothly.",
      "Step 3: Perform Encrypted Factory Reset. On modern iOS and Android versions (Android 10+), flash storage is encrypted by default. Running a factory reset throws away cryptographic keys, making previous blocks unreadable.",
      "What if the phone screen is broken or dead? If the screen is unresponsive, connect via USB-OTG with a mouse, use Apple's iCloud Web 'Erase Device', or utilize our service desk data wiping protocol during doorstep pickup.",
    ],
    ctaLink: "/sell-old-phone",
    ctaText: "Ready to Sell? Get Instant Price Quote",
  },
  {
    id: "sell-dead-phone-guide",
    title: "Can You Sell a Dead Mobile Phone That Won't Turn On? (Salvage Valuation Explained)",
    category: "Sell & Buyback Guide",
    readTime: "5 min read",
    date: "September 2026",
    summary:
      "Why non-working, short-circuited, and liquid-damaged smartphones still hold real cash value for hardware recycling and OEM parts harvesting.",
    content: [
      "A phone that refuses to boot or charge is commonly called 'dead', but that does not make it useless scrap. Over 70% of internal smartphone modules operate independently of the main motherboard.",
      "High-Value Salvage Parts: Sony IMX camera sensors, periscope telephoto lenses, pristine aluminum frames, haptic feedback motors, and audio speakers retain substantial trade value.",
      "Repair vs Sell Calculation: If replacing a motherboard or CPU reballing costs more than 50% of the phone's current second-hand value, selling the dead phone for immediate salvage cash is the mathematically superior choice.",
      "Doorstep Payout: Revora provides verified doorstep pickup for dead phones with zero deduction for missing charging cables or original retail packaging.",
    ],
    ctaLink: "/sell-dead-phone",
    ctaText: "Calculate Dead Phone Salvage Value",
  },
  {
    id: "screen-repair-vs-buying-new",
    title: "Phone Screen Replacement vs Buying a New Phone: The True Repair Economics",
    category: "Repair Guide",
    readTime: "7 min read",
    date: "September 2026",
    summary:
      "Compare the real costs of high-grade OEM screen replacement versus purchasing a brand new smartphone, including warranty considerations.",
    content: [
      "Cracking a smartphone display is the single most common hardware accident in India. When faced with an estimate, many consumers wonder if they should upgrade or fix their screen.",
      "Depreciation Truths: A new ₹25,000 mid-range phone depreciates by 30% the moment the seal is opened. In contrast, replacing an AMOLED or IPS panel on a 1-to-2-year-old flagship restores 100% usability for a fraction of that depreciation.",
      "OEM vs Cheap Copies: Always ensure your repair center installs grade-A panels that preserve 120Hz refresh rates, true color calibration, and in-display fingerprint sensitivity.",
      "Doorstep Convenience: With Revora's 45-minute doorstep repair service, you can watch your screen replaced live with a complimentary tempered glass.",
    ],
    ctaLink: "/doorstep-mobile-repair",
    ctaText: "Book 45-Minute Doorstep Screen Repair",
  },
  {
    id: "battery-health-warning-signs",
    title: "4 Warning Signs Your Smartphone Battery Needs Urgent Replacement",
    category: "Hardware Diagnostics",
    readTime: "4 min read",
    date: "September 2026",
    summary:
      "How to detect chemical battery degradation, prevent dangerous thermal expansion, and restore full-day battery life.",
    content: [
      "Lithium-ion smartphone batteries are consumable components rated for approximately 500 to 800 full charge cycles before dropping below 80% maximum capacity.",
      "1. Sudden Shutdowns at 20-30%: When chemical internal resistance increases, high-current draw causes sudden voltage collapse.",
      "2. Physical Swelling: If your screen is lifting away from the frame or the back cover is bowing outward, your battery is off-gassing. Discontinue use immediately to prevent fire hazards.",
      "3. Sluggish Performance: Modern OS algorithms intentionally throttle processor clock speeds when battery voltage fluctuates.",
      "Doorstep Battery Replacement: We install brand-new, certified high-capacity cells with a 90-day warranty right at your doorstep.",
    ],
    ctaLink: "/battery-replacement",
    ctaText: "Schedule Doorstep Battery Replacement",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Phone Repair & Buyback Technical Guides — Expert Advice | Revora",
      },
      {
        name: "description",
        content:
          "Read expert technical guides on mobile repair economics, safely wiping data before selling your phone, selling dead mobiles, and battery health diagnostics.",
      },
      {
        name: "keywords",
        content:
          "mobile repair guide, how to wipe phone before selling, sell dead phone guide, phone screen replacement cost, smartphone battery health, mobile repair tips",
      },
      {
        property: "og:title",
        content: "Phone Repair & Buyback Technical Guides | Revora",
      },
      {
        property: "og:description",
        content:
          "Comprehensive guides on how to sell old phones safely, repair damaged screens, and diagnose dead smartphones.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/blog`,
      },
      {
        property: "og:image",
        content: heroPhone,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Phone Repair & Buyback Technical Guides | Revora",
      },
      {
        name: "twitter:description",
        content: "Comprehensive guides on wiping data safely, repairing damaged screens, and selling dead smartphones.",
      },
      {
        name: "twitter:image",
        content: heroPhone,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Guides & Articles", url: `${SITE_URL}/blog` },
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbs]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-transparent to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-xs font-semibold text-[#005B46] mb-6 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#007F5F]" /> Technical Help & Buying Guides
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A26] mb-6">
              Smartphone Repair & Buyback Knowledge Base
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Clear, transparent guides written by hardware engineers to help you make informed decisions when selling old devices or booking doorstep repairs.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                id={article.id}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition shadow-xs"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7280] mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#DDF5EA] text-[#005B46] font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#007F5F]" /> {article.date}
                  </span>
                  <span>• {article.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#102A26] mb-4 leading-snug">
                  {article.title}
                </h2>

                <p className="text-base text-[#475569] font-medium mb-6 leading-relaxed border-l-2 border-[#007F5F] pl-4 italic">
                  {article.summary}
                </p>

                <div className="space-y-3 text-sm text-[#475569] leading-relaxed mb-6">
                  {article.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={article.ctaLink}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#007F5F] hover:text-[#005B46] transition"
                  >
                    {article.ctaText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

