
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc1 = {
  id: 'vue-1-doc-1',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: The Progressive Framework 🖖',
  duration: '25 min read',
  content: `
# Deep Dive: The Progressive Framework 🖖

> "Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale." — Evan You

## 1. Introduction: The Vue Philosophy

Vue (pronounced /vjuː/, like **view**) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a decorative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

### 1.1 The "Progressive" Concept
Unlike other monolithic frameworks that demand you buy into their entire stack (Router, State Management, CLI, Build Tools) from day one, Vue is designed to be **incrementally adoptable**. This is what we call the "Progressive Framework" concept. You can use as little or as much of Vue as you need.

#### The Scale of Adoption
1.  **Enhancement**: Drop Vue into a single HTML file via CDN to add some interactivity (like jQuery replacement).
2.  **Widget**: Build a single component (e.g., a complicated date picker or form) and mount it into a legacy app (Rails, Laravel, Django).
3.  **SPA**: typically utilizing standard build tools (Vite/Webpack) for a full Single Page Application experience.
4.  **Full Stack**: Server-Side Rendering (SSR) with Nuxt.js for SEO and performance.

### 1.2 Brief History
*   **2013**: Evan You starts prototyping Vue while working at Google (using AngularJs). He wanted the data binding of Angular without the heavy opinionated structure.
*   **2014**: Vue 0.x released.
*   **2015**: Vue 1.0 released (The "evangelism" phase).
*   **2016**: Vue 2.0 released. Introduced Virtual DOM and became extremely popular.
*   **2020**: Vue 3.0 released ("One Piece"). Written in TypeScript, introduced Composition API, Proxy-based reactivity, and better tree-shaking.

---

## 2. Core Concepts: MVVM Pattern

Vue is inspired by the **MVVM** (Model-View-ViewModel) architectural pattern. While not strictly MVVM, it follows the core separation of concerns.

### 2.1 The Model (Data)
This is your raw JavaScript data. In accessing API, this is the JSON you get back. It is "truth". It has no idea about the UI.
\`\`\`javascript
const user = { name: 'Dwiky', role: 'admin' }
\`\`\`

### 2.2 The View (DOM)
This is what the user sees. The HTML. In Vue, this is your template.
\`\`\`html
<h1>{{ user.name }}</h1>
\`\`\`

### 2.3 The ViewModel (Vue Instance)
This is the magic glue. The \`Vue\` instance acts as the ViewModel.
*   It **observes** the Model. When Model changes, ViewModel notices.
*   It **updates** the View. ViewModel touches the DOM to reflect the Model.
*   It **listens** to the View. When user types in input, ViewModel updates the Model.


This **Two-Way Binding** (or One-Way Data Flow with events) is the heart of declarative UI. You don't update the DOM manually (bye bye \`document.querySelector\`). You update the State, and the View reacts.

\`\`\`mermaid
graph TD
    Model[Model JSON] <-->|Two-Way Binding| VM(ViewModel Vue)
    VM <-->|DOM Listeners/Directives| View[View HTML]
    subgraph "Vue Instance"
    VM
    end
\`\`\`

---

## 3. Comparison with Other Frameworks

To understand strictly where Vue sits, we must look at its neighbors.

### 3.1 Vue vs. React
*   **Similarity**: Both use a Virtual DOM. Both are reactive, component-based, and have companion libraries for routing/state.
*   **Templating**:
    *   **React**: Uses JSX. "It's just JavaScript". HTML-in-JS. Powerful but requires JS knowledge for loops/ifs.
    *   **Vue**: Uses Templates. "It's just HTML". Use directives (\`v-if\`, \`v-for\`). Easier for designers to parse.
*   **Reactivity**:
    *   **React**: Immutability. \`useState\`, \`useEffect\`. You manually declare dependencies. React re-renders the *entire* component tree unless you optimize (memo).
    *   **Vue**: Mutability (proxies). Fine-grained dependency tracking. Vue knows *exactly* which node needs to update using dependency tracking. No manual dependency arrays.

### 3.2 Vue vs. Angular
*   **Similarity**: Two-way binding, directives, structural similarities.
*   **Complexity**:
    *   **Angular**: A full-blown platform. Includes HTTP client, strict TS enforcement, Dependency Injection system. High learning curve. TypeScript is mandatory.
    *   **Vue**: Lean core. DI is minimal (Provide/Inject). TS is optional (but recommended in Vue 3). Lower barrier to entry.

---

## 4. Single File Components (SFC)

Vue's distinctive feature is the \`.vue\` file. It encapsulates the HTML, JavaScript, and CSS of a component in a single file.

\`\`\`html
<script setup>
  // Logic here
  import { ref } from 'vue'
  const greeting = ref('Hello World')
</script>

<template>
  <!-- Structure here -->
  <div class="card">{{ greeting }}</div>
</template>

<style scoped>
  /* Style here */
  .card { color: red; }
</style>
\`\`\`

### 4.1 Benefits of SFC
1.  **Colocation**: Related code lives together. No context switching between \`.js\` and \`.css\` files.
2.  **Scoped CSS**: The \`scoped\` attribute automatically handles CSS isolation. No leaking styles.
3.  **Preprocessor Support**: Easily use SCSS, Less, TypeScript, Pug within the blocks.
4.  **IDE Support**: Volar (official Vue extension) provides amazing intellisense for template props mapping to script types.

---

## 5. Composition API vs Options API

This is the biggest topic in Vue 3.

### 5.1 The Options API (Vue 2 Legacy)
We used to export an object:
\`\`\`javascript
export default {
  data() { return { count: 0 } },
  methods: { increment() { this.count++ } },
  mounted() { console.log('Hi') }
}
\`\`\`
*   **Pros**: Organized by type. Easy to read for small components.
*   **Cons**: "Logical concerns" are split. A feature dealing with "Search" might have code in \`data\`, \`methods\`, and \`watch\`. In large components (500+ lines), jumping around is painful. Use \`this\` keyword is confusing.

### 5.2 The Composition API (Vue 3 Modern)
We use function imports:
\`\`\`javascript
import { ref, onMounted } from 'vue'

const count = ref(0)
const increment = () => count.value++
onMounted(() => console.log('Hi'))
\`\`\`
*   **Pros**: Organized by **Logical Concern**. You can group "Search" logic together, or even extract it into a separate \`useSearch.js\` file (Composable). Better TypeScript inference.
*   **Cons**: You have to choose how to organize your code (freedom comes with responsibility).

### 5.3 Script Setup
\`<script setup>\` is purely syntactic sugar for Composition API.
*   Less boilerplate (no \`export default\`, no \`setup()\`, no \`return\`).
*   Variables declared are automatically available in the template.
*   Better runtime performance (template compiles into the same scope).

---

## 6. The Ecosystem

Vue is not just a library; it's a "framework" because the core team maintains the crucial surrounding tools.

*   **Vue Router**: The official router. Deeply integrated. Supports dynamic routing, nested routes, navigation guards.
*   **Pinia**: The official state management library (Successor to Vuex). Extremely light, modular, and type-safe.
*   **Vite**: Created by Evan You. A lightning-fast build tool that serves code via native ES modules during dev. It has revolutionized frontend tooling, even outside Vue.
*   **Vue DevTools**: Browser extension to inspect component tree, state history, and performance events.

## 7. Summary
Vue combines the best of Angular (templating, two-way binding) and React (VDOM, Component model, Functional programming via Composition). It is robust enough for enterprise (Alibaba, GitLab, Nintendo uses it) yet simple enough for a beginner to grasp in a weekend.
    `
};
