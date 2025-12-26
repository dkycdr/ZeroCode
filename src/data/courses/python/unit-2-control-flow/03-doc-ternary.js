import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Ternary = {
    id: 'py-u2-doc-3-ternary',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Ternary & Match Statements',
    duration: '12 min read',
    content: `
# Deep Dive: Ternary & Match Statements

## 1. The Simplest Explanation

Sometimes you need a quick one-liner decision:
- "If I have money, buy coffee, otherwise get water"

That's what the **ternary operator** does - it's an if-else squeezed into one line.

---

## 2. Real World Analogy: The Quick Decision

Imagine you're at a restaurant. The waiter asks:
"Do you want soup or salad?"

Your brain makes an instant decision based on a condition.
That's a ternary operation!

---

## 3. Ternary Operator Syntax

\`\`\`python
# Traditional if-else (5 lines)
if condition:
    result = value_if_true
else:
    result = value_if_false

# Ternary (1 line!)
result = value_if_true if condition else value_if_false
\`\`\`

**Read it like English**: "Give me THIS if CONDITION, else give me THAT"

---

## 4. Practical Examples

\`\`\`python
# Determine if adult
age = 20
status = "Adult" if age >= 18 else "Minor"
# status = "Adult"

# Choose a greeting based on time
hour = 14
greeting = "Good morning" if hour < 12 else "Good afternoon"
# greeting = "Good afternoon"

# Handle empty values
name = ""
display_name = name if name else "Anonymous"
# display_name = "Anonymous"

# Inline print
print("Even" if num % 2 == 0 else "Odd")
\`\`\`

---

## 5. When to Use (and When Not To)

### ✅ Good Use Cases:
- Simple value assignment
- Default values
- Short, readable conditions

### ❌ Avoid When:
- Complex conditions
- Multiple actions needed
- Nested ternaries (hard to read!)

\`\`\`python
# ❌ Don't do this - unreadable!
result = "A" if x > 90 else "B" if x > 80 else "C" if x > 70 else "F"

# ✅ Use traditional if-elif instead
if x > 90:
    result = "A"
elif x > 80:
    result = "B"
...
\`\`\`

---

## 6. Match Statement (Python 3.10+)

Python 3.10 introduced **structural pattern matching** - like a super-powered switch statement.

\`\`\`python
command = "start"

match command:
    case "start":
        print("Starting the system...")
    case "stop":
        print("Shutting down...")
    case "restart":
        print("Restarting...")
    case _:
        print("Unknown command")
\`\`\`

The \`_\` is the wildcard - it matches anything (like \`else\`).

---

## 7. Match with Patterns

Match can do more than simple comparison:

\`\`\`python
# Match with values
def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Server Error"
        case _:
            return "Unknown"

# Match with conditions (guard clauses)
def categorize_age(age):
    match age:
        case _ if age < 0:
            return "Invalid"
        case _ if age < 18:
            return "Minor"
        case _ if age < 65:
            return "Adult"
        case _:
            return "Senior"
\`\`\`

---

## 8. Match vs If-Elif

| Feature | Match | If-Elif |
|:---|:---|:---|
| Complex patterns | ✅ Excellent | ❌ Limited |
| Readability | Better for many cases | Better for few cases |
| Python version | 3.10+ only | All versions |

> [!NOTE]
> Match is powerful but new. Most code you'll see still uses if-elif. Learn both!
`
};
