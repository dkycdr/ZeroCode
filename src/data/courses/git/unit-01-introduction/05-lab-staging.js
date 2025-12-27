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
            description: 'Check current status with "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-staging Status',
                strategy: 'Always check status before staging to see which files are untracked.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Stage the neural network engine: "git add src/engine/net.js"',
            completed: false,
            regex: /\s*git\s+add\s+src\/engine\/net\.js\s*/,
            hint: {
                concept: 'Selective Staging',
                strategy: 'Use specific file paths to stage only what you need.',
                solution: 'git add src/engine/net.js'
            }
        },
        {
            id: 3,
            description: 'Stage the config directory: "git add config/"',
            completed: false,
            regex: /\s*git\s+add\s+config\/?\s*/,
            hint: {
                concept: 'Directory Staging',
                strategy: 'You can stage entire directories by specifying the folder name.',
                solution: 'git add config/'
            }
        },
        {
            id: 4,
            description: 'Check status to see staged files (green) vs untracked (red)',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Staged vs Untracked',
                strategy: 'Green files are staged. Red files are modified/untracked.',
                solution: 'git status'
            }
        },
        {
            id: 5,
            description: 'Unstage config/ using "git restore --staged config/"',
            completed: false,
            regex: /\s*git\s+restore\s+--staged\s+config\/?\s*/,
            hint: {
                concept: 'Unstaging Files',
                strategy: 'Use git restore --staged to move files back from staging to working directory.',
                solution: 'git restore --staged config/'
            }
        },
        {
            id: 6,
            description: 'Stage all files at once with "git add ."',
            completed: false,
            regex: /\s*git\s+add\s+\.\s*/,
            hint: {
                concept: 'Bulk Staging',
                strategy: 'git add . stages everything in current directory and subdirectories.',
                solution: 'git add .'
            }
        },
        {
            id: 7,
            description: 'Check the diff of staged files with "git diff --staged"',
            completed: false,
            regex: /\s*git\s+diff\s+--staged\s*/,
            hint: {
                concept: 'Reviewing Staged Changes',
                strategy: 'git diff --staged shows what will be committed.',
                solution: 'git diff --staged'
            }
        },
        {
            id: 8,
            description: 'Commit staged files: git commit -m "Add source files"',
            completed: false,
            regex: /\s*git\s+commit\s+-m\s*["'].*["']\s*/,
            hint: {
                concept: 'Committing Staged Work',
                strategy: 'After staging, commit with a descriptive message.',
                solution: 'git commit -m "Add source files"'
            }
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
