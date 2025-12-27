import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Comparison = {
    id: 'py-u2-doc-2-comparison',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Comparison & Logical Operators',
    duration: '15 min read',
    content: `
# Deep Dive: Comparison & Logical Operators

## 1. The Simplest Explanation

Comparison operators ask questions that get **Yes/No answers** (True/False).

- Is 5 greater than 3? → True
- Is "apple" equal to "orange"? → False
- Is age at least 18? → Depends on the age!

---

## 2. Real World Analogy: The Job Application

Imagine a job application with requirements:

"You must be 18 or older AND have a degree OR 2 years experience"

This sentence has comparisons (age >= 18) and logic (AND, OR).
Programming uses the same logic!

---

## 3. Comparison Operators

| Operator | Meaning | Example |
|:---|:---|:---|
| \`==\` | Equal to | \`5 == 5\` → True |
| \`!=\` | Not equal to | \`5 != 3\` → True |
| \`>\` | Greater than | \`5 > 3\` → True |
| \`<\` | Less than | \`3 < 5\` → True |
| \`>=\` | Greater than or equal | \`5 >= 5\` → True |
| \`<=\` | Less than or equal | \`3 <= 5\` → True |

> [!WARNING]
> \`==\` checks equality. \`=\` assigns values. These are DIFFERENT!
> \`if x = 5:\` is WRONG. \`if x == 5:\` is correct.

---

## 4. Logical Operators

Combine multiple conditions:

| Operator | Meaning | Result |
|:---|:---|:---|
| \`and\` | Both must be True | \`True and True\` → True |
| \`or\` | At least one True | \`True or False\` → True |
| \`not\` | Flip the value | \`not True\` → False |

\`\`\`python
age = 25
has_license = True

# AND - both conditions must be true
if age >= 18 and has_license:
    print("Can drive")

# OR - at least one must be true
if age < 18 or not has_license:
    print("Cannot drive")

# NOT - inverts the condition
if not has_license:
    print("Get a license first")
\`\`\`

---

## 5. Truth Tables (The Math Behind It)

### AND (Both must be True)
| A | B | A and B |
|:---|:---|:---|
| True | True | **True** |
| True | False | False |
| False | True | False |
| False | False | False |

### OR (At least one True)
| A | B | A or B |
|:---|:---|:---|
| True | True | True |
| True | False | **True** |
| False | True | **True** |
| False | False | False |

---

## 6. Chained Comparisons (Python Magic)

Python allows mathematical-style chaining:

\`\`\`python
# Other languages require:
if x > 0 and x < 10:
    print("Between 0 and 10")

# Python allows:
if 0 < x < 10:
    print("Between 0 and 10")

# Works with any comparison!
if 18 <= age <= 65:
    print("Working age")
\`\`\`

This is more readable and matches how we think mathematically.

---

## 7. The \`is\` vs \`==\` Distinction

These are NOT the same:

- \`==\` checks if values are **equal**
- \`is\` checks if they are the **same object** in memory

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]

a == b  # True (same content)
a is b  # False (different objects)

c = a   # c points to same object as a
a is c  # True (same object)
\`\`\`

> [!TIP]
> Use \`is\` primarily for checking \`None\`: \`if x is None:\`

---

## 8. Common Patterns

### Checking Emptiness
\`\`\`python
# Pythonic way (truthy/falsy)
if my_list:  # Non-empty list is truthy
    process(my_list)

# Explicit way
if len(my_list) > 0:
    process(my_list)
\`\`\`

### Checking for None
\`\`\`python
if result is not None:
    use(result)
\`\`\`

### Validating Ranges
\`\`\`python
if 1 <= score <= 100:
    print("Valid score")
\`\`\`
`
};
