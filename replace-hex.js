const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}
const files = walk('frontend/src');
let changed = 0;

const hexMap = {
  '\\[#FAFAF7\\]': 'background',
  '\\[#FFFFFF\\]': 'surface',
  '\\[#102A26\\]': 'ink',
  '\\[#5B6B67\\]': 'muted',
  '\\[#E7E9E4\\]': 'line',
  '\\[#007F5F\\]': 'brand',
  '\\[#005B46\\]': 'brand-ink',
  '\\[#EAF6F1\\]': 'brand-tint',
  '\\[#DC2626\\]': 'danger',
  // Map old tokens to new ones as well
  '\\[#DDF5EA\\]': 'brand-tint', // mapped to brand-tint
  '\\[#43C59E\\]': 'brand', // mapped to brand
  '\\[#E5E7EB\\]': 'line', // border
  '\\[#6B7280\\]': 'muted',
  '\\[#475569\\]': 'muted',
  '\\[#CBD5E1\\]': 'line',
  '\\[#0A1412\\]': 'ink',
  '\\[#34D399\\]': 'brand',
  '\\[#10B981\\]': 'brand',
  '\\[#F3F4F6\\]': 'background',
  '\\[#000000\\]': 'ink',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;
  
  // Replace standard hex patterns with mapped tailwind tokens
  for (const [hex, token] of Object.entries(hexMap)) {
    const re = new RegExp(hex, 'gi');
    content = content.replace(re, token);
  }

  if (orig !== content) {
    fs.writeFileSync(file, content);
    changed++;
  }
});
console.log('Replaced hex in ' + changed + ' files.');
