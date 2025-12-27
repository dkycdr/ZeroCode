
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
