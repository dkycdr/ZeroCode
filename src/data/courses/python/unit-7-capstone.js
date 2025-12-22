
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Capstone = {
    id: 'py-unit-7',
    title: 'Capstone: Data Analysis',
    description: 'Process raw sales data to generate business insights.',
    items: [
        {
            id: 'py-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Project Overview',
            duration: '10 min read',
            content: `
# Sales Analytics

We have a list of raw sales strings (CSV format).
Goal: Calculate total revenue and find the top product.
            `
        },
        {
            id: 'py-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: Parsing',
            duration: '20 min',
            content: `
# Parsing CSV

Convert a string "Name,10,2" into a Dict.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Split string',
                    completed: false,
                    regex: /raw\.split\(\s*['"],['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Parse int price',
                    completed: false,
                    regex: /int\(\s*parts\[1\]\s*\)/
                },
                {
                    id: 3,
                    description: 'Parse int qty',
                    completed: false,
                    regex: /int\(\s*parts\[2\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'parser.py',
                    language: 'python',
                    content: `raw_data = "Apple,1,10"

def parse_line(line):
    # TODO: Split the string by comma
    parts = [] 
    
    # TODO: Create a dictionary with name, price (int), qty (int)
    return {}

# Test it
print(parse_line(raw_data))`
                }
            ]
        },
        {
            id: 'py-7-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: Total Revenue',
            duration: '25 min',
            content: `
# Summing Up

Calculate total revenue from a list of dicts.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize total',
                    completed: false,
                    regex: /total_rev\s*=\s*0/
                },
                {
                    id: 2,
                    description: 'Loop sales',
                    completed: false,
                    regex: /for\s+item\s+in\s+sales:/
                },
                {
                    id: 3,
                    description: 'Add calculated revenue',
                    completed: false,
                    regex: /total_rev\s*\+=\s*item\['price'\]\s*\*\s*item\['qty'\]/
                }
            ],
            files: [
                {
                    name: 'revenue.py',
                    language: 'python',
                    content: `sales = [
    {"name": "A", "price": 10, "qty": 2},
    {"name": "B", "price": 5, "qty": 10}
]

def calculate_revenue(items):
    total_rev = 0
    # TODO: Loop through items and sum (price * qty)
    
    return total_rev

print(f"Total Revenue: {calculate_revenue(sales)}")`
                }
            ]
        },
        {
            id: 'py-7-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 3: Top Product',
            duration: '25 min',
            content: `
# Best Seller

Find the product with the highest quantity sold.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize max',
                    completed: false,
                    regex: /max_qty\s*=\s*-1|max_qty\s*=\s*0/
                },
                {
                    id: 2,
                    description: 'Comparison',
                    completed: false,
                    regex: /if\s+item\['qty'\]\s*>\s*max_qty:/
                },
                {
                    id: 3,
                    description: 'Update best',
                    completed: false,
                    regex: /best_item\s*=\s*item/
                }
            ],
            files: [
                {
                    name: 'analytics.py',
                    language: 'python',
                    content: `sales = [
    {"name": "A", "qty": 50},
    {"name": "B", "qty": 100}
]

def find_best_seller(items):
    best_item = None
    max_qty = -1
    
    # TODO: Find item with highest qty
    
    return best_item

best = find_best_seller(sales)
print(f"Best Seller: {best['name']}")`
                }
            ]
        },
        {
            id: 'py-7-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 4: Full Pipeline',
            duration: '35 min',
            content: `
# The Main Function

Combine parsing, calculation, and reporting.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define main function',
                    completed: false,
                    regex: /def\s+process_data\s*\(\s*raw_list\s*\):/
                },
                {
                    id: 2,
                    description: 'Loop raw strings',
                    completed: false,
                    regex: /for\s+raw\s+in\s+raw_list:/
                },
                {
                    id: 3,
                    description: 'Return dict',
                    completed: false,
                    regex: /return\s*\{/
                }
            ],
            files: [
                {
                    name: 'main.py',
                    language: 'python',
                    content: `raw_data = [
    "Laptop,1200,5",
    "Mouse,25,100",
    "Keyboard,50,30"
]

def process_data(raw_list):
    parsed_items = []
    
    # 1. Parse Data
    # TODO
    
    # 2. Calculate Stats
    # TODO
    
    return {
        "revenue": 0,
        "best_seller": ""
    }

# Run
report = process_data(raw_data)
print(report)`
                }
            ]
        }
    ]
};
