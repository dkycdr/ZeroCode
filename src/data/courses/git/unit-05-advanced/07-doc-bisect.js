import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Bisect = {
    id: 'git-5-doc-bisect',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Detective: Bisect & Blame 🕵️‍♂️',
    duration: '20 min',
    content: `
# The Detective: Bisect & Blame 🕵️‍♂️

You've discovered a bug. The app crashes on startup. You know it worked last week, but there have been 50 commits since then.

Checking 50 commits one by one would take hours. You need a smarter way.

---

## 1. Git Bisect: Binary Search

\`git bisect\` is an automated debugging tool that uses **Binary Search** to find the exact commit that introduced a bug.

### The Algorithm
Instead of checking commits 1, 2, 3... Git checks the middle one (25).
*   If 25 is broken, the bug is in the first half (1-25).
*   If 25 is working, the bug is in the second half (26-50).

It repeats this split until only one commit remains: **The Culprit**.

### The Flow
\`\`\`bash
git bisect start
git bisect bad            # The current version is broken
git bisect good v1.0      # This old tag/hash was working
# Git checks out a commit in the middle...
# You run your tests.
git bisect good           # It passed!
# Git checks out the next candidate...
git bisect bad            # It failed!
# ...until found.
\`\`\`

---

## 2. Git Blame: Authorship

Once you find the bad code, you might wonder: *"Why was this written this way?"*

\`git blame <filename>\` shows the author and commit hash for **every single line** of a file.

\`\`\`bash
git blame server.js
\`\`\`

**Output:**
\`\`\`text
e5f6g7h  (Alice  2023-01-01)  const port = 3000;
a1b2c3d  (Bob    2023-01-02)  const db = null; // intentional?
\`\`\`

> [!TIP]
> Use Blame to find the context, not to shame the developer. Ask Bob *why* the DB is null.
`
};
