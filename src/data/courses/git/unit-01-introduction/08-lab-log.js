import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Log = {
    id: 'git-1-lab-log',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Time Travel (git log) 🕰️',
    duration: '20 min',
    content: `
# Lab: Time Travel 🕰️

## The Scenario
It's been a busy week at Nexus AI.
You, Morpheus, and Trinity have pushed 5 updates.
You need to find the Commit ID (SHA) of the update where Trinity fixed the critical memory leak.

## Your Mission
1.  **View History**: Run \`git log\` to see the full timeline.
2.  **Condensed View**: Run \`git log --oneline\` to see just the IDs and messages.
3.  **Analysis**: Identify the commit hash for "fix: memory leak in data loader".

## The Commands
*   \`git log\`: Shows Author, Date, Message, and full Hash.
*   \`git log --oneline\`: Shows short Hash and Message. Perfect for quick scanning.
    `,
    tasks: [
        {
            id: 1,
            description: 'View full history: "git log".',
            completed: false,
            regex: /\s*git\s+log\s*/,
            hint: 'Press "q" to exit the log view if it gets stuck.'
        },
        {
            id: 2,
            description: 'View compact history: "git log --oneline".',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: 'This is the most used command by senior devs.'
        }
    ],
    files: [
        {
            name: 'README.md',
            language: 'markdown',
            content: `# Nexus AI History
History is simulated in this lab environment.
Running git log will show pre-generated commits.
            `
        }
    ]
};
