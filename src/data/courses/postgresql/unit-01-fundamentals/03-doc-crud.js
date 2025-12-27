
import { CONTENT_TYPES } from '../../../curriculumStructure';

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

###  2.3 Insert with DEFAULT

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

\`\`\`sql
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
INSERT INTO orders (user_id, total) VALUES (1, 100);
INSERT INTO order_items (order_id, product_id) VALUES (1, 5);
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
    ('User1'),
    ('User2'),
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
