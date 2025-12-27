import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1FirstSave = {
    id: 'git-0-lab-1-first-save',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Your First Save Point 💾',
    duration: '30 min',
    content: `
# Lab: Your First Save Point 💾

## The Scenario

You just started a new project. Right now it's just a regular folder with some files.
Your mission: Transform it into a Git repository and make your first "save point" (commit).

## The Goal

By the end of this lab, you will have:
1. Initialized a Git repository
2. Configured your identity
3. Staged files
4. Made your first commit
5. Viewed your history

## Remember the Flow

\`\`\`
Working Directory → git add → Staging Area → git commit → Repository
\`\`\`

Let's make history! 🚀
`,
    tasks: [
        {
            id: 1,
            description: 'Initialize a new Git repository with "git init"',
            completed: false,
            regex: /git\s+init/,
            hint: {
                concept: 'Repository Initialization',
                strategy: 'git init creates a hidden .git folder that stores all version history.',
                solution: 'git init'
            }
        },
        {
            id: 2,
            description: 'Check the status of your repository with "git status"',
            completed: false,
            regex: /git\s+status/,
            hint: {
                concept: 'Repository Status',
                strategy: 'git status shows which files are untracked, staged, or modified.',
                solution: 'git status'
            }
        },
        {
            id: 3,
            description: 'Configure your name: git config --global user.name "Your Name"',
            completed: false,
            regex: /git\s+config\s+(--global\s+)?user\.name/,
            hint: {
                concept: 'Git Identity',
                strategy: 'Git needs to know who you are so commits are attributed correctly.',
                solution: 'git config --global user.name "John Doe"'
            }
        },
        {
            id: 4,
            description: 'Configure your email: git config --global user.email "you@example.com"',
            completed: false,
            regex: /git\s+config\s+(--global\s+)?user\.email/,
            hint: {
                concept: 'Git Identity',
                strategy: 'Your email links your commits to your GitHub/GitLab account.',
                solution: 'git config --global user.email "john@example.com"'
            }
        },
        {
            id: 5,
            description: 'Stage all files with "git add ." or "git add -A"',
            completed: false,
            regex: /git\s+add\s+(\.|--all|-A)/,
            hint: {
                concept: 'Staging Files',
                strategy: 'git add . stages all files in the current directory for commit.',
                solution: 'git add .'
            }
        },
        {
            id: 6,
            description: 'Check status again to see staged files (should show green)',
            completed: false,
            regex: /git\s+status/,
            hint: {
                concept: 'Verifying Staging',
                strategy: 'After git add, git status shows files in green under "Changes to be committed".',
                solution: 'git status'
            }
        },
        {
            id: 7,
            description: 'Make your first commit: git commit -m "Initial commit"',
            completed: false,
            regex: /git\s+commit\s+-m\s*["'].*["']/,
            hint: {
                concept: 'Creating a Commit',
                strategy: 'git commit -m creates a snapshot with a message describing what changed.',
                solution: 'git commit -m "Initial commit"'
            }
        },
        {
            id: 8,
            description: 'View your commit history with "git log --oneline"',
            completed: false,
            regex: /git\s+log(\s+--oneline)?/,
            hint: {
                concept: 'Viewing History',
                strategy: 'git log shows all commits. --oneline makes it compact (one line per commit).',
                solution: 'git log --oneline'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Git Project</title>
</head>
<body>
    <h1>Welcome to My Project!</h1>
    <p>This is the beginning of something great.</p>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #333;
}`
        },
        {
            name: 'README.md',
            language: 'markdown',
            content: `# My First Git Project

This is my first project using Git!

## Getting Started
1. Clone this repository
2. Open index.html in a browser
`
        }
    ]
};
