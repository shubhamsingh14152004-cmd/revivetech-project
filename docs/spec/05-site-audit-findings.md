# Audit findings (evidence for every change in this pack)

Sources: live site fetched on 9 Oct 2026 (old design), and the repository code.

## A. Looks AI-generated (live site)
1. Eyebrow pill above nearly every heading: "Instant Cash Trade-In & Doorstep Pickup", "Simple & Transparent Process", "AI Dead-Phone Triage Diagnostic", "Instant Answers & Knowledge Base", "15-Minute Response Guaranteed".
2. H1 is awkward: "Sell old mobile phones, & repair your phone."
3. Emojis in the diagnostic and form: lightning, fire, bulb, snowflake, flag.
4. Jargon no customer understands: "Primary VDD rail shorted", "battery at 0V protection lock", "GPU/OLED ribbon failed".
5. The word "AI" is used on things that are not AI: a fixed 3-question quiz and a canned-reply chat ("Ask AI").
6. Buzzwords: "cleanroom", "master cleanroom techs", "VIP", "Revivals", "harvest titanium frames", "sapphire glass", "Free Perks".
7. Same layout repeated: centred heading + subheading + grid of identical rounded cards, in every section.
8. A large Hinglish block dumped in the middle of the homepage.

## B. Claims that contradict each other or cannot be true
1. Speed: "Same-Day", "45-Min", "Repair within 24hrs", "15-Minute Response Guaranteed".
2. Coverage: "Mumbai & nearby areas" (meta, schema) vs "Zero courier fees across India" (footer trust row).
3. Stats: "4.9 stars, 12,400+ Revivals" and "Rs 2.5L+ Paid to Customers". Rs 2.5 lakh divided by 12,400 devices is about Rs 20 per device, while the calculator quotes Rs 1,800 to Rs 19,000. These numbers cannot both be real.
4. "Yes, 100%!" buy-anything promise; "80%+ phones fixed without deleting data"; "Original OEM Dynamic AMOLED and True Tone displays" for all brands (True Tone is Apple-only).
5. Footer address "Doorstep Express Courier Pickup & Cleanroom Facility, India" is not an address.
6. Doorstep service shown as free on the homepage; `RepairBooking.tsx` charges +Rs 499.

## C. Structured data and SEO problems (code)
1. `SeoJsonLd.tsx` LocalBusiness contains an invented address ("Shop No. 4, Service Hub & Dispatch Facility, Mumbai 400001") and generic Mumbai-centre coordinates (19.076, 72.8777). Fabricated NAP in markup violates Google's structured-data guidelines and damages local trust. Remove.
2. `paymentAccepted` lists cards and net banking but not UPI, which is the real payout method.
3. `areaServed` lists Mumbai, Navi Mumbai, Thane AND the whole country.
4. `sitemap.xml`: 31 URLs, every `lastmod` identical, `changefreq=daily` everywhere (ignored by Google, and the identical dates look fake).
5. `<meta name="keywords">` still present (obsolete). `og:image` and `twitter:image` are the logo, not a 1200x630 card.
6. `twitter:site` is `@RevoraIndia`. Unverified that the account exists.
7. No `llms.txt`. `robots.txt` has no policy for AI crawlers.
8. Blog: 4 posts, no author, no published/modified dates, no Article schema. No Person or reviewer entity. No `sameAs` links.
9. Domain: the fetch ended at `www.sellrepairphone.org` while canonicals, sitemap and JSON-LD use the apex `sellrepairphone.org`. Verify with `curl -I` and make one canonical host with a 301 from the other. Use relative internal links.
10. Public footer links to "Staff Cleanroom Portal" (`/admin/login`). Remove from public UI (route stays noindex).
11. Fonts load through a render-blocking Google Fonts stylesheet.
12. Good baseline to keep: SSR content is present in the HTML, canonicals on routes, FAQPage on 25 routes, Service on 23, Breadcrumb on 30.

## D. Interactivity gaps
1. Five forms, all passive. No result changes as the user interacts, no shareable state, no deep links.
2. `RepairTracker`, `ReviewsWall`, `RevivalShowcase`, `PreLovedStore` are not rendered anywhere.
3. 30+ pages and no way to search them.
4. Diagnostic shows a fake "revival success probability".
