import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Branch = {
    id: 'git-3-lab-branch',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Divergent Timelines 🌀',
    duration: '15 min',
    content: `
# Lab: Divergent Timelines 🌀

As a lead developer, you frequently need to work on multiple features simultaneously without them interfering with each other. In this lab, you will explore the power of "Parallel Universes" by creating and switching between branches.

## Your Project
You have a basic website. Your goal is to keep the \`main\` branch stable while you experiment with a new "Dark Mode" feature on a separate branch.

---

## Your Mission

### Task 1: Check the Origin
Run the command to list all current branches. Identify which branch you are currently on.

### Task 2: Create a New Timeline
Create a new branch named \`feature-dark-mode\`. Note: Do not switch to it yet.

### Task 3: Enter the Portal
Switch to your new branch. Check the status of your project to confirm you have moved.

### Task 4: The Speedrun
Git provides a shortcut to create and switch in one move. Use this shortcut to create a second branch named \`bugfix-header\`.

---

## Helpful Commands
*   \`git branch\`: List branches.
*   \`git branch <name>\`: Create a branch.
*   \`git switch <name>\`: Switch to a branch.
*   \`git switch -c <name>\`: Create and switch in one go.
`,
    files: [
        { name: 'index.html', content: '<h1>Stable Website</h1>' },
        { name: 'app.js', content: 'console.log("Normal Mode");' }
    ],
    tasks: [
        {
            id: 'list-branches',
            description: 'List all branches in the repository',
            regex: 'COMMAND:git branch'
        },
        {
            id: 'create-branch',
            description: 'Create a branch named feature-dark-mode',
            regex: 'BRANCH_EXISTS:feature-dark-mode'
        },
        {
            id: 'switch-branch',
            description: 'Switch to the feature-dark-mode branch',
            regex: 'BRANCH_ACTIVE:feature-dark-mode'
        },
        {
            id: 'create-switch-shortcut',
            description: 'Create and switch to bugfix-header using the shortcut',
            regex: 'COMMAND:git (switch -c|checkout -b) bugfix-header'
        }
    ]
};
