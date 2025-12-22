
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlDoc1 = {
    id: 'postgresql-1-doc-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Introduction to PostgreSQL 🐘',
    duration: '30 min read',
    content: `
# Deep Dive: Introduction to PostgreSQL 🐘

> "PostgreSQL: The World's Most Advanced Open Source Relational Database"

## 1. What is PostgreSQL?

**PostgreSQL** (often called "Postgres") is a powerful, open-source **relational database management system (RDBMS)** known for its:
- **Standards compliance** (full SQL:2016)
- **ACID guarantees** (Atomicity, Consistency, Isolation, Durability)
- **Advanced features** (JSON, full-text search, geospatial data)
- **Extensibility** (custom types, functions, operators)
- **Performance** (handles millions of rows efficiently)

### 1.1 Why PostgreSQL?

**Used by**: Apple, Instagram, Spotify, Reddit, Twitch, Netflix  
**Perfect for**: Web apps, analytics, geospatial, time-series data

**Advantages**:
- ✅ Open source (free forever)
- ✅ ACID-compliant (reliable transactions)
- ✅ Rich data types (JSON, arrays, UUIDs)
- ✅ Advanced querying (CTEs, window functions)
- ✅ Strong community and documentation

---

## 2. PostgreSQL vs Other Databases

### 2.1 PostgreSQL vs MySQL

| Feature | PostgreSQL | MySQL |
|---------|-----------|-------|
| **License** | PostgreSQL (very permissive) | GPL (+ commercial) |
| **ACID Compliance** | Full ACID | Partial (depends on engine) |
| **JSON Support** | Native JSONB (binary) | JSON (text-based) |
| **Window Functions** | ✅ Yes | ✅ Yes (8.0+) |
| **Full-text Search** | ✅ Built-in | Limited |
| **Arrays** | ✅ Native arrays | ❌ No |
| **Custom Types** | ✅ Yes | ❌ Limited |
| **Best For** | Complex queries, data integrity | Simple reads, speed |

### 2.2 PostgreSQL vs MongoDB (NoSQL)

| Feature | PostgreSQL (RDBMS) | MongoDB (NoSQL) |
|---------|-------------------|-----------------|
| **Data Model** | Tables (structured) | Documents (flexible) |
| **Schema** | Strict schema | Schema-less |
| **ACID** | ✅ Full ACID | Limited (single doc) |
| **Joins** | ✅ Powerful joins | ❌ No joins (lookups) |
| **Scaling** | Vertical + sharding | Horizontal (native) |
| **JSON** | ✅ JSONB support | ✅ Native |
| **Best For** | Structured data, relationships | Rapid prototyping, unstructured |

**Modern Approach**: PostgreSQL can do BOTH! Use tables for structured data + JSONB for flexibility.

---

## 3. Database Architecture

\`\`\`mermaid
graph TB
    Client["🖥️ Client Application"] -->|SQL Queries| Server["🐘 PostgreSQL Server"]
    Server --> Parser["📝 SQL Parser"]
    Parser --> Planner["🧠 Query Planner"]
    Planner --> Executor["⚙️ Executor"]
    Executor --> Storage["💾 Storage Engine"]
    Storage --> Disk["🗄️ Disk (Tables, Indexes)"]
    Server --> Cache["⚡ Shared Buffer Cache"]
\`\`\`

**Key Concepts**:
- **Database**: Collection of tables and data
- **Table**: Structured collection of rows (records)
- **Row**: Single record with multiple columns
- **Column**: Field with specific data type
- **Schema**: Namespace for organizing tables

---

## 4. ACID Properties

PostgreSQL guarantees **ACID** for data integrity:

### 4.1 Atomicity
**All or nothing**: Transaction either completes fully or rolls back entirely.

\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both updates succeed or both fail
\`\`\`

### 4.2 Consistency
**Valid state always**: Database maintains all constraints and rules.

\`\`\`sql
-- Balance can't be negative (CHECK constraint ensures this)
ALTER TABLE accounts ADD CONSTRAINT positive_balance 
CHECK (balance >= 0);
\`\`\`

### 4.3 Isolation
**Concurrent safety**: Transactions don't interfere with each other.

\`\`\`sql
-- Transaction 1 and Transaction 2 run simultaneously
-- Each sees consistent snapshot of data
\`\`\`

### 4.4 Durability
**Permanent writes**: Once committed, data survives crashes.

\`\`\`sql
COMMIT;  -- Data is written to disk and persists
\`\`\`

---

## 5. Installation

### 5.1 Local Installation

**macOS (Homebrew)**:
\`\`\`bash
brew install postgresql@15
brew services start postgresql@15
\`\`\`

**Ubuntu/Debian**:
\`\`\`bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
\`\`\`

**Windows**:
1. Download installer from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run installer, set password
3. Start PostgreSQL service

### 5.2 Cloud Options (Recommended for Learning)

**Supabase** (Free tier):
- [supabase.com](https://supabase.com)
- Includes PostgreSQL + dashboard
- No installation needed

**Neon** (Serverless):
- [neon.tech](https://neon.tech)
- Free serverless PostgreSQL
- Instant setup

**ElephantSQL**:
- [elephantsql.com](https://www.elephantsql.com)
- Free 20MB database

---

## 6. Connecting to PostgreSQL

### 6.1 Using psql (Command Line)

\`\`\`bash
# Connect to default database
psql -U postgres

# Connect to specific database
psql -U username -d database_name -h localhost

# For cloud databases
psql "postgresql://user:password@host:5432/dbname"
\`\`\`

### 6.2 Common psql Commands

\`\`\`sql
-- List all databases
\\l

-- Connect to database
\\c database_name

-- List all tables
\\dt

-- Describe table structure
\\d table_name

-- List all schemas
\\dn

-- Quit psql
\\q

-- Show help
\\?
\`\`\`

### 6.3 GUI Tools

**pgAdmin** (Official):
- Full-featured admin tool
- Free and open source

**DBeaver** (Universal):
- Supports many databases
- Great for beginners

**TablePlus** (macOS/Windows):
- Beautiful UI
- Fast and modern

---

## 7. SQL Language Overview

SQL (Structured Query Language) has several categories:

### 7.1 DDL (Data Definition Language)
Defines database structure:
\`\`\`sql
CREATE TABLE users (...);
ALTER TABLE users ADD COLUMN email VARCHAR(255);
DROP TABLE old_table;
\`\`\`

### 7.2 DML (Data Manipulation Language)
Manipulates data:
\`\`\`sql
INSERT INTO users VALUES (...);
UPDATE users SET name = 'Alice' WHERE id = 1;
DELETE FROM users WHERE id = 5;
SELECT * FROM users;
\`\`\`

### 7.3 DCL (Data Control Language)
Controls access:
\`\`\`sql
GRANT SELECT ON users TO read_only_user;
REVOKE INSERT ON users FROM guest;
\`\`\`

### 7.4 TCL (Transaction Control Language)
Manages transactions:
\`\`\`sql
BEGIN;
SAVEPOINT sp1;
ROLLBACK TO sp1;
COMMIT;
\`\`\`

---

## 8. Basic Database Operations

### 8.1 Create Database

\`\`\`sql
CREATE DATABASE myapp;
\`\`\`

### 8.2 Connect to Database

\`\`\`sql
-- In psql
\\c myapp
\`\`\`

### 8.3 Create Your First Table

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### 8.4 Insert Data

\`\`\`sql
INSERT INTO users (name, email) 
VALUES ('Alice', 'alice@example.com');
\`\`\`

### 8.5 Query Data

\`\`\`sql
SELECT * FROM users;
\`\`\`

---

## 9. PostgreSQL Unique Features

### 9.1 RETURNING Clause

PostgreSQL lets you return data from INSERT/UPDATE/DELETE:

\`\`\`sql
INSERT INTO users (name, email) 
VALUES ('Bob', 'bob@example.com')
RETURNING id, created_at;
-- Returns: id | created_at
--          2  | 2024-01-15 10:30:00
\`\`\`

### 9.2 JSONB Support

Store and query JSON efficiently:

\`\`\`sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    metadata JSONB
);

INSERT INTO products (name, metadata)
VALUES ('Phone', '{"color": "blue", "storage": "128GB"}');

-- Query JSON
SELECT * FROM products 
WHERE metadata->>'color' = 'blue';
\`\`\`

### 9.3 Array Support

Native array columns:

\`\`\`sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    tags TEXT[]
);

INSERT INTO posts (title, tags)
VALUES ('My Post', ARRAY['postgres', 'sql', 'tutorial']);
\`\`\`

---

## 10. Best Practices

1. **Use meaningful names**: \`users\`, \`order_items\` (plural, snake_case)
2. **Always use PRIMARY KEY**: Every table should have one
3. **Add constraints**: NOT NULL, UNIQUE, CHECK, FOREIGN KEY
4. **Use transactions**: For multi-step operations
5. **Index wisely**: Speed up queries but slow down writes
6. **Backup regularly**: Use pg_dump for backups
7. **Use schemas**: Organize tables logically
8. **Version control**: Track schema changes in migrations

---

## 11. Common Pitfalls

### 11.1 Case Sensitivity

\`\`\`sql
-- ❌ BAD: Mixed case without quotes
CREATE TABLE Users (Name VARCHAR(50));
-- Postgres converts to lowercase: users, name

-- ✅ GOOD: Use lowercase
CREATE TABLE users (name VARCHAR(50));

-- OR use quotes to preserve case
CREATE TABLE "Users" ("Name" VARCHAR(50));
\`\`\`

### 11.2 Missing Semicolons

\`\`\`sql
-- ❌ BAD: Forgot semicolon
SELECT * FROM users
-- psql waits for more input...

-- ✅ GOOD
SELECT * FROM users;
\`\`\`

### 11.3 Not Using Transactions

\`\`\`sql
-- ❌ BAD: No transaction for related changes
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- If second UPDATE fails, first is already committed!

-- ✅ GOOD: Use transaction
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
\`\`\`

---

## 12. Summary

**PostgreSQL is**:
- Most advanced open-source RDBMS
- ACID-compliant and reliable
- Feature-rich (JSON, arrays, full-text search)
- Perfect for complex applications

**Next Steps**:
- Learn data types and CREATE TABLE
- Master CRUD operations (INSERT, SELECT, UPDATE, DELETE)
- Practice queries with WHERE, ORDER BY, LIMIT

Ready to dive deeper into PostgreSQL! 🐘
    `
};
