import { db } from "../models/dataStore.js";
import { RepairRequest } from "../models/RepairRequest.js";

// @desc    Create a new repair/service/trade-in request
// @route   POST /api/repairs
// @access  Public
export const createRepairRequest = async (req, res, next) => {
  try {
    const {
      customerName,
      phoneNumber,
      email,
      phoneBrand,
      phoneModel,
      serviceType,
      problemDescription,
      address,
      preferredOption,
      payoutMethod,
      estimatedAmount,
      deviceCondition,
      storage,
      phoneImage,
    } = req.body;

    if (!customerName || !customerName.trim()) {
      return res.status(400).json({
        success: false,
        message: "Customer name is required",
      });
    }

    const cleanPhone = (phoneNumber || "").replace(/\D/g, "");
    if (!cleanPhone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    if (cleanPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be exactly 10 digits (no more, no less).",
      });
    }

    if (!phoneModel || !phoneModel.trim()) {
      return res.status(400).json({
        success: false,
        message: "Phone model is required",
      });
    }

    // Auto-detect brand if not explicitly provided or generic
    let brand = phoneBrand?.trim();
    if (!brand || brand.toLowerCase() === "other") {
      const lowerModel = phoneModel.toLowerCase();
      if (lowerModel.includes("iphone") || lowerModel.includes("apple")) brand = "Apple";
      else if (lowerModel.includes("galaxy") || lowerModel.includes("samsung")) brand = "Samsung";
      else if (lowerModel.includes("oneplus")) brand = "OnePlus";
      else if (lowerModel.includes("pixel") || lowerModel.includes("google")) brand = "Google Pixel";
      else if (lowerModel.includes("redmi") || lowerModel.includes("xiaomi") || lowerModel.includes("mi")) brand = "Xiaomi / Redmi";
      else if (lowerModel.includes("realme")) brand = "Realme";
      else if (lowerModel.includes("vivo")) brand = "Vivo";
      else if (lowerModel.includes("oppo")) brand = "Oppo";
      else if (lowerModel.includes("motorola") || lowerModel.includes("moto")) brand = "Motorola";
      else if (lowerModel.includes("nothing")) brand = "Nothing";
      else brand = "Android / Other";
    }

    // Generate unique reference ticket
    let ticketNumber = RepairRequest.generateTicketNumber();

    const newRequest = await db.repairs.create({
      ticketNumber,
      customerName: customerName.trim(),
      phoneNumber: cleanPhone,
      email: email ? email.trim().toLowerCase() : "",
      phoneBrand: brand,
      phoneModel: phoneModel.trim(),
      serviceType: serviceType || "Sell a dead phone",
      problemDescription: problemDescription || "No symptoms specified",
      address: address || "",
      preferredOption: preferredOption || "Free Express Courier Pickup",
      payoutMethod: payoutMethod || "UPI Instant Transfer",
      estimatedAmount: Number(estimatedAmount) || 0,
      deviceCondition: deviceCondition || "dead",
      storage: storage || "",
      phoneImage: phoneImage || "",
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Repair request registered successfully",
      data: newRequest,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all repair requests with search & status filters
// @route   GET /api/repairs
// @access  Private (Admin)
export const getRepairRequests = async (req, res, next) => {
  try {
    const { status, search, page = 1, limit = 50 } = req.query;

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const { requests, total } = await db.repairs.find({
      status,
      search,
      page: pageNum,
      limit: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Repair requests retrieved successfully",
      data: {
        requests,
        pagination: {
          total,
          page: pageNum,
          pages: Math.ceil(total / limitNum) || 1,
          limit: limitNum,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard statistics for repair requests
// @route   GET /api/repairs/stats
// @access  Private (Admin)
export const getRepairStats = async (req, res, next) => {
  try {
    const stats = await db.repairs.stats();

    res.status(200).json({
      success: true,
      message: "Repair statistics calculated",
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single repair request by ID or ticket number
// @route   GET /api/repairs/:id
// @access  Private (Admin)
export const getRepairById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const request = await db.repairs.findById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Repair request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Repair request retrieved",
      data: request,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update repair request status and admin notes
// @route   PUT /api/repairs/:id
// @access  Private (Admin)
export const updateRepairStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    const validStatuses = ["Pending", "Confirmed", "In Progress", "Completed", "Cancelled"];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    const updatedRequest = await db.repairs.update(id, { status, adminNotes });

    if (!updatedRequest) {
      return res.status(404).json({
        success: false,
        message: "Repair request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Request ${updatedRequest.ticketNumber} updated to '${updatedRequest.status}'`,
      data: updatedRequest,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a repair request
// @route   DELETE /api/repairs/:id
// @access  Private (Admin)
export const deleteRepair = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await db.repairs.delete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Repair request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Repair request ${deleted.ticketNumber} permanently removed`,
      data: { id: deleted._id, ticketNumber: deleted.ticketNumber },
    });
  } catch (error) {
    next(error);
  }
};
