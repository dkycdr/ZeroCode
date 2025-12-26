import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2FileWriting = {
    id: 'py-u8-doc-2-writing',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Writing Files',
    duration: '12 min read',
    content: `
# Deep Dive: Writing Files

## 1. The Simplest Explanation

Writing to a file means saving data from your program to permanent storage.

\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello, File!")
\`\`\`

Now the data exists even after your program ends.

---

## 2. Real World Analogy: The Notebook

Writing to a file is like writing in a notebook:
- \`"w"\` mode = Get a NEW notebook (erases old content)
- \`"a"\` mode = Add to existing notebook
- \`"x"\` mode = Only write if notebook doesn't exist

---

## 3. Write Modes

| Mode | Behavior |
|:---|:---|
| \`"w"\` | **Write** - Creates new file or **overwrites** existing |
| \`"a"\` | **Append** - Adds to end of file |
| \`"x"\` | **Exclusive** - Creates new file, error if exists |
| \`"wb"\` | **Write Binary** - For images, etc. |

> [!WARNING]
> Mode \`"w"\` **destroys** the existing file content! Be careful.

---

## 4. Basic Writing

\`\`\`python
# Write mode - creates or overwrites
with open("output.txt", "w") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")

# Append mode - adds to end
with open("output.txt", "a") as f:
    f.write("Line 3\\n")
\`\`\`

---

## 5. Writing Multiple Lines

\`\`\`python
lines = ["First line", "Second line", "Third line"]

with open("output.txt", "w") as f:
    for line in lines:
        f.write(line + "\\n")

# Or use writelines (you add the \\n yourself!)
with open("output.txt", "w") as f:
    f.writelines(line + "\\n" for line in lines)
\`\`\`

---

## 6. Writing JSON (Common!)

\`\`\`python
import json

data = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "JavaScript"]
}

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)
\`\`\`

**data.json:**
\`\`\`json
{
  "name": "Alice",
  "age": 25,
  "skills": [
    "Python",
    "JavaScript"
  ]
}
\`\`\`

---

## 7. Writing CSV

\`\`\`python
import csv

data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "Jakarta"],
    ["Bob", 30, "Bandung"]
]

with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)
\`\`\`

> [!NOTE]
> Include \`newline=""\` on Windows to avoid extra blank lines.

---

## 8. Practical Example: Log File

\`\`\`python
from datetime import datetime

def log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("app.log", "a") as f:
        f.write(f"[{timestamp}] {message}\\n")

log("Application started")
log("User logged in")
log("Processing complete")
\`\`\`

**app.log:**
\`\`\`
[2024-12-26 10:30:00] Application started
[2024-12-26 10:30:05] User logged in
[2024-12-26 10:30:10] Processing complete
\`\`\`

---

## 9. Encoding (International Characters)

For non-English text, specify encoding:

\`\`\`python
# Writing Unicode (emoji, Indonesian, Chinese, etc.)
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Halo! 你好! 🎉")

# Reading with encoding
with open("output.txt", encoding="utf-8") as f:
    content = f.read()
\`\`\`

---

## 10. Safe File Writing Pattern

\`\`\`python
import os

def safe_write(filename, data):
    # Write to temp file first
    temp = filename + ".tmp"
    with open(temp, "w") as f:
        f.write(data)
    
    # Replace original with temp (atomic on most systems)
    os.replace(temp, filename)
\`\`\`

This prevents data corruption if the program crashes mid-write.
`
};
