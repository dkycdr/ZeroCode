# Unit 1 HTML Basics - Refactored JSON Output

## Lesson 2: Working with Lists (html5-1-2) - REFACTORED

### Content (Enhanced with Diagrams)

```markdown
# Working with Lists - Organize Information Effectively

## Why Lists Matter

Lists help organize information in a clear, scannable way. They're used everywhere:
- Navigation menus
- To-do lists
- Product features
- Instructions
- Outlines

## Three Types of Lists

### 1. Unordered Lists (Bullets)

Use `<ul>` for lists where order doesn't matter:

\`\`\`html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
\`\`\`

**Renders as:**
- Apples
- Bananas
- Oranges

### 2. Ordered Lists (Numbers)

Use `<ol>` for lists where order matters:

\`\`\`html
<ol>
    <li>Wake up</li>
    <li>Brush teeth</li>
    <li>Eat breakfast</li>
    <li>Go to work</li>
</ol>
\`\`\`

**Renders as:**
1. Wake up
2. Brush teeth
3. Eat breakfast
4. Go to work

### 3. Description Lists

Use `<dl>` for term-definition pairs:

\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - structure of web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - styling of web pages</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language for interactivity</dd>
</dl>
\`\`\`

## List Structure Visualization

\`\`\`
Unordered List Structure:

<ul>
  ├─ <li>Item 1</li>
  ├─ <li>Item 2</li>
  └─ <li>Item 3</li>
</ul>

Ordered List Structure:

<ol>
  ├─ <li>Step 1</li>
  ├─ <li>Step 2</li>
  └─ <li>Step 3</li>
</ol>

Key Points:
✅ Each item wrapped in <li>...</li>
✅ All items inside <ul> or <ol>
✅ Don't forget closing tags!
\`\`\`

## Nested Lists (Lists Inside Lists)

You can put lists inside lists:

\`\`\`html
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>
\`\`\`

## Real-World Examples

### Recipe Instructions
\`\`\`html
<h1>Chocolate Chip Cookies</h1>

<h2>Ingredients</h2>
<ul>
    <li>2 cups flour</li>
    <li>1 cup butter</li>
    <li>1 cup sugar</li>
    <li>2 eggs</li>
    <li>2 cups chocolate chips</li>
</ul>

<h2>Instructions</h2>
<ol>
    <li>Preheat oven to 350°F</li>
    <li>Mix butter and sugar</li>
    <li>Add eggs and flour</li>
    <li>Fold in chocolate chips</li>
    <li>Bake for 12 minutes</li>
</ol>
\`\`\`

### Navigation Menu
\`\`\`html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

## List Attributes

### Start Attribute (for ordered lists)

Start numbering from a different number:

\`\`\`html
<ol start="5">
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
</ol>
\`\`\`

### Type Attribute (for ordered lists)

Change the numbering style:

\`\`\`html
<ol type="A">  <!-- A, B, C... -->
    <li>First</li>
    <li>Second</li>
</ol>

<ol type="i">  <!-- i, ii, iii... -->
    <li>First</li>
    <li>Second</li>
</ol>

<ol type="1">  <!-- 1, 2, 3... (default) -->
    <li>First</li>
    <li>Second</li>
</ol>
\`\`\`

## Best Practices

1. **Use semantic lists** - Don't use `<div>` when you should use `<ul>`
2. **Keep list items simple** - One idea per item
3. **Use proper nesting** - Indent nested lists
4. **Don't overuse lists** - Use for actual lists, not layout
5. **Combine with links** - Lists are perfect for navigation

Now you're a list master! 📋
```

### Tasks (Granular - 6 Tasks)

```javascript
tasks: [
    {
        id: 1,
        description: 'Create an unordered list opening tag: <ul>',
        completed: false,
        hint: 'The <ul> tag starts an unordered (bulleted) list. Type <ul> on its own line. Don\'t forget to close it later with </ul>',
        regex: /^\s*<ul\s*>/im
    },
    {
        id: 2,
        description: 'Add 3 list items inside the <ul> with <li>Item</li> tags',
        completed: false,
        hint: 'Each list item needs three parts: <li> opening tag, text, </li> closing tag. You need exactly 3 items. Example: <li>Apple</li>',
        regex: /<ul\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<\/ul\s*>/i
    },
    {
        id: 3,
        description: 'Close the unordered list with </ul>',
        completed: false,
        hint: 'Close the unordered list with </ul>. Every opening tag needs a closing tag with a forward slash.',
        regex: /<\/ul\s*>/im
    },
    {
        id: 4,
        description: 'Create an ordered list opening tag: <ol>',
        completed: false,
        hint: 'The <ol> tag starts an ordered (numbered) list. Type <ol> on its own line. Don\'t forget to close it later with </ol>',
        regex: /^\s*<ol\s*>/im
    },
    {
        id: 5,
        description: 'Add 3 list items inside the <ol> with <li>Item</li> tags',
        completed: false,
        hint: 'Same as unordered list - each item needs <li>, text, and </li>. You need exactly 3 items for the ordered list.',
        regex: /<ol\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<\/ol\s*>/i
    },
    {
        id: 6,
        description: 'Close the ordered list with </ol>',
        completed: false,
        hint: 'Close the ordered list with </ol>. Make sure all your tags are properly closed!',
        regex: /<\/ol\s*>/im
    }
]
```

### Files (Consistent Boilerplate)

```javascript
files: [
    {
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Lists Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>📝 HTML Lists Practice</h1>
    
    <!-- Task 1-3: Create an unordered list with 3 fruits -->
    <h2>My Favorite Fruits</h2>
    <!-- Write your <ul> with 3 <li> items here -->
    
    
    <!-- Task 4-6: Create an ordered list with 3 steps -->
    <h2>How to Make Coffee</h2>
    <!-- Write your <ol> with 3 <li> items here -->
    
</body>
</html>`
    },
    {
        name: 'style.css',
        language: 'css',
        content: `/* CSS is ready - focus on HTML! */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

h1 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

h2 {
    color: #333;
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-top: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

ul, ol {
    background: white;
    padding: 20px 40px;
    border-radius: 8px;
    line-height: 1.8;
    margin: 10px 0 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

li {
    margin: 8px 0;
    color: #555;
}

/* Nested list styling */
ul ul, ol ol, ul ol, ol ul {
    margin-top: 10px;
    margin-bottom: 10px;
    background: #f9f9f9;
}`
    }
]
```

---

## Lesson 4: Images and Media (html5-1-4) - REFACTORED

### Content (Enhanced with Visual Aids)

```markdown
# Images and Media - Adding Visual Content

## The Image Tag

The `<img>` tag displays images:

\`\`\`html
<img src="photo.jpg" alt="A beautiful sunset">
\`\`\`

**Key attributes:**
- `src` = source (where the image file is)
- `alt` = alternative text (description)

## Image Sources

### Local Images (in your project)

\`\`\`html
<!-- Same folder -->
<img src="photo.jpg" alt="Photo">

<!-- In subfolder -->
<img src="images/photo.jpg" alt="Photo">

<!-- Parent folder -->
<img src="../photo.jpg" alt="Photo">
\`\`\`

### External Images (from the internet)

\`\`\`html
<img src="https://example.com/photo.jpg" alt="Photo">
\`\`\`

## The Alt Attribute - CRITICAL!

The `alt` attribute is VERY important:

1. **Accessibility** - Screen readers read it to blind users
2. **SEO** - Search engines use it to understand images
3. **Fallback** - Shows if image fails to load
4. **Context** - Helps users understand the image

### Good Alt Text Examples

✅ **Descriptive:**
\`\`\`html
<img src="sunset.jpg" alt="A golden sunset over the ocean with palm trees">
<img src="logo.png" alt="ZeroCode logo">
<img src="chart.png" alt="Sales chart showing 50% growth in Q1">
\`\`\`

❌ **Bad:**
\`\`\`html
<img src="sunset.jpg" alt="image">
<img src="logo.png" alt="logo.png">
<img src="chart.png" alt="">
\`\`\`

## Image Formats Comparison

| Format | Best For | File Size | Transparency | Animation | Browser Support |
|--------|----------|-----------|--------------|-----------|-----------------|
| **JPG** | Photos, realistic images | Small | ❌ No | ❌ No | ✅ All |
| **PNG** | Graphics, logos, icons | Medium | ✅ Yes | ❌ No | ✅ All |
| **GIF** | Simple animations | Medium | ✅ Yes | ✅ Yes | ✅ All |
| **WebP** | Modern web (smaller) | Smallest | ✅ Yes | ✅ Yes | ⚠️ Most |
| **SVG** | Icons, logos, vectors | Tiny | ✅ Yes | ✅ Yes | ✅ All |

### When to Use Each Format

\`\`\`
📸 Photo or realistic image?
   → JPG (smallest file size)

🎨 Logo, icon, or graphic?
   → PNG (supports transparency)

🎬 Animated image?
   → GIF or WebP

🌐 Modern website?
   → WebP (smallest, best quality)

📐 Scalable icon or diagram?
   → SVG (vector, scales perfectly)
\`\`\`

## Image Sizing

### Width and Height Attributes

\`\`\`html
<img src="photo.jpg" alt="Photo" width="300" height="200">
\`\`\`

**Why specify size?**
- Prevents layout shift while loading
- Improves page performance
- Maintains aspect ratio

### Responsive Images

\`\`\`html
<img src="photo.jpg" alt="Photo" style="max-width: 100%; height: auto;">
\`\`\`

## Linking Images

Make an image clickable:

\`\`\`html
<a href="page.html">
    <img src="thumbnail.jpg" alt="Click to view">
</a>
\`\`\`

## Figure and Figcaption

Group image with caption:

\`\`\`html
<figure>
    <img src="photo.jpg" alt="A sunset">
    <figcaption>Beautiful sunset at the beach</figcaption>
</figure>
\`\`\`

## Picture Element (Responsive Images)

Show different images for different screen sizes:

\`\`\`html
<picture>
    <source media="(max-width: 600px)" srcset="small.jpg">
    <source media="(max-width: 1200px)" srcset="medium.jpg">
    <img src="large.jpg" alt="Photo">
</picture>
\`\`\`

## Video Element

Embed videos:

\`\`\`html
<video width="400" height="300" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser doesn't support HTML5 video.
</video>
\`\`\`

**Attributes:**
- `controls` = show play/pause buttons
- `autoplay` = start playing automatically
- `loop` = repeat when finished
- `muted` = no sound

## Audio Element

Embed audio:

\`\`\`html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser doesn't support HTML5 audio.
</audio>
\`\`\`

## Iframe - Embed External Content

Embed YouTube videos, maps, etc:

\`\`\`html
<!-- YouTube video -->
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player">
</iframe>

<!-- Google Map -->
<iframe width="400" height="300"
    src="https://www.google.com/maps/embed?pb=...">
</iframe>
\`\`\`

## Best Practices

1. **Always use alt text** - Required for accessibility
2. **Optimize images** - Compress before uploading
3. **Use correct format** - JPG for photos, PNG for graphics
4. **Specify dimensions** - Prevents layout shift
5. **Use responsive images** - Works on all devices
6. **Lazy load** - Load images only when needed
7. **Provide fallbacks** - For video and audio

## Image Optimization Tips

1. **Compress images** - Use tools like TinyPNG
2. **Use WebP format** - Smaller file sizes
3. **Responsive images** - Different sizes for different devices
4. **Lazy loading** - Load images as user scrolls
5. **CDN** - Serve images from fast servers

Now you can add beautiful visuals to your pages! 🖼️
```

### Tasks (Advanced Regex - 3 Tasks)

```javascript
tasks: [
    {
        id: 1,
        description: 'Add an <img> tag with src and alt attributes (in any order, any quote type)',
        completed: false,
        hint: 'Images need two attributes: src (where the image is) and alt (description). Example: <img src="photo.jpg" alt="A sunset"> or <img alt=\'A sunset\' src=\'photo.jpg\'>. You can use single or double quotes, and put them in any order.',
        regex: /<img(?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*)>/i
    },
    {
        id: 2,
        description: 'Add an <img> tag with width and height attributes (in any order, with or without quotes)',
        completed: false,
        hint: 'Add width and height attributes to control image size. Example: <img src="photo.jpg" width="300" height="200"> or <img src="photo.jpg" height=200 width=300>. You can put them in any order, with or without quotes.',
        regex: /<img(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*)>/i
    },
    {
        id: 3,
        description: 'Create a <figure> element with <img> and <figcaption> inside',
        completed: false,
        hint: '<figure> groups an image with its caption. Put <img> inside, then add <figcaption> with text. Example: <figure><img src="..."><figcaption>Caption</figcaption></figure>',
        regex: /<figure\s*>[\s\S]*<img[^>]*>[\s\S]*<figcaption\s*>[\s\S]+<\/figcaption\s*>[\s\S]*<\/figure\s*>/i
    }
]
```

### Files (Consistent Boilerplate)

```javascript
files: [
    {
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Images Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🖼️ HTML Images Practice</h1>
    
    <!-- Task 1: Add an image with src and alt -->
    <h2>Task 1: Basic Image</h2>
    <!-- Add an <img> tag with src and alt attributes -->
    
    
    <!-- Task 2: Add an image with width and height -->
    <h2>Task 2: Sized Image</h2>
    <!-- Add an <img> tag with width and height attributes -->
    
    
    <!-- Task 3: Create a figure with image and caption -->
    <h2>Task 3: Figure with Caption</h2>
    <!-- Create a <figure> element with <img> and <figcaption> inside -->
    
</body>
</html>`
    },
    {
        name: 'style.css',
        language: 'css',
        content: `/* CSS is ready - focus on HTML! */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

h1 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

h2 {
    color: #333;
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-top: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

img {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    display: block;
}

figure {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

figcaption {
    font-style: italic;
    color: #666;
    margin-top: 15px;
    font-size: 0.95em;
}`
    }
]
```

---

## Summary of Refactored Changes

### html5-1-2 (Lists)
- ✅ 3 tasks → 6 granular tasks
- ✅ Added hints to each task
- ✅ Improved regex with flexible spacing
- ✅ Added structure diagram
- ✅ Consistent boilerplate

### html5-1-4 (Images)
- ✅ Advanced regex supporting quote variations and attribute order
- ✅ Added hints explaining flexibility
- ✅ Added image format comparison table
- ✅ Added visual format selection guide
- ✅ Consistent boilerplate

### All Lessons
- ✅ Consistent HTML boilerplate (DOCTYPE, meta tags, etc.)
- ✅ Consistent CSS styling
- ✅ Clear task descriptions
- ✅ Helpful hints for each task
- ✅ Advanced regex patterns

