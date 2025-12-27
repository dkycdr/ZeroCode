import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Pip = {
    id: 'py-u7-doc-2-pip',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: pip & Virtual Environments',
    duration: '15 min read',
    content: `
# Deep Dive: pip & Virtual Environments

## 1. The Simplest Explanation

Python's built-in modules are great, but the **community** has created thousands more.

\`pip\` is Python's package manager - it downloads and installs these community packages.

---

## 2. Real World Analogy: The App Store

Think of pip as the **App Store** for Python:
- Browse packages (like browsing apps)
- Install with one command (like tapping "Install")
- Update packages (like app updates)
- Uninstall when done (like deleting apps)

---

## 3. Basic pip Commands

\`\`\`bash
# Install a package
pip install requests

# Install specific version
pip install requests==2.28.0

# Install multiple packages
pip install flask pandas numpy

# Upgrade a package
pip install --upgrade requests

# Uninstall a package
pip uninstall requests

# See what's installed
pip list

# See package details
pip show requests
\`\`\`

---

## 4. requirements.txt

Save your project's dependencies:

\`\`\`bash
# Create requirements.txt from current environment
pip freeze > requirements.txt
\`\`\`

**requirements.txt:**
\`\`\`
flask==2.0.1
requests==2.28.0
pandas>=1.3.0
\`\`\`

\`\`\`bash
# Install all dependencies from file
pip install -r requirements.txt
\`\`\`

> [!IMPORTANT]
> Always include \`requirements.txt\` in your project so others can install dependencies easily.

---

## 5. The Problem with Global Installs

Imagine this scenario:
- Project A needs \`requests 2.0\`
- Project B needs \`requests 3.0\`

If you install globally, you can only have ONE version! 

**Solution: Virtual Environments**

---

## 6. Virtual Environments

A virtual environment is an **isolated folder** containing its own Python and packages.

### Creating a Virtual Environment
\`\`\`bash
# Create
python -m venv myenv

# On Windows
myenv\\Scripts\\activate

# On Mac/Linux
source myenv/bin/activate

# Your prompt changes to show the environment
(myenv) $
\`\`\`

### Working in a Virtual Environment
\`\`\`bash
# Now pip installs to THIS environment only
pip install flask

# Deactivate when done
deactivate
\`\`\`

---

## 7. Project Workflow

\`\`\`bash
# 1. Create new project folder
mkdir my_project && cd my_project

# 2. Create virtual environment
python -m venv venv

# 3. Activate it
source venv/bin/activate  # or venv\\Scripts\\activate

# 4. Install packages
pip install flask requests

# 5. Save dependencies
pip freeze > requirements.txt

# 6. Work on your project...

# 7. Deactivate when done
deactivate
\`\`\`

---

## 8. Popular Packages to Know

| Package | Purpose |
|:---|:---|
| \`requests\` | HTTP requests (APIs) |
| \`flask\` / \`django\` | Web frameworks |
| \`pandas\` | Data analysis |
| \`numpy\` | Numerical computing |
| \`matplotlib\` | Charts and graphs |
| \`pytest\` | Testing |
| \`black\` | Code formatting |
| \`pillow\` | Image processing |

---

## 9. Finding Packages

The official package repository is **PyPI** (Python Package Index):
- https://pypi.org

Search for packages, read documentation, see download stats.

---

## 10. Common Issues

### "pip not found"
\`\`\`bash
# Try using python -m pip
python -m pip install requests
\`\`\`

### Permission Denied
\`\`\`bash
# NEVER use sudo pip on Mac/Linux
# Use a virtual environment instead!
\`\`\`

### Wrong Python Version
\`\`\`bash
# Be explicit
python3 -m pip install requests
# or
pip3 install requests
\`\`\`
`
};
