import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labSync = {
    id: 'git-6-lab-sync',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Syncing the Fork 🔄',
    duration: '25 min',
    content: `
# Lab: Syncing the Fork 🔄

**Scenario**: You forked \`open-source/library\` a month ago. Since then, the original authors have fixed many bugs. Your local version is outdated.

You need to configure the **upstream** remote and pull the latest changes into your local \`main\`.

---

## Your Mission

### Task 1: Check Remotes
Run \`git remote -v\`. You current only have \`origin\`.

### Task 2: Connect Upstream
Add the upstream remote:
\`https://github.com/framework/core.git\`

### Task 3: Fetch Power
Fetch the latest history from \`upstream\`.

### Task 4: The Merge
Switch to \`main\` and merge \`upstream/main\` into it.

---

## Helpful Commands
*   \`git remote add <name> <url>\`
*   \`git fetch <remote>\`
*   \`git merge <remote>/<branch>\`
`,
    files: [
        { name: 'README.md', content: '# My Fork\nOld content.' }
    ],
    initialGitState: {
        branch: 'main',
        branches: ['main'],
        commits: [
            { id: 'fork1', message: 'docs: update readme', timestamp: new Date(Date.now() - 100000), filesSnapshot: [], parent: 'init' },
            { id: 'init', message: 'Initial commit', timestamp: new Date(Date.now() - 200000), filesSnapshot: [], parent: null }
        ],
        head: 'fork1',
        // We need to support 'fetch' to make this realistic visually
    },
    tasks: [
        {
            id: 1,
            description: 'Check current remotes: "git remote -v"',
            completed: false,
            regex: /\s*git\s+remote\s+-v\s*/,
            hint: {
                concept: 'Remote Inventory',
                strategy: 'You should only see origin.',
                solution: 'git remote -v'
            }
        },
        {
            id: 2,
            description: 'Add upstream remote: git remote add upstream https://github.com/framework/core.git',
            completed: false,
            regex: /\s*git\s+remote\s+add\s+upstream\s+https?:\/\/\S+\s*/,
            hint: {
                concept: 'Adding Upstream',
                strategy: 'upstream points to original repo you forked from.',
                solution: 'git remote add upstream https://github.com/framework/core.git'
            }
        },
        {
            id: 3,
            description: 'Verify remotes: "git remote -v"',
            completed: false,
            regex: /\s*git\s+remote\s+-v\s*/,
            hint: {
                concept: 'Remote Verification',
                strategy: 'Should now show origin AND upstream.',
                solution: 'git remote -v'
            }
        },
        {
            id: 4,
            description: 'Fetch from upstream: "git fetch upstream"',
            completed: false,
            regex: /\s*git\s+fetch\s+upstream\s*/,
            hint: {
                concept: 'Fetching Upstream',
                strategy: 'Downloads changes from original repo.',
                solution: 'git fetch upstream'
            }
        },
        {
            id: 5,
            description: 'View upstream branches: "git branch -r"',
            completed: false,
            regex: /\s*git\s+branch\s+-r\s*/,
            hint: {
                concept: 'Remote Branches',
                strategy: 'Should show upstream/main.',
                solution: 'git branch -r'
            }
        },
        {
            id: 6,
            description: 'Switch to main: "git switch main"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Target Branch',
                strategy: 'Merge into your local main.',
                solution: 'git switch main'
            }
        },
        {
            id: 7,
            description: 'Merge upstream: "git merge upstream/main"',
            completed: false,
            regex: /\s*git\s+merge\s+upstream\/main\s*/,
            hint: {
                concept: 'Syncing Fork',
                strategy: 'Brings original repo changes into your fork.',
                solution: 'git merge upstream/main'
            }
        },
        {
            id: 8,
            description: 'Push synced changes: "git push origin main"',
            completed: false,
            regex: /\s*git\s+push\s+origin\s+main\s*/,
            hint: {
                concept: 'Updating Fork',
                strategy: 'Push synced changes to your GitHub fork.',
                solution: 'git push origin main'
            }
        }
    ]
};
