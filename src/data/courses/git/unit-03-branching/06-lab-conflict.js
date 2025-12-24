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
            id: 'trigger-conflict',
            description: 'Trigger the conflict by merging feature-ui',
            regex: 'MERGE_CONFLICT:styles.css'
        },
        {
            id: 'resolve-content',
            description: 'Resolve the conflict (background should be midnightblue)',
            regex: 'FILE:styles.css,MATCH:background: midnightblue,NOT_MATCH:<<<<<<'
        },
        {
            id: 'stage-resolve',
            description: 'Stage the resolved file',
            regex: 'STAGED:styles.css'
        },
        {
            id: 'finish-merge',
            description: 'Commit the resolution',
            regex: 'COMMIT_MSG:.*Resolve UI color conflict.*'
        }
    ]
};
