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
            id: 'bisect-start',
            description: 'Start bisect',
            regex: 'COMMAND:git bisect start'
        },
        {
            id: 'bisect-bad',
            description: 'Mark current as bad',
            regex: 'COMMAND:git bisect bad'
        },
        // We'll trust the simulation logic to handle the state transitions
        // This validates they are interacting with the tool
        {
            id: 'bisect-good-intermediate',
            description: 'Mark an intermediate commit as good',
            regex: 'COMMAND:git bisect good'
        }
    ]
};
