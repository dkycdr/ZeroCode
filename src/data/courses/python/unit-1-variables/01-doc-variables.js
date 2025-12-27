import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Variables = {
    id: 'py-u1-doc-1-variables',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Variables in Python',
    duration: '15 min read',
    content: `
# Deep Dive: Variables in Python

## 1. The Simplest Explanation

Think of a variable like a **labeled box** or a **Post-it Note**.

Imagine you have a box. You write "age" on the outside (the **name**), and you put the number 25 inside (the **value**). Later, when you need that number, you just look for the box labeled "age".

In programming terms:
\`\`\`python
age = 25  # Create a box labeled "age" containing 25
\`\`\`

That's it. Variables are just containers with names.

---

## 2. Real World Analogy: The Filing Cabinet

Think of your computer's memory like a giant **filing cabinet**:

- **Variable Name** = Label on the folder
- **Variable Value** = Document inside the folder
- **Assignment (=)** = The act of putting a document in a labeled folder

When you write \`name = "Alice"\`, you:
1. Create a folder labeled "name"
2. Put the document "Alice" inside it

Later, when you need that name, you just say "give me the 'name' folder" and Python retrieves "Alice".

---

## 3. Why Python is Different

Unlike C++ or Java, Python doesn't need you to **declare** what type goes in the box:

| Language | Code | What it means |
|:---|:---|:---|
| **C++** | \`int age = 25;\` | "I need a box that ONLY holds integers" |
| **Java** | \`String name = "Alice";\` | "I need a box that ONLY holds text" |
| **Python** | \`age = 25\` | "Here's a box. Put 25 in it." |

This is called **dynamic typing**. The box can hold anything, and Python figures out what's inside when needed.

> [!TIP]
> **Benefit**: Faster to write code. **Downside**: Easier to make type-related mistakes.

---

## 4. Creating Variables: The Syntax

Creating a variable is like making an introduction:
\`\`\`python
# "Hello, my name is Alice and I'm 25 years old"
name = "Alice"
age = 25
height = 1.75
is_student = True
\`\`\`

**The formula**: \`name = value\`

No \`var\`, no \`let\`, no \`const\`, no type declaration. Just name, equals, value.

---

## 5. Naming Rules (Critical!)

Python has strict rules about variable names:

| ✅ Valid | ❌ Invalid | Why? |
|:---|:---|:---|
| \`username\` | \`user-name\` | Hyphens not allowed |
| \`user_name\` | \`user name\` | Spaces not allowed |
| \`age2\` | \`2age\` | Can't start with number |
| \`_private\` | \`class\` | Reserved keyword |

### The Python Convention: snake_case

Unlike JavaScript's \`camelCase\`, Python uses **snake_case**:
\`\`\`python
# ✅ Python Style
user_first_name = "John"
total_item_count = 42

# ❌ Not Python Style (but works)
userFirstName = "John"
TotalItemCount = 42
\`\`\`

---

## 6. The Mutable You

Variables can change (that's why they're called "variable"):

\`\`\`python
score = 0        # Game starts
score = 10       # Got 10 points
score = score + 5  # Got 5 more points
# score is now 15
\`\`\`

Think of it like updating the document in your filing cabinet. The folder stays, but the contents change.

> [!WARNING]
> Python CAN let you change a variable's type: \`x = 10\` then \`x = "hello"\`. This is legal but **dangerous**. Other developers expect "x" to stay a number!

---

## 7. Constants (A Gentlemen's Agreement)

Python has no TRUE constants (values that can't change). But by **convention**, we use UPPERCASE:

\`\`\`python
MAX_PLAYERS = 4
PI = 3.14159
API_KEY = "secret-key-12345"
\`\`\`

This tells other developers: "Please don't change this value!"

Python won't stop you from changing it. It's a promise between programmers.
`
};
