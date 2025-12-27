import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labReview = {
    id: 'git-6-lab-review',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Review Duty 🛡️',
    duration: '20 min',
    content: `
# Lab: Review Duty 🛡️

**Scenario**: You opened a PR for the 'Login' feature. Great job!
However, you just received a notification from GitHub.

**Reviewer (@senior-bot) commented on \`src/auth.js\`**:
> *Review: Request Changes 🛑*
> *"Please do not hardcode the admin password here! This is a massive security risk. Use an environment variable."*

You need to address this feedback urgently to get your PR approved.

---

## Your Mission

### Task 1: Checkout
Switch to your feature branch \`feature-login\`.

### Task 2: The Fix
Open \`src/auth.js\`. You will see \`const secret = "admin123";\`.
Change it to \`const secret = process.env.SECRET_KEY;\`.
Save the file.

### Task 3: The Update
Commit the change with message "fix: remove hardcoded secret".

### Task 4: Push
Push the changes to \`origin\`. This automatically updates the PR.

---

## Helpful Commands
*   \`git status\`
*   \`git diff\`
*   \`git commit -am "message"\`
`,
    files: [
        { name: 'src/auth.js', content: 'const login = (user) => {\n  const secret = "admin123";\n  return true;\n};' },
        { name: 'README.md', content: '# Auth Module\nSecured by secrets.' }
    ],
    initialGitState: {
        branch: 'feature-login',

        branches: ['main', 'feature-login'],
        commits: [
            { id: 'wip123', message: 'feat: add login logic', timestamp: new Date(), filesSnapshot: [], parent: 'init1' },
            { id: 'init1', message: 'Initial commit', timestamp: new Date(), filesSnapshot: [], parent: null }
        ],
        head: 'wip123',
        branchSnapshots: {
            'main': [],
            'feature-login': [{ name: 'src/auth.js', content: 'const login = (user) => {\n  const secret = "admin123";\n  return true;\n};' }]
        }
    },
    tasks: [
        {
            id: 1,
            description: 'Check current branch: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Branch Check',
                strategy: 'Verify you are on feature-login.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'View the problematic code: "cat src/auth.js"',
            completed: false,
            regex: /\s*cat\s+src\/auth\.js\s*/,
            hint: {
                concept: 'Review Issue',
                strategy: 'Find the hardcoded secret.',
                solution: 'cat src/auth.js'
            }
        },
        {
            id: 3,
            description: 'Edit auth.js to use environment variable',
            completed: false,
            regex: /\s*(nano|vim|code|sed)\s+.*auth\.js.*/,
            hint: {
                concept: 'Fixing Issue',
                strategy: 'Replace "admin123" with process.env.SECRET_KEY.',
                solution: 'nano src/auth.js'
            }
        },
        {
            id: 4,
            description: 'View the diff: "git diff"',
            completed: false,
            regex: /\s*git\s+diff\s*$/,
            hint: {
                concept: 'Review Changes',
                strategy: 'Verify your fix is correct.',
                solution: 'git diff'
            }
        },
        {
            id: 5,
            description: 'Stage and commit: git commit -am "fix: remove hardcoded secret"',
            completed: false,
            regex: /\s*git\s+commit\s+-am?\s+["'].*["']\s*/,
            hint: {
                concept: 'Committing Fix',
                strategy: 'Commit with descriptive message.',
                solution: 'git commit -am "fix: remove hardcoded secret"'
            }
        },
        {
            id: 6,
            description: 'Push to update PR: "git push"',
            completed: false,
            regex: /\s*git\s+push\s*/,
            hint: {
                concept: 'Updating PR',
                strategy: 'Push updates the PR automatically.',
                solution: 'git push'
            }
        },
        {
            id: 7,
            description: 'View push confirmation: "git log origin/feature-login --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+origin\/feature-login\s+--oneline\s*/,
            hint: {
                concept: 'Push Verification',
                strategy: 'Confirm your fix is on remote.',
                solution: 'git log origin/feature-login --oneline'
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
