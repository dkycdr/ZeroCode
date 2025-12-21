import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7DestructuringObjects = {
    id: 'js-es6-unit-7',
    title: 'Destructuring & Object Methods - Modern Data Handling',
    description: 'Master destructuring arrays and objects, object shorthand, computed properties, and modern object methods',
    items: [
        {
            id: 'js-es6-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Destructuring & Object Methods - The Complete Guide',
            duration: '30 min read',
            content: `
# Destructuring & Object Methods - The Complete Guide

## What is Destructuring?

**Destructuring** is a convenient way to extract values from arrays or properties from objects into distinct variables.

### Real-World Analogy: Unpacking a Suitcase

Think of destructuring like unpacking a suitcase:

**Without Destructuring (Old Way):**
\`\`\`
Open suitcase
Take out shirt → put in closet
Take out pants → put in closet
Take out shoes → put in closet
Each item one by one... tedious!
\`\`\`

**With Destructuring (Modern Way):**
\`\`\`
Open suitcase
Unpack everything at once!
Shirt → closet
Pants → closet
Shoes → closet
Fast and organized!
\`\`\`

### Why Destructuring Matters

**Without Destructuring:**
\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

const name = user.name;
const age = user.age;
const email = user.email;

console.log(name, age, email);
\`\`\`

**With Destructuring:**
\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

const { name, age, email } = user;

console.log(name, age, email);
\`\`\`

**Benefits:**
- ✅ Less code
- ✅ More readable
- ✅ Clear intent
- ✅ Fewer errors

## Array Destructuring

### Basic Array Destructuring

\`\`\`javascript
// Old way
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// New way
const [first, second, third] = colors;

console.log(first);   // 'red'
console.log(second);  // 'green'
console.log(third);   // 'blue'
\`\`\`

### Skipping Elements

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Skip elements with commas
const [first, , third, , fifth] = numbers;

console.log(first);   // 1
console.log(third);   // 3
console.log(fifth);   // 5
\`\`\`

### Rest Pattern in Arrays

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Get first two, rest in array
const [first, second, ...rest] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]
\`\`\`

### Default Values

\`\`\`javascript
const colors = ['red'];

// Provide defaults for missing values
const [first = 'black', second = 'white', third = 'gray'] = colors;

console.log(first);   // 'red' (from array)
console.log(second);  // 'white' (default)
console.log(third);   // 'gray' (default)
\`\`\`

### Swapping Variables

\`\`\`javascript
let a = 1;
let b = 2;

// Old way (needs temp variable)
let temp = a;
a = b;
b = temp;

// New way (no temp needed!)
[a, b] = [b, a];

console.log(a);  // 2
console.log(b);  // 1
\`\`\`

### Practical Example: Function Returns

\`\`\`javascript
function getCoordinates() {
    return [10, 20];
}

const [x, y] = getCoordinates();

console.log(\`X: \${x}, Y: \${y}\`);  // X: 10, Y: 20
\`\`\`

## Object Destructuring

### Basic Object Destructuring

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

// Extract properties
const { name, age, email } = user;

console.log(name);   // 'John'
console.log(age);    // 25
console.log(email);  // 'john@example.com'
\`\`\`

### Renaming Variables

\`\`\`javascript
const user = {
    name: 'John',
    age: 25
};

// Rename while destructuring
const { name: userName, age: userAge } = user;

console.log(userName);  // 'John'
console.log(userAge);   // 25
// console.log(name);   // Error: name is not defined
\`\`\`

### Default Values

\`\`\`javascript
const user = {
    name: 'John'
};

// Provide defaults for missing properties
const { name, age = 18, country = 'USA' } = user;

console.log(name);     // 'John'
console.log(age);      // 18 (default)
console.log(country);  // 'USA' (default)
\`\`\`

### Nested Destructuring

\`\`\`javascript
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};

// Destructure nested objects
const {
    name,
    address: {
        city,
        country,
        coordinates: { lat, lng }
    }
} = user;

console.log(name);     // 'John'
console.log(city);     // 'New York'
console.log(country);  // 'USA'
console.log(lat);      // 40.7128
console.log(lng);      // -74.0060
\`\`\`

### Rest Pattern in Objects

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
    country: 'USA'
};

// Extract some, rest in object
const { name, age, ...otherInfo } = user;

console.log(name);       // 'John'
console.log(age);        // 25
console.log(otherInfo);  // { email: 'john@example.com', country: 'USA' }
\`\`\`

### Function Parameters

\`\`\`javascript
// Old way
function displayUser(user) {
    console.log(\`Name: \${user.name}\`);
    console.log(\`Age: \${user.age}\`);
    console.log(\`Email: \${user.email}\`);
}

// New way
function displayUser({ name, age, email }) {
    console.log(\`Name: \${name}\`);
    console.log(\`Age: \${age}\`);
    console.log(\`Email: \${email}\`);
}

displayUser({
    name: 'John',
    age: 25,
    email: 'john@example.com'
});
\`\`\`

### With Default Values in Parameters

\`\`\`javascript
function createUser({ 
    name, 
    age = 18, 
    role = 'user',
    isActive = true 
}) {
    return {
        name,
        age,
        role,
        isActive,
        createdAt: new Date()
    };
}

const user1 = createUser({ name: 'John' });
console.log(user1);
// {
//   name: 'John',
//   age: 18,
//   role: 'user',
//   isActive: true,
//   createdAt: ...
// }

const user2 = createUser({ 
    name: 'Jane', 
    age: 25, 
    role: 'admin' 
});
console.log(user2);
// {
//   name: 'Jane',
//   age: 25,
//   role: 'admin',
//   isActive: true,
//   createdAt: ...
// }
\`\`\`

## Object Shorthand

### Property Shorthand

\`\`\`javascript
const name = 'John';
const age = 25;
const email = 'john@example.com';

// Old way
const user = {
    name: name,
    age: age,
    email: email
};

// New way (shorthand)
const user = {
    name,
    age,
    email
};

console.log(user);
// { name: 'John', age: 25, email: 'john@example.com' }
\`\`\`

### Method Shorthand

\`\`\`javascript
// Old way
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// New way (shorthand)
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(5, 3));  // 2
\`\`\`

## Computed Property Names

\`\`\`javascript
// Dynamic property names
const propertyName = 'email';
const propertyValue = 'john@example.com';

const user = {
    name: 'John',
    [propertyName]: propertyValue  // Computed property
};

console.log(user);
// { name: 'John', email: 'john@example.com' }
\`\`\`

**Practical Example:**

\`\`\`javascript
function createProperty(key, value) {
    return {
        [key]: value
    };
}

const prop1 = createProperty('name', 'John');
const prop2 = createProperty('age', 25);
const prop3 = createProperty('email', 'john@example.com');

console.log(prop1);  // { name: 'John' }
console.log(prop2);  // { age: 25 }
console.log(prop3);  // { email: 'john@example.com' }
\`\`\`

## Modern Object Methods

### Object.keys()

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

const keys = Object.keys(user);
console.log(keys);  // ['name', 'age', 'email']

// Loop through keys
keys.forEach(key => {
    console.log(\`\${key}: \${user[key]}\`);
});
// name: John
// age: 25
// email: john@example.com
\`\`\`

### Object.values()

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

const values = Object.values(user);
console.log(values);  // ['John', 25, 'john@example.com']

// Sum all numeric values
const numbers = { a: 10, b: 20, c: 30 };
const sum = Object.values(numbers).reduce((total, num) => total + num, 0);
console.log(sum);  // 60
\`\`\`

### Object.entries()

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

const entries = Object.entries(user);
console.log(entries);
// [
//   ['name', 'John'],
//   ['age', 25],
//   ['email', 'john@example.com']
// ]

// Loop through entries
entries.forEach(([key, value]) => {
    console.log(\`\${key}: \${value}\`);
});
\`\`\`

### Object.assign()

\`\`\`javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

// Merge objects
const result = Object.assign(target, source1, source2);

console.log(result);  // { a: 1, b: 3, c: 5, d: 6 }
console.log(target);  // { a: 1, b: 3, c: 5, d: 6 } (modified!)

// Better: Create new object
const merged = Object.assign({}, target, source1, source2);
\`\`\`

### Object.freeze()

\`\`\`javascript
const user = {
    name: 'John',
    age: 25
};

Object.freeze(user);

// Cannot modify frozen object
user.age = 30;        // Ignored (strict mode: error)
user.email = 'test';  // Ignored (strict mode: error)
delete user.name;     // Ignored (strict mode: error)

console.log(user);  // { name: 'John', age: 25 } (unchanged)
\`\`\`

### Object.seal()

\`\`\`javascript
const user = {
    name: 'John',
    age: 25
};

Object.seal(user);

// Can modify existing properties
user.age = 30;  // ✅ Works

// Cannot add new properties
user.email = 'test';  // ❌ Ignored

// Cannot delete properties
delete user.name;  // ❌ Ignored

console.log(user);  // { name: 'John', age: 30 }
\`\`\`

### Object.fromEntries()

\`\`\`javascript
const entries = [
    ['name', 'John'],
    ['age', 25],
    ['email', 'john@example.com']
];

const user = Object.fromEntries(entries);
console.log(user);
// { name: 'John', age: 25, email: 'john@example.com' }

// Practical: Convert Map to Object
const map = new Map([
    ['name', 'John'],
    ['age', 25]
]);

const obj = Object.fromEntries(map);
console.log(obj);  // { name: 'John', age: 25 }
\`\`\`

## Practical Patterns

### Extracting from API Response

\`\`\`javascript
function fetchUser() {
    return {
        data: {
            user: {
                id: 1,
                name: 'John',
                email: 'john@example.com',
                profile: {
                    avatar: 'avatar.jpg',
                    bio: 'Developer'
                }
            }
        },
        status: 200,
        message: 'Success'
    };
}

// Extract nested data
const {
    data: {
        user: {
            name,
            email,
            profile: { avatar, bio }
        }
    },
    status
} = fetchUser();

console.log(name);    // 'John'
console.log(email);   // 'john@example.com'
console.log(avatar);  // 'avatar.jpg'
console.log(bio);     // 'Developer'
console.log(status);  // 200
\`\`\`

### Merging Objects

\`\`\`javascript
const defaults = {
    theme: 'light',
    language: 'en',
    notifications: true
};

const userSettings = {
    theme: 'dark',
    fontSize: 14
};

// Merge with spread
const settings = { ...defaults, ...userSettings };

console.log(settings);
// {
//   theme: 'dark',
//   language: 'en',
//   notifications: true,
//   fontSize: 14
// }
\`\`\`

### Removing Properties

\`\`\`javascript
const user = {
    id: 1,
    name: 'John',
    password: 'secret123',
    email: 'john@example.com'
};

// Remove password
const { password, ...userWithoutPassword } = user;

console.log(userWithoutPassword);
// { id: 1, name: 'John', email: 'john@example.com' }
\`\`\`

### Renaming and Transforming

\`\`\`javascript
const apiResponse = {
    user_name: 'John',
    user_age: 25,
    user_email: 'john@example.com'
};

// Rename properties
const {
    user_name: name,
    user_age: age,
    user_email: email
} = apiResponse;

const user = { name, age, email };

console.log(user);
// { name: 'John', age: 25, email: 'john@example.com' }
\`\`\`

## Key Takeaways

- ✅ Destructuring extracts values from arrays/objects
- ✅ Use array destructuring for ordered data
- ✅ Use object destructuring for named data
- ✅ Provide default values for missing data
- ✅ Use rest pattern to collect remaining items
- ✅ Object shorthand reduces boilerplate
- ✅ Computed properties allow dynamic keys
- ✅ Object methods (keys, values, entries) iterate objects
- ✅ Object.assign() merges objects
- ✅ Object.freeze() makes objects immutable

## What's Next?

In the next lesson, you'll practice destructuring and object methods with real-world examples!

Now you're a destructuring master! 🎯✨
            `
    },

    
        {
            id: 'js-es6-7-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Mastering Destructuring - Practical Applications',
            duration: '45 min',
            content: `
# Mastering Destructuring - Practical Applications

## Project Overview

In this lesson, you'll build real applications using destructuring and modern object methods:
1. User Profile Manager
2. Shopping Cart with Destructuring
3. API Data Transformer
4. Configuration Merger
5. Object Utilities Library

## Project 1: User Profile Manager

Build a user profile system using destructuring.

\`\`\`javascript
class UserProfileManager {
    constructor() {
        this.users = [];
    }
    
    /**
     * Creates a new user with defaults
     */
    createUser({ 
        name, 
        email, 
        age = 18,
        role = 'user',
        preferences = {},
        address = {}
    }) {
        // Destructure preferences with defaults
        const {
            theme = 'light',
            language = 'en',
            notifications = true
        } = preferences;
        
        // Destructure address with defaults
        const {
            city = 'Unknown',
            country = 'Unknown',
            zipCode = '00000'
        } = address;
        
        const user = {
            id: this.users.length + 1,
            name,
            email,
            age,
            role,
            preferences: { theme, language, notifications },
            address: { city, country, zipCode },
            createdAt: new Date()
        };
        
        this.users.push(user);
        console.log(\`✅ User created: \${name}\`);
        return user;
    }
    
    /**
     * Gets user info without sensitive data
     */
    getUserPublicInfo(userId) {
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
            console.log('❌ User not found');
            return null;
        }
        
        // Remove sensitive data
        const { password, ...publicInfo } = user;
        
        console.log('📋 Public info:', publicInfo);
        return publicInfo;
    }
    
    /**
     * Updates user preferences
     */
    updatePreferences(userId, newPreferences) {
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
            console.log('❌ User not found');
            return false;
        }
        
        // Merge preferences
        user.preferences = {
            ...user.preferences,
            ...newPreferences
        };
        
        console.log(\`✅ Preferences updated for \${user.name}\`);
        return true;
    }
    
    /**
     * Displays user summary
     */
    displayUserSummary(userId) {
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
            console.log('❌ User not found');
            return;
        }
        
        // Destructure for display
        const {
            name,
            email,
            age,
            role,
            preferences: { theme, language },
            address: { city, country }
        } = user;
        
        console.log('👤 User Summary:');
        console.log(\`  Name: \${name}\`);
        console.log(\`  Email: \${email}\`);
        console.log(\`  Age: \${age}\`);
        console.log(\`  Role: \${role}\`);
        console.log(\`  Theme: \${theme}\`);
        console.log(\`  Language: \${language}\`);
        console.log(\`  Location: \${city}, \${country}\`);
    }
    
    /**
     * Gets all users with specific role
     */
    getUsersByRole(role) {
        return this.users
            .filter(user => user.role === role)
            .map(({ id, name, email, role }) => ({
                id,
                name,
                email,
                role
            }));
    }
}

// Usage
const manager = new UserProfileManager();

manager.createUser({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    preferences: {
        theme: 'dark',
        language: 'en'
    },
    address: {
        city: 'New York',
        country: 'USA'
    }
});

manager.createUser({
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'admin'
});

manager.displayUserSummary(1);
manager.updatePreferences(1, { theme: 'light', notifications: false });

const admins = manager.getUsersByRole('admin');
console.log('👑 Admins:', admins);

// Output:
// ✅ User created: John Doe
// ✅ User created: Jane Smith
// 👤 User Summary:
//   Name: John Doe
//   Email: john@example.com
//   Age: 25
//   Role: user
//   Theme: dark
//   Language: en
//   Location: New York, USA
// ✅ Preferences updated for John Doe
// 👑 Admins: [{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' }]
\`\`\`

## Project 2: Shopping Cart with Destructuring

\`\`\`javascript
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    /**
     * Adds item to cart
     */
    addItem({ 
        productId, 
        name, 
        price, 
        quantity = 1,
        discount = 0,
        category = 'general'
    }) {
        const item = {
            productId,
            name,
            price,
            quantity,
            discount,
            category,
            subtotal: price * quantity,
            discountAmount: (price * quantity * discount) / 100,
            total: price * quantity * (1 - discount / 100)
        };
        
        this.items.push(item);
        console.log(\`✅ Added: \${name} x\${quantity} = $\${item.total.toFixed(2)}\`);
    }
    
    /**
     * Gets cart summary
     */
    getSummary() {
        const summary = this.items.reduce((acc, item) => {
            const { subtotal, discountAmount, total } = item;
            
            return {
                subtotal: acc.subtotal + subtotal,
                discount: acc.discount + discountAmount,
                total: acc.total + total,
                itemCount: acc.itemCount + 1
            };
        }, {
            subtotal: 0,
            discount: 0,
            total: 0,
            itemCount: 0
        });
        
        return summary;
    }
    
    /**
     * Displays cart
     */
    displayCart() {
        if (this.items.length === 0) {
            console.log('🛒 Cart is empty');
            return;
        }
        
        console.log('🛒 Shopping Cart:');
        
        this.items.forEach((item, index) => {
            const { name, quantity, price, discount, total } = item;
            
            console.log(\`  \${index + 1}. \${name} x\${quantity} @ $\${price}\`);
            if (discount > 0) {
                console.log(\`     Discount: \${discount}%\`);
            }
            console.log(\`     Total: $\${total.toFixed(2)}\`);
        });
        
        const { subtotal, discount, total, itemCount } = this.getSummary();
        
        console.log('  ─────────────────');
        console.log(\`  Items: \${itemCount}\`);
        console.log(\`  Subtotal: $\${subtotal.toFixed(2)}\`);
        if (discount > 0) {
            console.log(\`  Discount: -$\${discount.toFixed(2)}\`);
        }
        console.log(\`  Total: $\${total.toFixed(2)}\`);
    }
    
    /**
     * Gets items by category
     */
    getItemsByCategory() {
        return this.items.reduce((acc, item) => {
            const { category, name, total } = item;
            
            if (!acc[category]) {
                acc[category] = [];
            }
            
            acc[category].push({ name, total });
            return acc;
        }, {});
    }
}

// Usage
const cart = new ShoppingCart();

cart.addItem({
    productId: 1,
    name: 'Laptop',
    price: 1000,
    quantity: 1,
    discount: 10,
    category: 'electronics'
});

cart.addItem({
    productId: 2,
    name: 'Mouse',
    price: 25,
    quantity: 2,
    category: 'electronics'
});

cart.addItem({
    productId: 3,
    name: 'Notebook',
    price: 5,
    quantity: 3,
    category: 'stationery'
});

cart.displayCart();

const byCategory = cart.getItemsByCategory();
console.log('📦 By Category:', byCategory);

// Output:
// ✅ Added: Laptop x1 = $900.00
// ✅ Added: Mouse x2 = $50.00
// ✅ Added: Notebook x3 = $15.00
// 🛒 Shopping Cart:
//   1. Laptop x1 @ $1000
//      Discount: 10%
//      Total: $900.00
//   2. Mouse x2 @ $25
//      Total: $50.00
//   3. Notebook x3 @ $5
//      Total: $15.00
//   ─────────────────
//   Items: 3
//   Subtotal: $1075.00
//   Discount: -$100.00
//   Total: $965.00
// 📦 By Category: {
//   electronics: [
//     { name: 'Laptop', total: 900 },
//     { name: 'Mouse', total: 50 }
//   ],
//   stationery: [
//     { name: 'Notebook', total: 15 }
//   ]
// }
\`\`\`

## Project 3: API Data Transformer

\`\`\`javascript
class APIDataTransformer {
    /**
     * Transforms user data from API format to app format
     */
    static transformUser(apiUser) {
        const {
            user_id: id,
            user_name: name,
            user_email: email,
            user_age: age,
            user_profile: {
                profile_picture: avatar,
                profile_bio: bio,
                profile_location: location
            } = {},
            user_settings: {
                setting_theme: theme = 'light',
                setting_language: language = 'en',
                setting_notifications: notifications = true
            } = {}
        } = apiUser;
        
        return {
            id,
            name,
            email,
            age,
            profile: { avatar, bio, location },
            settings: { theme, language, notifications }
        };
    }
    
    /**
     * Transforms multiple users
     */
    static transformUsers(apiUsers) {
        return apiUsers.map(user => this.transformUser(user));
    }
    
    /**
     * Extracts specific fields
     */
    static extractFields(data, fields) {
        return fields.reduce((acc, field) => {
            if (data.hasOwnProperty(field)) {
                acc[field] = data[field];
            }
            return acc;
        }, {});
    }
    
    /**
     * Flattens nested object
     */
    static flatten(obj, prefix = '') {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const newKey = prefix ? \`\${prefix}.\${key}\` : key;
            
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                Object.assign(acc, this.flatten(value, newKey));
            } else {
                acc[newKey] = value;
            }
            
            return acc;
        }, {});
    }
    
    /**
     * Groups array by property
     */
    static groupBy(array, key) {
        return array.reduce((acc, item) => {
            const groupKey = item[key];
            
            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }
            
            acc[groupKey].push(item);
            return acc;
        }, {});
    }
}

// Usage
const apiResponse = {
    user_id: 1,
    user_name: 'John Doe',
    user_email: 'john@example.com',
    user_age: 25,
    user_profile: {
        profile_picture: 'avatar.jpg',
        profile_bio: 'Developer',
        profile_location: 'New York'
    },
    user_settings: {
        setting_theme: 'dark',
        setting_language: 'en',
        setting_notifications: true
    }
};

const transformed = APIDataTransformer.transformUser(apiResponse);
console.log('✅ Transformed:', transformed);

const flattened = APIDataTransformer.flatten(transformed);
console.log('📊 Flattened:', flattened);

const users = [
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Jane', role: 'user' },
    { id: 3, name: 'Bob', role: 'admin' }
];

const grouped = APIDataTransformer.groupBy(users, 'role');
console.log('👥 Grouped:', grouped);

// Output:
// ✅ Transformed: {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 25,
//   profile: { avatar: 'avatar.jpg', bio: 'Developer', location: 'New York' },
//   settings: { theme: 'dark', language: 'en', notifications: true }
// }
// 📊 Flattened: {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 25,
//   'profile.avatar': 'avatar.jpg',
//   'profile.bio': 'Developer',
//   'profile.location': 'New York',
//   'settings.theme': 'dark',
//   'settings.language': 'en',
//   'settings.notifications': true
// }
// 👥 Grouped: {
//   admin: [
//     { id: 1, name: 'John', role: 'admin' },
//     { id: 3, name: 'Bob', role: 'admin' }
//   ],
//   user: [
//     { id: 2, name: 'Jane', role: 'user' }
//   ]
// }
\`\`\`

## Project 4: Configuration Merger

\`\`\`javascript
class ConfigurationManager {
    constructor(defaultConfig = {}) {
        this.defaultConfig = defaultConfig;
    }
    
    /**
     * Merges configurations with priority
     */
    mergeConfigs(...configs) {
        return configs.reduce((merged, config) => {
            return this.deepMerge(merged, config);
        }, {});
    }
    
    /**
     * Deep merges two objects
     */
    deepMerge(target, source) {
        const output = { ...target };
        
        if (this.isObject(target) && this.isObject(source)) {
            Object.keys(source).forEach(key => {
                if (this.isObject(source[key])) {
                    if (!(key in target)) {
                        output[key] = source[key];
                    } else {
                        output[key] = this.deepMerge(target[key], source[key]);
                    }
                } else {
                    output[key] = source[key];
                }
            });
        }
        
        return output;
    }
    
    /**
     * Checks if value is object
     */
    isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    
    /**
     * Gets configuration with defaults
     */
    getConfig(userConfig = {}) {
        return this.deepMerge(this.defaultConfig, userConfig);
    }
    
    /**
     * Validates configuration
     */
    validateConfig(config, schema) {
        const errors = [];
        
        Object.entries(schema).forEach(([key, rules]) => {
            const value = config[key];
            
            if (rules.required && value === undefined) {
                errors.push(\`Missing required field: \${key}\`);
            }
            
            if (value !== undefined && rules.type && typeof value !== rules.type) {
                errors.push(\`Invalid type for \${key}: expected \${rules.type}, got \${typeof value}\`);
            }
        });
        
        return {
            valid: errors.length === 0,
            errors
        };
    }
}

// Usage
const defaultConfig = {
    app: {
        name: 'MyApp',
        version: '1.0.0',
        debug: false
    },
    server: {
        host: 'localhost',
        port: 3000,
        ssl: false
    },
    database: {
        host: 'localhost',
        port: 5432,
        name: 'mydb'
    }
};

const manager = new ConfigurationManager(defaultConfig);

const userConfig = {
    app: {
        debug: true
    },
    server: {
        port: 8080,
        ssl: true
    }
};

const finalConfig = manager.getConfig(userConfig);
console.log('⚙️  Final Config:', finalConfig);

const schema = {
    'app.name': { required: true, type: 'string' },
    'server.port': { required: true, type: 'number' }
};

const validation = manager.validateConfig(finalConfig, {
    app: { required: true, type: 'object' },
    server: { required: true, type: 'object' }
});

console.log('✅ Validation:', validation);

// Output:
// ⚙️  Final Config: {
//   app: { name: 'MyApp', version: '1.0.0', debug: true },
//   server: { host: 'localhost', port: 8080, ssl: true },
//   database: { host: 'localhost', port: 5432, name: 'mydb' }
// }
// ✅ Validation: { valid: true, errors: [] }
\`\`\`

## Your Mission

Build these applications using destructuring:
1. User Profile Manager with nested destructuring
2. Shopping Cart with summary calculations
3. API Data Transformer with field mapping
4. Configuration Merger with deep merge
5. Test all features and verify console output

Master destructuring and object methods!

Now you're a destructuring expert! 🎯🚀
            `,
            tasks: [
                { id: 1, description: 'Extract name and email from user object using destructuring', completed: false, regex: /const\s*\{\s*name\s*,\s*email/ },
                { id: 2, description: 'Extract first and third elements from colors array using destructuring', completed: false, regex: /const\s*\[\s*\w+\s*,\s*,\s*\w+/ },
                { id: 3, description: 'Merge two objects using spread operator to create a new combined object', completed: false, regex: /\{\s*\.\.\.\w+\s*,\s*\.\.\.\w+/ }
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
    <title>Destructuring Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Destructuring & Object Methods</h1>
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
                    content: `// Task 1: Extract name and email from user object using destructuring
// Task 2: Extract first and third elements from colors array using destructuring
// Task 3: Merge two objects using spread operator

`
                }
            ]
        },
        {
            id: 'js-es6-7-3',
            title: 'Destructuring Knowledge Check',
            duration: '5 min',
            questions: [
                {
                    id: 'dest-q1',
                    question: 'What does this code do? const [a, , c] = [1, 2, 3]',
                    options: [
                        'Creates error',
                        'Assigns a=1, c=3, skipping 2',
                        'Assigns a=1, c=2',
                        'Assigns all values'
                    ],
                    correctAnswer: 1,
                    explanation: 'The comma without a variable name skips that element. So a gets 1, the 2 is skipped, and c gets 3.'
                },
                {
                    id: 'dest-q2',
                    question: 'What is the rest pattern in destructuring?',
                    options: [
                        'A way to rest between operations',
                        'Collects remaining elements into an array or object',
                        'Stops destructuring',
                        'Resets values'
                    ],
                    correctAnswer: 1,
                    explanation: 'The rest pattern (...rest) collects all remaining elements into an array (for arrays) or object (for objects). Example: const [first, ...rest] = [1,2,3,4] gives rest = [2,3,4]'
                },
                {
                    id: 'dest-q3',
                    question: 'How do you provide default values in destructuring?',
                    options: [
                        'const { name || "default" } = obj',
                        'const { name = "default" } = obj',
                        'const { name: "default" } = obj',
                        'const { name ?? "default" } = obj'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use = to provide default values: const { name = "default" } = obj. If name is undefined in obj, it will be "default".'
                },
                {
                    id: 'dest-q4',
                    question: 'What does const { name: userName } = user do?',
                    options: [
                        'Creates two variables',
                        'Renames name property to userName variable',
                        'Creates error',
                        'Assigns userName to name'
                    ],
                    correctAnswer: 1,
                    explanation: 'This renames the property while destructuring. It extracts user.name and assigns it to a variable called userName.'
                },
                {
                    id: 'dest-q5',
                    question: 'What is object shorthand?',
                    options: [
                        'Shorter object names',
                        'Writing { name } instead of { name: name }',
                        'Abbreviated properties',
                        'Compressed objects'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object shorthand lets you write { name, age } instead of { name: name, age: age } when the property name matches the variable name.'
                },
                {
                    id: 'dest-q6',
                    question: 'What does Object.entries() return?',
                    options: [
                        'Object keys',
                        'Array of [key, value] pairs',
                        'Object values',
                        'Object length'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object.entries() returns an array of [key, value] pairs. Example: Object.entries({a:1, b:2}) returns [["a",1], ["b",2]]'
                },
                {
                    id: 'dest-q7',
                    question: 'How do you swap two variables using destructuring?',
                    options: [
                        'let temp = a; a = b; b = temp',
                        '[a, b] = [b, a]',
                        'swap(a, b)',
                        'a <-> b'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use array destructuring: [a, b] = [b, a]. This swaps the values without needing a temporary variable.'
                },
                {
                    id: 'dest-q8',
                    question: 'What does Object.freeze() do?',
                    options: [
                        'Stops JavaScript execution',
                        'Makes object immutable (cannot add, delete, or modify properties)',
                        'Cools down the object',
                        'Saves object to disk'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object.freeze() makes an object immutable. You cannot add, delete, or modify its properties after freezing.'
                },
                {
                    id: 'dest-q9',
                    question: 'What are computed property names?',
                    options: [
                        'Properties calculated by computer',
                        'Dynamic property names using [expression]',
                        'Automatic property names',
                        'Properties with calculations'
                    ],
                    correctAnswer: 1,
                    explanation: 'Computed property names let you use expressions as property names: const key = "name"; const obj = { [key]: "John" } creates { name: "John" }'
                },
                {
                    id: 'dest-q10',
                    question: 'What is the difference between Object.seal() and Object.freeze()?',
                    options: [
                        'No difference',
                        'seal() allows modifying existing properties, freeze() does not',
                        'freeze() is faster',
                        'seal() is permanent'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object.seal() prevents adding/deleting properties but allows modifying existing ones. Object.freeze() prevents all changes including modifications.'
                }
            ]
        }
    ]
};
