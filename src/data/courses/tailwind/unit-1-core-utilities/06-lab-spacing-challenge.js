import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2SpacingChallenge = {
    id: 'tailwind-u1-lab-2-spacing',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Spacing Master Challenge',
    duration: '25 min',
    content: `
# Lab: Spacing Master Challenge

## The Mission

Build a feature card with precise spacing using Tailwind's spacing utilities.

## Design Specifications

- Card padding: 24px (p-6)
- Title margin-bottom: 12px (mb-3)
- Subtitle margin-bottom: 16px (mb-4)
- Features list: 8px gap between items (space-y-2)
- Button margin-top: 24px (mt-6)
- Button padding: 12px vertical, 32px horizontal (py-3 px-8)

Master the spacing system! 📏
`,
    tasks: [
        {
            id: 1,
            description: 'Add card container with p-6 rounded-lg shadow-lg',
            completed: false,
            regex: /class\s*=\s*["'][^"']*p-6[^"']*rounded-lg[^"']*shadow-lg[^"']*["']/,
            hint: {
                concept: 'Card Padding',
                strategy: 'p-6 gives 24px padding all sides',
                solution: 'class="p-6 rounded-lg shadow-lg bg-white"'
            }
        },
        {
            id: 2,
            description: 'Create icon container with w-12 h-12 mb-4',
            completed: false,
            regex: /class\s*=\s*["'][^"']*w-12[^"']*h-12[^"']*mb-4[^"']*["']/,
            hint: {
                concept: 'Icon Sizing',
                strategy: 'w-12 h-12 = 48x48px, mb-4 = 16px bottom margin',
                solution: 'class="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center"'
            }
        },
        {
            id: 3,
            description: 'Add title with text-xl font-bold mb-3',
            completed: false,
            regex: /<h3[^>]*class\s*=\s*["'][^"']*text-xl[^"']*font-bold[^"']*mb-3[^"']*["']/,
            hint: {
                concept: 'Title Spacing',
                strategy: 'mb-3 gives 12px bottom margin',
                solution: '<h3 class="text-xl font-bold mb-3">Title</h3>'
            }
        },
        {
            id: 4,
            description: 'Add description with text-gray-600 mb-4',
            completed: false,
            regex: /<p[^>]*class\s*=\s*["'][^"']*text-gray-600[^"']*mb-4[^"']*["']/,
            hint: {
                concept: 'Paragraph Spacing',
                strategy: 'mb-4 gives 16px bottom margin',
                solution: '<p class="text-gray-600 mb-4">Description</p>'
            }
        },
        {
            id: 5,
            description: 'Create features list with space-y-2',
            completed: false,
            regex: /<ul[^>]*class\s*=\s*["'][^"']*space-y-2[^"']*["']/,
            hint: {
                concept: 'List Spacing',
                strategy: 'space-y-2 adds 8px margin between list items',
                solution: '<ul class="space-y-2 mb-6">...</ul>'
            }
        },
        {
            id: 6,
            description: 'Add list items with flex items-center gap-2',
            completed: false,
            regex: /<li[^>]*class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*gap-2[^"']*["']/,
            hint: {
                concept: 'Flex Gap',
                strategy: 'gap-2 adds 8px space between flex children',
                solution: '<li class="flex items-center gap-2">...</li>'
            }
        },
        {
            id: 7,
            description: 'Add divider with h-px bg-gray-200 my-6',
            completed: false,
            regex: /class\s*=\s*["'][^"']*h-px[^"']*bg-gray-200[^"']*my-6[^"']*["']/,
            hint: {
                concept: 'Divider',
                strategy: 'h-px = 1px height, my-6 = 24px vertical margin',
                solution: 'class="h-px bg-gray-200 my-6"'
            }
        },
        {
            id: 8,
            description: 'Create button with py-3 px-8 (12px vertical, 32px horizontal)',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*py-3[^"']*px-8[^"']*["']/,
            hint: {
                concept: 'Button Padding',
                strategy: 'py-3 = 12px top/bottom, px-8 = 32px left/right',
                solution: '<button class="py-3 px-8 bg-blue-600 text-white rounded-lg">Click</button>'
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
    <title>Spacing Challenge</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-8">
    
    <!-- Task 1: Card Container -->
    <div class="">
        
        <!-- Task 2: Icon Container -->
        <div class="">
            <span class="text-3xl">🚀</span>
        </div>
        
        <!-- Task 3: Title -->
        <h3 class="">Premium Features</h3>
        
        <!-- Task 4: Description -->
        <p class="">
            Unlock powerful features to supercharge your workflow
        </p>
        
        <!-- Task 5: Features List -->
        <ul class="">
            <!-- Task 6: List Items with flex gap -->
            <li class="">
                <span class="text-green-500">✓</span>
                <span>Unlimited projects</span>
            </li>
            <li class="">
                <span class="text-green-500">✓</span>
                <span>Advanced analytics</span>
            </li>
            <li class="">
                <span class="text-green-500">✓</span>
                <span>Priority support</span>
            </li>
            <li class="">
                <span class="text-green-500">✓</span>
                <span>Team collaboration</span>
            </li>
        </ul>
        
        <!-- Task 7: Divider -->
        <div class=""></div>
        
        <div class="flex justify-between items-center">
            <div>
                <p class="text-2xl font-bold">$29<span class="text-base font-normal text-gray-500">/mo</span></p>
            </div>
            <!-- Task 8: Button -->
            <button class="">
                Get Started
            </button>
        </div>
        
    </div>
    
</body>
</html>`
        }
    ]
};
