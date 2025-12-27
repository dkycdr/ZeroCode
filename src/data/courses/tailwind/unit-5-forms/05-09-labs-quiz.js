import { CONTENT_TYPES } from '../../../curriculumStructure.js';

// Lab 1: Contact Form
export const lab1ContactForm = {
    id: 'tailwind-u5-lab-1-contact',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Contact Form',
    duration: '25 min',
    content: 'Build a complete styled contact form.',
    tasks: [
        { id: 1, description: 'Style input with px-4 py-2 border rounded-lg focus:ring-2', completed: false, 
          regex: /class\s*=\s*["'][^"']*px-4[^"']*py-2[^"']*border[^"']*rounded-lg[^"']*focus:ring-2[^"']*["']/,
          hint: { concept: 'Input Styling', strategy: 'Combine padding, border, rounding, and focus ring', solution: 'class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"' }
        }
    ],
    files: [{ name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Contact Form</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8 bg-gray-50">
<form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
  <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
  <div class="mb-4">
    <label class="block mb-2 font-semibold">Name</label>
    <input class="" placeholder="Your name">
  </div>
  <div class="mb-4">
    <label class="block mb-2 font-semibold">Email</label>
    <input type="email" class="" placeholder="Your email" required>
  </div>
  <div class="mb-4">
    <label class="block mb-2 font-semibold">Message</label>
    <textarea rows="4" class="" placeholder="Your message"></textarea>
  </div>
  <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
</form>
</body></html>` }]
};

// Lab 2: Login Form
export const lab2LoginForm = {
    id: 'tailwind-u5-lab-2-login',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Login Form with Validation',
    duration: '25 min',
    content: 'Build login form with validation states.',
    tasks: [
        { id: 1, description: 'Add peer class to input for validation', completed: false,
          regex: /<input[^>]*class\s*=\s*["'][^"']*peer[^"']*["']/,
          hint: { concept: 'Peer Validation', strategy: 'Mark input with peer', solution: '<input class="peer" required>' }
        },
        { id: 2, description: 'Show error with peer-invalid:block', completed: false,
          regex: /class\s*=\s*["'][^"']*peer-invalid:block[^"']*["']/,
          hint: { concept: 'Error Display', strategy: 'Hidden by default, shown when peer invalid', solution: 'class="hidden peer-invalid:block text-red-600"' }
        }
    ],
    files: [{ name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Login</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="min-h-screen flex items-center justify-center bg-gray-100">
<form class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
  <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
  <div class="mb-4">
    <input type="email" class="" placeholder="Email" required>
    <p class="">Invalid email</p>
  </div>
  <div class="mb-6">
    <input type="password" class="" placeholder="Password" required minlength="8">
    <p class="">Password must be 8+ characters</p>
  </div>
  <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Login</button>
</form>
</body></html>` }]
};

// Lab 3: Signup Form
export const lab3SignupForm = {
    id: 'tailwind-u5-lab-3-signup',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Multi-Step Signup',
    duration: '20 min',
    content: 'Build multi-column signup form.',
    tasks: [
        { id: 1, description: 'Create 2-column grid with grid grid-cols-2 gap-4', completed: false,
          regex: /class\s*=\s*["'][^"']*grid[^"']*grid-cols-2[^"']*gap-4[^"']*["']/,
          hint: { concept: 'Grid Layout', strategy: 'Use grid for side-by-side inputs', solution: 'class="grid grid-cols-2 gap-4"' }
        }
    ],
    files: [{ name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Signup</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="p-8 bg-gray-50">
<form class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
  <h2 class="text-2xl font-bold mb-6">Create Account</h2>
  <div class="">
    <div><label class="block mb-2">First Name</label><input class="w-full px-4 py-2 border rounded"></div>
    <div><label class="block mb-2">Last Name</label><input class="w-full px-4 py-2 border rounded"></div>
  </div>
  <button class="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">Sign Up</button>
</form>
</body></html>` }]
};

// Lab 4: Newsletter Form
export const lab4Newsletter = {
    id: 'tailwind-u5-lab-4-newsletter',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Newsletter Subscription',
    duration: '15 min',
    content: 'Build inline newsletter form.',
    tasks: [
        { id: 1, description: 'Create inline form with flex gap-2', completed: false,
          regex: /class\s*=\s*["'][^"']*flex[^"']*gap-2[^"']*["']/,
          hint: { concept: 'Inline Form', strategy: 'Use flex for horizontal layout', solution: 'class="flex gap-2"' }
        }
    ],
    files: [{ name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Newsletter</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
<div class="bg-white p-8 rounded-lg shadow-2xl max-w-md">
  <h2 class="text-2xl font-bold mb-2">Subscribe</h2>
  <p class="text-gray-600 mb-6">Get updates delivered to your inbox.</p>
  <form class="">
    <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 border rounded-lg">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Subscribe</button>
  </form>
</div>
</body></html>` }]
};

// Quiz
export const quiz5Forms = {
    id: 'tailwind-u5-quiz-5',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 5 Quiz: Forms',
    duration: '5 min',
    questions: [
        { id: 'q1', question: 'Which class adds focus ring to input?', options: ['ring-2', 'focus:ring-2', 'focus-ring', 'input-ring'],
          correctIndex: 1, explanation: 'focus:ring-2 applies a 2px ring when input is focused.' },
        { id: 'q2', question: 'How do you style invalid inputs?', options: ['invalid:border-red-500', 'error:border-red-500', 'wrong:border-red-500', 'bad:border-red-500'],
          correctIndex: 0, explanation: 'invalid: modifier styles inputs that fail validation.' },
        { id: 'q3', question: 'What does peer-invalid: do?', options: ['Styles all invalid elements', 'Styles element when peer sibling is invalid', 'Validates input', 'Shows error'],
          correctIndex: 1, explanation: 'peer-invalid: styles an element when its peer sibling is in invalid state.' },
        { id: 'q4', question: 'How do you make input full width?', options: ['width-full', 'w-full', 'full-width', 'width-100'],
          correctIndex: 1, explanation: 'w-full makes an element 100% width of its container.' },
        { id: 'q5', question: 'Which creates inline form layout?', options: ['inline', 'flex', 'horizontal', 'inline-flex'],
          correctIndex: 1, explanation: 'flex creates a flexbox container perfect for inline forms.' }
    ]
};
