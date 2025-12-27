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
            id: 1,
            description: 'Check current branch: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Starting Point',
                strategy: 'Verify you are on develop.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'Create release branch: "git switch -c release/v1.0.0"',
            completed: false,
            regex: /\s*git\s+(switch\s+-c|checkout\s+-b)\s+release\/v1\.0\.0\s*/,
            hint: {
                concept: 'Release Branch',
                strategy: 'Create and switch to release branch.',
                solution: 'git switch -c release/v1.0.0'
            }
        },
        {
            id: 3,
            description: 'View package.json: "cat package.json"',
            completed: false,
            regex: /\s*cat\s+package\.json\s*/,
            hint: {
                concept: 'Version Check',
                strategy: 'See current version.',
                solution: 'cat package.json'
            }
        },
        {
            id: 4,
            description: 'Edit package.json to change version to "1.0.0"',
            completed: false,
            regex: /\s*(nano|vim|code|sed)\s+.*package\.json.*/,
            hint: {
                concept: 'Version Bump',
                strategy: 'Change version from 0.9.0 to 1.0.0.',
                solution: 'nano package.json'
            }
        },
        {
            id: 5,
            description: 'Commit version bump: git commit -am "chore: bump version to 1.0.0"',
            completed: false,
            regex: /\s*git\s+commit\s+-am?\s+["'].*["']\s*/,
            hint: {
                concept: 'Release Commit',
                strategy: 'Commit the version change.',
                solution: 'git commit -am "chore: bump version to 1.0.0"'
            }
        },
        {
            id: 6,
            description: 'Switch to main: "git switch main"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Merge Target',
                strategy: 'Merge release into main.',
                solution: 'git switch main'
            }
        },
        {
            id: 7,
            description: 'Merge release: "git merge release/v1.0.0"',
            completed: false,
            regex: /\s*git\s+merge\s+release\/v1\.0\.0\s*/,
            hint: {
                concept: 'Release Merge',
                strategy: 'Merge release branch into main.',
                solution: 'git merge release/v1.0.0'
            }
        },
        {
            id: 8,
            description: 'Create release tag: "git tag v1.0.0"',
            completed: false,
            regex: /\s*git\s+tag\s+v1\.0\.0\s*/,
            hint: {
                concept: 'Tagging',
                strategy: 'Create a tag to mark the release.',
                solution: 'git tag v1.0.0'
            }
        }
    ]
};
