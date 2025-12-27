
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc5 = {
    id: 'postgresql-2-doc-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: SQL JOINs 🔗',
    duration: '35 min read',
    content: `
# Deep Dive: SQL JOINs 🔗

> "The power of relational databases lies in relating data - JOINs are how we connect the dots."

## 1. Why JOINs?

Relational databases store data in **separate tables** to avoid redundancy (normalization). JOINs let us **combine data** from multiple tables in a single query.

**Example**: Instead of storing complete user data in every order, we store:
- \`users\` table: user info
- \`orders\` table: order info + user_id reference

\`\`\`sql
-- ❌ BAD: Redundant data in every order
orders (id, total, user_name, user_email, user_phone)

-- ✅ GOOD: Normalized tables joined when needed
users (id, name, email, phone)
orders (id, user_id, total)
-- JOIN them: SELECT * FROM orders JOIN users ON orders.user_id = users.id
\`\`\`

---

## 2. Sample Schema

We'll use this schema for all examples:

\`\`\`sql
-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255)
);

-- Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Sample data
INSERT INTO users (name, email) VALUES 
    ('Alice', 'alice@example.com'),  -- id=1
    ('Bob', 'bob@example.com'),      -- id=2
    ('Charlie', 'charlie@example.com'); -- id=3

INSERT INTO orders (user_id, total) VALUES 
    (1, 99.99),   -- Alice's order
    (1, 149.99),  -- Alice's 2nd order
    (2, 79.99);   -- Bob's order
-- Charlie has NO orders
\`\`\`

---

## 3. INNER JOIN

Returns **ONLY matching rows** from both tables.

\`\`\`mermaid
graph LR
    A[Users Table] -->|INNER JOIN| C[Matching Rows]
    B[Orders Table] -->|INNER JOIN| C
    C -->|Result| D[Only rows with<br/>matching user_id]
\`\`\`

### 3.1 Basic INNER JOIN

\`\`\`sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Result:
-- name   | total
-- Alice  | 99.99
-- Alice  | 149.99
-- Bob    | 79.99
-- (Charlie excluded - no orders)
\`\`\`

### 3.2 Table Aliases (Shorter Code)

\`\`\`sql
SELECT u.name, o.total, o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- Same result, cleaner syntax
\`\`\`

### 3.3 Select All Columns

\`\`\`sql
SELECT u.*, o.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- Returns ALL columns from both tables
\`\`\`

### 3.4 INNER JOIN with WHERE

\`\`\`sql
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;

-- Result:
-- Alice | 149.99
\`\`\`

---

## 4. LEFT OUTER JOIN (LEFT JOIN)

Returns **ALL rows from left table** + matching rows from right table. NULL for non-matches.

\`\`\`mermaid
graph LR
    A[Users<br/>LEFT Table] -->|All Rows| C[Result]
    B[Orders<br/>RIGHT Table] -->|Matching Only| C
    C -->|Includes| D[All users<br/>+ their orders<br/>or NULL]
\`\`\`

### 4.1 Basic LEFT JOIN

\`\`\`sql
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Result:
-- name    | total
-- Alice   | 99.99
-- Alice   | 149.99
-- Bob     | 79.99
-- Charlie | NULL    ← Charlie included with NULL
\`\`\`

### 4.2 Find Users with NO Orders

\`\`\`sql
SELECT u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;

-- Result:
-- Charlie
\`\`\`

**Use case**: Find missing relationships (users without orders, products without sales, etc.)

---

## 5. RIGHT OUTER JOIN (RIGHT JOIN)

Returns **ALL rows from right table** + matching rows from left table. Rarely used (can rewrite as LEFT JOIN).

\`\`\`sql
-- Right join (uncommon)
SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- Equivalent LEFT JOIN (preferred)
SELECT u.name, o.total
FROM orders o
LEFT JOIN users u ON o.user_id = u.id;
\`\`\`

**Best practice**: Use LEFT JOIN and swap table order instead of RIGHT JOIN.

---

## 6. FULL OUTER JOIN

Returns **ALL rows from both tables**. NULL where no match.

\`\`\`sql
SELECT u.name, o.total
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

-- Result:
-- name    | total
-- Alice   | 99.99
-- Alice   | 149.99
-- Bob     | 79.99
-- Charlie | NULL    ← User with no orders
-- (If orphaned order exists: NULL | 999.99)
\`\`\`

**Use case**: Find all non-matching rows from both tables.

---

## 7. CROSS JOIN (Cartesian Product)

Returns **ALL combinations** of rows from both tables. No ON clause.

\`\`\`sql
SELECT u.name, o.total
FROM users u
CROSS JOIN orders o;

-- Result: 3 users × 3 orders = 9 rows
-- Alice  | 99.99
-- Alice  | 149.99
-- Alice  | 79.99
-- Bob    | 99.99
-- Bob    | 149.99
-- Bob    | 79.99
-- Charlie| 99.99
-- Charlie| 149.99
-- Charlie| 79.99
\`\`\`

**Use case**: Rarely useful. Sometimes for generating combinations or test data.

---

## 8. Self JOIN

Table joins **itself**. Useful for hierarchical data.

\`\`\`sql
-- Employees table with manager_id
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    manager_id INTEGER REFERENCES employees(id)
);

INSERT INTO employees VALUES 
    (1, 'Alice', NULL),  -- CEO (no manager)
    (2, 'Bob', 1),       -- Bob's manager is Alice
    (3, 'Charlie', 1);   -- Charlie's manager is Alice

-- Find employees and their managers
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- Result:
-- employee | manager
-- Alice    | NULL
-- Bob      | Alice
-- Charlie  | Alice
\`\`\`

---

## 9. Multiple JOINs

Join **3+ tables** in one query.

\`\`\`sql
-- Add products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE order_items (
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER
);

-- Join 4 tables
SELECT 
    u.name AS customer,
    o.total AS order_total,
    p.name AS product,
    oi.quantity
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id;
\`\`\`

**Execution order**: JOINs happen left-to-right.

---

## 10. JOIN vs WHERE for Filtering

### 10.1 Filter in JOIN (ON)

\`\`\`sql
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id AND o.total > 100;

-- Returns ALL users, but only orders > 100
-- name    | total
-- Alice   | 149.99
-- Bob     | NULL (his order was 79.99)
-- Charlie | NULL
\`\`\`

### 10.2 Filter in WHERE

\`\`\`sql
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;

-- Returns ONLY users with orders > 100
-- Alice | 149.99
-- (Bob and Charlie excluded entirely)
\`\`\`

**Rule**: 
- ON: Affects matching before JOIN
- WHERE: Filters final result after JOIN

---

## 11. JOIN Types Visual Summary

\`\`\`mermaid
graph TD
    A[JOIN Types] --> B[INNER JOIN]
    A --> C[LEFT JOIN]
    A --> D[RIGHT JOIN]
    A --> E[FULL OUTER JOIN]
    A --> F[CROSS JOIN]
    
    B --> B1[Only matching rows]
    C --> C1[All from left + matches]
    D --> D1[All from right + matches]
    E --> E1[All from both]
    F --> F1[All combinations]
\`\`\`

---

## 12. Performance Tips

1. **Index foreign keys**: Speed up JOINs
   \`\`\`sql
   CREATE INDEX idx_orders_user_id ON orders(user_id);
   \`\`\`

2. **Use INNER JOIN when possible**: Faster than OUTER JOINs

3. **Filter early**: WHERE before JOIN reduces rows
   \`\`\`sql
   -- ✅ BETTER
   SELECT * FROM 
   (SELECT * FROM orders WHERE total > 100) o
   JOIN users u ON o.user_id = u.id;
   \`\`\`

4. **Only SELECT needed columns**: Don't SELECT *

5. **Analyze query**: Use EXPLAIN
   \`\`\`sql
   EXPLAIN SELECT * FROM users u JOIN orders o ON u.id = o.user_id;
   \`\`\`

---

## 13. Common Patterns

### 13.1 Count Related Items

\`\`\`sql
-- How many orders per user?
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Result:
-- Alice   | 2
-- Bob     | 1
-- Charlie | 0
\`\`\`

### 13.2 Sum Related Values

\`\`\`sql
-- Total revenue per user
SELECT u.name, COALESCE(SUM(o.total), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Alice   | 249.98
-- Bob     | 79.99
-- Charlie | 0.00
\`\`\`

### 13.3 Latest Related Item

\`\`\`sql
-- Each user's most recent order
SELECT u.name, o.total, o.created_at
FROM users u
LEFT JOIN LATERAL (
    SELECT * FROM orders
    WHERE user_id = u.id
    ORDER BY created_at DESC
    LIMIT 1
) o ON true;
\`\`\`

---

## 14. Best Practices

1. **Always use explicit JOIN syntax**: Not old WHERE-based joins
   \`\`\`sql
   -- ❌ OLD (implicit join)
   SELECT * FROM users u, orders o WHERE u.id = o.user_id;
   
   -- ✅ MODERN
   SELECT * FROM users u JOIN orders o ON u.id = o.user_id;
   \`\`\`

2. **Use table aliases**: Shorter, clearer code

3. **Be specific**: SELECT exact columns, not *

4. **LEFT JOIN for "find missing"**: Use IS NULL

5. **Order matters**: Most restrictive JOIN first

6. **Test with small data**: Verify JOIN logic

---

## 15. Summary

**JOIN Types**:
- **INNER JOIN**: Only matches (most common)
- **LEFT JOIN**: All from left + matches (find missing)
- **RIGHT JOIN**: All from right + matches (rare, use LEFT instead)
- **FULL OUTER JOIN**: All from both
- **CROSS JOIN**: All combinations (rarely needed)
- **Self JOIN**: Table joins itself (hierarchies)

**Key Concepts**:
- Foreign keys create relationships
- ON defines matching condition
- Table aliases shorten code
- LEFT JOIN + IS NULL finds missing data
- Multiple JOINs combine 3+ tables

Next: **Aggregate Functions & GROUP BY** to summarize joined data! 📊
    `
};
