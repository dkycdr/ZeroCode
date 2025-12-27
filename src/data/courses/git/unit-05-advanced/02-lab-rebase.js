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
            id: 1,
            description: 'View current messy history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Pre-rebase History',
                strategy: 'See the commits you are about to squash.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 2,
            description: 'Start interactive rebase: "git rebase -i HEAD~3"',
            completed: false,
            regex: /\s*git\s+rebase\s+-i\s+HEAD~\d+\s*/,
            hint: {
                concept: 'Interactive Rebase',
                strategy: 'Opens editor to modify last n commits.',
                solution: 'git rebase -i HEAD~3'
            }
        },
        {
            id: 3,
            description: 'Change second commit to "squash" (s)',
            completed: false,
            regex: /\s*s\s+/,
            hint: {
                concept: 'Squash Command',
                strategy: 'Change "pick" to "s" or "squash" to combine with previous.',
                solution: 'Change "pick abc123" to "s abc123"'
            }
        },
        {
            id: 4,
            description: 'Change third commit to "squash" (s)',
            completed: false,
            regex: /\s*s\s+/,
            hint: {
                concept: 'Multiple Squash',
                strategy: 'All squashed commits combine into the first "pick".',
                solution: 'Change "pick def456" to "s def456"'
            }
        },
        {
            id: 5,
            description: 'Save and exit editor (simulation)',
            completed: false,
            regex: /\s*:wq\s*/,
            hint: {
                concept: 'Vim Save',
                strategy: 'In vim, :wq saves and exits.',
                solution: ':wq'
            }
        },
        {
            id: 6,
            description: 'Write new combined commit message',
            completed: false,
            regex: /\s*feat:\s+implement\s+secure\s+login\s*/,
            hint: {
                concept: 'Combined Message',
                strategy: 'Write a clean message describing all the work.',
                solution: 'feat: implement secure login'
            }
        },
        {
            id: 7,
            description: 'View clean history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Post-rebase History',
                strategy: 'Should now show fewer, cleaner commits.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 8,
            description: 'Continue with normal workflow',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'Confirm rebase completed successfully.',
                solution: 'git status'
            }
        }
    ]
};
