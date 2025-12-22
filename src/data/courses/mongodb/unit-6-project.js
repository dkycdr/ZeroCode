
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Project = {
    id: 'mongo-unit-6',
    title: 'Unit 6: Capstone Project',
    description: 'Design the Database for a Task Manager App.',
    items: [
        // Project
        {
            id: 'mongo-6-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Project: Task Manager DB 🗄️',
            duration: '60 min',
            content: `
# Project: Task Manager DB 🗄️

## Overview
Design and Implement the Mongoose Schemas for a Task Management App (Like Trello).

## Requirements
1.  **User Schema**: name, email, password.
2.  **Task Schema**:
    *   title (String)
    *   completed (Boolean, default false)
    *   owner (ObjectId ref 'User')
3.  **Relationship**: Tasks must belong to a User.

## The Code
You need to write two model files and a script to create a user and assign a task to them.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'User Schema: name, email',
                    completed: false,
                    regex: /new\s+mongoose\.Schema\s*\(\{.*name.*email/
                },
                {
                    id: 2,
                    description: 'Task Schema: owner: { type: ObjectId, ref: "User" }',
                    completed: false,
                    regex: /owner\s*:\s*\{.*ref\s*:\s*['"]User['"]/
                },
                {
                    id: 3,
                    description: 'Script: Create User',
                    completed: false,
                    regex: /User\.create/
                },
                {
                    id: 4,
                    description: 'Script: Create Task with Owner ID',
                    completed: false,
                    regex: /Task\.create\s*\(\{.*owner/
                }
            ],
            files: [
                {
                    name: 'models/User.js',
                    language: 'javascript',
                    content: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Define User Schema here
});

module.exports = mongoose.model('User', userSchema);`
                },
                {
                    name: 'models/Task.js',
                    language: 'javascript',
                    content: `const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // Define Task Schema here (link to User)
});

module.exports = mongoose.model('Task', taskSchema);`
                },
                {
                    name: 'seed.js',
                    language: 'javascript',
                    content: `// Create a User and a Task
const mongoose = require('mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

async function seed() {
    // 1. Create User
    
    // 2. Create Task linked to User
    
}
`
                }
            ]
        }
    ]
};
