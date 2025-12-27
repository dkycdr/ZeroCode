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
            id: 1,
            description: 'List all branches: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Branch Inventory',
                strategy: 'See all local branches before cleanup.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'View merged branches: "git branch --merged"',
            completed: false,
            regex: /\s*git\s+branch\s+--merged\s*/,
            hint: {
                concept: 'Merged Branches',
                strategy: 'Shows branches that have been merged into current branch.',
                solution: 'git branch --merged'
            }
        },
        {
            id: 3,
            description: 'View unmerged branches: "git branch --no-merged"',
            completed: false,
            regex: /\s*git\s+branch\s+--no-merged\s*/,
            hint: {
                concept: 'Unmerged Branches',
                strategy: 'Shows branches with work not yet merged.',
                solution: 'git branch --no-merged'
            }
        },
        {
            id: 4,
            description: 'Delete merged branch safely: "git branch -d old-feature"',
            completed: false,
            regex: /\s*git\s+branch\s+-d\s+old-feature\s*/,
            hint: {
                concept: 'Safe Delete',
                strategy: '-d only deletes if branch is fully merged.',
                solution: 'git branch -d old-feature'
            }
        },
        {
            id: 5,
            description: 'Try deleting unmerged branch with -d (will fail)',
            completed: false,
            regex: /\s*git\s+branch\s+-d\s+failed-research\s*/,
            hint: {
                concept: 'Safe Delete Protection',
                strategy: 'Git refuses to delete unmerged work with -d.',
                solution: 'git branch -d failed-research'
            }
        },
        {
            id: 6,
            description: 'Force delete unmerged: "git branch -D failed-research"',
            completed: false,
            regex: /\s*git\s+branch\s+-D\s+failed-research\s*/,
            hint: {
                concept: 'Force Delete',
                strategy: '-D (capital) forces deletion even if unmerged.',
                solution: 'git branch -D failed-research'
            }
        },
        {
            id: 7,
            description: 'List branches to verify cleanup',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Cleanup Verification',
                strategy: 'Only main should remain.',
                solution: 'git branch'
            }
        },
        {
            id: 8,
            description: 'Prune remote-tracking branches: "git fetch --prune"',
            completed: false,
            regex: /\s*git\s+fetch\s+--prune\s*/,
            hint: {
                concept: 'Remote Cleanup',
                strategy: 'Removes references to deleted remote branches.',
                solution: 'git fetch --prune'
            }
        }
    ]
};
