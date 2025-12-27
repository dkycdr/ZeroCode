import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Clone = {
    id: 'git-4-lab-clone',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Mirror (git clone) 🪞',
    duration: '15 min',
    content: `
# Lab: The Mirror 🪞

You've been invited to collaborate on a secret project: "Hyperloop Alpha". Instead of starting from scratch, you need to download the existing project history to your machine.

In this final lab, you will perform a clone and audit the connection you've just established.

---

## Your Mission

### Task 1: The Initial Download
Clone the following (simulated) repository into your current directory:
\`https://github.com/zerocode/hyperloop-alpha.git\`

### Task 2: Inspection
Look inside the newly created \`hyperloop-alpha\` folder. Verify that the \`.git\` folder exists (use \`ls -a\`).

### Task 3: The Connection Report
Use a command to show a detailed report of the connection between your local clone and the remote \`origin\`. Find out which branch is the "Head branch" on the server.

---

## Helpful Commands
*   \`git clone <url>\`: Download a repository.
*   \`ls -a\`: List all files, including hidden ones.
*   \`git remote show origin\`: Get a detailed report of the remote configuration.
`,
    files: [], // Empty because user starts by cloning
    tasks: [
        {
            id: 1,
            description: 'Clone the repo: git clone https://github.com/zerocode/hyperloop-alpha.git',
            completed: false,
            regex: /\s*git\s+clone\s+https?:\/\/\S+\s*/,
            hint: {
                concept: 'Cloning',
                strategy: 'Downloads entire repository including history.',
                solution: 'git clone https://github.com/zerocode/hyperloop-alpha.git'
            }
        },
        {
            id: 2,
            description: 'Enter the project directory: "cd hyperloop-alpha"',
            completed: false,
            regex: /\s*cd\s+hyperloop-alpha\s*/,
            hint: {
                concept: 'Navigation',
                strategy: 'Move into the cloned directory.',
                solution: 'cd hyperloop-alpha'
            }
        },
        {
            id: 3,
            description: 'List all files including hidden: "ls -la"',
            completed: false,
            regex: /\s*ls\s+(-la|-al|-a)\s*/,
            hint: {
                concept: 'Hidden Files',
                strategy: 'The .git folder should exist.',
                solution: 'ls -la'
            }
        },
        {
            id: 4,
            description: 'Check remote configuration: "git remote -v"',
            completed: false,
            regex: /\s*git\s+remote\s+-v\s*/,
            hint: {
                concept: 'Remote Setup',
                strategy: 'origin is automatically configured after clone.',
                solution: 'git remote -v'
            }
        },
        {
            id: 5,
            description: 'View detailed remote info: "git remote show origin"',
            completed: false,
            regex: /\s*git\s+remote\s+show\s+origin\s*/,
            hint: {
                concept: 'Remote Details',
                strategy: 'Shows HEAD branch, tracking branches, etc.',
                solution: 'git remote show origin'
            }
        },
        {
            id: 6,
            description: 'View commit history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Clone History',
                strategy: 'You have full project history locally.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 7,
            description: 'List all branches (local + remote): "git branch -a"',
            completed: false,
            regex: /\s*git\s+branch\s+-a\s*/,
            hint: {
                concept: 'All Branches',
                strategy: 'Shows local branches and remote-tracking branches.',
                solution: 'git branch -a'
            }
        },
        {
            id: 8,
            description: 'Check current status: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Ready to Work',
                strategy: 'Should show clean working tree on main branch.',
                solution: 'git status'
            }
        }
    ]
};
