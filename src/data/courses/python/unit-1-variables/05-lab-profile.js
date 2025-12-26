import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5UserProfile = {
    id: 'py-u1-lab-5-profile',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Agent Profile System',
    duration: '25 min',
    content: `
# Lab: Agent Profile System

## The Assignment
Welcome to the **ZeroCode Identity Bureau**. 
Your mission: create a complete agent profile using Python variables.

Every agent needs:
- An identity (name, codename)
- Physical stats (age, height)
- System access level
- Status indicators

## Your Mission
Build the profile step by step, using the correct data types for each field.

## Success Criteria
All profile fields must be correctly typed and displayed using f-strings.
`,
    tasks: [
        {
            id: 1,
            description: 'Create agent_name with your full name (string)',
            completed: false,
            regex: /agent_name\s*=\s*["'][^"']+["']/,
            hint: {
                concept: 'String Variables',
                strategy: 'Strings need quotes. Use double or single quotes.',
                solution: 'agent_name = "John Smith"'
            }
        },
        {
            id: 2,
            description: 'Create codename with a code like "SHADOW-7" (string)',
            completed: false,
            regex: /codename\s*=\s*["'][^"']+["']/,
            hint: {
                concept: 'String Variables',
                strategy: 'Another string, can include numbers and symbols.',
                solution: 'codename = "SHADOW-7"'
            }
        },
        {
            id: 3,
            description: 'Create age with a number (integer, no quotes)',
            completed: false,
            regex: /age\s*=\s*\d+/,
            hint: {
                concept: 'Integer Variables',
                strategy: 'Numbers do NOT use quotes. Just the number.',
                solution: 'age = 28'
            }
        },
        {
            id: 4,
            description: 'Create height with a decimal number like 1.75 (float)',
            completed: false,
            regex: /height\s*=\s*\d+\.\d+/,
            hint: {
                concept: 'Float Variables',
                strategy: 'Floats have a decimal point.',
                solution: 'height = 1.75'
            }
        },
        {
            id: 5,
            description: 'Create is_active with value True (boolean)',
            completed: false,
            regex: /is_active\s*=\s*True/,
            hint: {
                concept: 'Boolean Variables',
                strategy: 'Booleans are True or False (capital T/F, no quotes).',
                solution: 'is_active = True'
            }
        },
        {
            id: 6,
            description: 'Create access_level with value 5 (integer)',
            completed: false,
            regex: /access_level\s*=\s*\d+/,
            hint: {
                concept: 'Integer Variables',
                strategy: 'Just assign the number directly.',
                solution: 'access_level = 5'
            }
        },
        {
            id: 7,
            description: 'Print full profile using f-string with all variables',
            completed: false,
            regex: /print\s*\(\s*f["'][^"']*\{agent_name\}[^"']*\{codename\}[^"']*["']\s*\)/,
            hint: {
                concept: 'f-strings',
                strategy: 'Use f"..." with {variable} placeholders.',
                solution: 'print(f"Agent: {agent_name} | Codename: {codename}")'
            }
        }
    ],
    files: [
        {
            name: 'profile.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE IDENTITY BUREAU
# Mission: Create Agent Profile
# ============================================

# --- SECTION 1: IDENTITY ---

# TASK 1: Agent's full name (string)


# TASK 2: Agent's codename (string)


# --- SECTION 2: PHYSICAL STATS ---

# TASK 3: Agent's age (integer - no quotes!)


# TASK 4: Agent's height in meters (float - use decimal)


# --- SECTION 3: SYSTEM ACCESS ---

# TASK 5: Is agent currently active? (boolean - True/False)


# TASK 6: Security clearance level 1-10 (integer)


# --- SECTION 4: PROFILE OUTPUT ---

# TASK 7: Print complete profile using f-string
# Example: "Agent: John Smith | Codename: SHADOW-7"


# ===========================================
# PROFILE COMPLETE
# ===========================================
`
        }
    ]
};
