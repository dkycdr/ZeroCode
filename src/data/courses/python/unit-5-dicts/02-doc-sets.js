import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Sets = {
    id: 'py-u5-doc-2-sets',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Sets',
    duration: '12 min read',
    content: `
# Deep Dive: Sets

## 1. The Simplest Explanation

A set is a collection with **no duplicates** and **no order**.

\`\`\`python
numbers = {1, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3} - duplicates removed!
\`\`\`

It's like a bag of unique items where you don't care about order.

---

## 2. Real World Analogy: The Guest List

You're making a party guest list:
- Each person can only be on the list once (unique)
- You don't care about the order of names
- You just want to know: "Is this person invited?"

That's exactly what sets do - store unique items for fast lookup.

---

## 3. Creating Sets

\`\`\`python
# With curly braces
fruits = {"apple", "banana", "cherry"}

# From a list (removes duplicates!)
numbers = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}

# Empty set (NOT {} - that's an empty dict!)
empty = set()
\`\`\`

> [!WARNING]
> \`{}\` creates an empty **dictionary**, not a set. Use \`set()\` for empty sets.

---

## 4. Why Sets Are Fast

Sets use a data structure called a **hash table**.

\`\`\`python
# Checking if item exists:
items = ["a", "b", "c", ..., "z"]  # List: checks one by one
items = {"a", "b", "c", ..., "z"}  # Set: instant lookup!

"x" in items  # Set is MUCH faster for large collections
\`\`\`

---

## 5. Set Operations (Math!)

Sets support mathematical set operations:

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# Union: all items from both
a | b   # {1, 2, 3, 4, 5, 6}
a.union(b)

# Intersection: items in BOTH
a & b   # {3, 4}
a.intersection(b)

# Difference: items in A but not B
a - b   # {1, 2}
a.difference(b)

# Symmetric difference: items in A or B, but not both
a ^ b   # {1, 2, 5, 6}
a.symmetric_difference(b)
\`\`\`

---

## 6. Modifying Sets

\`\`\`python
s = {1, 2, 3}

# Add one item
s.add(4)       # {1, 2, 3, 4}

# Add multiple items
s.update([5, 6])  # {1, 2, 3, 4, 5, 6}

# Remove (error if not found)
s.remove(6)    # {1, 2, 3, 4, 5}

# Remove (no error if not found)
s.discard(99)  # No error, set unchanged

# Remove and return arbitrary item
item = s.pop()

# Clear all
s.clear()      # set()
\`\`\`

---

## 7. Practical Use Cases

### Removing Duplicates from a List
\`\`\`python
items = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(items))  # [1, 2, 3, 4]
\`\`\`

### Finding Common Elements
\`\`\`python
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common = set(list1) & set(list2)  # {4, 5}
\`\`\`

### Fast Membership Testing
\`\`\`python
valid_commands = {"start", "stop", "restart", "status"}

if user_input in valid_commands:
    execute(user_input)
\`\`\`

---

## 8. Set Comparison

\`\`\`python
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}

a <= b   # True - a is subset of b
a < b    # True - a is proper subset (not equal)
b >= a   # True - b is superset of a

a == {3, 2, 1}  # True - order doesn't matter!
\`\`\`

---

## 9. Frozen Sets (Immutable)

Need a set that can't change? Use \`frozenset\`:

\`\`\`python
fs = frozenset([1, 2, 3])
fs.add(4)  # Error! Can't modify
\`\`\`

Frozen sets can be dictionary keys (regular sets cannot).
`
};
