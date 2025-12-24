import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Push = {
    id: 'git-4-lab-push',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Handshake (git push) 🤝',
    duration: '20 min',
    content: `
# Lab: The Handshake 🤝

Your local project "Nexus AI" is ready for the world. You've created a repository on GitHub, and now you need to link your local machine to it and upload your code.

In Git terms, you are going to **add a remote** and **push** your history.

---

## Your Mission

### Task 1: Check Connections
Verify if there are any remotes currently configured for this project.

### Task 2: Add the Bridge
Link your local repository to the simulated GitHub URL:
\`https://github.com/zerocode/nexus-ai.git\`
Name the remote \`origin\`.

### Task 3: The First Upload
Push your \`main\` branch to the \`origin\` remote. Because this is the first push, you'll need to set the **upstream** tracking.

---

## Helpful Commands
*   \`git remote -v\`: List remotes.
*   \`git remote add <name> <url>\`: Add a new remote.
*   \`git push -u <remote> <branch>\`: Push and set upstream tracking.
`,
    files: [
        { name: 'src/main.js', content: 'console.log("Nexus AI v1.0");' },
        { name: 'README.md', content: '# Nexus AI' }
    ],
    tasks: [
        {
            id: 'check-remote',
            description: 'Check existing remotes with verbose output',
            regex: 'COMMAND:git remote -v'
        },
        {
            id: 'add-remote',
            description: 'Add remote "origin" pointing to the GitHub URL',
            regex: 'COMMAND:git remote add origin https://github.com/zerocode/nexus-ai.git'
        },
        {
            id: 'push-main',
            description: 'Push main to origin and set upstream',
            regex: 'COMMAND:git push -u origin main'
        }
    ]
};
