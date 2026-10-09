# 04 Voice, claims, and copy

## Voice
Plain, specific, calm, second person. Short sentences. Grade 7 to 8 reading level. Indian English: rupee sign, lakh/crore grouping via `Intl.NumberFormat("en-IN")`, "UPI", "pickup". Name the thing, give the number, state the condition. No hype.
Hinglish appears only in the labelled FAQ toggle and optionally in WhatsApp message templates.

## Claims registry (`src/config/claims.ts`)
Single source of truth. Components may only render a claim through `claim("id")`; never type a claim into JSX.
```ts
type Claim = {
  id: string;
  text: string;           // exact public wording
  status: "verified" | "unverified";
  evidence?: string;      // owner note: invoice, policy page, process doc
  scope?: string;         // where it applies, e.g. "Mumbai, Navi Mumbai, Thane"
};
```
Seed with these, all `unverified`, owner flips to `verified` (in production, unverified claims render nothing and the layout collapses cleanly; in development they render with a visible "unverified" outline):
- `free_pickup` Free pickup for phone sales (scope: from `serviceAreas`)
- `upi_payout` Payment by UPI after inspection
- `buys_dead_phones` We buy phones that do not turn on
- `repair_warranty_90` 90-day warranty on repairs
- `data_wipe_nist` Data wiped to NIST 800-88 before resale or recycling
- `repair_time_45` Most screen and battery repairs done in about 45 minutes (scope: doorstep, Mumbai)
- `doorstep_repair` Doorstep repair (scope: from `serviceAreas`, fee from config)
- `mailin_kit` Prepaid mail-in kit (scope: outside pickup area)
- `response_time` We reply on WhatsApp within {X} minutes (owner supplies X; otherwise remove)
Do NOT seed or render: "same-day", "within 24hrs", "15-minute guaranteed", "100%", "80%+ fixed", "OEM AMOLED/True Tone on all brands", "cleanroom", "master technicians", any rating, any customer count, any total paid out.
If the owner confirms parts quality, add one precise claim per brand family instead of a blanket "OEM" statement.

## Banned phrases (`npm run check:claims` fails if found in `src/` or `public/llms*.txt`)
`100%`, `guaranteed`, `guarantee` (except inside the warranty policy text), `VIP`, `cleanroom`, `master tech`, `harvest`, `sapphire`, `True Tone`, `Revival`, `Revivals`, `Free Perks`, `Smart `, `AI-powered`, `AI Dead-Phone`, `Ask AI`, `seamless`, `cutting-edge`, `revolutionary`, `premium`, `unlock`, `supercharge`, `elevate`, `next-gen`, `world-class`, `best in`, `#1`, `top cash` (use "a fair price, shown before you book"), `instant cash` (use "paid by UPI after inspection"), `Sagar Tech`, `ReviveTech`, and any emoji code point.
The script prints file, line, and the phrase. It also flags any digit-based stat ("12,400", "2.5L", "4.9") not coming from `claims.ts`.

## Rewrite examples (apply the pattern across the site)
| Before (live site) | After |
|---|---|
| Sell old mobile phones, & repair your phone. | Sell your phone or get it fixed. We come to you. |
| Yes, 100%! Even if your phone has suffered severe liquid damage... our cleanroom technicians harvest undamaged OEM components... | Yes. We buy phones that do not turn on, including water-damaged ones. You see an estimate before you book pickup, and the final price is confirmed after inspection. |
| Primary VDD rail shorted or battery at 0V protection lock. | The phone is not charging the battery at all. A different cable and 30 minutes on a charger sometimes wakes it. |
| Smart Phone Revival Troubleshooter | Phone won't turn on? Find out what to do |
| Calculate Used & Dead Phone Payout Value | What is your phone worth? |
| Request Free Doorstep Pickup & Cash | Book free pickup |
| Special Perk: Free Glass Protector & Cover on Every Phone Repair! | (Only if verified: "A screen protector and case come with every repair.") |
| Request a Custom VIP Tech Quote | Have many phones or a rare model? Message us on WhatsApp. |

## Microcopy
- Buttons: "Get my price", "Book pickup", "Book repair", "Check my pincode", "Send on WhatsApp", "Track my request", "Continue", "Back".
- Errors say what to do: "Enter a 10-digit mobile number." "We could not send your request. Check your connection and try again."
- Empty search: "No match. Ask us on WhatsApp and we will check."
- Success: "Request received. Your reference is RT-1234. We will WhatsApp you shortly." (use the real response-time claim only if verified)
- Toasts: one line, no emoji, optional action.

## Testimonials
Data file only (`src/content/testimonials.ts`). Production renders the section only when at least 3 entries have `isPlaceholder: false`. Each real entry: first name and initial, city, service, device, quote under 25 words, date, optional Google review URL. No invented people, no stock avatars. Aggregate rating text is computed from real entries only; omit when fewer than 5 reviews.
