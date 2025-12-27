import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ArgsKwargs = {
    id: 'py-u6-doc-2-args',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: *args and **kwargs',
    duration: '15 min read',
    content: `
# Deep Dive: *args and **kwargs

## 1. The Simplest Explanation

Sometimes you want a function that accepts **any number of arguments**.

\`\`\`python
print("a")           # 1 argument
print("a", "b")      # 2 arguments
print("a", "b", "c") # 3 arguments
# All work! How?
\`\`\`

That's what \`*args\` and \`**kwargs\` do - they accept variable numbers of inputs.

---

## 2. Real World Analogy: The Pizza Order

Imagine ordering pizza:
- "I want a large pizza" - 1 topping not specified
- "I want a large pizza with pepperoni" - 1 topping
- "I want a large pizza with pepperoni, mushrooms, and olives" - 3 toppings

You can't predict how many toppings someone will order.
\`*args\` handles this flexibility!

---

## 3. *args: Variable Positional Arguments

The \`*\` collects extra positional arguments into a **tuple**:

\`\`\`python
def sum_all(*args):
    print(f"Received: {args}")
    return sum(args)

sum_all(1, 2)         # Received: (1, 2) → 3
sum_all(1, 2, 3, 4)   # Received: (1, 2, 3, 4) → 10
sum_all()             # Received: () → 0
\`\`\`

**The name \`args\` is convention.** You could use \`*numbers\` or \`*items\`.

---

## 4. **kwargs: Variable Keyword Arguments

The \`**\` collects extra keyword arguments into a **dictionary**:

\`\`\`python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="Jakarta")
# Output:
# name: Alice
# age: 25
# city: Jakarta
\`\`\`

**The name \`kwargs\` is convention.** (Keyword Arguments)

---

## 5. Combining Both

You can use regular parameters, *args, and **kwargs together:

\`\`\`python
def make_pizza(size, *toppings, **options):
    print(f"Size: {size}")
    print(f"Toppings: {toppings}")
    print(f"Options: {options}")

make_pizza("large", "pepperoni", "mushrooms", 
           crust="thin", sauce="extra")

# Size: large
# Toppings: ('pepperoni', 'mushrooms')
# Options: {'crust': 'thin', 'sauce': 'extra'}
\`\`\`

### Order Matters!
The correct order is:
1. Regular parameters
2. \`*args\`
3. Keyword-only parameters
4. \`**kwargs\`

---

## 6. Unpacking Arguments

Use \`*\` and \`**\` to **unpack** lists/dicts when calling functions:

\`\`\`python
def add(a, b, c):
    return a + b + c

# Unpacking a list
numbers = [1, 2, 3]
add(*numbers)  # Same as add(1, 2, 3) → 6

# Unpacking a dictionary
data = {"a": 1, "b": 2, "c": 3}
add(**data)    # Same as add(a=1, b=2, c=3) → 6
\`\`\`

---

## 7. Practical Examples

### Logger Function
\`\`\`python
def log(message, *args, level="INFO"):
    formatted = message % args if args else message
    print(f"[{level}] {formatted}")

log("Hello")                    # [INFO] Hello
log("User %s logged in", "Alice")  # [INFO] User Alice logged in
log("Error!", level="ERROR")    # [ERROR] Error!
\`\`\`

### Function Wrapper (Decorators)
\`\`\`python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before call")
        result = func(*args, **kwargs)  # Pass all args through
        print("After call")
        return result
    return wrapper
\`\`\`

### Building Dictionaries
\`\`\`python
def create_user(name, **extras):
    return {"name": name, **extras}

create_user("Alice", age=25, role="admin")
# {"name": "Alice", "age": 25, "role": "admin"}
\`\`\`

---

## 8. Common Gotchas

### Don't Forget to Unpack!
\`\`\`python
numbers = [1, 2, 3]

# Wrong - passes the list as ONE argument
some_function(numbers)

# Right - unpacks into THREE arguments
some_function(*numbers)
\`\`\`

### Keyword Arguments Must Come Last
\`\`\`python
# Wrong
func(name="Alice", 25)  # SyntaxError!

# Right
func(25, name="Alice")
\`\`\`
`
};
