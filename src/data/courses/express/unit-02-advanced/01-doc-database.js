
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc5 = {
    id: 'express-2-doc-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Database Integration with MongoDB 🗄️',
    duration: '30 min read',
    content: `
# Deep Dive: Database Integration with MongoDB 🗄️

> "In production, data needs to persist. Databases are where your application's state lives beyond server restarts." — Every Backend Developer

## 1. Introduction: Why Databases?

So far, we've stored data in memory (arrays, objects). But when the server restarts, **all data is lost**. Databases solve this by providing **persistent storage**.

### 1.1 MongoDB Overview

**MongoDB** is a NoSQL database that stores data as JSON-like documents. It's the most popular database for Node.js/Express applications.

**Why MongoDB with Express?**
- **JSON everywhere**: Express uses JSON, MongoDB uses JSON (BSON)
- **Flexible schema**: No rigid tables, easy to iterate
- **Scalable**: Handles millions of documents
- **Easy to learn**: JavaScript-like query syntax

\`\`\`mermaid
graph LR
    Client["🌐 Client"] -->|HTTP Request| Express["⚙️ Express Server"]
    Express -->|Query| Mongoose["📦 Mongoose ODM"]
    Mongoose -->|BSON| MongoDB["🗄️ MongoDB Database"]
    MongoDB -->|Data| Mongoose
    Mongoose -->|JS Objects| Express
    Express -->|JSON Response| Client
\`\`\`

---

## 2. MongoDB vs SQL Databases

| Feature | MongoDB (NoSQL) | SQL (PostgreSQL, MySQL) |
|---------|-----------------|------------------------|
| **Data Model** | Documents (JSON-like) | Tables (rows/columns) |
| **Schema** | Flexible, dynamic | Fixed, predefined |
| **Relationships** | Embedded or referenced | Foreign keys, joins |
| **Query Language** | JavaScript-like | SQL |
| **Scaling** | Horizontal (sharding) | Vertical (more RAM/CPU) |
| **Best For** | Rapid development, unstructured data | Complex queries, transactions |

---

## 3. Installing MongoDB and Mongoose

### 3.1 Install MongoDB Locally

**macOS**:
\`\`\`bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
\`\`\`

**Ubuntu**:
\`\`\`bash
sudo apt-get install mongodb
sudo systemctl start mongodb
\`\`\`

**Windows**: Download from [mongodb.com](https://www.mongodb.com/try/download/community)

### 3.2 MongoDB Atlas (Cloud)

For production, use **MongoDB Atlas** (free tier available):
1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string

### 3.3 Install Mongoose

\`\`\`bash
npm install mongoose
\`\`\`

**Mongoose** is an ODM (Object Data Modeling) library that provides a schema-based solution for modeling data.

---

## 4. Connecting to MongoDB

### 4.1 Basic Connection

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection string
const DB_URI = 'mongodb://localhost:27017/myapp';
// Or for Atlas: mongodb+srv://username:password@cluster.mongodb.net/myapp

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(3000);
\`\`\`

### 4.2 Connection Events

\`\`\`javascript
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection closed');
  process.exit(0);
});
\`\`\`

---

## 5. Mongoose Schemas and Models

### 5.1 Defining a Schema

A **schema** defines the structure of documents in a collection.

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  age: {
    type: Number,
    min: 18,
    max: 120
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
\`\`\`

### 5.2 Schema Types

Common schema types:
- \`String\`
- \`Number\`
- \`Date\`
- \`Boolean\`
- \`Array\`
- \`mongoose.Schema.Types.ObjectId\` (for references)
- \`mongoose.Schema.Types.Mixed\` (any type)

---

## 6. CRUD Operations with Mongoose

### 6.1 Create (Insert)

\`\`\`javascript
// Create single document
const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

await newUser.save();

// Or use create()
const user = await User.create({
  name: 'Bob',
  email: 'bob@example.com',
  age: 30
});

// Create multiple
await User.insertMany([
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'Diana', email: 'diana@example.com' }
]);
\`\`\`

### 6.2 Read (Find)

\`\`\`javascript
// Find all
const users = await User.find();

// Find with filter
const admins = await User.find({ role: 'admin' });

// Find one
const user = await User.findOne({ email: 'alice@example.com' });

// Find by ID
const userById = await User.findById('507f1f77bcf86cd799439011');

// With query operators
const adults = await User.find({ age: { $gte: 18 } });

// Select specific fields
const names = await User.find().select('name email -_id');

// Limit, skip, sort
const page1 = await User.find()
  .limit(10)
  .skip(0)
  .sort({ createdAt: -1 });
\`\`\`

### 6.3 Update

\`\`\`javascript
// Update one document
await User.updateOne(
  { email: 'alice@example.com' },
  { $set: { age: 26 } }
);

// Update and return updated document
const updated = await User.findOneAndUpdate(
  { email: 'bob@example.com' },
  { $set: { role: 'admin' } },
  { new: true }  // Return updated doc
);

// Find by ID and update
const user = await User.findByIdAndUpdate(
  userId,
  { name: 'New Name' },
  { new: true, runValidators: true }
);

// Update multiple
await User.updateMany(
  { role: 'user' },
  { $set: { status: 'active' } }
);
\`\`\`

### 6.4 Delete

\`\`\`javascript
// Delete one
await User.deleteOne({ email: 'alice@example.com' });

// Find and delete (returns deleted doc)
const deleted = await User.findOneAndDelete({ email: 'bob@example.com' });

// Delete by ID
await User.findByIdAndDelete(userId);

// Delete multiple
await User.deleteMany({ status: 'inactive' });
\`\`\`

---

## 7. Express + Mongoose Example

### 7.1 Complete REST API

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

// CREATE - POST /api/users
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - GET /api/users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - GET /api/users/:id
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - PUT /api/users/:id
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - DELETE /api/users/:id
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

---

## 8. Relationships in MongoDB

### 8.1 Referenced Relationships

\`\`\`javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Reference to User model
  }
});

const Post = mongoose.model('Post', postSchema);

// Create post
const post = await Post.create({
  title: 'My Post',
  content: 'Content here',
  author: userId  // Just store the ID
});

// Populate (join) when querying
const postWithAuthor = await Post.findById(postId).populate('author');
// Now postWithAuthor.author contains full user object
\`\`\`

### 8.2 Embedded Relationships

\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: String,
  addresses: [{  // Embedded array
    street: String,
    city: String,
    country: String
  }]
});
\`\`\`

---

## 9. Model Methods and Statics

### 9.1 Instance Methods

\`\`\`javascript
userSchema.methods.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};

const user = await User.findOne({ email: 'alice@example.com' });
console.log(user.getFullName());
\`\`\`

### 9.2 Static Methods

\`\`\`javascript
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

const user = await User.findByEmail('alice@example.com');
\`\`\`

---

## 10. Best Practices

1. **Use environment variables** for connection strings
2. **Handle connection errors** properly
3. **Index frequently queried fields**
4. **Use select() to limit returned fields**
5. **Validate data at schema level**
6. **Use lean() for read-only queries** (faster)
7. **Close connections gracefully**
8. **Use transactions for multi-document operations**

---

## 11. Common Pitfalls

### 11.1 Not Awaiting Promises

\`\`\`javascript
// ❌ BAD: Forgot await
const users = User.find();  // Returns Promise, not data

// ✅ GOOD
const users = await User.find();
\`\`\`

### 11.2 Not Handling Errors

\`\`\`javascript
// ❌ BAD: No error handling
app.get('/users', async (req, res) => {
  const users = await User.find();  // Crashes on error
  res.json(users);
});

// ✅ GOOD
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

---

## 12. Summary

MongoDB with Mongoose provides:
- **Persistent storage** for Express applications
- **Schema validation** at the database level
- **Powerful querying** with JavaScript-like syntax
- **Relationships** via references and population
- **Middleware hooks** for pre/post operations

Next, we'll explore **Authentication** — securing your MongoDB-backed APIs.
    `
};
