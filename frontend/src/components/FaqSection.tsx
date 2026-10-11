import React, { useState } from "react";
import { HelpCircle, Search, ChevronDown, Languages } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "sell" | "repair" | "security" | "shipping";
}

const FAQS_EN: FaqItem[] = [
  { category: "sell", q: "Can I ask Revora about a damaged or non-working phone?", a: "Contact us with the phone model and its condition. We will let you know whether we can assess it and explain the next steps before you decide." },
  { category: "security", q: "What should I do with my personal data before selling?", a: "Back up your data, sign out of accounts, remove the SIM and memory card, and factory-reset a working phone before handing it over. Contact us first if your phone cannot be powered on." },
  { category: "repair", q: "How do I find out whether my phone can be repaired?", a: "Tell us the model and describe the problem. We can discuss an assessment and availability; repair time and cost depend on the device, fault, and parts required." },
  { category: "shipping", q: "Where does Revora currently serve?", a: "Revora lists service areas in Mumbai, Navi Mumbai, and Thane. Contact us to confirm availability for your location and the service you need." },
  { category: "sell", q: "How do I get a quote or contact support?", a: "Share the phone model and condition by phone or WhatsApp. Any estimate may change after the device is assessed; you can ask questions before deciding." },
];

const FAQS_HINGLISH: FaqItem[] = [
  { category: "sell", q: "Kya Revora damaged ya band phone ke baare mein bata sakta hai?", a: "Phone ka model aur condition humein batayein. Hum batayenge ki assessment possible hai ya nahi aur aage ke steps samjhayenge." },
  { category: "security", q: "Phone bechne se pehle personal data ka kya karun?", a: "Data ka backup lein, accounts se sign out karein, SIM aur memory card nikaalein, aur chalne wale phone ko factory reset karein. Phone on nahi hota ho toh pehle humse baat karein." },
  { category: "repair", q: "Phone repair ho sakta hai ya nahi kaise pata chalega?", a: "Model aur problem batayein. Hum assessment aur availability par baat karenge; time aur cost device, fault aur required parts par depend karte hain." },
  { category: "shipping", q: "Revora kin jagahon par service deta hai?", a: "Revora ki listed service areas Mumbai, Navi Mumbai aur Thane hain. Apne area aur required service ki availability confirm karne ke liye humein contact karein." },
  { category: "sell", q: "Quote ya support ke liye kaise contact karun?", a: "Phone ka model aur condition call ya WhatsApp par share karein. Assessment ke baad estimate badal sakta hai; faisla karne se pehle aap sawal pooch sakte hain." },
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
            No questions matched your search query. Contact our team for help.
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
