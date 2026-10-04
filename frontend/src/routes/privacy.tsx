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
        content: `${SITE_URL}/images/hero-phone.jpg`,
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
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-[#475569] flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-semibold">Privacy Policy</span>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-transparent to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#007F5F]" />
            <span>NIST 800-88 Data Protection Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A26] tracking-tight">
            Privacy Policy & Data Security Guarantee
          </h1>
          <p className="mt-3 text-[#475569] text-sm sm:text-base leading-relaxed">
            Last Updated: October 3, 2026. This policy outlines how Revora handles customer data during mobile repair services, device trade-ins, and online inquiries.
          </p>
        </section>

        {/* Content Body */}
        <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 text-[#475569] text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#007F5F]" />
              <span>1. Device Storage Sanitization (NIST 800-88 Guidelines)</span>
            </h2>
            <p>
              When you sell an old, used, damaged, or dead smartphone to Revora, your data security is our highest operational priority:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-[#475569]">
              <li>
                <strong className="text-[#102A26]">Bootable Devices:</strong> Before any device enters our processing pipeline, our certified technicians execute an encrypted factory reset throwing away cryptographic keys in compliance with NIST 800-88 guidelines.
              </li>
              <li>
                <strong className="text-[#102A26]">Non-Bootable & Dead Phones:</strong> For devices with severe motherboard damage or liquid corrosion that refuse to power on, storage chips undergo high-frequency degaussing or physical board destruction to ensure zero recoverable fragments remain.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#007F5F]" />
              <span>2. Customer Personal Information Collected</span>
            </h2>
            <p>
              We collect minimal personal information strictly required to perform repair services, issue instant buyback payouts, and comply with legal regulations:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-[#475569]">
              <li>
                <strong className="text-[#102A26]">Contact & Pickup Details:</strong> Full name, 10-digit mobile number, email address, and physical doorstep pickup address.
              </li>
              <li>
                <strong className="text-[#102A26]">Payout Processing:</strong> Bank account details or UPI ID provided explicitly by you for receiving instant buyback funds.
              </li>
              <li>
                <strong className="text-[#102A26]">Ownership Verification:</strong> Government photo ID (e.g. Aadhaar or PAN card) inspected during doorstep trade-in verification to prevent anti-theft trade-ins.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#007F5F]" />
              <span>3. Passcode & Data Access During Repair</span>
            </h2>
            <p>
              During doorstep screen and battery repairs, our technicians <strong className="text-[#102A26]">never request your personal device lockscreen passcode</strong> unless post-repair biometric sensor calibration (e.g. TrueTone or Touch ID) requires explicit test access in your direct presence.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[#102A26] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#007F5F]" />
              <span>4. Third-Party Sharing & Cookies</span>
            </h2>
            <p>
              Revora does not sell, rent, or trade customer contact details or personal data to third-party marketing brokers. We utilize privacy-friendly analytics for website performance measurement without tracking personally identifiable credentials.
            </p>
          </div>

          {/* Contact Block */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-2 shadow-xs">
            <h3 className="text-base font-bold text-[#102A26]">Questions About Your Data Privacy?</h3>
            <p className="text-xs text-[#6B7280]">
              Contact our Data Protection Officer directly at <a href="mailto:supportsellphone@gmail.com" className="text-[#007F5F] hover:underline font-medium">supportsellphone@gmail.com</a> or call our helpline at <a href="tel:8591770877" className="text-[#007F5F] hover:underline font-medium">+91 8591770877</a>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

