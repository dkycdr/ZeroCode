import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Typography = {
    id: 'css3-unit-5',
    title: 'Advanced Typography & Loading Strategy',
    description: 'Text is 90% of the web. Master loading performance, variable fonts, and strict vertical rhythm.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit5-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Browser Rendering & FOIT/FOUT',
            duration: '15 min read',
            content: `
# Deep Dive: Browser Rendering & FOIT/FOUT

## The "Why"

Loading a custom font (like "Inter" or "Roboto") requires a network request. This creates a race condition: The browser has the text content *ready*, but it doesn't have the *shape* of the letters yet.

How the browser handles this gap determines the "Perceived Performance" of your site.

---

## The Default Behavior (FOIT)

Most browsers default to **FOIT** (Flash of Invisible Text).

1.  Browser parsing HTML... finds \`<h1>Hello</h1>\`.
2.  Browser sees \`font-family: 'MyCoolFont'\`.
3.  Browser checks cache... font is missing.
4.  **Action**: It hides the text (opacity: 0) for up to 3 seconds while waiting.

**Result**: Users stare at a blank screen. This is a terrible UX.

---

## The Better Way (FOUT)

**FOUT** (Flash of Unstyled Text) means showing a system font (Arial/Times) *immediately*, then swapping it when the real font loads.

We control this via the \`font-display\` descriptor.

\`\`\`css
@font-face {
  font-family: 'MyCoolFont';
  src: url('myfont.woff2');
  font-display: swap; /* <--- The Magic */
}
\`\`\`

*   **swap**: "Show fallback text immediately. Swap when ready."
*   **block**: "Hide text for 3s (Default)."
*   **optional**: "If it takes too long, just give up and keep the fallback forever."

---

## Summary

Always use \`font-display: swap\` unless the font is critical for an icon set. Text visibility > Brand aesthetics.
            `
        },
        {
            id: 'css-unit5-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Typesetting Stack',
            duration: '20 min read',
            content: `
# Deep Dive: The Typesetting Stack

## The "Why"

You never ask for just *one* font. You ask for a **Stack**.

The \`font-family\` property is actually a prioritized list of fallbacks. If the user is on Linux, they won't have "Helvetica". If they are on Android, they might not have "San Francisco".

---

## The Anatomy of a Robust Stack

\`\`\`css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
\`\`\`

1.  **Primary**: \`'Inter'\` (The font you want).
2.  **OS Natives**:
    *   \`-apple-system\`: San Francisco (Mac/iOS).
    *   \`BlinkMacSystemFont\`: Chrome's UI font.
    *   \`'Segoe UI'\`: Windows standard.
    *   \`Roboto\`: Android standard.
3.  **Generic**: \`sans-serif\` (The catch-all safety net).

---

## Machine Logic

The browser iterates through this list character-by-character.

If you have a customized emoji or glyph that "Inter" doesn't support, the browser will look at the next font in the stack *just for that one character*.

---

## Summary

A good stack feels "native" while the custom font loads, minimizing the jarring layout shift.
            `
        },
        {
            id: 'css-unit5-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Vertical Rhythm & Line-Height',
            duration: '15 min read',
            content: `
# Deep Dive: Vertical Rhythm & Line-Height

## The "Why"

Horizontal spacing is easy. Vertical alignment is where design systems fall apart.

**Vertical Rhythm** is the concept that the spacing between elements should follow a consistent pattern (e.g., a 4px or 8px baseline grid).

---

## The Magic Number: 1.5

For body text, a \`line-height\` of \`1.5\` (unitless) is the gold standard for readability.

*   **Bad**: \`line-height: 24px\` (Fixed). If the user increases font size, lines crash.
*   **Good**: \`line-height: 1.5\` (Relative). It scales automatically.

## Heading Tightness

Headings are large (\`3rem+\`). If you give them \`line-height: 1.5\`, the gap between lines becomes massive and they look disconnected.

**Rule of Thumb**: As font size increases, line-height decreases.
*   Body: 1.5
*   H1: 1.1 or 1.2

---

## Summary

Text density controls the "Vibe". Open spacing = Relaxed/Prestige. Tight spacing = Urgent/Information-Dense.
            `
        },
        {
            id: 'css-unit5-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Variable Fonts',
            duration: '20 min read',
            content: `
# Deep Dive: Variable Fonts

## The "Why"

Traditionally, if you wanted "Regular", "Bold", and "Italic", you had to download **3 separate files**.

**Variable Fonts** (\`.woff2\`) are a single file that contains *every* weight, width, and slant interpolated mathematically.

---

## The Axes

We don't just set \`font-weight: 700\`. We can set \`font-weight: 542\`.

Common Standard Axes:
*   **wght** (Weight): Thin (100) to Black (900).
*   **wdth** (Width): Condensed to Expanded.
*   **slnt** (Slant): Angle of the text.

\`\`\`css
h1 {
  font-variation-settings: 'wght' 750, 'wdth' 80;
}
\`\`\`

---

## Performance Impact

One variable font file might be 40KB.
Three static font files might be 20KB + 20KB + 20KB = 60KB.

Not only is it smaller, but it allows for smooth animations (bolding text on hover without a jump).

---

## Summary

Variable fonts are the standard for modern, high-performance web typography.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Google Fonts Integration',
            duration: '20 min',
            content: `
## The Mission

We need to import the "Roboto" font from Google Fonts and apply it to the body.

**Task:**
1.  Import the font using the \`@import\` syntax (for simplicity in this lab).
2.  Apply it to the \`body\`.
3.  Add a generic fallback.

---

## Machine Logic

*   **@import vs <link>**: In production, \`<link>\` in the HTML head is faster because it allows parallel downloading. \`@import\` inside CSS blocks the CSS parser until the font CSS is downloaded.
*   **Weights**: We are requesting weights 400 (Regular) and 700 (Bold).

---

## Senior Warnings

> **Quotes**: Font names with spaces (e.g., "Open Sans") MUST be wrapped in quotes. Font names without spaces (Roboto) don't strictly need them, but consistency is good.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Roboto (400, 700) from Google Fonts.',
                    completed: false,
                    regex: /@import\s+url\(['"]?https:\/\/fonts\.googleapis\.com.+family=Roboto.+['"]?\);?/
                },
                {
                    id: 2,
                    description: 'Apply "Roboto" with a sans-serif fallback to the body.',
                    completed: false,
                    regex: /body\s*\{[\s\S]*?font-family\s*:\s*['"]?Roboto['"]?,\s*sans-serif\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Import the Font */


/* TODO: Apply to Body */

h1 { font-weight: 700; }
p { font-weight: 400; }`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<body>
    <h1>Typography Test</h1>
    <p>This should be rendered in Roboto.</p>
</body>`
                }
            ]
        },
        {
            id: 'css-unit5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Establishing Hierarchy',
            duration: '20 min',
            content: `
## The Mission

A text-heavy article looks boring. We need to establish **Visual Hierarchy** using size, weight, and casing.

**Task:**
1.  **H1**: Massive (3rem), Heavy (800), Tight Line-Height (1.1).
2.  **Subtitle**: Uppercase, tracked out (letter-spacing), small but bold.
3.  **Body**: Readable (1rem), Line-Height (1.6), darker gray for contrast.

---

## Design Theory

*   **Contrast**: Is the difference between the most important and least important elements clear?
*   **Tracking**: Uppercase letters read better with extra space (\`letter-spacing: 0.05em\`).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Style h1: font-size 3rem, weight 800, line-height 1.1.',
                    completed: false,
                    regex: /h1\s*\{[\s\S]*?font-size\s*:\s*3rem\s*;?[\s\S]*?font-weight\s*:\s*800\s*;?[\s\S]*?line-height\s*:\s*1\.1\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Style .subtitle: uppercase, letter-spacing 0.1em.',
                    completed: false,
                    regex: /\.subtitle\s*\{[\s\S]*?text-transform\s*:\s*uppercase\s*;?[\s\S]*?letter-spacing\s*:\s*0\.1em\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create Hierarchy */

h1 {
    /* Big & Heavy */

}

.subtitle {
    font-size: 0.875rem;
    color: #666;
    font-weight: 700;
    /* Uppercase & Spaced */

}

p {
    line-height: 1.6;
    color: #333;
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<article>
    <div class="subtitle">Design Systems</div>
    <h1>The Art of Typography</h1>
    <p>Typography is the voice of your design. It speaks louder than words.</p>
</article>`
                }
            ]
        },
        {
            id: 'css-unit5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Truncation (The Ellipsis)',
            duration: '15 min',
            content: `
## The Mission

You have a card design, but the title is too long and breaks the layout.
Instead of letting it wrap to a second line, you want to cut it off with "..."

**Task:** Implement CSS Truncation. This requires 3 specific properties working together.

---

## The Recipe

1.  \`white-space: nowrap\` (Foundce text to 1 line).
2.  \`overflow: hidden\` (Hide the overflow).
3.  \`text-overflow: ellipsis\` (Add the dots).

---

## Machine Logic

If you forget \`overflow: hidden\`, the text will just shoot out of the container. If you forget \`nowrap\`, it will just wrap to the next line. All 3 are mandatory.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Make .card-title truncate with an ellipsis (...).',
                    completed: false,
                    regex: /\.card-title\s*\{(?=[\s\S]*?white-space\s*:\s*nowrap)(?=[\s\S]*?overflow\s*:\s*hidden)(?=[\s\S]*?text-overflow\s*:\s*ellipsis)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.card { width: 200px; border: 1px solid #ccc; padding: 10px; }

.card-title {
    /* TODO: Truncate this text */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="card">
    <h3 class="card-title">This is a very long title that should not wrap</h3>
</div>`
                }
            ]
        },
        {
            id: 'css-unit5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Variable Font Axes',
            duration: '20 min',
            content: `
## The Mission

We are using a Variable Font. We want to animate the **Weight** on hover, but not just "Bold". We want a specific, custom weight.

**Task:**
1.  Set the default weight to 350.
2.  On hover, smoothly transition the weight to 650.

---

## Machine Logic

Standard CSS fonts use increments of 100 (400, 500, 600).
Variable fonts theoretically support \`1.00\` to \`999.00\`. This allows for micro-adjustments to improve legibility on different backgrounds (e.g., slightly bolder text on dark mode).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set initial font-weight to 350.',
                    completed: false,
                    regex: /\.variable-text\s*\{[\s\S]*?font-weight\s*:\s*350\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'On hover, transition font-weight to 650.',
                    completed: false,
                    regex: /\.variable-text:hover\s*\{[\s\S]*?font-weight\s*:\s*650\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `@font-face {
    font-family: 'Inter var';
    src: url('inter-var.woff2') format('woff2-variations');
    font-weight: 100 900;
}

.variable-text {
    font-family: 'Inter var', sans-serif;
    font-size: 2rem;
    transition: font-weight 0.3s ease;
    /* TODO: Set initial weight */

}

/* TODO: Set hover weight */
.variable-text:hover {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="variable-text">Hover Me</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Typographic Science',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is FOUT?',
                    options: [
                        'Flash of Unstyled Text',
                        'Font Over User Text',
                        'Flash of Invisible Text',
                        'Font Outdated Type'
                    ],
                    correctIndex: 0,
                    explanation: 'FOUT happens when the browser shows the fallback font immediately while the custom font is downloading, preventing blank text.'
                },
                {
                    id: 'q2',
                    question: 'Which `font-display` value is best for ensuring text is ALWAYS readable, even if the font is slow?',
                    options: [
                        'block',
                        'swap',
                        'hidden',
                        'auto'
                    ],
                    correctIndex: 1,
                    explanation: 'Swap tells the browser to use the fallback font immediately and then swap in the custom font once it loads. No invisible text.'
                },
                {
                    id: 'q3',
                    question: 'What is the recommended unitless line-height for body text?',
                    options: [
                        '1.0',
                        '1.2',
                        '1.5',
                        '24px'
                    ],
                    correctIndex: 2,
                    explanation: '1.5 ensures there is enough breathing room between lines for the eye to track back to the start of the next line comfortably.'
                },
                {
                    id: 'q4',
                    question: 'Why do we list multiple fonts in `font-family`?',
                    options: [
                        'To look professional',
                        'They are backups (Fallbacks) in case the user does not have the first one',
                        'To combine them into one new super-font',
                        'CSS requires at least 3 fonts'
                    ],
                    correctIndex: 1,
                    explanation: 'The browser goes down the list. If it can\'t find the first one on the styling device, it tries the second.'
                },
                {
                    id: 'q5',
                    question: 'Which CSS property creates the "..." at the end of truncated text?',
                    options: [
                        'overflow: dots',
                        'white-space: ellipsis',
                        'text-overflow: ellipsis',
                        'content: "..."'
                    ],
                    correctIndex: 2,
                    explanation: 'text-overflow: ellipsis is responsible for rendering the dots, but it only works if white-space: nowrap and overflow: hidden are also set.'
                }
            ]
        }
    ]
};
