import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9HooksAutomation = {
    id: 'git-unit-9',
    title: 'Unit 9: Hooks & Automation',
    description: 'Automate your workflow with Git Hooks.',
    items: [
        {
            id: 'git-9-deep-dive',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Git Hooks',
            duration: '10 min',
            content: `
# Automation with Hooks

Git has a way to fire off custom scripts when certain important actions occur. These are called **Hooks**.
They live in the \`.git/hooks\` directory.

## Common Hooks
*   **pre-commit**: Runs *before* you even type a commit message. Great for linters (checks code style).
*   **prepare-commit-msg**: Runs *before* the commit message editor opens.
*   **commit-msg**: Runs *after* you type the message. Great for enforcing message patterns (e.g., "Must start with JIRA-123").
*   **pre-push**: Runs before code is sent to the remote. Great for running tests.

> [!TIP]
> Hooks are not shared by default when you clone a repo! You usually need a tool like \`husky\` to manage them for a team.
            `
        },
        {
            id: 'git-9-lab-hooks',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Gatekeeper',
            duration: '25 min',
            content: `
# Mission: Create a Policy Enforcer

We want to stop bad code from being committed. You will create a pre-commit hook that simulates a failure.

## Objectives
1.  Create the directory \`.git/hooks\`.
2.  Create a file named \`pre-commit\` inside it.
3.  Add "exit 1" to the content (this simulates a script failure).
4.  Try to commit and watch it fail.

## Commands
\`\`\`bash
mkdir .git/hooks
touch .git/hooks/pre-commit
# (Use the editor to add "exit 1" to the file)
git add .
git commit -m "This should fail"
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Create .git/hooks directory',
                    regex: 'mkdir.*\\.git/hooks'
                },
                {
                    id: 'task2',
                    text: 'Create pre-commit file',
                    regex: 'touch.*\\.git/hooks/pre-commit'
                },
                {
                    id: 'task3',
                    text: 'Attempt commit (and fail)',
                    regex: 'Hook failed'
                }
            ]
        },
        {
            id: 'git-9-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 9 Assessment',
            questions: [
                {
                    id: 'q1',
                    text: 'Where are git local hooks stored?',
                    options: ['root directory', '.git/hooks', 'node_modules', '.github/workflows'],
                    correct: 1
                },
                {
                    id: 'q2',
                    text: 'Which hook runs BEFORE the commit is created?',
                    options: ['post-commit', 'pre-push', 'pre-commit', 'update'],
                    correct: 2
                },
                {
                    id: 'q3',
                    text: 'Are hooks cloned automatically?',
                    options: ['Yes', 'No', 'Only optionally', 'Only on GitHub'],
                    correct: 1
                }
            ]
        }
    ]
};
