import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4HelloWorld = {
    id: 'py-u0-lab-4-hello',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Your First Python Program',
    duration: '20 min',
    content: `
# Lab: Your First Python Program

## The Assignment
Welcome, new recruit! You've just been assigned to the **ZeroCode Training Terminal**.

Your first mission: prove you can communicate with the system by running basic Python commands.

## Your Mission
1. **Print a greeting** to announce your arrival
2. **Store your agent name** in a variable
3. **Use an f-string** to introduce yourself properly
4. **Print a calculation** to show the system you understand math
5. **Use multiple print arguments** to display a status message

## Success Criteria
All tasks must pass validation. The terminal will confirm each successful step.
`,
    tasks: [
        {
            id: 1,
            description: 'Print "Hello, World!" to announce your arrival',
            completed: false,
            regex: /print\s*\(\s*["']Hello,?\s*World!?["']\s*\)/i,
            hint: {
                concept: 'The print() function',
                strategy: 'Use print() with a string inside. Strings need quotes.',
                solution: 'print("Hello, World!")'
            }
        },
        {
            id: 2,
            description: 'Create a variable called "agent_name" with your name',
            completed: false,
            regex: /agent_name\s*=\s*["'][^"']+["']/,
            hint: {
                concept: 'Variable Assignment',
                strategy: 'Variables use = to assign. No keywords needed.',
                solution: 'agent_name = "Neo"'
            }
        },
        {
            id: 3,
            description: 'Print your name using the agent_name variable',
            completed: false,
            regex: /print\s*\(\s*agent_name\s*\)/,
            hint: {
                concept: 'Printing Variables',
                strategy: 'Pass the variable name directly to print(), no quotes.',
                solution: 'print(agent_name)'
            }
        },
        {
            id: 4,
            description: 'Use an f-string to print "Agent: {your_name} reporting for duty"',
            completed: false,
            regex: /print\s*\(\s*f["']Agent:\s*\{agent_name\}.*duty["']\s*\)/i,
            hint: {
                concept: 'f-strings (Formatted Strings)',
                strategy: 'Prefix string with f, use {variable} inside.',
                solution: 'print(f"Agent: {agent_name} reporting for duty")'
            }
        },
        {
            id: 5,
            description: 'Print the result of 2 + 2 (should output 4)',
            completed: false,
            regex: /print\s*\(\s*2\s*\+\s*2\s*\)/,
            hint: {
                concept: 'Math in Python',
                strategy: 'Put the math expression directly inside print().',
                solution: 'print(2 + 2)'
            }
        },
        {
            id: 6,
            description: 'Print "Status:" and "Online" as two arguments',
            completed: false,
            regex: /print\s*\(\s*["']Status:["']\s*,\s*["']Online["']\s*\)/i,
            hint: {
                concept: 'Multiple Arguments',
                strategy: 'Separate arguments with commas. print() adds spaces automatically.',
                solution: 'print("Status:", "Online")'
            }
        }
    ],
    files: [
        {
            name: 'main.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE TRAINING TERMINAL v2.0
# Mission: First Contact
# ============================================

# --- TASK 1: ANNOUNCE YOUR ARRIVAL ---
# Print the classic "Hello, World!" message
# Hint: print("your message here")


# --- TASK 2: REGISTER YOUR IDENTITY ---
# Create a variable called agent_name with your name
# Hint: variable_name = "value"


# --- TASK 3: VERIFY YOUR IDENTITY ---
# Print the agent_name variable
# Hint: print(variable_name)


# --- TASK 4: FORMAL INTRODUCTION ---
# Use an f-string to print: "Agent: {name} reporting for duty"
# Hint: print(f"text {variable} more text")


# --- TASK 5: BASIC CALCULATION ---
# Print the result of 2 + 2
# Hint: print(expression)


# --- TASK 6: STATUS REPORT ---
# Print "Status:" and "Online" as two separate arguments
# Hint: print(arg1, arg2)


# ===========================================
# END OF MISSION
# ===========================================
`
        }
    ]
};
