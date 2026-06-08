const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix Tailwind arbitrary values missing brackets
  content = content.replace(/(text|bg|border)-#([0-9A-Fa-f]{6})/g, '$1-[#$2]');
  
  // Fix h-180px
  content = content.replace(/h-180px/g, 'h-[180px]');

  // Fix double http urls e.g., "https://foo.com/bar.jpghttps://..."
  // Keep only the last URL
  content = content.replace(/"(https?:\/\/[^"]+)(https?:\/\/[^"]+)"/g, '"$2"');
  
  // Fix path combined with http url e.g., "/images/foo.pnghttps://..."
  content = content.replace(/"(\/[^"]+)(https?:\/\/[^"]+)"/g, '"$2"');

  fs.writeFileSync(filePath, content);
}

console.log("Fixed Tailwind classes and URLs in all flavour components!");
