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
            description: 'Check that files are staged: "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-commit Check',
                strategy: 'Always verify staged files before committing.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Commit with message: git commit -m "feat: add neural net logic"',
            completed: false,
            regex: /\s*git\s+commit\s+.*-m\s+["'].*["']/,
            hint: {
                concept: 'Commit Messages',
                strategy: 'Use conventional commit format: type: description.',
                solution: 'git commit -m "feat: add neural net logic"'
            }
        },
        {
            id: 3,
            description: 'Verify clean state with "git status"',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Clean Working Tree',
                strategy: 'After commit, status should say "nothing to commit".',
                solution: 'git status'
            }
        },
        {
            id: 4,
            description: 'View commit history: "git log"',
            completed: false,
            regex: /\s*git\s+log\s*/,
            hint: {
                concept: 'Viewing History',
                strategy: 'git log shows all commits with details (hash, author, date).',
                solution: 'git log'
            }
        },
        {
            id: 5,
            description: 'View compact history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Compact Log',
                strategy: 'Shows one line per commit - easier to scan.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 6,
            description: 'Make a small change and add it to staging',
            completed: false,
            regex: /\s*git\s+add\s+/,
            hint: {
                concept: 'Iterative Development',
                strategy: 'Make small changes and commit frequently.',
                solution: 'git add src/engine/net.js'
            }
        },
        {
            id: 7,
            description: 'Commit again with a fix message: git commit -m "fix: update net logic"',
            completed: false,
            regex: /\s*git\s+commit\s+.*-m\s+["'].*fix.*["']/,
            hint: {
                concept: 'Fix Commits',
                strategy: 'Use "fix:" prefix for bug fixes.',
                solution: 'git commit -m "fix: update net logic"'
            }
        },
        {
            id: 8,
            description: 'View history again to see both commits',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Commit History',
                strategy: 'You now have multiple commits in your history.',
                solution: 'git log --oneline'
            }
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
