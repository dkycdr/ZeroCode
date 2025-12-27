import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Tuples = {
    id: 'py-u4-doc-3-tuples',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Tuples',
    duration: '12 min read',
    content: `
# Deep Dive: Tuples

## 1. The Simplest Explanation

A tuple is like a list, but it **cannot be changed** after creation.

\`\`\`python
coordinates = (10, 20)  # Tuple - immutable
items = [10, 20]        # List - mutable
\`\`\`

Once created, you can't add, remove, or change tuple elements.

---

## 2. Real World Analogy: GPS Coordinates

Your home address coordinates: (latitude, longitude)
- They're a pair of values that belong together
- They shouldn't change accidentally
- They're meant to be read, not modified

That's exactly what tuples are for - fixed data that shouldn't change.

---

## 3. Why Use Tuples?

| List | Tuple |
|:---|:---|
| Shopping cart (changes) | Coordinates (fixed) |
| User's to-do list | RGB color (255, 0, 0) |
| Search results | Date (2024, 12, 25) |
| Mutable | Immutable |

**Benefits of immutability:**
- Protect data from accidental changes
- Can be used as dictionary keys
- Slightly faster than lists
- Signal intent: "this data is constant"

---

## 4. Creating Tuples

\`\`\`python
# Parentheses
point = (10, 20)

# Without parentheses (tuple packing)
point = 10, 20

# Single element (NEEDS the comma!)
single = (42,)    # This is a tuple
not_tuple = (42)  # This is just 42!

# From other iterables
tuple([1, 2, 3])  # (1, 2, 3)
tuple("abc")      # ('a', 'b', 'c')
\`\`\`

> [!WARNING]
> For single-element tuples, the comma is REQUIRED: \`(42,)\` not \`(42)\`

---

## 5. Accessing Elements

Exactly like lists:

\`\`\`python
point = (10, 20, 30)

point[0]   # 10
point[-1]  # 30
point[1:]  # (20, 30)
\`\`\`

---

## 6. Tuple Unpacking (Super Useful!)

Extract values into separate variables:

\`\`\`python
# Basic unpacking
point = (10, 20)
x, y = point
print(x)  # 10
print(y)  # 20

# Swap values (Python magic!)
a, b = b, a

# Function returning multiple values
def get_user():
    return "Alice", 25, "alice@email.com"

name, age, email = get_user()
\`\`\`

---

## 7. Named Tuples (Best Practice)

For complex tuples with many values, use \`namedtuple\`:

\`\`\`python
from collections import namedtuple

# Define the structure
Person = namedtuple('Person', ['name', 'age', 'email'])

# Create instance
user = Person("Alice", 25, "alice@email.com")

# Access by name OR index
print(user.name)   # "Alice"
print(user[0])     # "Alice"
\`\`\`

Named tuples are like a lightweight class - more readable!

---

## 8. Tuple Methods (Only 2!)

Since tuples are immutable, they have very few methods:

\`\`\`python
nums = (1, 2, 3, 2, 4, 2)

nums.count(2)  # 3 (how many 2s)
nums.index(3)  # 2 (where is 3)
\`\`\`

That's it! No \`append()\`, no \`remove()\`, no \`sort()\`.

---

## 9. When to Choose Tuple vs List

**Use Tuple when:**
- Data shouldn't change: coordinates, RGB colors
- Function returns multiple values
- Dictionary keys (lists can't be keys!)
- Performance matters

**Use List when:**
- Data will change: shopping cart, to-do list
- You need to add/remove items
- Order might need to change
`
};
