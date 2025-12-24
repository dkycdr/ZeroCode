import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Conflicts = {
    id: 'git-3-conflicts',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Three-Way Logic (Conflicts) 🌋',
    duration: '35 min read',
    content: `
# Deep Dive: The Three-Way Logic (Conflicts) 🌋

A **Three-Way Merge** happens when yours and their branches have diverged. Git can no longer just slide a pointer forward—it has to create a brand new **Merge Commit** that combines the two universes.

---

## 1. The Three Layers of Truth
To perform a merge, Git looks at three snapshots:
1.  **Branch A (Yours)**: The tip of the branch you are merging INTO.
2.  **Branch B (Theirs)**: The tip of the branch you are merging FROM.
3.  **The Common Ancestor (Base)**: The last point in history where the two branches were identical.

### Why Three?
If you only looked at Branch A and Branch B, and a line is different, you wouldn't know who changed it. By looking at the **Base**, Git can see:
*   "Base says X. A says Y. B says X. -> Result: Y (A changed it, B didn't)."
*   "Base says X. A says X. B says Z. -> Result: Z (B changed it, A didn't)."
*   "Base says X. A says Y. B says Z. -> **CONFLICT!** (Both changed it differently)."

---

## 2. Anatomy of a Conflict Marker
When Git fails to resolve a line automatically, it writes **Conflict Markers** directly into your files.

\`\`\`text
<<<<<<< HEAD
Our logic (The current branch you are on)
=======
Their logic (The branch you are trying to merge)
>>>>>>> feature-branch
\`\`\`

### The Rules of Resolution:
1.  **Open the file**: It will have the markers above.
2.  **Edit**: Remove the markers (\`<<<<<<\`, \`======\`, \`>>>>>>>\`) and keep the correct code (or a combination of both).
3.  **Stage**: Run \`git add\` on the resolved file.
4.  **Confirm**: Run \`git commit\` to finish the merge.

---

## 3. Visualizing the Merge Node
Unlike a Fast-Forward, a Three-Way Merge creates a "Diamond" in your history. This new commit has **two parent commits**.

\`\`\`mermaid
%% width: 600px %%
graph TD
    C1["Commit A (Base)"] --> C2["Commit B (Main)"]
    C1 --> C3["Commit C (Feature)"]
    C2 --> M["Commit M (Merge Node)"]
    C3 --> M
\`\`\`

---

## 4. Machine Logic: Recursive Merging
Git uses a strategy called **"Recursive"** (or in newer versions, **"Orto"**).
What happens if there are **two** common ancestors? (This happens in complex cross-merges). 
Git doesn't give up. It creates a virtual "temporary" common ancestor by merging the two ancestors first, then uses that as the base for your actual merge. It is remarkably robust.

---

## 5. Senior Insight: The Conflict Prevention
The best way to resolve conflicts is to **avoid them**.
*   **Keep Features Small**: The less code you change, the lower the chance of collision.
*   **Merge Often**: Don't wait 3 weeks to merge. Pull from main every morning and merge it into your feature branch (\`git merge main\`). This lets you solve small conflicts daily instead of one giant nightmare at the end.

---

## 6. Pro Tip: Aborting the Chaos
Did the merge result in 50 conflicts and you are overwhelmed? 
\`\`\`bash
git merge --abort
\`\`\`
This resets your project to exactly how it was before you started the merge. No harm done.

You are now ready to handle the "Heat of Battle" in collaborative development.
`
};
