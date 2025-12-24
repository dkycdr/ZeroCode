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
            id: 'switch-branch',
            description: 'Switch to feature-navbar branch',
            regex: 'BRANCH_ACTIVE:feature-navbar'
        },
        {
            id: 'commit-fix',
            description: 'Commit the fix with "feat: add home link"',
            regex: 'COMMIT_MSG:feat: add home link'
        },
        {
            id: 'push-origin',
            description: 'Push navigation branch to origin',
            // Our useVirtualGit prints "Pushing to origin/..."
            regex: 'COMMAND:git push'
        },
        {
            id: 'create-pr-desc',
            description: 'Create PR_DESC.md with required fields',
            regex: 'FILE_CONTAINS:PR_DESC.md:Adds global navigation bar'
        }
    ]
};
