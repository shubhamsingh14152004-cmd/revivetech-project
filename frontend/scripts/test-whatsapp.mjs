import { createJiti } from 'jiti';
import assert from 'assert';

const jiti = createJiti(import.meta.url);
const { buildWhatsAppMessage, waHref } = jiti('../src/lib/whatsapp.ts');
const { CONDITIONS, getConditionLabel } = jiti('../src/content/conditions.ts');

console.log('--- RUNNING WHATSAPP MESSAGE TESTS ---\n');

const kinds = [
  'SELL',
  'SELL_DEAD',
  'REPAIR',
  'MODEL_NOT_LISTED',
  'CATALOG_ROW',
  'FIX_OR_SELL',
  'MULTIPLE',
  'TRACK',
  'PAGE_CONTEXT',
  'GENERAL',
];

const sampleData = {
  SELL: {
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    condition: 'working',
    hasBox: true,
  },
  SELL_DEAD: {
    brand: 'Samsung',
    model: 'Galaxy S22 Ultra',
    faultDesc: 'Won\'t turn on after drop',
    name: 'Rahul',
    pincode: '400001',
  },
  REPAIR: {
    brand: 'Apple',
    model: 'iPhone 14',
    issues: ['Screen & OLED', 'Battery'],
    serviceType: 'In-Store Lab',
    slot: 'Tomorrow at 2:00 PM',
    name: 'Priya',
    pincode: '400053',
  },
  MODEL_NOT_LISTED: {
    brand: 'Nothing',
    searchedName: 'Phone (2a) Special Edition',
  },
  CATALOG_ROW: {
    brand: 'OnePlus',
    model: '12R',
    storage: '128GB',
  },
  FIX_OR_SELL: {
    brand: 'Google',
    model: 'Pixel 7',
    issue: 'Cracked screen and low battery backup',
  },
  MULTIPLE: {
    count: 3,
    brands: 'Apple, OnePlus, Xiaomi',
  },
  TRACK: {
    ticketNumber: 'RT-8842',
    name: 'Vikram',
  },
  PAGE_CONTEXT: {
    pageTitle: 'Doorstep Mobile Repair in Mumbai',
  },
  GENERAL: {},
};

// 1. Business hours test: No decoded message contains "available", "AM", "PM", "hours" when no note is entered
console.log('1. Testing that business hours are never in messages when no note entered...');
for (const kind of kinds) {
  // Clear any slot notes or times for REPAIR when checking hours leakage
  const data = kind === 'REPAIR' 
    ? { brand: 'Apple', model: 'iPhone 14', issues: ['Screen replacement'], serviceType: 'Lab' }
    : { ...sampleData[kind] };
  delete data.note;

  const msg = buildWhatsAppMessage(kind, data);
  assert(!msg.includes('available'), `Message for ${kind} contains "available":\n${msg}`);
  assert(!msg.includes('hours'), `Message for ${kind} contains "hours":\n${msg}`);
  assert(!msg.includes('AM'), `Message for ${kind} contains "AM":\n${msg}`);
  assert(!msg.includes('PM'), `Message for ${kind} contains "PM":\n${msg}`);
}
console.log('  ✓ Pass: Business hours never appear in customer messages.\n');

// 2. Condition text test: Exact labels used, no raw keys (working, mint, worn) ever appear
console.log('2. Testing condition labels & raw keys prevention...');
const rawKeysToTest = ['working', 'mint', 'flawed', 'worn', 'broken_screen', 'cracked', 'dead'];
for (const key of rawKeysToTest) {
  const msg = buildWhatsAppMessage('SELL', {
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    condition: key,
    hasBox: true,
  });

  // Must not contain raw keys
  assert(!/\bworking\b/i.test(msg), `Message contains raw key "working" when input was "${key}":\n${msg}`);
  assert(!/\bmint\b/i.test(msg), `Message contains raw key "mint" when input was "${key}":\n${msg}`);
  assert(!/\bworn\b/i.test(msg), `Message contains raw key "worn" when input was "${key}":\n${msg}`);
  assert(!/\bbroken_screen\b/i.test(msg), `Message contains raw key "broken_screen" when input was "${key}":\n${msg}`);
  assert(!/\bflawed\b/i.test(msg), `Message contains raw key "flawed" when input was "${key}":\n${msg}`);

  // Must contain one of the canonical labels
  const hasCanonicalLabel = CONDITIONS.some(c => msg.includes(`Condition: ${c.label}`));
  assert(hasCanonicalLabel, `Message does not contain canonical condition label for key "${key}":\n${msg}`);
}
console.log('  ✓ Pass: No raw keys (working, mint, worn, flawed, broken_screen) appear; canonical labels used.\n');

// 3. Exact closing lines test
console.log('3. Testing exact closing lines for each template...');
const sellMsg = buildWhatsAppMessage('SELL', sampleData.SELL);
assert(sellMsg.endsWith('Please share the price and pickup details.'), `SELL closing line incorrect:\n${sellMsg}`);

const sellDeadMsg = buildWhatsAppMessage('SELL_DEAD', sampleData.SELL_DEAD);
assert(sellDeadMsg.endsWith('Please tell me if you can take it and share the price.'), `SELL_DEAD closing line incorrect:\n${sellDeadMsg}`);

const repairMsg = buildWhatsAppMessage('REPAIR', sampleData.REPAIR);
assert(repairMsg.endsWith('Please share the repair price and the time needed.'), `REPAIR closing line incorrect:\n${repairMsg}`);

const catalogMsg = buildWhatsAppMessage('CATALOG_ROW', sampleData.CATALOG_ROW);
assert(catalogMsg.endsWith('I will share the condition and photos here.'), `CATALOG_ROW closing line incorrect:\n${catalogMsg}`);
console.log('  ✓ Pass: All templates end with their exact closing request lines.\n');

// 4. Special characters test
console.log('4. Testing special characters...');
const specialMsg = buildWhatsAppMessage('SELL', {
  brand: 'Samsung',
  model: 'Galaxy S23+',
  storage: '256GB',
  condition: 'working',
  note: "It's in great condition, स्क्रीन बिल्कुल सही है",
});
assert(specialMsg.includes('Galaxy S23+'), 'Model with plus symbol should survive');
assert(specialMsg.includes("It's"), 'Apostrophe should survive');
assert(specialMsg.includes('स्क्रीन बिल्कुल सही है'), 'Hindi unicode text should survive');
console.log('  ✓ Pass: Special characters (symbols, apostrophes, Hindi unicode) survived.\n');

// 5. Decoded message snapshots for all kinds
console.log('5. SNAPSHOTS OF DECODED MESSAGES FOR ALL KINDS:\n');
const snapshots = {};
for (const kind of kinds) {
  const msg = buildWhatsAppMessage(kind, sampleData[kind]);
  snapshots[kind] = msg;
  console.log(`==================== [${kind}] ====================`);
  console.log(msg);
  console.log('');
}

console.log('--- ALL WHATSAPP TESTS PASSED SUCCESSFULLY! ---');
