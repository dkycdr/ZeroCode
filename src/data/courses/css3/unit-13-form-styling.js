import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit13FormStyling = {
    id: 'css3-unit-13',
    title: 'Advanced Form Engineering',
    description: 'Forms are the primary way users interact with your app. Master custom inputs, validation feedback, and the famous Floating Label pattern.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit13-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Appearance Property',
            duration: '15 min read',
            content: `
# Deep Dive: The Appearance Property

## The "Why"
Different browsers render inputs differently. Safari's date picker looks different from Chrome's.
If you want **Total Control**, you must strip the native styling.

\`\`\`css
input {
  appearance: none; /* The Nuclear Option */
  -webkit-appearance: none;
}
\`\`\`

Once you do this, you are responsible for everything: Borders, Backgrounds, Focus states.

            `
        },
        {
            id: 'css-unit13-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Validity State Machines',
            duration: '15 min read',
            content: `
# Deep Dive: Validity State Machines

## The "Why"
You don't need JavaScript to show a red border when an email is invalid.
CSS has built-in verification hooks.

*   \`:valid\`: Matches when the value meets criteria (e.g., type="email").
*   \`:invalid\`: Matches when it fails.
*   \`:placeholder-shown\`: Matches when the input is empty (acting as the placeholder is visible). This is key for the "Floating Label" trick.

---

## The UX Pattern
Don't show \`:invalid\` immediately (it's annoying to see red borders while typing).
Use \`:not(:placeholder-shown):invalid\` to only show errors *after* the user has started typing.
            `
        },
        {
            id: 'css-unit13-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Input Hack (Switch)',
            duration: '20 min read',
            content: `
# Deep Dive: The Input Hack (Switch)

## The "Why"
How do you build an iPhone-style Toggle Switch? Using a Checkbox.

1.  **Hide the Checkbox**: \`opacity: 0\`.
2.  **Style the Label**: Make a "Track" (pill shape).
3.  **Style \`::after\`**: Make a "Thumb" (circle).
4.  **Animate**: When \`:checked\`, move the thumb.

\`\`\`css
input:checked + label::after {
  transform: translateX(100%);
}
\`\`\`
            `
        },
        {
            id: 'css-unit13-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Focus Rings',
            duration: '15 min read',
            content: `
# Deep Dive: Focus Rings

## The "Why"
Customizing specific inputs (like removing default blue rings) is dangerous for accessibility.
If you remove \`outline\`, you MUST provide a high-contrast alternative \`box-shadow\`.

\`\`\`css
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* Custom Ring */
}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit13-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Floating Label',
            duration: '30 min',
            content: `
## The Mission
Build the Material Design "Floating Label".
1.  Label sits inside the input.
2.  When you focus OR type, the label floats up to the top.

**Task:**
Use \`input:focus + label\` AND \`input:not(:placeholder-shown) + label\` to trigger the float transformation.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set custom color for the placeholder text to transparent (so it doesn\'t clash with our label).',
                    completed: false,
                    regex: /::placeholder\s*\{[\s\S]*?color\s*:\s*transparent\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Position label absolute: left 10px, top 10px.',
                    completed: false,
                    regex: /label\s*\{[\s\S]*?position\s*:\s*absolute\s*;?[\s\S]*?left\s*:\s*10px\s*;?[\s\S]*?top\s*:\s*10px\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Add a transition to the label for smooth movement (0.2s).',
                    completed: false,
                    regex: /label\s*\{[\s\S]*?transition\s*:\s*[\s\S]*?0\.2s[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Trigger 1: When input is focused, transform label translateY(-20px).',
                    completed: false,
                    regex: /input:focus\s*\+\s*label\s*\{[\s\S]*?transform\s*:\s*[\s\S]*?translateY\(-20px\)[\s\S]*?\}/
                },
                {
                    id: 5,
                    description: 'Trigger 2: When input has text (not placeholder-shown), keep the label floating.',
                    completed: false,
                    regex: /input:not\(:placeholder-shown\)\s*\+\s*label\s*\{[\s\S]*?transform\s*:\s*[\s\S]*?translateY\(-20px\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.group {
    position: relative;
    margin-top: 20px;
}

input {
    padding: 10px;
    width: 100%;
}

/* 1. Hide default placeholder */
input::placeholder { }

/* 2-3. Label Position & Transition */
label {
    /* Abs positioning here */
    pointer-events: none;
}

/* 4-5. The Float Trigger */
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="group">
    <input type="text" placeholder="Type here..." id="name">
    <label for="name">Full Name</label>
</div>`
                }
            ]
        },
        {
            id: 'css-unit13-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Custom Ratio Buttons',
            duration: '25 min',
            content: `
## The Mission
Native radio buttons are tiny. Build large, clickable cards that act as radio buttons.

**Task:**
1.  Hide the input.
2.  Style the label as a card.
3.  When checked, give the card a blue border.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Completely hide the native input (display: none).',
                    completed: false,
                    regex: /input\[type=['"]radio['"]\]\s*\{[\s\S]*?display\s*:\s*none\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Style label: border 2px solid #ddd, padding 20px, cursor pointer.',
                    completed: false,
                    regex: /label\s*\{[\s\S]*?border\s*:\s*2px\s+solid\s+#ddd\s*;?[\s\S]*?padding\s*:\s*20px\s*;?[\s\S]*?cursor\s*:\s*pointer\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'When checked, change label border color to #3b82f6 (blue).',
                    completed: false,
                    regex: /input:checked\s*\+\s*label\s*\{[\s\S]*?border-color\s*:\s*#3b82f6\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'When checked, change label text color to blue as well.',
                    completed: false,
                    regex: /input:checked\s*\+\s*label\s*\{[\s\S]*?color\s*:\s*#3b82f6\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 1. Hide Input */
input[type="radio"] {
    
}

/* 2. Style Label (Card) */
label {
    display: block;
    margin-bottom: 10px;
    border-radius: 8px;
    font-weight: bold;
}

/* 3-4. Checked State */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<input type="radio" name="plan" id="pro">
<label for="pro">Pro Plan ($20)</label>`
                }
            ]
        },
        {
            id: 'css-unit13-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Validation Feedback',
            duration: '20 min',
            content: `
## The Mission
Show a Green Checkmark icon when the email is valid.

**Task:**
1.  Use the \`:valid\` pseudo-class.
2.  Use the \`+ icon\` sibling selector to reveal the checkmark.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initially hide the .icon (opacity 0, transform scale 0).',
                    completed: false,
                    regex: /\.icon\s*\{[\s\S]*?opacity\s*:\s*0\s*;?[\s\S]*?transform\s*:\s*scale\(0\)\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Style the input when valid: border-color green.',
                    completed: false,
                    regex: /input:valid\s*\{[\s\S]*?border-color\s*:\s*green\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'When input matches :valid, fly the icon in (opacity 1, scale 1).',
                    completed: false,
                    regex: /input:valid\s*\~\s*\.icon\s*\{[\s\S]*?opacity\s*:\s*1\s*;?[\s\S]*?transform\s*:\s*scale\(1\)\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.wrapper { position: relative; }

.icon {
    position: absolute;
    right: 10px;
    top: 5px;
    color: green;
    transition: 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28); /* Bouncy */
    /* 1. Hide */

}

/* 2. Input Border */

/* 3. Reveal Icon */

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="wrapper">
    <input type="email" required placeholder="Enter email">
    <span class="icon">✓</span>
</div>`
                }
            ]
        },
        {
            id: 'css-unit13-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Range Sliders',
            duration: '25 min',
            content: `
## The Mission
Style a \`input[type="range"]\`.
This requires vendor-specific pseudo-elements (Webkit vs Moz).

**Task:**
Target \`::-webkit-slider-thumb\` to style the draggable knob.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Remove native appearance from the range input.',
                    completed: false,
                    regex: /input\[type=['"]range['"]\]\s*\{[\s\S]*?appearance\s*:\s*none\s*;?[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Set track height to 4px and background #ddd.',
                    completed: false,
                    regex: /input\[type=['"]range['"]\]\s*\{[\s\S]*?height\s*:\s*4px\s*;?[\s\S]*?background\s*:\s*#ddd\s*;?[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Style the -webkit-slider-thumb: appearance none, width 20px, height 20px, background red.',
                    completed: false,
                    regex: /::-webkit-slider-thumb\s*\{[\s\S]*?appearance\s*:\s*none\s*;?[\s\S]*?width\s*:\s*20px\s*;?[\s\S]*?background\s*:\s*red\s*;?[\s\S]*?\}/
                },
                {
                    id: 4,
                    description: 'Make the thumb rounded (border-radius 50%).',
                    completed: false,
                    regex: /::-webkit-slider-thumb\s*\{[\s\S]*?border-radius\s*:\s*50%\s*;?[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* 1-2. Track Styles */
input[type="range"] {
    
    width: 100%;
}

/* 3-4. Thumb Styles */
input[type="range"]::-webkit-slider-thumb {

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<input type="range" min="0" max="100">`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit13-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Form Mastery',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which property removes the default OS styling from an input?',
                    options: [
                        'display: none',
                        'appearance: none',
                        'style: none',
                        'border: 0'
                    ],
                    correctIndex: 1,
                    explanation: 'appearance: none (and its prefixes) strips the native look, allowing full customization.'
                },
                {
                    id: 'q2',
                    question: 'Which pseudo-class detects if an input has text inside it (even if not focused)?',
                    options: [
                        ':filled',
                        ':active',
                        ':not(:placeholder-shown)',
                        ':has-value'
                    ],
                    correctIndex: 2,
                    explanation: 'If the placeholder is NOT shown, it means the user has typed something (or the value is set).'
                },
                {
                    id: 'q3',
                    question: 'Why do we use the "Adjacent Sibling Combinator" (+) so often in forms?',
                    options: [
                        'It is faster',
                        'It allows the Input state (:checked, :focus) to style the Label next to it',
                        'It is required by HTML5',
                        'It selects the parent'
                    ],
                    correctIndex: 1,
                    explanation: 'Since CSS cannot select parents (yet), we rely on the input being first, and then styling the siblings based on the input state.'
                },
                {
                    id: 'q4',
                    question: 'What is `accent-color` useful for?',
                    options: [
                        'Changing text color',
                        'A quick way to tint native checkboxes and radios without rebuilding them',
                        'Changing the border',
                        'It does nothing'
                    ],
                    correctIndex: 1,
                    explanation: 'accent-color allows you to change the default blue of native controls to your brand color with one line of code.'
                },
                {
                    id: 'q5',
                    question: 'Which pseudo-class matches a valid email input?',
                    options: [
                        ':correct',
                        ':yes',
                        ':valid',
                        ':ok'
                    ],
                    correctIndex: 2,
                    explanation: 'input:valid matches when the value satisfies the type constraints (like email format or required).'
                }
            ]
        }
    ]
};
