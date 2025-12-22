import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Functions = {
    id: 'py-unit-5',
    title: 'Unit 5: Functions & Modules',
    description: 'Learn to write reusable logic, manage variable scope, and harness the power of Python\'s standard library.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Black Box Model 📦',
            duration: '15 min read',
            content: `
# Deep Dive: The Black Box Model 📦

## 1. The Vending Machine Metaphor
A function is like a Vending Machine.
1.  **Input (Arguments)**: You put coins/selection in.
2.  **Process (Code)**: The machine whirs, checks stock, moves motors.
3.  **Output (Return)**: It drops a soda.

\`\`\`mermaid
graph LR
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef input fill:#1e293b,stroke:#f59e0b,stroke-width:4px,color:#fff;
    classDef process fill:#1e293b,stroke:#3b82f6,stroke-width:4px,color:#fff;
    classDef output fill:#1e293b,stroke:#10b981,stroke-width:4px,color:#fff;

    A[Input: Arguments] --> B[Process: Code Body]
    B --> C[Output: Return Value]
    
    class A input;
    class B process;
    class C output;
    
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

## 2. Print vs Return
This is the #1 mistake beginners make.

*   **Print**: Putting the soda on a billboard. Everyone sees it, but you can't *eat* it.
*   **Return**: Handing the soda to the user. They can drink it, store it, or give it to someone else.

\`\`\`python
def bad_math(a, b):
    print(a + b) # Useless for further math

def good_math(a, b):
    return a + b # Can be used: result = good_math(1, 2) * 5
\`\`\`

## 3. DRY Principle
**D**on't **R**epeat **Y**ourself.
If you copy-paste code more than twice, it deserves to be a function.
            `
        },
        {
            id: 'py-5-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Stack & Scope 🥞',
            duration: '20 min read',
            content: `
# Deep Dive: The Stack & Scope 🥞

## 1. The Call Stack
Python manages function calls using a "Stack" (Like a stack of plates).
When you call a function, Python adds a "Frame" to the top. When it returns, the frame is destroyed.

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef stack fill:#1e293b,stroke:#8b5cf6,stroke-width:4px,color:#fff;

    subgraph Memory
    Global[Global Frame] --> Local1[Frame: main]
    Local1 --> Local2[Frame: calculate_area]
    end
    
    class Local1 stack;
    class Local2 stack;
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

## 2. The One-Way Mirror (Scope)
*   **Inside -> Out**: Functions CAN see global variables (read-only by default).
*   **Outside -> In**: The Global scope CANNOT see variables inside a function.

\`\`\`python
secret_code = "1234" # Global

def hack_nasa():
    virus_strength = 9000 # Local
    print(secret_code) # Works! Accessing Global.

print(virus_strength) # ERROR! Cannot see inside the function.
\`\`\`

## 3. Shadowing
If you name a local variable the same as a global one, the local one "shadows" (hides) the global one. It does NOT change the global variable.
            `
        },
        {
            id: 'py-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Modules (Batteries Included) 🔋',
            duration: '15 min read',
            content: `
# Deep Dive: Modules 🔋

## 1. Don't Reinvent the Wheel
Python comes with a massive "Standard Library".
Before you write complex math, random generation, or file handling code, check if Python already did it.

\`\`\`mermaid
classDiagram
    class Python {
        +math
        +random
        +datetime
        +json
        +os
    }
    class YourCode {
        +import math
        +import random
    }
    Python <|-- YourCode : Uses
    
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
\`\`\`

## 2. The Import Systems

**Option A: Import the Module (Recommended)**
\`\`\`python
import math
print(math.sqrt(25)) # Clear where sqrt comes from
\`\`\`

**Option B: From Import (Specifics)**
\`\`\`python
from math import sqrt
print(sqrt(25)) # Cleaner, but can be confusing if code is long
\`\`\`

**Option C: The Taboo (Avoid)**
\`\`\`python
from math import * 
# Imports EVERYTHING. Pollutes your namespace. Hard to debug.
\`\`\`
            `
        },
        {
            id: 'py-5-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: First-Class Citizens 🥇',
            duration: '20 min read',
            content: `
# Deep Dive: First-Class Citizens 🥇

## 1. Functions are Data
In Python, a function is just a variable. You can:
1.  Assign it to a variable (\`job = print\`).
2.  Pass it as an argument.
3.  Return it from another function.

\`\`\`mermaid
graph LR
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef func fill:#1e293b,stroke:#ec4899,stroke-width:4px,color:#fff;

    A[Variable: processor] --> B(Function Object)
    C[Function: map] -->|Takes| B
    
    class B func;
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

## 2. Lambdas (Anonymous Functions)
Sometimes you need a tiny function for just one moment (like a sort key).
Defining a full \`def\` is overkill.

\`\`\`python
# The Traditional Way
def square(x):
    return x * x

# The Lambda Way
square = lambda x: x * x
\`\`\`

## 3. High-Order Functions
Functions that take other functions.
*   \`map(func, list)\`: Applies func to every item.
*   \`filter(func, list)\`: Keeps items where func returns True.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'py-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Bio Generator',
            duration: '30 min',
            content: `
# Lab 1: The Bio Generator

We need a system to generate user profiles automatically.
You will build a function that accepts user details and returns a formatted bio string.

## The Mission
1.  **Define**: Create a function \`create_bio(name, age, city)\`.
2.  **Logic**: It should NOT print inside. It must **RETURN** a string.
3.  **Format**: "Name: [name], Age: [age], Location: [city]".
4.  **Test**: Call it with \`name="Alice", age=30, city="Paris"\`.
5.  **Output**: Print the result of the call.

## Mental Model
You are building a stamp. You carve the design once (define function), then you can stamp it on as many papers as you want (call function).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define function signature',
                    completed: false,
                    regex: /def\s+create_bio\s*\(\s*name\s*,\s*age\s*,\s*city\s*\):/,
                    hints: [
                        "Use `def` keyword.",
                        "Parameters must be comma-separated.",
                        "Solution: `def create_bio(name, age, city):`"
                    ]
                },
                {
                    id: 2,
                    description: 'Create formatted string',
                    completed: false,
                    regex: /(?=.*f['"])Name: \{name\}, Age: \{age\}, Location: \{city\}['"]/,
                    hints: [
                        "Use an f-string: `f'...'`",
                        "Include the variables in curly braces `{}`.",
                        "Solution: `f'Name: {name}, Age: {age}, Location: {city}'`"
                    ]
                },
                {
                    id: 3,
                    description: 'Return (Do not print)',
                    completed: false,
                    regex: /return\s+f['"].*/,
                    hints: [
                        "Use the `return` keyword, not `print`.",
                        "Solution: `return f'...'`"
                    ]
                },
                {
                    id: 4,
                    description: 'Call the function',
                    completed: false,
                    regex: /create_bio\s*\(\s*(['"])Alice\1\s*,\s*30\s*,\s*(['"])Paris\2\s*\)/,
                    hints: [
                        "Call the function with the specific test values.",
                        "Solution: `create_bio('Alice', 30, 'Paris')`"
                    ]
                },
                {
                    id: 5,
                    description: 'Assign or Print Result',
                    completed: false,
                    regex: /print\s*\(\s*create_bio/,
                    hints: [
                        "Since the function returns data, you need to print the call to see it.",
                        "Solution: `print(create_bio(...))`"
                    ]
                },
                {
                    id: 6,
                    description: 'Docstring (Best Practice)',
                    completed: false,
                    regex: /"""\s*Generates a bio.*\s*"""|'''\s*Generates a bio.*\s*'''/s,
                    hints: [
                        "Add a triple-quoted string right after the def line.",
                        "Solution: `\"\"\"Generates a bio.\"\"\"`"
                    ]
                },
                {
                    id: 7,
                    description: 'Check indentation',
                    completed: false,
                    regex: /def .*:[\r\n]+(    |\t)return/,
                    hints: [
                        "The return statement must be indented inside the function.",
                        "Solution: Indent 4 spaces."
                    ]
                }
            ],
            files: [
                {
                    name: 'bio.py',
                    language: 'python',
                    content: `# Define your function here
# def create_bio...

# Call and print it below
`
                }
            ]
        },
        {
            id: 'py-5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Scope Vault',
            duration: '35 min',
            content: `
# Lab 2: The Scope Vault

We need to secure our bank vault.
We will demonstrate how **Local Variables** keep secrets safe.

## The Mission
1.  **Global**: Define \`bank_name = "Global Bank"\`.
2.  **Function**: Define \`open_vault()\`.
3.  **Local**: Inside, define \`vault_code = 9999\`.
4.  **Access**: Inside, print \`f"Welcome to {bank_name}"\` (Proof we can see global).
5.  **Access**: Inside, print \`vault_code\`.
6.  **Simulation**: Outside the function, try to print \`vault_code\` wrapped in a \`try/except\` block to handle the error gracefully (since we know it will fail).
7.  **Call**: Run \`open_vault()\`.

## Mental Model
The Vault is a room (Function).
People inside the room can see the sign outside (Global).
People outside cannot see the code written on the whiteboard inside (Local).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Global variable',
                    completed: false,
                    regex: /bank_name\s*=\s*(['"])Global Bank\1/,
                    hints: [
                        "Define at top level, no indentation.",
                        "Solution: `bank_name = 'Global Bank'`"
                    ]
                },
                {
                    id: 2,
                    description: 'Define function',
                    completed: false,
                    regex: /def\s+open_vault\s*\(\s*\):/,
                    hints: [
                        "Define `open_vault` taking no arguments.",
                        "Solution: `def open_vault():`"
                    ]
                },
                {
                    id: 3,
                    description: 'Define Local variable',
                    completed: false,
                    regex: /vault_code\s*=\s*9999/,
                    hints: [
                        "Indented inside the function.",
                        "Solution: `vault_code = 9999`"
                    ]
                },
                {
                    id: 4,
                    description: 'Access Global inside',
                    completed: false,
                    regex: /print\s*\(.*bank_name.*\)/,
                    hints: [
                        "Print the global `bank_name` inside the function.",
                        "Solution: `print(f'Welcome to {bank_name}')`"
                    ]
                },
                {
                    id: 5,
                    description: 'Access Local inside',
                    completed: false,
                    regex: /print\s*\(.*vault_code.*\)/,
                    hints: [
                        "Print the local `vault_code` inside the function.",
                        "Solution: `print(vault_code)`"
                    ]
                },
                {
                    id: 6,
                    description: 'Run the function',
                    completed: false,
                    regex: /^open_vault\(\)/m,
                    hints: [
                        "Call the function at the bottom (unindented).",
                        "Solution: `open_vault()`"
                    ]
                },
                {
                    id: 7,
                    description: 'Verify Isolation (Try/Except)',
                    completed: false,
                    regex: /try:[\s\n]+print\(vault_code\)[\s\n]+except NameError:/,
                    hints: [
                        "Wrap the outside print in try/except NameError.",
                        "Solution: `try: print(vault_code) except NameError: pass`"
                    ]
                }
            ],
            files: [
                {
                    name: 'vault.py',
                    language: 'python',
                    content: `bank_name = "Global Bank"

# Write your function here

# Call it

# Try to access local variable
try:
    print(vault_code)
except NameError:
    print("Security Alert: Cannot access vault_code from outside!")
`
                }
            ]
        },
        {
            id: 'py-5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Dice Commander',
            duration: '35 min',
            content: `
# Lab 3: The Dice Commander

You are building a tabletop RPG engine.
You need to generate random events using Python's \`random\` module.

## The Mission
1.  **Import**: \`import random\`.
2.  **Function**: \`roll_d6()\` -> Returns random int 1-6.
3.  **Function**: \`roll_d20()\` -> Returns random int 1-20.
4.  **Choice**: \`crit_messages = ["Crushed it!", "Unstoppable!", "Legendary!"]\`.
5.  **Logic**:
    *   Roll a D20.
    *   If roll is 20, print a random message from \`crit_messages\`.
    *   Else, print "Rolled: [number]".

## Mechanics
*   \`random.randint(a, b)\`: Random integer inclusive.
*   \`random.choice(list)\`: Pick one item randomly.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import random',
                    completed: false,
                    regex: /^import\s+random/m,
                    hints: [
                        "Always import at the top.",
                        "Solution: `import random`"
                    ]
                },
                {
                    id: 2,
                    description: 'Define roll_d6',
                    completed: false,
                    regex: /def\s+roll_d6\(\):[\s\n]+return\s+random\.randint\(\s*1\s*,\s*6\s*\)/,
                    hints: [
                        "Define function, return randint(1, 6).",
                        "Solution: `return random.randint(1, 6)`"
                    ]
                },
                {
                    id: 3,
                    description: 'Define roll_d20',
                    completed: false,
                    regex: /def\s+roll_d20\(\):[\s\n]+return\s+random\.randint\(\s*1\s*,\s*20\s*\)/,
                    hints: [
                        "Define function, return randint(1, 20).",
                        "Solution: `return random.randint(1, 20)`"
                    ]
                },
                {
                    id: 4,
                    description: 'Define crit messages',
                    completed: false,
                    regex: /crit_messages\s*=\s*\[.*\]/,
                    hints: [
                        "Create the list of strings.",
                        "Solution: `crit_messages = [...]`"
                    ]
                },
                {
                    id: 5,
                    description: 'Capture the roll',
                    completed: false,
                    regex: /roll\s*=\s*roll_d20\(\)/,
                    hints: [
                        "Call roll_d20 and save it to a variable.",
                        "Solution: `roll = roll_d20()`"
                    ]
                },
                {
                    id: 6,
                    description: 'Handle Critical Hit (20)',
                    completed: false,
                    regex: /if\s+roll\s*==\s*20:[\s\n]+print\(\s*random\.choice\(crit_messages\)\s*\)/,
                    hints: [
                        "If roll is 20, use `random.choice`.",
                        "Solution: `print(random.choice(crit_messages))`"
                    ]
                },
                {
                    id: 7,
                    description: 'Handle Normal Hit',
                    completed: false,
                    regex: /else:[\s\n]+print\(f?['"].*['"]\)/,
                    hints: [
                        "Else, print the number.",
                        "Solution: `else: print(roll)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'rpg.py',
                    language: 'python',
                    content: `# RPG Engine
import random

# Define functions...

# Game Loop
`
                }
            ]
        },
        {
            id: 'py-5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Data Pipeline',
            duration: '40 min',
            content: `
# Lab 4: The Data Pipeline

We process data in modern Python using **Functional Programming**.
We have raw prices, and we need to apply discounts and tax.

## The Mission
1.  **Data**: \`prices = [100, 200, 50, 400]\`.
2.  **Lambda 1**: \`discount = lambda p: p * 0.9\` (10% off).
3.  **Lambda 2**: \`tax = lambda p: p * 1.05\` (5% Tax).
4.  **Pipeline**:
    *   Map \`discount\` over \`prices\`.
    *   Map \`tax\` over the result.
    *   Convert to list.
5.  **Output**: Print final prices.

## Mental Model
Imagine a conveyor belt (List).
Robot arms (Map w/ Lambda) modify items as they pass by.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define raw prices',
                    completed: false,
                    regex: /prices\s*=\s*\[100,\s*200,\s*50,\s*400\]/,
                    hints: [
                        "Define the list.",
                        "Solution: `prices = [100, 200, 50, 400]`"
                    ]
                },
                {
                    id: 2,
                    description: 'Define discount lambda',
                    completed: false,
                    regex: /discount\s*=\s*lambda\s+p\s*:\s*p\s*\*\s*0\.9/,
                    hints: [
                        "Variable = lambda arg: expression",
                        "Solution: `discount = lambda p: p * 0.9`"
                    ]
                },
                {
                    id: 3,
                    description: 'Define tax lambda',
                    completed: false,
                    regex: /tax\s*=\s*lambda\s+p\s*:\s*p\s*\*\s*1\.05/,
                    hints: [
                        "Variable = lambda arg: expression",
                        "Solution: `tax = lambda p: p * 1.05`"
                    ]
                },
                {
                    id: 4,
                    description: 'Apply Discount Map',
                    completed: false,
                    regex: /map\(\s*discount\s*,\s*prices\s*\)/,
                    hints: [
                        "Use `map(function, list)`.",
                        "Solution: `map(discount, prices)`"
                    ]
                },
                {
                    id: 5,
                    description: 'Apply Tax Map (Chained)',
                    completed: false,
                    regex: /map\(\s*tax\s*,.*map\(/,
                    hints: [
                        "You can pass the first map result into the second map map.",
                        "Solution: `map(tax, map(discount, prices))`"
                    ]
                },
                {
                    id: 6,
                    description: 'Convert to List',
                    completed: false,
                    regex: /final_prices\s*=\s*list\(.*\)/,
                    hints: [
                        "Map returns an iterator. Wrap it in `list()`.",
                        "Solution: `final_prices = list(map(...))`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print Result',
                    completed: false,
                    regex: /print\(\s*final_prices\s*\)/,
                    hints: [
                        "Print the final list.",
                        "Solution: `print(final_prices)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'pipeline.py',
                    language: 'python',
                    content: `prices = [100, 200, 50, 400]

# Define lambdas

# Build pipeline (Map -> Map -> List)

# Print
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 5 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the "Scope" of a variable defined inside a function?',
                    options: [
                        'Global (Visible everywhere)',
                        'Local (Visible only inside)',
                        'Universal (Visible to other files)',
                        'Static (Retained after function ends)'
                    ],
                    correctIndex: 1,
                    explanation: 'Variables defined inside `def` are Local. They generally vanish when the function returns.'
                },
                {
                    id: 'q2',
                    question: 'What does `return` do that `print` does not?',
                    options: [
                        'Displays text on screen',
                        'Ends the function and passes value back',
                        'Repeats the function',
                        'Saves inputs to a file'
                    ],
                    correctIndex: 1,
                    explanation: '`print` shows pixels. `return` hands back data to the code that called the function.'
                },
                {
                    id: 'q3',
                    question: 'How do you import only the `pi` constant from the `math` module?',
                    options: [
                        'import math.pi',
                        'from math import pi',
                        'using math::pi',
                        'get pi from math'
                    ],
                    correctIndex: 1,
                    explanation: 'The syntax `from module import item` brings that specific item into your namespace.'
                },
                {
                    id: 'q4',
                    question: 'What is a Lambda function?',
                    options: [
                        'A function connected to the internet',
                        'A function with no arguments',
                        'An anonymous, single-line function',
                        'A recursive function'
                    ],
                    correctIndex: 2,
                    explanation: 'Lambdas are "syntax sugar" for creating small, nameless functions, usually for sorting or mapping.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you define `x = 10` inside a function, but `x = 5` exists globally?',
                    options: [
                        'The global x becomes 10',
                        'Error: Duplicate Logic',
                        'The local x "shadows" the global x inside the function only',
                        'Python crashes'
                    ],
                    correctIndex: 2,
                    explanation: 'This is called "Shadowing". The function uses its own private `x`, leaving the global `x` untouched.'
                }
            ]
        }
    ]
};
