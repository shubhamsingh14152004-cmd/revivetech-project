import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "../../backend/data/revivetech_db.json");
const outPath = path.resolve(__dirname, "../src/content/devices.ts");

if (!fs.existsSync(dbPath)) {
  console.log(`Notice: database file not found at ${dbPath}. Skipping generation (devices.ts is already bundled).`);
  process.exit(0);
}

const rawDb = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const rawDevices = rawDb.devices || [];

// Known benchmark prices from prices.ts
const benchmarkPrices = {
  "iPhone 15 Pro Max": {
    mint: { min: 65000, max: 72000 },
    worn: { min: 50000, max: 58000 },
    cracked: { min: 35000, max: 42000 },
    dead: { min: 15000, max: 20000 },
  },
  "iPhone 15 Pro": {
    mint: { min: 55000, max: 62000 },
    worn: { min: 42000, max: 48000 },
    cracked: { min: 28000, max: 34000 },
    dead: { min: 12000, max: 16000 },
  },
  "iPhone 15 Plus": {
    mint: { min: 45000, max: 50000 },
    worn: { min: 34000, max: 39000 },
    cracked: { min: 22000, max: 27000 },
    dead: { min: 10000, max: 14000 },
  },
  "iPhone 15": {
    mint: { min: 40000, max: 45000 },
    worn: { min: 30000, max: 35000 },
    cracked: { min: 18000, max: 23000 },
    dead: { min: 9000, max: 12000 },
  },
  "iPhone 14 Pro Max": {
    mint: { min: 52000, max: 58000 },
    worn: { min: 40000, max: 46000 },
    cracked: { min: 26000, max: 32000 },
    dead: { min: 12000, max: 16000 },
  },
  "iPhone 14 Pro": {
    mint: { min: 44000, max: 50000 },
    worn: { min: 33000, max: 39000 },
    cracked: { min: 21000, max: 26000 },
    dead: { min: 10000, max: 13000 },
  },
  "iPhone 14": {
    mint: { min: 35000, max: 40000 },
    worn: { min: 25000, max: 30000 },
    cracked: { min: 15000, max: 18000 },
    dead: { min: 8000, max: 10000 },
  },
  "iPhone 13 Pro Max": {
    mint: { min: 42000, max: 48000 },
    worn: { min: 32000, max: 38000 },
    cracked: { min: 20000, max: 25000 },
    dead: { min: 9000, max: 12000 },
  },
  "iPhone 13": {
    mint: { min: 28000, max: 33000 },
    worn: { min: 20000, max: 25000 },
    cracked: { min: 12000, max: 15000 },
    dead: { min: 6000, max: 8000 },
  },
  "iPhone 12": {
    mint: { min: 20000, max: 24000 },
    worn: { min: 14000, max: 18000 },
    cracked: { min: 8000, max: 11000 },
    dead: { min: 4000, max: 6000 },
  },
  "iPhone 11": {
    mint: { min: 15000, max: 18000 },
    worn: { min: 10000, max: 13000 },
    cracked: { min: 5500, max: 7500 },
    dead: { min: 2500, max: 4000 },
  },
  "Galaxy S24 Ultra": {
    mint: { min: 70000, max: 78000 },
    worn: { min: 55000, max: 62000 },
    cracked: { min: 40000, max: 48000 },
    dead: { min: 18000, max: 24000 },
  },
  "Galaxy S24+": {
    mint: { min: 52000, max: 58000 },
    worn: { min: 40000, max: 46000 },
    cracked: { min: 27000, max: 33000 },
    dead: { min: 12000, max: 16000 },
  },
  "Galaxy S24": {
    mint: { min: 44000, max: 50000 },
    worn: { min: 32000, max: 38000 },
    cracked: { min: 20000, max: 25000 },
    dead: { min: 9000, max: 13000 },
  },
  "Galaxy S23 Ultra": {
    mint: { min: 52000, max: 60000 },
    worn: { min: 40000, max: 48000 },
    cracked: { min: 28000, max: 35000 },
    dead: { min: 13000, max: 18000 },
  },
  "Galaxy S23": {
    mint: { min: 38000, max: 45000 },
    worn: { min: 28000, max: 34000 },
    cracked: { min: 18000, max: 22000 },
    dead: { min: 9000, max: 12000 },
  },
  "Pixel 8 Pro": {
    mint: { min: 45000, max: 52000 },
    worn: { min: 35000, max: 40000 },
    cracked: { min: 22000, max: 28000 },
    dead: { min: 12000, max: 16000 },
  },
  "OnePlus 12": {
    mint: { min: 42000, max: 48000 },
    worn: { min: 32000, max: 38000 },
    cracked: { min: 20000, max: 25000 },
    dead: { min: 10000, max: 14000 },
  },
  "OnePlus 11": {
    mint: { min: 28000, max: 34000 },
    worn: { min: 21000, max: 26000 },
    cracked: { min: 13000, max: 17000 },
    dead: { min: 6500, max: 9000 },
  },
};

const devices = rawDevices.map((d) => {
  const item = {
    _id: d._id,
    brandId: d.brandId,
    name: d.name,
    series: d.series || "Other Models",
    releaseYear: d.releaseYear || undefined,
    slug: d.slug,
    variants: (d.variants && d.variants.length > 0)
      ? d.variants.map((v) => ({ storage: v.storage }))
      : [{ storage: "128GB" }],
  };

  if (benchmarkPrices[d.name]) {
    item.priceRanges = benchmarkPrices[d.name];
  } else if (d.priceRanges && Object.keys(d.priceRanges).length > 0) {
    item.priceRanges = d.priceRanges;
  }

  return item;
});

const content = `// Auto-generated static device catalog for Revora
// Contains ${devices.length} verified devices across all supported brands

export interface DeviceVariant {
  storage: string;
}

export interface PriceRangeValues {
  min: number;
  max: number;
}

export interface DevicePriceRanges {
  dead?: PriceRangeValues;
  cracked?: PriceRangeValues;
  worn?: PriceRangeValues;
  mint?: PriceRangeValues;
}

export interface DeviceData {
  _id: string;
  brandId: string;
  name: string;
  series: string;
  releaseYear?: number;
  slug?: string;
  variants: DeviceVariant[];
  priceRanges?: DevicePriceRanges;
}

export const ALL_DEVICES: DeviceData[] = ${JSON.stringify(devices, null, 2)};

const brandIndex: Record<string, DeviceData[]> = {};
for (const dev of ALL_DEVICES) {
  const b = dev.brandId.toLowerCase();
  if (!brandIndex[b]) {
    brandIndex[b] = [];
  }
  brandIndex[b].push(dev);
}

export function getAllDevices(): DeviceData[] {
  return ALL_DEVICES;
}

export function getDevicesByBrand(brandId: string): DeviceData[] {
  if (!brandId) return [];
  const normalized = brandId.toLowerCase().trim();
  return brandIndex[normalized] || [];
}

export function getDeviceByName(name: string): DeviceData | undefined {
  if (!name) return undefined;
  const normalized = name.toLowerCase().trim();
  return ALL_DEVICES.find(d => d.name.toLowerCase() === normalized);
}
`;

fs.writeFileSync(outPath, content, "utf-8");
console.log(`Generated ${devices.length} devices in ${outPath}`);
