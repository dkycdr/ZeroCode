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
            id: 'stash-changes',
            description: 'Stash your current changes',
            regex: 'COMMAND:git stash' // Only matches the simple stash command or 'git stash push'
        },
        {
            id: 'verify-clean',
            description: 'Verify working directory is clean',
            // Check that staging and working directory are empty via status command or internal state? 
            // Better to check specific command usage in history or state.
            regex: 'COMMAND:git status'
        },
        {
            id: 'pop-stash',
            description: 'Bring the changes back with pop',
            regex: 'COMMAND:git stash pop'
        }
    ]
};
