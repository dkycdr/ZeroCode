import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Numbers = {
    id: 'py-u1-doc-4-numbers',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Numbers & Math',
    duration: '15 min read',
    content: `
# Deep Dive: Numbers & Math

## 1. The Simplest Explanation

Python handles numbers exactly like a calculator - but way more powerful.

Two main types:
- **Integers (int)**: Whole numbers like 42, -10, 0
- **Floats (float)**: Decimal numbers like 3.14, -0.5, 2.0

---

## 2. Real World Analogy: Cash vs Measurements

Think about how we use numbers in real life:

**Integers = Counting things**
- 5 apples (you can't have 5.5 apples)
- 3 children
- 100 users

**Floats = Measuring things**
- 1.75 meters tall
- $19.99 price
- 3.14159 (pi)

Python treats these differently because they serve different purposes.

---

## 3. Arithmetic Operators

| Operator | Name | Example | Result |
|:---|:---|:---|:---|
| \`+\` | Addition | \`5 + 3\` | 8 |
| \`-\` | Subtraction | \`5 - 3\` | 2 |
| \`*\` | Multiplication | \`5 * 3\` | 15 |
| \`/\` | Division | \`5 / 2\` | 2.5 |
| \`//\` | Floor Division | \`5 // 2\` | 2 |
| \`%\` | Modulo | \`5 % 2\` | 1 |
| \`**\` | Power | \`2 ** 3\` | 8 |

---

## 4. Division: The Three Types

This trips up many beginners:

\`\`\`python
# Regular division (always float)
10 / 3   # 3.3333...
10 / 2   # 5.0  (still a float!)

# Floor division (round down to int)
10 // 3  # 3
-10 // 3 # -4 (rounded DOWN, not toward zero)

# Modulo (remainder)
10 % 3   # 1 (10 = 3*3 + 1)
\`\`\`

> [!IMPORTANT]
> Regular division \`/\` ALWAYS returns a float, even for \`10 / 2\`!

---

## 5. Operator Precedence (PEMDAS)

Python follows mathematical order of operations:

\`\`\`python
result = 2 + 3 * 4    # 14 (not 20!)
result = (2 + 3) * 4  # 20 (parentheses first)
\`\`\`

**Order:** Parentheses → Exponents → Multiplication/Division → Addition/Subtraction

When in doubt, use parentheses!

---

## 6. Compound Assignment Operators

Shortcuts for updating variables:

\`\`\`python
score = 10

score += 5   # Same as: score = score + 5  → 15
score -= 3   # Same as: score = score - 3  → 12
score *= 2   # Same as: score = score * 2  → 24
score /= 4   # Same as: score = score / 4  → 6.0
\`\`\`

These are cleaner and more readable.

---

## 7. The math Module

Python has a built-in math library with advanced functions:

\`\`\`python
import math

# Constants
math.pi     # 3.14159...
math.e      # 2.71828...

# Common functions
math.sqrt(16)    # 4.0 (square root)
math.pow(2, 8)   # 256.0 (power)
math.abs(-5)     # 5 (absolute value) - also built-in as abs()

# Rounding
math.floor(3.7)  # 3 (round down)
math.ceil(3.2)   # 4 (round up)
round(3.5)       # 4 (built-in, rounds to nearest)

# Trigonometry
math.sin(math.pi / 2)  # 1.0
math.cos(0)            # 1.0
\`\`\`

---

## 8. Number Formatting

Making numbers readable:

\`\`\`python
# Large numbers with underscores (Python 3.6+)
population = 7_900_000_000  # Same as 7900000000

# Formatting in f-strings
price = 1234.567

f"{price:.2f}"      # "1234.57" (2 decimal places)
f"{price:,.2f}"     # "1,234.57" (with comma separator)
f"{price:>10.2f}"   # "   1234.57" (right-aligned, 10 chars)

# Percentage
rate = 0.156
f"{rate:.1%}"       # "15.6%"
\`\`\`

---

## 9. Common Gotchas

### Float Precision Issues
\`\`\`python
0.1 + 0.2 == 0.3  # False!
0.1 + 0.2         # 0.30000000000000004
\`\`\`

This is a fundamental computer issue, not Python. For precise decimals (money!), use the \`decimal\` module.

### Integer Division by Zero
\`\`\`python
10 / 0   # ZeroDivisionError!
\`\`\`

Always check before dividing:
\`\`\`python
if divisor != 0:
    result = numerator / divisor
\`\`\`
`
};
