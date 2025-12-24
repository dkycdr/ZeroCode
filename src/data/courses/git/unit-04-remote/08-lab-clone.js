import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Clone = {
    id: 'git-4-lab-clone',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Mirror (git clone) 🪞',
    duration: '15 min',
    content: `
# Lab: The Mirror 🪞

You've been invited to collaborate on a secret project: "Hyperloop Alpha". Instead of starting from scratch, you need to download the existing project history to your machine.

In this final lab, you will perform a clone and audit the connection you've just established.

---

## Your Mission

### Task 1: The Initial Download
Clone the following (simulated) repository into your current directory:
\`https://github.com/zerocode/hyperloop-alpha.git\`

### Task 2: Inspection
Look inside the newly created \`hyperloop-alpha\` folder. Verify that the \`.git\` folder exists (use \`ls -a\`).

### Task 3: The Connection Report
Use a command to show a detailed report of the connection between your local clone and the remote \`origin\`. Find out which branch is the "Head branch" on the server.

---

## Helpful Commands
*   \`git clone <url>\`: Download a repository.
*   \`ls -a\`: List all files, including hidden ones.
*   \`git remote show origin\`: Get a detailed report of the remote configuration.
`,
    files: [], // Empty because user starts by cloning
    tasks: [
        {
            id: 'clone-repo',
            description: 'Clone the hyperloop-alpha repository',
            regex: 'COMMAND:git clone https://github.com/zerocode/hyperloop-alpha.git'
        },
        {
            id: 'check-git-folder',
            description: 'Check for the existence of the .git folder',
            regex: 'COMMAND:ls -a'
        },
        {
            id: 'remote-show',
            description: 'Show detailed remote configuration',
            regex: 'COMMAND:git remote show origin'
        }
    ]
};
