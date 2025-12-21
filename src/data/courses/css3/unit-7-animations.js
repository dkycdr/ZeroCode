import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Animations = {
    id: 'css3-unit-7',
    title: 'Motion Physics: Transitions & Keyframes',
    description: 'Breathe life into static interactions. Master GPU acceleration, Bezier curves, and complex choreographed sequences.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'css-unit7-info-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Compositor Layer (GPU)',
            duration: '15 min read',
            content: `
# Deep Dive: The Compositor Layer (GPU)

## The "Why"

Not all CSS properties are equal. Animating \`margin-left\` feels "jerky", while animating \`transform: translateX\` feels "silky smooth".

This is physics.

---

## CPU vs GPU

The browser has two distinct rendering engines:

1.  **Main Thread (CPU)**: Handles Layout (Geometry). If you change \`width\` or \`margin\`, the CPU must recalculate the position of *every other element* on the page. This is expensive (Reflow).
2.  **Compositor (GPU)**: Handles "Pictures". If you use \`transform\` or \`opacity\`, the browser takes a photo of the element and hands it to the Graphics Card to move it. This is free.

## The Magic Properties

For 60FPS animations, you are legally allowed to animate ONLY these two properties:

1.  **Transform** (Scale, Rotate, Translate).
2.  **Opacity**.

Everything else causes a repaint.

---

## Summary

Don't move pixels (\`left: 10px\`). Move layers (\`translateX(10px)\`).
            `
        },
        {
            id: 'css-unit7-info-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Cubic Bezier Physics',
            duration: '20 min read',
            content: `
# Deep Dive: Cubic Bezier Physics

## The "Why"

Objects in the real world don't start moving instantly at full speed (\`linear\`). They accelerate and decelerate due to friction and mass.

Using \`ease-in-out\` makes your UI feel organic. Using \`linear\` makes it feel robotic.

---

## The Bezier Curve (P0, P1, P2, P3)

CSS transitions use a math curve defined by 4 control points.

\`\`\`css
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
\`\`\`

*   **Ease-Out**: Starts fast, slows down. (Good for entering the screen).
*   **Ease-In**: Starts slow, speeds up. (Good for exiting the screen).
*   **Spring**: Overshoots the target value slightly before settling.

---

## Summary

Animation isn't just about movement; it's about "Weight". A heavy modal should move differently than a lightweight tooltip.
            `
        },
        {
            id: 'css-unit7-info-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Transition vs Animation',
            duration: '15 min read',
            content: `
# Deep Dive: Transition vs Animation

## The "Why"

When do you use which?

**Transition**:
*   **Trigger**: Requires a state change (\`:hover\`, class change).
*   **Loops**: Cannot loop.
*   **Control**: A to B (Start to End). Simple.

**Animation (@keyframes)**:
*   **Trigger**: Auto-play on load (or state).
*   **Loops**: Infinite or defined count.
*   **Control**: A to B to C to D. Complex choreography.

---

## Architecture

Use \`transitions\` for UI feedback (Button clicks, Toggle switches).
Use \`animations\` for complex storytelling (Loading spinners, Hero entry sequences).

            `
        },
        {
            id: 'css-unit7-info-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Accessibility (prefers-reduced-motion)',
            duration: '15 min read',
            content: `
# Deep Dive: Accessibility (prefers-reduced-motion)

## The "Why"

Vestibular disorders (motion sickness) are real. Unexpected movement on a screen can make some users physically ill.

Operating systems (iOS, Windows) allow users to toggle "Reduce Motion". You MUST respect this preference.

---

## The Code

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

This snippet globally disables animations for users who asked for it. This is an "Elite" developer trait.

            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'css-unit7-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Micro-Interaction (Transition)',
            duration: '20 min',
            content: `
## The Mission

Create a "Save Button" that morphs when hovered.
1.  Background color change.
2.  Slight elevation (Shadow + Translate).

**Constraint**: Use \`transform\` for movement, not margins.

---

## Machine Logic

*   **duration**: How long? (0.2s is standard for UI).
*   **timing**: \`ease-out\` makes it feel responsive.
*   **property**: \`all\` is lazy. Explicitly list \`background-color, transform, box-shadow\` for performance.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set transition properties on .btn (0.3s ease).',
                    completed: false,
                    regex: /\.btn\s*\{[\s\S]*?transition\s*:\s*[\s\S]*?0\.3s\s+ease[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'On hover, translate Y up by -5px.',
                    completed: false,
                    regex: /\.btn:hover\s*\{[\s\S]*?transform\s*:\s*translateY\(-5px\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `.btn {
    background: #3b82f6;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    /* TODO: Add Transition */

}

.btn:hover {
    background: #2563eb;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    /* TODO: Add Lift Effect */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<button class="btn">Hover Me</button>`
                }
            ]
        },
        {
            id: 'css-unit7-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Infinite Spinner (Keyframes)',
            duration: '20 min',
            content: `
## The Mission

Build a loading spinner using CSS Keyframes.
1.  Define a rotation animation (0deg to 360deg).
2.  Apply it to a circle.
3.  Make it loop infinitely.

---

## Machine Logic

*   **from/to**: Aliases for 0% and 100%.
*   **linear**: Crucial here. If you use \`ease\`, the spinner will slow down at the end and look like a broken wheel.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define keyframes "spin" rotating from 0deg to 360deg.',
                    completed: false,
                    regex: /@keyframes\s+spin\s*\{[\s\S]*?to\s*\{[\s\S]*?transform\s*:\s*rotate\(360deg\)[\s\S]*?\}[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Apply animation to .loader: 1s linear infinite.',
                    completed: false,
                    regex: /\.loader\s*\{[\s\S]*?animation\s*:\s*spin 1s linear infinite[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Define Keyframes */
@keyframes spin {
    from { transform: rotate(0deg); }
    /* to... */
}

.loader {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    /* TODO: Apply Animation */

}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="loader"></div>`
                }
            ]
        },
        {
            id: 'css-unit7-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Staggered Entrance (Animation Delay)',
            duration: '25 min',
            content: `
## The Mission

Animate a list of items entering the screen.
Instead of them all appearing at once (boring), we want them to cascade in one by one.

**Task**:
1.  Create a \`slide-in\` animation.
2.  Use \`animation-play-state: paused\` initially? No, we use \`animation-fill-mode: forwards\`.
3.  Use \`nth-child\` to add increasing \`animation-delay\` to each item.

---

## Machine Logic

*   **forwards**: When the animation ends, stay at the end state (opacity 1). Don't snap back to opacity 0.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set items to opacity 0 initially and apply slide-in forwards.',
                    completed: false,
                    regex: /\.item\s*\{[\s\S]*?opacity\s*:\s*0[\s\S]*?animation\s*:\s*slide-in 0\.5s ease-out forwards[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Delay 2nd item by 0.1s.',
                    completed: false,
                    regex: /\.item:nth-child\(2\)\s*\{[\s\S]*?animation-delay\s*:\s*0\.1s[\s\S]*?\}/
                },
                {
                    id: 3,
                    description: 'Delay 3rd item by 0.2s.',
                    completed: false,
                    regex: /\.item:nth-child\(3\)\s*\{[\s\S]*?animation-delay\s*:\s*0\.2s[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `@keyframes slide-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.item {
    padding: 10px;
    background: #eee;
    margin-bottom: 5px;
    /* TODO: Set initial state and animation */

}

/* TODO: Stagger Delays */
.item:nth-child(1) { animation-delay: 0s; }


`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="list">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>`
                }
            ]
        },
        {
            id: 'css-unit7-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Heartbeat (Keyframe Percentages)',
            duration: '20 min',
            content: `
## The Mission

Create a pulsing "Notification Dot" or Heart icon.
This requires complex keyframes, not just "from/to".

**Task**:
1.  At 0% scale 1.
2.  At 50% scale 1.2 (Big).
3.  At 100% scale 1.

---

## Machine Logic

This creates a "throb" effect.
Using \`transform-origin: center\` is vital to ensure it grows from the middle, not the top-left corner.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define pulse keyframes with 0%, 50%, 100% steps.',
                    completed: false,
                    regex: /@keyframes\s+pulse\s*\{[\s\S]*?0%[\s\S]*?50%[\s\S]*?100%[\s\S]*?\}/
                },
                {
                    id: 2,
                    description: 'Scale to 1.2 at the 50% mark.',
                    completed: false,
                    regex: /50%\s*\{[\s\S]*?transform\s*:\s*scale\(1\.2\)[\s\S]*?\}/
                }
            ],
            files: [
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* TODO: Create the Pulse */
@keyframes pulse {
    0% { transform: scale(1); }
    /* 50% ? */
    100% { transform: scale(1); }
}

.heart {
    font-size: 50px;
    display: inline-block;
    color: red;
    animation: pulse 1s infinite ease-in-out;
}`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `
<div class="heart">❤️</div>`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'css-unit7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Assessment: Motion Physics',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which property is NOT GPU accelerated and causes expensive Layout Thrashing?',
                    options: [
                        'transform',
                        'opacity',
                        'margin-left',
                        'filter'
                    ],
                    correctIndex: 2,
                    explanation: 'Changing margins changes the geometry of the page, forcing the CPU to recalculate the position of neighbors. Transforms are isolated layers.'
                },
                {
                    id: 'q2',
                    question: 'What is the purpose of `animation-fill-mode: forwards`?',
                    options: [
                        'It plays the animation in reverse',
                        ' It speeds up the animation',
                        'It persists the final state of the animation (stops it from resetting)',
                        'It makes the animation loop'
                    ],
                    correctIndex: 2,
                    explanation: 'By default, when an animation ends, the element snaps back to its original CSS. Forwards freezes it at the 100% keyframe.'
                },
                {
                    id: 'q3',
                    question: 'Which timing function is strictly linear (no acceleration)?',
                    options: [
                        'ease-in',
                        'linear',
                        'cubic-bezier',
                        'ease-out'
                    ],
                    correctIndex: 1,
                    explanation: 'Linear speed is constant. It typically feels robotic and is used mostly for spinning loaders.'
                },
                {
                    id: 'q4',
                    question: 'How do you respect a user\'s choice to minimize motion sickness?',
                    options: [
                        '@media (prefers-reduced-motion: reduce)',
                        '@supports (motion: false)',
                        'user-scalable: no',
                        'display: static'
                    ],
                    correctIndex: 0,
                    explanation: 'This media query detects the OS-level setting for motion reduction and allows you to disable animations.'
                },
                {
                    id: 'q5',
                    question: 'What is the difference between Transition and Animation?',
                    options: [
                        'Transitions loop, Animations do not',
                        'Transitions require a trigger (state change), Animations can run automatically',
                        'Transitions are JavaScript, Animations are CSS',
                        'There is no difference'
                    ],
                    correctIndex: 1,
                    explanation: 'Transitions animate from A to B when a property changes. Keyframe Animations allow complex choreography independent of user interaction.'
                }
            ]
        }
    ]
};
