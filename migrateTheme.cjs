const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'pages');

const replacements = [
  // Page backgrounds and text defaults
  { from: /bg-white/g, to: 'bg-surface-container/20 backdrop-blur-md border border-outline-variant/20' }, // For cards/containers that were white
  { from: /bg-gray-50/g, to: 'bg-surface-container-low/30' },
  { from: /text-gray-900/g, to: 'text-on-surface font-headline' },
  { from: /text-gray-800/g, to: 'text-on-surface' },
  { from: /text-gray-700/g, to: 'text-on-surface-variant' },
  { from: /text-gray-600/g, to: 'text-on-surface-variant' },
  { from: /text-gray-500/g, to: 'text-outline' },
  { from: /border-gray-100/g, to: 'border-outline-variant/20' },
  { from: /border-gray-200/g, to: 'border-outline-variant/30' },
  { from: /border-gray-300/g, to: 'border-outline-variant/40' },
  { from: /border-slate-100/g, to: 'border-outline-variant/20' },
  { from: /border-slate-200/g, to: 'border-outline-variant/30' },
  { from: /border-b border-gray-200/g, to: 'border-b border-outline-variant/20' },

  // Buttons/Highlights
  { from: /bg-primary-600(?!\/)/g, to: 'bg-gradient-to-br from-primary to-primary-dim shadow-[0_0_20px_rgba(139,92,246,0.2)] border-none' },
  { from: /text-white/g, to: 'text-on-primary' },
  { from: /hover:bg-primary-700/g, to: 'hover:scale-105 active:scale-95 transition-all' },
  
  // Specific hero fixes
  { from: /bg-gradient-to-br from-primary-50 to-primary-50/g, to: 'digital-obsidian text-on-surface' },
  
  // Fix font body container
  { from: /flex flex-col min-h-screen bg-surface-container\/20 backdrop-blur-md border border-outline-variant\/20 text-on-surface font-headline/g, to: 'font-body flex flex-col min-h-screen digital-obsidian text-on-surface selection:bg-primary/30 selection:text-primary' },

  // Component shadows
  { from: /shadow-lg/g, to: 'shadow-[0_0_20px_rgba(0,0,0,0.6)]' },
  { from: /shadow-md/g, to: 'shadow-[0_0_15px_rgba(0,0,0,0.4)]' },
  { from: /shadow-sm/g, to: 'shadow-[0_0_10px_rgba(0,0,0,0.3)]' },
  { from: /shadow\b(?!\-\[)/g, to: 'shadow-[0_0_15px_rgba(0,0,0,0.5)]' },
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx')) {
      // Don't modify the index/tools page again as they are natively Stitch-generated
      if (fullPath.includes('pages\\index.page.jsx') || fullPath.includes('pages/index.page.jsx') || 
          fullPath.includes('pages\\tools\\index.page.jsx') || fullPath.includes('pages/tools/index.page.jsx')) {
        continue;
      }

      let content = fs.readFileSync(fullPath, 'utf8');
      replacements.forEach(({ from, to }) => {
        content = content.replace(from, to);
      });
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated: ${fullPath}`);
    }
  }
}

processDirectory(targetDir);
console.log('Migration complete.');
