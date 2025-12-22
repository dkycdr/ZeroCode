
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab7 = {
    id: 'vue-2-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 7: Modal Dialog (Slots)',
    duration: '30 min',
    content: `
# Lab 7: Modal Dialog with Slots

In this lab, you'll build a reusable **BaseModal** component using **named slots**. This is a perfect example of how slots enable flexible component composition.

## Mission Briefing

Modals are everywhere in modern UIs: confirmation dialogs, forms, alerts, image viewers. But each modal has different content. How do we create ONE modal component that works for all these use cases?

**Answer**: Slots.

## The Theory: Content Distribution

Props are great for **data**, but what about **markup**? You can't pass HTML in a prop easily (it would be a string, not actual DOM).

**Slots solve this**:
- Props = "Here's the data"
- Slots = "Here's the actual HTML content"

### Named Slots Pattern

A modal typically has three sections:
1. **Header**: Title, close button
2. **Body**: Main content
3. **Footer**: Action buttons

We define these as **named slots** in the modal component:

\`\`\`html
<template>
  <div class="modal">
    <header>
      <slot name="header"></slot>  <!-- Parent provides header content -->
    </header>
    <main>
      <slot></slot>  <!-- Default slot for body -->
    </main>
    <footer>
      <slot name="footer"></slot>  <!-- Parent provides footer content -->
    </footer>
  </div>
</template>
\`\`\`

### Using Named Slots

The parent fills in the slots:

\`\`\`html
<BaseModal>
  <template #header>
    <h2>Confirm Delete</h2>
  </template>
  
  <p>Are you sure you want to delete this item?</p>
  
  <template #footer>
    <button @click="cancel">Cancel</button>
    <button @click="confirm">Delete</button>
  </template>
</BaseModal>
\`\`\`

This pattern gives the parent **complete control** over the content while the child component handles the **structure and styling**.

---

## Your Mission

Build a reusable modal component that:
1. Has three slots: header, default (body), and footer
2. Can be shown/hidden via a \`show\` prop
3. Emits a \`close\` event when the backdrop or close button is clicked
4. Has a semi-transparent backdrop
5. Is centered on the screen

---

## Step-by-Step Instructions

### Part 1: BaseModal Component

1. **Define props**: \`show\` (Boolean) to control visibility
2. **Define emits**: \`close\` event
3. **Create template structure**:
   - Use \`v-if="show"\` to conditionally render
   - Create a backdrop div (full-screen overlay)
   - Create a modal-content div (the actual modal box)
   - Define three slots: \`name="header"\`, default, \`name="footer"\`
4. **Add click handlers**:
   - Backdrop click should emit \`close\`
   - Add a close button (×) in the header that emits \`close\`
5. **Style the modal**: Position fixed, centered, z-index, backdrop opacity

### Part 2: Use the Modal

6. **Import BaseModal** in App.vue
7. **Create ref** for \`showModal\` (Boolean)
8. **Use BaseModal** with \`v-if="showModal"\` or \`:show="showModal"\`
9. **Fill in the slots**:
   - Header: Title and close button
   - Body: Some content (text, form, etc.)
   - Footer: Action buttons
10. **Add buttons** to open/close the modal

---

## Hints & Tips

- **Backdrop click**: \`@click.self\` only triggers if you click the backdrop itself, not child elements
- **Close button**: Use \`×\` or \`✕\` character, or \`❌\` emoji
- **Centering**: Use flexbox on the backdrop: \`display: flex; justify-content: center; align-items: center;\`
- **Prevent scroll**: When modal is open, add \`overflow: hidden\` to body (advanced)
- **Transitions**: Wrap modal in \`<Transition>\` for fade-in effect (optional)

Let's build a professional modal!
    `,
    tasks: [
        {
            id: 1,
            description: 'Define show prop (Boolean)',
            completed: false,
            regex: /defineProps\(\s*{\s*show:\s*Boolean\s*}\s*\)/,
            hint: "defineProps({ show: Boolean })"
        },
        {
            id: 2,
            description: 'Define close emit',
            completed: false,
            regex: /defineEmits\(\s*\[\s*['"]close['"]\s*\]\s*\)/,
            hint: "defineEmits(['close'])"
        },
        {
            id: 3,
            description: 'Use v-if to conditionally show modal',
            completed: false,
            regex: /<div[^>]+v-if=["']show["']/,
            hint: '<div v-if="show" class="modal-backdrop">'
        },
        {
            id: 4,
            description: 'Create named slot for header',
            completed: false,
            regex: /<slot\s+name=["']header["']\s*><\/slot>/,
            hint: '<slot name="header"></slot>'
        },
        {
            id: 5,
            description: 'Create default slot for body',
            completed: false,
            regex: /<slot\s*><\/slot>/,
            hint: '<slot></slot>'
        },
        {
            id: 6,
            description: 'Create named slot for footer',
            completed: false,
            regex: /<slot\s+name=["']footer["']\s*><\/slot>/,
            hint: '<slot name="footer"></slot>'
        },
        {
            id: 7,
            description: 'Add backdrop click to emit close',
            completed: false,
            regex: /@click(\.self)?=["']emit\(\s*['"]close['"]\s*\)["']/,
            hint: "@click.self=\"emit('close')\""
        },
        {
            id: 8,
            description: 'Import BaseModal in App.vue',
            completed: false,
            regex: /import\s+BaseModal\s+from\s+['"]\.\/BaseModal\.vue['"]/,
            hint: "import BaseModal from './BaseModal.vue'"
        }
    ],
    files: [
        {
            name: 'BaseModal.vue',
            language: 'html',
            content: `<script setup>
// TODO: Define props (show)

// TODO: Define emits (close)

</script>

<template>
  <!-- TODO: v-if="show" wrapper -->
  <div class="modal-backdrop">
    <div class="modal-content">
      <div class="modal-header">
        <!-- TODO: Named slot for header -->
        <button class="close-btn">×</button>
      </div>
      
      <div class="modal-body">
        <!-- TODO: Default slot for body -->
      </div>
      
      <div class="modal-footer">
        <!-- TODO: Named slot for footer -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
`
        },
        {
            name: 'App.vue',
            language: 'html',
            content: `<script setup>
import { ref } from 'vue'
// TODO: Import BaseModal

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div class="app">
    <h1>Modal Demo</h1>
    <button @click="openModal">Open Modal</button>
    
    <!-- TODO: Use BaseModal with :show and @close -->
    <!-- TODO: Fill header slot with title -->
    <!-- TODO: Add content in default slot -->
    <!-- TODO: Fill footer slot with buttons -->
  </div>
</template>

<style scoped>
.app {
  padding: 40px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 4px;
}
</style>
`
        }
    ]
};
