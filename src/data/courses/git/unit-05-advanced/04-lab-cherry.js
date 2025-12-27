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
            id: 1,
            description: 'Switch to feature-payment: "git switch feature-payment"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+feature-payment\s*/,
            hint: {
                concept: 'Branch Navigation',
                strategy: 'Go to the branch containing the commit you need.',
                solution: 'git switch feature-payment'
            }
        },
        {
            id: 2,
            description: 'View commit log: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Finding Commits',
                strategy: 'Identify the hash of the commit you need.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 3,
            description: 'Copy the hash of "fix: critical payment bug" commit',
            completed: false,
            regex: /\s*fix999\s*/,
            hint: {
                concept: 'Selecting Commit',
                strategy: 'Note the short hash (e.g., fix999).',
                solution: 'Remember: fix999'
            }
        },
        {
            id: 4,
            description: 'Switch back to main: "git switch main"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Target Branch',
                strategy: 'Cherry-pick applies to current branch.',
                solution: 'git switch main'
            }
        },
        {
            id: 5,
            description: 'Cherry-pick the fix: "git cherry-pick fix999"',
            completed: false,
            regex: /\s*git\s+cherry-pick\s+\w+\s*/,
            hint: {
                concept: 'Cherry-picking',
                strategy: 'Applies just that one commit to current branch.',
                solution: 'git cherry-pick fix999'
            }
        },
        {
            id: 6,
            description: 'View log to confirm: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'The fix commit should now appear in main.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 7,
            description: 'Check the file content: "cat src/payment.js"',
            completed: false,
            regex: /\s*cat\s+src\/payment\.js\s*/,
            hint: {
                concept: 'Content Verification',
                strategy: 'Confirm the fix is applied.',
                solution: 'cat src/payment.js'
            }
        },
        {
            id: 8,
            description: 'Check status: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Final Check',
                strategy: 'Should show clean working tree.',
                solution: 'git status'
            }
        }
    ]
};
