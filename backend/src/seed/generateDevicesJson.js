import fs from 'fs';

const devices = [];

const addDevices = (brandId, seriesName, models) => {
  models.forEach(m => {
    devices.push({
      brandId,
      name: m.name,
      series: seriesName,
      releaseYear: m.year,
      storageOptions: m.storage || ["64GB", "128GB"],
      aliases: m.aliases || [],
      isActive: true,
      sortOrder: m.sortOrder || 0
    });
  });
};

// Apple
addDevices("apple", "iPhone 15", [
  { name: "iPhone 15 Pro Max", year: 2023, storage: ["256GB", "512GB", "1TB"], sortOrder: 10 },
  { name: "iPhone 15 Pro", year: 2023, storage: ["128GB", "256GB", "512GB", "1TB"], sortOrder: 20 },
  { name: "iPhone 15 Plus", year: 2023, storage: ["128GB", "256GB", "512GB"], sortOrder: 30 },
  { name: "iPhone 15", year: 2023, storage: ["128GB", "256GB", "512GB"], sortOrder: 40 },
]);
addDevices("apple", "iPhone 14", [
  { name: "iPhone 14 Pro Max", year: 2022, storage: ["128GB", "256GB", "512GB", "1TB"], sortOrder: 50 },
  { name: "iPhone 14 Pro", year: 2022, storage: ["128GB", "256GB", "512GB", "1TB"], sortOrder: 60 },
  { name: "iPhone 14 Plus", year: 2022, storage: ["128GB", "256GB", "512GB"], sortOrder: 70 },
  { name: "iPhone 14", year: 2022, storage: ["128GB", "256GB", "512GB"], sortOrder: 80 },
]);
addDevices("apple", "iPhone 13", [
  { name: "iPhone 13 Pro Max", year: 2021, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 13 Pro", year: 2021, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 13", year: 2021, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 13 mini", year: 2021, storage: ["128GB", "256GB", "512GB"] },
]);
addDevices("apple", "iPhone 12", [
  { name: "iPhone 12 Pro Max", year: 2020, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 12 Pro", year: 2020, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 12", year: 2020, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone 12 mini", year: 2020, storage: ["64GB", "128GB", "256GB"] },
]);
addDevices("apple", "iPhone 11", [
  { name: "iPhone 11 Pro Max", year: 2019, storage: ["64GB", "256GB", "512GB"] },
  { name: "iPhone 11 Pro", year: 2019, storage: ["64GB", "256GB", "512GB"] },
  { name: "iPhone 11", year: 2019, storage: ["64GB", "128GB", "256GB"] },
]);
addDevices("apple", "Older Models", [
  { name: "iPhone XS Max", year: 2018, storage: ["64GB", "256GB", "512GB"] },
  { name: "iPhone XS", year: 2018, storage: ["64GB", "256GB", "512GB"] },
  { name: "iPhone XR", year: 2018, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone X", year: 2017, storage: ["64GB", "256GB"] },
  { name: "iPhone 8 Plus", year: 2017, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone 8", year: 2017, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone SE (3rd Gen)", year: 2022, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone SE (2nd Gen)", year: 2020, storage: ["64GB", "128GB", "256GB"] },
]);

// Samsung
addDevices("samsung", "Galaxy S Series", [
  { name: "Galaxy S24 Ultra", year: 2024, storage: ["256GB", "512GB", "1TB"], sortOrder: 10 },
  { name: "Galaxy S24+", year: 2024, storage: ["256GB", "512GB"], sortOrder: 20 },
  { name: "Galaxy S24", year: 2024, storage: ["128GB", "256GB", "512GB"], sortOrder: 30 },
  { name: "Galaxy S23 Ultra", year: 2023, storage: ["256GB", "512GB", "1TB"] },
  { name: "Galaxy S23+", year: 2023, storage: ["256GB", "512GB"] },
  { name: "Galaxy S23", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Galaxy S23 FE", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Galaxy S22 Ultra", year: 2022, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "Galaxy S22+", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy S22", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy S21 Ultra", year: 2021, storage: ["128GB", "256GB", "512GB"] },
  { name: "Galaxy S21+", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Galaxy S21", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Galaxy S21 FE", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy S20 Ultra", year: 2020, storage: ["128GB", "512GB"] },
  { name: "Galaxy S20+", year: 2020, storage: ["128GB", "512GB"] },
  { name: "Galaxy S20", year: 2020, storage: ["128GB"] },
  { name: "Galaxy S20 FE", year: 2020, storage: ["128GB", "256GB"] },
  { name: "Galaxy S10+", year: 2019, storage: ["128GB", "512GB", "1TB"] },
  { name: "Galaxy S10", year: 2019, storage: ["128GB", "512GB"] },
  { name: "Galaxy S10e", year: 2019, storage: ["128GB", "256GB"] },
  { name: "Galaxy S9+", year: 2018, storage: ["64GB", "128GB", "256GB"] },
  { name: "Galaxy S9", year: 2018, storage: ["64GB", "128GB", "256GB"] },
]);
addDevices("samsung", "Galaxy Note Series", [
  { name: "Galaxy Note 20 Ultra", year: 2020, storage: ["256GB", "512GB"] },
  { name: "Galaxy Note 20", year: 2020, storage: ["256GB"] },
  { name: "Galaxy Note 10+", year: 2019, storage: ["256GB", "512GB"] },
  { name: "Galaxy Note 10", year: 2019, storage: ["256GB"] },
  { name: "Galaxy Note 9", year: 2018, storage: ["128GB", "512GB"] },
]);
addDevices("samsung", "Galaxy Z Series", [
  { name: "Galaxy Z Fold 5", year: 2023, storage: ["256GB", "512GB", "1TB"] },
  { name: "Galaxy Z Flip 5", year: 2023, storage: ["256GB", "512GB"] },
  { name: "Galaxy Z Fold 4", year: 2022, storage: ["256GB", "512GB", "1TB"] },
  { name: "Galaxy Z Flip 4", year: 2022, storage: ["128GB", "256GB", "512GB"] },
  { name: "Galaxy Z Fold 3", year: 2021, storage: ["256GB", "512GB"] },
  { name: "Galaxy Z Flip 3", year: 2021, storage: ["128GB", "256GB"] },
]);
addDevices("samsung", "Galaxy A Series", [
  { name: "Galaxy A54 5G", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Galaxy A34 5G", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Galaxy A53 5G", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy A73 5G", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy A52s 5G", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Galaxy A52", year: 2021, storage: ["128GB"] },
  { name: "Galaxy A72", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Galaxy A51", year: 2019, storage: ["128GB"] },
  { name: "Galaxy A71", year: 2019, storage: ["128GB"] },
]);
addDevices("samsung", "Galaxy M Series", [
  { name: "Galaxy M54 5G", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Galaxy M34 5G", year: 2023, storage: ["128GB"] },
  { name: "Galaxy M53 5G", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Galaxy M33 5G", year: 2022, storage: ["128GB"] },
  { name: "Galaxy M51", year: 2020, storage: ["128GB"] },
]);
addDevices("samsung", "Galaxy F Series", [
  { name: "Galaxy F54 5G", year: 2023, storage: ["256GB"] },
  { name: "Galaxy F23 5G", year: 2022, storage: ["128GB"] },
]);

// OnePlus
addDevices("oneplus", "Numbered Series", [
  { name: "OnePlus 12", year: 2024, storage: ["256GB", "512GB"] },
  { name: "OnePlus 12R", year: 2024, storage: ["128GB", "256GB"] },
  { name: "OnePlus 11", year: 2023, storage: ["128GB", "256GB"] },
  { name: "OnePlus 11R", year: 2023, storage: ["128GB", "256GB"] },
  { name: "OnePlus 10 Pro", year: 2022, storage: ["128GB", "256GB"] },
  { name: "OnePlus 10T", year: 2022, storage: ["128GB", "256GB"] },
  { name: "OnePlus 10R", year: 2022, storage: ["128GB", "256GB"] },
  { name: "OnePlus 9 Pro", year: 2021, storage: ["128GB", "256GB"] },
  { name: "OnePlus 9", year: 2021, storage: ["128GB", "256GB"] },
  { name: "OnePlus 9R", year: 2021, storage: ["128GB", "256GB"] },
  { name: "OnePlus 8 Pro", year: 2020, storage: ["128GB", "256GB"] },
  { name: "OnePlus 8", year: 2020, storage: ["128GB", "256GB"] },
  { name: "OnePlus 8T", year: 2020, storage: ["128GB", "256GB"] },
  { name: "OnePlus 7 Pro", year: 2019, storage: ["128GB", "256GB"] },
  { name: "OnePlus 7T Pro", year: 2019, storage: ["128GB", "256GB"] },
  { name: "OnePlus 7", year: 2019, storage: ["128GB", "256GB"] },
  { name: "OnePlus 7T", year: 2019, storage: ["128GB", "256GB"] },
  { name: "OnePlus 6T", year: 2018, storage: ["128GB", "256GB"] },
  { name: "OnePlus 6", year: 2018, storage: ["64GB", "128GB", "256GB"] },
]);
addDevices("oneplus", "Nord Series", [
  { name: "OnePlus Nord 3", year: 2023, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord CE 3", year: 2023, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord CE 3 Lite", year: 2023, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord 2T", year: 2022, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord 2", year: 2021, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord CE", year: 2021, storage: ["128GB", "256GB"] },
  { name: "OnePlus Nord", year: 2020, storage: ["64GB", "128GB", "256GB"] },
]);

// Xiaomi, Redmi & POCO
addDevices("xiaomi", "Xiaomi Series", [
  { name: "Xiaomi 14", year: 2024, storage: ["256GB", "512GB"] },
  { name: "Xiaomi 13 Pro", year: 2023, storage: ["256GB", "512GB"] },
  { name: "Xiaomi 12 Pro", year: 2022, storage: ["256GB"] },
  { name: "Xiaomi Mi 11 Ultra", year: 2021, storage: ["256GB"] },
  { name: "Xiaomi Mi 11X Pro", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Xiaomi Mi 11X", year: 2021, storage: ["128GB"] },
  { name: "Xiaomi Mi 10", year: 2020, storage: ["128GB", "256GB"] },
]);
addDevices("xiaomi", "Redmi Note Series", [
  { name: "Redmi Note 13 Pro+", year: 2024, storage: ["256GB", "512GB"] },
  { name: "Redmi Note 13 Pro", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Redmi Note 13", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Redmi Note 12 Pro+", year: 2023, storage: ["256GB"] },
  { name: "Redmi Note 12 Pro", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Redmi Note 11 Pro+", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Redmi Note 10 Pro Max", year: 2021, storage: ["64GB", "128GB"] },
  { name: "Redmi Note 9 Pro Max", year: 2020, storage: ["64GB", "128GB"] },
  { name: "Redmi Note 8 Pro", year: 2019, storage: ["64GB", "128GB"] },
]);
addDevices("xiaomi", "POCO Series", [
  { name: "POCO X6 Pro", year: 2024, storage: ["256GB", "512GB"] },
  { name: "POCO X5 Pro", year: 2023, storage: ["128GB", "256GB"] },
  { name: "POCO F5", year: 2023, storage: ["256GB"] },
  { name: "POCO F4", year: 2022, storage: ["128GB", "256GB"] },
  { name: "POCO X4 Pro", year: 2022, storage: ["128GB"] },
  { name: "POCO X3 Pro", year: 2021, storage: ["128GB"] },
  { name: "POCO F1", year: 2018, storage: ["64GB", "128GB", "256GB"] },
]);

// Oppo
addDevices("oppo", "Reno Series", [
  { name: "Oppo Reno 11 Pro", year: 2024, storage: ["256GB"] },
  { name: "Oppo Reno 11", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Oppo Reno 10 Pro+", year: 2023, storage: ["256GB"] },
  { name: "Oppo Reno 10 Pro", year: 2023, storage: ["256GB"] },
  { name: "Oppo Reno 8 Pro", year: 2022, storage: ["256GB"] },
  { name: "Oppo Reno 7 Pro", year: 2021, storage: ["256GB"] },
]);
addDevices("oppo", "Find Series", [
  { name: "Oppo Find N3 Flip", year: 2023, storage: ["256GB"] },
  { name: "Oppo Find N2 Flip", year: 2023, storage: ["256GB"] },
  { name: "Oppo Find X2", year: 2020, storage: ["256GB"] },
]);
addDevices("oppo", "F and A Series", [
  { name: "Oppo F25 Pro", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Oppo F23", year: 2023, storage: ["256GB"] },
  { name: "Oppo F21 Pro", year: 2022, storage: ["128GB"] },
]);

// Vivo
addDevices("vivo", "X Series", [
  { name: "Vivo X100 Pro", year: 2024, storage: ["512GB"] },
  { name: "Vivo X100", year: 2024, storage: ["256GB", "512GB"] },
  { name: "Vivo X90 Pro", year: 2023, storage: ["256GB"] },
  { name: "Vivo X80 Pro", year: 2022, storage: ["256GB"] },
  { name: "Vivo X70 Pro+", year: 2021, storage: ["256GB"] },
  { name: "Vivo X60 Pro+", year: 2021, storage: ["256GB"] },
]);
addDevices("vivo", "V Series", [
  { name: "Vivo V30 Pro", year: 2024, storage: ["256GB", "512GB"] },
  { name: "Vivo V29 Pro", year: 2023, storage: ["256GB"] },
  { name: "Vivo V27 Pro", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Vivo V25 Pro", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Vivo V23 Pro", year: 2022, storage: ["128GB", "256GB"] },
]);

// iQOO
addDevices("iqoo", "Numbered Series", [
  { name: "iQOO 12", year: 2023, storage: ["256GB", "512GB"] },
  { name: "iQOO 11", year: 2023, storage: ["256GB"] },
  { name: "iQOO 9 Pro", year: 2022, storage: ["256GB"] },
  { name: "iQOO 7 Legend", year: 2021, storage: ["128GB", "256GB"] },
]);
addDevices("iqoo", "Neo Series", [
  { name: "iQOO Neo 9 Pro", year: 2024, storage: ["128GB", "256GB"] },
  { name: "iQOO Neo 7 Pro", year: 2023, storage: ["128GB", "256GB"] },
  { name: "iQOO Neo 6", year: 2022, storage: ["128GB"] },
]);
addDevices("iqoo", "Z Series", [
  { name: "iQOO Z9", year: 2024, storage: ["128GB", "256GB"] },
  { name: "iQOO Z7 Pro", year: 2023, storage: ["128GB", "256GB"] },
]);

// Realme
addDevices("realme", "GT Series", [
  { name: "Realme GT 5 Pro", year: 2023, storage: ["256GB", "512GB"] },
  { name: "Realme GT 2 Pro", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Realme GT Neo 3", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Realme GT Master Edition", year: 2021, storage: ["128GB", "256GB"] },
]);
addDevices("realme", "Numbered Series", [
  { name: "Realme 12 Pro+", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Realme 11 Pro+", year: 2023, storage: ["256GB"] },
  { name: "Realme 10 Pro+", year: 2022, storage: ["128GB"] },
  { name: "Realme 9 Pro+", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Realme 8 Pro", year: 2021, storage: ["128GB"] },
]);

// Motorola
addDevices("motorola", "Edge Series", [
  { name: "Motorola Edge 50 Pro", year: 2024, storage: ["256GB"] },
  { name: "Motorola Edge 40 Neo", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Motorola Edge 30 Ultra", year: 2022, storage: ["256GB"] },
  { name: "Motorola Edge 20 Pro", year: 2021, storage: ["128GB"] },
]);
addDevices("motorola", "Razr Series", [
  { name: "Motorola Razr 40 Ultra", year: 2023, storage: ["256GB"] },
  { name: "Motorola Razr 40", year: 2023, storage: ["256GB"] },
]);
addDevices("motorola", "G Series", [
  { name: "Moto G84", year: 2023, storage: ["256GB"] },
  { name: "Moto G54", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Moto G82", year: 2022, storage: ["128GB"] },
]);

// Google Pixel
addDevices("pixel", "Pixel Series", [
  { name: "Google Pixel 8 Pro", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 8", year: 2023, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 7 Pro", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 7", year: 2022, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 7a", year: 2023, storage: ["128GB"] },
  { name: "Google Pixel 6 Pro", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 6", year: 2021, storage: ["128GB", "256GB"] },
  { name: "Google Pixel 6a", year: 2022, storage: ["128GB"] },
  { name: "Google Pixel 5", year: 2020, storage: ["128GB"] },
  { name: "Google Pixel 4a", year: 2020, storage: ["128GB"] },
  { name: "Google Pixel 4", year: 2019, storage: ["64GB", "128GB"] },
  { name: "Google Pixel 3 XL", year: 2018, storage: ["64GB", "128GB"] },
  { name: "Google Pixel 3", year: 2018, storage: ["64GB", "128GB"] },
]);

// Nothing
addDevices("nothing", "Phone Series", [
  { name: "Nothing Phone (2)", year: 2023, storage: ["128GB", "256GB", "512GB"] },
  { name: "Nothing Phone (2a)", year: 2024, storage: ["128GB", "256GB"] },
  { name: "Nothing Phone (1)", year: 2022, storage: ["128GB", "256GB"] },
  { name: "CMF Phone 1", year: 2024, storage: ["128GB"] },
]);

fs.writeFileSync('devices.json', JSON.stringify(devices, null, 2));
console.log(`Generated devices.json with ${devices.length} devices.`);
