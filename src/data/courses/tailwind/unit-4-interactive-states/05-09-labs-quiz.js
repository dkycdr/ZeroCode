import { CONTENT_TYPES } from '../../../curriculumStructure.js';

// Lab 1: Hover Effects
export const lab1HoverEffects = {
    id: 'tailwind-u4-lab-1-hover',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Hover Effects Gallery',
    duration: '25 min',
    content: 'Create interactive cards with various hover effects.',
    tasks: [
        {
            id: 1,
            description: 'Add hover scale effect with hover:scale-110 transition',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:scale-110[^"']*transition[^"']*["']/,
            hint: { concept: 'Scale on Hover', strategy: 'hover:scale-110 grows element to 110% on hover', solution: 'class="hover:scale-110 transition duration-300"' }
        },
        {
            id: 2,
            description: 'Add shadow lift effect with hover:shadow-2xl hover:-translate-y-2',
            completed: false,
            regex: /class\s*=\s*["'][^"']*hover:shadow-2xl[^"']*hover:-translate-y-2[^"']*["']/,
            hint: { concept: 'Lift Effect', strategy: 'Combine shadow and translate for 3D lift', solution: 'class="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"' }
        }
    ],
    files: [{
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html><head><title>Hover Effects</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8 bg-gray-50">
<div class="grid grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg">
    <div class="w-32 h-32 bg-blue-500 rounded-lg"></div>
    <h3 class="mt-4 font-bold">Scale Effect</h3>
  </div>
</div>
</body></html>`
    }]
};

// Lab 2: Group Modifiers
export const lab2GroupModifiers = {
    id: 'tailwind-u4-lab-2-group',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Group Hover Card',
    duration: '20 min',
    content: 'Build cards that animate multiple children on parent hover.',
    tasks: [
        {
            id: 1,
            description: 'Mark parent with group class',
            completed: false,
            regex: /class\s*=\s*["'][^"']*group[^"']*["']/,
            hint: { concept: 'Group Parent', strategy: 'Add group class to parent', solution: 'class="group"' }
        },
        {
            id: 2,
            description: 'Style child with group-hover:scale-110',
            completed: false,
            regex: /class\s*=\s*["'][^"']*group-hover:scale-110[^"']*["']/,
            hint: { concept: 'Group Child', strategy: 'group-hover: styles child when parent hovered', solution: 'class="group-hover:scale-110 transition"' }
        }
    ],
    files: [{
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html><head><title>Group Hover</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8">
<div class="">
  <img class="" src="https://picsum.photos/400/300">
  <h3 class="">Card Title</h3>
</div>
</body></html>`
    }]
};

// Lab 3: Peer Modifiers
export const lab3PeerModifiers = {
    id: 'tailwind-u4-lab-3-peer',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Form Validation with Peer',
    duration: '25 min',
    content: 'Build form with peer-based validation feedback.',
    tasks: [
        {
            id: 1,
            description: 'Add peer class to input',
            completed: false,
            regex: /<input[^>]*class\s*=\s*["'][^"']*peer[^"']*["']/,
            hint: { concept: 'Peer Input', strategy: 'Mark input with peer class', solution: '<input class="peer" required>' }
        },
        {
            id: 2,
            description: 'Show error with peer-invalid:block',
            completed: false,
            regex: /class\s*=\s*["'][^"']*peer-invalid:block[^"']*["']/,
            hint: { concept: 'Peer Validation', strategy: 'peer-invalid: styles sibling when peer is invalid', solution: 'class="hidden peer-invalid:block text-red-600"' }
        }
    ],
    files: [{
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html><head><title>Peer Validation</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8">
<div>
  <input type="email" class="" placeholder="Email" required>
  <p class="">Please enter a valid email</p>
</div>
</body></html>`
    }]
};

// Lab 4: Transitions
export const lab4Transitions = {
    id: 'tailwind-u4-lab-4-transitions',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Smooth Transitions',
    duration: '20 min',
    content: 'Master transition timing and easing.',
    tasks: [
        {
            id: 1,
            description: 'Add transition with duration-300',
            completed: false,
            regex: /class\s*=\s*["'][^"']*transition[^"']*duration-300[^"']*["']/,
            hint: { concept: 'Transition Duration', strategy: 'transition + duration-300 = 300ms smooth change', solution: 'class="transition duration-300"' }
        },
        {
            id: 2,
            description: 'Add ease-in-out timing',
            completed: false,
            regex: /class\s*=\s*["'][^"']*ease-in-out[^"']*["']/,
            hint: { concept: 'Easing', strategy: 'ease-in-out creates smooth acceleration and deceleration', solution: 'class="transition duration-300 ease-in-out"' }
        }
    ],
    files: [{
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html><head><title>Transitions</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8">
<button class="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded">
  Smooth Button
</button>
</body></html>`
    }]
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
            question: 'Which creates a blur effect?',
            options: ['filter-blur', 'blur-{size}', 'effect-blur', 'opacity-blur'],
            correctIndex: 1,
            explanation: 'blur-{size} (e.g., blur-sm, blur-md) creates a blur effect of specified size.'
        }
    ]
};
