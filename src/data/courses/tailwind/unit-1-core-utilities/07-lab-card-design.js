import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3CardDesign = {
    id: 'tailwind-u1-lab-3-card',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Product Card Design',
    duration: '30 min',
    content: `
# Lab: Product Card Design

## The Mission

Build a beautiful product card combining typography, spacing, sizing, and colors!

## Requirements

1. Card: white background, shadow, rounded corners
2. Product image: full width, fixed height, cover
3. Badge: positioned top-right
4. Title, price, description
5. Color swatches
6. Add to cart button

Put all your skills together! 🎨
`,
    tasks: [
        {
            id: 1,
            description: 'Create card with bg-white rounded-xl shadow-xl overflow-hidden max-w-sm',
            completed: false,
            regex: /class\s*=\s*["'][^"']*bg-white[^"']*rounded-xl[^"']*shadow-xl[^"']*overflow-hidden[^"']*max-w-sm[^"']*["']/,
            hint: {
                concept: 'Card Container',
                strategy: 'Combine background, shadow, rounding, and max-width',
                solution: 'class="bg-white rounded-xl shadow-xl overflow-hidden max-w-sm"'
            }
        },
        {
            id: 2,
            description: 'Add product image with w-full h-64 object-cover',
            completed: false,
            regex: /<img[^>]*class\s*=\s*["'][^"']*w-full[^"']*h-64[^"']*object-cover[^"']*["']/,
            hint: {
                concept: 'Image Sizing',
                strategy: 'w-full = 100% width, h-64 = fixed height, object-cover fills area',
                solution: '<img class="w-full h-64 object-cover" src="...">'
            }
        },
        {
            id: 3,
            description: 'Add NEW badge with absolute top-4 right-4 bg-red-500 text-white',
            completed: false,
            regex: /class\s*=\s*["'][^"']*absolute[^"']*top-4[^"']*right-4[^"']*bg-red-500[^"']*text-white[^"']*["']/,
            hint: {
                concept: 'Badge Positioning',
                strategy: 'Use absolute positioning with top and right offsets',
                solution: 'class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold"'
            }
        },
        {
            id: 4,
            description: 'Add product title with text-2xl font-bold text-gray-900',
            completed: false,
            regex: /<h2[^>]*class\s*=\s*["'][^"']*text-2xl[^"']*font-bold[^"']*text-gray-900[^"']*["']/,
            hint: {
                concept: 'Product Title',
                strategy: 'Large bold text in dark color',
                solution: '<h2 class="text-2xl font-bold text-gray-900">Product Name</h2>'
            }
        },
        {
            id: 5,
            description: 'Add price with text-3xl font-bold text-blue-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*text-3xl[^"']*font-bold[^"']*text-blue-600[^"']*["']/,
            hint: {
                concept: 'Price Display',
                strategy: 'Large blue bold text for price emphasis',
                solution: 'class="text-3xl font-bold text-blue-600"'
            }
        },
        {
            id: 6,
            description: 'Add description with text-gray-600 leading-relaxed',
            completed: false,
            regex: /<p[^>]*class\s*=\s*["'][^"']*text-gray-600[^"']*leading-relaxed[^"']*["']/,
            hint: {
                concept: 'Description Text',
                strategy: 'Muted color with relaxed line height for readability',
                solution: '<p class="text-gray-600 leading-relaxed">Description...</p>'
            }
        },
        {
            id: 7,
            description: 'Create color swatches with flex gap-2',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*gap-2[^"']*["']/,
            hint: {
                concept: 'Color Swatches',
                strategy: 'Flexbox with gap for spacing between color circles',
                solution: 'class="flex gap-2"'
            }
        },
        {
            id: 8,
            description: 'Add CTA button with w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg',
            completed: false,
            regex: /<button[^>]*class\s*=\s*["'][^"']*w-full[^"']*bg-blue-600[^"']*hover:bg-blue-700[^"']*text-white[^"']*font-semibold[^"']*py-3[^"']*rounded-lg[^"']*["']/,
            hint: {
                concept: 'Call-to-Action Button',
                strategy: 'Full width button with hover state',
                solution: '<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Add to Cart</button>'
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
    <title>Product Card</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-8">
    
    <!-- Task 1: Card Container -->
    <div class="">
        
        <!-- Image Container (relative for badge positioning) -->
        <div class="relative">
            <!-- Task 2: Product Image -->
            <img class="" 
                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" 
                 alt="Product">
            
            <!-- Task 3: NEW Badge -->
            <span class="">
                NEW
            </span>
        </div>
        
        <!-- Card Content -->
        <div class="p-6">
            
            <!-- Task 4: Product Title -->
            <h2 class="">Premium Headphones</h2>
            
            <!-- Task 5: Price -->
            <p class="">
                $299
                <span class="text-base font-normal text-gray-400 line-through ml-2">$399</span>
            </p>
            
            <!-- Task 6: Description -->
            <p class="">
                Experience crystal-clear audio with active noise cancellation and 30-hour battery life.
            </p>
            
            <!-- Color Options -->
            <div class="mt-4">
                <p class="text-sm font-semibold text-gray-700 mb-2">Available Colors</p>
                <!-- Task 7: Color Swatches -->
                <div class="">
                    <button class="w-8 h-8 bg-black rounded-full border-2 border-gray-300 hover:border-gray-600"></button>
                    <button class="w-8 h-8 bg-gray-500 rounded-full border-2 border-gray-300 hover:border-gray-600"></button>
                    <button class="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300 hover:border-gray-600"></button>
                    <button class="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300 hover:border-gray-600"></button>
                </div>
            </div>
            
            <!-- Divider -->
            <div class="h-px bg-gray-200 my-6"></div>
            
            <!-- Task 8: Add to Cart Button -->
            <button class="">
                Add to Cart
            </button>
            
        </div>
        
    </div>
    
</body>
</html>`
        }
    ]
};
