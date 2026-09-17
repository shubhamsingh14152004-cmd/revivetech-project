# ReviveTech Backend REST API

A scalable Node.js + Express.js REST API with MongoDB & Mongoose for ReviveTech's phone buyback, cleanroom repair tracking, and customer service management.

## Tech Stack
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) with `bcryptjs` password hashing
- **Security:** CORS, input validation, sanitized JSON error responses

---

## Setup & Installation

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Review the values:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/revivetech
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
DEFAULT_ADMIN_EMAIL=admin@revivetech.com
DEFAULT_ADMIN_PASSWORD=your_secure_admin_password
```

### 3. Run the Server
- **Development (auto-reload via nodemon):**
  ```bash
  npm run dev
  ```
- **Production:**
  ```bash
  npm start
  ```

Server will run at: `http://localhost:5000`

---

## API Endpoints

### 🩺 Health Check
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/health` | Public | Platform health check |
| `GET` | `/api/health` | Public | System status and timestamp |

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/login` | Public | Admin login (returns JWT token) |
| `GET` | `/api/auth/me` | Protected | Current authenticated admin profile |

### 📱 Repair & Trade-in Requests (`/api/repairs`)
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/repairs` | Public | Submit customer repair or trade-in request |
| `GET` | `/api/repairs` | Protected | Retrieve requests (supports `status`, `search`, `page`, `limit`) |
| `GET` | `/api/repairs/stats` | Protected | Get counts (Total, Pending, Confirmed, In Progress, Completed, Cancelled) |
| `GET` | `/api/repairs/:id` | Protected | Get single request by MongoDB ID or ticket number |
| `PUT` | `/api/repairs/:id` | Protected | Update request status or admin notes |
| `DELETE` | `/api/repairs/:id` | Protected | Remove request from database |

---

## Admin Account Setup
When connected to MongoDB for the first time, an admin account is initialized using your configured environment variables:
- **Email:** Configured in `DEFAULT_ADMIN_EMAIL` (default: `admin@revivetech.com`)
- **Password:** Configured in `DEFAULT_ADMIN_PASSWORD` (set your secure password)
