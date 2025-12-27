import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1MicroInteractions = {
    id: 'tailwind-u8-lab-1-micro',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Building Micro-Interactions',
    duration: '35 min',
    content: `
# Lab: Building Micro-Interactions

## Mission

Create a set of interactive components that feel alive and responsive. Every hover, click, and focus should provide satisfying feedback.

## What Are Micro-Interactions?

Small animations that make users feel in control:
- Button hover effects
- Card lift on hover
- Input focus animations
- Loading spinners
- Notification pings

## Requirements

Build a component showcase with:
1. Tactile buttons (hover + active states)
2. Floating cards
3. Animated inputs
4. Loading indicators

Make every interaction feel premium! ✨
\`,
    tasks: [
        {
            id: 1,
            description: 'Create a button with transition-all duration-200 for smooth animations',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*transition[^"']*duration[^"']*["']/,
            hint: {
                concept: 'Transition Setup',
                strategy: 'Apply transition-all or transition-transform with a duration to enable smooth property changes.',
                solution: 'class="transition-all duration-200"'
            }
        },
        {
            id: 2,
            description: 'Add hover lift effect: hover:-translate-y-1 hover:shadow-lg',
            completed: false,
            regex: /hover:-translate-y-[12][^"']*hover:shadow-(lg|xl)/,
            hint: {
                concept: 'Hover Lift Effect',
                strategy: 'Use negative translate-y to move element up on hover, combined with larger shadow for depth.',
                solution: 'class="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"'
            }
        },
        {
            id: 3,
            description: 'Add active press effect: active:translate-y-0 active:shadow-md',
            completed: false,
            regex: /active:translate-y-0[^"']*active:shadow/,
            hint: {
                concept: 'Active Press Effect',
                strategy: 'When button is pressed (active), return it to original position and reduce shadow for "pressed" feel.',
                solution: 'class="... active:translate-y-0 active:shadow-md"'
            }
        },
        {
            id: 4,
            description: 'Create a scale grow hover effect: hover:scale-105',
            completed: false,
            regex: /hover:scale-10[05]/,
            hint: {
                concept: 'Scale Transform',
                strategy: 'Use hover:scale-105 to slightly enlarge element on hover. Works great for cards and images.',
                solution: 'class="transition-transform duration-300 hover:scale-105"'
            }
        },
        {
            id: 5,
            description: 'Add transition-colors to an input for smooth focus effect',
            completed: false,
            regex: /<input[^>]*class\s*=\s*["'][^"']*transition/,
            hint: {
                concept: 'Input Focus Transitions',
                strategy: 'Use transition-colors so border color change on focus is animated, not instant.',
                solution: 'class="transition-colors duration-200 border-2 focus:border-blue-500"'
            }
        },
        {
            id: 6,
            description: 'Create a focus ring animation: focus:ring-2 focus:ring-blue-500',
            completed: false,
            regex: /focus:ring-[24][^"']*focus:ring-(blue|offset)/,
            hint: {
                concept: 'Focus Ring',
                strategy: 'Use focus:ring-2 and focus:ring-blue-500 for accessible focus indicator that also looks good.',
                solution: 'class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"'
            }
        },
        {
            id: 7,
            description: 'Add a loading spinner with animate-spin',
            completed: false,
            regex: /animate-spin/,
            hint: {
                concept: 'Built-in Animations',
                strategy: 'Use animate-spin for loading indicators. Works great with SVG spinner icons.',
                solution: 'class="animate-spin h-5 w-5 text-blue-500"'
            }
        },
        {
            id: 8,
            description: 'Create a notification ping effect with animate-ping',
            completed: false,
            regex: /animate-ping/,
            hint: {
                concept: 'Ping Animation',
                strategy: 'Use animate-ping for notification badges. Layer a solid circle over the pinging one.',
                solution: '<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: \`<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-12">Micro-Interactions Showcase</h1>
        
        <!-- BUTTONS SECTION -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6">Tactile Buttons</h2>
            <div class="flex gap-6">
                <!-- Task 1-3: Create button with hover lift and active press -->
                <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md">
                    Hover Me
                </button>
                
                <!-- Task 4: Scale grow effect -->
                <button class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md">
                    Scale Effect
                </button>
            </div>
        </section>
        
        <!-- CARDS SECTION -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6">Floating Cards</h2>
            <div class="grid grid-cols-2 gap-6">
                <!-- Card with hover lift -->
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="font-bold text-lg mb-2">Hoverable Card</h3>
                    <p class="text-gray-600">Hover to see the lift effect</p>
                </div>
                
                <!-- Card with scale effect -->
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="font-bold text-lg mb-2">Scalable Card</h3>
                    <p class="text-gray-600">Hover to see the grow effect</p>
                </div>
            </div>
        </section>
        
        <!-- INPUTS SECTION -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6">Animated Inputs</h2>
            <div class="max-w-md space-y-4">
                <!-- Task 5-6: Input with focus animation -->
                <input 
                    type="text" 
                    placeholder="Focus me..." 
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none">
            </div>
        </section>
        
        <!-- LOADING SECTION -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6">Loading Indicators</h2>
            <div class="flex items-center gap-8">
                <!-- Task 7: Spinning loader -->
                <div class="flex items-center gap-3">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    <span>Loading...</span>
                </div>
                
                <!-- Task 8: Notification ping -->
                <div class="relative">
                    <button class="bg-gray-200 p-4 rounded-full">
                        🔔
                    </button>
                    <span class="absolute top-0 right-0 flex h-3 w-3">
                        <!-- Add ping animation here -->
                        <span class="relative rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
            </div>
        </section>
    </div>
</body>
</html>\`
        }
    ]
        `
};
