
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueDoc6 = {
    id: 'vue-2-doc-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Props - Data Flowing Down 💧',
    duration: '30 min read',
    content: `
# Deep Dive: Props - Data Flowing Down 💧

> "Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance." — Vue Documentation

## 1. Introduction: The Waterfall Model

In Vue's component architecture, **data flows downward** like a waterfall. Parent components pass data to child components via **props** (short for "properties"). This is the **One-Way Data Flow** principle.

### 1.1 Why One-Way Data Flow?

Imagine if children could modify parent data directly. With 50 components, tracking down which component changed what would be a nightmare. One-way flow ensures:

1. **Predictability**: Data changes originate from a single source (the parent)
2. **Debugging**: Easier to trace data mutations
3. **Maintainability**: Clear data flow hierarchy

### 1.2 The Waterfall Diagram

\`\`\`mermaid
graph TD
    Parent["🏔️ Parent Component<br/>data: { user, theme, settings }"]
    
    Parent -->|"prop: user"| Child1["👤 UserProfile<br/>displays user.name"]
    Parent -->|"prop: theme"| Child2["🎨 ThemeToggle<br/>displays current theme"]
    Parent -->|"prop: settings"| Child3["⚙️ Settings<br/>displays settings.lang"]
    
    Child1 -->|"prop: user.avatar"| GrandChild1["🖼️ Avatar<br/>displays image"]
    Child1 -->|"prop: user.role"| GrandChild2["🏷️ Badge<br/>displays role"]
    
    style Parent fill:#4fc08d,stroke:#333,stroke-width:3px,color:#fff
    style Child1 fill:#42b983,stroke:#333,stroke-width:2px
    style Child2 fill:#42b983,stroke:#333,stroke-width:2px
    style Child3 fill:#42b983,stroke:#333,stroke-width:2px
    style GrandChild1 fill:#35495e,stroke:#333,stroke-width:1px,color:#fff
    style GrandChild2 fill:#35495e,stroke:#333,stroke-width:1px,color:#fff
\`\`\`

Data cascades from the top (parent) to the bottom (children and grandchildren).

---

## 2. Defining Props: Array vs Object Syntax

There are two ways to define props in a component.

### 2.1 Array Syntax (Quick & Dirty)

Simple string array of prop names.

\`\`\`javascript
// ChildComponent.vue
<script setup>
const props = defineProps(['title', 'count', 'isActive'])
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Count: {{ count }}</p>
  <p>Active: {{ isActive }}</p>
</template>
\`\`\`

**Pros**: Fast, minimal code  
**Cons**: No type checking, no validation, no documentation

**Use when**: Prototyping or for trivial props

### 2.2 Object Syntax (Production-Ready)

Detailed prop definitions with types, defaults, and validators.

\`\`\`javascript
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object,
    default: () => ({ name: 'Guest' })  // Factory function for objects/arrays
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>
\`\`\`

**Props**:
- Type safety (runtime warnings if wrong type)
- Self-documenting code
- Default values
- Custom validation

**Use when**: Production code, shared components, team projects

---

## 3. Prop Types

Vue supports all JavaScript native types and custom constructors.

### 3.1 Native Types

\`\`\`javascript
defineProps({
  // Primitives
  title: String,
  count: Number,
  isActive: Boolean,
  
  // Complex types
  user: Object,
  tags: Array,
  callback: Function,
  
  // Special
  timestamp: Date,
  pattern: RegExp,
  data: Symbol
})
\`\`\`

### 3.2 Multiple Types

A prop can accept multiple types using an array.

\`\`\`javascript
defineProps({
  id: [String, Number],  // Can be '123' or 123
  content: [String, Object]  // Can be text or rich content object
})
\`\`\`

### 3.3 Custom Constructor Types

You can use custom class constructors.

\`\`\`javascript
class User {
  constructor(name, role) {
    this.name = name
    this.role = role
  }
}

defineProps({
  user: User  // Must be an instance of User class
})
\`\`\`

---

## 4. Prop Validation

### 4.1 Required Props

Force parent to provide a prop.

\`\`\`javascript
defineProps({
  username: {
    type: String,
    required: true  // ⚠️ Console warning if missing
  }
})
\`\`\`

### 4.2 Default Values

Provide fallback values if prop is not passed.

\`\`\`javascript
defineProps({
  theme: {
    type: String,
    default: 'dark'
  },
  count: {
    type: Number,
    default: 0
  }
})
\`\`\`

**CRITICAL**: For **Object** and **Array** defaults, use a **factory function**:

\`\`\`javascript
// ❌ WRONG (all instances share the same object)
user: {
  type: Object,
  default: { name: 'Guest' }
}

// ✅ CORRECT (each instance gets a new object)
user: {
  type: Object,
  default: () => ({ name: 'Guest' })
}
\`\`\`

### 4.3 Custom Validators

Add custom validation logic.

\`\`\`javascript
defineProps({
  status: {
    type: String,
    validator: (value) => {
      return ['pending', 'active', 'completed'].includes(value)
    }
  },
  age: {
    type: Number,
    validator: (value) => value >= 0 && value <= 120
  }
})
\`\`\`

If validation fails, Vue shows a **console warning** (in development mode only).

---

## 5. Passing Props to Child Components

### 5.1 Static Props

Hardcoded values.

\`\`\`html
<UserCard 
  name="Alice"
  role="Admin"
  :age="30"
  :is-active="true"
/>
\`\`\`

**Note**: Use \`:prop-name\` (v-bind) for non-string values (numbers, booleans, objects).

### 5.2 Dynamic Props

Bind to parent's reactive data.

\`\`\`html
<script setup>
import { ref } from 'vue'
const user = ref({ name: 'Bob', role: 'User', age: 25 })
</script>

<template>
  <UserCard 
    :name="user.name"
    :role="user.role"
    :age="user.age"
  />
</template>
\`\`\`

### 5.3 Passing All Properties (v-bind Object)

Shortcut to pass all object properties as props.

\`\`\`html
<UserCard v-bind="user" />

<!-- Equivalent to: -->
<UserCard 
  :name="user.name"
  :role="user.role"
  :age="user.age"
/>
\`\`\`

---

## 6. One-Way Data Flow: The Golden Rule

**Rule**: Props are **read-only** in the child component. Never mutate them.

### 6.1 The Anti-Pattern (Don't Do This)

\`\`\`javascript
// ❌ BAD: Mutating prop directly
<script setup>
const props = defineProps(['count'])

function increment() {
  props.count++  // ⚠️ ERROR: Mutating a prop directly
}
</script>
\`\`\`

**Why is this bad?**
- Breaks the unidirectional data flow
- Parent's data is modified unexpectedly
- Hard to debug (where did the mutation happen?)

### 6.2 Solution 1: Local Copy

Create a local reactive copy of the prop.

\`\`\`javascript
<script setup>
import { ref } from 'vue'

const props = defineProps(['initialCount'])
const count = ref(props.initialCount)  // Local copy

function increment() {
  count.value++  // ✅ OK: Mutating local state
}
</script>
\`\`\`

**Use when**: Child needs its own independent state initialized from a prop.

### 6.3 Solution 2: Computed Property

Transform the prop value without storing it.

\`\`\`javascript
<script setup>
import { computed } from 'vue'

const props = defineProps(['price'])
const priceWithTax = computed(() => props.price * 1.2)
</script>
\`\`\`

**Use when**: Deriving a value from a prop without mutation.

### 6.3 Solution 3: Emit Event to Parent

Ask the parent to change the data.

\`\`\`javascript
<script setup>
const props = defineProps(['count'])
const emit = defineEmits(['update:count'])

function increment() {
  emit('update:count', props.count + 1)  // ✅ Ask parent to update
}
</script>
\`\`\`

**Use when**: Child needs to request a change in parent's data (covered in Deep Dive 3).

---

## 7. Prop Casing Conventions

### 7.1 camelCase in JavaScript

In JavaScript (props definition), use **camelCase**:
\`\`\`javascript
defineProps({
  userName: String,
  isActive: Boolean
})
\`\`\`

### 7.2 kebab-case in HTML Templates

In HTML templates, use **kebab-case**:
\`\`\`html
<UserCard user-name="Alice" :is-active="true" />
\`\`\`

Vue automatically converts between them. Both work, but this is the convention.

---

## 8. Boolean Props

Boolean props have special behavior.

### 8.1 Presence = True

If the prop is present without a value, it's treated as \`true\`.

\`\`\`html
<!-- These are equivalent -->
<MyComponent is-active />
<MyComponent :is-active="true" />
\`\`\`

### 8.2 Absence = False

If the prop is not present, it defaults to \`false\` (if no default is set).

\`\`\`html
<MyComponent />  <!-- isActive is undefined or false -->
\`\`\`

---

## 9. Non-Prop Attributes (Fallthrough)

What happens if you pass an attribute that's not declared as a prop?

### 9.1 Default Behavior: Fallthrough

Non-prop attributes are automatically added to the root element.

**Parent**:
\`\`\`html
<MyButton class="btn-primary" data-id="123" />
\`\`\`

**Child (MyButton.vue)**:
\`\`\`html
<template>
  <button>Click Me</button>
</template>
\`\`\`

**Rendered**:
\`\`\`html
<button class="btn-primary" data-id="123">Click Me</button>
\`\`\`

### 9.2 Disabling Fallthrough

\`\`\`javascript
<script setup>
defineOptions({
  inheritAttrs: false
})
</script>
\`\`\`

Now you can manually apply attributes using \`$attrs\`:
\`\`\`html
<template>
  <div>
    <button v-bind="$attrs">Click Me</button>
  </div>
</template>
\`\`\`

---

## 10. TypeScript Integration

For TypeScript users, use generic \`defineProps<>()\`:

\`\`\`typescript
<script setup lang="ts">
interface Props {
  title: string
  count?: number  // Optional
  user: {
    name: string
    role: 'admin' | 'user'  // Union type
  }
}

const props = defineProps<Props>()
</script>
\`\`\`

With defaults:
\`\`\`typescript
const props = withDefaults(defineProps<Props>(), {
  count: 0,
  user: () => ({ name: 'Guest', role: 'user' })
})
\`\`\`

---

## 11. Common Pitfalls

### 11.1 Mutating Object/Array Props

\`\`\`javascript
// ❌ BAD: Mutating nested property
props.user.name = 'New Name'  // Still mutating parent data!

// ✅ GOOD: Emit event or use local copy
const localUser = ref({ ...props.user })
localUser.value.name = 'New Name'
\`\`\`

### 11.2 Forgetting v-bind for Dynamic Values

\`\`\`html
<!-- ❌ BAD: Passes string "count" -->
<MyComponent count="count" />

<!-- ✅ GOOD: Passes number value -->
<MyComponent :count="count" />
\`\`\`

### 11.3 Using Reserved Names

Avoid prop names that conflict with Vue internals: \`key\`, \`ref\`, \`is\`.

---

## 12. Best Practices

1. **Always validate props** in production components (use Object syntax)
2. **Use TypeScript** for compile-time type safety
3. **Never mutate props** — use local state or emit events
4. **Provide defaults** for optional props
5. **Use camelCase** in JS, **kebab-case** in templates
6. **Document complex props** with comments or JSDoc

---

## 13. Summary

Props are the **primary mechanism** for parent-to-child communication:
- Defined with \`defineProps()\`
- Can be validated with types, defaults, and custom validators
- Follow **One-Way Data Flow** (read-only in child)
- Use \`v-bind\` or \`:\` to pass dynamic values
- Never mutate props — emit events instead

In the next Deep Dive, we'll explore **Events** — the mechanism for children to communicate back to parents.
    `
};
