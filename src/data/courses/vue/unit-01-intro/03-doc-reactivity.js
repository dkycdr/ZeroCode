
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc3 = {
    id: 'vue-1-doc-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Reactivity Fundamentals ⚡',
    duration: '30 min read',
    content: `
# Deep Dive: Reactivity Fundamentals ⚡

Reactivity is the magic that makes Vue "tick". When you change a JavaScript object, the DOM updates automatically. In Vue 3, this system was completely rewritten using modern JavaScript **Proxies**.

## 1. The \`ref()\` Function

In the Composition API, the primary way to declare reactive state is the \`ref()\` function.

\`\`\`javascript
import { ref } from 'vue'

const count = ref(0)
\`\`\`

\`ref\` takes an inner value and returns a reactive and mutable **ref object**. This object has a single property \`.value\` that points to the inner value.

### 1.1 Why .value?
This is a comprehensive question. JavaScript primitives (string, number, boolean) are **pass-by-value**.
If you pass a plain number to a function, the function gets a *copy* of that number. It loses connection to the original variable.

\`\`\`javascript
let a = 1
let b = a
b++
console.log(a) // 1. 'a' was not affected.
\`\`\`

To make a primitive "Reactive" (trackable by Vue's reactivity system), we must wrap it in an object. Objects in JavaScript are **pass-by-reference**.

\`\`\`mermaid
graph LR
    A[Primitive: 0] -- Wrapped --> B(Ref Object)
    B -- .value --> A
    C[Component] -- Reads --> B
    B -- Triggers Update --> C
\`\`\`

### 1.2 Usage Rules
*   **In Script**: You **MUST** access \`.value\`.
    \`\`\`javascript
    count.value++
    console.log(count.value)
    \`\`\`
*   **In Template**: Vue automatically "unwraps" top-level refs.
    \`\`\`html
    <!-- No .value needed here -->
    <button>{{ count }}</button>
    \`\`\`

---

## 2. The \`reactive()\` Function

There is another way to declare state: \`reactive()\`. Unlike \`ref\`, which wraps inner values, \`reactive\` makes an object itself reactive.

\`\`\`javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'Dwiky'
  }
})
\`\`\`

### 2.1 Deep Reactivity
\`reactive()\` is deep by default. If you nest objects inside, they are also reactive Proxies.

### 2.2 Limitations of reactive()
1.  **Object Only**: It does not work with primitives (string, number, boolean).
2.  **Replacement Issue**: You cannot replace the entire object, or you break the proxy connection.
    \`\`\`javascript
    let state = reactive({ count: 0 })
    state = reactive({ count: 1 }) // Reference lost!
    \`\`\`
3.  **Destructuring Loss**: If you destructure, you lose reactivity.
    \`\`\`javascript
    let { count } = state
    count++ // 'state.count' does NOT change. Connection broken.
    \`\`\`

### 2.3 Recommendation: Use Ref
Because of the above limitations, the official Vue documentation and community consensus is to **use \`ref()\` by default**. It's more consistent. Even for objects, \`ref({ name: 'Vue' })\` works fine (it calls \`reactive\` internally).

---

## 3. Computed Properties

Often, we need state that depends on other state.
*   FullName depends on FirstName + LastName.
*   FilteredList depends on List + SearchQuery.

We use \`computed()\`.

\`\`\`javascript
import { ref, computed } from 'vue'

const count = ref(1)
const double = computed(() => count.value * 2)

console.log(double.value) // 2
count.value++
console.log(double.value) // 4
\`\`\`

### 3.1 Caching
A computed property is **cached**. It only re-evaluates when its dependencies (\`count\`) change.
If you use a simple function instead:
\`\`\`javascript
function getDouble() { return count.value * 2 }
\`\`\`
This function would run *every single time* the component re-renders. \`computed\` is a massive performance optimization for expensive operations (like filtering a list of 10,000 items).

---

## 4. Watchers

Sometimes we need to perform "side effects" when data changes—like fetching data from an API when ID changes, or saving to localStorage.

We use \`watch()\`.

\`\`\`javascript
import { ref, watch } from 'vue'

const question = ref('')

watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    getAnswer()
  }
})
\`\`\`

### 4.1 Watch vs Computed
*   **Computed**: Use when you want to calculate a **new value** from existing data. (Synchronous, Pure).
*   **Watch**: Use when you want to **do something** (API call, DOM mutation, logging) when data changes. (Asynchronous, Side Effects).

---

## 5. Reactivity Internals (Proxy)

Vue 2 used \`Object.defineProperty\` (Getters/Setters). This is why Vue 2 had issues detecting new property additions (\`Vue.set\`).

Vue 3 uses ES6 **Proxy**.

\`\`\`javascript
const handler = {
  get(target, prop, receiver) {
    track(target, prop) // Vue records: "Component X is using Property Y"
    return Reflect.get(...arguments)
  },
  set(target, prop, value, receiver) {
    trigger(target, prop) // Vue shouts: "Property Y changed! Update Component X!"
    return Reflect.set(...arguments)
  }
}

const proxy = new Proxy(originalObj, handler)
\`\`\`

This system is transparent to us, but understanding it explains why Vue 3 is so much faster and robust. It can detect property addition, deletion, array index modification, and more.

\`\`\`mermaid
sequenceDiagram
    participant Component
    participant Proxy
    participant Target
    
    Component->>Proxy: Read Property
    Proxy->>Target: Reflect.get()
    Proxy-->>Component: Return Value
    Note right of Proxy: TRACK (Record Dependency)
    
    Component->>Proxy: Write Property
    Proxy->>Target: Reflect.set()
    Note right of Proxy: TRIGGER (Notify Dependents)
    Proxy-->>Component: Success
\`\`\`
    `
};
