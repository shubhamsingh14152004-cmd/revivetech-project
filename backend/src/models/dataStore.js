import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Admin } from "./Admin.js";
import { RepairRequest } from "./RepairRequest.js";
import { Device } from "./Device.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, "../../data");
const DB_FILE = path.join(DATA_DIR, "revivetech_db.json");

// Local development fallback file helper (strictly dev-only)
const loadFileDb = () => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const salt = bcrypt.genSaltSync(10);
      const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD;
      if (!defaultPassword) {
        throw new Error("DEFAULT_ADMIN_PASSWORD is required");
      }
      const hashedPassword = bcrypt.hashSync(defaultPassword, salt);
      const defaultEmail = (process.env.DEFAULT_ADMIN_EMAIL || "admin@revivetech.com").toLowerCase().trim();
      const initial = {
        admins: [
          {
            _id: "admin_master_001",
            name: process.env.DEFAULT_ADMIN_NAME || "ReviveTech Admin",
            email: defaultEmail,
            password: hashedPassword,
            role: "superadmin",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        ],
        repairs: [],
        devices: [],
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    console.error("Local dev database read error:", e.message);
    return { admins: [], repairs: [], devices: [] };
  }
};

const saveFileDb = (data) => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (e) {
    console.error("Failed to persist local dev database file:", e.message);
  }
};

const sanitizeAdmin = (admin) => {
  if (!admin) return null;
  const copy = { ...admin };
  delete copy.password;
  return copy;
};

// Guard to enforce MongoDB Atlas in production
const checkProductionDb = () => {
  if (db.isMongooseConnected()) return;
  if (process.env.NODE_ENV === "production") {
    const error = new Error("Database unavailable: MongoDB Atlas connection is required in production.");
    error.statusCode = 503;
    throw error;
  }
};

// Unified Data Access Layer (Mongoose for MongoDB Atlas; local JSON strictly in dev)
export const db = {
  isMongooseConnected: () => mongoose.connection.readyState === 1,

  // ADMIN OPERATIONS
  admin: {
    findByEmail: async (email) => {
      if (db.isMongooseConnected()) {
        return Admin.findOne({ email: email.toLowerCase().trim() });
      }
      checkProductionDb();
      const data = loadFileDb();
      const found = data.admins.find((a) => a.email.toLowerCase() === email.toLowerCase().trim());
      if (!found) return null;
      return {
        ...found,
        comparePassword: async (candidate) => bcrypt.compare(candidate, found.password),
        toJSON: () => sanitizeAdmin(found),
      };
    },

    findById: async (id) => {
      if (db.isMongooseConnected()) {
        return Admin.findById(id).select("-password");
      }
      checkProductionDb();
      const data = loadFileDb();
      const found = data.admins.find((a) => a._id.toString() === id.toString());
      if (!found) return null;
      return sanitizeAdmin(found);
    },

    count: async () => {
      if (db.isMongooseConnected()) {
        return Admin.countDocuments();
      }
      checkProductionDb();
      const data = loadFileDb();
      return data.admins.length;
    },

    create: async ({ name, email, password, role = "admin" }) => {
      if (db.isMongooseConnected()) {
        return Admin.create({ name, email, password, role });
      }
      checkProductionDb();
      const data = loadFileDb();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newAdmin = {
        _id: `admin_${Date.now()}`,
        name,
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      data.admins.push(newAdmin);
      saveFileDb(data);
      return sanitizeAdmin(newAdmin);
    },
  },

  // REPAIR REQUEST OPERATIONS
  repairs: {
    create: async (doc) => {
      if (db.isMongooseConnected()) {
        return RepairRequest.create(doc);
      }
      checkProductionDb();
      const data = loadFileDb();
      const year = new Date().getFullYear();
      const randomSuffix = Math.floor(100000 + Math.random() * 900000);
      const ticketNumber = doc.ticketNumber || `RT-${year}-${randomSuffix}`;

      const newRepair = {
        _id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        ticketNumber,
        customerName: doc.customerName,
        phoneNumber: doc.phoneNumber,
        email: doc.email || "",
        phoneBrand: doc.phoneBrand || "Other Android",
        phoneModel: doc.phoneModel,
        serviceType: doc.serviceType || "Sell a dead phone",
        problemDescription: doc.problemDescription || "No symptoms specified",
        address: doc.address || "",
        preferredOption: doc.preferredOption || "Free Express Courier Pickup",
        payoutMethod: doc.payoutMethod || "UPI Instant Transfer",
        estimatedAmount: Number(doc.estimatedAmount) || 0,
        deviceCondition: doc.deviceCondition || "dead",
        storage: doc.storage || "",
        phoneImage: doc.phoneImage || "",
        status: doc.status || "Pending",
        adminNotes: doc.adminNotes || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      data.repairs.unshift(newRepair);
      saveFileDb(data);
      return newRepair;
    },

    find: async ({ status, search, page = 1, limit = 50 }) => {
      if (db.isMongooseConnected()) {
        const query = {};
        if (status && status !== "all") query.status = status;
        if (search && search.trim()) {
          const searchRegex = new RegExp(search.trim(), "i");
          query.$or = [
            { customerName: searchRegex },
            { phoneNumber: searchRegex },
            { email: searchRegex },
            { phoneBrand: searchRegex },
            { phoneModel: searchRegex },
            { ticketNumber: searchRegex },
          ];
        }
        const skip = (page - 1) * limit;
        const [requests, total] = await Promise.all([
          RepairRequest.find(query).sort("-createdAt").skip(skip).limit(limit),
          RepairRequest.countDocuments(query),
        ]);
        return { requests, total };
      }

      checkProductionDb();
      const data = loadFileDb();
      let filtered = [...data.repairs];

      if (status && status !== "all") {
        filtered = filtered.filter((r) => r.status.toLowerCase() === status.toLowerCase());
      }

      if (search && search.trim()) {
        const q = search.trim().toLowerCase();
        filtered = filtered.filter(
          (r) =>
            r.customerName?.toLowerCase().includes(q) ||
            r.phoneNumber?.toLowerCase().includes(q) ||
            r.email?.toLowerCase().includes(q) ||
            r.phoneBrand?.toLowerCase().includes(q) ||
            r.phoneModel?.toLowerCase().includes(q) ||
            r.ticketNumber?.toLowerCase().includes(q)
        );
      }

      const total = filtered.length;
      const skip = (page - 1) * limit;
      const requests = filtered.slice(skip, skip + limit);

      return { requests, total };
    },

    stats: async () => {
      if (db.isMongooseConnected()) {
        const [total, pending, confirmed, inProgress, completed, cancelled] =
          await Promise.all([
            RepairRequest.countDocuments(),
            RepairRequest.countDocuments({ status: "Pending" }),
            RepairRequest.countDocuments({ status: "Confirmed" }),
            RepairRequest.countDocuments({ status: "In Progress" }),
            RepairRequest.countDocuments({ status: "Completed" }),
            RepairRequest.countDocuments({ status: "Cancelled" }),
          ]);
        return { total, pending, confirmed, inProgress, completed, cancelled };
      }

      checkProductionDb();
      const data = loadFileDb();
      const list = data.repairs || [];
      return {
        total: list.length,
        pending: list.filter((r) => r.status === "Pending").length,
        confirmed: list.filter((r) => r.status === "Confirmed").length,
        inProgress: list.filter((r) => r.status === "In Progress").length,
        completed: list.filter((r) => r.status === "Completed").length,
        cancelled: list.filter((r) => r.status === "Cancelled").length,
      };
    },

    findById: async (id) => {
      if (db.isMongooseConnected()) {
        if (id.startsWith("RT-")) {
          return RepairRequest.findOne({ ticketNumber: id.toUpperCase() });
        }
        return RepairRequest.findById(id);
      }
      checkProductionDb();
      const data = loadFileDb();
      return (
        data.repairs.find(
          (r) => r._id.toString() === id.toString() || r.ticketNumber === id.toUpperCase()
        ) || null
      );
    },

    update: async (id, { status, adminNotes }) => {
      if (db.isMongooseConnected()) {
        const updateFields = {};
        if (status) updateFields.status = status;
        if (adminNotes !== undefined) updateFields.adminNotes = adminNotes;
        return RepairRequest.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
      }

      checkProductionDb();
      const data = loadFileDb();
      const idx = data.repairs.findIndex((r) => r._id.toString() === id.toString());
      if (idx === -1) return null;

      if (status) data.repairs[idx].status = status;
      if (adminNotes !== undefined) data.repairs[idx].adminNotes = adminNotes;
      data.repairs[idx].updatedAt = new Date().toISOString();

      saveFileDb(data);
      return data.repairs[idx];
    },

    delete: async (id) => {
      if (db.isMongooseConnected()) {
        return RepairRequest.findByIdAndDelete(id);
      }
      checkProductionDb();
      const data = loadFileDb();
      const idx = data.repairs.findIndex((r) => r._id.toString() === id.toString());
      if (idx === -1) return null;

      const deleted = data.repairs.splice(idx, 1)[0];
      saveFileDb(data);
      return deleted;
    },
  },

  // DEVICES OPERATIONS
  devices: {
    create: async (doc) => {
      if (db.isMongooseConnected()) {
        return Device.create(doc);
      }
      checkProductionDb();
      const data = loadFileDb();
      const newDevice = {
        _id: `dev_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        ...doc,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (!data.devices) data.devices = [];
      
      // Upsert logic for seed vs admin
      const existingIdx = data.devices.findIndex(d => d.brandId === doc.brandId && d.slug === doc.slug);
      if (existingIdx !== -1) {
        if (data.devices[existingIdx].source === "admin" && doc.source === "seed") {
          return data.devices[existingIdx]; // Don't overwrite admin with seed
        }
        data.devices[existingIdx] = { ...data.devices[existingIdx], ...doc, updatedAt: new Date().toISOString() };
        saveFileDb(data);
        return data.devices[existingIdx];
      }

      data.devices.push(newDevice);
      saveFileDb(data);
      return newDevice;
    },

    find: async ({ brandId, q, active, page = 1, limit = 50 }) => {
      if (db.isMongooseConnected()) {
        const query = {};
        if (brandId) query.brandId = brandId;
        if (active !== undefined) query.isActive = active === "true" || active === true;
        if (q && q.trim()) {
          const searchRegex = new RegExp(q.trim(), "i");
          query.$or = [
            { name: searchRegex },
            { series: searchRegex },
            { aliases: searchRegex },
          ];
        }
        const skip = (page - 1) * limit;
        const [devices, total] = await Promise.all([
          Device.find(query).sort({ sortOrder: 1, name: 1 }).skip(skip).limit(limit),
          Device.countDocuments(query),
        ]);
        return { devices, total };
      }

      checkProductionDb();
      const data = loadFileDb();
      let filtered = data.devices || [];

      if (brandId) {
        filtered = filtered.filter((d) => d.brandId === brandId);
      }
      if (active !== undefined) {
        const isActive = active === "true" || active === true;
        filtered = filtered.filter((d) => d.isActive === isActive);
      }
      if (q && q.trim()) {
        const search = q.trim().toLowerCase();
        filtered = filtered.filter((d) => 
          d.name?.toLowerCase().includes(search) ||
          d.series?.toLowerCase().includes(search) ||
          d.aliases?.some(a => a.toLowerCase().includes(search))
        );
      }

      // Sort by sortOrder, then name
      filtered.sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) return (a.sortOrder || 0) - (b.sortOrder || 0);
        return (a.name || "").localeCompare(b.name || "");
      });

      const total = filtered.length;
      const skip = (page - 1) * limit;
      const devices = filtered.slice(skip, skip + limit);

      return { devices, total };
    },

    findById: async (id) => {
      if (db.isMongooseConnected()) {
        return Device.findById(id);
      }
      checkProductionDb();
      const data = loadFileDb();
      return (data.devices || []).find((d) => d._id.toString() === id.toString()) || null;
    },

    update: async (id, updateDoc) => {
      if (db.isMongooseConnected()) {
        return Device.findByIdAndUpdate(id, { $set: updateDoc }, { new: true });
      }

      checkProductionDb();
      const data = loadFileDb();
      const idx = (data.devices || []).findIndex((d) => d._id.toString() === id.toString());
      if (idx === -1) return null;

      data.devices[idx] = { ...data.devices[idx], ...updateDoc, updatedAt: new Date().toISOString() };
      saveFileDb(data);
      return data.devices[idx];
    },

    delete: async (id) => {
      // We will do soft deletes mostly, but here's actual delete if needed
      if (db.isMongooseConnected()) {
        return Device.findByIdAndDelete(id);
      }
      checkProductionDb();
      const data = loadFileDb();
      const idx = (data.devices || []).findIndex((d) => d._id.toString() === id.toString());
      if (idx === -1) return null;

      const deleted = data.devices.splice(idx, 1)[0];
      saveFileDb(data);
      return deleted;
    },

    count: async (query = {}) => {
      if (db.isMongooseConnected()) {
        return Device.countDocuments(query);
      }
      checkProductionDb();
      const data = loadFileDb();
      return (data.devices || []).filter(d => {
        for (const [k, v] of Object.entries(query)) {
          if (d[k] !== v) return false;
        }
        return true;
      }).length;
    }
  },
};
