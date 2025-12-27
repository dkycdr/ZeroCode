import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursesDir = join(__dirname, '../src/data/courses');

console.log('🔍 Scanning ALL lessons for template code that matches task regex...\n');

const issues = [];

// Get all course files
const courseFiles = glob.sync('**/*.js', { cwd: coursesDir, absolute: true });

for (const filePath of courseFiles) {
    if (filePath.includes('index.js')) continue;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = filePath.replace(coursesDir + '/', '');
    
    // Find all tasks and files sections
    const tasksMatches = [...content.matchAll(/tasks:\s*\[([\s\S]*?)\]/g)];
    const filesMatches = [...content.matchAll(/files:\s*\[([\s\S]*?)\n\s*\]/g)];
    
    if (tasksMatches.length === 0 || filesMatches.length === 0) continue;
    
    // For each lesson with tasks
    for (let i = 0; i < Math.min(tasksMatches.length, filesMatches.length); i++) {
        const tasksBlock = tasksMatches[i][1];
        const filesBlock = filesMatches[i][1];
        
        // Extract regex patterns from tasks
        const regexMatches = [...tasksBlock.matchAll(/regex:\s*\/(.*?)\/([gim]*)/g)];
        
        // Extract template code from files
        const contentMatches = [...filesBlock.matchAll(/content:\s*`([\s\S]*?)`/g)];
        const templateCode = contentMatches.map(m => m[1]).join('\n');
        
        // Check if template matches any task regex
        for (const regexMatch of regexMatches) {
            try {
                const pattern = regexMatch[1];
                const flags = regexMatch[2] || '';
                const regex = new RegExp(pattern, flags);
                
                if (regex.test(templateCode)) {
                    // Extract task description
                    const descMatch = tasksBlock.match(new RegExp(`description:\\s*['"]([^'"]+)['"][^}]*regex:\\s*\\/${pattern}\\/`, 's'));
                    const description = descMatch ? descMatch[1] : 'Unknown task';
                    
                    issues.push({
                        file: relativePath,
                        task: description,
                        regex: `/${pattern}/${flags}`,
                        sample: templateCode.substring(0, 200)
                    });
                }
            } catch (e) {
                // Skip invalid regex
            }
        }
    }
}

if (issues.length === 0) {
    console.log('✅ No issues found! All templates are clean.\n');
} else {
    console.log(`❌ Found ${issues.length} issues:\n`);
    
    const byFile = {};
    issues.forEach(issue => {
        if (!byFile[issue.file]) byFile[issue.file] = [];
        byFile[issue.file].push(issue);
    });
    
    Object.entries(byFile).forEach(([file, fileIssues]) => {
        console.log(`📄 ${file}`);
        fileIssues.forEach(issue => {
            console.log(`   ❌ Task: "${issue.task}"`);
            console.log(`      Regex: ${issue.regex}`);
        });
        console.log('');
    });
    
    console.log(`\n⚠️  Total: ${issues.length} template codes match their task regex`);
    console.log('💡 These templates should only have // comments as hints\n');
}
