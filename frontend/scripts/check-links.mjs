import fs from 'fs';
import path from 'path';

// Note: simple implementation as a start
const routesFile = path.join(process.cwd(), 'src/routeTree.gen.ts');
if (!fs.existsSync(routesFile)) {
  console.error("No routeTree.gen.ts found.");
  process.exit(1);
}

// 1. Parse valid routes (very rough extraction)
const routeTreeContent = fs.readFileSync(routesFile, 'utf8');
const routeMatches = [...routeTreeContent.matchAll(/['"](\/[a-zA-Z0-9_-]*)['"]: /g)];
const validRoutes = new Set(routeMatches.map(m => m[1]));
// Also add root
validRoutes.add('/');

let errors = 0;
let warnings = 0;

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walk(path.join(dir, file), fileList);
      }
    } else {
      if (file.endsWith('.tsx')) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const tsxFiles = walk(path.join(process.cwd(), 'src'));
const telLinks = new Set();
const waLinks = new Set();
const mailLinks = new Set();

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  // check to="..."
  const toMatches = [...content.matchAll(/to=["'](.*?)["']/g)];
  for (const m of toMatches) {
    let link = m[1];
    if (link === '' || link === '#') {
      console.error(`Invalid link to="${link}" in ${file}`);
      errors++;
    } else if (link.startsWith('/') && !validRoutes.has(link.split('?')[0].split('#')[0])) {
      console.error(`Link to unknown route to="${link}" in ${file}`);
      errors++;
    }
  }

  // check href="..."
  const hrefMatches = [...content.matchAll(/href=["'](.*?)["']/g)];
  for (const m of hrefMatches) {
    let link = m[1];
    if (link === '' || link === '#' || link.startsWith('javascript:')) {
      console.error(`Invalid link href="${link}" in ${file}`);
      errors++;
    } else if (link.startsWith('/')) {
      // allow some valid static files
      if (!validRoutes.has(link.split('?')[0].split('#')[0]) && !link.includes('.') && !link.startsWith('/api')) {
        console.error(`Link to unknown route href="${link}" in ${file}`);
        errors++;
      }
    } else if (link.startsWith('tel:')) {
      telLinks.add(link);
    } else if (link.startsWith('mailto:')) {
      mailLinks.add(link);
    } else if (link.includes('wa.me')) {
      waLinks.add(link);
    }
  }
}

console.log('--- External Contact Links Found ---');
console.log('TEL:', Array.from(telLinks));
console.log('MAILTO:', Array.from(mailLinks));
console.log('WHATSAPP:', Array.from(waLinks));
console.log('------------------------------------');

if (errors > 0) {
  console.error(`Found ${errors} link errors.`);
  process.exit(1);
} else {
  console.log('Link check passed.');
}
