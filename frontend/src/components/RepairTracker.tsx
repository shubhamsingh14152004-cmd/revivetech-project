import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  Smartphone,
  Truck,
  FileText,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

interface OrderStatus {
  id: string;
  customer: string;
  device: string;
  issue: string;
  currentStep: number; // 1 to 5
  estimatedReady: string;
  technician: string;
  batteryHealth: number;
  waterproofPass: boolean;
  notes: string;
  steps: { title: string; time: string; done: boolean }[];
}

const DEMO_ORDERS: { [key: string]: OrderStatus } = {
  "RT-8842": {
    id: "RT-8842",
    customer: "Sarah J. (Chicago, IL)",
    device: "iPhone 14 Pro Max - Space Black",
    issue: "Motherboard Power IC & Screen Glitch",
    currentStep: 3,
    estimatedReady: "Today at 4:15 PM",
    technician: "Master Tech Marcus V. (#04)",
    batteryHealth: 100,
    waterproofPass: true,
    notes:
      "Ultrasonic wash removed all corrosion traces. Tristar charging regulator replaced. Currently bench-testing 120Hz display refresh stability.",
    steps: [
      { title: "Device Checked In & Scanned", time: "09:15 AM", done: true },
      { title: "Microscopic Cleanroom Diagnostic", time: "10:30 AM", done: true },
      { title: "Micro-Soldering & IC Rework", time: "In Progress", done: true },
      { title: "28-Point Bench QC & Seal", time: "Pending", done: false },
      { title: "Ready for Pickup / Dispatch", time: "Est. 4:15 PM", done: false },
    ],
  },
  "RT-9104": {
    id: "RT-9104",
    customer: "David K. (Austin, TX)",
    device: "Samsung Galaxy S24 Ultra - Titanium Gray",
    issue: "Shattered OLED & Periscope Camera Sensor",
    currentStep: 5,
    estimatedReady: "READY FOR PICKUP",
    technician: "Senior Tech Liam R. (#12)",
    batteryHealth: 99,
    waterproofPass: true,
    notes:
      "Original Samsung Gorilla Armor OLED panel calibrated to 100% DCI-P3 gamut. Camera focus test passed at 100x zoom. Packaged with VIP 90-day warranty card.",
    steps: [
      { title: "Device Checked In & Scanned", time: "08:45 AM", done: true },
      { title: "Microscopic Cleanroom Diagnostic", time: "09:30 AM", done: true },
      { title: "Original OLED & Camera Install", time: "11:00 AM", done: true },
      { title: "28-Point Bench QC & Seal", time: "01:15 PM", done: true },
      { title: "Ready for Pickup / Dispatch", time: "Ready Now", done: true },
    ],
  },
  "RT-3319": {
    id: "RT-3319",
    customer: "Elena M. (Seattle, WA)",
    device: "Google Pixel 8 Pro - Bay Blue",
    issue: "Dead Battery Swelling & Thermal Throttle",
    currentStep: 2,
    estimatedReady: "Today at 5:30 PM",
    technician: "Tech Specialist Chloe D. (#07)",
    batteryHealth: 100,
    waterproofPass: true,
    notes:
      "Swollen battery safely recycled in fireproof chamber. Applying graphite thermal cooling pad before installing cycle-zero cell.",
    steps: [
      { title: "Device Checked In & Scanned", time: "11:20 AM", done: true },
      { title: "Thermal Isolation & Diagnostic", time: "12:05 PM", done: true },
      { title: "Cycle-Zero Battery Installation", time: "Queued", done: false },
      { title: "28-Point Bench QC & Seal", time: "Pending", done: false },
      { title: "Ready for Pickup / Dispatch", time: "Est. 5:30 PM", done: false },
    ],
  },
};

export function RepairTracker() {
  const [searchQuery, setSearchQuery] = useState("RT-8842");
  const [activeOrder, setActiveOrder] = useState<OrderStatus | null>(
    DEMO_ORDERS["RT-8842"] ?? null
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchQuery.trim().toUpperCase();
    const found = DEMO_ORDERS[cleanQuery];
    if (found) {
      setActiveOrder(found);
      toast.success(`Found live status for ${cleanQuery}`);
    } else {
      toast.error(`Order ${cleanQuery} not found. Try demo codes below.`);
    }
  };

  const loadDemo = (code: string) => {
    setSearchQuery(code);
    setActiveOrder(DEMO_ORDERS[code] ?? null);
  };

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Background accent */}
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-400 font-label border border-blue-500/30">
            <Search className="h-3.5 w-3.5" />
            Live Cleanroom Diagnostic Tracker
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Track Device Repair in Real-Time
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Enter your Repair Reference ID or IMEI to view microscopic bench
            progress, technician notes, and exact completion time.
          </p>
        </div>

        {/* Quick Demo Buttons */}
        <div className="flex items-center gap-2 text-xs font-display">
          <span className="text-white/60">Demo Orders:</span>
          {["RT-8842", "RT-9104", "RT-3319"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => loadDemo(code)}
              className={`rounded-lg px-2.5 py-1 text-xs font-mono font-bold border transition cursor-pointer ${
                searchQuery === code
                  ? "bg-brand text-white border-brand shadow-md"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative z-10 mt-6 max-w-xl flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Order ID (e.g. RT-8842) or IMEI number…"
            className="w-full rounded-2xl border border-white/15 bg-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 font-mono"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        </div>
        <button
          type="submit"
          className="rounded-2xl bg-white px-6 py-3 text-xs font-bold text-ink hover:bg-white/90 transition font-label cursor-pointer"
        >
          Track Now
        </button>
      </form>

      {/* Order Status Display */}
      {activeOrder && (
        <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Multi-Step Timeline */}
          <div className="lg:col-span-7 rounded-2xl bg-black/40 p-6 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-label text-xs text-white/50 block">
                  Active Reference:
                </span>
                <span className="font-mono text-xl font-extrabold text-accent">
                  #{activeOrder.id}
                </span>
              </div>
              <div className="text-right">
                <span className="font-label text-xs text-white/50 block">
                  Current Status
                </span>
                <span
                  className={`font-label text-xs font-bold px-3 py-1 rounded-full border ${
                    activeOrder.currentStep === 5
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  }`}
                >
                  {activeOrder.currentStep === 5
                    ? "✓ READY FOR PICKUP"
                    : "⚡ IN CLEANROOM BENCH"}
                </span>
              </div>
            </div>

            {/* Step Pipeline */}
            <div className="space-y-4">
              {activeOrder.steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isCompleted = stepNum < activeOrder.currentStep || (stepNum === 5 && activeOrder.currentStep === 5);
                const isCurrent = stepNum === activeOrder.currentStep && activeOrder.currentStep !== 5;

                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Step circle */}
                    <div
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold font-mono transition ${
                        isCompleted
                          ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30"
                          : isCurrent
                          ? "bg-accent text-ink live-pulse ring-4 ring-accent/30"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      {isCompleted ? "✓" : stepNum}
                    </div>

                    {/* Step text */}
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`font-display text-sm font-semibold ${
                            isCompleted || isCurrent
                              ? "text-white"
                              : "text-white/40"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <span className="font-mono text-xs text-white/60">
                          {step.time}
                        </span>
                      </div>
                      {isCurrent && (
                        <p className="font-display text-xs text-accent mt-0.5">
                          Active task: Currently undergoing microscopic diagnostic
                          & solder repair.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technician Notes & Inspection Data */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-ink/90 to-brand/10 p-6 border border-white/15 space-y-5">
            <div>
              <span className="font-label text-xs text-accent uppercase font-bold tracking-wider">
                Assigned Workstation
              </span>
              <h4 className="font-display text-lg font-bold text-white mt-1">
                {activeOrder.device}
              </h4>
              <p className="font-display text-xs text-white/70">
                Primary Issue: {activeOrder.issue}
              </p>
            </div>

            {/* Bench health indicators */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs font-display">
                <span className="text-white/60 block">Battery Post-Check:</span>
                <span className="font-display text-base font-bold text-emerald-400">
                  {activeOrder.batteryHealth}% Capacity
                </span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-xs font-display">
                <span className="text-white/60 block">Waterproof Reseal:</span>
                <span className="font-display text-base font-bold text-emerald-400">
                  IP68 Verified Pass
                </span>
              </div>
            </div>

            {/* Technician Notes */}
            <div className="rounded-xl bg-black/40 border border-white/10 p-4 font-display text-xs space-y-1.5">
              <span className="font-label text-[11px] text-white/50 uppercase font-bold block">
                Lead Technician Notes ({activeOrder.technician}):
              </span>
              <p className="text-white/80 leading-relaxed italic">
                "{activeOrder.notes}"
              </p>
            </div>

            {/* Estimated Completion */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4 font-display text-xs">
              <span className="text-white/60">Estimated Ready:</span>
              <span className="font-bold text-accent text-sm">
                {activeOrder.estimatedReady}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                toast.success("Diagnostic PDF report downloaded with bench stamps!");
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white py-3 text-xs font-bold font-label transition border border-white/10 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-accent" />
              <span>Download Signed Bench Certificate (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
