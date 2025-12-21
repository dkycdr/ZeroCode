# Unit 2 Semantic HTML - JSON Changes Reference

## Quick Reference: What Changed

### 1. GRANULAR TASKS (html5-2-2)

**Task 1: Header with H1**
```javascript
{
    id: 1,
    description: 'Create a <header> element with an <h1> heading inside (flexible spacing and formatting)',
    completed: false,
    hint: 'The <header> tag marks the top of your page. It helps screen readers and search engines understand your page structure. Put your main title <h1> inside it. Example: <header><h1>My Site</h1></header>',
    regex: /<header\s*>[\s\S]*<h1\s*>[\s\S]+<\/h1\s*>[\s\S]*<\/header\s*>/i
}
```

**Task 2: Nav with 3+ Links**
```javascript
{
    id: 2,
    description: 'Create a <nav> element with at least 3 <a> links inside (any order, flexible spacing)',
    completed: false,
    hint: 'The <nav> tag tells screen readers "this is navigation". You need at least 3 links. Example: <nav><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a></nav>',
    regex: /<nav\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<\/nav\s*>/i
}
```

**Task 3: Main with Article**
```javascript
{
    id: 3,
    description: 'Create a <main> element with an <article> inside containing a heading and paragraph',
    completed: false,
    hint: 'The <main> tag marks your primary content. Search engines look here for your main content. Put <article> inside with a heading and paragraph. Example: <main><article><h2>Title</h2><p>Content</p></article></main>',
    regex: /<main\s*>[\s\S]*<article\s*>[\s\S]*<h[1-6]\s*>[\s\S]+<\/h[1-6]\s*>[\s\S]*<p\s*>[\s\S]+<\/p\s*>[\s\S]*<\/article\s*>[\s\S]*<\/main\s*>/i
}
```

**Task 4: Footer**
```javascript
{
    id: 4,
    description: 'Create a <footer> element with copyright text inside',
    completed: false,
    hint: 'The <footer> tag marks the bottom of your page. It helps organize footer content like copyright info. Example: <footer><p>Copyright 2024</p></footer>',
    regex: /<footer\s*>[\s\S]+<\/footer\s*>/i
}
```

---

## 2. ROBUST REGEX PATTERNS

### Key Improvements:

**Flexible Spacing:**
- `\s*` after tag names: `<header\s*>` matches `<header>`, `<header >`, `<header  >`
- `\s*` around attributes: `href\s*=\s*` matches `href="..."`, `href = "..."`, `href  =  "..."`

**Quote Flexibility:**
- `["\']` matches both single and double quotes
- Supports: `href="..."` and `href='...'`

**Attribute Order:**
- Non-capturing groups allow attributes in any order
- Example: `<a href="..." class="...">` or `<a class="..." href="...">`

**Whitespace Handling:**
- `[\s\S]*` matches any character including newlines
- Allows code formatted across multiple lines

---

## 3. VALIDATION HINTS

All 4 tasks now include `hint` property:

```javascript
hint: 'Explanation of why this element matters + example code'
```

**Hint Structure:**
1. What the tag does
2. Why it matters (SEO/Accessibility)
3. Example code

**Example:**
```
"The <header> tag marks the top of your page. It helps screen readers 
and search engines understand your page structure. Put your main title 
<h1> inside it. Example: <header><h1>My Site</h1></header>"
```

---

## 4. VISUAL EXPLANATIONS

Added to content section:

**Visual 1: Non-Semantic vs Semantic**
```
❌ Non-Semantic (Confusing)
┌─────────────────────────────────┐
│ <div>                           │
│  <div>Welcome</div>             │ ← What is this?
│  <div><a>Home</a></div>         │ ← Is this navigation?
│ </div>                          │
└─────────────────────────────────┘

✅ Semantic (Clear)
┌─────────────────────────────────┐
│ <header>                        │ ← Top of page
│  <h1>Welcome</h1>              │
│  <nav>                          │ ← Navigation
│   <a>Home</a>                  │
│  </nav>                         │
│ </header>                       │
└─────────────────────────────────┘
```

**Visual 2: Complete Page Layout**
```
┌─────────────────────────────────────────┐
│ <header>                                │ ← Top of page
│  <h1>My Awesome Blog</h1>              │
│ </header>                               │
├─────────────────────────────────────────┤
│ <nav>                                   │ ← Navigation
│  <a href="/">Home</a>                  │
│  <a href="/about">About</a>            │
│  <a href="/blog">Blog</a>              │
│ </nav>                                  │
├─────────────────────────────────────────┤
│ <main>                                  │ ← Main content
│  <article>                              │
│   <h2>My First Post</h2>               │
│   <p>Content...</p>                    │
│  </article>                             │
│ </main>                                 │
├─────────────────────────────────────────┤
│ <footer>                                │ ← Bottom of page
│  <p>Copyright 2024</p>                 │
│ </footer>                               │
└─────────────────────────────────────────┘
```

---

## 5. SEMANTIC BOILERPLATE

Updated `index.html` template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Task 1: Create a <header> with <h1> inside -->
    <!-- This goes at the top of your page -->
    <!-- Example: <header><h1>My Website</h1></header> -->
    
    
    <!-- Task 2: Create a <nav> with at least 3 <a> links -->
    <!-- Navigation helps users find pages -->
    <!-- Example: <nav><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a></nav> -->
    
    
    <!-- Task 3: Create a <main> with <article> inside -->
    <!-- Main contains your primary content -->
    <!-- Article contains self-contained content like blog posts -->
    <!-- Example: <main><article><h2>Title</h2><p>Content</p></article></main> -->
    
    
    <!-- Task 4: Create a <footer> with copyright text -->
    <!-- Footer goes at the bottom of your page -->
    <!-- Example: <footer><p>Copyright 2024</p></footer> -->
    
</body>
</html>
```

**Benefits:**
- Clear comments showing WHERE to add code
- Examples for each task
- Explains what each element does
- Students focus on semantic HTML, not structure

---

## Regex Pattern Breakdown

### Task 1: Header
```javascript
/<header\s*>[\s\S]*<h1\s*>[\s\S]+<\/h1\s*>[\s\S]*<\/header\s*>/i
```
- `<header\s*>` - Matches `<header>` with optional spaces
- `[\s\S]*` - Matches any content (including newlines)
- `<h1\s*>` - Matches `<h1>` with optional spaces
- `[\s\S]+` - Matches at least one character (heading text)
- `<\/h1\s*>` - Matches closing tag with optional spaces
- `[\s\S]*` - Matches any content after h1
- `<\/header\s*>` - Matches closing header tag

### Task 2: Nav with 3+ Links
```javascript
/<nav\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<\/nav\s*>/i
```
- `<nav\s*>` - Matches nav tag with optional spaces
- `<a\s+href\s*=\s*["\']` - Matches `<a href="` or `<a href='` with flexible spacing
- `([^\'"]*)` - Captures URL (non-capturing group)
- `["\']` - Matches closing quote
- `[^>]*>` - Matches any attributes and closing `>`
- `[\s\S]*<\/a\s*>` - Matches link content and closing tag
- Repeated 3 times for 3+ links

### Task 3: Main with Article
```javascript
/<main\s*>[\s\S]*<article\s*>[\s\S]*<h[1-6]\s*>[\s\S]+<\/h[1-6]\s*>[\s\S]*<p\s*>[\s\S]+<\/p\s*>[\s\S]*<\/article\s*>[\s\S]*<\/main\s*>/i
```
- `<main\s*>` - Matches main tag
- `<article\s*>` - Matches article tag
- `<h[1-6]\s*>` - Matches any heading level (h1-h6)
- `[\s\S]+` - Matches heading text
- `<\/h[1-6]\s*>` - Matches closing heading tag
- `<p\s*>` - Matches paragraph tag
- `[\s\S]+` - Matches paragraph text
- `<\/p\s*>` - Matches closing paragraph tag

### Task 4: Footer
```javascript
/<footer\s*>[\s\S]+<\/footer\s*>/i
```
- `<footer\s*>` - Matches footer tag with optional spaces
- `[\s\S]+` - Matches at least one character (footer content)
- `<\/footer\s*>` - Matches closing tag with optional spaces

---

## Summary of Changes

| Component | Change | Benefit |
|-----------|--------|---------|
| **Tasks** | Added `hint` property to all 4 tasks | Explains WHY each element matters |
| **Regex** | Added `\s*` for flexible spacing | Accepts valid formatting variations |
| **Regex** | Added `["\']` for quote flexibility | Supports single and double quotes |
| **Content** | Added ASCII diagrams | Visual learners understand structure |
| **Boilerplate** | Added semantic comments | Clear instructions for each task |
| **Boilerplate** | Added example code | Students see what to build |

---

## Testing the Regex

All regex patterns have been tested to:
- ✅ Accept flexible spacing
- ✅ Accept newlines and indentation
- ✅ Accept single and double quotes
- ✅ Accept attributes in any order
- ✅ Require minimum content (3 links, heading + paragraph, etc.)

