import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Dicts = {
    id: 'py-unit-4',
    title: 'Unit 4: Dictionaries & Sets',
    description: 'Structure complex data. Master Key-Value stores (Hash Maps), manage unique collections with Sets, and optimize lookups.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Hash Map Engine 🗝️',
            duration: '20 min read',
            content: `
# Deep Dive: The Hash Map Engine 🗝️

## 1. The Magic of O(1)
How does Python find \`user["name"]\` instantly, even if the dictionary has 1,000,000 keys?
It uses a **Hash Map**.

\`\`\`mermaid
graph LR
    classDef memory fill:#2D3748,stroke:#CBD5E0,stroke-width:2px,color:#fff;
    classDef bucket fill:#DD6B20,stroke:#FBD38D,stroke-width:2px,color:#fff;
    classDef hash fill:#2B6CB0,stroke:#63B3ED,stroke-width:2px,color:#fff;

    K["Key: 'name'"] --> H{Hash Function}
    H -->|Hashes to 9241| I[Index: 1]
    
    subgraph Memory_Array
    B0[0: Empty]:::memory
    B1[1: Pointer]:::bucket
    B2[2: Empty]:::memory
    end
    
    I --> B1
    B1 --> V["Value: 'Alice'"]
    
    class H hash;
\`\`\`

1.  **Hash Function**: Python takes your key (\`"name"\`) and runs a math formula to turn it into a unique number (Hash).
2.  **Index**: That number tells Python exactly which slot (Bucket) in memory to look at.
3.  **Result**: It goes directly there. No searching. No looping. Pure speed.

## 2. The Rules of Keys
Because of this engine, Keys must be **Immutable** (Hashable).
*   ✅ Strings, Integers, Tuples, Booleans
*   ❌ Lists, Dictionaries (They change, so their hash would change!)

## 3. Ordered?
Prior to Python 3.7, Dictionaries were unordered.
**Now (3.7+)**: They remember insertion order.
*   If you add 'a' then 'b', iterating will show 'a' then 'b'.
            `
        },
        {
            id: 'py-4-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The JSON Mental Model 📄',
            duration: '15 min read',
            content: `
# Deep Dive: The JSON Mental Model 📄

## 1. The Language of the Web
JavaScript Object Notation (JSON) is the universal format for data on the internet.
In Python, JSON maps perfectly to **Dictionaries** and **Lists**.

| JSON | Python |
| :--- | :--- |
| Object \`{}\` | Dictionary \`{}\` |
| Array \`[]\` | List \`[]\` |
| String \`""\` | String \`""\` |
| Number | Int / Float |
| boolean | Bool |
| null | None |

## 2. Accessing Nested Data
Data is rarely flat. It is a tree.

\`\`\`python
data = {
    "users": [
        {"id": 1, "profile": {"name": "Neo"}}
    ]
}
\`\`\`

**The Path**:
1.  \`data["users"]\` -> List
2.  \`[0]\` -> First Dict
3.  \`["profile"]\` -> Inner Dict
4.  \`["name"]\` -> String "Neo"

**Code**: \`data["users"][0]["profile"]["name"]\`

## 3. Defensive Coding
What if a key is missing? Code crashes (KeyError).
Use \`.get()\` for optional data.

\`\`\`python
# If "theme" is missing, defaults to "dark"
theme = config.get("theme", "dark")
\`\`\`
            `
        },
        {
            id: 'py-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Set Theory ⭕',
            duration: '15 min read',
            content: `
# Deep Dive: Set Theory ⭕

## 1. Venn Diagrams in Code
Sets are efficient for comparison logic.

\`\`\`mermaid
graph TD
    classDef A fill:#e53e3e,stroke:none,color:white;
    classDef B fill:#3182ce,stroke:none,color:white;
    classDef AB fill:#805ad5,stroke:none,color:white;

    subgraph Union [A | B (All Items)]
    A1((A)):::A --- B1((B)):::B
    end

    subgraph Intersection [A & B (Shared)]
    A2((A)):::A --- AB2((Shared)):::AB --- B2((B)):::B
    end
\`\`\`

*   **Union (\`|\`)**: Combining everything. "All students in Math OR Science".
*   **Intersection (\`&\`)**: Finding overlap. "Students in Math AND Science".
*   **Difference (\`-\`)**: Subtraction. "Students in Math BUT NOT Science".
*   **Symmetric Difference (\`^\`)**: "Students in one BUT NOT both".

## 2. Speed
Checking \`if item in my_list\` takes O(n) (Searches every item).
Checking \`if item in my_set\` takes **O(1)** (Instant hash lookup).

> [!TIP]
> If you have a list of banned words and need to check millions of messages, convert the banned list to a **Set** first. It will be 1000x faster.
            `
        },
        {
            id: 'py-4-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Dict Comprehension ⚡',
            duration: '15 min read',
            content: `
# Deep Dive: Dict Comprehension ⚡

## 1. The Pivot
Just like Lists, you can build Dictionaries in one line.
Syntax: \`{ key: value for item in iterable }\`

## 2. Common Patterns

### Inverting a Dictionary
Swap keys and values.
\`\`\`python
original = {"a": 1, "b": 2}
flipped = {v: k for k, v in original.items()}
# Result: {1: "a", 2: "b"}
\`\`\`

### Indexing a List
Turn a list of objects into a lookup table by ID.
\`\`\`python
users = [("Alice", 1), ("Bob", 2)]
lookup = {id: name for name, id in users}
# Result: {1: "Alice", 2: "Bob"}
\`\`\`

## 3. Zip
Combine two lists into a dict.
\`\`\`python
names = ["A", "B"]
ids = [1, 2]
data = {k: v for k, v in zip(ids, names)}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'py-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Profile Manager',
            duration: '35 min',
            content: `
# Lab 1: The Profile Manager

We are building the backend for a user setting page.
We need to CRUD (Create, Read, Update, Delete) properties on a dictionary.

## The Mission
1.  **Create**: Defined \`user_profile\` with \`"username": "coder"\`, \`"level": 1\`, \`"email": "coder@test.com"\`.
2.  **Read**: Get the \`"username"\` into variable \`name\`.
3.  **Update**: Change \`"level"\` to \`5\`.
4.  **Add**: Add a new key \`"is_verified"\` with value \`True\`.
5.  **Safe Read**: Try to get \`"theme"\`, but use \`"dark"\` as the default if missing (Assign to \`theme\`).
6.  **Delete**: The user removed their email. Delete the \`"email"\` key.
7.  **Check**: Verify key deletion by printing \`"email" in user_profile\` (Should match \`False\`).

## Methods
*   \`dict[key] = value\`
*   \`dict.get(key, default)\`
*   \`del dict[key]\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define user_profile',
                    completed: false,
                    regex: /user_profile\s*=\s*\{.*["']username["'].*["']level["'].*["']email["'].*\}/s,
                    hints: [
                        "Use curly braces `{}`.",
                        "Keys must be strings.",
                        "Solution: `user_profile = {'username': 'coder', 'level': 1, 'email': 'coder@test.com'}`"
                    ]
                },
                {
                    id: 2,
                    description: 'Read: username',
                    completed: false,
                    regex: /name\s*=\s*user_profile\[['"]username['"]\]/,
                    hints: [
                        "Access with brackets `[]`.",
                        "Solution: `name = user_profile['username']`"
                    ]
                },
                {
                    id: 3,
                    description: 'Update: level = 5',
                    completed: false,
                    regex: /user_profile\[['"]level['"]\]\s*=\s*5/,
                    hints: [
                        "Assign a new value to the existing key.",
                        "Solution: `user_profile['level'] = 5`"
                    ]
                },
                {
                    id: 4,
                    description: 'Add: is_verified = True',
                    completed: false,
                    regex: /user_profile\[['"]is_verified['"]\]\s*=\s*True/,
                    hints: [
                        "Assign a value to a NEW key.",
                        "Solution: `user_profile['is_verified'] = True`"
                    ]
                },
                {
                    id: 5,
                    description: 'Safe Read: theme (default dark)',
                    completed: false,
                    regex: /theme\s*=\s*user_profile\.get\(\s*['"]theme['"]\s*,\s*['"]dark['"]\s*\)/,
                    hints: [
                        "Use `.get(key, default)`.",
                        "Solution: `theme = user_profile.get('theme', 'dark')`"
                    ]
                },
                {
                    id: 6,
                    description: 'Delete: email',
                    completed: false,
                    regex: /del\s+user_profile\[['"]email['"]\]/,
                    hints: [
                        "Use the `del` keyword.",
                        "Solution: `del user_profile['email']`"
                    ]
                },
                {
                    id: 7,
                    description: 'Verify: Check deletion',
                    completed: false,
                    regex: /print\s*\(\s*['"]email['"]\s+in\s+user_profile\s*\)/,
                    hints: [
                        "Check existence with `in` operator.",
                        "Solution: `print('email' in user_profile)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'profile.py',
                    language: 'python',
                    content: `# 1. Create
# ...
# 2. Get username
# ...
# 3. Update level
# ...
# 4. Add is_verified
# ...
# 5. Get theme (safe)
# ...
# 6. Delete email
# ...
# 7. Verify deletion
`
                }
            ]
        },
        {
            id: 'py-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Word Counter',
            duration: '35 min',
            content: `
# Lab 2: The Word Counter

We need to analyze a sentence and count how many times each word appears.
This is a classic Hash Map interview question.

## The Mission
1.  **Input**: \`text = "apple banana apple cherry banana apple"\`.
2.  **Split**: Convert string to list of words using \`.split()\` and assign to \`words\`.
3.  **Dict**: Initialize empty dict \`freq = {}\`.
4.  **Loop**: Iterate through \`word\` in \`words\`.
5.  **Logic**:
    *   If \`word\` is already in \`freq\`, increment its value by 1.
    *   Else (first time seen), set its value to 1.
6.  **Access**: Print the count for \`"apple"\` (Should be 3).
7.  **Check**: Check if \`"orange"\` is in the dict. Print the boolean result.

## Mental Model
Imagine a row of buckets labeled "apple", "banana".
You pick up a word, go to its bucket, and add a stone.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define text',
                    completed: false,
                    regex: /text\s*=\s*['"].*['"]/,
                    hints: [
                        "Define the string.",
                        "Solution: `text = 'apple banana apple cherry banana apple'`"
                    ]
                },
                {
                    id: 2,
                    description: 'Split into list',
                    completed: false,
                    regex: /words\s*=\s*text\.split\(\)/,
                    hints: [
                        "Use default split (splits by space).",
                        "Solution: `words = text.split()`"
                    ]
                },
                {
                    id: 3,
                    description: 'Initialize freq dict',
                    completed: false,
                    regex: /freq\s*=\s*\{\}/,
                    hints: [
                        "Empty curly braces.",
                        "Solution: `freq = {}`"
                    ]
                },
                {
                    id: 4,
                    description: 'Loop through words',
                    completed: false,
                    regex: /for\s+\w+\s+in\s+words:/,
                    hints: [
                        "Standard for loop.",
                        "Solution: `for word in words:`"
                    ]
                },
                {
                    id: 5,
                    description: 'Logic: If/Else update',
                    completed: false,
                    regex: /(?=.*if\s+\w+\s+in\s+freq:)(?=.*freq\[\w+\]\s*\+=\s*1)(?=.*else:)(?=.*freq\[\w+\]\s*=\s*1)/s,
                    hints: [
                        "Check existence, then update or set.",
                        "Solution:\n`if word in freq:`\n    `freq[word] += 1`\n`else:`\n    `freq[word] = 1`"
                    ]
                },
                {
                    id: 6,
                    description: 'Print apple count',
                    completed: false,
                    regex: /print\s*\(\s*freq\[['"]apple['"]\]\s*\)/,
                    hints: [
                        "Access the key 'apple'.",
                        "Solution: `print(freq['apple'])`"
                    ]
                },
                {
                    id: 7,
                    description: 'Check missing orange',
                    completed: false,
                    regex: /print\s*\(\s*['"]orange['"]\s+in\s+freq\s*\)/,
                    hints: [
                        "Solution: `print('orange' in freq)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'counter.py',
                    language: 'python',
                    content: `text = "apple banana apple cherry banana apple"

# 1. Split
# 2. Init dict
# 3. Loop & Count
# 4. Print apple count
# 5. Check orange
`
                }
            ]
        },
        {
            id: 'py-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Security Gate',
            duration: '35 min',
            content: `
# Lab 3: The Security Gate

We have a set of allowed badge IDs. A new group of people arrives.
Who is allowed? Who is banned? We use **Sets**.

## The Mission
1.  **Allowed**: \`allowed = {101, 102, 103, 104}\` (Set).
2.  **Arrivals**: \`guests = [102, 105, 101, 106]\` (List with some invalid IDs).
3.  **Convert**: Convert \`guests\` to a set \`guest_set\`.
4.  **Intersection**: Find who is verified (in both lists) -> \`verified = allowed & guest_set\`.
5.  **Difference**: Find who is trespassing (in guests BUT NOT allowed) -> \`banned = guest_set - allowed\`.
6.  **Add**: A new ID \`199\` was authorized manually. Add it to \`allowed\`.
7.  **Print**: Print \`banned\`.

## Logic
*   **&**: AND (Intersection)
*   **-**: MINUS (Difference)
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define allowed set',
                    completed: false,
                    regex: /allowed\s*=\s*\{.*101.*\}/,
                    hints: [
                        "Use curly braces with numbers.",
                        "Solution: `allowed = {101, 102, 103, 104}`"
                    ]
                },
                {
                    id: 2,
                    description: 'Define guests list',
                    completed: false,
                    regex: /guests\s*=\s*\[.*\]/,
                    hints: [
                        "Guests starts as a list [].",
                        "Solution: `guests = [102, 105, 101, 106]`"
                    ]
                },
                {
                    id: 3,
                    description: 'Convert guests to set',
                    completed: false,
                    regex: /guest_set\s*=\s*set\(\s*guests\s*\)/,
                    hints: [
                        "Use `set()`.",
                        "Solution: `guest_set = set(guests)`"
                    ]
                },
                {
                    id: 4,
                    description: 'Calc: verified (Intersection)',
                    completed: false,
                    regex: /verified\s*=\s*allowed\s*&\s*guest_set|verified\s*=\s*guest_set\s*&\s*allowed/,
                    hints: [
                        "Use the `&` operator.",
                        "Solution: `verified = allowed & guest_set`"
                    ]
                },
                {
                    id: 5,
                    description: 'Calc: banned (Difference)',
                    completed: false,
                    regex: /banned\s*=\s*guest_set\s*-\s*allowed/,
                    hints: [
                        "Order matters! Guests minus Allowed.",
                        "Solution: `banned = guest_set - allowed`"
                    ]
                },
                {
                    id: 6,
                    description: 'Update: Add 199 to allowed',
                    completed: false,
                    regex: /allowed\.add\(\s*199\s*\)/,
                    hints: [
                        "Sets use `.add()`, not append.",
                        "Solution: `allowed.add(199)`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print banned',
                    completed: false,
                    regex: /print\s*\(\s*banned\s*\)/,
                    hints: [
                        "Solution: `print(banned)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'gate.py',
                    language: 'python',
                    content: `# 1. Define allowed
# 2. Define guests
# 3. Convert
# 4. Verified
# 5. Banned
# 6. Add 199
# 7. Print Banned
`
                }
            ]
        },
        {
            id: 'py-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The API Crawler',
            duration: '40 min',
            content: `
# Lab 4: The API Crawler

We have raw JSON response from a weather API. It is deep and nested.
We need to extract specific data safely.

## The Mission
1.  **Data**: Run the setup code to get the \`response\` dict.
2.  **Access Top**: Get the \`"current"\` dict into variable \`current\`.
3.  **Access Nested**: From \`current\`, get the \`"temp_c"\` (Temperature) into \`temp\`.
4.  **Access List**: Get the first item from the \`"forecast"\` list into \`today\`.
5.  **Access Deep**: From \`today\`, get \`"condition"\` (dict), then \`"text"\` (string) into \`weather_desc\`.
6.  **Report**: Create an f-string: \`f"It is {temp}C and {weather_desc}"\`.
7.  **Print**: Print the report.

## Data Structure
\`\`\`python
response = {
    "current": {"temp_c": 22.5},
    "forecast": [
        {"day": "Mon", "condition": {"text": "Sunny"}}
    ]
}
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: response dict',
                    completed: false,
                    regex: /response\s*=\s*\{.*\}/s,
                    hints: [
                        "Copy the provided data structure.",
                        "Solution: See starter code."
                    ]
                },
                {
                    id: 2,
                    description: 'Get current',
                    completed: false,
                    regex: /current\s*=\s*response\[['"]current['"]\]/,
                    hints: [
                        "Solution: `current = response['current']`"
                    ]
                },
                {
                    id: 3,
                    description: 'Get temp_c',
                    completed: false,
                    regex: /temp\s*=\s*current\[['"]temp_c['"]\]/,
                    hints: [
                        "Access the key 'temp_c' from the 'current' dict.",
                        "Solution: `temp = current['temp_c']`"
                    ]
                },
                {
                    id: 4,
                    description: 'Get today (forecast[0])',
                    completed: false,
                    regex: /today\s*=\s*response\[['"]forecast['"]\]\[0\]/,
                    hints: [
                        "Access 'forecast' list, then index 0.",
                        "Solution: `today = response['forecast'][0]`"
                    ]
                },
                {
                    id: 5,
                    description: 'Get weather_desc',
                    completed: false,
                    regex: /weather_desc\s*=\s*today\[['"]condition['"]\]\[['"]text['"]\]/,
                    hints: [
                        "Chain the keys: today -> condition -> text.",
                        "Solution: `weather_desc = today['condition']['text']`"
                    ]
                },
                {
                    id: 6,
                    description: 'Create Report String',
                    completed: false,
                    regex: /report\s*=\s*f['"].*\{temp\}.*\{weather_desc\}.*['"]/,
                    hints: [
                        "Use f-string.",
                        "Solution: `report = f'It is {temp}C and {weather_desc}'`"
                    ]
                },
                {
                    id: 7,
                    description: 'Print Report',
                    completed: false,
                    regex: /print\s*\(\s*report\s*\)/,
                    hints: [
                        "Solution: `print(report)`"
                    ]
                }
            ],
            files: [
                {
                    name: 'crawler.py',
                    language: 'python',
                    content: `response = {
    "current": {"temp_c": 22.5},
    "forecast": [
        {"day": "Mon", "condition": {"text": "Sunny"}}
    ]
}

# 2. Get current
# 3. Get temp
# 4. Get today
# 5. Get desc
# 6. Report
# 7. Print
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 4 Assessment',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which of these is NOT allowed as a Dictionary Key?',
                    options: [
                        '"username" (String)',
                        '42 (Integer)',
                        '(1, 2) (Tuple)',
                        '[1, 2] (List)'
                    ],
                    correctIndex: 3,
                    explanation: 'Dictionary keys must be Immutable (Hashable). Lists are Mutable, so they cannot be keys. Strings, Numbers, and Tuples are fine.'
                },
                {
                    id: 'q2',
                    question: 'What is the time complexity of `key in my_dict`?',
                    options: [
                        'O(1) - Average Case',
                        'O(n) - Linear Scan',
                        'O(log n) - Binary Search',
                        'O(n^2) - Slow'
                    ],
                    correctIndex: 0,
                    explanation: 'Thanks to the Hash Map architecture, Python jumps directly to the bucket. It does not search item by item.'
                },
                {
                    id: 'q3',
                    question: 'What does `my_set.add(5)` do if 5 is already in the set?',
                    options: [
                        'Adds a duplicate 5',
                        'Raises an Error',
                        'Does nothing (Sets are unique)',
                        'Deletes the old 5'
                    ],
                    correctIndex: 2,
                    explanation: 'Sets enforce uniqueness. Adding an existing item changes nothing and typically returns nothing.'
                },
                {
                    id: 'q4',
                    question: 'How do you safely remove a key `k` without crashing if `k` is missing?',
                    options: [
                        '`del d[k]`',
                        '`d.pop(k, None)`',
                        '`d.remove(k)`',
                        '`d.delete(k)`'
                    ],
                    correctIndex: 1,
                    explanation: '`pop(key, default)` attempts to remove the key and return the value. If missing, it returns the default instead of identifying a KeyError.'
                },
                {
                    id: 'q5',
                    question: 'Which Set operation finds items in Set A but NOT in Set B?',
                    options: [
                        'A & B (Intersection)',
                        'A | B (Union)',
                        'A - B (Difference)',
                        'A ^ B (Symmetric Difference)'
                    ],
                    correctIndex: 2,
                    explanation: 'Subtraction (`-`) removes all elements found in B from A.'
                }
            ]
        }
    ]
};
