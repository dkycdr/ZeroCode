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
            id: 1,
            description: 'List all branches: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Listing Branches',
                strategy: 'Shows all local branches. Current branch has * marker.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'Create feature-dark-mode branch: "git branch feature-dark-mode"',
            completed: false,
            regex: /\s*git\s+branch\s+feature-dark-mode\s*/,
            hint: {
                concept: 'Creating Branches',
                strategy: 'git branch <name> creates a new branch but does not switch to it.',
                solution: 'git branch feature-dark-mode'
            }
        },
        {
            id: 3,
            description: 'List branches again to see the new branch',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Branch Verification',
                strategy: 'You should now see two branches listed.',
                solution: 'git branch'
            }
        },
        {
            id: 4,
            description: 'Switch to feature-dark-mode: "git switch feature-dark-mode"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+feature-dark-mode\s*/,
            hint: {
                concept: 'Switching Branches',
                strategy: 'git switch moves HEAD to the specified branch.',
                solution: 'git switch feature-dark-mode'
            }
        },
        {
            id: 5,
            description: 'Verify current branch: "git branch" (should show * on feature)',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Current Branch',
                strategy: 'The asterisk (*) shows which branch you are on.',
                solution: 'git branch'
            }
        },
        {
            id: 6,
            description: 'Create and switch in one command: "git switch -c bugfix-header"',
            completed: false,
            regex: /\s*git\s+(switch\s+-c|checkout\s+-b)\s+bugfix-header\s*/,
            hint: {
                concept: 'Shortcut Create+Switch',
                strategy: '-c flag creates and switches in one command.',
                solution: 'git switch -c bugfix-header'
            }
        },
        {
            id: 7,
            description: 'List all branches to see all three',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Multiple Branches',
                strategy: 'Should show main, feature-dark-mode, and bugfix-header.',
                solution: 'git branch'
            }
        },
        {
            id: 8,
            description: 'Switch back to main: "git switch main"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Returning to Main',
                strategy: 'Always switch back to main when done experimenting.',
                solution: 'git switch main'
            }
        }
    ]
};
