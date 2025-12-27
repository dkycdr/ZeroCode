import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2TransitionsTransforms = {
    id: 'tailwind-u4-doc-2-transitions',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Transitions & Transforms',
    duration: '10 min read',
    content: `
# Transitions & Transforms

## CSS Transitions

Smooth animations between states:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 transition">
  Smooth color change
</button>

<!-- Control duration -->
<div class="transition duration-150">Fast (150ms)</div>
<div class="transition duration-300">Normal (300ms)</div>
<div class="transition duration-700">Slow (700ms)</div>

<!-- Control easing -->
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>

<!-- Control delay -->
<div class="transition delay-150">150ms delay</div>
\`\`\`

## Transform Properties

### Scale

\`\`\`html
<div class="scale-50">50% size</div>
<div class="scale-100 hover:scale-110">Grow on hover</div>
<div class="scale-125">125% size</div>
\`\`\`

### Rotate

\`\`\`html
<div class="rotate-45">45° rotation</div>
<div class="hover:rotate-180 transition">180° on hover</div>
<div class="-rotate-90">-90° rotation</div>
\`\`\`

### Translate

\`\`\`html
<div class="translate-x-4">Move right 16px</div>
<div class="translate-y-8">Move down 32px</div>
<div class="hover:translate-y-2 transition">Lift on hover</div>
\`\`\`

### Skew

\`\`\`html
<div class="skew-x-12">Skew horizontally</div>
<div class="skew-y-6">Skew vertically</div>
\`\`\`

## Combining Transforms

\`\`\`html
<div class="hover:scale-110 hover:rotate-6 hover:-translate-y-1 transition">
  Multi-transform on hover
</div>
\`\`\`

## Real Examples

### Lift Card

\`\`\`html
<div class="hover:shadow-xl hover:-translate-y-2 transition duration-300">
  Lifts on hover
</div>
\`\`\`

### Button Press

\`\`\`html
<button class="active:scale-95 transition">
  Shrinks when clicked
</button>
\`\`\`

### Smooth Everything

\`\`\`html
<div class="transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-lg">
  Smooth all properties
</div>
\`\`\`
`
};

export const doc3Filters = {
    id: 'tailwind-u4-doc-3-filters',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Filters & Effects',
    duration: '8 min read',
    content: `
# Filters & Effects

## Blur

\`\`\`html
<img class="blur-sm" src="...">Small blur</img>
<img class="blur-md" src="...">Medium blur</img>
<img class="blur-lg" src="...">Large blur</img>

<!-- Remove blur on hover -->
<img class="blur hover:blur-none transition" src="...">
\`\`\`

## Brightness

\`\`\`html
<img class="brightness-50" src="...">50% brightness</img>
<img class="brightness-125" src="...">125% brightness</img>
<img class="hover:brightness-110 transition" src="...">Brighten on hover</img>
\`\`\`

## Grayscale

\`\`\`html
<img class="grayscale hover:grayscale-0 transition" src="...">
  Gray → Color on hover
</img>
\`\`\`

## Backdrop Blur

\`\`\`html
<div class="backdrop-blur-sm bg-white/30">
  Frosted glass effect
</div>
\`\`\`

## Opacity

\`\`\`html
<div class="opacity-50">50% opacity</div>
<div class="opacity-0 hover:opacity-100 transition">Fade in</div>
\`\`\`

## Mix Blend Mode

\`\`\`html
<div class="mix-blend-multiply">Multiply blend</div>
<div class="mix-blend-screen">Screen blend</div>
\`\`\`
`
};

export const doc4GroupPeerModifiers = {
    id: 'tailwind-u4-doc-4-group-peer',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Group & Peer Modifiers Deep Dive',
    duration: '10 min read',
    content: `
# Group & Peer Modifiers Deep Dive

## Group Modifier

Style children based on parent state:

\`\`\`html
<div class="group">
  <img class="group-hover:scale-110 transition">
  <h3 class="group-hover:text-blue-600">Title</h3>
  <p class="group-hover:text-gray-900">Description</p>
</div>
\`\`\`

## Named Groups

\`\`\`html
<div class="group/item">
  <div class="group/edit">
    <span class="group-hover/item:text-blue-600">Item</span>
    <button class="invisible group-hover/edit:visible">Edit</button>
  </div>
</div>
\`\`\`

## Peer Modifier

Style based on sibling state:

\`\`\`html
<input type="checkbox" class="peer">
<div class="peer-checked:bg-blue-500">
  Changes when checkbox checked
</div>
\`\`\`

## Form Validation with Peer

\`\`\`html
<input type="email" class="peer" required>
<p class="invisible peer-invalid:visible text-red-600">
Invalid email
</p>
\`\`\`

## Real-World Card Example

\`\`\`html
<div class="group relative overflow-hidden rounded-lg">
  <img class="group-hover:scale-110 transition-transform duration-500">
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
    <div class="absolute bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
      <h3 class="text-white text-2xl font-bold">Card Title</h3>
      <p class="text-white/90 mt-2">Description appears on hover</p>
    </div>
  </div>
</div>
\`\`\`
`
};
