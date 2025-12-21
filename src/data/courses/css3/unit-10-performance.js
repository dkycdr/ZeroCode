import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10Performance = {
    id: 'css3-unit-10',
    title: 'Performance & The Rendering Engine',
    description: 'Stop guessing. Learn how the browser paints pixels and how to achieve 60 FPS animations using the DevTools.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit10-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Critical Rendering Path',
            duration: '15 min read',
            content: `
# Deep Dive: The Critical Rendering Path

## The "Why"

When a user visits your site, the browser performs a 5-step sprint:
1.  **DOM**: Parse HTML.
2.  **CSSOM**: Parse CSS.
3.  **Render Tree**: Combine DOM + CSSOM (decide what is visible).
4.  **Layout**: Calculate Geometry (Width, Height, Position).
5.  **Paint**: Fill in pixels (Colors, Shadows, Text).

---

## Blocking Resources

CSS is "Render Blocking". The browser **will not** paint a single pixel until it has downloaded and parsed your CSS.
This is why massive 2MB CSS bundles cause a white screen.

**Strategy**: Split your CSS. Use "Critical CSS" (styles for the first fold) inline, and load the rest lazily.
            `
        },
        {
            id: 'css-unit10-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Layout vs Paint vs Composite',
            duration: '20 min read',
            content: `
# Deep Dive: Layout vs Paint vs Composite

## The "Why"

Not all properties are equal.

*   **Expensive (Layout)**: \`width\`, \`margin\`, \`font-size\`. Changing these forces the browser to recalculate the position of *everything*.
*   **Medium (Paint)**: \`color\`, \`background\`, \`shadow\`. The geometry didn't change, but the pixels did.
*   **Cheap (Composite)**: \`transform\`, \`opacity\`. The GPU just moves the existing texture.

---

## Layout Thrashing

If you read a layout property (like \`offsetHeight\`) and immediately write a style (like \`height = ...\`) in a JS loop, you force the browser to recalculate Layout *in every single frame*. This destroys performance.
            `
        },
        {
            id: 'css-unit10-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: will-change',
            duration: '15 min read',
            content: `
# Deep Dive: will-change

## The "Why"

You can whisper to the browser: *"Hey, I'm about to move this sidebar."*
The browser will then allocate a GPU layer ahead of time.

\`\`\`css
.sidebar {
  will-change: transform;
}
\`\`\`

---

## Senior Warning

**Do not** put \`will-change: all\` or use it on everything. GPU layers consume VRAM. Used excessively, the browser will run out of memory and crash the tab. Use it only for active animations.
            `
        },
        {
            id: 'css-unit10-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: content-visibility',
            duration: '15 min read',
            content: `
# Deep Dive: content-visibility

## The "Why"

Imagine a page with 10,000 comments. The browser renders all of them, even the ones 5000px off-screen.
\`content-visibility: auto\` tells the browser: **"Skip rendering this element until the user scrolls near it."**

This is practically "Lazy Loading" for the rendering engine. It can speed up initial load time by 7x.

\`\`\`css
.comment-section {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* Estimates height to preventing scrollbar jumping */
}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit10-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: GPU Promotion',
            duration: '20 min',
            content: `
## The Mission

We have an animation that is "stuttery" on low-end devices.
Promote the element to its own GPU Layer using \`will-change\`.

**Task:**
1.  Target \`.card\`.
2.  Tell the browser we will change its \`transform\`.
3.  Add \`transform: translateZ(0)\` as a specific hack for older browsers.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add will-change: transform to .card.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?will-change\s*:\s*transform\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Add transform: translateZ(0) hack.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?transform\s*:\s*translateZ\(0\)\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Apply a transition duration of 0.3s.',
                    completed: false,
                    regex: /\.card\s*\{[\s\S]*?transition\s*:\s*0\.3s\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.card {
    background: white;
    /* TODO: Promote layer & Transitions */

}

.card:hover {
    transform: scale(1.05);
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="card">Hover me cheaply</div>`
                }
            ]
        },
        {
            id: 'css-unit10-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Preventing Layout Thrashing',
            duration: '25 min',
            content: `
## The Mission

We have a list with thousands of items.
Apply \`content-visibility: auto\` to skip rendering the off-screen items.
You MUST also set \`contain-intrinsic-size\` to prevent the scrollbar from jittering as items load in.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set content-visibility to auto on .feed-item.',
                    completed: false,
                    regex: /\.feed-item\s*\{[\s\S]*?content-visibility\s*:\s*auto\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set estimated size (contain-intrinsic-size) to 100px.',
                    completed: false,
                    regex: /\.feed-item\s*\{[\s\S]*?contain-intrinsic-size\s*:\s*100px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set padding to 20px.',
                    completed: false,
                    regex: /\.feed-item\s*\{[\s\S]*?padding\s*:\s*20px\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* List of 5000 items */
.feed-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    /* TODO: Lazy Render */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="feed-item">Post 1</div>
<div class="feed-item">Post 2</div>`
                }
            ]
        },
        {
            id: 'css-unit10-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Containment Isolation',
            duration: '20 min',
            content: `
## The Mission

We have a Sidebar widget. When its contents change, it triggers a layout recalculation for the *entire page*.
Use the \`contain\` property to trap the layout calculations inside the widget.

**Task:**
Use \`contain: strict\` if the dimensions are fixed, or \`contain: layout\` if they might grow. For this lab, assume fixed dimensions.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set height to 500px fixed.',
                    completed: false,
                    regex: /\.widget\s*\{[\s\S]*?height\s*:\s*500px\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set width to 300px fixed.',
                    completed: false,
                    regex: /\.widget\s*\{[\s\S]*?width\s*:\s*300px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Set contain: strict (Contains layout, paint, and size).',
                    completed: false,
                    regex: /\.widget\s*\{[\s\S]*?contain\s*:\s*strict\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.widget {
    background: #f0f0f0;
    /* TODO: Fix size and Isolate */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="widget">
    <p>Dynamic Content that updates often...</p>
</div>`
                }
            ]
        },
        {
            id: 'css-unit10-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Hardware Accelerated Opacity',
            duration: '15 min',
            content: `
## The Mission

Engineers often make elements disappear using \`display: none\` (Causes Layout) or \`visibility: hidden\` (No Layout, but no transition).

The fastest way to fade out is \`opacity\`.
Combine \`opacity\` with \`pointer-events: none\` to completely disable the element without triggering a Layout Reflow.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set initial opacity to 1.',
                    completed: false,
                    regex: /\.modal\s*\{[\s\S]*?opacity\s*:\s*1\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'When .hidden, set opacity to 0.',
                    completed: false,
                    regex: /\.modal\.hidden\s*\{[\s\S]*?opacity\s*:\s*0\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'When .hidden, also set pointer-events: none;',
                    completed: false,
                    regex: /\.modal\.hidden\s*\{[\s\S]*?pointer-events\s*:\s*none\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.modal {
    transition: opacity 0.3s ease;
    /* TODO: Initial State */
}

/* TODO: High Performance Hide */
.modal.hidden {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="modal hidden">I am hidden cheaply</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Performance Engineering',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which of these is a "Zero Cost" animation property?',
                    options: [
                        'width',
                        'margin-top',
                        'transform',
                        'padding'
                    ],
                    correctIndex: 2,
                    explanation: 'Transform is handled by the Compositor thread (GPU) and does not trigger Layout or Paint.'
                },
                {
                    id: 'q2',
                    question: 'What does `will-change: transform` does?',
                    options: [
                        'It transforms the element immediately',
                        'It warns the browser to allocate a GPU layer ahead of time',
                        'It prevents the element from changing',
                        'It is a deprecated property'
                    ],
                    correctIndex: 1,
                    explanation: 'It is a hint to the browser optimization engine to prepare for a change.'
                },
                {
                    id: 'q3',
                    question: 'Why is `content-visibility: auto` powerful?',
                    options: [
                        'It hides content from Google Bots',
                        'It skips rendering calculations for off-screen elements',
                        'It improves SEO',
                        'It compresses images'
                    ],
                    correctIndex: 1,
                    explanation: 'It allows the browser to act lazily, deferring the heavy work of layout/painting until the user actually scrolls to the content.'
                },
                {
                    id: 'q4',
                    question: 'What is Layout Thrashing?',
                    options: [
                        'When an element is confusingly designed',
                        'Rapidly reading and writing DOM properties in a loop, forcing repeated Reflows',
                        'Using Grid instead of Flexbox',
                        'A bug in Chrome'
                    ],
                    correctIndex: 1,
                    explanation: 'Reading a value (offsetHeight) forces the browser to calculate layout. If you then Write, you invalidate that layout. Doing this in a loop kills 60FPS.'
                },
                {
                    id: 'q5',
                    question: 'Which is the most performant way to hide an element you intend to animate back in?',
                    options: [
                        'display: none',
                        'remove() from DOM',
                        'opacity: 0 + pointer-events: none',
                        'height: 0'
                    ],
                    correctIndex: 2,
                    explanation: 'Display none destroys the render tree node (expensive to rebuild). Opacity 0 keeps it promoted on the GPU, just invisible.'
                }
            ]
        }
    ]
};
