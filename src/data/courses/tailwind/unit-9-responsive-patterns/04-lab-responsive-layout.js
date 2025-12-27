import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ResponsiveLayout = {
    id: 'tailwind-u9-lab-1-responsive-layout',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Building a Responsive Layout',
    duration: '35 min',
    content: `
# Lab: Building a Responsive Layout

## Mission

Build a complete responsive page layout that works beautifully from mobile to desktop. You'll create a header with adaptive navigation and a main content area with responsive grid.

## Requirements

1. **Header**: Logo + hamburger icon on mobile, full nav on desktop
2. **Hero**: Stacked on mobile, side-by-side on desktop
3. **Cards Grid**: 1 column → 2 columns → 4 columns
4. **Footer**: Responsive multi-column layout

## The Challenge

Make it feel native at every screen size! 📱💻🖥️
`,
    tasks: [
        {
            id: 1,
            description: 'Create a mobile menu button that hides on desktop: md:hidden',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*md:hidden[^"']*["']/,
            hint: {
                concept: 'Responsive Visibility',
                strategy: 'Use md:hidden to hide the hamburger menu button on medium screens and up.',
                solution: '<button class="md:hidden">☰</button>'
            }
        },
        {
            id: 2,
            description: 'Create desktop navigation that is hidden on mobile: hidden md:flex',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hidden[^"']*md:flex[^"']*["']/,
            hint: {
                concept: 'Show on Desktop',
                strategy: 'Use hidden to hide by default, then md:flex to show as flexbox on medium screens and up.',
                solution: '<nav class="hidden md:flex gap-6">...</nav>'
            }
        },
        {
            id: 3,
            description: 'Create a hero section with flex-col on mobile, md:flex-row on desktop',
            completed: false,
            regex: /flex-col[^"']*md:flex-row/,
            hint: {
                concept: 'Responsive Flex Direction',
                strategy: 'Use flex-col for stacked mobile layout, md:flex-row for side-by-side desktop layout.',
                solution: 'class="flex flex-col md:flex-row gap-8"'
            }
        },
        {
            id: 4,
            description: 'Create responsive heading: text-3xl on mobile, md:text-5xl on desktop',
            completed: false,
            regex: /text-3xl[^"']*md:text-5xl|text-2xl[^"']*md:text-4xl/,
            hint: {
                concept: 'Responsive Typography',
                strategy: 'Start with smaller text for mobile, use md: prefix to increase size on larger screens.',
                solution: 'class="text-3xl md:text-5xl font-bold"'
            }
        },
        {
            id: 5,
            description: 'Create responsive grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
            completed: false,
            regex: /grid-cols-1[^"']*sm:grid-cols-2[^"']*lg:grid-cols-[34]/,
            hint: {
                concept: 'Responsive Grid Columns',
                strategy: 'Start with single column, add more columns at larger breakpoints.',
                solution: 'class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"'
            }
        },
        {
            id: 6,
            description: 'Add responsive padding: px-4 on mobile, md:px-8, lg:px-16',
            completed: false,
            regex: /px-4[^"']*md:px-8|px-4[^"']*lg:px-/,
            hint: {
                concept: 'Responsive Spacing',
                strategy: 'Increase padding at larger breakpoints for better use of screen space.',
                solution: 'class="px-4 md:px-8 lg:px-16"'
            }
        },
        {
            id: 7,
            description: 'Create responsive text alignment: text-center on mobile, md:text-left on desktop',
            completed: false,
            regex: /text-center[^"']*md:text-left/,
            hint: {
                concept: 'Responsive Alignment',
                strategy: 'Center text on mobile for balance, left-align on desktop for readability.',
                solution: 'class="text-center md:text-left"'
            }
        },
        {
            id: 8,
            description: 'Create footer columns: grid-cols-2 on mobile, md:grid-cols-4 on desktop',
            completed: false,
            regex: /grid-cols-2[^"']*md:grid-cols-4/,
            hint: {
                concept: 'Footer Column Layout',
                strategy: 'Use 2 columns on mobile to avoid too-narrow columns, expand to 4 on desktop.',
                solution: 'class="grid grid-cols-2 md:grid-cols-4 gap-8"'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    
    <!-- HEADER -->
    <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="text-2xl font-bold text-blue-600">Logo</div>
                
                <!-- Task 1: Mobile menu button (hidden on desktop) -->
                <button class="">☰</button>
                
                <!-- Task 2: Desktop navigation (hidden on mobile) -->
                <nav class="">
                    <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#" class="text-gray-600 hover:text-blue-600">Products</a>
                    <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
                    <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
                </nav>
            </div>
        </div>
    </header>
    
    <!-- HERO SECTION -->
    <!-- Task 3: Make this flex-col on mobile, flex-row on desktop -->
    <!-- Task 6: Add responsive padding -->
    <section class="max-w-7xl mx-auto py-16 flex gap-8">
        <div class="flex-1">
            <!-- Task 4: Responsive heading size -->
            <!-- Task 7: Responsive text alignment -->
            <h1 class="font-bold mb-4">
                Build Beautiful Websites Faster
            </h1>
            <p class="text-gray-600 text-lg mb-6">
                Learn modern web development with our comprehensive courses. 
                From HTML to React, we've got you covered.
            </p>
            <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
            </button>
        </div>
        <div class="flex-1">
            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Hero+Image" class="rounded-xl shadow-lg" alt="Hero">
        </div>
    </section>
    
    <!-- CARDS SECTION -->
    <section class="max-w-7xl mx-auto py-16 px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <!-- Task 5: Responsive grid columns -->
        <div class="grid gap-6">
            <div class="bg-white p-6 rounded-xl shadow-md">
                <h3 class="font-bold text-lg mb-2">HTML5 Fundamentals</h3>
                <p class="text-gray-600">Learn the foundation of web development</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md">
                <h3 class="font-bold text-lg mb-2">CSS3 Mastery</h3>
                <p class="text-gray-600">Style beautiful, responsive websites</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md">
                <h3 class="font-bold text-lg mb-2">JavaScript Basics</h3>
                <p class="text-gray-600">Add interactivity to your pages</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md">
                <h3 class="font-bold text-lg mb-2">React.js</h3>
                <p class="text-gray-600">Build modern web applications</p>
            </div>
        </div>
    </section>
    
    <!-- FOOTER -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Task 8: Responsive footer columns -->
            <div class="grid gap-8">
                <div>
                    <h4 class="font-bold mb-4">Company</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Resources</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>Blog</li>
                        <li>Docs</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Legal</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Social</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>Discord</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`
        }
    ]
};
