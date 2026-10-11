import fs from 'fs';
import path from 'path';
import http from 'http';

const bannedPhrases = [
  "100%", "guaranteed", "guarantee", "VIP", "cleanroom", "master tech", "harvest", "sapphire", "True Tone", "Revival", "Revivals", "Free Perks", "Smart ", "AI-powered", "AI Dead-Phone", "Ask AI", "seamless", "cutting-edge", "revolutionary", "premium", "unlock", "supercharge", "elevate", "next-gen", "world-class", "best in", "#1", "top cash", "instant cash", "Sagar Tech", "ReviveTech"
];

const headBannedTerms = [
  "Same-Day",
  "45-minute",
  "45-min",
  "VIP",
  "complimentary",
  "top cash",
  "payouts",
  "payout",
  "₹",
  "INR",
  "starting at",
  "starting from"
];

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
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.md') || file.endsWith('.txt')) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const files = [
  ...walk(path.join(process.cwd(), 'src')),
  ...walk(path.join(process.cwd(), 'public')).filter(f => path.basename(f).startsWith('llms'))
];

let errors = 0;

// 1. Static codebase scan
for (const file of files) {
  if (file.includes('config/claims.ts') || file.includes('scripts/check-claims.mjs') || file.includes('scripts/clean_all_route_heads.py') || file.includes('scripts/update_heads.py')) continue;

  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for banned emojis
    const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25B6}\u{23F8}-\u{23FA}]/gu;
    if (emojiRegex.test(line)) {
      console.error(`[EMOJI] ${file}:${i + 1}: Found emoji`);
      errors++;
    }

    // Check banned phrases
    for (const phrase of bannedPhrases) {
      if (phrase.includes("guarantee") && file.includes("terms.tsx")) continue;
      
      const regex = new RegExp(`\\b${phrase.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\b`, 'i');
      if (regex.test(line)) {
        console.error(`[BANNED PHRASE] ${file}:${i + 1}: Found "${phrase}"`);
        errors++;
      }
    }

    // Flag digit-based stats that look suspicious
    const statRegex = /\b(\d{1,3},\d{3}\+?|\d+\.\dL\+?|\d\.\d stars?)\b/g;
    const statMatches = [...line.matchAll(statRegex)];
    for (const m of statMatches) {
      console.warn(`[UNVERIFIED STAT] ${file}:${i + 1}: Found potential stat "${m[1]}". Ensure it comes from config.`);
    }
  }
}

// 2. Rendered route head verification
const publicRoutes = [
  '/',
  '/repair',
  '/buyback',
  '/about',
  '/contact',
  '/faq',
  '/screen-repair',
  '/battery-replacement',
  '/dead-phone-repair',
  '/water-damage-repair',
  '/charging-port-repair',
  '/iphone-repair',
  '/samsung-repair',
  '/oneplus-repair',
  '/google-pixel-repair',
  '/vivo-repair',
  '/oppo-repair',
  '/xiaomi-repair',
  '/realme-repair',
  '/motorola-repair',
  '/nothing-repair',
  '/android-repair',
  '/sell-dead-phone',
  '/sell-old-phone',
  '/sell-damaged-phone',
  '/sell-phone',
  '/doorstep-mobile-repair',
  '/mobile-repair-mumbai',
  '/blog'
];

async function fetchHead(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${urlPath}`, { timeout: 3000 }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const headMatch = data.match(/<head>([\s\S]*?)<\/head>/i);
        resolve(headMatch ? headMatch[1] : null);
      });
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

function getStaticHead(urlPath) {
  let fileName = urlPath === '/' ? 'index.tsx' : urlPath.slice(1) + '.tsx';
  const filePath = path.join(process.cwd(), 'src/routes', fileName);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/head:\s*\(\)\s*=>\s*\(\{([\s\S]*?)\}\),/);
  return m ? m[1] : null;
}

async function verifyRouteHeads() {
  console.log(`\nVerifying rendered <head> across ${publicRoutes.length} public routes...`);
  
  for (const r of publicRoutes) {
    let head = await fetchHead(r);
    const source = head ? 'live server' : 'static route definition';
    if (!head) {
      head = getStaticHead(r);
    }

    if (!head) {
      console.warn(`[HEAD CHECK] Could not retrieve head for ${r}`);
      continue;
    }

    // Check banned terms in head
    for (const term of headBannedTerms) {
      const termRegex = new RegExp(`\\b${term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\b`, 'i');
      if (termRegex.test(head)) {
        console.error(`[HEAD BANNED TERM] Route ${r} contains "${term}" in head (${source})`);
        errors++;
      }
    }

    // Specific assertion for homepage
    if (r === '/') {
      // Title extraction
      let title = '';
      const titleMatch = head.match(/<title>([^<]*)<\/title>/i) || head.match(/title:\s*["']([^"']*)["']/);
      if (titleMatch) {
        title = titleMatch[1].replace(/&amp;/g, '&');
      }

      // Description extraction
      let desc = '';
      const descMatch = head.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        head.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i) ||
                        head.match(/name:\s*["']description["'],\s*content:\s*["']([^"']*)["']/);
      if (descMatch) {
        desc = descMatch[1].replace(/&amp;/g, '&');
      }

      console.log(`Homepage Title: "${title}" (${title.length} chars)`);
      console.log(`Homepage Description: "${desc}" (${desc.length} chars)`);

      if (!title || title.length > 60) {
        console.error(`[HEAD ASSERTION] Homepage title must be <= 60 chars. Got ${title.length} chars.`);
        errors++;
      } else {
        console.log(`✓ Homepage title <= 60 chars verified (${title.length}/60)`);
      }

      if (!desc || desc.length < 120 || desc.length > 160) {
        console.error(`[HEAD ASSERTION] Homepage description must be 120-160 chars. Got ${desc.length} chars.`);
        errors++;
      } else {
        console.log(`✓ Homepage description 120-160 chars verified (${desc.length} chars)`);
      }
    }
  }
}

await verifyRouteHeads();

if (errors > 0) {
  console.error(`\nClaims check failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log("\nClaims check passed successfully.");
}
