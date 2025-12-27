import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4TodoList = {
    id: 'py-u4-lab-4-todo',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Task Management System',
    duration: '30 min',
    content: `
# Lab: Task Management System

## The Assignment
Build a robust task management system for ZeroCode operations.
Your mission: implement a todo list with full CRUD operations.

## Operations Needed
- **Create**: Add new tasks
- **Read**: View all tasks
- **Update**: Modify tasks
- **Delete**: Remove completed tasks

## Your Mission
Implement each operation using list methods.

## Success Criteria
All list operations must work correctly.
`,
    tasks: [
        {
            id: 1,
            description: 'Create empty list called tasks',
            completed: false,
            regex: /tasks\s*=\s*\[\s*\]/,
            hint: {
                concept: 'Empty List Creation',
                strategy: 'Use empty square brackets.',
                solution: 'tasks = []'
            }
        },
        {
            id: 2,
            description: 'Append "Complete Python course" to tasks',
            completed: false,
            regex: /tasks\.append\s*\(\s*["']Complete Python course["']\s*\)/i,
            hint: {
                concept: 'List append()',
                strategy: 'list.append(item) adds to the end.',
                solution: 'tasks.append("Complete Python course")'
            }
        },
        {
            id: 3,
            description: 'Append "Build portfolio project" to tasks',
            completed: false,
            regex: /tasks\.append\s*\(\s*["']Build portfolio project["']\s*\)/i,
            hint: {
                concept: 'Multiple Appends',
                strategy: 'Call append again to add more items.',
                solution: 'tasks.append("Build portfolio project")'
            }
        },
        {
            id: 4,
            description: 'Insert "Read documentation" at index 0',
            completed: false,
            regex: /tasks\.insert\s*\(\s*0\s*,\s*["']Read documentation["']\s*\)/i,
            hint: {
                concept: 'List insert()',
                strategy: 'list.insert(index, item) inserts at position.',
                solution: 'tasks.insert(0, "Read documentation")'
            }
        },
        {
            id: 5,
            description: 'Print total number of tasks using len()',
            completed: false,
            regex: /print\s*\([^)]*len\s*\(\s*tasks\s*\)[^)]*\)/,
            hint: {
                concept: 'List Length',
                strategy: 'len(list) returns the count of items.',
                solution: 'print("Total tasks:", len(tasks))'
            }
        },
        {
            id: 6,
            description: 'Loop through tasks and print each with index using enumerate()',
            completed: false,
            regex: /for\s+\w+\s*,\s*\w+\s+in\s+enumerate\s*\(\s*tasks\s*\)/,
            hint: {
                concept: 'enumerate() for Index',
                strategy: 'enumerate(list) gives (index, item) pairs.',
                solution: 'for i, task in enumerate(tasks):\\n    print(i, task)'
            }
        },
        {
            id: 7,
            description: 'Remove first task using tasks.pop(0)',
            completed: false,
            regex: /tasks\.pop\s*\(\s*0\s*\)/,
            hint: {
                concept: 'List pop()',
                strategy: 'pop(index) removes and returns item at index.',
                solution: 'tasks.pop(0)'
            }
        }
    ],
    files: [
        {
            name: 'todo.py',
            language: 'python',
            content: `# ============================================
# ZEROCODE TASK MANAGEMENT SYSTEM
# Mission: Build Full CRUD Todo List
# ============================================

# --- CREATE ---
# TASK 1: Initialize empty task list


# TASK 2: Add "Complete Python course"


# TASK 3: Add "Build portfolio project"


# TASK 4: Insert "Read documentation" at the beginning


# --- READ ---
# TASK 5: Print total number of tasks


# TASK 6: Print all tasks with their index


# --- DELETE ---
# TASK 7: Remove the first task


# TASK 8: Print remaining tasks
print("Remaining tasks:", tasks)

# ===========================================
# TASK MANAGEMENT COMPLETE
# ===========================================
`
        }
    ]
};
