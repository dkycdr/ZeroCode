import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Lists = {
    id: 'py-unit-3',
    title: 'Unit 3: Data Structures & Lists',
    description: 'Master the power of collections. Learn how to store, organize, and manipulate data with Lists and Tuples.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The List Memory Model 🧠',
            duration: '20 min read',
            content: `
# Deep Dive: The List Memory Model 🧠

## 1. What is a "List" really?
In Python, a List is not just a bag of items. It is a **Dynamic Array of Pointers**.
This is different from a Linked List (common in C CS classes).

\`\`\`mermaid
graph TD
    classDef memory fill:#2D3748,stroke:#CBD5E0,stroke-width:2px,color:#fff;
    classDef pointer fill:#DD6B20,stroke:#FBD38D,stroke-width:2px,color:#fff;
    classDef object fill:#2B6CB0,stroke:#63B3ED,stroke-width:2px,color:#fff;

    L[List Object] -->|0| P1[Pointer 1]
    L -->|1| P2[Pointer 2]
    L -->|2| P3[Pointer 3]

    P1 --> O1["'Apple' (String)"]
    P2 --> O2["99 (Integer)"]
    P3 --> O3["True (Bool)"]

    class L memory;
    class P1,P2,P3 pointer;
    class O1,O2,O3 object;
\`\`\`

1.  **Uniform Access**: Because the "Pointers" are all the same size in memory (64-bit), Python knows exactly where index 500 is instantly. 
    *   This makes access **O(1)** (Constant Time).
2.  **Heterogeneous**: Because pointers point to *Objects*, the objects can be anything! A list can hold a string, an int, and another list all at once.

## 2. Mutability (The Dark Side)
Lists are **Mutable**. You can change them in place.

\`\`\`python
a = [1, 2, 3]
b = a          # b is now an ALIAS for a (Same Post-it Note)
b.append(4)

print(a)       # Output: [1, 2, 3, 4] -> "a" changed too!
\`\`\`

> [!WARNING]
> This is a common bug source. If you pass a list to a function and the function changes it, your original list is changed forever.

## 3. Operations Cost
*   **Get/Set (\`a[i]\`)**: Fast ⚡️ (O(1))
*   **Append**: Fast ⚡️ (O(1))
*   **Insert/Delete at Start**: Slow 🐢 (O(n)) - Because every subsequent item must shift over in memory to make room.
            `
        },
        {
            id: 'py-3-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Art of Slicing ⚔️',
            duration: '15 min read',
            content: `
# Deep Dive: The Art of Slicing ⚔️

## 1. The Syntax
Python's slicing syntax is legendary for its power.
\`[start : stop : step]\`

*   **start**: Inclusive (The index we begin at)
*   **stop**: Exclusive (The index we stop BEFORE)
*   **step**: The jump size (Optional)

\`\`\`python
# Indices: 0  1  2  3  4  5
nums =    [10,20,30,40,50,60]

print(nums[1:4])  # [20, 30, 40] (Index 1, 2, 3)
print(nums[:3])   # [10, 20, 30] (Start to Index 2)
print(nums[3:])   # [40, 50, 60] (Index 3 to End)
\`\`\`

## 2. The Negative Step (Reverse)
By using a negative step, you walk backwards.

\`\`\`python
nums = [1, 2, 3, 4, 5]
print(nums[::-1]) # [5, 4, 3, 2, 1] - The classic reverse trick
\`\`\`

## 3. Slicing Creates Copies
Unlike simple assignment (\`a = b\`), slicing creates a **Shallow Copy**.

\`\`\`python
a = [1, 2, 3]
b = a[:]       # Creates a FRESH clone of the list
b.append(4)

print(a) # [1, 2, 3] - Safe!
print(b) # [1, 2, 3, 4]
\`\`\`

> [!TIP]
> Use \`[:]\` whenever you need to backup a list before modifying it.
            `
        },
        {
            id: 'py-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Tuples vs Lists 🛡️',
            duration: '15 min read',
            content: `
# Deep Dive: Tuples vs Lists 🛡️

## 1. The Shield of Immutability
A Tuple is a **Frozen List**. Use parenthesis \`()\`.
Once created, it exists forever in that state.

\`\`\`python
my_tuple = (10, 20)
# my_tuple[0] = 99  -> TypeError: 'tuple' object does not support item assignment
\`\`\`

## 2. Why use them?
If Lists can do everything Tuples can do, why bother?

1.  **Safety**: You guarantee the data cannot be corrupted by accident. Ideal for constants like Coordinates \`(x, y)\` or RGB Colors \`(255, 0, 0)\`.
2.  **Performance**: Tuples are slightly lighter on memory because Python knows they won't grow.
3.  **Dictionary Keys**: You can use a Tuple as a key in a Dictionary (because it's immutable). You cannot use a List.

## 3. The Single Item Trap
Common mistake when making a tuple of one item:

\`\`\`python
x = (5)   # This is just the math number 5!
y = (5,)  # This is a Tuple containing 5. Note the comma!
\`\`\`

## 4. Unpacking
The coolest feature of tuples (and lists) is Unpacking.

\`\`\`python
coordinates = (10, 20, 30)
x, y, z = coordinates

# Swap variables instantly
a, b = b, a
\`\`\`
            `
        },
        {
            id: 'py-3-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Comprehensions ⚡',
            duration: '20 min read',
            content: `
# Deep Dive: Comprehensions ⚡

## 1. The Transformation
List Comprehension is the hallmark of a "Pythonic" developer.
It collapses a loose pattern (Create -> Loop -> Append) into a single declarative expression.

### The Old Way (Imperative)
"Create an empty bucket. Loop through items. If item matches, modify it and put it in bucket."
\`\`\`python
squares = []
for x in range(10):
    squares.append(x * x)
\`\`\`

### The Python Way (Declarative)
"A list of squares for every x in range 10."
\`\`\`python
squares = [x * x for x in range(10)]
\`\`\`

## 2. The Formula
\`[ EXPRESSION for ITEM in ITERABLE if CONDITION ]\`

1.  **Expression**: What do you want in the final list? (e.g., \`x * 2\`)
2.  **Loop**: Variable and Source (e.g., \`for user in users\`)
3.  **Condition** (Optional): Filter (e.g., \`if user.is_active\`)

## 3. With Filtering
\`\`\`python
emails = ["a@a.com", "b@b.com", "fail"]
valid = [e for e in emails if "@" in e]
# Result: ["a@a.com", "b@b.com"]
\`\`\`

> [!IMPORTANT]
> Don't overdo it. If your comprehension is longer than one line or has nested loops, sticking to a normal \`for\` loop is often more readable.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'py-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Inventory',
            duration: '35 min',
            content: `
# Lab 1: The Inventory

You are building an RPG inventory system.
We need to manage the player's items dynamically.

## The Mission
1.  **Start**: Create a list \`backpack\` containing \`"Sword"\`, \`"Shield"\`, \`"Apple"\`.
2.  **Loot**: The player found a \`"Map"\`. **Append** it to the list.
3.  **Check**: Verify if the \`"Shield"\` is currently in the backpack using \`in\`.
4.  **Eat**: The player ate the Apple. **Remove** \`"Apple"\` from the list.
5.  **Equip**: The player wants the Sword at the ready. **Insert** \`"Dagger"\` at index 0 (as a side-arm).
6.  **Sort**: Organize your inventory alphabetically using \`.sort()\`.
7.  **Print**: Print the final inventory.

## Methods Review
*   \`.append(item)\`
*   \`.remove(item)\`: Removes first occurrence. Error if missing.
*   \`.insert(index, item)\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize backpack',
                    completed: false,
                    regex: /backpack\s*=\s*\[\s*(['"])Sword\1\s*,\s*(['"])Shield\2\s*,\s*(['"])Apple\3\s*\]/,
                    hints: [
                        "Create a list with square brackets `[]`.",
                        "Strings must be quoted.",
                        "Solution: `backpack = ['Sword', 'Shield', 'Apple']`"
                    ]
                },
                {
                    id: 2,
                    description: 'Loot: Append Map',
                    completed: false,
                    regex: /backpack\.append\(\s*(['"])Map\1\s*\)/,
                    hints: [
                        "Use the `.append()` method.",
                        "Solution: `backpack.append('Map')`"
                    ]
                },
                {
                    id: 3,
                    description: 'Check: Is Shield in backpack?',
                    completed: false,
                    regex: /if\s*(['"])Shield\1\s*in\s*backpack:/,
                    hints: [
                        "Use the `in` keyword.",
                        "Solution: `if 'Shield' in backpack:` (Just the check is enough)."
                    ]
                },
                {
                    id: 4,
                    description: 'Eat: Remove Apple',
                    completed: false,
                    regex: /backpack\.remove\(\s*(['"])Apple\1\s*\)/,
                    hints: [
                        "Use the `.remove()` method.",
                        "Solution: `backpack.remove('Apple')`"
                    ]
                },
                {
                    id: 5,
                    description: 'Equip: Insert Dagger at 0',
                    completed: false,
                    regex: /backpack\.insert\(\s*0\s*,\s*(['"])Dagger\1\s*\)/,
                    hints: [
                        "Use `.insert(index, item)`.",
                        "Solution: `backpack.insert(0, 'Dagger')`"
                    ]
                },
                {
                    id: 6,
                    description: 'Sort: Alphabetical',
                    completed: false,
                    regex: /backpack\.sort\(\s*\)/,
                    hints: [
                        "Use the `.sort()` method in-place.",
                        "Solution: `backpack.sort()`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print Inventory',
                    completed: false,
                    regex: /print\s*\(\s*backpack\s*\)/,
                    hints: [
                        "Print the list variable.",
                        "Solution: `print(backpack)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'inventory.py',
                    language: 'python',
                    content: `# 1. Initialize
# ...
# 2. Loot Map
# ...
# 3. Check for Shield
# ...
# 4. Eat Apple
# ...
# 5. Insert Dagger
# ...
# 6. Sort
# ...
# 7. Print
`
                }
            ]
        },
        {
            id: 'py-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Data Slicer',
            duration: '35 min',
            content: `
# Lab 2: The Data Slicer

We have a raw data stream. We need to extract specific packets using Slicing.

## The Mission
1.  **Data**: \`stream = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]\`.
2.  **Header**: Extract the first 3 items into variable \`header\`.
3.  **Body**: Extract everything AFTER index 3 (inclusive) into variable \`body\`.
4.  **Sample**: Extract every 2nd item from the stream into \`sample\`.
5.  **Tail**: Extract the last 2 items using negative indexing into \`tail\`.
6.  **Reverse**: Create a reversed copy of the boolean \`stream\` into \`reversed_stream\`.
7.  **Print**: Print the \`tail\` variable.

## Mental Model
\`stream[Start : Stop : Step]\`
*   Tail: \`[-2 : ]\` (Start from 2nd to last, go to end)
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define stream',
                    completed: false,
                    regex: /stream\s*=\s*\[.*90.*\]/,
                    hints: [
                        "Define the list [0, 10, ... 90].",
                        "Solution: `stream = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]`"
                    ]
                },
                {
                    id: 2,
                    description: 'Slice: header (First 3)',
                    completed: false,
                    regex: /header\s*=\s*stream\[:3\]/,
                    hints: [
                        "Slice from start to index 3.",
                        "Solution: `header = stream[:3]`"
                    ]
                },
                {
                    id: 3,
                    description: 'Slice: body (Rest)',
                    completed: false,
                    regex: /body\s*=\s*stream\[3:\]/,
                    hints: [
                        "Slice from index 3 to the end.",
                        "Solution: `body = stream[3:]`"
                    ]
                },
                {
                    id: 4,
                    description: 'Slice: sample (Every 2nd)',
                    completed: false,
                    regex: /sample\s*=\s*stream\[::2\]/,
                    hints: [
                        "Use a step of 2.",
                        "Solution: `sample = stream[::2]`"
                    ]
                },
                {
                    id: 5,
                    description: 'Slice: tail (Last 2)',
                    completed: false,
                    regex: /tail\s*=\s*stream\[-2:\]/,
                    hints: [
                        "Start at -2 (second to last) and go to end.",
                        "Solution: `tail = stream[-2:]`"
                    ]
                },
                {
                    id: 6,
                    description: 'Slice: Reverse',
                    completed: false,
                    regex: /reversed_stream\s*=\s*stream\[::-1\]/,
                    hints: [
                        "Use the negative step trick `[::-1]`.",
                        "Solution: `reversed_stream = stream[::-1]`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print tail',
                    completed: false,
                    regex: /print\s*\(\s*tail\s*\)/,
                    hints: [
                        "Print the tail variable.",
                        "Solution: `print(tail)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'slice.py',
                    language: 'python',
                    content: `stream = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

# 1. Header
# 2. Body
# 3. Sample (Every 2nd)
# 4. Tail (Last 2)
# 5. Reverse
# 6. Print Tail
`
                }
            ]
        },
        {
            id: 'py-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Immutable Config',
            duration: '35 min',
            content: `
# Lab 3: Immutable Config

Server settings should not change while the server is running.
We use **Tuples** for this safety.

## The Mission
1.  **Define**: Create a tuple \`server_config\` containing \`("192.168.1.1", 8080, "admin")\`.
2.  **Access**: Print the IP address (Index 0).
3.  **Search**: Find the numerical index of the value \`8080\` and assign to \`idx\`.
4.  **Count**: Count how many times \`"admin"\` appears and assign to \`user_count\`.
5.  **Unpack**: Unpack the tuple into three variables: \`ip\`, \`port\`, \`user\`.
6.  **Re-connect**: Since you can't change the tuple, create a NEW tuple \`new_config\` with a different port: \`(ip, 9000, user)\`.
7.  **Verify**: Print an f-string: \`f"Connected to {ip} on {port}"\`.

## Why Tuples?
If you tried \`server_config[1] = 9000\`, Python would crash. This protects your configuration from accidental bugs!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Tuple: server_config',
                    completed: false,
                    regex: /server_config\s*=\s*\(\s*(['"]).*\1\s*,\s*8080\s*,\s*(['"]).*\2\s*\)/,
                    hints: [
                        "Use parentheses `()`.",
                        "Solution: `server_config = ('192.168.1.1', 8080, 'admin')`"
                    ]
                },
                {
                    id: 2,
                    description: 'Access Index 0',
                    completed: false,
                    regex: /print\s*\(\s*server_config\[0\]\s*\)/,
                    hints: [
                        "Access like a list using `[0]`.",
                        "Solution: `print(server_config[0])`"
                    ]
                },
                {
                    id: 3,
                    description: 'Search: Index of 8080',
                    completed: false,
                    regex: /idx\s*=\s*server_config\.index\(\s*8080\s*\)/,
                    hints: [
                        "Use the `.index(value)` method.",
                        "Solution: `idx = server_config.index(8080)`"
                    ]
                },
                {
                    id: 4,
                    description: 'Count: "admin"',
                    completed: false,
                    regex: /user_count\s*=\s*server_config\.count\(\s*(['"])admin\1\s*\)/,
                    hints: [
                        "Use the `.count(value)` method.",
                        "Solution: `user_count = server_config.count('admin')`"
                    ]
                },
                {
                    id: 5,
                    description: 'Unpack into ip, port, user',
                    completed: false,
                    regex: /ip\s*,\s*port\s*,\s*user\s*=\s*server_config/,
                    hints: [
                        "Variable names on left, tuple on right.",
                        "Solution: `ip, port, user = server_config`"
                    ]
                },
                {
                    id: 6,
                    description: 'Re-connect: New Tuple',
                    completed: false,
                    regex: /new_config\s*=\s*\(\s*ip\s*,\s*9000\s*,\s*user\s*\)/,
                    hints: [
                        "Create a new tuple using the variables.",
                        "Solution: `new_config = (ip, 9000, user)`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print Connection String',
                    completed: false,
                    regex: /print\s*\(\s*f(['"]).*\{ip\}.*\{port\}.*\1\s*\)/,
                    hints: [
                        "Use an f-string with the unpacked variables.",
                        "Solution: `print(f'Connected to {ip} on {port}')`"
                    ]
                }
            ],
            files: [
                {
                    name: 'config.py',
                    language: 'python',
                    content: `# 1. Define Tuple
# ...
# 2. Print IP
# ...
# 3. Find index of 8080
# ...
# 4. Count 'admin'
# ...
# 5. Unpack
# ...
# 6. New Config (9000)
# ...
# 7. Print Status
# ...
`
                }
            ]
        },
        {
            id: 'py-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Data Pipeline',
            duration: '35 min',
            content: `
# Lab 4: The Data Pipeline

We need to process a list of prices.
1. Apply logic (inflation).
2. Filter data (remove cheap items).
3. Analyze data (taxes, totals).
We will use **List Comprehension**.

## The Mission
1.  **Input**: \`prices = [10, 25, 5, 40, 100]\`.
2.  **Transform**: Create a new list \`inflation\` where every price is multiplied by \`1.1\` (10% increase).
3.  **Filter**: Create a list \`premium\` from \`inflation\` that only includes prices greater than \`30\`.
4.  **Tax**: Create a list \`taxes\` that calculates 5% tax (\`* 0.05\`) for each item in \`premium\`.
5.  **Tags**: Create a list of strings \`tags\` that formats each premium price as \`"$33.0"\` (using f-strings: \`f"\${p}"\`).
6.  **Total**: Calculate the sum of all \`premium\` prices into \`total_revenue\`.
7.  **Print**: Print \`total_revenue\`.

## Syntax
\`new_list = [expression for item in old_list if condition]\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define prices',
                    completed: false,
                    regex: /prices\s*=\s*\[.*\]/,
                    hints: [
                        "Standard list definition.",
                        "Solution: `prices = [10, 25, 5, 40, 100]`"
                    ]
                },
                {
                    id: 2,
                    description: 'Comprehension: inflation (* 1.1)',
                    completed: false,
                    regex: /inflation\s*=\s*\[\s*p\s*\*\s*1\.1\s+for\s+p\s+in\s+prices\s*\]|inflation\s*=\s*\[\s*price\s*\*\s*1\.1\s+for\s+price\s+in\s+prices\s*\]/,
                    hints: [
                        "Structure: `[p * 1.1 for p in prices]`",
                        "Use a variable name like `p` or `price`."
                    ]
                },
                {
                    id: 3,
                    description: 'Comprehension: premium (> 30)',
                    completed: false,
                    regex: /premium\s*=\s*\[\s*p\s+for\s+p\s+in\s+inflation\s+if\s+p\s*>\s*30\s*\]/,
                    hints: [
                        "Use `if p > 30` at the end of the comprehension.",
                        "Solution: `premium = [p for p in inflation if p > 30]`"
                    ]
                },
                {
                    id: 4,
                    description: 'Comprehension: taxes (* 0.05)',
                    completed: false,
                    regex: /taxes\s*=\s*\[\s*p\s*\*\s*0\.05\s+for\s+p\s+in\s+premium\s*\]/,
                    hints: [
                        "Calculate 5% of each premium price.",
                        "Solution: `taxes = [p * 0.05 for p in premium]`"
                    ]
                },
                {
                    id: 5,
                    description: 'Comprehension: tags (Strings)',
                    completed: false,
                    regex: /tags\s*=\s*\[\s*f(['"])\$\{\w+\}\1\s+for\s+\w+\s+in\s+premium\s*\]/,
                    hints: [
                        "Use an f-string inside the expression part.",
                        "Solution: `tags = [f'${p}' for p in premium]`"
                    ]
                },
                {
                    id: 6,
                    description: 'Calc: Total Revenue (Sum)',
                    completed: false,
                    regex: /total_revenue\s*=\s*sum\(\s*premium\s*\)/,
                    hints: [
                        "Use the built-in `sum()` function.",
                        "Solution: `total_revenue = sum(premium)`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print total_revenue',
                    completed: false,
                    regex: /print\s*\(\s*total_revenue\s*\)/,
                    hints: [
                        "Print the final sum.",
                        "Solution: `print(total_revenue)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'pipeline.py',
                    language: 'python',
                    content: `prices = [10, 25, 5, 40, 100]

# 1. Inflation (x 1.1)
# 2. Premium (> 30)
# 3. Taxes (5%)
# 4. Tags ("$XX")
# 5. Total Revenue
# 6. Print
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 3 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Whats the complexity of accessing `my_list[500]`?',
                    options: [
                        'O(n) - It takes longer for bigger lists',
                        'O(1) - Instant access',
                        'O(log n) - Depends on sorting',
                        'It varies based on hardware'
                    ],
                    correctIndex: 1,
                    explanation: 'Because lists are arrays of pointers, Python calculates the exact memory address instantly. `Address = Start + (Index * 8 bytes)`.'
                },
                {
                    id: 'q2',
                    question: 'What is the value of `data[-1]`?',
                    options: [
                        'The first item',
                        'The last item',
                        'Error: Index out of bounds',
                        'None'
                    ],
                    correctIndex: 1,
                    explanation: 'Python lists support negative indexing. -1 is the last item, -2 is the second to last, etc.'
                },
                {
                    id: 'q3',
                    question: 'How do you create a Tuple with exactly one item?',
                    options: [
                        '`t = (1)`',
                        '`t = [1]`',
                        '`t = 1,`',
                        '`t = (1,)`'
                    ],
                    correctIndex: 3,
                    explanation: 'You MUST use a trailing comma `(1,)`. Without it, Python interprets `(1)` as just the number 1 in parentheses for math order of operations.'
                },
                {
                    id: 'q4',
                    question: 'Which of these lines creates a COPY of a list?',
                    options: [
                        '`new_list = old_list`',
                        '`new_list = old_list[:]`',
                        '`new_list = Copy(old_list)`',
                        '`new_list = old_list[0]`'
                    ],
                    correctIndex: 1,
                    explanation: '`new = old` just creates a reference (alias). `old[:]` uses slicing to create a completely new list object in memory.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you try to add an item to a Tuple?',
                    options: [
                        'It adds it to the end',
                        'It creates a new tuple automatically',
                        'AttributeError / TypeError',
                        'It works but warns you'
                    ],
                    correctIndex: 2,
                    explanation: 'Tuples are Immutable. They do not have methods like `.append()` or `.insert()`. You cannot change them.'
                }
            ]
        }
    ]
};
