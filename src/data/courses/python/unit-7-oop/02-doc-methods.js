import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Methods = {
    id: 'python-u7-doc-2-methods',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Methods & Special Methods',
    duration: '12 min read',
    content: `
# Methods & Special Methods

## Types of Methods

Python has **three types of methods** in a class:

\`\`\`text
┌────────────────────────────────────────────────────────┐
│                    METHODS                             │
├──────────────┬──────────────┬──────────────────────────┤
│   Instance   │    Class     │     Static               │
│   Method     │    Method    │     Method               │
│              │              │                          │
│ def foo(self)│ @classmethod │ @staticmethod            │
│              │ def bar(cls) │ def baz()                │
│              │              │                          │
│ Works on one │ Works on the │ Doesn't need             │
│ object       │ class itself │ class or object          │
└──────────────┴──────────────┴──────────────────────────┘
\`\`\`

---

## Instance Methods

The most common type. They operate on a **specific object**.

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    # Instance method - uses self
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited \${amount}. New balance: \${self.balance}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds!"
        self.balance -= amount
        return f"Withdrew \${amount}. New balance: \${self.balance}"

acc = BankAccount("Alice", 100)
print(acc.deposit(50))   # Deposited $50. New balance: $150
print(acc.withdraw(30))  # Withdrew $30. New balance: $120
\`\`\`

---

## Class Methods

Use \`@classmethod\` decorator. They work on the **class itself**, not instances.

\`\`\`python
class Employee:
    raise_amount = 1.04  # 4% raise
    employee_count = 0
    
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.employee_count += 1
    
    # Class method - uses cls (the class)
    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount
    
    # Alternative constructor pattern
    @classmethod
    def from_string(cls, emp_string):
        name, salary = emp_string.split('-')
        return cls(name, int(salary))

# Use class method to modify class attribute
Employee.set_raise_amount(1.05)

# Use class method as alternative constructor
emp = Employee.from_string("Bob-50000")
print(emp.name)    # Bob
print(emp.salary)  # 50000
\`\`\`

---

## Static Methods

Use \`@staticmethod\` decorator. They don't need \`self\` or \`cls\` - they're just utility functions logically grouped in the class.

\`\`\`python
class DateUtils:
    @staticmethod
    def is_leap_year(year):
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
    
    @staticmethod
    def days_in_month(month, year):
        if month in [4, 6, 9, 11]:
            return 30
        elif month == 2:
            return 29 if DateUtils.is_leap_year(year) else 28
        else:
            return 31

# Call without creating an instance
print(DateUtils.is_leap_year(2024))  # True
print(DateUtils.days_in_month(2, 2024))  # 29
\`\`\`

---

## Special Methods (Dunder Methods)

Methods with double underscores like \`__init__\` are called **dunder** (double underscore) or **magic** methods.

### \`__str__\` - Human-readable string

\`\`\`python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def __str__(self):
        return f"{self.name}: \${self.price}"

p = Product("Laptop", 999)
print(p)  # Laptop: $999
\`\`\`

### \`__repr__\` - Developer-friendly string

\`\`\`python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def __repr__(self):
        return f"Product('{self.name}', {self.price})"

p = Product("Laptop", 999)
print(repr(p))  # Product('Laptop', 999)
\`\`\`

### \`__len__\` - Custom length

\`\`\`python
class Playlist:
    def __init__(self, songs):
        self.songs = songs
    
    def __len__(self):
        return len(self.songs)

my_playlist = Playlist(["Song A", "Song B", "Song C"])
print(len(my_playlist))  # 3
\`\`\`

### \`__eq__\` - Custom equality

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

print(p1 == p2)  # True
print(p1 == p3)  # False
\`\`\`

---

## Common Dunder Methods Cheatsheet

| Method | Purpose | Example |
|:-------|:--------|:--------|
| \`__init__\` | Constructor | \`obj = MyClass()\` |
| \`__str__\` | print() output | \`print(obj)\` |
| \`__repr__\` | repr() output | \`repr(obj)\` |
| \`__len__\` | len() support | \`len(obj)\` |
| \`__eq__\` | == comparison | \`obj1 == obj2\` |
| \`__lt__\` | < comparison | \`obj1 < obj2\` |
| \`__add__\` | + operator | \`obj1 + obj2\` |
| \`__getitem__\` | [] indexing | \`obj[0]\` |
| \`__iter__\` | for loop | \`for x in obj\` |
| \`__call__\` | () callable | \`obj()\` |

---

## Key Takeaways

1. **Instance methods** - use \`self\`, work on specific objects
2. **Class methods** - use \`@classmethod\` and \`cls\`, work on the class
3. **Static methods** - use \`@staticmethod\`, utility functions
4. **Dunder methods** - customize built-in behavior (\`__str__\`, \`__len__\`, etc.)
5. **\`__str__\`** - what users see when printing
6. **\`__repr__\`** - what developers see when debugging
`
};
