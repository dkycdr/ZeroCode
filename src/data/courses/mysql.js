// MySQL (SQL) - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const mysqlCourse = {
    id: 'mysql',
    title: 'MySQL (SQL)',
    description: 'Master relational databases with MySQL for data storage and retrieval.',
    
    units: [
        {
            id: 'mysql-unit-1',
            title: 'Introduction to Databases',
            description: 'Understand databases and SQL basics',
            items: [
                {
                    id: 'mysql-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is a Database?',
                    duration: '5 min read',
                    content: `
# What is a Database?

A **database** is an organized collection of data stored electronically. Think of it as an Excel spreadsheet on steroids!

## Why Use Databases?

| Without Database | With Database |
|------------------|---------------|
| Data in files | Structured storage |
| Hard to search | Fast queries |
| No relationships | Connected data |
| Manual backups | Automatic backups |
| Single user | Multiple users |

## Database vs Spreadsheet

### Spreadsheet (Excel)
- Good for small data
- One user at a time
- Limited relationships
- Manual updates

### Database (MySQL)
- Handles millions of records
- Multiple concurrent users
- Complex relationships
- Automated operations

## Relational Databases

Data is stored in **tables** with **relationships**:

\`\`\`
students table          courses table
┌────┬───────┬─────┐   ┌────┬──────────┐
│ id │ name  │ age │   │ id │ name     │
├────┼───────┼─────┤   ├────┼──────────┤
│ 1  │ Alice │ 21  │   │ 1  │ HTML     │
│ 2  │ Bob   │ 22  │   │ 2  │ CSS      │
└────┴───────┴─────┘   └────┴──────────┘

enrollments table (relationship)
┌────────────┬───────────┐
│ student_id │ course_id │
├────────────┼───────────┤
│ 1          │ 1         │
│ 1          │ 2         │
│ 2          │ 1         │
└────────────┴───────────┘
\`\`\`

## What is SQL?

**SQL** (Structured Query Language) is the language used to communicate with databases.

### Common SQL Commands

| Command | Purpose |
|---------|---------|
| SELECT | Read data |
| INSERT | Add data |
| UPDATE | Modify data |
| DELETE | Remove data |
| CREATE | Make tables |
| DROP | Delete tables |

> 💡 **Fun Fact**: SQL was invented in the 1970s and is still the standard today!
                    `
                },
                {
                    id: 'mysql-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Basic SQL Queries',
                    duration: '25 min',
                    content: `
# Basic SQL Queries

## SELECT - Reading Data

\`\`\`sql
-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, age FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 20;

-- Select with multiple conditions
SELECT * FROM students WHERE age > 20 AND major = 'SE';

-- Select with OR
SELECT * FROM students WHERE major = 'SE' OR major = 'IT';
\`\`\`

## WHERE Clause Operators

| Operator | Example | Meaning |
|----------|---------|---------|
| = | age = 21 | Equal |
| != or <> | age != 21 | Not equal |
| > | age > 20 | Greater than |
| < | age < 25 | Less than |
| >= | age >= 21 | Greater or equal |
| <= | age <= 25 | Less or equal |
| LIKE | name LIKE 'A%' | Pattern match |
| IN | major IN ('SE', 'IT') | In list |
| BETWEEN | age BETWEEN 20 AND 25 | Range |

## LIKE Patterns

\`\`\`sql
-- Starts with 'A'
SELECT * FROM students WHERE name LIKE 'A%';

-- Ends with 'son'
SELECT * FROM students WHERE name LIKE '%son';

-- Contains 'li'
SELECT * FROM students WHERE name LIKE '%li%';

-- Second letter is 'a'
SELECT * FROM students WHERE name LIKE '_a%';
\`\`\`

## ORDER BY - Sorting

\`\`\`sql
-- Ascending (default)
SELECT * FROM students ORDER BY name;
SELECT * FROM students ORDER BY name ASC;

-- Descending
SELECT * FROM students ORDER BY age DESC;

-- Multiple columns
SELECT * FROM students ORDER BY major ASC, age DESC;
\`\`\`

## LIMIT - Limiting Results

\`\`\`sql
-- First 10 students
SELECT * FROM students LIMIT 10;

-- Skip 5, get next 10 (pagination)
SELECT * FROM students LIMIT 5, 10;
\`\`\`

---

## Your Mission
Write SQL queries to retrieve student data.
                    `,
                    tasks: [
                        { id: 1, description: 'In queries.sql, write: SELECT * FROM students WHERE gpa > 3.5; to filter data', completed: false, regex: /SELECT[\s\S]+FROM[\s\S]+WHERE/i },
                        { id: 2, description: 'In queries.sql, add: ORDER BY name ASC; at end of query for sorting', completed: false, regex: /ORDER\s+BY/i },
                        { id: 3, description: 'In queries.sql, write: SELECT * FROM students WHERE name LIKE "A%"; to find names starting with A', completed: false, regex: /LIKE\s+['"]%/i },
                        { id: 4, description: 'In queries.sql, add: LIMIT 5; at end of query to limit to 5 results', completed: false, regex: /LIMIT\s+\d+/i }
                    ],
                    files: [
                        { name: 'queries.sql', language: 'sql', content: `-- SQL Query Practice

-- 1. Select all students


-- 2. Select students with GPA > 3.5


-- 3. Select students majoring in SE, ordered by name


-- 4. Find students whose name starts with 'A'


-- 5. Get top 5 students by GPA


-- 6. Select students between age 20 and 25

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'mysql-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'SQL Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which SQL command is used to retrieve data?',
                            options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
                            correctIndex: 1,
                            explanation: 'SELECT is the SQL command to retrieve data from tables.'
                        },
                        {
                            id: 'q2',
                            question: 'What does "LIKE \'A%\'" match?',
                            options: [
                                'Exactly "A%"',
                                'Strings starting with A',
                                'Strings ending with A',
                                'Strings containing A'
                            ],
                            correctIndex: 1,
                            explanation: '% is a wildcard. A% matches any string starting with A.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'mysql-unit-2',
            title: 'CRUD Operations',
            description: 'Create, Read, Update, Delete data',
            items: [
                {
                    id: 'mysql-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'INSERT, UPDATE, DELETE',
                    duration: '30 min',
                    content: `
# CRUD Operations

## INSERT - Adding Data

\`\`\`sql
-- Insert single row
INSERT INTO students (name, age, major, gpa)
VALUES ('Alice', 21, 'SE', 3.8);

-- Insert multiple rows
INSERT INTO students (name, age, major, gpa)
VALUES 
    ('Bob', 22, 'IT', 3.5),
    ('Charlie', 20, 'CS', 3.9),
    ('Diana', 21, 'SE', 3.7);

-- Insert without specifying columns (must match order)
INSERT INTO students
VALUES (NULL, 'Eve', 23, 'IT', 3.6);
\`\`\`

## UPDATE - Modifying Data

\`\`\`sql
-- Update single column
UPDATE students
SET gpa = 4.0
WHERE name = 'Alice';

-- Update multiple columns
UPDATE students
SET age = 22, gpa = 3.9
WHERE name = 'Bob';

-- Update with condition
UPDATE students
SET gpa = gpa + 0.1
WHERE major = 'SE';

-- ⚠️ Without WHERE, updates ALL rows!
UPDATE students SET gpa = 4.0;  -- DANGEROUS!
\`\`\`

## DELETE - Removing Data

\`\`\`sql
-- Delete specific row
DELETE FROM students WHERE id = 5;

-- Delete with condition
DELETE FROM students WHERE gpa < 2.0;

-- ⚠️ Without WHERE, deletes ALL rows!
DELETE FROM students;  -- DELETES EVERYTHING!
\`\`\`

## Safe Practices

### 1. Always Use WHERE
\`\`\`sql
-- ❌ BAD: Updates/deletes everything
UPDATE students SET gpa = 4.0;
DELETE FROM students;

-- ✅ GOOD: Specific condition
UPDATE students SET gpa = 4.0 WHERE id = 1;
DELETE FROM students WHERE id = 1;
\`\`\`

### 2. Test with SELECT First
\`\`\`sql
-- Before deleting, check what will be deleted
SELECT * FROM students WHERE gpa < 2.0;

-- If results look correct, then delete
DELETE FROM students WHERE gpa < 2.0;
\`\`\`

### 3. Use Transactions (Advanced)
\`\`\`sql
START TRANSACTION;
UPDATE students SET gpa = 4.0 WHERE id = 1;
-- Check if correct
ROLLBACK;  -- Undo if wrong
-- or
COMMIT;    -- Save if correct
\`\`\`

---

## Your Mission
Practice INSERT, UPDATE, and DELETE operations.
                    `,
                    tasks: [
                        { id: 1, description: 'In crud.sql, write: INSERT INTO students (name, age) VALUES ("Alice", 21);', completed: false, regex: /INSERT\s+INTO[\s\S]+VALUES/i },
                        { id: 2, description: 'In crud.sql, write: UPDATE students SET gpa = 3.9 WHERE id = 1; (MUST use WHERE!)', completed: false, regex: /UPDATE[\s\S]+SET[\s\S]+WHERE/i },
                        { id: 3, description: 'In crud.sql, write: DELETE FROM students WHERE id = 5; (MUST use WHERE!)', completed: false, regex: /DELETE\s+FROM[\s\S]+WHERE/i },
                        { id: 4, description: 'In crud.sql, insert multiple: INSERT INTO students (name) VALUES ("Bob"), ("Charlie");', completed: false, regex: /VALUES[\s\S]*\([^)]+\)\s*,\s*\([^)]+\)/i }
                    ],
                    files: [
                        { name: 'crud.sql', language: 'sql', content: `-- CRUD Operations Practice

-- 1. Insert a new student


-- 2. Insert multiple students at once


-- 3. Update a student's GPA


-- 4. Update multiple columns


-- 5. Delete a student by ID


-- 6. Delete students with GPA < 2.0

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'mysql-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Aggregate Functions',
                    duration: '20 min',
                    content: `
# Aggregate Functions

Aggregate functions perform calculations on multiple rows.

## Common Functions

\`\`\`sql
-- COUNT: Number of rows
SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students WHERE major = 'SE';

-- SUM: Total of values
SELECT SUM(gpa) FROM students;

-- AVG: Average
SELECT AVG(gpa) FROM students;
SELECT AVG(gpa) FROM students WHERE major = 'SE';

-- MAX: Highest value
SELECT MAX(gpa) FROM students;

-- MIN: Lowest value
SELECT MIN(gpa) FROM students;
\`\`\`

## GROUP BY

Group rows and apply aggregate functions:

\`\`\`sql
-- Count students per major
SELECT major, COUNT(*) as student_count
FROM students
GROUP BY major;

-- Average GPA per major
SELECT major, AVG(gpa) as avg_gpa
FROM students
GROUP BY major;

-- Multiple aggregates
SELECT major, 
       COUNT(*) as total,
       AVG(gpa) as avg_gpa,
       MAX(gpa) as highest_gpa
FROM students
GROUP BY major;
\`\`\`

## HAVING

Filter grouped results (WHERE doesn't work with aggregates):

\`\`\`sql
-- Majors with more than 10 students
SELECT major, COUNT(*) as total
FROM students
GROUP BY major
HAVING COUNT(*) > 10;

-- Majors with average GPA > 3.5
SELECT major, AVG(gpa) as avg_gpa
FROM students
GROUP BY major
HAVING AVG(gpa) > 3.5;
\`\`\`

## WHERE vs HAVING

| Clause | Use For | Example |
|--------|---------|---------|
| WHERE | Filter rows before grouping | WHERE age > 20 |
| HAVING | Filter groups after aggregation | HAVING COUNT(*) > 10 |

\`\`\`sql
-- Correct order
SELECT major, AVG(gpa) as avg_gpa
FROM students
WHERE age > 20              -- Filter rows first
GROUP BY major              -- Then group
HAVING AVG(gpa) > 3.5       -- Then filter groups
ORDER BY avg_gpa DESC;      -- Finally sort
\`\`\`

---

## Your Mission
Use aggregate functions to analyze student data.
                    `,
                    tasks: [
                        { id: 1, description: 'In aggregates.sql, write: SELECT COUNT(*) FROM students; to count rows', completed: false, regex: /COUNT\s*\(\s*\*\s*\)/i },
                        { id: 2, description: 'In aggregates.sql, write: SELECT AVG(gpa) FROM students; for average GPA', completed: false, regex: /AVG\s*\(/i },
                        { id: 3, description: 'In aggregates.sql, write: SELECT major, COUNT(*) FROM students GROUP BY major; to group data', completed: false, regex: /GROUP\s+BY/i },
                        { id: 4, description: 'In aggregates.sql, add: HAVING COUNT(*) > 5; after GROUP BY to filter groups', completed: false, regex: /HAVING/i }
                    ],
                    files: [
                        { name: 'aggregates.sql', language: 'sql', content: `-- Aggregate Functions Practice

-- 1. Count total students


-- 2. Calculate average GPA


-- 3. Find highest and lowest GPA


-- 4. Count students per major


-- 5. Average GPA per major


-- 6. Majors with more than 5 students

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'mysql-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'CRUD & Aggregates Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What happens if you UPDATE without WHERE?',
                            options: [
                                'Error occurs',
                                'Nothing happens',
                                'Updates ALL rows',
                                'Updates first row only'
                            ],
                            correctIndex: 2,
                            explanation: 'Without WHERE, UPDATE affects ALL rows in the table. Always use WHERE!'
                        },
                        {
                            id: 'q2',
                            question: 'What is the difference between WHERE and HAVING?',
                            options: [
                                'They are the same',
                                'WHERE filters rows, HAVING filters groups',
                                'HAVING is faster',
                                'WHERE is deprecated'
                            ],
                            correctIndex: 1,
                            explanation: 'WHERE filters individual rows before grouping. HAVING filters grouped results.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'mysql-unit-3',
            title: 'JOINs and Relationships',
            description: 'Connect tables with JOIN operations',
            items: [
                {
                    id: 'mysql-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Relationships',
                    duration: '8 min read',
                    content: `
# Understanding Relationships

Relational databases connect tables through **relationships**.

## Types of Relationships

### 1. One-to-Many (1:N)
Most common relationship. One record relates to many records.

**Example**: One student enrolls in many courses

\`\`\`
students                enrollments
┌────┬───────┐         ┌────┬────────────┬───────────┐
│ id │ name  │         │ id │ student_id │ course_id │
├────┼───────┤         ├────┼────────────┼───────────┤
│ 1  │ Alice │────┬───>│ 1  │ 1          │ 101       │
│ 2  │ Bob   │    └───>│ 2  │ 1          │ 102       │
└────┴───────┘         │ 3  │ 2          │ 101       │
                       └────┴────────────┴───────────┘
\`\`\`

### 2. Many-to-Many (M:N)
Requires a **junction table** (bridge table).

**Example**: Students ↔ Courses (many students take many courses)

\`\`\`
students          enrollments (junction)      courses
┌────┬───────┐   ┌────┬────────────┬───────────┐   ┌────┬──────┐
│ id │ name  │   │ id │ student_id │ course_id │   │ id │ name │
├────┼───────┤   ├────┼────────────┼───────────┤   ├────┼──────┤
│ 1  │ Alice │<->│ 1  │ 1          │ 101       │<->│101 │ HTML │
│ 2  │ Bob   │<->│ 2  │ 1          │ 102       │<->│102 │ CSS  │
└────┴───────┘   │ 3  │ 2          │ 101       │   └────┴──────┘
                 └────┴────────────┴───────────┘
\`\`\`

### 3. One-to-One (1:1)
Rare. One record relates to exactly one record.

**Example**: Student ↔ Student Profile

\`\`\`
students              profiles
┌────┬───────┐       ┌────┬────────────┬─────────┐
│ id │ name  │       │ id │ student_id │ bio     │
├────┼───────┤       ├────┼────────────┼─────────┤
│ 1  │ Alice │<----->│ 1  │ 1          │ "..."   │
│ 2  │ Bob   │<----->│ 2  │ 2          │ "..."   │
└────┴───────┘       └────┴────────────┴─────────┘
\`\`\`

## Foreign Keys

**Foreign Key** = Column that references another table's Primary Key

\`\`\`sql
CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
\`\`\`

### Benefits of Foreign Keys

| Benefit | Description |
|---------|-------------|
| Data Integrity | Prevents invalid references |
| Cascading | Auto-delete related records |
| Documentation | Shows relationships clearly |
| Performance | Enables query optimization |

> 💡 **Pro Tip**: Always use Foreign Keys to maintain data integrity!
                    `
                },
                {
                    id: 'mysql-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'INNER JOIN and LEFT JOIN',
                    duration: '35 min',
                    content: `
# INNER JOIN and LEFT JOIN

## INNER JOIN

Returns only matching records from both tables.

\`\`\`sql
-- Basic INNER JOIN
SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- With aliases (shorter)
SELECT s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;

-- With WHERE condition
SELECT s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id
WHERE s.major = 'SE';
\`\`\`

### Visual Representation

\`\`\`
Table A          Table B
┌─────┐          ┌─────┐
│  A  │          │  B  │
│ ┌───┼──────────┼───┐ │
│ │ A∩B (INNER) │   │ │
│ └───┼──────────┼───┘ │
└─────┘          └─────┘
\`\`\`

## LEFT JOIN (LEFT OUTER JOIN)

Returns ALL records from left table + matching from right.

\`\`\`sql
-- Get all students, even those not enrolled
SELECT s.name, c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

-- Find students with NO enrollments
SELECT s.name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.id IS NULL;
\`\`\`

### Visual Representation

\`\`\`
Table A          Table B
┌─────┐          ┌─────┐
│  A  │          │  B  │
│ ┌───┼──────────┼───┐ │
│ │ A + A∩B     │   │ │
│ └───┼──────────┼───┘ │
└─────┘          └─────┘
\`\`\`

## RIGHT JOIN

Returns ALL records from right table + matching from left.

\`\`\`sql
-- Get all courses, even those with no students
SELECT c.course_name, s.name
FROM students s
RIGHT JOIN enrollments e ON s.id = e.student_id
RIGHT JOIN courses c ON e.course_id = c.id;
\`\`\`

## JOIN Comparison

| JOIN Type | Returns |
|-----------|---------|
| INNER JOIN | Only matching records |
| LEFT JOIN | All from left + matches |
| RIGHT JOIN | All from right + matches |
| FULL JOIN | All from both (MySQL doesn't support) |

## Practical Examples

\`\`\`sql
-- Students with their course count
SELECT s.name, COUNT(e.id) as course_count
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id, s.name;

-- Courses with enrollment count
SELECT c.course_name, COUNT(e.id) as student_count
FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.course_name;

-- Students taking more than 3 courses
SELECT s.name, COUNT(e.id) as course_count
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id, s.name
HAVING COUNT(e.id) > 3;
\`\`\`

---

## Your Mission
Practice JOIN operations to connect tables.
                    `,
                    tasks: [
                        { id: 1, description: 'In joins.sql, write: SELECT * FROM students INNER JOIN enrollments ON students.id = enrollments.student_id;', completed: false, regex: /INNER\s+JOIN/i },
                        { id: 2, description: 'In joins.sql, write: SELECT * FROM students LEFT JOIN enrollments ON students.id = enrollments.student_id;', completed: false, regex: /LEFT\s+JOIN/i },
                        { id: 3, description: 'In joins.sql, use aliases: SELECT s.name FROM students s INNER JOIN enrollments e ON s.id = e.student_id;', completed: false, regex: /FROM\s+\w+\s+\w+\s+(INNER|LEFT|RIGHT)\s+JOIN/i },
                        { id: 4, description: 'In joins.sql, combine: SELECT s.name, COUNT(e.id) FROM students s LEFT JOIN enrollments e ON s.id = e.student_id GROUP BY s.id;', completed: false, regex: /JOIN[\s\S]+GROUP\s+BY/i }
                    ],
                    files: [
                        { name: 'joins.sql', language: 'sql', content: `-- JOIN Practice

-- 1. INNER JOIN: Students with their courses


-- 2. LEFT JOIN: All students, even without enrollments


-- 3. Find students NOT enrolled in any course


-- 4. Count courses per student


-- 5. List courses with student count


-- 6. Students taking more than 2 courses

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'mysql-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'JOINs Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does INNER JOIN return?',
                            options: [
                                'All records from both tables',
                                'Only matching records from both tables',
                                'All records from left table',
                                'All records from right table'
                            ],
                            correctIndex: 1,
                            explanation: 'INNER JOIN returns only records that have matches in both tables.'
                        },
                        {
                            id: 'q2',
                            question: 'When should you use LEFT JOIN?',
                            options: [
                                'When you want only matching records',
                                'When you want all records from left table',
                                'When you want all records from right table',
                                'When you want to delete records'
                            ],
                            correctIndex: 1,
                            explanation: 'LEFT JOIN returns all records from the left table, even if there are no matches in the right table.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'mysql-unit-4',
            title: 'Database Design & Normalization',
            description: 'Design efficient database schemas',
            items: [
                {
                    id: 'mysql-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Database Design Principles',
                    duration: '10 min read',
                    content: `
# Database Design Principles

Good database design is crucial for performance, maintainability, and data integrity.

## Design Process

### 1. Requirements Analysis
Understand what data you need to store and how it will be used.

**Questions to ask:**
- What entities (things) do we need to store?
- What attributes (properties) does each entity have?
- How are entities related?
- What queries will be common?

### 2. Entity-Relationship (ER) Diagram

Visual representation of your database structure.

\`\`\`
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│  Students   │         │ Enrollments  │         │   Courses   │
├─────────────┤         ├──────────────┤         ├─────────────┤
│ id (PK)     │────┐    │ id (PK)      │    ┌────│ id (PK)     │
│ name        │    └───>│ student_id   │<───┘    │ course_code │
│ email       │         │ course_id    │         │ course_name │
│ major       │         │ semester     │         │ credits     │
│ gpa         │         │ grade        │         │ instructor  │
└─────────────┘         └──────────────┘         └─────────────┘
\`\`\`

## Data Types

Choose appropriate data types for efficiency.

| Data Type | Use For | Example |
|-----------|---------|---------|
| INT | Whole numbers | age, count |
| BIGINT | Large numbers | population |
| DECIMAL(10,2) | Money, precise decimals | price, gpa |
| VARCHAR(n) | Variable text | name, email |
| TEXT | Long text | description, bio |
| DATE | Dates | birth_date |
| DATETIME | Date + time | created_at |
| BOOLEAN | True/false | is_active |
| ENUM | Fixed choices | status ('active', 'inactive') |

## Constraints

Enforce data integrity rules.

\`\`\`sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 17 AND age <= 100),
    gpa DECIMAL(3,2) CHECK (gpa >= 0 AND gpa <= 4.0),
    major VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Common Constraints

| Constraint | Purpose |
|------------|---------|
| PRIMARY KEY | Unique identifier |
| FOREIGN KEY | Reference to another table |
| UNIQUE | No duplicate values |
| NOT NULL | Must have a value |
| CHECK | Custom validation rule |
| DEFAULT | Default value if not provided |

> 💡 **Pro Tip**: Use constraints to prevent bad data from entering your database!
                    `
                },
                {
                    id: 'mysql-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Normalization',
                    duration: '30 min',
                    content: `
# Normalization

**Normalization** = Process of organizing data to reduce redundancy and improve integrity.

## Why Normalize?

### ❌ Without Normalization (Bad)

\`\`\`
students_courses table
┌────┬───────┬───────┬──────────────┬──────────┬────────┐
│ id │ name  │ email │ courses      │ grades   │ major  │
├────┼───────┼───────┼──────────────┼──────────┼────────┤
│ 1  │ Alice │ a@... │ HTML,CSS,JS  │ A,A,B    │ SE     │
│ 2  │ Bob   │ b@... │ HTML,Python  │ B,A      │ IT     │
└────┴───────┴───────┴──────────────┴──────────┴────────┘
\`\`\`

**Problems:**
- Hard to query specific courses
- Difficult to update course names
- Wasted space (repeated data)
- Data inconsistency risks

### ✅ With Normalization (Good)

\`\`\`
students                courses              enrollments
┌────┬───────┬───────┐ ┌────┬──────────┐   ┌────┬────────────┬───────────┬───────┐
│ id │ name  │ major │ │ id │ name     │   │ id │ student_id │ course_id │ grade │
├────┼───────┼───────┤ ├────┼──────────┤   ├────┼────────────┼───────────┼───────┤
│ 1  │ Alice │ SE    │ │ 1  │ HTML     │   │ 1  │ 1          │ 1         │ A     │
│ 2  │ Bob   │ IT    │ │ 2  │ CSS      │   │ 2  │ 1          │ 2         │ A     │
└────┴───────┴───────┘ │ 3  │ JS       │   │ 3  │ 1          │ 3         │ B     │
                       │ 4  │ Python   │   │ 4  │ 2          │ 1         │ B     │
                       └────┴──────────┘   │ 5  │ 2          │ 4         │ A     │
                                           └────┴────────────┴───────────┴───────┘
\`\`\`

## Normal Forms

### First Normal Form (1NF)
- Each column contains atomic (single) values
- No repeating groups
- Each row is unique

\`\`\`sql
-- ❌ Violates 1NF (multiple values in one column)
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    courses VARCHAR(255)  -- "HTML,CSS,JS"
);

-- ✅ Follows 1NF
CREATE TABLE enrollments (
    id INT,
    student_id INT,
    course_id INT
);
\`\`\`

### Second Normal Form (2NF)
- Must be in 1NF
- All non-key columns depend on the ENTIRE primary key

\`\`\`sql
-- ❌ Violates 2NF (instructor depends only on course_id, not both)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    instructor VARCHAR(100),  -- Depends only on course_id
    grade CHAR(1),
    PRIMARY KEY (student_id, course_id)
);

-- ✅ Follows 2NF (split into separate tables)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(1),
    PRIMARY KEY (student_id, course_id)
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    instructor VARCHAR(100)
);
\`\`\`

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies (non-key columns depend only on primary key)

\`\`\`sql
-- ❌ Violates 3NF (dept_name depends on dept_id, not student_id)
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    dept_name VARCHAR(100)  -- Depends on dept_id, not id
);

-- ✅ Follows 3NF (split into separate tables)
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
\`\`\`

## Normalization Summary

| Normal Form | Rule |
|-------------|------|
| 1NF | Atomic values, no repeating groups |
| 2NF | 1NF + all columns depend on entire PK |
| 3NF | 2NF + no transitive dependencies |

## When to Denormalize?

Sometimes breaking normalization rules improves performance:

- **Read-heavy applications**: Joining tables is slow
- **Reporting/Analytics**: Pre-calculated aggregates
- **Caching**: Store computed values

\`\`\`sql
-- Denormalized for performance
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    total_courses INT,  -- Denormalized (could be calculated)
    avg_grade DECIMAL(3,2)  -- Denormalized
);
\`\`\`

> ⚠️ **Trade-off**: Denormalization improves read speed but complicates updates.

---

## Your Mission
Practice creating normalized database schemas.
                    `,
                    tasks: [
                        { id: 1, description: 'Create table with PRIMARY KEY', completed: false, regex: /CREATE\s+TABLE[\s\S]+PRIMARY\s+KEY/i },
                        { id: 2, description: 'Add FOREIGN KEY constraint', completed: false, regex: /FOREIGN\s+KEY/i },
                        { id: 3, description: 'Use CHECK constraint', completed: false, regex: /CHECK\s*\(/i },
                        { id: 4, description: 'Add UNIQUE constraint', completed: false, regex: /UNIQUE/i }
                    ],
                    files: [
                        { name: 'schema.sql', language: 'sql', content: `-- Database Design Practice

-- 1. Create students table with constraints


-- 2. Create departments table


-- 3. Create courses table with FK to departments


-- 4. Create enrollments junction table


-- 5. Add CHECK constraint for GPA (0-4.0)


-- 6. Add UNIQUE constraint for email

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'mysql-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Database Design Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the main goal of normalization?',
                            options: [
                                'Make queries faster',
                                'Reduce data redundancy',
                                'Increase storage space',
                                'Make database bigger'
                            ],
                            correctIndex: 1,
                            explanation: 'Normalization reduces data redundancy and improves data integrity.'
                        },
                        {
                            id: 'q2',
                            question: 'Which constraint ensures a column has no duplicate values?',
                            options: [
                                'PRIMARY KEY',
                                'FOREIGN KEY',
                                'UNIQUE',
                                'NOT NULL'
                            ],
                            correctIndex: 2,
                            explanation: 'UNIQUE constraint ensures all values in a column are different.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'mysql-unit-5',
            title: 'Final Project',
            description: 'Build a complete database system',
            items: [
                {
                    id: 'mysql-5-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'University Management System',
                    duration: '180 min',
                    difficulty: 'Advanced',
                    description: 'Design and implement a comprehensive database for ZeroCode.',
                    content: `
# 🎯 Final Project: University Management System

## Overview
Build a complete relational database for ZeroCode's management system.

## Database Requirements

### Entities (Tables)

#### 1. students
- id (PK, AUTO_INCREMENT)
- student_id (UNIQUE, NOT NULL)
- name (NOT NULL)
- email (UNIQUE, NOT NULL)
- major_id (FK)
- gpa (CHECK: 0-4.0)
- enrollment_year
- created_at (DEFAULT CURRENT_TIMESTAMP)

#### 2. majors (departments)
- id (PK, AUTO_INCREMENT)
- major_code (UNIQUE)
- major_name (NOT NULL)
- faculty
- head_of_major

#### 3. courses
- id (PK, AUTO_INCREMENT)
- course_code (UNIQUE)
- course_name (NOT NULL)
- credits (CHECK: 1-4)
- major_id (FK)
- instructor_id (FK)

#### 4. instructors
- id (PK, AUTO_INCREMENT)
- name (NOT NULL)
- email (UNIQUE)
- department
- hire_date

#### 5. enrollments (junction table)
- id (PK, AUTO_INCREMENT)
- student_id (FK)
- course_id (FK)
- semester (e.g., "2024-1")
- grade (ENUM: 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'D', 'E')
- enrollment_date

## Requirements Checklist

### Database Design (30%)
- [ ] Create all 5 tables with proper data types
- [ ] Define PRIMARY KEY for each table
- [ ] Add FOREIGN KEY relationships
- [ ] Add UNIQUE constraints where needed
- [ ] Add CHECK constraints for validation
- [ ] Add DEFAULT values where appropriate

### Sample Data (20%)
- [ ] Insert at least 5 majors
- [ ] Insert at least 10 students
- [ ] Insert at least 5 instructors
- [ ] Insert at least 15 courses
- [ ] Insert at least 30 enrollments

### Complex Queries (30%)
- [ ] List all students with their major names (JOIN)
- [ ] Calculate average GPA per major (GROUP BY)
- [ ] Find top 5 students by GPA (ORDER BY + LIMIT)
- [ ] Count enrollments per course (COUNT + GROUP BY)
- [ ] List courses taught by each instructor (JOIN)
- [ ] Find students taking more than 5 courses (HAVING)
- [ ] Calculate average grade per course
- [ ] List students with no enrollments (LEFT JOIN + NULL)

### Advanced Features (20%)
- [ ] Create a view for student transcripts
- [ ] Add indexes for frequently queried columns
- [ ] Write a query to find course prerequisites
- [ ] Calculate semester GPA for each student

## Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| Table Structure | 15% | Proper data types, constraints |
| Relationships | 15% | Correct FK relationships |
| Sample Data | 20% | Realistic, sufficient data |
| Basic Queries | 15% | SELECT, WHERE, ORDER BY |
| JOIN Queries | 15% | Multiple table joins |
| Aggregations | 10% | GROUP BY, HAVING, COUNT, AVG |
| Advanced Features | 10% | Views, indexes, complex queries |

## Bonus Challenges (+10% each)

1. **Stored Procedure**: Create a procedure to enroll a student in a course
2. **Trigger**: Auto-update student GPA when grades change
3. **Transaction**: Implement course enrollment with rollback
4. **Full-Text Search**: Search courses by name/description

## Example Queries

\`\`\`sql
-- Student transcript view
CREATE VIEW student_transcripts AS
SELECT 
    s.student_id,
    s.name,
    c.course_code,
    c.course_name,
    c.credits,
    e.grade,
    e.semester
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id;

-- Calculate semester GPA
SELECT 
    student_id,
    semester,
    AVG(CASE grade
        WHEN 'A' THEN 4.0
        WHEN 'A-' THEN 3.7
        WHEN 'B+' THEN 3.3
        WHEN 'B' THEN 3.0
        WHEN 'B-' THEN 2.7
        WHEN 'C+' THEN 2.3
        WHEN 'C' THEN 2.0
        WHEN 'D' THEN 1.0
        ELSE 0
    END) as semester_gpa
FROM enrollments
GROUP BY student_id, semester;
\`\`\`

## Submission

Submit your complete SQL file with:
1. CREATE TABLE statements
2. INSERT statements for sample data
3. All required queries with comments
4. Bonus features (if attempted)

Good luck! 🚀
                    `,
                    tasks: [
                        { id: 1, description: 'Create all 5 tables', completed: false, regex: /CREATE\s+TABLE[\s\S]+CREATE\s+TABLE[\s\S]+CREATE\s+TABLE[\s\S]+CREATE\s+TABLE[\s\S]+CREATE\s+TABLE/i },
                        { id: 2, description: 'Add FOREIGN KEY relationships', completed: false, regex: /FOREIGN\s+KEY/i },
                        { id: 3, description: 'Insert sample data for all tables', completed: false, regex: /INSERT\s+INTO[\s\S]+VALUES/i },
                        { id: 4, description: 'Write JOIN query', completed: false, regex: /JOIN/i },
                        { id: 5, description: 'Use GROUP BY with aggregate', completed: false, regex: /GROUP\s+BY[\s\S]+(COUNT|AVG|SUM|MAX|MIN)/i },
                        { id: 6, description: 'Create a VIEW', completed: false, regex: /CREATE\s+VIEW/i }
                    ],
                    starterFiles: [
                        { name: 'schema.sql', language: 'sql', content: `-- University Management System Database

-- Create database
CREATE DATABASE IF NOT EXISTS zerocode_system;
USE zerocode_system;

-- 1. Create majors table


-- 2. Create instructors table


-- 3. Create students table


-- 4. Create courses table


-- 5. Create enrollments table

` },
                        { name: 'data.sql', language: 'sql', content: `-- Sample Data

-- Insert majors


-- Insert instructors


-- Insert students


-- Insert courses


-- Insert enrollments

` },
                        { name: 'queries.sql', language: 'sql', content: `-- Required Queries

-- 1. List all students with their major names


-- 2. Calculate average GPA per major


-- 3. Find top 5 students by GPA


-- 4. Count enrollments per course


-- 5. List courses taught by each instructor


-- 6. Find students taking more than 5 courses


-- 7. Calculate average grade per course


-- 8. List students with no enrollments


-- 9. Create view for student transcripts


-- 10. Calculate semester GPA for each student

` }
                    ]
                },
                {
                    id: 'mysql-5-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'MySQL Course Complete!',
                    duration: '5 min read',
                    content: `
# 🎉 Congratulations! MySQL Course Complete!

## What You've Mastered

### Unit 1: Introduction to Databases
✅ Database concepts and terminology
✅ SQL basics and syntax
✅ SELECT queries with WHERE, ORDER BY, LIMIT
✅ Pattern matching with LIKE

### Unit 2: CRUD Operations
✅ INSERT - Adding data
✅ UPDATE - Modifying data
✅ DELETE - Removing data
✅ Aggregate functions (COUNT, AVG, SUM, MAX, MIN)
✅ GROUP BY and HAVING clauses

### Unit 3: JOINs and Relationships
✅ Understanding relationships (1:1, 1:N, M:N)
✅ INNER JOIN for matching records
✅ LEFT JOIN for all records from left table
✅ RIGHT JOIN for all records from right table
✅ Combining JOINs with aggregates

### Unit 4: Database Design
✅ Database design principles
✅ Entity-Relationship diagrams
✅ Data types and constraints
✅ Normalization (1NF, 2NF, 3NF)
✅ When to denormalize

### Unit 5: Final Project
✅ Complete database system design
✅ Complex multi-table queries
✅ Views and indexes
✅ Real-world application

## Essential SQL Commands Reference

\`\`\`sql
-- CREATE
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    gpa DECIMAL(3,2) CHECK (gpa >= 0 AND gpa <= 4.0)
);

-- INSERT
INSERT INTO students (name, email, gpa)
VALUES ('Alice', 'alice@zerocode.ac.id', 3.8);

-- SELECT
SELECT * FROM students WHERE gpa > 3.5 ORDER BY gpa DESC LIMIT 10;

-- UPDATE
UPDATE students SET gpa = 4.0 WHERE id = 1;

-- DELETE
DELETE FROM students WHERE id = 1;

-- JOIN
SELECT s.name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;

-- AGGREGATE
SELECT major, AVG(gpa) as avg_gpa
FROM students
GROUP BY major
HAVING AVG(gpa) > 3.5;
\`\`\`

## Best Practices Checklist

- ✅ Always use WHERE in UPDATE and DELETE
- ✅ Test with SELECT before UPDATE/DELETE
- ✅ Use PRIMARY KEY for every table
- ✅ Use FOREIGN KEY to maintain relationships
- ✅ Add UNIQUE constraints for unique columns
- ✅ Use CHECK constraints for validation
- ✅ Choose appropriate data types
- ✅ Normalize to 3NF (usually)
- ✅ Use indexes for frequently queried columns
- ✅ Use transactions for critical operations
- ✅ Backup your database regularly

## Performance Tips

| Tip | Why |
|-----|-----|
| Use indexes | Speed up queries |
| Avoid SELECT * | Only get needed columns |
| Use LIMIT | Reduce result set size |
| Optimize JOINs | Use proper indexes on FK |
| Use EXPLAIN | Analyze query performance |
| Cache results | Reduce database load |

## What's Next?

### Combine with Backend
- **PHP + MySQL**: Build dynamic websites
- **Node.js + MySQL**: JavaScript full-stack
- **Python + MySQL**: Data-driven applications

### Advanced Topics
- **Stored Procedures**: Reusable SQL code
- **Triggers**: Automatic actions on events
- **Views**: Virtual tables
- **Indexes**: Query optimization
- **Transactions**: ACID properties
- **Replication**: High availability
- **Sharding**: Horizontal scaling

### Real-World Projects
- E-commerce platform
- Social media application
- Content management system
- Learning management system (like ZeroCode!)
- Inventory management
- Customer relationship management (CRM)

## Resources

- [MySQL Official Documentation](https://dev.mysql.com/doc/)
- [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)
- [Database Design Tutorial](https://www.lucidchart.com/pages/database-diagram/database-design)
- [SQL Practice - LeetCode](https://leetcode.com/problemset/database/)

## Final Words

> "Data is a precious thing and will last longer than the systems themselves." - Tim Berners-Lee

You now have the skills to design, build, and query relational databases. MySQL powers millions of applications worldwide, from small websites to massive platforms like Facebook and Twitter.

Keep practicing, build real projects, and remember: **good database design is the foundation of great applications!**

**Congratulations on completing the MySQL course!** 🎓

Ready to build something amazing? Let's go! 🚀
                    `
                }
            ]
        }
    ]
};

export default mysqlCourse;
