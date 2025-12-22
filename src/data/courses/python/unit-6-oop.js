import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6OOP = {
    id: 'py-unit-6',
    title: 'Object-Oriented Programming',
    description: 'Model real-world entities using Classes and Objects.',
    items: [
        {
            id: 'py-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Classes & Objects',
            duration: '15 min read',
            content: `
# OOP Concepts

- **Class**: The blueprint.
- **Object**: The house built from the blueprint.

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

dog1 = Dog("Rex")
print(dog1.name)
\`\`\`
            `
        },
        {
            id: 'py-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Creating a Robot',
            duration: '20 min',
            content: `
# Robot Factory

Define a Robot class.

---

## Your Mission
1. Define class \`Robot\`.
2. \`__init__\` takes self and \`name\`.
3. Set \`self.name = name\`.
4. Create \`r1 = Robot("R2D2")\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define class',
                    completed: false,
                    regex: /class\s+Robot:/
                },
                {
                    id: 2,
                    description: 'Constructor',
                    completed: false,
                    regex: /def\s+__init__\s*\(\s*self\s*,\s*name\s*\):/
                },
                {
                    id: 3,
                    description: 'Set self.name',
                    completed: false,
                    regex: /self\.name\s*=\s*name/
                },
                {
                    id: 4,
                    description: 'Instantiate',
                    completed: false,
                    regex: /r1\s*=\s*Robot\s*\(\s*['"]R2D2['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'robot.py',
                    language: 'python',
                    content: `# Define Robot class`
                }
            ]
        },
        {
            id: 'py-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Methods',
            duration: '15 min read',
            content: `
# Instance Methods

Functions inside a class are called **methods**. The first argument is always \`self\`.

\`\`\`python
class User:
    def greet(self):
        return "Hello!"
\`\`\`
            `
        },
        {
            id: 'py-6-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Adding Behavior',
            duration: '20 min',
            content: `
# Bank Account

Add deposit logic.

---

## Your Mission
1. Class \`Account\` is defined.
2. Define method \`deposit(self, amount)\`.
3. Add amount to \`self.balance\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define deposit method',
                    completed: false,
                    regex: /def\s+deposit\s*\(\s*self\s*,\s*amount\s*\):/
                },
                {
                    id: 2,
                    description: 'Update balance',
                    completed: false,
                    regex: /self\.balance\s*\+=\s*amount/
                }
            ],
            files: [
                {
                    name: 'bank.py',
                    language: 'python',
                    content: `class Account:
    def __init__(self):
        self.balance = 0

    # Add deposit method`
                }
            ]
        },
        {
            id: 'py-6-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Inheritance',
            duration: '15 min read',
            content: `
# Inheritance

Create new classes based on existing ones. \`Child(Parent)\`.

\`\`\`python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof"
\`\`\`
            `
        },
        {
            id: 'py-6-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Game Characters',
            duration: '20 min',
            content: `
# RPG Classes

Create a \`Wizard\` that inherits from \`Character\`.

---

## Your Mission
1. \`Character\` is provided.
2. Define class \`Wizard(Character)\`.
3. Override \`attack(self)\` to return "Fireball".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Wizard inherits Character',
                    completed: false,
                    regex: /class\s+Wizard\s*\(\s*Character\s*\):/
                },
                {
                    id: 2,
                    description: 'Override attack',
                    completed: false,
                    regex: /def\s+attack\s*\(\s*self\s*\):/
                },
                {
                    id: 3,
                    description: 'Return Fireball',
                    completed: false,
                    regex: /return\s*['"]Fireball['"]/
                }
            ],
            files: [
                {
                    name: 'game.py',
                    language: 'python',
                    content: `class Character:
    def attack(self):
        return "Punch"

# Define Wizard`
                }
            ]
        },
        {
            id: 'py-6-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Magic Methods',
            duration: '10 min read',
            content: `
# Dunder Methods

Special methods with double underscores.
- \`__init__\`: Constructor.
- \`__str__\`: String representation (like .toString()).

\`\`\`python
def __str__(self):
    return f"User({self.name})"
\`\`\`
            `
        },
        {
            id: 'py-6-8',
            type: CONTENT_TYPES.LESSON,
            title: 'String Rep',
            duration: '15 min',
            content: `
# Custom Printing

Make your Book class print nicely.

---

## Your Mission
1. Define \`__str__(self)\`.
2. Return f-string: \`"{self.title} by {self.author}"\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define __str__',
                    completed: false,
                    regex: /def\s+__str__\s*\(\s*self\s*\):/
                },
                {
                    id: 2,
                    description: 'Return formatted string',
                    completed: false,
                    regex: /return\s+f['"].*\{self\.title\}.*\{self\.author\}.*['"]/
                }
            ],
            files: [
                {
                    name: 'book.py',
                    language: 'python',
                    content: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    # Add __str__`
                }
            ]
        },
        {
            id: 'py-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'OOP Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the first argument of an instance method?',
                    options: ['this', 'self', 'me', 'it'],
                    correctIndex: 1,
                    explanation: 'Correct, `self` refers to the current instance of the class.'
                },
                {
                    id: 'q2',
                    question: 'What method is called when an object is created?',
                    options: ['__new__', '__start__', '__init__', '__create__'],
                    correctIndex: 2,
                    explanation: '`__init__` acts as the constructor in Python.'
                },
                {
                    id: 'q3',
                    question: 'How do you inherit from a parent class?',
                    options: ['class Child extends Parent', 'class Child(Parent)', 'class Child: Parent', 'new Child(Parent)'],
                    correctIndex: 1,
                    explanation: 'Python uses parentheses after the class name to specify inheritance.'
                }
            ]
        }
    ]
};
