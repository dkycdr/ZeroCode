import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Calculator = {
    id: 'py-u6-lab-4-calc',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Function Factory',
    duration: '35 min',
    content: `
# Lab: Function Factory

## The Assignment
Build a library of reusable calculator functions.
Your mission: create well-designed functions with proper parameters.

## Function Design Principles
- Single responsibility
- Clear naming
- Default parameters where useful
- Return values (not just print)

## Your Mission
Create a complete calculator function library.

## Success Criteria
All functions must work correctly and be reusable.
`,
    tasks: [
        {
            id: 1,
            description: 'Create add(a, b) function that returns a + b',
            completed: false,
            regex: /def\s+add\s*\(\s*a\s*,\s*b\s*\)\s*:[\s\S]*return\s+a\s*\+\s*b/,
            hint: {
                concept: 'Basic Function',
                strategy: 'def name(parameters): then return result.',
                solution: 'def add(a, b):\\n    return a + b'
            }
        },
        {
            id: 2,
            description: 'Create subtract(a, b) function that returns a - b',
            completed: false,
            regex: /def\s+subtract\s*\(\s*a\s*,\s*b\s*\)\s*:[\s\S]*return\s+a\s*-\s*b/,
            hint: {
                concept: 'Basic Function',
                strategy: 'Same pattern as add.',
                solution: 'def subtract(a, b):\\n    return a - b'
            }
        },
        {
            id: 3,
            description: 'Create multiply(a, b) function that returns a * b',
            completed: false,
            regex: /def\s+multiply\s*\(\s*a\s*,\s*b\s*\)\s*:[\s\S]*return\s+a\s*\*\s*b/,
            hint: {
                concept: 'Basic Function',
                strategy: 'Same pattern with multiplication.',
                solution: 'def multiply(a, b):\\n    return a * b'
            }
        },
        {
            id: 4,
            description: 'Create divide(a, b) function that returns a / b',
            completed: false,
            regex: /def\s+divide\s*\(\s*a\s*,\s*b\s*\)\s*:[\s\S]*return\s+a\s*\/\s*b/,
            hint: {
                concept: 'Basic Function',
                strategy: 'Division function.',
                solution: 'def divide(a, b):\\n    return a / b'
            }
        },
        {
            id: 5,
            description: 'Create power(base, exp=2) with default exponent of 2',
            completed: false,
            regex: /def\s+power\s*\([^)]*exp\s*=\s*2[^)]*\)/,
            hint: {
                concept: 'Default Parameters',
                strategy: 'param=default in function signature.',
                solution: 'def power(base, exp=2):\\n    return base ** exp'
            }
        },
        {
            id: 6,
            description: 'Test add: print(add(10, 5)) should output 15',
            completed: false,
            regex: /print\s*\(\s*add\s*\(\s*10\s*,\s*5\s*\)\s*\)/,
            hint: {
                concept: 'Function Calls',
                strategy: 'Call the function and print the result.',
                solution: 'print(add(10, 5))'
            }
        },
        {
            id: 7,
            description: 'Test power with default: print(power(5)) should output 25',
            completed: false,
            regex: /print\s*\(\s*power\s*\(\s*5\s*\)\s*\)/,
            hint: {
                concept: 'Using Default Parameters',
                strategy: 'Omit the second argument to use default.',
                solution: 'print(power(5))'
            }
        }
    ],
    files: [
        {
            name: 'functions.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE FUNCTION FACTORY
# Mission: Build Reusable Calculator Library
# ============================================

# --- BASIC OPERATIONS ---

# TASK 1: Addition function


# TASK 2: Subtraction function


# TASK 3: Multiplication function


# TASK 4: Division function


# --- ADVANCED FUNCTIONS ---

# TASK 5: Power function with default exponent = 2


# --- TESTING ---

# TASK 6: Test add(10, 5)


# TASK 7: Test power(5) with default


# Additional tests
print("multiply(4, 3) =", multiply(4, 3))
print("power(2, 8) =", power(2, 8))

# ===========================================
# FUNCTION FACTORY COMPLETE
# ===========================================
`
        }
    ]
};
