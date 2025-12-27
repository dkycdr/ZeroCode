import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1DarkModeToggle = {
    id: 'tailwind-u7-lab-1-toggle',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Building a Dark Mode Toggle',
    duration: '30 min',
    content: `
# Lab: Building a Dark Mode Toggle

## Mission

Build a complete dark mode system that:
1. Toggles between light and dark themes
2. Saves preference to localStorage
3. Respects system preference  
4. Has no flash on page load

## The Challenge

Users expect dark mode to "just work" — no flashing, no forgetting their preference. Let's build it right!

## Requirements

- Toggle button with sun/moon icons
- Smooth transition between themes
- Persistent preference storage
- Flash-free page loads

Let's make it perfect! 🌙
`,
    tasks: [
        {
            id: 1,
            description: 'Configure Tailwind to use class strategy: add tailwind.config with darkMode: "class"',
            completed: false,
            regex: /darkMode.*class|darkMode:\\s*['"']class['"']/,
            hint: {
                concept: 'Dark Mode Strategy',
                strategy: 'Use the CDN config to set darkMode to "class". This enables manual toggle control.',
                solution: 'tailwind.config = { darkMode: "class" }'
            }
        },
        {
            id: 2,
            description: 'Create a page container with light and dark background: bg-gray-50 dark:bg-gray-950',
            completed: false,
            regex: /class\\s*=\\s*["'][^"']*bg-gray-50[^"']*dark:bg-gray-9[05]0[^"']*["']/,
            hint: {
                concept: 'Background Layers',
                strategy: 'Use bg-gray-50 for light mode page background, dark:bg-gray-950 for dark mode.',
                solution: 'class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors"'
            }
        },
        {
            id: 3,
            description: 'Create a card with dark mode styles: bg-white dark:bg-gray-900',
            completed: false,
            regex: /class\\s*=\\s*["'][^"']*bg-white[^"']*dark:bg-gray-9[0-9]+[^"']*["']/,
            hint: {
                concept: 'Surface Colors',
                strategy: 'Cards should be white in light mode and gray-900 in dark mode.',
                solution: 'class="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-none p-6"'
            }
        },
        {
            id: 4,
            description: 'Add text with proper dark mode contrast: text-gray-900 dark:text-white',
            completed: false,
            regex: /text-gray-900[^"']*dark:text-white|dark:text-white[^"']*text-gray-900/,
            hint: {
                concept: 'Text Contrast',
                strategy: 'Primary text should be gray-900 in light mode and white in dark mode.',
                solution: 'class="text-gray-900 dark:text-white font-bold"'
            }
        },
        {
            id: 5,
            description: 'Add secondary text: text-gray-600 dark:text-gray-400',
            completed: false,
            regex: /text-gray-600[^"']*dark:text-gray-[34]00|dark:text-gray-[34]00[^"']*text-gray-600/,
            hint: {
                concept: 'Text Hierarchy',
                strategy: 'Secondary text uses lighter colors. Gray-600 for light, gray-400 for dark.',
                solution: 'class="text-gray-600 dark:text-gray-400"'
            }
        },
        {
            id: 6,
            description: 'Create toggle button showing: 🌙 in light mode (hidden when dark), ☀️ in dark mode (hidden when light)',
            completed: false,
            regex: /dark:hidden|hidden dark:block|dark:inline/,
            hint: {
                concept: 'Conditional Visibility',
                strategy: 'Use dark:hidden to hide moon in dark mode, and hidden dark:block to show sun only in dark mode.',
                solution: '<span class="dark:hidden">🌙</span><span class="hidden dark:block">☀️</span>'
            }
        },
        {
            id: 7,
            description: 'Add transition-colors duration-300 to elements for smooth theme switching',
            completed: false,
            regex: /transition-colors[^"']*duration|transition[^"']*duration/,
            hint: {
                concept: 'Smooth Transitions',
                strategy: 'Add transition-colors and duration-300 to make color changes animate smoothly.',
                solution: 'class="bg-white dark:bg-gray-900 transition-colors duration-300"'
            }
        },
        {
            id: 8,
            description: 'Add JavaScript to toggle dark class on html element',
            completed: false,
            regex: /classList\\.(toggle|add|remove).*dark|documentElement.*dark/,
            hint: {
                concept: 'JavaScript Toggle',
                strategy: 'Use document.documentElement.classList.toggle("dark") to switch themes.',
                solution: 'document.documentElement.classList.toggle("dark")'
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
    <title>Dark Mode Toggle</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // Task 1: Configure Tailwind dark mode
        tailwind.config = {
            // Add darkMode config here
        }
    </script>
    
    <!-- Flash Prevention Script (runs before page render) -->
    <script>
        if (localStorage.theme === 'dark' || 
            (!localStorage.theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    </script>
</head>
<!-- Task 2: Add page container with dark mode background -->
<body class="">
    
    <!-- Toggle Button (fixed top-right) -->
    <button 
        id="theme-toggle" 
        class="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:scale-110 transition-transform"
        onclick="toggleTheme()">
        <!-- Task 6: Add conditional icons -->
        <span class="text-2xl"></span>
    </button>

    <div class="max-w-2xl mx-auto py-20 px-4">
        
        <!-- Task 3: Create adaptive card -->
        <div class="">
            <!-- Task 4: Add primary text with dark mode -->
            <h1 class="text-3xl font-bold mb-4">Dark Mode Demo</h1>
            
            <!-- Task 5: Add secondary text -->
            <p class="mb-6">
                This card adapts to your theme preference. 
                Click the toggle button to switch between light and dark modes.
            </p>
            
            <div class="flex gap-4">
                <button class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Primary Action
                </button>
                <button class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Secondary
                </button>
            </div>
        </div>
        
    </div>

    <script>
        // Task 8: Toggle function
        function toggleTheme() {
            // Add your toggle logic here
            
            // Save preference
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }
    </script>
</body>
</html>`
        }
    ]
};
