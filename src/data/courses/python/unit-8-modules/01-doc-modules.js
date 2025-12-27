import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Modules = {
    id: 'py-u7-doc-1-modules',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Modules & Imports',
    duration: '15 min read',
    content: `
# Deep Dive: Modules & Imports

## 1. The Simplest Explanation

A module is just a **Python file** containing code you can reuse.

Instead of writing the same functions in every project, you put them in one file and **import** them wherever needed.

---

## 2. Real World Analogy: The Tool Library

Imagine a well-organized workshop:
- **Hammer cabinet** = \`hammer.py\`
- **Screwdriver cabinet** = \`screwdriver.py\`
- **Power tools room** = \`power/\` folder (package)

When you need a hammer, you don't build one. You go to the hammer cabinet and grab it.

That's what importing does - grabs tools from other files.

---

## 3. Ways to Import

\`\`\`python
# Import entire module
import math
print(math.sqrt(16))  # 4.0
print(math.pi)        # 3.14159...

# Import specific items
from math import sqrt, pi
print(sqrt(16))  # 4.0
print(pi)        # 3.14159...

# Import with alias (nickname)
import numpy as np
import pandas as pd

# Import all (AVOID! - pollutes namespace)
from math import *
\`\`\`

> [!WARNING]
> Avoid \`from module import *\` - it makes it unclear where functions come from.

---

## 4. Built-in Modules (Batteries Included)

Python comes with many modules ready to use:

| Module | Purpose | Example |
|:---|:---|:---|
| \`math\` | Math functions | \`sqrt()\`, \`sin()\`, \`pi\` |
| \`random\` | Random numbers | \`randint()\`, \`choice()\` |
| \`datetime\` | Dates and times | \`datetime.now()\` |
| \`os\` | Operating system | \`os.listdir()\` |
| \`json\` | JSON handling | \`json.load()\`, \`json.dump()\` |
| \`re\` | Regular expressions | \`re.search()\` |
| \`collections\` | Advanced data structures | \`Counter\`, \`defaultdict\` |

\`\`\`python
import random
import datetime

random.randint(1, 100)   # Random number 1-100
datetime.datetime.now()  # Current date/time
\`\`\`

---

## 5. Creating Your Own Module

Any .py file is automatically a module!

**myutils.py:**
\`\`\`python
def greet(name):
    return f"Hello, {name}!"

def calculate_tax(price, rate=0.1):
    return price * rate

VERSION = "1.0.0"
\`\`\`

**main.py:**
\`\`\`python
import myutils

print(myutils.greet("Alice"))
print(myutils.calculate_tax(100))
print(myutils.VERSION)
\`\`\`

---

## 6. Packages: Folders of Modules

A package is a folder containing modules. It must have an \`__init__.py\` file.

\`\`\`
mypackage/
    __init__.py
    utils.py
    helpers.py
\`\`\`

\`\`\`python
from mypackage import utils
from mypackage.helpers import some_function
\`\`\`

---

## 7. The \`__name__\` Variable

Every module has a special \`__name__\` variable:
- \`"__main__"\` if the file is run directly
- The module name if imported

\`\`\`python
# mymodule.py
def main():
    print("Running as main program")

if __name__ == "__main__":
    main()  # Only runs when executed directly, not when imported
\`\`\`

This is the standard way to make a file work both as a module AND as a script.

---

## 8. Where Python Looks for Modules

Python searches in this order:
1. Current directory
2. \`PYTHONPATH\` environment variable
3. Standard library location
4. Site-packages (pip installed)

\`\`\`python
import sys
print(sys.path)  # See the search paths
\`\`\`
`
};
