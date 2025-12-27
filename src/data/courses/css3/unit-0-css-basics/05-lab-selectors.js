import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Selectors = {
    id: 'css-unit0-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Targeting System (Selectors)',
    duration: '35 min',
    content: `
# Lab: The Targeting System (Selectors)

## 1. Theory: How to "Point" at HTML
Imagine you are in a crowded room and want to give an instruction.
- **Tag Selector**: "Everyone humans, stand up." (Broad) -> \`p { color: red; }\`
- **Class Selector**: "Everyone wearing a red badge, stand up." (Group) -> \`.badge { color: red; }\`
- **ID Selector**: "John Smith #1234, stand up." (Specific) -> \`#john { color: red; }\`

## 2. The Hierarchy of Power (Specificity)
*   **Tags** (Least Powerful): Great for defaults.
*   **Classes** (Medium): Perfect for reusable components (buttons, cards).
*   **IDs** (Most Powerful): Use sparingly. Only for unique elements (Logo, Header).

## 3. Mission Instructions
We need to style the **Nexus Dashboard** to match the dark-mode design system. The colors are provided as CSS variables.

**Step 1**: Target the \`body\` element to set the dark theme.
**Step 2**: The logo needs to pop. Target its ID.
**Step 3**: The action button needs the neon accent color. Target its Class.
**Step 4**: The sidebar text needs to be readable. Use a Descendant selector (\`Parent Child\`).
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Select the `body` tag and set `background-color: var(--bg-dark);`',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?background-color\s*:\s*var\(--bg-dark\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Tag Selector',
                strategy: 'Type "body {" then add the property inside.',
                solution: 'body { background-color: var(--bg-dark); }'
            }
        },
        {
            id: 2,
            description: 'Step 2: Select the `#nexus-logo` ID and set `color: var(--accent-neon);`',
            completed: false,
            regex: /#nexus-logo\s*\{(?=[\s\S]*?color\s*:\s*var\(--accent-neon\);?)[\s\S]*?\}/,
            hint: {
                concept: 'ID Selector (#)',
                strategy: 'Use the hash symbol # followed by the ID name.',
                solution: '#nexus-logo { color: var(--accent-neon); }'
            }
        },
        {
            id: 3,
            description: 'Step 3: Select the `.btn-action` class and add `padding: 12px 24px;`',
            completed: false,
            regex: /\.btn-action\s*\{(?=[\s\S]*?padding\s*:\s*12px\s+24px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Class Selector (.)',
                strategy: 'Use the dot . followed by the class name.',
                solution: '.btn-action { padding: 12px 24px; }'
            }
        },
        {
            id: 4,
            description: 'Step 4: Select only `p` tags inside `.sidebar` and set `font-size: 14px;`',
            completed: false,
            regex: /\.sidebar\s+p\s*\{(?=[\s\S]*?font-size\s*:\s*14px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Descendant Selector',
                strategy: 'Write the parent class, a space, then the child tag.',
                solution: '.sidebar p { font-size: 14px; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS AI DESIGN SYSTEM TOKENS */
:root {
    --bg-dark: #0a0a0c;
    --accent-neon: #00ff41;
    --text-main: #e0e0e0;
}

/* --- STEP 1: GLOBAL DEFAULTS --- */
/* TODO: Select the 'body' tag and use var(--bg-dark) for background-color */


/* --- STEP 2: UNIQUE LOGO --- */
/* TODO: Select the ID 'nexus-logo' and use var(--accent-neon) for color */


/* --- STEP 3: REUSABLE COMPONENTS --- */
/* TODO: Select the class 'btn-action' and add padding: 12px 24px */


/* --- STEP 4: SCOPED STYLES (Descendant) --- */
/* TODO: Select 'p' tags ONLY inside '.sidebar' and set font-size: 14px */


/* UTILITY (Do not edit) */
.btn-action {
    background: var(--accent-neon);
    color: black;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<!-- REVIEW THE BLUEPRINT -->
<div class="app-container">
    <header>
        <!-- The Unique Logo -->
        <h1 id="nexus-logo">NEXUS_v2.0</h1>
    </header>
    
    <div class="layout">
        <aside class="sidebar">
            <!-- Sidebar Paragraphs (Need styling) -->
            <p>SYSTEM_STATUS: ACTIVE</p>
            <p>USER: ARCHITECT</p>
        </aside>
        
        <main class="content">
            <!-- Reusable Action Button -->
            <button class="btn-action">EXECUTE_DEPLOYMENT</button>
            <p>Main content area standard text.</p>
        </main>
    </div>
</div>`
        }
    ]
};
