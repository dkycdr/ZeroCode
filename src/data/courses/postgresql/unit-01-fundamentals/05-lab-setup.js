
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab1 = {
    id: 'postgresql-1-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 5: PostgreSQL Setup & First Database',
    duration: '20 min',
    content: `
# Lab 5: PostgreSQL Setup & First Database

Get PostgreSQL running and create your first database! We'll use cloud options for simplicity.

## Mission Briefing

Install PostgreSQL (or use cloud) and practice basic database commands.

## Theory: Database Basics

A **database** is a container for tables. Each PostgreSQL server can host multiple databases.

## Your Mission

Set up PostgreSQL and create your first database with a table.
    `,
    tasks: [
        {
            id: 1,
            description: 'Connect to PostgreSQL (psql or cloud dashboard)',
            completed: false,
            regex: /psql|connect|supabase|neon|cloud/i,
            hint: "Use: psql -U postgres or sign up for free cloud database"
        },
        {
            id: 2,
            description: 'Create database named "myapp"',
            completed: false,
            regex: /CREATE\s+DATABASE\s+myapp/i,
            hint: "CREATE DATABASE myapp;"
        },
        {
            id: 3,
            description: 'Connect to myapp database',
            completed: false,
            regex: /\\c\s+myapp|USE\s+myapp/i,
            hint: "\\c myapp (in psql)"
        },
        {
            id: 4,
            description: 'Create table "users" with id and name columns',
            completed: false,
            regex: /CREATE\s+TABLE\s+users.*id.*name/is,
            hint: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));"
        },
        {
            id: 5,
            description: 'Use SERIAL for auto-increment id',
            completed: false,
            regex: /SERIAL/i,
            hint: "id SERIAL PRIMARY KEY"
        },
        {
            id: 6,
            description: 'List all tables in database',
            completed: false,
            regex: /\\dt|SHOW\s+TABLES|information_schema/i,
            hint: "\\dt (in psql)"
        },
        {
            id: 7,
            description: 'Describe users table structure',
            completed: false,
            regex: /\\d\s+users|DESCRIBE\s+users/i,
            hint: "\\d users (in psql)"
        }
    ],
    files: [
        {
            name: 'setup.sql',
            language: 'sql',
            content: `-- PostgreSQL Setup Lab

-- TODO: Create database
-- CREATE DATABASE myapp;

-- TODO: Connect to database (in psql: \\c myapp)

-- TODO: Create users table with id (SERIAL PRIMARY KEY) and name (VARCHAR)


-- TODO: Describe table structure (\\d users)
`
        }
    ]
};

export const postgresqlLab2 = {
    id: 'postgresql-1-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 6: Creating Tables & Inserting Data',
    duration: '25 min',
    content: `
# Lab 6: Creating Tables & Inserting Data

Master table creation with various data types and constraints. Practice inserting data.

## Mission Briefing

Create a products table with proper constraints and insert sample data.

## Theory: Constraints

Constraints enforce data integrity:
- PRIMARY KEY: Unique identifier
- NOT NULL: Required field
- CHECK: Custom validation

## Your Mission

Build a complete products table with all data types and constraints.
    `,
    tasks: [
        {
            id: 1,
            description: 'CREATE TABLE products with multiple columns',
            completed: false,
            regex: /CREATE\s+TABLE\s+products/i,
            hint: "CREATE TABLE products (...);"
        },
        {
            id: 2,
            description: 'Add id as SERIAL PRIMARY KEY',
            completed: false,
            regex: /id\s+SERIAL\s+PRIMARY\s+KEY/i,
            hint: "id SERIAL PRIMARY KEY"
        },
        {
            id: 3,
            description: 'Add name VARCHAR column with NOT NULL',
            completed: false,
            regex: /name\s+VARCHAR.*NOT\s+NULL/i,
            hint: "name VARCHAR(200) NOT NULL"
        },
        {
            id: 4,
            description: 'Add price DECIMAL column',
            completed: false,
            regex: /price\s+DECIMAL/i,
            hint: "price DECIMAL(10, 2)"
        },
        {
            id: 5,
            description: 'INSERT single product',
            completed: false,
            regex: /INSERT\s+INTO\s+products.*VALUES/i,
            hint: "INSERT INTO products (name, price) VALUES ('Phone', 999.99);"
        },
        {
            id: 6,
            description: 'INSERT multiple products in one statement',
            completed: false,
            regex: /VALUES.*,.*VALUES|VALUES\s*\([^)]+\)\s*,\s*\(/is,
            hint: "INSERT INTO products VALUES (...), (...), (...);"
        },
        {
            id: 7,
            description: 'Use RETURNING to get inserted data',
            completed: false,
            regex: /RETURNING/i,
            hint: "INSERT INTO products (...) VALUES (...) RETURNING *;"
        },
        {
            id: 8,
            description: 'SELECT all products',
            completed: false,
            regex: /SELECT.*FROM\s+products/i,
            hint: "SELECT * FROM products;"
        }
    ],
    files: [
        {
            name: 'tables.sql',
            language: 'sql',
            content: `-- Tables & Insert Lab

-- TODO: Create products table
-- Columns: id (SERIAL PRIMARY KEY), name (VARCHAR NOT NULL), price (DECIMAL), stock (INTEGER)


-- TODO: Insert single product with name and price


-- TODO: Insert multiple products in one INSERT statement


-- TODO: Insert with RETURNING to see inserted data


-- TODO: SELECT all products to verify
SELECT * FROM products;
`
        }
    ]
};
