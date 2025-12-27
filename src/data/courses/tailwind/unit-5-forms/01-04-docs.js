import { CONTENT_TYPES } from '../../../curriculumStructure.js';

// Doc 1: Form Inputs
export const doc1FormInputs = {
    id: 'tailwind-u5-doc-1-inputs',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Form Inputs Styling',
    duration: '10 min read',
    content: `
# Form Inputs Styling

## Basic Input Styling

\`\`\`html
<input class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
\`\`\`

## Input Variants

**Text Input:**
\`\`\`html
<input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
\`\`\`

**Email Input:**
\`\`\`html
<input type="email" class="w-full px-4 py-2 border rounded-lg invalid:border-red-500 focus:ring-2">
\`\`\`

**Password Input:**
\`\`\`html
<input type="password" class="w-full px-4 py-2 border rounded-lg font-mono">
\`\`\`

## Textarea

\`\`\`html
<textarea rows="4" class="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"></textarea>
\`\`\`

## Select Dropdown

\`\`\`html
<select class="w-full px-4 py-2 border rounded-lg bg-white appearance-none">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
\`\`\`

## Checkbox & Radio

\`\`\`html
<input type="checkbox" class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500">
<input type="radio" class="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500">
\`\`\`

## File Input

\`\`\`html
<input type="file" class="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
\`\`\`
`
};

// Doc 2: Form Validation
export const doc2FormValidation = {
    id: 'tailwind-u5-doc-2-validation',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Form Validation States',
    duration: '8 min read',
    content: `
# Form Validation States

## Validation Classes

**Valid State:**
\`\`\`html
<input type="email" required class="border valid:border-green-500 valid:ring-green-200">
\`\`\`

**Invalid State:**
\`\`\`html
<input type="email" required class="border invalid:border-red-500 invalid:ring-red-200">
\`\`\`

**Required:**
\`\`\`html
<input required class="required:border-red-300">
\`\`\`

## Peer Validation

\`\`\`html
<input type="email" class="peer" required>
<p class="hidden peer-invalid:block text-red-600 text-sm mt-1">
  Invalid email address
</p>
\`\`\`

## Complete Form Example

\`\`\`html
<form class="space-y-4">
  <div>
    <label class="block font-semibold mb-2">Email</label>
    <input type="email" required 
           class="w-full px-4 py-2 border-2 rounded-lg
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                  invalid:border-red-500 invalid:ring-red-100
                  valid:border-green-500 valid:ring-green-100
                  transition-all">
  </div>
  <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800">
    Submit
  </button>
</form>
\`\`\`
`
};

// Doc 3: Form Layout
export const doc3FormLayout = {
    id: 'tailwind-u5-doc-3-layout',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Form Layout Patterns',
    duration: '8 min read',
    content: `
# Form Layout Patterns

## Vertical Form

\`\`\`html
<form class="space-y-4">
  <div>
    <label>Name</label>
    <input class="w-full">
  </div>
  <div>
    <label>Email</label>
    <input class="w-full">
  </div>
</form>
\`\`\`

## Horizontal Form

\`\`\`html
<form class="space-y-4">
  <div class="flex items-center gap-4">
    <label class="w-32">Name</label>
    <input class="flex-1">
  </div>
</form>
\`\`\`

## Grid Form

\`\`\`html
<form class="grid grid-cols-2 gap-4">
  <div>
    <label>First Name</label>
    <input class="w-full">
  </div>
  <div>
    <label>Last Name</label>
    <input class="w-full">
  </div>
</form>
\`\`\`

## Inline Form

\`\`\`html
<form class="flex gap-2">
  <input placeholder="Email" class="flex-1">
  <button class="px-6">Subscribe</button>
</form>
\`\`\`
`
};

// Doc 4: Accessibility
export const doc4Accessibility = {
    id: 'tailwind-u5-doc-4-a11y',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Accessible Forms',
    duration: '8 min read',
    content: `
# Accessible Forms

## Focus Indicators

Always show focus states:
\`\`\`html
<input class="focus:ring-4 focus:ring-blue-300 focus:outline-none">
\`\`\`

## Labels

Always use labels:
\`\`\`html
<label for="email">Email</label>
<input id="email" name="email">
\`\`\`

## ARIA Attributes

\`\`\`html
<input aria-label="Search" aria-required="true" aria-invalid="false">
\`\`\`

## Error Messages

\`\`\`html
<input aria-describedby="email-error">
<p id="email-error" role="alert">Invalid email</p>
\`\`\`
`
};
