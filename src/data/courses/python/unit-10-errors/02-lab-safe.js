import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2SafeCalculator = {
    id: 'py-u9-lab-2-safe',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Bulletproof Operations',
    duration: '30 min',
    content: `
# Lab: Bulletproof Operations

## The Assignment
ZeroCode systems must never crash. Build error-resistant functions.
Your mission: implement comprehensive error handling for critical operations.

## Error Types to Handle
- **ZeroDivisionError**: Division by zero
- **ValueError**: Invalid value conversion
- **KeyError**: Missing dictionary key
- **FileNotFoundError**: File doesn't exist

## Your Mission
Make each operation bulletproof with proper error handling.

## Success Criteria
All operations must handle errors gracefully without crashing.
`,
    tasks: [
        {
            id: 1,
            description: 'Create safe_divide(a, b) function with try/except',
            completed: false,
            regex: /def\s+safe_divide\s*\(\s*a\s*,\s*b\s*\)\s*:/,
            hint: {
                concept: 'Function Definition',
                strategy: 'Define function that will handle division.',
                solution: 'def safe_divide(a, b):'
            }
        },
        {
            id: 2,
            description: 'In try block: return a / b',
            completed: false,
            regex: /try\s*:[\s\S]*return\s+a\s*\/\s*b/,
            hint: {
                concept: 'Try Block',
                strategy: 'Put risky code in try block.',
                solution: 'try:\\n        return a / b'
            }
        },
        {
            id: 3,
            description: 'Catch ZeroDivisionError and return "Error: Division by zero"',
            completed: false,
            regex: /except\s+ZeroDivisionError\s*:[\s\S]*return\s+["'].*[Dd]ivision.*zero["']/,
            hint: {
                concept: 'Specific Exception',
                strategy: 'Catch the specific error type.',
                solution: 'except ZeroDivisionError:\\n        return "Error: Division by zero"'
            }
        },
        {
            id: 4,
            description: 'Create safe_convert(value) function to convert string to int',
            completed: false,
            regex: /def\s+safe_convert\s*\(\s*value\s*\)\s*:/,
            hint: {
                concept: 'Type Conversion Function',
                strategy: 'Define function for safe type conversion.',
                solution: 'def safe_convert(value):'
            }
        },
        {
            id: 5,
            description: 'Try int(value), catch ValueError',
            completed: false,
            regex: /except\s+ValueError\s*:/,
            hint: {
                concept: 'ValueError Handling',
                strategy: 'ValueError occurs with invalid conversion.',
                solution: 'except ValueError:\\n        return "Error: Invalid number"'
            }
        },
        {
            id: 6,
            description: 'Create safe_get(dict, key) to safely access dictionary',
            completed: false,
            regex: /def\s+safe_get\s*\([^)]*\)\s*:/,
            hint: {
                concept: 'Safe Dictionary Access',
                strategy: 'Handle KeyError for missing keys.',
                solution: 'def safe_get(d, key):'
            }
        },
        {
            id: 7,
            description: 'Test safe_divide: print(safe_divide(10, 0))',
            completed: false,
            regex: /print\s*\(\s*safe_divide\s*\(\s*10\s*,\s*0\s*\)\s*\)/,
            hint: {
                concept: 'Testing Error Handling',
                strategy: 'Test with values that cause errors.',
                solution: 'print(safe_divide(10, 0))'
            }
        }
    ],
    files: [
        {
            name: 'safecode.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE BULLETPROOF OPERATIONS
# Mission: Master Error Handling
# ============================================

# --- TASK 1-3: SAFE DIVISION ---
# Handle ZeroDivisionError


# --- TASK 4-5: SAFE CONVERSION ---
# Handle ValueError when converting strings to int


# --- TASK 6: SAFE DICTIONARY ACCESS ---
# Handle KeyError for missing keys


# --- TESTING ---

# TASK 7: Test safe_divide with division by zero


# Additional tests
print(safe_divide(10, 2))      # Should work: 5.0
print(safe_convert("42"))       # Should work: 42
print(safe_convert("hello"))    # Should handle error

# ===========================================
# BULLETPROOF SYSTEM COMPLETE
# ===========================================
`
        }
    ]
};
