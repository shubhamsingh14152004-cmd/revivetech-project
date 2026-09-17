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
