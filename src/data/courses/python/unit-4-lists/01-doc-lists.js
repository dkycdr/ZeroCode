import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CreatingLists = {
    id: 'py-u4-doc-1-lists',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Lists',
    duration: '18 min read',
    content: `
# Deep Dive: Lists

## 1. The Simplest Explanation

A list is an **ordered collection** of items. Think of it as a numbered sequence where each item has a position.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
#          [0]       [1]        [2]
\`\`\`

You can access any item by its index (position number).

---

## 2. Real World Analogy: The Shopping List

Your shopping list:
1. Milk
2. Bread
3. Eggs
4. Butter

A Python list is exactly this - items in order, each at a numbered position.

You can:
- Add items to the list
- Remove items
- Check what's at position 3
- Rearrange the order

---

## 3. Creating Lists

\`\`\`python
# Empty list
empty = []

# List with items
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", True, 3.14]  # Different types allowed

# List from other iterables
letters = list("hello")  # ['h', 'e', 'l', 'l', 'o']
\`\`\`

---

## 4. Accessing Elements

### By Index
\`\`\`python
fruits = ["apple", "banana", "cherry", "date"]

fruits[0]   # "apple" (first item)
fruits[2]   # "cherry" (third item)
fruits[-1]  # "date" (last item)
fruits[-2]  # "cherry" (second to last)
\`\`\`

### Slicing (Getting Multiple Items)
\`\`\`python
fruits[0:2]   # ["apple", "banana"] (index 0 and 1)
fruits[:2]    # ["apple", "banana"] (from start)
fruits[2:]    # ["cherry", "date"] (to end)
fruits[::2]   # ["apple", "cherry"] (every 2nd item)
fruits[::-1]  # ["date", "cherry", "banana", "apple"] (reversed)
\`\`\`

---

## 5. Modifying Lists (Mutable!)

Unlike strings, lists CAN be changed:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Change an item
fruits[1] = "blueberry"
# ["apple", "blueberry", "cherry"]

# Add to end
fruits.append("date")
# ["apple", "blueberry", "cherry", "date"]

# Insert at position
fruits.insert(1, "apricot")
# ["apple", "apricot", "blueberry", "cherry", "date"]
\`\`\`

---

## 6. Removing Items

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]

# Remove by value (first occurrence)
fruits.remove("banana")
# ["apple", "cherry", "banana"]

# Remove by index and get the value
removed = fruits.pop(1)
# removed = "cherry", fruits = ["apple", "banana"]

# Remove last item
last = fruits.pop()
# last = "banana", fruits = ["apple"]

# Delete by index (no return)
del fruits[0]
# fruits = []
\`\`\`

---

## 7. Checking and Searching

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Check if item exists
"banana" in fruits  # True
"grape" in fruits   # False

# Find index of item
fruits.index("cherry")  # 2
# Raises error if not found!

# Count occurrences
nums = [1, 2, 2, 3, 2]
nums.count(2)  # 3
\`\`\`

---

## 8. Useful Built-in Functions

\`\`\`python
nums = [3, 1, 4, 1, 5, 9, 2]

len(nums)   # 7 (length)
min(nums)   # 1 (smallest)
max(nums)   # 9 (largest)
sum(nums)   # 25 (total)
\`\`\`

---

## 9. Lists vs Arrays (Other Languages)

| Feature | Python List | Arrays (C/Java) |
|:---|:---|:---|
| Mixed types | ✅ Allowed | ❌ Same type only |
| Dynamic size | ✅ Grows automatically | ❌ Fixed size |
| Built-in methods | ✅ Many | ❌ Few |

Python lists are more flexible but slightly slower. For performance-critical code, use \`numpy\` arrays.

---

## 10. Common Gotcha: Reference vs Copy

\`\`\`python
# THIS DOESN'T COPY!
original = [1, 2, 3]
copy = original  # Both point to SAME list!

copy.append(4)
print(original)  # [1, 2, 3, 4] - CHANGED!

# To actually copy:
real_copy = original.copy()
# or
real_copy = original[:]
# or
real_copy = list(original)
\`\`\`

> [!WARNING]
> Assignment creates a **reference**, not a copy. Changes affect both variables!
`
};
