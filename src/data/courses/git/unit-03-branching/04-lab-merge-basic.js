import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2MergeBasic = {
    id: 'git-3-lab-merge-basic',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Reuniting the Timeline 🤝',
    duration: '20 min',
    content: `
# Lab: Reuniting the Timeline 🤝

Your "Dark Mode" feature is finished and tested. It's time to bring that code back into the stable \`main\` branch. Since no one else has touched \`main\` while you were away, Git will perform a clean, linear **Fast-Forward** merge.

## Your Mission

### Task 1: Return to Base
Switch from your feature branch back to the \`main\` branch.

### Task 2: Absorb the History
Merge the \`feature-dark-mode\` branch into \`main\`. Look closely at the command output—it should mention "Fast-forward".

### Task 3: Proof of Integration
Verify that the files in your working directory now include the changes from the feature branch (the \`app.js\` should say "Dark Mode Activated").

### Task 4: Pruning the Pointer
Now that the work is in \`main\`, the feature branch pointer is no longer needed. Delete the \`feature-dark-mode\` branch.

---

## Helpful Commands
*   \`git switch main\`: Switch back to the primary timeline.
*   \`git merge <name>\`: Bring changes into the current branch.
*   \`git branch -d <name>\`: Delete a merged branch.
*   \`cat <file>\`: Read the content of a file.
`,
    files: [
        { name: 'index.html', content: '<h1>Stable Website</h1>' },
        { name: 'app.js', content: 'console.log("Normal Mode");' }
    ],
    setup: async (terminal) => {
        // Internal setup: Create the branch and commit changes
        // This is a simulated environment
        await terminal.execute('git switch -c feature-dark-mode');
        await terminal.execute('sed -i "s/Normal Mode/Dark Mode Activated/" app.js');
        await terminal.execute('git add app.js');
        await terminal.execute('git commit -m "Add dark mode logic"');
        await terminal.execute('git switch main');
    },
    tasks: [
        {
            id: 'switch-main',
            description: 'Switch back to the main branch',
            regex: 'BRANCH_ACTIVE:main'
        },
        {
            id: 'merge-feature',
            description: 'Merge feature-dark-mode into main',
            regex: 'COMMAND:git merge feature-dark-mode'
        },
        {
            id: 'verify-content',
            description: 'Verify app.js includes the new code',
            regex: 'FILE:app.js,MATCH:Dark Mode Activated'
        },
        {
            id: 'delete-branch',
            description: 'Delete the merged feature-dark-mode branch',
            regex: 'COMMAND:git branch -d feature-dark-mode'
        }
    ]
};
