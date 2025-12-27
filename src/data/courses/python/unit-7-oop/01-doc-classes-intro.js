import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ClassesIntro = {
    id: 'python-u7-doc-1-classes',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Classes & Objects',
    duration: '15 min read',
    content: `
# Classes & Objects in Python

## Why OOP?

Until now, you've written **procedural code** - functions that operate on data. Object-Oriented Programming (OOP) lets you bundle **data and behavior** together.

\`\`\`python
# Procedural Approach
dog_name = "Buddy"
dog_age = 3
dog_breed = "Golden Retriever"

def bark(name):
    print(f"{name} says: Woof!")

bark(dog_name)  # Buddy says: Woof!
\`\`\`

**Problem:** What if you have 100 dogs? You'd need 300 variables!

\`\`\`python
# OOP Approach
class Dog:
    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed
    
    def bark(self):
        print(f"{self.name} says: Woof!")

buddy = Dog("Buddy", 3, "Golden Retriever")
buddy.bark()  # Buddy says: Woof!
\`\`\`

---

## The Blueprint Analogy

\`\`\`text
┌─────────────────────────────────┐
│            CLASS                │ ← Blueprint (template)
│   (Dog)                         │
│   - name                        │
│   - age                         │
│   - bark()                      │
└─────────────────────────────────┘
              │
              │ Creates
              ▼
┌─────────┐  ┌─────────┐  ┌─────────┐
│ OBJECT  │  │ OBJECT  │  │ OBJECT  │
│ (buddy) │  │ (max)   │  │ (luna)  │
│ name:   │  │ name:   │  │ name:   │
│ "Buddy" │  │ "Max"   │  │ "Luna"  │
└─────────┘  └─────────┘  └─────────┘
              ← Instances (real things)
\`\`\`

- **Class** = Recipe / Blueprint / Template
- **Object** = The actual cake / house / instance created from the blueprint

---

## Defining a Class

\`\`\`python
class Person:
    # The __init__ method runs when you create an object
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age    # Instance attribute
    
    # Methods are functions inside a class
    def greet(self):
        return f"Hi, I'm {self.name}!"
    
    def have_birthday(self):
        self.age += 1
        print(f"Happy birthday! {self.name} is now {self.age}")
\`\`\`

### Key Components:

| Component | Purpose |
|:----------|:--------|
| \`class Person:\` | Defines a new class |
| \`__init__(self, ...)\` | Constructor - runs when object is created |
| \`self\` | Reference to the current object instance |
| \`self.name\` | Instance attribute - unique to each object |
| \`def greet(self):\` | Instance method - action the object can take |

---

## Creating Objects (Instantiation)

\`\`\`python
# Create instances
alice = Person("Alice", 30)
bob = Person("Bob", 25)

# Each object has its own data
print(alice.name)  # Alice
print(bob.name)    # Bob

# Call methods on objects
print(alice.greet())  # Hi, I'm Alice!
alice.have_birthday()  # Happy birthday! Alice is now 31
\`\`\`

---

## What is \`self\`?

\`self\` is **not a keyword** - it's a **convention**. It refers to the current object.

\`\`\`python
class Car:
    def __init__(self, brand):
        self.brand = brand
    
    def describe(self):
        # self.brand refers to THIS car's brand
        print(f"This is a {self.brand}")

tesla = Car("Tesla")
toyota = Car("Toyota")

tesla.describe()   # This is a Tesla
toyota.describe()  # This is a Toyota
\`\`\`

When you call \`tesla.describe()\`, Python automatically passes \`tesla\` as \`self\`.

---

## Instance vs Class Attributes

\`\`\`python
class Student:
    # Class attribute - shared by ALL students
    school = "ZeroCode Academy"
    
    def __init__(self, name):
        # Instance attribute - unique to each student
        self.name = name

s1 = Student("Alice")
s2 = Student("Bob")

print(s1.school)  # ZeroCode Academy
print(s2.school)  # ZeroCode Academy (same)

print(s1.name)    # Alice
print(s2.name)    # Bob (different)

# Change class attribute - affects ALL
Student.school = "New School"
print(s1.school)  # New School
print(s2.school)  # New School
\`\`\`

---

## Key Takeaways

1. **Class = Blueprint** - defines structure and behavior
2. **Object = Instance** - actual thing created from class
3. **\`__init__\`** - constructor, runs when creating object
4. **\`self\`** - reference to current instance
5. **Instance attributes** - unique per object (\`self.name\`)
6. **Class attributes** - shared across all instances
7. **Methods** - functions inside a class that use \`self\`
`
};
