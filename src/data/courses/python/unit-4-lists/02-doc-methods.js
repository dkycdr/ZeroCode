import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ListMethods = {
    id: 'py-u4-doc-2-methods',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: List Methods',
    duration: '15 min read',
    content: `
# Deep Dive: List Methods

## 1. The Simplest Explanation

Methods are **actions** you can perform on a list. They're like verbs for your data.

\`\`\`python
# English: Add "grape" to the fruits list
# Python:  fruits.append("grape")
\`\`\`

---

## 2. Real World Analogy: The Playlist

Think of a list like a music playlist:
- \`append()\` - Add a song to the end
- \`insert()\` - Put a song at a specific position
- \`pop()\` - Remove and play a song
- \`sort()\` - Arrange alphabetically
- \`shuffle()\` - Randomize the order

---

## 3. Adding Items

\`\`\`python
fruits = ["apple", "banana"]

# Add to end
fruits.append("cherry")
# ["apple", "banana", "cherry"]

# Insert at specific position
fruits.insert(1, "apricot")
# ["apple", "apricot", "banana", "cherry"]

# Add multiple items
fruits.extend(["date", "elderberry"])
# ["apple", "apricot", "banana", "cherry", "date", "elderberry"]
\`\`\`

> [!TIP]
> \`append()\` adds ONE item. \`extend()\` adds EACH item from another list.

---

## 4. Removing Items

\`\`\`python
fruits = ["apple", "banana", "cherry", "banana"]

# Remove by value (first match only)
fruits.remove("banana")
# ["apple", "cherry", "banana"]

# Remove by index and return it
item = fruits.pop(1)
# item = "cherry", fruits = ["apple", "banana"]

# Remove last item
last = fruits.pop()
# last = "banana", fruits = ["apple"]

# Clear everything
fruits.clear()
# []
\`\`\`

---

## 5. Finding and Counting

\`\`\`python
nums = [1, 2, 3, 2, 4, 2, 5]

# Find index of first occurrence
nums.index(2)  # 1

# Count occurrences
nums.count(2)  # 3

# Check if exists (not a method, but useful)
2 in nums  # True
\`\`\`

---

## 6. Sorting and Reversing

\`\`\`python
nums = [3, 1, 4, 1, 5, 9, 2]

# Sort in place (modifies original)
nums.sort()
# [1, 1, 2, 3, 4, 5, 9]

# Sort descending
nums.sort(reverse=True)
# [9, 5, 4, 3, 2, 1, 1]

# Reverse in place (not sorting!)
nums.reverse()
# [1, 1, 2, 3, 4, 5, 9]

# Create sorted copy (doesn't modify original)
original = [3, 1, 2]
new = sorted(original)
# original still [3, 1, 2], new is [1, 2, 3]
\`\`\`

> [!IMPORTANT]
> \`list.sort()\` = modifies original, returns None
> \`sorted(list)\` = returns new list, original unchanged

---

## 7. Copying Lists

\`\`\`python
original = [1, 2, 3]

# Shallow copy (3 ways)
copy1 = original.copy()
copy2 = original[:]
copy3 = list(original)

# All three work the same for simple lists
\`\`\`

For nested lists, you need \`deepcopy\` from the \`copy\` module.

---

## 8. Method Chaining?

Unlike some languages, most Python list methods return \`None\`:

\`\`\`python
# This DOESN'T work!
result = [3, 1, 2].sort().reverse()  # Error!

# Because sort() returns None, not the list

# Do this instead:
nums = [3, 1, 2]
nums.sort()
nums.reverse()
\`\`\`

---

## 9. Method Reference Table

| Method | Purpose | Returns |
|:---|:---|:---|
| \`append(x)\` | Add to end | None |
| \`extend(list)\` | Add all items | None |
| \`insert(i, x)\` | Add at index | None |
| \`remove(x)\` | Remove first match | None |
| \`pop(i)\` | Remove at index | The item |
| \`clear()\` | Remove all | None |
| \`index(x)\` | Find position | Index |
| \`count(x)\` | Count matches | Count |
| \`sort()\` | Sort in place | None |
| \`reverse()\` | Reverse in place | None |
| \`copy()\` | Shallow copy | New list |
`
};
