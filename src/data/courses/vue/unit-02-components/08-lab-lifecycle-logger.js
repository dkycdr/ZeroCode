
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab8 = {
    id: 'vue-2-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 8: Lifecycle Logger (Component Lifecycle)',
    duration: '30 min',
    content: `
# Lab 8: Component Lifecycle & Cleanup

In this lab, you'll explore Vue's component **lifecycle hooks** by building a timer component that properly manages side effects (intervals, event listeners) using \`onMounted\` and \`onUnmounted\`.

## Mission Briefing

You're building a **Timer** component that counts seconds. But here's the catch: when the component is removed from the DOM, the timer must be **cleaned up** properly, or it will keep running in the background (memory leak!).

This lab teaches you **when** to do things in a component's lifecycle.

## The Theory: Component Lifecycle

A Vue component goes through several phases:

1. **Creation**: Component instance is created, reactive state is initialized
2. **Mounting**: Component is inserted into the DOM
3. **Updating**: Reactive data changes, component re-renders
4. **Unmounting**: Component is removed from the DOM

### Lifecycle Hooks We'll Use

\`\`\`javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // Component is NOW in the DOM
  // Perfect for: starting timers, fetching data, adding event listeners
  console.log('Component mounted!')
})

onUnmounted(() => {
  // Component is ABOUT TO BE removed from DOM
  // Perfect for: cleanup, clearing timers, removing listeners
  console.log('Component unmounted!')
})
\`\`\`

### Why Lifecycle Hooks Matter

**Without proper cleanup**, resources leak:
- Timers keep ticking even after component is gone
- Event listeners accumulate with each mount/unmount
- API requests pile up
- Memory usage grows

**With proper cleanup**, everything is clean:
- Timers stop when component is destroyed
- Listeners are removed
- Pending requests are cancelled

---

## Your Mission

Create a **Timer** component that:
1. Displays elapsed seconds
2. Starts counting when mounted
3. **STOPS counting when unmounted** (critical!)
4. Can be toggled on/off to demonstrate lifecycle

### The Challenge

The tricky part is storing the interval ID so you can clear it later:

\`\`\`javascript
let intervalId = null  // Store outside of hooks

onMounted(() => {
  intervalId = setInterval(() => {
    seconds.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)  // Clean up!
})
\`\`\`

---

## Step-by-Step Instructions

### Part 1: Timer Component

1. **Import lifecycle hooks**: \`onMounted\`, \`onUnmounted\`
2. **Import ref** for reactive state
3. **Create \`seconds\` ref** initialized to 0
4. **Create \`intervalId\` variable** to store the interval reference
5. **Use onMounted** to start the interval:
   - Use \`setInterval\` to increment \`seconds\` every 1000ms
   - Store the interval ID
6. **Use onUnmounted** to clear the interval:
   - Call \`clearInterval(intervalId)\`
7. **Display seconds** in the template

### Part 2: Parent Component (App.vue)

8. **Create \`showTimer\` ref** (Boolean) to toggle component visibility
9. **Use v-if** to conditionally render the Timer component
10. **Add a toggle button** to show/hide the timer

### Part 3: Observe the Lifecycle

11. Add \`console.log\` statements in \`onMounted\` and \`onUnmounted\`
12. Toggle the timer on/off and watch the browser console
13. Verify the interval is properly cleaned up (use browser DevTools)

---

## Hints & Tips

- **setInterval returns ID**: \`const id = setInterval(...)\` — save this ID!
- **clearInterval needs ID**: \`clearInterval(id)\` stops the interval
- **Variable scope**: Declare \`intervalId\` at the top of \`<script setup>\`, not inside hooks
- **Console logging**: Use \`console.log('Mounted!')\` to see lifecycle events
- **Memory leak test**: Toggle component multiple times. If logs keep appearing, you have a leak.

Let's build a properly managed component!
    `,
    tasks: [
        {
            id: 1,
            description: 'Import onMounted and onUnmounted',
            completed: false,
            regex: /import\s*{\s*[^}]*(onMounted|onUnmounted)[^}]*(onMounted|onUnmounted)[^}]*}\s*from\s*['"]vue['"]/,
            hint: "import { ref, onMounted, onUnmounted } from 'vue'"
        },
        {
            id: 2,
            description: 'Create seconds ref',
            completed: false,
            regex: /const\s+seconds\s*=\s*ref\(\s*0\s*\)/,
            hint: "const seconds = ref(0)"
        },
        {
            id: 3,
            description: 'Declare intervalId variable',
            completed: false,
            regex: /let\s+intervalId\s*=?\s*(null|undefined)?/,
            hint: "let intervalId = null"
        },
        {
            id: 4,
            description: 'Use onMounted to start interval',
            completed: false,
            regex: /onMounted\(\s*\(\s*\)\s*=>\s*{[^}]*setInterval/s,
            hint: "onMounted(() => { intervalId = setInterval(() => { seconds.value++ }, 1000) })"
        },
        {
            id: 5,
            description: 'Store interval ID',
            completed: false,
            regex: /intervalId\s*=\s*setInterval/,
            hint: "intervalId = setInterval(...)"
        },
        {
            id: 6,
            description: 'Use onUnmounted to clear interval',
            completed: false,
            regex: /onUnmounted\(\s*\(\s*\)\s*=>\s*{[^}]*clearInterval\s*\(\s*intervalId\s*\)/s,
            hint: "onUnmounted(() => { clearInterval(intervalId) })"
        },
        {
            id: 7,
            description: 'Display seconds in template',
            completed: false,
            regex: /{{\s*seconds\s*}}/,
            hint: "{{ seconds }}"
        },
        {
            id: 8,
            description: 'Create showTimer ref in App.vue',
            completed: false,
            regex: /const\s+showTimer\s*=\s*ref\(\s*(true|false)\s*\)/,
            hint: "const showTimer = ref(true)"
        }
    ],
    files: [
        {
            name: 'Timer.vue',
            language: 'html',
            content: `<script setup>
// TODO: Import ref, onMounted, onUnmounted

// TODO: Create seconds ref = 0

// TODO: Declare intervalId variable

// TODO: onMounted - start interval
//   intervalId = setInterval(() => { seconds.value++ }, 1000)

// TODO: onUnmounted - clear interval
//   clearInterval(intervalId)

</script>

<template>
  <div class="timer">
    <h2>Timer</h2>
    <p class="time">{{ seconds }}s</p>
  </div>
</template>

<style scoped>
.timer {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
}

.time {
  font-size: 3rem;
  font-weight: bold;
  color: #42b983;
}
</style>
`
        },
        {
            name: 'App.vue',
            language: 'html',
            content: `<script setup>
import { ref } from 'vue'
import Timer from './Timer.vue'

// TODO: Create showTimer ref

function toggleTimer() {
  showTimer.value = !showTimer.value
}
</script>

<template>
  <div class="app">
    <h1>Lifecycle Demo</h1>
    
    <button @click="toggleTimer">
      {{ showTimer ? 'Hide' : 'Show' }} Timer
    </button>
    
    <!-- TODO: Use v-if to conditionally show Timer -->
    
  </div>
</template>

<style scoped>
.app {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin: 20px 0;
  font-size: 1rem;
  cursor: pointer;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
`
        }
    ]
};
