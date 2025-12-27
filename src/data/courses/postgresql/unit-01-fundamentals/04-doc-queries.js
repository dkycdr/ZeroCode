
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc4 = {
    id: 'postgresql-1-doc-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Basic Queries & Filtering 🔍',
    duration: '25 min read',
    content: `
# Deep Dive: Basic Queries & Filtering 🔍

> "SELECT is the most important SQL command - master it and you master data retrieval."

## 1. SELECT with WHERE

WHERE filters rows based on conditions.

\`\`\`sql
-- Basic WHERE
SELECT * FROM users WHERE is_active = true;

-- Multiple conditions
SELECT name, email FROM users 
WHERE is_active = true AND age >= 18;
\`\`\`

---

## 2. Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| \`=\` | Equal | \`price = 100\` |
| \`!=\` or \`<>\` | Not equal | \`status != 'cancelled'\` |
| \`>\` | Greater than | \`age > 18\` |
| \`<\` | Less than | \`stock < 10\` |
| \`>=\` | Greater or equal | \`price >= 50\` |
| \`<=\` | Less or equal | \`age <= 65\` |

\`\`\`sql
-- Examples
SELECT * FROM products WHERE price > 100;
SELECT * FROM users WHERE age >= 21;
SELECT * FROM orders WHERE total != 0;
\`\`\`

---

## 3. Logical Operators

### 3.1 AND

\`\`\`sql
-- Both conditions must be true
SELECT * FROM products 
WHERE price > 50 AND stock > 0;

-- Three conditions
SELECT * FROM users 
WHERE age >= 18 AND is_active = true AND email_verified = true;
\`\`\`

### 3.2 OR

\`\`\`sql
-- At least one condition must be true
SELECT * FROM products 
WHERE category = 'electronics' OR category = 'computers';

-- Parentheses for clarity
SELECT * FROM products 
WHERE (price < 20 OR price > 1000) AND stock > 0;
\`\`\`

### 3.3 NOT

\`\`\`sql
-- Negate condition
SELECT * FROM users WHERE NOT is_active;

-- Same as
SELECT * FROM users WHERE is_active = false;
\`\`\`

---

## 4. IN Operator

\`\`\`sql
-- Check if value is in a list
SELECT * FROM products 
WHERE category IN ('electronics', 'computers', 'phones');

-- Same as (but cleaner):
-- WHERE category = 'electronics' OR category = 'computers' OR category = 'phones'

-- NOT IN
SELECT * FROM users 
WHERE status NOT IN ('banned', 'deleted');
\`\`\`

---

## 5. BETWEEN Operator

\`\`\`sql
-- Range query (inclusive)
SELECT * FROM products 
WHERE price BETWEEN 50 AND 200;

-- Same as:
-- WHERE price >= 50 AND price <= 200

-- Dates
SELECT * FROM orders 
WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

-- NOT BETWEEN
SELECT * FROM products 
WHERE price NOT BETWEEN 10 AND 100;
\`\`\`

---

## 6. LIKE Operator (Pattern Matching)

### 6.1 Wildcards

- \`%\`: Matches any number of characters (0 or more)
- \`_\`: Matches exactly one character

\`\`\`sql
-- Starts with 'A'
SELECT * FROM users WHERE name LIKE 'A%';
-- Matches: Alice, Andrew, Anna

-- Ends with 'son'
SELECT * FROM users WHERE name LIKE '%son';
-- Matches: Johnson, Anderson, Wilson

-- Contains 'john'
SELECT * FROM users WHERE name LIKE '%john%';
-- Matches: John, Johnson, Johnny

-- Exactly 4 characters
SELECT * FROM users WHERE code LIKE '____';
-- Matches: ABCD, 1234

-- Second character is 'a'
SELECT * FROM users WHERE name LIKE '_a%';
-- Matches: Jack, Paul, Dan
\`\`\`

### 6.2 ILIKE (Case-Insensitive)

\`\`\`sql
-- PostgreSQL specific: case-insensitive LIKE
SELECT * FROM users WHERE name ILIKE 'alice%';
-- Matches: Alice, ALICE, alice, AlIcE
\`\`\`

### 6.3 NOT LIKE

\`\`\`sql
SELECT * FROM users WHERE email NOT LIKE '%@gmail.com';
\`\`\`

---

## 7. NULL Handling

### 7.1 IS NULL

\`\`\`sql
-- Find rows where column is NULL
SELECT * FROM users WHERE phone IS NULL;

-- ❌ WRONG: Never use = NULL
-- SELECT * FROM users WHERE phone = NULL;  -- Doesn't work!
\`\`\`

### 7.2 IS NOT NULL

\`\`\`sql
-- Find rows where column has a value
SELECT * FROM users WHERE email IS NOT NULL;
\`\`\`

### 7.3 COALESCE (Default for NULL)

\`\`\`sql
-- Replace NULL with default value
SELECT 
    name,
    COALESCE(phone, 'No phone') AS contact_phone
FROM users;
\`\`\`

---

## 8. ORDER BY (Sorting)

### 8.1 Ascending Order (A-Z, 0-9)

\`\`\`sql
-- Default is ASC
SELECT * FROM products ORDER BY price;
SELECT * FROM products ORDER BY price ASC;

-- Alphabetical
SELECT * FROM users ORDER BY name;
\`\`\`

### 8.2 Descending Order (Z-A, 9-0)

\`\`\`sql
-- DESC for descending
SELECT * FROM products ORDER BY price DESC;

-- Latest first
SELECT * FROM orders ORDER BY created_at DESC;
\`\`\`

### 8.3 Multiple Columns

\`\`\`sql
-- Sort by category, then by price within each category
SELECT * FROM products 
ORDER BY category ASC, price DESC;

-- Sort by multiple: first, last name
SELECT * FROM users 
ORDER BY last_name, first_name;
\`\`\`

---

## 9. LIMIT and OFFSET (Pagination)

### 9.1 LIMIT

\`\`\`sql
-- Get first 10 rows
SELECT * FROM products LIMIT 10;

-- Top 5 most expensive
SELECT * FROM products 
ORDER BY price DESC 
LIMIT 5;
\`\`\`

### 9.2 OFFSET

\`\`\`sql
-- Skip first 10, get next 10
SELECT * FROM products 
LIMIT 10 OFFSET 10;

-- Pagination pattern
-- Page 1: LIMIT 10 OFFSET 0
-- Page 2: LIMIT 10 OFFSET 10
-- Page 3: LIMIT 10 OFFSET 20
\`\`\`

### 9.3 Pagination Formula

\`\`\`sql
-- Page size: 20 items per page
-- Page 1
SELECT * FROM products LIMIT 20 OFFSET 0;

-- Page 2
SELECT * FROM products LIMIT 20 OFFSET 20;

-- Formula: OFFSET = (page - 1) * page_size
-- Page N = LIMIT 20 OFFSET ((N - 1) * 20)
\`\`\`

---

## 10. DISTINCT

\`\`\`sql
-- Remove duplicate rows
SELECT DISTINCT category FROM products;
-- Returns: ['electronics', 'clothing', 'books']

-- Distinct on multiple columns
SELECT DISTINCT category, brand FROM products;

-- Count unique values
SELECT COUNT(DISTINCT category) FROM products;
\`\`\`

---

## 11. Aggregate Functions

### 11.1 COUNT

\`\`\`sql
-- Count all rows
SELECT COUNT(*) FROM users;

-- Count non-NULL values
SELECT COUNT(phone) FROM users;

-- Count distinct
SELECT COUNT(DISTINCT category) FROM products;
\`\`\`

### 11.2 Other Aggregates

\`\`\`sql
-- SUM
SELECT SUM(price) FROM products WHERE category = 'electronics';

-- AVG
SELECT AVG(rating) FROM products;

-- MAX
SELECT MAX(price) FROM products;

-- MIN
SELECT MIN(created_at) FROM users;
\`\`\`

---

## 12. Query Execution Order

Important to understand:

\`\`\`mermaid
flowchart TD
    FROM["1. FROM<br/>(Get table)"] --> WHERE["2. WHERE<br/>(Filter rows)"]
    WHERE --> SELECT["3. SELECT<br/>(Choose columns)"]
    SELECT --> DISTINCT["4. DISTINCT<br/>(Remove duplicates)"]
    DISTINCT --> ORDER["5. ORDER BY<br/>(Sort results)"]
    ORDER --> LIMIT["6. LIMIT/OFFSET<br/>(Pagination)"]
\`\`\`

\`\`\`sql
SELECT DISTINCT name, price              -- 3. Select columns
FROM products                            -- 1. From table
WHERE category = 'electronics'           -- 2. Filter
ORDER BY price DESC                      -- 4. Sort
LIMIT 10;                                -- 5. Limit
\`\`\`

---

## 13. Combining Filters

\`\`\`sql
-- Complex query example
SELECT name, price, stock 
FROM products 
WHERE 
    (category = 'electronics' OR category = 'computers')
    AND price BETWEEN 100 AND 1000
    AND stock > 0
    AND name ILIKE '%pro%'
ORDER BY price DESC
LIMIT 20 OFFSET 0;
\`\`\`

---

## 14. Best Practices

1. **Use WHERE to filter early** (before ORDER BY, LIMIT)
2. **Order matters**: Use parentheses for clarity
3. **LIKE is slow**: Use sparingly on large tables
4. **Always ORDER BY when using LIMIT**: Without ORDER, results are random
5. **Use ILIKE for case-insensitive** searches
6. **IS NULL, not = NULL**: NULL is special
7. **BETWEEN is inclusive**: Both endpoints included

---

## 15. Common Mistakes

### 15.1 Using = NULL

\`\`\`sql
-- ❌ WRONG
SELECT * FROM users WHERE phone = NULL;

-- ✅ CORRECT
SELECT * FROM users WHERE phone IS NULL;
\`\`\`

### 15.2 Forgetting ORDER BY with LIMIT

\`\`\`sql
-- ❌ BAD: Random 10 rows
SELECT * FROM products LIMIT 10;

-- ✅ GOOD: Top 10 by price
SELECT * FROM products ORDER BY price DESC LIMIT 10;
\`\`\`

### 15.3 LIKE Performance

\`\`\`sql
-- ❌ SLOW on big tables
SELECT * FROM users WHERE name LIKE '%smith%';

-- Better: Full-text search (covered later)
\`\`\`

---

## 16. Summary

**Filtering**:
- WHERE with =, !=, >, <, >=, <=
- AND, OR, NOT for logic
- IN for lists
- BETWEEN for ranges
- LIKE/ILIKE for patterns
- IS NULL / IS NOT NULL

**Sorting & Limiting**:
- ORDER BY ASC/DESC
- LIMIT for top N
- OFFSET for pagination
- DISTINCT for unique values

**Aggregates**:
- COUNT, SUM, AVG, MAX, MIN

Next Unit will cover **Joins & Advanced Queries**! 🚀
    `
};
