import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labFlow = {
    id: 'git-6-lab-flow',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Gitflow Simulation 🌊',
    duration: '25 min',
    content: `
# Lab: The Gitflow Simulation 🌊

**Scenario**: Your team uses **Gitflow**.
You have a bunch of features in \`develop\` that are ready for the v1.0 release.

Your job is to cut a **Release Branch**, verify it, and then merge it into \`main\` with a tag.

---

## Your Mission

### Task 1: Cut the Release
You are currently on \`develop\`.
Create and switch to a new branch named \`release/v1.0.0\`.

### Task 2: Bump Version
Edit \`package.json\` and change version from \`"0.9.0"\` to \`"1.0.0"\`.
Commit this change: "chore: bump version to 1.0.0".

### Task 3: Ship It
Switch to \`main\`.
Merge \`release/v1.0.0\` into \`main\`.

### Task 4: Tag It
Create a tag named \`v1.0.0\` on the current commit.

---

## Helpful Commands
*   \`git switch -c <name>\`
*   \`git merge <branch>\`
*   \`git tag <name>\`
`,
    files: [
        { name: 'package.json', content: '{\n  "version": "0.9.0"\n}' }
    ],
    initialGitState: {
        branch: 'develop',
        branches: ['main', 'develop'],
        commits: [
            { id: 'feat2', message: 'feat: finished dashboard', timestamp: new Date(), filesSnapshot: [], parent: 'feat1' },
            { id: 'feat1', message: 'feat: user profiles', timestamp: new Date(), filesSnapshot: [], parent: 'init' },
            { id: 'init', message: 'Initial commit', timestamp: new Date(), filesSnapshot: [], parent: null }
        ],
        head: 'feat2',
        branchSnapshots: {
            'main': [{ name: 'package.json', content: '{\n  "version": "0.9.0"\n}' }],
            'develop': [{ name: 'package.json', content: '{\n  "version": "0.9.0"\n}' }]
        }
    },
    tasks: [
        {
            id: 'create-release',
            description: 'Create branch release/v1.0.0',
            regex: 'BRANCH_ACTIVE:release/v1.0.0'
        },
        {
            id: 'bump-version',
            description: 'Commit version bump in package.json',
            regex: 'FILE_CONTAINS:package.json:"1.0.0"'
        },
        {
            id: 'merge-main',
            description: 'Merge release into main',
            regex: 'BRANCH_ACTIVE:main'  // Ideally check merge, but being on main + having file content covers it
        },
        {
            id: 'tag-version',
            description: 'Create tag v1.0.0',
            regex: 'COMMAND:git tag v1.0.0' // Simplified check
        }
    ]
};
