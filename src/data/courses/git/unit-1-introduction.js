export const unit1Introduction = {
    id: 'git-unit-1',
    title: 'Unit 1: Protocol Initialization',
    description: 'Establish your first secure repository and understand the distributed nature of Git.',
    items: [
        // 1. Deep Dive: VCS Architecture
        {
            id: 'git-1-vcs',
            type: 'informational',
            title: 'Deep Dive: Centralized vs Distributed',
            duration: '15 min',
            content: `
# Version Control Systems (VCS)

In the software development lifecycle, managing changes to source code is critical. A Version Control System (VCS) tracks the history of changes as people and teams collaborate on projects together.

## The Evolution of VCS

### 1. Local Version Control (RCS)
In the early days, developers copied files into another directory (time-stamped). Efficient, but error-prone.

### 2. Centralized Version Control (CVCS)
Examples: Subversion (SVN), CVS.
A single server contains all the versioned files, and a number of clients check out files from that central place.
*   **Risk**: Single Point of Failure. If the server goes down, nobody can collaborate or save versioned changes.

### 3. Distributed Version Control (DVCS)
Examples: **Git**, Mercurial.
Clients don't just check out the latest snapshot of the files; they fully mirror the repository, including its full history.
*   **Resilience**: Every clone is really a full backup of all the data.
*   **Speed**: Most operations are local (commits, diffs, logs), making Git incredibly fast.

> [!IMPORTANT]
> Git DOES NOT store data as a list of file changes or deltas. It thinks of its data more like a series of **snapshots** of a miniature filesystem.

![Git Data Model](https://git-scm.com/book/en/v2/images/snapshots.png)
            `
        },
        // 2. Deep Dive: Installing Git
        {
            id: 'git-1-install',
            type: 'informational',
            title: 'Installation & Config',
            duration: '10 min',
            content: `
# System Configuration

Before you can start using Git, you have to verify it is installed and configured with your identity. Git embeds this identity information into every commit you make.

## Checking Version
\`\`\`bash
git --version
# Output: git version 2.40.1
\`\`\`

## Identity Setup
The first protocol when setting up Git is setting your user name and email address. This is important because every Git commit uses this information.

\`\`\`bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
\`\`\`

## Checking Configuration
You can check all your settings with:
\`\`\`bash
git config --list
\`\`\`
            `
        },
        // 3. Lab: Git Init
        {
            id: 'git-1-lab-init',
            type: 'lesson',
            title: 'Lab: Initialize Repository',
            duration: '20 min',
            files: [
                { name: 'README.md', content: '# My Project\n\nStarting a new journey.' }
            ],
            content: `
# Mission: Initialize the Grid

You are in a new project directory. Your goal is to convert this directory into a Git repository.

## Objectives
1.  Check the current status (it should be empty/error since it's not a repo yet).
2.  Initialize a new Git repository.
3.  Check the status again to confirm initialization.

## Commands to Use
*   \`git status\`
*   \`git init\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Initialize a new Git repository',
                    // Validator: checks if "initialized": true in the gitState JSON
                    regex: '"initialized":true'
                },
                {
                    id: 'task2',
                    description: 'Check the status (run git status)',
                    // We can't easily verify they ran a command unless we track command history in state
                    // For now, let's just assume checking status usually leads to seeing untracked files
                    // But wait, the validator checks the STATE.
                    // "git status" doesn't change state. "git init" does. 
                    // Let's stick effectively to checking state.
                    regex: '"initialized":true'
                }
            ]
        },
        // 4. Deep Dive: The Three States
        {
            id: 'git-1-states',
            type: 'informational',
            title: 'Deep Dive: The Three States',
            duration: '15 min',
            content: `
# The Three States of Git

Git has three main states that your files can reside in:

1.  **Modified**: You have changed the file but have not committed it to your database yet.
2.  **Staged**: You have marked a modified file in its current version to go into your next commit snapshot.
3.  **Committed**: The data is safely stored in your local database.

## The Workflow
1.  You modify files in your working tree.
2.  You **stage** the files, adding snapshots of them to your staging area.
3.  You **commit**, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

![Git Sections](https://git-scm.com/book/en/v2/images/areas.png)
            `
        },
        // 5. Lab: Staging Files
        {
            id: 'git-1-lab-add',
            type: 'lesson',
            title: 'Lab: Staging Files',
            duration: '20 min',
            files: [
                { name: 'mission.txt', content: 'Top Secret Data' }
            ],
            content: `
# Mission: Stage the Assets

You have a file named \`mission.txt\`. It is currently **Untracked**. You must add it to the **Staging Area**.

## Objectives
1.  Initialize the repository.
2.  Add \`mission.txt\` to the staging area.

## Commands
*   \`git init\`
*   \`git add mission.txt\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Initialize the repository',
                    regex: '"initialized":true'
                },
                {
                    id: 'task2',
                    description: 'Add mission.txt to the staging area',
                    // The "staging" array in our hook should contain "mission.txt"
                    regex: '"staging":\\[.*"mission.txt".*\\]'
                }
            ]
        },
        // 6. Deep Dive: Committing
        {
            id: 'git-1-commit-info',
            type: 'informational',
            title: 'Deep Dive: Anatomoy of a Commit',
            duration: '10 min',
            content: `
# The Commit

A commit is a snapshot of your project at a specific point in time. It is the fundamental unit of history in Git.

Each commit contains:
*   **Hash**: A unique 40-character SHA-1 identifier (e.g., \`2d3f9e...\`).
*   **Author**: Who made the change and when.
*   **Message**: A description of *why* the change was made.
*   **Parent**: Pointer to the previous commit (unless it's the first one).

## Best Practices
*   Write clear, concise messages.
*   Use the present tense (e.g., "Add feature" not "Added feature").
*   Keep commits atomic (one feature/fix per commit).
            `
        },
        // 7. Lab: Committing
        {
            id: 'git-1-lab-commit',
            type: 'lesson',
            title: 'Lab: First Commit',
            duration: '20 min',
            files: [
                { name: 'core.js', content: 'console.log("System Online");' }
            ],
            content: `
# Mission: Create a Checkpoint

It's time to save your work. You need to commit \`core.js\` to the repository history.

## Objectives
1.  Initialize.
2.  Stage \`core.js\`.
3.  Commit with the message "Initial commit".

## Commands
*   \`git commit -m "Your Message"\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Commit the file',
                    // Check if 'commits' array has length > 0
                    regex: '"commits":\\[{.*"files":\\[.*"core.js".*\\].*\\]'
                }
            ]
        },
        // 8. Lab: Log & History
        {
            id: 'git-1-lab-log',
            type: 'lesson',
            title: 'Lab: Verifying History',
            duration: '15 min',
            files: [
                { name: 'log.txt', content: 'Entry 1' }
            ],
            content: `
# Mission: Audit Logs

Make a commit and then check the log history to confirm it exists.

## Objectives
1.  Init, Add, Commit.
2.  Run \`git log\` to view the history.

## Commands
*   \`git log\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Create at least one commit',
                    regex: '"commits":\\[.+\\]'
                }
            ]
        },
        // 9. Quiz
        {
            id: 'git-1-quiz',
            type: 'quiz',
            title: 'Unit 1 Assessment',
            questions: [
                {
                    id: 'q1',
                    question: 'Which command initializes a new Git repository?',
                    options: ['git new', 'git start', 'git create', 'git init'],
                    correctIndex: 3,
                    explanation: 'The `git init` command creates a new empty Git repository or reinitializes an existing one.'
                },
                {
                    id: 'q2',
                    question: 'Where does Git store the database of your project?',
                    options: ['In a central server only', 'In the .git directory', 'In the cloud', 'In package.json'],
                    correctIndex: 1,
                    explanation: 'Git stores all the project history and metadata in the hidden `.git` directory at the root of your project.'
                },
                {
                    id: 'q3',
                    question: 'What state is a file in if it is in the staging area?',
                    options: ['Modified', 'Committed', 'Staged', 'Ignored'],
                    correctIndex: 2,
                    explanation: 'Files in the staging area are "Staged". They are ready to be committed in the next snapshot.'
                }
            ]
        }
    ]
};
