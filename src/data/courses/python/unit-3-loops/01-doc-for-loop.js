import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ForLoop = {
    id: 'py-u3-doc-1-for',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: For Loops',
    duration: '15 min read',
    content: `
# Deep Dive: For Loops

## 1. The Simplest Explanation

Imagine you're a teacher with 30 students. You need to check attendance for EACH student.

Would you write 30 separate checks? No! You'd go through the list:
- "For each student in the class, mark them present."

That's a **for loop** - repeat an action for each item in a collection.

---

## 2. Real World Analogy: The Assembly Line

Think of a for loop like an **assembly line** in a factory:

1. Items come in on a conveyor belt (your list)
2. A worker processes each item (your code)
3. When the belt is empty, work stops

\`\`\`python
students = ["Alice", "Bob", "Charlie"]

for student in students:
    print(f"Checking attendance for {student}")
\`\`\`

Each student is processed **one at a time**, in order.

---

## 3. The Anatomy of a For Loop

\`\`\`python
for item in collection:
    # do something with item
\`\`\`

Four critical parts:
1. **\`for\`** - keyword to start the loop
2. **\`item\`** - a temporary variable that holds each element
3. **\`in collection\`** - what you're looping through
4. **Colon and indented code** - what happens each time

> [!TIP]
> The variable name \`item\` can be anything meaningful: \`student\`, \`number\`, \`fruit\`, \`x\`.

---

## 4. The \`range()\` Function: Counting Made Easy

Need to repeat something N times? Use \`range()\`:

\`\`\`python
# Print "Hello" 5 times
for i in range(5):
    print("Hello")
\`\`\`

**Understanding range():**

| Code | Produces | Description |
|:---|:---|:---|
| \`range(5)\` | 0, 1, 2, 3, 4 | Start at 0, stop before 5 |
| \`range(2, 7)\` | 2, 3, 4, 5, 6 | Start at 2, stop before 7 |
| \`range(0, 10, 2)\` | 0, 2, 4, 6, 8 | Step by 2 |
| \`range(5, 0, -1)\` | 5, 4, 3, 2, 1 | Count backwards |

> [!IMPORTANT]
> \`range()\` NEVER includes the end number! \`range(1, 5)\` gives 1,2,3,4 - not 5.

---

## 5. What Can You Loop Through?

Almost anything!

\`\`\`python
# Loop through a string
for char in "Python":
    print(char)  # P, y, t, h, o, n

# Loop through a list
for fruit in ["apple", "banana", "cherry"]:
    print(fruit)

# Loop through a dictionary (keys)
for key in {"name": "Alice", "age": 25}:
    print(key)  # name, age
\`\`\`

---

## 6. Getting the Index with \`enumerate()\`

Sometimes you need BOTH the item AND its position:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry
\`\`\`

This is much cleaner than manually tracking an index variable.

---

## 7. The Accumulator Pattern

The most common loop pattern - building up a result:

\`\`\`python
# Sum all numbers 1 to 100
total = 0  # Start with empty accumulator

for number in range(1, 101):
    total = total + number  # Add to accumulator

print(total)  # 5050
\`\`\`

**Formula:**
1. Initialize accumulator before loop
2. Update accumulator inside loop
3. Use result after loop

---

## 8. List Comprehension: The Pythonic Shortcut

Python has a special one-liner syntax for simple loops:

\`\`\`python
# Traditional way
squares = []
for x in range(5):
    squares.append(x ** 2)

# Pythonic way (List Comprehension)
squares = [x ** 2 for x in range(5)]

# Both produce: [0, 1, 4, 9, 16]
\`\`\`

This is considered more "Pythonic" and is often faster.

> [!TIP]
> Use comprehensions for simple transformations. Use regular loops for complex logic.
`
};
