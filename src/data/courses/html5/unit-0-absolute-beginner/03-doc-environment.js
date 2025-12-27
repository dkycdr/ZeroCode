import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Environment = {
  id: 'html5-u0-doc-3-env',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: The Developer Equipment',
  duration: '10 min read',
  content: `
# Deep Dive: The Developer Equipment

You don't need expensive software to write HTML. You just need two things:

## 1. The Editor (Where you write code)

You *could* use Notepad, but that's like painting with a toothbrush. Use a **Code Editor**.

**Recommended: VS Code**
- Syntax Highlighting (Colors your tags).
- Auto-completion (Types for you).
- Error detection.

**Terminal View:**

\`\`\`bash
# Creating a file in terminal
touch index.html
code index.html
\`\`\`

## 2. The Browser (Where you view code)

Chrome, Firefox, Edge, Safari.
They all have a secret weapon built-in: **Developer Tools**.

### How to open DevTools:
1.  Right-click anywhere on a webpage.
2.  Select **Inspect**.

You will see the DOM (The browser's understanding of your HTML).

\`\`\`html
<!-- This is what you see in the Elements panel -->
<html>
  <body>
    <div id="app">...</div>
  </body>
</html>
\`\`\`

## 3. Files & Extensions

HTML files must end in \`.html\`.
When you double-click an \`.html\` file, your computer knows to open it in a Browser, not a text editor.

### The "index.html" convention
Why do we name the main file \`index.html\`?
Web servers look for this specific file by default.

*   \`zerocode.ac.id/about.html\` -> loads \`about.html\`
*   \`zerocode.ac.id/\` -> loads \`index.html\` AUTOMATICALLY.

## 4. Your First Workflow

1.  **Create folder**: \`my-website\`
2.  **Create file**: \`index.html\`
3.  **Open in Editor**: Write your code.
4.  **Open in Browser**: Drag the file into Chrome.
5.  **Edit & Refresh**: Change code, Save (Ctrl+S), Refresh Browser (F5).

> [!TIP]
> **Pro Tip**: Use the "Live Server" extension in VS Code. It automatically refreshes the browser whenever you save your file!
`
};
