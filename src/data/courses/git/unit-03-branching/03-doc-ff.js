import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2FF = {
    id: 'git-3-ff',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Fast-Forward Path ⏩',
    duration: '20 min read',
    content: `
# Deep Dive: The Fast-Forward Path ⏩

Merging is the process of bringing history back together. However, not all merges are created equal. Git evaluates your commit graph and chooses the most efficient path. The simplest of these is the **Fast-Forward**.

---

## 1. What is a Fast-Forward Merge?
Imagine you branch off \`main\` to create a \`feature\`. While you work on \`feature\`, **nobody else** makes any commits to \`main\`. 

When you merge \`feature\` back into \`main\`, Git realizes that the \`feature\` branch is simply a direct descendant of \`main\`.

**The Action**: Git doesn't create a merge commit. It simply "fast-forwards" the \`main\` pointer to the same commit as \`feature\`.

\`\`\`mermaid
%% width: 850px %%
flowchart LR
    subgraph Before ["Before Merge"]
        direction TB
        m1[A] --> m2[B] --> m3[C: main]
        m3 --> f1[D] --> f2[E: feature]
    end

    Before ~~~ After

    subgraph After ["After Fast-Forward"]
        direction TB
        r1[A] --> r2[B] --> r3[C] --> r4[D] --> r5[E: main/feature]
    end
\`\`\`

---

## 2. When Fast-Forward is IMPOSSIBLE
If \`main\` has moved (someone else committed while you were working), a fast-forward is impossible. The timelines have **diverged**. 

In this scenario, Git must perform a **Three-Way Merge** (covered in the next Deep Dive) and create a brand new **Merge Commit**.

\`\`\`mermaid
%% width: 600px %%
graph LR
    m1[A] --> m2[B] --> m3[C]
    m3 --> f1[D] --> f2[E: feature]
    m3 --> m4[F: main branch moved!]
\`\`\`

---

## 3. The "No-FF" Strategy
Some developers hate Fast-Forwarding. Why? Because it hides the fact that a branch ever existed. It makes the history look like a single straight line.

If you want to **force** a merge commit (to keep a record of the branch history), you use the \`--no-ff\` flag.

\`\`\`bash
git merge --no-ff feature-name
\`\`\`

### Comparison:
| Type | History Appearance | Metadata |
| :--- | :--- | :--- |
| **Fast-Forward** | Straight line (Linear) | Clean, but loses context of the branch lifecycle. |
| **No-FF** | Diamond shape (Merge node) | Explicitly shows where a feature started and ended. |

---

## 4. Machine Logic: The Common Ancestor
How does Git know its a Fast-Forward?
Git looks for the **LCA (Lowest Common Ancestor)**. 
*   If the LCA is the tip of your current branch (\`main\`), and the other branch (\`feature\`) contains the tip of \`main\` in its history, it is a Fast-Forward.

---

## 5. Senior Insight: Linear History Politics
In massive teams, a "Linear History" (only Fast-Forwards) is often preferred because \`git log\` is easier to read. To achieve this even when timelines diverge, developers use **Rebasing** (moving your work on top of the new main) before merging. 

*We will cover Rebasing in a later unit—for now, just know that Fast-Forward is the cleanest merge Git can perform.*

You now understand the "Quickest Path" in Git's history engine.
`
};
