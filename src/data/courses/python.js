// Python Basics - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const pythonCourse = {
    id: 'python',
    title: 'Python Dasar',
    description: 'Learn Python programming for automation, data processing, and scripting.',
    
    units: [
        {
            id: 'python-unit-1',
            title: 'Introduction to Python',
            description: 'Understand Python and write your first code',
            items: [
                {
                    id: 'python-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Python?',
                    duration: '5 min read',
                    content: `
# What is Python?

**Python** is a high-level, versatile programming language known for its simplicity and readability.

## Why Python?

| Feature | Benefit |
|---------|---------|
| **Easy to Learn** | Simple, English-like syntax |
| **Versatile** | Web, data science, AI, automation |
| **Huge Community** | Millions of developers worldwide |
| **Rich Libraries** | Packages for everything |
| **Cross-Platform** | Windows, Mac, Linux |

## Python vs JavaScript

| Python | JavaScript |
|--------|------------|
| General purpose | Web-focused |
| Indentation-based | Braces-based |
| Backend & scripts | Frontend & backend |
| Data science leader | Web development leader |

## What Can Python Do?

- 🤖 **AI & Machine Learning** (TensorFlow, PyTorch)
- 📊 **Data Analysis** (Pandas, NumPy)
- 🌐 **Web Development** (Django, Flask)
- 🔧 **Automation** (Scripts, bots)
- 🎮 **Game Development** (Pygame)
- 📱 **Desktop Apps** (Tkinter, PyQt)

## Who Uses Python?

- Google, Netflix, Spotify
- NASA, CERN
- Instagram, Dropbox, Reddit
- Every data scientist and AI researcher

> 💡 **Fun Fact**: Python is named after Monty Python, not the snake!
                    `
                },
                {
                    id: 'python-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Python Basics',
                    duration: '20 min',
                    content: `
# Python Basics

## Print Output

\`\`\`python
print("Hello, World!")
print("Hello", "ZeroCode")  # Multiple arguments
print(42)
print(3.14)
\`\`\`

## Variables

No need to declare type!

\`\`\`python
name = "Alice"
age = 21
gpa = 3.8
is_student = True

print(name)
print(f"My name is {name}")  # f-string
\`\`\`

## Data Types

\`\`\`python
# String
text = "Hello"
multiline = """This is
a multiline
string"""

# Numbers
integer = 42
floating = 3.14

# Boolean
active = True
inactive = False

# List (like array)
fruits = ["apple", "banana", "orange"]

# Dictionary (like object)
student = {
    "name": "Alice",
    "age": 21,
    "major": "SE"
}

# Tuple (immutable list)
coordinates = (10, 20)

# None (like null)
empty = None
\`\`\`

## Comments

\`\`\`python
# Single line comment

"""
Multi-line comment
or docstring
"""
\`\`\`

## Input

\`\`\`python
name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Convert to int
\`\`\`

---

## Your Mission
Create Python variables and use print statements.
                    `,
                    tasks: [
                        { id: 1, description: 'In main.py, write: print("Hello, ZeroCode!") to output to console', completed: false, regex: /print\s*\(/ },
                        { id: 2, description: 'In main.py, create variable: name = "Alice" or age = 21 (no let/const needed)', completed: false, regex: /\w+\s*=\s*["'\d]/ },
                        { id: 3, description: 'In main.py, use f-string: print(f"Hello {name}!") to embed variables', completed: false, regex: /f["'][^"']*\{[^}]+\}/ },
                        { id: 4, description: 'In main.py, create list: courses = ["HTML", "CSS", "Python"]', completed: false, regex: /\w+\s*=\s*\[/ }
                    ],
                    files: [
                        { name: 'main.py', language: 'python', content: `// Python Basics Practice

// 1. Print Hello ZeroCode


// 2. Create variables


// 3. Use f-string


// 4. Create a list


// 5. Print the list

` }
                    ]
                },
                {
                    id: 'python-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Python Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How do you print in Python?',
                            options: ['console.log()', 'echo', 'print()', 'printf()'],
                            correctIndex: 2,
                            explanation: 'Python uses print() function to output to console.'
                        },
                        {
                            id: 'q2',
                            question: 'What is an f-string?',
                            options: [
                                'A function string',
                                'A formatted string with variables',
                                'A file string',
                                'A float string'
                            ],
                            correctIndex: 1,
                            explanation: 'f-strings (f"text {variable}") allow embedding variables in strings.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'python-unit-2',
            title: 'Control Flow & Functions',
            description: 'Learn conditionals, loops, and functions',
            items: [
                {
                    id: 'python-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Conditionals & Loops',
                    duration: '25 min',
                    content: `
# Conditionals & Loops

## If/Elif/Else

Python uses **indentation** instead of braces!

\`\`\`python
grade = 85

if grade >= 85:
    print("A")
elif grade >= 70:
    print("B")
elif grade >= 55:
    print("C")
else:
    print("F")
\`\`\`

## Comparison Operators

\`\`\`python
x == y    # Equal
x != y    # Not equal
x > y     # Greater than
x < y     # Less than
x >= y    # Greater or equal
x <= y    # Less or equal
\`\`\`

## Logical Operators

\`\`\`python
# and, or, not (not &&, ||, !)
if age >= 18 and has_id:
    print("Can enter")

if major == "SE" or major == "IT":
    print("Tech major")

if not is_graduated:
    print("Still studying")
\`\`\`

## For Loop

\`\`\`python
# Loop through range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop through list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
\`\`\`

## While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## List Comprehension (Pythonic!)

\`\`\`python
# Traditional
squares = []
for i in range(5):
    squares.append(i ** 2)

# List comprehension (better!)
squares = [i ** 2 for i in range(5)]

# With condition
evens = [i for i in range(10) if i % 2 == 0]
\`\`\`

---

## Your Mission
Create a grade calculator with loops and conditionals.
                    `,
                    tasks: [
                        { id: 1, description: 'In main.py, write condition: if grade >= 85: print("A") elif grade >= 70: print("B") else: print("C")', completed: false, regex: /if\s+[^:]+:[\s\S]*elif[\s\S]*else\s*:/ },
                        { id: 2, description: 'In main.py, write loop: for i in range(5): print(i) to loop 0-4', completed: false, regex: /for\s+\w+\s+in\s+range\s*\(/ },
                        { id: 3, description: 'In main.py, use logical operator: if age >= 18 and has_id: (use and/or/not)', completed: false, regex: /\s(and|or|not)\s/ },
                        { id: 4, description: 'In main.py, create list comprehension: squares = [x**2 for x in range(5)]', completed: false, regex: /\[[^\]]+for\s+\w+\s+in\s+[^\]]+\]/ }
                    ],
                    files: [
                        { name: 'main.py', language: 'python', content: `// Grade Calculator

grades = [85, 92, 78, 65, 88]

// 1. Calculate average


// 2. Determine letter grade (if/elif/else)


// 3. Loop example


// 4. List comprehension

` }
                    ]
                },
                {
                    id: 'python-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Functions',
                    duration: '20 min',
                    content: `
# Python Functions

## Defining Functions

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!
\`\`\`

## Default Parameters

\`\`\`python
def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet())         # Hello, Guest!
print(greet("Bob"))    # Hello, Bob!
\`\`\`

## Multiple Parameters

\`\`\`python
def calculate_gpa(grades):
    return sum(grades) / len(grades)

my_grades = [3.5, 3.8, 4.0]
gpa = calculate_gpa(my_grades)
print(f"GPA: {gpa:.2f}")  # GPA: 3.77
\`\`\`

## Type Hints (Optional but Recommended)

\`\`\`python
def add(a: int, b: int) -> int:
    return a + b

def get_name(first: str, last: str) -> str:
    return f"{first} {last}"
\`\`\`

## *args and **kwargs

\`\`\`python
# *args: Variable number of arguments
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4))  # 10

# **kwargs: Keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=21, major="SE")
\`\`\`

## Lambda Functions

\`\`\`python
# Regular function
def square(x):
    return x ** 2

# Lambda (anonymous function)
square = lambda x: x ** 2

# Useful with map, filter
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
\`\`\`

---

## Your Mission
Create utility functions for student data.
                    `,
                    tasks: [
                        { id: 1, description: 'In main.py, create function: def calculate_gpa(grades): (use def, not function)', completed: false, regex: /def\s+\w+\s*\(/ },
                        { id: 2, description: 'In main.py, function accepts parameter: def calculate_gpa(grades): - grades is list of values', completed: false, regex: /def\s+\w+\s*\([^)]+\)/ },
                        { id: 3, description: 'Inside function, return result: return sum(grades) / len(grades)', completed: false, regex: /return\s+[^\n]+/ },
                        { id: 4, description: 'In main.py, call function: print(calculate_gpa([3.5, 3.8, 4.0]))', completed: false, regex: /print\s*\([^)]*\w+\s*\(/ }
                    ],
                    files: [
                        { name: 'main.py', language: 'python', content: `// Student Utility Functions

// 1. Create calculate_gpa function


// 2. Create get_letter_grade function


// 3. Test data
grades = [3.5, 3.8, 4.0, 3.2]

// 4. Call functions and print results

` }
                    ]
                },
                {
                    id: 'python-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Control Flow Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does Python use instead of braces {}?',
                            options: ['Semicolons', 'Indentation', 'Parentheses', 'Brackets'],
                            correctIndex: 1,
                            explanation: 'Python uses indentation (spaces/tabs) to define code blocks.'
                        },
                        {
                            id: 'q2',
                            question: 'What is a lambda function?',
                            options: [
                                'A Greek letter',
                                'An anonymous function',
                                'A loop type',
                                'A variable type'
                            ],
                            correctIndex: 1,
                            explanation: 'Lambda functions are small anonymous functions defined with lambda keyword.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'python-unit-3',
            title: 'Data Structures',
            description: 'Master lists, dictionaries, and sets',
            items: [
                {
                    id: 'python-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Lists & Tuples',
                    duration: '10 min read',
                    content: `
# Lists & Tuples in Python

## Lists (Mutable)

Lists are ordered, changeable collections.

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing elements
print(fruits[0])      # apple
print(fruits[-1])     # orange (last item)
print(fruits[0:2])    # ['apple', 'banana'] (slicing)

# Modifying lists
fruits.append("grape")        # Add to end
fruits.insert(1, "mango")     # Insert at index
fruits.remove("banana")       # Remove by value
fruits.pop()                  # Remove last item
fruits.pop(0)                 # Remove by index

# List methods
fruits.sort()                 # Sort in place
fruits.reverse()              # Reverse in place
length = len(fruits)          # Get length
count = fruits.count("apple") # Count occurrences
\`\`\`

## List Operations

\`\`\`python
# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2      # [1, 2, 3, 4, 5, 6]

# Repetition
repeated = [0] * 5            # [0, 0, 0, 0, 0]

# Membership
if "apple" in fruits:
    print("Found!")

# Iteration
for fruit in fruits:
    print(fruit)

# With index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
\`\`\`

## Tuples (Immutable)

Tuples are ordered, unchangeable collections.

\`\`\`python
# Creating tuples
coordinates = (10, 20)
rgb = (255, 128, 0)
single = (42,)  # Note the comma!

# Accessing (same as lists)
x = coordinates[0]
y = coordinates[1]

# Unpacking
x, y = coordinates
r, g, b = rgb

# Why use tuples?
# - Faster than lists
# - Can be used as dictionary keys
# - Protect data from modification
\`\`\`

## List Comprehensions (Advanced)

\`\`\`python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# With transformation
names = ["alice", "bob", "charlie"]
capitalized = [name.capitalize() for name in names]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]
\`\`\`

> 💡 **Pro Tip**: Use lists when you need to modify data, tuples when data should stay constant.
                    `
                },
                {
                    id: 'python-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Dictionaries & Sets',
                    duration: '25 min',
                    content: `
# Dictionaries & Sets

## Dictionaries (Key-Value Pairs)

Like JavaScript objects!

\`\`\`python
# Creating dictionaries
student = {
    "name": "Alice",
    "age": 21,
    "major": "Software Engineering",
    "gpa": 3.8
}

# Accessing values
print(student["name"])           # Alice
print(student.get("age"))        # 21
print(student.get("email", "N/A"))  # N/A (default)

# Modifying
student["gpa"] = 3.9             # Update
student["email"] = "alice@zerocode.ac.id"  # Add new

# Removing
del student["age"]               # Delete key
email = student.pop("email")     # Remove and return

# Dictionary methods
keys = student.keys()            # Get all keys
values = student.values()        # Get all values
items = student.items()          # Get key-value pairs

# Checking existence
if "name" in student:
    print("Name exists")
\`\`\`

## Iterating Dictionaries

\`\`\`python
# Iterate keys
for key in student:
    print(key)

# Iterate values
for value in student.values():
    print(value)

# Iterate key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")
\`\`\`

## Dictionary Comprehension

\`\`\`python
# Create dict from lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
my_dict = {k: v for k, v in zip(keys, values)}

# Transform dict
prices = {"apple": 100, "banana": 50}
discounted = {k: v * 0.9 for k, v in prices.items()}

# Filter dict
expensive = {k: v for k, v in prices.items() if v > 75}
\`\`\`

## Sets (Unique Values)

\`\`\`python
# Creating sets
fruits = {"apple", "banana", "orange"}
numbers = {1, 2, 3, 4, 5}

# Adding/removing
fruits.add("grape")
fruits.remove("banana")  # Error if not exists
fruits.discard("mango")  # No error if not exists

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
symmetric_diff = set1 ^ set2  # {1, 2, 5, 6}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(numbers))   # [1, 2, 3, 4]
\`\`\`

---

## Your Mission
Build a student database with dictionaries.
                    `,
                    tasks: [
                        { id: 1, description: 'In main.py, create dictionary: student = {"name": "Alice", "age": 21, "major": "SE"}', completed: false, regex: /\w+\s*=\s*\{[^}]*["']\w+["']\s*:\s*[^}]+\}/ },
                        { id: 2, description: 'In main.py, access value: print(student["name"]) to get name', completed: false, regex: /\w+\s*\[\s*["'][^"']+["']\s*\]/ },
                        { id: 3, description: 'In main.py, loop dictionary: for key, value in student.items(): print(key, value)', completed: false, regex: /\.items\s*\(\)/ },
                        { id: 4, description: 'In main.py, create list of dicts: students = [{"name": "Alice"}, {"name": "Bob"}]', completed: false, regex: /\[\s*\{[^}]+\}[^]]*\]/ }
                    ],
                    files: [
                        { name: 'main.py', language: 'python', content: `// Student Database

// 1. Create a list of student dictionaries
students = []

// 2. Add students with name, id, major, gpa


// 3. Create find_student function


// 4. Loop through dictionary using .items()


// 5. Print results

` }
                    ]
                },
                {
                    id: 'python-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Data Structures Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the difference between lists and tuples?',
                            options: [
                                'Lists use [], tuples use ()',
                                'Lists are mutable, tuples are immutable',
                                'Both A and B',
                                'No difference'
                            ],
                            correctIndex: 2,
                            explanation: 'Lists use [] and are mutable (can be changed). Tuples use () and are immutable (cannot be changed).'
                        },
                        {
                            id: 'q2',
                            question: 'How do you access a dictionary value?',
                            options: [
                                'dict.key',
                                'dict[key]',
                                'dict->key',
                                'dict(key)'
                            ],
                            correctIndex: 1,
                            explanation: 'Use square brackets: dict["key"] or dict.get("key") for safe access.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'python-unit-4',
            title: 'Object-Oriented Programming',
            description: 'Learn classes and objects',
            items: [
                {
                    id: 'python-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Classes & Objects',
                    duration: '10 min read',
                    content: `
# Object-Oriented Programming in Python

## What is OOP?

OOP organizes code into **objects** that contain both data and functions.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Class** | Blueprint for creating objects |
| **Object** | Instance of a class |
| **Attribute** | Variable inside a class |
| **Method** | Function inside a class |
| **Inheritance** | Class inheriting from another |
| **Encapsulation** | Hiding internal details |

## Creating a Class

\`\`\`python
class Student:
    # Constructor (initializer)
    def __init__(self, name, student_id, major):
        self.name = name
        self.student_id = student_id
        self.major = major
        self.grades = []
    
    # Method
    def add_grade(self, grade):
        self.grades.append(grade)
    
    # Method
    def get_gpa(self):
        if not self.grades:
            return 0.0
        return sum(self.grades) / len(self.grades)
    
    # String representation
    def __str__(self):
        return f"Student({self.name}, {self.student_id})"

# Creating objects
alice = Student("Alice", "001", "SE")
bob = Student("Bob", "002", "IT")

# Using methods
alice.add_grade(3.8)
alice.add_grade(3.9)
print(f"Alice's GPA: {alice.get_gpa()}")
\`\`\`

## Class vs Instance Variables

\`\`\`python
class University:
    # Class variable (shared by all instances)
    name = "ZeroCode"
    
    def __init__(self, campus):
        # Instance variable (unique to each instance)
        self.campus = campus

jababeka = University("Jababeka")
cikarang = University("Cikarang")

print(University.name)      # ZeroCode
print(jababeka.campus)      # Jababeka
\`\`\`

## Why Use OOP?

✅ **Organization**: Group related data and functions
✅ **Reusability**: Create multiple objects from one class
✅ **Maintainability**: Easier to update and debug
✅ **Real-world modeling**: Represents real entities

> 💡 **Convention**: Class names use PascalCase (StudentRecord, UserProfile)
                    `
                },
                {
                    id: 'python-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Inheritance & Methods',
                    duration: '25 min',
                    content: `
# Inheritance & Advanced OOP

## Inheritance

Create specialized classes from general ones.

\`\`\`python
# Base class (parent)
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name}"

# Derived class (child)
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # Call parent constructor
        self.student_id = student_id
        self.courses = []
    
    def enroll(self, course):
        self.courses.append(course)
    
    # Override parent method
    def introduce(self):
        return f"Hi, I'm {self.name}, student ID: {self.student_id}"

# Usage
alice = Student("Alice", 21, "001")
alice.enroll("Python Basics")
print(alice.introduce())
\`\`\`

## Multiple Inheritance

\`\`\`python
class Teacher:
    def teach(self):
        return "Teaching..."

class Researcher:
    def research(self):
        return "Researching..."

class Professor(Teacher, Researcher):
    def __init__(self, name):
        self.name = name

prof = Professor("Dr. Smith")
print(prof.teach())      # Teaching...
print(prof.research())   # Researching...
\`\`\`

## Special Methods (Magic Methods)

\`\`\`python
class Course:
    def __init__(self, name, credits):
        self.name = name
        self.credits = credits
    
    # String representation
    def __str__(self):
        return f"{self.name} ({self.credits} credits)"
    
    # Representation for debugging
    def __repr__(self):
        return f"Course('{self.name}', {self.credits})"
    
    # Length
    def __len__(self):
        return self.credits
    
    # Comparison
    def __eq__(self, other):
        return self.credits == other.credits
    
    # Addition
    def __add__(self, other):
        return self.credits + other.credits

python = Course("Python", 3)
java = Course("Java", 4)

print(python)                    # Python (3 credits)
print(len(python))               # 3
print(python + java)             # 7
\`\`\`

## Property Decorators

\`\`\`python
class Student:
    def __init__(self, name):
        self._name = name
        self._gpa = 0.0
    
    @property
    def name(self):
        return self._name
    
    @property
    def gpa(self):
        return self._gpa
    
    @gpa.setter
    def gpa(self, value):
        if 0.0 <= value <= 4.0:
            self._gpa = value
        else:
            raise ValueError("GPA must be between 0.0 and 4.0")

student = Student("Alice")
student.gpa = 3.8  # Uses setter
print(student.gpa)  # Uses getter
\`\`\`

---

## Your Mission
Create a course management system with classes.
                    `,
                    tasks: [
                        { id: 1, description: 'In main.py, create class: class Student: (class names use PascalCase)', completed: false, regex: /class\s+\w+/ },
                        { id: 2, description: 'Inside class, create constructor: def __init__(self, name, student_id): self.name = name', completed: false, regex: /def\s+__init__\s*\(/ },
                        { id: 3, description: 'Inside class, create 2 methods: def enroll(self, course): and def get_info(self):', completed: false, regex: /def\s+\w+\s*\([^)]*self[^)]*\)[\s\S]*def\s+\w+\s*\([^)]*self/ },
                        { id: 4, description: 'In main.py, create object: alice = Student("Alice", "001") to instantiate class', completed: false, regex: /\w+\s*=\s*\w+\s*\(/ }
                    ],
                    files: [
                        { name: 'main.py', language: 'python', content: `// Course Management System

// 1. Create Course class with __init__


// 2. Create Student class with __init__, enroll, get_info methods


// 3. Create instances and test


// 4. Print results

` }
                    ]
                },
                {
                    id: 'python-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'OOP Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is self in Python?',
                            options: [
                                'A keyword',
                                'Reference to the current instance',
                                'A built-in function',
                                'A variable type'
                            ],
                            correctIndex: 1,
                            explanation: 'self refers to the current instance of the class, similar to "this" in JavaScript.'
                        },
                        {
                            id: 'q2',
                            question: 'What does super() do?',
                            options: [
                                'Makes a class super powerful',
                                'Calls the parent class constructor',
                                'Creates a superclass',
                                'Deletes a class'
                            ],
                            correctIndex: 1,
                            explanation: 'super() is used to call methods from the parent class, especially __init__.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'python-unit-5',
            title: 'Final Project',
            description: 'Build a Python automation script',
            items: [
                {
                    id: 'python-3-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Student Data Analyzer',
                    duration: '90 min',
                    difficulty: 'Intermediate',
                    description: 'Build a Python script to analyze student performance data.',
                    content: `
# 🎯 Project: Student Data Analyzer

## Overview
Create a Python program that reads student data and generates statistics.

## Features Required

### Data Management
- [ ] Store student records (name, ID, grades)
- [ ] Add new students
- [ ] Calculate individual GPA

### Statistics
- [ ] Calculate class average
- [ ] Find highest/lowest GPA
- [ ] Count students by grade range
- [ ] Generate summary report

### Functions
- [ ] calculate_gpa(grades)
- [ ] get_letter_grade(gpa)
- [ ] find_top_students(n)
- [ ] generate_report()

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Data structures | 20% |
| Functions | 30% |
| Statistics calculations | 25% |
| Output formatting | 15% |
| Code quality | 10% |
                    `,
                    tasks: [
                        { id: 1, description: 'Create list or dictionary for students', completed: false, regex: /students\s*=\s*[\[{]/ },
                        { id: 2, description: 'Define at least 3 functions', completed: false, regex: /def\s+\w+[\s\S]*def\s+\w+[\s\S]*def\s+\w+/ },
                        { id: 3, description: 'Use for loop to iterate data', completed: false, regex: /for\s+\w+\s+in\s+/ },
                        { id: 4, description: 'Calculate average with sum() and len()', completed: false, regex: /sum\s*\([^)]+\)\s*\/\s*len\s*\(/ },
                        { id: 5, description: 'Use f-string for formatted output', completed: false, regex: /f["'][^"']*\{[^}]+\}/ }
                    ],
                    starterFiles: [
                        { name: 'main.py', language: 'python', content: `// Student Data Analyzer

// Sample data
students = [
    {"name": "Alice", "id": "001", "grades": [85, 90, 88, 92]},
    {"name": "Bob", "id": "002", "grades": [78, 82, 75, 80]},
    {"name": "Charlie", "id": "003", "grades": [92, 95, 90, 94]},
]

// 1. Create calculate_gpa function


// 2. Create get_letter_grade function


// 3. Create generate_report function


// 4. Call generate_report

` }
                    ]
                },
                {
                    id: 'python-3-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 Python Basics Complete!

## What You Mastered

✅ Python syntax and variables
✅ Data types (list, dict, tuple)
✅ Conditionals (if/elif/else)
✅ Loops (for, while)
✅ Functions and lambda
✅ List comprehensions
✅ String formatting (f-strings)

## Essential Python

\`\`\`python
# Variables
name = "Alice"

# Conditionals
if condition:
    pass
elif other:
    pass
else:
    pass

# Loops
for item in items:
    print(item)

# Functions
def function_name(param):
    return value

# List comprehension
squares = [x**2 for x in range(10)]
\`\`\`

## Best Practices

1. **Follow PEP 8**: Python style guide
2. **Use f-strings**: For string formatting
3. **List Comprehensions**: When appropriate
4. **Type Hints**: For better code documentation
5. **Docstrings**: Document your functions

## What's Next?

Explore **Data Science** with Pandas/NumPy, or **Web Development** with Django/Flask!

> "Python is the second best language for everything." - Python Community
                    `
                }
            ]
        }
    ]
};

export default pythonCourse;
