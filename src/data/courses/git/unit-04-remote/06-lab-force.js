import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Force = {
    id: 'git-4-lab-force',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Force Push (Safe Practices) ⚠️',
    duration: '15 min',
    content: `
# Lab: The Force Push ⚠️

Sometimes, you need to rewrite history on the remote repository—for example, after you've used \`git commit --amend\` to fix a typo in your last commit.

However, a standard \`git push\` will fail if the remote history is different from your local history. While many developers use the "nuclear" option (\`--force\`), elite developers use a safer alternative.

---

## Your Mission

### Task 1: Amend the Past
You realize your last commit message had a typo. Use the amend command to change the last commit message to "feat: implement neural processing engine".

### Task 2: The Rejected Handshake
Try to push your change to \`origin main\`. Notice the error message—this is Git protecting the remote history.

### Task 3: The Lease to Safety
Instead of a raw force push, use the **"lease"** flag to push your amended history to the remote repository. This ensures you only overwrite if no one else has added new work in the meantime.

---

## Helpful Commands
*   \`git commit --amend -m "message"\`: Fix the last commit.
*   \`git push origin main\`: Standard push (will fail after amend).
*   \`git push --force-with-lease origin main\`: The safe way to rewrite remote history.
`,
    files: [
        { name: 'src/engine.js', content: 'const engine = "processing";' }
    ],
    tasks: [
        {
            id: 1,
            description: 'View current commit: "git log -1 --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+-1\s+--oneline\s*/,
            hint: {
                concept: 'Pre-amend Check',
                strategy: 'See the current commit message before amending.',
                solution: 'git log -1 --oneline'
            }
        },
        {
            id: 2,
            description: 'Amend commit message: git commit --amend -m "feat: implement neural processing engine"',
            completed: false,
            regex: /\s*git\s+commit\s+--amend\s+-m\s+["'].*["']\s*/,
            hint: {
                concept: 'Amending',
                strategy: 'Changes the message of the last commit.',
                solution: 'git commit --amend -m "feat: implement neural processing engine"'
            }
        },
        {
            id: 3,
            description: 'Verify amended message: "git log -1 --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+-1\s+--oneline\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'Confirm the message was updated.',
                solution: 'git log -1 --oneline'
            }
        },
        {
            id: 4,
            description: 'Try standard push (will fail): "git push origin main"',
            completed: false,
            regex: /\s*git\s+push\s+origin\s+main\s*/,
            hint: {
                concept: 'Push Rejection',
                strategy: 'Remote history differs from local - push rejected.',
                solution: 'git push origin main'
            }
        },
        {
            id: 5,
            description: 'View the error message',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Understanding Rejection',
                strategy: 'Git says "non-fast-forward" - histories diverged.',
                solution: 'git status'
            }
        },
        {
            id: 6,
            description: 'Safe force push: "git push --force-with-lease origin main"',
            completed: false,
            regex: /\s*git\s+push\s+--force-with-lease\s+origin\s+main\s*/,
            hint: {
                concept: 'Safe Force Push',
                strategy: 'Only overwrites if no new commits on remote.',
                solution: 'git push --force-with-lease origin main'
            }
        },
        {
            id: 7,
            description: 'Verify push succeeded: "git log origin/main --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+origin\/main\s+--oneline\s*/,
            hint: {
                concept: 'Remote Verification',
                strategy: 'Confirm remote has your amended commit.',
                solution: 'git log origin/main --oneline'
            }
        },
        {
            id: 8,
            description: 'Compare local and remote: "git diff main origin/main"',
            completed: false,
            regex: /\s*git\s+diff\s+main\s+origin\/main\s*/,
            hint: {
                concept: 'Sync Check',
                strategy: 'Should show no differences (in sync).',
                solution: 'git diff main origin/main'
            }
        }
    ]
};
