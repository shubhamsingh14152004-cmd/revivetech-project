import React, { useState } from "react";
import {
  ShieldCheck,
  BatteryCharging,
  Check,
  ShoppingBag,
  Eye,
  ArrowRight,
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
  { id: "dev-1", brand: "apple", name: "iPhone 15 Pro Max", color: "Natural Titanium", storage: "256GB", price: 68999, originalPrice: 99999, grade: "A+", gradeLabel: "Flawless", batteryHealth: 100, imageEmoji: "", features: ["100% Battery", "Original Box", "1-Yr Shield"] },
  { id: "dev-2", brand: "apple", name: "iPhone 14 Pro", color: "Deep Purple", storage: "128GB", price: 47999, originalPrice: 79999, grade: "A+", gradeLabel: "Pristine", batteryHealth: 98, imageEmoji: "", features: ["New Battery", "120Hz", "1-Yr Shield"] },
  { id: "dev-3", brand: "samsung", name: "Galaxy S24 Ultra", color: "Titanium Gray", storage: "512GB", price: 64999, originalPrice: 114999, grade: "A+", gradeLabel: "Mint", batteryHealth: 100, imageEmoji: "🪐", features: ["S-Pen", "200MP Cam", "1-Yr Shield"] },
  { id: "dev-4", brand: "samsung", name: "Galaxy Z Fold 5", color: "Phantom Black", storage: "256GB", price: 54999, originalPrice: 144999, grade: "A", gradeLabel: "Inspected Hinge", batteryHealth: 96, imageEmoji: "", features: ["Factory Resealed", "Armor Frame", "1-Yr Shield"] },
  { id: "dev-5", brand: "google", name: "Pixel 9 Pro XL", color: "Obsidian", storage: "256GB", price: 59999, originalPrice: 89999, grade: "A+", gradeLabel: "Like New", batteryHealth: 100, imageEmoji: "", features: ["Tensor G4", "Super Actua", "1-Yr Shield"] },
  { id: "dev-6", brand: "apple", name: "iPhone 13", color: "Midnight Blue", storage: "128GB", price: 29999, originalPrice: 59999, grade: "B", gradeLabel: "Micro Wear", batteryHealth: 92, imageEmoji: "", features: ["A15 Bionic", "OLED", "1-Yr Shield"] },
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
      toast.info(`${device.name} is already in your bag.`);
      setIsCartOpen(true);
      return;
    }
    setCart([...cart, device]);
    toast.success(`Added ${device.name} to Bag!`, { description: "12-Month Revora Shield included." });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info("Item removed from bag");
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 border border-line shadow-sm overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-line pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <ShieldCheck className="h-4 w-4" /> 100-Point Inspected & Certified
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">Certified Refurbished Flagships</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Save up to 60%. Every phone is bench-tested, sanitized, and backed by a 1-year warranty.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 border border-line hover:border-brand-300 transition focus-ring min-h-[48px]"
        >
          <ShoppingBag className="h-5 w-5 text-brand" />
          <span className="text-[14px] font-bold text-ink">Reserved Bag</span>
          {cart.length > 0 && (
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[11px] font-bold text-white ml-1">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-8 border-b border-line pb-6">
        <div className="flex flex-wrap items-center gap-3">
          {[{ key: "all", label: "All Brands" }, { key: "apple", label: "Apple" }, { key: "samsung", label: "Samsung" }, { key: "google", label: "Google" }].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedBrand(tab.key)}
              className={`rounded-xl px-5 py-2.5 text-[14px] font-bold transition focus-ring min-h-[48px] border ${
                selectedBrand === tab.key ? "bg-ink text-white border-ink shadow-md" : "bg-white text-ink border-line hover:border-brand-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[13px] font-bold text-muted uppercase tracking-wider">Condition:</span>
          {["all", "A+", "A", "B"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setSelectedGrade(g)}
              className={`rounded-lg px-4 py-2 text-[13px] font-bold transition focus-ring min-h-[48px] border ${
                selectedGrade === g ? "bg-brand text-white border-brand shadow-sm" : "bg-background text-ink border-line hover:border-brand-300"
              }`}
            >
              {g === "all" ? "All Grades" : `Grade ${g}`}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {filteredDevices.map((dev) => (
          <div key={dev.id} className="group flex flex-col justify-between rounded-3xl bg-background border border-line p-6 transition-all hover:border-brand shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-brand bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  Grade {dev.grade} · {dev.gradeLabel}
                </span>
                <span className="text-[11px] font-bold text-ink flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-line shadow-sm">
                  <BatteryCharging className="h-3.5 w-3.5 text-brand" /> {dev.batteryHealth}%
                </span>
              </div>

              <div className="my-6 flex items-center justify-center rounded-2xl bg-white h-40 border border-line shadow-sm relative overflow-hidden group-hover:border-brand-300 transition-colors">
                <span className="text-6xl drop-shadow-lg">{dev.imageEmoji}</span>
                <span className="absolute bottom-3 right-3 rounded-lg bg-background px-2.5 py-1 text-[11px] font-bold text-muted border border-line shadow-sm">
                  {dev.storage}
                </span>
              </div>

              <h4 className="text-xl font-bold text-ink group-hover:text-brand transition-colors">{dev.name}</h4>
              <p className="text-[14px] text-muted mt-1 font-medium">{dev.color} · Unlocked</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {dev.features.slice(0, 3).map((feat, idx) => (
                  <span key={idx} className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-bold text-muted border border-line shadow-sm">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-line/50">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-black text-ink">₹{dev.price.toLocaleString("en-IN")}</span>
                  <span className="ml-2 text-[14px] font-semibold line-through text-muted/60">₹{dev.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <span className="text-[13px] font-bold text-brand bg-brand-50 px-2 py-1 rounded-md">Save ₹{(dev.originalPrice - dev.price).toLocaleString("en-IN")}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setQuickViewItem(dev)} className="flex justify-center items-center gap-2 rounded-xl bg-white border border-line hover:border-ink py-3 text-[14px] font-bold text-ink transition focus-ring min-h-[48px] shadow-sm">
                  <Eye className="h-4 w-4" /> Specs
                </button>
                <button type="button" onClick={() => addToCart(dev)} className="flex justify-center items-center gap-2 rounded-xl bg-brand hover:bg-brand-600 text-white py-3 text-[14px] font-bold transition focus-ring min-h-[48px] shadow-sm">
                  <ShoppingBag className="h-4 w-4" /> Reserve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 border border-line shadow-2xl text-ink">
            <button onClick={() => setQuickViewItem(null)} className="absolute right-6 top-6 p-2 rounded-full bg-background hover:bg-line text-muted hover:text-ink transition focus-ring">
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-brand text-[13px] font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-5 w-5" /> 100-Point Inspection Pass
            </div>

            <div className="flex items-center gap-5 mt-2">
              <span className="text-6xl">{quickViewItem.imageEmoji}</span>
              <div>
                <h3 className="text-3xl font-black text-ink">{quickViewItem.name}</h3>
                <p className="text-[15px] font-medium text-muted mt-1">{quickViewItem.storage} · {quickViewItem.color} · Unlocked</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-background border border-line p-5 space-y-4">
              <div className="flex justify-between items-center text-[14px] font-bold"><span className="text-muted">Display & Digitizer:</span><span className="flex items-center gap-1.5 text-brand"><Check className="h-4 w-4" /> Pass</span></div>
              <div className="flex justify-between items-center text-[14px] font-bold"><span className="text-muted">Battery Health:</span><span className="text-brand">{quickViewItem.batteryHealth}%</span></div>
              <div className="flex justify-between items-center text-[14px] font-bold"><span className="text-muted">Connectivity (5G/Wi-Fi):</span><span className="flex items-center gap-1.5 text-brand"><Check className="h-4 w-4" /> Pass</span></div>
              <div className="flex justify-between items-center text-[14px] font-bold"><span className="text-muted">IMEI Clean:</span><span className="flex items-center gap-1.5 text-brand"><Check className="h-4 w-4" /> 100% Clean</span></div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <div>
                <span className="text-3xl font-black text-ink">₹{quickViewItem.price.toLocaleString("en-IN")}</span>
                <span className="block text-[13px] font-semibold text-muted line-through">Retail: ₹{quickViewItem.originalPrice.toLocaleString("en-IN")}</span>
              </div>
              <button onClick={() => { addToCart(quickViewItem); setQuickViewItem(null); }} className="flex justify-center items-center gap-2 rounded-xl bg-brand hover:bg-brand-600 px-8 py-4 text-[15px] font-bold text-white transition focus-ring min-h-[48px] shadow-sm">
                Reserve <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md h-full bg-white p-6 md:p-8 border-l border-line shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-line pb-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-6 w-6 text-brand" />
                  <h3 className="text-2xl font-black text-ink">Your Bag ({cart.length})</h3>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full bg-background hover:bg-line transition focus-ring">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-20 text-center text-muted">
                  <ShoppingBag className="h-16 w-16 mx-auto opacity-20 mb-4" />
                  <p className="text-[15px] font-bold text-ink">Your bag is empty.</p>
                  <p className="text-[14px] mt-2 max-w-[250px] mx-auto leading-relaxed">Browse our certified pre-loved flagships and reserve before they sell out.</p>
                </div>
              ) : (
                <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-background border border-line shadow-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl bg-white p-2 rounded-xl border border-line">{item.imageEmoji}</span>
                        <div>
                          <p className="font-bold text-[15px] text-ink">{item.name}</p>
                          <p className="text-[13px] font-medium text-muted mt-0.5">{item.storage} · Grade {item.grade}</p>
                          <span className="text-[14px] font-bold text-brand mt-1 block">₹{item.price.toLocaleString("en-IN")}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-muted hover:text-warning transition rounded-full hover:bg-warning/10 focus-ring">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-line pt-6 mt-6 space-y-4">
                <div className="flex justify-between text-[14px] font-bold text-muted"><span>Shipping:</span><span className="text-brand">FREE Express</span></div>
                <div className="flex justify-between text-[14px] font-bold text-muted"><span>1-Year Shield Warranty:</span><span className="text-brand">Included</span></div>
                <div className="flex justify-between text-xl font-black text-ink border-t border-line/50 pt-4">
                  <span>Subtotal:</span><span className="text-2xl text-brand">₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>
                <button onClick={() => { toast.success("Reservation Locked for 24 Hours!"); setCart([]); setIsCartOpen(false); }} className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand hover:bg-brand-600 py-4 text-[15px] font-bold text-white transition focus-ring min-h-[48px] shadow-sm mt-4">
                  Proceed to Checkout <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
