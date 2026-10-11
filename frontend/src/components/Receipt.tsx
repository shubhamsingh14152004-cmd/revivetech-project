import React from "react";
import { PhoneState } from "./PhoneIllustration";
import { getConditionLabel } from "../content/conditions";

interface ReceiptProps {
  brandName: string;
  model: string;
  storage: string;
  condition: PhoneState;
  hasBox: boolean;
  baseEstimate?: unknown;
}

export function Receipt({ brandName, model, storage, condition, hasBox }: ReceiptProps) {
  const conditionLabel = getConditionLabel(condition);

  return (
    <div className="mb-6 p-5 rounded-2xl bg-white border border-line shadow-sm relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-600"></div>
      
      <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Request summary</div>
      <div className="text-[15px] font-bold text-ink mb-1">{brandName} {model}</div>
      <div className="text-[13px] text-muted mb-4 border-b border-line pb-3">
        {storage}
      </div>

      <div className="space-y-2.5 mb-5 flex-1 text-[13px]">
        <div className="flex justify-between items-center">
          <span className="text-muted">Condition</span>
          <span className="font-semibold text-ink">{conditionLabel}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted">Box and charger</span>
          <span className="font-semibold text-ink">{hasBox ? "Yes" : "No"}</span>
        </div>
      </div>

      <div className="border-t border-line pt-4 bg-brand-50/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
        <p className="text-[13px] font-bold text-brand text-center">
          We will send your price on WhatsApp.
        </p>
      </div>
    </div>
  );
}
