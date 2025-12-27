import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2HowPythonWorks = {
    id: 'py-u0-doc-2-how-python-works',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: How Python Works',
    duration: '15 min read',
    content: `
# Deep Dive: How Python Works

## 1. The Simplest Explanation

When you double-click an app on your phone, it just runs. But your code file (.py) isn't an app. It's just a text file with instructions.

Python is an **interpreter** - like a real-time translator who reads your instructions line by line and tells the computer what to do.

---

## 2. Real World Analogy: Simultaneous Translation

Imagine you're at the UN giving a speech in English. You have two options:

**Option 1: Pre-translated (Compiled)**
- Write your speech
- Have it fully translated to French beforehand
- Give them the French copy
- They read it directly (fast!)

**Option 2: Live Translation (Interpreted)**
- Speak in English line by line
- Translator converts each line to French in real-time
- Audience hears French slightly after you speak

Python is Option 2. The interpreter reads your code line by line and executes it immediately.

| Compiled Languages | Interpreted Languages |
|:---|:---|
| C, C++, Go, Rust | Python, JavaScript, Ruby |
| Faster execution | Faster development |
| Must compile first | Run directly |
| Platform-specific exe | Platform-independent |

---

## 3. The Python Execution Flow

\`\`\`
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   Your Code      │ --> │    Interpreter   │ --> │     Output       │
│   (main.py)      │     │    (python.exe)  │     │   (Terminal)     │
└──────────────────┘     └──────────────────┘     └──────────────────┘
\`\`\`

1. You write code in a .py file (plain text)
2. Python interpreter reads it
3. Interpreter tells the computer what to do
4. Results appear on screen

---

## 4. The Sacred Rule: Indentation

Most languages use **curly braces** to define code blocks:
\`\`\`javascript
// JavaScript
if (age > 18) {
    console.log("Adult");
    console.log("Can vote");
}
\`\`\`

Python uses **indentation** (spaces):
\`\`\`python
# Python
if age > 18:
    print("Adult")
    print("Can vote")
\`\`\`

> [!IMPORTANT]
> **This is not optional!** Indentation DEFINES your code structure. Wrong indentation = broken code.

**The Rules:**
- Use **4 spaces** per level (Python standard)
- Never mix tabs and spaces
- All code in a block must have the SAME indentation

\`\`\`python
# Correct
if True:
    print("Line 1")
    print("Line 2")

# WRONG - IndentationError!
if True:
    print("Line 1")
  print("Line 2")  # Different indentation = Error
\`\`\`

---

## 5. How to Run Python Code

### Method 1: Terminal / Command Line
\`\`\`bash
python main.py        # Windows
python3 main.py       # Mac/Linux
\`\`\`

### Method 2: Interactive Mode (REPL)
\`\`\`bash
python
>>> print("Hello")
Hello
>>> 2 + 2
4
>>> exit()
\`\`\`

REPL = Read-Eval-Print-Loop. Great for experimenting!

### Method 3: IDE (VS Code, PyCharm)
- Write code in editor
- Press "Run" button or F5
- Output appears in terminal panel

---

## 6. The Shebang Line (Unix/Linux/Mac)

You might see this at the top of Python files:

\`\`\`python
#!/usr/bin/env python3

print("Hello")
\`\`\`

This tells Unix-like systems: "Use Python 3 to run this file."
Not needed on Windows, but good for portability.

---

## 7. Python 2 vs Python 3

Python 3 came out in 2008 but Python 2 lingered until 2020.

| Python 2 (Dead) | Python 3 (Use This!) |
|:---|:---|
| \`print "Hello"\` | \`print("Hello")\` |
| Division: 5/2 = 2 | Division: 5/2 = 2.5 |
| Ended January 2020 | Active development |

> [!WARNING]
> **Always use Python 3!** If you see tutorials using Python 2 syntax, find newer resources.

Check your version:
\`\`\`bash
python --version  # Should say Python 3.x.x
\`\`\`
`
};
