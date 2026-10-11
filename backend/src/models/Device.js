import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    brandId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    series: { type: String, default: "" },
    releaseYear: { type: Number },
    variants: [
      {
        ram: { type: String },
        storage: { type: String, required: true },
      },
    ],
    aliases: [{ type: String }],
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
    source: { type: String, enum: ["seed", "admin"], default: "admin" },
    specs: {
      display: { type: String },
      chipset: { type: String },
      battery: { type: String },
      rearCamera: { type: String },
      network: { type: String },
    },
    specsStatus: { type: String, enum: ["verified", "unverified"], default: "unverified" },
    specSourceUrl: { type: String },
    specsVerifiedAt: { type: Date },
    priceRanges: {
      dead: { min: Number, max: Number },
      cracked: { min: Number, max: Number },
      worn: { min: Number, max: Number },
      mint: { min: Number, max: Number },
    },
    updatedBy: { type: String },
  },
  { timestamps: true }
);

deviceSchema.index({ brandId: 1, slug: 1 }, { unique: true });

export const Device = mongoose.model("Device", deviceSchema);
