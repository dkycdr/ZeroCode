import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1AdaptingCard = {
    id: 'css-unit12-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Adapting Card',
    duration: '30 min',
    content: `
# Lab: The Adapting Card (Contextual Response)

## 1. The Concept: Container-First Design
Architect, in this lab you will engineer a **Neural Core Card** that must be deployed in two varying layout slots: the **Main Control Grid** (Wide) and the **Lateral Analytics Sidebar** (Narrow).

Using legacy Media Queries would force the card to stay in "Desktop Mode" in the sidebar, causing a visual collision. We will implement **Container Queries** to allow the card to independently pivot its layout based on the space provided by its parent \`.nexus-slot\`.

---

## 2. The Mission: The Shape-Shifting Interface
Refactor the styling for \`.nexus-card\` to ensure it adapts its internal orientation without knowing anything about the global browser width.

### Deployment Parameters:
1.  **Context Registration**: Define \`.nexus-slot\` as a container using the \`inline-size\` protocol.
2.  **Mobile-First Base**: Configure the \`.nexus-card\` to default to a vertical stack (\`flex-direction: column\`).
3.  **Adaptive Query**: Create an \`@container\` rule that triggers when the parent container exceeds **450px**.
4.  **Transformation**: Inside the query, pivot the card to a horizontal layout (\`flex-direction: row\`) and increase the internal gap.

---

## 3. Machine Logic: The Parent Handshake
When the browser renders the \`.nexus-card\`, it looks up the DOM tree for the nearest "Containment Context." It measures that parent in real-time. If the measurement satisfies your query (> 450px), the horizontal styles are injected.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Container vs. Element**: Remember that the property \`container-type\` goes on the **Parent Wrapper**, while the \`@container\` query is where you define the styles for the **Child Component**.

> [!TIP]
> **Flexibility**: Use \`align-items: center\` to ensure the content remains visually balanced regardless of the orientation shift.
`,
    tasks: [
        {
            id: 1,
            description: 'The Context Protocol: On ".nexus-slot", set "container-type: inline-size;".',
            completed: false,
            regex: /\.nexus-slot\s*\{(?=[\s\S]*?container-type\s*:\s*inline-size;?)[\s\S]*?\}/,
            hint: {
                concept: 'This registers the element as a measurable context for its children.',
                strategy: 'Apply container-type to the slot wrapper.',
                solution: 'container-type: inline-size;'
            }
        },
        {
            id: 2,
            description: 'The Default Stack: Set ".nexus-card" to "flex-direction: column;".',
            completed: false,
            regex: /\.nexus-card\s*\{(?=[\s\S]*?flex-direction\s*:\s*column;?)[\s\S]*?\}/,
            hint: {
                concept: 'The mobile-first standard ensures the card fits the narrowest spaces by default.',
                strategy: 'Update the flex-direction property.',
                solution: 'flex-direction: column;'
            }
        },
        {
            id: 3,
            description: 'The Adaptive Logic: Create an "@container" query for min-width: 450px.',
            completed: false,
            regex: /@container\s*\(\s*min-width\s*:\s*450px\s*\)\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'The @container rule targets the local context rather than the viewport.',
                strategy: 'Write the query block using the container keyword.',
                solution: '@container (min-width: 450px) { ... }'
            }
        },
        {
            id: 4,
            description: 'The Transformation: Inside the query, switch ".nexus-card" to "flex-direction: row;".',
            completed: false,
            regex: /@container\s*\(\s*min-width\s*:\s*450px\s*\)\s*\{[\s\S]*?\.nexus-card\s*\{(?=[\s\S]*?flex-direction\s*:\s*row;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'This pivot transforms the card once sufficient horizontal space is available.',
                strategy: 'Add the card selector inside the @container block.',
                solution: 'flex-direction: row;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS CORE CARD - CONTEXTUAL ENGINE */
body {
    background: #05050a;
}

.nexus-slot {
    /* 1. Register the containment context below */

}

.nexus-card {
    display: flex;
    background: #0a0a0f;
    border: 1px solid #1a1a1e;
    padding: 24px;
    gap: 16px;
    color: #4cc9f0;
    font-family: 'Space Mono', monospace;
    /* 2. Set default stacked orientation */

}

.card-img {
    width: 100px;
    height: 100px;
    background: #4cc9f0;
    border-radius: 4px;
}

/* 3 & 4. Implement the container query and transformation below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="interface-grid">
    <!-- Slot representing a narrow sidebar -->
    <div class="nexus-slot" style="width: 300px;">
        <div class="nexus-card">
            <div class="card-img"></div>
            <div class="card-content">
                <h3>NODE_ALPHA</h3>
                <p>Status: Localized</p>
            </div>
        </div>
    </div>

    <!-- Slot representing a wide main area -->
    <div class="nexus-slot" style="width: 600px; margin-top: 50px;">
        <div class="nexus-card">
            <div class="card-img"></div>
            <div class="card-content">
                <h3>NODE_BETA</h3>
                <p>Status: Expanded</p>
            </div>
        </div>
    </div>
</div>`
        }
    ]
};
