// MongoDB - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const mongodbCourse = {
    id: 'mongodb',
    title: 'MongoDB',
    description: 'Learn NoSQL database with MongoDB and Mongoose ODM.',
    
    units: [
        // ============================================
        // UNIT 1: MongoDB Basics
        // ============================================
        {
            id: 'mongo-unit-1',
            title: 'MongoDB Basics',
            description: 'Understand NoSQL and MongoDB fundamentals',
            items: [
                {
                    id: 'mongo-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is MongoDB?',
                    duration: '10 min read',
                    content: `
# What is MongoDB?

## NoSQL Database

**MongoDB** is a document-oriented NoSQL database. Instead of tables and rows, it uses collections and documents.

## SQL vs MongoDB

| SQL | MongoDB |
|-----|---------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| JOIN | Embedded documents / $lookup |

## Document Structure

MongoDB stores data as JSON-like documents (BSON):

\`\`\`javascript
// SQL Row
// id | name | email | age
// 1  | John | john@example.com | 25

// MongoDB Document
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "John",
    "email": "john@example.com",
    "age": 25,
    "address": {
        "city": "New York",
        "zip": "10001"
    },
    "hobbies": ["coding", "gaming"]
}
\`\`\`

## Why MongoDB?

| Feature | Benefit |
|---------|---------|
| **Flexible Schema** | No need to define structure upfront |
| **Scalable** | Horizontal scaling with sharding |
| **Fast** | Optimized for read/write operations |
| **JSON-like** | Natural for JavaScript developers |
| **Rich Queries** | Powerful query language |

## When to Use MongoDB?

✅ **Good for:**
- Content management
- Real-time analytics
- IoT data
- Mobile apps
- Catalogs/Inventory

❌ **Not ideal for:**
- Complex transactions
- Heavy JOINs
- Strict data integrity requirements
                    `
                },
                {
                    id: 'mongo-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'MongoDB Operations',
                    duration: '25 min',
                    content: `
# MongoDB CRUD Operations

## Connect to MongoDB

\`\`\`javascript
// MongoDB Shell
mongosh "mongodb://localhost:27017"

// Use database
use myDatabase

// Show collections
show collections
\`\`\`

## Create (Insert)

\`\`\`javascript
// Insert one document
db.users.insertOne({
    name: "John",
    email: "john@example.com",
    age: 25
});

// Insert many documents
db.users.insertMany([
    { name: "Jane", email: "jane@example.com", age: 30 },
    { name: "Bob", email: "bob@example.com", age: 28 }
]);
\`\`\`

## Read (Find)

\`\`\`javascript
// Find all
db.users.find();

// Find with filter
db.users.find({ age: 25 });

// Find one
db.users.findOne({ email: "john@example.com" });

// Comparison operators
db.users.find({ age: { $gt: 25 } });   // Greater than
db.users.find({ age: { $gte: 25 } });  // Greater than or equal
db.users.find({ age: { $lt: 30 } });   // Less than
db.users.find({ age: { $ne: 25 } });   // Not equal
db.users.find({ age: { $in: [25, 30] } }); // In array

// Logical operators
db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] });
db.users.find({ $or: [{ name: "John" }, { name: "Jane" }] });

// Projection (select fields)
db.users.find({}, { name: 1, email: 1, _id: 0 });

// Sort, limit, skip
db.users.find().sort({ age: -1 }).limit(10).skip(5);
\`\`\`

## Update

\`\`\`javascript
// Update one
db.users.updateOne(
    { email: "john@example.com" },
    { $set: { age: 26 } }
);

// Update many
db.users.updateMany(
    { age: { $lt: 25 } },
    { $set: { status: "young" } }
);

// Update operators
db.users.updateOne(
    { _id: ObjectId("...") },
    {
        $set: { name: "John Doe" },     // Set field
        $inc: { age: 1 },               // Increment
        $push: { hobbies: "reading" },  // Add to array
        $pull: { hobbies: "gaming" }    // Remove from array
    }
);
\`\`\`

## Delete

\`\`\`javascript
// Delete one
db.users.deleteOne({ email: "john@example.com" });

// Delete many
db.users.deleteMany({ age: { $lt: 18 } });

// Delete all
db.users.deleteMany({});
\`\`\`

---

## Your Mission
Practice MongoDB CRUD operations.
                    `,
                    tasks: [
                        { id: 1, description: 'Write insertOne command: db.products.insertOne({ name: "Laptop", price: 999 }) (line 3)', completed: false, regex: /db\.\w+\.insertOne\s*\(/ },
                        { id: 2, description: 'Write find with filter: db.products.find({ price: { $gt: 500 } }) (line 10)', completed: false, regex: /db\.\w+\.find\s*\(\s*\{.*\$gt/ },
                        { id: 3, description: 'Write updateOne command: db.products.updateOne({ name: "Laptop" }, { $set: { price: 899 } }) (line 15)', completed: false, regex: /db\.\w+\.updateOne\s*\(/ },
                        { id: 4, description: 'Write deleteOne command: db.products.deleteOne({ name: "Laptop" }) (line 20)', completed: false, regex: /db\.\w+\.deleteOne\s*\(/ }
                    ],
                    files: [
                        { name: 'queries.js', language: 'javascript', content: `// MongoDB CRUD Practice

// 1. Insert a product


// 2. Find products with price > 500


// 3. Update product price


// 4. Delete a product


// Bonus queries:
// Find and sort by price descending
db.products.find().sort({ price: -1 });

// Find with projection (only name and price)
db.products.find({}, { name: 1, price: 1, _id: 0 });
` },
                        { name: 'sample-data.json', language: 'json', content: `[
    { "name": "Laptop", "price": 999, "category": "Electronics", "stock": 50 },
    { "name": "Phone", "price": 699, "category": "Electronics", "stock": 100 },
    { "name": "Headphones", "price": 199, "category": "Electronics", "stock": 200 },
    { "name": "Desk", "price": 299, "category": "Furniture", "stock": 30 },
    { "name": "Chair", "price": 149, "category": "Furniture", "stock": 45 }
]` },
                        { name: 'README.md', language: 'markdown', content: `# MongoDB Practice

## Setup
1. Install MongoDB
2. Start mongod service
3. Connect with: mongosh

## Import sample data
mongoimport --db shop --collection products --file sample-data.json --jsonArray` }
                    ]
                },
                {
                    id: 'mongo-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'MongoDB Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the MongoDB equivalent of a SQL table?',
                            options: ['Document', 'Collection', 'Database', 'Field'],
                            correctIndex: 1,
                            explanation: 'A Collection in MongoDB is equivalent to a Table in SQL. It contains documents (rows).'
                        },
                        {
                            id: 'q2',
                            question: 'Which operator finds documents where age > 25?',
                            options: ['{ age: > 25 }', '{ age: { $gt: 25 } }', '{ age: { greater: 25 } }', '{ $age: 25 }'],
                            correctIndex: 1,
                            explanation: '$gt is the "greater than" operator. Other operators: $lt, $gte, $lte, $eq, $ne.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Mongoose ODM
        // ============================================
        {
            id: 'mongo-unit-2',
            title: 'Mongoose ODM',
            description: 'Use Mongoose for elegant MongoDB object modeling',
            items: [
                {
                    id: 'mongo-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Mongoose Setup & Schemas',
                    duration: '25 min',
                    content: `
# Mongoose - MongoDB Object Modeling

## What is Mongoose?

Mongoose is an ODM (Object Document Mapper) that provides:
- Schema definitions
- Data validation
- Query building
- Middleware hooks
- Type casting

## Installation & Connection

\`\`\`javascript
npm install mongoose
\`\`\`

\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));
\`\`\`

## Defining Schemas

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email']
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
\`\`\`

## Schema Types

| Type | Example |
|------|---------|
| String | \`{ type: String }\` |
| Number | \`{ type: Number }\` |
| Boolean | \`{ type: Boolean }\` |
| Date | \`{ type: Date }\` |
| Array | \`{ type: [String] }\` |
| ObjectId | \`{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }\` |
| Mixed | \`{ type: mongoose.Schema.Types.Mixed }\` |

## Validation Options

\`\`\`javascript
{
    required: true,
    unique: true,
    default: 'value',
    min: 0,
    max: 100,
    minlength: 2,
    maxlength: 50,
    enum: ['a', 'b', 'c'],
    match: /regex/,
    validate: {
        validator: v => v.length > 0,
        message: 'Custom error message'
    }
}
\`\`\`

---

## Your Mission
Create a Mongoose schema for a Product model.
                    `,
                    tasks: [
                        { id: 1, description: 'Import mongoose: const mongoose = require("mongoose") (line 1)', completed: false, regex: /const\s+mongoose\s*=\s*require\s*\(\s*["']mongoose["']\s*\)/ },
                        { id: 2, description: 'Create schema: const productSchema = new mongoose.Schema({ ... }) (line 5)', completed: false, regex: /const\s+productSchema\s*=\s*new\s+mongoose\.Schema\s*\(/ },
                        { id: 3, description: 'Add required name field: name: { type: String, required: true } (line 6)', completed: false, regex: /name\s*:\s*\{[^}]*type\s*:\s*String[^}]*required\s*:\s*true/ },
                        { id: 4, description: 'Add price with min validation: price: { type: Number, min: 0 } (line 10)', completed: false, regex: /price\s*:\s*\{[^}]*type\s*:\s*Number[^}]*min\s*:\s*0/ },
                        { id: 5, description: 'Create model: const Product = mongoose.model("Product", productSchema) (line 20)', completed: false, regex: /const\s+Product\s*=\s*mongoose\.model\s*\(\s*["']Product["']/ }
                    ],
                    files: [
                        { name: 'models/Product.js', language: 'javascript', content: `// Product Model

// 1. Import mongoose


// 2. Create product schema
const productSchema = // new mongoose.Schema({...})

// Add fields:
// - name: String, required, trim
// - price: Number, required, min: 0
// - description: String
// - category: String, enum: ['Electronics', 'Clothing', 'Books']
// - stock: Number, default: 0
// - createdAt: Date, default: Date.now


// 3. Create and export model

` },
                        { name: 'db.js', language: 'javascript', content: `const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shop');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "mongoose-demo",
    "dependencies": {
        "mongoose": "^7.0.0"
    }
}` }
                    ]
                },
                {
                    id: 'mongo-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Mongoose CRUD Operations',
                    duration: '25 min',
                    content: `
# Mongoose CRUD Operations

## Create

\`\`\`javascript
// Method 1: Create instance and save
const user = new User({
    name: 'John',
    email: 'john@example.com'
});
await user.save();

// Method 2: Create directly
const user = await User.create({
    name: 'John',
    email: 'john@example.com'
});

// Create many
await User.insertMany([
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: 'bob@example.com' }
]);
\`\`\`

## Read

\`\`\`javascript
// Find all
const users = await User.find();

// Find with conditions
const adults = await User.find({ age: { $gte: 18 } });

// Find one
const user = await User.findOne({ email: 'john@example.com' });

// Find by ID
const user = await User.findById('507f1f77bcf86cd799439011');

// Select specific fields
const users = await User.find().select('name email -_id');

// Sort
const users = await User.find().sort({ createdAt: -1 });

// Limit and skip (pagination)
const users = await User.find().skip(10).limit(10);

// Count
const count = await User.countDocuments({ isActive: true });
\`\`\`

## Update

\`\`\`javascript
// Find and update
const user = await User.findByIdAndUpdate(
    '507f1f77bcf86cd799439011',
    { name: 'John Doe' },
    { new: true, runValidators: true }
);

// Update one
await User.updateOne(
    { email: 'john@example.com' },
    { $set: { isActive: false } }
);

// Update many
await User.updateMany(
    { role: 'user' },
    { $set: { isVerified: true } }
);
\`\`\`

## Delete

\`\`\`javascript
// Find and delete
const user = await User.findByIdAndDelete('507f1f77bcf86cd799439011');

// Delete one
await User.deleteOne({ email: 'john@example.com' });

// Delete many
await User.deleteMany({ isActive: false });
\`\`\`

---

## Your Mission
Implement CRUD operations with Mongoose.
                    `,
                    tasks: [
                        { id: 1, description: 'Create document: await Product.create({ name, price }) (line 10)', completed: false, regex: /await\s+Product\.create\s*\(/ },
                        { id: 2, description: 'Find all: await Product.find() (line 15)', completed: false, regex: /await\s+Product\.find\s*\(\s*\)/ },
                        { id: 3, description: 'Find by ID: await Product.findById(id) (line 20)', completed: false, regex: /await\s+Product\.findById\s*\(/ },
                        { id: 4, description: 'Update: await Product.findByIdAndUpdate(id, updates, { new: true }) (line 25)', completed: false, regex: /await\s+Product\.findByIdAndUpdate\s*\(/ },
                        { id: 5, description: 'Delete: await Product.findByIdAndDelete(id) (line 30)', completed: false, regex: /await\s+Product\.findByIdAndDelete\s*\(/ }
                    ],
                    files: [
                        { name: 'controllers/productController.js', language: 'javascript', content: `const Product = require('../models/Product');

// Create product
exports.createProduct = async (req, res) => {
    try {
        // Create product using Product.create()
        
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        // Find all products
        
        res.json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get product by ID
exports.getProduct = async (req, res) => {
    try {
        // Find by ID
        
        if (!product) {
            return res.status(404).json({ success: false, error: 'Not found' });
        }
        res.json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        // Find and update
        
        res.json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        // Find and delete
        
        res.json({ success: true, message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
` },
                        { name: 'models/Product.js', language: 'javascript', content: `const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: String,
    category: { type: String, enum: ['Electronics', 'Clothing', 'Books'] },
    stock: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);` },
                        { name: 'package.json', language: 'json', content: `{
    "dependencies": {
        "express": "^4.18.2",
        "mongoose": "^7.0.0"
    }
}` }
                    ]
                },
                {
                    id: 'mongo-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Mongoose Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is Mongoose?',
                            options: ['A database', 'An ODM for MongoDB', 'A web framework', 'A testing library'],
                            correctIndex: 1,
                            explanation: 'Mongoose is an Object Document Mapper (ODM) that provides schema-based modeling for MongoDB.'
                        },
                        {
                            id: 'q2',
                            question: 'What does { new: true } do in findByIdAndUpdate?',
                            options: ['Creates a new document', 'Returns the updated document', 'Validates the update', 'Deletes the old document'],
                            correctIndex: 1,
                            explanation: '{ new: true } returns the modified document rather than the original.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Relationships & Population
        // ============================================
        {
            id: 'mongo-unit-3',
            title: 'Relationships & Population',
            description: 'Model relationships between documents',
            items: [
                {
                    id: 'mongo-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Document Relationships',
                    duration: '25 min',
                    content: `
# Document Relationships in MongoDB

## Embedding vs Referencing

### Embedding (Denormalization)
Store related data in the same document:

\`\`\`javascript
// User with embedded addresses
{
    name: "John",
    addresses: [
        { street: "123 Main St", city: "NYC" },
        { street: "456 Oak Ave", city: "LA" }
    ]
}
\`\`\`

**Use when:**
- Data is always accessed together
- One-to-few relationship
- Data doesn't change often

### Referencing (Normalization)
Store reference to another document:

\`\`\`javascript
// User
{ _id: ObjectId("user1"), name: "John" }

// Orders (reference user)
{ _id: ObjectId("order1"), user: ObjectId("user1"), total: 99.99 }
\`\`\`

**Use when:**
- Data is accessed independently
- One-to-many or many-to-many
- Data changes frequently

## Mongoose References

\`\`\`javascript
// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Order Schema (references User)
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    total: Number,
    status: String
});
\`\`\`

## Population

Populate replaces ObjectId with actual document:

\`\`\`javascript
// Without populate
const order = await Order.findById(orderId);
// { user: ObjectId("..."), products: [ObjectId("..."), ...] }

// With populate
const order = await Order.findById(orderId)
    .populate('user')
    .populate('products');
// { user: { name: "John", email: "..." }, products: [{ name: "Laptop", ... }] }

// Select specific fields
const order = await Order.findById(orderId)
    .populate('user', 'name email')
    .populate('products', 'name price');

// Nested populate
const order = await Order.findById(orderId)
    .populate({
        path: 'user',
        select: 'name',
        populate: { path: 'profile' }
    });
\`\`\`

---

## Your Mission
Create related schemas with population.
                    `,
                    tasks: [
                        { id: 1, description: 'Add user reference: user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } (line 8)', completed: false, regex: /user\s*:\s*\{[^}]*type\s*:\s*mongoose\.Schema\.Types\.ObjectId[^}]*ref\s*:\s*["']User["']/ },
                        { id: 2, description: 'Add products array reference: products: [{ type: ObjectId, ref: "Product" }] (line 12)', completed: false, regex: /products\s*:\s*\[\s*\{[^}]*ref\s*:\s*["']Product["']/ },
                        { id: 3, description: 'Use populate: await Order.findById(id).populate("user") (line 25)', completed: false, regex: /\.populate\s*\(\s*["']user["']\s*\)/ },
                        { id: 4, description: 'Populate with select: .populate("products", "name price") (line 26)', completed: false, regex: /\.populate\s*\(\s*["']products["']\s*,\s*["']/ }
                    ],
                    files: [
                        { name: 'models/Order.js', language: 'javascript', content: `const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true },
    
    // Add user reference (ObjectId, ref: 'User')
    user: {
        // type and ref here
    },
    
    // Add products array reference
    products: [
        // ObjectId with ref: 'Product'
    ],
    
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);` },
                        { name: 'controllers/orderController.js', language: 'javascript', content: `const Order = require('../models/Order');

// Get order with populated data
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            // Add .populate('user')
            // Add .populate('products', 'name price')
        
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId })
            .populate('products', 'name price')
            .sort({ createdAt: -1 });
        
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};` },
                        { name: 'models/User.js', language: 'javascript', content: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);` }
                    ]
                },
                {
                    id: 'mongo-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Relationships Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'When should you embed documents?',
                            options: ['Always', 'When data is accessed together and rarely changes', 'When data changes frequently', 'Never'],
                            correctIndex: 1,
                            explanation: 'Embedding is best when related data is always accessed together and doesn\'t change often.'
                        },
                        {
                            id: 'q2',
                            question: 'What does populate() do?',
                            options: ['Creates new documents', 'Replaces ObjectId with actual document data', 'Deletes references', 'Validates data'],
                            correctIndex: 1,
                            explanation: 'populate() replaces ObjectId references with the actual document data from the referenced collection.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Middleware & Virtuals
        // ============================================
        {
            id: 'mongo-unit-4',
            title: 'Middleware & Virtuals',
            description: 'Use Mongoose middleware and virtual properties',
            items: [
                {
                    id: 'mongo-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Mongoose Middleware',
                    duration: '20 min',
                    content: `
# Mongoose Middleware (Hooks)

Middleware are functions that run at specific stages of the document lifecycle.

## Types of Middleware

- **Document middleware**: save, validate, remove
- **Query middleware**: find, findOne, update, delete
- **Aggregate middleware**: aggregate

## Pre Middleware

Runs BEFORE the operation:

\`\`\`javascript
// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Set updatedAt before save
userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

// Log before find
userSchema.pre('find', function() {
    console.log('Finding users...');
});
\`\`\`

## Post Middleware

Runs AFTER the operation:

\`\`\`javascript
// Log after save
userSchema.post('save', function(doc) {
    console.log('User saved:', doc._id);
});

// Send email after user creation
userSchema.post('save', async function(doc) {
    if (doc.isNew) {
        await sendWelcomeEmail(doc.email);
    }
});

// Clean up after delete
userSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Order.deleteMany({ user: doc._id });
    }
});
\`\`\`

## Error Handling Middleware

\`\`\`javascript
userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Email already exists'));
    } else {
        next(error);
    }
});
\`\`\`

---

## Your Mission
Add middleware to a User schema.
                    `,
                    tasks: [
                        { id: 1, description: 'Add pre save middleware: userSchema.pre("save", async function(next) { ... }) (line 15)', completed: false, regex: /userSchema\.pre\s*\(\s*["']save["']/ },
                        { id: 2, description: 'Hash password in middleware: this.password = await bcrypt.hash(this.password, 10) (line 18)', completed: false, regex: /bcrypt\.hash\s*\(\s*this\.password/ },
                        { id: 3, description: 'Check if modified: if (!this.isModified("password")) return next() (line 16)', completed: false, regex: /this\.isModified\s*\(\s*["']password["']\s*\)/ },
                        { id: 4, description: 'Add post save middleware: userSchema.post("save", function(doc) { ... }) (line 25)', completed: false, regex: /userSchema\.post\s*\(\s*["']save["']/ }
                    ],
                    files: [
                        { name: 'models/User.js', language: 'javascript', content: `const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});

// Pre-save middleware to hash password
// userSchema.pre('save', async function(next) {
//     Check if password is modified
//     Hash the password
//     Call next()
// });

// Post-save middleware to log
// userSchema.post('save', function(doc) {
//     Log the saved user
// });

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);` },
                        { name: 'package.json', language: 'json', content: `{
    "dependencies": {
        "mongoose": "^7.0.0",
        "bcryptjs": "^2.4.3"
    }
}` },
                        { name: 'README.md', language: 'markdown', content: `# Mongoose Middleware

Middleware hooks allow you to:
- Hash passwords before saving
- Update timestamps automatically
- Log operations
- Clean up related data on delete
- Send notifications after operations` }
                    ]
                },
                {
                    id: 'mongo-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Virtual Properties',
                    duration: '15 min',
                    content: `
# Mongoose Virtual Properties

Virtuals are properties that are NOT stored in MongoDB but computed from other fields.

## Basic Virtual

\`\`\`javascript
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

// Virtual for full name
userSchema.virtual('fullName').get(function() {
    return \`\${this.firstName} \${this.lastName}\`;
});

const user = new User({ firstName: 'John', lastName: 'Doe' });
console.log(user.fullName); // "John Doe"
\`\`\`

## Virtual Setter

\`\`\`javascript
userSchema.virtual('fullName')
    .get(function() {
        return \`\${this.firstName} \${this.lastName}\`;
    })
    .set(function(value) {
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last;
    });

user.fullName = 'Jane Smith';
console.log(user.firstName); // "Jane"
console.log(user.lastName);  // "Smith"
\`\`\`

## Include Virtuals in JSON

\`\`\`javascript
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
\`\`\`

## Virtual Populate

\`\`\`javascript
// User schema
const userSchema = new mongoose.Schema({
    name: String
});

// Virtual for user's orders (not stored)
userSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'user'
});

// Usage
const user = await User.findById(id).populate('orders');
console.log(user.orders); // Array of orders
\`\`\`

---

## Your Mission
Add virtual properties to a schema.
                    `,
                    tasks: [
                        { id: 1, description: 'Create fullName virtual getter: userSchema.virtual("fullName").get(function() { ... }) (line 12)', completed: false, regex: /userSchema\.virtual\s*\(\s*["']fullName["']\s*\)\.get/ },
                        { id: 2, description: 'Return combined name: return `${this.firstName} ${this.lastName}` (line 13)', completed: false, regex: /return\s*`\$\{this\.firstName\}.*\$\{this\.lastName\}`/ },
                        { id: 3, description: 'Add toJSON option: { toJSON: { virtuals: true } } in schema options (line 8)', completed: false, regex: /toJSON\s*:\s*\{\s*virtuals\s*:\s*true\s*\}/ },
                        { id: 4, description: 'Create virtual populate for orders (line 20)', completed: false, regex: /userSchema\.virtual\s*\(\s*["']orders["']\s*,\s*\{/ }
                    ],
                    files: [
                        { name: 'models/User.js', language: 'javascript', content: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: Date
}, {
    // Add toJSON and toObject options for virtuals
});

// Virtual: fullName
// userSchema.virtual('fullName').get(function() {
//     return firstName + lastName
// });

// Virtual: age (calculated from birthDate)
userSchema.virtual('age').get(function() {
    if (!this.birthDate) return null;
    const today = new Date();
    const birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
});

// Virtual populate: orders
// userSchema.virtual('orders', {
//     ref: 'Order',
//     localField: '_id',
//     foreignField: 'user'
// });

module.exports = mongoose.model('User', userSchema);` },
                        { name: 'test.js', language: 'javascript', content: `const User = require('./models/User');

async function test() {
    const user = new User({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        birthDate: new Date('1995-05-15')
    });
    
    console.log('Full Name:', user.fullName);
    console.log('Age:', user.age);
    console.log('JSON:', JSON.stringify(user, null, 2));
}

test();` },
                        { name: 'package.json', language: 'json', content: `{
    "dependencies": {
        "mongoose": "^7.0.0"
    }
}` }
                    ]
                },
                {
                    id: 'mongo-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Middleware & Virtuals Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'When does pre("save") middleware run?',
                            options: ['After saving', 'Before saving', 'During validation', 'On find'],
                            correctIndex: 1,
                            explanation: 'pre("save") middleware runs before the document is saved to the database.'
                        },
                        {
                            id: 'q2',
                            question: 'Are virtual properties stored in MongoDB?',
                            options: ['Yes', 'No, they are computed', 'Only if specified', 'Only for arrays'],
                            correctIndex: 1,
                            explanation: 'Virtuals are NOT stored in MongoDB. They are computed on-the-fly from other fields.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: Aggregation & Indexing
        // ============================================
        {
            id: 'mongo-unit-5',
            title: 'Aggregation & Indexing',
            description: 'Advanced queries and performance optimization',
            items: [
                {
                    id: 'mongo-5-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Aggregation Pipeline',
                    duration: '25 min',
                    content: `
# MongoDB Aggregation Pipeline

Aggregation processes data through stages to compute results.

## Pipeline Stages

\`\`\`javascript
db.orders.aggregate([
    { $match: { status: 'completed' } },     // Filter
    { $group: { _id: '$userId', total: { $sum: '$amount' } } }, // Group
    { $sort: { total: -1 } },                // Sort
    { $limit: 10 }                           // Limit
]);
\`\`\`

## Common Stages

### $match - Filter documents
\`\`\`javascript
{ $match: { status: 'active', age: { $gte: 18 } } }
\`\`\`

### $group - Group and aggregate
\`\`\`javascript
{
    $group: {
        _id: '$category',           // Group by field
        count: { $sum: 1 },         // Count
        totalSales: { $sum: '$price' },
        avgPrice: { $avg: '$price' },
        maxPrice: { $max: '$price' },
        minPrice: { $min: '$price' }
    }
}
\`\`\`

### $project - Shape output
\`\`\`javascript
{
    $project: {
        name: 1,
        email: 1,
        fullName: { $concat: ['$firstName', ' ', '$lastName'] },
        year: { $year: '$createdAt' }
    }
}
\`\`\`

### $sort - Sort results
\`\`\`javascript
{ $sort: { createdAt: -1, name: 1 } }
\`\`\`

### $lookup - Join collections
\`\`\`javascript
{
    $lookup: {
        from: 'orders',
        localField: '_id',
        foreignField: 'userId',
        as: 'orders'
    }
}
\`\`\`

### $unwind - Flatten arrays
\`\`\`javascript
{ $unwind: '$tags' }
\`\`\`

## Mongoose Aggregation

\`\`\`javascript
const result = await Order.aggregate([
    { $match: { status: 'completed' } },
    {
        $group: {
            _id: { $month: '$createdAt' },
            totalSales: { $sum: '$total' },
            orderCount: { $sum: 1 }
        }
    },
    { $sort: { _id: 1 } }
]);
\`\`\`

---

## Your Mission
Create aggregation pipelines.
                    `,
                    tasks: [
                        { id: 1, description: 'Add $match stage: { $match: { status: "completed" } } (line 5)', completed: false, regex: /\$match\s*:\s*\{/ },
                        { id: 2, description: 'Add $group stage with $sum: { $group: { _id: "$category", total: { $sum: "$price" } } } (line 8)', completed: false, regex: /\$group\s*:\s*\{[^}]*\$sum/ },
                        { id: 3, description: 'Add $sort stage: { $sort: { total: -1 } } (line 15)', completed: false, regex: /\$sort\s*:\s*\{/ },
                        { id: 4, description: 'Add $lookup for joining: { $lookup: { from: "users", ... } } (line 20)', completed: false, regex: /\$lookup\s*:\s*\{[^}]*from/ }
                    ],
                    files: [
                        { name: 'aggregations.js', language: 'javascript', content: `const Order = require('./models/Order');

// Sales by category
async function salesByCategory() {
    const result = await Order.aggregate([
        // 1. Match completed orders
        
        // 2. Group by category, sum prices
        
        // 3. Sort by total descending
        
    ]);
    return result;
}

// Orders with user details
async function ordersWithUsers() {
    const result = await Order.aggregate([
        // 4. Lookup users collection
        
        { $unwind: '$user' },
        { $project: { orderNumber: 1, total: 1, 'user.name': 1, 'user.email': 1 } }
    ]);
    return result;
}

// Monthly sales report
async function monthlySales() {
    const result = await Order.aggregate([
        { $match: { status: 'completed' } },
        {
            $group: {
                _id: {
                    year: { $year: '$createdAt' },
                    month: { $month: '$createdAt' }
                },
                totalSales: { $sum: '$total' },
                orderCount: { $sum: 1 },
                avgOrderValue: { $avg: '$total' }
            }
        },
        { $sort: { '_id.year': -1, '_id.month': -1 } }
    ]);
    return result;
}

module.exports = { salesByCategory, ordersWithUsers, monthlySales };` },
                        { name: 'models/Order.js', language: 'javascript', content: `const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    total: Number,
    status: { type: String, enum: ['pending', 'completed', 'cancelled'] },
    category: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);` },
                        { name: 'package.json', language: 'json', content: `{
    "dependencies": {
        "mongoose": "^7.0.0"
    }
}` }
                    ]
                },
                {
                    id: 'mongo-5-2',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Indexing for Performance',
                    duration: '15 min read',
                    content: `
# MongoDB Indexing

Indexes improve query performance by avoiding full collection scans.

## Creating Indexes

\`\`\`javascript
// Single field index
userSchema.index({ email: 1 });

// Compound index
userSchema.index({ lastName: 1, firstName: 1 });

// Unique index
userSchema.index({ email: 1 }, { unique: true });

// Text index (for search)
productSchema.index({ name: 'text', description: 'text' });

// TTL index (auto-delete)
sessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
\`\`\`

## Index Types

| Type | Use Case |
|------|----------|
| Single Field | Query on one field |
| Compound | Query on multiple fields |
| Multikey | Array fields |
| Text | Full-text search |
| Geospatial | Location queries |
| TTL | Auto-expiring documents |

## Query Optimization

\`\`\`javascript
// Explain query performance
const result = await User.find({ email: 'john@example.com' })
    .explain('executionStats');

// Check if index is used
console.log(result.executionStats.executionStages.stage);
// "IXSCAN" = index used
// "COLLSCAN" = full collection scan (slow!)
\`\`\`

## Best Practices

1. **Index frequently queried fields**
2. **Create compound indexes for multi-field queries**
3. **Don't over-index** (slows writes)
4. **Use explain() to verify index usage**
5. **Index fields used in sort operations**

## Schema-Level Indexes

\`\`\`javascript
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    createdAt: Date
});

// Add indexes
userSchema.index({ name: 1 });
userSchema.index({ createdAt: -1 });
userSchema.index({ name: 'text' }); // Text search
\`\`\`
                    `
                },
                {
                    id: 'mongo-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Aggregation & Indexing Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does $group do in aggregation?',
                            options: ['Filters documents', 'Groups documents and computes aggregates', 'Sorts documents', 'Joins collections'],
                            correctIndex: 1,
                            explanation: '$group groups documents by a specified field and can compute aggregates like sum, avg, count.'
                        },
                        {
                            id: 'q2',
                            question: 'Why use indexes?',
                            options: ['To store more data', 'To improve query performance', 'To encrypt data', 'To compress data'],
                            correctIndex: 1,
                            explanation: 'Indexes improve query performance by allowing MongoDB to find documents without scanning the entire collection.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default mongodbCourse;
