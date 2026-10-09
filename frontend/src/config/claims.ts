export type Claim = {
 id: string;
 text: string;
 status: "verified" | "unverified";
 evidence?: string;
 scope?: string;
};

// Seed claims all set to unverified. 
// Owner flips to verified once evidence is provided.
export const claims: Record<string, Claim> = {
 free_pickup: {
 id: "free_pickup",
 text: "Free pickup for phone sales",
 status: "unverified", // TODO(owner): verify
 scope: "from serviceAreas",
 },
 upi_payout: {
 id: "upi_payout",
 text: "Payment by UPI after inspection",
 status: "unverified", // TODO(owner): verify
 },
 buys_dead_phones: {
 id: "buys_dead_phones",
 text: "We buy phones that do not turn on",
 status: "unverified", // TODO(owner): verify
 },
 repair_warranty_90: {
 id: "repair_warranty_90",
 text: "90-day warranty on repairs",
 status: "unverified", // TODO(owner): verify
 },
 data_wipe_nist: {
 id: "data_wipe_nist",
 text: "Data wiped to NIST 800-88 before resale or recycling",
 status: "unverified", // TODO(owner): verify
 },
 repair_time_45: {
 id: "repair_time_45",
 text: "Most screen and battery repairs done in about 45 minutes",
 status: "unverified", // TODO(owner): verify
 scope: "doorstep, Mumbai",
 },
 doorstep_repair: {
 id: "doorstep_repair",
 text: "Doorstep repair",
 status: "unverified", // TODO(owner): verify
 scope: "from serviceAreas",
 },
 mailin_kit: {
 id: "mailin_kit",
 text: "Prepaid mail-in kit",
 status: "unverified", // TODO(owner): verify
 scope: "outside pickup area",
 },
 response_time: {
 id: "response_time",
 text: "We reply on WhatsApp within {X} minutes", // TODO(owner): supply X and verify
 status: "unverified",
 },
};

export function claim(id: keyof typeof claims): string | null {
 const c = claims[id];
 if (!c) return null;
 
 if (process.env.NODE_ENV !== "production") {
 // In development, we return the text so it can be seen and styled as unverified
 return c.text;
 }
 
 return c.status === "verified" ? c.text : null;
}
