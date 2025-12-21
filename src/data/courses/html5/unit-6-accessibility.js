import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Accessibility = {
    id: 'html5-unit-6',
    title: 'Accessibility (A11y) - Web for Everyone',
    description: 'Learn to build inclusive websites. Master semantic HTML, focus management, ARIA roles, and accessible forms.',
    items: [
        {
            id: 'html5-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The Core Pillars of Accessibility',
            duration: '15 min read',
            content: `
# Accessibility (A11y): Web for Everyone

Accessibility (often abbreviated as **A11y**) is not an "extra feature" to add later; it is the fundamental quality of a robust web. It ensures that your website can be used by everyone, regardless of their hardware, software, language, location, or ability.

## 1. The Why: The "Curb Cut" Effect
Designing for disabilities often results in better designs for everyone. This is known as the **Curb Cut Effect**: sidewalk ramps were designed for wheelchair users but help people with strollers, heavy suitcases, or delivery carts.

On the web, A11y helps in three contexts:
*   **Permanent:** A blind user using a Screen Reader (like NVDA or VoiceOver).
*   **Temporary:** A user with a broken arm who currently cannot use a mouse.
*   **Situational:** A user browsing on a bright beach (low contrast visibility) or holding a baby (one-handed navigation).

## 2. The Core Weapon: Semantic HTML
The most effective way to ensure accessibility is to use **Semantic HTML**. Browsers translate your HTML element into an **Accessibility Tree** that assistive technologies read.

### The "Button" vs. "Div" War
Why is \`<button>\` better than \`<div onclick="...">\`?

| Feature | \`<button>\` | \`<div onclick>\` |
| :--- | :--- | :--- |
| **Focusable?** | ✅ Yes, via Tab key. | ❌ No (skipped by keyboard). |
| **Role?** | ✅ Announced as "Button". | ❌ No role (silent). |
| **Keys?** | ✅ Enter & Spacebar work. | ❌ Mouse click only. |

**The Golden Rule:** Use the correct element for the job. Do not reinvent the wheel with \`div\` soup.

## 3. The Art of Alt Text
Every image (\`<img>\`) **must** have an \`alt\` attribute, but the content depends on the context.

*   **Informative Images**: Convey meaning.
    *   *Code:* \`<img src="chart.png" alt="Sales increased by 20% in Q4">\`
    *   *Rule:* Describe the **information**, not just the visual ("Chart of sales" is too vague).
*   **Functional Images**: Act as links or buttons.
    *   *Code:* \`<img src="icon-search.png" alt="Search Website">\`
    *   *Rule:* Describe the **action**, not the icon appearance ("Magnifying glass" is wrong).
*   **Decorative Images**: Visual fluff (borders, background patterns).
    *   *Code:* \`<img src="divider.png" alt="">\` (Empty string).
    *   *Rule:* Tells screen readers to **ignore** this image completely.

## 4. Focus Management (The Blue Ring)
For keyboard users, the **Focus Outline** is their cursor. It shows them where they are on the page.

\`\`\`css
/* ⛔ NEVER DO THIS */
:focus {
    outline: none;
}
\`\`\`
Reducing the outline to "none" is like turning off the lights in a room. If you don't like the default blue ring, **replace** it with a custom style (e.g., \`outline: 2px dashed red\`), but never remove it entirely.

## 5. ARIA Basics: The Last Resort
**ARIA (Accessible Rich Internet Applications)** is a set of attributes (like \`aria-label\`, \`role\`, \`aria-expanded\`) that bridge gaps when HTML falls short.

**The First Rule of ARIA:**
> "The best ARIA is no ARIA at all."

If a native HTML element acts the way you need, use it. Only use ARIA for complex, custom widgets (like tabs, modals, or tree-views) that standard HTML cannot build alone.
            `
        },
        {
            id: 'html5-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Fixing a Broken Form',
            duration: '20 min',
            content: `
# Fix the "Inaccessible" Form

In this workshop, you will refactor a form that is completely unusable for screen reader users and keyboard navigators.

## Key Concept: The Label-Input Connection
Visually, putting text next to a box makes sense. But digitally, they are disconnected. You must programmatically link them.

### Why link them?
1.  **Screen Readers:** When the input gets focus, the reader announces the label text ("Email Address, edit text"). Without this, it just says "Edit text", leaving the user guessing.
2.  **Mouse Users:** Clicking the **Label text** will automatically move focus to the input box, creating a larger "hit target" for users with shaky hands.

\`\`\`html
<!-- The 'for' MUST match the 'id' exactly -->
<label for="user-email">Email:</label>
<input type="email" id="user-email">
\`\`\`

## Your Tasks
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add specific, descriptive alt text to the company logo image.',
                    completed: false,
                    regex: /<img[^>]*alt=["'](?!["'])([^"']+)["'][^>]*>/i
                },
                {
                    id: 2,
                    description: 'Connect the "Full Name" label to its input. Ensure the Label "for" attribute exactly matches the Input "id".',
                    completed: false,
                    regex: /<label\s+for=["'](?<name_id>[^"']+)["']>[\s\S]*?<\/label>[\s\S]*?<input[^>]*id=["']\k<name_id>["'][^>]*>/i
                },
                {
                    id: 3,
                    description: 'Replace the generic <div> used as a submit button with a semantic <button> element.',
                    completed: false,
                    regex: /<button[^>]*>[\s\S]*?<\/button>/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>A11y Fix Challenge</title>
</head>
<body>
    <header>
        <!-- Task 1: Add descriptive alt text (e.g., "TechCorp Logo") -->
        <img src="logo.png">
    </header>

    <form>
        <div class="field">
            <!-- Task 2: Connect this label to the input using for="id" -->
            <label>Full Name</label>
            <input type="text" id="name-field">
        </div>

        <!-- Task 3: Replace this div with a real <button> element -->
        <div class="submit-btn" onclick="alert('Sent!')">Register Now</div>
    </form>
</body>
</html>`
                }
            ]
        },
        {
            id: 'html5-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Accessibility Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does the term "A11y" stand for?',
                    options: ['Access for All 11', 'Accessibility', 'Always Active 11', 'Advanced HTML 11'],
                    correctIndex: 1,
                    explanation: 'A11y is a numeronym for "Accessibility", representing the letter A, followed by 11 letters, ending with y.'
                },
                {
                    id: 'q2',
                    question: 'What is the specific purpose of an empty alt attribute (alt="")?',
                    options: [
                        'To tell the browser the image is broken',
                        'To improve SEO ranking',
                        'To tell Screen Readers efficiently to ignore the image (decorative)',
                        'It is an error and should be removed'
                    ],
                    correctIndex: 2,
                    explanation: 'An empty alt attribute explicitly marks an image as decorative, preventing screen readers from reading the filename or redundant information.'
                },
                {
                    id: 'q3',
                    question: 'Why is setting "outline: none" on focused elements considered a bad practice?',
                    options: [
                        'It slows down page rendering',
                        'It leaves keyboard users "blind" to which element they are currently interacting with',
                        'It messes up the color scheme',
                        'It is deprecated in HTML5'
                    ],
                    correctIndex: 1,
                    explanation: 'The focus outline acts as a visual cursor for keyboard users. Removing it makes navigation nearly impossible for them.'
                }
            ]
        }
    ]
};
