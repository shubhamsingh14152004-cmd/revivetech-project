import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import repairRoutes from "./routes/repairRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { Admin } from "./models/Admin.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection & Admin Initialization Helper
let lastAdminSync = 0;
let lastAdminError = null;
export const ensureDBAndAdmin = async () => {
  const conn = await connectDB();
  const now = Date.now();
  // Ensure admin credentials are initialized/synced (at least once every 30 seconds across invocations)
  if (conn && (now - lastAdminSync > 30000)) {
    try {
      const rawEmail = process.env.DEFAULT_ADMIN_EMAIL || "admin@revivetech.com";
      const rawPassword = process.env.DEFAULT_ADMIN_PASSWORD;
      const rawName = process.env.DEFAULT_ADMIN_NAME || "ReviveTech Admin";

      const email = rawEmail.replace(/^["']|["']$/g, "").trim().toLowerCase();
      const password = rawPassword ? rawPassword.replace(/^["']|["']$/g, "").trim() : "";
      const name = rawName.replace(/^["']|["']$/g, "").trim();

      if (!password) {
        lastAdminError = "DEFAULT_ADMIN_PASSWORD is empty or undefined in process.env";
        console.log("ℹ️ DEFAULT_ADMIN_PASSWORD not configured; skipping automatic admin account creation/update.");
      } else {
        const existingAdmin = await Admin.findOne({ email });
        if (!existingAdmin) {
          await Admin.create({
            name,
            email,
            password,
            role: "superadmin",
          });
          lastAdminError = null;
          console.log(` Created admin account in MongoDB: ${email}`);
        } else {
          const isMatch = await existingAdmin.comparePassword(password);
          if (!isMatch) {
            existingAdmin.password = password;
            await existingAdmin.save();
            console.log(` Updated admin credentials for: ${email}`);
          }
          lastAdminError = null;
        }
      }
      lastAdminSync = now;
    } catch (e) {
      lastAdminError = e.message;
      console.warn("⚠️ Could not auto-seed admin:", e.message);
    }
  }
  return conn;
};

// Production-ready CORS Configuration
const defaultOrigins = [
  "https://revivetech-project.vercel.app",
];

const configuredOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim().replace(/\/+$/, ""))
  : [];

const localOrigins = [
  "http://localhost:5173",
  "http://localhost:8080",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:8080",
];

const allowedOrigins = [
  ...defaultOrigins,
  ...configuredOrigins,
  ...(process.env.NODE_ENV !== "production" ? localOrigins : []),
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);

    const normalizedOrigin = origin.trim().replace(/\/+$/, "");
    const isAllowed = allowedOrigins.includes(normalizedOrigin);

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Blocked request from unauthorized origin: '${origin}'`);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// Request logging in development
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`➡️  [${req.method}] ${req.url}`);
    next();
  });
}

// Root Info Endpoint (Secure, non-sensitive)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ReviveTech Backend REST API is running",
    status: "Operational",
  });
});

// Platform Health Check Endpoints
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
  });
});

// API Router
const apiRouter = express.Router();

// Middleware to ensure DB connection on all /api requests (serverless & local)
apiRouter.use(async (req, res, next) => {
  try {
    await ensureDBAndAdmin();
    next();
  } catch (err) {
    next(err);
  }
});

apiRouter.get("/health", async (req, res) => {
  const adminCount = await db.admin.count().catch(() => -1);
  res.status(200).json({
    success: true,
    status: "healthy",
    message: "ReviveTech REST API is active and operational",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    adminCount,
    hasAdminPassword: Boolean(process.env.DEFAULT_ADMIN_PASSWORD),
    hasAdminEmail: Boolean(process.env.DEFAULT_ADMIN_EMAIL),
    configuredEmail: (process.env.DEFAULT_ADMIN_EMAIL || "supportsellphone@gmail.com").replace(/^["']|["']$/g, "").trim().toLowerCase(),
    lastAdminError,
  });
});

apiRouter.use("/auth", authRoutes);
apiRouter.use("/repairs", repairRoutes);

// Mount central API router under /api
app.use("/api", apiRouter);

// 404 and Centralized Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server listening locally if run directly and not in Vercel serverless environment
if (!process.env.VERCEL) {
  ensureDBAndAdmin().catch((err) => {
    console.error("Database connection initialization failed:", err.message);
  });

  app.listen(PORT, () => {
    console.log(`⚡ ReviveTech Backend Server running on port ${PORT}`);
    console.log(`   Healthcheck: http://localhost:${PORT}/health`);
  });
}

export default app;
