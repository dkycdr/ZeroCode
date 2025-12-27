import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Conflict = {
    id: 'git-3-lab-conflict',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Heat of Battle (Conflicts) ⚔️',
    duration: '30 min',
    content: `
# Lab: The Heat of Battle (Conflicts) ⚔️

In a team, multiple people often touch the same files. When your changes collide with someone else's, Git stops the merge and asks for your help. In this lab, you will intentionally trigger and resolve a merge conflict.

## The Scenario
1.  **On \`main\`**: Someone updated the \`styles.css\` background to \`#111\`.
2.  **On \`feature-ui\`**: You updated the same background line to \`midnightblue\`.
3.  **The Result**: Chaos.

---

## Your Mission

### Task 1: Trigger the Collision
Make sure you are on the \`main\` branch. Run \`git merge feature-ui\`. Git will report a conflict in \`styles.css\`.

### Task 2: Analyze the DNA
Open \`styles.css\`. Locate the conflict markers (\`<<<<<<\`, \`======\`, \`>>>>>>>\`).

### Task 3: Peace Treaty
Resolve the conflict. Keep the \`midnightblue\` color but delete all the conflict markers.

### Task 4: Finalize the Peace
Stage the resolved \`styles.css\` and commit with the message "Merge: Resolve UI color conflict".

---

## Helpful Commands
*   \`git merge feature-ui\`: Start the merge.
*   \`git status\`: See which files are conflicted ("both modified").
*   \`git add styles.css\`: Mark the conflict as resolved.
*   \`git commit\`: Complete the merge commit.
`,
    files: [
        { name: 'styles.css', content: 'body {\n  background: #111;\n  color: white;\n}' }
    ],
    setup: async (terminal) => {
        // Internal setup: Create feature branch with conflicting change
        await terminal.execute('git switch -c feature-ui');
        await terminal.execute('sed -i "s/background: #111/background: midnightblue/" styles.css');
        await terminal.execute('git add styles.css');
        await terminal.execute('git commit -m "UI: Change to midnight theme"');
        await terminal.execute('git switch main');
    },
    tasks: [
        {
            id: 1,
            description: 'Check you are on main: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Pre-merge Position',
                strategy: 'Must be on target branch (main) before merging.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'Trigger the conflict: "git merge feature-ui"',
            completed: false,
            regex: /\s*git\s+merge\s+feature-ui\s*/,
            hint: {
                concept: 'Triggering Conflict',
                strategy: 'Git will detect conflicting changes and stop.',
                solution: 'git merge feature-ui'
            }
        },
        {
            id: 3,
            description: 'Check status to see conflicted files: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Conflict Status',
                strategy: 'Shows "both modified" for conflicted files.',
                solution: 'git status'
            }
        },
        {
            id: 4,
            description: 'View the conflict markers: "cat styles.css"',
            completed: false,
            regex: /\s*cat\s+styles\.css\s*/,
            hint: {
                concept: 'Conflict Analysis',
                strategy: 'Look for <<<<<<<, =======, and >>>>>>> markers.',
                solution: 'cat styles.css'
            }
        },
        {
            id: 5,
            description: 'Edit the file to resolve (keep midnightblue, remove markers)',
            completed: false,
            regex: /\s*(nano|vim|code|sed)\s+.*styles\.css.*/,
            hint: {
                concept: 'Manual Resolution',
                strategy: 'Edit file to remove markers and keep desired code.',
                solution: 'nano styles.css (then manually edit)'
            }
        },
        {
            id: 6,
            description: 'Stage resolved file: "git add styles.css"',
            completed: false,
            regex: /\s*git\s+add\s+styles\.css\s*/,
            hint: {
                concept: 'Marking Resolved',
                strategy: 'git add tells Git the conflict is resolved.',
                solution: 'git add styles.css'
            }
        },
        {
            id: 7,
            description: 'Complete merge: git commit -m "Merge: Resolve UI conflict"',
            completed: false,
            regex: /\s*git\s+commit\s+-m\s+["'].*["']\s*/,
            hint: {
                concept: 'Merge Commit',
                strategy: 'Finalize the merge with a descriptive message.',
                solution: 'git commit -m "Merge: Resolve UI color conflict"'
            }
        },
        {
            id: 8,
            description: 'Verify merge complete: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Merge Verification',
                strategy: 'Should show the merge commit in history.',
                solution: 'git log --oneline'
            }
        }
    ]
};
