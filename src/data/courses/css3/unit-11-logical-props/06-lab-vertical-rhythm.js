import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2VerticalRhythm = {
    id: 'css-unit11-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Vertical Rhythm',
    duration: '20 min',
    content: `
# Lab: Vertical Rhythm (Logical Shorthands)

## 1. The Concept: Efficient Axis Spacing
Architect, a common design task is to apply symmetrical padding to the top and bottom of a section without affecting the sides (or vice-versa). The legacy method involves writing \`padding-top\` and \`padding-bottom\` as separate declarations—a tedious and verbose approach.

We will implement **Logical Shorthands** (\`padding-block\` and \`padding-inline\`). These are not only faster to author but are fundamentally safer; they only modify specific axes without overwriting the cascade for other directions.

---

## 2. The Mission: The Nexus Profile Section
Your objective is to optimize the layout of a **Nexus Profile Module** using axis-based logical shorthands.

### Deployment Parameters:
1.  **Vertical Breathing**: Apply \`padding-block: 80px;\` to the \`.nexus-profile\` to establish a clean Top/Bottom buffer.
2.  **Horizontal Containment**: Apply \`padding-inline: 40px;\` to the same element for symmetrical side gutters.
3.  **Logical Centralization**: On the \`.content-frame\`, use \`margin-inline: auto;\` to center the block logically.

---

## 3. Machine Logic: Axis Abstraction
When you declare \`padding-block: 80px;\`, the browser mapping engine automatically assigns this to \`padding-top\` and \`padding-bottom\` (in standard horizontal mode). However, if the site's orientation shifts to vertical, these properties automatically pivot to control the physical Left and Right. This is the power of axis abstraction.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Cascading Safety**: \`padding-block\` exclusively targets the block axis. It will not touch or overwrite existing \`padding-inline\` values defined elsewhere. This promotes highly modular and atomic CSS.

> [!TIP]
> **Rythmic Integrity**: Use \`margin-block\` between headers and paragraphs to maintain a consistent "Vertical Rhythm" throughout your typography.
`,
    tasks: [
        {
            id: 1,
            description: 'The Block Buffer: On ".nexus-profile", add "padding-block: 80px;".',
            completed: false,
            regex: /\.nexus-profile\s*\{(?=[\s\S]*?padding-block\s*:\s*80px;?)[\s\S]*?\}/,
            hint: {
                concept: 'padding-block manages the start and end of the block axis (top and bottom) simultaneously.',
                strategy: 'Add the property to the main profile selector.',
                solution: 'padding-block: 80px;'
            }
        },
        {
            id: 2,
            description: 'The Inline Gutters: On the same selector, add "padding-inline: 40px;".',
            completed: false,
            regex: /\.nexus-profile\s*\{(?=[\s\S]*?padding-inline\s*:\s*40px;?)[\s\S]*?\}/,
            hint: {
                concept: 'padding-inline manages the start and end of the inline axis (left and right) logically.',
                strategy: 'Add the property alongside padding-block.',
                solution: 'padding-inline: 40px;'
            }
        },
        {
            id: 3,
            description: 'The Logical Pivot: On ".content-frame", add "margin-inline: auto;".',
            completed: false,
            regex: /\.content-frame\s*\{(?=[\s\S]*?margin-inline\s*:\s*auto;?)[\s\S]*?\}/,
            hint: {
                concept: 'margin-inline: auto is the logical alternative to margin: 0 auto for horizontal centering.',
                strategy: 'Update the margin property for the frame.',
                solution: 'margin-inline: auto;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS PROFILE MODULE - LOGICAL AXIS SYSTEM */
body {
    background: #000;
}

.nexus-profile {
    background: #0a0a0f;
    border: 1px solid #1a1a1e;
    /* 1 & 2. Implement axis-based logical padding below */

}

.content-frame {
    max-width: 900px;
    border: 1px dashed #4cc9f0;
    /* 3. Center this frame logically */

}

.profile-text {
    color: #4cc9f0;
    font-family: 'Space Mono', monospace;
    font-size: 1.1rem;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="viewport-wrapper" style="padding: 40px;">
    <section class="nexus-profile">
        <div class="content-frame">
            <div class="profile-text">
                <h2>IDENT_VERIFIED: ARCHITECT</h2>
                <p>Establishing logical spacing protocols for the Nexus AI Dashboard. All parameters are axis-locked for maximum performance.</p>
            </div>
        </div>
    </section>
</div>`
        }
    ]
};
