# Revora guardrails (always on)

## Truth
- Business facts come only from `src/config/siteConfig.ts` and `src/config/claims.ts`. Never hard-code a phone, address, price, stat, warranty period, speed, or service area in a component.
- Never output schema.org fields that are not backed by config. No street address, no geo coordinates, no rating, no review count unless real and present in config.
- Reviews and ratings render only from real entries in `src/content/testimonials.ts` (`isPlaceholder: false`).

## Design
- Follow `docs/spec/01-design.md`. Its "Banned patterns" list is a hard fail. Check your own output against it before ending a task.
- One font family. Tokens only. Zero hex values in `.tsx` (SVG brand marks excepted).
- Minimum text 13px, body 16px, inputs 16px, tap targets 48px, no horizontal scroll at 320px.
- No emojis anywhere in UI or copy.

## Copy
- Follow `docs/spec/04-content-claims.md`. Banned phrases fail `check:claims`.
- Plain, specific, short sentences. Numbers with units. Indian formatting: `Intl.NumberFormat("en-IN")`, rupee sign.

## Engineering
- Server-render all indexable content and JSON-LD. Interactive tools are lazy-loaded islands with a server-rendered static shell.
- Every interactive tool: keyboard operable, `aria-live` for results, focus managed between steps, state in URL search params (TanStack `validateSearch` + zod), inline validation, loading/empty/error/success states.
- Internal links use `<Link>`. External links use `rel="noopener noreferrer"`. Call and WhatsApp links come from `telHref()` / `waHref()` helpers.
- Homepage JS budget: 170 KB gzipped max. No new heavy dependency without justification (allowed: what is already installed).
- Do not change backend contracts except the tracker endpoint.
- Commit per phase.
