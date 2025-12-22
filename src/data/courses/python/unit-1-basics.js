import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Basics = {
    id: 'py-unit-1',
    title: 'Unit 1: Python Fundamentals',
    description: 'Master the cleanest language in the world. Understand the Zen of Python, dynamic typing limitations, and the memory model behind variables.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Python Philosophy 🐍',
            duration: '20 min read',
            content: `
# Deep Dive: The Python Philosophy 🐍

## 1. The Tale of Two Languages

Imagine you want to build a house.

*   **C++ / Java (The Engineers)**: They give you bricks, cement, pipes, and wires. You build everything from scratch. It is fast, efficient, but takes months.
*   **Python (The Magician)**: You wave a wand and say "Build House". It happens instantly, but maybe the plumbing isn't as optimized.

Python prioritizes **Developer Velocity** over **Execution Velocity**.
*   It saves *your* time (expensive), not the *computer's* time (cheap).

## 2. Interpreted vs Compiled

How does the code actually run?

\`\`\`mermaid
graph LR
    A[Source Code] --> B{Process}
    B -- Compiled (C++) --> C[Machine Code .exe]
    C --> D[Run on CPU]
    
    B -- Interpreted (Python) --> E[Interpreter]
    E --> F[Run Line by Line]
    
    style C fill:#f56565,stroke:#c53030
    style E fill:#4299e1,stroke:#2b6cb0
\`\`\`

*   **Compiled**: The entire book is translated into binary *before* you read it. If there is one typo on page 100, the whole book fails to print.
*   **Interpreted**: You read the book line-by-line using a translator. If there is a typo on page 100, you read 99 pages before crashing.

> [!WARNING]
> Because Python is interpreted line-by-line, runtime errors are common. You might have a bug in a function that only runs once a year (like "Happy New Year"), and you won't know until that day comes.

## 3. The Zen of Python

Python isn't just a syntax; it's a religion. Tim Peters wrote the guiding principles.
Type \`import this\` in any Python shell to see them.

**Key Principles:**
1.  **Readability counts.** (Code is read more often than it is written).
2.  **Simple is better than complex.**
3.  **Explicit is better than implicit.** (No magic hidden behavior).
4.  **There should be one-- and preferably only one --obvious way to do it.**

## 4. Whitespace: The Elephant in the Room

In JavaScript, C, or Java, blocks are defined by \`{}\`.
In Python, blocks are defined by **indentation** (usually 4 spaces).

**JavaScript:**
\`\`\`javascript
if (true) {
    console.log("Hello"); // Braces define the block
}
\`\`\`

**Python:**
\`\`\`python
if True:
    print("Hello") # Spaces define the block
\`\`\`

If you mess up the spacing, the code breaks. This forces you to write clean code.
            `
        },
        {
            id: 'py-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Variables & Memory 📦',
            duration: '25 min read',
            content: `
# Deep Dive: Variables & Memory 📦

## 1. The Post-It Note Model

In many languages (like C), a variable is a **Box**. 
If you make a box for Integers \`int x\`, you can ONLY put integers in it.

In Python, a variable is a **Name Tag** (Post-it note) attached to an object.

\`\`\`python
a = 10
\`\`\`

1.  Python creates an Object \`10\` in memory (Address: 0x123).
2.  Python sticks the tag \`a\` onto that object.

\`\`\`python
a = "Hello"
\`\`\`

1.  Python creates an Object \`"Hello"\` in memory (Address: 0x456).
2.  Python rips the tag \`a\` off \`10\` and sticks it onto \`"Hello"\`.
3.  The \`10\` object is now lonely (Reference Count = 0) and gets eaten by the Garbage Collector.

## 2. Dynamic Typing

This "Tag" system means Python is **Dynamically Typed**. You don't declare types.

\`\`\`python
x = 100      # x is an Integer
x = 10.5     # x is now a Float
x = "Zero"   # x is now a String
\`\`\`

> [!IMPORTANT]
> Just because you *can* change types doesn't mean you *should*. It confuses other developers. Try to keep variables consistent.

## 3. Naming Conventions (PEP 8)

Python has a strict style guide called **PEP 8**.

| Type | Convention | Example |
| :--- | :--- | :--- |
| **Variables** | snake_case | \`user_name\`, \`total_score\` |
| **Functions** | snake_case | \`calculate_tax()\` |
| **Classes** | PascalCase | \`UserProfile\`, \`GameEngine\` |
| **Constants** | UPPER_CASE | \`MAX_RETRIES\`, \`API_KEY\` |

**❌ Bad:**
\`\`\`python
userName = "Alice"  # Java style (camelCase)
User_Name = "Alice" # Weird mix
\`\`\`

**✅ Good:**
\`\`\`python
user_name = "Alice"
\`\`\`

## 4. Multiple Assignment

Python allows cool shortcuts:

\`\`\`python
# Assign same value
x = y = z = 0

# Unpacking (The coolest feature)
x, y = 10, 20
\`\`\`

This enables the famous "Swap" one-liner:
\`\`\`python
a, b = b, a  # Swaps values without a temp variable!
\`\`\`
            `
        },
        {
            id: 'py-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Primitives 🧬',
            duration: '20 min read',
            content: `
# Deep Dive: The Primitives 🧬

## 1. The Atoms of Python

Everything in Python is an Object, but these 4 behave like primitives.

### The Big 4
1.  **Integer (\`int\`)**: Whole numbers. Unlimited size (unlike C++ which maxes at 2^64).
    *   \`x = 999999999999999999999\` (Totally fine).
2.  **Float (\`float\`)**: Decimal numbers.
    *   **Warning**: Floating point math is imprecise. \`0.1 + 0.2 != 0.3\`.
3.  **String (\`str\`)**: Text. Immutable.
    *   Once made, you can't change a letter. You have to make a new string.
4.  **Boolean (\`bool\`)**: Logic.
    *   Values are \`True\` and \`False\` (Must be Capitalized!).

## 2. Type Checking

You can inspect any object's DNA:

\`\`\`python
x = 42
print(type(x))  # <class 'int'>

if isinstance(x, int):
    print("It is a number")
\`\`\`

> [!TIP]
> Use \`isinstance(x, int)\` instead of \`type(x) == int\`. It supports inheritance (Unit 6) better.

## 3. Type Casting (The Transformation)

You can force data to change forms.

\`\`\`python
# String to Int
age = "25"
age_num = int(age) + 5  # 30

# Float to Int
pi = 3.99
print(int(pi))  # 3 (Truncates, does NOT round)
\`\`\`

## 4. Truthy and Falsy

In conditionals, Python converts everything to Bool.

**Falsy Values (Evaluate to False):**
*   \`False\`
*   \`0\` (Integer) or \`0.0\` (Float)
*   \`""\` (Empty String)
*   \`None\` (The Null value)
*   \`[]\`, \`{}\` (Empty lists/dicts)

**Truthy Values:**
*   Everything else.

\`\`\`python
name = ""
if name:
    print("Has name") # Won't print
else:
    print("Anonymous") # Prints!
\`\`\`
            `
        },
        {
            id: 'py-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The String Engine 📜',
            duration: '15 min read',
            content: `
# Deep Dive: The String Engine 📜

## 1. The Evolution of Formatting

String formatting has a messy history in Python.

### Gen 1: C-Style (%)
\`\`\`python
name = "Neo"
print("Hello %s" % name) # Old, clunky. Avoid.
\`\`\`

### Gen 2: .format()
\`\`\`python
print("Hello {}".format(name)) # Better, but verbose.
\`\`\`

### Gen 3: F-Strings (Python 3.6+) 👑
The Modern Standard. Fast, clean, readable.
\`\`\`python
print(f"Hello {name}")
\`\`\`

## 2. F-String Magic

F-strings evaluate expressions **inside** the curly braces.

\`\`\`python
price = 100
tax = 0.5
print(f"Total: {price * (1 + tax)}") # Total: 150.0

# Number formatting
value = 1234.56789
print(f"{value:.2f}") # "1234.57" (Rounded to 2 decimals)
\`\`\`

## 3. Quotes and Escapes

Use Single \`'\` or Double \`"\` quotes. It doesn't matter, just be consistent.

**The Escape Character (\\)**:
If you need a quote inside a quote:
\`\`\`python
print("She said \\"Hello\\"")
\`\`\`

**Or just switch quotes**:
\`\`\`python
print('She said "Hello"')
\`\`\`

## 4. Docstrings

Triple quotes \`"""\` allow multi-line strings.
We use them for **Documentation**.

\`\`\`python
def add(a, b):
    """
    Adds two numbers together.
    Returns the sum.
    """
    return a + b
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'py-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Script',
            duration: '20 min',
            content: `
# Lab 1: The Script

We are writing a Python script to initialize a server configuration.
We need to set the host, port, and status.

## The Mission
1.  **Define**: Create variable \`host\` with value \`"localhost"\`.
2.  **Define**: Create variable \`port\` with value \`8080\` (integer).
3.  **Output**: Print the \`host\` variable.

## Rules
*   Use snake_case if variables were composed (e.g., \`server_host\`), but here simple names are fine.
*   Strings can use single or double quotes.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: host = "localhost"',
                    completed: false,
                    regex: /host\s*=\s*(['"])localhost\1/,
                    hints: [
                        "Create a variable named 'host'.",
                        "Assign the string 'localhost' to it using the = operator.",
                        "Solution: `host = 'localhost'`"
                    ]
                },
                {
                    id: 2,
                    description: 'Define: port = 8080',
                    completed: false,
                    regex: /port\s*=\s*8080/,
                    hints: [
                        "Create a variable named 'port'.",
                        "Assign the number 8080 to it. Do NOT use quotes for numbers.",
                        "Solution: `port = 8080`"
                    ]
                },
                {
                    id: 3,
                    description: 'Output: Print the host',
                    completed: false,
                    regex: /print\s*\(\s*host\s*\)/,
                    hints: [
                        "Use the print() function.",
                        "Pass the variable name inside the parentheses.",
                        "Solution: `print(host)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'main.py',
                    language: 'python',
                    content: `# Task 1: Define host
# ...

# Task 2: Define port
# ...

# Task 3: Print host
# ...
`
                }
            ]
        },
        {
            id: 'py-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Type Shifter',
            duration: '20 min',
            content: `
# Lab 2: The Type Shifter

Experiment with Python's dynamic typing. We will reuse the variable \`data\` for different types.

## The Mission
1.  **Initialize**: Set \`data\` to the integer \`100\`.
2.  **Reassign**: Change \`data\` to the string \`"Processing"\`.
3.  **Check**: Print the type of \`data\`.

## Mental Model
Remember the "Post-it Note". You are moving the tag \`data\` from the number box to the string box.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize: data = 100',
                    completed: false,
                    regex: /data\s*=\s*100/,
                    hints: [
                        "Set the variable `data` to the number 100.",
                        "No quotes needed for integers.",
                        "Solution: `data = 100`"
                    ]
                },
                {
                    id: 2,
                    description: 'Reassign: data = "Processing"',
                    completed: false,
                    regex: /data\s*=\s*(['"])Processing\1/,
                    hints: [
                        "Update the SAME variable `data`.",
                        "Assign it the string value 'Processing'.",
                        "Solution: `data = 'Processing'`"
                    ]
                },
                {
                    id: 3,
                    description: 'Check: print(type(data))',
                    completed: false,
                    regex: /print\s*\(\s*type\s*\(\s*data\s*\)\s*\)/,
                    hints: [
                        "Use `type(data)` to get the class.",
                        "Wrap that whole expression in `print(...)`.",
                        "Solution: `print(type(data))`"
                    ]
                }
            ],
            files: [
                {
                    name: 'types.py',
                    language: 'python',
                    content: `# 1. Initialize data
# ...

# 2. Reassign data
# ...

# 3. Print type
# ...
`
                }
            ]
        },
        {
            id: 'py-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Bio Generator',
            duration: '25 min',
            content: `
# Lab 3: The Bio Generator

We need to generate a profile description for a user interface.
We will use **F-Strings** to inject variables into a sentence.

## The Mission
1.  **Variables**: \`username = "Neo"\`, \`level = 5\`, \`is_admin = True\`.
2.  **Compose**: Create a variable \`bio\` that contains:
    *"User: Neo | Level: 5 | Admin: True"*
    (Use an f-string to build this).
3.  **Print**: Print the \`bio\`.

## Syntax Reminder
\`\`\`python
f"Text {variable} Text"
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Define username, level, is_admin',
                    completed: false,
                    regex: /(?=.*\busername\s*=\s*(['"])Neo\1)(?=.*\blevel\s*=\s*5\b)(?=.*\bis_admin\s*=\s*True\b)/s,
                    hints: [
                        "Define 3 variables on separate lines.",
                        "Remember `True` must be capitalized.",
                        "Solution:\nusername = 'Neo'\nlevel = 5\nis_admin = True"
                    ]
                },
                {
                    id: 2,
                    description: 'Compose: bio = f"..."',
                    completed: false,
                    regex: /bio\s*=\s*f(['"]).*\{username\}.*\{level\}.*\{is_admin\}.*\1/,
                    hints: [
                        "Start the string with `f` before the quote.",
                        "Use `{}` to inject variables.",
                        "Solution: `bio = f'User: {username} | Level: {level} | Admin: {is_admin}'`"
                    ]
                },
                {
                    id: 3,
                    description: 'Print: bio',
                    completed: false,
                    regex: /print\s*\(\s*bio\s*\)/,
                    hints: [
                        "Print the resulting string.",
                        "Solution: `print(bio)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'bio.py',
                    language: 'python',
                    content: `# 1. Define variables
# ...

# 2. Create bio using f-string
# ...

# 3. Print bio
# ...
`
                }
            ]
        },
        {
            id: 'py-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Debugger',
            duration: '15 min',
            content: `
# Lab 4: The Debugger

The new intern committed some broken code. It's crashing production.
Your job is to fix the Syntax Errors.

## The Bugs
1.  **Line 1**: The string literal is missing a closing quote.
2.  **Line 4**: The \`print\` statement is indented unnecessarily (IndentationError).
3.  **Line 7**: The variable \`Tax\` is used, but defined as \`tax\` (NameError/Case Sensitivity).

## The Mission
Fix the code so it runs without errors.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Fix Quote: name = "Python"',
                    completed: false,
                    regex: /name\s*=\s*(['"])Python\1/,
                    hints: [
                        "The string 'Python' is missing a closing quote.",
                        "Add a matching quote at the end.",
                        "Solution: `name = \"Python\"`"
                    ]
                },
                {
                    id: 2,
                    description: 'Fix Indent: Remove space before print',
                    completed: false,
                    regex: /^print\s*\(\s*name\s*\)/m,
                    hints: [
                        "Python is strict about whitespace.",
                        "Remove the spaces at the start of the line.",
                        "Solution: Ensure `print` is at the start of the line (no indentation)."
                    ]
                },
                {
                    id: 3,
                    description: 'Fix Case: Use tax (lowercase)',
                    completed: false,
                    regex: /print\s*\(\s*100\s*\*\s*tax\s*\)/,
                    hints: [
                        "Variables are case-sensitive.",
                        "`Tax` is not defined, but `tax` is.",
                        "Solution: Change `Tax` to `tax`."
                    ]
                }
            ],
            files: [
                {
                    name: 'debug.py',
                    language: 'python',
                    content: `name = "Python

   print(name)

tax = 0.1
print(100 * Tax)
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 1 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What defines a code block in Python?',
                    options: [
                        'Curly Braces {}',
                        'Keywords begin/end',
                        'Indentation (Whitespace)',
                        'Parentheses ()'
                    ],
                    correctIndex: 2,
                    explanation: 'Python uses consistent indentation (usually 4 spaces) to define scope, unlike C-family languages that use braces.'
                },
                {
                    id: 'q2',
                    question: 'Which of these is a VALID variable name in Python?',
                    options: [
                        'user-name',
                        '2user',
                        'user_name',
                        'class'
                    ],
                    correctIndex: 2,
                    explanation: 'Snake_case (`user_name`) is the standard. Dash `-` is subtraction. Numbers cannot start names. `class` is a reserved keyword.'
                },
                {
                    id: 'q3',
                    question: 'What is the output of: print(f"val: {1+1}")?',
                    options: [
                        'val: {1+1}',
                        'val: 2',
                        'val: 1+1',
                        'Error'
                    ],
                    correctIndex: 1,
                    explanation: 'F-strings evaluate the expression inside `{}`. `1+1` becomes `2`.'
                },
                {
                    id: 'q4',
                    question: 'What happens if you run: print(message) BEFORE defining message?',
                    options: [
                        'It prints "undefined"',
                        'It prints an empty line',
                        'It throws a NameError (Crash)',
                        'It creates the variable automatically'
                    ],
                    correctIndex: 2,
                    explanation: 'Python executes line-by-line. If the name tag does not exist when the line runs, it crashes with NameError.'
                },
                {
                    id: 'q5',
                    question: 'Which variable type is Mutable (Changeable)?',
                    options: [
                        'String',
                        'Integer',
                        'Float',
                        'None of the above (Primitives are Immutable)'
                    ],
                    correctIndex: 3,
                    explanation: 'In Python, all primitives (str, int, float, bool) are Immutable. When you "change" them, you are actually creating a NEW object and moving the tag.'
                }
            ]
        }
    ]
};
