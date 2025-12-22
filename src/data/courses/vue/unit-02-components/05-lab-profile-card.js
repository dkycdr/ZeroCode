
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const vueLab5 = {
    id: 'vue-2-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 5: Profile Card Component (Props)',
    duration: '30 min',
    content: `
# Lab 5: Profile Card Component

Welcome to your first component composition lab! In this exercise, you'll build a reusable **UserProfile** component that accepts data via props and displays it in a styled card format.

## Mission Briefing

Your task is to create a component that can display user profile information. This component will be used multiple times on a "Team" page, each instance showing different team members. This is the essence of **component reusability**.

## The Theory: Props in Practice

Props allow us to create **generic components** that can adapt to different data. Instead of hardcoding "Alice" into a component, we pass it as a prop, making the component reusable for Bob, Charlie, and everyone else.

### The Mental Model

Think of a component as a **template** or **mold**:
- The component defines the **structure** (what data it needs, how to display it)
- Props fill in the **specific details** (actual names, roles, images)

\`\`\`
UserProfile Component = Mold
Props = The clay you pour in
Instances = Individual baked products
\`\`\`

### Props Definition Syntax

\`\`\`javascript
const props = defineProps({
  name: String,      // Type validation
  role: String,
  avatar: String
})
\`\`\`

This tells Vue: "This component expects three string props: name, role, and avatar."

### Using Props in Template

Once defined, props are available directly in the template:
\`\`\`html
<h3>{{ name }}</h3>  <!-- No need for props.name in template -->
\`\`\`

---

## Your Mission

You'll create **two files**:
1. **UserProfile.vue**: The reusable component (child)
2. **App.vue**: The team page that uses the component (parent)

### Requirements

**UserProfile.vue** should:
- Accept three props: \`name\`, \`role\`, \`avatar\`
- Display an avatar image
- Display the user's name in an \`<h3>\`
- Display the user's role in a \`<p>\`
- Have scoped styling for a card layout

**App.vue** should:
- Import the UserProfile component
- Create at least 3 instances with different team members
- Use a responsive layout (flexbox or grid)

---

## Step-by-Step Instructions

### Part 1: Build the Child Component (UserProfile.vue)

1. **Define the props** using \`defineProps\` with Object syntax
2. **Create the template structure**:
   - Root \`<div class="profile-card">\`
   - \`<img>\` for avatar with \`:src="avatar"\` binding
   - \`<h3>\` for name
   - \`<p>\` for role
3. **Add scoped styles** for the card (border, padding, shadow)

### Part 2: Use the Component (App.vue)

4. **Import** the UserProfile component
5. **Create a wrapper** div with a flex or grid layout
6. **Add at least 3 UserProfile instances** with different data:
   - Example: name="Alice", role="Frontend Developer", avatar URL
   - Example: name="Bob", role="Backend Engineer", avatar URL
   - Example: name="Charlie", role="UX Designer", avatar URL

### Part 3: Styling (Optional Enhancement)

7. Add hover effects to the cards
8. Make the layout responsive (stacks on mobile)

---

## Hints & Tips

- **Avatar URLs**: Use placeholder image services like \`https://i.pravatar.cc/150?img=1\` (change the number for different avatars)
- **Props are read-only**: Never do \`props.name = 'New Name'\` in the child
- **Kebab-case in HTML**: When passing props, use \`:user-name="value"\` not \`:userName="value"\`
- **Scoped CSS**: The \`scoped\` attribute ensures your styles only apply to this component

Let's begin building!
    `,
    tasks: [
        {
            id: 1,
            description: 'Define props (name, role, avatar)',
            completed: false,
            regex: /defineProps\(\s*{\s*name:\s*String,\s*role:\s*String,\s*avatar:\s*String\s*}\s*\)/,
            hint: "defineProps({ name: String, role: String, avatar: String })"
        },
        {
            id: 2,
            description: 'Create profile card div wrapper',
            completed: false,
            regex: /<div\s+class=["']profile-card["']\s*>/,
            hint: '<div class="profile-card">'
        },
        {
            id: 3,
            description: 'Display avatar image with dynamic src',
            completed: false,
            regex: /<img\s+[^>]*:src=["']avatar["'][^>]*>/,
            hint: '<img :src="avatar" alt="Profile" />'
        },
        {
            id: 4,
            description: 'Display name in h3 element',
            completed: false,
            regex: /<h3[^>]*>\s*{{\s*name\s*}}\s*<\/h3>/,
            hint: '<h3>{{ name }}</h3>'
        },
        {
            id: 5,
            description: 'Display role in p element',
            completed: false,
            regex: /<p[^>]*>\s*{{\s*role\s*}}\s*<\/p>/,
            hint: '<p>{{ role }}</p>'
        },
        {
            id: 6,
            description: 'Import UserProfile component in App.vue',
            completed: false,
            regex: /import\s+UserProfile\s+from\s+['"]\.\/UserProfile\.vue['"]/,
            hint: "import UserProfile from './UserProfile.vue'"
        },
        {
            id: 7,
            description: 'Use UserProfile component at least once',
            completed: false,
            regex: /<UserProfile\s+[^>]*\/>/,
            hint: '<UserProfile name="Alice" role="Developer" avatar="https://i.pravatar.cc/150?img=1" />'
        }
    ],
    files: [
        {
            name: 'UserProfile.vue',
            language: 'html',
            content: `<script setup>
// TODO: Define props (name, role, avatar)

</script>

<template>
  <!-- TODO: Create profile card structure -->
  <div>
    <!-- TODO: img for avatar -->
    <!-- TODO: h3 for name -->
    <!-- TODO: p for role -->
  </div>
</template>

<style scoped>
.profile-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.profile-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
`
        },
        {
            name: 'App.vue',
            language: 'html',
            content: `<script setup>
// TODO: Import UserProfile component

</script>

<template>
  <div class="team-grid">
    <h1>Our Team</h1>
    
    <!-- TODO: Add UserProfile instances -->
    <!-- Example: <UserProfile name="Alice" role="Frontend Dev" avatar="..." /> -->
    
  </div>
</template>

<style scoped>
.team-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
`
        }
    ]
};
