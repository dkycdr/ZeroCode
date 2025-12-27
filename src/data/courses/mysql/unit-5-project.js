
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Project = {
    id: 'mysql-unit-5',
    title: 'Unit 5: Capstone Project',
    description: 'Build a University Management System from scratch.',
    items: [
        {
            id: 'mysql-5-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Project: University DB',
            duration: '120 min',
            difficulty: 'Advanced',
            description: 'Design, Build, and Query a complex relational database.',
            content: `
# 🎯 Project: University DB

## The Objective
Build a database to manage:
*   **Students** (Name, Email, GPA)
*   **Professors** (Name, Department)
*   **Courses** (Title, Credits, Professor)
*   **Enrollments** (Grades)

## Requirements
1.  **Schema**: 4 Normalized Tables.
2.  **Relationships**: Foreign Keys linking them properly.
3.  **Data**: Insert sample data (3 Students, 2 Professors, 3 Courses).
4.  **Query**:
    *   Find GPA of all students.
    *   List courses taught by "Prof. Smith".
    *   Find students failing a class (Grade < 60).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Schema: Create all tables with FKs',
                    completed: false,
                    regex: /CREATE\s+TABLE[\s\S]+FOREIGN\s+KEY/i
                },
                {
                    id: 2,
                    description: 'Data: Insert sample records',
                    completed: false,
                    regex: /INSERT\s+INTO/i
                },
                {
                    id: 3,
                    description: 'Query: Join Students and Courses',
                    completed: false,
                    regex: /SELECT[\s\S]+JOIN/i
                },
                {
                    id: 4,
                    description: 'Analysis: Group By Department',
                    completed: false,
                    regex: /GROUP\s+BY/i
                }
            ],
            starterFiles: [
                {
                    name: 'project.sql',
                    language: 'sql',
                    content: `-- University DB Project

-- 1. Create Tables

-- 2. Insert Data

-- 3. Run Queries
`
                }
            ]
        }
    ]
};
