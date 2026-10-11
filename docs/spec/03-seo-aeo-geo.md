# 03 SEO + AEO + GEO

Goal: rank in Google, be the answer in featured snippets and voice results (AEO), and be cited by AI assistants (GEO). The same foundation serves all three: true, consistent, well-structured, citable information.

## 1. Truth and entity consistency (do first)
- One entity: **Revora**. Same name, phone, email, hours, service area everywhere: UI, JSON-LD, `llms.txt`, meta, footer.
- Remove from `SeoJsonLd.tsx`: invented street address, postal code, and geo coordinates. If `siteConfig.business.hasPublicAddress` is false (default), emit LocalBusiness as a service-area business: no `streetAddress`, no `geo`, with `areaServed` from `siteConfig.serviceAreas`. Emit address and geo only when the owner supplies real values.
- `paymentAccepted`: from config. Default "UPI, bank transfer" (match the real payout methods in config).
- `areaServed`: from config only. Do not list both cities and the whole country. If pan-India mail-in exists, model it as a separate Service with its own `areaServed`.
- `sameAs`: only real profile URLs from `siteConfig.social` and a Google Business Profile URL when supplied.
- Verify `@RevoraIndia`; remove `twitter:site` if no `siteConfig.social.x`.
- Pick the canonical host. The www host `https://www.sellrepairphone.org` is the canonical host everywhere (sitemap, schema, canonical tags, og:url, llms.txt, siteConfig). 301 apex to www in `vercel.json`, relative internal links, absolute canonicals on www. Confirm with `curl -I` for both hosts and `http` to `https`.

## 2. Technical SEO
- Unique `<title>` (max 60 chars) and `<meta description>` (120 to 160 chars) on every indexable page, intent first, brand last, e.g. "Sell a Dead Phone in Mumbai: Free Pickup | Revora". Remove `<meta name="keywords">`.
- One `<h1>` per page, no skipped heading levels, landmarks (`header`, `nav`, `main`, `footer`), skip link.
- OG/Twitter cards: 1200x630 image per page type (home, sell, repair, brand, guide, tool) generated from a template and saved to `public/og/`. Real `alt`. Do not use the logo as the share image.
- Sitemap: generate at build from the route list; `lastmod` from the content file's `updatedAt` (or git last-commit date), not a constant. Drop `changefreq` and `priority`. Exclude admin and noindex pages.
- `robots.txt`: allow all public content; disallow `/admin` and `/api/`. Add the AI crawler block (section 5).
- Internal linking: hub and spoke. Sell hub links to every sell page and brand; Repair hub links to services and brands; every page has visible breadcrumbs and 3 to 6 contextual "Related" links; brand pages link to the matching service pages and the tools.
- Performance: self-host fonts (preload), no render-blocking CSS from third parties, hero image AVIF/WebP with explicit size and `fetchpriority="high"`, everything else lazy, `content-visibility: auto` on below-fold sections, no layout shift. Mobile Lighthouse: Performance 90+, SEO 100, LCP under 2.5 s, INP under 200 ms, CLS under 0.1.
- No thin or duplicate pages. Do NOT mass-generate brand x service x city pages. Create a combined page only if it has unique data (model list, price range from `prices.ts`, common faults, local detail). Otherwise keep it out of the sitemap and `noindex`.

## 3. AEO: be the answer
Every indexable content page follows this blueprint, in this order:
1. `<h1>` phrased as the user's query or close to it.
2. **Short answer** directly under the H1: 40 to 60 words, standalone (makes sense if quoted alone), names the entity, the place, and one verified key fact.
3. **Key facts table**: price range, time, warranty, area, payment, data handling. Only verified claims from `claims.ts`.
4. **Steps**: visible numbered list of how it works.
5. Body sections with question-style `<h2>`s ("Can I sell a phone that won't turn on?"). First sentence of each section answers it.
6. **FAQ**: 4 to 6 questions, visible on the page, mirrored exactly in `FAQPage` JSON-LD (same text).
7. **Trust line**: "Last updated {date}. Reviewed by {name, role}." Real names from `siteConfig.team`; omit the "Reviewed by" part if none are provided. Do not invent people.
8. Related links.
Rules: one idea per paragraph, no pronoun-only references at the start of a section, define terms once, use tables and lists for comparisons. Hinglish answers live in the FAQ language toggle with `lang="hi-Latn"` on those elements.

## 4. Structured data (SSR, one `@graph` per page, stable `@id`s)
| Page type | Schemas |
|---|---|
| All | Organization (`#org`), WebSite (`#website`), BreadcrumbList |
| Home | + LocalBusiness (`#business`, service-area form, see 1) |
| Sell and repair pages | + Service (provider `#business`, `areaServed` from config), FAQPage |
| Tools | + WebApplication (name, url, applicationCategory "UtilitiesApplication", offers free) or just Service; FAQPage |
| Guides and blog | Article/BlogPosting with `author` (Person from config), `datePublished`, `dateModified`, `image`, `publisher` `#org` |
| Price guide | Article + visible table (no Product markup with invented prices) |
| About | AboutPage + Organization, `sameAs` |
Rules: no `AggregateRating` or `Review` unless backed by real entries in `testimonials.ts`; no field without a config source; JSON-LD must match visible content. Validate every page type with Google's Rich Results Test and the Schema Markup Validator; record results in `docs/STATUS.md`. Note: FAQ rich results are rarely shown in Google now, but the markup still helps machine parsing; do not rely on it for SERP appearance.

## 5. GEO: be citable by AI assistants
- **Facts page**: `/about` gets a "Revora at a glance" table (what we do, where, hours, payment, warranty, data-wipe method, how prices are set, contact), each cell from config, with "Last verified {date}". Assistants quote tables like this.
- **Original data**: `/phone-buyback-price-india` (see 02, T11) with methodology and an update date. Update on a schedule; refresh `dateModified`.
- **New content pages (exactly these, high intent, genuinely useful)**: `/phone-not-turning-on`, `/fix-or-sell`, `/phone-buyback-price-india`, `/how-we-wipe-your-data`. Rewrite the 4 existing blog posts with author, dates, sources, and answer-first structure. Do not publish bulk filler posts.
- **Self-contained chunks**: each section readable alone; descriptive headings; specific numbers with units and dates.
- **`llms.txt`** at site root (and `llms-full.txt` with the key page content in Markdown): site summary in 3 sentences, what Revora does, service area, contact, then grouped links with one-line descriptions to the main pages, tools, price guide, data-wipe page, FAQ. No provider has confirmed ranking benefits from `llms.txt`; it is cheap, so include it, and do not count on it.
- **Crawler policy** in `robots.txt`: explicitly `Allow: /` for search and retrieval bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Googlebot, Bingbot). Training-only bots (GPTBot, ClaudeBot, CCBot, Google-Extended) are an owner decision: leave allowed by default, add commented-out `Disallow` lines and list the decision in the Owner Checklist. Blocking training bots does not affect search visibility.
- **Off-site corroboration** (owner tasks, put in checklist): Google Business Profile (service-area business), real Google reviews, consistent listings (Justdial, Sulekha, IndiaMART where relevant), social profiles, a short press/directory mention. Assistants trust facts that appear in several independent places.
- **Measure**: in `analytics.ts` detect referrers from `chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`, `you.com` and send `ai_referral` with the source.

## 6. Hindi and Hinglish
Keep it, but out of the way: FAQ toggle and per-page FAQ items. Mark with `lang="hi-Latn"` (Hinglish) or `lang="hi"` (Devanagari). Do not create separate Hindi URLs now; no hreflang needed until there are real alternate pages.

## 7. Automated checks (add to the repo, run every phase)
`npm run check:seo` must assert, for every indexable route: unique title and description within length limits; exactly one H1; absolute apex canonical; OG image file exists and is 1200x630; JSON-LD parses and contains only config-backed values; every FAQ in JSON-LD appears in the HTML; no internal link to `www` or to a non-existent route; sitemap contains all indexable routes, excludes admin; `lastmod` varies and is valid.
Also prove server rendering: `curl -s http://localhost:PORT/route` must contain the H1, the short answer, and the `application/ld+json` block without running JavaScript.

## Definition of done (SEO/AEO/GEO)
- `check:seo` passes. Rich Results Test and Schema Markup Validator show zero errors on each page type.
- No fabricated schema field remains (grep `streetAddress`, `latitude`, `ratingValue`, `reviewCount`).
- `llms.txt`, `llms-full.txt`, updated `robots.txt`, new sitemap, and OG images are in `public/` and referenced.
- Every indexable page follows the AEO blueprint.
