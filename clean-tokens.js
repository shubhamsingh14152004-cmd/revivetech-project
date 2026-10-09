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
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let orig = content;
  content = content.replace(/\bfont-(display|label|mono)\b/g, '');
  content = content.replace(/\btext-\[1[01]px\]\b/g, '');
  content = content.replace(/\btext-gold\b/g, '');
  content = content.replace(/\btext-accent\b/g, '');
  content = content.replace(/\btext-amber-\d+\b/g, '');
  content = content.replace(/\btext-blue-\d+\b/g, '');
  content = content.replace(/\banimate-pulse\b/g, '');
  content = content.replace(/\banimate-bounce\b/g, '');
  content = content.replace(/\bdark:[a-zA-Z0-9_.-]+\b/g, '');
  
  // Clean up extra spaces inside classNames without messing up template literals too much
  content = content.replace(/className=" +/g, 'className="');
  content = content.replace(/ +"/g, '"');
  
  if (orig !== content) {
    fs.writeFileSync(file, content);
    changed++;
  }
});
console.log('Cleaned ' + changed + ' files.');
