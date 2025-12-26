import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3NotesApp = {
    id: 'py-u8-lab-3-notes',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Mission Log System',
    duration: '35 min',
    content: `
# Lab: Mission Log System

## The Assignment
Build a persistent logging system for ZeroCode operations.
Your mission: implement file reading, writing, and JSON handling.

## Operations Required
- Write text to files
- Read files back
- Append to existing files
- Save/load JSON data

## Your Mission
Create a complete file-based logging system.

## Success Criteria
All file operations must work correctly and persist data.
`,
    tasks: [
        {
            id: 1,
            description: 'Import the json module',
            completed: false,
            regex: /import\s+json/,
            hint: {
                concept: 'JSON Module',
                strategy: 'Import json for working with JSON files.',
                solution: 'import json'
            }
        },
        {
            id: 2,
            description: 'Open mission.log in write mode using with statement',
            completed: false,
            regex: /with\s+open\s*\(\s*["']mission\.log["']\s*,\s*["']w["']\s*\)/,
            hint: {
                concept: 'File Open (Write)',
                strategy: 'with open(filename, "w") as f:',
                solution: 'with open("mission.log", "w") as f:'
            }
        },
        {
            id: 3,
            description: 'Write "Mission started" to the file',
            completed: false,
            regex: /\.write\s*\(\s*["']Mission started[^"']*["']\s*\)/i,
            hint: {
                concept: 'File Write',
                strategy: 'f.write("text") writes to file.',
                solution: 'f.write("Mission started\\n")'
            }
        },
        {
            id: 4,
            description: 'Open mission.log in read mode and print contents',
            completed: false,
            regex: /with\s+open\s*\(\s*["']mission\.log["']\s*,\s*["']r["']\s*\)/,
            hint: {
                concept: 'File Open (Read)',
                strategy: 'with open(filename, "r") as f:',
                solution: 'with open("mission.log", "r") as f:\\n    print(f.read())'
            }
        },
        {
            id: 5,
            description: 'Create agent_data dictionary with name and level',
            completed: false,
            regex: /agent_data\s*=\s*\{[\s\S]*["']name["'][\s\S]*["']level["']/,
            hint: {
                concept: 'Dictionary for JSON',
                strategy: 'Create dict to save as JSON.',
                solution: 'agent_data = {"name": "Neo", "level": 7}'
            }
        },
        {
            id: 6,
            description: 'Save agent_data to agent.json using json.dump',
            completed: false,
            regex: /json\.dump\s*\(\s*agent_data\s*,\s*\w+/,
            hint: {
                concept: 'JSON Write',
                strategy: 'json.dump(data, file_object)',
                solution: 'with open("agent.json", "w") as f:\\n    json.dump(agent_data, f)'
            }
        },
        {
            id: 7,
            description: 'Load data from agent.json using json.load',
            completed: false,
            regex: /json\.load\s*\(\s*\w+\s*\)/,
            hint: {
                concept: 'JSON Read',
                strategy: 'json.load(file_object) returns dict.',
                solution: 'with open("agent.json") as f:\\n    loaded = json.load(f)'
            }
        }
    ],
    files: [
        {
            name: 'logger.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE MISSION LOG SYSTEM
# Mission: Master File Operations
# ============================================

# --- TASK 1: IMPORT ---


# --- TASK 2-3: TEXT FILE WRITING ---
# Create mission.log and write initial message


# --- TASK 4: TEXT FILE READING ---
# Read and print the log contents


# --- TASK 5-6: JSON SAVING ---
# Create agent_data dict and save to JSON


# --- TASK 7: JSON LOADING ---
# Load the JSON back and print


print("Loaded agent:", loaded)

# ===========================================
# LOG SYSTEM COMPLETE
# ===========================================
`
        }
    ]
};
