import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6StringOps = {
    id: 'py-u1-lab-6-strings',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Message Decoder',
    duration: '30 min',
    content: `
# Lab: Message Decoder

## The Assignment
You've intercepted an encrypted transmission from a rival organization.
Your mission: use Python string operations to decode and analyze the message.

## Your Mission
1. Analyze the message length
2. Extract specific characters using indexing
3. Transform the message using string methods
4. Search for keywords
5. Replace sensitive information

## Success Criteria
All decoding operations must pass validation.
`,
    tasks: [
        {
            id: 1,
            description: 'Print the length of the secret_message',
            completed: false,
            regex: /print\s*\(\s*len\s*\(\s*secret_message\s*\)\s*\)/,
            hint: {
                concept: 'String Length',
                strategy: 'len() returns the number of characters.',
                solution: 'print(len(secret_message))'
            }
        },
        {
            id: 2,
            description: 'Print the first character using index [0]',
            completed: false,
            regex: /print\s*\(\s*secret_message\s*\[\s*0\s*\]\s*\)/,
            hint: {
                concept: 'String Indexing',
                strategy: 'String indices start at 0. Use [0] for first.',
                solution: 'print(secret_message[0])'
            }
        },
        {
            id: 3,
            description: 'Print the last character using index [-1]',
            completed: false,
            regex: /print\s*\(\s*secret_message\s*\[\s*-1\s*\]\s*\)/,
            hint: {
                concept: 'Negative Indexing',
                strategy: 'Use [-1] to get the last character.',
                solution: 'print(secret_message[-1])'
            }
        },
        {
            id: 4,
            description: 'Print the message in UPPERCASE using .upper()',
            completed: false,
            regex: /print\s*\(\s*secret_message\.upper\s*\(\s*\)\s*\)/,
            hint: {
                concept: 'String Methods',
                strategy: 'Methods are called with dot notation.',
                solution: 'print(secret_message.upper())'
            }
        },
        {
            id: 5,
            description: 'Print first 10 characters using slice [:10]',
            completed: false,
            regex: /print\s*\(\s*secret_message\s*\[\s*:\s*10\s*\]\s*\)/,
            hint: {
                concept: 'String Slicing',
                strategy: '[:10] gets characters from start to index 9.',
                solution: 'print(secret_message[:10])'
            }
        },
        {
            id: 6,
            description: 'Check if "meet" is in the message using "in" operator',
            completed: false,
            regex: /print\s*\(\s*["']meet["']\s+in\s+secret_message\s*\)/,
            hint: {
                concept: 'String Search with "in"',
                strategy: '"substring" in string returns True/False.',
                solution: 'print("meet" in secret_message)'
            }
        },
        {
            id: 7,
            description: 'Replace "midnight" with "REDACTED" and print',
            completed: false,
            regex: /print\s*\(\s*secret_message\.replace\s*\(\s*["']midnight["']\s*,\s*["']REDACTED["']\s*\)\s*\)/,
            hint: {
                concept: 'String Replace',
                strategy: 'string.replace(old, new) returns a new string.',
                solution: 'print(secret_message.replace("midnight", "REDACTED"))'
            }
        }
    ],
    files: [
        {
            name: 'decoder.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE MESSAGE DECODER
# Mission: Analyze Intercepted Transmission
# ============================================

# THE INTERCEPTED MESSAGE (Do not modify)
secret_message = "meet me at midnight behind the old warehouse"

# --- ANALYSIS PHASE ---

# TASK 1: How long is the message?


# TASK 2: What is the first character?


# TASK 3: What is the last character?


# --- TRANSFORMATION PHASE ---

# TASK 4: Convert to uppercase for emphasis


# TASK 5: Extract first 10 characters (preview)


# --- SEARCH PHASE ---

# TASK 6: Does it contain the word "meet"?


# --- REDACTION PHASE ---

# TASK 7: Replace "midnight" with "REDACTED"


# ===========================================
# DECODING COMPLETE
# ===========================================
`
        }
    ]
};
