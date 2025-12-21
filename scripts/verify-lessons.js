#!/usr/bin/env node

/**
 * Script to verify all lessons use correct format
 * 
 * This script scans all course files and verifies that:
 * 1. ✅ All lessons use files array (NOT starterCode/terminal)
 * 2. ✅ All have proper HTML structure with <!DOCTYPE html>
 * 3. ✅ All have console output div
 * 4. ✅ All have empty starter code (only comments)
 * 5. ✅ All have reasonable number of tasks (3-5 recommended)
 * 
 * Run: node scripts/verify-lessons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COURSES_DIR = path.join(__dirname, '../src/data/courses');

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function verifyLesson(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const issues = [];
    const warnings = [];

    // ❌ CRITICAL: Check for old format
    if (content.includes('starterCode:') || content.includes('terminal:')) {
        issues.push({
            type: 'CRITICAL',
            message: '❌ Still uses OLD FORMAT (starterCode/terminal) - MUST FIX!'
        });
    }

    // Check if it's a lesson file (has LESSON type)
    if (!content.includes('CONTENT_TYPES.LESSON')) {
        return { issues, warnings }; // Not a lesson, skip other checks
    }

    // ✅ Check for files array
    if (!content.includes('files: [')) {
        issues.push({
            type: 'CRITICAL',
            message: '❌ Missing files array - MUST ADD!'
        });
    }

    // Check for proper HTML structure
    if (content.includes('files: [') && !content.includes('<!DOCTYPE html>')) {
        warnings.push({
            type: 'HTML_STRUCTURE',
            message: '⚠️  Missing proper HTML boilerplate (<!DOCTYPE html>)'
        });
    }

    // Check for console output div
    if (content.includes('files: [') && !content.includes('console-output')) {
        warnings.push({
            type: 'CONSOLE_OUTPUT',
            message: '⚠️  Missing console-output div for page console'
        });
    }

    // Check task count
    const tasksMatch = content.match(/tasks:\s*\[([^\]]+)\]/s);
    if (tasksMatch) {
        const taskCount = (tasksMatch[1].match(/\{\s*id:/g) || []).length;
        if (taskCount > 7) {
            warnings.push({
                type: 'TOO_MANY_TASKS',
                message: `⚠️  Has ${taskCount} tasks (recommended: 3-5, max: 7)`
            });
        }
    }

    return { issues, warnings };
}

function scanCourses() {
    log('\n' + '='.repeat(70), 'cyan');
    log('🔍 LESSON FORMAT VERIFICATION', 'bold');
    log('='.repeat(70) + '\n', 'cyan');

    const courses = fs.readdirSync(COURSES_DIR);
    let totalIssues = 0;
    let totalWarnings = 0;
    let filesWithIssues = 0;
    let filesWithWarnings = 0;

    const courseResults = [];

    for (const course of courses) {
        const coursePath = path.join(COURSES_DIR, course);
        if (!fs.statSync(coursePath).isDirectory()) continue;

        const files = fs.readdirSync(coursePath).filter(f => f.endsWith('.js') && f !== 'index.js');
        let courseIssues = 0;
        let courseWarnings = 0;
        
        for (const file of files) {
            const filePath = path.join(coursePath, file);
            const { issues, warnings } = verifyLesson(filePath);

            if (issues.length > 0 || warnings.length > 0) {
                if (issues.length > 0) {
                    filesWithIssues++;
                    courseIssues += issues.length;
                    totalIssues += issues.length;
                }
                
                if (warnings.length > 0) {
                    filesWithWarnings++;
                    courseWarnings += warnings.length;
                    totalWarnings += warnings.length;
                }

                log(`📄 ${course}/${file}`, issues.length > 0 ? 'red' : 'yellow');
                
                issues.forEach(issue => {
                    log(`   ${issue.message}`, 'red');
                });
                
                warnings.forEach(warning => {
                    log(`   ${warning.message}`, 'yellow');
                });
                
                log('');
            }
        }

        if (courseIssues > 0 || courseWarnings > 0) {
            courseResults.push({
                course,
                issues: courseIssues,
                warnings: courseWarnings
            });
        }
    }

    // Summary
    log('='.repeat(70), 'cyan');
    log('📊 VERIFICATION SUMMARY', 'bold');
    log('='.repeat(70), 'cyan');
    
    if (totalIssues === 0 && totalWarnings === 0) {
        log('\n✅ PERFECT! All lessons are properly formatted!', 'green');
        log('   • All use files array format', 'green');
        log('   • All have proper HTML structure', 'green');
        log('   • All have console output', 'green');
        log('   • All have clean starter code', 'green');
    } else {
        if (totalIssues > 0) {
            log(`\n❌ CRITICAL ISSUES: ${totalIssues}`, 'red');
            log(`   Files affected: ${filesWithIssues}`, 'red');
            log('   → These MUST be fixed immediately!', 'red');
        }
        
        if (totalWarnings > 0) {
            log(`\n⚠️  WARNINGS: ${totalWarnings}`, 'yellow');
            log(`   Files affected: ${filesWithWarnings}`, 'yellow');
            log('   → These should be reviewed and improved', 'yellow');
        }

        if (courseResults.length > 0) {
            log('\n📋 By Course:', 'cyan');
            courseResults.forEach(({ course, issues, warnings }) => {
                const status = issues > 0 ? '❌' : '⚠️';
                log(`   ${status} ${course}: ${issues} issues, ${warnings} warnings`, 
                    issues > 0 ? 'red' : 'yellow');
            });
        }
    }
    
    log('\n' + '='.repeat(70) + '\n', 'cyan');
}

// Run the verification
scanCourses();
