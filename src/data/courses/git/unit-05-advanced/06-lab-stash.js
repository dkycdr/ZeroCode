import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Stash = {
    id: 'git-5-lab-stash',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Emergency Context Switch 🚑',
    duration: '20 min',
    content: `
# Lab: The Emergency Context Switch 🚑

**Scenario**: You are deep in the code for \`feature-dashboard\`. Files are modified, but the code doesn't even compile yet.

Suddenly, a wild Manager appears! "We need you to fix a typo on main RIGHT NOW!"

You can't commit broken code. You need to stash it.

---

## Your Mission

### Task 1: Stash the Mess
Run \`git status\` to see your messy state. Then, stash your changes to clear the working directory.

### Task 2: Verify Cleanliness
Ensure your working directory is clean using \`git status\`.

### Task 3: The Return
Pretend you fixed the bug on main. Now, bring your stashed work back using **pop**.

---

## Helpful Commands
*   \`git stash\`: Save changes and revert to HEAD.
*   \`git stash pop\`: Restore changes and delete from stack.
`,
    files: [
        { name: 'src/dashboard.js', content: 'const dashboard = "broken code...' }
    ],
    tasks: [
        {
            id: 1,
            description: 'Check messy status: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-stash Status',
                strategy: 'See your modified files before stashing.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Stash your changes: "git stash"',
            completed: false,
            regex: /\s*git\s+stash\s*$/,
            hint: {
                concept: 'Basic Stash',
                strategy: 'Saves changes and reverts working directory to HEAD.',
                solution: 'git stash'
            }
        },
        {
            id: 3,
            description: 'Verify clean directory: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Clean Working Tree',
                strategy: 'Should say "nothing to commit".',
                solution: 'git status'
            }
        },
        {
            id: 4,
            description: 'View stash list: "git stash list"',
            completed: false,
            regex: /\s*git\s+stash\s+list\s*/,
            hint: {
                concept: 'Stash Stack',
                strategy: 'Shows all stashed entries.',
                solution: 'git stash list'
            }
        },
        {
            id: 5,
            description: 'Pretend to fix bug on main (switch branches, etc)',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Emergency Fix',
                strategy: 'You can now safely work on other branches.',
                solution: 'git switch main'
            }
        },
        {
            id: 6,
            description: 'Restore stashed work: "git stash pop"',
            completed: false,
            regex: /\s*git\s+stash\s+pop\s*/,
            hint: {
                concept: 'Pop Stash',
                strategy: 'Restores changes and removes from stash stack.',
                solution: 'git stash pop'
            }
        },
        {
            id: 7,
            description: 'Verify restored changes: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Restored Status',
                strategy: 'Your modifications should be back.',
                solution: 'git status'
            }
        },
        {
            id: 8,
            description: 'Alternative: Stash with message: git stash push -m "WIP dashboard"',
            completed: false,
            regex: /\s*git\s+stash\s+push\s+-m\s+["'].*["']\s*/,
            hint: {
                concept: 'Named Stash',
                strategy: 'Give stashes descriptive names.',
                solution: 'git stash push -m "WIP dashboard"'
            }
        }
    ]
};
