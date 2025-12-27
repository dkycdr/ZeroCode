import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Diff = {
    id: 'git-2-diff',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Difference Engine (git diff) 🔍',
    duration: '30 min read',
    content: `
# Deep Dive: The Difference Engine (git diff) 🔍

## 1. The Art of Comparison
Git doesn't just store snapshots; it is a master of calculating the **Delta** between them. The \`git diff\` command is your surgical microscope. It allows you to see exactly what changed, line by line, character by character.

To use \`diff\` effectively, you must understand the **Three-Way Comparison**.

---

## 2. The Comparison Matrix
Where are the changes you want to see? Depending on your flags, Git looks at different areas:

| Command | Comparison | When to use? |
| :--- | :--- | :--- |
| \`git diff\` | **Working Directory** vs **Staging Area** | "What have I typed but NOT staged yet?" |
| \`git diff --staged\` | **Staging Area** vs **Last Commit (HEAD)** | "What am I about to commit?" |
| \`git diff HEAD\` | **Working Directory** vs **Last Commit (HEAD)** | "What is the total change since my last commit?" |
| \`git diff commit1 commit2\` | **Commit A** vs **Commit B** | Comparing history. |

\`\`\`mermaid
%% width: 700px %%
graph LR
    WD[Working Directory]
    SA[Staging Area]
    HEAD[HEAD/Repository]

    WD -- "git diff" --> SA
    SA -- "git diff --staged" --> HEAD
    WD -- "git diff HEAD" --> HEAD
\`\`\`

---

## 3. Reading the "Unified Diff"
When you run \`diff\`, Git outputs a specific format called a **Unified Diff**. It looks intimidating at first, but it follows a strict logic.

**Example Output:**
\`\`\`diff
--- a/src/app.js
+++ b/src/app.js
@@ -10,4 +10,6 @@
 function init() {
-  console.log("Starting...");
+  console.log("System Online");
+  loadModules();
 }
\`\`\`

### The Anatomy:
1.  **Header (\`--- a/\` and \`+++ b/\`)**: Tells you the "Before" (a) and "After" (b) version of the file.
2.  **Chunk Header (\`@@ -10,4 +10,6 @@\`)**:
    *   \`-10,4\`: In the original file, we are looking at line 10, and it showed 4 lines.
    *   \`+10,6\`: In the new file, we are still at line 10, but it now shows 6 lines.
3.  **The Metadata**:
    *   Lines starting with **space**: Unchanged context lines.
    *   Lines starting with **minus (-)**: Deleted or modified (removed version).
    *   Lines starting with **plus (+)**: Added or modified (new version).

---

## 4. Word-Level Precision
Sometimes, you change one word in a 100-word sentence. A standard diff shows the whole line as deleted and re-added.

**The Pro Flag:**
\`\`\`bash
git diff --word-diff
\`\`\`
Instead of line-by-line, Git will show:
\`The quick \`[-brown-]{\+crimson+} \`fox jumps...\`
This is invaluable for reviewing documentation or subtle logic changes.

---

## 5. Machine Logic: The Myers Algorithm
How does Git know that you "moved" a line vs "deleted and added" it?
Git uses the **Myers Diff Algorithm** by default. It tries to find the **Shortest Edit Script**—the minimum number of additions and deletions required to turn File A into File B.

### Internal Logic:
1.  **Hashing**: Git hashes each line in both files.
2.  **Graph Search**: It treats the comparison as a grid and finds the shortest path from the top-left (start of files) to the bottom-right (end of files).
3.  **Result**: A fast, accurate diff that feels "human" in its interpretation of your intent.

---

## 6. Senior Warning: The Binary Trap
Git is optimized for **Text**.
If you try to \`diff\` a \`.png\` or \`.pdf\`, Git will simply say:
\`Binary files a/image.png and b/image.png differ\`

**The Fix**: You can configure Git to use "Textconv" filters to convert binaries (like docx) to text temporarily just for the diff, but generally, diffs are meant for code.

You are now ready to interpret the DNA of your code changes.
`
};
