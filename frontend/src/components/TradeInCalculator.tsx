import React, { useState } from "react";
import { api } from "../services/api";
import {
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ArrowRight,
  ShieldCheck,
  Truck,
  IndianRupee,
  Sparkles,
  X,
  Loader2,
  Award,
  Clock,
  Flame,
  Camera,
  Upload,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";

export interface BrandItem {
  id: string;
  name: string;
  icon: string;
  placeholder: string;
  baseVal: number;
  deadVal: number;
  brokenVal: number;
}

// User specified brand options
export const SUPPORTED_BRANDS: BrandItem[] = [
  { id: "oppo", name: "Oppo", icon: "🟢", placeholder: "e.g. Find X7 Ultra, Reno 12 Pro, F25 Pro…", baseVal: 9000, deadVal: 2000, brokenVal: 4200 },
  { id: "vivo", name: "Vivo", icon: "💠", placeholder: "e.g. X100 Pro, V30 Pro, V29 5G, T3…", baseVal: 9500, deadVal: 2100, brokenVal: 4500 },
  { id: "samsung", name: "Samsung", icon: "🪐", placeholder: "e.g. Galaxy S24 Ultra, S23, Z Fold 5, A55…", baseVal: 16000, deadVal: 3800, brokenVal: 8000 },
  { id: "realme", name: "Realme", icon: "🟡", placeholder: "e.g. GT 6, 12 Pro+ 5G, Narzo 70 Pro…", baseVal: 8500, deadVal: 1900, brokenVal: 4000 },
  { id: "iqoo", name: "iQOO", icon: "⚡", placeholder: "e.g. iQOO 12, Neo 9 Pro, Z9 5G…", baseVal: 11000, deadVal: 2500, brokenVal: 5500 },
  { id: "iphone", name: "iPhone (Apple)", icon: "🍎", placeholder: "e.g. iPhone 16 Pro Max, 15, 14 Pro, 13…", baseVal: 19000, deadVal: 4800, brokenVal: 9500 },
  { id: "redmi", name: "Redmi", icon: "🔴", placeholder: "e.g. Note 13 Pro+, 12 Pro, 13C 5G…", baseVal: 8000, deadVal: 1800, brokenVal: 3800 },
  { id: "xiaomi", name: "Xiaomi", icon: "📱", placeholder: "e.g. Xiaomi 14 Ultra, 13 Pro, Pad 6…", baseVal: 10500, deadVal: 2300, brokenVal: 5200 },
  { id: "motorola", name: "Motorola", icon: "🔷", placeholder: "e.g. Edge 50 Ultra, Edge 50 Pro, G84…", baseVal: 8500, deadVal: 1900, brokenVal: 4000 },
  { id: "honor", name: "Honor", icon: "👑", placeholder: "e.g. Magic 6 Pro, Honor 200, 90 5G…", baseVal: 9000, deadVal: 2000, brokenVal: 4200 },
  { id: "google-pixel", name: "Google Pixel", icon: "💎", placeholder: "e.g. Pixel 9 Pro XL, Pixel 8, 7a…", baseVal: 14000, deadVal: 3200, brokenVal: 7000 },
  { id: "huawei", name: "Huawei", icon: "🌸", placeholder: "e.g. Pura 70 Ultra, Mate 60 Pro, P60…", baseVal: 10000, deadVal: 2200, brokenVal: 4800 },
  { id: "nothing", name: "Nothing", icon: "⚪", placeholder: "e.g. Nothing Phone (2), Phone (2a), CMF Phone 1…", baseVal: 11500, deadVal: 2600, brokenVal: 5600 },
];

export const STORAGE_OPTIONS = [
  { label: "64GB", bonus: 0 },
  { label: "128GB", bonus: 200 },
  { label: "256GB", bonus: 500 },
  { label: "512GB", bonus: 1000 },
  { label: "1TB", bonus: 1800 },
];

type ConditionType = "dead" | "broken_screen" | "flawed" | "working";

export function TradeInCalculator() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>("samsung");
  const [modelName, setModelName] = useState<string>("");
  const [storage, setStorage] = useState<string>("256GB");
  const [condition, setCondition] = useState<ConditionType>("dead");
  const [hasOriginalBox, setHasOriginalBox] = useState<boolean>(false);

  // Phone image upload
  const [phoneImage, setPhoneImage] = useState<string>("");
  const [imageFileName, setImageFileName] = useState<string>("");
  const [isProcessingImage, setIsProcessingImage] = useState<boolean>(false);

  // Modal & Lock-in Form
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [custAddress, setCustAddress] = useState("");
  const [payoutMethod, setPayoutMethod] = useState("upi");
  const [offerLockedId, setOfferLockedId] = useState<string | null>(null);
  const [isSubmittingTradeIn, setIsSubmittingTradeIn] = useState(false);

  const currentBrand =
    SUPPORTED_BRANDS.find((b) => b.id === selectedBrandId) ||
    SUPPORTED_BRANDS[0]!;

  // Calculate estimated price
  const calculateOffer = () => {
    let base = currentBrand.baseVal;
    if (condition === "dead") {
      base = currentBrand.deadVal;
    } else if (condition === "broken_screen") {
      base = currentBrand.brokenVal;
    } else if (condition === "flawed") {
      base = Math.round(currentBrand.baseVal * 0.72);
    }

    const storageObj = STORAGE_OPTIONS.find((s) => s.label === storage);
    const storageAdd = storageObj?.bonus || 0;
    const boxAdd = hasOriginalBox ? 200 : 0;
    return base + storageAdd + boxAdd;
  };

  const offerAmount = calculateOffer();

  // Image Upload handler with client-side canvas compression
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file (JPG, PNG, or WEBP)");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      toast.error("Image file is too large (max 15MB)");
      return;
    }

    setIsProcessingImage(true);
    setImageFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1280;
        let width = img.width;
        let height = img.height;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          setPhoneImage(compressed);
          toast.success("📸 Device photo attached successfully!");
        }
        setIsProcessingImage(false);
      };
      img.onerror = () => {
        setIsProcessingImage(false);
        toast.error("Could not process image file");
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhoneImage("");
    setImageFileName("");
    toast.info("Photo removed");
  };

  const handleOpenLockModal = () => {
    if (!modelName.trim()) {
      toast.error("Please write your phone model name first", {
        description: `e.g. "${currentBrand.name} ${currentBrand.placeholder.split(",")[0]?.replace("e.g. ", "").trim() || "Model"}"`,
      });
      return;
    }
    setIsModalOpen(true);
  };

  const handleLockInQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName || !custPhone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setIsSubmittingTradeIn(true);
    try {
      const formattedModel = `${currentBrand.name} ${modelName.trim()} (${storage})`;
      const response = await api.submitRepairRequest({
        customerName: custName.trim(),
        phoneNumber: custPhone.trim(),
        email: custEmail.trim(),
        phoneBrand: currentBrand.name,
        phoneModel: formattedModel,
        serviceType: "Sell a dead phone / Instant Buyback",
        problemDescription: `Condition: ${condition.replace("_", " ")}${hasOriginalBox ? " · Includes Retail Box & Cable" : ""}`,
        address: custAddress.trim(),
        payoutMethod: payoutMethod,
        estimatedAmount: offerAmount,
        deviceCondition: condition,
        storage: storage,
        phoneImage: phoneImage,
        preferredOption: "Free Prepaid Express Shipping Kit",
      });

      const genId =
        response.data?.ticketNumber ||
        `RT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOfferLockedId(genId);
      toast.success(
        `🎉 Pickup & Cash Request Registered! Ref #${genId}`,
        {
          description: "Your device trade-in request has been safely recorded in our system.",
          duration: 6000,
        }
      );
    } catch (err: any) {
      toast.error("Failed to Lock Offer", {
        description: err.message || "Could not connect to backend server.",
      });
    } finally {
      setIsSubmittingTradeIn(false);
    }
  };

  return (
    <div
      id="sell-calculator"
      className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden shadow-2xl border border-white/15"
    >
      {/* Background radial highlight */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent font-label border border-accent/30">
            <Sparkles className="h-3.5 w-3.5" />
            Sell Dead Phone with Doorstep Pickup
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Sell Your Dead or Damaged Phone
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Even if it won't boot, is water-soaked, or shattered into pieces.
            Select your brand, write your model, and request free doorstep pickup with top cash payout.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-ink/70 px-4 py-2.5 border border-white/10 shrink-0">
          <div className="h-2 w-2 rounded-full bg-emerald-400 live-pulse" />
          <span className="font-label text-xs text-white/90">
            Doorstep Service Active
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 mt-8">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Attractive Buyback Pamphlet / Marketing Showcase Card */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-brand/15 to-purple-950/40 p-5 shadow-xl">
            {/* Glow accents */}
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-brand/25 blur-2xl pointer-events-none" />

            {/* Pamphlet Top Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-bold text-amber-300 font-label border border-amber-400/40">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>OFFICIAL BUYBACK PAMPHLET</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold font-label">
                <span className="h-2 w-2 rounded-full bg-emerald-400 live-pulse" />
                <span>Highest Cash Guaranteed</span>
              </div>
            </div>

            {/* Pamphlet Headline */}
            <div className="relative z-10 mt-3.5">
              <h4 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Flame className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Sell ANY Dead, Broken or Water-Damaged Phone</span>
              </h4>
              <p className="font-display text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                Motherboard burnt? Screen crushed? Dropped in water? We buy it for instant cash, guaranteed within 15 minutes!
              </p>
            </div>

            {/* Pamphlet 4 Pillars Grid */}
            <div className="relative z-10 mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 font-display">
              <div className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-2.5 transition hover:bg-white/10">
                <div className="rounded-lg bg-amber-400/20 p-1.5 text-amber-300 shrink-0">
                  <IndianRupee className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Top Cash Payout</div>
                  <div className="text-[11px] text-white/70">Highest valuation for dead flagship phones</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-2.5 transition hover:bg-white/10">
                <div className="rounded-lg bg-emerald-400/20 p-1.5 text-emerald-300 shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">15-Min Instant Pay</div>
                  <div className="text-[11px] text-white/70">Direct UPI (GPay/PhonePe) or Cash</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-2.5 transition hover:bg-white/10">
                <div className="rounded-lg bg-blue-400/20 p-1.5 text-blue-300 shrink-0">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Free Doorstep Pickup</div>
                  <div className="text-[11px] text-white/70">100% insured, no pickup fees</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl bg-white/5 border border-white/10 p-2.5 transition hover:bg-white/10">
                <div className="rounded-lg bg-purple-400/20 p-1.5 text-purple-300 shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Military Data Wipe</div>
                  <div className="text-[11px] text-white/70">DoD certified total privacy safety</div>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Mobile Brand Selector (Requested Brands) */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2.5">
              1. Select Mobile Brand
            </label>
            <select
              value={selectedBrandId}
              onChange={(e) => {
                setSelectedBrandId(e.target.value);
              }}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white font-display outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer"
            >
              {SUPPORTED_BRANDS.map((brand) => (
                <option
                  key={brand.id}
                  value={brand.id}
                  className="bg-ink text-white py-2"
                >
                  {brand.icon} {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Write Model Name Manually */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70">
                2. Write {currentBrand.name} Model Name
              </label>
              <span className="text-[11px] text-accent font-label">
                Type exact model
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder={currentBrand.placeholder}
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white font-display placeholder:text-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
                {currentBrand.icon}
              </div>
            </div>
            <p className="text-[11px] text-white/50 mt-1.5 font-display">
              Example for {currentBrand.name}: {currentBrand.placeholder}
            </p>
          </div>

          {/* 3. Storage Selector */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2.5">
              3. Storage Capacity
            </label>
            <div className="flex flex-wrap gap-2.5">
              {STORAGE_OPTIONS.map((stg) => (
                <button
                  key={stg.label}
                  type="button"
                  onClick={() => setStorage(stg.label)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-semibold font-label transition border cursor-pointer ${
                    storage === stg.label
                      ? "bg-accent text-ink border-accent font-bold scale-105 shadow-md shadow-accent/20"
                      : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {stg.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Device Condition */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70 mb-2.5">
              4. Device Condition
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Dead / No Power */}
              <button
                type="button"
                onClick={() => setCondition("dead")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "dead"
                    ? "bg-brand/20 border-brand ring-2 ring-brand/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand" />
                    <span className="font-display font-semibold text-sm text-white">
                      Completely Dead / Won't Turn On
                    </span>
                  </div>
                  {condition === "dead" && (
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                  )}
                </div>
                <p className="font-display text-xs text-white/60 mt-1.5 leading-relaxed">
                  No power, water contact, black screen, or board failure. Still
                  guaranteed cash!
                </p>
              </button>

              {/* Broken Screen */}
              <button
                type="button"
                onClick={() => setCondition("broken_screen")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "broken_screen"
                    ? "bg-brand/20 border-brand ring-2 ring-brand/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span className="font-display font-semibold text-sm text-white">
                      Cracked OLED / Touch Broken
                    </span>
                  </div>
                  {condition === "broken_screen" && (
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                  )}
                </div>
                <p className="font-display text-xs text-white/60 mt-1.5 leading-relaxed">
                  Powers on, but display has colored lines, black spots, or
                  shattered glass.
                </p>
              </button>

              {/* Flawed */}
              <button
                type="button"
                onClick={() => setCondition("flawed")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "flawed"
                    ? "bg-brand/20 border-brand ring-2 ring-brand/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-blue-400" />
                    <span className="font-display font-semibold text-sm text-white">
                      Flawed / Heavy Scratches
                    </span>
                  </div>
                  {condition === "flawed" && (
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                  )}
                </div>
                <p className="font-display text-xs text-white/60 mt-1.5 leading-relaxed">
                  Fully operational, deep housing dents, degraded battery, or
                  camera glass cracks.
                </p>
              </button>

              {/* Working */}
              <button
                type="button"
                onClick={() => setCondition("working")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "working"
                    ? "bg-brand/20 border-brand ring-2 ring-brand/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span className="font-display font-semibold text-sm text-white">
                      Good / Mint Working
                    </span>
                  </div>
                  {condition === "working" && (
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                  )}
                </div>
                <p className="font-display text-xs text-white/60 mt-1.5 leading-relaxed">
                  Flawless screen, powers on instantly, normal battery health,
                  all features pass.
                </p>
              </button>
            </div>
          </div>

          {/* 5. Upload Phone Image */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block font-label text-xs font-bold uppercase tracking-wider text-white/70">
                5. Upload Photo of Phone
              </label>
              <span className="text-[11px] text-accent font-label">
                Front, Back, or Damage Proof
              </span>
            </div>

            {!phoneImage ? (
              <label className="relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-accent transition cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  disabled={isProcessingImage}
                  className="hidden"
                />
                <div className="rounded-full bg-accent/20 p-3 text-accent group-hover:scale-110 transition">
                  {isProcessingImage ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <Camera className="h-6 w-6" />
                  )}
                </div>
                <span className="font-display font-semibold text-sm text-white mt-2.5">
                  {isProcessingImage
                    ? "Optimizing phone photo…"
                    : "Click to upload phone photo (or drag & drop)"}
                </span>
                <span className="font-display text-xs text-white/50 mt-1">
                  Supports JPG, PNG, WEBP (Max 15MB) · Speeds up instant approval
                </span>
              </label>
            ) : (
              <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-white/20 bg-black shrink-0">
                    <img
                      src={phoneImage}
                      alt="Uploaded phone"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-label text-xs font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Phone Photo Attached</span>
                    </div>
                    <span className="font-display text-xs text-white/80 block mt-0.5 truncate max-w-xs">
                      {imageFileName || "phone-device-photo.jpg"}
                    </span>
                    <span className="text-[10px] text-white/50">
                      Visible in technician admin review
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="rounded-full p-2 bg-white/10 hover:bg-rose-500/20 hover:text-rose-300 text-white/70 transition cursor-pointer"
                  title="Remove photo"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Addons toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="originalBox"
                checked={hasOriginalBox}
                onChange={(e) => setHasOriginalBox(e.target.checked)}
                className="h-4 w-4 rounded accent-brand cursor-pointer"
              />
              <label
                htmlFor="originalBox"
                className="font-display text-xs text-white/80 cursor-pointer"
              >
                Include original retail box & charging cable (Extra Bonus Payout)
              </label>
            </div>
            <span className="font-label text-xs font-bold text-emerald-400">
              Bonus
            </span>
          </div>
        </div>

        {/* Right Column: Live Offer Card */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-ink/90 via-ink/70 to-brand/10 p-6 border border-white/15 shadow-xl relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-label text-xs uppercase tracking-wider text-white/60">
                Device Summary
              </span>
              <span className="font-label text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Free Doorstep Pickup
              </span>
            </div>

            {/* Selected device summary info */}
            <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
              <span className="font-label text-[10px] uppercase tracking-wider text-white/50 block">
                Selling Device
              </span>
              <h4 className="font-display text-base font-bold text-white mt-1 flex items-center gap-2">
                <span>{currentBrand.icon}</span>
                <span>
                  {modelName.trim()
                    ? `${currentBrand.name} ${modelName.trim()}`
                    : `${currentBrand.name} (Enter Model Name)`}
                </span>
                <span className="text-white/60 text-sm font-normal">
                  ({storage})
                </span>
              </h4>
              <p className="font-display text-xs text-accent mt-1 capitalize">
                Condition: {condition.replace("_", " ")}
              </p>
            </div>

            {/* Photo Attached Pill */}
            {phoneImage && (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-2 text-xs text-emerald-300 font-label">
                <ImageIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Device Photo Attached & Ready</span>
              </div>
            )}

            {/* Payout & Pickup Valuation Card (Offer Amount Hidden) */}
            <div className="rounded-2xl bg-gradient-to-br from-brand/20 via-black/60 to-emerald-950/40 p-5 border border-white/15 text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30 mb-2">
                <CheckCircle2 className="h-3.5 w-3.5" />
                HIGHEST CASH PAYOUT GUARANTEED
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                Free Doorstep Pickup & Payout
              </h4>
              <p className="font-display text-xs text-white/75 mt-1.5 max-w-sm mx-auto">
                No hidden deductions. Our technician visits your doorstep, verifies the device, and transfers payment instantly via UPI or Cash!
              </p>
            </div>

            {/* Benefit Checkmarks */}
            <div className="space-y-2 text-xs font-display text-white/80">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-accent shrink-0" />
                <span>Free Prepaid Insured Shipping Kit or Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                <span>NIST 800-88 Certified Military Data Wipe included</span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-accent shrink-0" />
                <span>Instant Payout via UPI (GPay/PhonePe), Bank Transfer or Cash</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10">
            <button
              type="button"
              onClick={handleOpenLockModal}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_oklch(0.704_0.192_37.126/45%)] transition hover:brightness-110 font-label cursor-pointer"
            >
              <span>Request Free Doorstep Pickup & Cash</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="font-display text-[11px] text-center text-white/50 mt-2.5">
              Zero obligation · 100% Free doorstep pickup & payout
            </p>
          </div>
        </div>
      </div>

      {/* Lock-In Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-ink to-black p-6 md:p-8 border border-white/20 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setOfferLockedId(null);
              }}
              className="absolute right-5 top-5 p-2 text-white/60 hover:text-white rounded-full bg-white/10 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!offerLockedId ? (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-label text-xs uppercase tracking-wider font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Free Doorstep Inspection & Payout
                </div>
                <h3 className="font-display text-2xl font-bold mt-1 text-white">
                  Request Top Cash Payout & Doorstep Pickup
                </h3>
                <p className="font-display text-xs text-white/70 mt-1">
                  We'll dispatch our insured pickup team to inspect and hand over your instant cash/UPI payout.
                </p>

                {/* Device summary card */}
                <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-display space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Selected Device:</span>
                    <span className="font-bold text-white">
                      {currentBrand.icon} {currentBrand.name} {modelName.trim()} ({storage})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Condition:</span>
                    <span className="font-semibold text-accent capitalize">
                      {condition.replace("_", " ")}
                    </span>
                  </div>
                  {phoneImage && (
                    <div className="flex justify-between items-center pt-1 border-t border-white/10">
                      <span className="text-white/60">Photo Attached:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Yes (Attached)
                      </span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleLockInQuote} className="mt-4 space-y-3.5">
                  <div>
                    <label className="block font-display text-xs text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-display text-xs text-white/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={custPhone}
                        onChange={(e) => setCustPhone(e.target.value)}
                        placeholder="8591770877"
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs text-white/80 mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={custEmail}
                        onChange={(e) => setCustEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs text-white/80 mb-1">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={custAddress}
                      onChange={(e) => setCustAddress(e.target.value)}
                      placeholder="House/Flat No., Street, City, Pincode"
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-xs text-white/80 mb-1">
                      Payout Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "upi", label: "⚡ Instant UPI" },
                        { id: "cash", label: "💵 Doorstep Cash" },
                        { id: "bank", label: "🏦 Bank Transfer" },
                      ].map((pm) => (
                        <button
                          key={pm.id}
                          type="button"
                          onClick={() => setPayoutMethod(pm.id)}
                          className={`rounded-xl py-2 px-2 text-xs font-semibold font-label transition border cursor-pointer ${
                            payoutMethod === pm.id
                              ? "bg-brand text-white border-brand shadow-sm shadow-brand/40"
                              : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {pm.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingTradeIn}
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 font-label disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmittingTradeIn ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Connecting with Lab System…</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm & Request Doorstep Pickup</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Pickup & Cash Request Registered!
                  </h3>
                  <p className="font-mono text-sm font-bold text-accent mt-1">
                    Ref Ticket: #{offerLockedId}
                  </p>
                  <p className="font-display text-xs text-white/70 mt-2 max-w-sm mx-auto">
                    We've registered your {currentBrand.name} {modelName}. An operations technician will reach out to {custPhone} shortly to confirm the highest cash payout and coordinate free doorstep pickup.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setOfferLockedId(null);
                      setModelName("");
                      setPhoneImage("");
                      setImageFileName("");
                    }}
                    className="rounded-full bg-white/10 hover:bg-white/20 px-6 py-2.5 text-xs font-semibold transition cursor-pointer font-label"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
