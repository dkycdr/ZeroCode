import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Cherry = {
    id: 'git-5-lab-cherry',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Precision Strike (Cherry-Pick) 🎯',
    duration: '20 min',
    content: `
# Lab: The Precision Strike 🎯

**Scenario**: You are on the \`main\` branch. A developer has fixed a critical bug in the \`feature-payment\` branch, but they also included a bunch of experimental code in that same branch.

You need to extract **only** the bug fix commit and bring it to \`main\`.

---

## Your Mission

### Task 1: Intelligence Gathering
Switch to the \`feature-payment\` branch and view the log. Identify the commit hash for the message "fix: critical payment bug".

### Task 2: The Extraction
Switch back to \`main\`.

### Task 3: The Transplant
Cherry-pick that specific commit into your \`main\` branch.

---

## Helpful Commands
*   \`git log --oneline\`: View simplified history.
*   \`git switch <branch>\`: Switch branches.
*   \`git cherry-pick <hash>\`: Apply the commit.
`,
    files: [
        { name: 'src/payment.js', content: 'const process = () => true;' }
    ],
    initialGitState: {
        branch: 'main',
        branches: ['main', 'feature-payment'],
        commits: [
            { id: 'dev333', message: 'wip: experimental payment flow', timestamp: new Date(), filesSnapshot: [], parent: 'fix999' },
            { id: 'fix999', message: 'fix: critical payment bug', timestamp: new Date(), filesSnapshot: [], parent: 'init123' },
            { id: 'init123', message: 'Initial commit', timestamp: new Date(), filesSnapshot: [], parent: null }
        ],
        head: 'init123',
        branchSnapshots: {
            'main': [{ name: 'src/payment.js', content: 'const process = () => true;' }],
            'feature-payment': [{ name: 'src/payment.js', content: 'const process = () => "FIXED";' }] // mock different content
        }
    },
    tasks: [
        {
            id: 'find-commit',
            description: 'Identify the commit (simulated step - check log)',
            regex: 'COMMAND:git log'
        },
        {
            id: 'switch-main',
            description: 'Switch back to the main branch',
            regex: 'BRANCH_ACTIVE:main'
        },
        {
            id: 'cherry-pick-success',
            description: 'Cherry-pick the fix. Verify commit message exists in main.',
            // We check if the commit message "fix: critical payment bug" now exists in main
            regex: 'COMMIT_MSG:fix: critical payment bug'
        }
    ]
};
