
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Advanced = {
    id: 'tailwind-unit-3',
    title: 'Unit 3: States & Interactivity',
    description: 'Static UIs are boring. Make your interface come alive with Hover, Focus, and Active states. Master the "Group" and "Peer" modifiers for complex interactions.',
    items: [
        // 1. Deep Dive: Pseudo-Classes
        {
            id: 'tailwind-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: State Modifiers 🖱️',
            duration: '15 min read',
            content: `
# Deep Dive: State Modifiers 🖱️

## 1. The Interaction Paradigm
In standard CSS, you write a separate block for interactions:
\`\`\`css
.btn { background: blue; }
.btn:hover { background: darkblue; }
.btn:active { background: black; }
\`\`\`

In Tailwind, you specificy the state *prefix* directly on the element.
\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 active:bg-black">
  Click Me
</button>
\`\`\`

## 2. Common States
| Prefix | Trigger | Use Case |
| :--- | :--- | :--- |
| \`hover:\` | Mouse over | Buttons, Links, Cards |
| \`focus:\` | Keyboard/Click | Inputs, Textareas |
| \`active:\` | Mouse click | Buttons (Click feel) |
| \`disabled:\` | Disabled attr | Form Submit Buttons |

## 3. Stacking Modifiers
You can combine modifiers!
*   \`md:hover:bg-red-500\`: Only apply red background on hover IF screen is medium or larger.
*   \`dark:focus:border-white\`: Only white border on focus IF in dark mode.

> [!TIP]
> Order matters less than specificity, but standard convention is:
> \`base-style\` -> \`responsive\` -> \`states\` -> \`dark-mode\`.
            `
        },
        // 2. Deep Dive: Group & Peer
        {
            id: 'tailwind-3-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Group & Peer 👯',
            duration: '20 min read',
            content: `
# Deep Dive: Group & Peer 👯

## 1. The Parent-Child Problem
Sometimes you want to change a Child's style when the Parent is hovered.
Standard CSS: \`.card:hover .title { color: blue }\`.

Tailwind Solution: **Group**.
1.  Add \`group\` to the **Parent**.
2.  Add \`group-hover:class\` to the **Child**.

\`\`\`html
<div class="group card p-4 hover:bg-black">
    <h3 class="text-gray-900 group-hover:text-white">
        Title changes to white on hover!
    </h3>
    <p class="text-gray-500 group-hover:text-gray-300">
        Description gets lighter.
    </p>
</div>
\`\`\`

## 2. The Sibling Problem
Sometimes you want to style Element B when Element A (Sibling) is focused/checked.
Example: Custom Checkbox or Floating Label.
Tailwind Solution: **Peer**.
1.  Add \`peer\` to the **Sibling A**.
2.  Add \`peer-checked:class\` to **Sibling B**.

\`\`\`html
<input type="checkbox" class="peer hidden" id="chk" />
<label for="chk" class="peer-checked:bg-blue-500 peer-checked:text-white">
    Custom Checkbox UI
</label>
\`\`\`

> [!IMPORTANT]
> The \`peer\` element must appear **BEFORE** the target element in the HTML structure.
            `
        },
        // 3. Deep Dive: Transition Physics
        {
            id: 'tailwind-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Physics & Timing ⏱️',
            duration: '15 min read',
            content: `
# Deep Dive: Physics & Timing ⏱️

## 1. Don't Just Snap
Instant color changes look cheap.
Always add \`transition-colors\` or \`transition-all\` when using hover effects.

## 2. The Duration Scale
*   \`duration-75\`: Micro-interactions (Click).
*   \`duration-150\`: Standard UI (Hover).
*   \`duration-300\`: Large movements (Modal open).
*   \`duration-500+\`: Narrative transitions.

## 3. Easing Curves
*   \`ease-in\`: Example: Leaving the screen (starts slow, speeds up).
*   \`ease-out\`: Example: Entering the screen (starts fast, slows down).
*   \`ease-in-out\`: Generic (slow start, fast middle, slow end).

\`\`\`html
<button class="transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
   Bouncy Physics
</button>
\`\`\`
            `
        },
        // 4. Deep Dive: Accessibility (Focus)
        {
            id: 'tailwind-3-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Focus Rings 🎯',
            duration: '10 min read',
            content: `
# Deep Dive: Focus Rings 🎯

## 1. Never Remove Outline
\`outline: none\` is a sin against accessibility. Keyboard users rely on the focus ring to know where they are.

## 2. Custom Focus Rings
Tailwind allows you to style the ring without relying on the ugly default browser implementation.

\`\`\`html
<button class="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    Accessible & Beautiful
</button>
\`\`\`

*   \`ring-2\`: Adds a 2px box-shadow ring.
*   \`ring-offset-2\`: Adds white space between the element and the ring.

This creates a high-quality "Offset" look seen in standard operating systems (macOS/Windows).
            `
        },

        // PART 2: PRACTICAL LABS
        // Lab 1: Interactive Button
        {
            id: 'tailwind-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Perfect Button',
            duration: '20 min',
            content: `
# Lab 1: The Perfect Button

Create a button that feels "tactile" using State Modifiers.

## The Mission
1.  **Base**: \`bg-blue-600\`, \`text-white\`, \`px-6\`, \`py-3\`, \`rounded-lg\`, \`font-semibold\`, \`shadow-md\`.
2.  **Hover**: Lighten background (\`hover:bg-blue-500\`), Move up slightly (\`hover:-translate-y-1\`), Increase shadow (\`hover:shadow-lg\`).
3.  **Active**: Darken background (\`active:bg-blue-700\`), Press down (\`active:translate-y-0\`), Shrink shadow (\`active:shadow-sm\`).
4.  **Transition**: Smooth it all out with \`transition-all duration-200\`.

## Physics Logic
*   Hover = Lift up (Light hits it).
*   Active = Press down (Shadow disappears).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Base Styles: bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold.',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\bbg-blue-600\b)(?=.*\btext-white\b)(?=.*\bpx-6\b)(?=.*\bpy-3\b)(?=.*\brounded-lg\b)(?=.*\bshadow-md\b)(?=.*\bfont-semibold\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Hover State: hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg.',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\bhover:bg-blue-500\b)(?=.*\bhover:-translate-y-1\b)(?=.*\bhover:shadow-lg\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Active State: active:bg-blue-700 active:translate-y-0 active:shadow-sm.',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\bactive:bg-blue-700\b)(?=.*\bactive:translate-y-0\b)(?=.*\bactive:shadow-sm\b)[^"']*["']/
                },
                {
                    id: 4,
                    description: 'Transition: transition-all duration-200.',
                    completed: false,
                    regex: /<button[^>]*class=["'](?=.*\btransition-all\b)(?=.*\bduration-200\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-20 flex justify-center bg-gray-100">

    <!-- Task 1-4: The Perfect Button -->
    <button class="">
        Click Me
    </button>

</body>
</html>`
                }
            ]
        },
        // Lab 2: Card Hover Effects (Group)
        {
            id: 'tailwind-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Group Hover Card',
            duration: '25 min',
            content: `
# Lab 2: Group Hover Card

You have a card image and some text. When you hover the **Card**, you want the **Text** to change color and the **Image** to zoom in.
Standard CSS would require complex nesting. Tailwind uses \`group\`.

## The Mission
1.  **Parent**: Add \`group\` to the correct container. \`overflow-hidden\`.
2.  **Image**: Add \`group-hover:scale-110\`, \`transition\`, \`duration-500\`.
3.  **Title**: Add \`group-hover:text-blue-600\`, \`transition\`.
4.  **Arrow Icon**: Add \`group-hover:translate-x-2\`.

## Structure
\`\`\`html
<div class="group ...">
   <img class="group-hover:scale..." />
   <div>
      <h3 class="group-hover:text...">Title</h3>
      <span class="group-hover:translate...">-></span>
   </div>
</div>
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Parent: Add "group" class.',
                    completed: false,
                    regex: /<a[^>]*class=["'](?=.*\bgroup\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Image: group-hover:scale-110 transition duration-500.',
                    completed: false,
                    regex: /<img[^>]*class=["'](?=.*\bgroup-hover:scale-110\b)(?=.*\btransition\b)(?=.*\bduration-500\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Text Color: group-hover:text-blue-600.',
                    completed: false,
                    regex: /<h3[^>]*class=["'](?=.*\bgroup-hover:text-blue-600\b)[^"']*["']/
                },
                {
                    id: 4,
                    description: 'Icon Move: group-hover:translate-x-2.',
                    completed: false,
                    regex: /<span[^>]*class=["'](?=.*\bgroup-hover:translate-x-2\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10 bg-gray-50">

    <!-- Task 1: Add "group" to this link -->
    <a href="#" class="block max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div class="h-48 overflow-hidden">
            <!-- Task 2: Zoom image on hover -->
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" class="w-full h-full object-cover">
        </div>

        <div class="p-6">
            <!-- Task 3: Change text color -->
            <h3 class="text-xl font-bold mb-2 text-gray-900 transition-colors">
                Frontend Mastery
            </h3>
            
            <div class="flex items-center text-gray-500 mt-4">
                Learn more 
                <!-- Task 4: Move arrow right -->
                <span class="ml-2 transition-transform">-></span>
            </div>
        </div>
    </a>

</body>
</html>`
                }
            ]
        },
        // Lab 3: Floating Label (Peer)
        {
            id: 'tailwind-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Floating Input Label',
            duration: '30 min',
            content: `
# Lab 3: Floating Input Label

The "Material Design" input style. The placeholder acts as a label covering the input, but when you focus, it floats to the top.
This requires the \`peer\` modifier.

## The Mission
1.  **Input**: Add \`peer\` class. Use \`placeholder-transparent\` (so we don't see double text).
2.  **Label**: Position absolute. \`peer-placeholder-shown:top-2\` (Start position).
3.  **Float Action**: \`peer-focus:-top-3.5\`, \`peer-focus:text-sm\`, \`peer-focus:text-blue-600\`.

## Logic
When the placeholder is shown (empty input, no focus), the label sits inside.
When the placeholder is NOT shown (user typed something) OR input is focused, the label floats up.

> [!NOTE]
> We rely on \`peer-placeholder-shown\` to detect if the input is empty!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Input: Add "peer" and "placeholder-transparent".',
                    completed: false,
                    regex: /<input[^>]*class=["'](?=.*\bpeer\b)(?=.*\bplaceholder-transparent\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Label Base: absolute left-2 -top-3.5 text-gray-600 text-sm transition-all.',
                    completed: false,
                    regex: /<label[^>]*class=["'](?=.*\babsolute\b)(?=.*\bleft-2\b)(?=.*\b-top-3\.5\b)(?=.*\btext-gray-600\b)(?=.*\btext-sm\b)(?=.*\btransition-all\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Label Return: peer-placeholder-shown:text-base peer-placeholder-shown:top-2.',
                    completed: false,
                    regex: /<label[^>]*class=["'](?=.*\bpeer-placeholder-shown:text-base\b)(?=.*\bpeer-placeholder-shown:top-2\b)[^"']*["']/
                },
                {
                    id: 4,
                    description: 'Label Focus: peer-focus:-top-3.5 peer-focus:text-blue-600.',
                    completed: false,
                    regex: /<label[^>]*class=["'](?=.*\bpeer-focus:-top-3\.5\b)(?=.*\bpeer-focus:text-blue-600\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-20 bg-white">

    <div class="relative w-64 mt-10">
        <!-- Task 1: The Peer Input -->
        <input 
            type="text" 
            id="email" 
            placeholder="john@example.com" 
            class="border-b-2 border-gray-300 focus:border-blue-600 outline-none w-full py-2"
        />

        <!-- Task 2,3,4: The Floating Label -->
        <label 
            for="email" 
            class=""
        >
            Email Address
        </label>
    </div>

</body>
</html>`
                }
            ]
        },
        // Lab 4: Dark Mode
        {
            id: 'tailwind-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Dark Mode Toggle',
            duration: '25 min',
            content: `
# Lab 4: Dark Mode

By default, Tailwind uses the system preference (\`media\`).
But we often want manual control (\`class\`). We simulate this by adding \`class="dark"\` to a parent wrapper.

## The Mission
1.  **Wrapper**: Add \`dark\` class to the body/wrapper to simulate dark mode active.
2.  **Card**: \`bg-white\` normally, \`dark:bg-gray-800\` in dark mode.
3.  **Text**: \`text-gray-900\` normally, \`dark:text-white\` in dark mode.
4.  **Description**: \`text-gray-500\` normally, \`dark:text-gray-400\`.

## Concept
We create a component that looks good in BOTH modes simultaneously by simply prefixing the alternative styles.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Wrapper: Ensure class="dark" is present (for simulation).',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\b(dark)\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Card Background: bg-white dark:bg-gray-800.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-white\b)(?=.*\bdark:bg-gray-800\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Title Text: text-gray-900 dark:text-white.',
                    completed: false,
                    regex: /<h3[^>]*class=["'](?=.*\btext-gray-900\b)(?=.*\bdark:text-white\b)[^"']*["']/
                },
                {
                    id: 4,
                    description: 'Body Text: text-gray-500 dark:text-gray-400.',
                    completed: false,
                    regex: /<p[^>]*class=["'](?=.*\btext-gray-500\b)(?=.*\bdark:text-gray-400\b)[^"']*["']/
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
</head>
<body class="p-10 bg-gray-200">

    <!-- Task 1: Add "dark" here to test dark mode -->
    <div class="p-10">
        
        <!-- Task 2: Card Background -->
        <div class="rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            
            <!-- Task 3: Title -->
            <h3 class="text-2xl font-bold mb-2">Dark Mode Ready</h3>
            
            <!-- Task 4: Body -->
            <p class="">
                This card automatically adapts to system themes or user toggles.
            </p>

        </div>

    </div>

</body>
</html>`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'tailwind-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 3 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How do you target the hover state of a parent element from a child?',
                    options: [
                        'parent-hover:',
                        'group-hover:',
                        'peer-hover:',
                        'hover-parent:'
                    ],
                    correctIndex: 1,
                    explanation: 'Add `group` to the parent, then use `group-hover:` on the child.'
                },
                {
                    id: 'q2',
                    question: 'When using "peer" modifiers, where must the peer element be located?',
                    options: [
                        'Inside the target element',
                        'Anywhere in the DOM',
                        'Immediately BEFORE the target element',
                        'Immediately AFTER the target element'
                    ],
                    correctIndex: 2,
                    explanation: 'The General Sibling Combinator (~) requires the `peer` to appear before the element you are styling in the HTML.'
                },
                {
                    id: 'q3',
                    question: 'Which class removes the default browser focus ring?',
                    options: [
                        'ring-0',
                        'border-none',
                        'outline-none',
                        'no-focus'
                    ],
                    correctIndex: 2,
                    explanation: '`outline-none` removes the default focus style. You should ALWAYS replace it with a custom `ring` or `border` for accessibility.'
                },
                {
                    id: 'q4',
                    question: 'How do you enable manual dark mode toggling?',
                    options: [
                        'It is automatic',
                        'Set darkMode: "media" in config',
                        'Set darkMode: "class" in config',
                        'Use data-theme attributes'
                    ],
                    correctIndex: 2,
                    explanation: 'Setting `darkMode: "class"` tells Tailwind to look for a `.dark` class on the HTML tag instead of checking system preferences.'
                },
                {
                    id: 'q5',
                    question: 'What is the "active" state triggered by?',
                    options: [
                        'Hovering over an element',
                        'Focusing via keyboard',
                        'Clicking/Pressing down on an element',
                        'Disabling an element'
                    ],
                    correctIndex: 2,
                    explanation: '`active` corresponds to the time between holding the mouse button down and releasing it.'
                }
            ]
        }
    ]
};
