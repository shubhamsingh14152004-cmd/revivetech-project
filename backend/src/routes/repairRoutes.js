import express from "express";
import {
  createRepairRequest,
  getRepairRequests,
  getRepairStats,
  getRepairById,
  updateRepairStatus,
  deleteRepair,
} from "../controllers/repairController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public: Submit a repair / trade-in request
router.post("/", createRepairRequest);

// Protected: Admin access only
router.get("/stats", protectAdmin, getRepairStats);
router.get("/", protectAdmin, getRepairRequests);
router.get("/:id", protectAdmin, getRepairById);
router.put("/:id", protectAdmin, updateRepairStatus);
router.delete("/:id", protectAdmin, deleteRepair);

export default router;
