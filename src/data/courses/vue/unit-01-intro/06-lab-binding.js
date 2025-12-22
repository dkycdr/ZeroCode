
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab2 = {
    id: 'vue-1-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Form Handling',
    duration: '30 min',
    content: `
# Lab 2: Form Handling

One of the most common tasks in web development is handling form inputs. In Vanilla JS, this is tedious: you have to listen for 'input' events, get the \`e.target.value\`, and update your variable. Then, if your variable changes from another source, you have to manually update the input's \`value\` property.

Vue solves this elegantly with **Two-Way Data Binding**.

## The Theory: v-model

The \`v-model\` directive creates a two-way binding on a form input element (input, textarea, and select).

### How it works
It is essentially syntax sugar for:
1.  Binding the element's \`value\` attribute to your variable (\`:value="text"\`).
2.  Listening to the element's \`input\` event and updating your variable (\`@input="text = $event.target.value"\`).

\`\`\`javascript
// The Hard Way
<input :value="text" @input="event => text = event.target.value">

// The Vue Way
<input v-model="text">
\`\`\`

### Form Element Types
\`v-model\` is smart. It automatically adapts to the input type:
*   **Text (<input>)**: Binds to \`value\` property and \`input\` event.
*   **Checkbox (<input type="checkbox">)**: Binds to \`checked\` property and \`change\` event.
*   **Select (<select>)**: Binds to \`value\` property and \`change\` event.

### Initial State
If your variable starts as \`ref('')\`, the input will be empty.
If your variable starts as \`ref('Hello')\`, the input will pre-fill with "Hello".
This "Single Source of Truth" pattern ensures your UI (View) and your Data (Model) are always perfectly synchronized.

---

## The Mission

You are building a secure signup form for new agents. You need to capture their generic details (username, email) and ensure they agree to the rigorous Terms of Service.

### Step-by-Step Instructions
1.  **State Definition**:
    *   Create refs for \`username\` (string), \`email\` (string), and \`agreed\` (boolean false).
2.  **Input Bindings**:
    *   Attach \`v-model\` to the inputs. Ensure you define the \`type="email"\` and \`type="checkbox"\` correctly for the browser to render the right controls.
3.  **Real-time Preview**:
    *   Below the form, render a summary line. Because Vue is reactive, as you type in the box, this text should update instantly.
    *   Format: "User [username] ([email]) agreed: [true/false]".

Observe how you *never* have to write a function like \`updateUsername(e)\`. The binding handles it all.
    `,
    tasks: [
        {
            id: 1,
            description: 'Define username ref',
            completed: false,
            regex: /const\s+username\s*=\s*ref\(\s*['"]['"]\s*\)/,
            hint: "const username = ref('')"
        },
        {
            id: 2,
            description: 'Define email ref',
            completed: false,
            regex: /const\s+email\s*=\s*ref\(\s*['"]['"]\s*\)/,
            hint: "const email = ref('')"
        },
        {
            id: 3,
            description: 'Define agreed ref',
            completed: false,
            regex: /const\s+agreed\s*=\s*ref\(\s*false\s*\)/,
            hint: "const agreed = ref(false)"
        },
        {
            id: 4,
            description: 'Bind username input',
            completed: false,
            regex: /<input\s+.*v-model=['"]username['"].*\/?>/,
            hint: "<input v-model='username' />"
        },
        {
            id: 5,
            description: 'Bind email input',
            completed: false,
            regex: /<input\s+.*v-model=['"]email['"].*\/?>/,
            hint: "<input type='email' v-model='email' />"
        },
        {
            id: 6,
            description: 'Bind checkbox',
            completed: false,
            regex: /<input\s+.*type=['"]checkbox['"].*v-model=['"]agreed['"].*\/?>|<input\s+.*v-model=['"]agreed['"].*type=['"]checkbox['"].*\/?>/,
            hint: "<input type='checkbox' v-model='agreed' />"
        },
        {
            id: 7,
            description: 'Render preview text',
            completed: false,
            regex: /User\s+{{\s*username\s*}}\s*\({{\s*email\s*}}\)\s*agreed:\s*{{\s*agreed\s*}}/,
            hint: "User {{ username }} ({{ email }}) agreed: {{ agreed }}"
        }
    ],
    files: [
        {
            name: 'Signup.vue',
            language: 'html',
            content: `<script setup>
import { ref } from 'vue';
// TODO: Define refs
</script>

<template>
  <form>
    <div>
      <label>User:</label>
      <!-- TODO: Username Input -->
      
    </div>
    
    <div>
      <label>Email:</label>
      <!-- TODO: Email Input -->
      
    </div>

    <div>
      <label>Terms:</label>
      <!-- TODO: Checkbox -->
      
    </div>
    
    <hr />
    <!-- TODO: Preview -->
    <p>...preview here...</p>
  </form>
</template>
`
        }
    ]
};
