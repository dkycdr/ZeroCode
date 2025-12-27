import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhatIsPython = {
    id: 'py-u0-doc-1-what-is-python',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: What is Python?',
    duration: '12 min read',
    content: `
# Deep Dive: What is Python?

## 1. The Simplest Explanation

Python is a **programming language** - a way to give instructions to computers.

But unlike cryptic languages like C++ or Assembly, Python was designed to be **readable by humans**. Its creator, Guido van Rossum, wanted code that reads almost like English.

Compare these two programs that print "Hello, World!":

**C++:**
\`\`\`cpp
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

**Python:**
\`\`\`python
print("Hello, World!")
\`\`\`

One line. No ceremony. That's Python's philosophy.

---

## 2. Real World Analogy: The Universal Translator

Think of programming languages like human languages:

| Language | Like... | Used For |
|:---|:---|:---|
| **Assembly** | Ancient Latin | Talking directly to hardware |
| **C/C++** | German (precise, strict) | System software, games |
| **Java** | Corporate English | Enterprise software |
| **Python** | Casual English | Everything else! |

Python is the "universal translator" - you can use it for almost anything, and most people can understand your code.

---

## 3. Where Python is Actually Used (Real Examples)

Python isn't just for learning. Here's who uses it professionally:

| Company | Use Case |
|:---|:---|
| **Instagram** | Backend servers handle 1 billion+ users |
| **Netflix** | Recommendation algorithm |
| **Spotify** | Data analysis and machine learning |
| **NASA** | Scientific calculations |
| **YouTube** | Video processing and recommendations |

It's the **#2 most popular language** in the world (after JavaScript for web).

---

## 4. The Three Superpowers of Python

### 🚀 Superpower 1: Readability
Python forces clean code. No debate about brackets vs braces - indentation defines structure.

### 📦 Superpower 2: Batteries Included
Python comes with thousands of **libraries** (pre-written code):
- Need to work with files? Built-in.
- Need to download a webpage? \`requests\` library.
- Need machine learning? \`scikit-learn\`, \`tensorflow\`.

### 👥 Superpower 3: Community
Got a problem? Search "how to X in Python" and you'll find dozens of answers on Stack Overflow. The community is massive and helpful.

---

## 5. Python vs JavaScript: The Eternal Debate

Since you're learning web development, you'll use both:

| Aspect | Python | JavaScript |
|:---|:---|:---|
| **Main Use** | Backend, AI, Data Science | Frontend, Full-stack web |
| **Where It Runs** | Server, terminal | Browser, server (Node.js) |
| **Syntax Style** | Indentation-based | Brace-based {} |
| **Typing** | Dynamic | Dynamic |
| **Learning Curve** | Gentler | Steeper (but unavoidable for web) |

**Bottom Line**: Learn both. Python is great for logic and algorithms. JavaScript is essential for web.

---

## 6. The Python Philosophy (The Zen of Python)

Python has an official philosophy. Type \`import this\` in any Python terminal:

> "Beautiful is better than ugly."
> "Simple is better than complex."
> "Readability counts."

This isn't just poetry - it's how Python developers think. If your code is ugly or complex, it's probably wrong.

> [!TIP]
> When in doubt, choose the simplest, most readable solution. That's the Pythonic way.
`
};
