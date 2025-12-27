import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Diff = {
    id: 'git-2-lab-diff',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Reading the DNA 🧬',
    duration: '25 min',
    content: `
# Lab: Reading the DNA 🧬

Before you commit code, you must be able to read what you've changed. In this lab, you will use Git's difference engine to audit your own work. You have a project where some code has been modified, some has been staged, and some is still in the working directory.

## Your Mission

### Task 1: Audit the Unstaged
Check the differences in your **Working Directory** that haven't been staged yet. Find the file that has a new \`console.log\` added.

### Task 2: Audit the Loading Dock
Stage the changes in \`src/auth.js\`. Then, use the correct flag to see what is **currently staged** (ready to be committed).

### Task 3: The Complete Picture
Check the diff between your current working state and the **HEAD** (the last commit). This should show everything you've changed, whether staged or not.

---

## Helpful Commands
*   \`git diff\`: Show unstaged changes.
*   \`git diff --staged\`: Show staged changes.
*   \`git diff HEAD\`: Show all changes relative to the last commit.
*   \`git add <file>\`: Move a file to the staging area.
`,
    files: [
        { name: 'src/main.js', content: 'import { login } from "./auth";\n\nlogin();' },
        {
            name: 'src/auth.js',
            content: 'export const login = () => {\n  // logic changed\n  console.log("Auth System Online");\n};'
        },
        { name: 'package.json', content: '{\n  "name": "git-lab-diff",\n  "version": "1.0.0"\n}' }
    ],
    tasks: [
        {
            id: 1,
            description: 'Check status to see modified files',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-diff Status',
                strategy: 'See which files are modified before checking the diff.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'View unstaged changes: "git diff"',
            completed: false,
            regex: /\s*git\s+diff\s*$/,
            hint: {
                concept: 'Unstaged Diff',
                strategy: 'git diff shows changes in working directory not yet staged.',
                solution: 'git diff'
            }
        },
        {
            id: 3,
            description: 'Stage auth.js: "git add src/auth.js"',
            completed: false,
            regex: /\s*git\s+add\s+src\/auth\.js\s*/,
            hint: {
                concept: 'Staging for Diff',
                strategy: 'Stage a file to move it to the "ready to commit" area.',
                solution: 'git add src/auth.js'
            }
        },
        {
            id: 4,
            description: 'View staged changes: "git diff --staged"',
            completed: false,
            regex: /\s*git\s+diff\s+--staged\s*/,
            hint: {
                concept: 'Staged Diff',
                strategy: 'Shows what will be committed (staged changes only).',
                solution: 'git diff --staged'
            }
        },
        {
            id: 5,
            description: 'View all changes vs HEAD: "git diff HEAD"',
            completed: false,
            regex: /\s*git\s+diff\s+HEAD\s*/,
            hint: {
                concept: 'Full Diff',
                strategy: 'Shows ALL changes (staged + unstaged) compared to last commit.',
                solution: 'git diff HEAD'
            }
        },
        {
            id: 6,
            description: 'View diff for specific file: "git diff src/main.js"',
            completed: false,
            regex: /\s*git\s+diff\s+\S+\.js\s*/,
            hint: {
                concept: 'File-specific Diff',
                strategy: 'Specify a file path to see changes only in that file.',
                solution: 'git diff src/main.js'
            }
        },
        {
            id: 7,
            description: 'View word-level diff: "git diff --word-diff"',
            completed: false,
            regex: /\s*git\s+diff\s+--word-diff\s*/,
            hint: {
                concept: 'Word Diff',
                strategy: 'Shows changes at word level instead of line level.',
                solution: 'git diff --word-diff'
            }
        },
        {
            id: 8,
            description: 'View diff with stats: "git diff --stat"',
            completed: false,
            regex: /\s*git\s+diff\s+--stat\s*/,
            hint: {
                concept: 'Diff Statistics',
                strategy: 'Shows summary of files changed and lines added/removed.',
                solution: 'git diff --stat'
            }
        }
    ]
};
