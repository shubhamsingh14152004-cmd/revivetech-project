import React, { useState } from "react";
import {
  Wrench,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  Flame,
  Truck,
  Building,
  Check,
  X,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { api } from "../services/api";

interface RepairIssue {
  id: string;
  name: string;
  desc: string;
  cost: number;
  timeMins: number;
  icon: string;
}

const REPAIR_ISSUES: RepairIssue[] = [
  {
    id: "screen",
    name: "Screen & OLED Replacement",
    desc: "Original grade HDR panel, color calibrated, waterproof seal reapplied.",
    cost: 2499,
    timeMins: 35,
    icon: "📱",
  },
  {
    id: "battery",
    name: "Battery Health Replacement",
    desc: "100% genuine cycle-zero cell with fast-charge chip and thermal adhesive.",
    cost: 1199,
    timeMins: 25,
    icon: "🔋",
  },
  {
    id: "water",
    name: "Liquid Damage Ultrasonic Clean",
    desc: "Cleanroom de-corrosion, component isolation, moisture bake-out & UV cure.",
    cost: 1699,
    timeMins: 60,
    icon: "💧",
  },
  {
    id: "charging",
    name: "Charging Port & Mic Flex",
    desc: "Cleans or replaces loose USB-C / Lightning port and internal mic lines.",
    cost: 999,
    timeMins: 30,
    icon: "🔌",
  },
  {
    id: "camera",
    name: "Rear Camera / Lens Glass",
    desc: "Optical image stabilization sensor replacement and sapphire lens cover.",
    cost: 1499,
    timeMins: 40,
    icon: "📸",
  },
  {
    id: "motherboard",
    name: "Logic Board Micro-Soldering",
    desc: "NAND chip rework, short circuit trace fix, and power IC micro-repair.",
    cost: 2999,
    timeMins: 90,
    icon: "🔬",
  },
];

const TIME_SLOTS = [
  { time: "09:30 AM", status: "available" },
  { time: "11:00 AM", status: "fast_turnaround" },
  { time: "01:30 PM", status: "popular" },
  { time: "03:00 PM", status: "available" },
  { time: "04:30 PM", status: "available" },
  { time: "06:00 PM", status: "fast_turnaround" },
];

export function RepairBooking() {
  const [deviceModel, setDeviceModel] = useState("iPhone 15 Pro");
  const [selectedIssues, setSelectedIssues] = useState<string[]>(["screen"]);
  const [serviceSpeed, setServiceSpeed] = useState<"express" | "van" | "mail">(
    "express"
  );
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleIssue = (id: string) => {
    if (selectedIssues.includes(id)) {
      if (selectedIssues.length === 1) {
        toast.warning("Please select at least one repair service");
        return;
      }
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
    if (!custName || !custPhone) {
      toast.error("Please enter your name and phone number");
      return;
    }

    const issueNames = selectedIssues
      .map((id) => REPAIR_ISSUES.find((item) => item.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const serviceSpeedLabel =
      serviceSpeed === "van"
        ? "Mobile Van Dispatch (+₹499)"
        : serviceSpeed === "express"
        ? "In-Store Cleanroom Lab Priority"
        : "Mail-In Prepaid Kit";

    setIsSubmitting(true);
    try {
      const response = await api.submitRepairRequest({
        customerName: custName.trim(),
        phoneNumber: custPhone.trim(),
        phoneModel: deviceModel.trim(),
        serviceType: `Certified Repair (${serviceSpeedLabel})`,
        problemDescription: `Issues: ${issueNames || "General Diagnostic"} · Preferred Slot: ${selectedDate} at ${selectedTime}`,
        estimatedAmount: calculateTotal(),
        preferredOption: serviceSpeedLabel,
      });

      const ref =
        response.data?.ticketNumber ||
        `RT-REP-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setIsBooked(true);
      toast.success(`⚡ Repair Slot Confirmed! Ref #${ref}`, {
        description: `Technician assigned for ${selectedDate} at ${selectedTime}.`,
        duration: 5000,
      });
    } catch (err: any) {
      toast.error("Booking failed", {
        description:
          err.message || "Could not register repair booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Background radial accent */}
      <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold text-brand font-label border border-brand/30">
            <Wrench className="h-3.5 w-3.5" />
            Same-Day Cleanroom Repair Lab
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Book Certified Same-Day Repair
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Original OEM grade parts, 90-day comprehensive warranty, and
            transparent pricing. No surprise fees.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-display text-white/80">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent" />
            <span>Avg. 45-Min Fix</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>90-Day Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 mt-8">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Device Model Input */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
              Device Model
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
                placeholder="e.g. iPhone 15 Pro, Samsung S24 Ultra…"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand font-display"
              />
            </div>
          </div>

          {/* Issue Cards */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
              Select What Needs Fixing (Multi-select enabled)
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {REPAIR_ISSUES.map((issue) => {
                const isSelected = selectedIssues.includes(issue.id);
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => toggleIssue(issue.id)}
                    className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                      isSelected
                        ? "bg-accent/15 border-accent text-white ring-1 ring-accent/30 shadow-lg shadow-accent/10"
                        : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{issue.icon}</span>
                        <span className="font-display font-semibold text-sm text-white">
                          {issue.name}
                        </span>
                      </div>
                      <span className="font-label text-xs font-bold text-accent">
                        ₹{issue.cost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="font-display text-xs text-white/60 mt-1.5 line-clamp-2">
                      {issue.desc}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px] font-label">
                      <span className="text-white/50">
                        ⚡ ~{issue.timeMins} mins
                      </span>
                      {isSelected ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Check className="h-3 w-3" /> Selected
                        </span>
                      ) : (
                        <span className="text-white/40">+ Add fix</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Delivery Option */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
              Service Delivery Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setServiceSpeed("express")}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition ${
                  serviceSpeed === "express"
                    ? "bg-brand/20 border-brand text-white ring-1 ring-brand"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                <Building className="h-5 w-5 mb-1 text-brand" />
                <span className="font-display text-xs font-bold text-white">
                  In-Store Lab
                </span>
                <span className="font-label text-[10px] text-white/60">
                  Ready in 45m
                </span>
                <span className="font-label text-[10px] text-emerald-400 font-bold mt-1">
                  FREE
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceSpeed("van")}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition ${
                  serviceSpeed === "van"
                    ? "bg-brand/20 border-brand text-white ring-1 ring-brand"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                <Truck className="h-5 w-5 mb-1 text-accent" />
                <span className="font-display text-xs font-bold text-white">
                  Mobile Van
                </span>
                <span className="font-label text-[10px] text-white/60">
                  At Your Door
                </span>
                <span className="font-label text-[10px] text-accent font-bold mt-1">
                  +₹499
                </span>
              </button>

              <button
                type="button"
                onClick={() => setServiceSpeed("mail")}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition ${
                  serviceSpeed === "mail"
                    ? "bg-brand/20 border-brand text-white ring-1 ring-brand"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                <Zap className="h-5 w-5 mb-1 text-blue-400" />
                <span className="font-display text-xs font-bold text-white">
                  Mail-In Box
                </span>
                <span className="font-label text-[10px] text-white/60">
                  Prepaid Kit
                </span>
                <span className="font-label text-[10px] text-emerald-400 font-bold mt-1">
                  FREE
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Time & Summary */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-ink/90 via-ink/80 to-brand/15 p-6 border border-white/15 shadow-xl">
          {!isBooked ? (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-wider text-white/60">
                  Repair Summary
                </span>
                <span className="font-label text-xs text-accent font-bold">
                  {deviceModel}
                </span>
              </div>

              {/* Date & Time Picker */}
              <div className="space-y-3 rounded-2xl bg-black/30 p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs text-white/80 font-semibold flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    Select Preferred Day:
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Today", "Tomorrow", "In 2 Days"].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDate(day)}
                      className={`rounded-xl py-1.5 text-xs font-semibold font-label border transition ${
                        selectedDate === day
                          ? "bg-white text-ink border-white"
                          : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="font-display text-xs text-white/80 font-semibold block mb-2">
                    Available Time Slot:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        className={`rounded-xl py-1.5 px-1 text-[11px] font-semibold font-label border transition ${
                          selectedTime === slot.time
                            ? "bg-brand text-white border-brand shadow-md shadow-brand/40"
                            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact inputs */}
              <div className="space-y-2">
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand font-display"
                />
                <input
                  type="tel"
                  required
                  value={custPhone}
                  onChange={(e) => setCustPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand font-display"
                />
              </div>

              {/* Total breakdown */}
              <div className="rounded-2xl bg-black/50 p-4 border border-white/10 space-y-2 font-display text-xs">
                <div className="flex justify-between text-white/70">
                  <span>Selected Services ({selectedIssues.length}):</span>
                  <span className="font-semibold text-white">
                    ₹{(calculateTotal() - (serviceSpeed === "van" ? 499 : 0)).toLocaleString("en-IN")}
                  </span>
                </div>
                {serviceSpeed === "van" && (
                  <div className="flex justify-between text-white/70">
                    <span>Mobile Van Dispatch:</span>
                    <span className="font-semibold text-white">+₹499</span>
                  </div>
                )}
                <div className="flex justify-between text-white/70">
                  <span>Estimated Time:</span>
                  <span className="font-semibold text-emerald-400">
                    ~{calculateEstTime()} mins
                  </span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Warranty Shield:</span>
                  <span className="font-semibold text-accent">
                    90-Day VIP Warranty Included
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 flex items-center justify-between text-base font-bold text-white">
                  <span>Total Due After Fix:</span>
                  <span className="font-display text-2xl text-accent">
                    ₹{calculateTotal().toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_oklch(0.704_0.192_37.126/45%)] transition hover:brightness-110 font-label cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Reserving Slot…</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation & Hold Slot</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 font-display">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <span className="font-label text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Reservation Confirmed!
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  See You {selectedDate}!
                </h4>
                <p className="text-xs text-white/70 mt-1 max-w-xs mx-auto">
                  Technician reserved for {selectedTime}. We'll test and revive
                  your {deviceModel} while you wait.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-white/60">Booking Code:</span>
                  <span className="font-mono font-bold text-accent">
                    {bookingRef}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Customer:</span>
                  <span className="font-semibold text-white">
                    {custName} ({custPhone})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Estimated Cost:</span>
                  <span className="font-bold text-emerald-400">
                    ₹{calculateTotal().toLocaleString("en-IN")} (Pay after inspect)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsBooked(false)}
                className="w-full rounded-full bg-white/10 text-white hover:bg-white/20 py-2.5 text-xs font-semibold font-label transition cursor-pointer"
              >
                Book Another Device
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
