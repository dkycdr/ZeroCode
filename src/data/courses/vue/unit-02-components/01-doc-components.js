
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc5 = {
    id: 'vue-2-doc-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Components - The Building Blocks 🧱',
    duration: '30 min read',
    content: `
# Deep Dive: Components - The Building Blocks 🧱

> "Think of components as custom elements that Vue's compiler recognizes. In some cases, they may also appear as a native HTML element extended with the special \`is\` attribute." — Vue Documentation

## 1. Introduction: The Component Mental Model

Components are the **fundamental building blocks** of any Vue application. If Vue is LEGO, components are the individual bricks. A complex UI is just many small, reusable components composed together.

### 1.1 Why Components?

In traditional web development, we build monolithic HTML files. A 1000-line HTML file is hard to maintain. Components solve this by allowing us to:

1. **Encapsulate**: Bundle HTML, CSS, and JavaScript into a single, self-contained unit.
2. **Reuse**: Write once, use everywhere. A \`<Button>\` component can be used 50 times across your app.
3. **Compose**: Build complex UIs by combining simple components (like LEGO bricks).
4. **Maintain**: Easier debugging. If the button is broken, you know exactly where to look.

### 1.2 The Component Tree

Every Vue application is organized as a **tree of components**. There is always a root component (usually \`App.vue\`), and it can have children, which can have their own children, forming a hierarchy.

\`\`\`mermaid
graph TD
    App[App.vue - Root]
    App --> Header[Header.vue]
    App --> Main[MainContent.vue]
    App --> Footer[Footer.vue]
    
    Header --> Nav[Navbar.vue]
    Header --> Logo[Logo.vue]
    
    Main --> Sidebar[Sidebar.vue]
    Main --> Content[ContentArea.vue]
    
    Content --> Card1[Card.vue]
    Content --> Card2[Card.vue]
    Content --> Card3[Card.vue]
    
    Footer --> Links[FooterLinks.vue]
    Footer --> Social[SocialIcons.vue]
    
    style App fill:#4fc08d,stroke:#333,stroke-width:3px,color:#fff
    style Header fill:#42b983,stroke:#333,stroke-width:2px
    style Main fill:#42b983,stroke:#333,stroke-width:2px
    style Footer fill:#42b983,stroke:#333,stroke-width:2px
\`\`\`

This tree structure is crucial for understanding:
- **Props flow**: Data flows DOWN from parent to child
- **Events flow**: Events bubble UP from child to parent
- **Provide/Inject**: Share data across multiple levels without prop drilling

---

## 2. Anatomy of a Single File Component (SFC)

Let's dissect the \`.vue\` file structure in detail.

### 2.1 The Three Pillars

\`\`\`html
<script setup>
  // 🧠 LOGIC: JavaScript, imports, reactive state
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <!-- 👁️ STRUCTURE: HTML, directives, component usage -->
  <button @click="count++">{{ count }}</button>
</template>

<style scoped>
  /* 🎨 PRESENTATION: CSS, scoped to this component */
  button {
    background: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
  }
</style>
\`\`\`

### 2.2 Script Block: The Brain

The \`<script setup>\` is a special compile-time syntax sugar for using Composition API inside Single File Components.

**Key features**:
- Top-level variables are automatically exposed to the template (no need to \`return\`)
- Top-level \`await\` is supported (async setup)
- Better runtime performance (fewer allocations)
- Better IDE type inference

**Alternative (Options API)**:
\`\`\`javascript
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}
\`\`\`

We will focus on \`<script setup>\` as it's the modern, recommended approach.

### 2.3 Template Block: The Face

The \`<template>\` contains **declarative markup**. It must have a single root element (in Vue 2) or can have multiple roots (Vue 3 Fragments).

**Vue 2** (single root):
\`\`\`html
<template>
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
</template>
\`\`\`

**Vue 3** (fragments):
\`\`\`html
<template>
  <h1>Title</h1>
  <p>Content</p>
</template>
\`\`\`

### 2.4 Style Block: The Attire

The \`<style scoped>\` ensures CSS only applies to THIS component. Vue adds a unique attribute (like \`data-v-f3f3eg9\`) to elements and prefixes your CSS selectors.

**Without scoped**:
\`\`\`css
button { color: red; }  /* Affects ALL buttons in app */
\`\`\`

**With scoped**:
\`\`\`css
button { color: red; }  /* Only affects buttons in THIS component */
\`\`\`

Compiled output:
\`\`\`css
button[data-v-f3f3eg9] { color: red; }
\`\`\`

---

## 3. Component Registration

To use a component, you must **register** it. There are two methods: **Local** and **Global**.

### 3.1 Local Registration (Recommended)

Import the component and use it directly in your template. This is the default with \`<script setup>\`.

**ParentComponent.vue**:
\`\`\`html
<script setup>
  import ChildComponent from './ChildComponent.vue'
</script>

<template>
  <ChildComponent />
</template>
\`\`\`

**Pros**:
- Tree-shaking friendly: unused components are removed in production builds
- Clear dependencies: you can see exactly what components are used
- Better performance: smaller bundle size

**Cons**:
- Need to import in every file where you use it

### 3.2 Global Registration (Use Sparingly)

Register the component globally so it's available everywhere without importing.

**main.js**:
\`\`\`javascript
import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)
app.component('BaseButton', BaseButton)  // Global registration
app.mount('#app')
\`\`\`

Now you can use \`<BaseButton>\` anywhere without importing.

**When to use global registration**:
- **Base components** used everywhere (BaseButton, BaseInput, BaseCard)
- **Third-party UI libraries** (Element Plus, Vuetify)

**Cons**:
- ALL globally registered components are included in the bundle, even if unused
- Hard to track dependencies

---

## 4. Component Naming Conventions

Vue is flexible with naming, but following conventions prevents bugs.

### 4.1 PascalCase vs kebab-case

**In JavaScript (import/export)**:
\`\`\`javascript
import UserProfile from './UserProfile.vue'  // PascalCase
\`\`\`

**In Templates (both work)**:
\`\`\`html
<!-- PascalCase (Recommended) -->
<UserProfile />

<!-- kebab-case (Also valid) -->
<user-profile></user-profile>
\`\`\`

**Best Practice**: Use **PascalCase** in templates for custom components to distinguish them from native HTML elements.

### 4.2 Multi-Word Component Names

**Avoid single-word names** (they might conflict with native HTML elements):
\`\`\`javascript
// ❌ Bad
<Item />
<Header />
<Button />

// ✅ Good
<TodoItem />
<PageHeader />
<BaseButton />
\`\`\`

### 4.3 Base Component Naming

Prefix generic, reusable components with \`Base\`, \`App\`, or \`V\`:
\`\`\`javascript
BaseButton.vue
BaseInput.vue
BaseCard.vue
\`\`\`

This makes it clear these are foundation components.

---

## 5. Component Communication Patterns

Components need to talk to each other. Vue provides several mechanisms.

### 5.1 Parent → Child: Props (Covered in next Deep Dive)

Data flows **down** via props.
\`\`\`html
<ChildComponent message="Hello" />
\`\`\`

### 5.2 Child → Parent: Events (Covered in Deep Dive 3)

Events flow **up** via \`$emit\`.
\`\`\`javascript
emit('update', newValue)
\`\`\`

### 5.3 Provide / Inject: Ancestor → Descendant

Skip intermediate components (avoid prop drilling).
\`\`\`javascript
// Grandparent
provide('theme', 'dark')

// Grandchild
const theme = inject('theme')  // 'dark'
\`\`\`

### 5.4 Global State: Pinia/Vuex

For truly global state (user authentication, shopping cart), use a state management library.

---

## 6. Component Lifecycle

Components have a **lifecycle**: they are created, mounted, updated, and destroyed.

### 6.1 Lifecycle Hooks (Composition API)

\`\`\`javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component is now in the DOM')
  // Fetch data, start timers, add event listeners
})

onUpdated(() => {
  console.log('Component re-rendered due to reactive change')
})

onUnmounted(() => {
  console.log('Component is about to be destroyed')
  // Cleanup: clear timers, remove listeners
})
\`\`\`

### 6.2 Lifecycle Sequence

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Vue
    participant Component
    
    User->>Vue: Create App
    Vue->>Component: setup() / <script setup>
    Vue->>Component: onBeforeMount()
    Vue->>Component: Render Template
    Vue->>Component: onMounted() ✅
    Note right of Component: Component is live
    
    User->>Component: Interact (change data)
    Component->>Vue: Reactive update detected
    Vue->>Component: onBeforeUpdate()
    Vue->>Component: Re-render
    Vue->>Component: onUpdated()
    
    User->>Vue: Navigate away
    Vue->>Component: onBeforeUnmount()
    Vue->>Component: onUnmounted() 🗑️
\`\`\`

---

## 7. Dynamic Components

Switch between components dynamically using \`<component :is="...">>\`.

\`\`\`html
<script setup>
  import { ref } from 'vue'
  import HomeView from './HomeView.vue'
  import AboutView from './AboutView.vue'
  
  const currentView = ref('HomeView')
  const components = { HomeView, AboutView }
</script>

<template>
  <button @click="currentView = 'HomeView'">Home</button>
  <button @click="currentView = 'AboutView'">About</button>
  
  <component :is="components[currentView]" />
</template>
\`\`\`

### 7.1 Keep-Alive

By default, dynamic components are destroyed when switched. Use \`<keep-alive>\` to cache them:

\`\`\`html
<keep-alive>
  <component :is="currentView" />
</keep-alive>
\`\`\`

---

## 8. Common Pitfalls

### 8.1 Mutating Props

**Never mutate props** inside a child component.
\`\`\`javascript
// ❌ Bad
props.user.name = 'New Name'  // Mutates parent data

// ✅ Good
const localUser = ref({ ...props.user })
localUser.value.name = 'New Name'  // Emit event to parent instead
\`\`\`

### 8.2 Forgetting to Import

\`\`\`javascript
// ❌ Error: Component not registered
<template>
  <MyComponent />
</template>

// ✅ Fix
<script setup>
  import MyComponent from './MyComponent.vue'
</script>
\`\`\`

### 8.3 Incorrect Component Names

\`\`\`html
<!-- ❌ HTML5 conflict -->
<header></header>

<!-- ✅ Multi-word -->
<AppHeader></AppHeader>
\`\`\`

---

## 9. Best Practices

1. **Keep Components Small**: A component should do ONE thing well. If it's >300 lines, consider splitting.
2. **Use PascalCase**: For component names in templates.
3. **Prefer Local Registration**: Unless the component is truly used everywhere.
4. **Organize by Feature**: Not by type.
   - ✅ \`features/auth/LoginForm.vue\`
   - ❌ \`components/forms/LoginForm.vue\`
5. **Extract Reusable Logic**: Use Composables (\`useAuth.js\`, \`useFetch.js\`)

---

## 10. Summary

Components are the heart of Vue. They:
- Encapsulate HTML, CSS, and JS
- Form a tree structure
- Communicate via Props (down) and Events (up)
- Have a lifecycle (created → mounted → updated → unmounted)
- Can be registered locally (recommended) or globally

Master components, and you master Vue. In the next Deep Dive, we'll explore **Props** — the mechanism for passing data down the component tree.
    `
};
