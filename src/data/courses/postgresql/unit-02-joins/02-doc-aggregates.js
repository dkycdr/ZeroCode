
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc6 = {
    id: 'postgresql-2-doc-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Aggregate Functions & GROUP BY 📊',
    duration: '30 min read',
    content: `
# Deep Dive: Aggregate Functions & GROUP BY 📊

> "Data tells a story - aggregates help us read between the lines."

## 1. What are Aggregate Functions?

**Aggregate functions** compute a **single result** from multiple rows.

Common aggregates:
- **COUNT()**: Count rows
- **SUM()**: Sum values
- **AVG()**: Average
- **MIN()**: Minimum value
- **MAX()**: Maximum value

\`\`\`sql
-- Simple aggregates
SELECT COUNT(*) FROM orders;  -- Total orders: 3
SELECT SUM(total) FROM orders; -- Total revenue: 329.97
SELECT AVG(total) FROM orders; -- Average order: 109.99
SELECT MAX(total) FROM orders; -- Largest order: 149.99
SELECT MIN(total) FROM orders; -- Smallest order: 79.99
\`\`\`

---

## 2. GROUP BY Basics

**GROUP BY** splits rows into **groups** and applies aggregates to each group.

\`\`\`mermaid
flowchart TD
    A[All Rows] -->|GROUP BY column| B[Group 1]
    A -->|GROUP BY column| C[Group 2]
    A -->|GROUP BY column| D[Group 3]
    B -->|Aggregate| E[COUNT, SUM, etc.]
    C -->|Aggregate| F[COUNT, SUM, etc.]
    D -->|Aggregate| G[COUNT, SUM, etc.]
\`\`\`

### 2.1 Basic GROUP BY

\`\`\`sql
-- Count orders per user
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id;

-- Result:
-- user_id | order_count
-- 1       | 2  (Alice)
-- 2       | 1  (Bob)
\`\`\`

### 2.2 Multiple Columns

\`\`\`sql
-- Group by multiple columns
SELECT 
    user_id,
    DATE(created_at) AS order_date,
    COUNT(*) AS orders_per_day
FROM orders
GROUP BY user_id, DATE(created_at);
\`\`\`

### 2.3 Rule: SELECT Columns

**Important**: If you use GROUP BY, SELECT can ONLY include:
1. Grouped columns
2. Aggregate functions

\`\`\`sql
-- ❌ ERROR: email not in GROUP BY or aggregate
SELECT user_id, email, COUNT(*)
FROM orders
GROUP BY user_id;

-- ✅ CORRECT
SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id;
\`\`\`

---

## 3. COUNT Variants

### 3.1 COUNT(*)

Counts **all rows** including NULLs.

\`\`\`sql
SELECT COUNT(*) FROM users; -- 3
\`\`\`

### 3.2 COUNT(column)

Counts **non-NULL values** in column.

\`\`\`sql
-- If some users have NULL phone
SELECT COUNT(phone) FROM users; -- Only counts non-NULL phones
\`\`\`

### 3.3 COUNT(DISTINCT column)

Counts **unique values**.

\`\`\`sql
-- How many unique users placed orders?
SELECT COUNT(DISTINCT user_id) FROM orders; -- 2 (Alice, Bob)
\`\`\`

---

## 4. SUM and AVG

### 4.1 SUM

\`\`\`sql
-- Total revenue
SELECT SUM(total) AS total_revenue
FROM orders; -- 329.97

-- Total per user
SELECT user_id, SUM(total) AS user_total
FROM orders
GROUP BY user_id;

-- user_id | user_total
-- 1       | 249.98  (Alice)
-- 2       | 79.99   (Bob)
\`\`\`

### 4.2 AVG

\`\`\`sql
-- Average order value
SELECT AVG(total) AS avg_order
FROM orders; -- 109.99

-- Average per user
SELECT user_id, AVG(total) AS avg_per_user
FROM orders
GROUP BY user_id;
\`\`\`

---

## 5. MIN and MAX

\`\`\`sql
-- Cheapest and most expensive orders
SELECT 
    MIN(total) AS cheapest,
    MAX(total) AS most_expensive
FROM orders;

-- cheapest | most_expensive
-- 79.99     | 149.99

-- Per user
SELECT 
    user_id,
    MIN(total) AS min_order,
    MAX(total) AS max_order
FROM orders
GROUP BY user_id;
\`\`\`

---

## 6. HAVING Clause

**HAVING** filters **groups** (after GROUP BY).  
**WHERE** filters **rows** (before GROUP BY).

### 6.1 WHERE vs HAVING

\`\`\`sql
-- WHERE: Filter rows BEFORE grouping
SELECT user_id, COUNT(*) AS order_count
FROM orders
WHERE total > 100  -- Only orders > 100
GROUP BY user_id;

-- HAVING: Filter groups AFTER aggregation
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 1;  -- Only users with > 1 order

-- Result: 
-- user_id | order_count
-- 1       | 2  (Alice has 2 orders)
\`\`\`

### 6.2 HAVING with Aggregates

\`\`\`sql
-- Users who spent > $200 total
SELECT user_id, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) > 200;

-- user_id | total_spent
-- 1       | 249.98  (Alice)
\`\`\`

### 6.3 Combine WHERE and HAVING

\`\`\`sql
SELECT user_id, SUM(total) AS total_spent
FROM orders
WHERE created_at >= '2024-01-01'  -- Filter rows first
GROUP BY user_id
HAVING SUM(total) > 100;  -- Then filter groups
\`\`\`

---

## 7. GROUP BY with JOINs

Combine grouping with joined tables.

\`\`\`sql
-- Count orders per user (with names)
SELECT 
    u.name,
    COUNT(o.id) AS order_count,
    COALESCE(SUM(o.total), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- name    | order_count | total_spent
-- Alice   | 2           | 249.98
-- Bob     | 1           | 79.99
-- Charlie | 0           | 0.00
\`\`\`

**Note**: Include u.id in GROUP BY even if not in SELECT (good practice for uniqueness).

---

## 8. Common Patterns

### 8.1 Top N by Group

\`\`\`sql
-- Top 5 users by spending
SELECT u.name, SUM(o.total) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 5;
\`\`\`

### 8.2 Percentage of Total

\`\`\`sql
-- Each user's % of total revenue
SELECT 
    u.name,
    SUM(o.total) AS user_total,
    ROUND(SUM(o.total) / (SELECT SUM(total) FROM orders) * 100, 2) AS pct_of_total
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

### 8.3 Grouping by Date Ranges

\`\`\`sql
-- Orders per month
SELECT 
    DATE_TRUNC('month', created_at) AS month,
    COUNT(*) AS order_count,
    SUM(total) AS monthly_revenue
FROM orders
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;
\`\`\`

### 8.4 Multiple Aggregates

\`\`\`sql
SELECT 
    user_id,
    COUNT(*) AS order_count,
    SUM(total) AS total_spent,
    AVG(total) AS avg_order,
    MIN(total) AS min_order,
    MAX(total) AS max_order
FROM orders
GROUP BY user_id;
\`\`\`

---

## 9. Handling NULLs in Aggregates

### 9.1 SUM/AVG Ignore NULLs

\`\`\`sql
-- If some totals are NULL, they're ignored
SELECT AVG(total) FROM orders;  -- Skips NULL values
\`\`\`

### 9.2 COUNT with NULLs

\`\`\`sql
-- COUNT(*) includes NULL rows
SELECT COUNT(*) FROM users;

-- COUNT(column) excludes NULLs
SELECT COUNT(phone) FROM users;
\`\`\`

### 9.3 COALESCE for Defaults

\`\`\`sql
-- Replace NULL with 0
SELECT 
    u.name,
    COALESCE(SUM(o.total), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

---

## 10. Advanced Grouping

### 10.1 ROLLUP (Hierarchical Totals)

\`\`\`sql
-- Sales by category and product + totals
SELECT 
    category,
    product,
    SUM(sales) AS total_sales
FROM sales_data
GROUP BY ROLLUP(category, product);

-- Returns:
-- Electronics | Phone | 1000
-- Electronics | Laptop| 2000
-- Electronics | NULL  | 3000  ← Category total
-- Books       | Novel | 500
-- Books       | NULL  | 500   ← Category total
-- NULL        | NULL  | 3500  ← Grand total
\`\`\`

### 10.2 GROUPING SETS

\`\`\`sql
-- Multiple groupings in one query
SELECT category, product, SUM(sales)
FROM sales_data
GROUP BY GROUPING SETS (
    (category, product),  -- By category and product
    (category),           -- By category only
    ()                    -- Grand total
);
\`\`\`

---

## 11. Performance Tips

1. **Index grouped columns**: Speed up GROUP BY
   \`\`\`sql
   CREATE INDEX idx_orders_user_id ON orders(user_id);
   \`\`\`

2. **Filter with WHERE before GROUP BY**: Reduces rows
   \`\`\`sql
   -- ✅ BETTER
   SELECT user_id, COUNT(*)
   FROM orders
   WHERE total > 50  -- Filter early
   GROUP BY user_id;
   \`\`\`

3. **HAVING after WHERE**: Use both strategically

4. **Limit groups**: Add LIMIT after ORDER BY

---

## 12. Common Mistakes

### 12.1 Forgetting GROUP BY

\`\`\`sql
-- ❌ ERROR: user_id not in GROUP BY
SELECT user_id, COUNT(*) FROM orders;

-- ✅ CORRECT
SELECT user_id, COUNT(*) FROM orders GROUP BY user_id;
\`\`\`

### 12.2 Using WHERE on Aggregates

\`\`\`sql
-- ❌ ERROR: Can't use aggregate in WHERE
SELECT user_id, COUNT(*) 
FROM orders
WHERE COUNT(*) > 1  -- Wrong!
GROUP BY user_id;

-- ✅ CORRECT: Use HAVING
SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 1;
\`\`\`

### 12.3 Selecting Non-Grouped Columns

\`\`\`sql
-- ❌ ERROR: name not grouped
SELECT user_id, name, COUNT(*)
FROM orders
GROUP BY user_id;

-- ✅ CORRECT: Include in GROUP BY or join
SELECT o.user_id, u.name, COUNT(*)
FROM orders o
JOIN users u ON o.user_id = u.id
GROUP BY o.user_id, u.name;
\`\`\`

---

## 13. Best Practices

1. **Always GROUP BY all non-aggregate SELECT columns**
2. **Use HAVING for group filters, WHERE for row filters**
3. **Use COALESCE for NULL handling in LEFT JOINs**
4. **Order by aggregate for top N**: ORDER BY COUNT(*) DESC
5. **Be explicit**: COUNT(*) vs COUNT(column)
6. **Index grouped columns** for performance

---

## 14. Summary

**Aggregate Functions**:
- COUNT(*), COUNT(column), COUNT(DISTINCT)
- SUM(), AVG(), MIN(), MAX()

**GROUP BY**:
- Split rows into groups
- SELECT only grouped columns or aggregates
- Combine with JOINs for rich analysis

**HAVING**:
- Filter groups after aggregation
- Use aggregates in condition
- Comes after GROUP BY, before ORDER BY

**Execution Order**:
1. FROM + JOINs
2. WHERE (filter rows)
3. GROUP BY (group rows)
4. Aggregates (compute)
5. HAVING (filter groups)
6. SELECT
7. ORDER BY
8. LIMIT

Next: **Subqueries & CTEs** for complex multi-step queries! 🎯
    `
};
