import React, { useState } from "react";
import { api } from "../services/api";
import { Search, CheckCircle2, FileText, Loader2, Play } from "lucide-react";
import { toast } from "sonner";

interface OrderStatus {
  id: string;
  customer: string;
  device: string;
  issue: string;
  currentStep: number;
  estimatedReady: string;
  technician: string;
  batteryHealth: number;
  waterproofPass: boolean;
  notes: string;
  steps: { title: string; time: string; done: boolean }[];
}

const DEMO_ORDERS: Record<string, OrderStatus> = {
  "RT-8842": {
    id: "RT-8842",
    customer: "Sarah J.",
    device: "iPhone 14 Pro Max",
    issue: "Motherboard Power IC & Screen Glitch",
    currentStep: 3,
    estimatedReady: "Today at 4:15 PM",
    technician: "Marcus V. (#04)",
    batteryHealth: 100,
    waterproofPass: true,
    notes: "Ultrasonic wash removed all corrosion traces. Tristar charging regulator replaced. Currently bench-testing 120Hz display refresh stability.",
    steps: [
      { title: "Device Checked In", time: "09:15 AM", done: true },
      { title: "Lab Diagnostic", time: "10:30 AM", done: true },
      { title: "Micro-Soldering", time: "In Progress", done: true },
      { title: "Bench QC & Seal", time: "Pending", done: false },
      { title: "Ready for Pickup", time: "Est. 4:15 PM", done: false },
    ],
  },
  "RT-9104": {
    id: "RT-9104",
    customer: "David K.",
    device: "Samsung S24 Ultra",
    issue: "Shattered OLED & Camera",
    currentStep: 5,
    estimatedReady: "READY FOR PICKUP",
    technician: "Liam R. (#12)",
    batteryHealth: 99,
    waterproofPass: true,
    notes: "Original Samsung Gorilla Armor OLED panel installed. Camera focus test passed at 100x zoom. Priority 90-day warranty card packed.",
    steps: [
      { title: "Device Checked In", time: "08:45 AM", done: true },
      { title: "Lab Diagnostic", time: "09:30 AM", done: true },
      { title: "OLED & Camera Install", time: "11:00 AM", done: true },
      { title: "Bench QC & Seal", time: "01:15 PM", done: true },
      { title: "Ready for Pickup", time: "Ready Now", done: true },
    ],
  },
};

export function RepairTracker() {
  const [searchQuery, setSearchQuery] = useState("RT-8842");
  const [activeOrder, setActiveOrder] = useState<OrderStatus | null>(DEMO_ORDERS["RT-8842"] ?? null);
  const [isSearchingApi, setIsSearchingApi] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchQuery.trim().toUpperCase();
    if (!cleanQuery) return;

    if (DEMO_ORDERS[cleanQuery]) {
      setActiveOrder(DEMO_ORDERS[cleanQuery]);
      toast.success(`Found status for ${cleanQuery}`);
      return;
    }

    setIsSearchingApi(true);
    try {
      const res = await api.getRepairById(cleanQuery);
      if (res.success && res.data) {
        const item = res.data;
        const stepMap: Record<string, number> = { "Pending": 1, "Confirmed": 2, "In Progress": 3, "Completed": 5 };
        const stepNum = stepMap[item.status] || 1;

        setActiveOrder({
          id: item.ticketNumber || item._id,
          customer: item.customerName,
          device: `${item.phoneBrand || ""} ${item.phoneModel}`.trim(),
          issue: item.serviceType || "Mobile Repair",
          currentStep: stepNum,
          estimatedReady: stepNum === 5 ? "READY FOR PICKUP" : "Processing in lab",
          technician: "Revora Engineer",
          batteryHealth: 100,
          waterproofPass: true,
          notes: item.adminNotes || "Order registered in backend system.",
          steps: [
            { title: "Request Submitted", time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), done: true },
            { title: "Verification", time: stepNum >= 2 ? "Confirmed" : "Pending", done: stepNum >= 2 },
            { title: "Repair & Diagnostics", time: stepNum >= 3 ? "In Progress" : "Pending", done: stepNum >= 3 },
            { title: "Quality Control", time: stepNum >= 4 ? "Passed" : "Pending", done: stepNum >= 4 },
            { title: "Ready for Pickup", time: stepNum === 5 ? "Complete" : "Pending", done: stepNum === 5 },
          ],
        });
        toast.success(`Found record #${item.ticketNumber || item._id}`);
      } else {
        toast.error(`Order not found. Try demo RT-8842 or RT-9104.`);
      }
    } catch (err: any) {
      toast.error(`Could not locate order ${cleanQuery}`);
    } finally {
      setIsSearchingApi(false);
    }
  };

  return (
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 border border-line shadow-sm overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <Search className="h-4 w-4" /> Live Tracker
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">Track Repair in Real-Time</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Enter your Reference ID to view bench progress, technician notes, and completion time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[13px] text-muted font-bold">Demo:</span>
          {["RT-8842", "RT-9104"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => { setSearchQuery(code); setActiveOrder(DEMO_ORDERS[code]); }}
              className={`rounded-xl px-3 py-2 text-[13px] font-bold border transition focus-ring min-h-[48px] ${
                searchQuery === code ? "bg-brand text-white border-brand" : "bg-white text-ink border-line hover:border-brand-300"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSearch} className="relative z-10 mt-8 max-w-2xl flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Order ID (e.g. RT-8842) or IMEI..."
            className="w-full rounded-2xl border border-line bg-background pl-12 pr-4 py-4 text-[15px] text-ink outline-none transition focus-ring min-h-[48px]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
        </div>
        <button
          type="submit"
          disabled={isSearchingApi}
          className="rounded-2xl bg-ink hover:bg-black px-8 py-4 text-[15px] font-bold text-white transition focus-ring flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px] whitespace-nowrap shadow-sm"
        >
          {isSearchingApi ? <Loader2 className="h-5 w-5 animate-spin" /> : "Track Now"}
        </button>
      </form>

      {activeOrder && (
        <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-12 animate-in fade-in duration-300">
          <div className="lg:col-span-7 rounded-3xl bg-background p-8 border border-line shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b border-line/50 pb-6">
              <div>
                <span className="text-[13px] text-muted font-bold block uppercase tracking-wider mb-1">Reference</span>
                <span className="text-2xl font-black text-ink">#{activeOrder.id}</span>
              </div>
              <div className="text-right">
                <span className="text-[13px] text-muted font-bold block uppercase tracking-wider mb-1">Status</span>
                <span className={`text-[13px] font-bold px-4 py-1.5 rounded-full border ${
                  activeOrder.currentStep === 5 ? "bg-brand-50 text-brand border-brand-200" : "bg-warning/10 text-warning border-warning/20"
                }`}>
                  {activeOrder.currentStep === 5 ? "READY FOR PICKUP" : "IN LAB BENCH"}
                </span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-line before:to-transparent">
              {activeOrder.steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isCompleted = stepNum < activeOrder.currentStep || (stepNum === 5 && activeOrder.currentStep === 5);
                const isCurrent = stepNum === activeOrder.currentStep && activeOrder.currentStep !== 5;

                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm transition-colors duration-300"
                      style={{ backgroundColor: isCompleted ? "var(--color-brand)" : isCurrent ? "white" : "white", borderColor: isCurrent ? "var(--color-brand)" : "white" }}
                    >
                      {isCompleted ? <CheckCircle2 className="h-5 w-5 text-white" /> : isCurrent ? <Play className="h-4 w-4 text-brand fill-brand" /> : <div className="h-3 w-3 rounded-full bg-line" />}
                    </div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border shadow-sm transition-all duration-300 ${isCurrent ? "bg-white border-brand shadow-md scale-[1.02]" : "bg-white/50 border-line"}`}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-[15px] font-bold ${isCompleted || isCurrent ? "text-ink" : "text-muted"}`}>{step.title}</h4>
                      </div>
                      <span className="text-[13px] text-muted font-medium">{step.time}</span>
                      {isCurrent && <p className="text-[13px] text-brand font-medium mt-2 leading-relaxed">Active task: Undergoing microscopic diagnostic.</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-3xl bg-white p-6 border border-line shadow-sm space-y-2">
              <span className="text-[13px] text-brand font-bold uppercase tracking-wider">Device Info</span>
              <h4 className="text-xl font-bold text-ink">{activeOrder.device}</h4>
              <p className="text-[14px] text-muted leading-relaxed">Issue: {activeOrder.issue}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-line p-5 text-center shadow-sm">
                <span className="text-[13px] text-muted font-bold block uppercase mb-1">Battery Health</span>
                <span className="text-2xl font-black text-brand">{activeOrder.batteryHealth}%</span>
              </div>
              <div className="rounded-2xl bg-white border border-line p-5 text-center shadow-sm">
                <span className="text-[13px] text-muted font-bold block uppercase mb-1">Waterproof</span>
                <span className="text-[15px] font-black text-brand mt-2 block">Passed</span>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-50 border border-brand-200 p-6 space-y-3 shadow-sm">
              <span className="text-[13px] text-brand uppercase font-bold block">Tech Notes ({activeOrder.technician})</span>
              <p className="text-[14px] text-ink leading-relaxed italic font-medium">"{activeOrder.notes}"</p>
            </div>

            <div className="rounded-2xl bg-white border border-line p-6 flex items-center justify-between shadow-sm">
              <span className="text-[14px] text-muted font-bold uppercase tracking-wider">Est. Ready</span>
              <span className="font-black text-ink text-lg">{activeOrder.estimatedReady}</span>
            </div>

            <button type="button" onClick={() => toast.success("Diagnostic PDF report downloaded!")} className="mt-2 w-full flex items-center justify-center gap-3 rounded-2xl bg-white hover:bg-brand-50 text-ink py-4 text-[15px] font-bold transition border border-line hover:border-brand focus-ring min-h-[48px] shadow-sm">
              <FileText className="h-5 w-5 text-brand" />
              Download Bench Certificate (PDF)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
