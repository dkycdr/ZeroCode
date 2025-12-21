import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8RealProjects = {
    id: 'html5-unit-8',
    title: 'Real Projects - Career-Ready Websites',
    description: 'Apply your skills to build a professional portfolio. Master the workflow: Plan, Architect, Build, and Deploy.',
    items: [
        {
            id: 'html5-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'The Web Development Lifecycle',
            duration: '15 min read',
            content: `
# The Web Development Lifecycle

Professional developers don't just start typing code. They follow a lifecycle to ensure quality and scalability.

## 1. Visual Mental Model: The Lifecycle

\`\`\`text
   [ 1. PLAN ]       [ 2. DESIGN ]      [ 3. BUILD ]       [ 4. DEPLOY ]
  +-----------+     +-------------+    +------------+     +-------------+
  | Purpose   | --> | Wireframes  | -> | HTML Logic | --> |   Hosting   |
  | Content   |     | Visuals     |    | CSS Style  |     |   Domain    |
  | Audience  |     | Assets      |    | JS Interax |     |   Live!     |
  +-----------+     +-------------+    +------------+     +-------------+
\`\`\`

## 2. Content Strategy: Know Your Type

Different websites have different goals. Structure your content accordingly.

| Feature | **Blog** | **E-Commerce** | **Portfolio** |
| :--- | :--- | :--- | :--- |
| **Primary Goal** | Read Articles | Buy Products | Get Hired |
| **Hero Section** | Featured Post | Sales / New Arrival | Intro & Headlines |
| **Navigation** | Categories | Shop / Cart | Work / Resume |
| **KPI** | Time on Page | Conversion Rate | Contact Form |

## 3. Project Architecture: Separation of Concerns

Keep your house clean. Don't mix logic (JS), style (CSS), and structure (HTML).

\`\`\`text
my-portfolio/
├── index.html          (Structure)
├── about.html
├── contact.html
├── css/                (Style)
│   ├── main.css
│   └── variables.css
├── js/                 (Logic)
│   └── app.js
└── assets/             (Media)
    ├── images/
    │   ├── hero-bg.webp
    │   └── project-1.png
    └── fonts/
        └── inter.woff2
\`\`\`

**Why separate them?**
*   **Maintainability:** If the styling breaks, you know exactly where to look (\`css/main.css\`).
*   **Caching:** Browsers can cache CSS/JS files indefinitely while reloading the HTML content.
            `
        },
        {
            id: 'html5-8-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Capstone: The Ultimate Portfolio',
            duration: '45 min',
            content: `
# Capstone Project: Build Your Career Portfolio

This is it. You are going to build the website that will get you hired.

## The Architecture
We will build a single-page responsive site with these sections:
1.  **Header**: Fixed navigation.
2.  **Hero**: Impactful introduction.
3.  **Projects**: Semantic grid of your work.
4.  **Contact**: Functional form.
5.  **Footer**: Professional sign-off.

## Design Specs (CSS is Pre-written)
We have provided a "High-End" CSS file using:
*   **CSS Grid** for the project layout.
*   **CSS Variables** for consistent theming.
*   **Google Fonts** (Inter) for typography.
*   **Mobile-First** responsiveness.

## Your Tasks
Follow the steps to construct the HTML structure.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Header & Navigation: Create a <header> containing a <nav> with 4 links: Home (#hero), About (#about), Projects (#projects), Contact (#contact).',
                    completed: false,
                    // Regex: Header > Nav > 4 anchors
                    regex: /<header>[\s\S]*?<nav>[\s\S]*?<a[^>]+href="#hero"[^>]*>[\s\S]*?<a[^>]+href="#about"[^>]*>[\s\S]*?<a[^>]+href="#projects"[^>]*>[\s\S]*?<a[^>]+href="#contact"[^>]*>[\s\S]*?<\/nav>[\s\S]*?<\/header>/i,
                    hint: 'Use semantic tags. The anchors should link to IDs (e.g., href="#projects").'
                },
                {
                    id: 2,
                    description: 'Hero Section: Create a <section id="hero"> with an <h1> headline, a <p> sub-headline, and an <a> button linking to #projects.',
                    completed: false,
                    regex: /<section[^>]+id="hero"[^>]*>[\s\S]*?<h1[^>]*>[\s\S]*?<\/h1>[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<a[^>]+href="#projects"[^>]*>[\s\S]*?<\/a>[\s\S]*?<\/section>/i,
                    hint: 'The hero section usually has the largest text on the page.'
                },
                {
                    id: 3,
                    description: 'Project Grid: Create a <section id="projects">. Inside, create at least one <article class="card"> containing an <img>, <h3>Title</h3>, <p>Desc</p>, and <a href="#">Link</a>.',
                    completed: false,
                    // Regex: Section#projects > Article.card > content
                    regex: /<section[^>]+id="projects"[^>]*>[\s\S]*?<article[^>]+class="card"[^>]*>[\s\S]*?<img[^>]*>[\s\S]*?<h3[^>]*>[\s\S]*?<\/h3>[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<a[^>]*>[\s\S]*?<\/a>[\s\S]*?<\/article>[\s\S]*?<\/section>/i,
                    hint: 'Use <article> for individual projects effectively.'
                },
                {
                    id: 4,
                    description: 'Contact Form: Create a <section id="contact"> with a <form>. It must have input for Name, Email, and a Textarea for message. Dont forget labels!',
                    completed: false,
                    regex: /<section[^>]+id="contact"[^>]*>[\s\S]*?<form[^>]*>[\s\S]*?<label[^>]*>[\s\S]*?<input[^>]*>[\s\S]*?<textarea[^>]*>[\s\S]*?<\/form>[\s\S]*?<\/section>/i,
                    hint: 'Accessibility check: Ensure every input has a matching label.'
                },
                {
                    id: 5,
                    description: 'Footer: Create a <footer> containing a paragraph for copyright and links to social media.',
                    completed: false,
                    regex: /<footer>[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<a[^>]*>[\s\S]*?<\/footer>/i
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My Professional Portfolio">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Task 1: Header & Nav -->
    

    <main>
        <!-- Task 2: Hero Section (id="hero") -->


        <!-- Task 3: Projects Section (id="projects") -->


        <!-- Task 4: Contact Section (id="contact") -->

    </main>

    <!-- Task 5: Footer -->

</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `:root {
    --primary: #2563eb;
    --text-dark: #1e293b;
    --text-light: #64748b;
    --bg-light: #f8fafc;
    --white: #ffffff;
}

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    line-height: 1.6;
    color: var(--text-dark);
}

header {
    background: var(--white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
}

nav a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 700;
}

nav a:hover {
    color: var(--primary);
}

section {
    padding: 4rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

/* Hero */
#hero {
    text-align: center;
    padding: 8rem 2rem;
    background: var(--bg-light);
}

#hero h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: -0.05rem;
}

#hero p {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2rem;
}

.btn {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
}

/* Projects Grid */
#projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem;
    background: var(--text-dark);
    color: var(--white);
}

footer a {
    color: var(--bg-light);
    margin: 0 0.5rem;
}`
                }
            ]
        },
        {
            id: 'html5-8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Career-Ready Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why do we separate CSS (style) from HTML (structure)?',
                    options: [
                        'To make the code harder to read',
                        'For Separation of Concerns and Maintainability',
                        'HTML cannot contain styles',
                        'Browsers require it'
                    ],
                    correctIndex: 1,
                    explanation: 'Separating concerns keeps code clean, maintainable, and allows browsers to cache stylesheets efficiently.'
                },
                {
                    id: 'q2',
                    question: 'Which of the following is crucial for On-Page SEO?',
                    options: [
                        'Having a lot of animations',
                        'Using <meta name="description"> and proper heading hierarchy',
                        'Using only Divs',
                        'Dark mode support'
                    ],
                    correctIndex: 1,
                    explanation: 'Search engines rely on meta descriptions and heading structure (h1-h6) to understand your content.'
                },
                {
                    id: 'q3',
                    question: 'In the development lifecycle, what comes immediately before the "Build" phase?',
                    options: [
                        'Deploy',
                        'Test',
                        'Design / Wireframing',
                        'Marketing'
                    ],
                    correctIndex: 2,
                    explanation: 'You should always Design/Wireframe your layout before you start coding to solve visual problems early.'
                },
                {
                    id: 'q4',
                    question: 'What is the purpose of the Hero Section?',
                    options: [
                        'To show contact info',
                        'To display the footer',
                        'To grab attention and explain the site\'s purpose immediately',
                        'It is optional'
                    ],
                    correctIndex: 2,
                    explanation: 'The Hero Section is the first thing a user sees; its goal is to convert interest into action.'
                }
            ]
        }
    ]
};
