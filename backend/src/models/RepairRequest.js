import mongoose from "mongoose";

const repairRequestSchema = new mongoose.Schema(
  {
    ticketNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
    },
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },
    phoneBrand: {
      type: String,
      required: [true, "Phone brand is required"],
      trim: true,
      default: "Other Android",
    },
    phoneModel: {
      type: String,
      required: [true, "Phone model is required"],
      trim: true,
    },
    serviceType: {
      type: String,
      required: [true, "Service type is required"],
      trim: true,
      default: "Sell a dead phone",
    },
    problemDescription: {
      type: String,
      trim: true,
      default: "No symptoms provided",
    },
    address: {
      type: String,
      trim: true,
      default: "",
    },
    preferredOption: {
      type: String,
      trim: true,
      default: "Free Express Courier Pickup",
    },
    payoutMethod: {
      type: String,
      trim: true,
      default: "UPI Instant Transfer",
    },
    estimatedAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    deviceCondition: {
      type: String,
      default: "dead",
    },
    storage: {
      type: String,
      default: "",
    },
    phoneImage: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
      index: true,
    },
    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Helper method to generate unique reference ticket number
repairRequestSchema.statics.generateTicketNumber = function () {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  return `RT-${year}-${randomSuffix}`;
};

export const RepairRequest = mongoose.model("RepairRequest", repairRequestSchema);
