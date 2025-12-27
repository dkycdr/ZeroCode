import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2ResponsiveGrid = {
    id: 'tailwind-u3-lab-2-grid',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Responsive Product Grid',
    duration: '25 min',
    content: `
# Lab: Responsive Product Grid

Build a product grid that adapts from 1 column (mobile) to 4 columns (desktop).
`,
    tasks: [
        {
            id: 1,
            description: 'Create grid with grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
            completed: false,
            regex: /class\s*=\s*["'][^"']*grid[^"']*grid-cols-1[^"']*sm:grid-cols-2[^"']*lg:grid-cols-3[^"']*xl:grid-cols-4[^"']*gap-6[^"']*["']/,
            hint: {
                concept: 'Responsive Grid',
                strategy: 'Progressive columns: 1 → 2 → 3 → 4',
                solution: 'class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"'
            }
        },
        {
            id: 2,
            description: 'Add responsive padding px-4 sm:px-6 lg:px-8',
            completed: false,
            regex: /class\s*=\s*["'][^"']*px-4[^"']*sm:px-6[^"']*lg:px-8[^"']*["']/,
            hint: {
                concept: 'Responsive Spacing',
                strategy: 'Padding grows with screen size',
                solution: 'class="px-4 sm:px-6 lg:px-8"'
            }
        },
        {
            id: 3,
            description: 'Create responsive card image with h-48 sm:h-56 lg:h-64',
            completed: false,
            regex: /<img[^>]*class\s*=\s*["'][^"']*h-48[^"']*sm:h-56[^"']*lg:h-64[^"']*["']/,
            hint: {
                concept: 'Responsive Height',
                strategy: 'Image height scales up',
                solution: '<img class="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-lg" src="...">'
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
    <title>Responsive Grid</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Task 2: Responsive Container Padding -->
    <div class="">
        <h1 class="text-3xl md:text-4xl font-bold mb-8">Products</h1>
        
        <!-- Task 1: Responsive Grid -->
        <div class="">
            ${[1,2,3,4,5,6,7,8].map(i => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <!-- Task 3: Responsive Image -->
                <img class="" 
                     src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                     alt="Product ${i}">
                <div class="p-4">
                    <h3 class="text-lg font-bold">Product ${i}</h3>
                    <p class="text-gray-600 text-sm mt-2">Description</p>
                    <p class="text-xl font-bold text-blue-600 mt-4">$99</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</body>
</html>`
        }
    ]
};

export const lab3ResponsiveTypography = {
    id: 'tailwind-u3-lab-3-typography',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Responsive Typography Scale',
    duration: '20 min',
    content: `
# Lab: Responsive Typography Scale

Create a blog post with properly scaled responsive typography.
`,
    tasks: [
        {
            id: 1,
            description: 'Create main heading with text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
            completed: false,
            regex: /<h1[^>]*class\s*=\s*["'][^"']*text-3xl[^"']*sm:text-4xl[^"']*md:text-5xl[^"']*lg:text-6xl[^"']*["']/,
            hint: {
                concept: 'Responsive Heading',
                strategy: 'Scale up by one size per breakpoint',
                solution: '<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">...</h1>'
            }
        },
        {
            id: 2,
            description: 'Add body text with text-base md:text-lg leading-relaxed',
            completed: false,
            regex: /<p[^>]*class\s*=\s*["'][^"']*text-base[^"']*md:text-lg[^"']*leading-relaxed[^"']*["']/,
            hint: {
                concept: 'Responsive Body Text',
                strategy: 'Larger text and relaxed line height for desktop',
                solution: '<p class="text-base md:text-lg leading-relaxed">...</p>'
            }
        },
        {
            id: 3,
            description: 'Add responsive container with max-w-2xl md:max-w-3xl lg:max-w-4xl',
            completed: false,
            regex: /class\s*=\s*["'][^"']*max-w-2xl[^"']*md:max-w-3xl[^"']*lg:max-w-4xl[^"']*["']/,
            hint: {
                concept: 'Responsive Container Width',
                strategy: 'Wider container on larger screens',
                solution: 'class="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"'
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
    <title>Responsive Typography</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-4 sm:p-6 md:p-8">
    <!-- Task 3: Responsive Container -->
    <article class="">
        <!-- Task 1: Responsive Heading -->
        <h1 class="">
            The Art of Responsive Typography
        </h1>
        
        <p class="text-gray-600 text-sm sm:text-base mt-4 mb-8">
            Published on December 27, 2025
        </p>
        
        <!-- Task 2: Responsive Body Text -->
        <p class="">
            Typography is one of the most important aspects of web design. It affects readability,
            user experience, and the overall aesthetic of your website. In responsive design,
            typography must adapt gracefully across all screen sizes.
        </p>
        
        <p class="text-base md:text-lg leading-relaxed mt-4">
            When implementing responsive typography, consider not just the size of the text,
            but also line height, line length, and spacing. All of these factors contribute
            to readability and should scale appropriately.
        </p>
    </article>
</body>
</html>`
        }
    ]
};

export const lab4HideShowElements = {
    id: 'tailwind-u3-lab-4-hide-show',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Hide/Show Responsive Elements',
    duration: '15 min',
    content: `
# Lab: Hide/Show Responsive Elements

Master showing and hiding elements based on screen size.
`,
    tasks: [
        {
            id: 1,
            description: 'Show element only on mobile with block md:hidden',
            completed: false,
            regex: /class\s*=\s*["'][^"']*block[^"']*md:hidden[^"']*["']/,
            hint: {
                concept: 'Mobile Only',
                strategy: 'Visible by default, hidden on md+',
                solution: 'class="block md:hidden"'
            }
        },
        {
            id: 2,
            description: 'Show element only on desktop with hidden md:block',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hidden[^"']*md:block[^"']*["']/,
            hint: {
                concept: 'Desktop Only',
                strategy: 'Hidden by default, visible on md+',
                solution: 'class="hidden md:block"'
            }
        },
        {
            id: 3,
            description: 'Show element only on tablet with hidden sm:block lg:hidden',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hidden[^"']*sm:block[^"']*lg:hidden[^"']*["']/,
            hint: {
                concept: 'Specific Range',
                strategy: 'Hidden, then show, then hide again',
                solution: 'class="hidden sm:block lg:hidden"'
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
    <title>Hide/Show Elements</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-8">
    <h1 class="text-3xl font-bold mb-8">Responsive Visibility</h1>
    
    <!-- Task 1: Mobile Only -->
    <div class="">
        <p class="bg-blue-100 p-4 rounded">📱 Visible only on MOBILE</p>
    </div>
    
    <!-- Task 2: Desktop Only -->
    <div class="">
        <p class="bg-green-100 p-4 rounded">💻 Visible only on DESKTOP (md+)</p>
    </div>
    
    <!-- Task 3: Tablet Only -->
    <div class="">
        <p class="bg-purple-100 p-4 rounded">📱 Visible only on TABLET (sm to lg)</p>
    </div>
</body>
</html>`
        }
    ]
};

export const quiz3ResponsiveDesign = {
    id: 'tailwind-u3-quiz-3',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 3 Quiz: Responsive Design',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What does mobile-first mean in Tailwind?',
            options: [
                'Design for mobile only',
                'Unprefixed utilities apply to mobile, use breakpoints to enhance',
                'Use max-width media queries',
                'Mobile devices load faster'
            ],
            correctIndex: 1,
            explanation: 'Mobile-first means unprefixed utilities apply to all sizes, and you use breakpoint prefixes (sm:, md:, etc.) to progressively enhance for larger screens.'
        },
        {
            id: 'q2',
            question: 'Which breakpoint prefix targets screens 768px and wider?',
            options: [
                'sm:',
                'md:',
                'lg:',
                'xl:'
            ],
            correctIndex: 1,
            explanation: 'md: targets screens 768px and wider (tablets and above).'
        },
        {
            id: 'q3',
            question: 'How do you show an element only on mobile?',
            options: [
                'block sm:hidden',
                'hidden sm:block',
                'mobile:block',
                'show-mobile'
            ],
            correctIndex: 0,
            explanation: 'block (mobile default) sm:hidden (hide on sm and above) shows only on mobile.'
        },
        {
            id: 'q4',
            question: 'What is the difference between media queries and container queries?',
            options: [
                'No difference',
                'Media queries use viewport, container queries use parent size',
                'Container queries are faster',
                'Media queries are deprecated'
            ],
            correctIndex: 1,
            explanation: 'Media queries respond to viewport size, while container queries respond to the parent container\'s size.'
        },
        {
            id: 'q5',
            question: 'Which responsive grid is correct for 1 col → 2 cols → 4 cols?',
            options: [
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                'grid-1 md:grid-2 lg:grid-4',
                'cols-1 md:cols-2 lg:cols-4',
                'grid grid-1-2-4'
            ],
            correctIndex: 0,
            explanation: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 creates a progressive grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop).'
        },
        {
            id: 'q6',
            question: 'How do you create responsive text that scales from 16px to 24px?',
            options: [
                'text-base lg:text-2xl',
                'text-16 lg:text-24',
                'font-base lg:font-2xl',
                'size-base lg:size-2xl'
            ],
            correctIndex: 0,
            explanation: 'text-base (16px) lg:text-2xl (24px) scales text size responsively.'
        }
    ]
};
