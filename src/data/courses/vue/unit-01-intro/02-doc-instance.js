
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc2 = {
  id: 'vue-1-doc-2',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: The Application Instance 🌱',
  duration: '25 min read',
  content: `
# Deep Dive: The Application Instance 🌱

In Vue 3, we don't use the \`new Vue()\` constructor like in Vue 2. Instead, we use a factory function \`createApp\`. This change allows multiple Vue applications to coexist on the same page without sharing global configuration (like plugins or mixins).

## 1. Creating an App

Every Vue application starts by creating a new **Application Instance** with the \`createApp\` function.

\`\`\`javascript
import { createApp } from 'vue'
import App from './App.vue' // The Root Component

const app = createApp(App)
\`\`\`

The \`app\` instance is not mounted yet. It is just an object configuration where we can register "globals" specific to this app.

### 1.1 App Configurations
Before mounting, you can configure the app:

\`\`\`javascript
// Register a global component
app.component('MyBtn', MyBtn)

// Register a plugin (like Router or Pinia)
app.use(router)

// Configure global error handling
app.config.errorHandler = (err) => {
  console.error("Global Catch:", err)
}
\`\`\`

---

## 2. The Root Component

The object we pass into \`createApp\` is in fact a component. Every app requires a "Root Component" that can contain other components as children.

If you are using Single File Components, we typically import the root component from \`App.vue\`. But strictly speaking, a component in Vue is just an object (or function) that defines a template and logic.

\`\`\`javascript
// Inline component example
const app = createApp({
  data() { return { count: 0 } },
  template: '<button @click="count++">{{ count }}</button>'
})
\`\`\`

### 2.1 Mounting
An application instance won't render anything until its \`.mount()\` method is called. It expects a "container" argument, which can be either an actual DOM element or a selector string.

\`\`\`javascript
app.mount('#app')
\`\`\`

The content of the container element will be replaced by the application's rendered template. This is the entry point of the Virtual DOM taking over the Real DOM.

---

## 3. Multiple App Instances

One of the benefits of the \`createApp\` API is that it enables multiple Vue apps on a single page.

Imagine a legacy server-side rendered page (like huge HTML from Django). You want to sprinkle some interactivity.
*   You can mount a \`SidebarApp\` to \`#sidebar\`.
*   You can mount a \`SearchApp\` to \`#search-bar\`.

These two apps are completeley isolated. Global components registered in \`SidebarApp\` are NOT available in \`SearchApp\`. This prevents pollution in large-scale modular architectures (Micro-frontends).

---

## 4. The Component Lifecycle 🧬

This is a critical concept. Every component instance goes through a series of initialization steps when it's created - sets up data observation, compiles the template, mounts the instance to the DOM, and updates the DOM when data changes. Along the way, it runs functions called **lifecycle hooks**, giving users the opportunity to add their own code at specific stages.

### 4.1 Creation Hooks
These run when the component is being initialized.
*   **setup()**: The very first thing to run. Before 'created'.
*   **onBeforeMount**: The template has been compiled, but nothing is in the DOM yet.
*   **onMounted**: The component is now in the DOM. This is where you trigger API calls, access \`refs\` to DOM elements, or integrate 3rd party non-Vue libraries (like D3.js or Leaflet maps).

### 4.2 Update Hooks
These run when reactive data changes.
*   **onBeforeUpdate**: Data changed, but DOM has not patched yet. Good for reading old DOM state (e.g., scroll position).
*   **onUpdated**: DOM has been patched. Avoid changing state here (infinite loop risk).

### 4.3 Destruction Hooks
These run when the component is removed (e.g. \`v-if="false"\` or route change).
*   **onBeforeUnmount**: Component is still fully functional. Good time to clear intervals/timers or remove window event listeners.
*   **onUnmounted**: Everything is gone.

### 4.4 Lifecycle Diagram

\`\`\`mermaid
graph TD
    Init[Init Options] --> Create[Creation Phase]
    Create -->|setup()| Compiled{Has Template?}
    Compiled -->|Yes| Render[Initial Render]
    Render -->|onMounted| Idle(Mounted & Idle)
    Idle -->|Data Change| Update[Re-render & Patch]
    Update -->|onUpdated| Idle
    Idle -->|Unmount| Destroy[Destruction Phase]
    Destroy -->|onUnmounted| Gone((Destroyed))
\`\`\`

---

## 5. Template Compilation vs Runtime

How does Vue take your string template and turn it into DOM?

### 5.1 In-Browser Compilation
If you use the convenient "CDN build" of Vue:
\`\`\`javascript
createApp({ template: '<div>{{ hi }}</div>' })
\`\`\`
Vue includes a "Compiler" that parses this string in the browser, converts it to a render function, and then runs it. This adds ~15kb to the Vue JS size.

### 5.2 Build-Time Compilation (Standard)
When using Vite/Webpack and \`.vue\` files:
The \`<template>\` block is pre-compiled during build time.
The browser receives pure JavaScript render functions.
\`\`\`javascript
// What the browser actually sees (simplified)
import { createVNode, toDisplayString, openBlock, createElementBlock } from "vue"

export function render(_ctx) {
  return (openBlock(), createElementBlock("div", null, toDisplayString(_ctx.hi), 1))
}
\`\`\`
This makes the app **faster** (no parsing overhead at runtime) and **lighter** (no compiler included in the bundle).

---

## 6. Global Properties

In Vue 2, we often attached things to \`Vue.prototype.$axios\`.
In Vue 3, we use \`app.config.globalProperties\`.

\`\`\`javascript
app.config.globalProperties.$http = axios
\`\`\`

However, in the Composition API world, utilizing "Provide/Inject" or simply importing standard ES modules is preferred over polluting the global namespace.
    `
};
