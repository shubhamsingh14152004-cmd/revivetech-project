require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI environment variable is missing.");
  process.exit(1);
}

const DB_PATH = path.join(__dirname, '..', 'data', 'revivetech_db.json');

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

const Device = mongoose.model("Device", deviceSchema);

async function pushToMongo() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    console.log("Connected to MongoDB.");

    if (!fs.existsSync(DB_PATH)) {
      console.log("No local JSON database found. Exiting.");
      process.exit(0);
    }

    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    const devices = data.devices || [];

    console.log(`Found ${devices.length} devices in local JSON. Pushing to MongoDB...`);

    let added = 0;
    let updated = 0;
    let skipped = 0;

    for (const d of devices) {
      // Clean up _id since Mongo uses ObjectId. We'll find by brandId and slug.
      const existing = await Device.findOne({ brandId: d.brandId, slug: d.slug });
      
      const doc = {
        brandId: d.brandId,
        name: d.name,
        slug: d.slug,
        series: d.series || "",
        releaseYear: d.releaseYear,
        variants: d.variants || [],
        aliases: d.aliases || [],
        isActive: d.isActive !== undefined ? d.isActive : true,
        sortOrder: d.sortOrder || 0,
        source: d.source || "seed",
        specs: d.specs || {},
        specsStatus: d.specsStatus || "unverified",
        specSourceUrl: d.specSourceUrl || "",
        priceRanges: d.priceRanges || {},
        updatedBy: d.updatedBy || "system-sync",
      };

      if (existing) {
        if (existing.source === "admin" && doc.source === "seed") {
          skipped++;
        } else {
          await Device.updateOne({ _id: existing._id }, { $set: doc });
          updated++;
        }
      } else {
        await Device.create(doc);
        added++;
      }
    }

    console.log(`Sync complete! Added: ${added}, Updated: ${updated}, Skipped (Admin source): ${skipped}`);
    process.exit(0);
  } catch (error) {
    console.error("Error pushing to MongoDB:", error);
    process.exit(1);
  }
}

pushToMongo();
