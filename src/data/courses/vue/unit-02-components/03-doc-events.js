
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc7 = {
    id: 'vue-2-doc-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Events - Data Flowing Up ⬆️',
    duration: '30 min read',
    content: `
# Deep Dive: Events - Data Flowing Up ⬆️

> "While props allow us to pass data down the component tree, we need a way to communicate back up. This is where custom events come in." — Vue Documentation

## 1. Introduction: The Communication Loop

We've learned that **props flow down**. But what happens when a child component needs to tell the parent something?

- User clicked a button in the child
- Form was submitted in a modal
- Data needs to be updated in the parent

This is where **custom events** come in. Events flow **up** from child to parent.

### 1.1 The Props Down, Events Up Pattern

This is the **fundamental communication pattern** in Vue.

\`\`\`mermaid
graph LR
    Parent["👑 Parent Component<br/>owns data: count = 5"]
    Child["👶 Child Component<br/>displays count<br/>has button"]
    
    Parent -->|"prop: count"| Child
    Child -->|"event: increment"| Parent
    
    style Parent fill:#4fc08d,stroke:#333,stroke-width:3px,color:#fff
    style Child fill:#42b983,stroke:#333,stroke-width:2px
\`\`\`

**Flow**:
1. Parent passes \`count\` prop to Child → Data flows **down**
2. User clicks button in Child
3. Child emits \`increment\` event → Event flows **up**
4. Parent handles the event and updates \`count\`
5. Updated prop flows back down to Child → Cycle repeats

This is **reactive, declarative, and predictable**.

---

## 2. Emitting Custom Events: The Basics

### 2.1 Using \`defineEmits\`

In \`<script setup>\`, use \`defineEmits()\` to declare events.

**ChildComponent.vue**:
\`\`\`html
<script setup>
const emit = defineEmits(['increment', 'decrement'])

function handleClick() {
  emit('increment')  // Emit event to parent
}
</script>

<template>
  <button @click="handleClick">Increment</button>
</template>
\`\`\`

**ParentComponent.vue**:
\`\`\`html
<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)

function onIncrement() {
  count.value++
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <ChildComponent @increment="onIncrement" />
</template>
\`\`\`

### 2.2 Event Naming Conventions

**Use kebab-case** for event names (like HTML attributes):
\`\`\`javascript
// ✅ Good
emit('user-updated')
emit('form-submitted')
emit('toggle-sidebar')

// ❌ Bad (camelCase works but not recommended)
emit('userUpdated')
\`\`\`

**Why?** HTML attributes are case-insensitive. \`@userUpdated\` and \`@userupdated\` look different but are treated the same.

---

## 3. Event Payloads

Events can carry data (payload).

### 3.1 Single Argument

\`\`\`javascript
// Child
emit('update', newValue)

// Parent
<Child @update="handleUpdate" />

function handleUpdate(value) {
  console.log('Received:', value)
}
\`\`\`

### 3.2 Multiple Arguments

\`\`\`javascript
// Child
emit('user-updated', userId, userName, userRole)

// Parent
<Child @user-updated="handleUserUpdate" />

function handleUserUpdate(id, name, role) {
  console.log(id, name, role)
}
\`\`\`

### 3.3 Object Payload

For complex data, use an object:
\`\`\`javascript
// Child
emit('form-submitted', {
  email: 'user@example.com',
  password: '***',
  rememberMe: true
})

// Parent
function handleSubmit(formData) {
  console.log(formData.email)  // 'user@example.com'
}
\`\`\`

---

## 4. Event Validation

Like props, you can validate events using the Object syntax.

### 4.1 Validation Function

\`\`\`javascript
const emit = defineEmits({
  // No validation (just declaration)
  click: null,
  
  // Validation function
  submit: (payload) => {
    if (!payload.email) {
      console.warn('Email is required')
      return false  // Validation failed
    }
    return true  // Validation passed
  },
  
  // Validate number range
  'update:count': (value) => {
    return typeof value === 'number' && value >= 0
  }
})
\`\`\`

If validation returns \`false\`, Vue shows a **warning** in development mode.

---

## 5. The \`v-model\` Pattern

\`v-model\` is syntactic sugar for the **props + events** pattern.

### 5.1 How v-model Works

**Long form**:
\`\`\`html
<input :value="text" @input="text = $event.target.value" />
\`\`\`

**Short form (v-model)**:
\`\`\`html
<input v-model="text" />
\`\`\`

For **custom components**, \`v-model\` expects:
- A prop named \`modelValue\`
- An event named \`update:modelValue\`

### 5.2 Custom v-model Component

**CustomInput.vue** (Child):
\`\`\`html
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input 
    :value="modelValue" 
    @input="handleInput" 
    class="custom-input"
  />
</template>
\`\`\`

**Parent**:
\`\`\`html
<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <CustomInput v-model="text" />
  <p>You typed: {{ text }}</p>
</template>
\`\`\`

**What happens**:
1. Parent binds \`text\` with \`v-model\`
2. Vue passes \`text\` as \`modelValue\` prop
3. Vue listens to \`update:modelValue\` event
4. When child emits the event, parent's \`text\` updates

### 5.3 Custom v-model Names

You can use custom names instead of \`modelValue\`:

**Child**:
\`\`\`javascript
const props = defineProps(['title'])
const emit = defineEmits(['update:title'])
\`\`\`

**Parent**:
\`\`\`html
<MyComponent v-model:title="pageTitle" />
<!-- Equivalent to: -->
<MyComponent 
  :title="pageTitle" 
  @update:title="pageTitle = $event" 
/>
\`\`\`

### 5.4 Multiple v-models

A component can have **multiple** v-models:

\`\`\`html
<UserForm 
  v-model:firstName="first" 
  v-model:lastName="last" 
  v-model:email="email"
/>
\`\`\`

**UserForm.vue**:
\`\`\`javascript
defineProps(['firstName', 'lastName', 'email'])
defineEmits(['update:firstName', 'update:lastName', 'update:email'])
\`\`\`

---

## 6. Event Modifiers

Vue provides modifiers for common event handling patterns.

### 6.1 Built-in Modifiers

\`\`\`html
<!-- Prevent default behavior -->
<form @submit.prevent="handleSubmit">

<!-- Stop event propagation -->
<button @click.stop="handleClick">

<!-- Only trigger once -->
<button @click.once="handleClick">

<!-- Capture phase instead of bubble -->
<div @click.capture="handleClick">

<!-- Only trigger if event.target is the element itself -->
<div @click.self="handleClick">
\`\`\`

### 6.2 Key Modifiers

\`\`\`html
<!-- Only trigger on Enter key -->
<input @keyup.enter="handleSubmit" />

<!-- Only trigger on Escape -->
<input @keyup.esc="handleCancel" />

<!-- Combination -->
<input @keyup.ctrl.enter="handleCtrlEnter" />
\`\`\`

---

## 7. Native Events vs Custom Events

### 7.1 Native Events

Standard DOM events: \`click\`, \`input\`, \`submit\`, \`keyup\`, etc.

\`\`\`html
<button @click="handleClick">Click</button>
\`\`\`

### 7.2 Custom Events

Events you define for component communication:

\`\`\`html
<MyComponent @custom-event="handleCustom" />
\`\`\`

### 7.3 \`.native\` Modifier (Vue 2 Legacy)

In Vue 2, you needed \`.native\` to listen to native events on components:
\`\`\`html
<!-- Vue 2 -->
<MyButton @click.native="handleClick" />
\`\`\`

In **Vue 3**, this is no longer needed. Use \`defineEmits\` to explicitly declare which events are custom.

---

## 8. Event Bus Pattern (Legacy)

### 8.1 The Old Way (Vue 2)

Before Pinia/Vuex, developers used a global event bus:

\`\`\`javascript
// eventBus.js
import { createApp } from 'vue'
export const bus = createApp({})

// ComponentA.vue
bus.$emit('user-logged-in', user)

// ComponentB.vue
bus.$on('user-logged-in', (user) => {
  console.log(user)
})
\`\`\`

### 8.2 Why It's Deprecated

- **Hard to track**: Event origins and listeners are scattered
- **Memory leaks**: Forgetting to \`$off\` listeners
- **Not type-safe**: No TypeScript support

### 8.3 Modern Alternatives

Use:
- **Pinia** for global state
- **Provide/Inject** for ancestor-descendant communication
- **Props/Events** for parent-child communication

---

## 9. Advanced Pattern: Event Delegation

For lists, delegate events from children to parent.

**Bad (N event listeners)**:
\`\`\`html
<div v-for="item in items" :key="item.id">
  <button @click="handleDelete(item.id)">Delete</button>
</div>
\`\`\`

**Good (1 event listener)**:
\`\`\`html
<div @click="handleClick">
  <button v-for="item in items" :key="item.id" :data-id="item.id">
    Delete
  </button>
</div>

<script setup>
function handleClick(event) {
  if (event.target.tagName === 'BUTTON') {
    const id = event.target.dataset.id
    handleDelete(id)
  }
}
</script>
\`\`\`

---

## 10. TypeScript Integration

Typed event emits for better DX.

\`\`\`typescript
<script setup lang="ts">
// Define event signature
const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
  (e: 'submit', data: { email: string, password: string }): void
}>()

// Usage with autocomplete
emit('update', 'new value')
emit('delete', 123)
emit('submit', { email: 'test@example.com', password: '***' })
</script>
\`\`\`

---

## 11. Common Pitfalls

### 11.1 Typo in Event Name

\`\`\`javascript
// Child
emit('user-updated')

// Parent (typo)
<Child @user-update="handleUpdate" />  // ❌ Won't work (missing 'd')
\`\`\`

**Solution**: Use TypeScript or event validation.

### 11.2 Forgetting to Declare Emits

\`\`\`javascript
// ❌ Bad (works but not recommended)
<script setup>
// No defineEmits
</script>
<template>
  <button @click="$emit('click')">Click</button>
</template>

// ✅ Good (explicit)
<script setup>
const emit = defineEmits(['click'])
</script>
<template>
  <button @click="emit('click')">Click</button>
</template>
\`\`\`

### 11.3 Emitting Too Much Data

\`\`\`javascript
// ❌ Bad (passing huge object)
emit('update', entireDatabaseDump)

// ✅ Good (pass only what's needed)
emit('update', { id: 123, name: 'Alice' })
\`\`\`

---

## 12. Best Practices

1. **Always declare emits** with \`defineEmits()\`
2. **Use kebab-case** for event names
3. **Validate event payloads** for robustness
4. **Keep payloads minimal** (only necessary data)
5. **Use TypeScript** for type-safe events
6. **Implement v-model** for two-way binding components (inputs, toggles)
7. **Avoid event bus** — use Pinia instead

---

## 13. The Complete Communication Flow

\`\`\`mermaid
sequenceDiagram
    participant Parent
    participant Child
    
    Parent->>Child: Pass prop (count: 5)
    Child->>Child: Display count in UI
    
    Note over Child: User clicks button
    
    Child->>Parent: Emit event (increment)
    Parent->>Parent: Update count to 6
    Parent->>Child: Pass updated prop (count: 6)
    Child->>Child: Re-render with new value
    
    Note over Parent,Child: Props Down ⬇️, Events Up ⬆️
\`\`\`

---

## 14. Summary

Custom events enable **child-to-parent** communication:
- Defined with \`defineEmits()\`
- Emitted with \`emit('event-name', payload)\`
- Listened to with \`@event-name="handler"\` in parent
- Follow **kebab-case** naming convention
- Can be validated and typed with TypeScript
- \`v-model\` is syntactic sugar for \`modelValue\` prop + \`update:modelValue\` event

Together with **Props** (Deep Dive 2), Events complete the **bidirectional communication loop** between parent and child components. Next, we'll explore **Slots** — the ultimate content composition mechanism.
    `
};
