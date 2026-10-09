# 02 Interaction: tools people actually use

Interactive means the page responds to the user and gives them something useful (a price, a verdict, a booked slot, a faster way to navigate). No gimmicks.

## Rules for every tool
- Numbers come from `src/content/prices.ts` (seed from the existing `SUPPORTED_BRANDS` values, flag `TODO(owner): verify`). Never fake scarcity ("only 2 slots left"), fake counts, or fake live activity.
- State lives in the URL (`validateSearch` + zod) so any result is shareable and survives refresh. Also keep it in memory on back/forward.
- Server-render a static shell with the tool's heading, one-paragraph description and a short "how it works" so crawlers see content. The interactive part hydrates lazily (`React.lazy`, `Suspense`, skeleton of the same height, so CLS is 0).
- Each tool has: keyboard support, `aria-live="polite"` result, focus moves to the new step heading, inline validation, error state with retry, success state with next steps.
- Handoff everywhere: "Send on WhatsApp" builds a prefilled message with the user's selections via `waHref()`.
- Analytics: `tool_start`, `tool_step`, `tool_result`, `tool_submit`, `whatsapp_handoff` via `lib/analytics.ts`.
- Estimates are labelled "Estimate. Final price confirmed after inspection."

## Priorities
P0 (must ship): T1, T2, T4, T6, T10, T11. P1 (ship if P0 passes QA): T3, T5, T7, T8, T9.

## T1 Hero estimator ("Get my price")  [P0]
Where: homepage hero, `/sell-phone`, and every sell page (compact variant).
Flow, single card, one question per step on mobile, all steps visible as a compact summary on desktop:
1. Brand: logo tiles (real SVG marks) in a 3-column grid on mobile, with a search field.
2. Model: combobox (cmdk) with suggestions from `prices.ts`; free text allowed. Storage as segmented pills.
3. Condition: the Condition Spectrum with live Phone illustration.
4. Receipt: animated total range, line items, "Box and charger adds Rs X" toggle that updates the total instantly.
5. Contact: 10-digit mobile, optional name, button "Book free pickup" and secondary "Send on WhatsApp".
Success: replace the form with a confirmation, the ticket number, the Next-steps timeline, and a "Track this request" link.
Edge cases: unknown model shows a range for the brand with the sentence "Exact price after you tell us the model on WhatsApp"; photos are optional and never block; show payload errors from the API in plain words.

## T2 Repair estimator + slot booking  [P0]
Where: `/repair` and every repair page (compact variant).
Flow: Brand and model, then Issue chips (Screen, Battery, Charging port, Water damage, Camera, Not sure), then a result card: price range, typical time, warranty (from claims), parts-quality statement (from claims). Then Pincode check (T5), then Date strip (next 7 days) and Time window chips (from `siteConfig.slots`), then contact, then confirmation.
Doorstep fee shown as a clear line item from `siteConfig.doorstepFee`. If the fee is 0 show "Free pickup and drop"; if not, show the amount before the user commits. Never hide it.
"Not sure" routes to T4.

## T3 Fix or sell?  [P1]
Route `/fix-or-sell`. Inputs: model, main issue, rough age. Output: a plain verdict ("Repair it", "Sell it", "Either works") with the two numbers side by side (repair cost vs sell value) and the one-sentence reason. Shareable URL. Both CTAs prefilled. This page doubles as an answer-engine target for "should I repair or sell my phone".

## T4 "Phone won't turn on?" checker  [P0]
Route `/phone-not-turning-on` (also linked from sell-dead-phone and dead-phone-repair).
Replace the existing wizard. 4 to 5 plain-language questions, for example: Does it vibrate or show any light when plugged in for 30 minutes? Did it get wet? Did it fall? Is the battery swollen? Does it show the logo then restart?
Result screen: "Most likely cause" in everyday words, "What you can safely try at home" (3 steps, safe only: different cable and adapter, 30-minute charge, hold power and volume buttons per brand), "What we would do" (repair or sell, with the T3 comparison), prefilled CTAs.
Rules: no jargon, no probabilities or percentages, no emojis, no "AI" label. Include a safety line for a swollen or hot battery: stop using the phone.

## T5 Pincode check  [P1]
Header chip and inside T2: input of 6 digits, instant result from `siteConfig.serviceablePincodes` (prefix list). Results: "Pickup available in 400001", or "Not in our pickup area yet. Use the prepaid mail-in kit or chat on WhatsApp." Persist the pincode in localStorage (try/catch). Resolve the Mumbai vs India scope through this config, never through copy.

## T6 Command palette  [P0]
Cmd/Ctrl+K, "/" key, and a search icon on mobile (opens a full-height drawer). cmdk. Index built from content files: every route, every brand, every service, every FAQ question, plus actions (Get my price, Book repair, Call, WhatsApp, Track request). Recent items. Highlight matches. Results are real links.

## T7 Track my request  [P1]
Ticket number + last 4 digits of phone. Backend: add a public `GET /api/repairs/track/:ticket?last4=` that returns status, last-updated, and next step only. Rate-limit it. Timeline UI with the current step highlighted. If you cannot finish it in under 40 lines of backend code, remove the tracker and say so.

## T8 Scroll-driven How it works  [P1]
Desktop: left column sticky step list that highlights as you scroll the right column (IntersectionObserver). Mobile: vertical timeline with the line drawing on scroll. Tabs for Sell and Repair. Replace the 3 numbered circles.

## T9 FAQ search and language toggle  [P1]
Search-as-you-type filter with highlighted matches and "no results, ask on WhatsApp". English / Hinglish toggle (the existing Hinglish content moves here). Each question has a copy-link anchor. FAQ content is always in the HTML (collapsed with `<details>` semantics or Accordion that keeps content in the DOM).

## T10 Reactive illustration  [P0]
The Phone illustration reacts to Condition Spectrum, to the T4 answers (dark when "no response", water droplet motif when wet), and to the T2 issue chip (cracked screen, battery icon, port). One component, 4 to 6 states, CSS-variable themed.

## T11 Price guide table  [P0]
Route `/phone-buyback-price-india`. A sortable, filterable table (brand filter chips, condition toggle, search) built from `prices.ts`. Columns: Model, Storage, Dead, Cracked, Worn, Mint (ranges). Mobile: rows become cards with a condition switcher. Each row has "Get exact price" which opens T1 prefilled. Visible "Last updated {date}" and a "How we price" paragraph. Server-render the full table in HTML (progressive enhancement adds sort and filter). This is the site's main citable data asset (see 03).

## Shared primitives to build once
`useUrlState`, `Stepper`, `SegmentedControl`, `ConditionSpectrum`, `PhoneIllustration`, `Receipt`, `BrandTile`, `Combobox`, `SlotPicker`, `BottomSheet`, `CommandPalette`, `Timeline`.

## Definition of done (interaction)
- Each tool completes on a 360px viewport, thumb-only, with a keyboard, and with a screen reader label check.
- Deep link test: copy URL at any step, open in a new tab, same state.
- INP under 200 ms, CLS 0 on tool mount, no layout jump when results appear.
- Submissions reach `POST /api/repairs` and appear in the admin dashboard.
