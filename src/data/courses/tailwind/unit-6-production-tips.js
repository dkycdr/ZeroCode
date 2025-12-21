import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6ProductionTips = {
    id: 'tailwind-unit-6',
    title: 'Production Tips & Best Practices',
    description: 'Master Tailwind for production: optimization, custom configuration, plugins, and professional workflows',
    items: [
        {
            id: 'tailwind-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Understanding Tailwind Configuration',
            duration: '20 min read',
            content: `
# Understanding Tailwind Configuration

## What is tailwind.config.js?

The \`tailwind.config.js\` file is the control center for your Tailwind setup. It's where you customize Tailwind to match your project's needs.

### Real-World Analogy: Restaurant Menu

Think of Tailwind like a restaurant:

**Default Tailwind:**
- Like a restaurant with a standard menu
- Has common dishes (colors, spacing, fonts)
- Works for most people
- But maybe you want something special

**Custom Configuration:**
- Like customizing the menu
- Add your brand colors
- Add your spacing system
- Add your fonts
- Make it YOUR restaurant!

## Why Customize Tailwind?

### Reason 1: Brand Consistency

Your company has specific colors:

**Without config:**
\`\`\`html
<button class="bg-[#800000]">Button</button>
<div class="text-[#800000]">Text</div>
<div class="border-[#800000]">Border</div>
\`\`\`

**Problem:** Repeating the same color code everywhere!

**With config:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#800000'
      }
    }
  }
}
\`\`\`

**Now you can use:**
\`\`\`html
<button class="bg-brand">Button</button>
<div class="text-brand">Text</div>
<div class="border-brand">Border</div>
\`\`\`

**Benefits:**
- ✅ Consistent colors across project
- ✅ Easy to change (one place)
- ✅ Shorter class names
- ✅ Better maintainability

### Reason 2: Custom Design System

Your designer gave you specific spacing:

**Design system:**
- Small: 12px
- Medium: 20px
- Large: 32px
- XLarge: 48px

**Config:**
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      spacing: {
        'xs': '12px',
        'sm': '20px',
        'md': '32px',
        'lg': '48px'
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="p-xs">Small padding</div>
<div class="m-md">Medium margin</div>
<div class="gap-lg">Large gap</div>
\`\`\`

### Reason 3: Custom Fonts

Your brand uses specific fonts:

**Config:**
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<p class="font-sans">Body text</p>
<h1 class="font-heading">Heading</h1>
<code class="font-mono">Code</code>
\`\`\`

## Basic Configuration Structure

### The Complete Config File

\`\`\`javascript
// tailwind.config.js
module.exports = {
  // 1. Content paths (where to look for classes)
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html'
  ],
  
  // 2. Theme customization
  theme: {
    // Extend default theme (recommended)
    extend: {
      colors: {
        // Your custom colors
      },
      spacing: {
        // Your custom spacing
      },
      fontFamily: {
        // Your custom fonts
      }
    },
    
    // Or completely replace (not recommended)
    // colors: { ... }
  },
  
  // 3. Plugins
  plugins: [
    // Add plugins here
  ]
}
\`\`\`

### Understanding "extend" vs "replace"

**Extend (Recommended):**
\`\`\`javascript
theme: {
  extend: {
    colors: {
      'brand': '#800000'  // Adds to existing colors
    }
  }
}
\`\`\`

**Result:** You have ALL default colors PLUS your custom color.

**Replace (Dangerous):**
\`\`\`javascript
theme: {
  colors: {
    'brand': '#800000'  // Replaces ALL colors
  }
}
\`\`\`

**Result:** You ONLY have 'brand' color. Lost all defaults!

**Rule:** Always use \`extend\` unless you know what you're doing.

## Common Customizations

### 1. Custom Colors

\`\`\`javascript
theme: {
  extend: {
    colors: {
      // Single color
      'brand': '#800000',
      
      // Color with shades
      'primary': {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Default
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="bg-brand">Brand color</div>
<div class="bg-primary-500">Primary</div>
<div class="bg-primary-700">Darker primary</div>
\`\`\`

### 2. Custom Spacing

\`\`\`javascript
theme: {
  extend: {
    spacing: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '128': '32rem'
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="w-72">Width 18rem</div>
<div class="h-96">Height 24rem</div>
<div class="p-128">Padding 32rem</div>
\`\`\`

### 3. Custom Breakpoints

\`\`\`javascript
theme: {
  extend: {
    screens: {
      'xs': '475px',
      '3xl': '1600px'
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="xs:text-sm 3xl:text-2xl">
  Responsive text
</div>
\`\`\`

### 4. Custom Font Sizes

\`\`\`javascript
theme: {
  extend: {
    fontSize: {
      'xxs': '0.625rem',
      'huge': '10rem'
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<p class="text-xxs">Tiny text</p>
<h1 class="text-huge">Huge heading</h1>
\`\`\`

### 5. Custom Border Radius

\`\`\`javascript
theme: {
  extend: {
    borderRadius: {
      '4xl': '2rem',
      '5xl': '3rem'
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="rounded-4xl">Very rounded</div>
<div class="rounded-5xl">Super rounded</div>
\`\`\`

## Production Optimization

### 1. Content Configuration

Tell Tailwind where to look for classes:

\`\`\`javascript
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ]
}
\`\`\`

**Why it matters:**
- Tailwind scans these files
- Only includes classes you actually use
- Smaller CSS file in production
- Faster page loads

**Example:**

**Without proper content config:**
- CSS file: 3.5 MB (all Tailwind classes)
- Page load: Slow 🐌

**With proper content config:**
- CSS file: 10 KB (only used classes)
- Page load: Fast ⚡

### 2. Purge Unused Styles

Tailwind automatically removes unused styles in production:

\`\`\`javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  // Purging happens automatically!
}
\`\`\`

**What gets purged:**

**Your HTML:**
\`\`\`html
<div class="bg-blue-500 text-white">Hello</div>
\`\`\`

**Tailwind keeps:**
- \`bg-blue-500\`
- \`text-white\`

**Tailwind removes:**
- \`bg-red-500\` (not used)
- \`text-black\` (not used)
- All other unused classes

### 3. Safelist Important Classes

Sometimes you generate classes dynamically:

\`\`\`javascript
// This won't work (Tailwind can't see it)
const color = 'blue';
<div className={\`bg-\${color}-500\`}>Text</div>
\`\`\`

**Solution: Safelist**

\`\`\`javascript
module.exports = {
  safelist: [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    // Or use patterns
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/
    }
  ]
}
\`\`\`

**Now these classes won't be purged!**

## Understanding Plugins

Plugins add new utilities to Tailwind.

### Official Plugins

**1. Forms Plugin**

Makes form elements look better:

\`\`\`bash
npm install @tailwindcss/forms
\`\`\`

\`\`\`javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms')
  ]
}
\`\`\`

**Before:**
\`\`\`html
<input type="text" class="border rounded p-2">
<!-- Looks basic
\`\`\`

**After:**
\`\`\`html
<input type="text">
<!-- Automatically styled beautifully! -->
\`\`\`

**2. Typography Plugin**

Styles prose content (blog posts, articles):

\`\`\`bash
npm install @tailwindcss/typography
\`\`\`

\`\`\`javascript
plugins: [
  require('@tailwindcss/typography')
]
\`\`\`

**Usage:**
\`\`\`html
<article class="prose lg:prose-xl">
  <h1>My Blog Post</h1>
  <p>Content here...</p>
  <!-- All typography automatically styled! -->
</article>
\`\`\`

**3. Aspect Ratio Plugin**

Maintains aspect ratios:

\`\`\`bash
npm install @tailwindcss/aspect-ratio
\`\`\`

\`\`\`javascript
plugins: [
  require('@tailwindcss/aspect-ratio')
]
\`\`\`

**Usage:**
\`\`\`html
<div class="aspect-w-16 aspect-h-9">
  <iframe src="video.mp4"></iframe>
  <!-- Maintains 16:9 ratio -->
</div>
\`\`\`

### Custom Plugin Example

Create your own utilities:

\`\`\`javascript
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0,0,0,0.2)'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}
\`\`\`

**Usage:**
\`\`\`html
<h1 class="text-shadow">Heading with shadow</h1>
<h1 class="text-shadow-lg">Heading with large shadow</h1>
\`\`\`

## Best Practices

### ✅ DO:

1. **Use extend, not replace**
\`\`\`javascript
theme: {
  extend: { ... }  // ✅ Keeps defaults
}
\`\`\`

2. **Name colors semantically**
\`\`\`javascript
colors: {
  'primary': '#800000',    // ✅ Semantic
  'maroon': '#800000'      // ❌ Too specific
}
\`\`\`

3. **Configure content paths correctly**
\`\`\`javascript
content: ['./src/**/*.{html,js}']  // ✅ Correct
\`\`\`

4. **Use plugins for common needs**
\`\`\`javascript
plugins: [
  require('@tailwindcss/forms')  // ✅ Use official plugins
]
\`\`\`

### ❌ DON'T:

1. **Don't replace entire theme**
\`\`\`javascript
theme: {
  colors: { ... }  // ❌ Loses all defaults
}
\`\`\`

2. **Don't use arbitrary values everywhere**
\`\`\`html
<div class="bg-[#800000]">  <!-- ❌ Add to config instead -->
\`\`\`

3. **Don't forget content paths**
\`\`\`javascript
content: []  // ❌ Nothing will work!
\`\`\`

## Key Takeaways

- ✅ tailwind.config.js customizes Tailwind
- ✅ Use \`extend\` to keep defaults
- ✅ Add brand colors and spacing
- ✅ Configure content paths for purging
- ✅ Use plugins for common features
- ✅ Safelist dynamic classes
- ✅ Name things semantically
- ✅ Test production build

Now you can configure Tailwind like a pro! ⚙️
            `
        },
        {
            id: 'tailwind-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building a Production-Ready Component System',
            duration: '40 min',
            content: `
# Building a Production-Ready Component System

## What is a Component System?

A **component system** is a collection of reusable UI components that follow consistent design patterns. Think of it like LEGO blocks - each piece is designed to work together.

### Real-World Analogy: Building with LEGO

**Without a system:**
- Every time you need a button, you style it from scratch
- Buttons look different across your site
- Hard to maintain
- Inconsistent user experience

**With a component system:**
- Define button styles once
- Reuse everywhere
- Consistent look and feel
- Easy to update (change once, updates everywhere)

## Why Build a Component System?

### Reason 1: Consistency

**Problem:** Different buttons across your site:

\`\`\`html
<!-- Page 1 -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click</button>

<!-- Page 2 -->
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg">Click</button>

<!-- Page 3 -->
<button class="bg-blue-400 text-white px-5 py-2 rounded-md">Click</button>
\`\`\`

**Result:** Inconsistent user experience! 😕

**Solution:** Define button component once:

\`\`\`html
<!-- Everywhere -->
<button class="btn-primary">Click</button>
\`\`\`

**Result:** Consistent everywhere! ✅

### Reason 2: Maintainability

**Scenario:** Your designer says "make all buttons bigger"

**Without system:**
- Find every button in every file
- Update each one manually
- Miss some buttons
- Inconsistent results

**With system:**
- Update button component definition
- All buttons update automatically
- No missed buttons
- Consistent results

### Reason 3: Development Speed

**Without system:**
- Copy-paste classes every time
- Remember all the classes
- Slow development

**With system:**
- Use predefined components
- Fast development
- Less thinking required

## Understanding @apply Directive

The \`@apply\` directive lets you extract repeated utility patterns into custom CSS classes.

### Basic Syntax

\`\`\`css
.btn-primary {
  @apply bg-blue-500 text-white px-6 py-3 rounded-lg;
  @apply hover:bg-blue-600 transition-colors;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
}
\`\`\`

**What this does:**
- Creates a new class called \`.btn-primary\`
- Applies all those Tailwind utilities
- Can be used like any CSS class

**Usage:**
\`\`\`html
<button class="btn-primary">Click Me</button>
\`\`\`

**Result:** Button has all those styles!

### Why Use @apply?

**Before @apply:**
\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click Me
</button>
\`\`\`

**Problem:** 
- Very long class list
- Hard to read
- Hard to maintain
- Repeated everywhere

**After @apply:**
\`\`\`css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold;
  @apply px-6 py-3 rounded-lg shadow-md hover:shadow-lg;
  @apply transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
}
\`\`\`

\`\`\`html
<button class="btn-primary">Click Me</button>
\`\`\`

**Benefits:**
- ✅ Clean HTML
- ✅ Reusable
- ✅ Easy to maintain
- ✅ Consistent

## Building Button Components

### Step 1: Define Base Button

All buttons share common styles:

\`\`\`css
.btn {
  @apply font-semibold px-6 py-3 rounded-lg;
  @apply transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}
\`\`\`

**Explanation:**
- \`font-semibold\`: Bold text
- \`px-6 py-3\`: Padding (horizontal 1.5rem, vertical 0.75rem)
- \`rounded-lg\`: Rounded corners
- \`transition-all\`: Smooth transitions
- \`focus:outline-none\`: Remove default outline
- \`focus:ring-2\`: Add custom focus ring
- \`disabled:opacity-50\`: Faded when disabled
- \`disabled:cursor-not-allowed\`: Show not-allowed cursor

### Step 2: Define Button Variants

Different button types for different purposes:

\`\`\`css
/* Primary button - Main actions */
.btn-primary {
  @apply btn;
  @apply bg-blue-600 hover:bg-blue-700 text-white;
  @apply focus:ring-blue-500;
}

/* Secondary button - Less important actions */
.btn-secondary {
  @apply btn;
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
  @apply focus:ring-gray-500;
}

/* Danger button - Destructive actions */
.btn-danger {
  @apply btn;
  @apply bg-red-600 hover:bg-red-700 text-white;
  @apply focus:ring-red-500;
}

/* Success button - Positive actions */
.btn-success {
  @apply btn;
  @apply bg-green-600 hover:bg-green-700 text-white;
  @apply focus:ring-green-500;
}

/* Outline button - Subtle actions */
.btn-outline {
  @apply btn;
  @apply border-2 border-blue-600 text-blue-600;
  @apply hover:bg-blue-600 hover:text-white;
  @apply focus:ring-blue-500;
}

/* Ghost button - Very subtle actions */
.btn-ghost {
  @apply btn;
  @apply text-blue-600 hover:bg-blue-50;
  @apply focus:ring-blue-500;
}
\`\`\`

**Usage:**
\`\`\`html
<button class="btn-primary">Save</button>
<button class="btn-secondary">Cancel</button>
<button class="btn-danger">Delete</button>
<button class="btn-success">Confirm</button>
<button class="btn-outline">Learn More</button>
<button class="btn-ghost">Skip</button>
\`\`\`

### Step 3: Define Button Sizes

Different sizes for different contexts:

\`\`\`css
/* Small button - Compact spaces */
.btn-sm {
  @apply px-4 py-2 text-sm;
}

/* Medium button - Default */
.btn-md {
  @apply px-6 py-3 text-base;
}

/* Large button - Prominent actions */
.btn-lg {
  @apply px-8 py-4 text-lg;
}

/* Extra large button - Hero sections */
.btn-xl {
  @apply px-10 py-5 text-xl;
}
\`\`\`

**Usage:**
\`\`\`html
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary btn-md">Medium</button>
<button class="btn-primary btn-lg">Large</button>
<button class="btn-primary btn-xl">Extra Large</button>
\`\`\`

## Building Card Components

### Step 1: Base Card

\`\`\`css
.card {
  @apply bg-white rounded-xl shadow-md;
  @apply overflow-hidden;
  @apply transition-all duration-300;
}

.card:hover {
  @apply shadow-xl transform -translate-y-1;
}
\`\`\`

**Explanation:**
- \`bg-white\`: White background
- \`rounded-xl\`: Extra rounded corners
- \`shadow-md\`: Medium shadow
- \`overflow-hidden\`: Clip content to rounded corners
- \`transition-all\`: Smooth transitions
- \`hover:shadow-xl\`: Larger shadow on hover
- \`hover:-translate-y-1\`: Lift up on hover

### Step 2: Card Sections

\`\`\`css
.card-header {
  @apply p-6 border-b border-gray-200;
}

.card-body {
  @apply p-6;
}

.card-footer {
  @apply p-6 bg-gray-50 border-t border-gray-200;
}

.card-title {
  @apply text-2xl font-bold text-gray-900 mb-2;
}

.card-subtitle {
  @apply text-sm text-gray-600;
}
\`\`\`

**Usage:**
\`\`\`html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    <p>Card content goes here...</p>
  </div>
  <div class="card-footer">
    <button class="btn-primary">Action</button>
  </div>
</div>
\`\`\`

## Building Form Components

### Input Fields

\`\`\`css
.input {
  @apply w-full px-4 py-3 border-2 border-gray-300 rounded-lg;
  @apply focus:border-blue-500 focus:outline-none;
  @apply transition-colors duration-200;
  @apply placeholder-gray-400;
}

.input-error {
  @apply input border-red-500;
  @apply focus:border-red-500;
}

.input-success {
  @apply input border-green-500;
  @apply focus:border-green-500;
}
\`\`\`

### Labels and Error Messages

\`\`\`css
.label {
  @apply block text-sm font-semibold text-gray-700 mb-2;
}

.error-message {
  @apply text-sm text-red-600 mt-1;
}

.help-text {
  @apply text-sm text-gray-500 mt-1;
}
\`\`\`

**Usage:**
\`\`\`html
<div class="mb-4">
  <label class="label">Email Address</label>
  <input type="email" class="input" placeholder="you@example.com">
  <p class="help-text">We'll never share your email.</p>
</div>

<div class="mb-4">
  <label class="label">Password</label>
  <input type="password" class="input-error" placeholder="••••••••">
  <p class="error-message">Password must be at least 8 characters.</p>
</div>
\`\`\`

## Building Badge Components

\`\`\`css
.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full;
  @apply text-xs font-semibold;
}

.badge-primary {
  @apply badge bg-blue-100 text-blue-800;
}

.badge-success {
  @apply badge bg-green-100 text-green-800;
}

.badge-warning {
  @apply badge bg-yellow-100 text-yellow-800;
}

.badge-danger {
  @apply badge bg-red-100 text-red-800;
}

.badge-info {
  @apply badge bg-gray-100 text-gray-800;
}
\`\`\`

**Usage:**
\`\`\`html
<span class="badge-primary">New</span>
<span class="badge-success">Active</span>
<span class="badge-warning">Pending</span>
<span class="badge-danger">Urgent</span>
<span class="badge-info">Info</span>
\`\`\`

## Building Alert Components

\`\`\`css
.alert {
  @apply p-4 rounded-lg border-l-4;
  @apply flex items-start gap-3;
}

.alert-success {
  @apply alert bg-green-50 border-green-500;
}

.alert-error {
  @apply alert bg-red-50 border-red-500;
}

.alert-warning {
  @apply alert bg-yellow-50 border-yellow-500;
}

.alert-info {
  @apply alert bg-blue-50 border-blue-500;
}

.alert-title {
  @apply font-semibold text-sm;
}

.alert-message {
  @apply text-sm;
}
\`\`\`

**Usage:**
\`\`\`html
<div class="alert-success">
  <div>
    <p class="alert-title text-green-800">Success!</p>
    <p class="alert-message text-green-700">Your changes have been saved.</p>
  </div>
</div>
\`\`\`

## Organizing Your Component System

### File Structure

\`\`\`
src/
├── styles/
│   ├── tailwind.css          # Main Tailwind file
│   ├── components/
│   │   ├── buttons.css       # Button components
│   │   ├── cards.css         # Card components
│   │   ├── forms.css         # Form components
│   │   ├── badges.css        # Badge components
│   │   └── alerts.css        # Alert components
│   └── utilities/
│       └── custom.css        # Custom utilities
\`\`\`

### Main Tailwind File

\`\`\`css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import component files */
@import './components/buttons.css';
@import './components/cards.css';
@import './components/forms.css';
@import './components/badges.css';
@import './components/alerts.css';
\`\`\`

## Best Practices

### ✅ DO:

1. **Use semantic names**
\`\`\`css
.btn-primary { ... }  ✅ Clear purpose
.btn-blue { ... }     ❌ Too specific
\`\`\`

2. **Keep components focused**
\`\`\`css
.btn { ... }          ✅ One responsibility
.btn-with-icon-and-shadow { ... }  ❌ Too specific
\`\`\`

3. **Use composition**
\`\`\`html
<button class="btn-primary btn-lg">  ✅ Combine classes
\`\`\`

4. **Document your components**
\`\`\`css
/* Primary button - Use for main actions */
.btn-primary { ... }
\`\`\`

### ❌ DON'T:

1. **Don't overuse @apply**
\`\`\`css
/* Bad - Just use Tailwind classes directly */
.my-div {
  @apply p-4 m-2 bg-white;
}
\`\`\`

2. **Don't create too many variants**
\`\`\`css
.btn-primary-large-with-shadow { ... }  ❌ Too specific
\`\`\`

3. **Don't duplicate Tailwind utilities**
\`\`\`css
.padding-4 {
  @apply p-4;  ❌ Just use p-4 directly
}
\`\`\`

## Your Mission

Build a complete component system:
1. Create button components (primary, secondary, danger)
2. Create card components with sections
3. Create form input components
4. Create badge components
5. Test all components together

Now you can build production-ready components! 🎨
            `,
            tasks: [
                { id: 1, description: 'Create .btn-primary class using @apply with bg, text, padding, and rounded', completed: false, regex: /@apply.*bg-.*text-.*px-.*py-.*rounded/ },
                { id: 2, description: 'Add hover state to .btn-primary using @apply hover:', completed: false, regex: /@apply.*hover:/ },
                { id: 3, description: 'Create .btn-secondary class with different colors', completed: false, regex: /\.btn-secondary[\s\S]*@apply/ },
                { id: 4, description: 'Create .card class with bg-white, rounded, and shadow', completed: false, regex: /\.card[\s\S]*@apply.*bg-white.*rounded.*shadow/ },
                { id: 5, description: 'Create .input class for form inputs with border and focus states', completed: false, regex: /\.input[\s\S]*@apply.*border.*focus:/ },
                { id: 6, description: 'Create .badge class with inline-flex, px, py, and rounded-full', completed: false, regex: /\.badge[\s\S]*@apply.*inline-flex.*px-.*py-.*rounded-full/ },
                { id: 7, description: 'Test all components by using them in HTML', completed: false, regex: /<button.*btn-primary|<div.*card|<input.*input|<span.*badge/ }
            ],
            files: [
                { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Component System Demo</h1>
        
        <!-- Buttons Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Buttons</h2>
            <div class="flex flex-wrap gap-4">
                <!-- Add your button components here -->
                <button class="btn-primary">Primary Button</button>
                <button class="btn-secondary">Secondary Button</button>
                <button class="btn-danger">Danger Button</button>
            </div>
        </section>
        
        <!-- Cards Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Cards</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Add your card components here -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Card Title</h3>
                    </div>
                    <div class="card-body">
                        <p>Card content goes here...</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Forms Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Form Inputs</h2>
            <div class="max-w-md">
                <!-- Add your form components here -->
                <div class="mb-4">
                    <label class="label">Email</label>
                    <input type="email" class="input" placeholder="you@example.com">
                </div>
            </div>
        </section>
        
        <!-- Badges Section -->
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Badges</h2>
            <div class="flex flex-wrap gap-2">
                <!-- Add your badge components here -->
                <span class="badge-primary">New</span>
                <span class="badge-success">Active</span>
            </div>
        </section>
        
        <!-- Console Output -->
        <div class="console">
            <h3>Console Output:</h3>
            <div id="console"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>` },
                { name: 'style.css', language: 'css', content: `/*
  YOUR TASK: Build a Component System with @apply
  
  REQUIREMENTS:
    1. Create .btn-primary class:
       - Use @apply with: bg-blue-600, hover:bg-blue-700, text-white
       - Add: px-6, py-3, rounded-lg, font-semibold
       - Add: transition-colors, duration-200
       - Add: focus:outline-none, focus:ring-2, focus:ring-blue-500
    
    2. Create .btn-secondary class:
       - Similar to primary but with gray colors
       - bg-gray-200, hover:bg-gray-300, text-gray-800
    
    3. Create .btn-danger class:
       - Similar to primary but with red colors
       - bg-red-600, hover:bg-red-700, text-white
    
    4. Create .card class:
       - bg-white, rounded-xl, shadow-md
       - overflow-hidden
       - Add hover effect: hover:shadow-xl
    
    5. Create .card-header, .card-body, .card-footer classes
    
    6. Create .card-title class:
       - text-2xl, font-bold, text-gray-900, mb-2
    
    7. Create .input class:
       - w-full, px-4, py-3, border-2, border-gray-300, rounded-lg
       - focus:border-blue-500, focus:outline-none
       - transition-colors, duration-200
    
    8. Create .label class:
       - block, text-sm, font-semibold, text-gray-700, mb-2
    
    9. Create .badge class:
       - inline-flex, items-center, px-3, py-1, rounded-full
       - text-xs, font-semibold
    
    10. Create .badge-primary, .badge-success variants
  
  TIPS:
    - Use @apply to combine Tailwind utilities
    - Group related utilities together
    - Add comments to explain each component
    - Test each component in the HTML
*/

/* Base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Console styles (already provided) */
.console {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 15px;
    margin-top: 20px;
}

.console h3 {
    color: #4ec9b0;
    font-size: 14px;
    margin-bottom: 10px;
}

#console {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #d4d4d4;
    max-height: 200px;
    overflow-y: auto;
}

/* START YOUR COMPONENT STYLES HERE */

/* Button Components */


/* Card Components */


/* Form Components */


/* Badge Components */


` },
                { name: 'script.js', language: 'javascript', content: `// Console helper function
function log(message, type = 'info') {
    const consoleDiv = document.getElementById('console');
    const line = document.createElement('div');
    line.style.marginBottom = '5px';
    line.style.color = type === 'success' ? '#4ec9b0' : type === 'error' ? '#f48771' : '#9cdcfe';
    line.textContent = '> ' + message;
    consoleDiv.appendChild(line);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Log component usage
window.onload = function() {
    log('Component system loaded!', 'success');
    
    // Count components
    const buttons = document.querySelectorAll('[class*="btn-"]');
    const cards = document.querySelectorAll('.card');
    const inputs = document.querySelectorAll('.input');
    const badges = document.querySelectorAll('[class*="badge-"]');
    
    log(\`Found \${buttons.length} button components\`, 'info');
    log(\`Found \${cards.length} card components\`, 'info');
    log(\`Found \${inputs.length} input components\`, 'info');
    log(\`Found \${badges.length} badge components\`, 'info');
    
    // Add click handlers to buttons
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            log(\`Button \${index + 1} clicked: \${this.textContent}\`, 'success');
        });
    });
    
    // Add focus handlers to inputs
    inputs.forEach((input, index) => {
        input.addEventListener('focus', function() {
            log(\`Input \${index + 1} focused\`, 'info');
        });
    });
    
    log('All event listeners attached!', 'success');
};
` }
            ]
        },
        {
            id: 'tailwind-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Production Tips Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does the @apply directive do?',
                    options: [
                        'Applies CSS to all elements',
                        'Extracts Tailwind utilities into custom CSS classes',
                        'Applies JavaScript to elements',
                        'Applies styles only in production'
                    ],
                    correctIndex: 1,
                    explanation: '@apply lets you extract repeated Tailwind utility patterns into custom CSS classes, making your HTML cleaner and more maintainable.'
                },
                {
                    id: 'q2',
                    question: 'What is the purpose of the "content" configuration in tailwind.config.js?',
                    options: [
                        'To add content to your website',
                        'To tell Tailwind where to look for class names to include in the final CSS',
                        'To configure the content management system',
                        'To add custom content types'
                    ],
                    correctIndex: 1,
                    explanation: 'The content configuration tells Tailwind which files to scan for class names. This enables tree-shaking to remove unused styles in production.'
                },
                {
                    id: 'q3',
                    question: 'When should you use @apply?',
                    options: [
                        'For every single element',
                        'Only for repeated component patterns',
                        'Never, always use inline utilities',
                        'Only in production'
                    ],
                    correctIndex: 1,
                    explanation: 'Use @apply for repeated component patterns that appear multiple times. For one-off styles, use Tailwind utilities directly in HTML.'
                },
                {
                    id: 'q4',
                    question: 'What is the difference between "extend" and "replace" in theme configuration?',
                    options: [
                        'No difference',
                        'Extend adds to defaults, replace removes all defaults',
                        'Replace is faster',
                        'Extend only works in development'
                    ],
                    correctIndex: 1,
                    explanation: 'Using "extend" adds your custom values to Tailwind\'s defaults. Using "replace" (without extend) removes all default values and only uses yours.'
                },
                {
                    id: 'q5',
                    question: 'Why is it important to configure content paths correctly?',
                    options: [
                        'For better SEO',
                        'To enable PurgeCSS to remove unused styles and reduce file size',
                        'To make development faster',
                        'To enable dark mode'
                    ],
                    correctIndex: 1,
                    explanation: 'Correct content paths allow Tailwind to scan your files and remove unused CSS in production, dramatically reducing file size from ~3MB to ~10KB.'
                }
            ]
        }
    ]
};
