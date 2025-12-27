import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Encapsulation = {
    id: 'python-u7-doc-4-encapsulation',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Encapsulation & Properties',
    duration: '12 min read',
    content: `
# Encapsulation & Properties

## What is Encapsulation?

Encapsulation is **hiding internal details** and only exposing what's necessary. It protects data from accidental modification.

\`\`\`text
┌──────────────────────────────────────┐
│            BankAccount               │
│  ┌────────────────────────────────┐  │
│  │  PRIVATE (Hidden)              │  │
│  │  - _balance                    │  │
│  │  - _account_number            │  │
│  └────────────────────────────────┘  │
│                                      │
│  PUBLIC (Accessible)                 │
│  + deposit()                         │
│  + withdraw()                        │
│  + get_balance()                     │
└──────────────────────────────────────┘
\`\`\`

---

## Python's Naming Conventions

Python doesn't have true private variables, but uses **naming conventions**:

| Prefix | Convention | Meaning |
|:-------|:-----------|:--------|
| \`name\` | Public | Accessible everywhere |
| \`_name\` | Protected | "Please don't access directly" |
| \`__name\` | Private | Name mangling (harder to access) |

\`\`\`python
class Example:
    def __init__(self):
        self.public = "Anyone can access"
        self._protected = "Please don't access directly"
        self.__private = "Harder to access"

obj = Example()
print(obj.public)      # ✅ Works
print(obj._protected)  # ✅ Works (but discouraged)
print(obj.__private)   # ❌ AttributeError!
print(obj._Example__private)  # ✅ Works (name mangling)
\`\`\`

---

## Why Encapsulate?

\`\`\`python
# BAD: Direct access allows invalid states
class BankAccount:
    def __init__(self, balance):
        self.balance = balance

acc = BankAccount(100)
acc.balance = -500  # ❌ No validation!
\`\`\`

\`\`\`python
# GOOD: Controlled access with methods
class BankAccount:
    def __init__(self, balance):
        self._balance = balance
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self._balance

acc = BankAccount(100)
acc.withdraw(50)        # ✅ Controlled
print(acc.get_balance()) # 50
\`\`\`

---

## Properties: The Pythonic Way

Instead of \`get_balance()\` and \`set_balance()\`, use **properties**:

\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        """Getter - accessed like attribute"""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Setter - validates on assignment"""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        """Read-only computed property"""
        return 3.14159 * self._radius ** 2

# Usage feels like regular attributes
c = Circle(5)
print(c.radius)  # 5 (uses getter)
print(c.area)    # 78.53975 (computed)

c.radius = 10    # Uses setter with validation
print(c.area)    # 314.159

c.radius = -1    # ❌ ValueError: Radius cannot be negative
\`\`\`

---

## Property Patterns

### Read-Only Property

\`\`\`python
class Employee:
    def __init__(self, first, last):
        self.first = first
        self.last = last
    
    @property
    def full_name(self):
        return f"{self.first} {self.last}"
    
    # No setter = read-only

emp = Employee("Alice", "Smith")
print(emp.full_name)   # Alice Smith
emp.full_name = "Bob"  # ❌ AttributeError: can't set attribute
\`\`\`

### Validated Property

\`\`\`python
class Person:
    def __init__(self, age):
        self.age = age  # Uses the setter!
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if not isinstance(value, int):
            raise TypeError("Age must be an integer")
        if value < 0 or value > 150:
            raise ValueError("Age must be between 0 and 150")
        self._age = value

p = Person(25)
p.age = 30     # ✅ Valid
p.age = -5     # ❌ ValueError
p.age = "old"  # ❌ TypeError
\`\`\`

### Computed Property

\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    @property
    def area(self):
        return self.width * self.height
    
    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

rect = Rectangle(4, 5)
print(rect.area)       # 20
print(rect.perimeter)  # 18
\`\`\`

---

## Key Takeaways

1. **Encapsulation** - hide internal data, expose controlled interface
2. **\`_single_underscore\`** - convention for "protected" (don't touch)
3. **\`__double_underscore\`** - name mangling (harder to access)
4. **\`@property\`** - getter, access like attribute
5. **\`@name.setter\`** - setter with validation
6. **Read-only properties** - computed values, no setter
7. **Properties > getter/setter methods** - more Pythonic
`
};
