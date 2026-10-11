import React, { useState, useMemo, useEffect } from "react";
import {
  Wrench,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Zap,
  ArrowRight,
  Truck,
  Building,
  Check,
  Loader2,
  ChevronsUpDown,
} from "lucide-react";
import { toast } from "sonner";
import { api } from "../services/api";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "./ui/drawer";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { useIsMobile } from "../hooks/use-mobile";

interface RepairIssue {
  id: string;
  name: string;
  desc: string;
  cost: number;
  timeMins: number;
}

const REPAIR_ISSUES: RepairIssue[] = [
  { id: "screen", name: "Screen & OLED", desc: "Original grade HDR panel, water seal.", cost: 2499, timeMins: 35 },
  { id: "battery", name: "Battery Replacement", desc: "100% genuine cycle-zero cell.", cost: 1199, timeMins: 25 },
  { id: "water", name: "Liquid Damage", desc: "Ultrasonic wash & component dry-out.", cost: 1699, timeMins: 60 },
  { id: "charging", name: "Charging Port", desc: "Fixes loose port & internal mic lines.", cost: 999, timeMins: 30 },
  { id: "camera", name: "Rear Camera / Lens", desc: "OIS sensor and glass lens cover.", cost: 1499, timeMins: 40 },
  { id: "motherboard", name: "Logic Board", desc: "Micro-soldering, short circuit trace fix.", cost: 2999, timeMins: 90 },
];

const TIME_SLOTS = [
  { time: "09:30 AM" }, { time: "11:00 AM" }, { time: "01:30 PM" },
  { time: "03:00 PM" }, { time: "04:30 PM" }, { time: "06:00 PM" },
];

export function RepairBooking() {
  const isMobile = useIsMobile();
  const [deviceModel, setDeviceModel] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [modelOpen, setModelOpen] = useState(false);
  const [allModels, setAllModels] = useState<string[]>([]);

  const [selectedIssues, setSelectedIssues] = useState<string[]>(["screen"]);
  const [serviceSpeed, setServiceSpeed] = useState<"express" | "van" | "mail">("express");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  
  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState("apple");
  
  useEffect(() => {
    fetch(`/api/devices?brand=${selectedBrand}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const names = data.data.map((d: any) => {
            const brandName = d.brandId.charAt(0).toUpperCase() + d.brandId.slice(1);
            return `${brandName} ${d.name}`;
          });
          setAllModels(names);
        }
      })
      .catch(() => {});
  }, [selectedBrand]);

  const availableModels = useMemo(() => {
    if (!modelSearch) return allModels;
    return allModels.filter(m => m.toLowerCase().includes(modelSearch.toLowerCase()));
  }, [allModels, modelSearch]);

  const toggleIssue = (id: string) => {
    if (selectedIssues.includes(id)) {
      if (selectedIssues.length === 1) return toast.warning("Please select at least one repair service");
      setSelectedIssues(selectedIssues.filter((i) => i !== id));
    } else {
      setSelectedIssues([...selectedIssues, id]);
    }
  };

  const calculateTotal = () => {
    let subtotal = 0;
    selectedIssues.forEach((id) => {
      const issue = REPAIR_ISSUES.find((item) => item.id === id);
      if (issue) subtotal += issue.cost;
    });
    if (serviceSpeed === "van") subtotal += 499;
    return subtotal;
  };

  const calculateEstTime = () => {
    let totalTime = 0;
    selectedIssues.forEach((id) => {
      const issue = REPAIR_ISSUES.find((item) => item.id === id);
      if (issue) totalTime += issue.timeMins;
    });
    return Math.min(totalTime, 90);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deviceModel) return toast.error("Please select a device model");
    if (!custName.trim()) return toast.error("Please enter your name");
    
    const cleanPhone = custPhone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) return toast.error("Phone number must be exactly 10 digits");

    const issueNames = selectedIssues.map((id) => REPAIR_ISSUES.find((item) => item.id === id)?.name).filter(Boolean).join(", ");
    const serviceSpeedLabel = serviceSpeed === "van" ? "Mobile Van Dispatch (+₹499)" : serviceSpeed === "express" ? "In-Store Priority" : "Mail-In Kit";

    setIsSubmitting(true);
    try {
      const response = await api.submitRepairRequest({
        customerName: custName.trim(),
        phoneNumber: cleanPhone,
        phoneModel: deviceModel,
        serviceType: `Certified Repair (${serviceSpeedLabel})`,
        problemDescription: `Issues: ${issueNames || "General Diagnostic"} · Preferred Slot: ${selectedDate} at ${selectedTime}`,
        estimatedAmount: calculateTotal(),
        preferredOption: serviceSpeedLabel,
      });

      const ref = response.data?.ticketNumber || `RT-REP-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setIsBooked(true);
      toast.success(`Repair Slot Confirmed! Ref #${ref}`);
    } catch (err: any) {
      toast.error("Booking failed", { description: err.message || "Could not register repair booking." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ModelSelectorContent = (
    <Command>
      <CommandInput placeholder="Search models..." value={modelSearch} onValueChange={setModelSearch} />
      <CommandList>
        <CommandEmpty>
          <div className="p-4 text-center text-[13px] text-muted">
            Not found. <br/>
            <button onClick={() => { setDeviceModel(modelSearch); setModelOpen(false); }} className="text-brand font-bold mt-2 py-2 px-4">
              Use "{modelSearch}" anyway
            </button>
          </div>
        </CommandEmpty>
        <CommandGroup>
          {availableModels.map((m) => (
            <CommandItem key={m} value={m} onSelect={(currentValue) => { setDeviceModel(currentValue); setModelOpen(false); }} className="text-[15px] py-3">
              <Check className={`mr-2 h-4 w-4 ${deviceModel === m ? "opacity-100" : "opacity-0"}`} />
              {m}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  return (
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 overflow-hidden border border-line shadow-sm">
      <div className="relative z-10 border-b border-line pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <Wrench className="h-4 w-4" />
            Same-Day Lab Repair
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">Book Certified Repair</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Original OEM grade parts, 90-day warranty, transparent pricing.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[13px] text-muted font-medium">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand" /> Avg. 45-Min Fix</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> 90-Day Warranty</div>
        </div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 mt-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setDeviceModel("");
                }}
                className="w-full px-4 py-4 rounded-xl border border-line bg-background focus-ring text-[15px] text-ink font-bold appearance-none min-h-[48px]"
              >
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="oneplus">OnePlus</option>
                <option value="xiaomi">Xiaomi/Redmi/POCO</option>
                <option value="oppo">Oppo</option>
                <option value="vivo">Vivo</option>
                <option value="iqoo">iQOO</option>
                <option value="realme">Realme</option>
                <option value="motorola">Motorola</option>
                <option value="pixel">Google Pixel</option>
                <option value="nothing">Nothing</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">Device Model</label>
              {isMobile ? (
                <Drawer open={modelOpen} onOpenChange={setModelOpen}>
                  <DrawerTrigger asChild>
                    <button className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-line bg-background focus-ring text-left min-h-[48px]">
                      <span className={`text-[15px] truncate ${deviceModel ? 'text-ink font-bold' : 'text-muted'}`}>
                        {deviceModel || "Search for your model..."}
                      </span>
                      <ChevronsUpDown className="h-5 w-5 text-muted shrink-0" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="px-2 pb-4">
                    <DrawerTitle className="sr-only">Select Model</DrawerTitle>
                    <div className="mt-4">
                      {ModelSelectorContent}
                    </div>
                  </DrawerContent>
                </Drawer>
              ) : (
                <Popover open={modelOpen} onOpenChange={setModelOpen}>
                  <PopoverTrigger asChild>
                    <button className="w-full flex items-center justify-between px-4 py-4 rounded-xl border border-line bg-background focus-ring text-left min-h-[48px]">
                      <span className={`text-[15px] truncate ${deviceModel ? 'text-ink font-bold' : 'text-muted'}`}>
                        {deviceModel || "Search for your model..."}
                      </span>
                      <ChevronsUpDown className="h-5 w-5 text-muted shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                    {ModelSelectorContent}
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">What needs fixing?</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {REPAIR_ISSUES.map((issue) => {
                const isSelected = selectedIssues.includes(issue.id);
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => toggleIssue(issue.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition focus-ring min-h-[48px] ${
                      isSelected ? "bg-brand-50 border-brand text-ink shadow-sm" : "bg-white border-line text-ink hover:border-brand-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[15px]">{issue.name}</span>
                      <span className="text-[14px] font-bold text-brand">₹{issue.cost.toLocaleString("en-IN")}</span>
                    </div>
                    <p className="text-[13px] text-muted line-clamp-2 leading-relaxed">{issue.desc}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-line/50 text-[13px] font-medium">
                      <span className="text-muted">~{issue.timeMins} mins</span>
                      {isSelected ? (
                        <span className="text-brand font-bold flex items-center gap-1"><Check className="h-4 w-4" /> Selected</span>
                      ) : (
                        <span className="text-muted">+ Add</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-ink mb-3 uppercase tracking-wider">Service Delivery</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "express", icon: Building, label: "In-Store Lab", sub: "Ready in 45m", price: "FREE" },
                { id: "van", icon: Truck, label: "Mobile Van", sub: "At Your Door", price: "+₹499" },
                { id: "mail", icon: Zap, label: "Mail-In Box", sub: "Prepaid Kit", price: "FREE" }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setServiceSpeed(opt.id as any)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition focus-ring min-h-[48px] ${
                    serviceSpeed === opt.id ? "bg-brand-50 border-brand text-ink" : "bg-white border-line text-muted hover:border-brand-300"
                  }`}
                >
                  <opt.icon className={`h-6 w-6 mb-2 ${serviceSpeed === opt.id ? 'text-brand' : 'text-muted'}`} />
                  <span className="text-[13px] font-bold text-ink text-center leading-tight mb-1">{opt.label}</span>
                  <span className="text-[13px] text-muted text-center">{opt.sub}</span>
                  <span className="text-[13px] text-brand font-bold mt-2">{opt.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col rounded-3xl bg-background p-6 lg:p-8 border border-line shadow-sm">
          {!isBooked ? (
            <form onSubmit={handleBooking} className="flex flex-col flex-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[13px] uppercase tracking-wider text-muted font-bold">Repair Summary</span>
                <span className="text-[15px] text-brand font-bold truncate max-w-[150px]">{deviceModel || "No Model"}</span>
              </div>

              <div className="space-y-4 rounded-2xl bg-white p-5 border border-line shadow-sm mb-6">
                <span className="text-[13px] text-ink font-bold flex items-center gap-2"><Calendar className="h-4 w-4 text-brand" /> Day</span>
                <div className="grid grid-cols-3 gap-2">
                  {["Today", "Tomorrow", "In 2 Days"].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`rounded-xl py-3 text-[13px] font-bold border transition focus-ring ${
                        selectedDate === day ? "bg-brand text-white border-brand" : "bg-white text-ink border-line hover:border-brand-300"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-[13px] text-ink font-bold block mb-3">Time Slot</span>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        className={`rounded-xl py-3 px-1 text-[13px] font-bold border transition focus-ring ${
                          selectedTime === slot.time ? "bg-ink text-white border-ink" : "bg-white text-ink border-line hover:border-brand-300"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full rounded-xl border border-line bg-white px-4 py-4 text-[15px] text-ink outline-none focus-ring min-h-[48px]"
                />
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-ink font-bold border-r border-line pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="Mobile Number"
                    className="w-full rounded-xl border border-line bg-white pl-16 pr-4 py-4 text-[15px] text-ink tracking-wider outline-none focus-ring min-h-[48px]"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-line space-y-3 text-[14px] mb-6 mt-auto">
                <div className="flex justify-between text-muted">
                  <span>Services ({selectedIssues.length}):</span>
                  <span className="font-bold text-ink">₹{(calculateTotal() - (serviceSpeed === "van" ? 499 : 0)).toLocaleString("en-IN")}</span>
                </div>
                {serviceSpeed === "van" && (
                  <div className="flex justify-between text-muted">
                    <span>Mobile Van:</span>
                    <span className="font-bold text-brand">+₹499</span>
                  </div>
                )}
                <div className="flex justify-between text-muted">
                  <span>Est. Time:</span>
                  <span className="font-bold text-ink">~{calculateEstTime()} mins</span>
                </div>
                <div className="border-t border-line/50 pt-3 mt-1 flex items-center justify-between text-base font-bold text-ink">
                  <span>Total Estimate:</span>
                  <span className="text-2xl text-brand">₹{calculateTotal().toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || selectedIssues.length === 0}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-600 px-6 py-4 text-[15px] font-bold text-white transition focus-ring disabled:opacity-50 min-h-[48px]"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <><CheckCircle2 className="h-5 w-5" /> Book Repair Slot</>}
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6 flex-1 flex flex-col justify-center animate-in zoom-in-95 duration-500">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div>
                <h4 className="text-3xl font-black text-ink mb-2">Slot Confirmed!</h4>
                <p className="text-[15px] text-muted max-w-sm mx-auto leading-relaxed">
                  Technician reserved for <strong className="text-ink">{selectedDate} at {selectedTime}</strong>.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-line p-6 text-left text-[14px] space-y-3 max-w-sm mx-auto w-full shadow-sm">
                <div className="flex justify-between"><span className="text-muted">Booking:</span><span className="font-bold text-brand">{bookingRef}</span></div>
                <div className="flex justify-between"><span className="text-muted">Device:</span><span className="font-bold text-ink truncate max-w-[150px]">{deviceModel}</span></div>
                <div className="flex justify-between"><span className="text-muted">Total:</span><span className="font-bold text-ink">₹{calculateTotal().toLocaleString("en-IN")}</span></div>
              </div>

              <button type="button" onClick={() => setIsBooked(false)} className="mx-auto rounded-xl bg-background border border-line hover:bg-line px-8 py-3.5 text-[14px] font-bold text-ink transition focus-ring min-h-[48px]">
                Book Another Device
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
