import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Rebase = {
    id: 'git-5-lab-rebase',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Clean Sweep (Interactive Rebase) 🧹',
    duration: '25 min',
    content: `
# Lab: The Clean Sweep 🧹

Your feature branch \`feature-login\` works perfectly, but the history is a mess. You have commits like "wip", "fixed typo", and "saving work".

Before you merge this into \`main\`, you must clean up your mess using **Interactive Rebase**.

---

## Your Mission

### Task 1: Start the Operation
Initiate an interactive rebase for the last 3 commits.
\`\`\`bash
git rebase -i HEAD~3
\`\`\`

### Task 2: Squash the Noise
In the editor simulation:
1.  **Keep (\`pick\`)** the oldest commit (the first one in the list).
2.  **Squash (\`s\`)** the subsequent two commits into the first one.

### Task 3: The Final Polish
After squashing, rename the final combined commit to "feat: implement secure login".

---

## Helpful Commands
*   \`git rebase -i HEAD~n\`: Rebase the last n commits.
*   **Editor Keys**: In a real terminal, you'd use Vim. Here, simply modify the text commands to \`pick\` or \`squash\`.
`,
    files: [
        { name: 'src/login.js', content: 'function login() { return true; }' }
    ],
    tasks: [
        {
            id: 'start-rebase',
            description: 'Start interactive rebase for the last 3 commits',
            regex: 'COMMAND:git rebase -i HEAD~3'
        },
        {
            id: 'commit-count',
            description: 'Ensure only 1 commit remains after squashing',
            // Check that the history length on this branch is reduced relative to start
            regex: 'COMMIT_COUNT:2' // Assuming initial commit + 1 squashed feature commit
        },
        {
            id: 'commit-msg',
            description: 'Verify final commit message is "feat: implement secure login"',
            regex: 'COMMIT_MSG:feat: implement secure login'
        }
    ]
};
