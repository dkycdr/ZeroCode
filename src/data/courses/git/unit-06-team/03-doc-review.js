import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const docReview = {
    id: 'git-6-doc-review',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Code Review 🧐',
    content: `
# The Code Review 🧐

Code Review is the primary quality gate in software engineering. It is where bugs are caught, knowledge is shared, and standards are maintained.

As a senior engineer, you will spend **20-30% of your time** reviewing other people's code.

---

## 1. The Reviewer's Mindset

When you review code, you are not a "Cop" writing a ticket. You are a **Collaborator** preventing a fire.

### What to look for (The Pyramid of Review):
1.  **Correctness**: Does it actually works? (Logic bugs, edge cases).
2.  **Security**: Are there vulnerabilities? (SQL Injection, XSS, Secret Leaks).
3.  **Readability**: Can a new hire understand this in 5 minutes?
4.  **Performance**: Is there an accidental O(N²) loop?
5.  **Style**: Indentation, naming conventions (lowest priority, let linters handle this).

---

## 2. Review Etiquette: Don't be a Jerk

The way you phrase feedback matters.

| ❌ Aggressive | ✅ Constructive |
| :--- | :--- |
| "This is wrong." | "This might fail if X happens. What do you think?" |
| "Why did you do this?" | "I'm curious about the reasoning here. Did you consider Y?" |
| "Rename this variable." | "Suggestion: \`isLoading\` might be clearer than \`flag\`." |

> [!TIP]
> **Praise Publicly, Critique Privately** (or kindly). If you see a clever solution, leave a comment: *"Nice use of reduce here!"*

---

## 3. The Feedback Matrix

Not all comments are equal. Categorize your feedback to help the author prioritize.

### 🛑 Blocker (Request Changes)
**"This must be fixed before merging."**
*   Examples: Security flaw, logic bug, breaks production, missing tests.

### ⚠️ Major (Comment)
**"I strongly suggest changing this, but I won't block if you have a good reason."**
*   Examples: Confusing variable names, slight performance inefficiency, duplicating code.

### ℹ️ Nitpick (Approve)
**"Tiny thing, feel free to ignore or fix if you're already editing."**
*   Examples: typo in comment, extra newline.
*   *Pro-tip: Prefix comment with "NIT:"*

### ❓ Question
**"I just want to learn/understand."**
*   Examples: "How does this regex work?"

---

## 4. The "LGTM" Culture

**LGTM** = "Looks Good To Me".

It's the stamp of approval. Once you get the required number of approvals (usually 1 or 2), your PR handles turn green, and you can merge.

### The "Request Changes" Cycle
1.  You push code.
2.  Reviewer requests changes (Red X).
3.  You fix locally and \`git push\` again.
4.  Reviewer checks the *new* diff.
5.  Reviewer approves (Green check).

This loop ensures valid, high-quality code enters the main branch.
`,
    duration: '20 min'
};
