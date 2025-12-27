import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5NavigationPaths = {
    id: 'html5-u1-doc-5-paths',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Relative Path Nightmare 🗺️',
    duration: '15 min read',
    content: `
# Deep Dive: Navigation & File Paths 🗺️

## 1. The Broken Link Problem
"My image isn't loading!" or "My link goes to 404!".
90% of the time, this is a **Path Error**.

## 2. The Map Legend
*   \`/\`: The **Root** of your website (e.g., \`mysite.com/\`).
*   \`./\`: The **Current Folder** (Where this file lives right now).
*   \`../\`: The **Parent Folder** (Go up one level).

## 3. Scenarios
Imagine this structure:
\`\`\`text
/project
  ├── index.html
  ├── /images
  │    └── logo.png
  └── /pages
       └── about.html
\`\`\`

### A. Linking \`index.html\` to \`about.html\`
*   **Goal**: Go DOWN into \`pages\`.
*   **Path**: \`href="pages/about.html"\`

### B. Linking \`about.html\` back to \`index.html\`
*   **Goal**: Go UP out of \`pages\`.
*   **Path**: \`href="../index.html"\`

### C. Displaying \`logo.png\` inside \`about.html\`
*   **Goal**: Go UP out of \`pages\`, then DOWN into \`images\`.
*   **Path**: \`src="../images/logo.png"\`

> [!CAUTION]
> **Windows vs Web**: On Windows, paths use backslashes (\`\\\`). On the Web, we ALWAYS use forward slashes (\`/\`). Never mix them up.
`
};
