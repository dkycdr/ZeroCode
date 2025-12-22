import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Dicts = {
    id: 'py-unit-4',
    title: 'Dictionaries & Sets',
    description: 'Structure complex data with Key-Value pairs and unique Sets.',
    items: [
        {
            id: 'py-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Dictionaries',
            duration: '10 min read',
            content: `
# Dictionaries

Key-Value pairs (like Objects in JSON/JS). Use \`{}\`.

\`\`\`python
user = {
  "name": "Alice",
  "age": 30
}
print(user["name"]) # Alice
\`\`\`
            `
        },
        {
            id: 'py-4-2',
            type: CONTENT_TYPES.LESSON,
            title: 'User Profile',
            duration: '20 min',
            content: `
# Creating a Dict

Model a user profile.

---

## Your Mission
1. Create dict \`user\` with keys 'name' and 'role'.
2. Update 'role' to 'admin'.
3. Add a new key 'active' = True.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define user dict',
                    completed: false,
                    regex: /user\s*=\s*\{.*['"]name['"].*['"]role['"].*\}/s
                },
                {
                    id: 2,
                    description: 'Update role',
                    completed: false,
                    regex: /user\['role'\]\s*=\s*['"]admin['"]|user\["role"\]\s*=\s*['"]admin['"]/
                },
                {
                    id: 3,
                    description: 'Add active key',
                    completed: false,
                    regex: /user\['active'\]\s*=\s*True|user\["active"\]\s*=\s*True/
                }
            ],
            files: [
                {
                    name: 'profile.py',
                    language: 'python',
                    content: `# User Profile`
                }
            ]
        },
        {
            id: 'py-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Dict Methods',
            duration: '15 min read',
            content: `
# Dictionary Inspection

- \`.keys()\`: List of keys.
- \`.values()\`: List of values.
- \`.items()\`: List of (key, value) pairs.
- \`.get(key)\`: Safe access (returns None if missing, doesn't crash).

\`\`\`python
print(user.get("address")) # None
print(user["address"])     # CRASH (KeyError)
\`\`\`
            `
        },
        {
            id: 'py-4-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Safe Access',
            duration: '20 min',
            content: `
# Using .get()

Access keys safely without crashing.

---

## Your Mission
1. Dict \`config\` is provided.
2. Get 'theme' safely, default to 'light' if missing.
3. Print the theme.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Use .get() with default',
                    completed: false,
                    regex: /config\.get\(\s*['"]theme['"]\s*,\s*['"]light['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Print result',
                    completed: false,
                    regex: /print/
                }
            ],
            files: [
                {
                    name: 'config.py',
                    language: 'python',
                    content: `config = {"version": 1}
# Get theme safely`
                }
            ]
        },
        {
            id: 'py-4-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Sets',
            duration: '10 min read',
            content: `
# Sets

Unordered collections of **unique** elements. Use \`{}\` but without keys.

\`\`\`python
nums = {1, 2, 2, 3}
print(nums) # {1, 2, 3} (Duplicates removed)
\`\`\`
            `
        },
        {
            id: 'py-4-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Removing Duplicates',
            duration: '15 min',
            content: `
# Unique Filter

Clean up a list of emails with duplicates.

---

## Your Mission
1. List \`emails\` has duplicates.
2. Convert it to a set: \`unique_emails = set(emails)\`.
3. Print the count using \`len()\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Convert to set',
                    completed: false,
                    regex: /set\(\s*emails\s*\)/
                },
                {
                    id: 2,
                    description: 'Print length',
                    completed: false,
                    regex: /print\s*\(\s*len\s*\(/
                }
            ],
            files: [
                {
                    name: 'emails.py',
                    language: 'python',
                    content: `emails = ["a@a.com", "b@b.com", "a@a.com"]
# Remove duplicates`
                }
            ]
        },
        {
            id: 'py-4-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Nested Structures',
            duration: '15 min read',
            content: `
# Complex Data

You can nest Lists inside Dicts, Dicts inside Lists, etc.

\`\`\`python
users = [
  {"id": 1, "tags": ["admin", "staff"]},
  {"id": 2, "tags": ["guest"]}
]

print(users[0]["tags"][1]) # staff
\`\`\`
            `
        },
        {
            id: 'py-4-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Data Parsing',
            duration: '25 min',
            content: `
# JSON-like Access

Navigate a complex data structure.

---

## Your Mission
1. \`data\` dict is provided.
2. Access \`users\` list.
3. Get the \`email\` of the **first** user.
4. Print it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Access nested email',
                    completed: false,
                    regex: /data\['users'\]\[0\]\['email'\]|data\["users"\]\[0\]\["email"\]/
                },
                {
                    id: 2,
                    description: 'Print it',
                    completed: false,
                    regex: /print/
                }
            ],
            files: [
                {
                    name: 'api_data.py',
                    language: 'python',
                    content: `data = {
    "status": "ok",
    "users": [
        {"id": 1, "email": "alice@example.com"},
        {"id": 2, "email": "bob@example.com"}
    ]
}
# Print Alice's email`
                }
            ]
        },
        {
            id: 'py-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Dictionaries Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you access a missing key using []?',
                    options: ['Returns None', 'Returns undefined', 'Raises KeyError', 'Returns False'],
                    correctIndex: 2,
                    explanation: 'Direct access `dict[key]` crashes if key is missing. Use `.get()` for safety.'
                },
                {
                    id: 'q2',
                    question: 'Can keys in a dictionary be duplicated?',
                    options: ['Yes', 'No'],
                    correctIndex: 1,
                    explanation: 'Keys must be unique. Setting a key again overwrites the previous value.'
                },
                {
                    id: 'q3',
                    question: 'Which is a property of Sets?',
                    options: ['Ordered', 'Indexed', 'Unique Elements', 'Key-Value pairs'],
                    correctIndex: 2,
                    explanation: 'Sets automatically enforce the uniqueness of their elements.'
                }
            ]
        }
    ]
};
