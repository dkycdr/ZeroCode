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
            id: 'unstage-secret',
            description: 'Unstage the secrets.env file',
            regex: 'UNSTAGED:config/secrets.env'
        },
        {
            id: 'restore-config',
            description: 'Discard changes in config.js',
            regex: 'RESTORED:src/config.js'
        },
        {
            id: 'reset-all',
            description: 'Run the command to clear the entire staging area',
            regex: 'COMMAND:git reset HEAD'
        }
    ]
};
