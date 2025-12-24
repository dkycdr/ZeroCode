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
            id: 'remote-v',
            description: 'Check existing remotes',
            regex: 'COMMAND:git remote -v'
        },
        {
            id: 'add-upstream',
            description: 'Add upstream remote "https://github.com/framework/core.git"',
            regex: 'COMMAND:git remote add upstream'
        },
        {
            id: 'fetch-upstream',
            description: 'Fetch changes from upstream',
            regex: 'COMMAND:git fetch' // any fetch or fetch upstream
        },
        {
            id: 'merge-upstream',
            description: 'Merge upstream/main into local main',
            regex: 'COMMAND:git merge upstream/main'
        }
    ]
};
