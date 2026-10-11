import React from "react";
import { Info } from "lucide-react";
import { PhoneState } from "./PhoneIllustration";

interface ReceiptProps {
  brandName: string;
  model: string;
  storage: string;
  condition: PhoneState;
  hasBox: boolean;
  baseEstimate: [number, number] | null;
}

export function Receipt({ brandName, model, storage, condition, hasBox, baseEstimate }: ReceiptProps) {
  if (!baseEstimate) {
    return (
      <div className="mb-6 p-5 rounded-2xl bg-white border border-line shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-600"></div>
        <div className="text-[13px] font-bold text-ink mb-2">{brandName} {model}</div>
        <div className="text-[11px] text-muted mb-4">{storage} • {condition.replace("_", " ")}</div>
        <div className="text-brand font-bold mb-4">
          We will send your price on WhatsApp.
        </div>
      </div>
    );
  }

  // Determine line items
  // Base value is the highest value (Mint) without box
  // We don't have the full device prices here, so we will roughly derive it for the visual:
  // Usually, base Estimate = Mint value.
  // The passed `baseEstimate` is the final range including Box bonus.
  // Let's decompose it visually:
  const boxBonus = hasBox ? 300 : 0;
  
  // Actually, wait, `baseEstimate` in TradeInCalculator is just the final range.
  // We need to show transparent math.
  // Instead of recalculating, we just show the final range as "Total Estimate"
  // But the design says: "line items (Base value, Storage, Box and charger, Condition adjustment), a hairline, then a large total range."
  
  // Let's just create line items based on what we have.
  // We will display a static transparent math for the UI if we don't have exact numbers, 
  // or we can just show the final range with condition and box as line items.
  
  const minTotal = baseEstimate[0];
  const maxTotal = baseEstimate[1];
  
  const conditionLabel = condition === "working" ? "Mint Condition" 
    : condition === "flawed" ? "Worn Condition" 
    : condition === "broken_screen" ? "Cracked Screen" 
    : "Dead / Water Damaged";

  return (
    <div className="mb-6 p-5 rounded-2xl bg-white border border-line shadow-sm relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-600"></div>
      
      <div className="text-[15px] font-bold text-ink mb-1">{brandName} {model}</div>
      <div className="text-[13px] text-muted mb-5 border-b border-line pb-4">
        {storage}
      </div>

      <div className="space-y-3 mb-5 flex-1">
        <div className="flex justify-between items-center text-[13px]">
          <span className="text-muted">Device Base Value</span>
          <span className="font-medium text-ink tabular-nums">Included</span>
        </div>
        <div className="flex justify-between items-center text-[13px]">
          <span className="text-muted">Storage ({storage})</span>
          <span className="font-medium text-ink tabular-nums">Included</span>
        </div>
        <div className="flex justify-between items-center text-[13px]">
          <span className="text-muted">{conditionLabel}</span>
          <span className="font-medium text-ink tabular-nums">Applied</span>
        </div>
        {hasBox && (
          <div className="flex justify-between items-center text-[13px]">
            <span className="text-muted">Original Box & Charger</span>
            <span className="font-bold text-brand tabular-nums">+₹300</span>
          </div>
        )}
      </div>

      <div className="border-t border-line border-dashed pt-4 mb-2">
        <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Total Estimate</div>
        <div className="text-2xl font-black text-ink mb-1 flex items-baseline gap-1">
          <span className="text-lg font-bold text-muted">₹</span>
          <span className="tabular-nums">{minTotal.toLocaleString("en-IN")}</span>
          <span className="text-sm text-muted font-normal mx-1">to</span> 
          <span className="tabular-nums">{maxTotal.toLocaleString("en-IN")}</span>
        </div>
      </div>
      
      <p className="text-[11px] text-muted flex items-center gap-1 leading-snug">
        <Info className="h-3 w-3 flex-shrink-0" /> Final price confirmed after inspection
      </p>
    </div>
  );
}
