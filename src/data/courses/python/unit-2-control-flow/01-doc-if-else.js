import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1IfElse = {
    id: 'py-u2-doc-1-if-else',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: If-Else Statements',
    duration: '15 min read',
    content: `
# Deep Dive: If-Else Statements

## 1. The Simplest Explanation

Every day, you make decisions:
- **If** it's raining, take an umbrella.
- **If** you're hungry, eat lunch.
- **If** the light is red, stop.

Programs need to make decisions too. The \`if\` statement is how we teach computers to choose.

---

## 2. Real World Analogy: The Bouncer at the Club

Imagine a bouncer at an exclusive club:

\`\`\`
IF you are 21 or older:
    Let them in
ELSE:
    Turn them away
\`\`\`

That's exactly how Python's \`if\` statement works:

\`\`\`python
if age >= 21:
    print("Welcome to the club!")
else:
    print("Sorry, you're too young.")
\`\`\`

The bouncer checks a **condition** (age >= 21) and takes different **actions** based on the result.

---

## 3. The Anatomy of an If Statement

\`\`\`python
if condition:
    # code that runs if condition is True
\`\`\`

Three critical parts:
1. **The keyword \`if\`** - starts the decision
2. **The condition** - something that evaluates to True or False
3. **The colon \`:\`** - NEVER forget this!
4. **Indented code** - what happens if condition is True

> [!WARNING]
> The colon is required. \`if age > 18\` without \`:\` will crash your program.

---

## 4. Adding Alternatives with \`else\`

What if the condition is False? Use \`else\`:

\`\`\`python
temperature = 35

if temperature > 30:
    print("It's hot! Stay hydrated.")
else:
    print("Nice weather for a walk.")
\`\`\`

Think of \`else\` as "otherwise" or "in all other cases".

---

## 5. Multiple Conditions with \`elif\`

Real life has more than two options. Use \`elif\` (else-if):

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
\`\`\`

**How Python reads this:**
1. Is score >= 90? No, score is 85.
2. Is score >= 80? Yes! Assign "B" and STOP.
3. Python never checks the remaining conditions.

> [!IMPORTANT]
> Order matters! Python stops at the first True condition. Put your most specific cases first.

---

## 6. The Indentation Rule

Python uses **indentation** (spaces) to define what code belongs to which block:

\`\`\`python
if weather == "rainy":
    print("Take an umbrella")    # Inside the if
    print("Wear a jacket")       # Still inside the if
print("Have a nice day")         # Outside - always runs
\`\`\`

Convention: Use **4 spaces** for each indentation level. Never mix tabs and spaces.

---

## 7. Nested If Statements

You can put \`if\` inside \`if\` for complex decisions:

\`\`\`python
has_ticket = True
age = 15

if has_ticket:
    if age >= 18:
        print("You can watch this R-rated movie.")
    else:
        print("Sorry, you're too young for this film.")
else:
    print("Please buy a ticket first.")
\`\`\`

But be careful! Too much nesting makes code hard to read. Try to keep it to 2-3 levels max.

---

## 8. Common Patterns in Real Code

### Pattern 1: Guard Clause (Exit Early)
\`\`\`python
def process_user(user):
    if user is None:
        return  # Exit immediately
    
    # Continue with processing...
\`\`\`

### Pattern 2: Default Value
\`\`\`python
name = user_input if user_input else "Guest"
\`\`\`

### Pattern 3: Range Check
\`\`\`python
if 0 <= score <= 100:
    print("Valid score")
\`\`\`
`
};
