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
            id: 'check-unstaged',
            description: 'Run the command to see unstaged changes',
            regex: 'COMMAND:git diff'
        },
        {
            id: 'stage-auth',
            description: 'Stage the auth.js file',
            regex: 'STAGED:src/auth.js'
        },
        {
            id: 'check-staged',
            description: 'Run the command to see staged changes',
            regex: 'COMMAND:git diff --staged'
        },
        {
            id: 'check-head',
            description: 'Run the command to see all changes relative to HEAD',
            regex: 'COMMAND:git diff HEAD'
        }
    ]
};
