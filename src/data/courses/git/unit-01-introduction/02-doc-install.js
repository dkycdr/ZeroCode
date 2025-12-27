import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Install = {
    id: 'git-1-install',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Identity & Configuration ⚙️',
    duration: '20 min read',
    content: `
# Deep Dive: Identity & Configuration ⚙️

## 1. The Configuration Hierarchy
Git is highly configurable. But where do these configurations live?
Git looks for configuration values in **three specific places**, and the order matters immensely.

### Level 1: System (\`--system\`)
*   **Location**: \`/etc/gitconfig\` (on Linux/Mac) or \`C:\\ProgramData\\Git\\config\` (on Windows).
*   **Scope**: Applies to **every user** on the computer and **every repository**.
*   **Usage**: Rarely used by developers. Usually set by IT admins in corporate environments.

### Level 2: Global (\`--global\`)
*   **Location**: \`~/.gitconfig\` or \`~/.config/git/config\`.
*   **Scope**: Applies to **YOU** (the current user) for **all your projects**.
*   **Usage**: This is where you set your Name, Email, and Preferred Editor. 95% of your config commands will use this flag.

### Level 3: Local (\`--local\`)
*   **Location**: \`.git/config\` (inside your specific project folder).
*   **Scope**: Applies **ONLY** to that specific repository.
*   **Usage**: Used when you need a specific email for a work project (e.g., \`@google.com\`) vs your personal projects (e.g., \`@gmail.com\`).

### The Override Rule
**Local** overrides **Global**, which overrides **System**.

> **Scenario**: 
> *   Global Email: \`me@gmail.com\`
> *   Local Email: \`dev@work.com\`
> *   **Result**: When you commit in this repo, Git uses \`dev@work.com\`.

\`\`\`mermaid
%% width: 450px %%
flowchart TD
    A["Git Command: git commit"] --> B{Check Local Config?}
    B -- Found! --> C[Use Local Value]
    B -- Not Found --> D{Check Global Config?}
    D -- Found! --> E[Use Global Value]
    D -- Not Found --> F{Check System Config?}
    F -- Found! --> G[Use System Value]
    F -- Not Found --> H[Use Default/Error]
    

\`\`\`

---

## 2. Line Endings: The Invisible Enemy
If there is one thing that causes more fights between Windows and Mac/Linux developers, it is **Line Endings**.

### The Problem
*   **Windows**: Uses **CRLF** (Carriage Return + Line Feed). Invisible characters: \`\\r\\n\`.
*   **Mac/Linux**: Uses **LF** (Line Feed). Invisible character: \`\\n\`.

If a Windows dev pushes a file, it has \`\\r\\n\`.
If a Linux dev pulls it, their editor might see \`^M\` characters at the end of every line.
If the Linux dev "fixes" it to \`\\n\` and commits, the diff shows that **every single line in the file changed**.
Project Managers panic because "10,000 lines changed" in a PR that fixed one typo.

### The Solution: \`core.autocrlf\`
Git can handle this automatically by normalizing line endings.

**For Windows Developers:**
\`\`\`bash
git config --global core.autocrlf true
\`\`\`
*   **Checkout**: Git converts LF to CRLF (so Windows editors are happy).
*   **Commit**: Git converts CRLF back to LF (so the repo stays clean).

**For Mac/Linux Developers:**
\`\`\`bash
git config --global core.autocrlf input
\`\`\`
*   **Checkout**: Git does nothing (LF is already native).
*   **Commit**: Git converts CRLF to LF (just in case you accidentally pasted Windows text).

---

## 3. The Editor War
When you run \`git commit\` without a message, Git opens a text editor.
By default, this is often **Vim**.

### The Vim Trap
1.  Junior Dev types \`git commit\`.
2.  Screen turns black. Weird tildes \`~\` appear.
3.  Dev types "Fixed bug".
4.  Nothing happens.
5.  Dev panics, presses Ctrl+C. Nothing.
6.  Dev restarts computer.

**Senior Tip**: Configure your editor immediately.

\`\`\`bash
# Set VS Code as default
git config --global core.editor "code --wait"

# Set Nano (easier terminal editor) as default
git config --global core.editor "nano"
\`\`\`

---

## 4. Privacy: The Email Mask
GitHub uses your email address to associate commits with your profile avatar.
However, this email becomes **publicly visible** in the commit log.
Spammers scrape Git histories for emails.

### The Fix
GitHub provides a \`noreply\` email address.
1.  Go to GitHub Settings -> Emails.
2.  Check "Keep my email addresses private".
3.  Use the provided email (e.g., \`123456+username@users.noreply.github.com\`).

\`\`\`bash
git config --global user.email "123456+dkycdr@users.noreply.github.com"
\`\`\`

Now your commits are attributed to you, but your real email is hidden from the public log.
`
};
