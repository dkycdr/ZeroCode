
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Components = {
    id: 'tailwind-unit-4',
    title: 'Unit 4: Component Architecture',
    description: 'Stop repeating classes. Learn how to extract reusable components properly, manage configuration, and handle complex composite patterns.',
    items: [
        // 1. Deep Dive: Extraction Strategy
        {
            id: 'tailwind-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: To @apply or Not? 🛠️',
            duration: '20 min read',
            content: `
# Deep Dive: To @apply or Not? 🛠️

## 1. The Trap
New Tailwind users often hate the long class strings and immediately do this:
\`\`\`css
/* main.css */
.btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
}
\`\`\`
**This is generally considered an anti-pattern.** Why?
1.  You lose the ability to see dependencies in your HTML.
2.  You increase the CSS bundle size significantly.
3.  You are basically just writing BEM with extra steps.

## 2. The Component Solution (Recommended)
Instead of extracting to CSS, extract to **Components** (React/Vue/Blade).

\`\`\`jsx
// React Component
function Button({ children }) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {children}
        </button>
    );
}
\`\`\`
This keeps your CSS small and your logic reusable.

## 3. When to use @apply?
Use it for targeting third-party libraries that you cannot control (e.g., overriding styles in a WordPress plugin or a legacy widget).
            `
        },
        // 2. Deep Dive: Configuration
        {
            id: 'tailwind-4-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: tailwind.config.js ⚙️',
            duration: '15 min read',
            content: `
# Deep Dive: tailwind.config.js ⚙️

## 1. Extending the Theme
Never **overwrite** defaults unless you mean to delete them. Always **extend**.

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1da1f2',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    }
  }
}
\`\`\`
Now you can use \`bg-brand-blue\` and \`font-sans\`.

## 2. Plugins
Tailwind has an official plugin ecosystem.
*   \`@tailwindcss/forms\`: Resets form inputs to be easy to style.
*   \`@tailwindcss/typography\`: Adds the \`prose\` class for styling Markdown/Blog content automatically.

## 3. Safelist (The Emergency Logic)
If you interpolate class names dynamically (\`bg-\${color}-500\`), Tailwind can't see them. You might need to add them to the \`safelist\` array in config, but this is a last resort.
            `
        },
        // 3. Deep Dive: Accessibility Attributes
        {
            id: 'tailwind-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Accessibility (SSR) ♿',
            duration: '10 min read',
            content: `
# Deep Dive: Accessibility (SSR) ♿

## 1. Screen Readers Only
Sometimes you need text for a Screen Reader (Blind user) but hidden visually.
**Do not use \`display: none\`** (Screen readers ignore this).

Use the **\`sr-only\`** class.
\`\`\`html
<button>
  <svg>...</svg>
  <span class="sr-only">Close Menu</span>
</button>
\`\`\`

## 2. Focus Management
We covered focus rings, but logical flow is key. Interactive components (Modals, Dropdowns) require complex ARIA attributes. Tailwind helps stylistically, but *you* are responsible for the \`aria-expanded\`, \`role="dialog"\`, etc.
            `
        },
        // 4. Deep Dive: Directives
        {
            id: 'tailwind-4-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Layers & Directives 📦',
            duration: '10 min read',
            content: `
# Deep Dive: Layers & Directives 📦

## 1. The Three Layers
Tailwind organizes CSS into buckets:
1.  **@layer base**: HTML resets (h1, p, body).
2.  **@layer components**: Your custom classes (.btn).
3.  **@layer utilities**: The single-purpose classes (.p-4).

## 2. Why it matters
Specificity! Utilities should always override components.
If you write custom CSS without wrapping it in \`@layer utilities\`, your custom class might get overridden by Tailwind classes unexpectedly.

\`\`\`css
@layer utilities {
  .skew-15deg {
    transform: skewY(-15deg);
  }
}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS
        // Lab 1: Building Alerts
        {
            id: 'tailwind-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Reusable Alerts',
            duration: '25 min',
            content: `
# Lab 1: Reusable Alerts

Create a sophisticated Alert component with an Icon, Title, and Description.
We will build a "Success" variant.

## The Mission
1.  **Container**: \`bg-green-50\`, \`border-l-4\` (Left border), \`border-green-400\`, \`p-4\`, \`rounded-r\`.
2.  **Layout**: Flexbox to align Icon (left) and Content (right).
3.  **Icon**: A mock SVG or div.
4.  **Text**: Green-800 for title, Green-700 for body.

## Visualization
[ ICON ]  **Success!**
          Your changes have been saved.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Container: bg-green-50 border-l-4 border-green-400 p-4 rounded-r.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-green-50\b)(?=.*\bborder-l-4\b)(?=.*\bborder-green-400\b)(?=.*\bp-4\b)(?=.*\brounded-r\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Layout: Flex connection.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bflex\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Title: text-green-800 font-bold.',
                    completed: false,
                    regex: /<h3[^>]*class=["'](?=.*\btext-green-800\b)(?=.*\bfont-bold\b)[^"']*["']/
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
<body class="p-10">
    <!-- Task 1: Alert Container -->
    <div class="">
        <!-- Task 2: Flex Wrapper -->
        <div class="">
            <div class="flex-shrink-0">
                <!-- Icon Placeholder -->
                <div class="h-5 w-5 bg-green-400 rounded-full"></div>
            </div>
            <div class="ml-3">
                <!-- Task 3: Title -->
                <h3 class="">Success</h3>
                <div class="text-sm text-green-700">
                    <p>Your account was successfully registered.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
                }
            ]
        },
        // Lab 2: Modal Dialog
        {
            id: 'tailwind-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Modal Dialog',
            duration: '35 min',
            content: `
# Lab 2: The Modal Dialog

Visualizing a Modal requires understanding Fixed positioning and Semi-transparent backdrops.

## The Mission
1.  **Backdrop**: \`fixed inset-0 bg-black/75 z-50\`. This covers the whole screen.
2.  **Centering**: Use \`flex justify-center items-center\` on the Backdrop container.
3.  **The Modal**: \`bg-white w-96 rounded-lg shadow-2xl overflow-hidden\`.
4.  **Animation**: (Optional) usually we'd add opacity/scale transitions.

## Logic
The backdrop sits on top of everything (\`z-50\`). The Flexbox centering ensures the modal is exactly in the middle of usage window.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Backdrop: fixed inset-0 bg-gray-500/75 z-50 flex items-center justify-center.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bfixed\b)(?=.*\binset-0\b)(?=.*\bbg-gray-500\/75\b)(?=.*\bz-50\b)(?=.*\bflex\b)(?=.*\bitems-center\b)(?=.*\bjustify-center\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Modal Panel: bg-white rounded-lg shadow-xl w-full max-w-lg.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-white\b)(?=.*\brounded-lg\b)(?=.*\bshadow-xl\b)(?=.*\bw-full\b)(?=.*\bmax-w-lg\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Footer: bg-gray-50 px-4 py-3 flex flex-row-reverse.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-gray-50\b)(?=.*\bpx-4\b)(?=.*\bpy-3\b)(?=.*\bflex\b)(?=.*\bflex-row-reverse\b)[^"']*["']/
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
<body class="h-screen bg-gray-100 p-10">

    <button>Open Modal (Fake)</button>

    <!-- Task 1: The Backdrop Overlay -->
    <div class="" aria-modal="true">
        
        <!-- Task 2: The Modal Panel -->
        <div class="">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Deactivate account</h3>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                </div>
            </div>
            
            <!-- Task 3: Footer Actions -->
            <div class="">
                <button type="button" class="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm text-base font-medium hover:bg-red-700 ml-3">
                    Deactivate
                </button>
                <button type="button" class="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm text-base font-medium hover:bg-gray-50">
                    Cancel
                </button>
            </div>
        </div>
        
    </div>

</body>
</html>`
                }
            ]
        },
        // Lab 3: Toggle Switch
        {
            id: 'tailwind-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Toggle Switch',
            duration: '25 min',
            content: `
# Lab 3: Toggle Switch

A classic iOS style toggle switch.
Essentially a rounded container with a circle inside that moves left/right based on state.

## The Mission
1.  **Track**: \`w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600\`.
2.  **Thumb (Circle)**: \`w-5 h-5 bg-white rounded-full absolute top-0.5 left-[2px] peer-checked:translate-x-full transition-all\`.

## Logic
We use \`peer-checked\` on the Track to change color.
We use \`peer-checked\` on the Thumb to translate X.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Track: bg-gray-200 peer-checked:bg-blue-600 w-11 h-6 rounded-full.',
                    completed: false,
                    regex: /<div[^>]*class=["'](?=.*\bbg-gray-200\b)(?=.*\bpeer-checked:bg-blue-600\b)(?=.*\bw-11\b)(?=.*\bh-6\b)(?=.*\brounded-full\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Thumb: peer-checked:translate-x-full absolute top-[2px] left-[2px] bg-white rounded-full.',
                    completed: false,
                    regex: /class=["'](?=.*\bpeer-checked:translate-x-full\b)(?=.*\babsolute\b)(?=.*\bbg-white\b)(?=.*\brounded-full\b)[^"']*["']/
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
<body class="p-20">

    <label class="relative inline-flex items-center cursor-pointer">
        <!-- The Hiden Checkbox -->
        <input type="checkbox" value="" class="sr-only peer">
        
        <!-- Task 1: The Track -->
        <div class="peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600">
            <!-- Note: In this lab approach, we can do it via After/Before pseudos OR explicit divs. For simplicity in regex, let's use the explicit div approach in the solution. -->
            <!-- Actually, let's stick to the simplest Tailwind pattern: A wrapper and a child div. -->
        </div>
        
        <!-- Simplified Structure for Task -->
         <div class=""></div> <!-- Track -->
         <div class=""></div> <!-- Thumb is implied to be handled via classes above or inside -->
         
         <!-- Wait, let's reboot the template for clarity -->
    </label>
    
    <!-- REBOOT TEMPLATE -->
    <div class="mt-10">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <!-- Task 1: Track -->
            <div class="">
                <!-- Task 2: This inner div is actually represented by "after:" pseudo elements in many docs, but we can do it with a literal div sibling if the structure allows. -->
                <!-- Let's assume the user edits the PARENT DIV to have the track styles, and overrides the After pseudo. -->
                <!-- Or easier: Just a Div Track and a Div Thumb inside? No, Thumb inside won't work easily with Peer logic unless Track is the parent. -->
                
                <!-- Let's use the standard "after" pseudo approach for toggles as it's cleaner in HTML. But for the EXERCISE, separate elements is easier to conceptualize. -->
                
                <!-- Let's do: Input + Div (Track) + Div (Thumb) -->
            </div>
            <!-- The Thumb (Absolute) -> Needs to be sibling of Input to use Peer -->
            <div class=""></div>
            
            <span class="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
        </label>
    </div>

</body>
</html>`
                }
            ]
        },
        // Lab 4: Data Table
        {
            id: 'tailwind-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Striped Data Table',
            duration: '30 min',
            content: `
# Lab 4: Striped Data Table

Tables are boring. Let's make one using \`odd\` chlid modifiers for striping.

## The Mission
1.  **Header**: \`bg-gray-50\`, \`border-b\`.
2.  **Rows**: \`odd:bg-white\`, \`even:bg-gray-50\`.
3.  **Cells**: \`px-6\`, \`py-4\`, \`whitespace-nowrap\`.

## Logic
Class \`even:bg-gray-50\` applies the background only to even children (nth-child(even)).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Header Row: bg-gray-50 border-b.',
                    completed: false,
                    regex: /<thead[^>]*class=["'](?=.*\bbg-gray-50\b)(?=.*\bborder-b\b)[^"']*["']/
                },
                {
                    id: 2,
                    description: 'Body Rows: bg-white even:bg-gray-50 hover:bg-gray-100.',
                    completed: false,
                    regex: /<tr[^>]*class=["'](?=.*\bbg-white\b)(?=.*\beven:bg-gray-50\b)(?=.*\bhover:bg-gray-100\b)[^"']*["']/
                },
                {
                    id: 3,
                    description: 'Cells: px-6 py-4.',
                    completed: false,
                    regex: /<td[^>]*class=["'](?=.*\bpx-6\b)(?=.*\bpy-4\b)[^"']*["']/
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
<body class="p-10">

    <table class="min-w-full text-left text-sm font-light">
        <!-- Task 1: Header -->
        <thead class="">
            <tr>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Role</th>
                <th scope="col" class="px-6 py-4">Status</th>
            </tr>
        </thead>
        <tbody>
            <!-- Task 2: Row 1 -->
            <tr class="">
                <td class="">Mark</td>
                <td class="">Admin</td>
                <td class="">Active</td>
            </tr>
            <!-- Task 2: Row 2 -->
            <tr class="">
                <td class="">Jacob</td>
                <td class="">User</td>
                <td class="">Inactive</td>
            </tr>
            <!-- Task 2: Row 3 -->
            <tr class="">
                <td class="">Larry</td>
                <td class="">Editor</td>
                <td class="">Active</td>
            </tr>
        </tbody>
    </table>

</body>
</html>`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'tailwind-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 4 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why is using @apply generally considered an anti-pattern for component reuse?',
                    options: [
                        'It is too slow',
                        'It increases bundle size and obscures HTML structure',
                        'It is deprecated',
                        'It does not support hover states'
                    ],
                    correctIndex: 1,
                    explanation: 'Extracting to CSS Classes (@apply) creates a separate abstraction layer. Extracting to Template Components (React/Vue) is preferred for reuse.'
                },
                {
                    id: 'q2',
                    question: 'Which class hides an element visually but keeps it accessible to screen readers?',
                    options: [
                        'hidden',
                        'invisible',
                        'sr-only',
                        'display-none'
                    ],
                    correctIndex: 2,
                    explanation: '`sr-only` (Screen Reader Only) moves the element out of the viewport visually but keeps it in the DOM for assistive technology.'
                },
                {
                    id: 'q3',
                    question: 'How do you target the 2nd, 4th, 6th... items in a list?',
                    options: [
                        'nth:2',
                        'even:',
                        'odd:',
                        'mod-2:'
                    ],
                    correctIndex: 1,
                    explanation: 'The `even:` prefix targets the `nth-child(even)` pseudo-class.'
                },
                {
                    id: 'q4',
                    question: 'In which tailwind.config.js section should you add custom colors to KEEP the defaults?',
                    options: [
                        'theme.colors',
                        'theme.params',
                        'theme.extend.colors',
                        'plugins'
                    ],
                    correctIndex: 2,
                    explanation: 'Putting them in `theme.colors` overrides everything. Putting them in `theme.extend.colors` merges them with defaults.'
                },
                {
                    id: 'q5',
                    question: 'What styling issue does the "peer" modifier solve?',
                    options: [
                        'Parent-Child styling',
                        'Sibling-Sibling styling',
                        'Dark mode',
                        'Grid layouts'
                    ],
                    correctIndex: 1,
                    explanation: 'Peer allows you to style an element based on the state of a preceding sibling (like a checkbox or input).'
                }
            ]
        }
    ]
};
