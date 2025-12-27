import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1FileReading = {
    id: 'py-u8-doc-1-reading',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Reading Files',
    duration: '15 min read',
    content: `
# Deep Dive: Reading Files

## 1. The Simplest Explanation

Files store data **permanently** - even after your program ends.

Reading a file means: open it, read the contents into your program, close it.

---

## 2. Real World Analogy: The Library Book

To read a library book:
1. **Open** the book (borrow it)
2. **Read** the pages
3. **Close** the book (return it)

Same with files - you must open before reading, and close when done.

---

## 3. The \`open()\` Function

\`\`\`python
# Basic syntax
file = open("filename.txt", "mode")
# do stuff with file
file.close()
\`\`\`

**Modes for reading:**
| Mode | Description |
|:---|:---|
| \`"r"\` | Read text (default) |
| \`"rb"\` | Read binary (images, etc.) |

---

## 4. The with Statement (Best Practice!)

The \`with\` statement automatically closes the file:

\`\`\`python
# Without with (risky - might forget to close)
file = open("data.txt", "r")
content = file.read()
file.close()

# With "with" (safe - auto-closes)
with open("data.txt", "r") as file:
    content = file.read()
# File is automatically closed here
\`\`\`

> [!IMPORTANT]
> **Always use \`with\`!** It handles closing even if errors occur.

---

## 5. Reading Methods

\`\`\`python
# Read ENTIRE file as one string
with open("data.txt") as f:
    content = f.read()
    print(content)

# Read ONE line
with open("data.txt") as f:
    line = f.readline()
    print(line)

# Read ALL lines as a list
with open("data.txt") as f:
    lines = f.readlines()
    print(lines)  # ["line1\\n", "line2\\n", ...]
\`\`\`

---

## 6. Iterating Through Lines (Most Common)

For large files, don't read all at once:

\`\`\`python
with open("data.txt") as f:
    for line in f:
        print(line.strip())  # .strip() removes \\n
\`\`\`

This reads one line at a time - memory efficient!

---

## 7. Reading CSV Files

CSV = Comma Separated Values (spreadsheet data)

\`\`\`python
import csv

with open("data.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)  # Each row is a list
\`\`\`

For more power, use \`pandas\`:
\`\`\`python
import pandas as pd

df = pd.read_csv("data.csv")
print(df)
\`\`\`

---

## 8. Reading JSON Files

\`\`\`python
import json

with open("data.json") as f:
    data = json.load(f)
    print(data)  # Python dict or list
    print(data["name"])
\`\`\`

---

## 9. File Paths

\`\`\`python
# Same folder as your script
"data.txt"

# Subfolder
"data/file.txt"

# Absolute path (Windows)
"C:/Users/Name/Documents/data.txt"

# Absolute path (Mac/Linux)
"/home/user/documents/data.txt"

# Use os.path for cross-platform paths
import os
path = os.path.join("data", "file.txt")
\`\`\`

---

## 10. Handling File Not Found

\`\`\`python
try:
    with open("missing.txt") as f:
        content = f.read()
except FileNotFoundError:
    print("File doesn't exist!")
\`\`\`

Or check first:
\`\`\`python
import os

if os.path.exists("data.txt"):
    with open("data.txt") as f:
        # ...
else:
    print("File not found")
\`\`\`
`
};
