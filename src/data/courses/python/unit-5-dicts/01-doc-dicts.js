import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Dictionaries = {
    id: 'py-u5-doc-1-dicts',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Dictionaries',
    duration: '18 min read',
    content: `
# Deep Dive: Dictionaries

## 1. The Simplest Explanation

A dictionary is like a real-world dictionary:
- You look up a **word** (key) → You get a **definition** (value)

In Python:
- You look up a **key** → You get a **value**

\`\`\`python
# Real dictionary: word → definition
# Python dictionary: key → value

user = {
    "name": "Alice",     # key "name" → value "Alice"
    "age": 25,           # key "age" → value 25
    "email": "alice@gmail.com"
}
\`\`\`

---

## 2. Real World Analogy: The Phonebook

Remember phonebooks? You'd look up a **name** to find their **phone number**.

\`\`\`python
phonebook = {
    "Alice": "555-1234",
    "Bob": "555-5678",
    "Charlie": "555-9012"
}

# "What's Alice's number?"
print(phonebook["Alice"])  # 555-1234
\`\`\`

The key is the name you look up. The value is what you get back.

---

## 3. Why Dictionaries Matter

Lists access items by **position** (index 0, 1, 2...).
Dictionaries access items by **name** (key).

**The Problem with Lists:**
\`\`\`python
user = ["Alice", 25, "alice@gmail.com"]
# Which is which? user[0]? user[1]? Confusing!
\`\`\`

**The Dictionary Solution:**
\`\`\`python
user = {"name": "Alice", "age": 25, "email": "alice@gmail.com"}
# Crystal clear: user["name"], user["age"], user["email"]
\`\`\`

> [!IMPORTANT]
> Use lists for **ordered collections** of similar items.
> Use dictionaries for **structured data** with named fields.

---

## 4. Creating Dictionaries

\`\`\`python
# Empty dictionary
empty = {}

# With initial data
person = {
    "name": "Alice",
    "age": 25,
    "is_active": True
}

# Keys can be strings or numbers
data = {
    "name": "Test",
    1: "first",
    2: "second"
}
\`\`\`

> [!NOTE]
> Keys must be **immutable** (strings, numbers, tuples). Lists cannot be keys!

---

## 5. Accessing and Modifying

### Reading Values
\`\`\`python
user = {"name": "Alice", "age": 25}

# Direct access (crashes if key missing)
print(user["name"])  # "Alice"

# Safe access with .get() (returns None or default)
print(user.get("email"))           # None
print(user.get("email", "N/A"))    # "N/A"
\`\`\`

### Adding/Updating Values
\`\`\`python
user["email"] = "alice@gmail.com"  # Add new
user["age"] = 26                    # Update existing
\`\`\`

### Deleting Values
\`\`\`python
del user["email"]           # Remove key
user.pop("age")              # Remove and return value
\`\`\`

---

## 6. Looping Through Dictionaries

Three ways to loop:

\`\`\`python
user = {"name": "Alice", "age": 25}

# Just keys
for key in user:
    print(key)  # name, age

# Keys and values together
for key, value in user.items():
    print(f"{key}: {value}")
# name: Alice
# age: 25

# Just values
for value in user.values():
    print(value)  # Alice, 25
\`\`\`

---

## 7. Real-World Use Cases

### User Profiles
\`\`\`python
user = {
    "id": 12345,
    "username": "alice_dev",
    "email": "alice@example.com",
    "roles": ["admin", "editor"]
}
\`\`\`

### API Responses (JSON)
\`\`\`python
weather_response = {
    "city": "Jakarta",
    "temperature": 32,
    "humidity": 80,
    "conditions": "Sunny"
}
\`\`\`

### Configuration Settings
\`\`\`python
config = {
    "debug": True,
    "database": "mysql",
    "max_connections": 100
}
\`\`\`

---

## 8. Nested Dictionaries

Dictionaries can contain other dictionaries:

\`\`\`python
company = {
    "name": "TechCorp",
    "ceo": {
        "name": "Alice",
        "age": 45
    },
    "employees": 500
}

# Access nested data
print(company["ceo"]["name"])  # "Alice"
\`\`\`

This is exactly how **JSON** data works - the most common data format on the web!
`
};
