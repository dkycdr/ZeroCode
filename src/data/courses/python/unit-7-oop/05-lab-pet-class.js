import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5PetClass = {
    id: 'python-u7-lab-5-pet',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Build a Pet Class Hierarchy',
    duration: '25 min',
    content: `
# Lab: Build a Pet Class Hierarchy

## The Scenario

You are building a **Pet Management System** for a pet store. The system needs to track different types of pets (dogs, cats, birds) with their common and unique behaviors.

## Class Hierarchy

\`\`\`text
        ┌─────────────┐
        │     Pet     │
        │  - name     │
        │  - age      │
        │  - speak()  │
        │  - info()   │
        └──────┬──────┘
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│   Dog   │ │   Cat   │ │  Bird   │
│+ breed  │ │+ indoor │ │+ species│
│+ bark() │ │+ meow() │ │+ fly()  │
└─────────┘ └─────────┘ └─────────┘
\`\`\`

## Requirements

1. Create a base \`Pet\` class with \`name\`, \`age\`, and \`speak()\` method
2. Create \`Dog\`, \`Cat\`, \`Bird\` classes that inherit from \`Pet\`
3. Each child class should override \`speak()\` with its own sound
4. Each child class should have unique attributes

## Key Concepts

### Base Class Pattern
\`\`\`python
class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        return "Some sound"
    
    def info(self):
        return f"{self.name} is {self.age} years old"
\`\`\`

### Child Class Pattern
\`\`\`python
class Dog(Pet):
    def __init__(self, name, age, breed):
        super().__init__(name, age)  # Call parent's __init__
        self.breed = breed           # Dog-specific attribute
    
    def speak(self):
        return f"{self.name} says: Woof!"  # Override parent
\`\`\`
`,
    tasks: [
        {
            id: 1,
            description: 'Create Pet class with __init__(self, name, age) that sets self.name and self.age',
            completed: false,
            regex: /class\s+Pet\s*:[\s\S]*def\s+__init__\s*\(\s*self\s*,\s*name\s*,\s*age\s*\)[\s\S]*self\.name\s*=\s*name[\s\S]*self\.age\s*=\s*age/,
            hint: {
                concept: 'Class Definition',
                strategy: 'Define class Pet with __init__ that stores name and age',
                solution: 'class Pet:\\n    def __init__(self, name, age):\\n        self.name = name\\n        self.age = age'
            }
        },
        {
            id: 2,
            description: 'Add speak(self) method to Pet that returns "Some sound"',
            completed: false,
            regex: /class\s+Pet\s*:[\s\S]*def\s+speak\s*\(\s*self\s*\)[\s\S]*return\s+["']Some sound["']/,
            hint: {
                concept: 'Instance Method',
                strategy: 'Add a method that returns a default sound',
                solution: 'def speak(self):\\n        return "Some sound"'
            }
        },
        {
            id: 3,
            description: 'Create Dog class that inherits from Pet: class Dog(Pet)',
            completed: false,
            regex: /class\s+Dog\s*\(\s*Pet\s*\)\s*:/,
            hint: {
                concept: 'Inheritance',
                strategy: 'Use parentheses after class name to inherit',
                solution: 'class Dog(Pet):'
            }
        },
        {
            id: 4,
            description: 'Dog.__init__ should call super().__init__(name, age) and set self.breed',
            completed: false,
            regex: /class\s+Dog\s*\(\s*Pet\s*\)\s*:[\s\S]*def\s+__init__[\s\S]*super\s*\(\s*\)\s*\.\s*__init__\s*\([\s\S]*self\.breed\s*=/,
            hint: {
                concept: 'super()',
                strategy: 'Call parent constructor then set child-specific attributes',
                solution: 'super().__init__(name, age)\\n        self.breed = breed'
            }
        },
        {
            id: 5,
            description: 'Dog.speak() should return "Woof!" (override parent method)',
            completed: false,
            regex: /class\s+Dog[\s\S]*def\s+speak\s*\(\s*self\s*\)[\s\S]*return[\s\S]*[Ww]oof/,
            hint: {
                concept: 'Method Override',
                strategy: 'Define speak() in Dog to replace Pet.speak()',
                solution: 'def speak(self):\\n        return "Woof!"'
            }
        },
        {
            id: 6,
            description: 'Create Cat class inheriting from Pet with meow() method',
            completed: false,
            regex: /class\s+Cat\s*\(\s*Pet\s*\)\s*:[\s\S]*def\s+(speak|meow)\s*\(\s*self\s*\)/,
            hint: {
                concept: 'Another Child Class',
                strategy: 'Same pattern as Dog but for cats',
                solution: 'class Cat(Pet):\\n    def speak(self):\\n        return "Meow!"'
            }
        }
    ],
    files: [
        {
            name: 'pets.py',
            language: 'python',
            content: `# ╔══════════════════════════════════════════════════════════════════╗
# ║  PET MANAGEMENT SYSTEM - OOP Lab                                  ║
# ║  Build a class hierarchy for different pet types                  ║
# ╚══════════════════════════════════════════════════════════════════╝

# ═══════════════════════════════════════════════════════════════════
# TASK 1 & 2: Create the Pet base class
# ═══════════════════════════════════════════════════════════════════
class Pet:
    """Base class for all pets"""
    
    def __init__(self, name, age):
        # TODO: Store name and age as instance attributes
        pass
    
    def speak(self):
        # TODO: Return "Some sound"
        pass
    
    def info(self):
        """Returns formatted pet information"""
        return f"{self.name} is {self.age} years old"


# ═══════════════════════════════════════════════════════════════════
# TASK 3, 4, 5: Create the Dog class (inherits from Pet)
# ═══════════════════════════════════════════════════════════════════
class Dog:  # TODO: Add (Pet) to inherit
    """Dog class with breed attribute"""
    
    def __init__(self, name, age, breed):
        # TODO: Call super().__init__(name, age)
        # TODO: Set self.breed = breed
        pass
    
    def speak(self):
        # TODO: Return "Woof!" (overrides Pet.speak)
        pass
    
    def fetch(self):
        return f"{self.name} is fetching the ball!"


# ═══════════════════════════════════════════════════════════════════
# TASK 6: Create the Cat class (inherits from Pet)
# ═══════════════════════════════════════════════════════════════════
class Cat:  # TODO: Add (Pet) to inherit
    """Cat class with indoor attribute"""
    
    def __init__(self, name, age, indoor=True):
        # TODO: Call super().__init__(name, age)
        # TODO: Set self.indoor = indoor
        pass
    
    def speak(self):
        # TODO: Return "Meow!"
        pass
    
    def purr(self):
        return f"{self.name} is purring..."


# ═══════════════════════════════════════════════════════════════════
# BONUS: Create the Bird class
# ═══════════════════════════════════════════════════════════════════
class Bird:  # TODO: Add (Pet) to inherit
    """Bird class with species and can_fly attributes"""
    
    def __init__(self, name, age, species, can_fly=True):
        # TODO: Implement
        pass
    
    def speak(self):
        # TODO: Return "Chirp!"
        pass


# ═══════════════════════════════════════════════════════════════════
# TEST YOUR CODE
# ═══════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    # Create instances
    buddy = Dog("Buddy", 3, "Golden Retriever")
    whiskers = Cat("Whiskers", 5, indoor=True)
    tweety = Bird("Tweety", 2, "Canary")
    
    # Test polymorphism
    pets = [buddy, whiskers, tweety]
    
    print("=== Pet Store ===")
    for pet in pets:
        print(f"{pet.info()}")
        print(f"  Sound: {pet.speak()}")
        print()
    
    # Test unique methods
    print(buddy.fetch())      # Buddy is fetching the ball!
    print(whiskers.purr())    # Whiskers is purring...
`
        }
    ]
};
