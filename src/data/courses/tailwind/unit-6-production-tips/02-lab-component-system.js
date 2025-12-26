import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ComponentSystem = {
    id: 'tailwind-6-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Mastery: Component Architecture Patterns 🏗️',
    duration: '40 min',
    content: `
# Mastery: Component Architecture Patterns 🏗️

## The @apply Directive (Use Sparingly!)

**Philosophy:** Tailwind is designed for utility-first. But sometimes you need reusable components.

### When to Use @apply
✅ **DO use** for repeated patterns across 10+ places
✅ **DO use** for third-party widget overrides
❌ **DON'T use** just because you "don't like long class lists"
❌ **DON'T use** for one-off components

---

## Pattern 1: The Button System

\`\`\`css
/* Base button - shared foundation */
.btn {
  @apply font-semibold px-6 py-3 rounded-lg;
  @apply transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Variants - semantic naming */
.btn-primary {
  @apply btn bg-blue-600 hover:bg-blue-700 text-white;
  @apply focus:ring-blue-500;
}

.btn-danger {
  @apply btn bg-red-600 hover:bg-red-700 text-white;
  @apply focus:ring-red-500;
}
\`\`\`

**Usage:**
\`\`\`html
<button class="btn-primary">Save</button>
<button class="btn-danger">Delete</button>
\`\`\`

---

## Pattern 2: The Card System

\`\`\`css
.card {
  @apply bg-white rounded-xl shadow-md overflow-hidden;
  @apply transition-all duration-300;
}

.card:hover {
  @apply shadow-xl -translate-y-1;
}

.card-header {
  @apply p-6 border-b border-gray-200;
}

.card-body {
  @apply p-6;
}

.card-footer {
  @apply p-6 bg-gray-50 border-t border-gray-200;
}
\`\`\`

---

## Pattern 3: The Form System

\`\`\`css
.input {
  @apply w-full px-4 py-3 border-2 border-gray-300 rounded-lg;
  @apply focus:border-blue-500 focus:outline-none;
  @apply transition-colors duration-200;
}

.input-error {
  @apply input border-red-500 focus:border-red-500;
}

.label {
  @apply block text-sm font-semibold text-gray-700 mb-2;
}

.error-message {
  @apply text-sm text-red-600 mt-1;
}
\`\`\`

---

## File Organization

\`\`\`
src/styles/
├── tailwind.css          # Main entry
├── components/
│   ├── buttons.css       # All button variants
│   ├── cards.css         # All card variants
│   └── forms.css         # All form components
\`\`\`

**Main File:**
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './components/buttons.css';
@import './components/cards.css';
@import './components/forms.css';
\`\`\`

---

## Best Practices

### ✅ DO:
- Use semantic names (\`btn-primary\`, not \`btn-blue\`)
- Keep components focused (single responsibility)
- Document each component with comments
- Use composition (\`btn-primary btn-lg\`)

### ❌ DON'T:
- Overuse @apply (defeats the purpose of Tailwind)
- Create too many variants
- Duplicate utilities (just use \`p-4\` directly!)
    `,
    tasks: [
        {
            id: 1,
            description: 'Create .btn-primary class using @apply with bg, text, padding, and rounded',
            completed: false,
            regex: /@apply.*bg-.*text-.*px-.*py-.*rounded/
        },
        {
            id: 2,
            description: 'Add hover state to .btn-primary using @apply hover:',
            completed: false,
            regex: /@apply.*hover:/
        },
        {
            id: 3,
            description: 'Create .btn-secondary class with different colors',
            completed: false,
            regex: /\.btn-secondary[\s\S]*@apply/
        },
        {
            id: 4,
            description: 'Create .card class with bg-white, rounded, and shadow',
            completed: false,
            regex: /\.card[\s\S]*@apply.*bg-white.*rounded.*shadow/
        },
        {
            id: 5,
            description: 'Create .input class for form inputs with border and focus states',
            completed: false,
            regex: /\.input[\s\S]*@apply.*border.*focus:/
        },
        {
            id: 6,
            description: 'Create .badge class with inline-flex, px, py, and rounded-full',
            completed: false,
            regex: /\.badge[\s\S]*@apply.*inline-flex.*px-.*py-.*rounded-full/
        },
        {
            id: 7,
            description: 'Test all components by using them in HTML',
            completed: false,
            regex: /<button.*btn-primary|<div.*card|<input.*input|<span.*badge/
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* YOUR TASK: Build a Component System */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Button Components */


/* Card Components */


/* Form Components */


/* Badge Components */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Component System Demo</h1>
        
        <!-- Buttons -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Buttons</h2>
            <div class="flex gap-4">
                <button class="btn-primary">Primary</button>
                <button class="btn-secondary">Secondary</button>
                <button class="btn-danger">Danger</button>
            </div>
        </section>
        
        <!-- Cards -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Cards</h2>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Card Title</h3>
                </div>
                <div class="card-body">
                    <p>Card content goes here...</p>
                </div>
            </div>
        </section>
    </div>
</body>
</html>`
        }
    ]
};
