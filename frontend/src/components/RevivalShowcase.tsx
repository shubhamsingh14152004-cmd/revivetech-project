import React, { useState, useRef, useCallback } from "react";
import {
  Sparkles,
  SlidersHorizontal,
  Clock,
  CheckCircle2,
  AlertOctagon,
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
    issue: "Saltwater Infiltration + Crushed OLED",
    symptoms: ["Zero boot response", "Corrosion on VDD_MAIN", "Camera ring smashed"],
    repairsMade: ["Ultrasonic de-salinization", "Replaced Power IC", "OEM 120Hz Super Retina", "IP68 seal re-vulcanized"],
    timeTaken: "48 mins",
    costSaved: 85000,
    beforeLabel: "DEAD / SMASHED",
    afterLabel: "REVIVED & MINT",
    beforeDesc: "Completely unresponsive. Apple quoted ₹1,19,900.",
    afterDesc: "Revived with 100% data intact and fresh 100% battery.",
    beforeBg: "from-red-950/80 via-zinc-950 to-black",
    afterBg: "from-amber-950/80 via-zinc-900 to-black",
  },
  {
    id: "case-2",
    title: "Run Over by Car & Bent Chassis",
    device: "Galaxy S24 Ultra",
    issue: "Crushed AMOLED & Bent Frame",
    symptoms: ["Green line glitch", "Digitizer dead", "Titanium bezel bent"],
    repairsMade: ["Precision frame realignment", "Genuine Gorilla Armor AMOLED", "Telephoto recalibration", "S-Pen coil replace"],
    timeTaken: "38 mins",
    costSaved: 72000,
    beforeLabel: "CRUSHED OLED",
    afterLabel: "PRISTINE TITANIUM",
    beforeDesc: "Unusable touch screen with deep structural deformation.",
    afterDesc: "Flawless touch, calibrated HDR gamut, perfect stylus tracking.",
    beforeBg: "from-purple-950/80 via-zinc-950 to-black",
    afterBg: "from-indigo-950/80 via-zinc-900 to-black",
  },
  {
    id: "case-3",
    title: "NAND Flash Panic & Bootloop",
    device: "Google Pixel 8 Pro",
    issue: "Dead Logic Board Short Circuit",
    symptoms: ["Stuck on Google logo", "Short on power line", "Thermal sensor failure"],
    repairsMade: ["Microscopic soldering", "NAND memory re-balling", "Thermal paste replaced", "Power management reflow"],
    timeTaken: "55 mins",
    costSaved: 58000,
    beforeLabel: "BOOTLOOP BRICK",
    afterLabel: "100% OPERATIONAL",
    beforeDesc: "Constant rebooting and overheating. Data assumed lost.",
    afterDesc: "Zero data lost, all photos recovered, runs smooth and cool.",
    beforeBg: "from-blue-950/80 via-zinc-950 to-black",
    afterBg: "from-emerald-950/80 via-zinc-900 to-black",
  },
];

export function RevivalShowcase() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentCase = CASE_STUDIES[activeCaseIndex] ?? CASE_STUDIES[0]!;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => (isDragging.current = true);
  const handleMouseUp = () => (isDragging.current = false);
  const handleMouseMove = (e: React.MouseEvent) => isDragging.current && handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => e.touches[0] && handleMove(e.touches[0].clientX);
  const handleClickOnTrack = (e: React.MouseEvent) => handleMove(e.clientX);

  return (
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 border border-line shadow-sm overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-line pb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <SlidersHorizontal className="h-4 w-4" /> Lab Case Studies
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">See the Magic: Drag Before & After</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Drag the chrome slider left and right to inspect real phone repairs carried out on our micro-soldering benches.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => { setActiveCaseIndex(idx); setSliderPos(50); }}
              className={`rounded-xl px-5 py-2.5 text-[14px] font-bold transition focus-ring min-h-[48px] border ${
                activeCaseIndex === idx ? "bg-ink text-white border-ink shadow-md" : "bg-white text-ink border-line hover:border-brand-300"
              }`}
            >
              Case #{idx + 1}: {c.device.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 mt-8 items-center animate-in fade-in duration-300">
        <div className="lg:col-span-7">
          <div
            ref={containerRef}
            onClick={handleClickOnTrack}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden cursor-ew-resize select-none border border-line shadow-md"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${currentCase.afterBg} flex flex-col justify-between p-8`}>
              <div className="flex justify-end">
                <span className="rounded-full bg-emerald-500/20 px-4 py-1.5 text-[13px] font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-2 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" /> {currentCase.afterLabel}
                </span>
              </div>
              <div className="text-right max-w-[280px] ml-auto">
                <p className="text-[13px] text-emerald-400 font-bold uppercase tracking-wider mb-1">Post-Repair</p>
                <h4 className="text-2xl font-black text-white">{currentCase.device}</h4>
                <p className="text-[14px] text-white/80 mt-2 leading-relaxed">{currentCase.afterDesc}</p>
              </div>
            </div>

            <div
              style={{ width: `${sliderPos}%` }}
              className={`absolute inset-y-0 left-0 bg-gradient-to-br ${currentCase.beforeBg} overflow-hidden border-r-2 border-white/80 flex flex-col justify-between p-8 transition-[width] duration-75`}
            >
              <div>
                <span className="rounded-full bg-red-500/20 px-4 py-1.5 text-[13px] font-bold text-red-400 border border-red-500/30 flex items-center gap-2 w-fit backdrop-blur-sm">
                  <AlertOctagon className="h-4 w-4" /> {currentCase.beforeLabel}
                </span>
              </div>
              <div className="max-w-[280px] min-w-[280px]">
                <p className="text-[13px] text-red-400 font-bold uppercase tracking-wider mb-1">Initial Damage</p>
                <h4 className="text-2xl font-black text-white">{currentCase.issue}</h4>
                <p className="text-[14px] text-white/80 mt-2 leading-relaxed">{currentCase.beforeDesc}</p>
              </div>
            </div>

            <div style={{ left: `${sliderPos}%` }} className="absolute top-0 bottom-0 -ml-5 w-10 flex items-center justify-center pointer-events-none">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-ink shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-line">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-md pointer-events-none border border-white/20 tracking-wide uppercase">
              Drag to compare
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl bg-background p-8 border border-line shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-line/50 pb-5">
            <div>
              <span className="text-[13px] text-brand font-bold uppercase tracking-wider block mb-1">Case Study #{activeCaseIndex + 1}</span>
              <h4 className="text-xl font-bold text-ink">{currentCase.title}</h4>
            </div>
            <div className="text-right">
              <span className="text-[13px] text-muted font-bold block uppercase tracking-wider mb-1">Turnaround</span>
              <span className="text-[15px] font-black text-brand flex items-center gap-1.5 justify-end"><Clock className="h-4 w-4" /> {currentCase.timeTaken}</span>
            </div>
          </div>

          <div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-rose-600 block mb-3">️ Diagnostic Findings:</span>
            <ul className="space-y-2 text-[14px] font-medium text-ink">
              {currentCase.symptoms.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span className="leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-brand block mb-3">️ Micro-Fixes Executed:</span>
            <ul className="space-y-2 text-[14px] font-medium text-ink">
              {currentCase.repairsMade.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span className="leading-snug">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-brand-50 border border-brand-200 p-5 flex items-center justify-between shadow-sm mt-4">
            <div>
              <span className="text-[13px] text-brand uppercase font-bold tracking-wider block mb-1">Customer Saved:</span>
              <span className="text-2xl font-black text-brand">+₹{currentCase.costSaved.toLocaleString("en-IN")}</span>
            </div>
            <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-ink hover:text-brand px-5 py-3 text-[14px] font-bold transition border border-line shadow-sm focus-ring">
              Revive Yours <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
