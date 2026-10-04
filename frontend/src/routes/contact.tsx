import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { api } from "../services/api";
import { toast } from "sonner";
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
  Loader2,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Revora — Customer Support, Doorstep Pickup & Service Desk",
      },
      {
        name: "description",
        content:
          "Contact Revora customer support. Call/WhatsApp +91 8591770877 or email supportsellphone@gmail.com for instant repair quotes, doorstep courier pickup & phone buybacks.",
      },
      {
        name: "keywords",
        content:
          "contact Revora, phone repair contact, phone repair customer care, doorstep mobile repair pickup, sell phone contact number, mobile repair helpline",
      },
      {
        property: "og:title",
        content: "Contact Revora — Customer Support, Doorstep Pickup & Service Desk",
      },
      {
        property: "og:description",
        content:
          "Need help with phone repair or selling your device? Connect with Revora via phone, WhatsApp, or instant message.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/contact`,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Contact Us", url: `${SITE_URL}/contact` },
  ]);

  const localBusinessSchema = getLocalBusinessSchema();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.submitRepairRequest({
        customerName: fullName.trim(),
        phoneNumber: phone,
        phoneModel: "Inquiry / Support Request",
        serviceType: `Contact Form — ${serviceType}`,
        problemDescription: message.trim() || "General Customer Support Inquiry",
      });

      const genRef =
        response.data?.ticketNumber ||
        `RT-CNT-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketRef(genRef);
      setFormSubmitted(true);
      toast.success(`🎉 Inquiry Registered! Ref #${genRef}`, {
        description: "Our technical team will call or WhatsApp you within 2 hours.",
      });
    } catch (err: any) {
      toast.error("Submission Error", {
        description: err.message || "Failed to submit inquiry to server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#102A26] flex flex-col selection:bg-[#007F5F] selection:text-white pb-24">
      <SeoJsonLd schema={[breadcrumbSchema, localBusinessSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-[#E5E7EB] bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#475569] flex items-center gap-2">
            <Link to="/" className="hover:text-[#007F5F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007F5F] font-semibold">Contact Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden border-b border-[#E5E7EB] bg-gradient-to-b from-[#DDF5EA]/50 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF5EA] border border-[#43C59E]/30 text-[#005B46] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#007F5F]" />
              Direct Technician Desk • Fast Support Response
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A26] tracking-tight leading-tight">
              Get in Touch with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007F5F] to-[#005B46]">
                Revora
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Have questions about repairing your broken screen, need a custom bulk device valuation, or want to follow up on a doorstep pickup? Our technical team is available 7 days a week.
            </p>
          </div>
        </section>

        {/* Contact Info & Inquiry Grid */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Direct Channels & NAP */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#102A26]">Direct Communication Channels</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Reach us immediately via direct telephone call or WhatsApp message for instant quotes and slot reservation.
              </p>

              <div className="space-y-4">
                {/* Phone Card */}
                <a
                  href="tel:+918591770877"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors group shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/30 flex items-center justify-center text-[#007F5F] shrink-0 group-hover:bg-[#007F5F] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#005B46] font-semibold uppercase tracking-wider">
                      Direct Support Line
                    </div>
                    <div className="text-lg font-bold text-[#102A26] mt-0.5">+91 8591770877</div>
                    <p className="text-xs text-[#6B7280] mt-1">Available 9:00 AM – 9:00 PM IST (Mon - Sun)</p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/918591770877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors group shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-lg font-bold text-[#102A26] mt-0.5">+91 8591770877</div>
                    <p className="text-xs text-[#6B7280] mt-1">Send photos of damaged screens for instant photo valuation</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:supportsellphone@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#007F5F] transition-colors group shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 group-hover:bg-[#007F5F] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-teal-800 font-semibold uppercase tracking-wider">
                      Official Email
                    </div>
                    <div className="text-base font-bold text-[#102A26] mt-0.5">supportsellphone@gmail.com</div>
                    <p className="text-xs text-[#6B7280] mt-1">Corporate inquiries, ITAD bulk buybacks & warranty service</p>
                  </div>
                </a>

                {/* Coverage & Operating Model */}
                <div className="p-5 rounded-2xl bg-[#DDF5EA]/50 border border-[#43C59E]/30 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#102A26]">
                    <Truck className="w-4 h-4 text-[#007F5F]" />
                    <span>Nationwide Doorstep Courier & Service Desk Processing</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Revora operates a centralized high-tech ISO repair laboratory with pan-India insured courier pickup and local express doorstep technician visits. Every parcel is tamper-sealed and insured end-to-end.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-2xl shadow-xs">
              <h2 className="text-xl font-bold text-[#102A26] mb-2">Send Us an Inquiry</h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mb-6">
                Fill out the form below and an engineer will reply within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#DDF5EA] border border-[#43C59E]/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#007F5F] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#102A26]">Message Received!</h3>
                  <p className="text-xs text-[#475569] mt-2">
                    Thank you, {fullName}. Our technical support coordinator will call you at +91 {phone} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A26] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#102A26] placeholder-slate-400 text-sm focus:outline-none focus:border-[#007F5F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A26] mb-1">
                      10-Digit Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6B7280]">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#102A26] placeholder-slate-400 text-sm focus:outline-none focus:border-[#007F5F] tracking-wider"
                      />
                    </div>
                    <span className="text-[11px] text-[#6B7280] mt-1 block">
                      Exactly 10 digits required ({phone.length}/10)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A26] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#102A26] text-sm focus:outline-none focus:border-[#007F5F]"
                    >
                      <option value="repair">Mobile Phone Repair Quote</option>
                      <option value="sell">Sell Old / Dead Phone</option>
                      <option value="corporate">Corporate / Bulk Buyback</option>
                      <option value="warranty">Warranty & Service Status</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A26] mb-1">
                      Device Details & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mention your phone model (e.g. iPhone 14 Pro, Galaxy S23) and issue (broken screen, dead phone, battery drain)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#102A26] placeholder-slate-400 text-sm focus:outline-none focus:border-[#007F5F] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#007F5F] hover:bg-[#005B46] text-white font-semibold text-sm transition-all shadow-md shadow-[#007F5F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
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

