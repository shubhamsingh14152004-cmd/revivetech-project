import fs from 'fs';
import path from 'path';

// A rudimentary check for SEO rules on routes
// In a real scenario, this would spin up the dev server and curl pages, 
// or parse the built HTML files in dist/

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

for (const route of routes) {
  const content = fs.readFileSync(route, 'utf8');
  
  // Basic static analysis
  // Check if H1 exists (unless it's just a layout or index wrapper)
  if (!route.includes('__root.tsx') && !route.includes('routeTree.gen.ts')) {
    // These are rough heuristics for a static check
    if (!content.includes('<h1') && !content.includes('<H1')) {
      // It's possible the H1 is in a subcomponent, but let's warn
      console.warn(`[SEO] Warning: No <h1 found in ${path.basename(route)}. Every indexable page must have exactly one H1.`);
    }

    // Check for duplicate H1s
    const h1Matches = [...content.matchAll(/<h1/gi)];
    if (h1Matches.length > 1) {
      console.error(`[SEO] Error: Multiple <h1 tags found in ${path.basename(route)}.`);
      errors++;
    }
  }
}

// Ensure sitemap and robots exist (or will be generated)
// We will generate them in Phase 5.
console.log("SEO check (static) completed.");
if (errors > 0) {
  console.error(`SEO check failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log("SEO check passed.");
}
