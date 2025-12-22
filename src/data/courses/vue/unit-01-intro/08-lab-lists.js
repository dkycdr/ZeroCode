
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab4 = {
    id: 'vue-1-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Task Manager',
    duration: '40 min',
    content: `
# Lab 4: Task Manager

Almost every application involves manipulating a list of items (Tweets, Products, Comments, Todos). We need to render them efficiently and handle dynamic additions and deletions.

## The Theory: List Rendering & Mutation

### The v-for Directive
We use \`v-for\` to loop over an array. The syntax is \`item in items\`.
You can also get the index: \`(item, index) in items\`.

### Array Reactivity
Vue wraps Array methods so they trigger updates appropriately.
*   \`push()\`: Adds to end -> UI updates.
*   \`pop()\`: Removes from end -> UI updates.
*   \`splice()\`: Removes/Inserts anywhere -> UI updates.

### The Importance of :key
When rendering lists, Vue needs a way to uniquely identify each node.
If you shuffle the array \`['A', 'B', 'C']\` to \`['C', 'B', 'A']\`:
*   **Without keys**: Vue just changes the text inside the first <li> to 'C', the second to 'B', etc. It reuses the DOM elements. This is fast but buggy if you have inputs inside the list.
*   **With keys**: Vue actually moves the DOM element 'C' to the top. This preserves state (like cursor focus).

Always bind a unique key! \`:key="item.id"\` is ideal. For simple string arrays where items are unique, \`:key="item"\` works.

---

## The Mission

Construct a simple but functional Todo application. It requires handling user input, updating an array, and rendering the list dynamically.

### Step-by-Step Instructions
1.  **Data Structure**:
    *   \`tasks\`: An array ref initialized with one task \`['Code']\`.
    *   \`newTask\`: A string ref for holding the user's current keystrokes.
2.  **Add Logic**:
    *   Create \`add()\`. It should push the current \`newTask\` value into the \`tasks\` array.
    *   Crucially, it must clear \`newTask\` afterwards so the user can type the next one.
3.  **Delete Logic**:
    *   Create \`remove(index)\`. It should use the JavaScript \`splice\` method to remove 1 item at the given index.
4.  **Event Handling**:
    *   Bind the input with \`v-model\`.
    *   Add a "Key Modifier" listener \`@keyup.enter\` so the user can just hit Enter to submit.
5.  **Render Loop**:
    *   Use \`v-for\` to display the list.
    *   Inside every list item, include a button causing the \`remove\` action for that specific item.

This lab brings together Refs, Methods, v-model, v-on, and v-for. It is the culmination of Unit 1.
    `,
    tasks: [
        {
            id: 1,
            description: 'Define tasks array ref',
            completed: false,
            regex: /const\s+tasks\s*=\s*ref\(\s*\[\s*['"]Code['"]\s*\]\s*\)/,
            hint: "const tasks = ref(['Code'])"
        },
        {
            id: 2,
            description: 'Define newTask string ref',
            completed: false,
            regex: /const\s+newTask\s*=\s*ref\(\s*['"]['"]\s*\)/,
            hint: "const newTask = ref('')"
        },
        {
            id: 3,
            description: 'Define add function',
            completed: false,
            regex: /function\s+add\s*\(\)\s*{\s*tasks\.value\.push\(\s*newTask\.value\s*\)[\s\S]*newTask\.value\s*=\s*['"]['"]\s*}/,
            hint: "Push to tasks.value and clear newTask.value."
        },
        {
            id: 4,
            description: 'Define remove function',
            completed: false,
            regex: /function\s+remove\s*\(\s*index\s*\)\s*{\s*tasks\.value\.splice\(\s*index\s*,\s*1\s*\)\s*}/,
            hint: "tasks.value.splice(index, 1)"
        },
        {
            id: 5,
            description: 'Bind input with @keyup.enter',
            completed: false,
            regex: /<input\s+v-model=['"]newTask['"]\s+@keyup\.enter=['"]add['"]\s*\/?>/,
            hint: "<input v-model='newTask' @keyup.enter='add' />"
        },
        {
            id: 6,
            description: 'Render list with v-for (item, index)',
            completed: false,
            regex: /v-for=['"]\(\s*task\s*,\s*index\s*\)\s+in\s+tasks['"]/,
            hint: "v-for='(task, index) in tasks'"
        },
        {
            id: 7,
            description: 'Add delete button',
            completed: false,
            regex: /<button\s+@click=['"]remove\(\s*index\s*\)['"]>.*<\/button>/,
            hint: "<button @click='remove(index)'>Delete</button>"
        }
    ],
    files: [
        {
            name: 'Todo.vue',
            language: 'html',
            content: `<script setup>
import { ref } from 'vue';
// 1-4. Logic
</script>

<template>
  <div>
    <!-- 5. Input -->
    
    <ul>
      <!-- 6-7. List & Delete -->
      
    </ul>
  </div>
</template>
`
        }
    ]
};
