import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Rebase = {
    id: 'git-5-doc-rebase',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The History Surgeon: Interactive Rebase 🩺',
    duration: '25 min',
    content: `
# The History Surgeon: Interactive Rebase 🩺

Until now, you've likely treated the commit history as an immutable ledger—once it's written, it's set in stone.

**Interactive Rebase** (\`git rebase -i\`) gives you the power to rewrite that history. You can edit, combine, delete, and reorder commits that have already happened.

It is the single most powerful tool for maintaining a "Professional" commit history.

---

## 1. Why Rewrite History?

Imagine you are working on a feature. Your commit log looks like this:
*   \`f7fa92\` "wip"
*   \`3a1b2c\` "typo"
*   \`92d8a1\` "fixed bug"
*   \`82a1b9\` "wip again"

This is **Noise**. It tells a chaotic story. Before you merge this into the main codebase, you want to present a clean, coherent narrative:

*   \`e2f4a1\` "feat: implement user authentication flow"

---

## 2. The Interactive Command

To enter "Surgeon Mode", you target a commit in the past (the "base" of your operation).

\`\`\`bash
git rebase -i HEAD~4
\`\`\`
This opens your text editor with a list of the last 4 commits.

---

## 3. The Commands

In the editor, you will see a list of commits prefixed with the word \`pick\`. You change this prefix to tell Git what to do.

| Command | Short | Action |
| :--- | :--- | :--- |
| **pick** | \`p\` | Keep the commit as is. |
| **reword** | \`r\` | Keep the content, but edit the commit message. |
| **edit** | \`e\` | Pause the rebase to modify the files in that commit. |
| **squash** | \`s\` | Meld into the previous commit (combine them). |
| **fixup** | \`f\` | Like squash, but discard this commit's log message. |
| **drop** | \`d\` | Delete the commit entirely. |

---

## 4. The Squash Workflow

This is the most common elite workflow: **Squashing**.

**Before:**
\`\`\`text
pick f7fa92 implementation part 1
pick 3a1b2c fixed typo
pick 92d8a1 implementation part 2
\`\`\`

**You edit it to:**
\`\`\`text
pick f7fa92 implementation part 1
squash 3a1b2c fixed typo
squash 92d8a1 implementation part 2
\`\`\`

**Result:**
One single commit containing all the changes, and Git will prompt you to write one final, perfect commit message.

---

## 5. Mental Model: The Copier

Rebase doesn't actually *change* old commits. It **copies** them to new commits with new Hashes.

\`\`\`mermaid
%% width: 700px %%
graph TD
    subgraph Original
        A[Commit A] --> B[Commit B] --> C[Commit C]
    end
    subgraph Rebased
        A --> B2[Commit B'] --> C2[Commit C']
    end
    style B2 fill:#f96,stroke:#333
    style C2 fill:#f96,stroke:#333
\`\`\`

> [!WARNING]
> **The Golden Rule**: Never rebase public history! If you rebase commits that others have pulled, you will break their repositories. Only rebase your local, private branches.
`
};
