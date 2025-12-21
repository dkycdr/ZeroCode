# HTML5 Unit 0 - Tasks Reference (JSON Structure)

## Complete Task Array with Hints and Improved Regex

```javascript
tasks: [
    {
        id: 1,
        description: 'Add <!DOCTYPE html> at the very top of the file',
        completed: false,
        hint: 'DOCTYPE must be at the very beginning, before any other code. It tells the browser this is HTML5.',
        regex: /^\s*<!DOCTYPE\s+html>/im
    },
    {
        id: 2,
        description: 'Create <html> opening tag after DOCTYPE',
        completed: false,
        hint: 'After <!DOCTYPE html>, add <html> on a new line. This wraps your entire page.',
        regex: /<!DOCTYPE\s+html>\s*\n\s*<html>/im
    },
    {
        id: 3,
        description: 'Create <head> section inside <html>',
        completed: false,
        hint: 'Inside <html>, add <head>...</head>. The head contains page information like the title.',
        regex: /<html>\s*\n\s*<head>/im
    },
    {
        id: 4,
        description: 'Add <title> inside <head> with page title',
        completed: false,
        hint: 'Inside <head>, add <title>Your Title</title>. This shows in the browser tab.',
        regex: /<head>\s*[\s\S]*<title>\s*[^<]{1,}\s*<\/title>/i
    },
    {
        id: 5,
        description: 'Close </head> tag and create <body> section',
        completed: false,
        hint: 'After </head>, add <body>. This is where all visible content goes.',
        regex: /<\/head>\s*\n\s*<body>/im
    },
    {
        id: 6,
        description: 'Add <h1> heading inside <body> with your name',
        completed: false,
        hint: 'Inside <body>, add <h1>Your Name</h1>. Remember to close the tag with </h1>!',
        regex: /<body>\s*[\s\S]*<h1>\s*[^<]{1,}\s*<\/h1>/i
    },
    {
        id: 7,
        description: 'Add <p> paragraph about yourself (minimum 20 characters)',
        completed: false,
        hint: 'After <h1>, add <p>Your text here</p>. Make sure it\'s at least 20 characters long and properly closed.',
        regex: /<p>\s*[\s\S]{20,}\s*<\/p>/i
    },
    {
        id: 8,
        description: 'Add <ul> or <ol> list with at least 3 <li> items',
        completed: false,
        hint: 'Create a list with <ul> (bullets) or <ol> (numbers). Each item must be in <li>...</li> tags. Need at least 3 items!',
        regex: /<(ul|ol)>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>[\s\S]*<\/(ul|ol)>/i
    },
    {
        id: 9,
        description: 'Add <a> link to ZeroCode website with href attribute',
        completed: false,
        hint: 'Add <a href="https://zerocode.ac.id">ZeroCode</a>. Make sure href has quotes and the tag is closed!',
        regex: /<a\s+href\s*=\s*["\']https?:\/\/[^"\']*zerocode[^"\']*["\']\s*>\s*[^<]{1,}\s*<\/a>/i
    },
    {
        id: 10,
        description: 'Close </body> and </html> tags to complete the page',
        completed: false,
        hint: 'At the end of your file, add </body> then </html>. This closes all your tags properly!',
        regex: /<\/body>\s*\n\s*<\/html>\s*$/im
    }
]
```

---

## Regex Pattern Explanations

### Task 1: DOCTYPE
```regex
/^\s*<!DOCTYPE\s+html>/im
```
- `^` - Start of string
- `\s*` - Optional leading whitespace
- `<!DOCTYPE\s+html>` - DOCTYPE declaration with flexible spacing
- `i` flag - Case insensitive
- `m` flag - Multiline mode

**Accepts:**
- `<!DOCTYPE html>`
- `  <!DOCTYPE html>`
- `<!DOCTYPE  html>`

---

### Task 2: HTML Tag After DOCTYPE
```regex
/<!DOCTYPE\s+html>\s*\n\s*<html>/im
```
- `<!DOCTYPE\s+html>` - DOCTYPE with flexible spacing
- `\s*\n\s*` - Optional whitespace, newline, optional whitespace
- `<html>` - HTML opening tag

**Accepts:**
- `<!DOCTYPE html>\n<html>`
- `<!DOCTYPE html>\n  <html>`
- `<!DOCTYPE html>  \n  <html>`

---

### Task 3: Head Section
```regex
/<html>\s*\n\s*<head>/im
```
- `<html>` - HTML opening tag
- `\s*\n\s*` - Newline with optional whitespace
- `<head>` - Head opening tag

**Accepts:**
- `<html>\n<head>`
- `<html>\n  <head>`
- `<html>  \n  <head>`

---

### Task 4: Title Tag
```regex
/<head>\s*[\s\S]*<title>\s*[^<]{1,}\s*<\/title>/i
```
- `<head>` - Head opening tag
- `\s*[\s\S]*` - Optional whitespace, then any characters (including newlines)
- `<title>` - Title opening tag
- `\s*[^<]{1,}\s*` - Optional whitespace, 1+ non-tag characters, optional whitespace
- `<\/title>` - Title closing tag

**Accepts:**
- `<head><title>My Page</title>`
- `<head>\n  <title>My Page</title>`
- `<head>\n  <title> My Page </title>`

---

### Task 5: Body After Head
```regex
/<\/head>\s*\n\s*<body>/im
```
- `<\/head>` - Head closing tag
- `\s*\n\s*` - Newline with optional whitespace
- `<body>` - Body opening tag

**Accepts:**
- `</head>\n<body>`
- `</head>\n  <body>`
- `</head>  \n  <body>`

---

### Task 6: H1 in Body
```regex
/<body>\s*[\s\S]*<h1>\s*[^<]{1,}\s*<\/h1>/i
```
- `<body>` - Body opening tag
- `\s*[\s\S]*` - Optional whitespace, then any characters
- `<h1>` - H1 opening tag
- `\s*[^<]{1,}\s*` - Optional whitespace, 1+ non-tag characters, optional whitespace
- `<\/h1>` - H1 closing tag

**Accepts:**
- `<body><h1>John</h1>`
- `<body>\n  <h1>John</h1>`
- `<body>\n  <h1> John </h1>`

---

### Task 7: Paragraph (20+ chars)
```regex
/<p>\s*[\s\S]{20,}\s*<\/p>/i
```
- `<p>` - Paragraph opening tag
- `\s*` - Optional whitespace
- `[\s\S]{20,}` - 20 or more characters (including spaces and newlines)
- `\s*` - Optional whitespace
- `<\/p>` - Paragraph closing tag

**Accepts:**
- `<p>This is a paragraph about myself</p>` (exactly 20+ chars)
- `<p>\n  This is a paragraph about myself\n</p>`
- `<p>  This is a paragraph about myself  </p>`

**Rejects:**
- `<p>Short text</p>` (less than 20 chars)

---

### Task 8: List with 3+ Items
```regex
/<(ul|ol)>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>[\s\S]*<\/(ul|ol)>/i
```
- `<(ul|ol)>` - Either `<ul>` or `<ol>`
- `\s*[\s\S]*` - Optional whitespace, then any characters
- `<li>\s*[^<]{1,}\s*<\/li>` - First list item (1+ chars)
- `\s*[\s\S]*` - Any characters between items
- `<li>\s*[^<]{1,}\s*<\/li>` - Second list item
- `\s*[\s\S]*` - Any characters between items
- `<li>\s*[^<]{1,}\s*<\/li>` - Third list item
- `[\s\S]*<\/(ul|ol)>` - Closing tag

**Accepts:**
- `<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`
- `<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ol>`
- `<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li></ul>` (4+ items OK)

**Rejects:**
- `<ul><li>Item 1</li><li>Item 2</li></ul>` (only 2 items)

---

### Task 9: Link to ZeroCode
```regex
/<a\s+href\s*=\s*["\']https?:\/\/[^"\']*zerocode[^"\']*["\']\s*>\s*[^<]{1,}\s*<\/a>/i
```
- `<a\s+href` - `<a` tag with space(s) before href
- `\s*=\s*` - Equals sign with optional whitespace
- `["\']` - Either single or double quote
- `https?:\/\/` - http or https protocol
- `[^"\']*zerocode[^"\']*` - Any characters containing "zerocode"
- `["\']` - Closing quote
- `\s*>` - Optional whitespace before `>`
- `\s*[^<]{1,}\s*` - 1+ non-tag characters (link text)
- `<\/a>` - Closing tag

**Accepts:**
- `<a href="https://zerocode.ac.id">ZeroCode</a>`
- `<a href='https://zerocode.ac.id'>ZeroCode</a>`
- `<a href="https://www.zerocode.ac.id">Visit ZeroCode</a>`
- `<a href = "https://zerocode.ac.id" > ZeroCode </a>`

**Rejects:**
- `<a href="https://example.com">Link</a>` (no "zerocode" in URL)
- `<a href=https://zerocode.ac.id>ZeroCode</a>` (no quotes)

---

### Task 10: Closing Tags
```regex
/<\/body>\s*\n\s*<\/html>\s*$/im
```
- `<\/body>` - Body closing tag
- `\s*\n\s*` - Newline with optional whitespace
- `<\/html>` - HTML closing tag
- `\s*` - Optional trailing whitespace
- `$` - End of string
- `m` flag - Multiline mode

**Accepts:**
- `</body>\n</html>`
- `</body>\n  </html>`
- `</body>  \n  </html>`
- `</body>\n</html>  ` (trailing whitespace)

**Rejects:**
- `</body></html>` (no newline between)
- `</body>\n</html>\n<script>` (extra content after)

---

## Key Regex Improvements

### Flexibility Features
1. **Whitespace Handling:** `\s*` allows optional spaces/tabs
2. **Newline Support:** `\n` explicitly matches newlines
3. **Multiline Mode:** `m` flag allows `^` and `$` to match line boundaries
4. **Case Insensitive:** `i` flag handles different cases
5. **Character Classes:** `[\s\S]` matches any character including newlines
6. **Quantifiers:** `{20,}` for minimum length requirements

### Validation Strictness
- Still validates correct syntax
- Rejects invalid HTML (missing tags, wrong order)
- Accepts valid formatting variations
- Supports both single and double quotes
- Handles both `<ul>` and `<ol>` lists

---

## Testing Examples

### Valid HTML (Should Pass All Tasks)
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>John Doe</h1>
    <p>I am learning HTML and it's really fun and interesting!</p>
    <ul>
      <li>Reading</li>
      <li>Coding</li>
      <li>Gaming</li>
    </ul>
    <a href="https://zerocode.ac.id">Visit ZeroCode</a>
  </body>
</html>
```

### Common Mistakes (Should Fail Specific Tasks)

**Missing DOCTYPE (Fails Task 1):**
```html
<html>
  <head>
    <title>My Page</title>
  </head>
</html>
```

**Missing closing tag (Fails Task 10):**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
<!-- Missing </html> -->
```

**Paragraph too short (Fails Task 7):**
```html
<p>Short</p>
```

**Only 2 list items (Fails Task 8):**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

## Implementation Notes

1. **Regex Flags:** All patterns use `i` (case-insensitive) and some use `m` (multiline)
2. **Flexibility:** Patterns accept valid HTML variations while rejecting invalid syntax
3. **Hints:** Each task has a specific hint to guide students on common errors
4. **Progressive:** Tasks build on each other, creating a complete HTML page
5. **Validation:** Regex patterns validate both structure and content requirements

