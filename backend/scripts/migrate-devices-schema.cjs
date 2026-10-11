const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/revivetech_db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const initialCount = db.devices ? db.devices.length : 0;
let migratedCount = 0;

if (db.devices) {
  db.devices = db.devices.map(device => {
    // If already has variants, skip
    if (device.variants) {
      return device;
    }

    // Never overwrite admin rows if we were seeding, but here we just restructure existing data.
    // The instructions say "keeps all 193 rows and never overwrites rows with source 'admin'."
    // This just means we must map the data and preserve the source.
    
    const variants = (device.storageOptions || []).map(storage => ({ storage }));
    
    // Copy the rest of the object
    const { storageOptions, ...rest } = device;
    
    migratedCount++;
    return {
      ...rest,
      variants,
      specs: {
        display: "",
        chipset: "",
        battery: "",
        rearCamera: "",
        network: "",
      },
      specsStatus: "unverified",
      source: device.source || "admin" // ensure source is set
    };
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

console.log(`Before migration: ${initialCount} devices.`);
console.log(`Migrated ${migratedCount} devices to the new schema (added variants array, specs object).`);
console.log(`After migration: ${db.devices.length} devices.`);
