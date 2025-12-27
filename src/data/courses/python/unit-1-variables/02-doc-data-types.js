import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2DataTypes = {
    id: 'py-u1-doc-2-data-types',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Data Types',
    duration: '18 min read',
    content: `
# Deep Dive: Data Types

## 1. The Simplest Explanation

Just like in real life, data comes in different **forms**:.

- A person's **name** is text: "Alice"
- Their **age** is a number: 25
- Whether they're **logged in** is yes/no: True
- Their **bank balance** might have decimals: 1250.50

Python automatically recognizes these forms. Each form is a **data type**.

---

## 2. Real World Analogy: Different Containers

Think of data types like specialized containers in a kitchen:

| Container | Use Case | Python Type |
|:---|:---|:---|
| **Jar** (Text container) | Words, names, sentences | \`str\` (string) |
| **Measuring Cup** (Numbers with decimals) | Precise amounts | \`float\` |
| **Counting Beads** (Whole numbers) | Counting items | \`int\` (integer) |
| **Light Switch** (On/Off) | Yes/No decisions | \`bool\` (boolean) |

You wouldn't store soup in a light switch. Similarly, you shouldn't store numbers as text unless you have a reason.

---

## 3. The Four Fundamental Types

### Integer (\`int\`) - Whole Numbers

For counting, indexing, and whole quantities:
\`\`\`python
age = 25
year = 2024
player_count = 4
temperature = -5  # Negative works too!
\`\`\`

**Fun Fact**: Python integers have NO size limit. You can store numbers bigger than the universe!
\`\`\`python
huge = 999999999999999999999999999999  # Totally valid
\`\`\`

### Float (\`float\`) - Decimal Numbers

For measurements, money, scientific calculations:
\`\`\`python
price = 19.99
height = 1.75
pi = 3.14159
\`\`\`

> [!WARNING]
> **Float Trap**: \`0.1 + 0.2\` does NOT equal \`0.3\` in Python!
> It equals \`0.30000000000000004\`. This is a fundamental computer science issue, not a Python bug.

### String (\`str\`) - Text

For names, messages, any textual data:
\`\`\`python
name = "Alice"
message = 'Welcome to ZeroCode!'
quote = "She said 'hello'"  # Mixing quotes
\`\`\`

Strings are **immutable** - you can't change individual letters. You must create a new string.

### Boolean (\`bool\`) - True/False

For decisions, flags, conditions:
\`\`\`python
is_logged_in = True
has_permission = False
is_adult = age >= 18  # True if age is 18+
\`\`\`

> [!IMPORTANT]
> Note the capital T and F: \`True\`, not \`true\`. Python is case-sensitive!

---

## 4. The Special Type: None

\`None\` represents "nothing" or "no value":

\`\`\`python
result = None  # We don't have a result yet

def find_user(id):
    if id not in database:
        return None  # User not found
\`\`\`

It's like an empty folder - the folder exists, but there's nothing inside.

---

## 5. Checking Types with \`type()\`

Curious what type something is? Ask Python:
\`\`\`python
print(type("hello"))   # <class 'str'>
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type(True))      # <class 'bool'>
\`\`\`

---

## 6. Type Conversion (Casting)

Sometimes you need to convert between types:

\`\`\`python
# String to Integer
user_input = "42"       # This is text
number = int(user_input)  # Now it's a number: 42

# Integer to String
age = 25
message = "I am " + str(age) + " years old"

# String to Float
price = float("19.99")  # 19.99

# Anything to Boolean
bool(0)     # False
bool(1)     # True
bool("")    # False (empty string)
bool("hi")  # True (non-empty string)
\`\`\`

---

## 7. Truthy and Falsy Values

In Python, EVERYTHING can be evaluated as True or False:

**Falsy (evaluates to False):**
- \`False\` (obviously)
- \`0\` and \`0.0\` (zero)
- \`""\` (empty string)
- \`[]\` (empty list)
- \`None\`

**Truthy (evaluates to True):**
- Everything else!

\`\`\`python
# Real-world usage
name = input("Enter name: ")

if name:  # Checks if name is not empty
    print(f"Hello, {name}!")
else:
    print("Hello, stranger!")
\`\`\`

This is a very Pythonic pattern - checking if something "has value" without explicitly comparing.
`
};
