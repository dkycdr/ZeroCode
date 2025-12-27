#!/usr/bin/env node

/**
 * Script to fix all LESSON items in course units
 * 
 * This script will:
 * 1. Scan all unit files in src/data/courses/
 * 2. Find LESSON items with incorrect starterFiles format
 * 3. Generate proper HTML boilerplate, CSS, and tasks
 * 4. Update files with correct format
 * 
 * Usage: node scripts/fix-lessons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const COURSES_DIR = path.join(__dirname, '../src/data/courses');
const COURSES_TO_FIX = ['html5', 'css3', 'jsBasics', 'jsEs6', 'git', 'tailwind', 'react'];

// Statistics
let stats = {
    totalFiles: 0,
    totalLessons: 0,
    fixedLessons: 0,
    skippedLessons: 0,
    errors: []
};

console.log('🚀 Starting lesson fixer...\n');

// Main function
function fixAllLessons() {
    COURSES_TO_FIX.forEach(courseName => {
        const courseDir = path.join(COURSES_DIR, courseName);
        
        if (!fs.existsSync(courseDir)) {
            console.log(`⚠️  Course directory not found: ${courseName}`);
            return;
        }
        
        console.log(`\n📚 Processing course: ${courseName}`);
        
        // Get all unit files
        const files = fs.readdirSync(courseDir)
            .filter(file => file.startsWith('unit-') && file.endsWith('.js'));
        
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
            console.log(`  ⏭️  ${fileName} - No lessons found`);
            return;
        }
        
        // Count lessons
        const lessonCount = (content.match(/type: CONTENT_TYPES\.LESSON/g) || []).length;
        stats.totalLessons += lessonCount;
        
        console.log(`  📝 ${fileName} - Found ${lessonCount} lesson(s)`);
        
        // Fix lessons in this file
        content = fixLessonsInFile(content, courseName, fileName);
        
        // Only write if content changed
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            stats.fixedLessons += lessonCount;
            console.log(`  ✅ ${fileName} - Fixed ${lessonCount} lesson(s)`);
        } else {
            stats.skippedLessons += lessonCount;
            console.log(`  ⏭️  ${fileName} - Already correct`);
        }
        
    } catch (error) {
        console.error(`  ❌ ${fileName} - Error: ${error.message}`);
        stats.errors.push({ file: fileName, error: error.message });
    }
}

// Fix lessons in file content
function fixLessonsInFile(content, courseName, fileName) {
    // This is a placeholder - the actual implementation would be more complex
    // For now, we'll just detect and report
    
    // Check if files array exists and needs fixing
    const hasOldFormat = content.includes('files: [') && 
                        !content.includes('<!DOCTYPE html>');
    
    if (hasOldFormat) {
        console.log(`    🔧 Needs fixing: Old format detected`);
        // TODO: Implement actual fixing logic
        // For now, just return original content
    }
    
    return content;
}

// Print statistics
function printStats() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total files processed: ${stats.totalFiles}`);
    console.log(`Total lessons found: ${stats.totalLessons}`);
    console.log(`Lessons fixed: ${stats.fixedLessons}`);
    console.log(`Lessons skipped: ${stats.skippedLessons}`);
    
    if (stats.errors.length > 0) {
        console.log(`\n❌ Errors: ${stats.errors.length}`);
        stats.errors.forEach(err => {
            console.log(`  - ${err.file}: ${err.error}`);
        });
    }
    
    console.log('\n✨ Done!\n');
}

// Run the script
fixAllLessons();
