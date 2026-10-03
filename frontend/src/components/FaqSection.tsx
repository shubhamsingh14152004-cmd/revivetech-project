import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ShieldCheck,
  Zap,
  Lock,
  Truck,
} from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "sell" | "repair" | "security" | "shipping";
}

const FAQS: FaqItem[] = [
  {
    category: "sell",
    q: "Will you really buy a completely dead phone that doesn't turn on at all?",
    a: "Yes, 100%! Even if your phone has suffered severe liquid damage, a crushed motherboard, cracked sapphire glass, or won't charge, our cleanroom technicians harvest undamaged OEM components (cameras, titanium frames, microchips, biometric sensors). We pay guaranteed cash for all dead flagships.",
  },
  {
    category: "security",
    q: "What happens to my personal data, photos, and accounts?",
    a: "Your data security is our #1 priority. If the device powers on, we execute a NIST 800-88 military-grade 3-pass hardware wipe. If the device is dead beyond board repair, the NAND flash memory chip is physically destroyed and recycled under strict compliance protocols.",
  },
  {
    category: "repair",
    q: "How fast is same-day repair and do I need an appointment?",
    a: "Most screen, battery, and camera replacements take only 30 to 45 minutes on our in-store cleanroom benches. While walk-ins are always welcome, reserving a slot online guarantees bench priority and locks in your discounted rate.",
  },
  {
    category: "shipping",
    q: "How does the mail-in prepaid kit work?",
    a: "When you accept a valuation or book a mail-in fix, we immediately send a shockproof foam cushioned mailer with a prepaid Express Priority Courier label to your doorstep. Simply slide your device in and hand it to the courier pickup or drop-off point.",
  },
  {
    category: "sell",
    q: "How quickly do I get paid when selling my dead device?",
    a: "Once your package arrives at our facility, our automated diagnostic bench inspects it within 4 hours. Funds are released instantly via your choice of UPI (GPay, PhonePe, Paytm), IMPS Direct Bank Transfer, or Cash the same business day.",
  },
];

export function FaqSection() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative rounded-3xl bg-white p-6 md:p-10 overflow-hidden border border-[#E5E7EB] shadow-lg">
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1 text-xs font-semibold text-[#005B46] font-label border border-[#43C59E]/30">
            <HelpCircle className="h-3.5 w-3.5 text-[#007F5F]" />
            Instant Answers & Knowledge Base
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-[#102A26]">
            Frequently Asked Questions
          </h3>
          <p className="font-display text-sm text-[#6B7280] mt-1 max-w-xl">
            Everything you need to know about selling dead phones, cleanroom
            repairs, data security, and payout speeds.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. data, warranty)…"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-9 pr-3.5 py-2.5 text-xs text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] font-display"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#6B7280]" />
        </div>
      </div>

      {/* Accordion List */}
      <div className="relative z-10 mt-6 space-y-3">
        {filteredFaqs.length === 0 ? (
          <p className="py-8 text-center text-xs text-[#6B7280] font-display">
            No questions matched your search query. Contact our 24/7 team below!
          </p>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-display font-semibold text-sm text-[#102A26] hover:text-[#007F5F] transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 text-[#6B7280] ${
                      isOpen ? "rotate-180 text-[#007F5F]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#E5E7EB] font-display text-xs sm:text-sm text-[#6B7280] leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
