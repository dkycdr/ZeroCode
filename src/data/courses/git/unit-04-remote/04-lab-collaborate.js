import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Collaborate = {
    id: 'git-4-lab-collaborate',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Collaboration Dance (git fetch & merge) 💃',
    duration: '25 min',
    content: `
# Lab: The Collaboration Dance 💃

You are working on the "Nexus AI" project with a teammate. While you were sleeping, they pushed a critical update to the \`main\` branch on GitHub.

Your goal is to bring those changes down into your local repository safely, without overwriting your current progress.

---

## Your Mission

### Task 1: Peer over the Fence
Download the latest information from the \`origin\` remote. Remember: this should **not** change your working directory yet.

### Task 2: Audit the Changes
Compare your local \`main\` branch with the newly updated \`origin/main\` branch. Verify that they have indeed added a new file or changed code.

### Task 3: The Integration
Bring the changes from \`origin/main\` into your local \`main\` branch.

---

## Helpful Commands
*   \`git fetch origin\`: Download remote metadata.
*   \`git diff main origin/main\`: Compare local vs remote tracking.
*   \`git merge origin/main\`: Integrate the foreign changes.
*   \`git pull\`: The shortcut (fetch + merge).
`,
    files: [
        { name: 'src/main.js', content: 'console.log("Nexus AI v1.0");' }
    ],
    tasks: [
        {
            id: 'fetch-remote',
            description: 'Fetch the latest updates from the origin remote',
            regex: 'COMMAND:git fetch'
        },
        {
            id: 'diff-tracking',
            description: 'Compare current branch with the remote tracking branch',
            regex: 'COMMAND:git diff main origin/main'
        },
        {
            id: 'merge-upstream',
            description: 'Merge origin/main into the current branch',
            regex: 'COMMAND:git merge origin/main'
        }
    ]
};
