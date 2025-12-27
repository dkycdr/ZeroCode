import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Bisect = {
    id: 'git-5-lab-bisect',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Bug Hunt (Bisect) 🦋',
    duration: '25 min',
    content: `
# Lab: The Bug Hunt 🦋

**Scenario**: The "Nexus AI" engine is crashing. You know version 1.0 (commit \`v1.0-tag\`) was stable, but somewhere in the last 20 commits, someone broke it.

You need to find the exact commit that introduced the bug.

---

## Your Mission

### Task 1: Start the Investigation
Start the bisect wizard and tell Git that the current version is \`bad\`.

### Task 2: Define the Good State
Tell Git that the tag \`v1.0-tag\` (or an earlier hash) was \`good\`.

### Task 3: The Binary Search
Git will check out a middle commit. Simulate running tests (pretend they pass/fail) by marking commits as \`good\` or \`bad\` until the tool finishes. Mark at least one intermediate commit as \`good\`.

---

## Helpful Commands
*   \`git bisect start\`: Begin.
*   \`git bisect bad\`: Current is broken.
*   \`git bisect good <ref>\`: That ref worked.
*   \`git bisect reset\`: Exit tool.
`,
    files: [
        { name: 'src/engine.js', content: 'buggy code' }
    ],
    tasks: [
        {
            id: 1,
            description: 'View commit history: "git log --oneline"',
            completed: false,
            regex: /\s*git\s+log\s+--oneline\s*/,
            hint: {
                concept: 'Pre-bisect History',
                strategy: 'See all commits to understand the range.',
                solution: 'git log --oneline'
            }
        },
        {
            id: 2,
            description: 'Start bisect: "git bisect start"',
            completed: false,
            regex: /\s*git\s+bisect\s+start\s*/,
            hint: {
                concept: 'Starting Bisect',
                strategy: 'Enters binary search mode.',
                solution: 'git bisect start'
            }
        },
        {
            id: 3,
            description: 'Mark current as bad: "git bisect bad"',
            completed: false,
            regex: /\s*git\s+bisect\s+bad\s*/,
            hint: {
                concept: 'Bad Commit',
                strategy: 'Tells Git the current state is broken.',
                solution: 'git bisect bad'
            }
        },
        {
            id: 4,
            description: 'Mark known good version: "git bisect good v1.0-tag"',
            completed: false,
            regex: /\s*git\s+bisect\s+good\s+\S+\s*/,
            hint: {
                concept: 'Good Commit',
                strategy: 'Tells Git which version was working.',
                solution: 'git bisect good v1.0-tag'
            }
        },
        {
            id: 5,
            description: 'Test current checkout (run tests)',
            completed: false,
            regex: /\s*npm\s+test\s*/,
            hint: {
                concept: 'Testing',
                strategy: 'Run your tests to check if bug exists.',
                solution: 'npm test'
            }
        },
        {
            id: 6,
            description: 'Mark result: "git bisect good" or "git bisect bad"',
            completed: false,
            regex: /\s*git\s+bisect\s+(good|bad)\s*/,
            hint: {
                concept: 'Marking Result',
                strategy: 'Tell Git if this commit is good or bad.',
                solution: 'git bisect good (or bad)'
            }
        },
        {
            id: 7,
            description: 'Continue until Git identifies the culprit',
            completed: false,
            regex: /\s*git\s+bisect\s+(good|bad)\s*/,
            hint: {
                concept: 'Binary Search',
                strategy: 'Git narrows down by halving commits each time.',
                solution: 'Continue marking good/bad'
            }
        },
        {
            id: 8,
            description: 'Exit bisect mode: "git bisect reset"',
            completed: false,
            regex: /\s*git\s+bisect\s+reset\s*/,
            hint: {
                concept: 'Exit Bisect',
                strategy: 'Returns to normal state after finding culprit.',
                solution: 'git bisect reset'
            }
        }
    ]
};
