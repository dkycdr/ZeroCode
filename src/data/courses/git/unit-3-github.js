import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Github = {
    id: 'git-unit-3',
    title: 'Unit 3: The .git Directory',
    description: 'Peek under the hood. Understand how Git stores your data.',
    items: [
        // 1. Deep Dive: Plumbers vs Porcelains
        {
            id: 'git-3-internals-deep-dive',
            type: 'informational',
            title: 'Deep Dive: Plumber vs Porcelain',
            duration: '10 min',
            content: `
# Git Internals: Plumbing

You are used to high-level commands like \`add\`, \`commit\`, and \`push\`. In Git terminology, these are called **Porcelain** commands (user-friendly).

But Git is built on a set of low-level commands called **Plumbing**.

## The .git Directory
This mysterious folder contains everything.
*   **HEAD**: Points to the current branch you are on.
*   **config**: Your local settings (user info, remotes).
*   **refs/**: Pointers to commit hashes (branches and tags).
*   **objects/**: The compressed database of your files and commits.

> [!WARNING]
> You rarely edit these files manually, but reading them clarifies how Git works magically.
            `
        },
        // 2. Lab: Inspecting HEAD
        {
            id: 'git-3-lab-head',
            type: 'lesson',
            title: 'Lab: Where is Your Head?',
            duration: '15 min',
            files: [
                { name: 'project_notes.txt', content: 'Learning about Git internals', language: 'text' }
            ],
            content: `
# Mission: Locate HEAD

The \`HEAD\` file is a simple text file that tells Git where you are.
Usually, it contains a reference to a branch, like \`ref: refs/heads/master\`.

## Objectives
1.  Initialize a repository.
2.  Read the content of \`.git/HEAD\` using the \`cat\` command.
3.  Read the content of \`.git/config\` to see your local settings.

## Commands
*   \`cat .git/HEAD\`
*   \`cat .git/config\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Initialize repo',
                    regex: '"initialized":true'
                },
                {
                    id: 'task2',
                    description: 'Read HEAD file (run cat .git/HEAD)',
                    // We can't verify they ran 'cat', but we can check if they are initialized.
                    // This lab is mostly exploration.
                    regex: '"initialized":true'
                }
            ]
        },
        // 3. Deep Dive: References (Refs)
        {
            id: 'git-3-refs-deep-dive',
            type: 'informational',
            title: 'Deep Dive: References',
            duration: '5 min',
            content: `
# What is a Branch, really?

A branch in Git is **nothing but a lightweight movable pointer** to a commit.
It is literally a text file containing 40 characters (the commit hash).

When you create a branch called \`dev\`, Git creates a file at \`.git/refs/heads/dev\` containing the hash of the last commit.

## HEAD
HEAD is a "pointer to a pointer". It points to the branch you are currently on.
When you switch branches, Git just updates the content of the HEAD file.
            `
        },
        // 4. Quiz
        {
            id: 'git-3-quiz',
            type: 'quiz',
            title: 'Unit 3 Assessment',
            questions: [
                {
                    id: 'q1',
                    question: 'What does the HEAD file usually contain?',
                    options: ['The latest commit hash', 'A reference to the current branch', 'Your username', 'The remote URL'],
                    correctIndex: 1,
                    explanation: 'HEAD is a pointer that points to the current branch reference, e.g., `ref: refs/heads/master`.'
                },
                {
                    id: 'q2',
                    question: 'Where are local repository settings stored?',
                    options: ['.git/settings', '.git/config', '~/.gitconfig', '/etc/gitconfig'],
                    correctIndex: 1,
                    explanation: 'Repository-specific settings are stored in `.git/config`.'
                },
                {
                    id: 'q3',
                    question: 'What is a branch in Git?',
                    options: ['A copy of all files', 'A separate folder', 'A movable pointer to a commit', 'A backup on GitHub'],
                    correctIndex: 2,
                    explanation: 'A branch is technically just a lightweight movable pointer to a specific commit hash.'
                }
            ]
        }
    ]
};
