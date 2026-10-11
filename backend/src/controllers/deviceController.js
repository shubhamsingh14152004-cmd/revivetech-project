import { z } from "zod";
import { db } from "../models/dataStore.js";

// Validation schema
const priceRangeSchema = z.object({
  min: z.number().min(0).optional(),
  max: z.number().min(0).optional(),
}).optional();

const deviceSchema = z.object({
  brandId: z.string().min(1).trim(),
  name: z.string().min(1).trim(),
  slug: z.string().min(1).trim(),
  series: z.string().trim().optional(),
  releaseYear: z.number().int().min(2000).max(2100).optional(),
  variants: z.array(z.object({
    ram: z.string().trim().optional(),
    storage: z.string().trim()
  })).optional(),
  aliases: z.array(z.string().trim()).optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  priceRanges: z.object({
    dead: priceRangeSchema,
    cracked: priceRangeSchema,
    worn: priceRangeSchema,
    mint: priceRangeSchema,
  }).optional(),
  specs: z.object({
    display: z.string().optional(),
    chipset: z.string().optional(),
    battery: z.string().optional(),
    rearCamera: z.string().optional(),
    network: z.string().optional(),
  }).optional(),
  specsStatus: z.enum(["verified", "unverified"]).optional(),
  specSourceUrl: z.string().optional(),
  specsVerifiedAt: z.string().datetime().optional(),
}).strict();

// Public endpoints
export const getPublicDevices = async (req, res, next) => {
  try {
    const { brand, page = 1, limit = 500 } = req.query;
    if (!brand) {
      return res.status(400).json({ success: false, message: "brand parameter is required" });
    }
    const query = { brandId: brand, active: true, page: parseInt(page), limit: parseInt(limit) };
    const { devices, total } = await db.devices.find(query);
    
    // Set caching headers: public, s-maxage=300, stale-while-revalidate=600
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    
    // strip specs if unverified
    const safeDevices = devices.map(d => {
      if (d.specsStatus !== "verified") {
        const { specs, ...rest } = d._doc || d;
        return rest;
      }
      return d;
    });

    res.json({ success: true, data: safeDevices, total, page: parseInt(page) });
  } catch (err) {
    next(err);
  }
};

export const searchDevices = async (req, res, next) => {
  try {
    const { q, limit = 20 } = req.query;
    const { devices } = await db.devices.find({ q, active: true, page: 1, limit: parseInt(limit) });
    
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    const safeDevices = devices.map(d => {
      const doc = d._doc || d;
      return { id: doc._id, brandId: doc.brandId, name: doc.name, series: doc.series };
    });
    res.json({ success: true, data: safeDevices });
  } catch (err) {
    next(err);
  }
};

// Admin endpoints
export const getAdminDevices = async (req, res, next) => {
  try {
    const { brand, q, active, page = 1 } = req.query;
    const limit = 50;
    
    const { devices, total } = await db.devices.find({
      brandId: brand,
      q,
      active,
      page: parseInt(page, 10) || 1,
      limit,
    });
    
    res.json({
      success: true,
      data: devices,
      pagination: {
        total,
        page: parseInt(page, 10) || 1,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    next(err);
  }
};

export const createDevice = async (req, res, next) => {
  try {
    const parsed = deviceSchema.parse(req.body);
    parsed.source = "admin";
    parsed.updatedBy = req.admin?.email || "admin";
    const newDevice = await db.devices.create(parsed);
    res.status(201).json({ success: true, data: newDevice });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Validation error", errors: err.errors });
    }
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "A device with this slug and brand already exists." });
    }
    next(err);
  }
};

export const updateDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const parsed = deviceSchema.parse(req.body);
    parsed.source = "admin";
    parsed.updatedBy = req.admin?.email || "admin";
    
    const updated = await db.devices.update(id, parsed);
    if (!updated) {
      return res.status(404).json({ success: false, message: "Device not found" });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Validation error", errors: err.errors });
    }
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "A device with this slug and brand already exists." });
    }
    next(err);
  }
};

export const deleteDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Soft delete: isActive = false
    const updated = await db.devices.update(id, { isActive: false, updatedBy: req.admin?.email || "admin" });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Device not found" });
    }
    res.json({ success: true, message: "Device deactivated", data: updated });
  } catch (err) {
    next(err);
  }
};

export const bulkToggleDevices = async (req, res, next) => {
  try {
    const { ids, isActive } = req.body;
    if (!Array.isArray(ids)) {
      return res.status(400).json({ success: false, message: "ids array is required" });
    }
    const updatedBy = req.admin?.email || "admin";
    for (const id of ids) {
      await db.devices.update(id, { isActive, updatedBy });
    }
    res.json({ success: true, message: `Toggled ${ids.length} devices` });
  } catch (err) {
    next(err);
  }
};

export const importDevices = async (req, res, next) => {
  try {
    // Basic CSV parsing using split
    const csvData = req.body.csv;
    if (!csvData) {
      return res.status(400).json({ success: false, message: "CSV data required" });
    }
    
    const isDryRun = req.query.dryRun === "true";
    const updatedBy = req.admin?.email || "admin";
    
    const lines = csvData.split("\n").filter(l => l.trim() !== "");
    if (lines.length > 5001) {
      return res.status(400).json({ success: false, message: "Max 5000 rows allowed" });
    }
    
    const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
    const results = { created: 0, updated: 0, skipped: 0, errors: [] };
    
    // Process row by row
    for (let i = 1; i < lines.length; i++) {
      try {
        const values = lines[i].split(",").map(v => v.trim().replace(/^"|"$/g, ""));
        const row = {};
        headers.forEach((h, idx) => {
          row[h] = values[idx] || "";
        });
        
        if (!row.brand || !row.model) {
          results.errors.push({ row: i + 1, error: "Missing brand or model" });
          continue;
        }

        const slug = row.model.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        
        const doc = {
          brandId: row.brand,
          name: row.model,
          slug,
          series: row.series || "",
          releaseYear: row.releaseYear ? parseInt(row.releaseYear, 10) : undefined,
          variants: row.variants ? row.variants.split("|").map(s => ({ storage: s.trim() })) : [],
          isActive: row.active ? (row.active.toLowerCase() === "true" || row.active === "1") : true,
          priceRanges: {
            dead: { min: parseInt(row.dead_min) || undefined, max: parseInt(row.dead_max) || undefined },
            cracked: { min: parseInt(row.cracked_min) || undefined, max: parseInt(row.cracked_max) || undefined },
            worn: { min: parseInt(row.worn_min) || undefined, max: parseInt(row.worn_max) || undefined },
            mint: { min: parseInt(row.mint_min) || undefined, max: parseInt(row.mint_max) || undefined },
          },
          specsStatus: row.specsStatus || "unverified",
          updatedBy,
        };

        if (row.id) {
          const existing = await db.devices.findById(row.id);
          if (existing) {
            doc.source = existing.source;
            const parsed = deviceSchema.parse({ ...existing, ...doc });
            if (!isDryRun) {
              await db.devices.update(row.id, parsed);
            }
            results.updated++;
          } else {
            results.errors.push({ row: i + 1, error: `Device ID ${row.id} not found` });
          }
        } else {
          doc.source = "admin";
          const parsed = deviceSchema.parse(doc);
          if (!isDryRun) {
            await db.devices.create(parsed);
          }
          results.created++;
        }
      } catch (err) {
        results.errors.push({ row: i + 1, error: err.message });
      }
    }
    
    res.json({ success: true, results, isDryRun });
  } catch (err) {
    next(err);
  }
};

export const exportDevices = async (req, res, next) => {
  try {
    const { brand, q, active } = req.query;
    const { devices } = await db.devices.find({ brandId: brand, q, active, page: 1, limit: 10000 });
    let csv = "id,brand,model,series,releaseYear,variants,specsStatus,dead_min,dead_max,cracked_min,cracked_max,worn_min,worn_max,mint_min,mint_max,active\n";
    
    for (const d of devices) {
      csv += `${d._id},${d.brandId},"${d.name}","${d.series || ""}",${d.releaseYear || ""},"${(d.variants || []).map(v => v.storage).join("|")}",${d.specsStatus || ""},`;
      csv += `${d.priceRanges?.dead?.min || ""},${d.priceRanges?.dead?.max || ""},`;
      csv += `${d.priceRanges?.cracked?.min || ""},${d.priceRanges?.cracked?.max || ""},`;
      csv += `${d.priceRanges?.worn?.min || ""},${d.priceRanges?.worn?.max || ""},`;
      csv += `${d.priceRanges?.mint?.min || ""},${d.priceRanges?.mint?.max || ""},`;
      csv += `${d.isActive}\n`;
    }
    
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=devices.csv");
    res.send(csv);
  } catch (err) {
    next(err);
  }
};
