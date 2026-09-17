import express from "express";
import {
  loginAdmin,
  getCurrentAdmin,
} from "../controllers/authController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/login", loginAdmin);

// Protected admin routes
router.get("/me", protectAdmin, getCurrentAdmin);

export default router;
