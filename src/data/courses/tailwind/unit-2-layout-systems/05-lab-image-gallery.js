import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2ImageGallery = {
    id: 'tailwind-u2-lab-2-gallery',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Image Gallery with Grid',
    duration: '25 min',
    content: `
# Lab: Image Gallery with Grid

## The Mission

Build a responsive photo gallery using CSS Grid with:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Equal spacing between images
- Hover effects

Master Grid layout! 📸
`,
    tasks: [
        {
            id: 1,
            description: 'Create grid container with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
            completed: false,
            regex: /class\s*=\s*["'][^"']*grid[^"']*grid-cols-1[^"']*md:grid-cols-2[^"']*lg:grid-cols-3[^"']*gap-6[^"']*["']/,
            hint: {
                concept: 'Responsive Grid',
                strategy: 'Breakpoint prefixes create responsive columns: mobile(1) → tablet(2) → desktop(3)',
                solution: 'class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"'
            }
        },
        {
            id: 2,
            description: 'Style images with w-full h-64 object-cover rounded-lg',
            completed: false,
            regex: /<img[^>]*class\s*=\s*["'][^"']*w-full[^"']*h-64[^"']*object-cover[^"']*rounded-lg[^"']*["']/,
            hint: {
                concept: 'Image Sizing',
                strategy: 'w-full fills container, h-64 fixed height, object-cover prevents distortion',
                solution: '<img class="w-full h-64 object-cover rounded-lg" src="...">'
            }
        },
        {
            id: 3,
            description: 'Add hover effect with hover:scale-105 transition duration-300',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:scale-105[^"']*transition[^"']*duration-300[^"']*["']/,
            hint: {
                concept: 'Hover Animation',
                strategy: 'scale-105 grows to 105% on hover, transition makes it smooth',
                solution: 'class="... hover:scale-105 transition duration-300"'
            }
        },
        {
            id: 4,
            description: 'Wrap image in group for overlay effects',
            completed: false,
            regex: /class\s*=\s*["'][^"']*relative[^"']*group[^"']*overflow-hidden[^"']*["']/,
            hint: {
                concept: 'Group Wrapper',
                strategy: 'relative for positioning, group for hover control, overflow-hidden clips scaled image',
                solution: 'class="relative group overflow-hidden rounded-lg"'
            }
        },
        {
            id: 5,
            description: 'Add overlay with absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100',
            completed: false,
            regex: /class\s*=\s*["'][^"']*absolute[^"']*inset-0[^"']*bg-black\/50[^"']*opacity-0[^"']*group-hover:opacity-100[^"']*["']/,
            hint: {
                concept: 'Hover Overlay',
                strategy: 'Invisible overlay that appears on group hover',
                solution: 'class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"'
            }
        },
        {
            id: 6,
            description: 'Center overlay text with flex items-center justify-center',
            completed: false,
            regex: /class\s*=\s*["'][^"']*absolute[^"']*inset-0[^"']*flex[^"']*items-center[^"']*justify-center[^"']*["']/,
            hint: {
                concept: 'Centered Overlay Content',
                strategy: 'Absolute positioning with flex centering',
                solution: 'class="absolute inset-0 flex items-center justify-center"'
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
    <title>Photo Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
    
    <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-center">Photo Gallery</h1>
        
        <!-- Task 1: Responsive Grid -->
        <div class="">
            
            <!-- Task 4: Group Wrapper for Image 1 -->
            <div class="">
                <!-- Task 2 & 3: Image with Hover -->
                <img class=""
                     src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                     alt="Mountain">
                
                <!-- Task 5: Hover Overlay -->
                <div class="">
                    <!-- Task 6: Centered Text -->
                    <div class="">
                        <p class="text-white text-xl font-semibold">Mountain Peak</p>
                    </div>
                </div>
            </div>
            
            <!-- Image 2 -->
            <div class="relative group overflow-hidden rounded-lg">
                <img class="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
                     src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
                     alt="Beach">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="text-white text-xl font-semibold">Tropical Beach</p>
                    </div>
                </div>
            </div>
            
            <!-- Image 3 -->
            <div class="relative group overflow-hidden rounded-lg">
                <img class="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
                     src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop"
                     alt="Desert">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="text-white text-xl font-semibold">Vast Desert</p>
                    </div>
                </div>
            </div>
            
            <!-- Image 4 -->
            <div class="relative group overflow-hidden rounded-lg">
                <img class="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
                     src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
                     alt="Forest">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="text-white text-xl font-semibold">Dense Forest</p>
                    </div>
                </div>
            </div>
            
            <!-- Image 5 -->
            <div class="relative group overflow-hidden rounded-lg">
                <img class="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
                     src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                     alt="Lake">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="text-white text-xl font-semibold">Crystal Lake</p>
                    </div>
                </div>
            </div>
            
            <!-- Image 6 -->
            <div class="relative group overflow-hidden rounded-lg">
                <img class="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
                     src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                     alt="Sunset">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <p class="text-white text-xl font-semibold">Golden Sunset</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</body>
</html>`
        }
    ]
};
