import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Undo = {
    id: 'git-2-lab-undo',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Safety Net 🥅',
    duration: '20 min',
    content: `
# Lab: The Safety Net 🥅

Mistakes happen. Your job is to fix them before they reach the repository. In this lab, you have accidentally staged a sensitive file and corrupted a configuration file. You need to use Git's restoration tools to clean up the mess.

## Your Mission

### Task 1: Unstage the Secret
You accidentally ran \`git add .\` and staged \`config/secrets.env\`. Move it back to the Working Directory without deleting its content.

### Task 2: Discard the Corruption
The file \`src/config.js\` was modified with experimental code that broke the build. Revert it to its last committed state (from the HEAD).

### Task 3: The Big Reset
Use the classic reset command to empty the entire Staging Area in one move.

---

## Helpful Commands
*   \`git restore --staged <file>\`: Unstage a file.
*   \`git restore <file>\`: Discard changes in a file.
*   \`git reset HEAD\`: Unstage everything.
`,
    files: [
        { name: 'src/config.js', content: 'export const settings = {\n  debug: true,\n  // CORRUPTED LINE: @#$%^&*\n};' },
        { name: 'config/secrets.env', content: 'PASSWORD=password123' },
        { name: 'README.md', content: '# Project Safety\nThis is a safe project.' }
    ],
    tasks: [
        {
            id: 1,
            description: 'Check status to see staged files',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-undo Status',
                strategy: 'See what is staged before deciding what to undo.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Unstage secrets.env: "git restore --staged config/secrets.env"',
            completed: false,
            regex: /\s*git\s+restore\s+--staged\s+config\/secrets\.env\s*/,
            hint: {
                concept: 'Unstaging Files',
                strategy: 'Move file from staging back to working directory (keeps changes).',
                solution: 'git restore --staged config/secrets.env'
            }
        },
        {
            id: 3,
            description: 'Verify secrets.env is no longer staged',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'The file should now appear as "modified" (red) not "staged" (green).',
                solution: 'git status'
            }
        },
        {
            id: 4,
            description: 'Discard changes in config.js: "git restore src/config.js"',
            completed: false,
            regex: /\s*git\s+restore\s+src\/config\.js\s*/,
            hint: {
                concept: 'Discarding Changes',
                strategy: 'DESTRUCTIVE: Reverts file to last committed version.',
                solution: 'git restore src/config.js'
            }
        },
        {
            id: 5,
            description: 'Verify config.js is restored',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Clean Status',
                strategy: 'The file should no longer appear as modified.',
                solution: 'git status'
            }
        },
        {
            id: 6,
            description: 'Stage everything: "git add ."',
            completed: false,
            regex: /\s*git\s+add\s+\.\s*/,
            hint: {
                concept: 'Bulk Staging',
                strategy: 'Stage all files to practice resetting.',
                solution: 'git add .'
            }
        },
        {
            id: 7,
            description: 'Reset all staged files: "git reset HEAD"',
            completed: false,
            regex: /\s*git\s+reset\s+HEAD\s*/,
            hint: {
                concept: 'Bulk Unstaging',
                strategy: 'Clears the entire staging area at once.',
                solution: 'git reset HEAD'
            }
        },
        {
            id: 8,
            description: 'Final status check - should show no staged files',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Clean Staging',
                strategy: 'All files should be in working directory, none staged.',
                solution: 'git status'
            }
        }
    ]
};
