import React from "react";
import { Droplets, ZapOff, BatteryWarning, Image as ImageIcon } from "lucide-react";

export type PhoneState = "working" | "flawed" | "broken_screen" | "dead" | "water_damage";

interface PhoneIllustrationProps {
  state: PhoneState;
  className?: string;
}

export function PhoneIllustration({ state, className = "" }: PhoneIllustrationProps) {
  return (
    <div className={`relative aspect-[9/16] w-full max-w-[200px] mx-auto rounded-[32px] border-[6px] transition-all duration-500 ease-in-out shadow-2xl overflow-hidden ${
      state === "dead" 
        ? "border-neutral-800 bg-neutral-900" 
        : state === "broken_screen"
        ? "border-neutral-300 bg-white"
        : state === "water_damage"
        ? "border-blue-200 bg-blue-50"
        : "border-brand-300 bg-brand-50"
    } ${className}`}>
      
      {/* Screen Content */}
      <div className="absolute inset-0 p-4 flex flex-col items-center justify-center transition-opacity duration-500">
        {state === "working" && (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <div className="h-12 w-12 rounded-full bg-brand/20 flex items-center justify-center mb-4">
              <ImageIcon className="h-6 w-6 text-brand" />
            </div>
            <div className="w-24 h-2 bg-brand/20 rounded-full mb-2"></div>
            <div className="w-16 h-2 bg-brand/20 rounded-full"></div>
          </div>
        )}

        {state === "flawed" && (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 opacity-70">
             <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center mb-4">
              <BatteryWarning className="h-6 w-6 text-warning" />
            </div>
            <div className="w-24 h-2 bg-warning/20 rounded-full mb-2"></div>
            <div className="w-16 h-2 bg-warning/20 rounded-full"></div>
            {/* Scratches overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIyMCIgeTE9IjIwIiB4Mj0iNDAiIHkyPSI4MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iNjAiIHkxPSIzMCIgeDI9IjgwIiB5Mj0iOTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
          </div>
        )}

        {state === "broken_screen" && (
          <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-500">
            {/* Shattered glass lines SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-neutral-400 opacity-60 stroke-current stroke-1" preserveAspectRatio="none">
              <path d="M 50,0 L 40,30 L 0,40" fill="none" />
              <path d="M 40,30 L 60,60 L 100,50" fill="none" />
              <path d="M 60,60 L 45,100" fill="none" />
              <path d="M 40,30 L 20,80" fill="none" />
            </svg>
            <div className="bg-white/80 p-3 rounded-2xl backdrop-blur-sm relative z-10 border border-neutral-200">
              <span className="text-xs font-bold text-neutral-600">Cracked</span>
            </div>
          </div>
        )}

        {state === "water_damage" && (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Droplets className="h-10 w-10 text-blue-500 mb-3 animate-bounce" />
            <div className="w-24 h-2 bg-blue-200 rounded-full mb-2"></div>
            {/* Water wave at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-500/20 rounded-b-2xl"></div>
          </div>
        )}

        {state === "dead" && (
          <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500">
            <ZapOff className="h-10 w-10 text-neutral-600 mb-3" />
            <div className="px-3 py-1 bg-neutral-800 rounded-full border border-neutral-700">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">No Power</span>
            </div>
          </div>
        )}
      </div>

      {/* Notch / Camera Cutout */}
      <div className={`absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full transition-colors duration-500 ${
        state === "dead" ? "bg-neutral-800" : "bg-black"
      }`}></div>

      {/* Home Bar */}
      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full transition-colors duration-500 ${
        state === "dead" ? "bg-neutral-800" : "bg-neutral-300"
      }`}></div>
    </div>
  );
}
