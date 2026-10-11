import React, { useState } from "react";
import { HelpCircle, Search, ChevronDown, Languages } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "sell" | "repair" | "security" | "shipping";
}

const FAQS_EN: FaqItem[] = [
  { category: "sell", q: "Will you really buy a completely dead phone?", a: "Yes, 100%! Even if your phone has suffered severe liquid damage, a crushed motherboard, or won't charge, our technicians recover undamaged OEM components. We pay assured cash for all dead flagships." },
  { category: "security", q: "What happens to my personal data?", a: "Your data security is our #1 priority. If the device powers on, we execute a military-grade data wipe. If dead, the memory chip is physically destroyed and recycled safely." },
  { category: "repair", q: "How fast is same-day repair?", a: "Most screen and battery replacements take only 30 to 45 minutes on our in-store lab benches. Reserving a slot online guarantees bench priority." },
  { category: "shipping", q: "How does the mail-in prepaid kit work?", a: "We immediately send a shockproof mailer with a prepaid Express Courier label to your doorstep. Simply slide your device in and hand it to the courier." },
  { category: "sell", q: "How quickly do I get paid?", a: "Once your package arrives, our automated bench inspects it within 4 hours. Funds are released instantly via UPI (GPay, PhonePe) or IMPS." },
];

const FAQS_HINGLISH: FaqItem[] = [
  { category: "sell", q: "Kya aap sach mein completely dead phone kharidte ho?", a: "Haan, 100%! Agar phone paani mein gir gaya ho, motherboard dead ho, ya charge nahi ho raha ho, hum fir bhi undamaged parts recover karte hain. Hum sabhi dead flagships ke liye assured cash dete hain." },
  { category: "security", q: "Mere personal photos aur data ka kya hoga?", a: "Data security humari sabse badi priority hai. Agar phone on hota hai toh hum military-grade wipe karte hain. Agar completely dead hai, toh memory chip physically destroy aur recycle ki jaati hai." },
  { category: "repair", q: "Same-day repair kitna fast hota hai?", a: "Zyadatar screen aur battery replacements sirf 30 se 45 minute mein ho jaati hain. Online slot book karne se aapko priority milti hai." },
  { category: "shipping", q: "Mail-in prepaid pickup kaise kaam karta hai?", a: "Hum turant aapke address par ek shockproof mailer aur prepaid express courier label bhejte hain. Bas apna phone usme daaliye aur courier wale ko de dijiye." },
  { category: "sell", q: "Payment kitni jaldi milegi?", a: "Jaise hi aapka phone humare lab mein aata hai, 4 ghante mein inspection ho jata hai. Uske turant baad payment UPI (GPay, PhonePe) ya IMPS ke through mil jayegi." },
];

export function FaqSection() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isHinglish, setIsHinglish] = useState(false);

  const activeFaqs = isHinglish ? FAQS_HINGLISH : FAQS_EN;

  const filteredFaqs = activeFaqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 overflow-hidden border border-line shadow-sm">
      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-line pb-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <HelpCircle className="h-4 w-4" /> Instant Answers
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">Frequently Asked Questions</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Everything you need to know about selling dead phones, data security, and fast payouts.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-auto">
          <button
            onClick={() => setIsHinglish(!isHinglish)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-line bg-background hover:border-brand-300 transition-colors text-[13px] font-bold text-ink focus-ring min-h-[48px]"
          >
            <Languages className="h-4 w-4 text-brand" />
            {isHinglish ? "Read in English" : "Read in Hinglish"}
          </button>
          
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-xl border border-line bg-white pl-10 pr-4 py-3 text-[14px] text-ink placeholder:text-muted outline-none transition focus-ring min-h-[48px]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-[15px] text-muted border-2 border-dashed border-line rounded-2xl">
            No questions matched your search query. Contact our 24/7 team!
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="rounded-2xl bg-white border border-line overflow-hidden transition-all shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 text-left font-bold text-[15px] transition focus-ring min-h-[56px] ${
                    isOpen ? "text-brand bg-brand-50" : "text-ink hover:text-brand"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 leading-tight">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : "text-muted"}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] text-muted leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 bg-brand-50/50">
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
