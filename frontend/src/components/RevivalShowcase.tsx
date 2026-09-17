import React, { useState, useRef, useCallback } from "react";
import {
  Sparkles,
  SlidersHorizontal,
  Clock,
  CheckCircle2,
  AlertOctagon,
  Wrench,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  device: string;
  issue: string;
  symptoms: string[];
  repairsMade: string[];
  timeTaken: string;
  costSaved: number;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeBg: string;
  afterBg: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Liquid Submersion & Shattered Glass",
    device: "iPhone 15 Pro Max",
    issue: "Full Saltwater Infiltration + Crushed OLED",
    symptoms: [
      "Zero boot response / Black screen",
      "Corrosion on VDD_MAIN power rail",
      "Sapphire camera ring smashed",
    ],
    repairsMade: [
      "Ultrasonic de-salinization cleanroom bath",
      "Replaced Power IC & Tristar chip",
      "OEM 120Hz Super Retina XDR replacement",
      "IP68 waterproof seal re-vulcanized",
    ],
    timeTaken: "48 mins",
    costSaved: 85000,
    beforeLabel: "DEAD / SMASHED",
    afterLabel: "REVIVED & MINT",
    beforeDesc: "Completely unresponsive. Apple Store quoted ₹1,19,900 replacement.",
    afterDesc: "Revived with 100% data intact and fresh 100% battery health.",
    beforeBg: "from-red-950/80 via-zinc-950 to-black",
    afterBg: "from-amber-950/80 via-zinc-900 to-black",
  },
  {
    id: "case-2",
    title: "Run Over by Car & Bent Chassis",
    device: "Samsung Galaxy S24 Ultra",
    issue: "Crushed Dynamic AMOLED & Bent Frame",
    symptoms: [
      "Flickering green line glitch",
      "Digitizer dead across bottom 70%",
      "Titanium bezel bent by 4.2mm",
    ],
    repairsMade: [
      "Precision frame realignment & cold press",
      "Genuine Samsung Gorilla Armor AMOLED installed",
      "Periscope telephoto lens recalibration",
      "S-Pen digitizer coil replace",
    ],
    timeTaken: "38 mins",
    costSaved: 72000,
    beforeLabel: "CRUSHED OLED",
    afterLabel: "PRISTINE TITANIUM",
    beforeDesc: "Unusable touch screen with deep structural chassis deformation.",
    afterDesc: "Flawless touch, calibrated HDR color gamut, perfect stylus tracking.",
    beforeBg: "from-purple-950/80 via-zinc-950 to-black",
    afterBg: "from-indigo-950/80 via-zinc-900 to-black",
  },
  {
    id: "case-3",
    title: "NAND Flash Panic & Bootloop",
    device: "Google Pixel 8 Pro",
    issue: "Dead Logic Board Short Circuit",
    symptoms: [
      "Stuck on Google logo loop",
      "Short circuit on Tensor G3 power line",
      "Thermal sensor failure",
    ],
    repairsMade: [
      "Cleanroom microscopic soldering",
      "NAND memory chip re-balling",
      "Thermal paste & graphite dissipation replaced",
      "Tensor G3 power management reflow",
    ],
    timeTaken: "55 mins",
    costSaved: 58000,
    beforeLabel: "BOOTLOOP BRICK",
    afterLabel: "100% OPERATIONAL",
    beforeDesc: "Constant rebooting and overheating. Customer was told data was lost.",
    afterDesc: "Zero data lost, all photos recovered, runs smooth and cool.",
    beforeBg: "from-blue-950/80 via-zinc-950 to-black",
    afterBg: "from-emerald-950/80 via-zinc-900 to-black",
  },
];

export function RevivalShowcase() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentCase: CaseStudy = CASE_STUDIES[activeCaseIndex] ?? CASE_STUDIES[0]!;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClickOnTrack = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Glow highlight */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent font-label border border-accent/30">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Interactive Revival Comparison Lab
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            See the Magic: Drag Before & After
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Drag the chrome slider left and right to inspect real phone revivals
            carried out on our micro-soldering and cleanroom benches.
          </p>
        </div>

        {/* Case Studies Selector */}
        <div className="flex flex-wrap gap-2">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold font-display border transition cursor-pointer ${
                activeCaseIndex === idx
                  ? "bg-white text-ink border-white shadow-md font-bold"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              Case #{idx + 1}: {c.device.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Showcase */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-12 mt-8 items-center">
        {/* Left Column: Interactive Slider Canvas */}
        <div className="lg:col-span-7">
          <div
            ref={containerRef}
            onClick={handleClickOnTrack}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/20 shadow-2xl"
          >
            {/* "After" Layer (Background) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentCase.afterBg} flex flex-col justify-between p-6 sm:p-8`}
            >
              <div className="flex justify-end">
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 font-label text-xs font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  {currentCase.afterLabel}
                </span>
              </div>
              <div className="text-right max-w-xs ml-auto">
                <p className="font-label text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  Post-Revival Result
                </p>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  {currentCase.device}
                </h4>
                <p className="font-display text-xs text-white/75 mt-1">
                  {currentCase.afterDesc}
                </p>
              </div>
            </div>

            {/* "Before" Layer (Clipped Foreground) */}
            <div
              style={{ width: `${sliderPos}%` }}
              className={`absolute inset-y-0 left-0 bg-gradient-to-br ${currentCase.beforeBg} overflow-hidden border-r-2 border-white/80 flex flex-col justify-between p-6 sm:p-8 transition-[width] duration-75`}
            >
              <div>
                <span className="rounded-full bg-red-500/20 px-3 py-1 font-label text-xs font-bold text-red-400 border border-red-500/30 flex items-center gap-1.5 w-fit">
                  <AlertOctagon className="h-3.5 w-3.5" />
                  {currentCase.beforeLabel}
                </span>
              </div>
              <div className="max-w-xs min-w-[220px]">
                <p className="font-label text-xs text-red-400 font-bold uppercase tracking-wider">
                  Initial Condition
                </p>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  {currentCase.issue}
                </h4>
                <p className="font-display text-xs text-white/75 mt-1">
                  {currentCase.beforeDesc}
                </p>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 -ml-4 w-8 flex items-center justify-center pointer-events-none"
            >
              <div className="h-10 w-10 rounded-full chrome-plate flex items-center justify-center text-ink shadow-2xl ring-2 ring-white/50">
                <SlidersHorizontal className="h-4 w-4" />
              </div>
            </div>

            {/* Hint overlay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-label text-white/70 backdrop-blur-md pointer-events-none border border-white/10">
              👈 Drag slider to compare 👉
            </div>
          </div>
        </div>

        {/* Right Column: Lab Diagnostics & Replaced Parts */}
        <div className="lg:col-span-5 rounded-2xl bg-black/40 p-6 border border-white/10 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-label text-xs text-accent font-bold uppercase">
                Case Study #{activeCaseIndex + 1}
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                {currentCase.title}
              </h4>
            </div>
            <div className="text-right">
              <span className="font-label text-xs text-white/50 block">
                Turnaround Time
              </span>
              <span className="font-display text-sm font-bold text-emerald-400 flex items-center gap-1 justify-end">
                <Clock className="h-3.5 w-3.5" />
                {currentCase.timeTaken}
              </span>
            </div>
          </div>

          {/* Damage Symptoms */}
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-wider text-red-400 block mb-2">
              ⚠️ Diagnostic Bench Findings:
            </span>
            <ul className="space-y-1.5 font-display text-xs text-white/70">
              {currentCase.symptoms.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Repairs Completed */}
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              🛠️ Micro-Fixes Executed:
            </span>
            <ul className="space-y-1.5 font-display text-xs text-white/90">
              {currentCase.repairsMade.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value saved banner */}
          <div className="rounded-xl bg-accent/10 border border-accent/20 p-3.5 flex items-center justify-between font-display text-xs">
            <div>
              <span className="text-white/70 block">
                Customer Saved vs New Device:
              </span>
              <span className="font-display text-xl font-bold text-accent">
                +₹{currentCase.costSaved.toLocaleString("en-IN")}
              </span>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-accent font-label transition"
            >
              Revive Yours →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
