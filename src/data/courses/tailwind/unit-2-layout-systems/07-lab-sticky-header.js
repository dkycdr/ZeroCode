import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4StickyHeader = {
    id: 'tailwind-u2-lab-4-sticky',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Sticky Header Pattern',
    duration: '20 min',
    content: `
# Lab: Sticky Header Pattern

## The Mission

Build a sticky header that:
- Scrolls with page initially
- Sticks to top when scrolling down
- Changes background on scroll (bonus)
- Maintains z-index above content

Master sticky positioning! 📌
`,
    tasks: [
        {
            id: 1,
            description: 'Create sticky header with sticky top-0 bg-white shadow z-40',
            completed: false,
            regex: /<header[^>]*class\s*=\s*["'][^"']*sticky[^"']*top-0[^"']*bg-white[^"']*shadow[^"']*z-40[^"']*["']/,
            hint: {
                concept: 'Sticky Positioning',
                strategy: 'sticky top-0 makes element stick at top when scrolling',
                solution: '<header class="sticky top-0 bg-white shadow z-40">...'
            }
        },
        {
            id: 2,
            description: 'Add container with max-w-6xl mx-auto px-6 py-4',
            completed: false,
            regex: /class\s*=\s*["'][^"']*max-w-6xl[^"']*mx-auto[^"']*px-6[^"']*py-4[^"']*["']/,
            hint: {
                concept: 'Centered Container',
                strategy: 'max-w limits width, mx-auto centers, px/py adds padding',
                solution: 'class="max-w-6xl mx-auto px-6 py-4"'
            }
        },
        {
            id: 3,
            description: 'Create sticky sidebar with sticky top-20 h-screen overflow-auto',
            completed: false,
            regex: /class\s*=\s*["'][^"']*sticky[^"']*top-20[^"']*h-screen[^"']*overflow-auto[^"']*["']/,
            hint: {
                concept: 'Sticky Sidebar',
                strategy: 'top-20 accounts for header height, allows independent scrolling',
                solution: 'class="sticky top-20 h-screen overflow-auto"'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticky Header</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    
    <!-- Task 1: Sticky Header -->
    <header class="">
        <!-- Task 2: Container -->
        <div class="">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-blue-600">StickyDocs</h1>
                <nav class="flex gap-6">
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Docs</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">API</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Support</a>
                </nav>
            </div>
        </div>
    </header>
    
    <div class="max-w-6xl mx-auto px-6 py-8">
        <div class="grid grid-cols-4 gap-8">
            
            <!-- Task 3: Sticky Sidebar -->
            <aside class="">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h2 class="font-bold text-lg mb-4">Table of Contents</h2>
                    <ul class="space-y-2">
                        <li><a href="#section1" class="text-blue-600 hover:underline">Introduction</a></li>
                        <li><a href="#section2" class="text-gray-700 hover:text-blue-600">Getting Started</a></li>
                        <li><a href="#section3" class="text-gray-700 hover:text-blue-600">Features</a></li>
                        <li><a href="#section4" class="text-gray-700 hover:text-blue-600">Examples</a></li>
                        <li><a href="#section5" class="text-gray-700 hover:text-blue-600">API Reference</a></li>
                        <li><a href="#section6" class="text-gray-700 hover:text-blue-600">Best Practices</a></li>
                    </ul>
                </div>
            </aside>
            
            <!-- Main Content -->
            <main class="col-span-3">
                <section id="section1" class="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 class="text-3xl font-bold mb-4">Introduction</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Welcome to the sticky header demo. This pattern is commonly used in documentation sites
                        and long-form content where you want the navigation to remain accessible.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Scroll down to see how the header sticks to the top of the viewport while the sidebar
                        remains in view as you scroll through the content.
                    </p>
                </section>
                
                <section id="section2" class="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 class="text-3xl font-bold mb-4">Getting Started</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        To implement sticky positioning in Tailwind, simply use the \`sticky\` utility class
                        combined with a top offset value.
                    </p>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
&lt;header class="sticky top-0"&gt;
  Navigation content
&lt;/header&gt;</pre>
                </section>
                
                <section id="section3" class="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 class="text-3xl font-bold mb-4">Features</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li>Stays in viewport while scrolling</li>
                        <li>No JavaScript required</li>
                        <li>Performant CSS-only solution</li>
                        <li>Works with z-index for layering</li>
                        <li>Compatible with all modern browsers</li>
                    </ul>
                </section>
                
                <section id="section4" class="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 class="text-3xl font-bold mb-4">Examples</h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Beyond headers, sticky positioning works great for:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li>Table of contents sidebars</li>
                        <li>Sticky table headers</li>
                        <li>Fixed action buttons</li>
                        <li>Announcement banners</li>
                    </ul>
                </section>
                
                <section id="section5" class="bg-white p-8 rounded-lg shadow mb-8">
                    <h2 class="text-3xl font-bold mb-4">API Reference</h2>
                    <table class="w-full border-collapse">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border p-3 text-left">Class</th>
                                <th class="border p-3 text-left">CSS</th>
                                <th class="border p-3 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border p-3"><code>sticky</code></td>
                                <td class="border p-3"><code>position: sticky</code></td>
                                <td class="border p-3">Enable sticky positioning</td>
                            </tr>
                            <tr>
                                <td class="border p-3"><code>top-0</code></td>
                                <td class="border p-3"><code>top: 0</code></td>
                                <td class="border p-3">Stick at top edge</td>
                            </tr>
                            <tr>
                                <td class="border p-3"><code>z-40</code></td>
                                <td class="border p-3"><code>z-index: 40</code></td>
                                <td class="border p-3">Control stacking order</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                
                <section id="section6" class="bg-white p-8 rounded-lg shadow">
                    <h2 class="text-3xl font-bold mb-4">Best Practices</h2>
                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4">
                            <h3 class="font-bold text-lg mb-2">Use appropriate z-index</h3>
                            <p class="text-gray-700">Ensure sticky elements appear above content with proper z-index values.</p>
                        </div>
                        <div class="border-l-4 border-green-500 pl-4">
                            <h3 class="font-bold text-lg mb-2">Add background</h3>
                            <p class="text-gray-700">Without a background, content will show through as it scrolls behind.</p>
                        </div>
                        <div class="border-l-4 border-yellow-500 pl-4">
                            <h3 class="font-bold text-lg mb-2">Consider mobile</h3>
                            <p class="text-gray-700">Sticky headers can take up valuable screen space on mobile devices.</p>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    </div>
    
</body>
</html>`
        }
    ]
};
