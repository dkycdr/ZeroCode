import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5ModalPositioning = {
    id: 'tailwind-u2-lab-5-modal',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Modal with Positioning',
    duration: '25 min',
    content: `
# Lab: Modal with Positioning

## The Mission

Build a modal overlay using absolute/fixed positioning:
- Full-screen backdrop overlay
- Centered modal card
- Close button
- Proper z-index layering

Perfect for dialogs! 💬
`,
    tasks: [
        {
            id: 1,
            description: 'Create backdrop with fixed inset-0 bg-black/50 z-40',
            completed: false,
            regex: /class\s*=\s*["'][^"']*fixed[^"']*inset-0[^"']*bg-black\/50[^"']*z-40[^"']*["']/,
            hint: {
                concept: 'Modal Backdrop',
                strategy: 'fixed inset-0 covers entire viewport, bg-black/50 for semi-transparent overlay',
                solution: 'class="fixed inset-0 bg-black/50 z-40"'
            }
        },
        {
            id: 2,
            description: 'Create modal container with fixed inset-0 z-50 flex items-center justify-center',
            completed: false,
            regex: /class\s*=\s*["'][^"']*fixed[^"']*inset-0[^"']*z-50[^"']*flex[^"']*items-center[^"']*justify-center[^"']*["']/,
            hint: {
                concept: 'Modal Container',
                strategy: 'fixed inset-0 for full coverage, flex centering, z-50 above backdrop',
                solution: 'class="fixed inset-0 z-50 flex items-center justify-center p-4"'
            }
        },
        {
            id: 3,
            description: 'Style modal card with bg-white rounded-xl shadow-2xl max-w-md w-full',
            completed: false,
            regex: /class\s*=\s*["'][^"']*bg-white[^"']*rounded-xl[^"']*shadow-2xl[^"']*max-w-md[^"']*w-full[^"']*["']/,
            hint: {
                concept: 'Modal Card',
                strategy: 'max-w-md limits width, w-full makes it responsive, shadow for depth',
                solution: 'class="bg-white rounded-xl shadow-2xl max-w-md w-full"'
            }
        },
        {
            id: 4,
            description: 'Add close button with absolute top-4 right-4',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*absolute[^"']*top-4[^"']*right-4[^"']*["']/,
            hint: {
                concept: 'Close Button',
                strategy: 'absolute positioning in top-right corner of modal',
                solution: '<button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">×</button>'
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
    <title>Modal Demo</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    
    <button onclick="document.getElementById('modal').classList.remove('hidden')" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
        Open Modal
    </button>
    
    <!-- Modal -->
    <div id="modal" class="hidden">
        <!-- Task 1: Backdrop -->
        <div class="" 
             onclick="document.getElementById('modal').classList.add('hidden')"></div>
        
        <!-- Task 2: Modal Container -->
        <div class="">
            <!-- Task 3: Modal Card -->
            <div class="relative">
                <!-- Task 4: Close Button -->
                <button class=""
                        onclick="document.getElementById('modal').classList.add('hidden')">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                
                <!-- Modal Header -->
                <div class="p-6 border-b">
                    <h2 class="text-2xl font-bold text-gray-900">Modal Title</h2>
                    <p class="text-gray-600 mt-1">This is a modal dialog example</p>
                </div>
                
                <!-- Modal Body -->
                <div class="p-6">
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Modals are used for dialogs, notifications, and forms that require user attention.
                        They overlay the main content and block interaction until dismissed.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        This modal uses fixed positioning with flexbox centering for perfect alignment,
                        and a semi-transparent backdrop to focus attention on the modal content.
                    </p>
                </div>
                
                <!-- Modal Footer -->
                <div class="p-6 border-t flex justify-end gap-3">
                    <button onclick="document.getElementById('modal').classList.add('hidden')"
                            class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                        Cancel
                    </button>
                    <button onclick="alert('Confirmed!'); document.getElementById('modal').classList.add('hidden')"
                            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>`
        }
    ]
};
