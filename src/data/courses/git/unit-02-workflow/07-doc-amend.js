import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Amend = {
    id: 'git-2-amend',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The History Patch (--amend) 🧱',
    duration: '20 min read',
    content: `
# Deep Dive: The History Patch (--amend) 🧱

You just made a commit. You feel great. Then you look at the message and see a typo: "Initial Comit". Or worse, you realize you forgot to stage the \`.gitignore\` file. A junior developer would make a second commit called "fixed typo". An Elite developer uses **Amendment**.

---

## 1. What is \`--amend\`?
The \`--amend\` flag tells Git: "Don't create a new commit. Instead, take the current staging area and **replace** the last commit with a new one that includes these changes."

**The Result:**
The previous commit is discarded, and a brand new commit is created in its place.

---

## 2. Common Use Case: The Typo Fix
If you only want to change the commit message:
\`\`\`bash
git commit --amend -m "Corrected Commit Message"
\`\`\`
This replaces the old message with the new one. No files need to be changed.

---

## 3. Common Use Case: The "Forgot-A-File" Fix
1.  Oops, I forgot to add \`config.js\`.
2.  \`git add config.js\`
3.  \`git commit --amend --no-edit\`

The \`--no-edit\` flag tells Git to keep the old commit message, but include the new files in the snapshot.

---

## 4. Machine Logic: The SHA-1 Shift
It is critical to understand that \`--amend\` **changes history**.
Because the content of the commit changes (even just the time or one byte), the **SHA-1 Hash** of the commit will change completely.

\`\`\`mermaid
%% width: 600px %%
graph LR
    subgraph Original [Before Amend]
        c1[Commit A] --> c2[Commit B: SHA 1234]
    end

    subgraph Augmented [After Amend]
        c3[Commit A] --> c4[Commit B': SHA 5678]
        c2 -.->|ORPHANED| x[Garbage Collection]
    end
\`\`\`

---

## 5. Senior Warning: The Public Push Rule
> [!CAUTION]
> **Never amend a commit that has already been pushed to a shared server.**

Because \`--amend\` changes the SHA-1, if your teammates have already "pulled" Commit B (SHA 1234) and you replace it with Commit B' (SHA 5678), you will break their history. You will be forced to "Force Push" (\`git push -f\`), which can cause chaos in a team.

**The Golden Rule**: Amend is for your **local** mistakes only. Once it's public, live with the mistake or use a revert commit.

---

## 6. Elite Trick: The Empty Amend
Sometimes you just want to update the timestamp of the last commit without changing any code or messages.
\`\`\`bash
git commit --amend --no-edit --date="now"
\`\`\`
This is rarely needed but demonstrates that a commit is a precise metadata wrapper.

You are now a master of the "Last Minute Fix".
`
};
