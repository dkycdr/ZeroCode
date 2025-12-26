import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Lambda = {
    id: 'py-u6-doc-3-lambda',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Lambda Functions',
    duration: '12 min read',
    content: `
# Deep Dive: Lambda Functions

## 1. The Simplest Explanation

A lambda is a **tiny, anonymous function** defined in one line.

Instead of writing:
\`\`\`python
def double(x):
    return x * 2
\`\`\`

You can write:
\`\`\`python
double = lambda x: x * 2
\`\`\`

Same result, less ceremony.

---

## 2. Real World Analogy: The Sticky Note

Regular functions are like official documents - filed, named, stored.
Lambdas are like sticky notes - quick, temporary, single-purpose.

You don't file a sticky note. You write something quick and use it immediately.

---

## 3. The Syntax

\`\`\`python
lambda arguments: expression
\`\`\`

Key rules:
- No \`def\` keyword
- No function name (anonymous)
- Only ONE expression (no statements)
- Returns automatically (no \`return\` keyword)

\`\`\`python
# Regular function
def add(a, b):
    return a + b

# Lambda equivalent
add = lambda a, b: a + b

# Both work the same
add(3, 5)  # 8
\`\`\`

---

## 4. Common Use Cases

### Sorting with Custom Key
\`\`\`python
users = [
    {"name": "Charlie", "age": 35},
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30}
]

# Sort by age
users.sort(key=lambda user: user["age"])
# [Alice(25), Bob(30), Charlie(35)]

# Sort by name length
users.sort(key=lambda user: len(user["name"]))
\`\`\`

### Filtering with filter()
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4, 6, 8, 10]
\`\`\`

### Transforming with map()
\`\`\`python
numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))
# [2, 4, 6, 8, 10]

squares = list(map(lambda x: x ** 2, numbers))
# [1, 4, 9, 16, 25]
\`\`\`

---

## 5. Lambda vs Regular Function

| Aspect | Lambda | Regular Function |
|:---|:---|:---|
| Name | Anonymous | Named |
| Lines | 1 line only | Multiple lines |
| Statements | Expression only | Any statements |
| Readability | Worse for complex | Better for complex |
| Debugging | Harder | Easier |

---

## 6. When NOT to Use Lambda

### Too Complex
\`\`\`python
# ❌ Don't do this - hard to read
process = lambda x: x * 2 if x > 0 else x * -1 if x < 0 else 0

# ✅ Use regular function
def process(x):
    if x > 0:
        return x * 2
    elif x < 0:
        return x * -1
    else:
        return 0
\`\`\`

### When You Need to Reuse
\`\`\`python
# ❌ Don't assign lambda to variable for reuse
double = lambda x: x * 2

# ✅ Use def - it's clearer
def double(x):
    return x * 2
\`\`\`

> [!TIP]
> If you're assigning a lambda to a variable, you probably should just use \`def\`.

---

## 7. Lambdas with reduce()

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Sum all numbers
total = reduce(lambda a, b: a + b, numbers)
# ((((1+2)+3)+4)+5) = 15

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, numbers)
# 5
\`\`\`

---

## 8. The Pythonic Perspective

Many Python developers prefer list comprehensions over map/filter:

\`\`\`python
numbers = [1, 2, 3, 4, 5]

# Lambda + map
doubled = list(map(lambda x: x * 2, numbers))

# List comprehension (more Pythonic)
doubled = [x * 2 for x in numbers]

# Lambda + filter
evens = list(filter(lambda x: x % 2 == 0, numbers))

# List comprehension
evens = [x for x in numbers if x % 2 == 0]
\`\`\`

> [!TIP]
> List comprehensions are usually preferred for simple cases. Use lambda when passing a function as an argument (like \`key=\` in sorting).
`
};
