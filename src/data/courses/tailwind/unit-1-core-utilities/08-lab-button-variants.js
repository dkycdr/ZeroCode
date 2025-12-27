import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4ButtonVariants = {
    id: 'tailwind-u1-lab-4-buttons',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Button Variants Library',
    duration: '25 min',
    content: `
# Lab: Button Variants Library

## The Mission

Create a complete button library with different sizes, colors, and states!

## Button Variants

1. Primary (blue)
2. Secondary (gray)
3. Success (green)
4. Danger (red)
5. Sizes: Small, Medium, Large
6. States: Normal, Hover, Disabled

Build a production-ready button system! 🔘
`,
    tasks: [
        {
            id: 1,
            description: 'Create primary button with bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-blue-600[^"']*hover:bg-blue-700[^"']*text-white[^"']*font-semibold[^"']*py-2[^"']*px-4[^"']*rounded[^"']*["']/,
            hint: {
                concept: 'Primary Button',
                strategy: 'Blue background with hover state',
                solution: '<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Primary</button>'
            }
        },
        {
            id: 2,
            description: 'Create secondary button with bg-gray-200 hover:bg-gray-300 text-gray-800',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-gray-200[^"']*hover:bg-gray-300[^"']*text-gray-800[^"']*["']/,
            hint: {
                concept: 'Secondary Button',
                strategy: 'Light gray background with dark text',
                solution: '<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">Secondary</button>'
            }
        },
        {
            id: 3,
            description: 'Create success button with bg-green-600 hover:bg-green-700',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-green-600[^"']*hover:bg-green-700[^"']*["']/,
            hint: {
                concept: 'Success Button',
                strategy: 'Green background for positive actions',
                solution: '<button class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">Success</button>'
            }
        },
        {
            id: 4,
            description: 'Create danger button with bg-red-600 hover:bg-red-700',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-red-600[^"']*hover:bg-red-700[^"']*["']/,
            hint: {
                concept: 'Danger Button',
                strategy: 'Red background for destructive actions',
                solution: '<button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Danger</button>'
            }
        },
        {
            id: 5,
            description: 'Create small button with py-1 px-3 text-sm',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*py-1[^"']*px-3[^"']*text-sm[^"']*["']/,
            hint: {
                concept: 'Small Button',
                strategy: 'Reduced padding and text size',
                solution: '<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 text-sm rounded">Small</button>'
            }
        },
        {
            id: 6,
            description: 'Create large button with py-3 px-6 text-lg',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*py-3[^"']*px-6[^"']*text-lg[^"']*["']/,
            hint: {
                concept: 'Large Button',
                strategy: 'Increased padding and text size',
                solution: '<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 text-lg rounded">Large</button>'
            }
        },
        {
            id: 7,
            description: 'Create outline button with border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*border-2[^"']*border-blue-600[^"']*text-blue-600[^"']*hover:bg-blue-600[^"']*hover:text-white[^"']*["']/,
            hint: {
                concept: 'Outline Button',
                strategy: 'Border with color, fills on hover',
                solution: '<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded">Outline</button>'
            }
        },
        {
            id: 8,
            description: 'Create disabled button with bg-gray-300 text-gray-500 cursor-not-allowed',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-gray-300[^"']*text-gray-500[^"']*cursor-not-allowed[^"']*["']/,
            hint: {
                concept: 'Disabled Button',
                strategy: 'Muted colors with not-allowed cursor',
                solution: '<button disabled class="bg-gray-300 text-gray-500 cursor-not-allowed font-semibold py-2 px-4 rounded">Disabled</button>'
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
    <title>Button Library</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
    
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Button Component Library</h1>
        
        <!-- Colors Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Button Colors</h2>
            <div class="flex gap-4 flex-wrap">
                <!-- Task 1: Primary Button -->
                <button class="">Primary</button>
                
                <!-- Task 2: Secondary Button -->
                <button class="">Secondary</button>
                
                <!-- Task 3: Success Button -->
                <button class="">Success</button>
                
                <!-- Task 4: Danger Button -->
                <button class="">Danger</button>
            </div>
        </section>
        
        <!-- Sizes Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Button Sizes</h2>
            <div class="flex gap-4 items-center flex-wrap">
                <!-- Task 5: Small Button -->
                <button class="">Small</button>
                
                <!-- Medium (default) -->
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Medium</button>
                
                <!-- Task 6: Large Button -->
                <button class="">Large</button>
            </div>
        </section>
        
        <!-- Variants Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Button Variants</h2>
            <div class="flex gap-4 flex-wrap">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Solid</button>
                
                <!-- Task 7: Outline Button -->
                <button class="">Outline</button>
                
                <button class="text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded">Ghost</button>
            </div>
        </section>
        
        <!-- States Section -->
        <section>
            <h2 class="text-2xl font-bold mb-4">Button States</h2>
            <div class="flex gap-4 flex-wrap">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Normal</button>
                
                <!-- Task 8: Disabled Button -->
                <button class="">Disabled</button>
                
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
                    <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading
                </button>
            </div>
        </section>
        
    </div>
    
</body>
</html>`
        }
    ]
};
