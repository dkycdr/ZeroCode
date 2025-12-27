import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursesDir = join(__dirname, '../src/data/courses');

console.log('🧹 Cleaning template code in ALL lessons...\n');

let filesFixed = 0;
let templatesFixed = 0;

// Get all course files
const courseFiles = glob.sync('**/*.js', { cwd: coursesDir, absolute: true });

for (const filePath of courseFiles) {
    if (filePath.includes('index.js')) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    const relativePath = filePath.replace(coursesDir + '/', '');
    
    let fileModified = false;
    
    // Pattern to find script.js files with content
    const scriptJsPattern = /({[\s]*name:\s*['"]script\.js['"],[\s]*language:\s*['"]javascript['"],[\s]*content:\s*`)([^`]+)(`[\s]*})/g;
    
    content = content.replace(scriptJsPattern, (match, before, templateContent, after) => {
        // Check if template has actual code (not just comments)
        const lines = templateContent.split('\n');
        const hasCode = lines.some(line => {
            const trimmed = line.trim();
            // Check if line has code (not empty, not just comment, not just closing brace)
            return trimmed && 
                   !trimmed.startsWith('//') && 
                   trimmed !== '}' &&
                   trimmed !== '};' &&
                   trimmed !== '},' &&
                   !trimmed.match(/^\/\*[\s\S]*?\*\/$/);
        });
        
        if (hasCode) {
            // Extract task hints from comments
            const hints = [];
            let currentHint = '';
            
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith('//')) {
                    const comment = trimmed.replace(/^\/\/\s*/, '');
                    // Skip example code comments
                    if (!comment.match(/^(let|const|var|function|class|\{|\}|\.)/)) {
                        if (comment.match(/^(Task|Step|\d+\.)/i)) {
                            if (currentHint) hints.push(currentHint);
                            currentHint = comment;
                        } else if (currentHint && comment) {
                            currentHint += ' ' + comment;
                        } else if (comment) {
                            currentHint = comment;
                        }
                    }
                }
            }
            if (currentHint) hints.push(currentHint);
            
            // Create clean template with only hints
            let cleanTemplate = '';
            if (hints.length > 0) {
                cleanTemplate = hints.map(hint => `// ${hint}`).join('\n') + '\n\n';
            } else {
                cleanTemplate = '// Write your code here\n\n';
            }
            
            console.log(`   ✓ Cleaned template in ${relativePath}`);
            templatesFixed++;
            fileModified = true;
            
            return before + cleanTemplate + after;
        }
        
        return match;
    });
    
    // Also clean main.py files for Python
    const pythonPattern = /({[\s]*name:\s*['"]main\.py['"],[\s]*language:\s*['"]python['"],[\s]*content:\s*`)([^`]+)(`[\s]*})/g;
    
    content = content.replace(pythonPattern, (match, before, templateContent, after) => {
        const lines = templateContent.split('\n');
        const hasCode = lines.some(line => {
            const trimmed = line.trim();
            return trimmed && 
                   !trimmed.startsWith('#') && 
                   trimmed !== '}' &&
                   !trimmed.match(/^"""[\s\S]*?"""$/);
        });
        
        if (hasCode) {
            const hints = [];
            let currentHint = '';
            
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith('#')) {
                    const comment = trimmed.replace(/^#\s*/, '');
                    if (!comment.match(/^(import|from|def|class|print|=)/)) {
                        if (comment.match(/^(Task|Step|\d+\.)/i)) {
                            if (currentHint) hints.push(currentHint);
                            currentHint = comment;
                        } else if (currentHint && comment) {
                            currentHint += ' ' + comment;
                        } else if (comment) {
                            currentHint = comment;
                        }
                    }
                }
            }
            if (currentHint) hints.push(currentHint);
            
            let cleanTemplate = '';
            if (hints.length > 0) {
                cleanTemplate = hints.map(hint => `# ${hint}`).join('\n') + '\n\n';
            } else {
                cleanTemplate = '# Write your code here\n\n';
            }
            
            console.log(`   ✓ Cleaned Python template in ${relativePath}`);
            templatesFixed++;
            fileModified = true;
            
            return before + cleanTemplate + after;
        }
        
        return match;
    });
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        filesFixed++;
        console.log(`✅ Fixed: ${relativePath}\n`);
    }
}

console.log(`\n🎉 Done!`);
console.log(`   Files modified: ${filesFixed}`);
console.log(`   Templates cleaned: ${templatesFixed}\n`);
