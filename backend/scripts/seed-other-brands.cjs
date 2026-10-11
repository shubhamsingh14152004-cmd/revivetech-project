const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'revivetech_db.json');
let db = { devices: [] };

try {
  if (fs.existsSync(DB_PATH)) {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    db = JSON.parse(data);
  }
} catch (e) {
  console.error("Could not read DB file", e);
  process.exit(1);
}

const generateId = () => 'dev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);

const addDevices = (brandId, devices) => {
  let added = 0;
  for (const d of devices) {
    const exists = db.devices.some(existing => 
      existing.brandId === brandId && 
      existing.name.toLowerCase() === d.name.toLowerCase()
    );
    if (!exists) {
      db.devices.push({
        _id: generateId(),
        brandId,
        name: d.name,
        slug: d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        series: d.series || '',
        releaseYear: d.releaseYear || new Date().getFullYear(),
        variants: d.variants || [
          { storage: "128GB" },
          { storage: "256GB" }
        ],
        aliases: [],
        isActive: true,
        sortOrder: 0,
        source: 'seed',
        specsStatus: 'unverified',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      added++;
    }
  }
  console.log(`Added ${added} new devices for ${brandId}.`);
};

// 1. OnePlus (min 15)
const oneplus = [
  { name: "OnePlus 12", series: "Flagship", releaseYear: 2024 },
  { name: "OnePlus 12R", series: "R Series", releaseYear: 2024 },
  { name: "OnePlus 11 5G", series: "Flagship", releaseYear: 2023 },
  { name: "OnePlus 11R 5G", series: "R Series", releaseYear: 2023 },
  { name: "OnePlus 10 Pro 5G", series: "Flagship", releaseYear: 2022 },
  { name: "OnePlus 10T 5G", series: "T Series", releaseYear: 2022 },
  { name: "OnePlus 10R 5G", series: "R Series", releaseYear: 2022 },
  { name: "OnePlus 9 Pro", series: "Flagship", releaseYear: 2021 },
  { name: "OnePlus 9", series: "Flagship", releaseYear: 2021 },
  { name: "OnePlus 9R", series: "R Series", releaseYear: 2021 },
  { name: "OnePlus 9RT", series: "T Series", releaseYear: 2021 },
  { name: "OnePlus 8 Pro", series: "Flagship", releaseYear: 2020 },
  { name: "OnePlus 8T", series: "T Series", releaseYear: 2020 },
  { name: "OnePlus 8", series: "Flagship", releaseYear: 2020 },
  { name: "OnePlus Nord 3 5G", series: "Nord", releaseYear: 2023 },
  { name: "OnePlus Nord CE 3 5G", series: "Nord", releaseYear: 2023 },
  { name: "OnePlus Nord CE 3 Lite 5G", series: "Nord", releaseYear: 2023 },
  { name: "OnePlus Nord 2T 5G", series: "Nord", releaseYear: 2022 },
  { name: "OnePlus Nord 2", series: "Nord", releaseYear: 2021 },
  { name: "OnePlus Nord CE 2", series: "Nord", releaseYear: 2022 }
];
addDevices("oneplus", oneplus);

// 2. Xiaomi / Redmi / POCO (min 15)
const xiaomi = [
  { name: "Xiaomi 14 Ultra", series: "Xiaomi 14", releaseYear: 2024 },
  { name: "Xiaomi 14", series: "Xiaomi 14", releaseYear: 2024 },
  { name: "Xiaomi 13 Pro", series: "Xiaomi 13", releaseYear: 2023 },
  { name: "Xiaomi 13", series: "Xiaomi 13", releaseYear: 2023 },
  { name: "Xiaomi 12 Pro", series: "Xiaomi 12", releaseYear: 2022 },
  { name: "Redmi Note 13 Pro+ 5G", series: "Redmi Note 13", releaseYear: 2024 },
  { name: "Redmi Note 13 Pro 5G", series: "Redmi Note 13", releaseYear: 2024 },
  { name: "Redmi Note 13 5G", series: "Redmi Note 13", releaseYear: 2024 },
  { name: "Redmi Note 12 Pro+ 5G", series: "Redmi Note 12", releaseYear: 2023 },
  { name: "Redmi Note 12 Pro 5G", series: "Redmi Note 12", releaseYear: 2023 },
  { name: "Redmi Note 12 5G", series: "Redmi Note 12", releaseYear: 2023 },
  { name: "POCO X6 Pro 5G", series: "POCO X", releaseYear: 2024 },
  { name: "POCO X6 5G", series: "POCO X", releaseYear: 2024 },
  { name: "POCO F5 5G", series: "POCO F", releaseYear: 2023 },
  { name: "POCO F4 5G", series: "POCO F", releaseYear: 2022 },
  { name: "POCO X5 Pro 5G", series: "POCO X", releaseYear: 2023 }
];
addDevices("xiaomi", xiaomi);

// 3. Oppo (min 15)
const oppo = [
  { name: "Oppo Find N3 Flip", series: "Find", releaseYear: 2023 },
  { name: "Oppo Find N2 Flip", series: "Find", releaseYear: 2022 },
  { name: "Oppo Reno 11 Pro 5G", series: "Reno", releaseYear: 2024 },
  { name: "Oppo Reno 11 5G", series: "Reno", releaseYear: 2024 },
  { name: "Oppo Reno 10 Pro+ 5G", series: "Reno", releaseYear: 2023 },
  { name: "Oppo Reno 10 Pro 5G", series: "Reno", releaseYear: 2023 },
  { name: "Oppo Reno 10 5G", series: "Reno", releaseYear: 2023 },
  { name: "Oppo Reno 8 Pro 5G", series: "Reno", releaseYear: 2022 },
  { name: "Oppo Reno 8 5G", series: "Reno", releaseYear: 2022 },
  { name: "Oppo F25 Pro 5G", series: "F Series", releaseYear: 2024 },
  { name: "Oppo F23 5G", series: "F Series", releaseYear: 2023 },
  { name: "Oppo F21 Pro 5G", series: "F Series", releaseYear: 2022 },
  { name: "Oppo A79 5G", series: "A Series", releaseYear: 2023 },
  { name: "Oppo A78 5G", series: "A Series", releaseYear: 2023 },
  { name: "Oppo A59 5G", series: "A Series", releaseYear: 2023 },
  { name: "Oppo A58", series: "A Series", releaseYear: 2023 }
];
addDevices("oppo", oppo);

// 4. Vivo (min 15)
const vivo = [
  { name: "Vivo X100 Pro", series: "X Series", releaseYear: 2024 },
  { name: "Vivo X100", series: "X Series", releaseYear: 2024 },
  { name: "Vivo X90 Pro", series: "X Series", releaseYear: 2023 },
  { name: "Vivo X90", series: "X Series", releaseYear: 2023 },
  { name: "Vivo X80 Pro", series: "X Series", releaseYear: 2022 },
  { name: "Vivo V30 Pro", series: "V Series", releaseYear: 2024 },
  { name: "Vivo V30", series: "V Series", releaseYear: 2024 },
  { name: "Vivo V29 Pro", series: "V Series", releaseYear: 2023 },
  { name: "Vivo V29", series: "V Series", releaseYear: 2023 },
  { name: "Vivo V27 Pro", series: "V Series", releaseYear: 2023 },
  { name: "Vivo V27", series: "V Series", releaseYear: 2023 },
  { name: "Vivo V25 Pro", series: "V Series", releaseYear: 2022 },
  { name: "Vivo T2 Pro 5G", series: "T Series", releaseYear: 2023 },
  { name: "Vivo T2 5G", series: "T Series", releaseYear: 2023 },
  { name: "Vivo Y200 5G", series: "Y Series", releaseYear: 2023 },
  { name: "Vivo Y100", series: "Y Series", releaseYear: 2023 }
];
addDevices("vivo", vivo);

// 5. iQOO (min 15)
const iqoo = [
  { name: "iQOO 12 5G", series: "Flagship", releaseYear: 2023 },
  { name: "iQOO 11 5G", series: "Flagship", releaseYear: 2023 },
  { name: "iQOO 9 Pro 5G", series: "Flagship", releaseYear: 2022 },
  { name: "iQOO 9T 5G", series: "Flagship", releaseYear: 2022 },
  { name: "iQOO 9 5G", series: "Flagship", releaseYear: 2022 },
  { name: "iQOO Neo 9 Pro 5G", series: "Neo", releaseYear: 2024 },
  { name: "iQOO Neo 7 Pro 5G", series: "Neo", releaseYear: 2023 },
  { name: "iQOO Neo 7 5G", series: "Neo", releaseYear: 2023 },
  { name: "iQOO Neo 6 5G", series: "Neo", releaseYear: 2022 },
  { name: "iQOO Z9 5G", series: "Z Series", releaseYear: 2024 },
  { name: "iQOO Z7 Pro 5G", series: "Z Series", releaseYear: 2023 },
  { name: "iQOO Z7 5G", series: "Z Series", releaseYear: 2023 },
  { name: "iQOO Z7s 5G", series: "Z Series", releaseYear: 2023 },
  { name: "iQOO Z6 Pro 5G", series: "Z Series", releaseYear: 2022 },
  { name: "iQOO Z6 5G", series: "Z Series", releaseYear: 2022 }
];
addDevices("iqoo", iqoo);

// 6. Realme (min 15)
const realme = [
  { name: "Realme 12 Pro+ 5G", series: "Number Series", releaseYear: 2024 },
  { name: "Realme 12 Pro 5G", series: "Number Series", releaseYear: 2024 },
  { name: "Realme 12+ 5G", series: "Number Series", releaseYear: 2024 },
  { name: "Realme 11 Pro+ 5G", series: "Number Series", releaseYear: 2023 },
  { name: "Realme 11 Pro 5G", series: "Number Series", releaseYear: 2023 },
  { name: "Realme 11 5G", series: "Number Series", releaseYear: 2023 },
  { name: "Realme 10 Pro+ 5G", series: "Number Series", releaseYear: 2022 },
  { name: "Realme 10 Pro 5G", series: "Number Series", releaseYear: 2022 },
  { name: "Realme GT 2 Pro", series: "GT Series", releaseYear: 2022 },
  { name: "Realme GT 2", series: "GT Series", releaseYear: 2022 },
  { name: "Realme GT Neo 3", series: "GT Series", releaseYear: 2022 },
  { name: "Realme GT Neo 3T", series: "GT Series", releaseYear: 2022 },
  { name: "Realme Narzo 70 Pro 5G", series: "Narzo", releaseYear: 2024 },
  { name: "Realme Narzo 60 Pro 5G", series: "Narzo", releaseYear: 2023 },
  { name: "Realme Narzo 60 5G", series: "Narzo", releaseYear: 2023 },
  { name: "Realme C67 5G", series: "C Series", releaseYear: 2023 }
];
addDevices("realme", realme);

// 7. Motorola (min 15)
const motorola = [
  { name: "Motorola Edge 50 Pro 5G", series: "Edge", releaseYear: 2024 },
  { name: "Motorola Edge 40 Neo", series: "Edge", releaseYear: 2023 },
  { name: "Motorola Edge 40", series: "Edge", releaseYear: 2023 },
  { name: "Motorola Edge 30 Ultra", series: "Edge", releaseYear: 2022 },
  { name: "Motorola Edge 30 Fusion", series: "Edge", releaseYear: 2022 },
  { name: "Motorola Edge 30 Pro", series: "Edge", releaseYear: 2022 },
  { name: "Motorola Edge 30", series: "Edge", releaseYear: 2022 },
  { name: "Motorola Razr 40 Ultra", series: "Razr", releaseYear: 2023 },
  { name: "Motorola Razr 40", series: "Razr", releaseYear: 2023 },
  { name: "Moto G84 5G", series: "G Series", releaseYear: 2023 },
  { name: "Moto G54 5G", series: "G Series", releaseYear: 2023 },
  { name: "Moto G34 5G", series: "G Series", releaseYear: 2024 },
  { name: "Moto G73 5G", series: "G Series", releaseYear: 2023 },
  { name: "Moto G62 5G", series: "G Series", releaseYear: 2022 },
  { name: "Moto G82 5G", series: "G Series", releaseYear: 2022 },
  { name: "Moto G72", series: "G Series", releaseYear: 2022 }
];
addDevices("motorola", motorola);

// 8. Google Pixel (min 15)
const pixel = [
  { name: "Google Pixel 8 Pro", series: "Pixel 8", releaseYear: 2023 },
  { name: "Google Pixel 8", series: "Pixel 8", releaseYear: 2023 },
  { name: "Google Pixel 7 Pro", series: "Pixel 7", releaseYear: 2022 },
  { name: "Google Pixel 7", series: "Pixel 7", releaseYear: 2022 },
  { name: "Google Pixel 7a", series: "Pixel 7", releaseYear: 2023 },
  { name: "Google Pixel 6 Pro", series: "Pixel 6", releaseYear: 2021 },
  { name: "Google Pixel 6", series: "Pixel 6", releaseYear: 2021 },
  { name: "Google Pixel 6a", series: "Pixel 6", releaseYear: 2022 },
  { name: "Google Pixel 5", series: "Pixel 5", releaseYear: 2020 },
  { name: "Google Pixel 5a", series: "Pixel 5", releaseYear: 2021 },
  { name: "Google Pixel 4 XL", series: "Pixel 4", releaseYear: 2019 },
  { name: "Google Pixel 4", series: "Pixel 4", releaseYear: 2019 },
  { name: "Google Pixel 4a (5G)", series: "Pixel 4", releaseYear: 2020 },
  { name: "Google Pixel 4a", series: "Pixel 4", releaseYear: 2020 },
  { name: "Google Pixel 3 XL", series: "Pixel 3", releaseYear: 2018 },
  { name: "Google Pixel 3", series: "Pixel 3", releaseYear: 2018 }
];
addDevices("pixel", pixel);

// 9. Nothing (seed all 4)
const nothing = [
  { name: "Nothing Phone (1)", series: "Phone", releaseYear: 2022 },
  { name: "Nothing Phone (2)", series: "Phone", releaseYear: 2023 },
  { name: "Nothing Phone (2a)", series: "Phone", releaseYear: 2024 },
  { name: "Nothing CMF Phone 1", series: "CMF", releaseYear: 2024 }
];
addDevices("nothing", nothing);

fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
console.log("Other brands seeded successfully.");
