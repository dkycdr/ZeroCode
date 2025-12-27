import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labPR = {
    id: 'git-6-lab-pr',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Pull Request Protocol 📨',
    duration: '20 min',
    content: `
# Lab: The Pull Request Protocol 📨

**Scenario**: You are a Frontend Engineer at **Initech**. 
The team has finished the backend for the new "Dashboard", and your job is to ship the navigation bar.

You have already implemented the code on branch \`feature-navbar\`. Now you must package it up for review.

> [!IMPORTANT]
> Your manager, **Bill**, is very strict about PR descriptions. He rejects anything that is just "fixed code".

---

## Your Mission

### Task 1: The Context Switch
Your terminal is currently on \`main\`. 
Switch to the \`feature-navbar\` branch to verify your work.

### Task 2: The Final Polish
You noticed a bug in \`src/components/Nav.js\`. The Home link has no \`href\`.
Edit \`src/components/Nav.js\` and change \`<a className="link">Home</a>\` to \`<a href="/home" className="link">Home</a>\`.
Commit this fix with message: "fix: add missing home link".

### Task 3: The Push
Push your feature branch to \`origin\`.
*(In a real terminal, this would output a URL to create a PR)*.

### Task 4: The Paperwork
Simulate the PR creation form. 
Create a file \`PR_DESC.md\` in the root.
It MUST contain:
1.  **Summary**: "Adds global navigation bar"
2.  **Type**: "Feature"

---

## Helpful Commands
*   \`git switch <branch>\`
*   \`git commit -am "msg"\`
*   \`git push -u origin <branch>\`
`,
    files: [
        { name: 'README.md', content: '# Initech Dashboard\n\nEnterprise grade stuff.' },
        { name: 'package.json', content: '{"name": "initech-dash", "version": "0.1.0"}' },
        { name: 'src/App.js', content: 'export const App = () => <div>Hello</div>;' },
        { name: 'src/components/Nav.js', content: 'const Nav = () => <a className="link">Home</a>;' },
        { name: 'public/index.html', content: '<html><body><div id="root"></div></body></html>' }
    ],
    initialGitState: {
        branch: 'main',
        branches: ['main', 'feature-navbar'],
        commits: [
            { id: 'dev101', message: 'chore: initial scaffolding', timestamp: new Date(), filesSnapshot: [], parent: null }
        ],
        head: 'dev101',
        branchSnapshots: {
            'main': [
                { name: 'README.md', content: '# Initech Dashboard\n\nEnterprise grade stuff.' },
                { name: 'package.json', content: '{"name": "initech-dash", "version": "0.1.0"}' },
                { name: 'src/App.js', content: 'export const App = () => <div>Hello</div>;' },
                { name: 'src/components/Nav.js', content: 'const Nav = () => <a className="link">Home</a>;' },
            ],
            'feature-navbar': [
                { name: 'README.md', content: '# Initech Dashboard\n\nEnterprise grade stuff.' },
                // ... same files ... 
                { name: 'src/components/Nav.js', content: 'const Nav = () => <a className="link">Home</a>;' },
            ]
        }
    },
    tasks: [
        {
            id: 1,
            description: 'Check current branch: "git branch"',
            completed: false,
            regex: /\s*git\s+branch\s*$/,
            hint: {
                concept: 'Current Position',
                strategy: 'Verify you are on main before switching.',
                solution: 'git branch'
            }
        },
        {
            id: 2,
            description: 'Switch to feature branch: "git switch feature-navbar"',
            completed: false,
            regex: /\s*git\s+(switch|checkout)\s+feature-navbar\s*/,
            hint: {
                concept: 'Branch Switch',
                strategy: 'Move to the feature branch to verify work.',
                solution: 'git switch feature-navbar'
            }
        },
        {
            id: 3,
            description: 'View the Nav.js file: "cat src/components/Nav.js"',
            completed: false,
            regex: /\s*cat\s+src\/components\/Nav\.js\s*/,
            hint: {
                concept: 'Code Review',
                strategy: 'Check the current state of the file.',
                solution: 'cat src/components/Nav.js'
            }
        },
        {
            id: 4,
            description: 'Edit Nav.js to fix the missing href',
            completed: false,
            regex: /\s*(nano|vim|code|sed)\s+.*Nav\.js.*/,
            hint: {
                concept: 'Bug Fix',
                strategy: 'Add href="/home" to the anchor tag.',
                solution: 'nano src/components/Nav.js'
            }
        },
        {
            id: 5,
            description: 'Stage and commit: git commit -am "fix: add missing home link"',
            completed: false,
            regex: /\s*git\s+commit\s+-am?\s+["'].*["']\s*/,
            hint: {
                concept: 'Quick Commit',
                strategy: '-am stages modified files and commits in one step.',
                solution: 'git commit -am "fix: add missing home link"'
            }
        },
        {
            id: 6,
            description: 'Push feature branch: "git push -u origin feature-navbar"',
            completed: false,
            regex: /\s*git\s+push\s+(-u\s+)?origin\s+feature-navbar\s*/,
            hint: {
                concept: 'Push Feature',
                strategy: 'Push branch to remote to create PR.',
                solution: 'git push -u origin feature-navbar'
            }
        },
        {
            id: 7,
            description: 'Create PR description file: echo "..." > PR_DESC.md',
            completed: false,
            regex: /\s*(echo|cat|nano|vim)\s+.*PR_DESC\.md.*/,
            hint: {
                concept: 'PR Description',
                strategy: 'Create file with Summary and Type fields.',
                solution: 'echo "Summary: Adds global navigation bar\nType: Feature" > PR_DESC.md'
            }
        },
        {
            id: 8,
            description: 'Verify PR description: "cat PR_DESC.md"',
            completed: false,
            regex: /\s*cat\s+PR_DESC\.md\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'Check the PR description is complete.',
                solution: 'cat PR_DESC.md'
            }
        }
    ]
};
