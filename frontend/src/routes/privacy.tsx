import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy & Data Security — Revora",
      },
      {
        name: "description",
        content:
          "Revora Privacy Policy: Learn how we protect customer data, perform NIST 800-88 cryptographic wiping on trade-in smartphones, and handle personal information.",
      },
      {
        name: "keywords",
        content:
          "Revora privacy policy, phone data security, NIST 800-88 wiping, smartphone repair data protection, sell phone data privacy",
      },
      {
        property: "og:title",
        content: "Privacy Policy & Data Security — Revora",
      },
      {
        property: "og:description",
        content:
          "Read Revora's commitment to data privacy, secure device handling, and certified NIST 800-88 storage sanitization.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/privacy`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
  ]);

  return (
    <div className="min-h-screen bg-[#0b0a10] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-white/10 bg-[#0e0d15] py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Privacy Policy</span>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>NIST 800-88 Data Protection Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Privacy Policy & Data Security Guarantee
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Last Updated: October 3, 2026. This policy outlines how Revora handles customer data during mobile repair services, device trade-ins, and online inquiries.
          </p>
        </section>

        {/* Content Body */}
        <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 text-slate-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" />
              <span>1. Device Storage Sanitization (NIST 800-88 Guidelines)</span>
            </h2>
            <p>
              When you sell an old, used, damaged, or dead smartphone to Revora, your data security is our highest operational priority:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-slate-300">
              <li>
                <strong className="text-white">Bootable Devices:</strong> Before any device enters our processing pipeline, our certified technicians execute an encrypted factory reset throwing away cryptographic keys in compliance with NIST 800-88 guidelines.
              </li>
              <li>
                <strong className="text-white">Non-Bootable & Dead Phones:</strong> For devices with severe motherboard damage or liquid corrosion that refuse to power on, storage chips undergo high-frequency degaussing or physical board destruction to ensure zero recoverable fragments remain.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-400" />
              <span>2. Customer Personal Information Collected</span>
            </h2>
            <p>
              We collect minimal personal information strictly required to perform repair services, issue instant buyback payouts, and comply with Indian legal regulations:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-slate-300">
              <li>
                <strong className="text-white">Contact & Pickup Details:</strong> Full name, 10-digit mobile number, email address, and physical doorstep pickup address.
              </li>
              <li>
                <strong className="text-white">Payout Processing:</strong> Bank account details or UPI ID provided explicitly by you for receiving instant buyback funds.
              </li>
              <li>
                <strong className="text-white">Ownership Verification:</strong> Government photo ID (e.g. Aadhaar or PAN card) inspected during doorstep trade-in verification to prevent anti-theft trade-ins.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>3. Passcode & Data Access During Repair</span>
            </h2>
            <p>
              During doorstep or cleanroom screen and battery repairs, our technicians <strong className="text-white">never request your personal device lockscreen passcode</strong> unless post-repair biometric sensor calibration (e.g. TrueTone or Touch ID) requires explicit test access in your direct presence.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span>4. Third-Party Sharing & Cookies</span>
            </h2>
            <p>
              Revora does not sell, rent, or trade customer contact details or personal data to third-party marketing brokers. We utilize privacy-friendly Google Analytics for website performance measurement without tracking personally identifiable credentials.
            </p>
          </div>

          {/* Contact Block */}
          <div className="p-6 rounded-2xl bg-[#14131f] border border-white/10 space-y-2">
            <h3 className="text-base font-bold text-white">Questions About Your Data Privacy?</h3>
            <p className="text-xs text-slate-400">
              Contact our Data Protection Officer directly at <a href="mailto:supportsellphone@gmail.com" className="text-amber-400 hover:underline">supportsellphone@gmail.com</a> or call our helpline at <a href="tel:8591770877" className="text-amber-400 hover:underline">+91 8591770877</a>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
