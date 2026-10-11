import React from "react";
import { PhoneState } from "./PhoneIllustration";

interface ConditionSpectrumProps {
  value: PhoneState;
  onChange: (value: PhoneState) => void;
}

import { CONDITIONS } from "../content/conditions";
const conditions = CONDITIONS;

export function ConditionSpectrum({ value, onChange }: ConditionSpectrumProps) {
  return (
    <div 
      className="w-full relative" 
      role="radiogroup" 
      aria-label="Device Condition"
      onKeyDown={(e) => {
        const currentIndex = conditions.findIndex(c => c.id === value);
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          const next = conditions[(currentIndex + 1) % conditions.length];
          onChange(next.id);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          const prev = conditions[(currentIndex - 1 + conditions.length) % conditions.length];
          onChange(prev.id);
        }
      }}
    >
      {/* 4-stop Spectrum Track */}
      <div className="absolute top-6 left-6 right-6 h-1.5 bg-line rounded-full z-0 overflow-hidden">
        <div 
          className="absolute top-0 bottom-0 left-0 bg-brand transition-all duration-300 ease-in-out"
          style={{ width: `${(conditions.findIndex(c => c.id === value) / 3) * 100}%` }}
        />
      </div>

      <div className="relative z-10 flex justify-between">
        {conditions.map((condition, index) => {
          const isSelected = value === condition.id;
          const isPast = conditions.findIndex(c => c.id === value) >= index;

          return (
            <button
              key={condition.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(condition.id)}
              className="group flex flex-col items-center gap-2 focus-ring rounded-lg cursor-pointer"
            >
              {/* Stop Indicator */}
              <div 
                className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
                  isSelected 
                    ? "bg-brand border-white ring-2 ring-brand scale-125 shadow-md" 
                    : isPast 
                      ? "bg-brand border-brand" 
                      : "bg-white border-line group-hover:border-brand-300"
                }`}
              />
              {/* Label */}
              <div className="text-center">
                <span className={`block text-[13px] font-bold transition-colors ${
                  isSelected ? "text-ink" : "text-muted group-hover:text-ink"
                }`}>
                  {condition.shortLabel}
                </span>
                {isSelected && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-[11px] font-medium text-brand animate-in fade-in slide-in-from-top-1">
                    {condition.label}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      {/* Reserve space for the absolutely positioned description */}
      <div className="h-6" />
    </div>
  );
}
