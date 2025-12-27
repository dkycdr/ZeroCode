import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Calculator = {
    id: 'py-u0-lab-5-calc',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Python Calculator',
    duration: '25 min',
    content: `
# Lab: The Python Calculator

## The Assignment
The ZeroCode accounting department needs a quick calculation system.
Your job: build a mini calculator that demonstrates all basic math operations.

## Your Mission
Perform each calculation and print the result with a label.
This will test your understanding of:
- Arithmetic operators (+, -, *, /)
- Floor division (//)
- Modulo (%)
- Exponentiation (**)

## Success Criteria
Each calculation must be printed with its correct result.
`,
    tasks: [
        {
            id: 1,
            description: 'Addition: Print "10 + 5 =" followed by the result',
            completed: false,
            regex: /print\s*\([^)]*10\s*\+\s*5[^)]*\)/,
            hint: {
                concept: 'Addition Operator (+)',
                strategy: 'Use print() with a label string and the expression.',
                solution: 'print("10 + 5 =", 10 + 5)'
            }
        },
        {
            id: 2,
            description: 'Subtraction: Print "20 - 8 =" followed by the result',
            completed: false,
            regex: /print\s*\([^)]*20\s*-\s*8[^)]*\)/,
            hint: {
                concept: 'Subtraction Operator (-)',
                strategy: 'Same pattern as addition but with minus.',
                solution: 'print("20 - 8 =", 20 - 8)'
            }
        },
        {
            id: 3,
            description: 'Multiplication: Print "7 * 6 =" followed by the result',
            completed: false,
            regex: /print\s*\([^)]*7\s*\*\s*6[^)]*\)/,
            hint: {
                concept: 'Multiplication Operator (*)',
                strategy: 'Use asterisk * for multiplication.',
                solution: 'print("7 * 6 =", 7 * 6)'
            }
        },
        {
            id: 4,
            description: 'Division: Print "15 / 4 =" followed by the result (should be 3.75)',
            completed: false,
            regex: /print\s*\([^)]*15\s*\/\s*4[^)]*\)/,
            hint: {
                concept: 'Division Operator (/)',
                strategy: 'Division always returns a float in Python 3.',
                solution: 'print("15 / 4 =", 15 / 4)'
            }
        },
        {
            id: 5,
            description: 'Floor Division: Print "15 // 4 =" followed by the result (should be 3)',
            completed: false,
            regex: /print\s*\([^)]*15\s*\/\/\s*4[^)]*\)/,
            hint: {
                concept: 'Floor Division (//) - Rounds Down',
                strategy: 'Use double slash for floor division.',
                solution: 'print("15 // 4 =", 15 // 4)'
            }
        },
        {
            id: 6,
            description: 'Modulo: Print "17 % 5 =" followed by the result (should be 2)',
            completed: false,
            regex: /print\s*\([^)]*17\s*%\s*5[^)]*\)/,
            hint: {
                concept: 'Modulo (%) - Remainder',
                strategy: 'Modulo returns the remainder after division.',
                solution: 'print("17 % 5 =", 17 % 5)'
            }
        },
        {
            id: 7,
            description: 'Exponent: Print "2 ** 8 =" followed by the result (should be 256)',
            completed: false,
            regex: /print\s*\([^)]*2\s*\*\*\s*8[^)]*\)/,
            hint: {
                concept: 'Exponentiation (**) - Power',
                strategy: 'Use ** for power. 2**8 = 2 to the power of 8.',
                solution: 'print("2 ** 8 =", 2 ** 8)'
            }
        }
    ],
    files: [
        {
            name: 'calculator.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE PYTHON CALCULATOR
# Mission: Master All Math Operators
# ============================================

# --- TASK 1: ADDITION ---
# Print "10 + 5 =" followed by the calculation result
# Expected output: 10 + 5 = 15


# --- TASK 2: SUBTRACTION ---
# Print "20 - 8 =" followed by the calculation result
# Expected output: 20 - 8 = 12


# --- TASK 3: MULTIPLICATION ---
# Print "7 * 6 =" followed by the calculation result
# Expected output: 7 * 6 = 42


# --- TASK 4: DIVISION (Float Result) ---
# Print "15 / 4 =" followed by the calculation result
# Expected output: 15 / 4 = 3.75


# --- TASK 5: FLOOR DIVISION (Integer Result) ---
# Print "15 // 4 =" followed by the calculation result
# Expected output: 15 // 4 = 3


# --- TASK 6: MODULO (Remainder) ---
# Print "17 % 5 =" followed by the calculation result
# Expected output: 17 % 5 = 2


# --- TASK 7: EXPONENT (Power) ---
# Print "2 ** 8 =" followed by the calculation result
# Expected output: 2 ** 8 = 256


# ===========================================
# CALCULATION COMPLETE
# ===========================================
`
        }
    ]
};
