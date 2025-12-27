import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3SetupCdn = {
    id: 'tailwind-u0-doc-3-cdn',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Quick Setup with CDN',
    duration: '8 min read',
    content: `
# Quick Setup with Tailwind CDN

## The Fastest Way to Start

Want to try Tailwind without a build process? Use the **CDN (Content Delivery Network)** version!

> [!WARNING]
> **CDN limitations:** No custom configuration, larger file size (~3MB), not for production. Use it for **prototyping and learning only**.

---

## Step 1: Add the CDN Script

Add this line to your HTML \`<head>\`:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewp ort" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CDN Demo</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <h1 class="text-3xl font-bold text-blue-600">
        Hello Tailwind!
    </h1>
</body>
</html>
\`\`\`

**That's it!** You now have access to all Tailwind utilities.

---

## Step 2: Test It Out

Create a button to verify it's working:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
\`\`\`

If the button has a blue background, white text, and rounded corners—Tailwind is working! ✅

---

## Step 3: Basic CDN Configuration (Optional)

You can customize the CDN version with a config object:

\`\`\`html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: '#ff6b6b',
        }
      }
    }
  }
</script>
\`\`\`

Now you can use your custom color:

\`\`\`html
<div class="bg-brand text-white p-4">
  Custom brand color!
</div>
\`\`\`

---

## CDN vs Build Process Comparison

| Feature | CDN | Build Process |
|---------|-----|---------------|
| **Setup Time** | 30 seconds | 5 minutes |
| **File Size** | ~3MB | ~5-10KB |
| **Custom Config** | Limited | Full |
| **Production Ready** | ❌ No | ✅ Yes |
| **Hot Reload** | ❌ No | ✅ Yes |
| **PurgeCSS** | ❌ No | ✅ Yes |
| **Best For** | Learning | Production |

---

## Complete CDN Starter Template

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CDN Starter</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#3b82f6',
              secondary: '#8b5cf6',
            }
          }
        }
      }
    </script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    
    <!-- Your Code Here -->
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 class="text-3xl font-bold text-primary mb-4">
            Welcome to Tailwind!
        </h1>
        <p class="text-gray-600 mb-6">
            Start building beautiful interfaces with utility-first CSS.
        </p>
        <button class="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
        </button>
    </div>
    
</body>
</html>
\`\`\`

---

## When to Use the CDN

### ✅ Good Use Cases:
- Learning Tailwind basics
- Quick prototypes
- Code pen demos
- Testing ideas
- Teaching/workshops

### ❌ Bad Use Cases:
- Production websites
- Client projects
- Large applications
- Performance-critical sites

---

## Moving Beyond CDN

Once you're comfortable with Tailwind basics, you'll want a proper build process for:

1. **Smaller Bundle Size**: 3MB → 5-10KB
2. **Custom Configuration**: Full theme control
3. **Hot Reload**: Instant Preview
4. **JIT Mode**: On-demand class generation
5. **Production Optimization**: PurgeCSS

We'll cover the modern setup with Vite in the next lesson! 🚀

> [!TIP]
> **Pro Tip:** Keep this CDN template bookmarked for quick experiments and learning!
`
};
