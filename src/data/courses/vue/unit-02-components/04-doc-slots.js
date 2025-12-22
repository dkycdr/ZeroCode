
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc8 = {
    id: 'vue-2-doc-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Slots - Content Distribution API 🎰',
    duration: '30 min read',
    content: `
# Deep Dive: Slots - Content Distribution API 🎰

> "Slot content is not just limited to text. It can be any template content, including HTML or even other components." — Vue Documentation

## 1. Introduction: The Composition Problem

Imagine building a reusable \`<Card>\` component. You want it to have a consistent border and shadow, but the **content** inside should be flexible.

**Without slots**, you'd need to pass everything as props:
\`\`\`html
<Card 
  :title="'User Profile'" 
  :content="'Some text'" 
  :footer="'Read More'"
/>
\`\`\`

This breaks down quickly:
- What if content has HTML tags?
- What if you want to pass another component?
- What if the structure varies per usage?

**With slots**, you can inject **any content**:
\`\`\`html
<Card>
  <template #header>
    <h1>User Profile</h1>
  </template>
  
  <p>Some <strong>rich</strong> content here</p>
  
  <template #footer>
    <button>Read More</button>
  </template>
</Card>
\`\`\`

Slots are Vue's **Content Distribution API** — a way to compose components with flexible content.

---

## 2. Default Slots

The simplest form: a single slot for content.

### 2.1 Basic Usage

**ButtonComponent.vue** (Child):
\`\`\`html
<template>
  <button class="custom-btn">
    <slot></slot>  <!-- Content will be injected here -->
  </button>
</template>
\`\`\`

**Parent**:
\`\`\`html
<ButtonComponent>
  Click Me!
</ButtonComponent>

<!-- Renders as: -->
<button class="custom-btn">Click Me!</button>
\`\`\`

### 2.2 Fallback Content

Provide default content if parent doesn't pass anything.

**ButtonComponent.vue**:
\`\`\`html
<template>
  <button class="custom-btn">
    <slot>Default Text</slot>  <!-- Fallback -->
  </button>
</template>
\`\`\`

**Usage**:
\`\`\`html
<!-- With content -->
<ButtonComponent>Custom Text</ButtonComponent>
<!-- Renders: <button>Custom Text</button> -->

<!-- Without content -->
<ButtonComponent />
<!-- Renders: <button>Default Text</button> -->
\`\`\`

---

## 3. Named Slots

When you need **multiple slots** in different positions.

### 3.1 Defining Named Slots

**CardComponent.vue**:
\`\`\`html
<template>
  <div class="card">
    <header class="card-header">
      <slot name="header"></slot>  <!-- Named slot: header -->
    </header>
    
    <main class="card-body">
      <slot></slot>  <!-- Default slot -->
    </main>
    
    <footer class="card-footer">
      <slot name="footer"></slot>  <!-- Named slot: footer -->
    </footer>
  </div>
</template>
\`\`\`

### 3.2 Using Named Slots

**Parent**:
\`\`\`html
<CardComponent>
  <template #header>
    <h1>Card Title</h1>
  </template>
  
  <!-- Default slot (no template wrapper needed) -->
  <p>This is the main content area.</p>
  
  <template #footer>
    <button>Action</button>
  </template>
</CardComponent>
\`\`\`

**Shorthand**: \`#slotName\` is short for \`v-slot:slotName\`
\`\`\`html
<!-- Long form -->
<template v-slot:header>...</template>

<!-- Short form -->
<template #header>...</template>
\`\`\`

---

## 4. Scoped Slots

**The most powerful feature**: Passing data FROM child TO parent's slot content.

### 4.1 The Use Case

You have a \`<TodoList>\` component that handles the data and rendering logic, but you want the **parent** to control how each item looks.

### 4.2 Defining Scoped Slots

**TodoList.vue** (Child):
\`\`\`html
<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Learn Vue', completed: false },
  { id: 2, text: 'Build App', completed: true }
])
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <!-- Pass todo data to the slot -->
      <slot :todo="todo" :index="todo.id"></slot>
    </li>
  </ul>
</template>
\`\`\`

### 4.3 Consuming Scoped Slot Data

**Parent**:
\`\`\`html
<TodoList>
  <template #default="slotProps">
    <span :class="{ done: slotProps.todo.completed }">
      {{ slotProps.index }}. {{ slotProps.todo.text }}
    </span>
  </template>
</TodoList>
\`\`\`

**Destructuring (Preferred)**:
\`\`\`html
<TodoList>
  <template #default="{ todo, index }">
    <span :class="{ done: todo.completed }">
      {{ index }}. {{ todo.text }}
    </span>
  </template>
</TodoList>
\`\`\`

### 4.4 The Power of Scoped Slots

The child component **owns the data and logic**, but the parent **controls the presentation**. This is the **Renderless Component** pattern.

---

## 5. Slot Injection Visualization

\`\`\`mermaid
graph TD
    Parent["👑 Parent Component<br/>Provides slot content"]
    Child["👶 Child Component<br/>Defines slot locations"]
    
    Parent -->|"Header content"| SlotHeader["📌 &lt;slot name='header'&gt;"]
    Parent -->|"Default content"| SlotDefault["📌 &lt;slot&gt;"]
    Parent -->|"Footer content"| SlotFooter["📌 &lt;slot name='footer'&gt;"]
    
    SlotHeader --> Child
    SlotDefault --> Child
    SlotFooter --> Child
    
    Child -->|"Scoped data"| SlotDefault
    
    style Parent fill:#4fc08d,stroke:#333,stroke-width:3px,color:#fff
    style Child fill:#42b983,stroke:#333,stroke-width:2px
    style SlotHeader fill:#35495e,stroke:#333,stroke-width:1px,color:#fff
    style SlotDefault fill:#35495e,stroke:#333,stroke-width:1px,color:#fff
    style SlotFooter fill:#35495e,stroke:#333,stroke-width:1px,color:#fff
\`\`\`

The parent **injects** content into the child's slot **outlets**.

---

## 6. Advanced Slot Patterns

### 6.1 Dynamic Slot Names

Compute slot names at runtime.

\`\`\`html
<template v-for="section in sections" :key="section">
  <template #[section]>
    <h2>{{ section }}</h2>
  </template>
</template>
\`\`\`

### 6.2 Conditional Slots

Check if a slot was provided using \`$slots\`.

**ChildComponent.vue**:
\`\`\`html
<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div>
    <header v-if="slots.header">
      <slot name="header"></slot>
    </header>
    
    <slot></slot>
  </div>
</template>
\`\`\`

### 6.3 Multiple Scoped Slots

Combine named slots with scoped data.

\`\`\`html
<DataTable :data="users">
  <template #header="{ columns }">
    <th v-for="col in columns" :key="col">{{ col }}</th>
  </template>
  
  <template #row="{ user }">
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
  </template>
</DataTable>
\`\`\`

---

## 7. Renderless Components Pattern

A component that provides **logic** but no **UI**.

**MouseTracker.vue** (Renderless):
\`\`\`html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})
</script>

<template>
  <slot :x="x" :y="y"></slot>
</template>
\`\`\`

**Usage**:
\`\`\`html
<MouseTracker>
  <template #default="{ x, y }">
    <p>Mouse position: {{ x }}, {{ y }}</p>
  </template>
</MouseTracker>
\`\`\`

**Benefits**:
- Reusable logic (mouse tracking, data fetching, timers)
- No UI opinions (parent controls rendering)
- Composable (use with any UI framework)

---

## 8. Slots vs Props: When to Use What?

| Feature | Props | Slots |
|---------|-------|-------|
| **Purpose** | Pass data | Pass content/markup |
| **Type** | JavaScript values | HTML/Components |
| **Flexibility** | Fixed structure | Flexible composition |
| **Use Case** | Configuration | Layout/Content |

**Examples**:
- **Props**: \`<Button color="blue" size="large">\`
- **Slots**: \`<Modal><h1>Title</h1><p>Content</p></Modal>\`

**Rule of Thumb**: Use props for **data**, use slots for **content**.

---

## 9. Slot Forwarding

Pass slots from parent to grandchild.

\`\`\`html
<!-- GrandParent -->
<Parent>
  <template #header>Title</template>
</Parent>

<!-- Parent (Middle Layer) -->
<template>
  <Child>
    <template #header>
      <slot name="header"></slot>  <!-- Forward slot -->
    </template>
  </Child>
</template>
\`\`\`

**Shorthand** (Vue 3.3+):
\`\`\`html
<Child v-bind="$attrs">
  <slot></slot>  <!-- Forwards all slots -->
</Child>
\`\`\`

---

## 10. TypeScript Integration

Type-safe slot props.

\`\`\`typescript
<script setup lang="ts">
interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([...])
</script>

<template>
  <li v-for="todo in todos" :key="todo.id">
    <slot :todo="todo"></slot>
  </li>
</template>
\`\`\`

**Parent**:
\`\`\`html
<TodoList>
  <template #default="{ todo }: { todo: Todo }">
    {{ todo.text }}
  </template>
</TodoList>
\`\`\`

---

## 11. Common Pitfalls

### 11.1 Forgetting \`<template>\` for Named Slots

\`\`\`html
<!-- ❌ Won't work -->
<Card>
  <h1 #header>Title</h1>
</Card>

<!-- ✅ Correct -->
<Card>
  <template #header>
    <h1>Title</h1>
  </template>
</Card>
\`\`\`

### 11.2 Accessing Child Data Without Scoped Slots

\`\`\`html
<!-- ❌ Can't access child's internal data -->
<TodoList>
  <div>{{ todo.text }}</div>  <!-- Error: todo is not defined -->
</TodoList>

<!-- ✅ Use scoped slots -->
<TodoList>
  <template #default="{ todo }">
    <div>{{ todo.text }}</div>
  </template>
</TodoList>
\`\`\`

### 11.3 Overusing Scoped Slots

Don't use scoped slots for simple configuration. Props are cleaner:
\`\`\`html
<!-- ❌ Overkill -->
<Button>
  <template #default="{ color }">
    <span :style="{ color }">Click</span>
  </template>
</Button>

<!-- ✅ Use props -->
<Button color="blue">Click</Button>
\`\`\`

---

## 12. Real-World Use Cases

### 12.1 Modal/Dialog Components

\`\`\`html
<Modal>
  <template #header>
    <h2>Delete Confirmation</h2>
  </template>
  
  <p>Are you sure you want to delete this item?</p>
  
  <template #footer>
    <button @click="cancel">Cancel</button>
    <button @click="confirm">Delete</button>
  </template>
</Modal>
\`\`\`

### 12.2 Layout Components

\`\`\`html
<AppLayout>
  <template #sidebar>
    <Navigation />
  </template>
  
  <template #main>
    <router-view />
  </template>
  
  <template #footer>
    <Footer />
  </template>
</AppLayout>
\`\`\`

### 12.3 Data Tables

\`\`\`html
<DataTable :items="users">
  <template #header="{ columns }">
    <th v-for="col in columns">{{ col }}</th>
  </template>
  
  <template #row="{ item }">
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td><button>Edit</button></td>
  </template>
</DataTable>
\`\`\`

---

## 13. Best Practices

1. **Use slots for content composition** (layouts, cards, modals)
2. **Use scoped slots for data-driven UIs** (lists, tables)
3. **Provide fallback content** for optional slots
4. **Check slot existence** with \`useSlots()\` before conditional rendering
5. **Name slots semantically** (header, footer, sidebar) not generically (slot1, slot2)
6. **Don't abuse scoped slots** — use props for simple data
7. **Document slot APIs** with comments or TypeScript

---

## 14. Summary

Slots are Vue's **Content Distribution API**:
- **Default slots**: Single content injection point
- **Named slots**: Multiple, labeled injection points
- **Scoped slots**: Pass data from child to parent's slot content
- **Renderless components**: Logic without UI (slot-only components)

Slots enable:
- Flexible component composition
- Reusable layouts
- Customizable UI rendering
- Separation of logic and presentation

Combined with **Props** (data down) and **Events** (messages up), Slots complete the **Component Communication Triad** in Vue. You now have all the tools to build sophisticated, composable interfaces.
    `
};
