
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc4 = {
    id: 'vue-1-doc-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Template Syntax 📝',
    duration: '25 min read',
    content: `
# Deep Dive: Template Syntax 📝

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

## 1. Text Interpolation

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):

\`\`\`html
<span>Message: {{ msg }}</span>
\`\`\`

The mustache tag will be replaced with the value of the \`msg\` property from your corresponding component instance. It will also be updated whenever the \`msg\` property changes.

### 1.1 JavaScript Expressions
Vue actually supports the full power of JavaScript expressions inside all data bindings.

\`\`\`html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
\`\`\`

These expressions are evaluated in the context of the current component instance.
**Limitation**: Each binding can only contain **one single expression**. Statements (like \`var a = 1\`) or flow control (\`if (ok)\`) will not work.

---

## 2. Directives

Directives are special attributes with the \`v-\` prefix. Directive attribute values are expected to be a single JavaScript expression (with the exception of \`v-for\`, \`v-on\` and \`v-slot\`).

The job of a directive is to apply side effects to the DOM when the value of its expression changes.

### 2.1 The Big Three
1.  **v-bind**: Unidrectional binding (Data -> DOM). Used for attributes.
    \`\`\`html
    <img v-bind:src="imageSrc" />
    <!-- Shorthand -->
    <img :src="imageSrc" />
    \`\`\`
2.  **v-on**: Event Listeners (DOM -> Data).
    \`\`\`html
    <button v-on:click="doSomething"></button>
    <!-- Shorthand -->
    <button @click="doSomething"></button>
    \`\`\`
3.  **v-model**: Two-way binding (Form Inputs).
    \`\`\`html
    <input v-model="searchText" />
    \`\`\`

\`\`\`mermaid
graph TD
    Data[JS Data] -- :bind --> Attr[DOM Attribute]
    Event[DOM Event] -- @on --> Method[JS Method]
    Input[Input Value] <== v-model ==> Data
\`\`\`

---

## 3. Class and Style Bindings

A common need for data binding is manipulating an element's class list and inline styles. Since \`class\` and \`style\` are attributes, we can use \`v-bind\` to handle them. However, Vue provides special enhancements when \`v-bind\` is used with them.

### 3.1 Object Syntax
We can pass an object to \`:class\` to dynamically toggle classes.

\`\`\`html
<div :class="{ active: isActive, 'text-danger': hasError }"></div>
\`\`\`
If \`isActive\` is truthy, the \`active\` class will be rendered. This pattern is extremely powerful for state-driven styling.

### 3.2 Array Syntax
We can pass an array to \`:class\` to apply a list of classes.

\`\`\`html
<div :class="[activeClass, errorClass]"></div>
\`\`\`

---

## 4. Conditional Rendering

Vue provides directives to render elements conditionally.

### 4.1 v-if vs v-show
This is a classic interview question.

*   **v-if**: "Real" conditional rendering. If the condition is false, the element is **not** in the DOM. It is destroyed and re-created on toggle.
    *   Lazy: If false on initial render, it does nothing.
    *   high toggle cost.
*   **v-show**: The element is **always** rendered and remains in the DOM. It only toggles the CSS \`display\` property.
    *   Initial render cost is higher.
    *   Toggle cost is cheap.

\`\`\`mermaid
graph TD
    Start{Condition?} -- True --> Render[Render Element]
    Start -- False --> Destroy[Remove from DOM]
    style Destroy fill:#f9f,stroke:#333
\`\`\`
*(The above is v-if logic. v-show just adds \`display: none\`)*

---

## 5. List Rendering (v-for)

We can use the \`v-for\` directive to render a list of items based on an array.

\`\`\`html
<li v-for="(item, index) in items" :key="item.id">
  {{ index }} - {{ item.message }}
</li>
\`\`\`

### 5.1 Maintaining State with \`:key\`
When Vue updates a list of elements rendered with \`v-for\`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, Vue will not move the DOM elements to match the order of the items. Instead, it patches each element in-place.

To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique \`key\` attribute for each item. **Always** use keys.

---

## 6. Modifiers

Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way.

### 6.1 Event Modifiers
*   \`.stop\`: Calls \`event.stopPropagation()\`.
*   \`.prevent\`: Calls \`event.preventDefault()\`.
*   \`.self\`: Only trigger if event.target is the element itself.
*   \`.once\`: Trigger at most once.

\`\`\`html
<form @submit.prevent="onSubmit">...</form>
\`\`\`

### 6.2 Key Modifiers
*   \`.enter\`
*   \`.tab\`
*   \`.delete\`
*   \`.esc\`
*   \`.space\`

\`\`\`html
<input @keyup.enter="submit" />
\`\`\`

This declarative approach keeps your methods purely about data logic rather than dealing with DOM event details.
    `
};
