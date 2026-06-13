const fs = require('fs');
const path = require('path');

const files = [
  'src/app/search/page.tsx',
  'src/components/Flavours.tsx',
  'src/components/flavours/ChocolateCollection.tsx',
  'src/components/flavours/Cones.tsx',
  'src/components/flavours/Cups.tsx',
  'src/components/flavours/Kulfi.tsx',
  'src/components/flavours/Sundaes.tsx'
];

for (const file of files) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace badge styling
    content = content.replace(/text-\[10px\]/g, 'text-xs sm:text-sm');
    content = content.replace(/px-3 py-1/g, 'px-4 py-1.5');
    content = content.replace(/size=\{10\}/g, 'size={14}');
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated ' + file);
  }
}
