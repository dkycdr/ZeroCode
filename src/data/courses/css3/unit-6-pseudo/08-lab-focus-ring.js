import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4FocusRing = {
    id: 'css-unit6-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Focus Within Protocol',
    duration: '45 min',
    content: `
# Lab: The Focus Within Protocol

## 1. The Concept: Container Awareness
Architect, a common user pain point is filling out complex forms. If a user is typing their **Nexus Access Code**, the whole form section should react to acknowledge their focus, not just the tiny input box.

In this lab, you will master the **:focus-within** pseudo-class. This allows you to style a **parent element** based on the state of its **child**. It creates a much more immersive and high-tech feel for your applications.

---

## 2. The Mission: The Security Clearance Vault
You are building the **Authentication Terminal**:
1.  **Group Detection**: Use \`:focus-within\` on the \`.auth-group\` class.
2.  **Parent Glow**: When a user clicks any input inside the group, make the background turn vibrant cyan (\`#4cc9f0\`).
3.  **Text Shift**: Change the label color inside the focused group to \`white\` to ensure readability.

---

## 3. Senior Guidance: Interactive Proximity
Using \`:focus-within\` is better than using JavaScript because it is CSS-native, meaning it works instantly and follows the browser's Accessibility tree. It provides clear visual feedback to keyboard users, helping them understand exactly where they are on the page.

> [!CAUTION]
> **Performance Warning**: Be careful when applying complex animations to \`:focus-within\` on large containers, as it can trigger a "Re-layout" of the entire section when the user tabs through. Keep the effects subtle.
`,
    tasks: [
        {
            id: 1,
            description: 'The Parent Sensor: On ".auth-group:focus-within", set "border-color: #4cc9f0;" and "background: rgba(76, 201, 240, 0.05);".',
            completed: false,
            regex: /\.auth-group:focus-within\s*\{(?=[\s\S]*?border-color\s*:\s*#4cc9f0;?)(?=[\s\S]*?background\s*:\s*rgba\(\s*76\s*,\s*201\s*,\s*240\s*,\s*0\.05\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'focus-within triggers when any child element (like an input) is focused.',
                strategy: 'Apply this to the wrapper .auth-group.',
                solution: 'border-color: #4cc9f0; background: rgba(76, 201, 240, 0.05);'
            }
        },
        {
            id: 2,
            description: 'The Highlight Shift: Target ".auth-group:focus-within label" and set "color: #4cc9f0;" and "font-weight: bold;".',
            completed: false,
            regex: /\.auth-group:focus-within\s+label\s*\{(?=[\s\S]*?color\s*:\s*#4cc9f0;?)(?=[\s\S]*?font-weight\s*:\s*bold;?)[\s\S]*?\}/,
            hint: {
                concept: 'We can target children of the focused container.',
                strategy: 'Use a descendant selector inside the focus-within rule.',
                solution: '.auth-group:focus-within label { color: #4cc9f0; font-weight: bold; }'
            }
        },
        {
            id: 3,
            description: 'The Input Glow: Targeted ".auth-group input:focus", set "outline: none;" and "border-bottom: 2px solid #4cc9f0;".',
            completed: false,
            regex: /\.auth-group\s+input:focus\s*\{(?=[\s\S]*?outline\s*:\s*none;?)(?=[\s\S]*?border-bottom\s*:\s*2px\s+solid\s+#4cc9f0;?)[\s\S]*?\}/,
            hint: {
                concept: 'We are replacing the default browser outline with our own high-tech highlight.',
                strategy: 'Since focus-within handles the group, we handle the specific input here.',
                solution: 'outline: none; border-bottom: 2px solid #4cc9f0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS AUTHENTICATION VAULT */
body {
    background: #000;
    padding: 60px;
    font-family: 'Inter', sans-serif;
}

.auth-group {
    border: 1px solid #333;
    padding: 30px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

label {
    display: block;
    color: #666;
    margin-bottom: 15px;
    font-size: 12px;
    letter-spacing: 2px;
}

input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
    color: white;
    width: 100%;
    font-size: 18px;
    padding: 10px 0;
}

/* 1, 2. Focus-Within Logic here */

/* 3. Input Focus Logic here */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="auth-group">
    <label>ACCESS_CODE_ALPHA</label>
    <input type="password" placeholder="••••••••">
</div>

<div class="auth-group">
    <label>NEURAL_ENCRYPTION_KEY</label>
    <input type="text" placeholder="SEC-004-949">
</div>`
        }
    ]
};
