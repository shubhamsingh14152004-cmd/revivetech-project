import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  SeoJsonLd,
  getLocalBusinessSchema,
  getBreadcrumbSchema,
  SITE_URL,
} from "../components/SeoJsonLd";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Truck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact ReviveTech — Customer Support, Doorstep Pickup & Cleanroom Lab",
      },
      {
        name: "description",
        content:
          "Contact ReviveTech customer support. Call/WhatsApp +91 8591770877 or email supportsellphone@gmail.com for instant repair quotes, doorstep courier pickup & phone buybacks.",
      },
      {
        name: "keywords",
        content:
          "contact ReviveTech, phone repair contact, phone repair customer care, doorstep mobile repair pickup, sell phone contact number, mobile repair helpline",
      },
      {
        property: "og:title",
        content: "Contact ReviveTech — Customer Support, Doorstep Pickup & Cleanroom Lab",
      },
      {
        property: "og:description",
        content:
          "Need help with phone repair or selling your device? Connect with ReviveTech via phone, WhatsApp, or instant message.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/contact`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("repair");
  const [message, setMessage] = useState("");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Contact Us", url: `${SITE_URL}/contact` },
  ]);

  const localBusinessSchema = getLocalBusinessSchema();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, localBusinessSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Contact Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Direct Technician Desk • Fast Support Response
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Sagar Tech
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about repairing your broken screen, need a custom bulk device valuation, or want to follow up on a doorstep pickup? Our technical team is available 7 days a week.
            </p>
          </div>
        </section>

        {/* Contact Info & Inquiry Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Direct Channels & NAP */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Direct Communication Channels</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach us immediately via direct telephone call or WhatsApp message for instant quotes and slot reservation.
              </p>

              <div className="space-y-4">
                {/* Phone Card */}
                <a
                  href="tel:+918591770877"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
                      Direct Support Line
                    </div>
                    <div className="text-lg font-bold text-white mt-0.5">+91 8591770877</div>
                    <p className="text-xs text-slate-400 mt-1">Available 9:00 AM – 9:00 PM IST (Mon - Sun)</p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/918591770877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-lg font-bold text-white mt-0.5">+91 8591770877</div>
                    <p className="text-xs text-slate-400 mt-1">Send photos of damaged screens for instant photo valuation</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:supportsellphone@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-pink-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-pink-300 font-semibold uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-base font-bold text-white mt-0.5">supportsellphone@gmail.com</div>
                    <p className="text-xs text-slate-400 mt-1">Corporate inquiries, ITAD bulk buybacks & warranty service</p>
                  </div>
                </a>

                {/* Coverage & Operating Model */}
                <div className="p-5 rounded-2xl bg-[#0e0d15] border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Truck className="w-4 h-4 text-purple-400" />
                    <span>Nationwide Doorstep Courier & Cleanroom Processing</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    SellRepair operates a centralized high-tech ISO cleanroom repair laboratory with pan-India insured courier pickup and local express doorstep technician visits. Every parcel is tamper-sealed and insured end-to-end.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="bg-slate-900/70 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h2 className="text-xl font-bold text-white mb-2">Send Us an Inquiry</h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and an engineer will reply within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white">Message Received!</h3>
                  <p className="text-xs text-slate-300 mt-2">
                    Thank you, {fullName}. Our technical support coordinator will call you at +91 {phone} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      10-Digit Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 tracking-wider"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Exactly 10 digits required ({phone.length}/10)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                    >
                      <option value="repair">Mobile Phone Repair Quote</option>
                      <option value="sell">Sell Old / Dead Phone</option>
                      <option value="corporate">Corporate / Bulk Buyback</option>
                      <option value="warranty">Warranty & Service Status</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Device Details & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mention your phone model (e.g. iPhone 14 Pro, Galaxy S23) and issue (broken screen, dead phone, battery drain)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
