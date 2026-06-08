const fs = require('fs');
const path = require('path');

const flavoursDir = path.join(__dirname, '..', 'src', 'components', 'flavours');
const files = fs.readdirSync(flavoursDir).filter(f => f.endsWith('.tsx'));

let allFlavours = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(flavoursDir, file), 'utf8');
  // Match the array assignment. It looks like: const X_CATEGORIES = [ ... ];
  const match = content.match(/const [A-Z_]+_CATEGORIES = (\[[\s\S]+?\]);\n/);
  
  if (match) {
    try {
      // Evaluate the JS object array
      const categories = eval(match[1]);
      
      // Each category has { title, icon, flavours: [ { name, description, image, color, badge } ] }
      // We want to flatten this into a single array of flavours, but maybe attach the category title
      categories.forEach(cat => {
        cat.flavours.forEach(flavor => {
          allFlavours.push({
            ...flavor,
            categoryName: cat.title,
            categoryIcon: cat.icon,
            // also let's save the source page it came from so we can potentially link to it?
            // Actually, the user wants it to just show up. We can just render the cards identically.
          });
        });
      });
    } catch (err) {
      console.error(`Error parsing ${file}:`, err);
    }
  }
});

// We want to write this as a TypeScript module that exports the array
const tsContent = `// Automatically generated from the flavour components
export interface FlavourItem {
  name: string;
  description: string;
  image: string;
  color: string;
  badge: string;
  categoryName: string;
  categoryIcon: string;
}

export const allFlavours: FlavourItem[] = ${JSON.stringify(allFlavours, null, 2)};
`;

const outDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'allFlavours.ts'), tsContent);

console.log(`Successfully extracted ${allFlavours.length} flavours into src/data/allFlavours.ts!`);
