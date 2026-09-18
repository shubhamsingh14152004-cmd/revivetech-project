# ReviveTech — Cleanroom Mobile Repair & Buyback Platform

ReviveTech is a full-stack web application designed for mobile phone buybacks, same-day cleanroom repairs, AI diagnostic triage, and comprehensive back-office operations.

The project is structured into two clean, independent environments:
- **`frontend/`**: Modern React 19 + Vite + TanStack Router client with glassmorphism UI, interactive trade-in calculator, quote forms, and a protected Admin Dashboard.
- **`backend/`**: Node.js + Express.js REST API with MongoDB Atlas (Mongoose ODM), JWT authentication, bcrypt password hashing, and clean MVC architecture.

---

## 📁 Clean Project Structure

```
revivetech-project/
│
├── frontend/                   # Client-side React 19 application
│   ├── src/
│   │   ├── components/         # TradeInCalculator, RepairBooking, DiagnosticWizard, etc.
│   │   ├── pages/              # AdminLogin, AdminDashboard
│   │   ├── routes/             # TanStack Router file routes (/, /admin, /admin/login)
│   │   ├── services/           # api.ts (centralized REST client)
│   │   └── styles.css          # Tailwind CSS design system with Chrome Sunset palette
│   ├── public/                 # Static assets & icons
│   ├── .env.example            # VITE_API_URL template
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json             # Vercel deployment configuration
│   └── vite.config.ts          # Vite & Nitro Vercel preset config
│
├── backend/                    # Server-side Express REST API
│   ├── src/
│   │   ├── config/             # MongoDB Atlas connection handler (db.js)
│   │   ├── controllers/        # authController.js, repairController.js
│   │   ├── middleware/         # auth.js (JWT verify), errorHandler.js
│   │   ├── models/             # Admin.js, RepairRequest.js, dataStore.js
│   │   ├── routes/             # authRoutes.js, repairRoutes.js
│   │   └── server.js           # Express app, healthcheck, CORS & route mounting
│   ├── .env.example            # Production environment template
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── .gitignore                  # Root Git exclusion rules
└── README.md                   # Full documentation & deployment guide
```

---

## 🚢 Production Deployment Architecture

```
                       ┌─────────────────────────┐
                       │      Vercel Hosting     │
                       │   (ReviveTech Frontend) │
                       └────────────┬────────────┘
                                    │ HTTPS (VITE_API_URL)
                                    ▼
                       ┌─────────────────────────┐
                       │  Render / Railway API   │
                       │   (Express Node Backend)│
                       └────────────┬────────────┘
                                    │ Mongoose (MONGODB_URI)
                                    ▼
                       ┌─────────────────────────┐
                       │      MongoDB Atlas      │
                       │   (Production Database) │
                       └─────────────────────────┘
```

---

## 🛠️ Step-by-Step Deployment Guide

### 1. Database Setup: MongoDB Atlas
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Security → Database Access**, create a database user (e.g. `revivetech_user`) with a strong password.
3. Under **Security → Network Access**, add IP `0.0.0.0/0` (Allow access from anywhere, required for dynamic cloud hosting like Render/Railway).
4. Click **Connect → Drivers (Node.js)** and copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/revivetech?retryWrites=true&w=majority
   ```

---

### 2. Backend Deployment: Render or Railway

#### On Render:
1. Push your repository to GitHub.
2. Log into [Render.com](https://render.com) and click **New → Web Service**.
3. Connect your GitHub repository.
4. Set the following options:
   - **Name:** `revivetech-api`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add the **Environment Variables**:
   | Variable | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `10000` (or leave default, Render sets `PORT` automatically) |
   | `MONGODB_URI` | `mongodb+srv://...` (your Atlas URI) |
   | `JWT_SECRET` | *(long random string e.g. 32+ characters)* |
   | `JWT_EXPIRES_IN` | `7d` |
   | `FRONTEND_URL` | `https://your-frontend.vercel.app` |
   | `DEFAULT_ADMIN_NAME` | `ReviveTech Admin` |
   | `DEFAULT_ADMIN_EMAIL` | `admin@revivetech.com` |
   | `DEFAULT_ADMIN_PASSWORD` | *(your secure admin password)* |
6. Deploy! Once active, verify the health check at:
   `https://your-backend.onrender.com/health`

---

### 3. Frontend Deployment: Vercel
1. Log into [Vercel](https://vercel.com) and click **Add New → Project**.
2. Import your GitHub repository.
3. Configure Project:
   - **Framework Preset:** `Other` (or auto-detected Vite)
   - **Root Directory:** click Edit and select `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** Automatically handled via Vercel Build Output API (`.vercel/output`)
4. Add the **Environment Variable**:
   | Variable | Value |
   |---|---|
   | `VITE_API_URL` | `https://your-backend.onrender.com/api` |
5. Click **Deploy**.
6. After Vercel completes the deployment, copy your live frontend URL (e.g. `https://your-frontend.vercel.app`) and update `FRONTEND_URL` in your Render backend settings so CORS allows it.

---

## 🔐 Staff Admin Operations

- **Admin Login:** `https://your-frontend.vercel.app/admin/login`
- **Admin Dashboard:** `https://your-frontend.vercel.app/admin`

The backend automatically seeds the initial admin in MongoDB Atlas on first launch using your `DEFAULT_ADMIN_EMAIL` and `DEFAULT_ADMIN_PASSWORD`.

### Admin Portal Features:
- 📊 **Real-time KPI Metrics:** Total Orders, Pending, Confirmed, In Progress, Completed, Cancelled.
- 🔍 **Search & Filter:** Live search by customer name, phone, email, brand, model, or `RT-` ticket reference.
- 🗂️ **Status Tabs:** Instant filtering by order progress state.
- 📝 **Order Dossier Modal:** Detailed view of customer contact, device symptoms, logistics, payout methods, and administrative notes.
- ⚡ **Status Transitions:** Change order state (e.g. from *Pending* to *Confirmed* to *Completed*).
- 🗑️ **Permanent Records Management:** Delete voided requests.

---

## 🌐 API Endpoints Reference

### 🩺 Health & System
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/` | Public | System status and operational banner |
| `GET` | `/health` | Public | Platform healthcheck (`{ "success": true, "status": "healthy" }`) |
| `GET` | `/api/health` | Public | Detailed API operational health status |

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/login` | Public | Admin login, returns JWT session token |
| `GET` | `/api/auth/me` | Protected | Authenticated admin profile |

### 📱 Repair & Buyback Orders (`/api/repairs`)
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/repairs` | Public | Submit customer trade-in or repair quote |
| `GET` | `/api/repairs` | Protected | List requests with search, filter, pagination |
| `GET` | `/api/repairs/stats` | Protected | KPI aggregation counts for dashboard |
| `GET` | `/api/repairs/:id` | Protected | Retrieve full request dossier by ID or ticket |
| `PUT` | `/api/repairs/:id` | Protected | Update order status and internal notes |
| `DELETE` | `/api/repairs/:id` | Protected | Permanently remove record |

---

## 💻 Local Development

### 1. Run Backend
```bash
cd backend
npm install
npm run dev
```
Runs at `http://localhost:5000`.

### 2. Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`.

---

## 🔍 SEO & Google Ranking Playbook (Search & Maps)

ReviveTech has been engineered with a complete white-hat technical and content SEO architecture targeting high-intent phone repair and buyback queries across India.

### 🌐 Canonical Public URL Hierarchy & Target Queries

| Canonical URL | Page Focus & Target Queries | Structured Schema |
|---|---|---|
| `https://www.sellrepairphone.org/` | Primary Homepage — "phone repair near me", "sell dead phone", "mobile repair near me" | `LocalBusiness`, `WebSite`, `FAQPage` |
| `https://www.sellrepairphone.org/repair` | Same-Day Repair Hub — "phone repair", "same day mobile repair", "phone screen replacement" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/sell-phone` | Sell Phone & Buyback — "sell old phone", "sell dead phone", "sell damaged phone", "instant phone cash" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/buyback` | Trade-In & ITAD — "phone buyback", "bulk phone trade in", "corporate phone recycling" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/iphone-repair` | Apple Specialist — "iPhone repair near me", "iPhone screen replacement", "iPhone battery repair" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/samsung-repair` | Samsung Specialist — "Samsung repair near me", "Galaxy S24 screen", "Samsung green line fix" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/android-repair` | Android Brands — "OnePlus repair", "Xiaomi repair", "Vivo repair", "Oppo repair", "Pixel repair" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/screen-repair` | Display Replacement — "mobile screen replacement", "cracked screen repair", "phone display fix" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/battery-replacement` | Battery Service — "phone battery replacement", "iPhone battery replacement", "swollen battery fix" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/charging-port-repair` | Port Service — "charging port repair", "phone not charging fix", "USB-C port replacement" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/water-damage-repair` | Liquid Recovery — "phone water damage repair", "dropped phone in water fix", "wet phone recovery" | `BreadcrumbList`, `Service`, `FAQPage` |
| `https://www.sellrepairphone.org/contact` | Direct Contact & NAP — "ReviveTech phone number", "doorstep repair helpline", customer care | `BreadcrumbList`, `LocalBusiness` |
| `https://www.sellrepairphone.org/about` | Brand Authority — Cleanroom standards, 100-point inspection, zero-landfill e-waste pledge | `BreadcrumbList` |
| `https://www.sellrepairphone.org/faq` | Customer Help Desk — 10+ categorized FAQs with accordion search | `BreadcrumbList`, `FAQPage` |

> [!NOTE]
> **Admin Protection**: All staff administration paths (`/admin`, `/admin/login`, `/api/*`) are strictly blocked in `public/robots.txt` and protected with `<meta name="robots" content="noindex, nofollow" />` to safeguard internal operational records from search engine indexing.

---

### 🚀 Google Search Console (GSC) Setup Guide

1. **Add Property**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Click **Add Property** and choose **URL prefix**: `https://www.sellrepairphone.org`.
2. **Verify Ownership**:
   - Recommended: DNS TXT record via your domain registrar (Hostinger, GoDaddy, Cloudflare, etc.).
   - Alternatively: Add the GSC HTML verification meta tag to `frontend/src/routes/__root.tsx`.
3. **Submit Sitemap**:
   - In the left sidebar, navigate to **Sitemaps**.
   - Under *Add a new sitemap*, enter `sitemap.xml` (Full URL: `https://www.sellrepairphone.org/sitemap.xml`).
   - Click **Submit**. Verify status changes to **Success**.
4. **Request Priority Indexing**:
   - Paste each of the 14 public canonical URLs into the top Search Console inspection bar.
   - Click **Test Live URL**.
   - Click **Request Indexing** for immediate crawler queueing.

---

### 📍 Google Business Profile & Google Maps (Local SEO)

To rank on Google Maps for **"phone repair near me"** and **"mobile repair shop near me"**:

1. **Create Profile**: Visit [Google Business Profile](https://www.google.com/business/).
2. **Exact Business Name**: Enter **ReviveTech — Mobile Phone Repair & Buyback**.
3. **Primary Categories**:
   - Primary: `Mobile Phone Repair Shop`
   - Secondary: `Cell Phone Store`, `Electronics Repair Shop`, `Data Recovery Service`.
4. **Service Area Business (SAB)**:
   - Select **"I deliver goods and services to my customers"** (Doorstep Pickup & Delivery model).
   - Add your operational cities, regions, and districts.
5. **Exact NAP Consistency**:
   - **Phone**: `+91 8591770877` (Identical to website header, footer, and schema).
   - **Website**: `https://www.sellrepairphone.org`
   - **Appointment URL**: `https://www.sellrepairphone.org/repair`
6. **Add Core Services**:
   - Mobile Phone Screen Replacement
   - Mobile Phone Battery Replacement
   - Mobile Phone Buyback / Sell Dead Phone
   - Charging Port Repair
   - Water Damage Ultrasonic Treatment
   - Apple iPhone / Samsung Galaxy / OnePlus / Xiaomi Repair
7. **Collect Genuine Reviews**:
   - Send customers their Google Review link right after a completed doorstep repair or trade-in payout.

---

### 📊 Google Analytics 4 (GA4) Event Tracking

Real-time user intent and conversion events are automatically measured.

1. Create a GA4 property on [Google Analytics](https://analytics.google.com/).
2. Obtain your **Measurement ID** (`G-XXXXXXXXXX`).
3. Add it to your Vercel Project Environment Variables:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Custom Events Fired:
   - `phone_call_click`: User tapped telephone button to call `+91 8591770877`.
   - `whatsapp_click`: User opened WhatsApp chat for quick query.
   - `repair_booking_started`: User opened the repair appointment form.
   - `repair_booking_submitted`: Customer successfully submitted a repair request.
   - `trade_in_calculated`: User selected brand/model/condition in buyback calculator.
   - `sell_phone_submitted`: Customer locked in a trade-in payout quote.
