import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8AnimationsTransitions = {
    id: 'tailwind-unit-8',
    title: 'Animations & Transitions - Motion Design',
    description: 'Master animations, transitions, and motion design with Tailwind CSS',
    items: [
        {
            id: 'tailwind-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Animations & Transitions - The Complete Guide',
            duration: '30 min read',
            content: `
# Animations & Transitions - The Complete Guide

## What are Transitions and Animations?

**Transitions** smoothly change CSS properties over time when state changes.
**Animations** create complex motion sequences with keyframes.

### Real-World Analogy: Door Opening

Think of transitions and animations like opening a door:

**Without Transition (Instant):**
\`\`\`
Door closed → BANG! → Door open
Jarring and unnatural
No smooth motion
\`\`\`

**With Transition (Smooth):**
\`\`\`
Door closed → Smoothly swings → Door open
Natural and pleasant
Smooth motion
\`\`\`

**With Animation (Complex):**
\`\`\`
Door closed → Swings open → Bounces back → Settles
Complex motion sequence
Multiple steps
More engaging
\`\`\`

### Why Motion Matters

**Benefits:**
- ✅ Guides user attention
- ✅ Provides feedback
- ✅ Makes UI feel responsive
- ✅ Improves user experience
- ✅ Adds personality
- ✅ Communicates state changes
- ✅ Makes interfaces feel alive

**Statistics:**
- 88% of users prefer animated interfaces
- Smooth animations increase perceived performance
- Motion reduces cognitive load by 40%

## Tailwind Transition Utilities

### Basic Transitions

**transition class:**
\`\`\`html
<!-- Transition all properties -->
<button class="transition bg-blue-500 hover:bg-blue-600">
  Hover me
</button>
\`\`\`

**What happens:**
- Background color changes smoothly
- Default duration: 150ms
- Default easing: cubic-bezier(0.4, 0, 0.2, 1)

### Transition Properties

**Specific properties:**
\`\`\`html
<!-- Transition only colors -->
<div class="transition-colors bg-white hover:bg-gray-100">
  Colors only
</div>

<!-- Transition only opacity -->
<div class="transition-opacity opacity-100 hover:opacity-50">
  Opacity only
</div>

<!-- Transition only transform -->
<div class="transition-transform hover:scale-110">
  Transform only
</div>

<!-- Transition only shadow -->
<div class="transition-shadow shadow hover:shadow-lg">
  Shadow only
</div>
\`\`\`

**Available transition properties:**
- transition-none: No transition
- transition-all: All properties
- transition: All with defaults
- transition-colors: Colors only
- transition-opacity: Opacity only
- transition-shadow: Shadow only
- transition-transform: Transform only

### Transition Duration

**Control speed:**
\`\`\`html
<!-- 75ms - Very fast -->
<div class="transition duration-75">Fast</div>

<!-- 150ms - Default -->
<div class="transition duration-150">Default</div>

<!-- 300ms - Moderate -->
<div class="transition duration-300">Moderate</div>

<!-- 500ms - Slow -->
<div class="transition duration-500">Slow</div>

<!-- 1000ms - Very slow -->
<div class="transition duration-1000">Very slow</div>
\`\`\`

**Duration values:**
- duration-75: 75ms
- duration-100: 100ms
- duration-150: 150ms (default)
- duration-200: 200ms
- duration-300: 300ms
- duration-500: 500ms
- duration-700: 700ms
- duration-1000: 1000ms

### Transition Timing Functions

**Easing curves:**
\`\`\`html
<!-- Linear - Constant speed -->
<div class="transition ease-linear">Linear</div>

<!-- Ease-in - Starts slow -->
<div class="transition ease-in">Ease In</div>

<!-- Ease-out - Ends slow -->
<div class="transition ease-out">Ease Out</div>

<!-- Ease-in-out - Slow start and end -->
<div class="transition ease-in-out">Ease In Out</div>
\`\`\`

**Timing functions:**
- ease-linear: Constant speed
- ease-in: Accelerates
- ease-out: Decelerates
- ease-in-out: Accelerates then decelerates

### Transition Delay

**Delay before starting:**
\`\`\`html
<!-- No delay -->
<div class="transition delay-0">Immediate</div>

<!-- 75ms delay -->
<div class="transition delay-75">Slight delay</div>

<!-- 150ms delay -->
<div class="transition delay-150">Short delay</div>

<!-- 300ms delay -->
<div class="transition delay-300">Medium delay</div>

<!-- 500ms delay -->
<div class="transition delay-500">Long delay</div>
\`\`\`

## Transform Utilities

### Scale

**Resize elements:**
\`\`\`html
<!-- Scale up on hover -->
<div class="transition-transform hover:scale-110">
  Grows 10%
</div>

<!-- Scale down on hover -->
<div class="transition-transform hover:scale-95">
  Shrinks 5%
</div>

<!-- Scale X axis only -->
<div class="transition-transform hover:scale-x-110">
  Wider
</div>

<!-- Scale Y axis only -->
<div class="transition-transform hover:scale-y-110">
  Taller
</div>
\`\`\`

**Scale values:**
- scale-0: 0%
- scale-50: 50%
- scale-75: 75%
- scale-90: 90%
- scale-95: 95%
- scale-100: 100% (default)
- scale-105: 105%
- scale-110: 110%
- scale-125: 125%
- scale-150: 150%

### Rotate

**Spin elements:**
\`\`\`html
<!-- Rotate 45 degrees -->
<div class="transition-transform hover:rotate-45">
  Rotate
</div>

<!-- Rotate -45 degrees -->
<div class="transition-transform hover:-rotate-45">
  Rotate back
</div>

<!-- Rotate 90 degrees -->
<div class="transition-transform hover:rotate-90">
  Quarter turn
</div>

<!-- Rotate 180 degrees -->
<div class="transition-transform hover:rotate-180">
  Half turn
</div>
\`\`\`

**Rotate values:**
- rotate-0: 0deg
- rotate-1: 1deg
- rotate-3: 3deg
- rotate-6: 6deg
- rotate-12: 12deg
- rotate-45: 45deg
- rotate-90: 90deg
- rotate-180: 180deg

### Translate

**Move elements:**
\`\`\`html
<!-- Move right -->
<div class="transition-transform hover:translate-x-4">
  Move right
</div>

<!-- Move down -->
<div class="transition-transform hover:translate-y-4">
  Move down
</div>

<!-- Move diagonally -->
<div class="transition-transform hover:translate-x-4 hover:translate-y-4">
  Move diagonal
</div>

<!-- Move left (negative) -->
<div class="transition-transform hover:-translate-x-4">
  Move left
</div>
\`\`\`

### Skew

**Slant elements:**
\`\`\`html
<!-- Skew X axis -->
<div class="transition-transform hover:skew-x-12">
  Skew horizontal
</div>

<!-- Skew Y axis -->
<div class="transition-transform hover:skew-y-12">
  Skew vertical
</div>
\`\`\`

### Combining Transforms

**Multiple transforms:**
\`\`\`html
<!-- Scale and rotate -->
<div class="transition-transform hover:scale-110 hover:rotate-12">
  Scale + Rotate
</div>

<!-- Scale, rotate, and translate -->
<div class="transition-transform hover:scale-110 hover:rotate-12 hover:translate-y-2">
  Multiple transforms
</div>
\`\`\`

## Tailwind Animation Utilities

### Built-in Animations

**Spin:**
\`\`\`html
<!-- Continuous spin -->
<div class="animate-spin">
  ⚙️ Loading...
</div>

<!-- Loading spinner -->
<svg class="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
</svg>
\`\`\`

**Ping:**
\`\`\`html
<!-- Pulsing circle -->
<div class="relative">
  <div class="animate-ping absolute h-4 w-4 rounded-full bg-blue-400 opacity-75"></div>
  <div class="relative h-4 w-4 rounded-full bg-blue-500"></div>
</div>
\`\`\`

**Pulse:**
\`\`\`html
<!-- Gentle pulse -->
<div class="animate-pulse bg-gray-200 h-4 w-full rounded">
  Loading...
</div>

<!-- Skeleton loader -->
<div class="animate-pulse space-y-4">
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="h-4 bg-gray-200 rounded"></div>
  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
\`\`\`

**Bounce:**
\`\`\`html
<!-- Bouncing element -->
<div class="animate-bounce">
  ⬇️ Scroll down
</div>
\`\`\`

### Custom Animations

**Define in config:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.3s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
      }
    }
  }
}
\`\`\`

**Usage:**
\`\`\`html
<div class="animate-wiggle">Wiggle</div>
<div class="animate-fadeIn">Fade in</div>
<div class="animate-slideIn">Slide in</div>
<div class="animate-scaleIn">Scale in</div>
\`\`\`

## Practical Animation Patterns

### Button Hover Effects

**Scale on hover:**
\`\`\`html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 active:scale-95">
  Click me
</button>
\`\`\`

**Lift effect:**
\`\`\`html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
  Hover to lift
</button>
\`\`\`

**Glow effect:**
\`\`\`html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
  Glow on hover
</button>
\`\`\`

**Slide effect:**
\`\`\`html
<button class="relative overflow-hidden bg-blue-500 text-white px-6 py-3 rounded-lg group">
  <span class="relative z-10">Hover me</span>
  <div class="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
</button>
\`\`\`

### Card Animations

**Hover lift:**
\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here.</p>
</div>
\`\`\`

**Flip card:**
\`\`\`html
<div class="group perspective-1000 w-64 h-64">
  <div class="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
    <!-- Front -->
    <div class="absolute w-full h-full backface-hidden bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
      Front
    </div>
    <!-- Back -->
    <div class="absolute w-full h-full backface-hidden bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl rotate-y-180">
      Back
    </div>
  </div>
</div>
\`\`\`

### Loading States

**Spinner:**
\`\`\`html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2" disabled>
  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
  Loading...
</button>
\`\`\`

**Progress bar:**
\`\`\`html
<div class="w-full bg-gray-200 rounded-full h-2">
  <div class="bg-blue-500 h-2 rounded-full transition-all duration-500" style="width: 60%"></div>
</div>
\`\`\`

**Skeleton:**
\`\`\`html
<div class="animate-pulse space-y-4">
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="space-y-2">
    <div class="h-4 bg-gray-200 rounded"></div>
    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
</div>
\`\`\`

### Modal Animations

**Fade in:**
\`\`\`html
<!-- Backdrop -->
<div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 data-[open]:opacity-100">
  <!-- Modal -->
  <div class="fixed inset-0 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg p-6 max-w-md w-full transition-all duration-300 scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100">
      <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
      <p class="text-gray-600">Modal content</p>
    </div>
  </div>
</div>
\`\`\`

**Slide from bottom:**
\`\`\`html
<div class="fixed inset-0 bg-black bg-opacity-50">
  <div class="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 transition-transform duration-300 translate-y-full data-[open]:translate-y-0">
    <h2 class="text-2xl font-bold mb-4">Bottom Sheet</h2>
    <p class="text-gray-600">Content here</p>
  </div>
</div>
\`\`\`

### Notification Animations

**Slide in from right:**
\`\`\`html
<div class="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 translate-x-full data-[show]:translate-x-0">
  <div class="flex items-start gap-3">
    <div class="text-green-500">✓</div>
    <div>
      <h4 class="font-bold">Success!</h4>
      <p class="text-sm text-gray-600">Your changes have been saved.</p>
    </div>
  </div>
</div>
\`\`\`

**Fade and slide:**
\`\`\`html
<div class="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 opacity-0 translate-y-2 data-[show]:opacity-100 data-[show]:translate-y-0">
  <p>Notification message</p>
</div>
\`\`\`

## Performance Best Practices

### Use Transform and Opacity

**Good (GPU accelerated):**
\`\`\`html
<div class="transition-transform hover:scale-110">Fast</div>
<div class="transition-opacity hover:opacity-50">Fast</div>
\`\`\`

**Bad (CPU intensive):**
\`\`\`html
<div class="transition-all hover:w-64">Slow</div>
<div class="transition-all hover:h-64">Slow</div>
\`\`\`

### Limit Animated Elements

**Good:**
\`\`\`html
<!-- Animate only the button -->
<button class="transition-transform hover:scale-105">
  Click me
</button>
\`\`\`

**Bad:**
\`\`\`html
<!-- Animating entire page -->
<div class="transition-all">
  <!-- Lots of content -->
</div>
\`\`\`

### Use will-change Sparingly

**When needed:**
\`\`\`html
<div class="will-change-transform transition-transform hover:scale-110">
  Complex animation
</div>
\`\`\`

**Don't overuse:**
\`\`\`html
<!-- Bad: will-change on everything -->
<div class="will-change-auto">Everything</div>
\`\`\`

## Accessibility Considerations

### Respect prefers-reduced-motion

**Disable animations for users who prefer less motion:**
\`\`\`html
<div class="transition-transform hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100">
  Respects user preference
</div>
\`\`\`

**In config:**
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms', // For motion-reduce
      }
    }
  }
}
\`\`\`

### Provide Alternative Feedback

**Don't rely only on animation:**
\`\`\`html
<button class="transition-all hover:scale-105 focus:ring-2 focus:ring-blue-500">
  <!-- Visual feedback for both hover and focus -->
  Click me
</button>
\`\`\`

## Summary

### Key Takeaways

**Transitions:**
- Use transition utilities for smooth changes
- Control duration, timing, and delay
- Transition specific properties for performance
- Combine with hover, focus, active states

**Transforms:**
- Scale, rotate, translate, skew
- GPU accelerated (fast)
- Combine multiple transforms
- Use transition-transform

**Animations:**
- Built-in: spin, ping, pulse, bounce
- Create custom keyframe animations
- Use for complex motion sequences
- Consider performance

**Best Practices:**
- Keep animations subtle
- Use appropriate durations (150-300ms)
- Respect prefers-reduced-motion
- Test on real devices
- Don't overuse animations

### Quick Reference

**Transitions:**
\`\`\`html
transition
transition-colors
transition-opacity
transition-transform
duration-300
ease-in-out
delay-150
\`\`\`

**Transforms:**
\`\`\`html
scale-110
rotate-45
translate-x-4
skew-x-12
\`\`\`

**Animations:**
\`\`\`html
animate-spin
animate-ping
animate-pulse
animate-bounce
\`\`\`
`
        },

        {
            id: 'tailwind-8-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Practice: Animations & Transitions',
            duration: '40 min',
            content: `
# Practice: Animations & Transitions

In this lesson, you'll practice creating smooth animations and transitions with Tailwind CSS.

## Setup Instructions

1. Create HTML file with Tailwind CDN
2. Implement various animations
3. Create interactive components
4. Test performance

## Important Notes

- Use the page console to see output (not browser console)
- Test animations on different devices
- Consider accessibility
- Keep animations subtle and purposeful

## Tasks Overview

You'll complete 7 tasks:
1. Create button hover effects
2. Build animated card component
3. Implement loading spinner
4. Create modal with animations
5. Build notification system
6. Create custom keyframe animation
7. Implement accessible animations
`,
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!-- Animations Practice -->
<!-- Instructions:
1. Add Tailwind CDN
2. Create animated components
3. Use transitions and transforms
4. Test all animations
5. Log animation states to console
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animations Practice</title>
  <!-- Add Tailwind CDN here -->
  
</head>
<body class="p-8">
  <!-- Page console for output -->
  <div id="console" class="fixed bottom-4 right-4 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-w-md max-h-48 overflow-auto"></div>
  
  <!-- Your animated components here -->
  
</body>
</html>`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Animation Logic
// Instructions:
// 1. Create animation functions
// 2. Handle user interactions
// 3. Log animation states
// 4. Test all animations

// Your code here:
`
                }
            ],
            tasks: [
                {
                    id: 'tailwind-8-task-1',
                    title: 'Create Button Hover Effects',
                    instructions: `Create buttons with different hover animations.

Create 4 buttons with:
1. Scale effect (scale-105 on hover)
2. Lift effect (shadow + translate-y)
3. Glow effect (custom shadow)
4. Slide effect (background slide)
Log "Button [type] hovered" on hover

Expected output: "Button scale hovered", "Button lift hovered", etc.`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Button (scale|lift|glow|slide) hovered/i
                    }
                },
                {
                    id: 'tailwind-8-task-2',
                    title: 'Build Animated Card',
                    instructions: `Create a card with hover animations.

Card should:
1. Lift on hover (translate-y + shadow)
2. Scale slightly (scale-105)
3. Smooth transition (duration-300)
4. Log "Card animation: [state]"

Expected output: "Card animation: hover" or "Card animation: normal"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Card animation: (hover|normal)/i
                    }
                },
                {
                    id: 'tailwind-8-task-3',
                    title: 'Implement Loading Spinner',
                    instructions: `Create a loading spinner with animation.

Spinner should:
1. Use animate-spin
2. Show loading text
3. Toggle on button click
4. Log "Loading: [state]"

Expected output: "Loading: started" or "Loading: stopped"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Loading: (started|stopped)/i
                    }
                },
                {
                    id: 'tailwind-8-task-4',
                    title: 'Create Animated Modal',
                    instructions: `Build a modal with fade and scale animations.

Modal should:
1. Fade in backdrop (opacity transition)
2. Scale in content (scale-95 to scale-100)
3. Toggle with button
4. Log "Modal: [state]"

Expected output: "Modal: opened" or "Modal: closed"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Modal: (opened|closed)/i
                    }
                },
                {
                    id: 'tailwind-8-task-5',
                    title: 'Build Notification System',
                    instructions: `Create animated notifications that slide in.

Notifications should:
1. Slide in from right
2. Auto-dismiss after 3 seconds
3. Fade out on dismiss
4. Log "Notification: [message]"

Expected output: "Notification: Success message" or similar`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Notification: .+/i
                    }
                },
                {
                    id: 'tailwind-8-task-6',
                    title: 'Create Custom Keyframe Animation',
                    instructions: `Define and use a custom wiggle animation.

Implementation:
1. Define wiggle keyframes in config
2. Create element with animate-wiggle
3. Trigger on button click
4. Log "Custom animation: wiggle started"

Expected output: "Custom animation: wiggle started"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Custom animation: wiggle started/i
                    }
                },
                {
                    id: 'tailwind-8-task-7',
                    title: 'Implement Accessible Animations',
                    instructions: `Create animations that respect prefers-reduced-motion.

Implementation:
1. Add motion-reduce classes
2. Disable animations for reduced motion
3. Test with motion-reduce
4. Log "Accessibility: motion preference [value]"

Expected output: "Accessibility: motion preference normal" or "reduced"`,
                    validation: {
                        type: 'output',
                        expectedPattern: /Accessibility: motion preference (normal|reduced)/i
                    }
                }
            ]
        },
        {
            id: 'tailwind-8-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Quiz: Animations & Transitions',
            duration: '5 min',
            questions: [
                {
                    id: 'tailwind-8-q1',
                    question: 'What is the difference between transitions and animations?',
                    options: [
                        'There is no difference',
                        'Transitions are for state changes, animations are for complex sequences',
                        'Animations are faster than transitions',
                        'Transitions only work on hover'
                    ],
                    correctAnswer: 1,
                    explanation: 'Transitions smoothly change properties when state changes (like hover), while animations create complex motion sequences using keyframes that can run independently of state changes.'
                },
                {
                    id: 'tailwind-8-q2',
                    question: 'Which properties are GPU-accelerated and perform best for animations?',
                    options: [
                        'width and height',
                        'transform and opacity',
                        'margin and padding',
                        'color and background'
                    ],
                    correctAnswer: 1,
                    explanation: 'Transform and opacity are GPU-accelerated, making them much faster for animations. Animating layout properties like width, height, margin, or padding can cause reflows and hurt performance.'
                },
                {
                    id: 'tailwind-8-q3',
                    question: 'What does the transition-transform class do?',
                    options: [
                        'Transforms the element immediately',
                        'Transitions only transform properties smoothly',
                        'Removes all transitions',
                        'Adds a 3D transform'
                    ],
                    correctAnswer: 1,
                    explanation: 'transition-transform applies transitions only to transform properties (scale, rotate, translate, skew), which is more performant than transitioning all properties.'
                },
                {
                    id: 'tailwind-8-q4',
                    question: 'What is the default transition duration in Tailwind?',
                    options: [
                        '100ms',
                        '150ms',
                        '200ms',
                        '300ms'
                    ],
                    correctAnswer: 1,
                    explanation: 'The default transition duration in Tailwind is 150ms, which provides a good balance between being noticeable and not feeling slow.'
                },
                {
                    id: 'tailwind-8-q5',
                    question: 'Which built-in animation would you use for a loading indicator?',
                    options: [
                        'animate-bounce',
                        'animate-spin',
                        'animate-ping',
                        'animate-pulse'
                    ],
                    correctAnswer: 1,
                    explanation: 'animate-spin creates a continuous rotation, perfect for loading spinners. animate-pulse is also commonly used for skeleton loaders.'
                },
                {
                    id: 'tailwind-8-q6',
                    question: 'What does the ease-in-out timing function do?',
                    options: [
                        'Constant speed throughout',
                        'Starts and ends slowly, fast in the middle',
                        'Starts fast, ends slow',
                        'Starts slow, ends fast'
                    ],
                    correctAnswer: 1,
                    explanation: 'ease-in-out accelerates at the start and decelerates at the end, creating a smooth, natural-feeling animation that starts and ends slowly.'
                },
                {
                    id: 'tailwind-8-q7',
                    question: 'How do you respect users who prefer reduced motion?',
                    options: [
                        'Remove all animations',
                        'Use motion-reduce: prefix to disable animations',
                        'Make animations faster',
                        'Ignore the preference'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use the motion-reduce: prefix to disable or reduce animations for users who have enabled the prefers-reduced-motion setting in their system preferences.'
                },
                {
                    id: 'tailwind-8-q8',
                    question: 'What is the purpose of the delay utility?',
                    options: [
                        'To make animations slower',
                        'To wait before starting a transition',
                        'To repeat animations',
                        'To stop animations'
                    ],
                    correctAnswer: 1,
                    explanation: 'The delay utility (like delay-150) adds a delay before the transition starts, useful for creating staggered animations or sequential effects.'
                },
                {
                    id: 'tailwind-8-q9',
                    question: 'How do you create a custom animation in Tailwind?',
                    options: [
                        'Use inline styles only',
                        'Define keyframes and animation in tailwind.config.js',
                        'Custom animations are not possible',
                        'Use JavaScript only'
                    ],
                    correctAnswer: 1,
                    explanation: 'Define custom keyframes and animations in the tailwind.config.js file under theme.extend.keyframes and theme.extend.animation, then use them with classes like animate-yourAnimation.'
                },
                {
                    id: 'tailwind-8-q10',
                    question: 'What is a good duration for most UI transitions?',
                    options: [
                        '50-100ms',
                        '150-300ms',
                        '500-1000ms',
                        '1000ms+'
                    ],
                    correctAnswer: 1,
                    explanation: '150-300ms is ideal for most UI transitions. It\'s fast enough to feel responsive but slow enough to be perceived as smooth. Longer durations can make the interface feel sluggish.'
                }
            ]
        }
    ]
};
