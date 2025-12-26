import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2HeroHeadline = {
    id: 'css-unit5-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Hero Headline',
    duration: '40 min',
    content: `
# Lab: The Hero Headline

## 1. The Concept: Visual Authority
Architect, the first thing a user sees on the **Nexus HQ Portal** is the Hero Headline. It must be bold, authoritative, and perfectly balanced.

In this lab, you will move beyond simple font sizes. You will master **Font Weights** and **Letter Spacing** to create a high-fidelity typographic lockup. You will also use **rem** units to ensure your headline scales perfectly with the rest of the layout.

---

## 2. The Mission: The Command Header
You must style the **Mission Briefing Title**:
1.  **Massive Scale**: Set the \`h1\` to \`4rem\` (precisely 64px if base is 16px).
2.  **Industrial Weight**: Use \`font-weight: 900\` to give it maximum visual impact.
3.  **The Tech Spacer**: Add a subtle \`letter-spacing: 2px\` to make it look like a high-end technical interface.

---

## 3. Senior Guidance: Rem vs Pixels
Why 4rem? If you use \`64px\`, and the user zooms in or changes their system font size, your headline will become out of proportion. If you use \`4rem\`, it will always be exactly 4 times the size of the base text, maintaining the "Balance" you designed.

> [!TIP]
> **Pro Tip**: Dark backgrounds make text appear slightly thicker than light backgrounds. If you are designing for a Dark Mode UI like Nexus, you might occasionally drop the font-weight slightly (from 700 to 600) to keep the same visual feel.
`,
    tasks: [
        {
            id: 1,
            description: 'The Giant Title: Set ".hero-title" to "font-size: 4rem;".',
            completed: false,
            regex: /\.hero-title\s*\{(?=[\s\S]*?font-size\s*:\s*4rem;?)[\s\S]*?\}/,
            hint: {
                concept: '4rem provides a strong hierarchy against body text.',
                strategy: 'Update font-size.',
                solution: 'font-size: 4rem;'
            }
        },
        {
            id: 2,
            description: 'The Heavy Weight: Set ".hero-title" to "font-weight: 900;".',
            completed: false,
            regex: /\.hero-title\s*\{(?=[\s\S]*?font-weight\s*:\s*900;?)[\s\S]*?\}/,
            hint: {
                concept: '900 is the Black/Extra-Bold weight in CSS.',
                strategy: 'Update font-weight.',
                solution: 'font-weight: 900;'
            }
        },
        {
            id: 3,
            description: 'The Tech Finish: Add "letter-spacing: 2px;" to the title.',
            completed: false,
            regex: /\.hero-title\s*\{(?=[\s\S]*?letter-spacing\s*:\s*2px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Letter spacing is also known as "tracking" in typography.',
                strategy: 'This gives it a more industrial, modern feel.',
                solution: 'letter-spacing: 2px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS HERO TYPOGRAPHY */
body {
    background: #020205;
    color: white;
    padding: 80px;
    font-family: 'Inter', sans-serif;
}

.hero-title {
    color: #4cc9f0;
    line-height: 1.1;
    margin: 0;
    text-transform: uppercase;
}

.sub-title {
    color: #666;
    font-size: 1.2rem;
    margin-top: 10px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<h1 class="hero-title">Nexus_Operations</h1>
<div class="sub-title">System status: All sectors green. Phase 4 initiated.</div>`
        }
    ]
};
