import jwt from "jsonwebtoken";
import { db } from "../models/dataStore.js";

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

    const admin = await db.admin.findByEmail(cleanEmail);
    if (!admin) {
      const totalAdmins = await db.admin.count();
      if (totalAdmins === 0) {
        return res.status(401).json({
          success: false,
          message: "No admin account found in database. Please verify backend environment variables in Vercel.",
        });
      }
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
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
