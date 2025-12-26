import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Strings = {
    id: 'py-u1-doc-3-strings',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Strings',
    duration: '18 min read',
    content: `
# Deep Dive: Strings

## 1. The Simplest Explanation

A string is just **text** - a sequence of characters strung together like beads on a necklace.

The name, email, password, this entire paragraph - all strings.

\`\`\`python
name = "Alice"        # A string with 5 characters
empty = ""            # An empty string (zero characters)
sentence = "Hello!"   # Strings can have any characters
\`\`\`

---

## 2. Real World Analogy: The Pearl Necklace

Think of a string as a **pearl necklace**:

- Each pearl is a **character**
- They're connected in a **specific order**
- You can count them (length)
- You can access any pearl by position (index)
- You can cut sections (slicing)

\`\`\`python
text = "PYTHON"
#       012345  <- Index positions

text[0]   # 'P' - First pearl
text[5]   # 'N' - Sixth pearl
text[-1]  # 'N' - Last pearl (negative = from end)
\`\`\`

---

## 3. Three Ways to Create Strings

\`\`\`python
# Single quotes (most common)
name = 'Alice'

# Double quotes (same as single)
message = "Hello, World!"

# Triple quotes (multi-line)
paragraph = """
This is line 1.
This is line 2.
This spans multiple lines!
"""
\`\`\`

> [!TIP]
> Use single quotes by default. Use double quotes when your string contains single quotes: \`"It's raining"\`

---

## 4. Strings Are Immutable

This is **critical** to understand:

\`\`\`python
name = "Alice"
name[0] = "B"  # ERROR! Can't change individual characters
\`\`\`

Strings cannot be modified. You must create a NEW string:

\`\`\`python
name = "Alice"
name = "B" + name[1:]  # Creates new string "Blice"
\`\`\`

Why? Performance and safety. Python can optimize immutable objects.

---

## 5. String Operations

### Concatenation (Joining)
\`\`\`python
first = "Hello"
second = "World"

result = first + " " + second  # "Hello World"
\`\`\`

### Repetition
\`\`\`python
line = "-" * 20  # "--------------------"
echo = "Ha" * 3   # "HaHaHa"
\`\`\`

### Length
\`\`\`python
len("Python")  # 6
len("")        # 0
\`\`\`

---

## 6. Slicing: Extracting Substrings

Slicing uses \`[start:end]\` notation:

\`\`\`python
text = "PYTHON"
#       012345

text[0:3]   # "PYT" (index 0, 1, 2 - NOT 3!)
text[2:5]   # "THO"
text[:3]    # "PYT" (start from beginning)
text[3:]    # "HON" (go to end)
text[:]     # "PYTHON" (copy entire string)
\`\`\`

With step:
\`\`\`python
text[::2]   # "PTO" (every 2nd character)
text[::-1]  # "NOHTYP" (reverse!)
\`\`\`

> [!IMPORTANT]
> The end index is **exclusive** (not included). \`[0:3]\` gives indexes 0, 1, 2.

---

## 7. Essential String Methods

Methods are actions you can perform on strings:

\`\`\`python
text = "  Hello, World!  "

# Case conversion
text.upper()      # "  HELLO, WORLD!  "
text.lower()      # "  hello, world!  "
text.title()      # "  Hello, World!  "

# Trimming whitespace
text.strip()      # "Hello, World!"
text.lstrip()     # "Hello, World!  "
text.rstrip()     # "  Hello, World!"

# Finding and replacing
text.find("World")      # 9 (index where found)
text.replace("World", "Python")  # "  Hello, Python!  "

# Checking content
text.startswith("  He")  # True
text.endswith("!")       # False (has spaces)
text.isdigit()           # False
\`\`\`

---

## 8. String Formatting (f-strings)

The modern way to build strings with variables:

\`\`\`python
name = "Alice"
age = 25
balance = 1234.567

# Basic insertion
print(f"Name: {name}")

# With expressions
print(f"Next year: {age + 1}")

# Formatting numbers
print(f"Balance: {balance:.2f} USD")  # 1234.57 USD

# Padding and alignment
print(f"|{name:>10}|")  # |     Alice| (right-align, 10 chars)
print(f"|{name:<10}|")  # |Alice     | (left-align)
print(f"|{name:^10}|")  # |  Alice   | (center)
\`\`\`

> [!TIP]
> f-strings are the preferred way in modern Python. Use them everywhere!
`
};
