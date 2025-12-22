
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc2 = {
    id: 'postgresql-1-doc-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Data Types & Table Creation 📋',
    duration: '25 min read',
    content: `
# Deep Dive: Data Types & Table Creation 📋

> "Choose the right data type - it affects storage, performance, and data integrity."

## 1. PostgreSQL Data Types Overview

PostgreSQL offers rich data types far beyond basic integers and strings.

### 1.1 Type Categories

| Category | Types | Use Case |
|----------|-------|----------|
| **Numeric** | INTEGER, BIGINT, DECIMAL, SERIAL | Numbers, IDs, prices |
| **Text** | CHAR, VARCHAR, TEXT | Strings, names, descriptions |
| **Boolean** | BOOLEAN | True/false flags |
| **Date/Time** | DATE, TIME, TIMESTAMP, INTERVAL | Dates, timestamps |
| **Binary** | BYTEA | Files, images (not recommended) |
| **JSON** | JSON, JSONB | Flexible data |
| **Arrays** | ANY[] | Lists of values |
| **UUID** | UUID | Unique identifiers |
| **Special** | INET, CIDR, MACADDR | IP addresses, networks |

---

## 2. Numeric Types

### 2.1 Integer Types

\`\`\`sql
-- SMALLINT: -32,768 to 32,767 (2 bytes)
age SMALLINT

-- INTEGER (INT): -2 billion to 2 billion (4 bytes)
quantity INTEGER

-- BIGINT: -9 quintillion to 9 quintillion (8 bytes)
views BIGINT
\`\`\`

### 2.2 SERIAL (Auto-Increment)

\`\`\`sql
-- SERIAL: Auto-incrementing integer (1, 2, 3...)
-- Perfect for primary keys
id SERIAL PRIMARY KEY

-- Equivalent to:
CREATE SEQUENCE users_id_seq;
id INTEGER DEFAULT nextval('users_id_seq') PRIMARY KEY
\`\`\`

Types:
- \`SERIAL\` → INTEGER (1 to 2 billion)
- \`BIGSERIAL\` → BIGINT (huge range)
- \`SMALLSERIAL\` → SMALLINT (1 to 32K)

### 2.3 Decimal Types

\`\`\`sql
-- DECIMAL/NUMERIC: Exact decimal numbers
-- DECIMAL(precision, scale)
price DECIMAL(10, 2)  -- 12345678.99 (10 digits, 2 after decimal)

-- REAL: 6 decimal digits precision (4 bytes)
temperature REAL

-- DOUBLE PRECISION: 15 decimal digits (8 bytes)
scientific_value DOUBLE PRECISION
\`\`\`

**Use DECIMAL for money** (exact), REAL/DOUBLE for scientific (approximate).

---

## 3. String Types

### 3.1 Character Types

\`\`\`sql
-- CHAR(n): Fixed-length, padded with spaces
country_code CHAR(2)  -- 'US', 'UK' (always 2 chars)

-- VARCHAR(n): Variable-length with limit
name VARCHAR(100)  -- Up to 100 chars

-- TEXT: Unlimited length
description TEXT  -- No length limit
\`\`\`

**Recommendation**: Use \`TEXT\` for most cases or \`VARCHAR(n)\` when you need validation.

### 3.2 Text Best Practices

\`\`\`sql
-- ✅ GOOD: TEXT is efficient in PostgreSQL
bio TEXT

-- ✅ GOOD: VARCHAR when you need limit
username VARCHAR(50)

-- ❌ AVOID: CHAR for variable data
-- name CHAR(100)  -- Wastes space if name is 'Ali' (97 spaces added)
\`\`\`

---

## 4. Boolean Type

\`\`\`sql
-- BOOLEAN: true, false, or NULL
is_active BOOLEAN DEFAULT true
email_verified BOOLEAN DEFAULT false

-- Can use true/false, 't'/'f', 'yes'/'no', '1'/'0'
INSERT INTO users (is_active) VALUES (true);
INSERT INTO users (is_active) VALUES ('yes');
INSERT INTO users (is_active) VALUES (1);
\`\`\`

---

## 5. Date and Time Types

### 5.1 Date/Time Types

\`\`\`sql
-- DATE: Just the date (YYYY-MM-DD)
birth_date DATE  -- '1995-05-20'

-- TIME: Just the time (HH:MM:SS)
meeting_time TIME  -- '14:30:00'

-- TIMESTAMP: Date + time
created_at TIMESTAMP  -- '2024-01-15 14:30:00'

-- TIMESTAMPTZ: Timestamp with timezone (RECOMMENDED)
created_at TIMESTAMPTZ DEFAULT NOW()  -- '2024-01-15 14:30:00+00'
\`\`\`

### 5.2 Current Date/Time Functions

\`\`\`sql
-- Current date
SELECT CURRENT_DATE;  -- 2024-01-15

-- Current time
SELECT CURRENT_TIME;  -- 14:30:00

-- Current timestamp
SELECT NOW();  -- 2024-01-15 14:30:00

-- Current timestamp (alternative)
SELECT CURRENT_TIMESTAMP;
\`\`\`

### 5.3 INTERVAL Type

\`\`\`sql
-- Time duration
session_duration INTERVAL  -- '2 hours' or '30 minutes'

-- Example: Add 7 days
SELECT NOW() + INTERVAL '7 days';

-- Example: Subtract 1 hour
SELECT NOW() - INTERVAL '1 hour';
\`\`\`

---

## 6. Special Types

### 6.1 UUID (Universally Unique Identifier)

\`\`\`sql
-- Enable UUID extension first
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- UUID column
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY

-- Example UUID: 550e8400-e29b-41d4-a716-446655440000
\`\`\`

**When to use UUID**:
- Distributed systems (no ID conflicts)
- Public IDs (hide total count)
- Merging databases

### 6.2 JSON and JSONB

\`\`\`sql
-- JSON: Text-based JSON
meta JSON

-- JSONB: Binary JSON (FASTER, INDEXABLE)
settings JSONB

-- JSONB is USUALLY BETTER (faster queries, smaller storage)
\`\`\`

### 6.3 Arrays

\`\`\`sql
-- Array of integers
favorite_numbers INTEGER[]

-- Array of text
tags TEXT[]

-- Example insert
INSERT INTO posts (tags) VALUES (ARRAY['postgres', 'sql', 'database']);
INSERT INTO posts (tags) VALUES ('{"postgres", "sql", "database"}');
\`\`\`

---

## 7. CREATE TABLE Syntax

### 7.1 Basic Table

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    is_active BOOLEAN,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

### 7.2 Complete Example with Constraints

\`\`\`sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    stock INTEGER DEFAULT 0 CHECK (stock >= 0),
    category VARCHAR(50) NOT NULL,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE (name)  -- Table-level constraint
);
\`\`\`

---

## 8. Constraints

### 8.1 PRIMARY KEY

\`\`\`sql
-- Single column
id SERIAL PRIMARY KEY

-- Composite (multiple columns)
CREATE TABLE order_items (
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    PRIMARY KEY (order_id, product_id)
);
\`\`\`

### 8.2 NOT NULL

\`\`\`sql
-- Column cannot be NULL
email VARCHAR(255) NOT NULL
name VARCHAR(100) NOT NULL
\`\`\`

### 8.3 UNIQUE

\`\`\`sql
-- Value must be unique across table
email VARCHAR(255) UNIQUE
username VARCHAR(50) UNIQUE NOT NULL
\`\`\`

### 8.4 DEFAULT

\`\`\`sql
-- Default value if not provided
is_active BOOLEAN DEFAULT true
created_at TIMESTAMPTZ DEFAULT NOW()
status VARCHAR(20) DEFAULT 'pending'
\`\`\`

### 8.5 CHECK

\`\`\`sql
-- Custom validation
age INTEGER CHECK (age >= 18)
price DECIMAL(10, 2) CHECK (price > 0)
email VARCHAR(255) CHECK (email LIKE '%@%')

-- Named constraint
rating INTEGER CONSTRAINT valid_rating CHECK (rating BETWEEN 1 AND 5)
\`\`\`

---

## 9. Table Structure Diagram

\`\`\`mermaid
erDiagram
    USERS {
        SERIAL id PK
        VARCHAR name
        VARCHAR email UK
        BOOLEAN is_active
        TIMESTAMP created_at
    }
    
    PRODUCTS {
        SERIAL id PK
        VARCHAR name UK
        TEXT description
        DECIMAL price
        INTEGER stock
        TIMESTAMP created_at
    }
    
    ORDERS {
        SERIAL id PK
        INTEGER user_id FK
        DECIMAL total
        VARCHAR status
        TIMESTAMP created_at
    }
\`\`\`

---

## 10. ALTER TABLE (Modifying Tables)

### 10.1 Add Column

\`\`\`sql
ALTER TABLE users 
ADD COLUMN phone VARCHAR(20);

ALTER TABLE users
ADD COLUMN age INTEGER CHECK (age >= 0);
\`\`\`

### 10.2 Drop Column

\`\`\`sql
ALTER TABLE users 
DROP COLUMN phone;
\`\`\`

### 10.3 Rename Column

\`\`\`sql
ALTER TABLE users 
RENAME COLUMN name TO full_name;
\`\`\`

### 10.4 Add Constraint

\`\`\`sql
-- Add NOT NULL
ALTER TABLE users 
ALTER COLUMN email SET NOT NULL;

-- Add CHECK constraint
ALTER TABLE products 
ADD CONSTRAINT positive_price CHECK (price > 0);

-- Add UNIQUE
ALTER TABLE users 
ADD CONSTRAINT unique_email UNIQUE (email);
\`\`\`

---

## 11. DROP TABLE

\`\`\`sql
-- Delete table permanently
DROP TABLE old_table;

-- Only drop if exists (no error)
DROP TABLE IF EXISTS temp_table;

-- Drop with dependencies
DROP TABLE users CASCADE;
\`\`\`

---

## 12. Viewing Table Structure

\`\`\`sql
-- psql command: Describe table
\\d users

-- SQL query: Get column info
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'users';
\`\`\`

---

## 13. Best Practices

1. **Always use PRIMARY KEY**: Every table should have one
2. **Choose appropriate types**: Don't use TEXT for everything
3. **Use SERIAL for IDs**: Simplest auto-increment
4. **Add NOT NULL**: Be explicit about required fields
5. **Use TIMESTAMPTZ**: Not TIMESTAMP (timezone aware)
6. **Add CHECK constraints**: Validate data at database level
7. **Name constraints**: Makes errors clearer
8. **Use DECIMAL for money**: Not FLOAT
9. **Consider JSONB over JSON**: Faster and indexable
10. **Add defaults wisely**: created_at, is_active, status

---

## 14. Common Mistakes

### 14.1 Using Wrong Type for Money

\`\`\`sql
-- ❌ BAD: FLOAT loses precision
price FLOAT  -- 0.1 + 0.2 != 0.3

-- ✅ GOOD: DECIMAL is exact
price DECIMAL(10, 2)
\`\`\`

### 14.2 Not Using NOT NULL

\`\`\`sql
-- ❌ BAD: Allows NULL unexpectedly
email VARCHAR(255)

-- ✅ GOOD: Be explicit
email VARCHAR(255) NOT NULL
\`\`\`

### 14.3 Using CHAR for Variable Data

\`\`\`sql
-- ❌ BAD: Wastes space
name CHAR(100)  -- 'Ali' becomes 'Ali' + 97 spaces

-- ✅ GOOD: Use VARCHAR or TEXT
name VARCHAR(100)
name TEXT
\`\`\`

---

## 15. Summary

**Data Types**:
- Integers: SMALLINT, INTEGER, BIGINT, SERIAL
- Decimals: DECIMAL (exact), REAL/DOUBLE (approximate)
- Text: TEXT (recommended), VARCHAR(n) (with limit)
- Boolean: true/false
- Dates: DATE, TIMESTAMP, TIMESTAMPTZ
- Special: UUID, JSON, JSONB, Arrays

**CREATE TABLE** with constraints (PRIMARY KEY, NOT NULL, UNIQUE, CHECK, DEFAULT).

Next: **CRUD Operations** - inserting, selecting, updating, and deleting data!
    `
};

export const postgresqlDoc3 = {
    id: 'postgresql-1-doc-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: CRUD Operations 🔄',
    duration: '30 min read',
    content: `
# Deep Dive: CRUD Operations 🔄

> "CRUD: Create, Read, Update, Delete - the four fundamental database operations."

## 1. CRUD Overview

**CRUD** maps to SQL statements:
- **Create** → INSERT
- **Read** → SELECT
- **Update** → UPDATE
- **Delete** → DELETE

\`\`\`mermaid
flowchart LR
    Create["📝 CREATE<br/>(INSERT)"] --> DB[(🐘 Database)]
    Read["📖 READ<br/>(SELECT)"] --> DB
    Update["✏️ UPDATE<br/>(UPDATE)"] --> DB
    Delete["🗑️ DELETE<br/>(DELETE)"] --> DB
\`\`\`

---

## 2. INSERT (Create)

### 2.1 Basic INSERT

\`\`\`sql
-- Insert single row
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');

-- Insert with all columns
INSERT INTO users (id, name, email, is_active, created_at)
VALUES (1, 'Bob', 'bob@example.com', true, NOW());
\`\`\`

### 2.2 Insert Multiple Rows

\`\`\`sql
INSERT INTO users (name, email)
VALUES 
    ('Charlie', 'charlie@example.com'),
    ('Diana', 'diana@example.com'),
    ('Eve', 'eve@example.com');
\`\`\`

### 2.3 Insert with DEFAULT

\`\`\`sql
-- Use DEFAULT keyword
INSERT INTO users (name, email, is_active)
VALUES ('Frank', 'frank@example.com', DEFAULT);

-- Or omit column (uses DEFAULT)
INSERT INTO users (name, email)
VALUES ('Grace', 'grace@example.com');
-- is_active uses its DEFAULT value
\`\`\`

### 2.4 RETURNING Clause (PostgreSQL Power Feature!)

\`\`\`sql
-- Return inserted values
INSERT INTO users (name, email)
VALUES ('Henry', 'henry@example.com')
RETURNING id, created_at;
-- Result: id | created_at
--         8  | 2024-01-15 10:30:00

-- Return all columns
INSERT INTO users (name, email)
VALUES ('Iris', 'iris@example.com')
RETURNING *;
\`\`\`

---

## 3. SELECT (Read)

### 3.1 Select All Columns

\`\`\`sql
-- Select everything
SELECT * FROM users;
\`\`\`

### 3.2 Select Specific Columns

\`\`\`sql sql
-- Select only name and email
SELECT name, email FROM users;

-- With multiple columns
SELECT id, name, email, created_at FROM users;
\`\`\`

### 3.3 Column Aliases

\`\`\`sql
-- Rename columns in output
SELECT 
    name AS full_name,
    email AS email_address,
    created_at AS registration_date
FROM users;
\`\`\`

### 3.4 Computed Columns

\`\`\`sql
-- Perform calculations
SELECT 
    name,
    price,
    price * 1.1 AS price_with_tax,
    stock * price AS total_value
FROM products;

-- String concatenation
SELECT 
    first_name || ' ' || last_name AS full_name,
    'Hello, ' || name || '!' AS greeting
FROM users;
\`\`\`

---

## 4. UPDATE (Update)

### 4.1 Update Single Column

\`\`\`sql
-- Update one column
UPDATE users 
SET email = 'newemail@example.com'
WHERE id = 1;
\`\`\`

### 4.2 Update Multiple Columns

\`\`\`sql
-- Update several columns at once
UPDATE users 
SET 
    name = 'Alice Johnson',
    email = 'alice.j@example.com',
    updated_at = NOW()
WHERE id = 1;
\`\`\`

### 4.3 Update with Calculations

\`\`\`sql
-- Increase price by 10%
UPDATE products 
SET price = price * 1.10
WHERE category = 'electronics';

-- Decrement stock
UPDATE products 
SET stock = stock - 5
WHERE id = 10;
\`\`\`

### 4.4 UPDATE with RETURNING

\`\`\`sql
-- See updated values
UPDATE users 
SET email = 'updated@example.com'
WHERE id = 3
RETURNING id, name, email, updated_at;
\`\`\`

### 4.5 Update All Rows (Be Careful!)

\`\`\`sql
-- ⚠️ DANGER: Updates ALL rows if no WHERE
UPDATE users 
SET is_active = false;
-- All users become inactive!

-- Always use WHERE (unless you really want all)
UPDATE users 
SET is_active = false
WHERE last_login < NOW() - INTERVAL '1 year';
\`\`\`

---

## 5. DELETE (Delete)

### 5.1 Delete Single Row

\`\`\`sql
-- Delete by ID
DELETE FROM users 
WHERE id = 5;
\`\`\`

### 5.2 Delete with Condition

\`\`\`sql
-- Delete inactive users
DELETE FROM users 
WHERE is_active = false;

-- Delete old records
DELETE FROM logs 
WHERE created_at < NOW() - INTERVAL '30 days';
\`\`\`

### 5.3 DELETE with RETURNING

\`\`\`sql
-- See what was deleted
DELETE FROM users 
WHERE id = 10
RETURNING *;
\`\`\`

### 5.4 Delete All Rows (Dangerous!)

\`\`\`sql
-- ⚠️ DANGER: Deletes EVERYTHING
DELETE FROM temp_table;
-- All rows gone!

-- Better: Use TRUNCATE for all rows (faster)
TRUNCATE TABLE temp_table;
\`\`\`

---

## 6. TRUNCATE vs DELETE

### 6.1 Differences

| Feature | DELETE | TRUNCATE |
|---------|--------|----------|
| **Speed** | Slow (row by row) | Fast (drops data) |
| **WHERE clause** | ✅ Yes | ❌ No |
| **RETURNING** | ✅ Yes | ❌ No |
| **Triggers** | ✅ Fires | ❌ Doesn't fire |
| **Rollback** | ✅ Can rollback | ⚠️ Can't (unless in transaction) |
| **Reset SERIAL** | ❌ No | ✅ Yes (restarts from 1) |

### 6.2 When to Use Each

\`\`\`sql
-- Use DELETE: Selective removal
DELETE FROM logs WHERE created_at < '2023-01-01';

-- Use TRUNCATE: Empty entire table fast
TRUNCATE TABLE temp_cache;

-- TRUNCATE resets SERIAL
TRUNCATE TABLE users;  -- Next INSERT gets id = 1
\`\`\`

---

## 7. Transactions

### 7.1 Basic Transaction

\`\`\`sql
-- Start transaction
BEGIN;

-- Multiple operations
INSERT INTO accounts (user_id, balance) VALUES (1, 1000);
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- Everything succeeds or nothing happens
COMMIT;
\`\`\`

### 7.2 Rollback on Error

\`\`\`sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Oops, made a mistake
ROLLBACK;  -- Undoes both UPDATEs
\`\`\`

### 7.3 Savepoints

\`\`\`sql
BEGIN;

INSERT INTO users (name, email) VALUES ('Test', 'test@example.com');

SAVEPOINT sp1;

DELETE FROM users WHERE name = 'Test';

-- Changed my mind about DELETE
ROLLBACK TO sp1;  -- DELETE is undone, INSERT remains

COMMIT;  -- INSERT is saved
\`\`\`

---

## 8. Best Practices

### 8.1 Always Use WHERE in UPDATE/DELETE

\`\`\`sql
-- ❌ DANGEROUS: No WHERE
UPDATE users SET is_active = false;  -- ALL users!
DELETE FROM orders;  -- ALL orders!

-- ✅ SAFE: With WHERE
UPDATE users SET is_active = false WHERE id = 10;
DELETE FROM orders WHERE status = 'cancelled';
\`\`\`

### 8.2 Use RETURNING

\`\`\`sql
-- Know what you inserted/updated/deleted
INSERT INTO users (name) VALUES ('Test')
RETURNING id, created_at;

UPDATE users SET name = 'New Name' WHERE id = 5
RETURNING *;
\`\`\`

### 8.3 Use Transactions for Related Changes

\`\`\`sql
-- ✅ GOOD: Atomic operation
BEGIN;
INSERT INTO orders (user_id, total) VALUES (1, 100) RETURNING id INTO order_id;
INSERT INTO order_items (order_id, product_id) VALUES (order_id, 5);
COMMIT;
\`\`\`

### 8.4 Batch Inserts

\`\`\`sql
-- ❌ SLOW: One at a time
INSERT INTO users (name) VALUES ('User1');
INSERT INTO users (name) VALUES ('User2');
INSERT INTO users (name) VALUES ('User3');

-- ✅ FAST: Batch insert
INSERT INTO users (name) VALUES 
    ('User1'),    ('User2'),
    ('User3');
\`\`\`

---

## 9. Common Patterns

### 9.1 Insert or Update (UPSERT)

\`\`\`sql
-- ON CONFLICT: Insert or update if exists
INSERT INTO users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com')
ON CONFLICT (id) 
DO UPDATE SET 
    name = EXCLUDED.name,
    email = EXCLUDED.email;
\`\`\`

### 9.2 Conditional Update

\`\`\`sql
-- Only update if condition met
UPDATE products 
SET stock = stock - 10
WHERE id = 5 AND stock >= 10;
-- Returns 0 rows if stock < 10
\`\`\`

### 9.3 Bulk Delete

\`\`\`sql
-- Delete multiple IDs
DELETE FROM users 
WHERE id IN (1, 5, 10, 15);

-- Delete based on subquery
DELETE FROM orders 
WHERE user_id IN (
    SELECT id FROM users WHERE is_active = false
);
\`\`\`

---

## 10. Preventing Errors

### 10.1 Use Constraints

\`\`\`sql
-- Constraints prevent bad data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,  -- Can't insert duplicate/NULL
    age INTEGER CHECK (age >= 18),  -- Can't insert age < 18
    balance DECIMAL(10,2) CHECK (balance >= 0)  -- Can't go negative
);
\`\`\`

### 10.2 Test in Transaction

\`\`\`sql
-- Test changes safely
BEGIN;
UPDATE products SET price = price * 2;  -- Test
SELECT * FROM products LIMIT 5;  -- Check
ROLLBACK;  -- Undo test
\`\`\`

---

## 11. Summary

**CRUD Operations**:
- **INSERT**: Add data with VALUES, use RETURNING
- **SELECT**: Read with specific columns or *
- **UPDATE**: Modify with SET and WHERE
- **DELETE**: Remove with WHERE

**Key Points**:
- Always use WHERE (except when you really want all)
- Use transactions for related changes
- RETURNING shows inserted/updated/deleted data
- TRUNCATE faster than DELETE for all rows

Next: **Queries & Filtering** - WHERE, ORDER BY, LIMIT!
    `
};
