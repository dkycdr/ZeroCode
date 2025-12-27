import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1FirstPage = {
    id: 'tailwind-u0-lab-1-first-page',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Your First Tailwind Page',
    duration: '20 min',
    content: `
# Lab: Your First Tailwind Page

## The Mission

Build a complete webpage using only Tailwind utility classes. No custom CSS allowed!

## Requirements

Create a personal profile card with:
1. Centered layout
2. Profile image
3. Name and job title
4. Short bio
5. Social media buttons
6. Hover effects

## Design Specs

- **Card**: White background, rounded corners, shadow
- **Image**: Circular,128px diameter
- **Name**: Large, bold text
- **Job Title**: Smaller, gray text
- **Bio**: Medium gray text, good line height
- **Buttons**: Blue background, white text, rounded

Let's build it step by step! 🎨
`,
    tasks: [
        {
            id: 1,
            description: 'Create a centered container with min-h-screen and flexbox',
            completed: false,
            regex: /class\s*=\s*["'][^"']*min-h-screen[^"']*flex[^"']*items-center[^"']*justify-center[^"']*["']/,
            hint: {
                concept: 'Centering with Flexbox',
                strategy: 'Use min-h-screen for full height, flex for flexbox, items-center and justify-center for centering',
                solution: 'class="min-h-screen flex items-center justify-center bg-gray-100"'
            }
        },
        {
            id: 2,
            description: 'Create a white card with padding, rounded corners, and shadow',
            completed: false,
            regex: /class\s*=\s*["'][^"']*bg-white[^"']*p-\d+[^"']*rounded[^"']*shadow[^"']*["']/,
            hint: {
                concept: 'Card Component',
                strategy: 'Use bg-white, p-8 for padding, rounded-lg for corners, shadow-lg for depth',
                solution: 'class="bg-white p-8 rounded-lg shadow-lg max-w-md"'
            }
        },
        {
            id: 3,
            description: 'Add a circular image (w-32 h-32 rounded-full)',
            completed: false,
            regex: /<img[^>]*class\s*=\s*["'][^"']*w-32[^"']*h-32[^"']*rounded-full[^"']*["']/,
            hint: {
                concept: 'Circular Image',
                strategy: 'Use w-32 h-32 for size, rounded-full for circle, mx-auto to center',
                solution: '<img src="..." class="w-32 h-32 rounded-full mx-auto mb-4">'
            }
        },
        {
            id: 4,
            description: 'Add heading with text-2xl font-bold text-center',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-2xl[^"']*font-bold[^"']*text-center[^"']*["']/,
            hint: {
                concept: 'Typography',
                strategy: 'text-2xl for size, font-bold for weight, text-center for alignment',
                solution: 'class="text-2xl font-bold text-center mb-2"'
            }
        },
        {
            id: 5,
            description: 'Add job title with text-gray-600 text-center',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-gray-600[^"']*text-center[^"']*["']/,
            hint: {
                concept: 'Color Utilities',
                strategy: 'text-gray-600 for muted color, text-center for alignment',
                solution: 'class="text-gray-600 text-center mb-4"'
            }
        },
        {
            id: 6,
            description: 'Add bio paragraph with leading-relaxed',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-gray-700[^"']*leading-relaxed[^"']*["']/,
            hint: {
                concept: 'Line Height',
                strategy: 'leading-relaxed increases line height for readability',
                solution: 'class="text-gray-700 leading-relaxed text-center mb-6"'
            }
        },
        {
            id: 7,
            description: 'Create a flex container for buttons',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*gap-\d+[^"']*justify-center[^"']*["']/,
            hint: {
                concept: 'Flexbox Layout',
                strategy: 'flex for flexbox, gap-4 for spacing, justify-center to center buttons',
                solution: 'class="flex gap-4 justify-center"'
            }
        },
        {
            id: 8,
            description: 'Add button with hover effect (bg-blue-500 hover:bg-blue-600)',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*bg-blue-500[^"']*hover:bg-blue-\d+[^"']*["']/,
            hint: {
                concept: 'Hover States',
                strategy: 'Use hover: prefix for hover styles',
                solution: 'class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"'
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
    <title>My Profile Card</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Task 1: Create centered container -->
    <div class="">
        
        <!-- Task 2: Create white card -->
        <div class="">
            
            <!--  Task 3: Add circular image -->
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ZeroCode" alt="Profile">
            
            <!-- Task 4: Add name heading -->
            <h1 class="">Your Name</h1>
            
            <!-- Task 5: Add job title -->
            <p class="">Full Stack Developer</p>
            
            <!-- Task 6: Add bio paragraph -->
            <p class="">
                Passionate about building beautiful and functional web applications.
                Love working with modern technologies and learning new things every day.
            </p>
            
            <!-- Task 7: Create button container -->
            <div class="">
                <!-- Task 8: Add social buttons with hover effects -->
                <button class="">
                    Twitter
                </button>
                <button class="">
                    GitHub
                </button>
                <button class="">
                    LinkedIn
                </button>
            </div>
            
        </div>
    </div>
</body>
</html>`
        }
    ]
};
