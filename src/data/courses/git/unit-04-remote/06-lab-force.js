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
            id: 'amend-commit',
            description: 'Amend the last commit message',
            regex: 'COMMAND:git commit --amend'
        },
        {
            id: 'failed-push',
            description: 'Attempt a standard push (and see it fail)',
            regex: 'COMMAND:git push origin main'
        },
        {
            id: 'safe-force-push',
            description: 'Perform a safe force push with lease',
            regex: 'COMMAND:git push --force-with-lease'
        }
    ]
};
