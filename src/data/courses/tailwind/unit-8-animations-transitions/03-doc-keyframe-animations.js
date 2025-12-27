import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3KeyframeAnimations = {
  id: 'tailwind-u8-doc-3-keyframes',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Keyframe Animations in Tailwind',
  duration: '10 min read',
  content: `
# Keyframe Animations in Tailwind

## Transitions vs Animations

| Feature | Transitions | Animations |
|---------|-------------|------------|
| Trigger | State change (hover, focus) | Can auto-play |
| Control | Start → End only | Multiple keyframes |
| Loop | No | Can repeat infinitely |
| Use case | Interactive feedback | Attention grabbing |

---

## Built-in Animations

Tailwind provides 4 animations out of the box:

### animate-spin

For loading indicators:

\`\`\`html
<svg class="animate-spin h-5 w-5">
  <!-- Spinner SVG -->
</svg>
\`\`\`

### animate-ping

For notification indicators:

\`\`\`html
<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span class="relative rounded-full h-3 w-3 bg-red-500"></span>
</span>
\`\`\`

### animate-pulse

For skeleton loaders:

\`\`\`html
<div class="animate-pulse bg-gray-300 h-4 w-3/4 rounded"></div>
\`\`\`

### animate-bounce

For scroll indicators:

\`\`\`html
<div class="animate-bounce">
  ↓ Scroll Down
</div>
\`\`\`

---

## Custom Keyframe Animations

### Step 1: Define Keyframes

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
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    }
  }
}
\`\`\`

### Step 2: Define Animation

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
        slideIn: 'slideIn 0.3s ease-out',
      }
    }
  }
}
\`\`\`

### Step 3: Use It!

\`\`\`html
<button class="animate-wiggle hover:animate-none">
  Attention!
</button>

<div class="animate-fadeIn">
  I fade in on load
</div>
\`\`\`

---

## Animation on Entry (Using Intersection Observer)

\`\`\`javascript
// Trigger animation when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
\`\`\`

---

## Reducing Motion

Always respect user preferences:

\`\`\`html
<div class="animate-bounce motion-reduce:animate-none">
  This bounces, but stops if user prefers reduced motion
</div>
\`\`\`

> [!IMPORTANT]
> Use \`motion-reduce:animate-none\` for accessibility. Some users have vestibular disorders affected by animations.

---

## Key Takeaways

✅ **animate-spin** for loaders
✅ **animate-ping** for notifications  
✅ **animate-pulse** for skeletons
✅ **Custom keyframes** in tailwind.config.js
✅ **motion-reduce:** for accessibility
`
};
