import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1FloatingLabel = {
    id: 'css-unit13-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Floating Label',
    duration: '35 min',
    content: `
# Lab: The Floating Label (Interactive UX)

## 1. The Concept: Efficient Space
Architect, the "Floating Label" pattern is a hallmark of modern Material and SaaS design. It allows the label to act as a placeholder when the field is empty, but "floats" up out of the way once the user begins typing.

This preserves vertical space and ensures that the user never loses the context of what the field represents, even after they have entered data. We will achieve this purely through CSS using the \`:placeholder-shown\` state and the sibling selector.

---

## 2. The Mission: The Nexus Authentication Field
Your objective is to engineer the **Nexus Secure Input** using the floating label pattern.

### Deployment Parameters:
1.  **Ghosting**: Set the native placeholder to \`transparent\` using the \`::placeholder\` pseudo-element.
2.  **Absolute Positioning**: Position the \`<label>\` absolutely inside the \`.input-group\`, centered over the input.
3.  **The Trigger Logic**: When the input is **focused** OR when the **placeholder is NOT shown** (meaning there is text), transform the label.
4.  **Floating State**: Shift the label upwards (\`translateY(-24px)\`) and shrink its scale slightly (\`0.85\`).

---

## 3. Machine Logic: The Not-Shown Gate
The key selector is \`input:not(:placeholder-shown) + label\`. 
This tells the browser: *"If the user has entered even a single character, keep that label in the 'Floating' position so it doesn't collide with the typed text."*

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Pointer Interference**: Ensure you apply \`pointer-events: none;\` to the label. If you don't, clicking the label might block the click from reaching the input beneath it, frustrating the user.

> [!TIP]
> **Transition Polish**: Use a \`cubic-bezier(0.4, 0, 0.2, 1)\` transition for that "Butter Smooth" sliding effect found in premium applications.
`,
    tasks: [
        {
            id: 1,
            description: 'The Ghost Placeholder: Set "input::placeholder { color: transparent; }".',
            completed: false,
            regex: /input::placeholder\s*\{(?=[\s\S]*?color\s*:\s*transparent;?)[\s\S]*?\}/,
            hint: {
                concept: 'We hide the native placeholder so it doesn’t overlap with our custom label.',
                strategy: 'Target the ::placeholder pseudo-element.',
                solution: 'color: transparent;'
            }
        },
        {
            id: 2,
            description: 'The Neutral Layout: Set the "label" to "position: absolute;", "left: 16px;", and "top: 14px;".',
            completed: false,
            regex: /label\s*\{(?=[\s\S]*?position\s*:\s*absolute;?)(?=[\s\S]*?left\s*:\s*16px;?)(?=[\s\S]*?top\s*:\s*14px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The label must sit "inside" the input initially.',
                strategy: 'Use absolute positioning relative to the .input-group container.',
                solution: 'position: absolute; left: 16px; top: 14px;'
            }
        },
        {
            id: 3,
            description: 'The Focus Float: When "input:focus + label", set "transform: translateY(-24px) scale(0.85);".',
            completed: false,
            regex: /input:focus\s*\+\s*label\s*\{(?=[\s\S]*?transform\s*:\s*translateY\(-24px\)\s+scale\(0\.85\);?)[\s\S]*?\}/,
            hint: {
                concept: 'This moves the label up when the user clicks the field.',
                strategy: 'Use the adjacent sibling selector (+).',
                solution: 'transform: translateY(-24px) scale(0.85);'
            }
        },
        {
            id: 4,
            description: 'The Persistent Float: Apply the same transform when "input:not(:placeholder-shown) + label".',
            completed: false,
            regex: /input:not\(:placeholder-shown\)\s*\+\s*label\s*\{(?=[\s\S]*?transform\s*:\s*translateY\(-24px\)\s+scale\(0\.85\);?)[\s\S]*?\}/,
            hint: {
                concept: 'The label must stay up if the field still contains data after losing focus.',
                strategy: 'Use the :not and :placeholder-shown pseudo-classes.',
                solution: 'transform: translateY(-24px) scale(0.85);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS SECURE INPUT - FLOATING LABEL ENGINE */
.input-group {
    position: relative;
    margin-top: 40px;
}

input {
    width: 100%;
    padding: 14px 16px;
    background: #0a0a0f;
    border: 1px solid #1a1a1e;
    color: #4cc9f0;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    border-radius: 4px;
    outline: none;
}

/* 1. Hide default placeholder */

/* 2. Position the label as a placeholder */
label {
    color: #666;
    font-family: 'Space Mono', monospace;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

/* 3 & 4. Implement the float triggers below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; height: 100vh; padding: 100px;">
    <div class="input-group">
        <input type="text" id="access_key" placeholder="SEC_KEY_001" required>
        <label for="access_key">SECURITY_ACCESS_KEY</label>
    </div>
</div>`
        }
    ]
};
