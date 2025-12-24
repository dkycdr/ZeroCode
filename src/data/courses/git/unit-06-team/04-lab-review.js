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
            id: 'check-branch',
            description: 'Ensure you are on feature-login',
            regex: 'BRANCH_ACTIVE:feature-login'
        },
        {
            id: 'fix-code',
            description: 'Fix the hardcoded secret',
            regex: 'FILE_CONTAINS:src/auth.js:process.env.SECRET_KEY'
        },
        {
            id: 'commit-fix',
            description: 'Commit the "fix: remove hardcoded secret"',
            regex: 'COMMIT_MSG:fix: remove hardcoded secret'
        },
        {
            id: 'push-update',
            description: 'Push the update to origin',
            regex: 'COMMAND:git push'
        }
    ]
};
