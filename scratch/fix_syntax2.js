const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Global replaces
  content = content.split('h-180px').join('h-[180px]');
  content = content.split('bg-#0B2E59/5').join('bg-[#0B2E59]/5');
  content = content.split('text-#0B2E59').join('text-[#0B2E59]');
  content = content.split('text-#005BFF').join('text-[#005BFF]');
  content = content.split('border-#0B2E59/10').join('border-[#0B2E59]/10');
  content = content.split('bg-#FF7A00/10').join('bg-[#FF7A00]/10');
  content = content.split('bg-#005BFF/10').join('bg-[#005BFF]/10');
  content = content.split('bg-#FF7A00').join('bg-[#FF7A00]');
  content = content.split('text-#FF7A00').join('text-[#FF7A00]');
  content = content.split('bg-#FFF8EC').join('bg-[#FFF8EC]');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Fixed ${changedFiles} files!`);
