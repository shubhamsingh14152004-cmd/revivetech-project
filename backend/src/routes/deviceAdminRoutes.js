import express from "express";
import {
  getAdminDevices,
  createDevice,
  updateDevice,
  deleteDevice,
  bulkToggleDevices,
  importDevices,
  exportDevices,
} from "../controllers/deviceController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.use(protectAdmin);
router.use(protectAdmin);

router.get("/", getAdminDevices);
router.post("/", createDevice);
router.put("/:id", updateDevice);
router.delete("/:id", deleteDevice);
router.post("/bulk-toggle", bulkToggleDevices);
router.post("/import", importDevices);
router.get("/export", exportDevices);

export default router;
