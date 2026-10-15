import { PhoneState } from "./PhoneIllustration";

interface ConditionSpectrumProps {
  value: PhoneState;
  onChange: (value: PhoneState) => void;
}

import { CONDITIONS } from "../content/conditions";
const conditions = CONDITIONS;

export function ConditionSpectrum({ value, onChange }: ConditionSpectrumProps) {
  return (
    <div className="w-full rounded-2xl border border-brand/30 bg-brand/5 p-4" role="radiogroup" aria-label="Buyback eligibility">
      <p className="font-bold text-ink">Dead phones only</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Revora buys phones that will not power on. Working phones, even if old or damaged, are not eligible for buyback.
      </p>
      <button
        type="button"
        role="radio"
        aria-checked={value === "dead"}
        onClick={() => onChange("dead")}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand/30 focus-ring"
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />
        {conditions[0].shortLabel}
      </button>
    </div>
  );
}
