import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2Staging = {
    id: 'git-1-lab-staging',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Staging Area 📦',
    duration: '25 min',
    content: `
# Lab: The Staging Area 📦

## The Scenario
You are still setting up the "Nexus AI" project.
The project folder is messy. It contains configuration files, source code, and a \`debug.log\` file that should **never** be shared.
Your lead architect, "Morpheus", told you: "Only commit the source code and config. Do not track the log files."

## Your Mission
1.  **Selective Staging**: Add \`src/engine/net.js\` to the Staging Area.
2.  **Bulk Staging**: Add the entire \`config/\` folder.
3.  **Verification**: Using \`git status\`, confirm that \`debug.log\` is still "Untracked" (Red), while the others are "Staged" (Green).

## The Command
\`\`\`bash
git add <filename>
\`\`\`
This moves a file from the Working Directory into the Index (Staging Area). It prepares the file for the next snapshot.
    `,
    tasks: [
        {
            id: 1,
            description: 'Stage the neural network engine: "git add src/engine/net.js".',
            completed: false,
            regex: /\s*git\s+add\s+src\/engine\/net\.js\s*/,
            hint: 'Use the specific file path. Do not use "git add ." yet!'
        },
        {
            id: 2,
            description: 'Stage the directory: "git add config/".',
            completed: false,
            regex: /\s*git\s+add\s+config\/?\s*/,
            hint: 'You can stage entire directories by name.'
        },
        {
            id: 3,
            description: 'Check status to verify "debug.log" is NOT staged.',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: 'Run "git status" and look for debug.log in the Red section.'
        }
    ],
    files: [
        {
            name: 'src/engine/net.js',
            language: 'javascript',
            content: `export class NeuralNet {
    // Core logic ready for staging
}`
        },
        {
            name: 'config/database.json',
            language: 'json',
            content: `{ "host": "localhost" }`
        },
        {
            name: 'debug.log',
            language: 'text',
            content: `[ERROR] Connection failed
[INFO] Retrying...
[WARN] Memory leak detected`
        },
        {
            name: 'NOTES.txt',
            language: 'text',
            content: `Meeting notes:
- Buy milk
- Fix server
`
        }
    ]
};
