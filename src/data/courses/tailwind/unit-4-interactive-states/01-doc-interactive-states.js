import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1InteractiveStates = {
    id: 'tailwind-u4-doc-1-states',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Interactive States Complete Guide',
    duration: '12 min read',
    content: `
# Interactive States Complete Guide

## What are Interactive States?

**Interactive states** style elements based on user interaction: hover, focus, active, etc.

---

## Core Interactive States

### Hover

Triggered when mouse moves over element:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white">
  Hover Me
</button>

<a href="#" class="text-blue-600 hover:underline">
  Hover Link
</a>

<div class="scale-100 hover:scale-110 transition">
  Grows on hover
</div>
\`\`\`

### Focus

Triggered when element receives keyboard focus:

\`\`\`html
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
       placeholder="Focus me">

<button class="focus:outline-none focus:ring-4 focus:ring-blue-300">
  Keyboard Accessible
</button>
\`\`\`

### Active

Triggered while element is being clicked:

\`\`\`html
<button class="bg-blue-500 active:bg-blue-800">
  Click and Hold
</button>
\`\`\`

### Disabled

Style disabled elements:

\`\`\`html
<button disabled class="bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
  Disabled Button
</button>

<input disabled class="disabled:bg-gray-100">
\`\`\`

---

## Advanced State Modifiers

### Focus-Visible

Only show focus styles for keyboard navigation:

\`\`\`html
<button class="focus-visible:ring-4 focus-visible:ring-blue-300">
  Only shows ring for keyboard focus
</button>
\`\`\`

### Focus-Within

Style parent when child has focus:

\`\`\`html
<form class="border-2 border-gray-200 focus-within:border-blue-500">
  <input placeholder="Focus triggers parent border">
</form>
\`\`\`

### Visited

Style visited links:

\`\`\`html
<a href="#" class="text-blue-600 visited:text-purple-600">
  Changes color after visit
</a>
\`\`\`

---

## Group Modifiers

Style children based on parent state:

\`\`\`html
<div class="group hover:bg-gray-100">
  <h3 class="group-hover:text-blue-600">Title</h3>
  <p class="group-hover:text-gray-900">Description</p>
  <button class="group-hover:visible invisible">Hidden until group hover</button>
</div>
\`\`\`

### Named Groups

\`\`\`html
<div class="group/card hover:bg-gray-50">
  <div class="group/header">
    <h3 class="group-hover/card:text-blue-600">Card Title</h3>
    <span class="group-hover/header:rotate-180">▼</span>
  </div>
</div>
\`\`\`

---

## Peer Modifiers

Style element based on sibling state:

\`\`\`html
<input type="checkbox" class="peer" id="terms">
<label for="terms" class="peer-checked:text-blue-600 peer-checked:font-bold">
  I agree to terms
</label>

<!-- Hide/show based on checkbox -->
<div class="hidden peer-checked:block">
  Additional content when checked
</div>
\`\`\`

---

## Combining States

Stack multiple state modifiers:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-4 active:bg-blue-800 disabled:opacity-50">
  Multi-state Button
</button>

<input class="border focus:border-blue-500 focus:ring-2 invalid:border-red-500 invalid:ring-red-200">
\`\`\`

---

## Form States

### Valid/Invalid

\`\`\`html
<input type="email" 
       required
       class="border-gray-300 valid:border-green-500 invalid:border-red-500">
\`\`\`

### Required

\`\`\`html
<input required class="required:border-red-300">
\`\`\`

### Placeholder-Shown

\`\`\`html
<input placeholder="Email" 
       class="placeholder-shown:border-gray-200">
\`\`\`

---

## Real-World Examples

### Interactive Card

\`\`\`html
<div class="group bg-white hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
  <img class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
       src="...">
  <div class="p-6">
    <h3 class="text-xl font-bold group-hover:text-blue-600 transition-colors">
      Card Title
    </h3>
    <p class="text-gray-600">Description text</p>
    <button class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white px-4 py-2 rounded">
      View Details
    </button>
  </div>
</div>
\`\`\`

### Accessible Form Input

\`\`\`html
<div>
  <label class="block mb-2 font-semibold">Email</label>
  <input type="email"
         required
         class="w-full px-4 py-2 border-2 border-gray-300
                focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                invalid:border-red-500 invalid:ring-red-100
                disabled:bg-gray-100 disabled:cursor-not-allowed
                transition-all duration-200">
  <p class="mt-1 text-sm text-red-600 hidden peer-invalid:block">
    Please enter a valid email
  </p>
</div>
\`\`\`

---

## Best Practices

> [!TIP]
> **Always provide feedback:** User interactions should have visual feedback

> [!TIP]
> **Keyboard accessibility:** Use \`focus:\` and \`focus-visible:\` for keyboard users

> [!WARNING]
> **Don't hide focus indicators:** They're crucial for accessibility

> [!TIP]
> **Use transitions:** Smooth state changes feel more polished

---

## Quick Reference

**Core States:**
- \`hover:\` | \`focus:\` | \`active:\` | \`disabled:\` | \`visited:\`

**Advanced:**
- \`focus-visible:\` | \`focus-within:\` | \`placeholder-shown:\`

**Grouping:**
- \`group\` + \`group-hover:\`
- \`peer\` + \`peer-checked:\`

**Form:**
- \`required:\` | \`valid:\` | \`invalid:\`

Master interactive states for engaging UIs! ✨
`
};
