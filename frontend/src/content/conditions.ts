export type PhoneConditionId = "working" | "flawed" | "broken_screen" | "dead";

export interface ConditionOption {
  id: PhoneConditionId;
  label: string; // The customer-facing label displayed on screen & sent in WhatsApp
  shortLabel: string; // Short indicator on the track stop
  desc: string; // Short explanation
}

export const CONDITIONS: ConditionOption[] = [
  {
    id: "dead",
    label: "Dead — will not power on",
    shortLabel: "Dead phone only",
    desc: "Buyback is for phones that will not turn on",
  },
];

const RAW_KEY_TO_LABEL: Record<string, string> = {
  working: "Like new, no marks",
  mint: "Like new, no marks",
  flawed: "Used, with scratches",
  worn: "Used, with scratches",
  broken_screen: "Cracked screen or body",
  cracked: "Cracked screen or body",
  dead: "Not turning on",
  water_damage: "Not turning on",
};

/**
 * Returns the exact customer-facing label from the condition key or label.
 * Guarantees that internal keys (working, mint, worn, etc.) never leak to messages.
 */
export function getConditionLabel(idOrKey?: string): string {
  if (!idOrKey) return "";
  const normalized = idOrKey.trim().toLowerCase();
  if (RAW_KEY_TO_LABEL[normalized]) {
    return RAW_KEY_TO_LABEL[normalized];
  }
  const match = CONDITIONS.find(
    (c) => c.id.toLowerCase() === normalized || c.label.toLowerCase() === normalized
  );
  if (match) return match.label;
  return idOrKey;
}
