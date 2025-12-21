import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursesDir = join(__dirname, '../src/data/courses');

const courses = [
    'jsBasics',
    'jsEs6',
    'git',
    'css3',
    'tailwind',
    'react'
];

const refactoredUnits = [7, 8, 9, 10];

console.log('🔍 Checking if template code matches task regex...\n');

let issuesFound = 0;

for (const course of courses) {
    const courseDir = join(coursesDir, course);
    
    for (const unitNum of refactoredUnits) {
        const files = fs.readdirSync(courseDir).filter(f => 
            f.includes(`unit-${unitNum}`) && f.endsWith('.js')
        );
        
        for (const file of files) {
            const filePath = join(courseDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            
            // Extract module
            try {
                const moduleCode = content.replace('export const', 'const').replace('export default', '');
                const module = eval(moduleCode);
                const unit = module[Object.keys(module)[0]] || module;
                
                if (!unit.items) continue;
                
                for (const item of unit.items) {
                    if (item.tasks && item.files) {
                        const templateCode = item.files.map(f => f.content).join('\n');
                        
                        for (const task of item.tasks) {
                            if (task.regex && task.regex.test(templateCode)) {
                                console.log(`❌ ISSUE: ${course}/${file}`);
                                console.log(`   Task: ${task.description}`);
                                console.log(`   Regex: ${task.regex}`);
                                console.log(`   Template already matches!\n`);
                                issuesFound++;
                            }
                        }
                    }
                }
            } catch (e) {
                // Skip files that can't be evaluated
            }
        }
    }
}

if (issuesFound === 0) {
    console.log('✅ No issues found! All templates are clean.');
} else {
    console.log(`\n⚠️  Found ${issuesFound} issues that need fixing.`);
}
