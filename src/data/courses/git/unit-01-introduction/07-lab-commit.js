import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Commit = {
    id: 'git-1-lab-commit',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Immortalizing Code (git commit) 💾',
    duration: '20 min',
    content: `
# Lab: Immortalizing Code 💾

## The Scenario
Your changes to the "Nexus AI" engine are staged. They are sitting in the **Index**, waiting to be written to the database.
Morpheus reminds you: "Your commit message is a letter to the future. Don't write 'fixed stuff'."

## Your Mission
1.  **Commit**: Save the staged changes with the message "feat: logic implementation for neural net".
2.  **Verify**: Check \`git status\` to ensure the Working Directory is clean.
3.  **Reflect**: Realize that you have created a permanent key-value pair in the Git database.

## The Command
\`\`\`bash
git commit -m "Your message here"
\`\`\`
*   \`-m\`: Inline message flag.
*   Without \`-m\`, Git opens Vim (which traps 10,000 junior devs per year).
    `,
    tasks: [
        {
            id: 1,
            description: 'Commit with message: "feat: logic implementation for neural net"',
            completed: false,
            regex: /\s*git\s+commit\s+.*-m\s+['"].*feat:.*['"]/,
            hint: 'Use the convention "type: description". E.g., feat: add login.'
        },
        {
            id: 2,
            description: 'Verify clean state with "git status".',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: 'It should say "nothing to commit, working tree clean".'
        }
    ],
    files: [
        {
            name: 'src/engine/net.js',
            language: 'javascript',
            content: `export class NeuralNet {
    // This file is currently STAGED in the simulation
    // (In a real terminal, you'd have to stage it first, but we simulate the state)
}`
        },
        {
            name: '.git/simulate_staged',
            language: 'text',
            content: 'true'
        }
    ]
};
