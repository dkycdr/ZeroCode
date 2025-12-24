import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Strategy = {
    id: 'git-3-strategy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Merging Strategies (Squash & Protection) 🛡️',
    duration: '25 min read',
    content: `
# Deep Dive: Merging Strategies 🛡️

Once you master the basic merge, you will notice that your history can become a "spaghetti" of merge commits. Senior developers use specific strategies to keep the history readable and the main branch safe.

---

## 1. The Squash Merge
A "Squash" merge takes all the commits from your feature branch (A, B, C) and condenses them into **one single commit** before adding it to main.

*   **Why?**: Your feature branch might have messy commits like "fix typo", "oops", "testing again". Squash hides the "meat-making process" and only shows the finished result on main.

\`\`\`mermaid
%% width: 600px %%
graph LR
    subgraph Merged [Standard Merge]
        m1[A] --> m2[B] --> m3[M]
        m1 --> f1[f1] --> f2[f2] --> m3
    end

    subgraph Squashed [Squash Merge]
        s1[A] --> s2[B] --> s3["C (One giant commit)"]
    end
\`\`\`

---

## 2. Rebase vs Merge (The Holy War)
*   **Merge**: Combines history. It is "honest" but can be messy.
*   **Rebase**: Re-writes history. It takes your commits and "re-plants" them on top of the latest \`main\`. 

**The Rebase Mantra**: "I want my changes to appear as if I just wrote them on top of the newest code, keeping the history a single straight line."

*Note: We will deep dive into Rebasing in Unit 8. For now, just know it is the path to a perfectly linear history.*

---

## 3. Branch Protection 🔐
In a professional repo (like on GitHub/GitLab), you usually **cannot** merge your own code directly into \`main\`. 

**Common Protection Rules:**
1.  **Require Pull Request**: You must submit your code for review.
2.  **Require Approvals**: At least 1 or 2 teammates must "Approve" your code.
3.  **Status Checks**: Automated tests must pass before the "Merge" button turns green.
4.  **No Force Push**: Prevent anyone from accidentally overwriting the shared history.

---

## 4. Machine Logic: The Merge Driver
When you run \`git merge\`, Git uses a "driver" to decide how to handle files.
*   **Text Files**: Line-by-line comparison.
*   **Binary Files**: All-or-nothing. Git cannot merge two versions of a JPEG.
*   **Custom Drivers**: You can configure Git (via \`.gitattributes\`) to use special tools to merge things like \`.json\` or \`.xml\` files more intelligently.

---

## 5. Senior Tip: The "Small PR" Culture
The secret to successful merging isn't a better algorithm; it's a better human process.
*   **Atomic PRs**: One Pull Request = One Change.
*   If your branch has 50 files changed, the chance of a conflict is near 100%.
*   If your branch has 2 files changed, the merge is usually instant and safe.

You are now a strategist of the Git timeline.
`
};
