import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8ClassesOOP = {
    id: 'js-es6-unit-8',
    title: 'Classes & OOP - Object-Oriented Programming in ES6+',
    description: 'Master ES6 classes: constructors, methods, inheritance, static methods, getters/setters, and object-oriented programming patterns',
    items: [
        {
            id: 'js-es6-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'ES6 Classes & OOP - The Complete Guide',
            duration: '30 min read',
            content: `
# ES6 Classes & OOP - The Complete Guide

## What are Classes?

**Classes** are blueprints for creating objects with predefined properties and methods. They make object-oriented programming cleaner and easier.

### Real-World Analogy: Cookie Cutter

Think of classes like cookie cutters:

**Cookie Cutter (Class):**
- Blueprint/template
- Defines shape and structure
- Can create many cookies
- Reusable

**Cookies (Objects/Instances):**
- Created from cutter
- Each is unique (different flavors, decorations)
- All have same basic shape
- Many can exist

**Example:**
\`\`\`
Car Class (Blueprint):
- Properties: color, brand, model
- Methods: start(), stop(), drive()

Car Instances (Objects):
- car1: red Toyota Camry
- car2: blue Honda Civic
- car3: black Tesla Model 3
\`\`\`

### Why Classes Matter

**Before ES6 (Constructor Functions):**
\`\`\`javascript
// Old way - confusing!
function Car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}

Car.prototype.start = function() {
    console.log(this.brand + ' starting...');
};

Car.prototype.drive = function() {
    console.log(this.brand + ' driving...');
};

const car1 = new Car('Toyota', 'Camry', 'red');
\`\`\`

**With ES6 Classes:**
\`\`\`javascript
// New way - clean and clear!
class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    
    start() {
        console.log(\`\${this.brand} starting...\`);
    }
    
    drive() {
        console.log(\`\${this.brand} driving...\`);
    }
}

const car1 = new Car('Toyota', 'Camry', 'red');
\`\`\`

**Benefits:**
- ✅ Cleaner syntax
- ✅ Easier to read
- ✅ More intuitive
- ✅ Better organization

## Basic Class Syntax

### Creating a Class

\`\`\`javascript
class Person {
    // Constructor - runs when creating new instance
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
    
    // Method
    getAge() {
        return this.age;
    }
}

// Create instances
const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);

person1.greet();  // Hello, I'm John
person2.greet();  // Hello, I'm Jane

console.log(person1.getAge());  // 25
console.log(person2.getAge());  // 30
\`\`\`

### Constructor Method

The **constructor** is a special method that runs when you create a new instance:

\`\`\`javascript
class User {
    constructor(username, email) {
        // Initialize properties
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
        this.isActive = true;
        
        console.log(\`User \${username} created!\`);
    }
}

const user = new User('john_doe', 'john@example.com');
// Output: User john_doe created!

console.log(user.username);   // john_doe
console.log(user.email);      // john@example.com
console.log(user.isActive);   // true
\`\`\`

### Class Methods

Methods are functions that belong to the class:

\`\`\`javascript
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;  // Return this for chaining
    }
    
    subtract(num) {
        this.result -= num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    divide(num) {
        if (num === 0) {
            console.log('Cannot divide by zero!');
            return this;
        }
        this.result /= num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
    
    reset() {
        this.result = 0;
        return this;
    }
}

// Method chaining
const calc = new Calculator();
calc.add(10).multiply(2).subtract(5).divide(3);
console.log(calc.getResult());  // 5

calc.reset().add(100).divide(4);
console.log(calc.getResult());  // 25
\`\`\`

## Getters and Setters

**Getters** and **setters** allow you to define methods that act like properties:

\`\`\`javascript
class Circle {
    constructor(radius) {
        this._radius = radius;  // _ indicates private by convention
    }
    
    // Getter - access like property
    get radius() {
        return this._radius;
    }
    
    // Setter - set like property
    set radius(value) {
        if (value <= 0) {
            console.log('Radius must be positive!');
            return;
        }
        this._radius = value;
    }
    
    // Getter for calculated property
    get diameter() {
        return this._radius * 2;
    }
    
    // Getter for calculated property
    get area() {
        return Math.PI * this._radius ** 2;
    }
    
    // Getter for calculated property
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);

// Use getters like properties
console.log(circle.radius);         // 5
console.log(circle.diameter);       // 10
console.log(circle.area);           // 78.54
console.log(circle.circumference);  // 31.42

// Use setter like property
circle.radius = 10;
console.log(circle.diameter);       // 20

circle.radius = -5;  // Radius must be positive!
\`\`\`

**Why use getters/setters?**
- ✅ Validation when setting values
- ✅ Computed properties
- ✅ Encapsulation
- ✅ Clean syntax

## Static Methods

**Static methods** belong to the class itself, not instances:

\`\`\`javascript
class MathUtils {
    // Static method - called on class, not instance
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
    
    static max(...numbers) {
        return Math.max(...numbers);
    }
    
    static min(...numbers) {
        return Math.min(...numbers);
    }
}

// Call on class, not instance
console.log(MathUtils.add(5, 3));        // 8
console.log(MathUtils.multiply(4, 7));   // 28
console.log(MathUtils.max(1, 5, 3, 9));  // 9

// Cannot call on instance
const utils = new MathUtils();
// utils.add(5, 3);  // Error!
\`\`\`

**When to use static methods:**
- Utility functions
- Factory methods
- Helper functions
- Don't need instance data

## Class Inheritance

**Inheritance** allows a class to inherit properties and methods from another class:

\`\`\`javascript
// Parent class (superclass)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(\`\${this.name} is eating\`);
    }
    
    sleep() {
        console.log(\`\${this.name} is sleeping\`);
    }
    
    makeSound() {
        console.log(\`\${this.name} makes a sound\`);
    }
}

// Child class (subclass) - inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    makeSound() {
        console.log(\`\${this.name} barks: Woof! Woof!\`);
    }
    
    // New method specific to Dog
    fetch() {
        console.log(\`\${this.name} is fetching the ball\`);
    }
}

// Child class - inherits from Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    
    // Override parent method
    makeSound() {
        console.log(\`\${this.name} meows: Meow!\`);
    }
    
    // New method specific to Cat
    scratch() {
        console.log(\`\${this.name} is scratching\`);
    }
}

// Create instances
const dog = new Dog('Buddy', 3, 'Golden Retriever');
const cat = new Cat('Whiskers', 2, 'Orange');

// Inherited methods
dog.eat();    // Buddy is eating
dog.sleep();  // Buddy is sleeping

// Overridden method
dog.makeSound();  // Buddy barks: Woof! Woof!
cat.makeSound();  // Whiskers meows: Meow!

// Specific methods
dog.fetch();     // Buddy is fetching the ball
cat.scratch();   // Whiskers is scratching
\`\`\`

### The super Keyword

**super** is used to call parent class methods:

\`\`\`javascript
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    start() {
        console.log(\`\${this.brand} \${this.model} starting...\`);
    }
    
    getInfo() {
        return \`\${this.brand} \${this.model}\`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);  // Call parent constructor
        this.doors = doors;
    }
    
    start() {
        super.start();  // Call parent method
        console.log('Engine started!');
    }
    
    getInfo() {
        const info = super.getInfo();  // Call parent method
        return \`\${info} with \${this.doors} doors\`;
    }
}

const car = new Car('Toyota', 'Camry', 4);
car.start();
// Output:
// Toyota Camry starting...
// Engine started!

console.log(car.getInfo());
// Toyota Camry with 4 doors
\`\`\`

## Private Fields (ES2022)

**Private fields** start with # and can only be accessed inside the class:

\`\`\`javascript
class BankAccount {
    #balance = 0;  // Private field
    #pin;          // Private field
    
    constructor(accountNumber, pin) {
        this.accountNumber = accountNumber;
        this.#pin = pin;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log('Amount must be positive');
            return false;
        }
        this.#balance += amount;
        console.log(\`Deposited $\${amount}. New balance: $\${this.#balance}\`);
        return true;
    }
    
    withdraw(amount, pin) {
        if (pin !== this.#pin) {
            console.log('Invalid PIN');
            return false;
        }
        
        if (amount > this.#balance) {
            console.log('Insufficient funds');
            return false;
        }
        
        this.#balance -= amount;
        console.log(\`Withdrew $\${amount}. New balance: $\${this.#balance}\`);
        return true;
    }
    
    getBalance(pin) {
        if (pin !== this.#pin) {
            console.log('Invalid PIN');
            return null;
        }
        return this.#balance;
    }
}

const account = new Bank Account('123456', '1234');

account.deposit(1000);  // Deposited $1000. New balance: $1000
account.withdraw(500, '1234');  // Withdrew $500. New balance: $500

console.log(account.getBalance('1234'));  // 500

// Cannot access private fields
// console.log(account.#balance);  // Error!
// console.log(account.#pin);      // Error!
\`\`\`

## Class Patterns

### Singleton Pattern

Only one instance can exist:

\`\`\`javascript
class Database {
    static #instance = null;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        
        this.connection = 'Connected to database';
        Database.#instance = this;
    }
    
    query(sql) {
        console.log(\`Executing: \${sql}\`);
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);  // true (same instance!)
\`\`\`

### Factory Pattern

Create objects without specifying exact class:

\`\`\`javascript
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class UserFactory {
    static createUser(name, role) {
        return new User(name, role);
    }
    
    static createAdmin(name) {
        return new User(name, 'admin');
    }
    
    static createGuest(name) {
        return new User(name, 'guest');
    }
}

const admin = UserFactory.createAdmin('John');
const guest = UserFactory.createGuest('Jane');

console.log(admin);  // User { name: 'John', role: 'admin' }
console.log(guest);  // User { name: 'Jane', role: 'guest' }
\`\`\`

## Key Takeaways

- ✅ Classes are blueprints for creating objects
- ✅ Constructor initializes new instances
- ✅ Methods are functions in classes
- ✅ Getters/setters provide controlled access
- ✅ Static methods belong to class, not instances
- ✅ Inheritance with extends keyword
- ✅ super calls parent class methods
- ✅ Private fields with # (ES2022)
- ✅ Classes make OOP cleaner and easier

## What's Next?

In the next lesson, you'll build real applications using ES6 classes and OOP principles!

Now you're a class master! 🎓✨
            `
        },
        {
            id: 'js-es6-8-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building OOP Applications with Classes',
            duration: '45 min',
            content: `
# Building OOP Applications with Classes

## Project Overview

Build real applications using ES6 classes and OOP principles:
1. Task Management System
2. E-commerce Shopping System
3. Game Character System
4. Library Management System

## Project 1: Task Management System

\`\`\`javascript
class Task {
    static #idCounter = 1;
    
    constructor(title, description, priority = 'medium') {
        this.id = Task.#idCounter++;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date();
    }
    
    complete() {
        this.completed = true;
        console.log(\`✅ Task "\${this.title}" completed!\`);
    }
    
    uncomplete() {
        this.completed = false;
        console.log(\`↩️  Task "\${this.title}" marked as incomplete\`);
    }
    
    updatePriority(newPriority) {
        this.priority = newPriority;
        console.log(\`🔄 Priority updated to \${newPriority}\`);
    }
    
    getInfo() {
        const status = this.completed ? '✅' : '⬜';
        return \`\${status} [\${this.priority.toUpperCase()}] \${this.title}\`;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }
    
    addTask(title, description, priority) {
        const task = new Task(title, description, priority);
        this.tasks.push(task);
        console.log(\`➕ Added: \${task.getInfo()}\`);
        return task;
    }
    
    removeTask(taskId) {
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index === -1) {
            console.log('❌ Task not found');
            return false;
        }
        
        const task = this.tasks.splice(index, 1)[0];
        console.log(\`🗑️  Removed: \${task.title}\`);
        return true;
    }
    
    getTasksByPriority(priority) {
        return this.tasks.filter(t => t.priority === priority);
    }
    
    getCompletedTasks() {
        return this.tasks.filter(t => t.completed);
    }
    
    getPendingTasks() {
        return this.tasks.filter(t => !t.completed);
    }
    
    displayTasks() {
        if (this.tasks.length === 0) {
            console.log('📋 No tasks');
            return;
        }
        
        console.log('📋 All Tasks:');
        this.tasks.forEach(task => {
            console.log(\`  \${task.id}. \${task.getInfo()}\`);
        });
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.getCompletedTasks().length;
        const pending = this.getPendingTasks().length;
        const high = this.getTasksByPriority('high').length;
        
        return { total, completed, pending, high };
    }
}

// Usage
const manager = new TaskManager();

manager.addTask('Learn ES6 Classes', 'Study OOP concepts', 'high');
manager.addTask('Build Project', 'Create task manager', 'high');
manager.addTask('Write Tests', 'Add unit tests', 'medium');
manager.addTask('Deploy App', 'Deploy to production', 'low');

manager.displayTasks();

const task1 = manager.tasks[0];
task1.complete();

const stats = manager.getStats();
console.log('📊 Stats:', stats);

// Output:
// ➕ Added: ⬜ [HIGH] Learn ES6 Classes
// ➕ Added: ⬜ [HIGH] Build Project
// ➕ Added: ⬜ [MEDIUM] Write Tests
// ➕ Added: ⬜ [LOW] Deploy App
// 📋 All Tasks:
//   1. ⬜ [HIGH] Learn ES6 Classes
//   2. ⬜ [HIGH] Build Project
//   3. ⬜ [MEDIUM] Write Tests
//   4. ⬜ [LOW] Deploy App
// ✅ Task "Learn ES6 Classes" completed!
// 📊 Stats: { total: 4, completed: 1, pending: 3, high: 2 }
\`\`\`

## Project 2: E-commerce Shopping System

\`\`\`javascript
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    get isInStock() {
        return this.stock > 0;
    }
    
    reduceStock(quantity) {
        if (quantity > this.stock) {
            return false;
        }
        this.stock -= quantity;
        return true;
    }
    
    increaseStock(quantity) {
        this.stock += quantity;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    
    get subtotal() {
        return this.product.price * this.quantity;
    }
    
    increaseQuantity(amount = 1) {
        this.quantity += amount;
    }
    
    decreaseQuantity(amount = 1) {
        this.quantity = Math.max(0, this.quantity - amount);
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        if (!product.isInStock) {
            console.log(\`❌ \${product.name} is out of stock\`);
            return false;
        }
        
        if (quantity > product.stock) {
            console.log(\`❌ Only \${product.stock} \${product.name} available\`);
            return false;
        }
        
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.increaseQuantity(quantity);
        } else {
            this.items.push(new CartItem(product, quantity));
        }
        
        console.log(\`✅ Added \${quantity}x \${product.name} to cart\`);
        return true;
    }
    
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index === -1) {
            console.log('❌ Item not in cart');
            return false;
        }
        
        const item = this.items.splice(index, 1)[0];
        console.log(\`🗑️  Removed \${item.product.name} from cart\`);
        return true;
    }
    
    get total() {
        return this.items.reduce((sum, item) => sum + item.subtotal, 0);
    }
    
    get itemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    displayCart() {
        if (this.items.length === 0) {
            console.log('🛒 Cart is empty');
            return;
        }
        
        console.log('🛒 Shopping Cart:');
        this.items.forEach(item => {
            console.log(\`  \${item.product.name} x\${item.quantity} = $\${item.subtotal}\`);
        });
        console.log(\`  Total: $\${this.total}\`);
    }
    
    checkout() {
        if (this.items.length === 0) {
            console.log('❌ Cart is empty');
            return false;
        }
        
        // Check stock and reduce
        for (const item of this.items) {
            if (!item.product.reduceStock(item.quantity)) {
                console.log(\`❌ Insufficient stock for \${item.product.name}\`);
                return false;
            }
        }
        
        console.log(\`✅ Order placed! Total: $\${this.total}\`);
        this.items = [];
        return true;
    }
}

// Usage
const laptop = new Product(1, 'Laptop', 1000, 5);
const mouse = new Product(2, 'Mouse', 25, 10);
const keyboard = new Product(3, 'Keyboard', 75, 8);

const cart = new ShoppingCart();

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(keyboard, 1);

cart.displayCart();

console.log(\`📦 Items in cart: \${cart.itemCount}\`);

cart.checkout();

console.log(\`📦 Laptop stock: \${laptop.stock}\`);

// Output:
// ✅ Added 1x Laptop to cart
// ✅ Added 2x Mouse to cart
// ✅ Added 1x Keyboard to cart
// 🛒 Shopping Cart:
//   Laptop x1 = $1000
//   Mouse x2 = $50
//   Keyboard x1 = $75
//   Total: $1125
// 📦 Items in cart: 4
// ✅ Order placed! Total: $1125
// 📦 Laptop stock: 4
\`\`\`

## Project 3: Game Character System

\`\`\`javascript
class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.maxHealth = health;
        this.health = health;
        this.attack = attack;
        this.isAlive = true;
    }
    
    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
        console.log(\`💥 \${this.name} took \${damage} damage! Health: \${this.health}/\${this.maxHealth}\`);
        
        if (this.health === 0) {
            this.die();
        }
    }
    
    heal(amount) {
        if (!this.isAlive) {
            console.log(\`❌ \${this.name} is dead!\`);
            return;
        }
        
        this.health = Math.min(this.maxHealth, this.health + amount);
        console.log(\`💚 \${this.name} healed \${amount}! Health: \${this.health}/\${this.maxHealth}\`);
    }
    
    attackTarget(target) {
        if (!this.isAlive) {
            console.log(\`❌ \${this.name} is dead!\`);
            return;
        }
        
        console.log(\`⚔️  \${this.name} attacks \${target.name}!\`);
        target.takeDamage(this.attack);
    }
    
    die() {
        this.isAlive = false;
        console.log(\`💀 \${this.name} has died!\`);
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, 150, 25);
        this.armor = 10;
    }
    
    takeDamage(damage) {
        const reducedDamage = Math.max(0, damage - this.armor);
        console.log(\`🛡️  Armor reduced damage by \${this.armor}\`);
        super.takeDamage(reducedDamage);
    }
    
    powerAttack(target) {
        console.log(\`💪 \${this.name} uses Power Attack!\`);
        target.takeDamage(this.attack * 2);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, 80, 35);
        this.mana = 100;
    }
    
    castSpell(target) {
        if (this.mana < 20) {
            console.log(\`❌ Not enough mana!\`);
            return;
        }
        
        this.mana -= 20;
        console.log(\`✨ \${this.name} casts Fireball! Mana: \${this.mana}/100\`);
        target.takeDamage(this.attack * 1.5);
    }
    
    restoreMana(amount) {
        this.mana = Math.min(100, this.mana + amount);
        console.log(\`🔵 \${this.name} restored \${amount} mana! Mana: \${this.mana}/100\`);
    }
}

class Healer extends Character {
    constructor(name) {
        super(name, 100, 15);
        this.healingPower = 30;
    }
    
    healAlly(target) {
        console.log(\`💚 \${this.name} heals \${target.name}!\`);
        target.heal(this.healingPower);
    }
}

// Usage
const warrior = new Warrior('Conan');
const mage = new Mage('Gandalf');
const healer = new Healer('Mercy');

console.log('⚔️  Battle Start!');

warrior.attackTarget(mage);
mage.castSpell(warrior);
warrior.powerAttack(mage);
healer.healAlly(mage);

// Output:
// ⚔️  Battle Start!
// ⚔️  Conan attacks Gandalf!
// 💥 Gandalf took 25 damage! Health: 55/80
// ✨ Gandalf casts Fireball! Mana: 80/100
// 🛡️  Armor reduced damage by 10
// 💥 Conan took 42 damage! Health: 108/150
// 💪 Conan uses Power Attack!
// 💥 Gandalf took 50 damage! Health: 5/80
// 💚 Mercy heals Gandalf!
// 💚 Gandalf healed 30! Health: 35/80
\`\`\`

## Your Mission

Build these OOP applications:
1. Task Management System with Task and TaskManager classes
2. E-commerce system with Product, CartItem, and ShoppingCart classes
3. Game character system with Character base class and specialized subclasses
4. Test all features and verify console output

Master ES6 classes and OOP!

Now you're an OOP expert! 🎓🚀
            `,
            tasks: [
                { id: 1, description: 'Create a Person class with constructor that initializes name and age properties', completed: false, regex: /class\s+Person\s*\{[\s\S]*constructor\s*\(\s*name\s*,\s*age/ },
                { id: 2, description: 'Add greet() and getInfo() methods to the Person class', completed: false, regex: /greet\s*\(\s*\)[\s\S]*getInfo\s*\(\s*\)/ },
                { id: 3, description: 'Create an instance of Person class and call its methods', completed: false, regex: /new\s+Person\s*\(/ }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Classes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>ES6 Classes & OOP</h1>
        <div id="console-output"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
.container { max-width: 900px; margin: 0 auto; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
h1 { color: white; margin-top: 0; }
#console-output { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; min-height: 300px; white-space: pre-wrap; overflow-y: auto; max-height: 500px; }`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Task 1: Create a Person class with constructor for name and age
// Task 2: Add greet() and getInfo() methods to the class
// Task 3: Create an instance and call its methods

`
                }
            ]
        },
        {
            id: 'js-es6-8-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'Classes & OOP Knowledge Check',
            duration: '5 min',
            questions: [
                {
                    id: 'class-q1',
                    question: 'What is the purpose of the constructor method?',
                    options: [
                        'To destroy objects',
                        'To initialize new instances when created',
                        'To build the class',
                        'To create methods'
                    ],
                    correctAnswer: 1,
                    explanation: 'The constructor is a special method that runs automatically when you create a new instance of a class. It initializes the object\'s properties.'
                },
                {
                    id: 'class-q2',
                    question: 'How do you create an instance of a class?',
                    options: [
                        'class.create()',
                        'new ClassName()',
                        'ClassName.new()',
                        'create ClassName()'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use the "new" keyword followed by the class name and parentheses: const instance = new ClassName()'
                },
                {
                    id: 'class-q3',
                    question: 'What is the difference between a method and a static method?',
                    options: [
                        'No difference',
                        'Methods are called on instances, static methods are called on the class itself',
                        'Static methods are faster',
                        'Methods are newer'
                    ],
                    correctAnswer: 1,
                    explanation: 'Regular methods are called on instances (obj.method()), while static methods are called on the class itself (ClassName.method()) and don\'t have access to instance data.'
                },
                {
                    id: 'class-q4',
                    question: 'What does the extends keyword do?',
                    options: [
                        'Makes class longer',
                        'Creates inheritance - child class inherits from parent class',
                        'Adds more methods',
                        'Extends the constructor'
                    ],
                    correctAnswer: 1,
                    explanation: 'The extends keyword creates inheritance. The child class inherits all properties and methods from the parent class.'
                },
                {
                    id: 'class-q5',
                    question: 'What is the purpose of super()?',
                    options: [
                        'Makes class super powerful',
                        'Calls the parent class constructor',
                        'Creates a super method',
                        'Deletes the parent class'
                    ],
                    correctAnswer: 1,
                    explanation: 'super() calls the parent class constructor. It must be called in the child constructor before using "this".'
                },
                {
                    id: 'class-q6',
                    question: 'What are getters and setters?',
                    options: [
                        'Methods that get and set values',
                        'Special methods that act like properties for controlled access',
                        'Variables',
                        'Constructors'
                    ],
                    correctAnswer: 1,
                    explanation: 'Getters (get) and setters (set) are special methods that act like properties, allowing you to control how values are accessed and modified.'
                },
                {
                    id: 'class-q7',
                    question: 'How do you define a private field in ES2022?',
                    options: [
                        'private fieldName',
                        '#fieldName',
                        '_fieldName',
                        'privateFieldName'
                    ],
                    correctAnswer: 1,
                    explanation: 'Private fields start with # (e.g., #balance). They can only be accessed inside the class, providing true encapsulation.'
                },
                {
                    id: 'class-q8',
                    question: 'Can you call a static method on an instance?',
                    options: [
                        'Yes, always',
                        'No, static methods can only be called on the class itself',
                        'Sometimes',
                        'Only in strict mode'
                    ],
                    correctAnswer: 1,
                    explanation: 'Static methods belong to the class, not instances. You must call them on the class: ClassName.staticMethod(), not instance.staticMethod().'
                },
                {
                    id: 'class-q9',
                    question: 'What does "this" refer to inside a class method?',
                    options: [
                        'The class itself',
                        'The current instance of the class',
                        'The parent class',
                        'Nothing'
                    ],
                    correctAnswer: 1,
                    explanation: '"this" refers to the current instance of the class. It allows you to access the instance\'s properties and methods.'
                },
                {
                    id: 'class-q10',
                    question: 'Can a class have multiple constructors?',
                    options: [
                        'Yes, unlimited',
                        'No, only one constructor per class',
                        'Yes, but only two',
                        'Yes, with different names'
                    ],
                    correctAnswer: 1,
                    explanation: 'A class can only have one constructor. If you need different initialization options, use default parameters or static factory methods.'
                }
            ]
        }
    ]
};
