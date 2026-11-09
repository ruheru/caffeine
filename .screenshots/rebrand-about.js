const fs = require('fs');

const file = process.argv[2];
const lines = fs.readFileSync(file, 'utf8').split('\n');

const svgStart = lines.findIndex((l) => l.includes('<svg id="emoji"'));
const svgEnd = lines.findIndex((l, i) => i > svgStart && l.includes('</svg>'));
if (svgStart < 0 || svgEnd < 0) throw new Error('svg block not found');

const img = '        <img class="logo" src="${logoDataUrl()}" width="96" height="96" alt="Caffeine" style="border-radius: 20px;" />';
lines.splice(svgStart, svgEnd - svgStart + 1, img);

let src = lines.join('\n');
const header = [
  "const fs = require('fs');",
  "const path = require('path');",
  '',
  'const logoDataUrl = () => {',
  "  const logo = fs.readFileSync(path.join(__dirname, '..', 'about', '256x256.png'));",
  '  return `data:image/png;base64,${logo.toString(\'base64\')}`;',
  '};',
  '',
  ''
].join('\n');

const replacements = [
  ['<title>About Bruno</title>', '<title>About Caffeine</title>'],
  ['<h2 class="title">Bruno ${version}</h2>', '<h2 class="title">Caffeine ${version}</h2>'],
  ['©${currentYear} Bruno Software Inc', '©${currentYear} Caffeine &middot; based on Bruno (MIT)']
];
for (const [from, to] of replacements) {
  if (!src.includes(from)) throw new Error(`missing: ${from}`);
  src = src.replace(from, to);
}

fs.writeFileSync(file, header + src);
console.log('about page rebranded');
