
// ZeroCode: Unified Course System - COMPLETE EDITION
// All 16 courses with full content

import { lessons } from './sampleLesson';
import { comprehensiveLessons } from './comprehensiveLessons';

export const LEVELS = {
    BEGINNER: {
        id: 'beginner',
        label: { id: 'New Recruit', en: 'New Recruit' },
        tagline: {
            id: 'Membangun fondasi web development dari nol',
            en: 'Static Web, Basic Logic, & Professional Workflow'
        },
        color: 'from-blue-600 to-blue-800',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-500',
        icon: '🎖️'
    },
    INTERMEDIATE: {
        id: 'intermediate',
        label: { id: 'Systems Engineer', en: 'Systems Engineer' },
        tagline: {
            id: 'Menguasai interaktivitas dan sistem backend',
            en: 'Interactivity, Frameworks, & Dynamic Data'
        },
        color: 'from-purple-600 to-purple-800',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-500',
        icon: '⚙️'
    },
    ADVANCED: {
        id: 'advanced',
        label: { id: 'Lead Architect', en: 'Lead Architect' },
        tagline: {
            id: 'Membangun aplikasi production-ready dengan standar industri',
            en: 'Scale, Types, & Industrial Production'
        },
        color: 'from-red-700 to-red-900',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-500',
        icon: '🏗️'
    }
};

// Full lesson content for courses not in sampleLesson.js
const additionalLessons = {
    'git': {
        title: 'Git & GitHub',
        content: `
# Git & GitHub: Version Control for Engineers

Version control is the **foundation** of modern software development. At ZeroCode, every engineering project uses Git.

---

## Part 1: The Problem Git Solves

Imagine you're working on your Final Year Project with 3 teammates:
- **Day 1**: You write 500 lines of code
- **Day 2**: Your teammate accidentally deletes it all
- **Day 3**: You need to find what changed between versions

**Without Git**: Chaos, lost work, tears.  
**With Git**: Every change is tracked, recoverable, and collaborative.

---

## Part 2: Core Concepts

### Repository (Repo)
A project folder tracked by Git. Contains:
- Your code files
- Complete history of all changes
- Branches for different features

### Commit
A "save point" in your project. Like a checkpoint in a video game.

\`\`\`bash
git commit -m "Add login feature"
\`\`\`

### Branch
A parallel timeline of your code. The \`main\` branch is production-ready code. Feature branches are for experiments.

---

## Part 3: The GitHub Workflow

1. **Clone**: Download a repo from GitHub
2. **Branch**: Create a new feature branch
3. **Code**: Make your changes
4. **Commit**: Save your changes locally
5. **Push**: Upload to GitHub
6. **Pull Request**: Ask teammates to review your code

---

## Mission: Your First Repository

You'll initialize a Git repo, make commits, and simulate the workflow used at Google, Microsoft, and ZeroCode's Software Engineering Lab.
        `,
        tasks: [
            {
                id: 1,
                description: 'Initialize a Git repository with "git init"',
                completed: false,
                regex: /git\s+init/
            },
            {
                id: 2,
                description: 'Create a file called README.md',
                completed: false,
                regex: /README\.md/
            },
            {
                id: 3,
                description: 'Stage the file with "git add README.md"',
                completed: false,
                regex: /git\s+add\s+README\.md/
            },
            {
                id: 4,
                description: 'Commit with message "Initial commit"',
                completed: false,
                regex: /git\s+commit\s+-m\s+["']Initial\s+commit["']/
            }
        ],
        files: [
            {
                name: 'commands.sh',
                language: 'bash',
                content: `# Git Workflow Practice
# Type your commands below (one per line):

# Step 1: Initialize Git


# Step 2: Create README.md
echo "# My First Repo" > README.md

# Step 3: Stage the file


# Step 4: Commit


`
            },
            {
                name: 'README.md',
                language: 'markdown',
                content: `# My First Repository

This is a practice repo for learning Git at ZeroCode.
`
            }
        ]
    },

    'python': {
        title: 'Python for Engineers',
        content: `
# Python: The Swiss Army Knife of Programming

Python is used everywhere: AI, Data Science, Web Backends, Automation. At ZeroCode, it's essential for Engineering students.

---

## Part 1: Why Python?

**Readable Syntax:**
\`\`\`python
# Calculate GPA
grades = [3.5, 3.8, 4.0, 3.2]
gpa = sum(grades) / len(grades)
print(f"Your GPA: {gpa}")
\`\`\`

Compare to Java:
\`\`\`java
// Same thing in Java (verbose!)
double[] grades = {3.5, 3.8, 4.0, 3.2};
double sum = 0;
for(double grade : grades) { sum += grade; }
double gpa = sum / grades.length;
System.out.println("Your GPA: " + gpa);
\`\`\`

---

## Part 2: Core Data Structures

### Lists (Arrays)
\`\`\`python
students = ["Alice", "Bob", "Charlie"]
students.append("Diana")  # Add to end
print(students[0])         # Access by index
\`\`\`

### Dictionaries (Objects/Maps)
\`\`\`python
student = {
    "name": "Alice",
    "major": "Software Engineering",
    "gpa": 3.8
}
print(student["major"])  # Access by key
\`\`\`

---

## Part 3: Functions

\`\`\`python
def calculate_gpa(grades):
    return sum(grades) / len(grades)

my_grades = [3.5, 3.8, 4.0]
result = calculate_gpa(my_grades)
print(f"GPA: {result}")
\`\`\`

---

## Mission: Automated Grade Reporter

Build a script that:
1. Takes a list of student grades
2. Calculates average GPA
3. Determines if student passes (GPA ≥ 2.75)
        `,
        tasks: [
            {
                id: 1,
                description: 'Create a list called "grades" with at least 3 numbers',
                completed: false,
                regex: /grades\s*=\s*\[[^\]]+\]/
            },
            {
                id: 2,
                description: 'Calculate average using sum() and len()',
                completed: false,
                regex: /sum\(grades\)\s*\/\s*len\(grades\)/
            },
            {
                id: 3,
                description: 'Print the result using print()',
                completed: false,
                regex: /print\(/
            }
        ],
        files: [
            {
                name: 'script.py',
                language: 'python',
                content: `# Python GPA Calculator
# Complete the code below:

# Step 1: Create a list of grades


# Step 2: Calculate average GPA


# Step 3: Print the result

`
            }
        ]
    },

    'typescript': {
        title: 'TypeScript',
        content: `
# TypeScript: JavaScript with Superpowers

TypeScript adds **type safety** to JavaScript. Used by Google (Angular), Microsoft (VS Code), and Airbnb.

---

## Part 1: The Problem

JavaScript allows this nonsense:
\`\`\`javascript
let age = 25;
age = "twenty-five";  // No error! 😱
age.toFixed(2);        // Runtime crash!
\`\`\`

TypeScript catches this **before** you run the code:
\`\`\`typescript
let age: number = 25;
age = "twenty-five";  // ❌ Compile error!
\`\`\`

---

## Part 2: Basic Types

\`\`\`typescript
let name: string = "Alice";
let age: number = 21;
let isStudent: boolean = true;
let courses: string[] = ["Math", "Physics"];
\`\`\`

---

## Part 3: Interfaces

Define the "shape" of an object:
\`\`\`typescript
interface Student {
    name: string;
    nim: string;
    gpa: number;
}

const alice: Student = {
    name: "Alice",
    nim: "002202100001",
    gpa: 3.8
};
\`\`\`

---

## Part 4: Type-Safe Functions

\`\`\`typescript
function calculateGPA(grades: number[]): number {
    return grades.reduce((a, b) => a + b) / grades.length;
}

calculateGPA([3.5, 3.8, 4.0]);     // ✅ Works
calculateGPA(["A", "B", "C"]);     // ❌ Compile error!
\`\`\`

---

## Mission: Convert React Component to TypeScript

You'll take a JavaScript React component and add strict type annotations.
        `,
        tasks: [
            {
                id: 1,
                description: 'Define an interface called "Student" with name and gpa properties',
                completed: false,
                regex: /interface\s+Student\s*{[^}]*name:\s*string[^}]*gpa:\s*number[^}]*}/
            },
            {
                id: 2,
                description: 'Create a typed variable: const student: Student',
                completed: false,
                regex: /const\s+student:\s*Student/
            }
        ],
        files: [
            {
                name: 'types.ts',
                language: 'typescript',
                content: `// TypeScript Practice
// Define your types below:

// Step 1: Create Student interface


// Step 2: Create a student object with type annotation


`
            }
        ]
    },

    'mongodb': {
        title: 'MongoDB (NoSQL)',
        content: `
# MongoDB: Document-Based Database

MongoDB is a **NoSQL** database. Instead of tables and rows, it uses **documents** (like JSON objects).

---

## Part 1: SQL vs NoSQL

**SQL (MySQL):**
\`\`\`sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    major VARCHAR(100)
);
\`\`\`

**NoSQL (MongoDB):**
\`\`\`javascript
{
    _id: ObjectId("..."),
    name: "Alice",
    major: "Software Engineering",
    courses: ["Math", "Physics"]  // Nested arrays!
}
\`\`\`

---

## Part 2: When to Use MongoDB

✅ **Use MongoDB when:**
- Data structure changes frequently
- You need to store nested/complex data
- Building social media, blogs, real-time apps

❌ **Use SQL when:**
- You need strict relationships (Foreign Keys)
- Banking, Accounting (ACID compliance critical)

---

## Part 3: Basic Operations (CRUD)

\`\`\`javascript
// Create
db.students.insertOne({
    name: "Alice",
    nim: "002202100001",
    gpa: 3.8
});

// Read
db.students.find({ gpa: { $gte: 3.5 } });

// Update
db.students.updateOne(
    { name: "Alice" },
    { $set: { gpa: 3.9 } }
);

// Delete
db.students.deleteOne({ name: "Alice" });
\`\`\`

---

## Mission: Campus Social Feed Database

Design a MongoDB schema for a ZeroCode social feed where students can post updates, like posts, and comment.
        `,
        tasks: [
            {
                id: 1,
                description: 'Create a document with fields: title, author, content',
                completed: false,
                regex: /{[^}]*title:[^}]*author:[^}]*content:[^}]*}/
            },
            {
                id: 2,
                description: 'Use db.posts.insertOne() to insert the document',
                completed: false,
                regex: /db\.posts\.insertOne\(/
            }
        ],
        files: [
            {
                name: 'queries.js',
                language: 'javascript',
                content: `// MongoDB Practice
// Write your queries below:

// Step 1: Create a post document


// Step 2: Insert it into the database


`
            }
        ]
    },

    'nextjs': {
        title: 'Next.js (Modern Full-stack)',
        content: `
# Next.js: The React Framework for Production

Next.js is React on steroids. Used by Netflix, TikTok, and Notion. It adds:
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes** (Backend + Frontend in one project!)

---

## Part 1: Why Next.js?

**Regular React:**
- Client-side only
- Poor SEO (Google sees empty HTML)
- Slow initial load

**Next.js:**
- Server renders HTML (fast, SEO-friendly)
- Automatic code splitting
- Built-in routing (no React Router needed!)

---

## Part 2: App Router (Next.js 13+)

File structure = Routes:
\`\`\`
app/
  page.tsx          → /
  about/page.tsx    → /about
  blog/[id]/page.tsx → /blog/123
\`\`\`

---

## Part 3: Server Components

\`\`\`typescript
// This runs on the SERVER
async function BlogPost({ params }) {
    const post = await db.posts.findById(params.id);
    return <article>{post.content}</article>;
}
\`\`\`

No \`useEffect\`, no loading spinners. Data is ready before the page loads!

---

## Part 4: API Routes

\`\`\`typescript
// app/api/students/route.ts
export async function GET() {
    const students = await db.students.find();
    return Response.json(students);
}
\`\`\`

---

## Mission: Full-Stack Blog

Build a blog with:
- Server-rendered post pages
- API route for fetching posts
- SEO-optimized metadata
        `,
        tasks: [
            {
                id: 1,
                description: 'Create a page.tsx file',
                completed: false,
                regex: /page\.tsx/
            },
            {
                id: 2,
                description: 'Export a default function component',
                completed: false,
                regex: /export\s+default\s+function/
            }
        ],
        files: [
            {
                name: 'page.tsx',
                language: 'typescript',
                content: `// Next.js Page Component
// Create your component below:

`
            }
        ]
    },

    'cicd': {
        title: 'CI/CD & Deployment',
        content: `
# CI/CD: Automating the Software Lifecycle

**CI/CD** = Continuous Integration / Continuous Deployment. It's how Google deploys code **50 times per day**.

---

## Part 1: The Manual Way (Bad)

1. Write code on your laptop
2. Manually test everything
3. SSH into server
4. Copy files
5. Restart server
6. Hope nothing breaks 🙏

**Problem**: Slow, error-prone, doesn't scale.

---

## Part 2: The Automated Way (Good)

1. Push code to GitHub
2. **GitHub Actions** automatically:
   - Runs tests
   - Builds production bundle
   - Deploys to Vercel/DigitalOcean
3. Live in 2 minutes ✅

---

## Part 3: GitHub Actions Workflow

\`\`\`.yaml
name: Deploy ZeroCode
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod
\`\`\`

---

## Part 4: Environment Variables

Never commit secrets to Git!

\`\`\`bash
# .env (local)
DATABASE_URL=mongodb://localhost:27017

# GitHub Secrets (production)
DATABASE_URL=mongodb://prod-server:27017
\`\`\`

---

## Mission: Deploy ZeroCode to Production

Set up a GitHub Actions pipeline that:
1. Runs tests on every commit
2. Deploys to Vercel when tests pass
3. Sends Slack notification on success/failure
        `,
        tasks: [
            {
                id: 1,
                description: 'Create a .github/workflows directory',
                completed: false,
                regex: /\.github\/workflows/
            },
            {
                id: 2,
                description: 'Create a deploy.yml file',
                completed: false,
                regex: /deploy\.yml/
            }
        ],
        files: [
            {
                name: 'deploy.yml',
                language: 'yaml',
                content: `# GitHub Actions Workflow
# Define your deployment pipeline:

name: Deploy ZeroCode

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # Add your steps here
`
            }
        ]
    }
};

// Unified course catalog with BOTH metadata AND content
export const courses = {
    // LEVEL 1: NEW RECRUIT (BEGINNER)
    'html5': {
        ...lessons.html5,
        level: 'beginner',
        order: 1,
        duration: '4 hours',
        prerequisites: [],
        tags: ['frontend', 'markup'],
        shortDesc: 'Structure, Semantic tags, Forms, and Accessibility',
        description: {
            en: 'Structure, Semantic tags (<main>, <article>), Forms, and Accessibility.',
            id: 'Struktur, Tag Semantik, Form, dan Aksesibilitas.'
        },
        goalProject: 'Build a structured campus event page'
    },
    'css3': {
        ...lessons.css3,
        level: 'beginner',
        order: 2,
        duration: '6 hours',
        prerequisites: ['html5'],
        tags: ['frontend', 'styling'],
        shortDesc: 'Box Model, Selectors, Typography, and Transitions',
        description: {
            en: 'Box Model, Selectors, Typography, and Transitions.',
            id: 'Box Model, Selector, Tipografi, dan Transisi.'
        },
        goalProject: 'Style the event page with ZeroCode Navy & Maroon'
    },
    'tailwind': {
        ...lessons.tailwind,
        level: 'beginner',
        order: 3,
        duration: '5 hours',
        prerequisites: ['css3'],
        tags: ['frontend', 'framework'],
        shortDesc: 'Utility-first workflow, Responsive design, Dark mode',
        description: {
            en: 'Utility-first workflow, Responsive design, and Dark mode.',
            id: 'Workflow Utility-first, Desain Responsif, dan Dark mode.'
        },
        goalProject: 'Build a responsive navigation bar for ZeroCode'
    },
    'git': {
        ...comprehensiveLessons.git,
        level: 'beginner',
        order: 4,
        duration: '3 hours',
        prerequisites: [],
        tags: ['tools', 'version-control'],
        shortDesc: 'CLI basics, Commits, Branching, Pull Requests',
        description: {
            en: 'CLI basics, Commits, Branching, and Pull Requests.',
            id: 'Dasar CLI, Commit, Branching, dan Pull Request.'
        },
        goalProject: 'Simulate a collaborative code review on GitHub'
    },
    'js-basics': {
        ...lessons['js-es6'],
        title: 'JavaScript Basics',
        level: 'beginner',
        order: 5,
        duration: '8 hours',
        prerequisites: ['html5'],
        tags: ['programming', 'logic'],
        shortDesc: 'Variables, Data types, Operators, Conditionals',
        description: {
            en: 'Variables, Data types, Operators, and Conditionals.',
            id: 'Variabel, Tipe data, Operator, dan Pengkondisian.'
        },
        goalProject: 'Build a simple GPA (IPK) calculator logic'
    },

    // LEVEL 2: SYSTEMS ENGINEER (INTERMEDIATE)
    'dom': {
        ...lessons.dom,
        level: 'intermediate',
        order: 6,
        duration: '5 hours',
        prerequisites: ['js-basics'],
        tags: ['javascript', 'interactivity'],
        shortDesc: 'Event listeners, QuerySelectors, Element Creation',
        description: {
            en: 'Event listeners, QuerySelectors, and Element Creation.',
            id: 'Event listener, QuerySelector, dan Pembuatan Elemen.'
        },
        goalProject: 'Create a dynamic "To-Do" list for student tasks'
    },
    'js-es6': {
        ...lessons['js-es6'],
        level: 'intermediate',
        order: 7,
        duration: '6 hours',
        prerequisites: ['js-basics'],
        tags: ['javascript', 'modern'],
        shortDesc: 'Arrow functions, Destructuring, Promises, Async/Await',
        description: {
            en: 'Arrow functions, Destructuring, Promises, and Async/Await.',
            id: 'Arrow function, Destructuring, Promise, dan Async/Await.'
        },
        goalProject: 'Fetch real-time student data from a JSON API'
    },
    'php': {
        ...lessons.php,
        level: 'intermediate',
        order: 8,
        duration: '10 hours',
        prerequisites: ['js-basics'],
        tags: ['backend', 'server-side'],
        shortDesc: 'Logic flow, Superglobals, Sessions',
        description: {
            en: 'Logic flow, Superglobals ($_POST, $_GET), and Sessions.',
            id: 'Alur logika, Superglobal, dan Session.'
        },
        goalProject: 'Build a secure Login system for ZeroCode'
    },
    'mysql': {
        ...lessons.mysql,
        level: 'intermediate',
        order: 9,
        duration: '8 hours',
        prerequisites: ['php'],
        tags: ['database', 'sql'],
        shortDesc: 'Table structure, CRUD Queries, Joins',
        description: {
            en: 'Table structure, CRUD Queries, and Inner/Outer Joins.',
            id: 'Struktur tabel, Query CRUD, dan Join Tabel.'
        },
        goalProject: 'Design a database for a University Library'
    },
    'python': {
        ...additionalLessons.python,
        level: 'intermediate',
        order: 10,
        duration: '7 hours',
        prerequisites: ['js-basics'],
        tags: ['programming', 'scripting'],
        shortDesc: 'Syntax, Lists/Dicts, Functions, Error Handling',
        description: {
            en: 'Syntax, Lists/Dicts, Functions, and Error Handling.',
            id: 'Sintaks, List/Dict, Fungsi, dan Error Handling.'
        },
        goalProject: 'Create an automated grade reporting script'
    },
    'react': {
        ...lessons.react,
        level: 'intermediate',
        order: 11,
        duration: '12 hours',
        prerequisites: ['js-es6', 'dom'],
        tags: ['frontend', 'framework'],
        shortDesc: 'JSX, Props, State (useState), Hooks (useEffect)',
        description: {
            en: 'JSX, Props, State (useState), and Hooks (useEffect).',
            id: 'JSX, Props, State, dan Hook.'
        },
        goalProject: 'Build a reusable component-based Course Dashboard'
    },

    // LEVEL 3: LEAD ARCHITECT (ADVANCED)
    'typescript': {
        ...additionalLessons.typescript,
        level: 'advanced',
        order: 12,
        duration: '8 hours',
        prerequisites: ['js-es6'],
        tags: ['javascript', 'type-safety'],
        shortDesc: 'Type annotations, Interfaces, Type-safe Props',
        description: {
            en: 'Type annotations, Interfaces, and Type-safe Props.',
            id: 'Anotasi tipe data, Interface, dan Type-safe Props.'
        },
        goalProject: 'Convert a React JS component to a strict TypeScript file'
    },
    'node': {
        ...lessons.node,
        level: 'advanced',
        order: 13,
        duration: '10 hours',
        prerequisites: ['js-es6'],
        tags: ['backend', 'api'],
        shortDesc: 'Middleware, Routing, REST API Architecture',
        description: {
            en: 'Middleware, Routing, and REST API Architecture.',
            id: 'Middleware, Routing, dan Arsitektur REST API.'
        },
        goalProject: 'Create an API for ZeroCode\'s student registration'
    },
    'mongodb': {
        ...additionalLessons.mongodb,
        level: 'advanced',
        order: 14,
        duration: '8 hours',
        prerequisites: ['node'],
        tags: ['database', 'nosql'],
        shortDesc: 'BSON, Document Schemas, Mongoose Aggregation',
        description: {
            en: 'BSON, Document Schemas, and Mongoose Aggregation.',
            id: 'BSON, Skema Dokumen, dan Agregasi Mongoose.'
        },
        goalProject: 'Build a flexible database for a campus social feed'
    },
    'nextjs': {
        ...additionalLessons.nextjs,
        level: 'advanced',
        order: 15,
        duration: '12 hours',
        prerequisites: ['react', 'node'],
        tags: ['fullstack', 'ssr'],
        shortDesc: 'App Router, Server Components, SEO Optimization',
        description: {
            en: 'App Router, Server Components, and SEO Optimization.',
            id: 'App Router, Server Component, dan Optimasi SEO.'
        },
        goalProject: 'Build a full-stack blog with Server Side Rendering'
    },
    'cicd': {
        ...additionalLessons.cicd,
        level: 'advanced',
        order: 16,
        duration: '6 hours',
        prerequisites: ['git', 'node'],
        tags: ['devops', 'automation'],
        shortDesc: 'GitHub Actions, Environment Variables, Deployment',
        description: {
            en: 'GitHub Actions, Environment Variables, and Vercel/DigitalOcean.',
            id: 'GitHub Action, Env Variable, dan Deployment.'
        },
        goalProject: 'Set up an automated pipeline to deploy ZeroCode to production'
    },
};

// Helper functions
export const getCoursesByLevel = (level) => {
    return Object.entries(courses)
        .filter(([_, course]) => course.level === level)
        .sort((a, b) => a[1].order - b[1].order)
        .map(([id, course]) => ({ id, ...course }));
};

export const getCourse = (courseId) => {
    return courses[courseId] ? { id: courseId, ...courses[courseId] } : null;
};

export const checkPrerequisites = (courseId, completedCourses = []) => {
    const course = courses[courseId];
    if (!course) return false;
    return course.prerequisites.every(prereq => completedCourses.includes(prereq));
};

export const getOverallProgress = (completedCourses = []) => {
    const total = Object.keys(courses).length;
    const completed = completedCourses.length;
    return {
        total,
        completed,
        percentage: Math.round((completed / total) * 100)
    };
};
