import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "../config/db.js";
import { Device } from "../models/Device.js";
import { db } from "../models/dataStore.js";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEVICES_FILE = path.join(__dirname, "devices.json");

const seedDevices = async () => {
  try {
    await connectDB();
    const raw = fs.readFileSync(DEVICES_FILE, "utf8");
    const devices = JSON.parse(raw);

    console.log(`Seeding ${devices.length} devices...`);
    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const doc of devices) {
      doc.source = "seed";
      doc.slug = doc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      if (db.isMongooseConnected()) {
        const existing = await Device.findOne({ brandId: doc.brandId, slug: doc.slug });
        if (existing) {
          if (existing.source === "admin") {
            skipped++;
            continue;
          }
          await Device.updateOne({ _id: existing._id }, { $set: doc });
          updated++;
        } else {
          await Device.create(doc);
          created++;
        }
      } else {
        // Use dataStore local logic
        const result = await db.devices.create(doc);
        // dataStore create does upsert
        updated++; // We just treat it as updated/created for summary
      }
    }

    console.log(`Seed complete. Created: ${created}, Updated: ${updated}, Skipped: ${skipped}`);
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seedDevices();
