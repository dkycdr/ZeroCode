
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab3 = {
    id: 'vue-1-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Security Gate',
    duration: '35 min',
    content: `
# Lab 3: Security Gate

Static web pages are boring. Applications depend on logic: "If the user is logged in, show the dashboard, otherwise show the login screen." Vue handles this conditional logic directly in the HTML template.

## The Theory: Conditional Directives

Vue offers a suite of directives for showing and hiding elements based on truthiness of data.

### 1. v-if
The \`v-if\` directive is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.

\`\`\`html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

### 2. v-else
You can use the \`v-else\` directive to indicate an "else block" for \`v-if\`. It must strictly follow a \`v-if\` or a \`v-else-if\` element.

\`\`\`html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
\`\`\`

### 3. v-else-if
As the name suggests, it serves as an "else if block". It can be chained multiple times.

### 4. Method Handling
We will also introduce **Methods** (Functions) inside \`<script setup>\`.
Just define a function and use it.
\`\`\`javascript
const count = ref(0)
function increment() {
    count.value++ // Don't forget .value in script!
}
\`\`\`
And bind it in template:
\`\`\`html
<button @click="increment">Add</button>
\`\`\`

---

## The Mission

You are tasked with programming the logic for a High-Security Gate. The gate has a locking mechanism and an access level scanner.

### Step-by-Step Instructions
1.  **System State**: 
    *   Initialize \`accessLevel\` to 0.
    *   Initialize \`isLocked\` to true (System starts in lockdown).
2.  **Control Logic**:
    *   Create \`unlock()\` function: sets \`isLocked\` to false.
    *   Create \`promote()\` function: increases \`accessLevel\` by 1 (Simulating ID card upgrade).
3.  **UI Implementation**:
    *   If the system is locked, display a **LOCKED** warning.
    *   If the system is unlocked, check the clearance level.
    *   If level is 5 or higher, display **WELCOME ADMIN**.
    *   Otherwise, display **WELCOME GUEST**.

This logic chain requires proper nesting or chaining of \`v-if\`, \`v-else-if\`, and \`v-else\`.
    `,
    tasks: [
        {
            id: 1,
            description: 'Define accessLevel ref(0)',
            completed: false,
            regex: /const\s+accessLevel\s*=\s*ref\(\s*0\s*\)/,
            hint: "const accessLevel = ref(0)"
        },
        {
            id: 2,
            description: 'Define isLocked ref(true)',
            completed: false,
            regex: /const\s+isLocked\s*=\s*ref\(\s*true\s*\)/,
            hint: "const isLocked = ref(true)"
        },
        {
            id: 3,
            description: 'Define unlock function',
            completed: false,
            regex: /function\s+unlock\s*\(\)\s*{\s*isLocked\.value\s*=\s*false\s*}/,
            hint: "Set isLocked.value to false."
        },
        {
            id: 4,
            description: 'Define promote function',
            completed: false,
            regex: /function\s+promote\s*\(\)\s*{\s*accessLevel\.value\+\+\s*}/,
            hint: "Increment accessLevel.value."
        },
        {
            id: 5,
            description: 'Render LOCKED if isLocked',
            completed: false,
            regex: /<div\s+v-if=['"]isLocked['"]>\s*LOCKED\s*<\/div>/,
            hint: "<div v-if='isLocked'>LOCKED</div>"
        },
        {
            id: 6,
            description: 'Render ADMIN if unlocked & level >= 5',
            completed: false,
            regex: /<div\s+v-else-if=['"]accessLevel\s*>=\s*5['"]>\s*WELCOME ADMIN\s*<\/div>/,
            hint: "<div v-else-if='accessLevel >= 5'>WELCOME ADMIN</div>"
        },
        {
            id: 7,
            description: 'Render GUEST for others',
            completed: false,
            regex: /<div\s+v-else>\s*WELCOME GUEST\s*<\/div>/,
            hint: "<div v-else>WELCOME GUEST</div>"
        }
    ],
    files: [
        {
            name: 'Gate.vue',
            language: 'html',
            content: `<script setup>
import { ref } from 'vue';
// 1-4. State & Methods
</script>

<template>
  <div>
    <button @click="unlock">Unlock</button>
    <button @click="promote">Promote</button>
    
    <!-- 5-7. Conditional UI -->
    
  </div>
</template>
`
        }
    ]
};
