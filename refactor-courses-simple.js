// Simple script to help refactor courses - manual extraction needed
// This script will help identify unit boundaries

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coursesDir = path.join(__dirname, 'src/data/courses');

const coursesToRefactor = [
    'react.js',
    'git.js',
    'tailwind.js',
    'dom.js',
    'php.js',
    'mysql.js',
    'python.js',
    'jsEs6.js',
    'typescript.js',
    'node.js',
    'mongodb.js',
    'nextjs.js',
    'cicd.js'
];

coursesToRefactor.forEach(file => {
    const filePath = path.join(coursesDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${file} not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Find unit boundaries
    const unitMatches = content.matchAll(/\/\/\s*={50,}\s*\/\/\s*UNIT\s+\d+[:\s]+([^\n]+)/g);
    const units = [];
    for (const match of unitMatches) {
        units.push({
            title: match[1].trim(),
            position: match.index
        });
    }

    console.log(`\n📁 ${file}:`);
    console.log(`   Found ${units.length} units`);
    units.forEach((unit, idx) => {
        console.log(`   Unit ${idx + 1}: ${unit.title} (at position ${unit.position})`);
    });
});

console.log('\n✅ Analysis complete!');
console.log('💡 Use this info to manually extract units from each file.');

