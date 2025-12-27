import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Ignore = {
    id: 'git-2-ignore',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Stealth Protocol (.gitignore) 👤',
    duration: '25 min read',
    content: `
# Deep Dive: The Stealth Protocol (.gitignore) 👤

## 1. Why Silence is Golden
In a professional project, your directory isn't just full of source code. It's full of **noise**:
*   **Dependencies**: \`node_modules/\` (can be GBs in size).
*   **Editor Settings**: \`.vscode/\` or \`.idea/\`.
*   **OS Junk**: \`.DS_Store\` (Mac) or \`Thumbs.db\` (Windows).
*   **Build Artifacts**: \`dist/\`, \`build/\`, \`*.log\`.
*   **Secrets**: \`.env\` files containing API keys or database passwords.

If you commit this noise, you bloat the repository, leak security credentials, and cause merge conflicts over file-indexing settings that have nothing to do with code.

---

## 2. The Anatomy of a Rule
The \`.gitignore\` file uses **Glob Patterns**. It is not regex, but it is powerful.

### A. The Baseline Rules
| Pattern | Meaning |
| :--- | :--- |
| \`debug.log\` | Ignores any file named exactly "debug.log" in any directory. |
| \`build/\` | Ignores the entire directory "build" and all its contents. |
| \`*.tmp\` | Ignores any file ending in ".tmp" (Wildcard). |
| \`config/*.json\` | Ignores JSON files inside the "config" folder, but **not** in subfolders. |

### B. The Advanced Globbing
*   **The Double Asterisk (\`**\`)**: Matches directories recursively.
    *   \`**/logs/*.txt\`: Ignores any \`.txt\` file inside a \`logs\` folder, no matter how deep it is.
*   **The Negation (\`!\`)**: "Ignore everything EXCEPT this".
    *   \`*.log\`
    *   \`!important.log\`
    *   *Result*: All logs are ignored, but \`important.log\` is tracked.
*   **The Trailing Slash (\`/\`)**: Specificity.
    *   \`docs\`: Matches both a *file* named docs and a *directory* named docs.
    *   \`docs/\`: Matches **only** a directory named docs.

---

## 3. The Hierarchy of Ignorance
Git doesn't just look at one file. It checks for ignores in a specific order:

1.  **Command Line**: Highly temporary patterns passed via flags.
2.  **.gitignore (Local)**: The file in the current directory. This is the most common and **should be committed**.
3.  **Global Gitignore**: A file on your system (usually \`~/.gitignore_global\`) that applies to **every project you ever touch**.
    *   *Best use*: OS junk like \`.DS_Store\`.
4.  **The Exclude File**: \`.git/info/exclude\`.
    *   *Purpose*: Patterns you want to ignore locally but **don't want to share** with teammates. It is never committed.

\`\`\`mermaid
%% width: 600px %%
graph TD
    A["Is file tracked?"] -->|Yes| B["Proceed (Ignore fails)"]
    A -->|No| C{"Check .gitignore in current dir"}
    C -->|Match| D[Ignore]
    C -->|No Match| E{"Check .gitignore in parent dirs"}
    E -->|Match| D
    E -->|No Match| F{"Check .git/info/exclude"}
    F -->|Match| D
    F -->|No Match| G{"Check Global Config"}
    G -->|Match| D
    G -->|No Match| H[Track File]
\`\`\`

---

## 4. Troubleshooting: "Why am I still seeing this?"
The most common mistake: **Trying to ignore a file that is already tracked.**

### The Rule of Tracking
> [!IMPORTANT]
> \`.gitignore\` only prevents **untracked** files from being added. If a file is already in the repository history, adding it to \`.gitignore\` does **nothing**.

**The Fix (The "Nuclear" Clean):**
If you accidentally committed \`node_modules\`, you must remove them from the index first:
\`\`\`bash
git rm -r --cached .
git add .
git commit -m "Fix: apply .gitignore to previously tracked files"
\`\`\`
*Note: \`--cached\` removes it from Git's tracking but keeps the actual files on your hard drive.*

### The Debugger: \`check-ignore\`
Unsure why a file is being ignored?
\`\`\`bash
git check-ignore -v path/to/file.txt
\`\`\`
This will tell you exactly which line of which \`.gitignore\` file is responsible for blocking the file.

---

## 5. Machine Logic: Standard Templates
Don't write your ignore files from scratch.
The "Elite" way is to use **gitignore.io** (or Toptal's equivalent). You search for "Node, React, macOS, VSCode", and it generates a perfect, battle-tested file for you.

| Strategy | Performance Impact | Why? |
| :--- | :--- | :--- |
| **Broad (\`*\`)** | High | Git has to check every single file against the list. |
| **Directory-based (\`node_modules/\`)** | Low | Git skips the folder entirely without looking inside. |
| **Negation (\`!\`)** | Medium | Git has to evaluate the positive ignore first, then the negative. |

You are now a master of the invisible.
`
};
