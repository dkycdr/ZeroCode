import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3RandomGame = {
    id: 'py-u7-lab-3-random',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Spy Number Generator',
    duration: '30 min',
    content: `
# Lab: Spy Number Generator

## The Assignment
The ZeroCode Intelligence Agency needs a secure random code generator.
Your mission: build a system that generates various types of random values.

## Modules You'll Use
- **random**: Core random number generation
- **randint(a, b)**: Random integer between a and b
- **choice(list)**: Pick random item from list
- **shuffle(list)**: Randomize list order

## Your Mission
Create a full random generation suite for spy operations.

## Success Criteria
All random operations must use correct module functions.
`,
    tasks: [
        {
            id: 1,
            description: 'Import the random module',
            completed: false,
            regex: /import\s+random/,
            hint: {
                concept: 'Module Import',
                strategy: 'Use import statement at top of file.',
                solution: 'import random'
            }
        },
        {
            id: 2,
            description: 'Generate secret_code with random.randint(1000, 9999)',
            completed: false,
            regex: /secret_code\s*=\s*random\.randint\s*\(\s*1000\s*,\s*9999\s*\)/,
            hint: {
                concept: 'Random Integer',
                strategy: 'randint(min, max) inclusive on both ends.',
                solution: 'secret_code = random.randint(1000, 9999)'
            }
        },
        {
            id: 3,
            description: 'Print the secret_code',
            completed: false,
            regex: /print\s*\([^)]*secret_code[^)]*\)/,
            hint: {
                concept: 'Print Variable',
                strategy: 'Print with a label for clarity.',
                solution: 'print("Secret Code:", secret_code)'
            }
        },
        {
            id: 4,
            description: 'Create codenames list with 5 spy names',
            completed: false,
            regex: /codenames\s*=\s*\[[^\]]*,[^\]]*,[^\]]*\]/,
            hint: {
                concept: 'List Creation',
                strategy: 'Create a list with at least 5 codenames.',
                solution: 'codenames = ["Shadow", "Phoenix", "Ghost", "Viper", "Storm"]'
            }
        },
        {
            id: 5,
            description: 'Use random.choice(codenames) to pick a random agent',
            completed: false,
            regex: /random\.choice\s*\(\s*codenames\s*\)/,
            hint: {
                concept: 'Random Choice',
                strategy: 'choice() picks one random item from list.',
                solution: 'agent = random.choice(codenames)'
            }
        },
        {
            id: 6,
            description: 'Generate dice roll with random.randint(1, 6)',
            completed: false,
            regex: /random\.randint\s*\(\s*1\s*,\s*6\s*\)/,
            hint: {
                concept: 'Dice Roll',
                strategy: 'randint(1, 6) simulates a 6-sided die.',
                solution: 'dice = random.randint(1, 6)'
            }
        },
        {
            id: 7,
            description: 'Use random.shuffle() on codenames and print result',
            completed: false,
            regex: /random\.shuffle\s*\(\s*codenames\s*\)/,
            hint: {
                concept: 'Shuffle List',
                strategy: 'shuffle() modifies list in place.',
                solution: 'random.shuffle(codenames)'
            }
        }
    ],
    files: [
        {
            name: 'generator.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE SPY NUMBER GENERATOR
# Mission: Master Random Module
# ============================================

# --- TASK 1: IMPORT ---


# --- TASK 2-3: SECRET CODE ---
# Generate 4-digit code (1000-9999)


# --- TASK 4-5: CODENAME GENERATOR ---
# Create list of codenames, pick random one


# --- TASK 6: DICE ROLLER ---
# Simulate rolling a 6-sided die


# --- TASK 7: SHUFFLE OPERATION ---
# Shuffle the codenames and print result


# ===========================================
# GENERATION COMPLETE
# ===========================================
`
        }
    ]
};
