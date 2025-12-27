import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Push = {
    id: 'git-4-lab-push',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Handshake (git push) 🤝',
    duration: '20 min',
    content: `
# Lab: The Handshake 🤝

Your local project "Nexus AI" is ready for the world. You've created a repository on GitHub, and now you need to link your local machine to it and upload your code.

In Git terms, you are going to **add a remote** and **push** your history.

---

## Your Mission

### Task 1: Check Connections
Verify if there are any remotes currently configured for this project.

### Task 2: Add the Bridge
Link your local repository to the simulated GitHub URL:
\`https://github.com/zerocode/nexus-ai.git\`
Name the remote \`origin\`.

### Task 3: The First Upload
Push your \`main\` branch to the \`origin\` remote. Because this is the first push, you'll need to set the **upstream** tracking.

---

## Helpful Commands
*   \`git remote -v\`: List remotes.
*   \`git remote add <name> <url>\`: Add a new remote.
*   \`git push -u <remote> <branch>\`: Push and set upstream tracking.
`,
    files: [
        { name: 'src/main.js', content: 'console.log("Nexus AI v1.0");' },
        { name: 'README.md', content: '# Nexus AI' }
    ],
    tasks: [
        {
            id: 1,
            description: 'Check existing remotes: "git remote -v"',
            completed: false,
            regex: /\s*git\s+remote\s+-v\s*/,
            hint: {
                concept: 'Remote Listing',
                strategy: '-v shows URLs for fetch and push.',
                solution: 'git remote -v'
            }
        },
        {
            id: 2,
            description: 'Add origin remote: git remote add origin https://github.com/zerocode/nexus-ai.git',
            completed: false,
            regex: /\s*git\s+remote\s+add\s+origin\s+https?:\/\/\S+\s*/,
            hint: {
                concept: 'Adding Remote',
                strategy: 'origin is the conventional name for the primary remote.',
                solution: 'git remote add origin https://github.com/zerocode/nexus-ai.git'
            }
        },
        {
            id: 3,
            description: 'Verify remote was added: "git remote -v"',
            completed: false,
            regex: /\s*git\s+remote\s+-v\s*/,
            hint: {
                concept: 'Remote Verification',
                strategy: 'Should now show origin with URL.',
                solution: 'git remote -v'
            }
        },
        {
            id: 4,
            description: 'Push main with upstream: "git push -u origin main"',
            completed: false,
            regex: /\s*git\s+push\s+-u\s+origin\s+main\s*/,
            hint: {
                concept: 'First Push',
                strategy: '-u sets upstream tracking for future pulls.',
                solution: 'git push -u origin main'
            }
        },
        {
            id: 5,
            description: 'Check branch tracking: "git branch -vv"',
            completed: false,
            regex: /\s*git\s+branch\s+-vv\s*/,
            hint: {
                concept: 'Tracking Verification',
                strategy: 'Shows which remote branch each local branch tracks.',
                solution: 'git branch -vv'
            }
        },
        {
            id: 6,
            description: 'View remote details: "git remote show origin"',
            completed: false,
            regex: /\s*git\s+remote\s+show\s+origin\s*/,
            hint: {
                concept: 'Remote Details',
                strategy: 'Shows full info about the remote.',
                solution: 'git remote show origin'
            }
        },
        {
            id: 7,
            description: 'Make a change and push: git push',
            completed: false,
            regex: /\s*git\s+push\s*$/,
            hint: {
                concept: 'Subsequent Push',
                strategy: 'After -u, just git push works.',
                solution: 'git push'
            }
        },
        {
            id: 8,
            description: 'Check push log: "git log origin/main --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+origin\/main\s+--oneline\s*/,
            hint: {
                concept: 'Remote History',
                strategy: 'Shows commits on the remote branch.',
                solution: 'git log origin/main --oneline'
            }
        }
    ]
};
