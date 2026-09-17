import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  BatteryCharging,
  Filter,
  Check,
  ShoppingBag,
  Eye,
  ArrowRight,
  Zap,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";

interface PreLovedDevice {
  id: string;
  brand: "apple" | "samsung" | "google";
  name: string;
  color: string;
  storage: string;
  price: number;
  originalPrice: number;
  grade: "A+" | "A" | "B";
  gradeLabel: string;
  batteryHealth: number;
  imageEmoji: string;
  features: string[];
}

const DEVICES: PreLovedDevice[] = [
  {
    id: "dev-1",
    brand: "apple",
    name: "iPhone 15 Pro Max",
    color: "Natural Titanium",
    storage: "256GB",
    price: 68999,
    originalPrice: 99999,
    grade: "A+",
    gradeLabel: "Flawless / Like New",
    batteryHealth: 100,
    imageEmoji: "📱",
    features: ["Grade A+ OLED", "100% Battery", "Original Box Included", "1-Year Shield"],
  },
  {
    id: "dev-2",
    brand: "apple",
    name: "iPhone 14 Pro",
    color: "Deep Purple",
    storage: "128GB",
    price: 47999,
    originalPrice: 79999,
    grade: "A+",
    gradeLabel: "Pristine Glass",
    batteryHealth: 98,
    imageEmoji: "📱",
    features: ["Dynamic Island", "New Battery Fitted", "ProMotion 120Hz", "1-Year Shield"],
  },
  {
    id: "dev-3",
    brand: "samsung",
    name: "Galaxy S24 Ultra",
    color: "Titanium Gray",
    storage: "512GB",
    price: 64999,
    originalPrice: 114999,
    grade: "A+",
    gradeLabel: "Mint Condition",
    batteryHealth: 100,
    imageEmoji: "🪐",
    features: ["Built-in S-Pen", "200MP Quad Cam", "Anti-Reflective Glass", "1-Year Shield"],
  },
  {
    id: "dev-4",
    brand: "samsung",
    name: "Galaxy Z Fold 5",
    color: "Phantom Black",
    storage: "256GB",
    price: 54999,
    originalPrice: 144999,
    grade: "A",
    gradeLabel: "Inspected Hinge",
    batteryHealth: 96,
    imageEmoji: "📖",
    features: ["Dual 120Hz AMOLED", "Factory Resealed Hinge", "Armor Aluminum", "1-Year Shield"],
  },
  {
    id: "dev-5",
    brand: "google",
    name: "Pixel 9 Pro XL",
    color: "Obsidian",
    storage: "256GB",
    price: 59999,
    originalPrice: 89999,
    grade: "A+",
    gradeLabel: "Flawless / Like New",
    batteryHealth: 100,
    imageEmoji: "💎",
    features: ["Tensor G4 AI", "Super Actua Display", "7-Yr OS Support", "1-Year Shield"],
  },
  {
    id: "dev-6",
    brand: "apple",
    name: "iPhone 13",
    color: "Midnight Blue",
    storage: "128GB",
    price: 29999,
    originalPrice: 59999,
    grade: "B",
    gradeLabel: "Budget Hero / Micro Wear",
    batteryHealth: 92,
    imageEmoji: "📱",
    features: ["A15 Bionic", "OLED Super Retina", "Dual 12MP Camera", "1-Year Shield"],
  },
];

export function PreLovedStore() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [quickViewItem, setQuickViewItem] = useState<PreLovedDevice | null>(null);
  const [cart, setCart] = useState<PreLovedDevice[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const filteredDevices = DEVICES.filter((d) => {
    if (selectedBrand !== "all" && d.brand !== selectedBrand) return false;
    if (selectedGrade !== "all" && d.grade !== selectedGrade) return false;
    return true;
  });

  const addToCart = (device: PreLovedDevice) => {
    if (cart.some((item) => item.id === device.id)) {
      toast.info(`${device.name} is already in your reservation bag.`);
      setIsCartOpen(true);
      return;
    }
    setCart([...cart, device]);
    toast.success(`Added ${device.name} to Bag!`, {
      description: "12-Month ReviveTech Shield & Free 2-Day Shipping included.",
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info("Item removed from bag");
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Background accent */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-400 font-label border border-emerald-500/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            100-Point Inspected & Certified Pre-Loved
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Shop Certified Refurbished Flagships
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Save up to 60% off retail. Every phone is bench-tested, sanitized,
            fitted with fresh battery cells, and backed by a 1-year warranty.
          </p>
        </div>

        {/* Cart Trigger */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold text-white border border-white/20 hover:bg-white/20 transition font-label cursor-pointer"
        >
          <ShoppingBag className="h-4 w-4 text-accent" />
          <span>Reserved Bag</span>
          {cart.length > 0 && (
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Filters Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mt-6 border-b border-white/5 pb-4">
        {/* Brand tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: "all", label: "All Brands" },
            { key: "apple", label: "🍎 Apple" },
            { key: "samsung", label: "🪐 Samsung" },
            { key: "google", label: "💎 Google" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedBrand(tab.key)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold font-display transition border ${
                selectedBrand === tab.key
                  ? "bg-brand text-white border-brand shadow-md shadow-brand/20"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grade filter */}
        <div className="flex items-center gap-2 text-xs font-display">
          <span className="text-white/60">Condition Grade:</span>
          {["all", "A+", "A", "B"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setSelectedGrade(g)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold font-label border transition ${
                selectedGrade === g
                  ? "bg-white text-ink border-white"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {g === "all" ? "All Grades" : `Grade ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* Devices Catalog Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filteredDevices.map((dev) => {
          const savings = dev.originalPrice - dev.price;
          return (
            <div
              key={dev.id}
              className="group flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-5 transition hover:border-white/25 hover:bg-white/10 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between">
                  <span className="font-label text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Grade {dev.grade} · {dev.gradeLabel}
                  </span>
                  <span className="font-label text-[11px] font-semibold text-accent flex items-center gap-1">
                    <BatteryCharging className="h-3.5 w-3.5" />
                    {dev.batteryHealth}% Battery
                  </span>
                </div>

                {/* Device visual placeholder / mock frame */}
                <div className="my-4 flex items-center justify-center rounded-2xl bg-black/40 py-6 border border-white/5 relative overflow-hidden group-hover:border-accent/30 transition">
                  <span className="text-5xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] animate-float">
                    {dev.imageEmoji}
                  </span>
                  <span className="absolute bottom-2 right-2 rounded-md bg-ink/80 px-2 py-0.5 text-[10px] font-mono text-white/70 border border-white/10">
                    {dev.storage}
                  </span>
                </div>

                {/* Title & Specs */}
                <h4 className="font-display text-lg font-bold text-white group-hover:text-accent transition">
                  {dev.name}
                </h4>
                <p className="font-display text-xs text-white/60 mt-0.5">
                  Color: {dev.color} · Factory Unlocked
                </p>

                {/* Feature tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {dev.features.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-white/70 font-display border border-white/5"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="font-display text-2xl font-extrabold text-white">
                      ₹{dev.price.toLocaleString("en-IN")}
                    </span>
                    <span className="ml-2 font-display text-xs line-through text-white/40">
                      ₹{dev.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="font-label text-[11px] font-bold text-gold">
                    Save ₹{savings.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setQuickViewItem(dev)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/5 py-2.5 text-xs font-semibold text-white/80 hover:bg-white/15 hover:text-white transition font-display border border-white/10 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Specs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(dev)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand py-2.5 text-xs font-bold text-white hover:brightness-110 transition font-label shadow-md shadow-brand/30 cursor-pointer"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-ink to-black p-6 md:p-8 border border-white/20 shadow-2xl text-white">
            <button
              onClick={() => setQuickViewItem(null)}
              className="absolute right-5 top-5 p-2 text-white/60 hover:text-white rounded-full bg-white/10 transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-emerald-400 font-label text-xs uppercase tracking-wider font-semibold">
              <ShieldCheck className="h-4 w-4" />
              100-Point Inspection Pass Certificate
            </div>

            <div className="flex items-center gap-4 mt-3">
              <span className="text-4xl">{quickViewItem.imageEmoji}</span>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {quickViewItem.name}
                </h3>
                <p className="font-display text-xs text-white/70">
                  {quickViewItem.storage} · {quickViewItem.color} · Factory
                  Unlocked (All Carriers)
                </p>
              </div>
            </div>

            {/* Inspection Checklist */}
            <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2.5 font-display text-xs">
              <div className="flex items-center justify-between text-white/90">
                <span>Display & Digitizer (Zero Dead Pixels):</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> Pass
                </span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span>Battery Real Health Capacity:</span>
                <span className="font-bold text-accent">
                  {quickViewItem.batteryHealth}% Tested
                </span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span>5G Antenna, Wi-Fi 6E & Bluetooth:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> Pass
                </span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span>Microphones, Speakers & FaceID/Biometrics:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> Pass
                </span>
              </div>
              <div className="flex items-center justify-between text-white/90">
                <span>IMEI Clean & iCloud/Google Account Free:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> 100% Clean
                </span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <div>
                <span className="font-display text-2xl font-bold text-white">
                  ₹{quickViewItem.price.toLocaleString("en-IN")}
                </span>
                <span className="ml-2 font-display text-xs text-white/50 line-through">
                  ₹{quickViewItem.originalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  addToCart(quickViewItem);
                  setQuickViewItem(null);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-bold text-white hover:brightness-110 transition font-label"
              >
                <span>Add to Reserved Bag</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md h-full bg-gradient-to-b from-ink via-ink/95 to-black p-6 border-l border-white/20 shadow-2xl flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-lg font-bold">
                    Your Reserved Bag ({cart.length})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center text-white/50 font-display space-y-2">
                  <ShoppingBag className="h-12 w-12 mx-auto opacity-40" />
                  <p className="text-sm">Your reservation bag is currently empty.</p>
                  <p className="text-xs text-white/40">
                    Browse our certified pre-loved flagships and reserve before they sell out.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 font-display text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.imageEmoji}</span>
                        <div>
                          <p className="font-bold text-white">{item.name}</p>
                          <p className="text-white/60">
                            {item.storage} · Grade {item.grade}
                          </p>
                          <span className="text-accent font-bold">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-white/40 hover:text-red-400 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-white/10 pt-4 space-y-3 font-display">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Shipping:</span>
                  <span className="font-semibold text-emerald-400">
                    FREE Express Priority
                  </span>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>1-Year Shield Warranty:</span>
                  <span className="font-semibold text-accent">Included (₹0)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white border-t border-white/10 pt-2">
                  <span>Subtotal:</span>
                  <span className="text-2xl text-accent font-display">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    toast.success("🎉 Device Reservation Locked for 24 Hours!", {
                      description: "Hold confirmation sent. Check your SMS / email for secure payment link.",
                      duration: 5000,
                    });
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white shadow-lg shadow-brand/40 hover:brightness-110 font-label transition cursor-pointer"
                >
                  <span>Proceed to Free 24h Reserve Checkout</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
