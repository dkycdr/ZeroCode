import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Collaborate = {
    id: 'git-4-lab-collaborate',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Collaboration Dance (git fetch & merge) 💃',
    duration: '25 min',
    content: `
# Lab: The Collaboration Dance 💃

You are working on the "Nexus AI" project with a teammate. While you were sleeping, they pushed a critical update to the \`main\` branch on GitHub.

Your goal is to bring those changes down into your local repository safely, without overwriting your current progress.

---

## Your Mission

### Task 1: Peer over the Fence
Download the latest information from the \`origin\` remote. Remember: this should **not** change your working directory yet.

### Task 2: Audit the Changes
Compare your local \`main\` branch with the newly updated \`origin/main\` branch. Verify that they have indeed added a new file or changed code.

### Task 3: The Integration
Bring the changes from \`origin/main\` into your local \`main\` branch.

---

## Helpful Commands
*   \`git fetch origin\`: Download remote metadata.
*   \`git diff main origin/main\`: Compare local vs remote tracking.
*   \`git merge origin/main\`: Integrate the foreign changes.
*   \`git pull\`: The shortcut (fetch + merge).
`,
    files: [
        { name: 'src/main.js', content: 'console.log("Nexus AI v1.0");' }
    ],
    tasks: [
        {
            id: 1,
            description: 'Check current status: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-fetch Status',
                strategy: 'See your current working state before fetching.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Fetch updates from origin: "git fetch origin"',
            completed: false,
            regex: /\s*git\s+fetch\s+origin?\s*/,
            hint: {
                concept: 'Fetching',
                strategy: 'Downloads remote data without changing working directory.',
                solution: 'git fetch origin'
            }
        },
        {
            id: 3,
            description: 'View fetched branches: "git branch -r"',
            completed: false,
            regex: /\s*git\s+branch\s+-r\s*/,
            hint: {
                concept: 'Remote Branches',
                strategy: 'Shows all remote-tracking branches.',
                solution: 'git branch -r'
            }
        },
        {
            id: 4,
            description: 'Compare local vs remote: "git diff main origin/main"',
            completed: false,
            regex: /\s*git\s+diff\s+main\s+origin\/main\s*/,
            hint: {
                concept: 'Local vs Remote Diff',
                strategy: 'See what changed on remote since your last sync.',
                solution: 'git diff main origin/main'
            }
        },
        {
            id: 5,
            description: 'View commit difference: "git log main..origin/main --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+main\.\.origin\/main\s*/,
            hint: {
                concept: 'Commit Comparison',
                strategy: 'Shows commits on remote not yet in local.',
                solution: 'git log main..origin/main --oneline'
            }
        },
        {
            id: 6,
            description: 'Merge remote changes: "git merge origin/main"',
            completed: false,
            regex: /\s*git\s+merge\s+origin\/main\s*/,
            hint: {
                concept: 'Merging Remote',
                strategy: 'Integrates remote changes into your local branch.',
                solution: 'git merge origin/main'
            }
        },
        {
            id: 7,
            description: 'Verify merge: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Merge Verification',
                strategy: 'Check that remote commits are now in local history.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 8,
            description: 'Alternative: Use git pull (fetch + merge): "git pull origin main"',
            completed: false,
            regex: /\s*git\s+pull\s+origin\s+main\s*/,
            hint: {
                concept: 'Pull Shortcut',
                strategy: 'git pull = git fetch + git merge in one command.',
                solution: 'git pull origin main'
            }
        }
    ]
};
