import { CONTENT_TYPES } from '../../../curriculumStructure.js';

// Lab 1: Contact Form
export const lab1ContactForm = {
  id: 'tailwind-u5-lab-1-contact',
  type: CONTENT_TYPES.LESSON,
  title: 'Lab: Contact Form',
  duration: '25 min',
  content: `
# Lab: Professional Contact Form

## The Mission

Build a fully-styled, professional contact form that users actually want to fill out. Great forms feel intuitive, provide clear feedback, and look polished!

## Requirements

Create a contact form with:
1. Name input with proper label styling
2. Email input with validation indication
3. Subject dropdown/select
4. Message textarea with good height
5. Submit button with hover state
6. Proper spacing between fields

## Design Specs

- **Card Container**: White, rounded-xl, shadow-lg, max-w-lg
- **Labels**: Small, semibold, gray-700, uppercase optional
- **Inputs**: Full width, border-2, rounded-lg, good padding
- **Focus**: Blue border and ring on focus
- **Button**: Full width, blue background, white text

Build a form that converts! 📝
`,
  tasks: [
    {
      id: 1,
      description: 'Create form container with bg-white rounded-xl shadow-lg p-8 max-w-lg',
      completed: false,
      regex: /class\s*=\s*["'][^"']*bg-white[^"']*rounded-xl[^"']*shadow-lg[^"']*p-8[^"']*["']/,
      hint: {
        concept: 'Form Card Container',
        strategy: 'Use bg-white for clean background, rounded-xl for modern corners, shadow-lg for depth, p-8 for comfortable padding',
        solution: 'class="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto"'
      }
    },
    {
      id: 2,
      description: 'Add label with block text-sm font-semibold text-gray-700 mb-2',
      completed: false,
      regex: /class\s*=\s*["'][^"']*block[^"']*text-sm[^"']*font-semibold[^"']*text-gray-700[^"']*mb-2[^"']*["']/,
      hint: {
        concept: 'Label Styling',
        strategy: 'block ensures label is on its own line, text-sm for smaller size, font-semibold for weight, mb-2 for spacing',
        solution: 'class="block text-sm font-semibold text-gray-700 mb-2"'
      }
    },
    {
      id: 3,
      description: 'Style input with w-full px-4 py-3 border-2 border-gray-300 rounded-lg',
      completed: false,
      regex: /class\s*=\s*["'][^"']*w-full[^"']*px-4[^"']*py-3[^"']*border-2[^"']*border-gray-300[^"']*rounded-lg[^"']*["']/,
      hint: {
        concept: 'Input Base Styling',
        strategy: 'w-full for full width, good padding, border-2 for visible border, rounded-lg for modern look',
        solution: 'class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"'
      }
    },
    {
      id: 4,
      description: 'Add input focus styles: focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none',
      completed: false,
      regex: /class\s*=\s*["'][^"']*focus:border-blue-500[^"']*focus:ring-2[^"']*["']/,
      hint: {
        concept: 'Input Focus States',
        strategy: 'Change border to blue on focus, add ring for glow effect, outline-none removes default browser outline',
        solution: 'class="... focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"'
      }
    },
    {
      id: 5,
      description: 'Style select dropdown with same styles as input: w-full px-4 py-3 border-2 rounded-lg',
      completed: false,
      regex: /<select[^>]*class\s*=\s*["'][^"']*w-full[^"']*px-4[^"']*py-3[^"']*border[^"']*rounded-lg[^"']*["']/,
      hint: {
        concept: 'Select Dropdown Styling',
        strategy: 'Apply same styles as text inputs for consistency across all form elements',
        solution: '<select class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">'
      }
    },
    {
      id: 6,
      description: 'Style textarea with resize-none min-h-[120px]',
      completed: false,
      regex: /<textarea[^>]*class\s*=\s*["'][^"']*resize-none[^"']*["']/,
      hint: {
        concept: 'Textarea Styling',
        strategy: 'resize-none prevents user from resizing, min-h sets minimum height for comfortable typing',
        solution: '<textarea class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg resize-none min-h-[120px] focus:border-blue-500">'
      }
    },
    {
      id: 7,
      description: 'Create submit button with w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors',
      completed: false,
      regex: /<button[^>]*class\s*=\s*["'][^"']*w-full[^"']*bg-blue-600[^"']*hover:bg-blue-700[^"']*text-white[^"']*["']/,
      hint: {
        concept: 'Submit Button',
        strategy: 'Full width for prominence, blue for action color, hover state for feedback, transition for smoothness',
        solution: '<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">'
      }
    },
    {
      id: 8,
      description: 'Add field spacing with space-y-6 on form or mb-6 on each field wrapper',
      completed: false,
      regex: /class\s*=\s*["'][^"']*space-y-6[^"']*["']|class\s*=\s*["'][^"']*mb-6[^"']*["']/,
      hint: {
        concept: 'Form Field Spacing',
        strategy: 'Use space-y-6 on form container for consistent vertical spacing between all fields',
        solution: '<form class="space-y-6"> or <div class="mb-6"> around each field'
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
    <title>Contact Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    
    <!-- Task 1: Form container -->
    <form class="">
        
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
        <p class="text-gray-600 mb-8">We'd love to hear from you. Send us a message!</p>
        
        <!-- Task 8: Add spacing wrapper or space-y-6 to form -->
        
        <!-- Name Field -->
        <div class="">
            <!-- Task 2: Label styling -->
            <label class="">Full Name</label>
            <!-- Task 3 & 4: Input with border and focus styles -->
            <input 
                type="text" 
                class=""
                placeholder="John Doe"
            >
        </div>
        
        <!-- Email Field -->
        <div class="">
            <label class="">Email Address</label>
            <input 
                type="email" 
                class=""
                placeholder="john@example.com"
                required
            >
        </div>
        
        <!-- Subject Dropdown -->
        <div class="">
            <label class="">Subject</label>
            <!-- Task 5: Select dropdown styling -->
            <select class="">
                <option value="">Select a subject...</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>
        
        <!-- Message Field -->
        <div class="">
            <label class="">Message</label>
            <!-- Task 6: Textarea styling -->
            <textarea 
                class=""
                placeholder="Tell us how we can help..."
                rows="4"
            ></textarea>
        </div>
        
        <!-- Task 7: Submit Button -->
        <button type="submit" class="">
            Send Message
        </button>
        
    </form>
    
</body>
</html>`
    }
  ]
};

// Lab 2: Login Form
export const lab2LoginForm = {
  id: 'tailwind-u5-lab-2-login',
  type: CONTENT_TYPES.LESSON,
  title: 'Lab: Login Form with Validation',
  duration: '25 min',
  content: `
# Lab: Modern Login Form

## The Mission

Create a sleek login form with real-time validation feedback. Users should know immediately if their input is valid or not - no guessing!

## Requirements

Build a login form with:
1. Email input with peer-based validation
2. Password input with visibility toggle styling
3. Error messages that appear on invalid input
4. Success indicators when valid
5. "Remember me" checkbox styling
6. Forgot password link styling
7. Social login buttons

## Design Specs

- **Container**: Centered, max-w-sm, card-style
- **Validation**: Red for errors, green for valid
- **Checkbox**: Custom styled with accent color
- **Links**: Blue, underline on hover

Make it foolproof! 🔐
`,
  tasks: [
    {
      id: 1,
      description: 'Add peer class to email input for sibling validation styling',
      completed: false,
      regex: /<input[^>]*type\s*=\s*["']email["'][^>]*class\s*=\s*["'][^"']*peer[^"']*["']/,
      hint: {
        concept: 'Peer Class for Validation',
        strategy: 'Add "peer" class to input. Sibling elements can then use peer-* modifiers to react to this input\'s validation state',
        solution: '<input type="email" class="peer ..." required>'
      }
    },
    {
      id: 2,
      description: 'Style input with valid and invalid borders: peer-valid:border-green-500 peer-invalid:border-red-500',
      completed: false,
      regex: /class\s*=\s*["'][^"']*(peer-valid:border-green|peer-invalid:border-red)[^"']*["']/,
      hint: {
        concept: 'Validation Border Colors',
        strategy: 'Use peer-valid: and peer-invalid: to change border color based on HTML5 validation',
        solution: 'class="peer ... valid:border-green-500 invalid:border-red-500"'
      }
    },
    {
      id: 3,
      description: 'Show error message with hidden peer-invalid:block text-red-600',
      completed: false,
      regex: /class\s*=\s*["'][^"']*hidden[^"']*peer-invalid:block[^"']*text-red-600[^"']*["']/,
      hint: {
        concept: 'Conditional Error Message',
        strategy: 'Hide error by default with hidden, show when peer input is invalid with peer-invalid:block',
        solution: '<p class="hidden peer-invalid:block text-red-600 text-sm mt-1">Invalid email</p>'
      }
    },
    {
      id: 4,
      description: 'Show success checkmark with hidden peer-valid:block text-green-600',
      completed: false,
      regex: /class\s*=\s*["'][^"']*hidden[^"']*peer-valid:block[^"']*text-green-600[^"']*["']/,
      hint: {
        concept: 'Success Indicator',
        strategy: 'Show a checkmark or success message only when input is valid',
        solution: '<span class="hidden peer-valid:block text-green-600">✓</span>'
      }
    },
    {
      id: 5,
      description: 'Style checkbox with accent-blue-600 w-4 h-4 rounded',
      completed: false,
      regex: /<input[^>]*type\s*=\s*["']checkbox["'][^>]*class\s*=\s*["'][^"']*accent-blue-600[^"']*["']/,
      hint: {
        concept: 'Custom Checkbox',
        strategy: 'Use accent-* to change checkbox color, w-4 h-4 for size, rounded for corners',
        solution: '<input type="checkbox" class="accent-blue-600 w-4 h-4 rounded">'
      }
    },
    {
      id: 6,
      description: 'Style forgot password link with text-blue-600 hover:underline text-sm',
      completed: false,
      regex: /<a[^>]*class\s*=\s*["'][^"']*text-blue-600[^"']*hover:underline[^"']*["']/,
      hint: {
        concept: 'Link Styling',
        strategy: 'Blue color for links, add underline on hover for interaction feedback',
        solution: '<a href="#" class="text-blue-600 hover:underline text-sm">Forgot password?</a>'
      }
    },
    {
      id: 7,
      description: 'Create social login button with flex items-center justify-center gap-2 border-2 rounded-lg',
      completed: false,
      regex: /<button[^>]*class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*justify-center[^"']*gap-2[^"']*border[^"']*["']/,
      hint: {
        concept: 'Social Login Buttons',
        strategy: 'Use flex with gap for icon + text alignment, border for outlined style',
        solution: '<button class="flex items-center justify-center gap-2 w-full border-2 border-gray-300 rounded-lg py-3 hover:bg-gray-50">'
      }
    },
    {
      id: 8,
      description: 'Add divider with flex items-center gap-4 using before/after pseudo or spans',
      completed: false,
      regex: /class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*["'][^>]*>[^<]*<span[^>]*class\s*=\s*["'][^"']*flex-1[^"']*h-px[^"']*bg-gray/,
      hint: {
        concept: 'OR Divider',
        strategy: 'Use flex container with flex-1 h-px spans on each side of "or" text',
        solution: '<div class="flex items-center gap-4"><span class="flex-1 h-px bg-gray-300"></span>or<span class="flex-1 h-px bg-gray-300"></span></div>'
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
    <title>Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        
        <h1 class="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p class="text-gray-500 text-center mb-8">Sign in to your account</p>
        
        <form class="space-y-5">
            
            <!-- Email Field -->
            <div class="relative">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <!-- Task 1 & 2: Add peer class and validation borders -->
                <input 
                    type="email" 
                    class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none transition-colors"
                    placeholder="you@example.com"
                    required
                >
                <!-- Task 3: Error message -->
                <p class="">Please enter a valid email</p>
                <!-- Task 4: Success checkmark (position absolute right side) -->
                <span class="absolute right-3 top-10">✓</span>
            </div>
            
            <!-- Password Field -->
            <div class="relative">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                    type="password" 
                    class="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 valid:border-green-500 invalid:border-red-500 transition-colors"
                    placeholder="••••••••"
                    minlength="8"
                    required
                >
                <p class="hidden peer-invalid:block text-red-600 text-sm mt-1">Password must be 8+ characters</p>
            </div>
            
            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer">
                    <!-- Task 5: Styled checkbox -->
                    <input type="checkbox" class="">
                    <span class="text-sm text-gray-600">Remember me</span>
                </label>
                <!-- Task 6: Forgot password link -->
                <a href="#" class="">Forgot password?</a>
            </div>
            
            <!-- Submit Button -->
            <button 
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
                Sign In
            </button>
            
        </form>
        
        <!-- Task 8: OR Divider -->
        <div class="my-6">
            <span class=""></span>
            <span class="text-gray-500 text-sm">or continue with</span>
            <span class=""></span>
        </div>
        
        <!-- Task 7: Social Login Buttons -->
        <div class="grid grid-cols-2 gap-3">
            <button class="">
                <span>🔵</span>
                Google
            </button>
            <button class="">
                <span>⚫</span>
                GitHub
            </button>
        </div>
        
        <p class="text-center text-gray-500 text-sm mt-6">
            Don't have an account? 
            <a href="#" class="text-blue-600 hover:underline font-semibold">Sign up</a>
        </p>
        
    </div>
    
</body>
</html>`
    }
  ]
};

// Lab 3: Signup Form
export const lab3SignupForm = {
  id: 'tailwind-u5-lab-3-signup',
  type: CONTENT_TYPES.LESSON,
  title: 'Lab: Multi-Step Signup',
  duration: '25 min',
  content: `
# Lab: Multi-Column Signup Form

## The Mission

Build a comprehensive signup form using a responsive multi-column layout. On desktop, related fields sit side-by-side for efficiency. On mobile, they stack for usability.

## Requirements

1. Two-column grid for name fields (first/last)
2. Full-width email field
3. Two-column for password/confirm
4. Phone number with country code select
5. Date of birth with proper input styling
6. Terms checkbox with inline link
7. Progress indicator at top (optional)

## Design Specs

- **Layout**: max-w-2xl, responsive grid
- **Columns**: grid-cols-1 on mobile, md:grid-cols-2 on desktop
- **Sections**: Optional dividers between field groups

Make signup effortless! ✍️
`,
  tasks: [
    {
      id: 1,
      description: 'Create main container with max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8',
      completed: false,
      regex: /class\s*=\s*["'][^"']*max-w-2xl[^"']*mx-auto[^"']*bg-white[^"']*rounded-xl[^"']*shadow-lg[^"']*p-8[^"']*["']/,
      hint: {
        concept: 'Form Container',
        strategy: 'max-w-2xl provides good width for two-column forms, centered with mx-auto',
        solution: 'class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"'
      }
    },
    {
      id: 2,
      description: 'Create responsive 2-column grid: grid grid-cols-1 md:grid-cols-2 gap-4',
      completed: false,
      regex: /class\s*=\s*["'][^"']*grid[^"']*grid-cols-1[^"']*md:grid-cols-2[^"']*gap-4[^"']*["']/,
      hint: {
        concept: 'Responsive Grid',
        strategy: 'Single column on mobile (grid-cols-1), two columns on desktop (md:grid-cols-2)',
        solution: 'class="grid grid-cols-1 md:grid-cols-2 gap-4"'
      }
    },
    {
      id: 3,
      description: 'Make email field span full width with md:col-span-2',
      completed: false,
      regex: /class\s*=\s*["'][^"']*md:col-span-2[^"']*["']/,
      hint: {
        concept: 'Grid Column Span',
        strategy: 'Use md:col-span-2 to make a field take both columns on desktop',
        solution: '<div class="md:col-span-2">...email field...</div>'
      }
    },
    {
      id: 4,
      description: 'Create phone input with flex for country code: flex gap-2',
      completed: false,
      regex: /class\s*=\s*["'][^"']*flex[^"']*gap-2[^"']*["'][^>]*>[^<]*<select|class\s*=\s*["'][^"']*flex[^"']*gap-3[^"']*["'][^>]*>[^<]*<select/,
      hint: {
        concept: 'Phone Input Layout',
        strategy: 'Use flex with gap to place country code dropdown next to phone number input',
        solution: '<div class="flex gap-2"><select class="w-24">...</select><input class="flex-1" ...></div>'
      }
    },
    {
      id: 5,
      description: 'Style date input to match other inputs: same padding, border, rounded',
      completed: false,
      regex: /<input[^>]*type\s*=\s*["']date["'][^>]*class\s*=\s*["'][^"']*px-4[^"']*py-3[^"']*border[^"']*rounded[^"']*["']/,
      hint: {
        concept: 'Date Input Styling',
        strategy: 'Apply same styles to date input as text inputs for visual consistency',
        solution: '<input type="date" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg">'
      }
    },
    {
      id: 6,
      description: 'Create terms checkbox with inline link: flex items-start gap-3',
      completed: false,
      regex: /class\s*=\s*["'][^"']*flex[^"']*items-start[^"']*gap-3[^"']*["'][^>]*>[^<]*<input[^>]*type\s*=\s*["']checkbox["']/,
      hint: {
        concept: 'Checkbox with Terms',
        strategy: 'Use flex with items-start so checkbox aligns to top of multi-line text, gap for spacing',
        solution: '<label class="flex items-start gap-3"><input type="checkbox">...<span>I agree to <a>Terms</a></span></label>'
      }
    },
    {
      id: 7,
      description: 'Style divider section with relative and centered text: flex items-center, flex-1 h-px bg-gray-200',
      completed: false,
      regex: /class\s*=\s*["'][^"']*flex-1[^"']*h-px[^"']*bg-gray-200[^"']*["']/,
      hint: {
        concept: 'Section Divider',
        strategy: 'Use flex with h-px lines on each side of section title text',
        solution: '<div class="flex items-center gap-4 my-6"><span class="flex-1 h-px bg-gray-200"></span><span>Section</span><span class="flex-1 h-px bg-gray-200"></span></div>'
      }
    },
    {
      id: 8,
      description: 'Add form row vertical spacing: space-y-6 on form element',
      completed: false,
      regex: /<form[^>]*class\s*=\s*["'][^"']*space-y-6[^"']*["']/,
      hint: {
        concept: 'Form Spacing',
        strategy: 'Use space-y-6 on form to add consistent vertical gaps between all field groups',
        solution: '<form class="space-y-6">'
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
    <title>Create Account</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 py-12 px-4">
    
    <!-- Task 1: Form container -->
    <div class="">
        
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
        <p class="text-gray-500 mb-8">Join thousands of developers learning to code</p>
        
        <!-- Task 8: Add space-y-6 -->
        <form class="">
            
            <!-- Personal Info Section -->
            <div>
                <!-- Task 7: Section divider (optional) -->
                <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Personal Information</h2>
                
                <!-- Task 2: Responsive 2-column grid for name -->
                <div class="">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        <input type="text" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="John">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        <input type="text" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Doe">
                    </div>
                </div>
            </div>
            
            <!-- Task 3: Full-width email field -->
            <div class="">
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="john@example.com">
            </div>
            
            <!-- Phone Number -->
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <!-- Task 4: Flex layout for country code + phone -->
                <div class="">
                    <select class="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option>+1</option>
                        <option>+44</option>
                        <option>+62</option>
                        <option>+81</option>
                    </select>
                    <input type="tel" class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="(555) 123-4567">
                </div>
            </div>
            
            <!-- Task 5: Date of Birth -->
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input type="date" class="">
            </div>
            
            <!-- Password Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input type="password" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="••••••••">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input type="password" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="••••••••">
                </div>
            </div>
            
            <!-- Task 6: Terms Checkbox -->
            <label class="">
                <input type="checkbox" class="accent-blue-600 w-4 h-4 rounded mt-1">
                <span class="text-gray-600 text-sm">
                    I agree to the <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> 
                    and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
                </span>
            </label>
            
            <!-- Submit Button -->
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Create Account
            </button>
            
        </form>
        
        <p class="text-center text-gray-500 text-sm mt-6">
            Already have an account? 
            <a href="#" class="text-blue-600 hover:underline font-semibold">Sign in</a>
        </p>
        
    </div>
    
</body>
</html>`
    }
  ]
};

// Lab 4: Newsletter Form
export const lab4Newsletter = {
  id: 'tailwind-u5-lab-4-newsletter',
  type: CONTENT_TYPES.LESSON,
  title: 'Lab: Newsletter Subscription',
  duration: '20 min',
  content: `
# Lab: Inline Newsletter Form

## The Mission

Build a compact, inline newsletter subscription form that captures emails with style. These forms often appear in footers, sidebars, or call-to-action sections.

## Requirements

1. Horizontal layout on desktop (input + button side by side)
2. Stacked layout on mobile
3. Gradient or colored background for the container
4. Input that takes remaining space (flex-1)
5. Button with contrasting style
6. Success/loading states (optional)
7. Privacy note text below

## Design Specs

- **Container**: Gradient background, rounded-xl, padding
- **Layout**: flex-col sm:flex-row, gap between elements
- **Input**: White/transparent, good contrast
- **Button**: Solid color, stands out

Convert those visitors! 📬
`,
  tasks: [
    {
      id: 1,
      description: 'Create container with gradient: bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8',
      completed: false,
      regex: /class\s*=\s*["'][^"']*bg-gradient-to-r[^"']*from-blue[^"']*to-purple[^"']*["']/,
      hint: {
        concept: 'Gradient Background',
        strategy: 'Use bg-gradient-to-r for horizontal gradient, from-* and to-* for colors',
        solution: 'class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8"'
      }
    },
    {
      id: 2,
      description: 'Create responsive flex layout: flex flex-col sm:flex-row gap-3',
      completed: false,
      regex: /class\s*=\s*["'][^"']*flex[^"']*flex-col[^"']*sm:flex-row[^"']*gap-3[^"']*["']/,
      hint: {
        concept: 'Responsive Flex Direction',
        strategy: 'Stack vertically on mobile (flex-col), horizontal on small screens and up (sm:flex-row)',
        solution: 'class="flex flex-col sm:flex-row gap-3"'
      }
    },
    {
      id: 3,
      description: 'Make input take available space with flex-1',
      completed: false,
      regex: /<input[^>]*class\s*=\s*["'][^"']*flex-1[^"']*["']/,
      hint: {
        concept: 'Flex Grow',
        strategy: 'flex-1 makes the input grow to fill remaining space in the flex container',
        solution: '<input class="flex-1 px-4 py-3 rounded-lg">'
      }
    },
    {
      id: 4,
      description: 'Style input for dark background: bg-white/20 placeholder-white/70 text-white border-white/30',
      completed: false,
      regex: /class\s*=\s*["'][^"']*bg-white\/20[^"']*["']|class\s*=\s*["'][^"']*placeholder-white[^"']*["']/,
      hint: {
        concept: 'Transparent Input on Gradient',
        strategy: 'Use white with opacity for semi-transparent look that works on colored backgrounds',
        solution: 'class="bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-3"'
      }
    },
    {
      id: 5,
      description: 'Create contrasting button: bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100',
      completed: false,
      regex: /<button[^>]*class\s*=\s*["'][^"']*bg-white[^"']*text-blue-600[^"']*["']/,
      hint: {
        concept: 'Contrasting CTA Button',
        strategy: 'White button stands out against colored/gradient background. Reverse the colors for contrast',
        solution: '<button class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">'
      }
    },
    {
      id: 6,
      description: 'Add section heading with text-white text-2xl font-bold mb-2',
      completed: false,
      regex: /class\s*=\s*["'][^"']*text-white[^"']*text-2xl[^"']*font-bold[^"']*["']/,
      hint: {
        concept: 'Light Text on Dark Background',
        strategy: 'Use text-white for headings on dark/gradient backgrounds for readability',
        solution: '<h2 class="text-white text-2xl font-bold mb-2">Subscribe to our newsletter</h2>'
      }
    },
    {
      id: 7,
      description: 'Add subtitle with text-white/80 text-sm or text-blue-100',
      completed: false,
      regex: /class\s*=\s*["'][^"']*text-white\/[78]0[^"']*["']|class\s*=\s*["'][^"']*text-blue-100[^"']*["']/,
      hint: {
        concept: 'Subtle Text on Gradient',
        strategy: 'Use white with opacity or lighter shade for secondary text that\'s visible but not prominent',
        solution: '<p class="text-white/80 mb-6">Get weekly tips and updates</p>'
      }
    },
    {
      id: 8,
      description: 'Add privacy note with text-xs text-white/60 mt-3',
      completed: false,
      regex: /class\s*=\s*["'][^"']*text-xs[^"']*text-white\/[56]0[^"']*["']/,
      hint: {
        concept: 'Fine Print Styling',
        strategy: 'Use text-xs for small text, lower opacity for less visual weight',
        solution: '<p class="text-xs text-white/60 mt-3">We respect your privacy. Unsubscribe anytime.</p>'
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
    <title>Newsletter Signup</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    
    <div class="w-full max-w-xl">
        
        <!-- Task 1: Gradient container -->
        <div class="">
            
            <!-- Task 6: White heading -->
            <h2 class="">Stay in the Loop</h2>
            
            <!-- Task 7: Subtitle -->
            <p class="">
                Get the latest tutorials, tips, and resources delivered straight to your inbox.
            </p>
            
            <!-- Task 2: Responsive flex layout -->
            <form class="">
                <!-- Task 3 & 4: Flexible input with transparent styling -->
                <input 
                    type="email" 
                    class=""
                    placeholder="Enter your email address"
                    required
                >
                
                <!-- Task 5: Contrasting button -->
                <button type="submit" class="">
                    Subscribe
                </button>
            </form>
            
            <!-- Task 8: Privacy note -->
            <p class="">
                🔒 We respect your privacy. Unsubscribe anytime.
            </p>
            
        </div>
        
        <!-- Alternate version: Dark theme -->
        <div class="mt-8 bg-gray-900 rounded-xl p-8">
            <h2 class="text-white text-2xl font-bold mb-2">Join Our Community</h2>
            <p class="text-gray-400 mb-6">50,000+ developers already subscribed</p>
            
            <form class="flex flex-col sm:flex-row gap-3">
                <input 
                    type="email" 
                    class="flex-1 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
                    placeholder="your@email.com"
                >
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                    Get Started
                </button>
            </form>
            
            <p class="text-xs text-gray-500 mt-3">
                No spam, ever. We'll only send you relevant content.
            </p>
        </div>
        
    </div>
    
</body>
</html>`
    }
  ]
};

// Quiz
export const quiz5Forms = {
  id: 'tailwind-u5-quiz-5',
  type: CONTENT_TYPES.QUIZ,
  title: 'Unit 5 Quiz: Forms',
  duration: '5 min',
  questions: [
    {
      id: 'q1',
      question: 'Which class adds a focus ring to an input?',
      options: ['ring-2', 'focus:ring-2', 'focus-ring', 'input-ring'],
      correctIndex: 1,
      explanation: 'focus:ring-2 applies a 2px ring when the input is focused.'
    },
    {
      id: 'q2',
      question: 'How do you style invalid inputs with native HTML5 validation?',
      options: ['invalid:border-red-500', 'error:border-red-500', ':invalid:border-red-500', 'validate:red'],
      correctIndex: 0,
      explanation: 'invalid: modifier styles inputs that fail HTML5 validation.'
    },
    {
      id: 'q3',
      question: 'What does peer-invalid: do?',
      options: ['Styles all invalid elements', 'Styles sibling element when peer is invalid', 'Validates input automatically', 'Shows error modal'],
      correctIndex: 1,
      explanation: 'peer-invalid: styles an element when its peer sibling (marked with peer class) is in invalid state.'
    },
    {
      id: 'q4',
      question: 'How do you make an input full width?',
      options: ['width-full', 'w-full', 'full-width', 'width-100'],
      correctIndex: 1,
      explanation: 'w-full makes an element 100% width of its container.'
    },
    {
      id: 'q5',
      question: 'Which creates inline form layout (input + button side by side)?',
      options: ['inline', 'flex', 'horizontal', 'side-by-side'],
      correctIndex: 1,
      explanation: 'flex creates a flexbox container perfect for inline forms with gap between elements.'
    },
    {
      id: 'q6',
      question: 'How do you make input take remaining space in a flex container?',
      options: ['flex-grow', 'flex-1', 'grow-full', 'flex-fill'],
      correctIndex: 1,
      explanation: 'flex-1 is shorthand for flex: 1 1 0%, making element grow to fill available space.'
    }
  ]
};
