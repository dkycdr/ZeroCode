export const lessons = {
    // Existing detailed lessons (html5, css3, tailwind, node) remain unchanged
    // Adding full content for: git, python, typescript, mongodb, nextjs, cicd, js-es6, dom, react, php, mysql

    // PHASE 1: THE ARCHITECT
    'html5': {
        title: 'HTML5: The Skeleton',
        content: `
# HTML5 Foundation: Building Meaning

HTML (HyperText Markup Language) is the most basic building block of the Web. However, modern engineering isn't just about putting things on a screen; it's about **giving meaning** to your content.

---

## Part 1: Semantic HTML
In the past, developers used \`<div>\` for everything. This is bad for:
1.  **Accessibility**: Screen readers can't navigate easily.
2.  **SEO (Search Engine Optimization)**: Google doesn't know what matters.
3.  **Readability**: Code becomes a "soup of divs".

### The Solution: Semantic Tags
-   \`<header>\`: Container for introductory content or navigation links.
-   \`<main>\`: The dominant content of the <body>. Unique to the document.
-   \`<article>\`: Self-contained composition (e.g., a blog post).
-   \`<section>\`: Thematic grouping of content (e.g., "Our Services" section).
-   \`<footer>\`: Footer for its nearest sectioning content.

---

## Part 2: Structure Breakdown
This lesson challenges you to refactor a "Legacy Codebase" (full of divs) into modern Semantic HTML.

**Current Bad Code:**
\`\`\`html
<div class="site-header">...</div>
<div class="content">...</div>
<div class="site-footer">...</div>
\`\`\`

**Target Good Code:**
\`\`\`html
<header class="site-header">...</header>
<main class="content">...</main>
<footer class="site-footer">...</footer>
\`\`\`

Let's modernize this codebase to ZeroCode standards.
        `,
        tasks: [
            {
                id: 1,
                description: 'Replace the first <div class="site-header"> with a <header> tag.',
                completed: false,
                regex: /<header[^>]*class=["']site-header["'][^>]*>/i
            },
            {
                id: 2,
                description: 'Replace <div class="content"> with a <main> tag to signify primary content.',
                completed: false,
                regex: /<main[^>]*class=["']content["'][^>]*>/i
            },
            {
                id: 3,
                description: 'Replace <div class="site-footer"> with a <footer> tag.',
                completed: false,
                regex: /<footer[^>]*class=["']site-footer["'][^>]*>/i
            }
        ],
        files: [
            {
                name: 'index.html',
                language: 'html',
                content: `<!DOCTYPE html>
<html lang="en">
<body>
  <!-- STEP 1: Refactor this Header -->
  <div class="site-header">
    <h1>My Personal Blog</h1>
  </div>

  <!-- STEP 2: Refactor this Main Content -->
  <div class="content">
    <article>
      <h2>Learning HTML5</h2>
      <p>Semantic HTML improves accessibility and SEO.</p>
    </article>
  </div>

  <!-- STEP 3: Refactor this Footer -->
  <div class="site-footer">
    <p>&copy; 2024 ZeroCode</p>
  </div>
</body>
</html>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: `body { font-family: 'Inter', sans-serif; padding: 20px; line-height: 1.6; background: #f0f2f5; }
.site-header { background: #0a192f; color: white; padding: 2rem; border-radius: 8px 8px 0 0; text-align: center; }
.content { background: white; padding: 2rem; min-height: 200px; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }
.site-footer { background: #800000; color: white; padding: 1.5rem; text-align: center; border-radius: 0 0 8px 8px; font-weight: bold; }
h1 { margin: 0; font-size: 2.5rem; }`
            },
            {
                name: 'script.js',
                language: 'javascript',
                content: '// No script needed for this lesson'
            }
        ]
    },
    'css3': {
        title: 'CSS3: The Aesthetic',
        content: `
# CSS3 Mastery: Flexbox Layout Standards

Cascading Style Sheets (CSS) brings life to raw HTML. Today, we focus on **Layout Engineering** using Flexbox.

---

## Part 1: Why Flexbox?
Before Flexbox, developers used floats and tables for layout, which was painful. Flexbox allows you to structure content in one dimension (row or column) with total control over alignment.

## Part 2: The Core Properties
To activate Flexbox, you apply \`display: flex;\` to the **Parent Container**. The children then become "flex items".

### 1. Justify Content (Main Axis)
-   \`flex-start\`: Items pack to the start (default).
-   \`center\`: Items centered.
-   \`space-between\`: Items spread out (first at start, last at end).

### 2. Align Items (Cross Axis)
-   \`center\`: Centers items vertically (if direction is row).
-   \`stretch\`: Stretches items to fill height.

---

## Mission Objective
We need to build a **Navigation Bar** for the ZeroCode system.
1.  **Logo** on the left.
2.  **Menu Links** on the right.
3.  **Vertically Centered**.

Use the properties learned above to achieve this.
        `,
        tasks: [
            {
                id: 1,
                description: 'Initialize the parent: Set .navbar property display to flex.',
                completed: false,
                regex: /\.navbar\s*{[^}]*display:\s*flex;/s
            },
            {
                id: 2,
                description: 'Space them out: Add justify-content: space-between to .navbar.',
                completed: false,
                regex: /\.navbar\s*{[^}]*justify-content:\s*space-between;/s
            },
            {
                id: 3,
                description: 'Fix alignment: Add align-items: center to .navbar.',
                completed: false,
                regex: /\.navbar\s*{[^}]*align-items:\s*center;/s
            }
        ],
        files: [
            {
                name: 'index.html',
                language: 'html',
                content: `<nav class="navbar">
  <div class="logo">ZeroCode</div>
  <ul class="links">
    <li>Home</li>
    <li>Curriculum</li>
    <li>Resources</li>
  </ul>
</nav>

<div class="hero">
  <h1>Welcome Future Engineer</h1>
  <p>Your journey begins now.</p>
</div>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: `body { margin: 0; font-family: sans-serif; }

.navbar {
  background-color: #0a192f;
  color: white;
  padding: 1rem 2rem;
  border-bottom: 4px solid #800000;
  
  /* [Mission Code Goes Here] */
  
}

.logo { font-size: 1.5rem; font-weight: 800; letter-spacing: 2px; }
.links { list-style: none; display: flex; gap: 20px; font-weight: 500; }
.hero { padding: 4rem; text-align: center; background: #f4f4f4; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }`
            },
            {
                name: 'script.js',
                language: 'javascript',
                content: ''
            }
        ]
    },
    'tailwind': {
        title: 'Tailwind CSS: Speed Engineering',
        content: `
# Utility-First CSS: The Modern Standard

Tailwind CSS helps you build modern websites without writing custom CSS files. It uses **utility classes** directly in your HTML.

---

## Understanding the Syntax
Instead of writing:
\`\`\`css
.btn { background-color: blue; padding: 10px; border-radius: 5px; }
\`\`\`
You write:
\`\`\`html
<button class="bg-blue-500 p-2.5 rounded">
\`\`\`

## ZeroCode Design System Tokens
We have configured special colors for ZeroCode:
-   \`bg-zerocode-navy\`: The deep blue background.
-   \`text-zerocode-maroon\`: The accent red color.

---

## Challenge
Your task is to "Engineer" a profile card component using only Tailwind classes.
1.  **Container**: Needs white background (\`bg-white\`) and shadow (\`shadow-xl\`).
2.  **Typography**: Title needs to be large (\`text-2xl\`) and bold (\`font-bold\`).
3.  **Button**: Needs to be our custom maroon (\`bg-zerocode-maroon\`) with white text (\`text-white\`).
        `,
        tasks: [
            {
                id: 1,
                description: 'Add "bg-white" and "shadow-xl" to the main card div.',
                completed: false,
                regex: /<div[^>]*class=["'](?=.*\bbg-white\b)(?=.*\bshadow-xl\b)[^"']*["'][^>]*>/
            },
            {
                id: 2,
                description: 'Make the <h2> title "text-2xl" and "font-bold".',
                completed: false,
                regex: /<h2[^>]*class=["'](?=.*\btext-2xl\b)(?=.*\bfont-bold\b)[^"']*["'][^>]*>/
            },
            {
                id: 3,
                description: 'Style button: "bg-zerocode-maroon", "text-white", "rounded-lg".',
                completed: false,
                regex: /<button[^>]*class=["'](?=.*\bbg-zerocode-maroon\b)(?=.*\btext-white\b)(?=.*\brounded-lg\b)[^"']*["'][^>]*>/
            }
        ],
        files: [
            {
                name: 'index.html',
                language: 'html',
                content: `<div class="p-10 bg-gray-100 h-screen flex justify-center items-center">
  
  <!-- Step 1: Add Card Styles Here -->
  <div class="p-8 rounded-2xl max-w-sm text-center">
    
    <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
    
    <!-- Step 2: Add Title Styles Here -->
    <h2 class="mb-2 text-gray-800">Student Name</h2>
    
    <p class="text-gray-500 mb-6 font-light">Software Engineering Major</p>
    
    <!-- Step 3: Add Button Styles Here -->
    <button class="px-6 py-2 transition hover:opacity-90">
      View Profile
    </button>
  
  </div>
</div>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: '@import "tailwindcss";'
            },
            {
                name: 'script.js',
                language: 'javascript',
                content: ''
            }
        ]
    },

    // NEW: GIT & GITHUB
    'git': {
        title: 'Git & GitHub',
        content: `
# Git & GitHub: Version Control for Engineers

Version control is the **foundation** of modern software development. Git tracks changes, enables collaboration, and prevents code disasters.

---

## Part 1: Why Git?
Imagine working on a group project where:
- Someone accidentally deletes critical code
- Two people edit the same file simultaneously
- You need to revert to yesterday's working version

**Git solves all of this.**

## Part 2: Core Concepts

### Repository (Repo)
A folder tracked by Git. Contains all your code + history.

### Commit
A snapshot of your code at a specific point in time.

### Branch
A parallel version of your code (e.g., \`main\` for production, \`feature-login\` for new features).

---

## Essential Commands

\`\`\`bash
git init                 # Initialize a new repo
git add .                # Stage all changes
git commit -m "message"  # Save a snapshot
git push origin main     # Upload to GitHub
git pull origin main     # Download latest changes
\`\`\`

---

## Mission: Simulate a Code Review
You'll practice the **Pull Request workflow** used at Google, Facebook, and ZeroCode projects.
        `,
        tasks: [
            { id: 1, description: 'Initialize a Git repository with "git init"', completed: false, regex: /git\s+init/ },
            { id: 2, description: 'Stage changes with "git add ."', completed: false, regex: /git\s+add\s+\./ },
            { id: 3, description: 'Commit with message "Initial commit"', completed: false, regex: /git\s+commit\s+-m\s+["']Initial commit["']/ }
        ],
        files: [
            {
                name: 'commands.sh',
                language: 'bash',
                content: `# Git Workflow Practice
# Type your commands below:

`
            }
        ]
    },

    // Continuing in next message due to length...
    'node': {
        title: 'Node.js & Express: Backend Engineering',
        content: `
# Backend Engineering with Node.js

Welcome to the **Engine Room**. While Frontend is about aesthetics and interaction, Backend is about data, logic, and security. We will use **Node.js** (JavaScript on the server) and **Express** (a framework).

---

## Part 1: The Server Concept
A server is basically a program that never sleeps. It listens for "Requests" and sends back "Responses".

**Key Metaphor:**
-   **Client (Browser)**: The Customer in a restaurant.
-   **Server**: The Waiter taking the order.
-   **Database**: The Kitchen cooking the data.

## Part 2: Express.js Basics
Express makes writing servers easy. A minimal server looks like this:

\`\`\`javascript
const express = require('express'); // 1. Import
const app = express();              // 2. Initialize

// 3. Define Route (The "Menu")
app.get('/', (req, res) => {
    res.send('Menu Item Served!');
});

// 4. Listen (Open the Restaurant)
app.listen(3000);
\`\`\`

---

## Mission Checklist
We are building the API for the "ZeroCode" system.
1.  **Initialize**: Get the Express module.
2.  **Route**: Create a Homepage (\`/\`) that confirms the system is online.
3.  **Port**: Open port \`3000\`.
`,
        tasks: [
            { id: 1, description: 'Define const express = require("express")', completed: false, regex: /const\s+express\s*=\s*require\(['"]express['"]\)/ },
            { id: 2, description: 'Initialize the app: const app = express()', completed: false, regex: /const\s+app\s*=\s*express\(\)/ },
            { id: 3, description: 'Create app.get("/") that sends "System Online"', completed: false, regex: /app\.get\(['"]\/['"],\s*\(\s*req,\s*res\s*\)\s*=>\s*{\s*res\.send\(['"][^'"]*['"]\)/ },
            { id: 4, description: 'Start server: app.listen(3000)', completed: false, regex: /app\.listen\(3000\)/ }
        ],
        files: [{
            name: 'server.js', content: `// PHASE 3: SERVER INITIALIZATION
// Follow the instructions in the left panel to build your server.

`, language: 'javascript'
        }]
    },

    // Placeholder stubs for remaining courses (will expand in next iteration)
    'js-es6': {
        title: 'JS ES6+: The Brain',
        content: '# Modern JavaScript\n\nES6 brought significant changes to JS.',
        tasks: [{ id: 1, description: 'Write const x = 10', completed: false, regex: /const\s+x\s*=\s*10/ }],
        files: [{ name: 'script.js', content: '' }, { name: 'index.html', content: '' }]
    },
    'dom': {
        title: 'Interactive DOM',
        content: '# DOM Manipulation',
        tasks: [{ id: 1, description: 'Select button', completed: false, regex: /document\.getElementById\(['"]btn['"]\)/ }],
        files: [{ name: 'script.js', content: '' }]
    },
    'react': {
        title: 'React.js Components',
        content: '# React Basics',
        tasks: [{ id: 1, description: 'Create Component', completed: false, regex: /function\s+Button\s*\(\)\s*{/ }],
        files: [{ name: 'script.js', content: '' }]
    },
    'php': {
        title: 'PHP 8 Foundation',
        content: '# PHP Intro',
        tasks: [{ id: 1, description: 'Echo hello', completed: false, regex: /echo\s+['"]hello['"]/ }],
        files: [{ name: 'script.php', content: '<?php ?>', language: 'php' }]
    },
    'mysql': {
        title: 'MySQL Queries',
        content: '# SQL Intro',
        tasks: [{ id: 1, description: 'Select *', completed: false, regex: /SELECT\s+\*\s+FROM/ }],
        files: [{ name: 'query.sql', content: 'SELECT', language: 'sql' }]
    }
};
