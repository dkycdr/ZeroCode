import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9ResponsivePatterns = {
    id: 'tailwind-unit-9',
    title: 'Responsive Design Patterns - Mobile-First Approach',
    description: 'Master responsive design patterns and mobile-first development with Tailwind CSS',
    items: [
        {
            id: 'tailwind-9-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Responsive Design Patterns - The Complete Guide',
            duration: '30 min read',
            content: `
# Responsive Design Patterns - The Complete Guide

## What is Responsive Design?

**Responsive Design** means your website adapts to different screen sizes and devices automatically.

### Real-World Analogy: Water in a Container

Think of responsive design like water:

**Fixed Design (Old Way):**
\`\`\`
Pour water into a cup
Water stays cup-shaped
Pour into a bowl? Overflows!
Doesn't adapt to container
\`\`\`

**Responsive Design (Modern Way):**
\`\`\`
Pour water into any container
Water adapts to shape
Cup, bowl, bottle - all work!
Perfectly fits every container
\`\`\`

### Why Responsive Design Matters

**Statistics:**
- 📱 60% of web traffic is mobile
- 📊 85% of users expect mobile sites to work well
- 💰 53% of users abandon sites that take > 3 seconds
- ✅ Google prioritizes mobile-friendly sites

**Benefits:**
- ✅ One codebase for all devices
- ✅ Better user experience
- ✅ Improved SEO
- ✅ Easier maintenance
- ✅ Future-proof design
- ✅ Cost-effective

## Tailwind Breakpoints

### Default Breakpoints

**Mobile-first approach:**
\`\`\`javascript
// tailwind.config.js default breakpoints
{
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (desktops)
  xl: '1280px',  // Extra large devices
  '2xl': '1536px' // 2X Extra large devices
}
\`\`\`

**How it works:**
- Base styles = mobile (< 640px)
- sm: = 640px and up
- md: = 768px and up
- lg: = 1024px and up
- xl: = 1280px and up
- 2xl: = 1536px and up

### Mobile-First Philosophy

**Start small, scale up:**
\`\`\`html
<!-- Mobile first: base styles for mobile -->
<div class="text-sm md:text-base lg:text-lg">
  Text grows on larger screens
</div>

<!-- Base = mobile (text-sm)
     Tablet = medium (text-base)
     Desktop = large (text-lg) -->
\`\`\`

**Why mobile-first?**
- Easier to scale up than down
- Forces focus on essential content
- Better performance on mobile
- Progressive enhancement

## Responsive Layout Patterns

### Pattern 1: Column Drop

**Columns stack on mobile, side-by-side on desktop:**
\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
  <div class="md:w-1/3 bg-blue-500 p-4">Column 1</div>
  <div class="md:w-1/3 bg-green-500 p-4">Column 2</div>
  <div class="md:w-1/3 bg-red-500 p-4">Column 3</div>
</div>
\`\`\`

**Behavior:**
- Mobile: Stacked vertically
- Tablet+: Three columns side-by-side

### Pattern 2: Mostly Fluid

**Content expands but has max width:**
\`\`\`html
<div class="container mx-auto px-4 max-w-7xl">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-blue-500 p-4">Item 1</div>
    <div class="bg-green-500 p-4">Item 2</div>
    <div class="bg-red-500 p-4">Item 3</div>
    <div class="bg-yellow-500 p-4">Item 4</div>
  </div>
</div>
\`\`\`

**Behavior:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns
- Max width prevents too-wide content

### Pattern 3: Layout Shifter

**Major layout changes at breakpoints:**
\`\`\`html
<div class="flex flex-col lg:flex-row">
  <!-- Sidebar -->
  <aside class="lg:w-64 lg:order-1 bg-gray-200 p-4">
    Sidebar
  </aside>
  
  <!-- Main content -->
  <main class="flex-1 lg:order-2 p-4">
    Main Content
  </main>
  
  <!-- Right sidebar (hidden on mobile) -->
  <aside class="hidden lg:block lg:w-64 lg:order-3 bg-gray-200 p-4">
    Right Sidebar
  </aside>
</div>
\`\`\`

**Behavior:**
- Mobile: Sidebar on top, main below
- Desktop: Sidebar left, main center, sidebar right

### Pattern 4: Off Canvas

**Navigation slides in from side:**
\`\`\`html
<!-- Mobile menu button -->
<button class="lg:hidden" onclick="toggleMenu()">
  ☰ Menu
</button>

<!-- Navigation -->
<nav class="fixed inset-y-0 left-0 w-64 bg-gray-900 transform -translate-x-full transition-transform lg:translate-x-0 lg:static" id="menu">
  <ul class="p-4 text-white">
    <li class="py-2">Home</li>
    <li class="py-2">About</li>
    <li class="py-2">Contact</li>
  </ul>
</nav>
\`\`\`

**Behavior:**
- Mobile: Hidden, slides in when toggled
- Desktop: Always visible

## Responsive Typography

### Scaling Text

**Progressive text sizes:**
\`\`\`html
<!-- Heading scales up -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Responsive Heading
</h1>

<!-- Body text scales -->
<p class="text-sm sm:text-base md:text-lg">
  Responsive paragraph text
</p>

<!-- Line height adjusts -->
<p class="leading-relaxed md:leading-loose">
  Text with responsive line height
</p>
\`\`\`

### Responsive Font Weights

\`\`\`html
<h2 class="font-medium md:font-bold">
  Medium on mobile, bold on desktop
</h2>
\`\`\`

## Responsive Spacing

### Padding and Margin

**Scale spacing with screen size:**
\`\`\`html
<!-- Padding increases on larger screens -->
<div class="p-4 md:p-6 lg:p-8 xl:p-12">
  Content with responsive padding
</div>

<!-- Margin scales -->
<div class="my-4 md:my-6 lg:my-8">
  Content with responsive margin
</div>

<!-- Gap in flex/grid -->
<div class="flex gap-2 md:gap-4 lg:gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
\`\`\`

### Container Padding

\`\`\`html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  Content with responsive container padding
</div>
\`\`\`

## Responsive Grid Layouts

### Auto-fit Grid

**Automatically adjusts columns:**
\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="bg-blue-500 p-4">Card 1</div>
  <div class="bg-blue-500 p-4">Card 2</div>
  <div class="bg-blue-500 p-4">Card 3</div>
  <div class="bg-blue-500 p-4">Card 4</div>
</div>
\`\`\`

**Behavior:**
- Mobile: 1 column
- Small: 2 columns
- Large: 3 columns
- XL: 4 columns

### Responsive Card Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-lg p-6">
    <img src="image.jpg" class="w-full h-48 object-cover rounded mb-4" />
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600">Card description</p>
  </div>
  <!-- More cards -->
</div>
\`\`\`

## Responsive Navigation

### Mobile Menu Pattern

\`\`\`html
<nav class="bg-white shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="text-xl font-bold">Logo</div>
      
      <!-- Desktop menu -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:text-blue-500">Home</a></li>
        <li><a href="#" class="hover:text-blue-500">About</a></li>
        <li><a href="#" class="hover:text-blue-500">Services</a></li>
        <li><a href="#" class="hover:text-blue-500">Contact</a></li>
      </ul>
      
      <!-- Mobile menu button -->
      <button class="md:hidden" onclick="toggleMobileMenu()">
        ☰
      </button>
    </div>
    
    <!-- Mobile menu -->
    <ul class="md:hidden hidden" id="mobile-menu">
      <li class="py-2"><a href="#">Home</a></li>
      <li class="py-2"><a href="#">About</a></li>
      <li class="py-2"><a href="#">Services</a></li>
      <li class="py-2"><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
\`\`\`

### Hamburger Menu

\`\`\`html
<!-- Hamburger icon -->
<button class="md:hidden flex flex-col gap-1">
  <span class="block w-6 h-0.5 bg-gray-900"></span>
  <span class="block w-6 h-0.5 bg-gray-900"></span>
  <span class="block w-6 h-0.5 bg-gray-900"></span>
</button>
\`\`\`

## Responsive Images

### Responsive Image Sizing

\`\`\`html
<!-- Full width on mobile, constrained on desktop -->
<img 
  src="image.jpg" 
  class="w-full md:w-1/2 lg:w-1/3"
  alt="Responsive image"
/>

<!-- Different heights -->
<img 
  src="image.jpg" 
  class="h-48 md:h-64 lg:h-96 w-full object-cover"
  alt="Responsive height"
/>
\`\`\`

### Responsive Image Grid

\`\`\`html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <img src="1.jpg" class="w-full h-full object-cover rounded" />
  <img src="2.jpg" class="w-full h-full object-cover rounded" />
  <img src="3.jpg" class="w-full h-full object-cover rounded" />
  <img src="4.jpg" class="w-full h-full object-cover rounded" />
</div>
\`\`\`

## Responsive Forms

### Stacked to Inline

\`\`\`html
<form class="space-y-4">
  <!-- Stacked on mobile, inline on desktop -->
  <div class="flex flex-col md:flex-row gap-4">
    <input 
      type="text" 
      placeholder="First Name"
      class="flex-1 px-4 py-2 border rounded"
    />
    <input 
      type="text" 
      placeholder="Last Name"
      class="flex-1 px-4 py-2 border rounded"
    />
  </div>
  
  <input 
    type="email" 
    placeholder="Email"
    class="w-full px-4 py-2 border rounded"
  />
  
  <button class="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded">
    Submit
  </button>
</form>
\`\`\`

## Responsive Utilities

### Show/Hide at Breakpoints

\`\`\`html
<!-- Show only on mobile -->
<div class="block md:hidden">
  Mobile only content
</div>

<!-- Hide on mobile -->
<div class="hidden md:block">
  Desktop only content
</div>

<!-- Show on tablet and up -->
<div class="hidden md:block">
  Tablet and desktop
</div>

<!-- Show only on desktop -->
<div class="hidden lg:block">
  Desktop only
</div>
\`\`\`

### Responsive Flexbox

\`\`\`html
<!-- Column on mobile, row on desktop -->
<div class="flex flex-col md:flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Reverse order -->
<div class="flex flex-col-reverse md:flex-row">
  <div>Shows second on mobile, first on desktop</div>
  <div>Shows first on mobile, second on desktop</div>
</div>

<!-- Justify content -->
<div class="flex justify-start md:justify-center lg:justify-between">
  <div>Item</div>
</div>
\`\`\`

## Real-World Examples

### Example 1: Hero Section

\`\`\`html
<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <div class="container mx-auto px-4 py-12 md:py-20 lg:py-32">
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <!-- Text content -->
      <div class="flex-1 text-center lg:text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-6">
          Build amazing things with responsive design
        </p>
        <button class="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-gray-100">
          Get Started
        </button>
      </div>
      
      <!-- Image -->
      <div class="flex-1">
        <img 
          src="hero.jpg" 
          class="w-full max-w-md mx-auto rounded-lg shadow-2xl"
          alt="Hero"
        />
      </div>
    </div>
  </div>
</section>
\`\`\`

### Example 2: Feature Grid

\`\`\`html
<section class="py-12 md:py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
      Our Features
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-4xl mb-4">🚀</div>
        <h3 class="text-xl font-bold mb-2">Fast</h3>
        <p class="text-gray-600">Lightning fast performance</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-4xl mb-4">🎨</div>
        <h3 class="text-xl font-bold mb-2">Beautiful</h3>
        <p class="text-gray-600">Stunning designs</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="text-4xl mb-4">🔒</div>
        <h3 class="text-xl font-bold mb-2">Secure</h3>
        <p class="text-gray-600">Bank-level security</p>
      </div>
    </div>
  </div>
</section>
\`\`\`

### Example 3: Dashboard Layout

\`\`\`html
<div class="flex flex-col lg:flex-row min-h-screen">
  <!-- Sidebar -->
  <aside class="w-full lg:w-64 bg-gray-900 text-white p-4">
    <h2 class="text-xl font-bold mb-4">Dashboard</h2>
    <nav>
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-800">Home</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-800">Analytics</a>
      <a href="#" class="block py-2 px-4 rounded hover:bg-gray-800">Settings</a>
    </nav>
  </aside>
  
  <!-- Main content -->
  <main class="flex-1 p-4 md:p-6 lg:p-8">
    <h1 class="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>
    
    <!-- Stats grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white p-6 rounded-lg shadow">
        <div class="text-gray-500 text-sm">Total Users</div>
        <div class="text-3xl font-bold">1,234</div>
      </div>
      <!-- More stats -->
    </div>
    
    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-bold mb-4">Chart 1</h3>
        <!-- Chart content -->
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-bold mb-4">Chart 2</h3>
        <!-- Chart content -->
      </div>
    </div>
  </main>
</div>
\`\`\`

## Best Practices

### DO:
- ✅ Start with mobile design
- ✅ Test on real devices
- ✅ Use semantic breakpoints
- ✅ Optimize images for mobile
- ✅ Touch-friendly tap targets (44x44px minimum)
- ✅ Readable font sizes (16px minimum)
- ✅ Consider thumb zones on mobile

### DON'T:
- ❌ Design desktop-first
- ❌ Use too many breakpoints
- ❌ Hide important content on mobile
- ❌ Use tiny tap targets
- ❌ Forget about landscape orientation
- ❌ Ignore performance on mobile
- ❌ Use hover-only interactions

## Testing Responsive Design

### Browser DevTools

**Chrome DevTools:**
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select device or custom size
4. Test different breakpoints

### Real Device Testing

**Test on:**
- iPhone (various sizes)
- Android phones
- iPads
- Android tablets
- Different browsers

### Responsive Testing Tools

- BrowserStack
- Responsively App
- Chrome DevTools
- Firefox Responsive Design Mode

## Summary

### Key Takeaways

**Responsive Design:**
- Mobile-first approach
- Use Tailwind breakpoints
- Adapt layouts at breakpoints
- Scale typography and spacing
- Show/hide content strategically

**Breakpoints:**
- sm: 640px (phones landscape)
- md: 768px (tablets)
- lg: 1024px (desktops)
- xl: 1280px (large desktops)
- 2xl: 1536px (extra large)

**Common Patterns:**
- Column drop
- Mostly fluid
- Layout shifter
- Off canvas
- Responsive navigation

### Quick Reference

**Responsive Classes:**
\`\`\`html
<!-- Layout -->
flex-col md:flex-row
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

<!-- Typography -->
text-sm md:text-base lg:text-lg

<!-- Spacing -->
p-4 md:p-6 lg:p-8
gap-2 md:gap-4 lg:gap-6

<!-- Visibility -->
hidden md:block
block md:hidden

<!-- Sizing -->
w-full md:w-1/2 lg:w-1/3
\`\`\`

## Performance Optimization

### Optimize Images

**Responsive images:**
\`\`\`html
<img 
  srcset="small.jpg 640w, medium.jpg 768w, large.jpg 1024w"
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
  src="medium.jpg"
  alt="Responsive image"
  class="w-full h-auto"
/>
\`\`\`

### Lazy Loading

\`\`\`html
<img 
  src="image.jpg" 
  loading="lazy"
  class="w-full"
  alt="Lazy loaded image"
/>
\`\`\`

### Mobile Performance

**Tips:**
- Minimize CSS/JS
- Optimize images
- Use CDN
- Enable compression
- Reduce HTTP requests
- Use caching

## Troubleshooting

### Issue: Layout breaks at certain sizes

**Solution:**
- Test at all breakpoints
- Use browser DevTools
- Check for fixed widths
- Verify flex/grid properties

### Issue: Text too small on mobile

**Solution:**
\`\`\`html
<!-- Use minimum 16px -->
<p class="text-base">Readable text</p>
\`\`\`

### Issue: Images overflow container

**Solution:**
\`\`\`html
<!-- Add max-width -->
<img src="image.jpg" class="max-w-full h-auto" />
\`\`\`
`

        },

        {
            id: 'tailwind-9-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Practice: Responsive Design Patterns',
            duration: '40 min',
            content: `
# Practice: Responsive Design Patterns

In this lesson, you'll practice building responsive layouts with Tailwind CSS using mobile-first approach.

## Setup Instructions

1. Create HTML file with Tailwind CDN
2. Build responsive components
3. Test at different breakpoints
4. Optimize for mobile

## Important Notes

- Use the page console to see output (not browser console)
- Test on different screen sizes
- Start with mobile design
- Use browser DevTools for testing

## Tasks Overview

You'll complete 7 tasks:
1. Create responsive navigation
2. Build responsive grid layout
3. Implement responsive typography
4. Create responsive hero section
5. Build responsive card grid
6. Implement responsive form
7. Create complete responsive page
`,
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!-- Responsive Design Practice -->
<!-- Instructions:
1. Add Tailwind CDN
2. Build responsive components
3. Use mobile-first approach
4. Test at all breakpoints
5. Log breakpoint changes to console
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Practice</title>
  <!-- Add Tailwind CDN here -->
  
</head>
<body>
  <!-- Page console for output -->
  <div id="console" class="fixed bottom-4 right-4 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-w-md max-h-48 overflow-auto z-50"></div>
  
  <!-- Your responsive components here -->
  
  <script>
  </script>
</html>`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Responsive Logic
// Instructions:
// 1. Handle mobile menu toggle
// 2. Detect screen size changes
// 3. Log responsive events
// 4. Test all breakpoints

// Your code here:
`
                }
            ],
            tasks: [
                {
                    id: 'tailwind-9-task-1',
                    title: 'Create Responsive Navigation',
                    instructions: `Build a navigation that adapts to mobile and desktop.

Navigation should:
1. Show hamburger menu on mobile
2. Show full menu on desktop (md:)
3. Toggle mobile menu with JavaScript
4. Log "Navigation: [state] on [device]"

Expected output: "Navigation: mobile menu opened" or "Navigation: desktop view"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Navigation: (mobile|desktop)/i
                    }
                },
                {
                    id: 'tailwind-9-task-2',
                    title: 'Build Responsive Grid',
                    instructions: `Create a grid that changes columns at breakpoints.

Grid should:
1. 1 column on mobile
2. 2 columns on tablet (md:)
3. 3 columns on desktop (lg:)
4. 4 columns on xl screens
5. Log "Grid: [columns] columns at [breakpoint]"

Expected output: "Grid: 1 columns at mobile" or "Grid: 3 columns at lg"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Grid: \d+ columns at (mobile|md|lg|xl)/i
                    }
                },
                {
                    id: 'tailwind-9-task-3',
                    title: 'Implement Responsive Typography',
                    instructions: `Create text that scales with screen size.

Typography should:
1. Heading: text-2xl → text-4xl → text-6xl
2. Body: text-sm → text-base → text-lg
3. Different line heights per breakpoint
4. Log "Typography: [size] at [breakpoint]"

Expected output: "Typography: text-2xl at mobile" or "Typography: text-6xl at xl"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Typography: text-\w+ at (mobile|sm|md|lg|xl)/i
                    }
                },
                {
                    id: 'tailwind-9-task-4',
                    title: 'Create Responsive Hero Section',
                    instructions: `Build a hero section that adapts to screen size.

Hero should:
1. Stack vertically on mobile
2. Side-by-side on desktop (lg:)
3. Responsive padding and text sizes
4. Responsive image sizing
5. Log "Hero: [layout] layout"

Expected output: "Hero: stacked layout" or "Hero: side-by-side layout"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Hero: (stacked|side-by-side) layout/i
                    }
                },
                {
                    id: 'tailwind-9-task-5',
                    title: 'Build Responsive Card Grid',
                    instructions: `Create a card grid that adapts to screen size.

Card grid should:
1. Cards with responsive images
2. Grid changes columns at breakpoints
3. Responsive padding and gaps
4. Log "Cards: [count] per row at [breakpoint]"

Expected output: "Cards: 1 per row at mobile" or "Cards: 3 per row at lg"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Cards: \d+ per row at (mobile|md|lg)/i
                    }
                },
                {
                    id: 'tailwind-9-task-6',
                    title: 'Implement Responsive Form',
                    instructions: `Create a form that adapts to screen size.

Form should:
1. Stacked inputs on mobile
2. Inline inputs on desktop (md:)
3. Responsive button sizing
4. Proper spacing at all sizes
5. Log "Form: [layout] layout"

Expected output: "Form: stacked layout" or "Form: inline layout"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Form: (stacked|inline) layout/i
                    }
                },
                {
                    id: 'tailwind-9-task-7',
                    title: 'Create Complete Responsive Page',
                    instructions: `Build a complete responsive page with all components.

Page should include:
1. Responsive navigation
2. Hero section
3. Feature grid
4. Content sections
5. Footer
6. Log "Page: fully responsive at all breakpoints"

Expected output: "Page: fully responsive at all breakpoints"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Page: fully responsive/i
                    }
                }
            ]
        },
        {
            id: 'tailwind-9-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Quiz: Responsive Design Patterns',
            duration: '5 min',
            questions: [
                {
                    id: 'tailwind-9-q1',
                    question: 'What is the mobile-first approach?',
                    options: [
                        'Design for desktop first, then mobile',
                        'Design for mobile first, then scale up for larger screens',
                        'Only design for mobile devices',
                        'Design for tablets first'
                    ],
                    correctAnswer: 1,
                    explanation: 'Mobile-first means starting with mobile design and progressively enhancing for larger screens. This ensures the core experience works on all devices and makes it easier to scale up than down.'
                },
                {
                    id: 'tailwind-9-q2',
                    question: 'What is the default "md" breakpoint in Tailwind?',
                    options: [
                        '640px',
                        '768px',
                        '1024px',
                        '1280px'
                    ],
                    correctAnswer: 1,
                    explanation: 'The md breakpoint is 768px, which typically targets tablets and larger devices. It applies styles at 768px and above.'
                },
                {
                    id: 'tailwind-9-q3',
                    question: 'How do you hide an element on mobile but show it on desktop?',
                    options: [
                        'class="show-desktop"',
                        'class="hidden md:block"',
                        'class="mobile-hide"',
                        'class="desktop-only"'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use hidden to hide by default (mobile), then md:block to show it at the md breakpoint and above (desktop). This follows the mobile-first approach.'
                },
                {
                    id: 'tailwind-9-q4',
                    question: 'What does "flex-col md:flex-row" do?',
                    options: [
                        'Always displays items in a column',
                        'Displays items in a column on mobile, row on tablet and up',
                        'Displays items in a row on mobile, column on tablet',
                        'Creates a grid layout'
                    ],
                    correctAnswer: 1,
                    explanation: 'flex-col stacks items vertically on mobile, then md:flex-row arranges them horizontally at the md breakpoint (768px) and above.'
                },
                {
                    id: 'tailwind-9-q5',
                    question: 'What is the minimum recommended tap target size for mobile?',
                    options: [
                        '24x24px',
                        '32x32px',
                        '44x44px',
                        '64x64px'
                    ],
                    correctAnswer: 2,
                    explanation: '44x44px is the minimum recommended tap target size for mobile devices to ensure buttons and links are easy to tap with a finger.'
                },
                {
                    id: 'tailwind-9-q6',
                    question: 'Which pattern stacks columns on mobile and displays them side-by-side on desktop?',
                    options: [
                        'Off canvas',
                        'Column drop',
                        'Layout shifter',
                        'Mostly fluid'
                    ],
                    correctAnswer: 1,
                    explanation: 'The column drop pattern stacks columns vertically on mobile and displays them side-by-side on larger screens. It\'s one of the most common responsive patterns.'
                },
                {
                    id: 'tailwind-9-q7',
                    question: 'How do you create responsive padding that increases with screen size?',
                    options: [
                        'class="p-responsive"',
                        'class="p-4 md:p-6 lg:p-8"',
                        'class="padding-auto"',
                        'class="p-mobile p-desktop"'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use progressive padding classes: p-4 for mobile (base), md:p-6 for tablets, lg:p-8 for desktops. Each breakpoint increases the padding.'
                },
                {
                    id: 'tailwind-9-q8',
                    question: 'What is the purpose of the container class?',
                    options: [
                        'To create a grid layout',
                        'To center content and set max-width at breakpoints',
                        'To hide content on mobile',
                        'To add padding to elements'
                    ],
                    correctAnswer: 1,
                    explanation: 'The container class centers content horizontally and sets a max-width that adapts to each breakpoint, preventing content from becoming too wide on large screens.'
                },
                {
                    id: 'tailwind-9-q9',
                    question: 'How do you test responsive design effectively?',
                    options: [
                        'Only test on your own device',
                        'Use browser DevTools and test on real devices',
                        'Just resize the browser window',
                        'Testing is not necessary'
                    ],
                    correctAnswer: 1,
                    explanation: 'Effective testing requires both browser DevTools for quick checks and testing on real devices to catch issues with touch interactions, performance, and actual screen sizes.'
                },
                {
                    id: 'tailwind-9-q10',
                    question: 'What is the recommended minimum font size for mobile readability?',
                    options: [
                        '12px',
                        '14px',
                        '16px',
                        '18px'
                    ],
                    correctAnswer: 2,
                    explanation: '16px is the recommended minimum font size for body text on mobile devices to ensure readability without requiring users to zoom in.'
                }
            ]
        }
    ]
};
