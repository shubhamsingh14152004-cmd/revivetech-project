# 01 Design: make it look studio-designed

## Direction
Calm precision. The feeling of a well-made utility: clear numbers, confident type, generous space, one memorable idea per screen. Reference feel: Wise, Zerodha, Stripe docs. Not: SaaS landing-page template.
Light theme only. Keep the v1 tokens (bg `#FAFAF7`, ink `#102A26`, brand `#007F5F`). Refine as below.

## Banned patterns (hard fail, check before ending any task)
1. Eyebrow pill above a section heading. Allowed: zero in sections. One status chip allowed in the header only if it carries live info (for example "Pickup in 400001").
2. Rows of 3 or 4 feature cards with an icon in a tinted rounded square.
3. Centred everything. Centred hero with two pill buttons and a trust-badge row.
4. Gradient text, glows, blur orbs, glassmorphism, animated pulse dots, bouncing icons.
5. Emojis or sparkles. Arrow icon on every button (use it only on forward navigation CTAs).
6. Stat trio counters ("12,400+ / 45m / Rs 2.5L") unless every number is verified in `claims.ts`.
7. Every card with the same radius, shadow, padding. Cards inside cards.
8. Numbered circles in a 3-column "How it works".
9. Section rhythm of "heading, subheading, grid" repeated down the page.
10. Underlined bold phrases inside paragraphs. Highlight chips such as "Free Perks", "Bonus".
11. Heading words: Smart, AI-powered, Seamless, Revolutionary, Cutting-edge, Premium, VIP, Unlock, Elevate, Supercharge, "&" in H1.
12. Subheading that repeats the heading in other words.
13. Stock photos, fake avatars, fake logos wall.

## Layout
- 12-column grid, container max 1120px, gutters 20px mobile / 32px desktop.
- Left-aligned, editorial. Asymmetric splits (5/7, 4/8). Vary density: one dense section (tools, tables) between two airy ones.
- Separate sections with whitespace and 1px hairlines, not boxes. Maximum 2 surface types on the site: "plain" (no border, on page bg) and "raised" (white, 1px line, 16px radius). Tools and the quote receipt use "raised".
- Hero (desktop): left = H1, one-sentence sub, one primary CTA, one text link. Right = the live estimator (see 02). Hero (mobile): H1, sub, then the estimator immediately; CTA is the estimator's own first step.
- Section spacing: 64px mobile / 112px desktop. Vary it by +/- 16px where content groups, so the rhythm feels designed, not stamped.

## Type
- One family: Inter variable, self-hosted, `font-display: swap`, preload the 400 and 600 files. Use the `opsz` axis if present.
- Headings 600, tracking -0.02em to -0.03em, line-height 1.08 to 1.15. Body 400, line-height 1.55, measure max 62ch.
- Fluid sizes with `clamp()`: h1 `clamp(2.125rem, 1.2rem + 3.6vw, 4rem)`; h2 `clamp(1.75rem, 1.2rem + 1.8vw, 2.75rem)`; body 1rem to 1.0625rem; small 0.875rem; floor 0.8125rem.
- Prices and numbers: `font-variant-numeric: tabular-nums`, format with `Intl.NumberFormat("en-IN")`. Display prices at 56 to 72px, weight 600.
- Devanagari only when Hindi text is present: Noto Sans Devanagari with `unicode-range`, lazy.

## Colour
- Keep brand green. Derive an 11-step ramp (50 to 950) in OKLCH. Warm neutral ramp (hue 90 to 100, chroma at most 0.01).
- 60/30/10 rule: 60% page bg and whitespace, 30% ink and neutrals, 10% brand. Brand green only for: primary buttons, selected state, links, the Condition Spectrum fill, success.
- Add one caution colour (amber) for warnings only. Error red for errors only.
- All text on bg at least 4.5:1; large text 3:1. Verify with a script, not by eye.

## Signature components (these make the site recognisable)
1. **Condition Spectrum.** A horizontal scale with four stops: Dead, Cracked, Worn, Mint. A draggable/keyboardable handle (radio-group semantics, arrow keys). The selected stop updates the phone illustration and the price live.
2. **Phone illustration.** One consistent line-art SVG (2px stroke, rounded joins) with four states: dead (dark screen, no glow), cracked (crack paths over screen), worn (corner scuffs), mint (clean screen). Handle brand silhouettes by a single generic body; no brand logos on the illustration. Under 6 KB each, inline, themeable with CSS variables.
3. **Receipt quote.** The estimate shown as a clean receipt: line items (Base value, Storage, Box and charger, Condition adjustment), a hairline, then a large total range. Monospace is NOT used; use tabular numerals. Transparent maths is the trust device.
4. **Next-steps timeline.** Vertical hairline with 3 to 4 timed steps, drawn progressively on scroll.
5. **Hairline-and-whitespace tables** for comparisons and price guide (see 02, T11).

## Components to rebuild or restyle (use shadcn primitives, restyled)
Button (3 variants only), Input/Combobox, SegmentedControl, Stepper, Sheet/Drawer (vaul on mobile), Tabs, Accordion, Table, Toast (sonner, no emoji, one line + optional action), Command palette (cmdk), SlotPicker, Receipt, ConditionSpectrum, PhoneIllustration.
- Buttons: 52px mobile / 48px desktop, 12px radius, 600 weight, press state `scale(.98)`, visible focus ring (2px brand, 2px offset).
- Inputs: 56px tall on mobile, floating-free labels above field, 16px text, inline error text with icon, success tick when valid.

## Motion language
- Easing `cubic-bezier(.2,.8,.2,1)`; durations 150ms (hover), 220ms (state), 360ms (sheets, step transitions).
- Step changes: slide 16px + fade. Price: count-up 600ms, then settles; respects reduced motion.
- Scroll-linked reveals via CSS `animation-timeline: view()` as progressive enhancement, fallback to simple fade. Route changes via View Transitions API where supported.
- Haptics: `navigator.vibrate(8)` on step select and success, when supported.
- All motion disabled under `prefers-reduced-motion`.

## Imagery
- No stock photography. Use the line-art illustration system, plus real photos of the real team/lab/van ONLY if the owner supplies them (list in Owner Checklist).
- Hero media: static poster by default. If the video is kept, one deduplicated file, `preload="none"`, `muted playsinline`, loads on tap.
- Social cards: 1200x630, generated per page type from a template (see 03).

## Mobile specifics
- Sticky bottom action bar: [Call] [WhatsApp] [primary CTA]; safe-area padding; hides when keyboard is open or a sheet is open.
- Header: logo, pincode chip (optional), search icon (opens palette), menu icon (full-height sheet with 48px rows).
- Thumb zone: primary actions in the bottom 40% of the screen inside tools.
- Use `svh/dvh`, `touch-action: manipulation`, `overscroll-behavior: contain` on sheets.

## Definition of done (design)
- Every item in "Banned patterns" is absent (state the grep or inspection used).
- Two people glancing at a 390px screenshot could not tell it came from a template: one clear focal point per screen, consistent spacing from the 4px scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 112).
