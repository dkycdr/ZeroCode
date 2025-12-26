import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3NamedContainers = {
    id: 'css-unit12-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Named Containers',
    duration: '25 min',
    content: `
# Lab: Named Containers (Nested Logic)

## 1. The Concept: Targeted Containment
Architect, in complex Nexus AI interfaces, you will often find multiple levels of containment. A child element might be nested inside a \`card-wrapper\`, which is itself inside a \`main-layout\`.

By default, an \`@container\` query targets the **immediate parent** container. If you want a child to bypass its parent and query a distant grandparent (e.g., the Main Dashboard), you must use the **\`container-name\`** property.

---

## 2. The Mission: The Targeted Widget
You are developing an **Internal Analytics Widget**. This widget lives inside a \`.sidebar\`, but it needs to change its background color based on the width of the **entire \`.control-center\`**, regardless of how wide the sidebar is.

### Deployment Parameters:
1.  **Identity Protocol**: Assign \`container-name: control-center;\` and \`container-type: inline-size;\` to the \`.main-dashboard\`.
2.  **Specific Query**: Write an \`@container\` query that specifically targets the **control-center** name.
3.  **Threshold Logic**: When the **control-center** exceeds **900px**, change the \`.widget\` background to a glowing cyan and shift its text color to black.

---

## 3. Machine Logic: The Namespace Jump
When you specify a name in the query (\`@container control-center\`), the browser skips any intermediate anonymous containers and searches upwards until it find a container whose name matches your string.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Name Sensitivity**: Container names are case-sensitive. Ensure your query name matches your definition perfectly.

> [!TIP]
> **Organization**: Naming your containers is a best practice in large architectures (similar to BEM), as it makes the intent of your responsive logic clear to other engineers.
`,
    tasks: [
        {
            id: 1,
            description: 'The Identity Protocol: On ".main-dashboard", set "container-name: control-center;" and "container-type: inline-size;".',
            completed: false,
            regex: /\.main-dashboard\s*\{(?=[\s\S]*?container-name\s*:\s*control-center;?)(?=[\s\S]*?container-type\s*:\s*inline-size;?)[\s\S]*?\}/,
            hint: {
                concept: 'Combining type and name registers a globally identifiable containment context.',
                strategy: 'Apply both properties to the dashboard selector.',
                solution: 'container-name: control-center; container-type: inline-size;'
            }
        },
        {
            id: 2,
            description: 'The Targeted Logic: Create an "@container" query that specifies the "control-center" name for min-width: 900px.',
            completed: false,
            regex: /@container\s+control-center\s*\(\min-width\s*:\s*900px\s*\)\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'The syntax for naming is @container [NAME] [QUERY].',
                strategy: 'Write the named container query.',
                solution: '@container control-center (min-width: 900px) { ... }'
            }
        },
        {
            id: 3,
            description: 'The Transformation: Inside the query, update ".widget" with background: #4cc9f0; and color: #000;.',
            completed: false,
            regex: /@container\s+control-center\s*\(\min-width\s*:\s*900px\s*\)\s*\{[\s\S]*?\.widget\s*\{(?=[\s\S]*?background\s*:\s*#4cc9f0;?)(?=[\s\S]*?color\s*:\s*#000;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'The widget reacts to the distant grandparent dashboard, not its immediate parent.',
                strategy: 'Define the widget overrides inside the named query.',
                solution: 'background: #4cc9f0; color: #000;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS TARGETED CONTAINMENT ENGINE */
body {
    background: #000;
    font-family: 'Space Mono', monospace;
    padding: 20px;
}

.main-dashboard {
    border: 2px solid #1a1a1e;
    padding: 40px;
    background: #05050a;
    width: 600px; /* Try expanding this to 1000px in code or via window */
    /* 1. Define named containment context below */

}

.sidebar {
    width: 250px;
    background: #0a0a0f;
    padding: 20px;
    border: 1px dashed #333;
    /* This element is NOT a container, but it holds the widget */
}

.widget {
    padding: 20px;
    background: #111;
    color: #4cc9f0;
    transition: all 0.5s ease;
    border-radius: 4px;
}

/* 2 & 3. Implement the named container logic below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="main-dashboard">
    <div class="sidebar">
        <div class="widget">
            <h4>ANALYTICS_WIDGET</h4>
            <p>I monitor the GLOBAL Dashboard width, not the local Sidebar.</p>
        </div>
    </div>
</div>`
        }
    ]
};
