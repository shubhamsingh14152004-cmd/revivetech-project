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
let adminInitialized = false;
export const ensureDBAndAdmin = async () => {
  const conn = await connectDB();
  if (conn && !adminInitialized) {
    try {
      const name = process.env.DEFAULT_ADMIN_NAME || "ReviveTech Admin";
      const email = (process.env.DEFAULT_ADMIN_EMAIL || "admin@revivetech.com").toLowerCase().trim();
      const password = process.env.DEFAULT_ADMIN_PASSWORD;

      if (!password) {
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
          console.log(` Created admin account in MongoDB: ${email}`);
        } else {
          const isMatch = await existingAdmin.comparePassword(password);
          if (!isMatch) {
            existingAdmin.password = password;
            await existingAdmin.save();
            console.log(` Updated admin credentials for: ${email}`);
          }
        }
      }
      adminInitialized = true;
    } catch (e) {
      console.warn("⚠️ Could not auto-seed admin:", e.message);
    }
  }
  return conn;
};

// Production-ready CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      const frontendUrl = process.env.FRONTEND_URL;
      const configuredOrigins = frontendUrl
        ? frontendUrl.split(",").map((url) => url.trim().replace(/\/$/, ""))
        : [];

      const localOrigins = [
        "http://localhost:5173",
        "http://localhost:8080",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:8080",
      ];

      const allowedOrigins = [
        ...configuredOrigins,
        ...(process.env.NODE_ENV !== "production" ? localOrigins : []),
      ].filter(Boolean);

      const isAllowed = allowedOrigins.includes(origin);

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy violation: Origin '${origin}' is not authorized`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

// Middleware to ensure DB connection on API requests (serverless & local)
app.use("/api", async (req, res, next) => {
  try {
    await ensureDBAndAdmin();
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    message: "ReviveTech REST API is active and operational",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/repairs", repairRoutes);

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
