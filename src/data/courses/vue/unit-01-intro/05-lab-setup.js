
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab1 = {
    id: 'vue-1-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: Hello Vue (Expanded)',
    duration: '25 min',
    content: `
# Lab 1: Hello Vue

Welcome to your first practical Vue.js laboratory. In this session, we won't just write "Hello World"; we will establish the fundamental mental model of how a Vue Single File Component (SFC) operates.

## The Theory: Anatomy of a Component

A Vue component is composed of three distinct parts that work in harmony:

1.  **Script (\`<script setup>\`)**: This is the brain. It holds the logic and the state (variables).
2.  **Template (\`<template>\`)**: This is the face. It defines the HTML structure that the user sees.
3.  **Style (\`<style scoped>\`)**: This is the attire. It defines the CSS looking good.

### The Concept of Declarative Rendering

In traditional JavaScript (jQuery or Vanilla JS), you work **Imperatively**. You tell the browser *how* to do things step-by-step:
> "Find the div with id 'app', then create a p tag, then set its innerText to 'Hello', then append it."

In Vue, you work **Declaratively**. You describe *what* you want:
> "I want a p tag that displays the content of the \`message\` variable."

Vue handles the "how" updates automatically.

### Reactive State with \`ref\`

To make a variable "live" (so the screen updates when the variable changes), we cannot just use \`let name = 'Fox'\`. We must use Vue's reactivity system.

\`\`\`javascript
import { ref } from 'vue'

const name = ref('Fox') // name is now a Ref Object
\`\`\`

Why? Because standard JavaScript variables are not observable. Vue wraps the value in a Proxy-like object that notifies the system whenever \`.value\` is accessed or modified.

---

## The Mission

You act as a Junior Agent initializing your profile in the system. Your goal is to constructs a dynamic profile card using Vue's basic building blocks.

### Step-by-Step Instructions
1.  **Import**: First, we need the tool. Import \`ref\` from the \`vue\` library.
2.  **Define State**:
    *   Create a ref named \`name\` initialized to "Operative".
    *   Create a ref named \`role\` initialized to "Guest".
    *   Create a ref named \`isOnline\` initialized to \`true\`.
3.  **Construct Template**:
    *   Use the "Mustache" syntax \`{{ }}\` to display your data.
    *   Create an \`<h1>\` for your name.
    *   Create an \`<h2>\` for your role.
    *   Create a \`<p>\` that mimics a status indicator showing your online status.

Remember: Inside the \`<script>\`, these variables are objects. Inside the \`<template>\`, they are values. Vue does the heavy lifting of unwrapping them for you.

Let's begin.
    `,
    tasks: [
        {
            id: 1,
            description: 'Import ref from vue',
            completed: false,
            regex: /import\s*{\s*ref\s*}\s*from\s*['"]vue['"]/,
            hint: "import { ref } from 'vue'"
        },
        {
            id: 2,
            description: 'Define name ref',
            completed: false,
            regex: /const\s+name\s*=\s*ref\(\s*['"]Operative['"]\s*\)/,
            hint: "const name = ref('Operative')"
        },
        {
            id: 3,
            description: 'Define role ref',
            completed: false,
            regex: /const\s+role\s*=\s*ref\(\s*['"]Guest['"]\s*\)/,
            hint: "const role = ref('Guest')"
        },
        {
            id: 4,
            description: 'Define isOnline boolean ref',
            completed: false,
            regex: /const\s+isOnline\s*=\s*ref\(\s*true\s*\)/,
            hint: "const isOnline = ref(true)"
        },
        {
            id: 5,
            description: 'Render name in H1',
            completed: false,
            regex: /<h1>\s*{{\s*name\s*}}\s*<\/h1>/,
            hint: "<h1>{{ name }}</h1>"
        },
        {
            id: 6,
            description: 'Render role in H2',
            completed: false,
            regex: /<h2>\s*{{\s*role\s*}}\s*<\/h2>/,
            hint: "<h2>{{ role }}</h2>"
        },
        {
            id: 7,
            description: 'Render isOnline in P',
            completed: false,
            regex: /<p>\s*{{\s*isOnline\s*}}\s*<\/p>/,
            hint: "<p>{{ isOnline }}</p>"
        }
    ],
    files: [
        {
            name: 'App.vue',
            language: 'html',
            content: `<script setup>
// 1. Import
// 2-4. Define refs
</script>

<template>
  <div class="profile">
    <!-- 5-7. Render data -->
    
  </div>
</template>
`
        }
    ]
};
