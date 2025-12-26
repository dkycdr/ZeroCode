import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3CountingMachine = {
    id: 'py-u3-lab-3-counting',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Loop Training Bootcamp',
    duration: '30 min',
    content: `
# Lab: Loop Training Bootcamp

## The Assignment
Every ZeroCode agent must master loops. They're the backbone of automation.
Your mission: complete a series of loop challenges to prove your skills.

## Loop Types
- **for loop**: When you know how many times to repeat
- **while loop**: When you repeat until a condition changes
- **range()**: Generates sequences of numbers

## Your Mission
Complete each counting challenge using appropriate loop constructs.

## Success Criteria
All counting patterns must match the expected output.
`,
    tasks: [
        {
            id: 1,
            description: 'Print numbers 1 to 5 using for loop with range(1, 6)',
            completed: false,
            regex: /for\s+\w+\s+in\s+range\s*\(\s*1\s*,\s*6\s*\)/,
            hint: {
                concept: 'For Loop with range()',
                strategy: 'range(1, 6) gives 1,2,3,4,5 (end is exclusive).',
                solution: 'for i in range(1, 6):\\n    print(i)'
            }
        },
        {
            id: 2,
            description: 'Print even numbers 2, 4, 6, 8, 10 using range with step',
            completed: false,
            regex: /range\s*\(\s*2\s*,\s*1[12]\s*,\s*2\s*\)/,
            hint: {
                concept: 'Range with Step',
                strategy: 'range(start, end, step) - third arg is step size.',
                solution: 'for i in range(2, 11, 2):\\n    print(i)'
            }
        },
        {
            id: 3,
            description: 'Create countdown variable starting at 5',
            completed: false,
            regex: /countdown\s*=\s*5/,
            hint: {
                concept: 'Variable for While Loop',
                strategy: 'Initialize the counter before the loop.',
                solution: 'countdown = 5'
            }
        },
        {
            id: 4,
            description: 'Use while countdown > 0 to count down',
            completed: false,
            regex: /while\s+countdown\s*>\s*0\s*:/,
            hint: {
                concept: 'While Loop Condition',
                strategy: 'While loops continue as long as condition is True.',
                solution: 'while countdown > 0:'
            }
        },
        {
            id: 5,
            description: 'Inside while loop: print countdown and decrement with countdown -= 1',
            completed: false,
            regex: /countdown\s*-=\s*1/,
            hint: {
                concept: 'Decrement Operator',
                strategy: 'countdown -= 1 is same as countdown = countdown - 1',
                solution: 'countdown -= 1'
            }
        },
        {
            id: 6,
            description: 'After while loop: print "LAUNCH!"',
            completed: false,
            regex: /print\s*\(\s*["']LAUNCH!?["']\s*\)/i,
            hint: {
                concept: 'Code After Loop',
                strategy: 'Unindented code runs after loop completes.',
                solution: 'print("LAUNCH!")'
            }
        },
        {
            id: 7,
            description: 'Use for loop to print each character in "PYTHON"',
            completed: false,
            regex: /for\s+\w+\s+in\s+["']PYTHON["']\s*:/i,
            hint: {
                concept: 'Looping Through String',
                strategy: 'for char in "STRING" iterates over each character.',
                solution: 'for char in "PYTHON":\\n    print(char)'
            }
        }
    ],
    files: [
        {
            name: 'loops.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE LOOP TRAINING BOOTCAMP
# Mission: Master All Loop Types
# ============================================

# --- CHALLENGE 1: FOR LOOP BASICS ---
# Print numbers 1 to 5


# --- CHALLENGE 2: RANGE WITH STEP ---
# Print even numbers: 2, 4, 6, 8, 10


# --- CHALLENGE 3-6: COUNTDOWN WITH WHILE ---
# Create countdown = 5, then while > 0, print and decrement
# End with "LAUNCH!"


# --- CHALLENGE 7: STRING ITERATION ---
# Print each character of "PYTHON" on separate line


# ===========================================
# BOOTCAMP COMPLETE
# ===========================================
`
        }
    ]
};
