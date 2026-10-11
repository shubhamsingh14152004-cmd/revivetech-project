import express from "express";
import { getPublicDevices, searchDevices } from "../controllers/deviceController.js";

const router = express.Router();

router.get("/search", searchDevices);
router.get("/", getPublicDevices);

export default router;
