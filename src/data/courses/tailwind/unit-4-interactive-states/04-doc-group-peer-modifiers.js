import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4GroupPeerModifiers = {
  id: 'tailwind-u4-doc-4-group-peer',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Group & Peer Modifiers Deep Dive',
  duration: '10 min read',
  content: `
# Group & Peer Modifiers Deep Dive

## Understanding Group Modifier

The **group** modifier lets you style child elements based on parent state.

### Basic Group Usage

\`\`\`html
<div class="group">
  <img class="group-hover:scale-110 transition">
  <h3 class="group-hover:text-blue-600">Title</h3>
  <p class="group-hover:text-gray-900">Description</p>
</div>
\`\`\`

When you hover over the parent \`div\`, all children with \`group-hover:\` classes will be styled.

---

## Group States

All interactive states work with group:

\`\`\`html
<div class="group">
  <div class="group-hover:visible">Hover</div>
  <div class="group-focus:visible">Focus</div>
  <div class="group-active:visible">Active</div>
</div>
\`\`\`

---

## Named Groups

When you have nested groups, use named groups to target specific parents:

\`\`\`html
<div class="group/card">
  <div class="group/header">
    <h3 class="group-hover/card:text-blue-600">Card Title</h3>
    <span class="group-hover/header:rotate-180">▼</span>
  </div>
  <p class="group-hover/card:text-gray-900">Card description</p>
</div>
\`\`\`

**Naming convention:** \`group/{name}\` for parent, \`group-hover/{name}:\` for children

---

## Complex Group Example

\`\`\`html
<div class="group relative overflow-hidden rounded-lg cursor-pointer">
  <!-- Image that zooms on group hover -->
  <img class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
       src="...">
  
  <!-- Overlay that fades in -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    
    <!-- Content that slides up -->
    <div class="absolute bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h3 class="text-white text-2xl font-bold mb-2">
        Project Title
      </h3>
      <p class="text-white/90 mb-4">
        Description appears on hover
      </p>
      <button class="bg-white text-gray-900 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity delay-100">
        View Project
      </button>
    </div>
  </div>
</div>
\`\`\`

---

## Understanding Peer Modifier

The **peer** modifier lets you style an element based on a **sibling's state**.

### Basic Peer Usage

\`\`\`html
<input type="checkbox" class="peer" id="newsletter">
<label for="newsletter" class="peer-checked:text-blue-600 peer-checked:font-bold">
  Subscribe to newsletter
</label>
\`\`\`

---

## Peer for Form Validation

Perfect for showing/hiding validation messages:

\`\`\`html
<div>
  <input type="email" 
         class="peer w-full px-4 py-2 border rounded-lg" 
         placeholder="Email"
         required>
  
  <!-- Error message (hidden by default, shown when peer invalid) -->
  <p class="mt-1 text-sm text-red-600 invisible peer-invalid:visible">
    Please enter a valid email address
  </p>
</div>
\`\`\`

---

## Named Peers

Similar to named groups, you can name peers:

\`\`\`html
<input type="checkbox" class="peer/draft" checked>
<input type="checkbox" class="peer/published">

<div class="hidden peer-checked/draft:block">Draft mode</div>
<div class="hidden peer-checked/published:block">Published mode</div>
\`\`\`

---

## Peer States

All states work with peer:

| Modifier | When Applied |
|----------|--------------|
| \`peer-checked:\` | When checkbox/radio checked |
| \`peer-focus:\` | When peer has focus |
| \`peer-hover:\` | When peer is hovered |
| \`peer-invalid:\` | When peer fails validation |
| \`peer-valid:\` | When peer passes validation |
| \`peer-disabled:\` | When peer is disabled |
| \`peer-required:\` | When peer is required |

---

## Advanced Peer Example: Toggle

\`\`\`html
<div>
  <!-- Hidden checkbox (peer) -->
  <input type="checkbox" id="toggle" class="peer sr-only">
  
  <!-- Custom toggle button -->
  <label for="toggle" 
         class="relative inline-block w-14 h-8 bg-gray-300 rounded-full cursor-pointer
                peer-checked:bg-blue-600 transition-colors">
    <span class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform
                 peer-checked:translate-x-6"></span>
  </label>
  
  <!-- Status text -->
  <span class="ml-3">
    <span class="peer-checked:hidden">Off</span>
    <span class="hidden peer-checked:inline">On</span>
  </span>
</div>
\`\`\`

---

## Combining Group and Peer

You can combine both for powerful interactions:

\`\`\`html
<div class="group">
  <input type="checkbox" class="peer">
  <div class="peer-checked:bg-blue-100 group-hover:shadow-lg">
    Combined group and peer effects
  </div>
</div>
\`\`\`

---

## Real-World: Accordion

\`\`\`html
<div class="border rounded-lg">
  <!-- Accordion header -->
  <div class="group p-4 cursor-pointer hover:bg-gray-50">
    <input type="checkbox" class="peer sr-only" id="acc1">
    <label for="acc1" class="flex items-center justify-between cursor-pointer">
      <h3 class="font-semibold">Section 1</h3>
      <svg class="w-5 h-5 transition-transform peer-checked:rotate-180">
        <!-- Arrow icon -->
      </svg>
    </label>
  </div>
  
  <!-- Accordion content (hidden by default) -->
  <div class="hidden peer-checked:block p-4 border-t">
    <p>Accordion content goes here</p>
  </div>
</div>
\`\`\`

---

## Best Practices

> [!TIP]
> **Use group for cards:** Perfect for image galleries, product cards, hover effects

> [!TIP]
> **Use peer for forms:** Ideal for validation feedback, toggles, checkboxes

> [!WARNING]
> **Peer limitations:** Peer only works with siblings that come AFTER the peer element

> [!TIP]
> **Name your groups/peers:** Prevents confusion in complex nested structures

---

## Summary

Group and Peer modifiers enable:
- ✅ Parent-child interactions (group)
- ✅ Sibling-based styling (peer)
- ✅ Complex UI patterns without JavaScript
- ✅ Form validation feedback
- ✅ Interactive components

Master these for powerful, declarative interactions! 🎯
`
};
