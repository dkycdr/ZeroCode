import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Print = {
    id: 'py-u0-doc-3-print',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The print() Function',
    duration: '12 min read',
    content: `
# Deep Dive: The print() Function

## 1. The Simplest Explanation

\`print()\` is Python's way of talking to you. It displays information on the screen.

Think of it like a **loudspeaker** - whatever you put inside, Python announces it to the world.

\`\`\`python
print("Hello, World!")  # Python shouts: "Hello, World!"
\`\`\`

---

## 2. Real World Analogy: The Scoreboard

Imagine a sports scoreboard. It doesn't play the game - it just **displays** information.

\`print()\` is your scoreboard. It doesn't compute, calculate, or process. It just shows you what's happening inside your program.

This is crucial for:
- **Debugging**: "What value is in this variable?"
- **User feedback**: "Your order has been placed!"
- **Logging**: "Server started at 10:32 AM"

---

## 3. Printing Different Data Types

\`\`\`python
# Text (strings)
print("Hello, Alice!")

# Numbers
print(42)
print(3.14159)

# Calculations (evaluated first, then printed)
print(10 + 5)  # Prints: 15

# Boolean values
print(True)
print(False)

# Variables
name = "Alice"
print(name)  # Prints: Alice
\`\`\`

---

## 4. Printing Multiple Things

Separate items with commas - Python adds spaces automatically:

\`\`\`python
print("Name:", "Alice")      # Name: Alice
print("Age:", 25)            # Age: 25
print(1, 2, 3, 4, 5)         # 1 2 3 4 5
\`\`\`

Want a different separator?
\`\`\`python
print("A", "B", "C", sep="-")   # A-B-C
print("A", "B", "C", sep="")    # ABC (no separator)
\`\`\`

---

## 5. Special Characters: Escape Sequences

Some characters need special codes:

| Code | Output | Description |
|:---|:---|:---|
| \`\\n\` | New line | Move to next line |
| \`\\t\` | Tab | Add horizontal space |
| \`\\"\` | " | Print a quote |
| \`\\\\\` | \\ | Print a backslash |

\`\`\`python
print("Line 1\\nLine 2")
# Output:
# Line 1
# Line 2

print("Name:\\tAlice")
# Output: Name:   Alice

print("She said \\"Hello\\"")
# Output: She said "Hello"
\`\`\`

---

## 6. The End Parameter

By default, \`print()\` adds a newline at the end. Change it with \`end=\`:

\`\`\`python
print("Hello", end=" ")
print("World")
# Output: Hello World (on same line)

print("Loading", end="...")
print("Done!")
# Output: Loading...Done!
\`\`\`

---

## 7. f-strings: The Modern Way

The **best** way to mix text and variables (Python 3.6+):

\`\`\`python
name = "Alice"
age = 25

# Old way (clunky)
print("My name is " + name + " and I am " + str(age))

# f-string way (clean!)
print(f"My name is {name} and I am {age}")
\`\`\`

**Features:**
\`\`\`python
# Expressions inside {}
print(f"Next year: {age + 1}")

# Formatting numbers
price = 19.99
print(f"Price: {price:.2f} dollars")  # Price: 19.99 dollars

# Calling methods
print(f"Name: {name.upper()}")  # Name: ALICE
\`\`\`

> [!TIP]
> **Always use f-strings** for combining text and variables. They're readable and fast.

---

## 8. Print for Debugging

Every programmer uses print() to debug:

\`\`\`python
def calculate_total(items):
    print(f"DEBUG: items = {items}")  # Peek inside
    total = sum(items)
    print(f"DEBUG: total = {total}")  # Check result
    return total
\`\`\`

This is called "print debugging" - crude but effective. Later you'll learn proper debugging tools, but print() will always be useful.
`
};
