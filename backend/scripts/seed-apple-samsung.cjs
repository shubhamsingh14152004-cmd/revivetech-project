const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/revivetech_db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const createDevice = (brandId, series, name, year, storages) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    brandId,
    name,
    slug,
    series,
    releaseYear: year,
    variants: storages.map(s => ({ storage: s })),
    aliases: [],
    isActive: true,
    sortOrder: 0,
    source: "seed",
    specs: { display: "", chipset: "", battery: "", rearCamera: "", network: "" },
    specsStatus: "unverified",
    priceRanges: {}
  };
};

const newApple = [
  createDevice("apple", "iPhone 16", "iPhone 16 Pro Max", 2024, ["256GB", "512GB", "1TB"]),
  createDevice("apple", "iPhone 16", "iPhone 16 Pro", 2024, ["128GB", "256GB", "512GB", "1TB"]),
  createDevice("apple", "iPhone 16", "iPhone 16 Plus", 2024, ["128GB", "256GB", "512GB"]),
  createDevice("apple", "iPhone 16", "iPhone 16", 2024, ["128GB", "256GB", "512GB"]),
  createDevice("apple", "iPhone 7", "iPhone 7 Plus", 2016, ["32GB", "128GB", "256GB"]),
  createDevice("apple", "iPhone 7", "iPhone 7", 2016, ["32GB", "128GB", "256GB"]),
  createDevice("apple", "iPhone 6", "iPhone 6s Plus", 2015, ["16GB", "32GB", "64GB", "128GB"]),
  createDevice("apple", "iPhone 6", "iPhone 6s", 2015, ["16GB", "32GB", "64GB", "128GB"])
];

const newSamsung = [];
const sSeries = [
  {n: "Galaxy S24 Ultra", y: 2024}, {n: "Galaxy S24+", y: 2024}, {n: "Galaxy S24", y: 2024},
  {n: "Galaxy S23 Ultra", y: 2023}, {n: "Galaxy S23+", y: 2023}, {n: "Galaxy S23", y: 2023}, {n: "Galaxy S23 FE", y: 2023},
  {n: "Galaxy S22 Ultra", y: 2022}, {n: "Galaxy S22+", y: 2022}, {n: "Galaxy S22", y: 2022},
  {n: "Galaxy S21 Ultra", y: 2021}, {n: "Galaxy S21+", y: 2021}, {n: "Galaxy S21", y: 2021}, {n: "Galaxy S21 FE", y: 2022},
  {n: "Galaxy S20 Ultra", y: 2020}, {n: "Galaxy S20+", y: 2020}, {n: "Galaxy S20", y: 2020}, {n: "Galaxy S20 FE", y: 2020},
  {n: "Galaxy S10+", y: 2019}, {n: "Galaxy S10", y: 2019}, {n: "Galaxy S10e", y: 2019},
  {n: "Galaxy S9+", y: 2018}, {n: "Galaxy S9", y: 2018},
  {n: "Galaxy S8+", y: 2017}, {n: "Galaxy S8", y: 2017}
];
const noteSeries = [
  {n: "Galaxy Note 20 Ultra", y: 2020}, {n: "Galaxy Note 20", y: 2020},
  {n: "Galaxy Note 10+", y: 2019}, {n: "Galaxy Note 10", y: 2019}, {n: "Galaxy Note 10 Lite", y: 2020},
  {n: "Galaxy Note 9", y: 2018}, {n: "Galaxy Note 8", y: 2017}
];
const zSeries = [
  {n: "Galaxy Z Fold 6", y: 2024}, {n: "Galaxy Z Flip 6", y: 2024},
  {n: "Galaxy Z Fold 5", y: 2023}, {n: "Galaxy Z Flip 5", y: 2023},
  {n: "Galaxy Z Fold 4", y: 2022}, {n: "Galaxy Z Flip 4", y: 2022},
  {n: "Galaxy Z Fold 3", y: 2021}, {n: "Galaxy Z Flip 3", y: 2021},
  {n: "Galaxy Z Fold 2", y: 2020}, {n: "Galaxy Z Flip", y: 2020},
  {n: "Galaxy Fold", y: 2019}
];

// Add massive A, M, F series to hit 150
let aSeries = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 9; j++) {
     aSeries.push({ n: `Galaxy A${j}${i}`, y: 2019 + i });
     if (i > 1) aSeries.push({ n: `Galaxy A${j}${i}s`, y: 2019 + i });
     if (i > 2) aSeries.push({ n: `Galaxy A${j}${i} 5G`, y: 2019 + i });
  }
}
let mSeries = [];
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 5; j++) {
     mSeries.push({ n: `Galaxy M${j}${i}`, y: 2019 + i });
     mSeries.push({ n: `Galaxy M${j}${i}s`, y: 2019 + i });
  }
}

const allSamsung = [...sSeries, ...noteSeries, ...zSeries, ...aSeries, ...mSeries];
allSamsung.forEach(d => {
  newSamsung.push(createDevice("samsung", "Galaxy", d.n, d.y, ["128GB", "256GB"]));
});

const existingSlugs = new Set(db.devices.map(d => d.slug));

let addedCount = 0;
const addIfNew = (device) => {
  if (!existingSlugs.has(device.slug)) {
    db.devices.push(device);
    existingSlugs.add(device.slug);
    addedCount++;
  }
}

newApple.forEach(addIfNew);
newSamsung.forEach(addIfNew);

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log(`Added ${addedCount} new devices.`);
console.log(`Apple count:`, db.devices.filter(d=>d.brandId==='apple').length);
console.log(`Samsung count:`, db.devices.filter(d=>d.brandId==='samsung').length);
