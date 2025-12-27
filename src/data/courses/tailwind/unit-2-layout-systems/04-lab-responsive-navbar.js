import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ResponsiveNavbar = {
    id: 'tailwind-u2-lab-1-navbar',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Responsive Navbar with Flexbox',
    duration: '30 min',
    content: `
# Lab: Responsive Navbar with Flexbox

## The Mission

Build a professional navigation bar using Flexbox. Features:
- Logo on the left
- Navigation links in the center
- CTA button on the right
- Responsive on all devices
- Sticky positioning

Let's build! 🚀
`,
    tasks: [
        {
            id: 1,
            description: 'Create sticky header with sticky top-0 bg-white shadow z-50',
            completed: false,
            regex: /<header[^>]*class\s*=\s*["'][^"']*sticky[^"']*top-0[^"']*bg-white[^"']*shadow[^"']*z-50[^"']*["']/,
            hint: {
                concept: 'Sticky Header',
                strategy: 'sticky top-0 makes it stick at top when scrolling, z-50 keeps it above content',
                solution: '<header class="sticky top-0 bg-white shadow z-50">...'
            }
        },
        {
            id: 2,
            description: 'Add container with flex items-center justify-between px-6 py-4',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*justify-between[^"']*px-6[^"']*py-4[^"']*["']/,
            hint: {
                concept: 'Navbar Layout',
                strategy: 'flex with justify-between spreads items to edges, items-center aligns vertically',
                solution: 'class="flex items-center justify-between px-6 py-4"'
            }
        },
        {
            id: 3,
            description: 'Create logo with text-2xl font-bold text-blue-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-2xl[^"']*font-bold[^"']*text-blue-600[^"']*["']/,
            hint: {
                concept: 'Logo Styling',
                strategy: 'Large bold text in brand color',
                solution: 'class="text-2xl font-bold text-blue-600"'
            }
        },
        {
            id: 4,
            description: 'Add nav links container with flex gap-8',
            completed: false,
            regex: /<nav[^>]*class\s*=\s*["'][^"']*flex[^"']*gap-8[^"']*["']/,
            hint: {
                concept: 'Navigation Links',
                strategy: 'flex with gap-8 creates horizontal menu with spacing',
                solution: '<nav class="flex gap-8">...'
            }
        },
        {
            id: 5,
            description: 'Style nav links with text-gray-700 hover:text-blue-600 font-medium',
            completed: false,
            regex: /<a[^>]*class\s*=\s*["'][^"']*text-gray-700[^"']*hover:text-blue-600[^"']*font-medium[^"']*["']/,
            hint: {
                concept: 'Link Styling',
                strategy: 'Gray text with blue hover for interactive feedback',
                solution: '<a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Link</a>'
            }
        },
        {
            id: 6,
            description: 'Add CTA button with bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-blue-600[^"']*hover:bg-blue-700[^"']*text-white[^"']*px-6[^"']*py-2[^"']*rounded-lg[^"']*["']/,
            hint: {
                concept: 'CTA Button',
                strategy: 'Prominent button style with hover effect',
                solution: '<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">Get Started</button>'
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
    <title>Responsive Navbar</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    
    <!-- Task 1: Sticky Header -->
    <header class="">
        <!-- Task 2: Flex Container -->
        <div class="">
            
            <!-- Task 3: Logo -->
            <div class="">
                ZeroCode
            </div>
            
            <!-- Task 4: Navigation Links -->
            <nav class="">
                <!-- Task 5: Styled Links -->
                <a href="#" class="">Home</a>
                <a href="#" class="">Features</a>
                <a href="#" class="">Pricing</a>
                <a href="#" class="">About</a>
            </nav>
            
            <!-- Task 6: CTA Button -->
            <button class="">
                Get Started
            </button>
            
        </div>
    </header>
    
    <!-- Demo Content (to test sticky behavior) -->
    <main class="p-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p class="text-lg text-gray-600 mb-8">Scroll down to see the sticky navbar in action!</p>
        
        <div class="space-y-4">
            <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Content Section 1</p>
            </div>
            <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Content Section 2</p>
            </div>
            <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Content Section 3</p>
            </div>
            <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">Content Section 4</p>
            </div>
        </div>
    </main>
    
</body>
</html>`
        }
    ]
};
