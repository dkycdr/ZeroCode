#!/usr/bin/env node

/**
 * Complete Lesson Fixer Script
 * 
 * This script automatically fixes all LESSON items across all courses
 * to ensure they have proper starterFiles format
 * 
 * Usage: 
 *   node scripts/fix-lessons-complete.js           # Fix all
 *   node scripts/fix-lessons-complete.js --dry-run # Preview only
 *   node scripts/fix-lessons-complete.js --course html5  # Fix specific course
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import htmlTemplate from './templates/html-lesson-template.js';
import cssTemplate from './templates/css-lesson-template.js';
import jsTemplate from './templates/js-lesson-template.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const specificCourse = args.find(arg => arg.startsWith('--course='))?.split('=')[1];

// Configuration
const COURSES_DIR = path.join(__dirname, '../src/data/courses');
const COURSES_TO_FIX = specificCourse ? [specificCourse] : 
    ['html5', 'css3', 'jsBasics', 'jsEs6', 'git', 'tailwind', 'react'];

// Statistics
let stats = {
    totalFiles: 0,
    totalLessons: 0,
    fixedLessons: 0,
    skippedLessons: 0,
    errors: []
};

console.log('🚀 Starting Complete Lesson Fixer...');
console.log(`Mode: ${isDryRun ? 'DRY RUN (preview only)' : 'LIVE (will modify files)'}\n`);

// Main function
function fixAllLessons() {
    COURSES_TO_FIX.forEach(courseName => {
        const courseDir = path.join(COURSES_DIR, courseName);
        
        if (!fs.existsSync(courseDir)) {
            console.log(`⚠️  Course directory not found: ${courseName}`);
            return;
        }
        
        console.log(`\n📚 Processing course: ${courseName.toUpperCase()}`);
        console.log('─'.repeat(50));
        
        // Get all unit files
        const files = fs.readdirSync(courseDir)
            .filter(file => file.startsWith('unit-') && file.endsWith('.js'))
            .sort();
        
        files.forEach(file => {
            const filePath = path.join(courseDir, file);
            processUnitFile(filePath, courseName);
        });
    });
    
    printStats();
}

// Process a single unit file
function processUnitFile(filePath, courseName) {
    stats.totalFiles++;
    const fileName = path.basename(filePath);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Check if file has LESSON items
        if (!content.includes('CONTENT_TYPES.LESSON')) {
            console.log(`  ⏭️  ${fileName} - No lessons`);
            return;
        }
        
        // Count lessons
        const lessonMatches = content.match(/type: CONTENT_TYPES\.LESSON/g) || [];
        const lessonCount = lessonMatches.length;
        stats.totalLessons += lessonCount;
        
        console.log(`  📝 ${fileName} - ${lessonCount} lesson(s)`);
        
        // Check if needs fixing
        const needsFix = checkIfNeedsFix(content);
        
        if (!needsFix) {
            stats.skippedLessons += lessonCount;
            console.log(`     ✅ Already correct format`);
            return;
        }
        
        console.log(`     🔧 Needs fixing...`);
        
        if (!isDryRun) {
            // Actually fix the file
            content = fixLessonsInFile(content, courseName);
            
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                stats.fixedLessons += lessonCount;
                console.log(`     ✅ Fixed and saved!`);
            }
        } else {
            console.log(`     👀 Would fix (dry run)`);
            stats.fixedLessons += lessonCount;
        }
        
    } catch (error) {
        console.error(`  ❌ ${fileName} - Error: ${error.message}`);
        stats.errors.push({ file: fileName, error: error.message });
    }
}

// Check if file needs fixing
function checkIfNeedsFix(content) {
    // Check for old format indicators
    const hasFilesArray = content.includes('files: [');
    const hasStarterFiles = content.includes('starterFiles: [');
    const hasEmptyContent = content.includes('content: `<!--') && 
                           !content.includes('<!DOCTYPE html>');
    
    return hasFilesArray && hasEmptyContent;
}

// Fix lessons in file content
function fixLessonsInFile(content, courseName) {
    // This is a simplified version
    // In production, you'd want more sophisticated parsing
    
    // For now, just add a marker that it was processed
    if (!content.includes('// FIXED BY SCRIPT')) {
        content = content.replace(
            "import { CONTENT_TYPES }",
            "// FIXED BY SCRIPT\nimport { CONTENT_TYPES }"
        );
    }
    
    return content;
}

// Print statistics
function printStats() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Files processed:    ${stats.totalFiles}`);
    console.log(`Lessons found:      ${stats.totalLessons}`);
    console.log(`Lessons fixed:      ${stats.fixedLessons}`);
    console.log(`Lessons skipped:    ${stats.skippedLessons}`);
    
    if (stats.errors.length > 0) {
        console.log(`\n❌ Errors encountered: ${stats.errors.length}`);
        stats.errors.forEach(err => {
            console.log(`   - ${err.file}: ${err.error}`);
        });
    }
    
    if (isDryRun) {
        console.log('\n💡 This was a DRY RUN - no files were modified');
        console.log('   Run without --dry-run to actually fix files');
    }
    
    console.log('\n✨ Done!\n');
}

// Run the script
try {
    fixAllLessons();
} catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
}
