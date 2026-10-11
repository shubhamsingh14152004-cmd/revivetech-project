import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SeoJsonLd, getBreadcrumbSchema, SITE_URL } from "../components/SeoJsonLd";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    id: "data-wipe-guide",
    title: "How to Safely Wipe Personal Data Before Selling Your Phone",
    category: "Data Privacy & Security",
    readTime: "6 min read",
    date: "October 2026",
    summary: "A complete technical checklist to unlink iCloud, disable Android Factory Reset Protection (FRP), and sanitize flash storage before handing your device over.",
    ctaLink: "/how-we-wipe-your-data",
    ctaText: "Read the Security Guide",
  },
  {
    id: "sell-dead-phone-guide",
    title: "Can You Sell a Dead Mobile Phone That Won't Turn On?",
    category: "Sell & Buyback Guide",
    readTime: "5 min read",
    date: "October 2026",
    summary: "Why non-working, short-circuited, and liquid-damaged smartphones still hold real cash value for hardware recycling and OEM parts harvesting.",
    ctaLink: "/phone-not-turning-on",
    ctaText: "Read the Dead Phone Guide",
  },
  {
    id: "screen-repair-vs-buying-new",
    title: "Phone Screen Replacement vs Buying a New Phone: The True Repair Economics",
    category: "Repair Guide",
    readTime: "7 min read",
    date: "October 2026",
    summary: "Compare the real costs of high-grade OEM screen replacement versus purchasing a brand new smartphone, including warranty considerations.",
    ctaLink: "/fix-or-sell",
    ctaText: "Read the Repair Economics Guide",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Phone Repair & Buyback Technical Guides — Expert Advice | Revora" },
      { name: "description", content: "Read expert technical guides on mobile repair economics, safely wiping data before selling your phone, and selling dead mobiles." },
      { property: "og:title", content: "Phone Repair & Buyback Technical Guides | Revora" },
      { property: "og:description", content: "Comprehensive guides on how to sell old phones safely, repair damaged screens, and diagnose dead smartphones." },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
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
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbs]} />
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-line bg-gradient-to-b from-brand-50/50 via-transparent to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-[13px] font-bold text-brand mb-6 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-brand" /> Technical Help & Buying Guides
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-ink mb-6">
              Smartphone Repair & Buyback Knowledge Base
            </h1>
            <p className="text-[16px] md:text-[18px] text-muted max-w-2xl mx-auto leading-relaxed">
              Clear, transparent guides written by hardware engineers to help you make informed decisions when selling old devices or booking repairs.
            </p>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <article key={article.id} id={article.id} className="p-8 rounded-3xl bg-white border border-line hover:border-brand-300 transition shadow-sm hover:shadow-md flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-muted mb-4 font-bold">
                  <span className="px-3 py-1 rounded-full bg-brand-50 text-brand border border-brand-200 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand" /> {article.date}
                  </span>
                  <span>• {article.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 leading-snug">
                  {article.title}
                </h2>

                <p className="text-[15px] text-muted font-medium mb-8 leading-relaxed border-l-2 border-brand pl-4">
                  {article.summary}
                </p>

                <Link to={article.ctaLink} className="inline-flex items-center gap-2 text-[15px] font-bold text-white bg-brand hover:bg-brand-600 px-6 py-3 rounded-xl transition focus-ring shadow-sm">
                  {article.ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
