import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3KeyboardNav = {
    id: 'html5-u6-doc-3-keyboard',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Focus & Keyboard Navigation',
    duration: '15 min read',
    content: `
# Focus & Keyboard Navigation

Power users and disabled users rely on the **Tab key** to navigate. If your site doesn't work with only a keyboard, your site is broken.

---

## 1. The Focus Ring: Never Remove It

That blue/black outline around focused elements? **Don't remove it.**

\`\`\`css
/* ❌ ACCESSIBILITY CRIME */
button:focus {
    outline: none;
}

/* ❌ Also bad */
*:focus {
    outline: 0;
}
\`\`\`

### Why It's Bad:
Keyboard users have **no idea** what element is currently focused. They're navigating blind.

### The Right Way: Replace, Don't Remove

\`\`\`css
/* ✅ Custom focus style */
button:focus {
    outline: none; /* Remove default */
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
    border-color: #667eea;
}

/* ✅ Even better: Use :focus-visible */
button:focus-visible {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}
\`\`\`

### :focus vs :focus-visible

| Pseudo-class | When it applies |
|:-------------|:----------------|
| \`:focus\` | Always when focused (keyboard or mouse click) |
| \`:focus-visible\` | Only when focus should be visible (keyboard navigation) |

\`\`\`css
/* ✅ Best of both worlds */
button:focus {
    outline: none;
}

button:focus-visible {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}
\`\`\`

This shows the focus ring for keyboard users but hides it for mouse users.

---

## 2. The Natural Tab Order

By default, these elements are focusable:
- \`<a href>\` (with href!)
- \`<button>\`
- \`<input>\`, \`<textarea>\`, \`<select>\`
- Elements with \`tabindex="0"\`

### Tab Order = DOM Order

\`\`\`html
<!-- User tabs: Button A → Button B → Button C -->
<button>Button A</button>
<button>Button B</button>
<button>Button C</button>
\`\`\`

The tab order follows the **DOM order**, not the visual/CSS order.

> [!WARNING]
> If you visually reorder elements with CSS (flexbox \`order\`, grid \`order\`), the tab order will NOT match the visual order. This confuses users!

---

## 3. Tabindex Explained

| Value | Behavior |
|:------|:---------|
| \`tabindex="0"\` | Add to natural tab order (makes div/span focusable) |
| \`tabindex="-1"\` | Focusable via JS only (\`.focus()\`), skipped by Tab |
| \`tabindex="1+"\` | **NEVER USE** - forces custom order, causes chaos |

### Making Non-Interactive Elements Focusable

\`\`\`html
<!-- This div becomes focusable and interactive -->
<div tabindex="0" role="button" onclick="doSomething()">
    Click me
</div>
\`\`\`

> [!TIP]
> If you need a focusable element, use a real \`<button>\` instead of a \`<div tabindex="0">\`. It's already keyboard accessible!

### Using tabindex="-1" for Programmatic Focus

\`\`\`html
<!-- Modal container - not in tab order, but focusable via JS -->
<div id="modal" tabindex="-1" role="dialog">
    <h2>Modal Title</h2>
    <button>Close</button>
</div>

<script>
// Focus the modal when it opens
document.getElementById('modal').focus();
</script>
\`\`\`

---

## 4. The Skip Link

Screen reader and keyboard users have to Tab through your **entire navigation** before reaching the main content. That's frustrating.

### The Solution: Skip to Content Link

\`\`\`html
<body>
    <!-- Skip link - visually hidden until focused -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <nav>
        <!-- 50+ navigation links -->
    </nav>
    
    <main id="main-content" tabindex="-1">
        <!-- Main content starts here -->
    </main>
</body>
\`\`\`

### CSS for Skip Link

\`\`\`css
.skip-link {
    position: absolute;
    top: -100px;
    left: 16px;
    z-index: 9999;
    padding: 16px 24px;
    background: #1a1a2e;
    color: white;
    text-decoration: none;
    border-radius: 0 0 8px 8px;
    font-weight: 600;
    transition: top 0.2s;
}

/* Show when focused */
.skip-link:focus {
    top: 0;
}
\`\`\`

### How It Works:

1. User presses Tab on page load
2. Skip link appears at top of viewport
3. User presses Enter to jump to \`#main-content\`
4. Focus moves to main content, skipping all navigation

---

## 5. Focus Trapping (for Modals)

When a modal is open, focus should be **trapped inside it**. Users shouldn't be able to Tab to elements behind the modal.

\`\`\`text
┌────────────────────────────────────────┐
│             PAGE (dimmed)              │
│  ┌──────────────────────────────────┐  │
│  │           MODAL                  │  │
│  │  ┌─────────────────────────┐     │  │
│  │  │  Tab cycles here only   │     │  │
│  │  │  Button A → Button B →  │     │  │
│  │  │  Button A → ...         │     │  │
│  │  └─────────────────────────┘     │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
\`\`\`

### JavaScript Focus Trap

\`\`\`javascript
function trapFocus(modalElement) {
    const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modalElement.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            // Shift + Tab: going backwards
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab: going forwards
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
    
    // Focus first element when modal opens
    firstElement.focus();
}

// Usage
const modal = document.getElementById('my-modal');
trapFocus(modal);
\`\`\`

---

## 6. Roving Tabindex Pattern

For toolbar/menu components with multiple buttons, use **roving tabindex**:

- Only ONE item in the group has \`tabindex="0"\`
- Other items have \`tabindex="-1"\`
- Arrow keys move through items

### Example: Toolbar

\`\`\`html
<div role="toolbar" aria-label="Formatting">
    <button tabindex="0" aria-pressed="false">Bold</button>
    <button tabindex="-1" aria-pressed="false">Italic</button>
    <button tabindex="-1" aria-pressed="false">Underline</button>
</div>

<script>
const buttons = document.querySelectorAll('[role="toolbar"] button');
let currentIndex = 0;

function updateTabindex(newIndex) {
    buttons[currentIndex].tabIndex = -1;
    buttons[newIndex].tabIndex = 0;
    buttons[newIndex].focus();
    currentIndex = newIndex;
}

buttons.forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            const next = (index + 1) % buttons.length;
            updateTabindex(next);
        }
        if (e.key === 'ArrowLeft') {
            const prev = (index - 1 + buttons.length) % buttons.length;
            updateTabindex(prev);
        }
    });
});
</script>
\`\`\`

---

## 7. Testing Keyboard Navigation

### Manual Testing Checklist:

1. **Start at top of page** - Press Tab
2. **Can you see focus?** - There should be a visible indicator
3. **Is the order logical?** - Left to right, top to bottom
4. **Can you reach all interactive elements?** - Every button, link, input
5. **Can you activate elements?** - Enter/Space should work
6. **No keyboard traps?** - Can you Tab away from any element?
7. **Modals trap focus?** - Tab should cycle inside modal only
8. **Skip link works?** - First Tab shows skip link

### Browser DevTools

Chrome DevTools → **Rendering** tab → Check **"Emulate a focused page"**

This keeps focus visible even when DevTools is focused.

---

## Key Takeaways

1. **Never remove outline** - Replace it with a custom style
2. **Use :focus-visible** - Modern way to show focus only for keyboard
3. **Tab order = DOM order** - Don't break it with CSS reordering
4. **Skip links are essential** - Let users bypass navigation
5. **Trap focus in modals** - Prevent Tabbing behind the modal
6. **Test with keyboard only** - Put your mouse away and try
7. **Interactive = focusable** - If you can click it, you should be able to Tab to it

> [!TIP]
> **Quick test:** Click anywhere on your page, then press Tab 20 times. Can you see where focus is at all times? Can you reach all buttons and links?
`
};
