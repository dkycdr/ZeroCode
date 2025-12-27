import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2WhileLoop = {
    id: 'py-u3-doc-2-while',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: While Loops',
    duration: '15 min read',
    content: `
# Deep Dive: While Loops

## 1. The Simplest Explanation

A \`for\` loop says: "Do this for EACH item."
A \`while\` loop says: "Keep doing this UNTIL something changes."

The key difference: **you don't know beforehand how many times it will run.**

---

## 2. Real World Analogy: The Doctor's Waiting Room

You're at the doctor's office:
- **For loop**: "Call the next 5 patients" (exactly 5)
- **While loop**: "Keep calling patients WHILE there are people waiting" (unknown count)

With a while loop, you repeat UNTIL a condition becomes false.

---

## 3. The Anatomy of a While Loop

\`\`\`python
while condition:
    # do something
    # update something so condition eventually becomes False
\`\`\`

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1  # Without this, infinite loop!
\`\`\`

> [!WARNING]
> If the condition NEVER becomes False, you get an **infinite loop** - your program runs forever!

---

## 4. When to Use While vs For

| Use For Loop | Use While Loop |
|:---|:---|
| Iterating through a collection | Unknown number of iterations |
| Known number of repetitions | Waiting for something to happen |
| Cleaner, more Pythonic | More flexible but riskier |

\`\`\`python
# FOR - I know exactly what I'm iterating
for name in ["Alice", "Bob", "Charlie"]:
    print(name)

# WHILE - I don't know when user will say 'quit'
while user_input != "quit":
    user_input = input("Enter command: ")
\`\`\`

---

## 5. Break: Emergency Exit

\`break\` immediately exits the loop:

\`\`\`python
while True:
    command = input("Enter command: ")
    if command == "quit":
        break  # Exit the loop NOW
    print(f"Running: {command}")

print("Goodbye!")
\`\`\`

This pattern is common: infinite loop + break when condition is met.

---

## 6. Continue: Skip to Next

\`continue\` skips the rest of the current iteration:

\`\`\`python
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:  # If even
        continue  # Skip printing
    print(count)  # Only prints odd: 1, 3, 5, 7, 9
\`\`\`

---

## 7. The else Clause (Unusual but Useful)

Python has a unique feature: \`else\` after a loop runs IF the loop completes without \`break\`:

\`\`\`python
# Search for a number
target = 7
i = 0
while i < 10:
    if i == target:
        print("Found it!")
        break
    i += 1
else:
    print("Not found")  # Only if loop completes
\`\`\`

---

## 8. Common Patterns

### Pattern 1: Input Validation
\`\`\`python
while True:
    age = input("Enter age: ")
    if age.isdigit() and int(age) >= 0:
        break
    print("Invalid! Enter a positive number.")
\`\`\`

### Pattern 2: Countdown
\`\`\`python
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Liftoff! 🚀")
\`\`\`

### Pattern 3: Game Loop
\`\`\`python
game_running = True
while game_running:
    action = get_player_action()
    update_game_state(action)
    render_screen()
    if player_dead or game_won:
        game_running = False
\`\`\`

---

## 9. Avoiding Infinite Loops

Common causes:
1. **Forgetting to update** the condition variable
2. **Logic errors** that never make condition False

\`\`\`python
# ❌ Infinite loop!
i = 0
while i < 5:
    print(i)
    # Forgot i += 1

# ✅ Fixed
i = 0
while i < 5:
    print(i)
    i += 1
\`\`\`

> [!TIP]
> If your program seems frozen, it's probably an infinite loop. Press Ctrl+C to stop it.
`
};
