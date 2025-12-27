import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1DefiningFunctions = {
    id: 'py-u6-doc-1-defining',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Functions',
    duration: '18 min read',
    content: `
# Deep Dive: Functions

## 1. The Simplest Explanation

Imagine you order coffee every morning:
1. Walk to the counter
2. Say "medium latte please"
3. Pay
4. Wait
5. Get coffee

Do you think through ALL these steps every time? No! You just think "get coffee."

That's what a **function** is - a name for a sequence of steps you can reuse.

---

## 2. Real World Analogy: The Recipe Card

A function is like a **recipe card**:

- **Recipe name** = Function name
- **Ingredients** = Parameters (inputs)
- **Instructions** = The code inside
- **Final dish** = Return value (output)

\`\`\`python
# Recipe: Make a greeting
def make_greeting(name):           # Ingredients: name
    message = f"Hello, {name}!"    # Instructions
    return message                  # Final dish

# Use the recipe
result = make_greeting("Alice")    # result = "Hello, Alice!"
\`\`\`

---

## 3. Why Functions Matter

### Without Functions (Bad):
\`\`\`python
# Calculate area of rectangle 1
width1 = 10
height1 = 5
area1 = width1 * height1

# Calculate area of rectangle 2
width2 = 8
height2 = 3
area2 = width2 * height2

# What if you need 100 rectangles? Copy-paste 100 times?
\`\`\`

### With Functions (Good):
\`\`\`python
def calculate_area(width, height):
    return width * height

area1 = calculate_area(10, 5)
area2 = calculate_area(8, 3)
# Easy! Reuse infinitely.
\`\`\`

> [!TIP]
> **DRY Principle**: Don't Repeat Yourself. If you copy-paste code, make it a function.

---

## 4. The Anatomy of a Function

\`\`\`python
def greet(name, greeting="Hello"):
    """Says hello to someone."""
    message = f"{greeting}, {name}!"
    return message
\`\`\`

| Part | Purpose |
|:---|:---|
| \`def\` | Keyword to define a function |
| \`greet\` | Function name (use snake_case) |
| \`name\` | Required parameter |
| \`greeting="Hello"\` | Optional parameter with default |
| \`"""..."""\` | Docstring (documentation) |
| \`return\` | What the function gives back |

---

## 5. Parameters vs Arguments

People mix these up. Clear it now:

- **Parameter**: The variable NAME in the function definition
- **Argument**: The actual VALUE you pass when calling

\`\`\`python
def greet(name):      # 'name' is the PARAMETER
    print(f"Hi {name}")

greet("Alice")        # "Alice" is the ARGUMENT
\`\`\`

---

## 6. Default Parameters

Make parameters optional by giving them defaults:

\`\`\`python
def power(base, exponent=2):
    return base ** exponent

power(5)      # 5² = 25 (uses default)
power(5, 3)   # 5³ = 125 (overrides default)
\`\`\`

> [!WARNING]
> Default parameters must come AFTER required parameters!
> \`def func(a=1, b)\` is INVALID.

---

## 7. Return Values

Functions can:
- Return nothing (implicitly returns \`None\`)
- Return one value
- Return multiple values (as a tuple)

\`\`\`python
# Returns nothing (None)
def say_hi():
    print("Hi!")

# Returns one value
def square(n):
    return n * n

# Returns multiple values
def get_name_and_age():
    return "Alice", 25

name, age = get_name_and_age()
\`\`\`

---

## 8. Scope: Where Variables Live

Variables inside functions are **local** - they don't exist outside:

\`\`\`python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()
print(x)  # ERROR! x doesn't exist here
\`\`\`

Variables outside are **global** - visible everywhere:

\`\`\`python
PI = 3.14159  # Global

def circle_area(radius):
    return PI * radius * radius  # Can access PI

print(circle_area(5))  # Works!
\`\`\`

---

## 9. Real-World Function Design

### Good Functions:
- Do ONE thing (single responsibility)
- Have a clear, descriptive name
- Are reasonably short (under 20 lines usually)

\`\`\`python
# Good: Clear purpose
def calculate_tax(price, rate=0.1):
    return price * rate

# Bad: Does too many things
def process_everything(data, user, settings, mode):
    # 100 lines of mixed logic...
    pass
\`\`\`

> [!IMPORTANT]
> If you can't describe what a function does in one sentence, it's probably doing too much.
`
};
