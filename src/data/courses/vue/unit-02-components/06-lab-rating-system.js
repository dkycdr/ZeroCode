
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab6 = {
    id: 'vue-2-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 6: Star Rating System (Events)',
    duration: '30 min',
    content: `
# Lab 6: Star Rating System

In this lab, you'll build an interactive **StarRating** component that demonstrates the **Props Down, Events Up** pattern. The component will receive a rating value from the parent and emit events when the user clicks on stars.

## Mission Briefing

You're building a product review system. The rating component needs to:
- Display the current rating visually (filled vs empty stars)
- Allow users to click on stars to change the rating
- Notify the parent component when the rating changes

## The Theory: Custom Events

While props let parents **pass data down** to children, events let children **send messages up** to parents.

### The Communication Loop

\`\`\`
Parent (owns data) 
  ↓ [prop: rating]
Child (displays rating)
  ↓ [user clicks star]
Child (emits event: 'update:rating')
  ↑ [event: new value]
Parent (receives event, updates data)
  ↓ [updated prop flows back down]
Child (re-renders with new rating)
\`\`\`

### defineEmits Syntax

\`\`\`javascript
const emit = defineEmits(['update:rating'])

function handleStarClick(value) {
  emit('update:rating', value)  // Send event with payload
}
\`\`\`

### v-model Pattern

When a component follows the \`modelValue\` + \`update:modelValue\` pattern, it can be used with \`v-model\`:

\`\`\`html
<!-- These are equivalent: -->
<StarRating v-model="rating" />
<StarRating :modelValue="rating" @update:modelValue="rating = $event" />
\`\`\`

This makes the component feel like a native form input!

---

## Your Mission

Create an interactive star rating component that:
1. Accepts a \`modelValue\` prop (current rating, 1-5)
2. Displays 5 stars (filled if <= rating, empty if > rating)
3. Emits \`update:modelValue\` when a star is clicked
4. Can be used with \`v-model\` in the parent

### Visual Requirements

- Display ★ for filled stars
- Display ☆ for empty stars
- Stars should be clickable
- Hovering over a star could show preview (optional)

---

## Step-by-Step Instructions

### Part 1: The StarRating Component

1. **Define props**: Accept \`modelValue\` (Number)
2. **Define emits**: Declare \`update:modelValue\` event
3. **Create template**:
   - Use \`v-for\` to loop through numbers 1-5
   - For each star, determine if it should be filled or empty
   - Add a click handler that emits the star's value
4. **Add styling**: Make stars look clickable (cursor pointer, color)

### Part 2: The Parent Component

5. **Import StarRating** component
6. **Create a reactive rating** variable using \`ref(3)\`
7. **Use v-model** to bind the rating to StarRating
8. **Display the current rating** value (e.g., "Rating: 3/5")

### Part 3: Make it Interactive

9. Add hover effects to preview rating before clicking (optional)
10. Add a reset button in the parent to set rating back to 0

---

## Hints & Tips

- **Star characters**: Use \`★\` (filled) and \`☆\` (empty) or emoji ⭐
- **v-for with numbers**: \`v-for="star in 5"\` creates loop from 1 to 5
- **Conditional rendering**: \`star <= modelValue\` determines if filled
- **Click handler**: \`@click="emit('update:modelValue', star)"\`
- **Styling**: Use \`cursor: pointer\` and \`:hover\` for interactivity

Let's build!
    `,
    tasks: [
        {
            id: 1,
            description: 'Import ref from vue in App.vue',
            completed: false,
            regex: /import\s*{\s*ref\s*}\s*from\s*['"]vue['"]/,
            hint: "import { ref } from 'vue'"
        },
        {
            id: 2,
            description: 'Define modelValue prop in StarRating',
            completed: false,
            regex: /defineProps\(\s*{\s*modelValue:\s*Number\s*}\s*\)/,
            hint: "defineProps({ modelValue: Number })"
        },
        {
            id: 3,
            description: 'Define update:modelValue emit',
            completed: false,
            regex: /defineEmits\(\s*\[\s*['"]update:modelValue['"]\s*\]\s*\)/,
            hint: "defineEmits(['update:modelValue'])"
        },
        {
            id: 4,
            description: 'Create v-for loop for 5 stars',
            completed: false,
            regex: /v-for=["']star\s+in\s+5["']/,
            hint: 'v-for="star in 5"'
        },
        {
            id: 5,
            description: 'Add click handler to emit rating',
            completed: false,
            regex: /@click=["']emit\(['"](update:modelValue|update:modelValue)['"]\s*,\s*star\s*\)["']/,
            hint: "@click=\"emit('update:modelValue', star)\""
        },
        {
            id: 6,
            description: 'Create rating ref in App.vue',
            completed: false,
            regex: /const\s+rating\s*=\s*ref\(\s*\d+\s*\)/,
            hint: "const rating = ref(3)"
        },
        {
            id: 7,
            description: 'Import StarRating in App.vue',
            completed: false,
            regex: /import\s+StarRating\s+from\s+['"]\.\/StarRating\.vue['"]/,
            hint: "import StarRating from './StarRating.vue'"
        },
        {
            id: 8,
            description: 'Use StarRating with v-model',
            completed: false,
            regex: /<StarRating\s+v-model=["']rating["']\s*\/>/,
            hint: '<StarRating v-model="rating" />'
        }
    ],
    files: [
        {
            name: 'StarRating.vue',
            language: 'html',
            content: `<script setup>
// TODO: Define props (modelValue)

// TODO: Define emits (update:modelValue)

</script>

<template>
  <div class="star-rating">
    <!-- TODO: v-for loop for 5 stars -->
    <!-- TODO: Show ★ if star <= modelValue, else ☆ -->
    <!-- TODO: Add @click to emit update:modelValue -->
  </div>
</template>

<style scoped>
.star-rating {
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
}

.star-rating span {
  color: #ffd700;
  margin: 0 2px;
}

.star-rating span:hover {
  transform: scale(1.2);
  transition: transform 0.1s;
}
</style>
`
        },
        {
            name: 'App.vue',
            language: 'html',
            content: `<script setup>
// TODO: Import ref from vue

// TODO: Import StarRating component

// TODO: Create rating ref

</script>

<template>
  <div class="app">
    <h1>Rate This Product</h1>
    
    <!-- TODO: Use StarRating with v-model -->
    
    <p>Current Rating: {{ rating }}/5</p>
  </div>
</template>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
`
        }
    ]
};
