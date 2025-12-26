import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4SumCalculator = {
    id: 'py-u3-lab-4-sum',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Data Aggregation Engine',
    duration: '25 min',
    content: `
# Lab: Data Aggregation Engine

## The Assignment
The analytics department needs you to build a data processing engine.
Your mission: calculate sums, find patterns, and aggregate data using loops.

## Skills Required
- Accumulator pattern (total += value)
- Counter pattern (count += 1)
- List iteration

## Your Mission
Process various data sets using loop-based aggregation.

## Success Criteria
All calculations must produce correct results.
`,
    tasks: [
        {
            id: 1,
            description: 'Create total variable initialized to 0',
            completed: false,
            regex: /total\s*=\s*0/,
            hint: {
                concept: 'Accumulator Pattern',
                strategy: 'Start with zero, add values in loop.',
                solution: 'total = 0'
            }
        },
        {
            id: 2,
            description: 'Loop through range(1, 11) to sum numbers 1-10',
            completed: false,
            regex: /for\s+\w+\s+in\s+range\s*\(\s*1\s*,\s*11\s*\)/,
            hint: {
                concept: 'Range for Sum',
                strategy: 'range(1, 11) gives 1 to 10.',
                solution: 'for num in range(1, 11):'
            }
        },
        {
            id: 3,
            description: 'Inside loop: add each number to total with total += num',
            completed: false,
            regex: /total\s*\+=\s*\w+/,
            hint: {
                concept: 'Accumulator Update',
                strategy: 'total += num adds num to total.',
                solution: 'total += num'
            }
        },
        {
            id: 4,
            description: 'Print the final total (should be 55)',
            completed: false,
            regex: /print\s*\([^)]*total[^)]*\)/,
            hint: {
                concept: 'Print Result',
                strategy: 'Print after loop completes.',
                solution: 'print("Sum:", total)'
            }
        },
        {
            id: 5,
            description: 'Create a list: numbers = [5, 10, 15, 20, 25]',
            completed: false,
            regex: /numbers\s*=\s*\[\s*5\s*,\s*10\s*,\s*15\s*,\s*20\s*,\s*25\s*\]/,
            hint: {
                concept: 'List Creation',
                strategy: 'Lists use square brackets with comma-separated values.',
                solution: 'numbers = [5, 10, 15, 20, 25]'
            }
        },
        {
            id: 6,
            description: 'Use for loop to iterate through the numbers list',
            completed: false,
            regex: /for\s+\w+\s+in\s+numbers\s*:/,
            hint: {
                concept: 'List Iteration',
                strategy: 'for item in list iterates over each element.',
                solution: 'for n in numbers:'
            }
        },
        {
            id: 7,
            description: 'Print each number doubled (n * 2)',
            completed: false,
            regex: /print\s*\([^)]*\*\s*2[^)]*\)/,
            hint: {
                concept: 'Processing Each Item',
                strategy: 'Do something with each item inside the loop.',
                solution: 'print(n * 2)'
            }
        }
    ],
    files: [
        {
            name: 'aggregator.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE DATA AGGREGATION ENGINE
# Mission: Calculate Sums and Process Lists
# ============================================

# --- PHASE 1: SUM OF 1 TO 10 ---
# TASK 1: Initialize accumulator


# TASK 2-3: Loop and accumulate


# TASK 4: Print result


# --- PHASE 2: LIST PROCESSING ---
# TASK 5: Create the numbers list


# TASK 6-7: Loop through list and print each doubled


# ===========================================
# AGGREGATION COMPLETE
# ===========================================
`
        }
    ]
};
