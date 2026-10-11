# Revora Website Status and Owner Checklist

## Automated Audits & Redesign Status
- **Phase 1-4 (Design & Infrastructure):** Complete. Mobile-first design implemented. 13px minimum font size enforced. 48px touch targets enforced. Dark mode removed.
- **Phase 5 (SEO/AEO/GEO):** Complete. `sitemap.xml`, `robots.txt`, `llms.txt`, and new high-intent content pages implemented.
- **Phase 6 (QA & AI-Tell Audit):** Complete. Marketing jargon ("seamless", "unlock", etc.) removed. 

## Owner Action Checklist (Crucial for SEO & Business Logic)

Before pushing the final code to production, the Owner **MUST** complete the following manual verifications:

### 1. Business Data & Claims Verification
- [ ] Open `frontend/src/config/siteConfig.ts` and fill in the missing `TODO` values (real phone number, contact email, exact business hours, social profile URLs).
- [ ] If you have a public storefront, set `siteConfig.business.hasPublicAddress` to `true` and fill in the exact physical address. If you are a mail-in/doorstep only business, leave it `false`.
- [ ] Open `frontend/src/config/claims.ts` and ensure all service promises (warranty length, turnaround times) match your actual operations exactly. These are pulled directly into the AEO Facts tables.

### 2. Assets & Metadata
- [ ] Generate standard Open Graph share images (1200x630px) for each of your key pages. Place them in `frontend/public/og/` (e.g., `iphone-repair.jpg`). Currently, these rely on a single placeholder image.
- [ ] Review `public/robots.txt`. By default, AI training bots (like GPTBot, ClaudeBot, etc.) are allowed to scrape the site. If you wish to block your content from being used to train AI models, uncomment the `Disallow` lines under the training bots section. Blocking them does not affect your search engine ranking.

- [x] Dedicated `/nothing-repair` brand page created with Glyph Interface & flexible OLED repair specs. Nav updated.

### 3. SEO & Rich Results Validation
- [ ] Run your local or staging server and test the main route schemas (Home, iPhone Repair, Blog) through the **Google Rich Results Test** tool to ensure zero errors.
- [ ] Test the same URLs via the **Schema Markup Validator** to ensure the structured data strictly aligns with the injected LocalBusiness, Service, and FAQPage schemas.

### 4. Off-Site SEO (GEO Corroboration)
To rank effectively in AI summaries (ChatGPT, Perplexity) and Google, ensure your business facts are corroborated off-site:
- [ ] Claim and fully populate a **Google Business Profile**. Ensure the name, phone number, and service areas match `siteConfig.ts` exactly.
- [ ] Collect real Google Reviews from past customers.
- [ ] Ensure consistent business listings across local directories (Justdial, Sulekha, IndiaMART, etc.).
- [ ] Link to your exact verified social profiles (Instagram, X, YouTube).
