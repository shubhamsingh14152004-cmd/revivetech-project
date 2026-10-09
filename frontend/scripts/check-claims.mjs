import fs from 'fs';
import path from 'path';

const bannedPhrases = [
  "100%", "guaranteed", "guarantee", "VIP", "cleanroom", "master tech", "harvest", "sapphire", "True Tone", "Revival", "Revivals", "Free Perks", "Smart ", "AI-powered", "AI Dead-Phone", "Ask AI", "seamless", "cutting-edge", "revolutionary", "premium", "unlock", "supercharge", "elevate", "next-gen", "world-class", "best in", "#1", "top cash", "instant cash", "Sagar Tech", "ReviveTech"
];
// Note: "guarantee" is allowed in the warranty policy text, but we'll flag it globally and let the owner manually whitelist if needed, or we can build a whitelist rule.

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

for (const file of files) {
  // Skip the claims config itself and this script
  if (file.includes('config/claims.ts') || file.includes('scripts/check-claims.mjs')) continue;

  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for banned emojis (any emoji code point - simple regex for emojis)
    const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25B6}\u{23F8}-\u{23FA}]/gu;
    if (emojiRegex.test(line)) {
      console.error(`[EMOJI] ${file}:${i + 1}: Found emoji`);
      errors++;
    }

    // Check banned phrases
    for (const phrase of bannedPhrases) {
      // exception for guarantee in terms.tsx
      if (phrase.includes("guarantee") && file.includes("terms.tsx")) continue;
      
      const regex = new RegExp(`\\b${phrase.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\b`, 'i');
      if (regex.test(line)) {
        console.error(`[BANNED PHRASE] ${file}:${i + 1}: Found "${phrase}"`);
        errors++;
      }
    }

    // Flag digit-based stats that look suspicious
    // For example: 12,400, 2.5L, 4.9
    const statRegex = /\b(\d{1,3},\d{3}\+?|\d+\.\dL\+?|\d\.\d stars?)\b/g;
    const statMatches = [...line.matchAll(statRegex)];
    for (const m of statMatches) {
      console.warn(`[UNVERIFIED STAT] ${file}:${i + 1}: Found potential stat "${m[1]}". Ensure it comes from config.`);
    }
  }
}

if (errors > 0) {
  console.error(`Claims check failed with ${errors} errors.`);
  process.exit(1);
} else {
  console.log("Claims check passed.");
}
