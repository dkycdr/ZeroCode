import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Inheritance = {
    id: 'python-u7-doc-3-inheritance',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Inheritance & Polymorphism',
    duration: '15 min read',
    content: `
# Inheritance & Polymorphism

## What is Inheritance?

Inheritance lets you create a **new class based on an existing class**. The new class inherits all attributes and methods from the parent.

\`\`\`text
┌─────────────────────────────┐
│           Animal            │ ← Parent (Base) Class
│  - name                     │
│  - eat()                    │
│  - sleep()                  │
└──────────────┬──────────────┘
               │ inherits
       ┌───────┴───────┐
       ▼               ▼
┌─────────────┐  ┌─────────────┐
│     Dog     │  │     Cat     │ ← Child (Derived) Classes
│ + breed     │  │ + indoor    │
│ + bark()    │  │ + meow()    │
└─────────────┘  └─────────────┘
\`\`\`

---

## Basic Inheritance

\`\`\`python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating")
    
    def sleep(self):
        print(f"{self.name} is sleeping")

# Child class - inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent's __init__
        self.breed = breed      # Add new attribute
    
    def bark(self):
        print(f"{self.name} says: Woof!")

# Create a Dog
buddy = Dog("Buddy", "Golden Retriever")
buddy.eat()    # Buddy is eating (inherited)
buddy.sleep()  # Buddy is sleeping (inherited)
buddy.bark()   # Buddy says: Woof! (own method)

print(buddy.breed)  # Golden Retriever
\`\`\`

---

## The \`super()\` Function

\`super()\` calls the **parent class's method**. Essential for extending (not replacing) parent behavior.

\`\`\`python
class Vehicle:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year
    
    def info(self):
        return f"{self.year} {self.brand}"

class Car(Vehicle):
    def __init__(self, brand, year, doors):
        super().__init__(brand, year)  # Call Vehicle's __init__
        self.doors = doors              # Add Car-specific attribute
    
    def info(self):
        # Extend parent's info with car-specific data
        base_info = super().info()
        return f"{base_info} ({self.doors} doors)"

my_car = Car("Toyota", 2022, 4)
print(my_car.info())  # 2022 Toyota (4 doors)
\`\`\`

---

## Method Overriding

Child classes can **override** (replace) parent methods:

\`\`\`python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Cow(Animal):
    def speak(self):
        return "Moo!"

# Polymorphism in action
animals = [Dog(), Cat(), Cow()]

for animal in animals:
    print(animal.speak())
# Woof!
# Meow!
# Moo!
\`\`\`

---

## Polymorphism

**Poly** = Many, **Morph** = Forms. Same method name, different behaviors.

\`\`\`python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2

# Same interface, different implementations
shapes = [Rectangle(4, 5), Circle(3)]

for shape in shapes:
    print(f"Area: {shape.area()}")
# Area: 20
# Area: 28.27431
\`\`\`

---

## Multiple Inheritance

Python supports inheriting from **multiple classes**:

\`\`\`python
class Flyable:
    def fly(self):
        print("Flying!")

class Swimmable:
    def swim(self):
        print("Swimming!")

class Duck(Flyable, Swimmable):
    def quack(self):
        print("Quack!")

donald = Duck()
donald.fly()   # Flying!
donald.swim()  # Swimming!
donald.quack() # Quack!
\`\`\`

### Method Resolution Order (MRO)

When multiple parents have the same method, Python uses MRO:

\`\`\`python
class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):
    pass

d = D()
print(d.greet())  # Hello from B (B comes before C)
print(D.__mro__)  # Shows the order Python searches
\`\`\`

---

## \`isinstance()\` and \`issubclass()\`

\`\`\`python
class Animal:
    pass

class Dog(Animal):
    pass

buddy = Dog()

# Check if object is instance of class
print(isinstance(buddy, Dog))     # True
print(isinstance(buddy, Animal))  # True (inherited)
print(isinstance(buddy, str))     # False

# Check if class is subclass of another
print(issubclass(Dog, Animal))    # True
print(issubclass(Animal, Dog))    # False
\`\`\`

---

## Key Takeaways

1. **Inheritance** - child class gets all parent attributes/methods
2. **\`super()\`** - call parent class methods
3. **Override** - replace parent method with new implementation
4. **Polymorphism** - same method name, different behaviors
5. **Multiple inheritance** - inherit from multiple classes
6. **MRO** - Python's method resolution order for multiple inheritance
7. **\`isinstance()\`** - check if object is instance of class
`
};
