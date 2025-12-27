import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Requirements = {
    id: 'py-u10-doc-1-requirements',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Capstone Requirements',
    duration: '10 min read',
    content: `
# Capstone: Build a CLI App

## Congratulations!

You've mastered Python fundamentals. Now build something real!

---

## Project: Contact Manager

Build a command-line contact manager that:
1. Stores contacts in a JSON file
2. Allows add, view, search, delete operations

---

## Skills You'll Use

| Skill | Unit |
|:---|:---|
| Variables & Data Types | Unit 1 |
| Control Flow | Unit 2 |
| Loops | Unit 3 |
| Dictionaries | Unit 5 |
| Functions | Unit 6 |
| File Handling | Unit 8 |
| Error Handling | Unit 9 |

---

## Success Criteria

- [ ] Add new contacts
- [ ] View all contacts
- [ ] Search by name
- [ ] Delete contacts
- [ ] Data persists in JSON file
`
};
