import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Filters = {
    id: 'tailwind-u4-doc-3-filters',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Filters & Effects',
    duration: '8 min read',
    content: `
# Filters & Effects

## Blur Filters

Add blur effects to images and elements:

\`\`\`html
<img class="blur-none" src="...">No blur</img>
<img class="blur-sm" src="...">Small blur (4px)</img>
<img class="blur" src="...">Medium blur (8px)</img>
<img class="blur-md" src="...">Medium blur (12px)</img>
<img class="blur-lg" src="...">Large blur (16px)</img>
<img class="blur-xl" src="...">Extra large (24px)</img>
<img class="blur-2xl" src="...">2XL blur (40px)</img>
<img class="blur-3xl" src="...">3XL blur (64px)</img>

<!-- Remove blur on hover -->
<img class="blur hover:blur-none transition-all duration-300" src="...">
\`\`\`

---

## Brightness

Adjust image/element brightness:

\`\`\`html
<img class="brightness-50" src="...">50% darker</img>
<img class="brightness-75" src="...">25% darker</img>
<img class="brightness-100" src="...">Normal (default)</img>
<img class="brightness-125" src="...">25% brighter</img>
<img class="brightness-150" src="...">50% brighter</img>

<!-- Interactive brightness -->
<img class="brightness-75 hover:brightness-110 transition" src="...">
  Brighten on hover
</img>
\`\`\`

---

## Contrast

\`\`\`html
<img class="contrast-50">Low contrast</img>
<img class="contrast-100">Normal</img>
<img class="contrast-125">High contrast</img>
\`\`\`

---

## Grayscale

Convert to black and white:

\`\`\`html
<img class="grayscale" src="...">Full grayscale</img>
<img class="grayscale-0" src="...">No grayscale (color)</img>

<!-- Color on hover -->
<img class="grayscale hover:grayscale-0 transition duration-500" src="...">
  Gray → Color on hover
</img>
\`\`\`

---

## Hue Rotate

Shift color hue:

\`\`\`html
<img class="hue-rotate-0">No rotation</img>
<img class="hue-rotate-15">15° rotation</img>
<img class="hue-rotate-90">90° rotation</img>
<img class="hue-rotate-180">180° rotation</img>
\`\`\`

---

## Invert

Invert colors:

\`\`\`html
<img class="invert">Fully inverted</img>
<img class="invert-0">Normal</img>
\`\`\`

---

## Saturate

Control color saturation:

\`\`\`html
<img class="saturate-0">Desaturated (grayscale)</img>
<img class="saturate-50">Half saturation</img>
<img class="saturate-100">Normal</img>
<img class="saturate-150">Oversaturated</img>
\`\`\`

---

## Sepia

Apply sepia tone:

\`\`\`html
<img class="sepia">Full sepia</img>
<img class="sepia-0">No sepia</img>
\`\`\`

---

## Drop Shadow

Add drop shadow (different from box-shadow):

\`\`\`html
<img class="drop-shadow-sm">Small shadow</img>
<img class="drop-shadow">Medium shadow</img>
<img class="drop-shadow-lg">Large shadow</img>
<img class="drop-shadow-xl">Extra large</img>
<img class="drop-shadow-2xl">2XL shadow</img>
\`\`\`

---

## Backdrop Blur

Blur background behind element (frosted glass effect):

\`\`\`html
<div class="backdrop-blur-sm bg-white/30">
  Frosted glass effect
</div>

<div class="backdrop-blur-md bg-black/20 text-white p-6">
  Semi-transparent with blur
</div>
\`\`\`

---

## Backdrop Filters

All backdrop variants:

\`\`\`html
<div class="backdrop-brightness-150">Bright background</div>
<div class="backdrop-contrast-125">High contrast background</div>
<div class="backdrop-grayscale">Gray background</div>
<div class="backdrop-invert">Inverted background</div>
<div class="backdrop-saturate-150">Saturated background</div>
<div class="backdrop-sepia">Sepia background</div>
\`\`\`

---

## Opacity

Control element transparency:

\`\`\`html
<div class="opacity-0">Invisible</div>
<div class="opacity-25">25% visible</div>
<div class="opacity-50">50% visible</div>
<div class="opacity-75">75% visible</div>
<div class="opacity-100">Fully visible (default)</div>

<!-- Fade in on hover -->
<div class="opacity-0 hover:opacity-100 transition duration-300">
  Fade in
</div>
\`\`\`

---

## Mix Blend Mode

Control how element blends with background:

\`\`\`html
<div class="mix-blend-normal">Normal</div>
<div class="mix-blend-multiply">Multiply</div>
<div class="mix-blend-screen">Screen</div>
<div class="mix-blend-overlay">Overlay</div>
<div class="mix-blend-darken">Darken</div>
<div class="mix-blend-lighten">Lighten</div>
<div class="mix-blend-color-dodge">Color dodge</div>
<div class="mix-blend-color-burn">Color burn</div>
<div class="mix-blend-difference">Difference</div>
\`\`\`

---

## Real-World Examples

### Image Gallery with Hover Effect

\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <img class="grayscale hover:grayscale-0 hover:scale-105 transition duration-300" src="...">
  <img class="brightness-75 hover:brightness-100 hover:scale-105 transition duration-300" src="...">
  <img class="sepia hover:sepia-0 hover:scale-105 transition duration-300" src="...">
</div>
\`\`\`

### Glass Morphism Card

\`\`\`html
<div class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
  <h3 class="text-white text-2xl font-bold">Glassmorphism</h3>
  <p class="text-white/90 mt-2">Beautiful frosted glass effect</p>
</div>
\`\`\`

---

## Best Practices

> [!TIP]
> **Performance:** Filters can be GPU-intensive. Use sparingly on many elements

> [!TIP]
> **Combine effects:** Mix multiple filters for unique looks

> [!WARNING]
> **Accessibility:** Don't rely on color filters alone to convey information

---

## Summary

Filters enable:
- ✅ Image effects without editing
- ✅ Glassmorphism designs
- ✅ Interactive visual feedback
- ✅ Creative styling possibilities
`
};
