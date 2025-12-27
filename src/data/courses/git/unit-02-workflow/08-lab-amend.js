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
            id: 1,
            description: 'View current commit history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Pre-amend Check',
                strategy: 'See the current commit message before amending.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 2,
            description: 'Amend commit message: git commit --amend -m "Initial project setup"',
            completed: false,
            regex: /\s*git\s+commit\s+--amend\s+-m\s+["'].*["']\s*/,
            hint: {
                concept: 'Amending Message',
                strategy: 'Changes the message of the most recent commit.',
                solution: 'git commit --amend -m "Initial project setup with documentation"'
            }
        },
        {
            id: 3,
            description: 'View updated history',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Verify Message',
                strategy: 'Confirm the commit message was updated.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 4,
            description: 'Make a change to README.md',
            completed: false,
            regex: /\s*echo\s+.*>>\s*README\.md\s*/,
            hint: {
                concept: 'File Modification',
                strategy: 'Add content to README to stage for amending.',
                solution: 'echo "Updated" >> README.md'
            }
        },
        {
            id: 5,
            description: 'Stage the updated README: "git add README.md"',
            completed: false,
            regex: /\s*git\s+add\s+README\.md\s*/,
            hint: {
                concept: 'Staging for Amend',
                strategy: 'Stage files you want to add to the previous commit.',
                solution: 'git add README.md'
            }
        },
        {
            id: 6,
            description: 'Amend without changing message: "git commit --amend --no-edit"',
            completed: false,
            regex: /\s*git\s+commit\s+--amend\s+--no-edit\s*/,
            hint: {
                concept: 'Silent Amend',
                strategy: 'Adds staged files to last commit without editing message.',
                solution: 'git commit --amend --no-edit'
            }
        },
        {
            id: 7,
            description: 'View the amended commit details: "git show HEAD"',
            completed: false,
            regex: /\s*git\s+show\s+HEAD\s*/,
            hint: {
                concept: 'Commit Details',
                strategy: 'Shows full details including the amended files.',
                solution: 'git show HEAD'
            }
        },
        {
            id: 8,
            description: 'Confirm only one commit exists: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'History Verification',
                strategy: 'Should still show only one commit (amended, not new).',
                solution: 'git log --oneline'
            }
        }
    ]
};
