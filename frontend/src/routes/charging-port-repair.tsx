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
  Cable,
  AlertCircle,
} from "lucide-react";
import heroPhone from "../assets/hero-phone.jpg";

const PORT_PROBLEMS = [
  {
    title: "Loose or Wobbly Cable Connection",
    desc: "Charging cord falls out with slight movement or only charges when held at a specific upward/downward angle.",
  },
  {
    title: "Moisture Detected Warning",
    desc: "Persistent moisture alerts on Samsung or Android devices preventing USB charging even when completely dry.",
  },
  {
    title: "Slow Charging or Disconnecting",
    desc: "Fast charging no longer triggers; device takes 6+ hours to charge or repeatedly connects and disconnects.",
  },
  {
    title: "No Data Transfer to PC / OTG Failure",
    desc: "The phone charges slowly but computers fail to recognize the device for data backup or file transfer.",
  },
];

const FAQS = [
  {
    question: "Do I need a new port or just a deep clean?",
    answer:
      "In around 30% of cases, pocket lint, compacted dust, and oxidation prevent the cable pins from making solid electrical contact. SellRepair technicians inspect your port under optical magnification and safely extract debris with anti-static probes. If internal copper contact pins are broken or burnt, we replace the sub-board flex cable.",
  },
  {
    question: "How long does charging port replacement take?",
    answer:
      "A complete charging port dock flex replacement takes between 30 to 45 minutes.",
  },
  {
    question: "Will fast charging still work after port replacement?",
    answer:
      "Yes. We install OEM sub-boards with matching thermistors and high-current traces to retain 25W, 45W, 65W, 80W, and 120W fast charging capabilities.",
  },
  {
    question: "Mobile charge nahi ho raha: Charging jack / connector thik karne me kitna time lagta hai?",
    answer:
      "Charging jack ya port replacement sirf 30 se 45 minute me complete ho jata hai. Loose connection, cable hilane par charging hona, ya moisture detected warning ka permanent solution kiya jata hai with fast-charging retention.",
  },
];

export const Route = createFileRoute("/charging-port-repair")({
  head: () => ({
    meta: [
      {
        title: "Phone Charging Port Repair Near Me — Mobile Charge Nahi Ho Raha | SellRepairPhone",
      },
      {
        name: "description",
        content:
          "Mobile charge nahi ho raha? Fast phone charging port repair & USB-C / Lightning replacement. Fix loose jack & moisture errors within 30-45 mins with 90-day warranty.",
      },
      {
        name: "keywords",
        content:
          "mobile charge nahi ho raha, phone charging problem, mobile charging problem, phone not charging, charging jack repair, charging connector repair, phone charging socket repair, charging port repair near me, USB-C port replacement",
      },
      {
        property: "og:title",
        content: "Phone Charging Port Repair Near Me — Mobile Charge Nahi Ho Raha | SellRepairPhone",
      },
      {
        property: "og:description",
        content:
          "Loose charging port or phone won't charge? 30-minute port replacement with fast charging retention and 90-day warranty.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/charging-port-repair`,
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
    links: [{ rel: "canonical", href: `${SITE_URL}/charging-port-repair` }],
  }),
  component: ChargingPortRepairPage,
});

function ChargingPortRepairPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Repair", url: `${SITE_URL}/repair` },
    { name: "Charging Port Repair", url: `${SITE_URL}/charging-port-repair` },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Mobile Phone Charging Port Repair & Replacement",
    description:
      "Cleanroom repair and replacement of USB-C and Lightning charging ports, sub-board flex circuits, and fast-charging controllers.",
    serviceType: "Smartphone Charging Port Repair",
    url: `${SITE_URL}/charging-port-repair`,
  });

  const faqSchema = getFaqSchema(FAQS);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <SeoJsonLd schema={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-white/5 bg-[#0e0d15]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/repair" className="hover:text-purple-400 transition-colors">
              Repair
            </Link>
            <span>/</span>
            <span className="text-purple-400 font-medium">Charging Port Repair</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 md:py-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold mb-6">
              <Cable className="w-3.5 h-3.5 text-purple-400" />
              Fast Charging Retention • 90-Day VIP Warranty
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Phone Charging Port{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Repair & Replacement
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Having to wiggle your charger or hold the cable at an awkward angle? Sagar Tech diagnoses debris blockage, bent pins, and burnt solder pads to restore snug, rapid charging in 30 to 45 minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/repair"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all hover:scale-105"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Port Repair Online</span>
              </Link>
              <a
                href="tel:+918591770877"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Technician: +91 8591770877</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>30-45 Mins Fix</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>90-Day VIP Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Fast Charging Preserved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Common Charging Port Problems We Solve
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              From microscopic lint blockages to burnt fast-charging pins, we have the right tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORT_PROBLEMS.map((prob, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#0e0d15]/50 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Charging Port Repair FAQs
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-900/50 border border-white/10 rounded-xl p-5 open:bg-slate-900/80 transition-colors"
                >
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between text-base">
                    <span>{faq.question}</span>
                    <span className="text-purple-400 group-open:rotate-180 transition-transform ml-4">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
