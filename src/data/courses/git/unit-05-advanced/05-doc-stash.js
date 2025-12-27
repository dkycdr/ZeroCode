import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Stash = {
    id: 'git-5-doc-stash',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Time Capsule: Stash & Clean 📦',
    duration: '15 min',
    content: `
# The Time Capsule: Stash & Clean 📦

Real development is messy. You're halfway through a feature, files are broken, and suddenly your boss demands a quick bug fix on \`main\`.

You can't commit broken code. So what do you do? You **Stash** it.

---

## 1. Git Stash: The "Clipboard" for Files

\`git stash\` takes your modified tracked files and staged changes, saves them on a stack of unfinished work, and reverts your working directory to the last clean commit.

### The Workflow
1.  **Work in progress**: Files modified.
2.  **Stash**: \`git stash\` (Directory becomes clean).
3.  **Context Switch**: Checkout another branch, fix bug, commit.
4.  **Restore**: Switch back and run \`git stash pop\`.

### Advanced Stashing
*   **Message**: \`git stash push -m "experimenting with login"\` (Give it a name).
*   **List**: \`git stash list\` (See what is saved).
*   **Apply vs Pop**: 
    *   \`pop\`: Applies and removes from stack.
    *   \`apply\`: Applies but keeps it in the stack (safest).

---

## 2. Git Clean: The Janitor

While \`stash\` handles tracked files, \`git clean\` handles **Untracked** files (new files that haven't been added yet).

Often, build tools leave garbage behind (\`.tmp\`, \`.log\`, \`dist/\`).

### The Nuclear Option
\`git clean\` deletes these files permanence.

*   \`git clean -n\`: **Dry Run**. Shows you what *would* be deleted. **ALWAYS RUN THIS FIRST.**
*   \`git clean -f\`: **Force**. Actually deletes the files.
*   \`git clean -fd\`: Delete files AND directories.

> [!CAUTION]
> There is no "undo" for \`git clean\`. Once deleted, untracked files are gone forever.
`
};
