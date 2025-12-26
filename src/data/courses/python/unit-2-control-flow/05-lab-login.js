import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5LoginCheck = {
    id: 'py-u2-lab-5-login',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Security Access Control',
    duration: '30 min',
    content: `
# Lab: Security Access Control

## The Assignment
You're building the authentication system for ZeroCode's secure vault.
Your mission: implement a multi-factor access control system.

## Access Rules
- Valid username: "admin"
- Valid password: "secret123"
- Required clearance level: 5 or higher
- Must be an active account

## Your Mission
Check all conditions and grant or deny access.
Use logical operators (and, or, not) effectively.

## Success Criteria
The system must validate all credentials correctly.
`,
    tasks: [
        {
            id: 1,
            description: 'Create username variable with "admin"',
            completed: false,
            regex: /username\s*=\s*["']admin["']/,
            hint: {
                concept: 'String Variable',
                strategy: 'Assign the exact username string.',
                solution: 'username = "admin"'
            }
        },
        {
            id: 2,
            description: 'Create password variable with "secret123"',
            completed: false,
            regex: /password\s*=\s*["']secret123["']/,
            hint: {
                concept: 'String Variable',
                strategy: 'Assign the exact password string.',
                solution: 'password = "secret123"'
            }
        },
        {
            id: 3,
            description: 'Create clearance_level variable with value 7',
            completed: false,
            regex: /clearance_level\s*=\s*\d+/,
            hint: {
                concept: 'Integer Variable',
                strategy: 'Assign a number for clearance level.',
                solution: 'clearance_level = 7'
            }
        },
        {
            id: 4,
            description: 'Create is_active variable with True',
            completed: false,
            regex: /is_active\s*=\s*True/,
            hint: {
                concept: 'Boolean Variable',
                strategy: 'True/False with capital letter, no quotes.',
                solution: 'is_active = True'
            }
        },
        {
            id: 5,
            description: 'Check username == "admin" AND password == "secret123"',
            completed: false,
            regex: /if\s+username\s*==\s*["']admin["']\s+and\s+password\s*==\s*["']secret123["']/,
            hint: {
                concept: 'Logical AND',
                strategy: 'Use "and" to require both conditions true.',
                solution: 'if username == "admin" and password == "secret123":'
            }
        },
        {
            id: 6,
            description: 'Also check clearance_level >= 5 AND is_active',
            completed: false,
            regex: /clearance_level\s*>=\s*5.*and.*is_active|is_active.*and.*clearance_level\s*>=\s*5/,
            hint: {
                concept: 'Multiple AND Conditions',
                strategy: 'Chain more conditions with and.',
                solution: 'and clearance_level >= 5 and is_active'
            }
        },
        {
            id: 7,
            description: 'Print "ACCESS GRANTED" if all pass, else "ACCESS DENIED"',
            completed: false,
            regex: /print\s*\(\s*["']ACCESS GRANTED["']\s*\)/i,
            hint: {
                concept: 'Conditional Output',
                strategy: 'Print appropriate message in if/else blocks.',
                solution: 'print("ACCESS GRANTED")'
            }
        }
    ],
    files: [
        {
            name: 'security.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE VAULT ACCESS CONTROL
# Mission: Implement Multi-Factor Authentication
# ============================================

# --- CREDENTIALS ---
# TASK 1: Set username


# TASK 2: Set password


# TASK 3: Set clearance level (integer)


# TASK 4: Set active status (boolean)


# --- ACCESS VALIDATION ---
# TASK 5-7: Check ALL conditions and print result
# Required: username "admin", password "secret123",
#           clearance >= 5, is_active must be True


# ===========================================
# SECURITY CHECK COMPLETE
# ===========================================

# BONUS: Try changing values to see "ACCESS DENIED"
`
        }
    ]
};
