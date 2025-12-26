import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4GradeCalculator = {
    id: 'py-u2-lab-4-grades',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Academy Grade System',
    duration: '30 min',
    content: `
# Lab: Academy Grade System

## The Assignment
The ZeroCode Academy needs an automated grading system.
Your mission: build a grade calculator that converts numeric scores to letter grades.

## Grading Scale
- **A**: 90-100
- **B**: 80-89
- **C**: 70-79
- **D**: 60-69
- **F**: Below 60

## Your Mission
1. Store a test score
2. Use if/elif/else to determine the grade
3. Print the result with appropriate messaging
4. Add special handling for perfect scores

## Success Criteria
The logic must correctly handle all grade ranges.
`,
    tasks: [
        {
            id: 1,
            description: 'Create score variable with value 85',
            completed: false,
            regex: /score\s*=\s*85/,
            hint: {
                concept: 'Variable Assignment',
                strategy: 'Assign the integer value directly.',
                solution: 'score = 85'
            }
        },
        {
            id: 2,
            description: 'Start if statement: if score >= 90 then grade = "A"',
            completed: false,
            regex: /if\s+score\s*>=\s*90\s*:[\s\S]*grade\s*=\s*["']A["']/,
            hint: {
                concept: 'If Statement',
                strategy: 'if condition: then indented code.',
                solution: 'if score >= 90:\\n    grade = "A"'
            }
        },
        {
            id: 3,
            description: 'Add elif for grade B (80-89)',
            completed: false,
            regex: /elif\s+score\s*>=\s*80\s*:[\s\S]*grade\s*=\s*["']B["']/,
            hint: {
                concept: 'Elif (Else If)',
                strategy: 'elif checks another condition if previous was false.',
                solution: 'elif score >= 80:\\n    grade = "B"'
            }
        },
        {
            id: 4,
            description: 'Add elif for grade C (70-79)',
            completed: false,
            regex: /elif\s+score\s*>=\s*70\s*:[\s\S]*grade\s*=\s*["']C["']/,
            hint: {
                concept: 'Elif Chain',
                strategy: 'Continue the chain for each grade boundary.',
                solution: 'elif score >= 70:\\n    grade = "C"'
            }
        },
        {
            id: 5,
            description: 'Add elif for grade D (60-69)',
            completed: false,
            regex: /elif\s+score\s*>=\s*60\s*:[\s\S]*grade\s*=\s*["']D["']/,
            hint: {
                concept: 'Elif Chain',
                strategy: 'One more elif for D grade.',
                solution: 'elif score >= 60:\\n    grade = "D"'
            }
        },
        {
            id: 6,
            description: 'Add else for grade F (below 60)',
            completed: false,
            regex: /else\s*:[\s\S]*grade\s*=\s*["']F["']/,
            hint: {
                concept: 'Else (Default)',
                strategy: 'else catches everything not matched above.',
                solution: 'else:\\n    grade = "F"'
            }
        },
        {
            id: 7,
            description: 'Print the grade using f-string',
            completed: false,
            regex: /print\s*\(\s*f["'][^"']*\{grade\}[^"']*["']\s*\)/,
            hint: {
                concept: 'Printing Result',
                strategy: 'Use f-string to include the grade variable.',
                solution: 'print(f"Your grade is: {grade}")'
            }
        }
    ],
    files: [
        {
            name: 'grader.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE ACADEMY GRADING SYSTEM
# Mission: Implement Grade Calculator
# ============================================

# --- STEP 1: INPUT ---
# Create the score variable with value 85


# --- STEP 2-6: GRADING LOGIC ---
# Implement the full if/elif/else chain
# A: 90+, B: 80+, C: 70+, D: 60+, F: else


# --- STEP 7: OUTPUT ---
# Print the result using f-string


# ===========================================
# GRADING COMPLETE
# ===========================================

# BONUS: Try changing the score to test different grades!
`
        }
    ]
};
