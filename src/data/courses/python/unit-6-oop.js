import { CONTENT_TYPES } from '../../curriculumStructure';

export const unit6OOP = {
    id: 'py-unit-6',
    title: 'Unit 6: Object-Oriented Programming 🏗️',
    description: "Shift your mindset from 'functions' to 'objects'. Learn how to bundle data and behavior into Blueprints (Classes) and let them interact to build complex systems. Master Inheritance to write less code and do more.",
    items: [
        // ---------------------------------------------------------------------------------------
        // INFORMATIONAL: DEEP DIVES
        // ---------------------------------------------------------------------------------------
        {
            id: 'py-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Blueprint Mental Model 🏗️',
            duration: '15 min read',
            content: `
# Deep Dive: The Blueprint Mental Model 🏗️

## 1. Class vs Instance
The most common confusion in OOP is the difference between the **Class** and the **Object** (Instance).

### The Architect's Analogy
*   **The Class (Blueprint)**: Use this to plan the house. It defines where the walls go, how many windows, and the plumbing. **You cannot live in a blueprint.**
*   **The Instance (House)**: The actual building created from the blueprint. You can live in it. You can build 50 identical houses from 1 blueprint.

\`\`\`text
Class: Robot (Blueprint)
+-----------------------+
|  __init__(name, ...)  |
|  say_hello()          |
+-----------+-----------+
            |
            | Instantiate
            v
     +------+------+
     |             |
+----+---+    +----+---+
| Object |    | Object |
|  R2D2  |    |  C3PO  |
+--------+    +--------+
\`\`\`

## 2. Defining a Class
We use \`class\` (singular, PascalCase) to define the blueprint.

\`\`\`python
class Robot:
    # The Constructor
    # Runs automatically when you build a new robot
    def __init__(self, name, battery_level):
        self.name = name              # Attribute (Data)
        self.battery_level = battery_level
        self.is_on = True

    # Method (Behavior)
    def say_hello(self):
        if self.is_on:
            print(f"BEEP BOOP. I am {self.name}.")
\`\`\`

## 3. Creating Instances
Calling the class like a function creates a new object in memory.

\`\`\`python
r1 = Robot("R2D2", 100) # Builds House 1
r2 = Robot("C3PO", 50)  # Builds House 2

r1.say_hello() # "BEEP BOOP. I am R2D2."
r2.say_hello() # "BEEP BOOP. I am C3PO."
\`\`\`

> [!IMPORTANT]
> **State Isolation**: Changing \`r1.battery_level\` does NOT affect \`r2\`. They are separate houses with separate addresses in memory.
            `
        },
        {
            id: 'py-6-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Demystifying "Self" 🪞',
            duration: '15 min read',
            content: `
# Deep Dive: Demystifying "Self" 🪞

## 1. What is \`self\`?
In Python, methods must explicitly accept the object itself as their first argument. By convention, we call it \`self\`.

When you write:
\`\`\`python
r1.say_hello()
\`\`\`

Python actually runs:
\`\`\`python
Robot.say_hello(r1)
\`\`\`

It passes the object \`r1\` into the function as the argument \`self\`. This is how the code knows *which* robot's name to print!

## 2. Instance Scope vs Local Scope
\`self\` is your hook into the object's specific memory storage.

*   **Local Variable**: \`x = 10\` inside a method. Dies when the method finishes.
*   **Instance Attribute**: \`self.x = 10\`. Lives inside the object forever (as long as the object lives).

\`\`\`python
class Counter:
    def increment(self):
        # self.count persists between calls!
        self.count += 1 
\`\`\`

## 3. The "Selfless" Error
A generic error beginners face:
\`\`\`python
TypeError: say_hello() takes 0 positional arguments but 1 was given
\`\`\`
This happens if you define \`def say_hello():\` without \`self\`. Python tries to pass the instance rigidly, but the door is closed. Always open the door with \`self\`.
            `
        },
        {
            id: 'py-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Inheritance & Pillars 🏛️',
            duration: '20 min read',
            content: `
# Deep Dive: Inheritance & Pillars 🏛️

## 1. Don't Repeat Yourself (DRY)
Inheritance allows a Child class to steal (inherit) all code from a Parent class.

\`\`\`text
         +------------------+
         | Animal (Parent)  |
         | + Health         |
         | + Eat()          |
         +--------+---------+
                  |
        +---------+---------+
        |                   |
+-------v-------+   +-------v-------+
|  Dog (Child)  |   |  Cat (Child)  |
|  + Bark()     |   |  + Meow()     |
+---------------+   +---------------+
\`\`\`

## 2. Overriding
The Child can force the Parent's method to act differently.

\`\`\`python
class Animal:
    def speak(self):
        print("...")

class Dog(Animal):
    def speak(self):
        print("Woof!") # Overrides parent behavior
\`\`\`

## 3. Super()
The Child can also ask the Parent to do its job *first*, then add more work.

\`\`\`python
class Dog(Animal):
    def __init__(self, name, breed):
        # Let Animal handle the basic name setup
        super().__init__(name) 
        # Now I handle the unique stuff
        self.breed = breed
\`\`\`
            `
        },
        {
            id: 'py-6-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Magic Methods ✨',
            duration: '15 min read',
            content: `
# Deep Dive: Magic Methods (Dunders) ✨

## 1. The Hooks into Python
Magic methods start and end with double underscores (\`__\`). They let your objects act like built-in Python types.

| Magic Method | Triggered By | Example |
| :--- | :--- | :--- |
| \`__init__\` | Creation | \`obj = Class()\` |
| \`__str__\` | Printing | \`print(obj)\` |
| \`__len__\` | Length | \`len(obj)\` |
| \`__add__\` | Addition | \`obj1 + obj2\` |
| \`__eq__\` | Equality | \`obj1 == obj2\` |

## 2. Making Objects Readable
By default, printing an object gives you ugly memory addresses: \`<__main__.Cat object at 0x7f...>\`.
Fix this with \`__str__\`.

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name
    
    def __str__(self):
        return f"Cat(name={self.name})"

c = Cat("Luna")
print(c) # Output: Cat(name=Luna)
\`\`\`

## 3. Operator Overloading
You can teach Python how to "add" two of your custom objects.

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        # Vector Addition Rule: (x1+x2, y1+y2)
        return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(2, 4)
v2 = Vector(1, 1)
v3 = v1 + v2 # Python calls v1.__add__(v2)
\`\`\`
            `
        },

        // ---------------------------------------------------------------------------------------
        // LABS: COMPLEX DATA STRUCTURES
        // ---------------------------------------------------------------------------------------
        {
            id: 'py-lab-6-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Robot Factory 🤖',
            subtype: 'lab',
            description: "Design your first Class. Define the blueprint for a worker robot that can manage its own state.",
            duration: '25 min',
            tasks: [
                {
                    id: 1,
                    description: "Define a class named `Robot`. Pass usage: `class Robot:`.",
                    hintType: 'generic',
                    hint: "Use the `class` keyword followed by the name and a colon.",
                    matcher: /class\s+Robot\s*:/
                },
                {
                    id: 2,
                    description: "Define the constructor `__init__` taking `self`, `name`, and `battery_cap`.",
                    hintType: 'code',
                    hint: "def __init__(self, name, battery_cap):",
                    matcher: /def\s+__init__\s*\(\s*self\s*,\s*name\s*,\s*battery_cap\s*\)\s*:/
                },
                {
                    id: 3,
                    description: "Inside `__init__`, save `name` and `battery_cap` to `self`. Also init `self.current_charge` to `battery_cap`.",
                    hintType: 'snippet',
                    hint: "self.name = name\nself.current_charge = battery_cap",
                    matcher: /self\.name\s*=\s*name[\s\S]*self\.current_charge\s*=\s*battery_cap/
                },
                {
                    id: 4,
                    description: "Add a method `status(self)` that returns a formatted string: `'[Name] Charge: X/Y'`.",
                    hintType: 'generic',
                    hint: "Use an f-string to return the text. Do not print it.",
                    matcher: /def\s+status\s*\(\s*self\s*\):[\s\S]*return\s+f?['"].*['"]/
                },
                {
                    id: 5,
                    description: "Add a method `work(self, cost)` that reduces `current_charge` by `cost` IF enough charge exists.",
                    hintType: 'logic',
                    hint: "Check if self.current_charge >= cost. If so, subtract cost.",
                    matcher: /def\s+work\s*\(\s*self\s*,\s*cost\s*\):[\s\S]*if\s+self\.current_charge\s*>=\s*cost:/
                },
                {
                    id: 6,
                    description: "Add a method `charge(self)` that restores `current_charge` to the max `battery_cap`.",
                    hintType: 'code',
                    hint: "self.current_charge = self.battery_cap",
                    matcher: /def\s+charge\s*\(\s*self\s*\):[\s\S]*self\.current_charge\s*=\s*self\.battery_cap/
                },
                {
                    id: 7,
                    description: "Instantiate a Robot named `'WorkerV1'` with `100` capacity and save it to variable `r1`.",
                    hintType: 'code',
                    hint: "r1 = Robot('WorkerV1', 100)",
                    matcher: /r1\s*=\s*Robot\s*\(\s*['"]WorkerV1['"]\s*,\s*100\s*\)/
                }
            ],
            editor: {
                language: 'python',
                startingCode: "# Build your Robot class here\n"
            }
        },
        {
            id: 'py-lab-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The RPG Hero 🛡️',
            subtype: 'lab',
            description: "Create a Hero class with an Inventory system. Manipulate lists inside an object.",
            duration: '30 min',
            tasks: [
                {
                    id: 1,
                    description: "Define class `Hero` with `__init__` that takes `name`. Set `self.name`.",
                    hintType: 'generic',
                    hint: "Basic class setup pattern.",
                    matcher: /class\s+Hero\s*:[\s\S]*def\s+__init__\s*\(\s*self\s*,\s*name\s*\):/
                },
                {
                    id: 2,
                    description: "In `__init__`, initialize `self.inventory` as an empty list and `self.health` to 100.",
                    hintType: 'code',
                    hint: "self.inventory = []",
                    matcher: /self\.inventory\s*=\s*\[\]/
                },
                {
                    id: 3,
                    description: "Add method `pick_up(self, item)` that appends `item` to the inventory.",
                    hintType: 'code',
                    hint: "self.inventory.append(item)",
                    matcher: /def\s+pick_up\s*\(\s*self\s*,\s*item\s*\):[\s\S]*self\.inventory\.append\(\s*item\s*\)/
                },
                {
                    id: 4,
                    description: "Add method `take_damage(self, dmg)` which subtracts `dmg` from health.",
                    hintType: 'generic',
                    hint: "Math: self.health -= dmg",
                    matcher: /def\s+take_damage\s*\(\s*self\s*,\s*dmg\s*\):/
                },
                {
                    id: 5,
                    description: "Inside `take_damage`, if health drops <= 0, print `'[Name] has fallen!'`.",
                    hintType: 'logic',
                    hint: "Use an if statement after subtracting.",
                    matcher: /if\s+self\.health\s*<=\s*0:\s*print\(/
                },
                {
                    id: 6,
                    description: "Add method `eat_potion(self)`: IF 'Potion' is in inventory, remove it and add 20 health.",
                    hintType: 'snippet',
                    hint: "if 'Potion' in self.inventory:\n    self.inventory.remove('Potion')\n    self.health += 20",
                    matcher: /if\s+['"]Potion['"]\s+in\s+self\.inventory:/
                },
                {
                    id: 7,
                    description: "Create hero `h = Hero('Aragorn')`, pick up 'Sword', pick up 'Potion', then print `h.inventory`.",
                    hintType: 'generic',
                    hint: "Script the sequence of method calls.",
                    matcher: /h\s*=\s*Hero\(['"]Aragorn['"]\)[\s\S]*h\.pick_up\(['"]Sword['"]\)[\s\S]*print\(h\.inventory\)/
                }
            ],
            editor: {
                language: 'python',
                startingCode: "class Hero:\n    # Code here\n"
            }
        },
        {
            id: 'py-lab-6-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Zoo (Inheritance) 🦁',
            subtype: 'lab',
            description: "Implement a parent Animal class and specific implementation subclasses using Inheritance.",
            duration: '25 min',
            tasks: [
                {
                    id: 1,
                    description: "Define class `Animal` with `__init__(self, name)` that sets `self.name`.",
                    hintType: 'code',
                    hint: "Base parent class.",
                    matcher: /class\s+Animal\s*:[\s\S]*def\s+__init__/
                },
                {
                    id: 2,
                    description: "Add a method `speak(self)` to `Animal` that prints `'...'`.",
                    hintType: 'generic',
                    hint: "Placeholder method for the parent.",
                    matcher: /def\s+speak\s*\(\s*self\s*\):[\s\S]*print\(['"]\.\.\.['"]\)/
                },
                {
                    id: 3,
                    description: "Define class `Lion` that inherits from `Animal`. Pass usage: `class Lion(Animal):`.",
                    hintType: 'code',
                    hint: "class Lion(Animal):",
                    matcher: /class\s+Lion\s*\(\s*Animal\s*\)\s*:/
                },
                {
                    id: 4,
                    description: "Override `speak` in `Lion` to print `'ROAR'`. Do NOT define `__init__` in Lion (it inherits it).",
                    hintType: 'generic',
                    hint: "Define def speak(self) inside Lion.",
                    matcher: /class\s+Lion[\s\S]*def\s+speak\s*\(\s*self\s*\):[\s\S]*print\(['"]ROAR['"]\)/
                },
                {
                    id: 5,
                    description: "Define class `Duck` inheriting from `Animal` that overrides `speak` to print `'Quack'`.",
                    hintType: 'generic',
                    hint: "Similar pattern to Lion.",
                    matcher: /class\s+Duck[\s\S]*def\s+speak/
                },
                {
                    id: 6,
                    description: "Create a list `zoo` containing one `Lion('Simba')` and one `Duck('Donald')`.",
                    hintType: 'code',
                    hint: "zoo = [Lion('Simba'), Duck('Donald')]",
                    matcher: /zoo\s*=\s*\[\s*Lion.*Duck.*\]/
                },
                {
                    id: 7,
                    description: "Loop through `zoo` and call `.speak()` on each animal. Polymorphism in action!",
                    hintType: 'generic',
                    hint: "for animal in zoo: animal.speak()",
                    matcher: /for\s+\w+\s+in\s+zoo:[\s\S]*\.speak\(\)/
                }
            ],
            editor: {
                language: 'python',
                startingCode: "# Parent class\nclass Animal:\n    pass\n"
            }
        },
        {
            id: 'py-lab-6-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Vector (Magic Methods) 🪄',
            subtype: 'lab',
            description: "Create a math Vector class that supports strict equality `v1 == v2` and addition `v1 + v2` using dunder methods.",
            duration: '30 min',
            tasks: [
                {
                    id: 1,
                    description: "Define `Vector` with `__init__(self, x, y)` storing x and y.",
                    hintType: 'generic',
                    hint: "Standard setup.",
                    matcher: /class\s+Vector\s*:[\s\S]*self\.x\s*=/
                },
                {
                    id: 2,
                    description: "Implement `__str__(self)` to return formatted string `'Vector(x, y)'`.",
                    hintType: 'code',
                    hint: "return f'Vector({self.x}, {self.y})'",
                    matcher: /def\s+__str__\s*\(\s*self\s*\):[\s\S]*return\s+f?['"]Vector/
                },
                {
                    id: 3,
                    description: "Implement `__add__(self, other)` to return a *new* Vector with summed coordinates.",
                    hintType: 'snippet',
                    hint: "return Vector(self.x + other.x, self.y + other.y)",
                    matcher: /def\s+__add__\s*\(\s*self\s*,\s*other\s*\):[\s\S]*return\s+Vector\(/
                },
                {
                    id: 4,
                    description: "Implement `__eq__(self, other)` to return True if x and y both match.",
                    hintType: 'logic',
                    hint: "return self.x == other.x and self.y == other.y",
                    matcher: /def\s+__eq__\s*\(\s*self\s*,\s*other\s*\):[\s\S]*==/
                },
                {
                    id: 5,
                    description: "Create `v1 = Vector(2, 3)` and `v2 = Vector(4, 5)`.",
                    hintType: 'generic',
                    hint: "Instantiation.",
                    matcher: /v1\s*=\s*Vector\(2,\s*3\)[\s\S]*v2\s*=\s*Vector\(4,\s*5\)/
                },
                {
                    id: 6,
                    description: "Create `v3 = v1 + v2` and print it. Should show `Vector(6, 8)`.",
                    hintType: 'code',
                    hint: "v3 = v1 + v2\nprint(v3)",
                    matcher: /v3\s*=\s*v1\s*\+\s*v2[\s\S]*print\(v3\)/
                },
                {
                    id: 7,
                    description: "Verify that `v1 + v2 == Vector(6, 8)` prints True.",
                    hintType: 'generic',
                    hint: "print((v1 + v2) == Vector(6, 8))",
                    matcher: /print\(\s*\(?v1\s*\+\s*v2\)?\s*==\s*Vector\(6,\s*8\)\s*\)/
                }
            ],
            editor: {
                language: 'python',
                startingCode: "class Vector:\n    pass\n"
            }
        },
        {
            id: 'py-quiz-6',
            title: 'Unit 6 Quiz: Object Mastery',
            type: CONTENT_TYPES.QUIZ,
            description: "Test your understanding of Classes, Instances, Inheritance, and 'Self'.",
            questions: [
                {
                    id: 1,
                    question: "What is the relationship between a Class and an Object?",
                    options: [
                        "They are the same thing.",
                        "A Class is an instance of an Object.",
                        "A Class is the blueprint; an Object is the house built from it.",
                        "Objects are defined using `def`, Classes using `class`."
                    ],
                    correctAnswer: 2,
                    explanation: "The Class is the logical definition (blueprint) in code. The Object is the actual data structure in memory created from that blueprint."
                },
                {
                    id: 2,
                    question: "What is the purpose of `self` in a method?",
                    options: [
                        "It is a reserved keyword in Python for global variables.",
                        "It refers to the specific instance calling the method.",
                        "It refers to the Class itself.",
                        "It allows the method to run faster."
                    ],
                    correctAnswer: 1,
                    explanation: "`self` is the reference to the specific object instance. It allows the code to differentiate between `r1.name` and `r2.name`."
                },
                {
                    id: 3,
                    question: "Which method is automatically called when a new object is created?",
                    options: [
                        "`__start__`",
                        "`__init__`",
                        "`__create__`",
                        "`__new_obj__`"
                    ],
                    correctAnswer: 1,
                    explanation: "`__init__` is the constructor method in Python. It initializes the object's initial state (attributes)."
                },
                {
                    id: 4,
                    question: "If `class Cat(Animal):` is defined, what is true?",
                    options: [
                        "Cat inherits all methods from Animal.",
                        "Animal inherits all methods from Cat.",
                        "Cat cannot have its own methods.",
                        "Animal is the Child class."
                    ],
                    correctAnswer: 0,
                    explanation: "This is Inheritance. Cat (Child) inherits behavior from Animal (Parent). DRY (Don't Repeat Yourself)."
                },
                {
                    id: 5,
                    question: "What does the `__str__` magic method do?",
                    options: [
                        "Converts the object to a string when printing.",
                        "Converts the object to an integer.",
                        "Deletes the object.",
                        "Makes the object invisible."
                    ],
                    correctAnswer: 0,
                    explanation: "`__str__` provides a human-readable string representation of the object, used by `print()` and `str()`."
                }
            ]
        }
    ]
};
