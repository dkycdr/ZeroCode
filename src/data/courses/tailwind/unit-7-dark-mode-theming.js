import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7DarkModeTheming = {
    id: 'tailwind-unit-7',
    title: 'Dark Mode & Theming - Modern UI Patterns',
    description: 'Master dark mode implementation and theming strategies with Tailwind CSS',
    items: [
        {
            id: 'tailwind-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Dark Mode & Theming - The Complete Guide',
            duration: '30 min read',
            content: `
# Dark Mode & Theming - The Complete Guide

## What is Dark Mode?

**Dark Mode** is a color scheme that uses light text on dark backgrounds, reducing eye strain and saving battery on OLED screens.

### Real-World Analogy: Day and Night

Think of dark mode like adjusting to different lighting:

**Light Mode (Day):**
\`\`\`
Bright sunlight outside
Your eyes adjust to brightness
White paper, black text
Easy to read in daylight
\`\`\`

**Dark Mode (Night):**
\`\`\`
Dark room at night
Your eyes adjust to darkness
Dark background, light text
Easier on eyes in low light
\`\`\`

### Why Dark Mode Matters

**Benefits:**
- ✅ Reduces eye strain in low light
- ✅ Saves battery on OLED screens
- ✅ Modern, professional look
- ✅ User preference and accessibility
- ✅ Trendy and expected feature

**Statistics:**
- 82% of users use dark mode on their phones
- 70% prefer apps with dark mode option
- Reduces eye strain by up to 60%

## Tailwind Dark Mode Basics

### Enabling Dark Mode

**tailwind.config.js:**
\`\`\`javascript
module.exports = {
  darkMode: 'class', // or 'media'
  // rest of config
}
\`\`\`

**Two Strategies:**

**1. Class Strategy (Recommended):**
- Manual control
- Toggle with JavaScript
- User preference saved
- More flexible

**2. Media Strategy:**
- Automatic based on system
- No JavaScript needed
- Follows OS preference
- Less control

### Basic Dark Mode Syntax

**Using dark: prefix:**
\`\`\`html
<!-- Light mode: white background, dark text -->
<!-- Dark mode: dark background, light text -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-2xl">Hello World</h1>
  <p class="text-gray-600 dark:text-gray-300">
    This text adapts to dark mode!
  </p>
</div>
\`\`\`

**How it works:**
1. Default classes apply in light mode
2. dark: prefixed classes apply when dark mode active
3. Requires dark class on html or body element

## Implementing Dark Mode Toggle

### HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dark Mode Demo</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- Dark Mode Toggle Button -->
  <button id="theme-toggle" class="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
    <span class="dark:hidden">🌙</span>
    <span class="hidden dark:inline">☀️</span>
  </button>

  <!-- Content -->
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4">Dark Mode Example</h1>
    <p class="text-gray-600 dark:text-gray-300">
      Click the button to toggle dark mode!
    </p>
  </div>
</body>
</html>
\`\`\`

### JavaScript Toggle Logic

\`\`\`javascript
// Get elements
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on load
if (currentTheme === 'dark') {
  html.classList.add('dark');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  
  // Save preference
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
\`\`\`

**How it works:**
1. Check localStorage for saved preference
2. Apply dark class if user prefers dark mode
3. Toggle dark class on button click
4. Save preference to localStorage

### Preventing Flash of Wrong Theme

**Problem:**
\`\`\`
Page loads in light mode
JavaScript runs
Switches to dark mode
User sees flash of light mode!
\`\`\`

**Solution - Inline Script:**
\`\`\`html
<script>
  // Run BEFORE page renders
  if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
</script>
\`\`\`

**Place in <head> before any content!**

## Dark Mode Color Strategies

### Strategy 1: Inverted Colors

**Simple inversion:**
\`\`\`html
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">Title</h1>
  <p class="text-gray-700 dark:text-gray-300">Content</p>
</div>
\`\`\`

**Pros:**
- Simple to implement
- Consistent contrast

**Cons:**
- Can look harsh
- Not always optimal

### Strategy 2: Adjusted Colors

**Softer dark mode:**
\`\`\`html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-gray-100">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Content</p>
  <button class="bg-blue-500 dark:bg-blue-600 text-white">
    Button
  </button>
</div>
\`\`\`

**Pros:**
- More refined
- Better readability
- Professional look

### Strategy 3: Custom Dark Palette

**Define dark-specific colors:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        // Dark mode specific
        'dark-bg': {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          tertiary: '#3d3d3d',
        },
        'dark-text': {
          primary: '#e5e5e5',
          secondary: '#a3a3a3',
          tertiary: '#737373',
        }
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="bg-white dark:bg-dark-bg-primary">
  <h1 class="text-gray-900 dark:text-dark-text-primary">Title</h1>
  <p class="text-gray-600 dark:text-dark-text-secondary">Content</p>
</div>
\`\`\`

## Component-Level Dark Mode

### Card Component

\`\`\`html
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/50 p-6">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Card Title
  </h2>
  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Card content goes here. This text adapts to dark mode automatically.
  </p>
  <button class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded">
    Action
  </button>
</div>
\`\`\`

### Navigation Bar

\`\`\`html
<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <div class="text-xl font-bold text-gray-900 dark:text-white">
      Logo
    </div>
    <ul class="flex space-x-6">
      <li>
        <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          Home
        </a>
      </li>
      <li>
        <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          About
        </a>
      </li>
    </ul>
  </div>
</nav>
\`\`\`

### Form Elements

\`\`\`html
<form class="space-y-4">
  <div>
    <label class="block text-gray-700 dark:text-gray-300 mb-2">
      Email
    </label>
    <input 
      type="email"
      class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      placeholder="Enter email"
    />
  </div>
  
  <button class="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 rounded-lg">
    Submit
  </button>
</form>
\`\`\`

## Advanced Dark Mode Patterns

### Gradient Backgrounds

\`\`\`html
<div class="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900">
  <h1 class="text-white">Gradient Background</h1>
</div>
\`\`\`

### Images in Dark Mode

**Problem:** Images can be too bright in dark mode

**Solution 1: Opacity**
\`\`\`html
<img 
  src="image.jpg" 
  class="dark:opacity-75"
  alt="Image"
/>
\`\`\`

**Solution 2: Different Images**
\`\`\`html
<img 
  src="light-logo.png" 
  class="dark:hidden"
  alt="Logo"
/>
<img 
  src="dark-logo.png" 
  class="hidden dark:block"
  alt="Logo"
/>
\`\`\`

**Solution 3: Filter**
\`\`\`html
<img 
  src="image.jpg" 
  class="dark:brightness-75 dark:contrast-125"
  alt="Image"
/>
\`\`\`

### Shadows in Dark Mode

**Light mode shadows don't work in dark mode:**
\`\`\`html
<!-- Bad: Same shadow in both modes -->
<div class="shadow-lg">Content</div>

<!-- Good: Adjusted shadows -->
<div class="shadow-lg dark:shadow-gray-900/50">
  Content
</div>

<!-- Better: Different shadow intensity -->
<div class="shadow-md dark:shadow-2xl dark:shadow-gray-900/80">
  Content
</div>
\`\`\`

## Theming Beyond Dark Mode

### Multiple Themes

**Setup:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        theme: {
          blue: {
            bg: '#eff6ff',
            text: '#1e40af',
          },
          green: {
            bg: '#f0fdf4',
            text: '#166534',
          },
          purple: {
            bg: '#faf5ff',
            text: '#6b21a8',
          }
        }
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<body class="theme-blue">
  <div class="bg-theme-blue-bg text-theme-blue-text">
    Blue theme content
  </div>
</body>
\`\`\`

### CSS Variables Approach

**Define variables:**
\`\`\`css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-bg: #ffffff;
  --color-text: #1f2937;
}

.dark {
  --color-primary: #60a5fa;
  --color-secondary: #a78bfa;
  --color-bg: #1f2937;
  --color-text: #f9fafb;
}
\`\`\`

**Configure Tailwind:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="bg-bg text-text">
  <h1 class="text-primary">Title</h1>
  <p class="text-secondary">Content</p>
</div>
\`\`\`

## Best Practices

### DO:
- ✅ Test in both modes
- ✅ Maintain contrast ratios (WCAG AA: 4.5:1)
- ✅ Save user preference
- ✅ Provide toggle button
- ✅ Use semantic color names
- ✅ Test with real content
- ✅ Consider images and media

### DON'T:
- ❌ Force dark mode
- ❌ Use pure black (#000000)
- ❌ Forget about shadows
- ❌ Ignore accessibility
- ❌ Use too many colors
- ❌ Forget to test forms
- ❌ Neglect hover states

## Accessibility Considerations

### Contrast Ratios

**WCAG Standards:**
- AA: 4.5:1 for normal text
- AA: 3:1 for large text
- AAA: 7:1 for normal text

**Check contrast:**
\`\`\`html
<!-- Good contrast -->
<div class="bg-gray-900 text-white">High contrast</div>

<!-- Bad contrast -->
<div class="bg-gray-800 text-gray-700">Low contrast</div>
\`\`\`

### Respect System Preferences

\`\`\`javascript
// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) {
    // User switched to dark mode
    document.documentElement.classList.add('dark');
  } else {
    // User switched to light mode
    document.documentElement.classList.remove('dark');
  }
});
\`\`\`

## Summary

### Key Takeaways

**Dark Mode:**
- Use dark: prefix for dark mode styles
- Enable with darkMode: 'class' in config
- Toggle with JavaScript
- Save user preference
- Prevent flash with inline script

**Color Strategy:**
- Don't just invert colors
- Adjust for readability
- Use softer colors in dark mode
- Test contrast ratios
- Consider all UI elements

**Best Practices:**
- Provide toggle button
- Save preference
- Test thoroughly
- Maintain accessibility
- Consider images and shadows
- Respect system preferences

### Quick Reference

**Enable Dark Mode:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
}
\`\`\`

**Toggle Script:**
\`\`\`javascript
document.documentElement.classList.toggle('dark');
localStorage.setItem('theme', theme);
\`\`\`

**Common Patterns:**
\`\`\`html
bg-white dark:bg-gray-900
text-gray-900 dark:text-white
border-gray-200 dark:border-gray-700
shadow-lg dark:shadow-gray-900/50
\`\`\`

## Real-World Examples

### Example 1: Blog Post Card

\`\`\`html
<article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-gray-900/70">
  <img 
    src="post-image.jpg" 
    alt="Post" 
    class="w-full h-48 object-cover dark:opacity-90"
  />
  <div class="p-6">
    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
      <span>March 15, 2024</span>
      <span>•</span>
      <span>5 min read</span>
    </div>
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
      Understanding Dark Mode Design
    </h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      Learn how to implement beautiful dark mode interfaces that your users will love.
    </p>
    <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
      Read more →
    </a>
  </div>
</article>
\`\`\`

### Example 2: Dashboard Sidebar

\`\`\`html
<aside class="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen">
  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
    <h1 class="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
  </div>
  <nav class="p-4">
    <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-2">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
      </svg>
      <span class="font-medium">Home</span>
    </a>
    <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 mb-2">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
      </svg>
      <span class="font-medium">Projects</span>
    </a>
  </nav>
</aside>
\`\`\`

### Example 3: Settings Panel

\`\`\`html
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/50 p-6">
  <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>
  
  <div class="space-y-6">
    <!-- Theme Setting -->
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white">Theme</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Choose your preferred theme</p>
      </div>
      <select class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
        <option>Light</option>
        <option>Dark</option>
        <option>System</option>
      </select>
    </div>
    
    <!-- Notifications -->
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-medium text-gray-900 dark:text-white">Notifications</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Receive email notifications</p>
      </div>
      <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700">
        <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
      </button>
    </div>
  </div>
</div>
\`\`\`

## Performance Considerations

### Minimize Class Bloat

**Problem:**
\`\`\`html
<!-- Too many classes -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/50 rounded-lg p-6">
\`\`\`

**Solution - Extract Component:**
\`\`\`css
@layer components {
  .card {
    @apply bg-white dark:bg-gray-900 
           text-gray-900 dark:text-white 
           border border-gray-200 dark:border-gray-700 
           shadow-lg dark:shadow-gray-900/50 
           rounded-lg p-6;
  }
}
\`\`\`

\`\`\`html
<div class="card">Much cleaner!</div>
\`\`\`

### Optimize Theme Switching

**Smooth Transitions:**
\`\`\`css
/* Add to your CSS */
* {
  transition: background-color 0.3s ease, 
              color 0.3s ease, 
              border-color 0.3s ease;
}
\`\`\`

**Or with Tailwind:**
\`\`\`html
<div class="transition-colors duration-300 bg-white dark:bg-gray-900">
  Content
</div>
\`\`\`

## Troubleshooting Common Issues

### Issue 1: Dark Mode Not Working

**Check:**
1. Is darkMode: 'class' in config?
2. Is 'dark' class on html element?
3. Are you using dark: prefix correctly?
4. Is Tailwind CSS loaded?

### Issue 2: Flash of Wrong Theme

**Solution:**
\`\`\`html
<script>
  // Place in <head> BEFORE any content
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
</script>
\`\`\`

### Issue 3: Colors Look Wrong

**Check:**
- Contrast ratios
- Test with real content
- View in different lighting
- Ask for feedback

### Issue 4: Images Too Bright

**Solutions:**
\`\`\`html
<!-- Reduce opacity -->
<img class="dark:opacity-75" src="image.jpg" />

<!-- Use filter -->
<img class="dark:brightness-90 dark:contrast-110" src="image.jpg" />

<!-- Different image -->
<img class="dark:hidden" src="light.jpg" />
<img class="hidden dark:block" src="dark.jpg" />
\`\`\`
`
        },
        {
            id: 'tailwind-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Practice: Dark Mode & Theming',
            duration: '40 min',
            content: `
# Practice: Dark Mode & Theming

In this lesson, you'll practice implementing dark mode and theming with Tailwind CSS.

## Setup Instructions

1. Create HTML file with Tailwind CDN
2. Implement dark mode toggle
3. Style components for both modes
4. Test accessibility

## Important Notes

- Use the page console to see output (not browser console)
- Test in both light and dark modes
- Check contrast ratios
- Save user preferences

## Tasks Overview

You'll complete 7 tasks:
1. Enable dark mode in Tailwind
2. Create dark mode toggle button
3. Style card component for dark mode
4. Create dark mode navigation
5. Style form elements
6. Implement theme persistence
7. Create multi-theme system
`,
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!-- Dark Mode Practice -->
<!-- Instructions:
1. Add Tailwind CDN
2. Enable dark mode with class strategy
3. Create toggle button
4. Style components for both modes
5. Test thoroughly
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Practice</title>
  <!-- Add Tailwind CDN here -->
  
</head>
<body>
  <!-- Your dark mode implementation here -->
  
</body>
</html>`,
                'script.js': `// Dark Mode Toggle Logic
// Instructions:
// 1. Get toggle button element
// 2. Check localStorage for saved theme
// 3. Apply saved theme on load
// 4. Toggle dark class on click
// 5. Save preference to localStorage

// Your code here:
`
                }
            ],
            tasks: [
                {
                    id: 'tailwind-7-task-1',
                    title: 'Enable Dark Mode',
                    instructions: `Setup Tailwind with dark mode enabled.

Create an HTML file with:
1. Tailwind CDN script
2. Configure darkMode: 'class'
3. Add dark mode classes to body
4. Test by manually adding/removing 'dark' class

Expected output: Body background changes between light and dark`,
                    validation: {
                        type: 'output',
                        expectedPattern: /dark.*mode|background.*change/i
                    }
                },
                {
                    id: 'tailwind-7-task-2',
                    title: 'Create Toggle Button',
                    instructions: `Create a functional dark mode toggle button.

Requirements:
1. Fixed position button (top-right)
2. Show moon icon in light mode
3. Show sun icon in dark mode
4. Toggle dark class on html element
5. Log current theme to console

Expected output: "Theme changed to: dark" or "Theme changed to: light"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Theme changed to: (dark|light)/i
                    }
                },
                {
                    id: 'tailwind-7-task-3',
                    title: 'Style Card Component',
                    instructions: `Create a card that adapts to dark mode.

Card should have:
1. White bg in light, gray-800 in dark
2. Proper text colors for both modes
3. Adjusted shadows
4. Hover effects for both modes
5. Log "Card rendered in [mode] mode"

Expected output: "Card rendered in light mode" or "Card rendered in dark mode"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Card rendered in (light|dark) mode/i
                    }
                },
                {
                    id: 'tailwind-7-task-4',
                    title: 'Create Dark Mode Navigation',
                    instructions: `Build a navigation bar with dark mode support.

Navigation should have:
1. Proper background colors
2. Border colors for both modes
3. Link hover states
4. Active link indication
5. Log "Navigation: [mode] mode active"

Expected output: "Navigation: light mode active" or "Navigation: dark mode active"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Navigation: (light|dark) mode active/i
                    }
                },
                {
                    id: 'tailwind-7-task-5',
                    title: 'Style Form Elements',
                    instructions: `Create form inputs that work in both modes.

Form should include:
1. Text input with proper colors
2. Textarea with dark mode styles
3. Button with hover states
4. Labels with readable colors
5. Log "Form ready in [mode] mode"

Expected output: "Form ready in light mode" or "Form ready in dark mode"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Form ready in (light|dark) mode/i
                    }
                },
                {
                    id: 'tailwind-7-task-6',
                    title: 'Implement Theme Persistence',
                    instructions: `Save and restore user's theme preference.

Implementation:
1. Save theme to localStorage on toggle
2. Check localStorage on page load
3. Apply saved theme before render
4. Prevent flash of wrong theme
5. Log "Theme loaded from storage: [theme]"

Expected output: "Theme loaded from storage: dark" or "Theme loaded from storage: light"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Theme loaded from storage: (dark|light)/i
                    }
                },
                {
                    id: 'tailwind-7-task-7',
                    title: 'Create Multi-Theme System',
                    instructions: `Implement multiple color themes (blue, green, purple).

System should:
1. Define theme colors in config
2. Create theme switcher
3. Apply theme classes
4. Save theme preference
5. Log "Active theme: [theme-name]"

Expected output: "Active theme: blue" or "Active theme: green" or "Active theme: purple"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Active theme: (blue|green|purple)/i
                    }
                }
            ]
        },
        {
            id: 'tailwind-7-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Quiz: Dark Mode & Theming',
            duration: '5 min',
            questions: [
                {
                    id: 'tailwind-7-q1',
                    question: 'What are the two dark mode strategies in Tailwind?',
                    options: [
                        'auto and manual',
                        'class and media',
                        'light and dark',
                        'system and custom'
                    ],
                    correctAnswer: 1,
                    explanation: 'Tailwind supports two dark mode strategies: "class" (manual control with JavaScript) and "media" (automatic based on system preference). Class strategy is recommended for more control.'
                },
                {
                    id: 'tailwind-7-q2',
                    question: 'How do you apply styles only in dark mode?',
                    options: [
                        'Use the night: prefix',
                        'Use the dark: prefix',
                        'Use the black: prefix',
                        'Use the mode: prefix'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use the dark: prefix to apply styles only in dark mode. For example: dark:bg-gray-900 applies a dark background only when dark mode is active.'
                },
                {
                    id: 'tailwind-7-q3',
                    question: 'Where should you place the script to prevent flash of wrong theme?',
                    options: [
                        'At the end of body',
                        'In the head before any content',
                        'In an external JavaScript file',
                        'After the page loads'
                    ],
                    correctAnswer: 1,
                    explanation: 'Place the theme detection script in the <head> before any content to prevent the flash of wrong theme. This ensures the correct theme is applied before the page renders.'
                },
                {
                    id: 'tailwind-7-q4',
                    question: 'What is the recommended minimum contrast ratio for normal text (WCAG AA)?',
                    options: [
                        '3:1',
                        '4.5:1',
                        '7:1',
                        '10:1'
                    ],
                    correctAnswer: 1,
                    explanation: 'WCAG AA standard requires a minimum contrast ratio of 4.5:1 for normal text. This ensures text is readable for users with visual impairments.'
                },
                {
                    id: 'tailwind-7-q5',
                    question: 'Why should you avoid using pure black (#000000) in dark mode?',
                    options: [
                        'It uses too much battery',
                        'It can be harsh on eyes and reduce readability',
                        'It is not supported by Tailwind',
                        'It does not work on all devices'
                    ],
                    correctAnswer: 1,
                    explanation: 'Pure black can be harsh on eyes and actually reduce readability in dark mode. Using dark grays (like #1f2937) provides better contrast and is easier on the eyes.'
                },
                {
                    id: 'tailwind-7-q6',
                    question: 'How do you save user theme preference?',
                    options: [
                        'Use cookies',
                        'Use localStorage',
                        'Use sessionStorage',
                        'Use a database'
                    ],
                    correctAnswer: 1,
                    explanation: 'localStorage is the best choice for saving theme preference because it persists across browser sessions and is easily accessible with JavaScript.'
                },
                {
                    id: 'tailwind-7-q7',
                    question: 'What is the best way to handle images in dark mode?',
                    options: [
                        'Always invert colors',
                        'Use opacity, different images, or filters depending on the image',
                        'Remove all images in dark mode',
                        'Images do not need adjustment'
                    ],
                    correctAnswer: 1,
                    explanation: 'Different images need different approaches: reduce opacity for photos, use different images for logos, or apply filters. The best approach depends on the specific image and context.'
                },
                {
                    id: 'tailwind-7-q8',
                    question: 'How do shadows need to be adjusted for dark mode?',
                    options: [
                        'Shadows should be removed in dark mode',
                        'Shadows should be darker and more prominent',
                        'Shadows stay the same',
                        'Shadows should be lighter'
                    ],
                    correctAnswer: 1,
                    explanation: 'In dark mode, shadows need to be darker and more prominent to be visible against dark backgrounds. Use classes like dark:shadow-gray-900/50 for better visibility.'
                },
                {
                    id: 'tailwind-7-q9',
                    question: 'What does the media strategy for dark mode do?',
                    options: [
                        'Requires manual toggle',
                        'Automatically follows system preference',
                        'Disables dark mode',
                        'Only works on mobile devices'
                    ],
                    correctAnswer: 1,
                    explanation: 'The media strategy automatically follows the user\'s system preference using the prefers-color-scheme media query. No JavaScript is needed, but you have less control.'
                },
                {
                    id: 'tailwind-7-q10',
                    question: 'What is the purpose of using CSS variables for theming?',
                    options: [
                        'To make the code longer',
                        'To enable dynamic theme switching without recompiling',
                        'To improve performance',
                        'To reduce file size'
                    ],
                    correctAnswer: 1,
                    explanation: 'CSS variables allow dynamic theme switching at runtime without recompiling CSS. You can change variable values with JavaScript to switch between multiple themes easily.'
                }
            ]
        }
    ]
};
