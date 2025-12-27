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
            id: 1,
            description: 'Check current branch: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Pre-merge Check',
                strategy: 'Verify you are on main before merging.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'Switch to main: "git switch main"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+main\s*/,
            hint: {
                concept: 'Target Branch',
                strategy: 'You must be on the branch you want to merge INTO.',
                solution: 'git switch main'
            }
        },
        {
            id: 3,
            description: 'View log before merge: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Pre-merge History',
                strategy: 'See your current commits before merging.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 4,
            description: 'Merge feature branch: "git merge feature-dark-mode"',
            completed: false,
            regex: /\s*git\s+merge\s+feature-dark-mode\s*/,
            hint: {
                concept: 'Merging',
                strategy: 'Brings commits from feature branch into current branch.',
                solution: 'git merge feature-dark-mode'
            }
        },
        {
            id: 5,
            description: 'View log after merge: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Post-merge History',
                strategy: 'Should now include commits from the feature branch.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 6,
            description: 'Verify app.js has dark mode code: "cat app.js"',
            completed: false,
            regex: /\s*cat\s+app\.js\s*/,
            hint: {
                concept: 'Content Verification',
                strategy: 'Confirm the merged changes are in your files.',
                solution: 'cat app.js'
            }
        },
        {
            id: 7,
            description: 'Delete merged branch: "git branch -d feature-dark-mode"',
            completed: false,
            regex: /\s*git\s+branch\s+-d\s+feature-dark-mode\s*/,
            hint: {
                concept: 'Branch Cleanup',
                strategy: '-d deletes merged branches. -D forces delete unmerged.',
                solution: 'git branch -d feature-dark-mode'
            }
        },
        {
            id: 8,
            description: 'List branches to confirm deletion: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Cleanup Verification',
                strategy: 'The deleted branch should no longer appear.',
                solution: 'git branch'
            }
        }
    ]
};
