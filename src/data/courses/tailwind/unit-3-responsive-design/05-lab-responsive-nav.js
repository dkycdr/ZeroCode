import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ResponsiveNav = {
    id: 'tailwind-u3-lab-1-nav',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Mobile-First Navigation',
    duration: '30 min',
    content: `
# Lab: Mobile-First Navigation

## The Mission

Build a responsive navigation that:
- Shows hamburger menu on mobile
- Expands to full nav on desktop
- Smooth transitions
- Accessible

Master mobile-first nav! 📱
`,
    tasks: [
        {
            id: 1,
            description: 'Create header with sticky top-0 bg-white shadow',
            completed: false,
            regex: /<header[^>]*class\s*=\s*["'][^"']*sticky[^"']*top-0[^"']*bg-white[^"']*shadow[^"']*["']/,
            hint: {
                concept: 'Sticky Header',
                strategy: 'sticky top-0 keeps nav visible while scrolling',
                solution: '<header class="sticky top-0 bg-white shadow z-50">...</header>'
            }
        },
        {
            id: 2,
            description: 'Add hamburger button with md:hidden',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*md:hidden[^"']*["']/,
            hint: {
                concept: 'Mobile Menu Toggle',
                strategy: 'md:hidden shows only on mobile',
                solution: '<button class="md:hidden">☰</button>'
            }
        },
        {
            id: 3,
            description: 'Create desktop nav with hidden md:flex md:gap-6',
            completed: false,
            regex: /<nav[^>]*class\s*=\s*["'][^"']*hidden[^"']*md:flex[^"']*md:gap-6[^"']*["']/,
            hint: {
                concept: 'Desktop Navigation',
                strategy: 'hidden on mobile, flex with gap on md+',
                solution: '<nav class="hidden md:flex md:gap-6">...</nav>'
            }
        },
        {
            id: 4,
            description: 'Create mobile menu with absolute top-full left-0 right-0 bg-white shadow-lg',
            completed: false,
            regex: /class\s*=\s*["'][^"']*absolute[^"']*top-full[^"']*left-0[^"']*right-0[^"']*bg-white[^"']*shadow-lg[^"']*["']/,
            hint: {
                concept: 'Mobile Dropdown',
                strategy: 'absolute positioning below header',
                solution: 'class="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"'
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
    <title>Responsive Nav</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Task 1: Sticky Header -->
    <header class="">
        <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
            <div class="text-2xl font-bold">Logo</div>
            
            <!-- Task 2: Mobile Menu Button -->
            <button class="" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                ☰
            </button>
            
            <!-- Task 3: Desktop Nav -->
            <nav class="">
                <a href="#" class="hover:text-blue-600">Home</a>
                <a href="#" class="hover:text-blue-600">Features</a>
                <a href="#" class="hover:text-blue-600">Pricing</a>
                <a href="#" class="hover:text-blue-600">Contact</a>
            </nav>
            
            <!-- Task 4: Mobile Menu Dropdown -->
            <div id="mobile-menu" class="hidden">
                <a href="#" class="block px-4 py-3 hover:bg-gray-50">Home</a>
                <a href="#" class="block px-4 py-3 hover:bg-gray-50">Features</a>
                <a href="#" class="block px-4 py-3 hover:bg-gray-50">Pricing</a>
                <a href="#" class="block px-4 py-3 hover:bg-gray-50">Contact</a>
            </div>
        </div>
    </header>
    
    <main class="p-8">
        <h1 class="text-4xl font-bold mb-4">Responsive Navigation</h1>
        <p class="text-lg">Resize browser to see navigation adapt!</p>
    </main>
</body>
</html>`
        }
    ]
};
