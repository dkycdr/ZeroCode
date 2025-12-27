import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1TryCatch = {
    id: 'py-u9-doc-1-try',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Error Handling',
    duration: '18 min read',
    content: `
# Deep Dive: Error Handling

## 1. The Simplest Explanation

Errors happen. Users enter wrong input. Files go missing. Networks fail.

Instead of letting your program **crash**, you can **catch** errors and handle them gracefully.

---

## 2. Real World Analogy: The Safety Net

Trapeze artists have a safety net below them. They try dangerous moves, and if they fall, the net catches them.

\`try/except\` is your code's safety net:
- \`try\` = Attempt the dangerous move
- \`except\` = Catch the fall
- \`finally\` = What happens after (net or no net)

---

## 3. Basic Syntax

\`\`\`python
try:
    # Risky code that might fail
    result = 10 / 0
except:
    # What to do if it fails
    print("Something went wrong!")
\`\`\`

---

## 4. Catching Specific Errors

Don't catch everything blindly - catch specific errors:

\`\`\`python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("You can't divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")
\`\`\`

> [!IMPORTANT]
> Always catch specific exceptions first, then broader ones.

---

## 5. Getting Error Details

\`\`\`python
try:
    file = open("missing.txt")
except FileNotFoundError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")
\`\`\`

---

## 6. The \`else\` Block

Runs only if NO error occurred:

\`\`\`python
try:
    number = int(input("Enter number: "))
except ValueError:
    print("Invalid input!")
else:
    print(f"You entered: {number}")  # Only if no error
\`\`\`

---

## 7. The \`finally\` Block

Runs ALWAYS, whether error or not:

\`\`\`python
try:
    file = open("data.txt")
    data = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Cleanup complete")  # Always runs
\`\`\`

Use \`finally\` for cleanup: closing files, releasing resources.

---

## 8. Common Exception Types

| Exception | When It Occurs |
|:---|:---|
| \`ValueError\` | Wrong value (e.g., \`int("hello")\`) |
| \`TypeError\` | Wrong type (e.g., \`"text" + 5\`) |
| \`KeyError\` | Dictionary key not found |
| \`IndexError\` | List index out of range |
| \`ZeroDivisionError\` | Division by zero |
| \`FileNotFoundError\` | File doesn't exist |
| \`AttributeError\` | Object has no such attribute |

---

## 9. Raising Your Own Exceptions

\`\`\`python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    if age > 150:
        raise ValueError("Age seems unrealistic!")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)  # "Age cannot be negative!"
\`\`\`

---

## 10. Creating Custom Exceptions

\`\`\`python
class InsufficientFundsError(Exception):
    pass

class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(
                f"Cannot withdraw {amount}. Balance: {self.balance}"
            )
        self.balance -= amount

try:
    account = BankAccount(100)
    account.withdraw(150)
except InsufficientFundsError as e:
    print(e)
\`\`\`

---

## 11. Best Practices

### DO:
\`\`\`python
# Catch specific exceptions
try:
    data = json.load(file)
except json.JSONDecodeError:
    print("Invalid JSON file")
\`\`\`

### DON'T:
\`\`\`python
# Never do this - hides real errors!
try:
    risky_operation()
except:
    pass  # Silently ignoring errors
\`\`\`

> [!WARNING]
> Never use bare \`except:\` with \`pass\`. It hides bugs and makes debugging impossible!
`
};
