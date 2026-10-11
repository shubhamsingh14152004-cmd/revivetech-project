import React, { useState, useMemo, useEffect } from "react";
import { PhoneIllustration, PhoneState } from "./PhoneIllustration";
import { ConditionSpectrum } from "./ConditionSpectrum";
import { Receipt } from "./Receipt";
import { brands } from "../content/brands";
import { getDevicesByBrand, DeviceData } from "../content/devices";
import { Smartphone, Check, ChevronsUpDown, Search, ArrowRight, Truck, CheckCircle2, Info } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "./ui/drawer";
import { waHref } from "../config/siteConfig";
import { toast } from "sonner";
import { api } from "../services/api";
import { useIsMobile } from "../hooks/use-mobile";

interface Device {
  brandId: string;
  name: string;
  series: string;
  variants: { storage: string }[];
  priceRanges?: {
    dead?: { min: number, max: number };
    cracked?: { min: number, max: number };
    worn?: { min: number, max: number };
    mint?: { min: number, max: number };
  };
}

export function TradeInCalculator({ 
  initialBrandId = "", 
  initialDevices = [] 
}: { 
  initialBrandId?: string;
  initialDevices?: Device[];
}) {
  const [step, setStep] = useState<number>(initialBrandId ? 2 : 1);
  const isMobile = useIsMobile();

  // Form State
  const [brandId, setBrandId] = useState<string>(initialBrandId);
  const [brandSearch, setBrandSearch] = useState<string>("");
  
  const [devices, setDevices] = useState<Device[]>(() => {
    if (initialDevices && initialDevices.length > 0) return initialDevices;
    if (initialBrandId) return getDevicesByBrand(initialBrandId);
    return [];
  });
  const [isLoadingDevices, setIsLoadingDevices] = useState(false);

  const [model, setModel] = useState<string>("");
  const [modelSearch, setModelSearch] = useState<string>("");
  const [modelOpen, setModelOpen] = useState(false);
  
  const [storage, setStorage] = useState<string>("");
  const [condition, setCondition] = useState<PhoneState>("working");
  const [hasBox, setHasBox] = useState<boolean>(false);

  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredBrands = useMemo(() => {
    if (!brandSearch) return brands;
    return brands.filter(b => b.name.toLowerCase().includes(brandSearch.toLowerCase()));
  }, [brandSearch]);

  useEffect(() => {
    if (initialBrandId && devices.length === 0) {
      const local = getDevicesByBrand(initialBrandId);
      if (local.length > 0) {
        setDevices(local);
      }
    }
  }, [initialBrandId, devices.length]);

  const fetchDevices = async (bId: string) => {
    setBrandId(bId);
    // Instant synchronous population so user never waits for dropdown models
    const local = getDevicesByBrand(bId);
    setDevices(local);
    setModel("");
    setStorage("");
    setStep(2);
    try {
      const res = await fetch(`/api/devices?brand=${bId}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setDevices(data.data);
        }
      }
    } catch (e) {
      // Gracefully retain local devices
    }
  };

  const selectedBrand = brands.find(b => b.id === brandId);
  const selectedDevice = devices.find(d => d.name.toLowerCase() === model.toLowerCase());

  const devicesBySeries = useMemo(() => {
    const grouped: Record<string, Device[]> = {};
    const filtered = modelSearch 
      ? devices.filter(d => d.name.toLowerCase().includes(modelSearch.toLowerCase()))
      : devices;

    filtered.forEach(d => {
      const s = d.series || "Other Models";
      if (!grouped[s]) grouped[s] = [];
      grouped[s].push(d);
    });
    return grouped;
  }, [devices, modelSearch]);

  const availableStorages = useMemo(() => {
    if (selectedDevice && selectedDevice.variants?.length) {
      return selectedDevice.variants.map((v: any) => v.storage);
    }
    return ["64GB", "128GB", "256GB", "512GB"];
  }, [selectedDevice]);

  useEffect(() => {
    if (availableStorages.length > 0 && !availableStorages.includes(storage) && selectedDevice) {
      setStorage(availableStorages[0]);
    }
  }, [availableStorages, storage, selectedDevice]);

  const getPriceRange = (): [number, number] | null => {
    if (!selectedDevice || !selectedDevice.priceRanges) return null;
    let rangeObj;
    if (condition === "working") rangeObj = selectedDevice.priceRanges.mint;
    else if (condition === "flawed") rangeObj = selectedDevice.priceRanges.worn;
    else if (condition === "broken_screen") rangeObj = selectedDevice.priceRanges.cracked;
    else rangeObj = selectedDevice.priceRanges.dead;

    if (!rangeObj || !rangeObj.min || !rangeObj.max) return null;

    const boxBonus = hasBox ? 300 : 0;
    return [rangeObj.min + boxBonus, rangeObj.max + boxBonus];
  };

  const estimate = getPriceRange();

  const handleNext = () => {
    if (step === 1 && !brandId) return toast.error("Select a brand");
    if (step === 2 && !model) return toast.error("Select a model");
    if (step === 2 && !storage) return toast.error("Select storage");
    setStep(s => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) return toast.error("Enter a valid 10-digit number");
    
    setIsSubmitting(true);
    try {
      await api.submitRepairRequest({
        customerName: name || "Customer",
        phoneNumber: phone,
        phoneBrand: selectedBrand?.name || brandId,
        phoneModel: `${model} (${storage})`,
        serviceType: "Sell Phone",
        problemDescription: `Condition: ${condition} | Box: ${hasBox ? "Yes" : "No"} | Est: ${estimate ? `₹${estimate[0]}-₹${estimate[1]}` : "Ask on WhatsApp"} | Pincode: ${pincode}`,
        preferredOption: "Doorstep Pickup"
      });
      toast.success("Request received! We will contact you shortly.");
      setStep(5);
    } catch (err: any) {
      toast.error(err.message || "Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fireAnalytics = () => {
    try {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_quote', {
          brand: selectedBrand?.name || brandId,
          model: model,
          condition: condition
        });
      }
    } catch (e) {}
  };

  const handleWhatsApp = () => {
    fireAnalytics();
    const yesno = hasBox ? "Yes" : "No";
    const brandName = selectedBrand?.name || brandId;
    const pinStr = pincode ? pincode : "Not provided";
    
    const msg = `Hi Revora, I want to sell my phone.\nPhone: ${brandName} ${model} (${storage})\nCondition: ${condition}\nBox and charger: ${yesno}\nPincode: ${pinStr}\nPlease share the price.`;
    window.open(waHref(msg), "_blank");
  };

  const ModelSelectorContent = (
    <Command>
      <CommandInput placeholder="Search models..." value={modelSearch} onValueChange={setModelSearch} />
      <CommandList>
        <CommandEmpty>
          <div className="p-4 text-center text-[13px] text-muted">
            Model not found. <br/>
            <button 
              onClick={() => { setModel(modelSearch); setModelOpen(false); }}
              className="text-brand font-bold mt-2"
            >
              My model isn't listed (Use "{modelSearch}")
            </button>
          </div>
        </CommandEmpty>
        {Object.entries(devicesBySeries).map(([series, items]) => (
          <CommandGroup key={series} heading={series}>
            {items.map((m) => (
              <CommandItem
                key={m.name}
                value={m.name}
                onSelect={() => {
                  setModel(m.name);
                  setModelOpen(false);
                }}
              >
                <Check className={`mr-2 h-4 w-4 ${model === m.name ? "opacity-100" : "opacity-0"}`} />
                {m.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandGroup heading="Other">
          <CommandItem
            value="custom"
            onSelect={() => {
              const val = prompt("Enter your model name:");
              if (val) {
                setModel(val);
                setModelOpen(false);
              }
            }}
          >
            <span className="text-brand font-medium">My model isn't listed...</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] border border-line shadow-sm overflow-hidden flex flex-col min-h-[500px]">
      
      {/* Header */}
      {step < 5 && (
        <div className="px-6 py-5 border-b border-line bg-background flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink">Get My Price</h2>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
            <span className={step >= 1 ? "text-brand" : ""}>Brand</span> •
            <span className={step >= 2 ? "text-brand" : ""}>Model</span> •
            <span className={step >= 3 ? "text-brand" : ""}>Value</span>
          </div>
        </div>
      )}

      {/* Step 1: Brand */}
      {step === 1 && (
        <div className="p-6 flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-2xl font-bold mb-4 text-ink">Select Brand</h3>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
            <input 
              type="text" 
              placeholder="Search brands..." 
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-line bg-background text-[15px] focus-ring"
            />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {filteredBrands.map(b => (
              <button
                key={b.id}
                onClick={() => fetchDevices(b.id)}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-line hover:border-brand bg-white hover:bg-brand-50 transition-colors focus-ring"
              >
                <div className="h-8 w-8 flex items-center justify-center mb-2">
                  <b.logo />
                </div>
                <span className="text-[12px] font-bold text-ink text-center leading-tight">{b.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Model & Storage */}
      {step === 2 && (
        <div className="p-6 flex-1 animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col">
          <button onClick={() => setStep(1)} className="text-[13px] font-semibold text-brand hover:underline mb-4 self-start">← Back to Brands</button>
          
          <h3 className="text-2xl font-bold mb-6 text-ink">Which {selectedBrand?.name}?</h3>
          
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-ink">Model Name</label>
              
              {isLoadingDevices ? (
                <div className="w-full h-[50px] rounded-xl bg-line/50 animate-pulse" />
              ) : isMobile ? (
                <Drawer open={modelOpen} onOpenChange={setModelOpen}>
                  <DrawerTrigger asChild>
                    <button className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-line bg-background focus-ring text-left">
                      <span className={`text-[15px] truncate ${model ? 'text-ink font-semibold' : 'text-muted'}`}>
                        {model || "Search for your model..."}
                      </span>
                      <ChevronsUpDown className="h-4 w-4 text-muted shrink-0" />
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
                    <button className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-line bg-background focus-ring text-left">
                      <span className={`text-[15px] truncate ${model ? 'text-ink font-semibold' : 'text-muted'}`}>
                        {model || "Search for your model..."}
                      </span>
                      <ChevronsUpDown className="h-4 w-4 text-muted shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                    {ModelSelectorContent}
                  </PopoverContent>
                </Popover>
              )}
            </div>

            {model && (
              <div className="space-y-2 animate-in fade-in duration-300">
                <label className="text-[13px] font-bold text-ink">Storage Capacity</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {availableStorages.map(s => (
                    <button
                      key={s}
                      onClick={() => setStorage(s)}
                      className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all border ${
                        storage === s 
                          ? "bg-ink text-white border-ink shadow-md" 
                          : "bg-background text-ink border-line hover:border-brand hover:text-brand"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      const val = prompt("Enter storage capacity (e.g. 512GB):");
                      if (val) setStorage(val.toUpperCase());
                    }}
                    className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all border bg-background text-ink border-line hover:border-brand hover:text-brand`}
                  >
                    Other...
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            disabled={!model || !storage}
            onClick={handleNext}
            className="w-full mt-8 py-4 rounded-2xl bg-brand text-white font-bold text-[15px] flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:bg-brand-700 focus-ring"
          >
            Continue
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Step 3: Condition & Receipt */}
      {step === 3 && (
        <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col md:flex-row">
          
          {/* Left: Interactive Tools */}
          <div className="p-6 flex-1 flex flex-col border-b md:border-b-0 md:border-r border-line bg-white">
            <button onClick={() => setStep(2)} className="text-[13px] font-semibold text-brand hover:underline mb-4 self-start">← Back to Model</button>
            
            <h3 className="text-xl font-bold mb-6 text-ink">Device Condition</h3>
            
            <PhoneIllustration state={condition} className="mb-10" />
            
            <ConditionSpectrum value={condition} onChange={setCondition} />

            <div className="mt-auto pt-8">
              <label className="flex items-start gap-3 p-4 rounded-2xl border border-line bg-background cursor-pointer hover:border-brand-300 transition-colors">
                <div className="pt-0.5">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasBox ? 'bg-brand border-brand' : 'bg-white border-line'}`}>
                    {hasBox && <Check className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <input type="checkbox" className="sr-only" checked={hasBox} onChange={e => setHasBox(e.target.checked)} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-ink">Original Box & Charger</span>
                    {estimate && <span className="text-[13px] font-bold text-brand">+₹300</span>}
                  </div>
                  <span className="text-[11px] text-muted">Increases your total payout</span>
                </div>
              </label>
            </div>
          </div>

          {/* Right: Receipt & Form */}
          <div className="p-6 w-full md:w-[320px] bg-background flex flex-col">
            
            <Receipt
              brandName={selectedBrand?.name || brandId}
              model={model}
              storage={storage}
              condition={condition}
              hasBox={hasBox}
              baseEstimate={estimate}
            />

            <form onSubmit={handleSubmit} className="mt-auto space-y-4">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-[13px] focus-ring"
                />
                <input
                  type="text"
                  placeholder="Pincode (Optional)"
                  value={pincode}
                  onChange={e => setPincode(e.target.value.replace(/\D/g, ''))}
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-[13px] focus-ring"
                />
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-bold text-ink border-r border-line pr-2">+91</span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full pl-16 pr-4 py-3 rounded-xl border border-line bg-white text-[13px] font-medium tracking-wide focus-ring"
                  />
                </div>
              </div>

              {/* Primary: WhatsApp */}
              <button 
                type="button" 
                onClick={handleWhatsApp}
                className="w-full py-3.5 rounded-xl bg-brand text-white font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-brand-700 transition-colors shadow-md focus-ring"
              >
                Ask price on WhatsApp
              </button>

              {/* Secondary: Book Pickup */}
              <button 
                type="submit" 
                disabled={isSubmitting || phone.length !== 10}
                className="w-full py-3 rounded-xl bg-white border border-line text-ink font-bold text-[13px] hover:bg-background transition-colors focus-ring disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    <Truck className="h-4 w-4" />
                    Book free pickup
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Step 5: Success */}
      {step === 5 && (
        <div className="p-10 flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-brand" />
          </div>
          <h3 className="text-3xl font-black text-ink mb-3">Request Confirmed!</h3>
          <p className="text-[15px] text-muted max-w-sm mb-8 leading-relaxed">
            Our team will contact you at <strong className="text-ink font-bold">+91 {phone}</strong> within 15 minutes to schedule your free doorstep pickup.
          </p>
          
          <button 
            onClick={() => { setStep(1); setPhone(""); setName(""); setPincode(""); }}
            className="px-6 py-3 rounded-full bg-background border border-line text-[13px] font-bold text-ink hover:bg-line transition-colors"
          >
            Sell Another Device
          </button>
        </div>
      )}

    </div>
  );
}

