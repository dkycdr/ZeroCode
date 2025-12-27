import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1TypographyShowcase = {
    id: 'tailwind-u1-lab-1-typography',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Typography Playground',
    duration: '20 min',
    content: `
# Lab: Typography Playground

## The Mission

Create a typography showcase page demonstrating various text styles.

## Requirements

1. Page title with large, bold text
2. Section headings at different sizes
3. Body paragraphs with good readability
4. Styled quote block
5. Uppercase labels
6. Monospace code snippet

Let's master typography utilities! ✍️
`,
    tasks: [
        {
            id: 1,
            description: 'Create main heading with text-5xl font-black',
            completed: false,
            regex: /<h1[^>]*class\s*=\s*["'][^"']*text-5xl[^"']*font-black[^"']*["']/,
            hint: {
                concept: 'Large Headings',
                strategy: 'Use text-5xl for size, font-black for maximum weight',
                solution: '<h1 class="text-5xl font-black">Typography</h1>'
            }
        },
        {
            id: 2,
            description: 'Add subtitle with text-xl text-gray-600 leading-relaxed',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-xl[^"']*text-gray-600[^"']*leading-relaxed[^"']*["']/,
            hint: {
                concept: 'Subtitles',
                strategy: 'text-xl for size, text-gray-600 for muted color, leading-relaxed for spacing',
                solution: 'class="text-xl text-gray-600 leading-relaxed"'
            }
        },
        {
            id: 3,
            description: 'Create section heading with text-3xl font-bold mb-4',
            completed: false,
            regex: /<h2[^>]*class\s*=\s*["'][^"']*text-3xl[^"']*font-bold[^"']*mb-4[^"']*["']/,
            hint: {
                concept: 'Section Headings',
                strategy: 'text-3xl for H2 size, font-bold for emphasis, mb-4 for spacing',
                solution: '<h2 class="text-3xl font-bold mb-4">Section</h2>'
            }
        },
        {
            id: 4,
            description: 'Add paragraph with text-lg leading-relaxed text-gray-700',
            completed: false,
            regex: /<p[^>]*class\s*=\s*["'][^"']*text-lg[^"']*leading-relaxed[^"']*text-gray-700[^"']*["']/,
            hint: {
                concept: 'Body Text',
                strategy: 'text-lg for comfortable reading, leading-relaxed for line height',
                solution: '<p class="text-lg leading-relaxed text-gray-700">Text...</p>'
            }
        },
        {
            id: 5,
            description: 'Create blockquote with text-2xl font-medium italic text-gray-600',
            completed: false,
            regex: /<blockquote[^>]*class\s*=\s*["'][^"']*text-2xl[^"']*font-medium[^"']*italic[^"']*text-gray-600[^"']*["']/,
            hint: {
                concept: 'Quotes',
                strategy: 'text-2xl for emphasis, font-medium italic for quote style',
                solution: '<blockquote class="text-2xl font-medium italic text-gray-600 border-l-4 border-blue-500 pl-4">Quote</blockquote>'
            }
        },
        {
            id: 6,
            description: 'Add uppercase label with text-xs uppercase tracking-wider text-gray-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-xs[^"']*uppercase[^"']*tracking-wider[^"']*text-gray-500[^"']*["']/,
            hint: {
                concept: 'Labels',
                strategy: 'text-xs for small size, uppercase + tracking-wider for spacing',
                solution: 'class="text-xs uppercase tracking-wider text-gray-500"'
            }
        },
        {
            id: 7,
            description: 'Create code block with font-mono text-sm bg-gray-900 text-green-400',
            completed: false,
            regex: /<code[^>]*class\s*=\s*["'][^"']*font-mono[^"']*text-sm[^"']*bg-gray-900[^"']*text-green-400[^"']*["']/,
            hint: {
                concept: 'Code Blocks',
                strategy: 'font-mono for monospace, bg-gray-900 + text-green-400 for terminal look',
                solution: '<code class="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded block">console.log("Hello")</code>'
            }
        },
        {
            id: 8,
            description: 'Add link with text-blue-600 underline hover:no-underline',
            completed: false,
            regex: /<a[^>]*class\s*=\s*["'][^"']*text-blue-600[^"']*underline[^"']*hover:no-underline[^"']*["']/,
            hint: {
                concept: 'Links',
                strategy: 'text-blue-600 for color, underline with hover:no-underline for interaction',
                solution: '<a href="#" class="text-blue-600 underline hover:no-underline">Link</a>'
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
    <title>Typography Showcase</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 px-6 py-12">
    
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        
        <!-- Task 1: Main Heading -->
        <h1 class="">Typography Mastery</h1>
        
        <!-- Task 2: Subtitle -->
        <p class="">
            Exploring Tailwind's typography system with various text styles
        </p>
        
        <div class="h-px bg-gray-200 my-8"></div>
        
        <!-- Task 3: Section Heading -->
        <h2 class="">Introduction</h2>
        
        <!-- Task 4: Body Paragraph -->
        <p class="">
            Typography is the art and technique of arranging type to make written language 
            readable and appealing. Good typography enhances the user experience and 
            establishes visual hierarchy.
        </p>
        
        <!-- Task 5: Blockquote -->
        <blockquote class="">
            "Typography is what language looks like."
            <span class="block text-sm mt-2 not-italic">— Ellen Lupton</span>
        </blockquote>
        
        <!-- Task 6: Label -->
        <span class="">Featured Content</span>
        
        <!-- Task 7: Code Block -->
        <code class="">
const greeting = "Hello, Tailwind!";
console.log(greeting);
        </code>
        
        <!-- Task 8: Link -->
        <p class="mt-4">
            Learn more about 
            <a href="#" class="">typography best practices</a>
        </p>
        
    </div>
    
</body>
</html>`
        }
    ]
};
