import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2DarkModeEngine = {
    id: 'css-unit8-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Dark Mode Engine',
    duration: '45 min',
    content: `
# Lab: The Dark Mode Engine

## 1. The Concept: Environmental Adaptation
Architect, the Nexus console must be usable in both bright laboratories and dark server rooms. Instead of creating a whole new stylesheet for "Light Mode," we will use **Theming Variables**.

In this lab, you will master the \`prefers-color-scheme\` media query. You will define a set of **Semantic Tokens** (\`--bg\`, \`--text\`) and swap their values based on the user's system settings. This is how modern production apps handle theming with zero effort.

---

## 2. The Mission: The Light-to-Dark Protocol
1.  **Default Theme (Light)**: Define \`--app-bg: #ffffff;\` and \`--app-text: #000000;\` in \`:root\`.
2.  **OS Handshake**: Add a \`@media (prefers-color-scheme: dark)\` query.
3.  **The Swap**: Inside that media query, redefine \`--app-bg: #05050a;\` and \`--app-text: #ffffff;\`.

---

## 3. Senior Guidance: The Logic of Toggles
By using variables, you make the system "Dumb" in the best way possible. The components don't care if it's light or dark; they just use \`var(--app-bg)\`. The responsibility for the theme is centralized in the \`:root\` where it belongs.

> [!TIP]
> **Pro Tip**: Use the **Rendering** tab in your browser DevTools to force your browser into "Dark" or "Light" mode to test your logic instantly!
`,
    tasks: [
        {
            id: 1,
            description: 'The Defaults: Inside ":root", define "--bg: #fff;" and "--text: #000;".',
            completed: false,
            regex: /:root\s*\{(?=[\s\S]*?--bg\s*:\s*#fff;?)(?=[\s\S]*?--text\s*:\s*#000;?)[\s\S]*?\}/,
            hint: {
                concept: 'These are your default "Light Mode" values.',
                strategy: 'Define them in the top-level :root.',
                solution: ':root { --bg: #fff; --text: #000; }'
            }
        },
        {
            id: 2,
            description: 'The Listener: Create a "@media (prefers-color-scheme: dark)" block.',
            completed: false,
            regex: /@media\s*\(\s*prefers-color-scheme\s*:\s*dark\s*\)\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'This media query listens to the OS-level theme preference.',
                strategy: 'Open the media query block.',
                solution: '@media (prefers-color-scheme: dark) { ... }'
            }
        },
        {
            id: 3,
            description: 'The Dark Swap: Inside the media query, set ":root { --bg: #000; --text: #fff; }".',
            completed: false,
            regex: /@media\s*\(\s*prefers-color-scheme\s*:\s*dark\s*\)\s*\{[\s\S]*?:root\s*\{(?=[\s\S]*?--bg\s*:\s*#000;?)(?=[\s\S]*?--text\s*:\s*#fff;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'We redefine the SAME variables so the rest of the CSS stays unchanged.',
                strategy: 'Update the variable values inside the media query scope.',
                solution: ':root { --bg: #000; --text: #fff; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS THEME ENGINE */

/* 1. Define Defaults */

/* 2, 3. Handle Dark Mode Swap */

body {
    background: var(--bg);
    color: var(--text);
    padding: 80px;
    font-family: sans-serif;
    transition: background 0.5s, color 0.5s; /* Smooth theme transition */
}

.card {
    border: 1px solid var(--text);
    padding: 20px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="card">
    <h2>ENVIRONMENT_ADAPTATION</h2>
    <p>The system theme will automatically pivot based on your OS settings (Solar / Midnight).</p>
</div>`
        }
    ]
};
