import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2PreventingThrashing = {
    id: 'css-unit10-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Preventing Render Thrashing',
    duration: '25 min',
    content: `
# Lab: Preventing Render Thrashing (Lazy Rendering)

## 1. The Concept: Efficiency through Laziness
Architect, in the **Nexus AI Dashboard** system which processes thousands of data log entries, rendering every single element simultaneously is a critical waste of computational resources.

We will implement the elite **\`content-visibility\`** property to instruct the browser to only perform layout and paint cycles when an element approaches the user's viewport. This drastically reduces the initial "Time to Interactive" for high-density pages.

---

## 2. The Mission: The High-Performance Feed
You are tasked with optimizing the **Neural Sync Feed** (\`.feed-item\`). Without optimization, a list of 10,000 entries will cause the browser thread to lock.

### Deployment Parameters:
1.  **Lazy Activation**: Apply \`content-visibility: auto;\` to every feed entry.
2.  **Layout Stability**: Provide \`contain-intrinsic-size: auto 100px;\` as a height estimate to prevent scrollbar "jitter" during rapid navigation.
3.  **Visual Polish**: Apply professional borders and spacing to maintain the Nexus aesthetic.

---

## 3. Machine Logic: The Virtualization Hack
The browser will "ignore" elements located deep below the visual fold. It bypasses calculating their widths or painting their pixels until they are precisely needed. This grants significant "breathing room" to the user's CPU and memory.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Measurement is Key**: Without \`contain-intrinsic-size\`, your page will feel "broken" during scrolling as the total height fluctuates violently. Always provide an estimate that closely matches the rendered height.

> [!TIP]
> **Observation**: Open the **Performance** tab in Chrome DevTools and perform a scroll. You will notice that CPU load remains flat even as the list grows into the thousands.
`,
    tasks: [
        {
            id: 1,
            description: 'The Lazy Signal: On ".feed-item", set "content-visibility: auto;".',
            completed: false,
            regex: /\.feed-item\s*\{(?=[\s\S]*?content-visibility\s*:\s*auto;?)[\s\S]*?\}/,
            hint: {
                concept: 'content-visibility: auto handles viewport detection automatically.',
                strategy: 'Apply the property to the feed-item selector.',
                solution: 'content-visibility: auto;'
            }
        },
        {
            id: 2,
            description: 'The Placeholder Logic: Set "contain-intrinsic-size: auto 100px;" to preserve layout stability.',
            completed: false,
            regex: /\.feed-item\s*\{(?=[\s\S]*?contain-intrinsic-size\s*:\s*(?:auto\s+100px|100px);?)[\s\S]*?\}/,
            hint: {
                concept: 'This property provides a height placeholder before the element is fully rendered.',
                strategy: 'Use contain-intrinsic-size with a 100px estimate.',
                solution: 'contain-intrinsic-size: auto 100px;'
            }
        },
        {
            id: 3,
            description: 'The Nexus Polish: Set "padding: 24px;", "border-bottom: 1px solid #1a1a1e;", and "font-family: monospace;".',
            completed: false,
            regex: /\.feed-item\s*\{(?=[\s\S]*?padding\s*:\s*24px;?)(?=[\s\S]*?border-bottom\s*:\s*1px\s+solid\s+#1a1a1e;?)(?=[\s\S]*?font-family\s*:\s*monospace;?)[\s\S]*?\}/,
            hint: {
                concept: 'Visual styles must be maintained even if the rendering process is deferred.',
                strategy: 'Add the standard polish properties.',
                solution: 'padding: 24px; border-bottom: 1px solid #1a1a1e; font-family: monospace;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS LOG FEED - PERFORMANCE OPTIMIZATION */
body {
    background: #05050a;
}

.feed-item {
    background: #0a0a0f;
    color: #4cc9f0;
    /* 1, 2, 3. Add Lazy Rendering and Visual Polish below */

}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="nexus-feed">
    <!-- Simulated High-Density List -->
    <div class="feed-item">PROTOCOL_LOG_001: SYNC_INITIALIZED [SUCCESS]</div>
    <div class="feed-item">PROTOCOL_LOG_002: NEURAL_LINK_ESTABLISHED [OK]</div>
    <div class="feed-item">PROTOCOL_LOG_003: BUFFER_OVERFLOW_PREVENTED [SAFE]</div>
    <div class="feed-item">PROTOCOL_LOG_004: MEMORY_COMPRESSION_ACTIVE [COMPLETED]</div>
</div>`
        }
    ]
};
