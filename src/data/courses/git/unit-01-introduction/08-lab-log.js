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
            description: 'View full history: "git log"',
            completed: false,
            regex: /\s*git\s+log\s*/,
            hint: {
                concept: 'Full Log View',
                strategy: 'git log shows complete commit details. Press q to exit.',
                solution: 'git log'
            }
        },
        {
            id: 2,
            description: 'View compact history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Compact Log',
                strategy: 'Shows short hash and message on one line per commit.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 3,
            description: 'View last 3 commits: "git log -3"',
            completed: false,
            regex: /\s*git\s+log\s+-\d+\s*/,
            hint: {
                concept: 'Limited Log',
                strategy: 'Use -n flag to limit number of commits shown.',
                solution: 'git log -3'
            }
        },
        {
            id: 4,
            description: 'View commits with graph: "git log --oneline --graph"',
            completed: false,
            regex: /\s*git\s+log\s+.*--graph\s*/,
            hint: {
                concept: 'Visual Graph',
                strategy: 'Shows ASCII art of branch structure.',
                solution: 'git log --oneline --graph'
            }
        },
        {
            id: 5,
            description: 'Search commits by author: "git log --author=trinity"',
            completed: false,
            regex: /\s*git\s+log\s+--author=\w+\s*/,
            hint: {
                concept: 'Filter by Author',
                strategy: 'Find commits by a specific team member.',
                solution: 'git log --author=trinity'
            }
        },
        {
            id: 6,
            description: 'Search commits by message: "git log --grep=fix"',
            completed: false,
            regex: /\s*git\s+log\s+--grep=\w+\s*/,
            hint: {
                concept: 'Search Messages',
                strategy: 'Find commits containing specific words.',
                solution: 'git log --grep=fix'
            }
        },
        {
            id: 7,
            description: 'View a specific commit: "git show <hash>"',
            completed: false,
            regex: /\s*git\s+show\s+\w+\s*/,
            hint: {
                concept: 'Commit Details',
                strategy: 'Shows full details and diff of a specific commit.',
                solution: 'git show abc1234'
            }
        },
        {
            id: 8,
            description: 'View file history: "git log --oneline -- README.md"',
            completed: false,
            regex: /\s*git\s+log\s+.*--\s+\w+/,
            hint: {
                concept: 'File History',
                strategy: 'Track changes to a specific file over time.',
                solution: 'git log --oneline -- README.md'
            }
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
