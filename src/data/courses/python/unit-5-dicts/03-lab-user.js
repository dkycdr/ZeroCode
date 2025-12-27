import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3UserData = {
    id: 'py-u5-lab-3-user',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Agent Database System',
    duration: '30 min',
    content: `
# Lab: Agent Database System

## The Assignment
Build a database system to store agent profiles using dictionaries.
Your mission: implement full dictionary operations for agent data.

## Data Structure
Each agent record needs:
- Name, email, department
- Clearance level
- Skills (as a list)

## Your Mission
Create, read, update, and delete dictionary entries.

## Success Criteria
All dictionary operations must work correctly.
`,
    tasks: [
        {
            id: 1,
            description: 'Create agent dict with "name" and "email" keys',
            completed: false,
            regex: /agent\s*=\s*\{[\s\S]*["']name["']\s*:[\s\S]*["']email["']\s*:/,
            hint: {
                concept: 'Dictionary Creation',
                strategy: 'Use curly braces with key: value pairs.',
                solution: 'agent = {"name": "Neo", "email": "neo@zerocode.io"}'
            }
        },
        {
            id: 2,
            description: 'Add "department" key with value "Engineering"',
            completed: false,
            regex: /agent\s*\[\s*["']department["']\s*\]\s*=\s*["']Engineering["']/i,
            hint: {
                concept: 'Adding Keys',
                strategy: 'Use square bracket notation to add new keys.',
                solution: 'agent["department"] = "Engineering"'
            }
        },
        {
            id: 3,
            description: 'Add "clearance" key with integer value 7',
            completed: false,
            regex: /agent\s*\[\s*["']clearance["']\s*\]\s*=\s*\d+/,
            hint: {
                concept: 'Adding Different Types',
                strategy: 'Values can be any type: string, int, list, etc.',
                solution: 'agent["clearance"] = 7'
            }
        },
        {
            id: 4,
            description: 'Access and print agent["name"]',
            completed: false,
            regex: /print\s*\([^)]*agent\s*\[\s*["']name["']\s*\][^)]*\)/,
            hint: {
                concept: 'Accessing Values',
                strategy: 'Use dict[key] to get the value.',
                solution: 'print("Name:", agent["name"])'
            }
        },
        {
            id: 5,
            description: 'Use .get() to safely access "skills" with default empty list',
            completed: false,
            regex: /agent\.get\s*\(\s*["']skills["']\s*,\s*\[\s*\]\s*\)/,
            hint: {
                concept: 'Safe Access with .get()',
                strategy: 'get(key, default) returns default if key missing.',
                solution: 'agent.get("skills", [])'
            }
        },
        {
            id: 6,
            description: 'Loop through agent.items() and print each key-value pair',
            completed: false,
            regex: /for\s+\w+\s*,\s*\w+\s+in\s+agent\.items\s*\(\s*\)/,
            hint: {
                concept: 'Dictionary Iteration',
                strategy: 'items() returns (key, value) tuples.',
                solution: 'for key, value in agent.items():\\n    print(f"{key}: {value}")'
            }
        },
        {
            id: 7,
            description: 'Delete the "email" key using del',
            completed: false,
            regex: /del\s+agent\s*\[\s*["']email["']\s*\]/,
            hint: {
                concept: 'Deleting Keys',
                strategy: 'del dict[key] removes the key-value pair.',
                solution: 'del agent["email"]'
            }
        }
    ],
    files: [
        {
            name: 'database.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE AGENT DATABASE SYSTEM
# Mission: Master Dictionary Operations
# ============================================

# --- CREATE ---
# TASK 1: Create agent dict with name and email


# --- UPDATE ---
# TASK 2: Add department


# TASK 3: Add clearance level


# --- READ ---
# TASK 4: Print the agent's name


# TASK 5: Safely get skills with default


# TASK 6: Print all key-value pairs


# --- DELETE ---
# TASK 7: Remove the email


# Final state
print("Final agent data:", agent)

# ===========================================
# DATABASE OPERATIONS COMPLETE
# ===========================================
`
        }
    ]
};
