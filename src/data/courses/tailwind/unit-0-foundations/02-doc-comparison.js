import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Comparison = {
    id: 'tailwind-u0-doc-2-comparison',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Tailwind vs Bootstrap vs Vanilla CSS',
    duration: '10 min read',
    content: `
# Tailwind vs Bootstrap vs Vanilla CSS

## The Three Approaches Compared

Let's build the **same button** using three different methodologies.

### 1. Vanilla CSS

\`\`\`html
<button class="cta-button">Get Started</button>
\`\`\`

\`\`\`css
.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
\`\`\`

**Pros:**
- ✅ Complete control
- ✅ Semantic class name
- ✅ No framework dependency

**Cons:**
- ❌ Context switching (HTML ↔ CSS)
- ❌ Naming is hard
- ❌ CSS grows over time
- ❌ Hard to maintain consistency

---

### 2. Bootstrap

\`\`\`html
<button class="btn btn-primary btn-lg">Get Started</button>
\`\`\`

**Pros:**
- ✅ Pre-built components
- ✅ Fast prototyping
- ✅ Responsive grid system

**Cons:**
- ❌ Every Bootstrap site looks the same
- ❌ Includes 200KB+ CSS you don't need
- ❌ Hard to customize without fighting specificity
- ❌ Limited to predefined components
- ❌ jQuery dependency (older versions)

**Customization Nightmare:**

\`\`\`css
/* Overriding Bootstrap */
.btn-primary {
  background-color: #667eea !important; /* Force override */
  border-color: #667eea !important;
}

.btn-primary:hover {
  background-color: #764ba2 !important;
}
\`\`\`

Notice the \`!important\` spam? That's fighting the framework.

---

### 3. Tailwind CSS

\`\`\`html
<button class="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-purple-500/50 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
  Get Started
</button>
\`\`\`

**Pros:**
- ✅ No context switching (all in HTML)
- ✅ Highly customizable
- ✅ Small production bundle (via PurgeCSS)
- ✅ Constraint-based design system
- ✅ Dead-simple responsive design

**Cons:**
- ❌ Longer class names
- ❌ Learning curve for class names
- ❌ Initially "looks messy"

---

## Side-by-Side Feature Comparison

| Feature | Vanilla CSS | Bootstrap | Tailwind |
|---------|-------------|-----------|----------|
| **Learning Curve** | Medium | Low | Medium |
| **Customization** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Bundle Size** | Tiny* | ~200KB | ~5-10KB* |
| **Development Speed** | Slow | Fast | Very Fast |
| **Consistency** | Manual | Enforced | Enforced |
| **Responsive Utilities** | Manual | Good | Excellent |
| **Dark Mode** | Manual | Poor | Built-in |
| **Community** | N/A | Huge | Growing Fast |

*With proper tree-shaking/purging

---

## Real-World Scenario: Building a Card

### Vanilla CSS Approach

\`\`\`html
<div class="product-card">
  <img src="product.jpg" class="product-image">
  <h3 class="product-title">Product Name</h3>
  <p class="product-price">$29.99</p>
  <button class="add-to-cart-btn">Add to Cart</button>
</div>
\`\`\`

\`\`\`css
.product-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 8px;
}

.product-price {
  color: #059669;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.add-to-cart-btn {
  width: 100%;
  background: #3b82f6;
  color: white;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
\`\`\`

**Lines of code:** ~40

### Bootstrap Approach

\`\`\`html
<div class="card">
  <img src="product.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Product Name</h5>
    <p class="text-success fs-4 fw-bold">$29.99</p>
    <button class="btn btn-primary w-100">Add to Cart</button>
  </div>
</div>
\`\`\`

**Lines of code:** ~7  
**But:** Limited customization, 200KB framework

### Tailwind Approach

\`\`\`html
<div class="bg-white rounded-lg p-5 shadow-md">
  <img src="product.jpg" class="w-full h-48 object-cover rounded">
  <h3 class="text-lg font-semibold mt-4 mb-2">Product Name</h3>
  <p class="text-green-600 text-2xl font-bold mb-4">$29.99</p>
  <button class="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
    Add to Cart
  </button>
</div>
\`\`\`

**Lines of code:** ~7  
**Bundle size:** <10KB in production

---

## When to Choose Each Approach

### Choose Vanilla CSS if:
- ✅ You have a very specific design vision
- ✅ You're building a small static site
- ✅ You don't need a build process
- ✅ You have low performance requirements

### Choose Bootstrap if:
- ✅ You need a quick prototype
- ✅ You're okay with "Bootstrap look"
- ✅ You don't need heavy customization
- ✅ You're building an internal tool/admin panel

### Choose Tailwind if:
- ✅ You want custom designs
- ✅ You value development speed
- ✅ You need a design system
- ✅ You care about bundle size
- ✅ You're building a modern web app

---

## The Verdict

| Use Case | Winner |
|----------|--------|
| **Custom Branding** | Tailwind |
| **Quick Prototype** | Bootstrap |
| **Learning CSS** | Vanilla CSS |
| **Production App** | Tailwind |
| **Small Static Site** | Vanilla CSS |
| **Design System** | Tailwind |
| **Team Consistency** | Tailwind |

---

## Migration Path

Many teams start with **Bootstrap** for prototyping, then migrate to **Tailwind** for production because:

1. Tailwind's utility classes map 1:1 with CSS properties
2. You can gradually replace Bootstrap with Tailwind
3. Better long-term maintainability

> [!TIP]
> **Pro Tip:** You can use Tailwind alongside other frameworks during migration. They don't conflict!

---

## Conclusion

**Tailwind CSS** offers the best balance of:
- **Speed** (faster than Vanilla)
- **Flexibility** (more than Bootstrap)
- **Consistency** (design system enforced)
- **Performance** (smallest production bundle)

It's not about being the "best" framework—it's about being the best **for your use case**. For modern web apps with custom designs, Tailwind wins. 🏆
`
};
