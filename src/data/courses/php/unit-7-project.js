
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Project = {
    id: 'php-unit-7',
    title: 'Unit 7: Capstone Project',
    description: 'Build a CLI Expense Tracker. Combine Arrays, Files, and Functions.',
    items: [
        // Project
        {
            id: 'php-7-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Project: Budget CLI 💸',
            duration: '1 hour',
            content: `
# Project: Budget CLI 💸

Build a Command Line Application to track expenses.

## The Goal
Create a script \`budget.php\` that:
1.  **Defines a Class**: \`Transaction\` with \`amount\` and \`description\`.
2.  **Stores Data**: Use an Array of Transaction objects.
3.  **Calculates Total**: Loop through the array and sum the values.
4.  **Outputs Report**: Print a formatted table.

## Step-by-Step
1.  Create \`class Transaction\`.
2.  Create array \`$transactions = [];\`.
3.  Add 3 transactions (Lunch: 15, Rent: 800, Salary: 3000).
4.  Write a function \`printReport($transactions)\`.
5.  Use \`foreach\` to print each item.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Class: Define class Transaction',
                    completed: false,
                    regex: /class\s+Transaction/
                },
                {
                    id: 2,
                    description: 'Data: Create array of new Transaction() objects',
                    completed: false,
                    regex: /new\s+Transaction/
                },
                {
                    id: 3,
                    description: 'Loop: foreach ($transactions as $t)',
                    completed: false,
                    regex: /foreach\s*\(\s*\$\w+\s+as\s+\$\w+\s*\)/
                },
                {
                    id: 4,
                    description: 'Total: Calculate and echo total sum',
                    completed: false,
                    regex: /echo.*Total/i
                }
            ],
            files: [
                {
                    name: 'budget.php',
                    language: 'php',
                    content: `<?php
// Capstone Project: Budget CLI

// 1. Define Transaction Class


// 2. Create Transactions data


// 3. Print Report Function


// 4. Run Report
?>`
                }
            ]
        }
    ]
};
