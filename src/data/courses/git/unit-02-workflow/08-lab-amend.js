import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Amend = {
    id: 'git-2-lab-amend',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Second Chance 🔄',
    duration: '15 min',
    content: `
# Lab: The Second Chance 🔄

You just committed your work, but there's a problem. You left a embarrassing typo in the commit message, and you realized you forgot to include the \`README.md\` updates. Instead of making multiple messy commits, you're going to use the power of amendment to fix it perfectly.

## Your Mission

### Task 1: Fix the Message
You have a last commit with the message "init codebase". Change it to "Initial project setup with documentation".

### Task 2: Join the Party
You have an updated \`README.md\` in your working directory. Stage it and then **amend** it into the last commit without changing the message again.

### Task 3: Verify the Identity
Check the commit history to ensure there is only **one** commit and it has the correct message and content.

---

## Helpful Commands
*   \`git commit --amend -m "New Message"\`: Change message.
*   \`git add <file>\`: Stage the forgotten file.
*   \`git commit --amend --no-edit\`: Add staged files to last commit.
*   \`git log --oneline\`: Check the history.
`,
    files: [
        { name: 'app.js', content: 'console.log("App v1.0");' },
        { name: 'README.md', content: '# My Project\n\nDocs updated after commit.' }
    ],
    tasks: [
        {
            id: 'fix-message',
            description: 'Amend the last commit message to "Initial project setup with documentation"',
            regex: 'COMMIT_MSG:Initial project setup with documentation'
        },
        {
            id: 'add-forgotten',
            description: 'Stage the README.md and amend the last commit',
            regex: 'AMENDED_FILES:README.md'
        },
        {
            id: 'verify-history',
            description: 'Run the command to see the simplified log',
            regex: 'COMMAND:git log --oneline'
        }
    ]
};
