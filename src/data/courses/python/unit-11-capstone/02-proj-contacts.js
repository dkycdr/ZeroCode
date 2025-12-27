import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const proj2ContactManager = {
    id: 'py-u10-proj-2-contacts',
    type: CONTENT_TYPES.LESSON,
    title: 'Capstone: Agent Contact Registry',
    duration: '60 min',
    content: `
# Capstone: Agent Contact Registry

## The Final Mission
Congratulations, Agent! You've mastered Python fundamentals.
Now prove it by building a complete application from scratch.

## Project Requirements
Build a CLI-based contact manager that:
1. **Persists data** in a JSON file
2. **Supports CRUD** - Create, Read, Update, Delete contacts
3. **Has a menu** - User chooses operations
4. **Handles errors** - No crashes allowed!

## Skills You'll Use
- Variables & Data Types (Unit 1)
- Control Flow (Unit 2)
- Loops (Unit 3)
- Dictionaries (Unit 5)
- Functions (Unit 6)
- Modules (Unit 7)
- File Handling (Unit 8)
- Error Handling (Unit 9)

## Success Criteria
Application must be fully functional and not crash on any input.
`,
    tasks: [
        {
            id: 1,
            description: 'Import json and os modules',
            completed: false,
            regex: /import\s+json[\s\S]*import\s+os|import\s+os[\s\S]*import\s+json/,
            hint: {
                concept: 'Module Imports',
                strategy: 'Import required modules at the top.',
                solution: 'import json\\nimport os'
            }
        },
        {
            id: 2,
            description: 'Define FILENAME constant as "contacts.json"',
            completed: false,
            regex: /FILENAME\s*=\s*["']contacts\.json["']/,
            hint: {
                concept: 'Constant Definition',
                strategy: 'Use UPPERCASE for constants.',
                solution: 'FILENAME = "contacts.json"'
            }
        },
        {
            id: 3,
            description: 'Create load_contacts() that reads JSON or returns empty dict',
            completed: false,
            regex: /def\s+load_contacts\s*\(\s*\)\s*:[\s\S]*json\.load|def\s+load_contacts\s*\(\s*\)\s*:[\s\S]*return\s*\{\}/,
            hint: {
                concept: 'Load Function',
                strategy: 'Try to load, return {} if file not found.',
                solution: 'def load_contacts():\\n    try:\\n        with open(FILENAME) as f:\\n            return json.load(f)\\n    except FileNotFoundError:\\n        return {}'
            }
        },
        {
            id: 4,
            description: 'Create save_contacts(contacts) that writes to JSON',
            completed: false,
            regex: /def\s+save_contacts\s*\(\s*contacts\s*\)\s*:[\s\S]*json\.dump/,
            hint: {
                concept: 'Save Function',
                strategy: 'Open file in write mode, use json.dump.',
                solution: 'def save_contacts(contacts):\\n    with open(FILENAME, "w") as f:\\n        json.dump(contacts, f, indent=2)'
            }
        },
        {
            id: 5,
            description: 'Create add_contact(name, phone) that adds to contacts',
            completed: false,
            regex: /def\s+add_contact\s*\([^)]*name[^)]*phone[^)]*\)\s*:/,
            hint: {
                concept: 'Add Function',
                strategy: 'Load, update dict, save back.',
                solution: 'def add_contact(name, phone):\\n    contacts = load_contacts()\\n    contacts[name] = phone\\n    save_contacts(contacts)'
            }
        },
        {
            id: 6,
            description: 'Create view_contacts() that displays all contacts',
            completed: false,
            regex: /def\s+view_contacts\s*\(\s*\)\s*:[\s\S]*for\s+\w+/,
            hint: {
                concept: 'View Function',
                strategy: 'Load contacts, loop through items.',
                solution: 'def view_contacts():\\n    contacts = load_contacts()\\n    for name, phone in contacts.items():\\n        print(f"{name}: {phone}")'
            }
        },
        {
            id: 7,
            description: 'Create delete_contact(name) that removes a contact',
            completed: false,
            regex: /def\s+delete_contact\s*\(\s*name\s*\)\s*:/,
            hint: {
                concept: 'Delete Function',
                strategy: 'Load, delete key, save back.',
                solution: 'def delete_contact(name):\\n    contacts = load_contacts()\\n    if name in contacts:\\n        del contacts[name]\\n        save_contacts(contacts)'
            }
        },
        {
            id: 8,
            description: 'Create main() with while True loop for menu',
            completed: false,
            regex: /def\s+main\s*\(\s*\)\s*:[\s\S]*while\s+True/,
            hint: {
                concept: 'Main Menu Loop',
                strategy: 'Infinite loop with menu choices.',
                solution: 'def main():\\n    while True:\\n        print("1. Add  2. View  3. Delete  4. Exit")\\n        choice = input("Choice: ")'
            }
        },
        {
            id: 9,
            description: 'Use input() to get user menu choice',
            completed: false,
            regex: /choice\s*=\s*input\s*\(/,
            hint: {
                concept: 'User Input',
                strategy: 'input() returns string from user.',
                solution: 'choice = input("Enter choice: ")'
            }
        },
        {
            id: 10,
            description: 'Use if/elif to call correct function based on choice',
            completed: false,
            regex: /if\s+choice\s*==[\s\S]*elif\s+choice\s*==/,
            hint: {
                concept: 'Menu Selection',
                strategy: 'if/elif chain to handle each choice.',
                solution: 'if choice == "1":\\n    ...\\nelif choice == "2":\\n    ...'
            }
        }
    ],
    files: [
        {
            name: 'contacts.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE AGENT CONTACT REGISTRY
# CAPSTONE PROJECT - All Skills Combined
# ============================================

# --- TASK 1: IMPORTS ---


# --- TASK 2: CONSTANTS ---


# ========================================
# DATA PERSISTENCE FUNCTIONS
# ========================================

# TASK 3: Load contacts from JSON (handle missing file)


# TASK 4: Save contacts to JSON


# ========================================
# CRUD OPERATIONS
# ========================================

# TASK 5: Add new contact


# TASK 6: View all contacts


# TASK 7: Delete contact by name


# ========================================
# MAIN APPLICATION
# ========================================

# TASK 8-10: Main menu loop
def main():
    print("=== AGENT CONTACT REGISTRY ===")
    # Implement menu loop here
    pass


# Entry point
if __name__ == "__main__":
    main()

# ============================================
# MISSION COMPLETE - YOU ARE NOW A PYTHON AGENT
# ============================================
`
        }
    ]
};
