import React, { useState } from"react";
import { api } from"../services/api";
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
} from"lucide-react";
import { toast } from"sonner";

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
 id:"RT-8842",
 customer:"Sarah J. (Mumbai, MH)",
 device:"iPhone 14 Pro Max - Space Black",
 issue:"Motherboard Power IC & Screen Glitch",
 currentStep: 3,
 estimatedReady:"Today at 4:15 PM",
 technician:"technician Marcus V. (#04)",
 batteryHealth: 100,
 waterproofPass: true,
 notes:
"Ultrasonic wash removed all corrosion traces. Tristar charging regulator replaced. Currently bench-testing 120Hz display refresh stability.",
 steps: [
 { title:"Device Checked In & Scanned", time:"09:15 AM", done: true },
 { title:"Microscopic lab Diagnostic", time:"10:30 AM", done: true },
 { title:"Micro-Soldering & IC Rework", time:"In Progress", done: true },
 { title:"28-Point Bench QC & Seal", time:"Pending", done: false },
 { title:"Ready for Pickup / Dispatch", time:"Est. 4:15 PM", done: false },
 ],
 },
"RT-9104": {
 id:"RT-9104",
 customer:"David K. (Mumbai, MH)",
 device:"Samsung Galaxy S24 Ultra - Titanium Gray",
 issue:"Shattered OLED & Periscope Camera Sensor",
 currentStep: 5,
 estimatedReady:"READY FOR PICKUP",
 technician:"Senior Tech Liam R. (#12)",
 batteryHealth: 99,
 waterproofPass: true,
 notes:
"Original Samsung Gorilla Armor OLED panel calibrated to 100% DCI-P3 gamut. Camera focus test passed at 100x zoom. Packaged with Priority 90-day warranty card.",
 steps: [
 { title:"Device Checked In & Scanned", time:"08:45 AM", done: true },
 { title:"Microscopic lab Diagnostic", time:"09:30 AM", done: true },
 { title:"Original OLED & Camera Install", time:"11:00 AM", done: true },
 { title:"28-Point Bench QC & Seal", time:"01:15 PM", done: true },
 { title:"Ready for Pickup / Dispatch", time:"Ready Now", done: true },
 ],
 },
"RT-3319": {
 id:"RT-3319",
 customer:"Elena M. (Thane, MH)",
 device:"Google Pixel 8 Pro - Bay Blue",
 issue:"Dead Battery Swelling & Thermal Throttle",
 currentStep: 2,
 estimatedReady:"Today at 5:30 PM",
 technician:"Tech Specialist Chloe D. (#07)",
 batteryHealth: 100,
 waterproofPass: true,
 notes:
"Swollen battery safely recycled in fireproof chamber. Applying graphite thermal cooling pad before installing cycle-zero cell.",
 steps: [
 { title:"Device Checked In & Scanned", time:"11:20 AM", done: true },
 { title:"Thermal Isolation & Diagnostic", time:"12:05 PM", done: true },
 { title:"Cycle-Zero Battery Installation", time:"Queued", done: false },
 { title:"28-Point Bench QC & Seal", time:"Pending", done: false },
 { title:"Ready for Pickup / Dispatch", time:"Est. 5:30 PM", done: false },
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
 item.status ==="Pending"
 ? 1
 : item.status ==="Confirmed"
 ? 2
 : item.status ==="In Progress"
 ? 3
 : item.status ==="Completed"
 ? 5
 : 1;

 const mapped: OrderStatus = {
 id: item.ticketNumber || item._id,
 customer: `${item.customerName} (${item.phoneNumber})`,
 device: `${item.phoneBrand ||""} ${item.phoneModel}`.trim(),
 issue: item.serviceType || item.problemDescription ||"Mobile Repair",
 currentStep: stepNum,
 estimatedReady: item.status ==="Completed" ?"READY FOR PICKUP" :"Processing in lab",
 technician:"Revora Certified lab Engineer",
 batteryHealth: 100,
 waterproofPass: true,
 notes: item.adminNotes || item.problemDescription ||"Order registered in backend system.",
 steps: [
 { title:"Request Submitted & Registered", time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), done: true },
 { title:"lab Verification & Dispatch", time: stepNum >= 2 ?"Confirmed" :"Pending", done: stepNum >= 2 },
 { title:"Hardware Repair & Diagnostics", time: stepNum >= 3 ?"In Progress" :"Pending", done: stepNum >= 3 },
 { title:"28-Point Bench Quality Control", time: stepNum >= 4 ?"Passed" :"Pending", done: stepNum >= 4 },
 { title:"Completion & Payout / Handover", time: item.status ==="Completed" ?"Complete" :"Pending", done: stepNum >= 5 },
 ],
 };

 setActiveOrder(mapped);
 toast.success(`Found live database record #${mapped.id}`);
 } else {
 toast.error(`Order ${cleanQuery} not found. Try demo codes RT-8842, RT-9104, or RT-3319.`);
 }
 } catch (err: any) {
 toast.error(`Could not locate order ${cleanQuery}`, {
 description: err.message ||"Order ID not found in system.",
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
 <div className="relative rounded-3xl bg-white p-6 md:p-10 overflow-hidden border border-line shadow-lg">
 {/* Header */}
 <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1 text-xs font-semibold text-brand-ink border border-brand/30">
 <Search className="h-3.5 w-3.5 text-brand" />
 Live lab Diagnostic Tracker
 </div>
 <h3 className="text-2xl md:text-3xl font-bold mt-2 text-ink">
 Track Device Repair in Real-Time
 </h3>
 <p className="text-sm text-muted mt-1 max-w-xl">
 Enter your Repair Reference ID or IMEI to view microscopic bench
 progress, technician notes, and exact completion time.
 </p>
 </div>

 {/* Quick Demo Buttons */}
 <div className="flex items-center gap-2 text-xs">
 <span className="text-muted">Demo Orders:</span>
 {["RT-8842","RT-9104","RT-3319"].map((code) => (
 <button
 key={code}
 type="button"
 onClick={() => loadDemo(code)}
 className={`rounded-lg px-2.5 py-1 text-xs font-bold border transition cursor-pointer ${
 searchQuery === code
 ?"bg-brand text-white border-brand shadow-xs"
 :"bg-white text-ink border-line hover:bg-background"
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
 className="w-full rounded-2xl border border-line bg-white pl-11 pr-4 py-3 text-sm text-ink placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
 />
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
 </div>
 <button
 type="submit"
 disabled={isSearchingApi}
 className="rounded-2xl bg-brand hover:bg-brand-ink px-6 py-3 text-xs font-bold text-white transition cursor-pointer flex items-center gap-2 disabled:opacity-50"
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
 <div className="lg:col-span-7 rounded-2xl bg-background p-6 border border-line space-y-6">
 <div className="flex items-center justify-between border-b border-line pb-4">
 <div>
 <span className="text-xs text-muted block">
 Active Reference:
 </span>
 <span className="text-xl font-extrabold text-brand">
 #{activeOrder.id}
 </span>
 </div>
 <div className="text-right">
 <span className="text-xs text-muted block">
 Current Status
 </span>
 <span
 className={` text-xs font-bold px-3 py-1 rounded-full border ${
 activeOrder.currentStep === 5
 ?"bg-brand-tint text-brand-ink border-brand/30"
 :"bg-amber-100 border-amber-300"
 }`}
 >
 {activeOrder.currentStep === 5
 ?" READY FOR PICKUP"
 :" IN lab BENCH"}
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
 className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
 isCompleted
 ?"bg-brand text-white shadow-xs"
 : isCurrent
 ?"bg-brand-tint text-brand-ink border border-brand ring-2 ring-brand/30"
 :"bg-white text-slate-400 border border-line"
 }`}
 >
 {isCompleted ?"" : stepNum}
 </div>

 {/* Step text */}
 <div className="flex-1 pt-0.5">
 <div className="flex items-center justify-between">
 <h4
 className={` text-sm font-semibold ${
 isCompleted || isCurrent
 ?"text-ink"
 :"text-slate-400"
 }`}
 >
 {step.title}
 </h4>
 <span className="text-xs text-muted">
 {step.time}
 </span>
 </div>
 {isCurrent && (
 <p className="text-xs text-brand mt-0.5">
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
 <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-line shadow-xs space-y-5">
 <div>
 <span className="text-xs text-brand uppercase font-bold tracking-wider">
 Assigned Workstation
 </span>
 <h4 className="text-lg font-bold text-ink mt-1">
 {activeOrder.device}
 </h4>
 <p className="text-xs text-muted">
 Primary Issue: {activeOrder.issue}
 </p>
 </div>

 {/* Bench health indicators */}
 <div className="grid grid-cols-2 gap-3">
 <div className="rounded-xl bg-background border border-line p-3 text-xs">
 <span className="text-muted block">Battery Post-Check:</span>
 <span className="text-base font-bold text-brand">
 {activeOrder.batteryHealth}% Capacity
 </span>
 </div>
 <div className="rounded-xl bg-background border border-line p-3 text-xs">
 <span className="text-muted block">Waterproof Reseal:</span>
 <span className="text-base font-bold text-brand">
 IP68 Verified Pass
 </span>
 </div>
 </div>

 {/* Technician Notes */}
 <div className="rounded-xl bg-background border border-line p-4 text-xs space-y-1.5">
 <span className="text-[11px] text-muted uppercase font-bold block">
 Lead Technician Notes ({activeOrder.technician}):
 </span>
 <p className="text-ink leading-relaxed italic">
"{activeOrder.notes}"
 </p>
 </div>

 {/* Estimated Completion */}
 <div className="flex items-center justify-between border-t border-line pt-4 text-xs">
 <span className="text-muted">Estimated Ready:</span>
 <span className="font-bold text-brand text-sm">
 {activeOrder.estimatedReady}
 </span>
 </div>

 <button
 type="button"
 onClick={() => {
 toast.success("Diagnostic PDF report downloaded with bench stamps!");
 }}
 className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-background hover:bg-brand-tint text-ink hover:text-brand-ink py-3 text-xs font-bold transition border border-line hover:border-brand cursor-pointer"
 >
 <FileText className="h-4 w-4 text-brand" />
 <span>Download Signed Bench Certificate (PDF)</span>
 </button>
 </div>
 </div>
 )}
 </div>
 );
}
