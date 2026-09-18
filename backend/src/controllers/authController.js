import jwt from "jsonwebtoken";
import { db } from "../models/dataStore.js";
import { Admin } from "../models/Admin.js";

// Helper to get JWT Secret
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required");
  }
  return secret;
};

// Helper to sign JWT
const signToken = (id, role) => {
  return jwt.sign(
    { id, role },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
};

// @desc    Admin login
// @route   POST /api/auth/login
// @access  Public
export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    const cleanEmail = (email || "").replace(/^["']|["']$/g, "").trim().toLowerCase();
    const cleanPassword = (password || "").replace(/^["']|["']$/g, "").trim();

    let admin = await db.admin.findByEmail(cleanEmail);
    if (!admin) {
      const totalAdmins = await db.admin.count();
      if (totalAdmins === 0) {
        // Self-healing bootstrap: if database has zero admins, create initial superadmin directly from login
        const configuredEmail = (process.env.DEFAULT_ADMIN_EMAIL || "supportsellphone@gmail.com")
          .replace(/^["']|["']$/g, "")
          .trim()
          .toLowerCase();

        if (cleanEmail === configuredEmail || cleanEmail === "supportsellphone@gmail.com" || cleanEmail === "admin@revivetech.com") {
          if (cleanPassword.length < 6) {
            return res.status(400).json({
              success: false,
              message: "Initial admin password must be at least 6 characters long.",
            });
          }

          try {
            admin = await Admin.create({
              name: process.env.DEFAULT_ADMIN_NAME || "ReviveTech SuperAdmin",
              email: cleanEmail,
              password: cleanPassword,
              role: "superadmin",
            });
            console.log(`🎉 Successfully initialized superadmin account in MongoDB: ${cleanEmail}`);
          } catch (seedErr) {
            console.error("Failed to bootstrap superadmin:", seedErr.message);
            return res.status(500).json({
              success: false,
              message: `Failed to initialize admin account in database: ${seedErr.message}`,
            });
          }
        } else {
          return res.status(401).json({
            success: false,
            message: `No admin account found. Please log in with ${configuredEmail} to initialize the admin desk.`,
          });
        }
      } else {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }
    }

    let isMatch = await admin.comparePassword(password);
    if (!isMatch && cleanPassword !== password) {
      isMatch = await admin.comparePassword(cleanPassword);
    }
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = signToken(admin._id, admin.role);

    const safeAdmin = admin.toJSON ? admin.toJSON() : { ...admin };
    delete safeAdmin.password;

    res.status(200).json({
      success: true,
      message: "Admin authenticated successfully",
      data: {
        admin: safeAdmin,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current authenticated admin profile
// @route   GET /api/auth/me
// @access  Private (Admin)
export const getCurrentAdmin = async (req, res, next) => {
  try {
    const safeAdmin = req.admin.toJSON ? req.admin.toJSON() : { ...req.admin };
    delete safeAdmin.password;

    res.status(200).json({
      success: true,
      message: "Admin profile retrieved",
      data: {
        admin: safeAdmin,
      },
    });
  } catch (error) {
    next(error);
  }
};
