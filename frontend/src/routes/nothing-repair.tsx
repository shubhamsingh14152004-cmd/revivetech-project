import React from "react";
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
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Wrench,
  Cpu,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const NOTHING_MODELS = [
  "Nothing Phone (2)",
  "Nothing Phone (1)",
  "Nothing Phone (2a) Plus",
  "Nothing Phone (2a)",
  "CMF Phone 1",
];

const NOTHING_SERVICES = [
  {
    title: "Flexible OLED Display Replacement",
    desc: "120Hz LTPO flexible AMOLED panels with accurate color tuning, 1000Hz touch sampling, and in-display fingerprint scanner recalibration.",
    time: "35 - 45 Mins",
    warranty: "90-Day Priority Warranty",
  },
  {
    title: "Glyph Interface LED & Flex Ribbon Fix",
    desc: "Precision restoration of the transparent rear Glyph LED light strips, diffusion layers, and illumination driver ICs.",
    time: "45 - 60 Mins",
    warranty: "90-Day Priority Warranty",
  },
  {
    title: "Transparent Rear Glass Panel Replacement",
    desc: "Original transparent tempered Gorilla Glass back cover replacement retaining water-resistance gaskets and wireless charging coils.",
    time: "30 - 45 Mins",
    warranty: "90-Day Priority Warranty",
  },
  {
    title: "45W / 33W Fast Charging Sub-Board Dock",
    desc: "OEM Type-C charging port sub-board swap supporting PPS fast charging protocols without overheating or loose connector pins.",
    time: "30 Mins",
    warranty: "90-Day Priority Warranty",
  },
  {
    title: "High-Density Battery Replacement",
    desc: "Brand-new high-capacity battery assemblies designed to restore full-day stamina without inflating or thermal degradation.",
    time: "30 Mins",
    warranty: "90-Day Priority Warranty",
  },
  {
    title: "Nothing OS Bootloop & Motherboard Micro-Soldering",
    desc: "Component-level motherboard repair, power IC replacement, and software flash recovery for devices stuck on the Nothing boot screen.",
    time: "Same-Day / 24h",
    warranty: "90-Day Priority Warranty",
  },
];

const FAQS = [
  {
    question: "Will the Glyph Interface lights work properly after screen or back glass replacement?",
    answer: "Yes! Our technicians carefully isolate and re-align each Glyph LED strip, optical diffuser, and ambient sensor. We run automated diagnostic light checks to ensure 100% illumination synchronization with Nothing OS ringtones and timers.",
  },
  {
    question: "Do you use original transparent back glass for Nothing Phone (1) and Phone (2)?",
    answer: "Yes. We source OEM-spec transparent Gorilla Glass rear panels complete with clean optical adhesive seals to preserve the iconic see-through aesthetics and wireless charging integrity.",
  },
  {
    question: "How long does a Nothing Phone screen replacement take?",
    answer: "A complete display replacement takes 35 to 45 minutes on our ESD-safe static bench. Doorstep pickup across Mumbai, Navi Mumbai, and Thane is available.",
  },
  {
    question: "What warranty do you provide on Nothing phone repairs?",
    answer: "Every Nothing smartphone repair includes Revora's 90-Day Priority Warranty covering display responsiveness, component stability, and workmanship.",
  },
];

export const Route = createFileRoute("/nothing-repair")({
  head: () => ({
    meta: [
      {
        title: "Nothing Phone Repair Near Me — Screen, Glyph & Battery Fix | Revora",
      },
      {
        name: "description",
        content: "Expert Nothing Phone (1), Phone (2), and Phone (2a) repair in Mumbai. OLED display replacement, Glyph LED fix, transparent back glass, 90-day warranty.",
      },
      {
        name: "keywords",
        content: "nothing phone repair, nothing phone 1 screen replacement, nothing phone 2 display repair, nothing glyph interface fix, nothing phone service center mumbai, nothing phone back glass replacement",
      },
      {
        property: "og:title",
        content: "Nothing Phone Repair Near Me — Screen, Glyph & Battery Fix | Revora",
      },
      {
        property: "og:description",
        content: "Expert Nothing Phone repairs in Mumbai. Flexible OLED screens, Glyph Interface LED fixes, transparent back glass, and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/nothing-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/nothing-repair` }],
  }),
  component: NothingRepairPage,
});

function NothingRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Nothing Phone Repair", url: `${SITE_URL}/nothing-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Nothing Smartphone Repair & Display Replacement",
    description: "Precision Nothing Phone repairs including flexible OLED display replacement, Glyph Interface restoration, transparent back glass renewal, and motherboard micro-soldering.",
    serviceType: "Nothing Smartphone Repair",
    url: `${SITE_URL}/nothing-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col selection:bg-brand selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-line bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-muted flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-brand transition-colors">
              Repair
            </Link>
            <span>/</span>
            <span className="text-brand font-semibold">Nothing Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-line bg-gradient-to-b from-brand-tint/50 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tint border border-brand/30 text-brand-ink text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              Glyph LEDs & 120Hz OLED Restored • 90-Day Priority Warranty
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
              Expert Nothing Phone Repair{" "}
              <span className="text-brand">in Mumbai</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Transparent design requires precision engineering. Get OEM-grade flexible OLED screen replacements, Glyph Interface LED calibration, and genuine transparent rear glass installation across Mumbai, Navi Mumbai, and Thane.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition shadow-sm"
              >
                <span>View Nothing Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-line text-ink text-sm font-semibold hover:bg-slate-50 transition"
              >
                <PhoneCall className="w-4 h-4 text-brand" />
                <span>Book Free Doorstep Inspection</span>
              </Link>
            </div>
          </div>
        </section>

        {/* AEO Quick Facts Table */}
        <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-ink mb-4">Nothing Repair Key Specifications & Guarantees</h2>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
            <table className="w-full text-left text-[14px]">
              <tbody>
                <tr className="border-b border-line">
                  <th className="bg-background py-3.5 px-5 w-1/3 font-bold text-ink">Service Time</th>
                  <td className="py-3.5 px-5 text-muted">35 - 45 Minutes (Express Lab Bench)</td>
                </tr>
                <tr className="border-b border-line">
                  <th className="bg-background py-3.5 px-5 font-bold text-ink">Warranty</th>
                  <td className="py-3.5 px-5 text-muted">90-Day Priority Warranty (Touch & Hardware)</td>
                </tr>
                <tr className="border-b border-line">
                  <th className="bg-background py-3.5 px-5 font-bold text-ink">Glyph LED Calibration</th>
                  <td className="py-3.5 px-5 text-muted">100% Diagnostic Pattern & Brightness Synchronized</td>
                </tr>
                <tr className="border-b border-line">
                  <th className="bg-background py-3.5 px-5 font-bold text-ink">Service Coverage</th>
                  <td className="py-3.5 px-5 text-muted">Mumbai, Navi Mumbai, Thane (Free Doorstep Pickup)</td>
                </tr>
                <tr>
                  <th className="bg-background py-3.5 px-5 font-bold text-ink">Payment Method</th>
                  <td className="py-3.5 px-5 text-muted">UPI, Bank Transfer, Net Banking (Pay After Verification)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Supported Models */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-ink">Supported Nothing Devices</h2>
            <p className="text-muted text-sm mt-1">We service all models from the Nothing ecosystem</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {NOTHING_MODELS.map((model) => (
              <div
                key={model}
                className="p-4 rounded-xl bg-white border border-line text-center text-xs font-semibold text-ink shadow-xs hover:border-brand transition"
              >
                {model}
              </div>
            ))}
          </div>
        </section>

        {/* Repair Services Grid */}
        <section id="services" className="py-12 bg-white border-t border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink">Specialized Nothing Repair Capabilities</h2>
              <p className="text-muted text-sm mt-2">
                Certified lab-bench services for the transparent mechanical architecture of Nothing Phones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NOTHING_SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="p-6 rounded-2xl bg-background border border-line hover:border-brand/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">{s.time}</span>
                      <span className="text-[11px] font-semibold text-muted bg-white border border-line px-2 py-0.5 rounded-md">
                        {s.warranty}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-ink mb-2">{s.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-brand">OEM Grade</span>
                    <Link to="/contact" className="text-ink font-bold hover:text-brand flex items-center gap-1">
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-ink">Frequently Asked Questions</h2>
            <p className="text-muted text-sm mt-1">Common queries regarding Nothing Phone servicing and warranties</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-line rounded-xl p-5 open:bg-slate-50 transition-colors shadow-xs"
              >
                <summary className="font-semibold text-ink cursor-pointer flex items-center justify-between text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-brand group-open:rotate-180 transition-transform ml-4">▼</span>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed border-t border-line pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
