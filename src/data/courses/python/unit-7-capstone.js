import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Capstone = {
    id: 'py-unit-7',
    title: 'Capstone: Data Analysis Pipeline',
    description: 'Combine everything you have learned (Loops, Lists, Dicts, Functions) to build a professional Data Parsing & Analysis engine.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'py-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Analyst\'s Workflow 📊',
            duration: '15 min read',
            content: `
# Deep Dive: The Analyst's Workflow 📊

## 1. ETL (Extract, Transform, Load)
This is the heartbeat of Data Science.
Raw data is ugly. You must clean it before you can learn from it.

\`\`\`mermaid
graph LR
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef dirty fill:#1e293b,stroke:#f59e0b,stroke-width:4px,color:#fff;
    classDef clean fill:#1e293b,stroke:#10b981,stroke-width:4px,color:#fff;
    classDef report fill:#1e293b,stroke:#3b82f6,stroke-width:4px,color:#fff;

    A[Inputs: Raw CSV String]:::dirty
    B(Process 1: Parser)
    C[State: List of Dicts]:::clean
    D(Process 2: Analysis)
    E[Output: Report]:::report

    A --> B --> C --> D --> E
    
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`

## 2. The Input Data
We are processing sales data. We receive it as a list of strings (CSV format):
\`"Product Name, Unit Price, Quantity Sold"\`

**Example:**
*   \`"Laptop,1200,5"\`
*   \`"Coffee,3,100"\`

## 3. The Target
We need to convert that string into a **Dictionary** so Python can understand it:
\`{'name': 'Laptop', 'price': 1200, 'qty': 5}\`
            `
        },
        {
            id: 'py-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: The Cleaner',
            duration: '40 min',
            content: `
# Phase 1: The Cleaner (Parser)

Your first job is to create a function that turns "Garbage Strings" into "Structured Dictionaries".

## The Mission
1.  **Define**: \`parse_line(line)\`.
2.  **Split**: string \`"Apple,1,10"\` becomes list \`["Apple", "1", "10"]\`.
3.  **Extract**:
    *   Name (String)
    *   Price (Int)
    *   Qty (Int)
4.  **Construct**: Return a dictionary with keys \`name\`, \`price\`, \`qty\`.
5.  **Test**: Parse \`"Apple,10,5"\` and print the result.

## Mental Model
Think of this as unboxing a package. You cut the tape (Split), take out the items (Extract), and put them on the shelf (Dictionary).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define parse_line',
                    completed: false,
                    regex: /def\s+parse_line\s*\(\s*line\s*\):/,
                    hints: [
                        "Use `def`.",
                        "Solution: `def parse_line(line):`"
                    ]
                },
                {
                    id: 2,
                    description: 'Split the string',
                    completed: false,
                    regex: /parts\s*=\s*line\.split\(\s*(['"]), \1\s*\)/,
                    hints: [
                        "Use `.split(',')` on the input string.",
                        "Solution: `parts = line.split(',')`"
                    ]
                },
                {
                    id: 3,
                    description: 'Extract Name',
                    completed: false,
                    regex: /name\s*=\s*parts\[0\]/,
                    hints: [
                        "The first item (index 0) is the name.",
                        "Solution: `name = parts[0]`"
                    ]
                },
                {
                    id: 4,
                    description: 'Extract Price (Int)',
                    completed: false,
                    regex: /price\s*=\s*int\(\s*parts\[1\]\s*\)/,
                    hints: [
                        "Index 1 is price. Convert to int().",
                        "Solution: `price = int(parts[1])`"
                    ]
                },
                {
                    id: 5,
                    description: 'Extract Qty (Int)',
                    completed: false,
                    regex: /qty\s*=\s*int\(\s*parts\[2\]\s*\)/,
                    hints: [
                        "Index 2 is qty. Convert to int().",
                        "Solution: `qty = int(parts[2])`"
                    ]
                },
                {
                    id: 6,
                    description: 'Return Dictionary',
                    completed: false,
                    regex: /return\s*\{\s*(['"])name\1:\s*name,\s*(['"])price\2:\s*price,\s*(['"])qty\3:\s*qty\s*\}/s,
                    hints: [
                        "Return a dict with keys: name, price, qty.",
                        "Solution: `return {'name': name, ...}`"
                    ]
                },
                {
                    id: 7,
                    description: 'Test the function',
                    completed: false,
                    regex: /print\(\s*parse_line\s*\(\s*(['"])Apple,10,5\1\s*\)\s*\)/,
                    hints: [
                        "Call and print `parse_line('Apple,10,5')`.",
                        "Solution: `print(parse_line('Apple,10,5'))`"
                    ]
                }
            ],
            files: [
                {
                    name: 'parser.py',
                    language: 'python',
                    content: `# Phase 1: Data Parsing

# Define function here
# def parse_line(line):

# Test your code
`
                }
            ]
        },
        {
            id: 'py-7-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Aggregation & Metrics 📈',
            duration: '15 min read',
            content: `
# Deep Dive: Aggregation & Metrics 📈

## 1. The Accumulator Pattern
To calculate a total (Sum), we need a bucket (Variable) outside the loop.
We add to the bucket on every iteration.

\`\`\`mermaid
stateDiagram-v2
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef state fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#fff;
    
    [*] --> Init: total = 0
    Init --> Loop: For Item in List
    Loop --> Add:::state: total += price
    Add --> Loop: Next Item
    Loop --> Result: List Empty
    Result --> [*]
\`\`\`

## 2. Business Logic
**Revenue** is simple Math:
\`Revenue = Unit Price * Quantity Sold\`

If we sold 5 Laptops at $1200 each:
\`1200 * 5 = $6000\`
            `
        },
        {
            id: 'py-7-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: The Accountant',
            duration: '40 min',
            content: `
# Phase 2: The Accountant

You have a list of clean dictionaries. Now calculate the money.

## The Mission
1.  **Input**: List of Dicts (\`items\`).
    *   Example: \`[{'name': 'A', 'price': 10, 'qty': 2}, ...]\`
2.  **Task**: Calculate Total Revenue (Sum of all \`price * qty\`).
3.  **Define**: \`calculate_revenue(items)\`.
4.  **Loop**: Iterate through \`items\`.
5.  **Math**: \`item_rev = item['price'] * item['qty']\`.
6.  **Accumulate**: Add \`item_rev\` to \`total\`.
7.  **Return**: The final integer.

## Mental Model
You are a cashier summing up receipts.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Function',
                    completed: false,
                    regex: /def\s+calculate_revenue\s*\(\s*items\s*\):/,
                    hints: [
                        "Takes list of items.",
                        "Solution: `def calculate_revenue(items):`"
                    ]
                },
                {
                    id: 2,
                    description: 'Initialize Accumulator',
                    completed: false,
                    regex: /total\s*=\s*0/,
                    hints: [
                        "Start at zero.",
                        "Solution: `total = 0`"
                    ]
                },
                {
                    id: 3,
                    description: 'Start Loop',
                    completed: false,
                    regex: /for\s+item\s+in\s+items:/,
                    hints: [
                        "Loop through the input list.",
                        "Solution: `for item in items:`"
                    ]
                },
                {
                    id: 4,
                    description: 'Calculate Line Item Revenue',
                    completed: false,
                    regex: /item_rev\s*=\s*item\['price'\]\s*\*\s*item\['qty'\]/,
                    hints: [
                        "Multiply price by qty for this item.",
                        "Solution: `item_rev = item['price'] * item['qty']`"
                    ]
                },
                {
                    id: 5,
                    description: 'Add to Total',
                    completed: false,
                    regex: /total\s*\+=\s*item_rev/,
                    hints: [
                        "Add the line item revenue to the main total.",
                        "Solution: `total += item_rev`"
                    ]
                },
                {
                    id: 6,
                    description: 'Return Total',
                    completed: false,
                    regex: /return\s+total/,
                    hints: [
                        "Return the result after the loop.",
                        "Solution: `return total`"
                    ]
                },
                {
                    id: 7,
                    description: 'Test Logic',
                    completed: false,
                    regex: /print\(\s*calculate_revenue\s*\(\s*sales_data\s*\)\s*\)/,
                    hints: [
                        "Call the function with `sales_data`.",
                        "Solution: `print(calculate_revenue(sales_data))`"
                    ]
                }
            ],
            files: [
                {
                    name: 'revenue.py',
                    language: 'python',
                    content: `sales_data = [
    {'name': 'Laptop', 'price': 1000, 'qty': 2},
    {'name': 'Mouse', 'price': 50, 'qty': 10}
]

# Define calculate_revenue(items) here

# Call and Print
`
                }
            ]
        },
        {
            id: 'py-7-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Algorithmic Thinking 🧠',
            duration: '20 min read',
            content: `
# Deep Dive: Algorithmic Thinking 🧠

## 1. "King of the Hill"
How do you find the largest number in a list?
You play "King of the Hill".

1.  **Current King**: Start with a very small number (or None).
2.  **Challenger**: Look at the next number in the list.
3.  **Battle**: If **Challenger > King**, the Challenger becomes the new King.
4.  **Repeat**: Until the list is empty.

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef decision fill:#1e293b,stroke:#f59e0b,stroke-width:4px,color:#fff;
    classDef action fill:#1e293b,stroke:#8b5cf6,stroke-width:4px,color:#fff;

    Start[King = -1] --> Next[Read Next Item]
    Next --> Check{Item > King?}:::decision
    Check -- Yes --> Swap[King = Item]:::action
    Check -- No --> Keep[Keep King]
    Swap --> Next
    Keep --> Next
    
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`
            `
        },
        {
            id: 'py-7-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 3: The Strategist',
            duration: '45 min',
            content: `
# Phase 3: The Strategist (Best Seller)

Find the product that sold the most units.

## The Mission
1.  **Input**: List of Dicts (\`items\`).
2.  **Goal**: Identify the dictionary with the highest \`qty\`.
3.  **Define**: \`find_best_product(items)\`.
4.  **Setup**: \`best_item = None\`, \`max_qty = -1\`.
5.  **Loop**: Iterate through items.
6.  **Compare**: \`if item['qty'] > max_qty:\`
    *   Update \`max_qty\`.
    *   Update \`best_item\`.
7.  **Return**: The \`best_item['name']\`.

## Mental Model
You are holding a trophy. You walk down the line of products. If a product is "stronger" (more sales) than what you are holding, you give the trophy to them.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Function',
                    completed: false,
                    regex: /def\s+find_best_product\s*\(\s*items\s*\):/,
                    hints: [
                        "Solution: `def find_best_product(items):`"
                    ]
                },
                {
                    id: 2,
                    description: 'Initialize Tracker Variables',
                    completed: false,
                    regex: /(?=.*best_item\s*=\s*None)(?=.*max_qty\s*=\s*-1)/s,
                    hints: [
                        "Need two variables: one for the object, one for the count.",
                        "Solution: `best_item = None` and `max_qty = -1`"
                    ]
                },
                {
                    id: 3,
                    description: 'Start Loop',
                    completed: false,
                    regex: /for\s+item\s+in\s+items:/,
                    hints: [
                        "Loop through the items.",
                        "Solution: `for item in items:`"
                    ]
                },
                {
                    id: 4,
                    description: 'Logic: Check for new Max',
                    completed: false,
                    regex: /if\s+item\['qty'\]\s*>\s*max_qty:/,
                    hints: [
                        "Valid if current qty is greater than our record.",
                        "Solution: `if item['qty'] > max_qty:`"
                    ]
                },
                {
                    id: 5,
                    description: 'Logic: Update Max',
                    completed: false,
                    regex: /max_qty\s*=\s*item\['qty'\]/,
                    hints: [
                        "Update the record.",
                        "Solution: `max_qty = item['qty']`"
                    ]
                },
                {
                    id: 6,
                    description: 'Logic: Update Best Item',
                    completed: false,
                    regex: /best_item\s*=\s*item/,
                    hints: [
                        "Remember who holds the record.",
                        "Solution: `best_item = item`"
                    ]
                },
                {
                    id: 7,
                    description: 'Return Name',
                    completed: false,
                    regex: /return\s+best_item\['name'\]/,
                    hints: [
                        "Return only the name string.",
                        "Solution: `return best_item['name']`"
                    ]
                }
            ],
            files: [
                {
                    name: 'analytics.py',
                    language: 'python',
                    content: `products = [
    {'name': 'A', 'qty': 10},
    {'name': 'B', 'qty': 500},
    {'name': 'C', 'qty': 2}
]

# Define find_best_product(items) here

# Print result
`
                }
            ]
        },
        {
            id: 'py-7-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Pipeline Architecture 🚀',
            duration: '15 min read',
            content: `
# Deep Dive: Pipeline Architecture 🚀

## 1. Composition
We have built 3 small, specialized tools:
1.  **Parser**: String -> Dict
2.  **Revenue**: Dicts -> Int
3.  **Best Seller**: Dicts -> String

Now we build the **Controller** (Main Function) to connect them.

\`\`\`mermaid
graph TD
    classDef default fill:#1e293b,stroke:#94a3b8,stroke-width:2px,color:#fff;
    classDef main fill:#1e293b,stroke:#ec4899,stroke-width:4px,color:#fff;

    Raw[Raw List] --> Main{Main Controller}:::main
    
    Main -->|1. Call| Parser
    Parser -->|Returns| CleanData
    
    CleanData -->|Input| Rev[Revenue Calc]
    CleanData -->|Input| Best[Best Seller Calc]
    
    Rev --> Report
    Best --> Report
    
    Report --> Final[Print]
    
    linkStyle default stroke:#e2e8f0,stroke-width:2px;
\`\`\`
            `
        },
        {
            id: 'py-7-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 4: The Executive Report (Main)',
            duration: '50 min',
            content: `
# Phase 4: The Executive Report

Connect all your functions to process raw data from start to finish.

## The Mission
1.  **Main**: Define \`process_data(raw_strings)\`.
2.  **Step 1 (Parse)**: Create an empty list \`clean_data\`. Loop through \`raw_strings\`, call \`parse_line\`, and append result to \`clean_data\`.
3.  **Step 2 (Analyze)**: Call \`calculate_revenue(clean_data)\` -> Save to \`total\`.
4.  **Step 3 (Insight)**: Call \`find_best_product(clean_data)\` -> Save to \`best\`.
5.  **Output**: Return a dict \`{"revenue": total, "best_seller": best}\`.

*Note: The helper functions are pre-loaded for you in this environment.*

## Final Boss
This ensures you understand how data flows between functions.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Main Function',
                    completed: false,
                    regex: /def\s+process_data\s*\(\s*raw_strings\s*\):/,
                    hints: [
                        "Solution: `def process_data(raw_strings):`"
                    ]
                },
                {
                    id: 2,
                    description: 'Init clean_data list',
                    completed: false,
                    regex: /clean_data\s*=\s*\[\]/,
                    hints: [
                        "Create empty list.",
                        "Solution: `clean_data = []`"
                    ]
                },
                {
                    id: 3,
                    description: 'Parsing Loop',
                    completed: false,
                    regex: /for\s+line\s+in\s+raw_strings:.*clean_data\.append\(\s*parse_line\(\s*line\s*\)\s*\)/s,
                    hints: [
                        "Loop strings, parse them, and append.",
                        "Solution: `for line in raw_strings: clean_data.append(parse_line(line))`"
                    ]
                },
                {
                    id: 4,
                    description: 'Calculate Revenue',
                    completed: false,
                    regex: /total\s*=\s*calculate_revenue\(\s*clean_data\s*\)/,
                    hints: [
                        "Call your calc function.",
                        "Solution: `total = calculate_revenue(clean_data)`"
                    ]
                },
                {
                    id: 5,
                    description: 'Find Best Seller',
                    completed: false,
                    regex: /best\s*=\s*find_best_product\(\s*clean_data\s*\)/,
                    hints: [
                        "Call your best selector function.",
                        "Solution: `best = find_best_product(clean_data)`"
                    ]
                },
                {
                    id: 6,
                    description: 'Return Report Dictionary',
                    completed: false,
                    regex: /return\s*\{\s*(['"])revenue\1:\s*total,\s*(['"])best_seller\2:\s*best\s*\}/s,
                    hints: [
                        "Construct and return the final report.",
                        "Solution: `return {'revenue': total, 'best_seller': best}`"
                    ]
                },
                {
                    id: 7,
                    description: 'Execute',
                    completed: false,
                    regex: /print\(\s*process_data\s*\(\s*raw_sales\s*\)\s*\)/,
                    hints: [
                        "Run the main function.",
                        "Solution: `print(process_data(raw_sales))`"
                    ]
                }
            ],
            files: [
                {
                    name: 'main.py',
                    language: 'python',
                    content: `# PRE-LOADED HELPERS (Do not copy-paste, assume they exist)
# def parse_line(line)...
# def calculate_revenue(items)...
# def find_best_product(items)...

raw_sales = [
    "Laptop,1000,5",
    "Mouse,20,50",
    "Monitor,200,10"
]

# Define process_data(raw_strings) here

# Call it
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'py-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Capstone Certification',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why do we parse string data into Dictionaries?',
                    options: [
                        'To make the file size smaller',
                        'To encrypt the data',
                        'To allow algorithmic access (Math, Sorting, Key lookup)',
                        'Because strings are deprecated'
                    ],
                    correctIndex: 2,
                    explanation: 'Strings are just text. Dictionaries give us structure, allowing us to ask "What is the price?" programmatically.'
                },
                {
                    id: 'q2',
                    question: 'In the King of the Hill (Max) algorithm, what is the initial value of "Max"?',
                    options: [
                        '100',
                        'The first item in the list',
                        'A very small number (or None/First Item) to ensure any real data beats it',
                        'Random'
                    ],
                    correctIndex: 2,
                    explanation: 'We usually start with -1 or -infinity so that the first real item we see immediately becomes the new Max.'
                },
                {
                    id: 'q3',
                    question: 'What is the "Accumulator" variable used for?',
                    options: [
                        'To count loop iterations',
                        'To validat user passwords',
                        'To build up a total value (Sum, List, String) across loop iterations',
                        'To crash the program'
                    ],
                    correctIndex: 2,
                    explanation: 'An accumulator (like `total = 0`) "accumulates" values as the loop runs.'
                },
                {
                    id: 'q4',
                    question: 'What is the return type of `line.split(",")`?',
                    options: [
                        'String',
                        'List of Strings',
                        'Dictionary',
                        'Integer'
                    ],
                    correctIndex: 1,
                    explanation: '`split` chops a string into pieces and puts them in a List.'
                },
                {
                    id: 'q5',
                    question: 'If `process_data` depends on `parse_line`, what happens if `parse_line` is broken?',
                    options: [
                        '`process_data` fixes it automatically',
                        'Only `process_data` fails',
                        'The entire pipeline fails (Garbage In, Garbage Out)',
                        'Python skips the error'
                    ],
                    correctIndex: 2,
                    explanation: 'In a pipeline, a failure upstream propagates downstream. Clean parsing is critical.'
                }
            ]
        }
    ]
};
