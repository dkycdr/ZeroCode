import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2AriaBasics = {
    id: 'html5-u6-doc-2-aria',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Concept: ARIA Basics (And When NOT to Use It)',
    duration: '15 min read',
    content: `
# ARIA (Accessible Rich Internet Applications) 🎯

Sometimes HTML isn't enough. How do you tell a blind user that a \`<div>\` is actually a "Progress Bar"?
You use **ARIA** - a set of attributes that add accessibility information to elements.

## 1. The ARIA Decision Tree

\`\`\`mermaid
graph TD
    START["Need accessibility?"] --> Q1{"Does native HTML<br/>element exist?"}
    
    Q1 --> |"Yes"| USE_HTML["✅ Use native HTML<br/>&lt;button&gt;, &lt;nav&gt;, &lt;main&gt;"]
    Q1 --> |"No"| Q2{"Is it a custom<br/>widget?"}
    
    Q2 --> |"Yes"| USE_ARIA["🔧 Use ARIA<br/>role, aria-label, etc."]
    Q2 --> |"No"| DECORATIVE{"Is it decorative?"}
    
    DECORATIVE --> |"Yes"| HIDE["👻 aria-hidden='true'"]
    DECORATIVE --> |"No"| USE_ARIA
    
    style USE_HTML fill:#22c55e,color:#fff
    style USE_ARIA fill:#3b82f6,color:#fff
    style HIDE fill:#6b7280,color:#fff
\`\`\`

---

## 2. The First Rule of ARIA

> [!CAUTION]
> **"The first rule of ARIA is: Do NOT use ARIA."**
> 
> If a native HTML element exists, use it instead!

\`\`\`mermaid
graph LR
    subgraph "❌ Bad"
        B1["&lt;div role='button'<br/>onClick='...'&gt;<br/>Click Me&lt;/div&gt;"]
    end
    
    subgraph "✅ Good"
        G1["&lt;button&gt;<br/>Click Me<br/>&lt;/button&gt;"]
    end
    
    style B1 fill:#ef4444,color:#fff
    style G1 fill:#22c55e,color:#fff
\`\`\`

### Why Native is Better:
| Feature | Native \`<button>\` | Div + ARIA |
|---------|-------------------|------------|
| Keyboard focus | ✅ Automatic | ❌ Need tabindex |
| Enter/Space click | ✅ Automatic | ❌ Need JS |
| Screen reader | ✅ "Button" | ⚠️ Need role |
| Form submission | ✅ Works | ❌ Won't work |

---

## 3. Essential ARIA Attributes

\`\`\`mermaid
graph TB
    ARIA["ARIA Attributes"]
    
    ARIA --> LABEL["aria-label<br/>📝 Invisible name"]
    ARIA --> LABELLEDBY["aria-labelledby<br/>🔗 Reference another element"]
    ARIA --> DESCRIBEDBY["aria-describedby<br/>📖 Extra description"]
    ARIA --> HIDDEN["aria-hidden<br/>👻 Hide from readers"]
    ARIA --> LIVE["aria-live<br/>📢 Announce changes"]
    ARIA --> ROLE["role<br/>🎭 Change identity"]
    
    style ARIA fill:#E44D26,color:#fff
    style LABEL fill:#3b82f6,color:#fff
    style HIDDEN fill:#6b7280,color:#fff
    style ROLE fill:#8b5cf6,color:#fff
\`\`\`

### \`aria-label\`
Gives an invisible name to an element.

\`\`\`html
<button aria-label="Close Menu">X</button>
\`\`\`

Without this, a screen reader just says "Button X". With it: "Close Menu button".

### \`aria-hidden="true"\`
Hides decorative elements from screen readers.

\`\`\`html
<i class="icon-star" aria-hidden="true"></i>
<span>5 stars</span>
\`\`\`

Prevents the reader from saying "Image star icon" - only reads "5 stars".

### \`role\`
Changes the identity of an element.

\`\`\`html
<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    50%
</div>
\`\`\`

---

## 4. ARIA States and Properties

\`\`\`mermaid
stateDiagram-v2
    [*] --> Collapsed: aria-expanded="false"
    Collapsed --> Expanded: User clicks
    Expanded --> Collapsed: User clicks
    
    Expanded: aria-expanded="true"
    Collapsed: aria-expanded="false"
\`\`\`

### Common State Attributes:

| Attribute | Purpose | Values |
|-----------|---------|--------|
| \`aria-expanded\` | Dropdown open/closed | \`true\` / \`false\` |
| \`aria-selected\` | Tab/item selected | \`true\` / \`false\` |
| \`aria-disabled\` | Element disabled | \`true\` / \`false\` |
| \`aria-pressed\` | Toggle button state | \`true\` / \`false\` |
| \`aria-checked\` | Checkbox state | \`true\` / \`false\` / \`mixed\` |

---

## 5. Live Regions

For dynamic content that changes (notifications, chat, etc.):

\`\`\`html
<div aria-live="polite">
    <!-- Content changes here will be announced -->
    New message received!
</div>
\`\`\`

| Value | Behavior |
|-------|----------|
| \`polite\` | Wait for user to finish, then announce |
| \`assertive\` | Interrupt immediately (use sparingly!) |
| \`off\` | Don't announce |

---

## 6. Key Takeaways

1. **Don't use ARIA if native HTML exists** - Native is always better
2. **\`aria-label\`** - Name elements without visible text
3. **\`aria-hidden\`** - Hide decorative elements
4. **\`role\`** - Only for custom widgets
5. **Test with screen readers** - NVDA (free), VoiceOver (Mac), JAWS
`
};
