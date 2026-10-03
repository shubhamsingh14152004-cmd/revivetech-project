# ReviveTech — Remaining Issues & External Dependencies Log

**Status Date:** October 3, 2026  
**Build Status:** ✅ Zero Code Errors / All Client & Server Builds Passing

---

## 1. Resolved In-Code Items

- [x] Unified Brand Entity across metadata, header, footer, and schema (`ReviveTech — Sagar Tech Mobile Repair & Buyback`).
- [x] Verified and added canonical `<link rel="canonical" href="..." />` tags to 100% of public routes.
- [x] Injected complete Open Graph (`og:*`) and Twitter Card (`summary_large_image`) meta tags on all indexable pages.
- [x] Enforced strict `<meta name="robots" content="noindex, nofollow" />` directives on all admin routes (`/admin`, `/admin/login`).
- [x] Updated `public/sitemap.xml` with all 27+ canonical URLs and current timestamp `2026-10-03`.
- [x] Connected all interactive forms (`TradeInCalculator`, `RepairBooking`, `contact.tsx`, `index.tsx` custom quote form) to backend Express REST API `POST /api/repairs` with fallback handling.
- [x] Connected `RepairTracker.tsx` to `api.getRepairById` for live MongoDB Atlas ticket lookups.

---

## 2. External Operational Dependencies (Action Required by Business Owner)

The following items cannot be executed via source code modification alone and require external account access or cloud service configuration by the site owner:

### 1. Production Hosting Environment Variables
Ensure the following variables are configured in your Vercel and Render dashboards:

#### Vercel Frontend Environment Variables:
```env
VITE_API_URL=https://your-backend.onrender.com/api
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Render / Railway Backend Environment Variables:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/revivetech?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_32chars_long
JWT_EXPIRES_IN=7d
FRONTEND_URL=https://sellrepairphone.org
DEFAULT_ADMIN_EMAIL=admin@revivetech.com
DEFAULT_ADMIN_PASSWORD=YourSecureAdminPassword2026!
```

---

### 2. Google Search Console & Google Business Profile Setup
1. **Google Search Console**:
   - Add URL Prefix property: `https://sellrepairphone.org`.
   - Submit sitemap: `https://sellrepairphone.org/sitemap.xml`.
   - Request priority indexing for core routes (`/`, `/repair`, `/sell-phone`, `/sell-dead-phone`).
2. **Google Business Profile**:
   - Claim profile: `ReviveTech — Mobile Phone Repair & Buyback`.
   - Complete phone/video verification for doorstep service in Mumbai and target operational regions.

---

### 3. Google Analytics 4 Event Tracking
- Add your GA4 Measurement ID (`G-XXXXXXXXXX`) to Vercel environment variables to start receiving real-time custom event metrics (`phone_call_click`, `whatsapp_click`, `repair_booking_submitted`, `trade_in_calculated`).
