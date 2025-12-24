import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Cleanup = {
    id: 'git-3-lab-cleanup',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Cleanup (Maintenance) 🧹',
    duration: '15 min',
    content: `
# Lab: The Cleanup (Maintenance) 🧹

A successful project shouldn't have 100 stale branches lying around. Professional developers keep their "Reference Map" clean. In this lab, you will practice final integration and cleanup of your feature branches.

## Your Mission

### Task 1: Check the Junk
List all your local branches. Identify the old branches that have already been merged into \`main\`.

### Task 2: Standard Deletion
You have a branch named \`old-feature\` that is fully merged. Delete it using the standard (safe) delete command.

### Task 3: The Forceful Goodbye
You have an experimental branch named \`failed-research\` that you **don't** want to merge, but you want to delete it anyway. Use the "Force Delete" command.

### Task 4: Hygiene Check
List your branches one last time to ensure only \`main\` remains.

---

## Helpful Commands
*   \`git branch\`: List all branches.
*   \`git branch -d <name>\`: Delete a merged branch (Safe).
*   \`git branch -D <name>\`: Force delete a branch (Dangerous).
`,
    files: [
        { name: 'app.js', content: '// Stable code' }
    ],
    setup: async (terminal) => {
        // Internal setup: Create some junk branches
        await terminal.execute('git branch old-feature');
        await terminal.execute('git branch failed-research');
    },
    tasks: [
        {
            id: 'list-branches',
            description: 'List all branches',
            regex: 'COMMAND:git branch'
        },
        {
            id: 'delete-safe',
            description: 'Delete the old-feature branch safely',
            regex: 'COMMAND:git branch -d old-feature'
        },
        {
            id: 'delete-force',
            description: 'Force delete the failed-research branch',
            regex: 'COMMAND:git branch -D failed-research'
        },
        {
            id: 'final-check',
            description: 'List branches to verify cleanup',
            regex: 'COMMAND:git branch,RESULT:.*main.*'
        }
    ]
};
