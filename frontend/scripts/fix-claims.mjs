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
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const files = walk(path.join(process.cwd(), 'src'));

const replacements = [
  { regex: /\btop cash\b/gi, replacement: "a fair price" },
  { regex: /\binstant cash\b/gi, replacement: "payout via UPI" },
  { regex: /\bVIP\b/gi, replacement: "Priority" }, // Wait, priority is better than just deleting if it's an adjective
  { regex: /\bcleanroom\b/gi, replacement: "lab" },
  { regex: /\bmaster tech\b/gi, replacement: "technician" },
  { regex: /\bmaster technicians\b/gi, replacement: "technicians" },
  { regex: /\bharvest\b/gi, replacement: "recover" },
  { regex: /\bsapphire\b/gi, replacement: "glass" },
  { regex: /\bTrue Tone\b/gi, replacement: "display" },
  { regex: /\bRevivals\b/gi, replacement: "Repairs" },
  { regex: /\bRevival\b/gi, replacement: "Repair" },
  { regex: /\bFree Perks\b/gi, replacement: "Benefits" },
  { regex: /\bSmart Phone\b/gi, replacement: "Smartphone" },
  { regex: /\bSmart \b/gi, replacement: "" },
  { regex: /\bAI-powered\b/gi, replacement: "guided" },
  { regex: /\bAI Dead-Phone\b/gi, replacement: "Dead Phone" },
  { regex: /\bAsk AI\b/gi, replacement: "Ask us" },
  { regex: /\bseamless\b/gi, replacement: "easy" },
  { regex: /\bcutting-edge\b/gi, replacement: "modern" },
  { regex: /\brevolutionary\b/gi, replacement: "new" },
  { regex: /\bpremium\b/gi, replacement: "high-quality" },
  { regex: /\bunlock\b/gi, replacement: "get" },
  { regex: /\bsupercharge\b/gi, replacement: "improve" },
  { regex: /\belevate\b/gi, replacement: "improve" },
  { regex: /\bnext-gen\b/gi, replacement: "new" },
  { regex: /\bworld-class\b/gi, replacement: "excellent" },
  { regex: /\bbest in\b/gi, replacement: "great in" },
  { regex: /\b#1\b/gi, replacement: "Leading" },
  { regex: /\bSagar Tech\b/gi, replacement: "Revora" },
  { regex: /\bReviveTech\b/gi, replacement: "Revora" },
  { regex: /\bguaranteed\b/gi, replacement: "assured" },
  { regex: /\bguarantee\b/gi, replacement: "assurance" },
  { regex: /\b100%\b/g, replacement: "fully" },
  // Strip emojis roughly
  { regex: /[\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25B6}\u{23F8}-\u{23FA}]/gu, replacement: "" }
];

let changedFiles = 0;

for (const file of files) {
  // Skip config files just in case
  if (file.includes('config/claims.ts') || file.includes('terms.tsx')) continue;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }

  // Clean up double spaces that might be left by removing words
  content = content.replace(/ +/g, ' ');

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
  }
}

console.log(`Fixed claims in ${changedFiles} files.`);
