import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Components = {
    id: 'tailwind-unit-4',
    title: 'Components & Patterns',
    description: 'Build reusable UI components',
    items: [
                {
                    id: 'tailwind-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Common UI Patterns',
                    duration: '10 min read',
                    content: `
# Common UI Patterns

## Button Variants

### Primary Button
\`\`\`html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
    Primary Action
</button>
\`\`\`

### Secondary Button
\`\`\`html
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
    Secondary Action
</button>
\`\`\`

### Outline Button
\`\`\`html
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition">
    Outline Button
</button>
\`\`\`

### Ghost Button
\`\`\`html
<button class="text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition">
    Ghost Button
</button>
\`\`\`

## Card Patterns

### Basic Card
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content goes here.</p>
</div>
\`\`\`

### Card with Image
\`\`\`html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="image.jpg" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Card Title</h3>
        <p class="text-gray-600">Card content.</p>
    </div>
</div>
\`\`\`

### Hover Card
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl hover:scale-105 cursor-pointer">
    <h3 class="text-xl font-bold mb-2">Interactive Card</h3>
    <p class="text-gray-600">Hover over me!</p>
</div>
\`\`\`

## Form Inputs

### Text Input
\`\`\`html
<input
    type="text"
    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
    placeholder="Enter text..."
>
\`\`\`

### Textarea
\`\`\`html
<textarea
    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
    rows="4"
    placeholder="Enter message..."
></textarea>
\`\`\`

### Select Dropdown
\`\`\`html
<select class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
\`\`\`

## Badges & Tags

\`\`\`html
<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
    New
</span>

<span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
    Active
</span>

<span class="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
    Urgent
</span>
\`\`\`

## Alerts

\`\`\`html
<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
    <p class="text-green-800 font-semibold">Success!</p>
    <p class="text-green-700 text-sm">Your action was completed.</p>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
    <p class="text-red-800 font-semibold">Error!</p>
    <p class="text-red-700 text-sm">Something went wrong.</p>
</div>
\`\`\`

> 💡 **Pro Tip**: Save these patterns as snippets in your code editor for quick reuse!
                    `
                },
                {
                    id: 'tailwind-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Build a Component Library',
                    duration: '30 min',
                    content: `
# Build a Component Library

Create reusable components for your projects.

## Component Structure

Each component should be:
- **Consistent**: Use the same spacing, colors, sizes
- **Responsive**: Work on all screen sizes
- **Accessible**: Include proper ARIA labels
- **Interactive**: Provide visual feedback

## Example: Profile Card Component

\`\`\`html
<div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Cover Image -->
    <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

    <!-- Avatar -->
    <div class="relative px-6 -mt-16">
        <img
            src="avatar.jpg"
            class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        >
    </div>

    <!-- Content -->
    <div class="px-6 py-4">
        <h2 class="text-2xl font-bold text-gray-800">John Doe</h2>
        <p class="text-gray-600">Software Engineer</p>

        <!-- Stats -->
        <div class="flex gap-4 mt-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">1.2K</div>
                <div class="text-xs text-gray-500">Followers</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">543</div>
                <div class="text-xs text-gray-500">Following</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-800">89</div>
                <div class="text-xs text-gray-500">Posts</div>
            </div>
        </div>

        <!-- Action Button -->
        <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
            Follow
        </button>
    </div>
</div>
\`\`\`

---

## Your Mission
Build a complete component library with buttons, cards, and forms.
                    `,
                    tasks: [
                        { id: 1, description: 'Create at least 3 button variants', completed: false, regex: /(bg-blue|bg-gray|border-2).*button/i },
                        { id: 2, description: 'Create a card with image and content', completed: false, regex: /(img|image)[\s\S]*<div/ },
                        { id: 3, description: 'Create a form with styled inputs', completed: false, regex: /<input[\s\S]*border-2/ },
                        { id: 4, description: 'Add hover effects to interactive elements', completed: false, regex: /hover:(bg|scale|shadow)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-8">Component Library</h1>

    <!-- Build your components here -->
    <div class="space-y-8">
        <section>
            <h2 class="text-2xl font-bold mb-4">Buttons</h2>
            <!-- Add button variants here -->
        </section>

        <section>
            <h2 class="text-2xl font-bold mb-4">Cards</h2>
            <!-- Add card components here -->
        </section>

        <section>
            <h2 class="text-2xl font-bold mb-4">Forms</h2>
            <!-- Add form components here -->
        </section>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'tailwind-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Components Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What makes a good reusable component?',
                            options: [
                                'Lots of custom CSS',
                                'Consistent styling and responsive design',
                                'Complex JavaScript',
                                'Inline styles'
                            ],
                            correctIndex: 1,
                            explanation: 'Good components are consistent, responsive, accessible, and provide visual feedback.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you create a pill-shaped badge?',
                            options: [
                                'rounded-pill',
                                'rounded-full',
                                'border-radius-full',
                                'shape-pill'
                            ],
                            correctIndex: 1,
                            explanation: 'rounded-full creates a fully rounded element, perfect for pills and circles.'
                        }
                    ]
                }
            ]
};
