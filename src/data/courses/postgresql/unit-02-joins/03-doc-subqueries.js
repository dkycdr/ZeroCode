
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc7 = {
    id: 'postgresql-2-doc-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Subqueries & CTEs 🎯',
    duration: '30 min read',
    content: `
# Deep Dive: Subqueries & CTEs 🎯

> "Sometimes one query isn't enough - subqueries let you build complex logic step by step."

## 1. What are Subqueries?

A **subquery** is a query **inside another query**. Also called "nested queries" or "inner queries".

\`\`\`sql
-- Outer query
SELECT name FROM users
WHERE id IN (
    -- Subquery (inner query)
    SELECT user_id FROM orders WHERE total > 100
);
\`\`\`

**Use cases**:
- Find rows matching results of another query
- Calculate values for comparisons
- Create derived tables

---

## 2. Subquery Types

### 2.1 Scalar Subquery

Returns **single value** (one row, one column).

\`\`\`sql
-- Find users with above-average order total
SELECT name FROM users
WHERE id IN (
    SELECT user_id FROM orders
    WHERE total > (SELECT AVG(total) FROM orders)  ← Scalar subquery
);
\`\`\`

### 2.2 Row Subquery

Returns **single row** (multiple columns).

\`\`\`sql
-- Find order matching specific criteria
SELECT * FROM orders
WHERE (user_id, total) = (SELECT 1, 149.99);
\`\`\`

### 2.3 Table Subquery

Returns **multiple rows** (table-like result).

\`\`\`sql
-- Find users who placed orders
SELECT name FROM users
WHERE id IN (
    SELECT DISTINCT user_id FROM orders  ← Table subquery
);
\`\`\`

---

## 3. Subqueries in WHERE

### 3.1 IN Operator

\`\`\`sql
-- Users who placed orders
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders);

-- Result: Alice, Bob
\`\`\`

### 3.2 NOT IN

\`\`\`sql
-- Users who NEVER placed orders
SELECT name FROM users
WHERE id NOT IN (SELECT user_id FROM orders WHERE user_id IS NOT NULL);

-- Result: Charlie
-- NOTE: Be careful with NULLs in NOT IN!
\`\`\`

### 3.3 Comparison Operators

\`\`\`sql
-- Users with orders > average
SELECT name FROM users
WHERE id IN (
    SELECT user_id FROM orders
    WHERE total > (SELECT AVG(total) FROM orders)
);
\`\`\`

### 3.4 EXISTS

Checks if subquery returns **any rows** (faster than IN for large datasets).

\`\`\`sql
-- Users with at least one order
SELECT name FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS for opposite
SELECT name FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);
\`\`\`

**EXISTS vs IN**:
- EXISTS: Stops at first match (faster)
- IN: Checks all values

### 3.5 ANY / ALL

\`\`\`sql
-- Users with order > ANY order from user 2
SELECT name FROM users
WHERE id IN (
    SELECT user_id FROM orders
    WHERE total > ANY (SELECT total FROM orders WHERE user_id = 2)
);

-- Users with order > ALL orders from user 2
SELECT name FROM users
WHERE id IN (
    SELECT user_id FROM orders
    WHERE total > ALL (SELECT total FROM orders WHERE user_id = 2)
);
\`\`\`

---

## 4. Subqueries in SELECT

Calculate values for each row.

\`\`\`sql
-- Show each user's order count
SELECT 
    name,
    (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u;

-- Result:
-- Alice   | 2
-- Bob     | 1
-- Charlie | 0
\`\`\`

**Performance**: Can be slow for large datasets. Consider JOINs instead.

---

## 5. Subqueries in FROM (Derived Tables)

Use subquery result as a table.

\`\`\`sql
-- Average of user totals
SELECT AVG(user_total) AS avg_per_user
FROM (
    SELECT user_id, SUM(total) AS user_total
    FROM orders
    GROUP BY user_id  
) AS user_totals;  ← Alias required!
\`\`\`

**Rule**: Subqueries in FROM must have an alias.

---

## 6. Subqueries in HAVING

Filter groups based on aggregate comparison.

\`\`\`sql
-- Users who spent more than average
SELECT user_id, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) > (
    SELECT AVG(user_total) FROM (
        SELECT SUM(total) AS user_total
        FROM orders
        GROUP BY user_id
    ) AS totals
);
\`\`\`

---

## 7. Correlated Subqueries

Subquery **references outer query** columns. Runs once per outer row.

\`\`\`sql
-- Find users with above-average spending
SELECT name FROM users u
WHERE (
    SELECT COALESCE(SUM(total), 0) FROM orders o WHERE o.user_id = u.id
) > (
    SELECT AVG(total) FROM orders
);
\`\`\`

**Performance**: Can be slow (runs multiple times). Consider JOINs or CTEs.

### 7.1 Correlated vs Non-Correlated

\`\`\`sql
-- Non-correlated: Independent, runs once
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders);

-- Correlated: Depends on outer query, runs per row
SELECT name FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
\`\`\`

---

## 8. CTEs (Common Table Expressions)

**WITH clause** creates **temporary named result sets**. Like a variable for queries.

\`\`\`mermaid
flowchart TD
    A[WITH clause] -->|Define| B[CTE 1]
    A -->|Define| C[CTE 2]
    B -->|Use in| D[Main Query]
    C -->|Use in| D
    D -->|Returns| E[Final Result]
\`\`\`

### 8.1 Basic CTE

\`\`\`sql
-- Create CTE
WITH user_totals AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
)
-- Use CTE
SELECT u.name, ut.total_spent
FROM users u
LEFT JOIN user_totals ut ON u.id = ut.user_id;
\`\`\`

**Advantages**:
- Readable (name complex logic)
- Reusable (reference multiple times)
- Maintainable (easier to debug)

### 8.2 Multiple CTEs

\`\`\`sql
WITH 
user_totals AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
),
avg_spent AS (
    SELECT AVG(total_spent) AS avg_total
    FROM user_totals
)
SELECT u.name, ut.total_spent, a.avg_total
FROM users u
LEFT JOIN user_totals ut ON u.id = ut.user_id
CROSS JOIN avg_spent a;
\`\`\`

### 8.3 Recursive CTEs

CTEs can reference themselves (useful for hierarchies).

\`\`\`sql
-- Employee hierarchy
WITH RECURSIVE employee_tree AS (
    -- Base case: Top-level employees
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case
    SELECT e.id, e.name, e.manager_id, et.level + 1
    FROM employees e
    JOIN employee_tree et ON e.manager_id = et.id
)
SELECT * FROM employee_tree
ORDER BY level, name;
\`\`\`

**Common uses**: Org charts, category trees, file systems

---

## 9. Subqueries vs JOINs vs CTEs

### 9.1 When to Use Each

| Scenario | Best Choice | Why |
|----------|-------------|-----|
| Combine tables | JOIN | Faster, clearer |
| One-time filter | Subquery | Simple, inline |
| Complex multi-step logic | CTE | Readable, reusable |
| Exists check | EXISTS | Faster than IN |
| Hierarchical data | Recursive CTE | Built for it |

### 9.2 Rewriting Subquery as JOIN

\`\`\`sql
-- Subquery (slower)
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders);

-- JOIN (faster)
SELECT DISTINCT u.name
FROM users u
JOIN orders o ON u.id = o.user_id;
\`\`\`

### 9.3 Rewriting Subquery as CTE

\`\`\`sql
-- Subquery in FROM
SELECT AVG(total_spent)
FROM (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
) AS user_totals;

-- CTE (clearer)
WITH user_totals AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
)
SELECT AVG(total_spent) FROM user_totals;
\`\`\`

---

## 10. Performance Considerations

### 10.1 Subqueries Can Be Slow

\`\`\`sql
-- ❌ SLOW: Subquery runs per row
SELECT name,
    (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id)
FROM users u;

-- ✅ FASTER: JOIN + GROUP BY
SELECT u.name, COUNT(o.id)
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

### 10.2 EXISTS vs IN

\`\`\`sql
-- ✅ FASTER: EXISTS stops at first match
SELECT name FROM users u
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- ❌ SLOWER: IN checks all values
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders);
\`\`\`

### 10.3 CTE vs Subquery

\`\`\`sql
-- CTEs can be optimized by PostgreSQL
-- But not always materialized - sometimes just macro expanded
-- Use MATERIALIZED hint if needed (PostgreSQL 12+)
WITH MATERIALIZED user_totals AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
)
SELECT * FROM user_totals WHERE total_spent > 100;
\`\`\`

---

## 11. Common Patterns

### 11.1 Find Rows Not in Another Table

\`\`\`sql
-- Method 1: NOT IN (watch for NULLs!)
SELECT name FROM users
WHERE id NOT IN (SELECT user_id FROM orders WHERE user_id IS NOT NULL);

-- Method 2: NOT EXISTS (safer)
SELECT name FROM users u
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- Method 3: LEFT JOIN + NULL (clearest)
SELECT u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
\`\`\`

### 11.2 Top N Per Group

\`\`\`sql
-- Latest order per user (PostgreSQL 9.3+)
WITH ranked_orders AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn
    FROM orders
)
SELECT user_id, total, created_at
FROM ranked_orders
WHERE rn = 1;
\`\`\`

### 11.3 Running Totals

\`\`\`sql
WITH daily_sales AS (
    SELECT DATE(created_at) AS day, SUM(total) AS daily_total
    FROM orders
    GROUP BY DATE(created_at)
)
SELECT 
    day,
    daily_total,
    SUM(daily_total) OVER (ORDER BY day) AS running_total
FROM daily_sales;
\`\`\`

---

## 12. Best Practices

1. **Prefer JOINs for simple combinations**: Faster and clearer
2. **Use EXISTS for existence checks**: Faster than IN
3. **Use CTEs for readability**: Especially complex multi-step queries
4. **Watch for NULLs with NOT IN**: Can cause unexpected results
5. **Avoid correlated subqueries when possible**: Join or CTE instead
6. **Name CTEs descriptively**: user_totals, active_customers, etc.
7. **Test performance**: EXPLAIN ANALYZE both approaches

---

## 13. Common Mistakes

### 13.1 NULL with NOT IN

\`\`\`sql
-- ❌ WRONG: Returns nothing if any order.user_id is NULL
SELECT * FROM users
WHERE id NOT IN (SELECT user_id FROM orders);

-- ✅ CORRECT: Filter NULLs
SELECT * FROM users
WHERE id NOT IN (SELECT user_id FROM orders WHERE user_id IS NOT NULL);

-- ✅ BETTER: Use NOT EXISTS
SELECT * FROM users u
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
\`\`\`

### 13.2 Missing Alias in FROM

\`\`\`sql
-- ❌ ERROR: Subquery needs alias
SELECT * FROM (SELECT user_id FROM orders);

-- ✅ CORRECT
SELECT * FROM (SELECT user_id FROM orders) AS user_orders;
\`\`\`

### 13.3 Scalar Subquery Returns Multiple Rows

\`\`\`sql
-- ❌ ERROR: Subquery returns multiple rows
SELECT name,
    (SELECT total FROM orders WHERE user_id = u.id)
FROM users u;

-- ✅ CORRECT: Aggregate or  limit to 1
SELECT name,
    (SELECT MAX(total) FROM orders WHERE user_id = u.id)
FROM users u;
\`\`\`

---

## 14. Summary

**Subqueries**:
- Query inside another query
- Types: Scalar, row, table
- Locations: SELECT, WHERE, FROM, HAVING
- IN, EXISTS, ANY, ALL operators

**CTEs (WITH)**:
- Named temporary result sets
- Multiple CTEs allowed
- Recursive CTEs for hierarchies
- More readable than nested subqueries

**Performance**:
- JOINs usually faster than subqueries
- EXISTS faster than IN
- Avoid correlated subqueries when possible

**Best Use**:
- Subqueries: Quick filters, one-time calculations
- CTEs: Complex multi-step logic, readability
- JOINs: Combining tables

Next: **Advanced Query Techniques** like window functions and UNION! ⚡
    `
};

export const postgresqlDoc8 = {
    id: 'postgresql-2-doc-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Advanced Query Techniques ⚡',
    duration: '30 min read',
    content: `
# Deep Dive: Advanced Query Techniques ⚡

> "Master these advanced techniques and unlock PostgreSQL's full power."

## 1. Window Functions

**Window functions** perform calculations **across rows** related to current row, WITHOUT collapsing rows like GROUP BY.

\`\`\`mermaid
flowchart TD
    A[All Rows] -->|PARTITION BY| B[Window 1]
    A -->|PARTITION BY| C[Window 2]
    B -->|Compute per row| D[ROW_NUMBER, RANK, etc.]
    C -->|Compute per row| E[ROW_NUMBER, RANK, etc.]
\`\`\`

**Key difference from GROUP BY**:
- GROUP BY: Collapses rows into groups
- Window functions: Keep all rows, add computed columns

---

## 2. ROW_NUMBER()

Assigns **unique number** to each row within partition.

\`\`\`sql
-- Number orders per user
SELECT 
    user_id,
    total,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) AS order_num
FROM orders;

-- Result:
-- user_id | total  | order_num
-- 1       | 99.99  | 1  (Alice's 1st order)
-- 1       | 149.99 | 2  (Alice's 2nd order)
-- 2       | 79.99  | 1  (Bob's 1st order)
\`\`\`

**Use case**: Latest/first records per group

---

## 3. RANK() and DENSE_RANK()

### 3.1 RANK()

Same values get **same rank**, next rank **skips numbers**.

\`\`\`sql
SELECT 
    name,
    score,
    RANK() OVER (ORDER BY score DESC) AS rank
FROM students;

-- score | rank
-- 100   | 1
-- 100   | 1  (tied)
-- 95    | 3  (skipped rank 2)
-- 90    | 4
\`\`\`

### 3.2 DENSE_RANK()

Same values get **same rank**, next rank **doesn't skip**.

\`\`\`sql
SELECT 
    name,
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS dense_rank
FROM students;

-- score | dense_rank
-- 100   | 1
-- 100   | 1  (tied)
-- 95    | 2  (no skip)
-- 90    | 3
\`\`\`

**When to use**:
- RANK(): Olympics-style (1st, 1st, 3rd)
- DENSE_RANK(): Continuous ranking (1st, 1st, 2nd)

---

## 4. LAG() and LEAD()

Access **previous/next row** values.

### 4.1 LAG()

\`\`\`sql
-- Compare each order to previous order
SELECT 
    created_at,
    total,
    LAG(total) OVER (ORDER BY created_at) AS prev_total,
    total - LAG(total) OVER (ORDER BY created_at) AS difference
FROM orders;

-- created_at | total  | prev_total | difference
-- 2024-01-01 | 99.99  | NULL       | NULL
-- 2024-01-02 | 149.99 | 99.99      | 50.00
-- 2024-01-03 | 79.99  | 149.99     | -70.00
\`\`\`

### 4.2 LEAD()

\`\`\`sql
-- Look ahead to next row
SELECT 
    created_at,
    total,
    LEAD(total) OVER (ORDER BY created_at) AS next_total
FROM orders;
\`\`\`

**Use cases**: Trends, differences, gaps

---

## 5. FIRST_VALUE() and LAST_VALUE()

### 5.1 FIRST_VALUE()

\`\`\`sql
-- Compare each order to user's first order
SELECT 
    user_id,
    total,
    FIRST_VALUE(total) OVER (PARTITION BY user_id ORDER BY created_at) AS first_order_total
FROM orders;

-- user_id | total  | first_order_total
-- 1       | 99.99  | 99.99
-- 1       | 149.99 | 99.99  (compared to first)
-- 2       | 79.99  | 79.99
\`\`\`

### 5.2 LAST_VALUE()

**Tricky**: Default frame is "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW".

\`\`\`sql
-- Wrong: Only sees up to current row
SELECT 
    total,
    LAST_VALUE(total) OVER (ORDER BY created_at) AS last_total
FROM orders;

-- Correct: Specify frame to end of partition
SELECT 
    total,
    LAST_VALUE(total) OVER (
        ORDER BY created_at
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS last_total
FROM orders;
\`\`\`

---

## 6. PARTITION BY vs ORDER BY

### 6.1 PARTITION BY

Divides rows into **groups** (windows).

\`\`\`sql
-- Number orders within each user's partition
ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at)
\`\`\`

### 6.2 ORDER BY

Defines **order** within partition (and sometimes frame).

\`\`\`sql
-- Rank by total (no partition = entire table)
RANK() OVER (ORDER BY total DESC)
\`\`\`

### 6.3 Both

\`\`\`sql
-- Rank each user's orders by total
RANK() OVER (PARTITION BY user_id ORDER BY total DESC)
\`\`\`

---

## 7. Common Window Function Patterns

### 7.1 Top N Per Group

\`\`\`sql
-- Latest order per user
WITH ranked AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn
    FROM orders
)
SELECT * FROM ranked WHERE rn = 1;
\`\`\`

### 7.2 Running Totals

\`\`\`sql
SELECT 
    created_at,
    total,
    SUM(total) OVER (ORDER BY created_at) AS running_total
FROM orders;

-- created_at | total  | running_total
-- 2024-01-01 | 99.99  | 99.99
-- 2024-01-02 | 149.99 | 249.98
-- 2024-01-03 | 79.99  | 329.97
\`\`\`

### 7.3 Moving Averages

\`\`\`sql
-- 3-order moving average
SELECT 
    created_at,
    total,
    AVG(total) OVER (
        ORDER BY created_at
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg
FROM orders;
\`\`\`

---

## 8. UNION and Set Operations

### 8.1 UNION

Combines results, **removes duplicates**.

\`\`\`sql
-- All email addresses from users and customers
SELECT email FROM users
UNION
SELECT email FROM customers;
\`\`\`

### 8.2 UNION ALL

Combines results, **keeps duplicates** (faster).

\`\`\`sql
SELECT email FROM users
UNION ALL
SELECT email FROM customers;
\`\`\`

### 8.3 INTERSECT

Returns **common rows** from both queries.

\`\`\`sql
-- Users who are also customers
SELECT email FROM users
INTERSECT
SELECT email FROM customers;
\`\`\`

### 8.4 EXCEPT

Returns rows from first query **NOT in second**.

\`\`\`sql
-- Users who are NOT customers
SELECT email FROM users
EXCEPT
SELECT email FROM customers;
\`\`\`

**Requirements**:
- Same number of columns
- Compatible data types
- Column names from first query

---

## 9. CASE Statements

Conditional logic in SQL (like if/else).

### 9.1 Simple CASE

\`\`\`sql
SELECT 
    total,
    CASE total
        WHEN 99.99 THEN 'Low'
        WHEN 149.99 THEN 'High'
        ELSE 'Medium'
    END AS price_category
FROM orders;
\`\`\`

### 9.2 Searched CASE (More Flexible)

\`\`\`sql
SELECT 
    total,
    CASE 
        WHEN total < 50 THEN 'Budget'
        WHEN total < 100 THEN 'Standard'
        WHEN total < 200 THEN 'Premium'
        ELSE 'Luxury'
    END AS tier
FROM orders;
\`\`\`

### 9.3 CASE in Aggregates

\`\`\`sql
-- Count orders by price tier
SELECT 
    user_id,
    COUNT(CASE WHEN total < 100 THEN 1 END) AS budget_orders,
    COUNT(CASE WHEN total >= 100 THEN 1 END) AS premium_orders
FROM orders
GROUP BY user_id;
\`\`\`

---

## 10. Useful Functions

### 10.1 COALESCE

Returns **first non-NULL** value.

\`\`\`sql
SELECT 
    name,
    COALESCE(phone, email, 'No contact') AS contact
FROM users;
\`\`\`

### 10.2 NULLIF

Returns **NULL if values equal**, otherwise first value.

\`\`\`sql
-- Avoid division by zero
SELECT 
    total / NULLIF(quantity, 0) AS price_per_unit
FROM products;
\`\`\`

### 10.3 String Functions

\`\`\`sql
-- CONCAT
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;

-- UPPER / LOWER
SELECT UPPER(name), LOWER(email) FROM users;

-- SUBSTRING
SELECT SUBSTRING(email FROM 1 FOR POSITION('@' IN email) - 1) AS username
FROM users;

-- LENGTH
SELECT name, LENGTH(name) AS name_length FROM users;
\`\`\`

### 10.4 Date Functions

\`\`\`sql
-- Current values
SELECT NOW(), CURRENT_DATE, CURRENT_TIME;

-- Extract parts
SELECT 
    created_at,
    EXTRACT(YEAR FROM created_at) AS year,
    EXTRACT(MONTH FROM created_at) AS month,
    EXTRACT(DAY FROM created_at) AS day
FROM orders;

-- Date arithmetic
SELECT 
    created_at,
    created_at + INTERVAL '7 days' AS one_week_later,
    created_at - INTERVAL '1 month' AS one_month_ago
FROM orders;

-- Truncate to period
SELECT DATE_TRUNC('month', created_at) AS month FROM orders;
\`\`\`

---

## 11. Best Practices

1. **Use window functions instead of self-joins**: More efficient
2. **UNION ALL when duplicates OK**: Faster than UNION
3. **PARTITION BY for grouped calculations**: Keeps all rows
4. **CASE for readable conditional logic**: Better than complex WHERE
5. **COALESCE for NULL defaults**: Cleaner than CASE
6. **Date functions for time-based analysis**: Truncate, extract, arithmetic

---

## 12. Summary

**Window Functions**:
- ROW_NUMBER(), RANK(), DENSE_RANK()
- LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE()
- PARTITION BY (groups), ORDER BY (sort)
- Running totals, moving averages

**Set Operations**:
- UNION (unique), UNION ALL (all)
- INTERSECT (common), EXCEPT (difference)

**Conditional Logic**:
- CASE WHEN for if/else
- COALESCE for NULL handling
- NULLIF for conditional NULL

**Functions**:
- String: CONCAT, UPPER, LOWER, SUBSTRING
- Date: NOW, EXTRACT, DATE_TRUNC, intervals

PostgreSQL Unit 2 complete! Master these and you're ready for professional database work! 🚀
    `
};
