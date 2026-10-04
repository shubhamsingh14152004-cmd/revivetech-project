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
  Phone,
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
  { id: "samsung", name: "Samsung", icon: "S", placeholder: "e.g. Galaxy S24 Ultra, S23, Z Fold 5, A55…", baseVal: 16000, deadVal: 3800, brokenVal: 8000 },
  { id: "iphone", name: "iPhone (Apple)", icon: "", placeholder: "e.g. iPhone 16 Pro Max, 15, 14 Pro, 13…", baseVal: 19000, deadVal: 4800, brokenVal: 9500 },
  { id: "oneplus", name: "OnePlus", icon: "1+", placeholder: "e.g. OnePlus 12, 11, Nord 4, Open…", baseVal: 12500, deadVal: 2800, brokenVal: 6000 },
  { id: "xiaomi", name: "Xiaomi", icon: "Mi", placeholder: "e.g. Xiaomi 14 Ultra, 13 Pro, Pad 6…", baseVal: 10500, deadVal: 2300, brokenVal: 5200 },
  { id: "oppo", name: "Oppo", icon: "O", placeholder: "e.g. Find X7 Ultra, Reno 12 Pro, F25 Pro…", baseVal: 9000, deadVal: 2000, brokenVal: 4200 },
  { id: "vivo", name: "Vivo", icon: "V", placeholder: "e.g. X100 Pro, V30 Pro, V29 5G, T3…", baseVal: 9500, deadVal: 2100, brokenVal: 4500 },
  { id: "realme", name: "Realme", icon: "R", placeholder: "e.g. GT 6, 12 Pro+ 5G, Narzo 70 Pro…", baseVal: 8500, deadVal: 1900, brokenVal: 4000 },
  { id: "iqoo", name: "iQOO", icon: "iQ", placeholder: "e.g. iQOO 12, Neo 9 Pro, Z9 5G…", baseVal: 11000, deadVal: 2500, brokenVal: 5500 },
  { id: "redmi", name: "Redmi", icon: "RM", placeholder: "e.g. Note 13 Pro+, 12 Pro, 13C 5G…", baseVal: 8000, deadVal: 1800, brokenVal: 3800 },
  { id: "motorola", name: "Motorola", icon: "M", placeholder: "e.g. Edge 50 Ultra, Edge 50 Pro, G84…", baseVal: 8500, deadVal: 1900, brokenVal: 4000 },
  { id: "google-pixel", name: "Google Pixel", icon: "G", placeholder: "e.g. Pixel 9 Pro XL, Pixel 8, 7a…", baseVal: 14000, deadVal: 3200, brokenVal: 7000 },
  { id: "nothing", name: "Nothing", icon: "N", placeholder: "e.g. Nothing Phone (2), Phone (2a), CMF Phone 1…", baseVal: 11500, deadVal: 2600, brokenVal: 5600 },
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
    const cleanPhone = custPhone.replace(/\D/g, "");
    if (cleanPhone.length > 0 && cleanPhone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits", {
        description: `You entered ${cleanPhone.length} digits. Indian mobile numbers must be exactly 10 digits (no more, no less).`,
      });
      return;
    }
    setIsModalOpen(true);
  };

  const handleLockInQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    const cleanPhone = custPhone.replace(/\D/g, "");
    if (!cleanPhone) {
      toast.error("Please enter your phone number");
      return;
    }
    if (cleanPhone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits", {
        description: `You entered ${cleanPhone.length} digits. Indian mobile numbers must be exactly 10 digits (no more, no less).`,
      });
      return;
    }
    setIsSubmittingTradeIn(true);
    try {
      const formattedModel = `${currentBrand.name} ${modelName.trim()} (${storage})`;
      const response = await api.submitRepairRequest({
        customerName: custName.trim(),
        phoneNumber: cleanPhone,
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
      className="relative rounded-3xl bg-white p-6 md:p-10 overflow-hidden shadow-md border border-[#E5E7EB]"
    >
      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1 text-xs font-semibold text-[#005B46] font-label border border-[#007F5F]/20">
            <ShieldCheck className="h-3.5 w-3.5 text-[#007F5F]" />
            Instant Cash Trade-In & Doorstep Pickup
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-[#102A26]">
            Calculate Used & Dead Phone Payout Value
          </h3>
          <p className="font-display text-sm text-[#6B7280] mt-1 max-w-xl">
            Select your brand, model, storage, and condition to request free doorstep pickup with top cash payout.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#FAFAF7] px-4 py-2.5 border border-[#E5E7EB] shrink-0 shadow-xs">
          <div className="h-2 w-2 rounded-full bg-[#007F5F] animate-pulse" />
          <span className="font-label text-xs text-[#102A26] font-medium">
            Doorstep Service Active
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-start mt-8">
        {/* Left Column: Primary Buyback Form (~58-60% width) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Mobile Brand Selector */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26] mb-2">
              1. Select Mobile Brand
            </label>
            <select
              value={selectedBrandId}
              onChange={(e) => {
                setSelectedBrandId(e.target.value);
              }}
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#102A26] font-display outline-none transition focus:border-[#007F5F] focus:ring-2 focus:ring-[#007F5F]/20 cursor-pointer shadow-2xs"
            >
              {SUPPORTED_BRANDS.map((brand) => (
                <option
                  key={brand.id}
                  value={brand.id}
                  className="bg-white text-[#102A26] py-2"
                >
                  {brand.icon} {brand.name}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Write Model Name */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26]">
                2. Write {currentBrand.name} Model Name
              </label>
              <span className="text-[11px] text-[#007F5F] font-label font-semibold">
                Type exact model
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder={currentBrand.placeholder}
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#102A26] font-display placeholder:text-[#94A3B8] outline-none transition focus:border-[#007F5F] focus:ring-2 focus:ring-[#007F5F]/20 shadow-2xs"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-lg pointer-events-none text-[#007F5F]">
                {currentBrand.icon}
              </div>
            </div>
            <p className="text-[11px] text-[#6B7280] mt-1.5 font-display">
              Example for {currentBrand.name}: {currentBrand.placeholder}
            </p>
          </div>

          {/* 3. Storage Selector */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26] mb-2">
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
                      ? "bg-[#007F5F] text-white border-[#007F5F] font-bold shadow-xs"
                      : "bg-[#FAFAF7] text-[#102A26] border-[#E5E7EB] hover:bg-[#DDF5EA] hover:text-[#005B46]"
                  }`}
                >
                  {stg.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Device Condition */}
          <div>
            <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26] mb-2">
              4. Device Condition
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Dead / No Power */}
              <button
                type="button"
                onClick={() => setCondition("dead")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "dead"
                    ? "bg-[#DDF5EA] border-[#007F5F] ring-2 ring-[#007F5F]/30"
                    : "bg-white border-[#E5E7EB] hover:bg-[#FAFAF7]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#007F5F]" />
                    <span className="font-display font-semibold text-sm text-[#102A26]">
                      Completely Dead / Won't Turn On
                    </span>
                  </div>
                  {condition === "dead" && (
                    <CheckCircle2 className="h-4 w-4 text-[#007F5F]" />
                  )}
                </div>
                <p className="font-display text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                  No power, water damage, black screen, or motherboard issues.
                </p>
              </button>

              {/* Broken Screen */}
              <button
                type="button"
                onClick={() => setCondition("broken_screen")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "broken_screen"
                    ? "bg-[#DDF5EA] border-[#007F5F] ring-2 ring-[#007F5F]/30"
                    : "bg-white border-[#E5E7EB] hover:bg-[#FAFAF7]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="font-display font-semibold text-sm text-[#102A26]">
                      Cracked Screen / Touch Broken
                    </span>
                  </div>
                  {condition === "broken_screen" && (
                    <CheckCircle2 className="h-4 w-4 text-[#007F5F]" />
                  )}
                </div>
                <p className="font-display text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                  Powers on, but screen has lines, spots, or cracked glass.
                </p>
              </button>

              {/* Flawed */}
              <button
                type="button"
                onClick={() => setCondition("flawed")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "flawed"
                    ? "bg-[#DDF5EA] border-[#007F5F] ring-2 ring-[#007F5F]/30"
                    : "bg-white border-[#E5E7EB] hover:bg-[#FAFAF7]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-blue-500" />
                    <span className="font-display font-semibold text-sm text-[#102A26]">
                      Flawed / Heavy Scratches
                    </span>
                  </div>
                  {condition === "flawed" && (
                    <CheckCircle2 className="h-4 w-4 text-[#007F5F]" />
                  )}
                </div>
                <p className="font-display text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                  Works fine, but heavy scratches, body dents, or battery drain.
                </p>
              </button>

              {/* Working */}
              <button
                type="button"
                onClick={() => setCondition("working")}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition cursor-pointer ${
                  condition === "working"
                    ? "bg-[#DDF5EA] border-[#007F5F] ring-2 ring-[#007F5F]/30"
                    : "bg-white border-[#E5E7EB] hover:bg-[#FAFAF7]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#007F5F]" />
                    <span className="font-display font-semibold text-sm text-[#102A26]">
                      Good / Mint Working
                    </span>
                  </div>
                  {condition === "working" && (
                    <CheckCircle2 className="h-4 w-4 text-[#007F5F]" />
                  )}
                </div>
                <p className="font-display text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                  Fully functional with minimal signs of wear and good battery.
                </p>
              </button>
            </div>
          </div>

          {/* 5. Upload Phone Image */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26]">
                5. Upload Photo of Phone (Optional)
              </label>
              <span className="text-[11px] text-[#007F5F] font-label font-semibold">
                Front, Back, or Damage Proof
              </span>
            </div>

            {!phoneImage ? (
              <label className="relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-[#E5E7EB] bg-[#FAFAF7] hover:bg-[#DDF5EA]/30 hover:border-[#007F5F] transition cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  disabled={isProcessingImage}
                  className="hidden"
                />
                <div className="rounded-full bg-[#DDF5EA] p-2.5 text-[#007F5F] group-hover:scale-110 transition">
                  {isProcessingImage ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Camera className="h-5 w-5" />
                  )}
                </div>
                <span className="font-display font-semibold text-xs text-[#102A26] mt-2">
                  {isProcessingImage
                    ? "Processing photo…"
                    : "Click to upload phone photo"}
                </span>
                <span className="font-display text-[11px] text-[#6B7280] mt-0.5">
                  JPG, PNG, WEBP (Max 15MB)
                </span>
              </label>
            ) : (
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAF7] p-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-[#E5E7EB] bg-black shrink-0">
                    <img
                      src={phoneImage}
                      alt="Uploaded phone"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[#007F5F] font-label text-xs font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Phone Photo Attached</span>
                    </div>
                    <span className="font-display text-xs text-[#102A26] block mt-0.5 truncate max-w-xs">
                      {imageFileName || "phone-device-photo.jpg"}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="rounded-full p-2 bg-white hover:bg-rose-50 text-[#6B7280] hover:text-rose-600 transition cursor-pointer border border-[#E5E7EB]"
                  title="Remove photo"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Retail Box Checkbox */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E5E7EB]">
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="originalBox"
                checked={hasOriginalBox}
                onChange={(e) => setHasOriginalBox(e.target.checked)}
                className="h-4 w-4 rounded accent-[#007F5F] cursor-pointer"
              />
              <label
                htmlFor="originalBox"
                className="font-display text-xs text-[#102A26] cursor-pointer"
              >
                Include original retail box & charging cable (Extra Bonus)
              </label>
            </div>
            <span className="font-label text-xs font-bold text-[#007F5F]">
              Bonus
            </span>
          </div>

          {/* 6. Customer Mobile Number & CTA */}
          <div className="p-4 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] space-y-3">
            <div className="flex items-center justify-between">
              <label className="block font-label text-xs font-bold uppercase tracking-wider text-[#102A26] flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#007F5F]" />
                <span>6. Mobile Number for Free Doorstep Pickup *</span>
              </label>
              <span
                className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  custPhone.replace(/\D/g, "").length === 10
                    ? "bg-[#DDF5EA] text-[#005B46] border-[#007F5F]/30"
                    : "bg-white text-[#6B7280] border-[#E5E7EB]"
                }`}
              >
                {custPhone.replace(/\D/g, "").length === 10
                  ? "✓ 10 Digits Valid"
                  : `${custPhone.replace(/\D/g, "").length} / 10 digits`}
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[#102A26] font-mono text-xs font-bold border-r border-[#E5E7EB] pr-2.5 pointer-events-none">
                <span className="text-sm">🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                type="tel"
                maxLength={10}
                value={custPhone}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setCustPhone(cleaned);
                }}
                placeholder="Enter 10-digit mobile number"
                className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-20 pr-4 py-3 text-sm text-[#102A26] placeholder:text-[#94A3B8] outline-none transition font-mono tracking-wider focus:border-[#007F5F] focus:ring-2 focus:ring-[#007F5F]/20 shadow-2xs"
              />
            </div>

            <button
              type="button"
              onClick={handleOpenLockModal}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] px-6 py-3.5 text-sm font-bold text-white shadow-md transition font-label cursor-pointer"
            >
              <span>Request Free Doorstep Pickup & Cash</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Column: How It Works Guide (~40-42% width) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white p-6 md:p-8 border border-[#E5E7EB] shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DDF5EA] px-3.5 py-1 text-xs font-semibold text-[#005B46] font-label border border-[#007F5F]/20 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#007F5F]" />
              Simple & Transparent Process
            </div>
            <h3 className="font-display text-2xl font-bold text-[#102A26]">
              How It Works
            </h3>
            <p className="font-display text-sm text-[#6B7280] mt-1">
              Sell your old phone in 4 simple steps.
            </p>

            {/* 4 Vertical Steps */}
            <div className="relative mt-7 space-y-6">
              {/* Connecting vertical line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-[#DDF5EA]" />

              {/* Step 1 */}
              <div className="relative flex items-start gap-4">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#007F5F] text-white font-mono font-bold text-sm shadow-xs">
                  1
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-[#007F5F]" />
                    <h4 className="font-display text-sm font-bold text-[#102A26]">
                      Enter Your Phone Details
                    </h4>
                  </div>
                  <p className="font-display text-xs text-[#6B7280] mt-1 leading-relaxed">
                    Select your brand, model, storage, and phone condition.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-4">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#007F5F] text-white font-mono font-bold text-sm shadow-xs">
                  2
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-[#007F5F]" />
                    <h4 className="font-display text-sm font-bold text-[#102A26]">
                      Get Your Best Quote
                    </h4>
                  </div>
                  <p className="font-display text-xs text-[#6B7280] mt-1 leading-relaxed">
                    Review your phone's estimated value and available selling options.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-4">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#007F5F] text-white font-mono font-bold text-sm shadow-xs">
                  3
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-[#007F5F]" />
                    <h4 className="font-display text-sm font-bold text-[#102A26]">
                      Schedule Free Pickup
                    </h4>
                  </div>
                  <p className="font-display text-xs text-[#6B7280] mt-1 leading-relaxed">
                    Choose a convenient doorstep pickup or the available shipping option.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-4">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#007F5F] text-white font-mono font-bold text-sm shadow-xs">
                  4
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#007F5F]" />
                    <h4 className="font-display text-sm font-bold text-[#102A26]">
                      Get Paid Instantly
                    </h4>
                  </div>
                  <p className="font-display text-xs text-[#6B7280] mt-1 leading-relaxed">
                    Our team checks your phone and confirms the final value. Receive payment through UPI, bank transfer, or cash according to the selected service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Reassurance Section */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] bg-[#FAFAF7] rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#DDF5EA] text-[#007F5F] mb-1.5">
                  <Truck className="h-4 w-4" />
                </div>
                <span className="font-display text-[11px] font-bold text-[#102A26]">
                  Free Doorstep Pickup
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#DDF5EA] text-[#007F5F] mb-1.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span className="font-display text-[11px] font-bold text-[#102A26]">
                  Secure Data Wipe
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#DDF5EA] text-[#007F5F] mb-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="font-display text-[11px] font-bold text-[#102A26]">
                  No Hidden Fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lock-In Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 md:p-8 border border-[#E5E7EB] shadow-2xl text-[#102A26] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setOfferLockedId(null);
              }}
              className="absolute right-5 top-5 p-2 text-[#6B7280] hover:text-[#102A26] rounded-full bg-[#FAFAF7] transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!offerLockedId ? (
              <div>
                <div className="flex items-center gap-2 text-[#007F5F] font-label text-xs uppercase tracking-wider font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Free Doorstep Inspection & Payout
                </div>
                <h3 className="font-display text-2xl font-bold mt-1 text-[#102A26]">
                  Request Top Cash Payout & Doorstep Pickup
                </h3>
                <p className="font-display text-xs text-[#6B7280] mt-1">
                  We'll dispatch our insured pickup team to inspect and hand over your instant cash/UPI payout.
                </p>

                {/* Device summary card */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#FAFAF7] border border-[#E5E7EB] text-xs font-display space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">Selected Device:</span>
                    <span className="font-bold text-[#102A26]">
                      {currentBrand.icon} {currentBrand.name} {modelName.trim()} ({storage})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280]">Condition:</span>
                    <span className="font-semibold text-[#007F5F] capitalize">
                      {condition.replace("_", " ")}
                    </span>
                  </div>
                  {phoneImage && (
                    <div className="flex justify-between items-center pt-1 border-t border-[#E5E7EB]">
                      <span className="text-[#6B7280]">Photo Attached:</span>
                      <span className="text-[#005B46] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-[#007F5F]" /> Yes (Attached)
                      </span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleLockInQuote} className="mt-4 space-y-3.5">
                  <div>
                    <label className="block font-display text-xs text-[#102A26] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#102A26] placeholder:text-[#94A3B8] outline-none focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block font-display text-xs text-[#102A26] font-medium">
                          Phone Number *
                        </label>
                        <span
                          className={`text-[10px] font-mono font-bold ${
                            custPhone.replace(/\D/g, "").length === 10
                              ? "text-[#005B46]"
                              : "text-[#007F5F]"
                          }`}
                        >
                          {custPhone.replace(/\D/g, "").length === 10
                            ? "✓ 10 Digits"
                            : `${custPhone.replace(/\D/g, "").length}/10`}
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#102A26] font-bold border-r border-[#E5E7EB] pr-1.5 pointer-events-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={custPhone}
                          onChange={(e) =>
                            setCustPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          placeholder="9876543210"
                          className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-14 pr-3 py-2.5 text-sm text-[#102A26] placeholder:text-[#94A3B8] outline-none font-mono tracking-wider focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-display text-xs text-[#102A26] font-medium mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={custEmail}
                        onChange={(e) => setCustEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#102A26] placeholder:text-[#94A3B8] outline-none focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs text-[#102A26] font-medium mb-1">
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={custAddress}
                      onChange={(e) => setCustAddress(e.target.value)}
                      placeholder="House/Flat No., Street, City, Pincode"
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#102A26] placeholder:text-[#94A3B8] outline-none focus:border-[#007F5F] focus:ring-1 focus:ring-[#007F5F]"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-xs text-[#102A26] font-medium mb-1">
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
                              ? "bg-[#007F5F] text-white border-[#007F5F] shadow-xs"
                              : "bg-[#FAFAF7] text-[#102A26] border-[#E5E7EB] hover:bg-[#DDF5EA]"
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
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-full bg-[#007F5F] hover:bg-[#005B46] py-3 text-sm font-bold text-white shadow-sm transition font-label disabled:opacity-50 cursor-pointer"
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
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF5EA] text-[#007F5F] border border-[#007F5F]/30">
                  <CheckCircle2 className="h-8 w-8 text-[#007F5F]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#102A26]">
                    Pickup & Cash Request Registered!
                  </h3>
                  <p className="font-mono text-sm font-bold text-[#007F5F] mt-1">
                    Ref Ticket: #{offerLockedId}
                  </p>
                  <p className="font-display text-xs text-[#6B7280] mt-2 max-w-sm mx-auto">
                    We've registered your {currentBrand.name} {modelName}. An operations technician will reach out to {custPhone} shortly to confirm the highest cash payout and coordinate free doorstep pickup.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setOfferLockedId(null);
                      setModelName("");
                      setPhoneImage("");
                      setImageFileName("");
                    }}
                    className="rounded-full bg-[#FAFAF7] hover:bg-[#DDF5EA] text-[#102A26] border border-[#E5E7EB] px-6 py-2.5 text-xs font-semibold transition cursor-pointer font-label"
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
