import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2ControlFlow = {
    id: 'py-unit-2',
    title: 'Unit 2: Control Flow & Logic',
    description: 'Master the art of decision making. Learn how computers think, loop through time, and control the flow of execution.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Logic Gate ⛩️',
            duration: '20 min read',
            content: `
# Deep Dive: The Logic Gate ⛩️

## 1. Boolean Algebra
Computers don't see "Maybe". They only see **True (1)** and **False (0)**.
This binary world is governed by **Boolean Algebra**.

### The Three Guards
Imagine 3 guards protecting a castle.

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef logic fill:#1e293b,stroke:#f59e0b,stroke-width:4px,color:#fff;
    classDef pass fill:#1e293b,stroke:#10b981,stroke-width:4px,color:#fff;
    classDef fail fill:#1e293b,stroke:#ef4444,stroke-width:4px,color:#fff;

    subgraph AND_Guard [The AND Guard]
    A[Ticket] --> C{AND}
    B[ID Check] --> C
    C -->|Both True| D[Enter Castle]
    C -->|One False| E[Go Home]
    end
    
    class C logic;
    class D pass;
    class E fail;
    
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

1.  **AND (\`and\`)**: The Strict Guard.
    *   "You need a Ticket **AND** an ID."
    *   If you miss *either*, you don't enter.
    *   \`True and True = True\`
    *   \`True and False = False\`

2.  **OR (\`or\`)**: The Chill Guard.
    *   "You need a Cash **OR** a Credit Card."
    *   If you have *at least one*, you enter.
    *   \`True or False = True\`
    *   \`False or False = False\`

3.  **NOT (\`not\`)**: The Contrarian.
    *   He reverses everything.
    *   "If it is **NOT** raining, we play."
    *   \`not True = False\`

## 2. Short-Circuit Evaluation ⚡
Python is lazy (efficient). It stops checking as soon as it knows the answer.

**The AND Short-Circuit:**
\`\`\`python
False and (checks_database() and nukes_the_moon())
\`\`\`
*   Python sees the first **False**.
*   It knows \`False and Anything\` is always **False**.
*   It **STOPS** immediately. The database is never checked. The moon is safe.

**The OR Short-Circuit:**
\`\`\`python
True or (expensive_calculation())
\`\`\`
*   Python sees the first **True**.
*   It knows \`True or Anything\` is always **True**.
*   It **STOPS**. The calculation is skipped.

> [!TIP]
> Use short-circuiting to protect your code.
> \`if user is not None and user.is_active:\`
> If \`user\` is None, the second part never runs, preventing a crash.

## 3. Truth Tables
| A | B | A and B | A or B |
| :--- | :--- | :--- | :--- |
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |
            `
        },
        {
            id: 'py-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Indentation as Logic 📐',
            duration: '15 min read',
            content: `
# Deep Dive: Indentation as Logic 📐

## 1. The Invisible Structure
In C++, Java, or JavaScript, code structure is "Physical" (Braces \`{}\`).
In Python, code structure is "Visual" (Whitespace).

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef action fill:#1e293b,stroke:#3b82f6,stroke-width:4px,color:#fff;

    A[Start] --> B{Condition True?}
    B -- Yes --> C[Run Indented Block]
    B -- No --> D[Skip Block]
    C --> E[Next Line]
    D --> E
    
    class C action;
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

This is a controversial design choice that forces code to be readable.

### The rule of 4
The standard is **4 Spaces** per level.
Do not use Tabs. Do not mix Tabs and Spaces.

\`\`\`python
def make_pizza():
    dough = "kneaded"    # Level 1
    if dough == "kneaded":
        add_sauce()      # Level 2
        add_cheese()     # Level 2
    bake()               # Level 1 (Outside the if)
\`\`\`

## 2. Common Pitfalls

### IndentationError
\`\`\`python
if True:
print("This breaks") # IndentationError: expected an indented block
\`\`\`

### The "Silent Logic" Bug
This is worse than a crash. The code runs, but does the wrong thing.

\`\`\`python
# INTENT: Check password, then print 'Done' regardless.
if password == "secret":
    login()
    print("Done") # Oops! This is indented. It ONLY runs if login succeeds.
\`\`\`

If you mistype the space, you change the *logic* of the program.

## 3. The Colon (:)
The Colon acts as the gatekeeper. It says: "Everything indented after me belongs to me."

*   \`if condition:\`
*   \`else:\`
*   \`elif condition:\`
*   \`while condition:\`
*   \`def function():\`

If you forget the colon, you get a \`SyntaxError\`.
            `
        },
        {
            id: 'py-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Infinite Loop & Memory ♾️',
            duration: '20 min read',
            content: `
# Deep Dive: The Infinite Loop & Memory ♾️

## 1. The Black Hole
An infinite loop happens when the condition never becomes \`False\`.

\`\`\`mermaid
graph LR
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef danger fill:#1e293b,stroke:#ef4444,stroke-width:4px,color:#fff;

    A[Start] --> B{True?}
    B -- Yes --> C[Run Code]
    C --> B
    B -- No --> D[Exit]
    
    class C danger;
    class B danger;
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

\`\`\`python
while True:
    print("Help me")
\`\`\`

### What happens in the hardware?
1.  **CPU Spike**: One core of your CPU goes to 100% usage immediately. It is executing that print instruction billions of times per second.
2.  **The Fan**: Your computer fan will spin up as the CPU gets hot.
3.  **The Frozen UI**: If the loop is on the main thread (like in a UI app), the window stops responding.

## 2. The Dangerous List Growth
The "Memory Leak" loop is the most dangerous.

\`\`\`python
data = []
while True:
    data.append("More Data")
\`\`\`

1.  Every iteration adds a string to RAM.
2.  Python asks the OS for more memory.
3.  **RAM fills up** (8GB, 16GB, 32GB...).
4.  **Swap Thrashing**: The OS tries to write RAM to the Hard Drive (Swap) to survive. Everything slows to a crawl.
5.  **OOM Killer**: The OS (Linux/macOS) eventually points a gun at the Python process and kills it to save the system.

## 3. How to stop it?
*   **CTRL + C**: This sends a \`KeyboardInterrupt\` signal to Python. It tells the interpreter to halt immediately.
*   **Kill Process**: If the terminal is frozen, execute \`kill -9 <pid>\` from another terminal.

> [!WARNING]
> Always ensure your \`while\` loop has a generic "exit strategy" (like a counter or a break condition) during testing.
            `
        },
        {
            id: 'py-2-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Iterables vs Iterators 🔄',
            duration: '20 min read',
            content: `
# Deep Dive: Iterables vs Iterators 🔄

## 1. The Magic of 'For'
The \`for\` loop in Python is different from C-style loops.
It doesn't just count numbers; it **Iterates Objects**.

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef iterator fill:#1e293b,stroke:#3b82f6,stroke-width:4px,color:#fff;

    subgraph Iterator_Protocol
    I[Iterator]:::iterator -->|next| A[Item 1]
    I -->|next| B[Item 2]
    I -->|next| C[Item 3]
    I -->|next| D[StopIteration]
    end

    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

## 2. Under the Hood
What actually happens when you write \`for x in my_list:\`?

1.  **The Iterable**: \`my_list\` is an Iterable (it has data).
2.  **The Iterator**: Python calls \`iter(my_list)\` to get a "Pointer".
3.  **The Next**: Python calls \`next(pointer)\` repeatedly.
4.  **The End**: When the list is empty, it raises a \`StopIteration\` error (which the loop catches silently to stop).

## 3. What is Iterable?
Anything you can loop over:
*   Lists \`[1, 2, 3]\`
*   Strings \`"Hello"\` (It loops character by character!)
*   Dictionaries \`{'a': 1}\` (Loops over keys)
*   Ranges \`range(5)\`
*   Files (Loops lines)

## 4. Range is lazy
\`range(1, 1000000000)\` does **NOT** create a list of a billion numbers in memory.
It creates a tiny generator object that "promises" to give you the next number when you ask for it.
This is why Python loops are memory efficient.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'py-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The ATM Logic',
            duration: '30 min',
            content: `
# Lab 1: The ATM Logic

We are building the core logic for an ATM machine.
We need to validate the PIN, check the balance, and determine if the user is a VIP.

## The Mission
Implementing a secure withdrawal flow using \`if\`, \`elif\`, and \`else\`.

1.  **Input Simulation**: Define variables \`pin = 1234\`, \`balance = 500\`, \`request = 200\`.
2.  **PIN Check**: If \`pin\` is NOT \`1234\`, print "Wrong PIN".
3.  **Withdraw**: If PIN is correct, check if \`request\` <= \`balance\`.
    *   If yes: Deduct \`request\` from \`balance\` and print "Success".
    *   If no: Print "Insufficient Funds".
    *   **Extra**: If the \`request\` is > 1000, print "Limit Exceeded" (Check this *before* balance).

## Mental Model
Think of it as a flowchart. You only go down one path.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Define pin, balance, request',
                    completed: false,
                    regex: /(?=.*\bpin\s*=\s*1234\b)(?=.*\bbalance\s*=\s*500\b)(?=.*\brequest\s*=\s*200\b)/s,
                    hints: [
                        "Define the three variables on separate lines.",
                        "Use integer values (no quotes).",
                        "Solution:\n`pin = 1234`\n`balance = 500`\n`request = 200`"
                    ]
                },
                {
                    id: 2,
                    description: 'Logic: Check PIN',
                    completed: false,
                    regex: /if\s+pin\s*(!=|==)\s*1234:/,
                    hints: [
                        "Start with `if pin != 1234:` or `if pin == 1234:`",
                        "Remember the colon `:` at the end.",
                        "Solution: `if pin != 1234:`"
                    ]
                },
                {
                    id: 3,
                    description: 'Logic: Print Wrong PIN',
                    completed: false,
                    regex: /print\s*\(\s*(['"])Wrong PIN\1\s*\)/,
                    hints: [
                        "Inside the PIN failure block, print the error message.",
                        "Solution: `print('Wrong PIN')`"
                    ]
                },
                {
                    id: 4,
                    description: 'Logic: Check Limit > 1000',
                    completed: false,
                    regex: /elif\s+request\s*>\s*1000:/,
                    hints: [
                        "Use `elif` after your first check.",
                        "Solution: `elif request > 1000:`"
                    ]
                },
                {
                    id: 5,
                    description: 'Logic: Check Balance (Insufficient)',
                    completed: false,
                    regex: /elif\s+request\s*>\s*balance:/,
                    hints: [
                        "Check if request is greater than balance.",
                        "Solution: `elif request > balance:`"
                    ]
                },
                {
                    id: 6,
                    description: 'Logic: Withdraw & Success',
                    completed: false,
                    regex: /(?=.*\bbalance\s*(-=|=\s*balance\s*-)\s*request\b)(?=.*print\s*\(\s*(['"])Success\2\s*\))/s,
                    hints: [
                        "In the `else` block (or final elif), update the balance.",
                        "Then print 'Success'.",
                        "Solution: `balance -= request`\n`print('Success')`"
                    ]
                },
                {
                    id: 7,
                    description: 'Structure: Ensure correct indentation',
                    completed: false,
                    regex: /if.*[\r\n]+(    |\t).*[\r\n]+elif.*[\r\n]+(    |\t).*[\r\n]+else:/s,
                    hints: [
                        "Ensure your `if/elif/else` structure aligns vertically.",
                        "The code inside each block must be indented.",
                        "Solution: Check your spacing."
                    ]
                }
            ],
            files: [
                {
                    name: 'atm.py',
                    language: 'python',
                    content: `# 1. Setup Variables
pin = 0 # Change this
# ...

# 2. Logic Flow
# if ...
#     print ...
# elif ...
#     ...
# else:
#     ...
`
                }
            ]
        },
        {
            id: 'py-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Loop Game',
            duration: '35 min',
            content: `
# Lab 2: The Loop Game

We are building a "Guess the Number" game.
Since we don't know how many attempts the user needs, we use a **While Loop**.

## The Mission
1.  **Setup**: \`secret = 7\`, \`guess = 0\`.
2.  **Loop**: Run checks while \`guess\` is NOT equal to \`secret\`.
3.  **Logic**:
    *   Inside the loop, update \`guess\` (simulate input). Let's simulate a sequence: 1, then 5, then 7.
    *   *To simulate input in this static environment, we will manually increment guess or use a list, but for this basic task, let's just make \`guess\` increase by 1 each loop starting from 1 until it hits 7.*
    *   If \`guess < secret\`: print "Too low".
    *   If \`guess > secret\`: print "Too high".
    *   If \`guess == secret\`: print "You won!".

*Note: In visual coding tasks without interactive \`input()\`, we simulate the changing state.*

## Revised Mission for Auto-Grader
1.  Initialize \`secret = 5\`.
2.  Initialize \`guess = 0\`.
3.  Create a \`while guess != secret:\` loop.
4.  Inside loop: Increment \`guess\` by 1 (\`guess += 1\`).
5.  Inside loop: \`if guess == secret: print("Found")\`.
6.  Inside loop: \`else: print("Searching...")\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: secret=5, guess=0',
                    completed: false,
                    regex: /(?=.*\bsecret\s*=\s*5\b)(?=.*\bguess\s*=\s*0\b)/s,
                    hints: [
                        "Define `secret` as 5 and `guess` as 0.",
                        "Solution: `secret = 5`\n`guess = 0`"
                    ]
                },
                {
                    id: 2,
                    description: 'Loop: while guess != secret',
                    completed: false,
                    regex: /while\s+guess\s*!=\s*secret:/,
                    hints: [
                        "Use the inequality operator `!=`.",
                        "Solution: `while guess != secret:`"
                    ]
                },
                {
                    id: 3,
                    description: 'Action: Increment guess',
                    completed: false,
                    regex: /guess\s*\+=\s*1|guess\s*=\s*guess\s*\+\s*1/,
                    hints: [
                        "Inside the loop, add 1 to guess.",
                        "Solution: `guess += 1`"
                    ]
                },
                {
                    id: 4,
                    description: 'Logic: Check valid match',
                    completed: false,
                    regex: /if\s+guess\s*==\s*secret:/,
                    hints: [
                        "Inside the loop, check if guess equals secret.",
                        "Solution: `if guess == secret:`"
                    ]
                },
                {
                    id: 5,
                    description: 'Feedback: Print "Found"',
                    completed: false,
                    regex: /print\s*\(\s*(['"])Found\1\s*\)/,
                    hints: [
                        "Indented under the `if` statement.",
                        "Solution: `print('Found')`"
                    ]
                },
                {
                    id: 6,
                    description: 'Feedback: Else "Searching..."',
                    completed: false,
                    regex: /else:[\s\n]+print\s*\(\s*(['"])Searching...\1\s*\)/,
                    hints: [
                        "Use an `else` block for the non-matching cases.",
                        "Solution: `else:`\n    `print('Searching...')`"
                    ]
                },
                {
                    id: 7,
                    description: 'Safety: Ensure loop terminates',
                    completed: false,
                    regex: /guess\s*(\+=|=).*/,
                    hints: [
                        "If you don't increment `guess`, the loop runs forever!",
                        "Ensure the increment line is present inside the loop."
                    ]
                }
            ],
            files: [
                {
                    name: 'guess.py',
                    language: 'python',
                    content: `secret = 5
guess = 0

# Write your while loop here
# while ...
`
                }
            ]
        },
        {
            id: 'py-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Grade Analyzer',
            duration: '30 min',
            content: `
# Lab 3: The Grade Analyzer

We have a list of student scores. We need to process them.
This is the perfect job for a **For Loop**.

## The Mission
1.  **Data**: \`scores = [80, 90, 100, 70, 85]\`.
2.  **Accumulator**: \`total = 0\`.
3.  **Loop**: Iterate through \`scores\`.
4.  **Process**: Add each score to \`total\`.
5.  **Logic**: If a score is 100, print "Perfect Score!".
6.  **After Loop**: Calculate \`average = total / 5\`.
7.  **Print**: Print the \`average\`.

## Mental Model
The loop picks up each number from the list, one by one, calls it "score", runs your code, then throws it away and picks up the next one.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: List and Total',
                    completed: false,
                    regex: /(?=.*\bscores\s*=\s*\[.*\])(?=.*\btotal\s*=\s*0\b)/s,
                    hints: [
                        "Define the scores list and initialize total to 0.",
                        "Solution: `scores = [80, 90, 100, 70, 85]`"
                    ]
                },
                {
                    id: 2,
                    description: 'Loop: Iterate scores',
                    completed: false,
                    regex: /for\s+\w+\s+in\s+scores:/,
                    hints: [
                        "Use a logical variable name like `score` or `s`.",
                        "Solution: `for score in scores:`"
                    ]
                },
                {
                    id: 3,
                    description: 'Action: Add to total',
                    completed: false,
                    regex: /total\s*\+=\s*\w+|total\s*=\s*total\s*\+\s*\w+/,
                    hints: [
                        "Inside the loop, add the current item to total.",
                        "Solution: `total += score`"
                    ]
                },
                {
                    id: 4,
                    description: 'Logic: Check Perfect Score',
                    completed: false,
                    regex: /if\s+\w+\s*==\s*100:/,
                    hints: [
                        "Inside the loop, check if the current score is 100.",
                        "Solution: `if score == 100:`"
                    ]
                },
                {
                    id: 5,
                    description: 'Output: Print Perfect Message',
                    completed: false,
                    regex: /print\s*\(\s*(['"])Perfect Score!\1\s*\)/,
                    hints: [
                        "Print the message if score is 100.",
                        "Solution: `print('Perfect Score!')`"
                    ]
                },
                {
                    id: 6,
                    description: 'Calc: Average (Outside Loop)',
                    completed: false,
                    regex: /average\s*=\s*total\s*\/\s*5/,
                    hints: [
                        "This must be done AFTER the loop finishes (unindented).",
                        "Solution: `average = total / 5`"
                    ]
                },
                {
                    id: 7,
                    description: 'Output: Print Average',
                    completed: false,
                    regex: /print\s*\(\s*average\s*\)/,
                    hints: [
                        "Print the calculated average.",
                        "Solution: `print(average)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'grades.py',
                    language: 'python',
                    content: `scores = [80, 90, 100, 70, 85]
total = 0

# Write your loop here
`
                }
            ]
        },
        {
            id: 'py-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Censor',
            duration: '35 min',
            content: `
# Lab 4: The Censor

We are building a chat filter.
We need to skip "bad words" and stop processing if there are too many violations.

## The Mission
1.  **Data**: \`words = ["hello", "bad", "world", "bad", "python", "bad", "bad"]\`.
2.  **Counter**: \`violation_count = 0\`.
3.  **Loop**: Iterate through \`words\`.
4.  **Filter**:
    *   If word is "bad":
        *   Increment \`violation_count\`.
        *   If \`violation_count\` >= 3: Print "Banned" and **BREAK** the loop.
        *   Else: **CONTINUE** (Skip printing this word).
5.  **Success**: If word is safe, print the word.

## Keywords
*   **continue**: "Skip this turn, go to next word."
*   **break**: "Eject! Stop the loop completely."
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Words and Counter',
                    completed: false,
                    regex: /(?=.*\bwords\s*=\s*\[.*\])(?=.*\bviolation_count\s*=\s*0\b)/s,
                    hints: [
                        "Define the list of words and the counter.",
                        "Solution: `violation_count = 0`"
                    ]
                },
                {
                    id: 2,
                    description: 'Loop: Iterate words',
                    completed: false,
                    regex: /for\s+\w+\s+in\s+words:/,
                    hints: [
                        "Standard for loop.",
                        "Solution: `for word in words:`"
                    ]
                },
                {
                    id: 3,
                    description: 'Logic: check "bad"',
                    completed: false,
                    regex: /if\s+\w+\s*==\s*(['"])bad\1:/,
                    hints: [
                        "Check if current word is 'bad'.",
                        "Solution: `if word == 'bad':`"
                    ]
                },
                {
                    id: 4,
                    description: 'Action: Increment violation',
                    completed: false,
                    regex: /violation_count\s*\+=\s*1/,
                    hints: [
                        "Increment the counter inside the if block.",
                        "Solution: `violation_count += 1`"
                    ]
                },
                {
                    id: 5,
                    description: 'Control: Break on 3rd violation',
                    completed: false,
                    regex: /if\s+violation_count\s*>=\s*3:|break/,
                    hints: [
                        "Nested check: if violations >= 3.",
                        "Use `break` to stop the loop.",
                        "Solution: `if violation_count >= 3: break`"
                    ]
                },
                {
                    id: 6,
                    description: 'Control: Continue (Skip bad)',
                    completed: false,
                    regex: /continue/,
                    hints: [
                        "If it wasn't the 3rd violation, we still want to skip printing 'bad'.",
                        "Use `continue` after the break check.",
                        "Solution: `continue`"
                    ]
                },
                {
                    id: 7,
                    description: 'Output: Print safe words',
                    completed: false,
                    regex: /print\s*\(\s*word\s*\)/,
                    hints: [
                        "This print should be logically LAST in the loop.",
                        "If `continue` executed, this line is skipped.",
                        "Solution: `print(word)` at the loop's indentation level."
                    ]
                }
            ],
            files: [
                {
                    name: 'mod.py',
                    language: 'python',
                    content: `words = ["hello", "bad", "world", "bad", "python", "bad", "bad"]
violation_count = 0

# Loop through words
    # Check if 'bad'
        # Add violation
        # Check if banned (break)
        # Skip (continue)
    
    # Print word (if not skipped)
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 2 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you loop over an empty list: `for x in []: print(x)`?',
                    options: [
                        'It prints "None"',
                        'It crashes with IndexError',
                        'It runs 0 times (Nothing happens)',
                        'It loops once with an empty value'
                    ],
                    correctIndex: 2,
                    explanation: 'The iterator is empty initially. `StopIteration` is raised immediately. The loop body never executes.'
                },
                {
                    id: 'q2',
                    question: 'Given: `x = False`. What does `if x:` do?',
                    options: [
                        'Runs the code block because variable exists',
                        'Skips the code block',
                        'Crashes because x is not True',
                        'Prompts user for input'
                    ],
                    correctIndex: 1,
                    explanation: 'The condition evaluates to False. The indented block is skipped.'
                },
                {
                    id: 'q3',
                    question: 'What is the output of `range(5, 5)`?',
                    options: [
                        '5',
                        '[5]',
                        'An empty sequence',
                        '0, 1, 2, 3, 4'
                    ],
                    correctIndex: 2,
                    explanation: 'Range starts at start (5) and stops BEFORE stop (5). Since start == stop, it generates nothing.'
                },
                {
                    id: 'q4',
                    question: 'In `if a and b:`, if `a` is False, does `b` get evaluated?',
                    options: [
                        'Yes, always',
                        'No, Short-circuiting skips it',
                        'Only if b is a function',
                        'Python throws an error'
                    ],
                    correctIndex: 1,
                    explanation: 'For `AND`, if the first part is False, the whole result is False. Python skips `b` to save time.'
                },
                {
                    id: 'q5',
                    question: 'Which sequence of blocks is valid order?',
                    options: [
                        'if -> else -> elif',
                        'elif -> if -> else',
                        'if -> elif -> else',
                        'else -> if'
                    ],
                    correctIndex: 2,
                    explanation: 'You must start with `if`. You can have 0 or more \`elif\`. You can end with 0 or 1 \`else\`.'
                }
            ]
        }
    ]
};
