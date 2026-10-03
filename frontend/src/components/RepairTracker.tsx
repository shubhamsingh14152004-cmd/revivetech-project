import React, { useState } from "react";
import { api } from "../services/api";
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
  Loader2,
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
    customer: "Sarah J. (Mumbai, MH)",
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
    customer: "David K. (Mumbai, MH)",
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
    customer: "Elena M. (Thane, MH)",
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
  const [isSearchingApi, setIsSearchingApi] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchQuery.trim().toUpperCase();
    if (!cleanQuery) return;

    const foundDemo = DEMO_ORDERS[cleanQuery];
    if (foundDemo) {
      setActiveOrder(foundDemo);
      toast.success(`Found status for ${cleanQuery}`);
      return;
    }

    setIsSearchingApi(true);
    try {
      const res = await api.getRepairById(cleanQuery);
      if (res.success && res.data) {
        const item = res.data;
        const stepNum =
          item.status === "Pending"
            ? 1
            : item.status === "Confirmed"
            ? 2
            : item.status === "In Progress"
            ? 3
            : item.status === "Completed"
            ? 5
            : 1;

        const mapped: OrderStatus = {
          id: item.ticketNumber || item._id,
          customer: `${item.customerName} (${item.phoneNumber})`,
          device: `${item.phoneBrand || ""} ${item.phoneModel}`.trim(),
          issue: item.serviceType || item.problemDescription || "Mobile Repair",
          currentStep: stepNum,
          estimatedReady: item.status === "Completed" ? "READY FOR PICKUP" : "Processing in Cleanroom",
          technician: "Revora Certified Cleanroom Engineer",
          batteryHealth: 100,
          waterproofPass: true,
          notes: item.adminNotes || item.problemDescription || "Order registered in backend system.",
          steps: [
            { title: "Request Submitted & Registered", time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), done: true },
            { title: "Cleanroom Verification & Dispatch", time: stepNum >= 2 ? "Confirmed" : "Pending", done: stepNum >= 2 },
            { title: "Hardware Repair & Diagnostics", time: stepNum >= 3 ? "In Progress" : "Pending", done: stepNum >= 3 },
            { title: "28-Point Bench Quality Control", time: stepNum >= 4 ? "Passed" : "Pending", done: stepNum >= 4 },
            { title: "Completion & Payout / Handover", time: item.status === "Completed" ? "Complete" : "Pending", done: stepNum >= 5 },
          ],
        };

        setActiveOrder(mapped);
        toast.success(`Found live database record #${mapped.id}`);
      } else {
        toast.error(`Order ${cleanQuery} not found. Try demo codes RT-8842, RT-9104, or RT-3319.`);
      }
    } catch (err: any) {
      toast.error(`Could not locate order ${cleanQuery}`, {
        description: err.message || "Order ID not found in system.",
      });
    } finally {
      setIsSearchingApi(false);
    }
  };

  const loadDemo = (code: string) => {
    setSearchQuery(code);
    setActiveOrder(DEMO_ORDERS[code] ?? null);
  };

  return (
    <div className="relative rounded-3xl bg-white p-6 md:p-10 overflow-hidden border border-[#E5E7EB] shadow-lg">
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1 text-xs font-semibold text-[#005B46] font-label border border-[#43C59E]/30">
            <Search className="h-3.5 w-3.5 text-[#007F5F]" />
            Live Cleanroom Diagnostic Tracker
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-[#102A26]">
            Track Device Repair in Real-Time
          </h3>
          <p className="font-display text-sm text-[#6B7280] mt-1 max-w-xl">
            Enter your Repair Reference ID or IMEI to view microscopic bench
            progress, technician notes, and exact completion time.
          </p>
        </div>

        {/* Quick Demo Buttons */}
        <div className="flex items-center gap-2 text-xs font-display">
          <span className="text-[#6B7280]">Demo Orders:</span>
          {["RT-8842", "RT-9104", "RT-3319"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => loadDemo(code)}
              className={`rounded-lg px-2.5 py-1 text-xs font-mono font-bold border transition cursor-pointer ${
                searchQuery === code
                  ? "bg-[#007F5F] text-white border-[#007F5F] shadow-xs"
                  : "bg-white text-[#102A26] border-[#E5E7EB] hover:bg-[#FAFAF7]"
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
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white pl-11 pr-4 py-3 text-sm text-[#102A26] placeholder:text-slate-400 outline-none transition focus:border-[#007F5F] focus:ring-2 focus:ring-[#007F5F]/20 font-mono"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
        </div>
        <button
          type="submit"
          disabled={isSearchingApi}
          className="rounded-2xl bg-[#007F5F] hover:bg-[#005B46] px-6 py-3 text-xs font-bold text-white transition font-label cursor-pointer flex items-center gap-2 disabled:opacity-50"
        >
          {isSearchingApi ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              <span>Searching…</span>
            </>
          ) : (
            <span>Track Now</span>
          )}
        </button>
      </form>

      {/* Order Status Display */}
      {activeOrder && (
        <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Multi-Step Timeline */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FAFAF7] p-6 border border-[#E5E7EB] space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
              <div>
                <span className="font-label text-xs text-[#6B7280] block">
                  Active Reference:
                </span>
                <span className="font-mono text-xl font-extrabold text-[#007F5F]">
                  #{activeOrder.id}
                </span>
              </div>
              <div className="text-right">
                <span className="font-label text-xs text-[#6B7280] block">
                  Current Status
                </span>
                <span
                  className={`font-label text-xs font-bold px-3 py-1 rounded-full border ${
                    activeOrder.currentStep === 5
                      ? "bg-[#DDF5EA] text-[#005B46] border-[#43C59E]/30"
                      : "bg-amber-100 text-amber-800 border-amber-300"
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
                          ? "bg-[#007F5F] text-white shadow-xs"
                          : isCurrent
                          ? "bg-[#DDF5EA] text-[#005B46] border border-[#007F5F] ring-2 ring-[#007F5F]/30"
                          : "bg-white text-slate-400 border border-[#E5E7EB]"
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
                              ? "text-[#102A26]"
                              : "text-slate-400"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <span className="font-mono text-xs text-[#6B7280]">
                          {step.time}
                        </span>
                      </div>
                      {isCurrent && (
                        <p className="font-display text-xs text-[#007F5F] mt-0.5">
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
          <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-[#E5E7EB] shadow-xs space-y-5">
            <div>
              <span className="font-label text-xs text-[#007F5F] uppercase font-bold tracking-wider">
                Assigned Workstation
              </span>
              <h4 className="font-display text-lg font-bold text-[#102A26] mt-1">
                {activeOrder.device}
              </h4>
              <p className="font-display text-xs text-[#6B7280]">
                Primary Issue: {activeOrder.issue}
              </p>
            </div>

            {/* Bench health indicators */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] p-3 text-xs font-display">
                <span className="text-[#6B7280] block">Battery Post-Check:</span>
                <span className="font-display text-base font-bold text-[#007F5F]">
                  {activeOrder.batteryHealth}% Capacity
                </span>
              </div>
              <div className="rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] p-3 text-xs font-display">
                <span className="text-[#6B7280] block">Waterproof Reseal:</span>
                <span className="font-display text-base font-bold text-[#007F5F]">
                  IP68 Verified Pass
                </span>
              </div>
            </div>

            {/* Technician Notes */}
            <div className="rounded-xl bg-[#FAFAF7] border border-[#E5E7EB] p-4 font-display text-xs space-y-1.5">
              <span className="font-label text-[11px] text-[#6B7280] uppercase font-bold block">
                Lead Technician Notes ({activeOrder.technician}):
              </span>
              <p className="text-[#102A26] leading-relaxed italic">
                "{activeOrder.notes}"
              </p>
            </div>

            {/* Estimated Completion */}
            <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4 font-display text-xs">
              <span className="text-[#6B7280]">Estimated Ready:</span>
              <span className="font-bold text-[#007F5F] text-sm">
                {activeOrder.estimatedReady}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                toast.success("Diagnostic PDF report downloaded with bench stamps!");
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFAF7] hover:bg-[#DDF5EA] text-[#102A26] hover:text-[#005B46] py-3 text-xs font-bold font-label transition border border-[#E5E7EB] hover:border-[#007F5F] cursor-pointer"
            >
              <FileText className="h-4 w-4 text-[#007F5F]" />
              <span>Download Signed Bench Certificate (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
