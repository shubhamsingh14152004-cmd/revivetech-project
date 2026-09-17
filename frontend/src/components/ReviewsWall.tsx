import React, { useState } from "react";
import { Star, CheckCircle, Quote, ThumbsUp, IndianRupee, Wrench, ShieldCheck } from "lucide-react";

interface Review {
  id: string;
  category: "sell" | "repair" | "buy";
  author: string;
  location: string;
  device: string;
  rating: number;
  date: string;
  highlightBadge: string;
  review: string;
  payoutOrSaved: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    category: "sell",
    author: "Marcus Vance",
    location: "Bengaluru, KA",
    device: "iPhone 14 Pro Max (Submerged in Lake)",
    rating: 5,
    date: "2 days ago",
    highlightBadge: "Instant ₹4,200 Payout",
    review:
      "My phone sat at the bottom of a lake for 3 hours and wouldn't power on. Service center told me to scrap it for ₹0. ReviveTech gave me ₹4,200 within 24 hours of receiving the box. Truly unreal service!",
    payoutOrSaved: "Paid ₹4,200 via UPI",
  },
  {
    id: "rev-2",
    category: "repair",
    author: "Jessica Lin",
    location: "Mumbai, MH",
    device: "Galaxy S23 Ultra (Shattered OLED)",
    rating: 5,
    date: "Yesterday",
    highlightBadge: "42-Min Cleanroom Fix",
    review:
      "Dropped my phone down concrete metro stairs. Dropped it off at ReviveTech during lunch and had it back glowing like brand new in 42 minutes. True OEM display and fingerprint unlock works seamlessly.",
    payoutOrSaved: "Saved ₹35,000 vs replacement",
  },
  {
    id: "rev-3",
    category: "buy",
    author: "Tyler Brooks",
    location: "Delhi NCR",
    device: "Certified Grade A+ Pixel 8 Pro",
    rating: 5,
    date: "3 days ago",
    highlightBadge: "100% Battery Health",
    review:
      "Bought a pre-loved Pixel 8 Pro for ₹32,000 less than retail. Arrived sealed in a custom ReviveTech box with 100% battery capacity and not a single scratch anywhere. 10/10.",
    payoutOrSaved: "Saved ₹32,000",
  },
  {
    id: "rev-4",
    category: "sell",
    author: "Samantha Ray",
    location: "Hyderabad, TS",
    device: "iPhone 13 (Dead Logic Board)",
    rating: 5,
    date: "5 days ago",
    highlightBadge: "Zero-Hassle Prepaid Kit",
    review:
      "Prepaid shipping box arrived the next morning. Dropped my dead phone in and was paid via UPI the instant their diagnostic bench verified it. Safest trade-in on the internet.",
    payoutOrSaved: "Paid ₹2,800 via GPay",
  },
  {
    id: "rev-5",
    category: "repair",
    author: "Daniel O'Connor",
    location: "Pune, MH",
    device: "OnePlus 11 (Swollen Battery & USB Port)",
    rating: 5,
    date: "1 week ago",
    highlightBadge: "Micro-soldered in 30m",
    review:
      "Technician showed me the battery diagnostic before and after. Super transparent pricing and came with a 90-day warranty certificate. Will never go anywhere else.",
    payoutOrSaved: "Saved ₹22,000",
  },
  {
    id: "rev-6",
    category: "buy",
    author: "Rachel Kim",
    location: "Chennai, TN",
    device: "Certified Galaxy Z Fold 5",
    rating: 5,
    date: "1 week ago",
    highlightBadge: "1-Year Shield Guarantee",
    review:
      "Was nervous buying a refurbished folding phone, but ReviveTech's 100-point inspection certificate put my mind at ease. Hinge is tight and screens are immaculate.",
    payoutOrSaved: "Saved ₹65,000 vs brand new",
  },
];

export function ReviewsWall() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filtered = REVIEWS_DATA.filter((r) => {
    if (selectedFilter === "all") return true;
    return r.category === selectedFilter;
  });

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent font-label border border-accent/30">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            4.9 / 5.0 Rated Across 12,000+ Revivals
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Verified Customer Stories
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Real payouts, cleanroom repairs, and certified device deliveries.
            Hear directly from customers who revived their tech.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "All Reviews (4.9★)" },
            { key: "sell", label: "💵 Sold Dead Phone" },
            { key: "repair", label: "🛠️ Repair within 24hrs" },
            { key: "buy", label: "📱 Pre-Loved Devices" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedFilter(tab.key)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold font-display border transition cursor-pointer ${
                selectedFilter === tab.key
                  ? "bg-white text-ink border-white shadow-md font-bold"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-accent/40 hover:bg-white/10 transition shadow-xl space-y-4"
          >
            <div>
              {/* Rating & Highlight Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                  ))}
                </div>
                <span className="font-label text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {rev.highlightBadge}
                </span>
              </div>

              {/* Review Text */}
              <p className="font-display text-xs text-white/80 mt-3 leading-relaxed">
                "{rev.review}"
              </p>
            </div>

            {/* Author details */}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between font-display text-xs">
              <div>
                <div className="flex items-center gap-1 text-white font-bold">
                  <span>{rev.author}</span>
                  <CheckCircle className="h-3 w-3 text-emerald-400" />
                </div>
                <span className="text-[11px] text-white/50">{rev.location} · {rev.device}</span>
              </div>
              <span className="font-label text-[10px] text-accent font-semibold">
                {rev.payoutOrSaved}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
