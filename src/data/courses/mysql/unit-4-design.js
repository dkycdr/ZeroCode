
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Design = {
    id: 'mysql-unit-4',
    title: 'Unit 4: Database Design',
    description: 'Architect scalable systems. Master Normal Forms (1NF, 2NF, 3NF).',
    items: [
        {
            id: 'mysql-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Normalization 📐',
            duration: '20 min read',
            content: `
# Deep Dive: Normalization 📐

## 1. The Anomaly Problem
Why do we split data into tables? To prevent **Anomalies**.
*   **Update Anomaly**: Changing a student's address requires updating 100 rows.
*   **Insert Anomaly**: Cannot add a course unless a student is enrolled in it.
*   **Delete Anomaly**: Deleting the last student in a course deletes the course itself.

## 2. Normal Forms Recap
*   **1NF**: Atomic Columns (No list of phones in one cell).
*   **2NF**: No Partial Dependency (Course Name depends on CourseID, not StudentID).
*   **3NF**: No Transitive Dependency (City depends on ZipCode, not UserID).

## 3. Denormalization
Sometimes we break 3NF for speed (e.g., storing a \`total_likes\` counter on a Post instead of counting distinct Likes every time).
            `
        },
        // Lab: Schema Design
        {
            id: 'mysql-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Schema Design',
            duration: '30 min',
            content: `
# Lab 1: Schema Design

Design a normalized schema for a University.

## The Mission
1.  **Students**: ID, Name, Email.
2.  **Courses**: ID, Title, Credits.
3.  **Enrollments**: Link Student <-> Course (Many-to-Many).
4.  **Constraints**: Email must be unique. Credits between 1-4.

## Key Concept
A Many-to-Many relationship ALWAYS requires a third "Junction" table.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Table: CREATE TABLE students (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE)',
                    completed: false,
                    regex: /CREATE\s+TABLE\s+students[\s\S]+UNIQUE/i
                },
                {
                    id: 2,
                    description: 'Table: CREATE TABLE courses (credits INT CHECK (credits BETWEEN 1 AND 4))',
                    completed: false,
                    regex: /CHECK\s*\(\s*credits/i
                },
                {
                    id: 3,
                    description: 'Junction: CREATE TABLE enrollments (FOREIGN KEY (student_id) REFERENCES students(id))',
                    completed: false,
                    regex: /FOREIGN\s+KEY[\s\S]+REFERENCES\s+students/i
                }
            ],
            files: [
                {
                    name: 'schema.sql',
                    language: 'sql',
                    content: `-- Lab 1: Schema Design

-- 1. Create Students Table

-- 2. Create Courses Table

-- 3. Create Enrollments Table
`
                }
            ]
        },
        {
            id: 'mysql-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Design Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'A comma-separated list of phone numbers in one column violates which Normal Form?',
                    options: [
                        '1NF',
                        '2NF',
                        '3NF',
                        'BCNF'
                    ],
                    correctIndex: 0,
                    explanation: '1NF requires Atomic (indivisible) values. Lists must be moved to a separate table.'
                },
                {
                    id: 'q2',
                    question: 'Which anomaly occurs when deleting a record inadvertently deletes unrelated data?',
                    options: [
                        'Update Anomaly',
                        'Delete Anomaly',
                        'Insert Anomaly',
                        'Select Anomaly'
                    ],
                    correctIndex: 1,
                    explanation: 'Example: Deleting the only student in a course deletes the course information if they are in the same table.'
                }
            ]
        }
    ]
};
