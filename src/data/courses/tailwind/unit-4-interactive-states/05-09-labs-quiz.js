import { CONTENT_TYPES } from '../../../curriculumStructure.js';

// Lab 1: Hover Effects Gallery
export const lab1HoverEffects = {
    id: 'tailwind-u4-lab-1-hover',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Hover Effects Gallery',
    duration: '25 min',
    content: `
# Lab: Hover Effects Gallery

## The Mission

Create an interactive card gallery showcasing various hover effects using Tailwind CSS. You'll master transforms, shadows, and color transitions to build engaging UI components!

## Requirements

Build a gallery with 6 cards, each demonstrating a different hover effect:
1. **Scale Effect** - Card grows on hover
2. **Lift Effect** - Card rises with shadow
3. **Color Shift** - Background color transitions
4. **Rotation** - Subtle rotation on hover
5. **Glow Effect** - Adds ring/glow around card
6. **Combined** - Multiple effects together

## Design Specs

- **Cards**: White background, rounded-xl, soft shadow
- **Layout**: 3-column grid with gaps
- **Transitions**: All effects should be smooth (300ms)
- **Colors**: Use blue-500 as the primary accent color

Master the art of hover interactions! ✨
`,
    tasks: [
        {
            id: 1,
            description: 'Create grid container with grid grid-cols-3 gap-6',
            completed: false,
            regex: /class\s*=\s*["'][^"']*grid[^"']*grid-cols-3[^"']*gap-6[^"']*["']/,
            hint: {
                concept: 'CSS Grid Layout',
                strategy: 'grid creates a grid container, grid-cols-3 divides into 3 columns, gap-6 adds 24px spacing',
                solution: 'class="grid grid-cols-3 gap-6"'
            }
        },
        {
            id: 2,
            description: 'Add base card with bg-white p-6 rounded-xl shadow-md transition-all duration-300',
            completed: false,
            regex: /class\s*=\s*["'][^"']*bg-white[^"']*p-6[^"']*rounded-xl[^"']*shadow-md[^"']*transition-all[^"']*duration-300[^"']*["']/,
            hint: {
                concept: 'Card Base Styles',
                strategy: 'transition-all enables smooth transitions on all properties, duration-300 sets 300ms timing',
                solution: 'class="bg-white p-6 rounded-xl shadow-md transition-all duration-300"'
            }
        },
        {
            id: 3,
            description: 'Add scale effect with hover:scale-105',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:scale-105[^"']*["']/,
            hint: {
                concept: 'Scale Transform',
                strategy: 'hover:scale-105 increases element size to 105% when hovered. Pair with transition for smoothness',
                solution: 'class="... hover:scale-105"'
            }
        },
        {
            id: 4,
            description: 'Add lift effect with hover:shadow-2xl hover:-translate-y-2',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:shadow-2xl[^"']*hover:-translate-y-2[^"']*["']/,
            hint: {
                concept: 'Lift Effect',
                strategy: 'Combine larger shadow with negative Y translation to create a "lifting" illusion',
                solution: 'class="... hover:shadow-2xl hover:-translate-y-2"'
            }
        },
        {
            id: 5,
            description: 'Add color transition with hover:bg-blue-500 hover:text-white',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:bg-blue-500[^"']*hover:text-white[^"']*["']/,
            hint: {
                concept: 'Color Transitions',
                strategy: 'Change background and text color on hover. Transition-all ensures smooth color change',
                solution: 'class="... hover:bg-blue-500 hover:text-white"'
            }
        },
        {
            id: 6,
            description: 'Add rotation effect with hover:rotate-3',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:rotate-3[^"']*["']/,
            hint: {
                concept: 'Rotate Transform',
                strategy: 'hover:rotate-3 rotates element 3 degrees. Subtle rotation adds playfulness',
                solution: 'class="... hover:rotate-3"'
            }
        },
        {
            id: 7,
            description: 'Add glow effect with hover:ring-4 hover:ring-blue-500/50',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:ring-4[^"']*hover:ring-blue-500\/50[^"']*["']/,
            hint: {
                concept: 'Ring/Glow Effect',
                strategy: 'ring-4 creates a 4px ring, ring-blue-500/50 makes it blue with 50% opacity for glow effect',
                solution: 'class="... hover:ring-4 hover:ring-blue-500/50"'
            }
        },
        {
            id: 8,
            description: 'Combine multiple effects: hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:scale-105[^"']*hover:shadow-xl[^"']*hover:-translate-y-1[^"']*["']/,
            hint: {
                concept: 'Combined Effects',
                strategy: 'Stack multiple hover effects for rich interactions. Order doesn\'t matter in Tailwind classes',
                solution: 'class="... hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"'
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
    <title>Hover Effects Gallery</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 p-12">
    
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-2">Hover Effects Gallery</h1>
        <p class="text-gray-600 text-center mb-8">Hover over each card to see the effect</p>
        
        <!-- Task 1: Create grid container -->
        <div class="">
            
            <!-- Task 2 & 3: Scale Effect Card -->
            <div class="">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">📐</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Scale Effect</h3>
                <p class="text-gray-600 text-sm">Card grows to 105% on hover</p>
            </div>
            
            <!-- Task 4: Lift Effect Card -->
            <div class="">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">⬆️</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Lift Effect</h3>
                <p class="text-gray-600 text-sm">Card rises with enhanced shadow</p>
            </div>
            
            <!-- Task 5: Color Shift Card -->
            <div class="">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">🎨</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Color Shift</h3>
                <p class="text-gray-600 text-sm">Background transitions to blue</p>
            </div>
            
            <!-- Task 6: Rotation Effect Card -->
            <div class="">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">🔄</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Rotation Effect</h3>
                <p class="text-gray-600 text-sm">Card rotates slightly on hover</p>
            </div>
            
            <!-- Task 7: Glow Effect Card -->
            <div class="">
                <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">✨</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Glow Effect</h3>
                <p class="text-gray-600 text-sm">Blue ring appears on hover</p>
            </div>
            
            <!-- Task 8: Combined Effects Card -->
            <div class="">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-2xl">🚀</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Combined</h3>
                <p class="text-gray-600 text-sm">Multiple effects together</p>
            </div>
            
        </div>
    </div>
    
</body>
</html>`
        }
    ]
};

// Lab 2: Group Modifiers
export const lab2GroupModifiers = {
    id: 'tailwind-u4-lab-2-group',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Group Hover Card',
    duration: '25 min',
    content: `
# Lab: Group Hover Card

## The Mission

Build a product card where hovering the parent triggers animations on multiple child elements. This is essential for creating polished, cohesive interactions!

## Requirements

Create a product card with these group-hover effects:
1. **Image** zooms in when card is hovered
2. **Title** changes color
3. **Description** appears/fades in
4. **Overlay** fades in with gradient
5. **Button** slides up from bottom
6. **Icon** rotates

## Design Specs

- **Card Size**: 320px wide, auto height
- **Image**: Full width, 200px height, object-cover
- **Overlay**: Black gradient from bottom (for text readability)
- **Transitions**: 300ms with ease-out timing

Learn the power of group modifiers! 👨‍👩‍👧‍👦
`,
    tasks: [
        {
            id: 1,
            description: 'Mark parent card with group class',
            completed: false,
            regex: /class\s*=\s*["'][^"']*group[^"']*["']/,
            hint: {
                concept: 'Group Parent',
                strategy: 'Add "group" class to the parent container. All group-hover effects on children will trigger when this element is hovered',
                solution: 'class="group ..."'
            }
        },
        {
            id: 2,
            description: 'Add image zoom with group-hover:scale-110 transition duration-300',
            completed: false,
            regex: /<img[^>]*class\s*=\s*["'][^"']*group-hover:scale-110[^"']*transition[^"']*duration-300[^"']*["']/,
            hint: {
                concept: 'Image Zoom on Parent Hover',
                strategy: 'group-hover:scale-110 makes the image zoom when the parent (with group class) is hovered',
                solution: '<img class="w-full h-48 object-cover group-hover:scale-110 transition duration-300" ...>'
            }
        },
        {
            id: 3,
            description: 'Add title color change with group-hover:text-blue-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*group-hover:text-blue-600[^"']*["']/,
            hint: {
                concept: 'Title Color on Group Hover',
                strategy: 'group-hover:text-blue-600 changes text color when parent is hovered',
                solution: 'class="font-bold text-lg group-hover:text-blue-600 transition-colors"'
            }
        },
        {
            id: 4,
            description: 'Add overlay fade with opacity-0 group-hover:opacity-100',
            completed: false,
            regex: /class\s*=\s*["'][^"']*opacity-0[^"']*group-hover:opacity-100[^"']*["']/,
            hint: {
                concept: 'Overlay Reveal',
                strategy: 'Start with opacity-0 (invisible), then group-hover:opacity-100 reveals it on parent hover',
                solution: 'class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"'
            }
        },
        {
            id: 5,
            description: 'Add button slide up with translate-y-4 group-hover:translate-y-0',
            completed: false,
            regex: /class\s*=\s*["'][^"']*translate-y-4[^"']*group-hover:translate-y-0[^"']*["']/,
            hint: {
                concept: 'Button Slide Animation',
                strategy: 'Start button below its position (translate-y-4), then move to normal position on hover (group-hover:translate-y-0)',
                solution: 'class="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"'
            }
        },
        {
            id: 6,
            description: 'Add icon rotation with group-hover:rotate-12',
            completed: false,
            regex: /class\s*=\s*["'][^"']*group-hover:rotate-12[^"']*["']/,
            hint: {
                concept: 'Icon Rotation',
                strategy: 'group-hover:rotate-12 rotates icon 12 degrees when parent is hovered',
                solution: 'class="group-hover:rotate-12 transition-transform duration-300"'
            }
        },
        {
            id: 7,
            description: 'Add description fade with opacity-0 group-hover:opacity-100 transition-opacity',
            completed: false,
            regex: /<p[^>]*class\s*=\s*["'][^"']*opacity-0[^"']*group-hover:opacity-100[^"']*transition-opacity[^"']*["']/,
            hint: {
                concept: 'Description Reveal',
                strategy: 'Hide description by default, reveal on group hover for a cleaner initial state',
                solution: '<p class="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">'
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
    <title>Group Hover Card</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-2">Group Hover Effects</h1>
        <p class="text-gray-600 text-center mb-8">Hover over the card to see all child elements animate together</p>
        
        <div class="grid grid-cols-2 gap-8">
            
            <!-- Task 1: Add group class to this card -->
            <div class="w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                
                <!-- Image Container with overflow hidden for zoom effect -->
                <div class="relative overflow-hidden">
                    <!-- Task 2: Add image zoom effect -->
                    <img 
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" 
                        alt="Product"
                        class="w-full h-48 object-cover"
                    >
                    
                    <!-- Task 4: Add overlay that fades in -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    </div>
                    
                    <!-- Task 5: Add button that slides up -->
                    <div class="absolute bottom-4 left-4 right-4">
                        <button class="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg">
                            Quick View
                        </button>
                    </div>
                </div>
                
                <!-- Card Content -->
                <div class="p-5">
                    <div class="flex items-center justify-between mb-2">
                        <!-- Task 3: Add title color change -->
                        <h3 class="font-bold text-lg transition-colors">
                            Premium Headphones
                        </h3>
                        <!-- Task 6: Add icon rotation -->
                        <span class="text-xl transition-transform duration-300">❤️</span>
                    </div>
                    
                    <!-- Task 7: Add description fade -->
                    <p class="text-gray-600 text-sm">
                        High-quality wireless headphones with noise cancellation
                    </p>
                    
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-2xl font-bold text-blue-600">$299</span>
                        <span class="text-sm text-gray-400 line-through">$399</span>
                    </div>
                </div>
                
            </div>
            
            <!-- Second card for comparison (pre-styled) -->
            <div class="group w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <div class="relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" 
                        alt="Watch"
                        class="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button class="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg">
                            Quick View
                        </button>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="font-bold text-lg group-hover:text-blue-600 transition-colors">Smart Watch Pro</h3>
                        <span class="text-xl group-hover:rotate-12 transition-transform duration-300">❤️</span>
                    </div>
                    <p class="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Advanced smartwatch with health monitoring
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-2xl font-bold text-blue-600">$499</span>
                        <span class="text-sm text-gray-400 line-through">$649</span>
                    </div>
                </div>
            </div>
            
        </div>
        
        <p class="text-center text-gray-500 text-sm mt-6">The right card shows the completed example</p>
    </div>
    
</body>
</html>`
        }
    ]
};

// Lab 3: Peer Modifiers
export const lab3PeerModifiers = {
    id: 'tailwind-u4-lab-3-peer',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Form Validation with Peer',
    duration: '25 min',
    content: `
# Lab: Form Validation with Peer

## The Mission

Build a modern signup form with real-time validation feedback using Tailwind's peer modifier. No JavaScript needed - pure CSS magic!

## Requirements

Create an email input field with:
1. **Label** that floats up when input is focused
2. **Border color** changes based on validity
3. **Error message** appears when invalid
4. **Success checkmark** appears when valid
5. **Helper text** changes based on state
6. **Submit button** styling based on form state

## Design Specs

- **Input**: Full width, rounded-lg, border-2
- **Valid state**: Green border, checkmark icon
- **Invalid state**: Red border, error message
- **Focus state**: Blue border, floating label
- **Transitions**: All state changes animated

Master sibling-based styling! 🎯
`,
    tasks: [
        {
            id: 1,
            description: 'Mark input with peer class for sibling targeting',
            completed: false,
            regex: /<input[^>]*class\s*=\s*["'][^"']*peer[^"']*["']/,
            hint: {
                concept: 'Peer Element',
                strategy: 'Add "peer" class to the input. Sibling elements can then use peer-* modifiers to react to this input\'s state',
                solution: '<input type="email" class="peer ..." required>'
            }
        },
        {
            id: 2,
            description: 'Add error message with hidden peer-invalid:block text-red-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hidden[^"']*peer-invalid:block[^"']*text-red-600[^"']*["']/,
            hint: {
                concept: 'Show on Invalid',
                strategy: 'hidden hides by default, peer-invalid:block shows when sibling input is invalid',
                solution: 'class="hidden peer-invalid:block text-red-600 text-sm mt-1"'
            }
        },
        {
            id: 3,
            description: 'Add success checkmark with hidden peer-valid:block text-green-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hidden[^"']*peer-valid:block[^"']*text-green-600[^"']*["']/,
            hint: {
                concept: 'Show on Valid',
                strategy: 'peer-valid:block shows element only when the peer input passes validation',
                solution: 'class="hidden peer-valid:block text-green-600"'
            }
        },
        {
            id: 4,
            description: 'Add focus border with peer-focus:border-blue-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*peer-focus:border-blue-500[^"']*["']/,
            hint: {
                concept: 'Focus Indicator',
                strategy: 'peer-focus: applies styles when the peer input is focused',
                solution: 'class="... peer-focus:border-blue-500"'
            }
        },
        {
            id: 5,
            description: 'Add valid border with peer-valid:border-green-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*peer-valid:border-green-500[^"']*["']/,
            hint: {
                concept: 'Valid State Border',
                strategy: 'peer-valid:border-green-500 adds green border when input is valid',
                solution: 'class="border-2 border-gray-300 peer-valid:border-green-500 peer-invalid:border-red-500"'
            }
        },
        {
            id: 6,
            description: 'Add invalid border with peer-invalid:border-red-500',
            completed: false,
            regex: /class\s*=\s*["'][^"']*peer-invalid:border-red-500[^"']*["']/,
            hint: {
                concept: 'Invalid State Border',
                strategy: 'peer-invalid:border-red-500 adds red border when input fails validation',
                solution: 'class="border-2 border-gray-300 peer-invalid:border-red-500"'
            }
        },
        {
            id: 7,
            description: 'Add floating label with peer-focus:-translate-y-6 peer-focus:scale-75',
            completed: false,
            regex: /class\s*=\s*["'][^"']*peer-focus:-translate-y-6[^"']*peer-focus:scale-75[^"']*["']/,
            hint: {
                concept: 'Floating Label',
                strategy: 'Move label up and shrink it when input is focused using translate and scale',
                solution: 'class="absolute left-3 top-3 text-gray-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 transition-all"'
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
    <title>Form Validation with Peer</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
    
    <div class="w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-xl p-8">
            <h1 class="text-2xl font-bold text-center mb-2">Create Account</h1>
            <p class="text-gray-500 text-center mb-8">Sign up with your email</p>
            
            <form class="space-y-6">
                
                <!-- Email Field -->
                <div class="relative">
                    <!-- Task 1: Add peer class to input -->
                    <!-- Task 5 & 6: Input will show border colors based on peer state -->
                    <input 
                        type="email" 
                        id="email"
                        class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none transition-colors"
                        placeholder=" "
                        required
                    >
                    
                    <!-- Task 7: Floating label -->
                    <label 
                        for="email"
                        class="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-200 bg-white px-1"
                    >
                        Email Address
                    </label>
                    
                    <!-- Task 3: Success checkmark (right side of input) -->
                    <span class="absolute right-3 top-3 text-xl">
                        ✓
                    </span>
                    
                    <!-- Task 2: Error message -->
                    <p class="">
                        Please enter a valid email address
                    </p>
                    
                    <!-- Helper text that changes -->
                    <p class="text-gray-400 text-xs mt-1 peer-focus:text-blue-500">
                        We'll never share your email with anyone
                    </p>
                </div>
                
                <!-- Password Field (pre-styled example) -->
                <div class="relative">
                    <input 
                        type="password" 
                        id="password"
                        class="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none transition-colors focus:border-blue-500 valid:border-green-500 invalid:border-red-500"
                        placeholder=" "
                        minlength="8"
                        required
                    >
                    <label 
                        for="password"
                        class="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-200 bg-white px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-valid:-translate-y-6 peer-valid:scale-75"
                    >
                        Password
                    </label>
                    <span class="absolute right-3 top-3 text-xl hidden peer-valid:block text-green-600">✓</span>
                    <p class="hidden peer-invalid:block text-red-600 text-sm mt-1">
                        Password must be at least 8 characters
                    </p>
                </div>
                
                <!-- Submit Button -->
                <button 
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                    Create Account
                </button>
                
            </form>
            
            <p class="text-center text-gray-500 text-sm mt-6">
                Already have an account? 
                <a href="#" class="text-blue-600 hover:underline">Sign in</a>
            </p>
        </div>
        
        <p class="text-center text-gray-400 text-xs mt-4">
            Try typing in the email field to see peer validation in action
        </p>
    </div>
    
</body>
</html>`
        }
    ]
};

// Lab 4: Transitions
export const lab4Transitions = {
    id: 'tailwind-u4-lab-4-transitions',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Smooth Transitions',
    duration: '25 min',
    content: `
# Lab: Smooth Transitions

## The Mission

Master Tailwind's transition system to create buttery-smooth animations. You'll learn to control timing, easing, and which properties animate!

## Requirements

Build a button collection demonstrating:
1. **Basic transition** - transition class for default properties
2. **Duration control** - 150ms, 300ms, 500ms, 700ms speeds
3. **Easing functions** - linear, ease-in, ease-out, ease-in-out
4. **Specific properties** - transition-colors, transition-transform, transition-opacity
5. **Delay** - delayed transitions
6. **Combined** - orchestrated multi-property transitions

## Design Specs

- **Buttons**: Rounded-lg, padding consistent
- **Layout**: Two-column grid showing before/after
- **Visual**: Clear labels for each transition type
- **Timing**: Show visible differences between speeds

Become a transition master! ⚡
`,
    tasks: [
        {
            id: 1,
            description: 'Add basic transition with transition hover:bg-blue-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*hover:bg-blue-600[^"']*["']/,
            hint: {
                concept: 'Basic Transition',
                strategy: 'The transition class enables smooth transitions for color, background, border, opacity, shadow, and transform',
                solution: 'class="bg-blue-500 transition hover:bg-blue-600 ..."'
            }
        },
        {
            id: 2,
            description: 'Add fast transition with duration-150',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*duration-150[^"']*["']/,
            hint: {
                concept: 'Fast Duration',
                strategy: 'duration-150 creates a snappy 150ms transition, great for small UI feedback',
                solution: 'class="transition duration-150 ..."'
            }
        },
        {
            id: 3,
            description: 'Add slow transition with duration-700',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*duration-700[^"']*["']/,
            hint: {
                concept: 'Slow Duration',
                strategy: 'duration-700 creates a leisurely 700ms transition, good for larger movements',
                solution: 'class="transition duration-700 ..."'
            }
        },
        {
            id: 4,
            description: 'Add ease-out timing function',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*ease-out[^"']*["']/,
            hint: {
                concept: 'Ease Out',
                strategy: 'ease-out starts fast and slows down at the end, creating a natural deceleration',
                solution: 'class="transition duration-300 ease-out ..."'
            }
        },
        {
            id: 5,
            description: 'Add ease-in-out timing function',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*ease-in-out[^"']*["']/,
            hint: {
                concept: 'Ease In Out',
                strategy: 'ease-in-out creates smooth acceleration and deceleration, very polished feel',
                solution: 'class="transition duration-300 ease-in-out ..."'
            }
        },
        {
            id: 6,
            description: 'Add transition-colors for color-only animation',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition-colors[^"']*["']/,
            hint: {
                concept: 'Color Transitions Only',
                strategy: 'transition-colors only animates color, background-color, border-color - more performant than transition-all',
                solution: 'class="transition-colors duration-300 ..."'
            }
        },
        {
            id: 7,
            description: 'Add transition-transform for transform-only animation',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition-transform[^"']*["']/,
            hint: {
                concept: 'Transform Transitions Only',
                strategy: 'transition-transform only animates scale, rotate, translate - very performant',
                solution: 'class="transition-transform duration-300 hover:scale-110 ..."'
            }
        },
        {
            id: 8,
            description: 'Add delay with delay-150',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*delay-150[^"']*["']/,
            hint: {
                concept: 'Transition Delay',
                strategy: 'delay-150 waits 150ms before starting the transition, useful for staggered animations',
                solution: 'class="transition duration-300 delay-150 ..."'
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
    <title>Smooth Transitions</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-900 text-white p-12">
    
    <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-2">Transition Playground</h1>
        <p class="text-gray-400 text-center mb-12">Hover over each button to see the transition effect</p>
        
        <!-- Duration Comparison -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-blue-400">Duration Comparison</h2>
            <div class="grid grid-cols-4 gap-4">
                <!-- Task 1 & 2: Fast (150ms) -->
                <button class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
                    150ms Fast
                </button>
                
                <!-- 300ms (default feel) -->
                <button class="bg-blue-500 transition duration-300 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
                    300ms Normal
                </button>
                
                <!-- 500ms -->
                <button class="bg-blue-500 transition duration-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
                    500ms Medium
                </button>
                
                <!-- Task 3: Slow (700ms) -->
                <button class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold">
                    700ms Slow
                </button>
            </div>
        </section>
        
        <!-- Easing Comparison -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-green-400">Easing Functions</h2>
            <div class="grid grid-cols-4 gap-4">
                <!-- Linear -->
                <button class="bg-green-500 transition duration-500 ease-linear hover:translate-x-4 text-white py-3 px-6 rounded-lg font-semibold">
                    Linear →
                </button>
                
                <!-- Ease In -->
                <button class="bg-green-500 transition duration-500 ease-in hover:translate-x-4 text-white py-3 px-6 rounded-lg font-semibold">
                    Ease In →
                </button>
                
                <!-- Task 4: Ease Out -->
                <button class="bg-green-500 hover:translate-x-4 text-white py-3 px-6 rounded-lg font-semibold">
                    Ease Out →
                </button>
                
                <!-- Task 5: Ease In Out -->
                <button class="bg-green-500 hover:translate-x-4 text-white py-3 px-6 rounded-lg font-semibold">
                    Ease In-Out →
                </button>
            </div>
        </section>
        
        <!-- Property-Specific Transitions -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-purple-400">Specific Properties</h2>
            <div class="grid grid-cols-3 gap-4">
                <!-- Task 6: Colors only -->
                <button class="bg-purple-500 hover:bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold">
                    transition-colors
                </button>
                
                <!-- Task 7: Transform only -->
                <button class="bg-purple-500 hover:scale-110 text-white py-3 px-6 rounded-lg font-semibold">
                    transition-transform
                </button>
                
                <!-- Opacity only -->
                <button class="bg-purple-500 transition-opacity duration-300 hover:opacity-50 text-white py-3 px-6 rounded-lg font-semibold">
                    transition-opacity
                </button>
            </div>
        </section>
        
        <!-- Delay Demo -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-orange-400">Staggered Delays</h2>
            <div class="grid grid-cols-4 gap-4">
                <button class="bg-orange-500 transition duration-300 hover:bg-orange-600 hover:-translate-y-2 text-white py-3 px-6 rounded-lg font-semibold">
                    No Delay
                </button>
                
                <!-- Task 8: 150ms delay -->
                <button class="bg-orange-500 hover:bg-orange-600 hover:-translate-y-2 text-white py-3 px-6 rounded-lg font-semibold">
                    150ms Delay
                </button>
                
                <button class="bg-orange-500 transition duration-300 delay-300 hover:bg-orange-600 hover:-translate-y-2 text-white py-3 px-6 rounded-lg font-semibold">
                    300ms Delay
                </button>
                
                <button class="bg-orange-500 transition duration-300 delay-500 hover:bg-orange-600 hover:-translate-y-2 text-white py-3 px-6 rounded-lg font-semibold">
                    500ms Delay
                </button>
            </div>
            <p class="text-gray-500 text-sm mt-2">Hover over all buttons quickly to see the staggered effect</p>
        </section>
        
        <!-- All Together -->
        <section>
            <h2 class="text-xl font-semibold mb-4 text-red-400">Combined Example</h2>
            <button class="bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ease-in-out hover:from-pink-500 hover:to-red-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 text-white py-4 px-8 rounded-xl font-bold text-lg">
                Premium Button ✨
            </button>
        </section>
        
    </div>
    
</body>
</html>`
        }
    ]
};

// Quiz
export const quiz4InteractiveStates = {
    id: 'tailwind-u4-quiz-4',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 4 Quiz: Interactive States',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Which modifier applies styles when hovering over an element?',
            options: ['hover:', 'focus:', 'active:', 'mouse:'],
            correctIndex: 0,
            explanation: 'hover: applies styles when the mouse pointer is over an element.'
        },
        {
            id: 'q2',
            question: 'How do you style children when hovering over a parent?',
            options: ['Use child: modifier', 'Use group and group-hover:', 'Use parent: modifier', 'Use hover-child:'],
            correctIndex: 1,
            explanation: 'Add group class to parent, then use group-hover: on children to style them when parent is hovered.'
        },
        {
            id: 'q3',
            question: 'What does peer modifier do?',
            options: ['Styles parent based on child', 'Styles sibling based on sibling state', 'Styles all elements', 'Styles children'],
            correctIndex: 1,
            explanation: 'peer modifier styles an element based on the state of a sibling element marked with peer class.'
        },
        {
            id: 'q4',
            question: 'How do you make an element grow to 110% on hover?',
            options: ['hover:grow-110', 'hover:scale-110', 'hover:size-110', 'hover:expand-110'],
            correctIndex: 1,
            explanation: 'hover:scale-110 increases the element size to 110% when hovered.'
        },
        {
            id: 'q5',
            question: 'What does transition-all do?',
            options: ['Transitions all elements', 'Transitions all properties that change', 'Transitions all colors', 'Nothing'],
            correctIndex: 1,
            explanation: 'transition-all applies smooth transitions to all CSS properties that change.'
        },
        {
            id: 'q6',
            question: 'Which creates a 300ms transition?',
            options: ['transition-300', 'duration-300', 'time-300', 'speed-300'],
            correctIndex: 1,
            explanation: 'duration-300 sets the transition duration to 300 milliseconds.'
        }
    ]
};
