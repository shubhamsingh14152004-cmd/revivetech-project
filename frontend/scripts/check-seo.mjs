import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        walk(fullPath, fileList);
      }
    } else {
      if (file.endsWith('.tsx')) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const routesDir = path.join(process.cwd(), 'src/routes');
const routes = walk(routesDir);

let errors = 0;
const CANONICAL_HOST = 'https://www.sellrepairphone.org';

for (const route of routes) {
  const content = fs.readFileSync(route, 'utf8');
  
  // Check if H1 exists (unless it's just a layout, generated or admin wrapper)
  if (!route.includes('__root.tsx') && !route.includes('routeTree.gen.ts') && !route.includes('admin')) {
    if (!content.includes('<h1') && !content.includes('<H1')) {
      console.warn(`[SEO] Warning: No <h1 found in ${path.basename(route)}. Every indexable page must have exactly one H1.`);
    }

    const h1Matches = [...content.matchAll(/<h1/gi)];
    if (h1Matches.length > 1) {
      console.error(`[SEO] Error: Multiple <h1 tags found in ${path.basename(route)}.`);
      errors++;
    }
  }

  // Ensure no bare apex canonical links
  if (content.includes('href: "https://sellrepairphone.org') || content.includes("href: 'https://sellrepairphone.org")) {
    console.error(`[SEO] Error: Bare apex domain canonical found in ${path.basename(route)}. Must use ${CANONICAL_HOST}.`);
    errors++;
  }
}

// Check robots.txt and sitemap.xml
const robotsPath = path.join(process.cwd(), 'public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (!robots.includes(`${CANONICAL_HOST}/sitemap.xml`)) {
    console.error(`[SEO] Error: robots.txt does not point to canonical sitemap: ${CANONICAL_HOST}/sitemap.xml`);
    errors++;
  }
} else {
  console.error('[SEO] Error: public/robots.txt not found.');
  errors++;
}

const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemap.includes('<loc>https://sellrepairphone.org/')) {
    console.error('[SEO] Error: public/sitemap.xml contains non-canonical apex domain URLs.');
    errors++;
  }
} else {
  console.error('[SEO] Error: public/sitemap.xml not found.');
  errors++;
}

console.log("SEO check completed.");
if (errors > 0) {
  console.error(`SEO check failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log("SEO check passed.");
}
