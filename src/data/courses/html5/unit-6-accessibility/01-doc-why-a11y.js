import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhyA11y = {
    id: 'html5-u6-doc-1-why',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Business Case for Accessibility',
    duration: '18 min read',
    content: `
# Why Accessibility (A11y) Matters

## 1. The Numbers Don't Lie

**1 billion people** worldwide live with some form of disability. That's **15% of the global population**.

\`\`\`text
┌────────────────────────────────────────────────────────────┐
│  Global Disability Statistics                              │
├────────────────────────────────────────────────────────────┤
│  👁️  Visual impairments:     285 million                   │
│  👂  Hearing impairments:    466 million                   │
│  🧠  Cognitive disabilities: 200+ million                  │
│  🦾  Motor impairments:      Hundreds of millions          │
└────────────────────────────────────────────────────────────┘
\`\`\`

> [!IMPORTANT]
> These users have **money**. The global disability market controls over **$1.9 trillion** in annual disposable income.

---

## 2. It's Not Just "Blind People"

Many developers think A11y is just for screen reader users. **Reality check**:

### Permanent Disabilities
- **Blind** users with screen readers
- **Deaf** users needing captions
- **Motor impaired** users with keyboard-only navigation
- **Cognitively disabled** users needing simple layouts

### Temporary Disabilities
- You **broke your arm** → Mouse becomes hard to use
- You have **eye surgery** → High contrast becomes essential
- You're **recovering from concussion** → Need reduced motion

### Situational Disabilities
- **Holding a baby** → One-handed navigation only
- **Sunny day outside** → High contrast needed
- **Loud environment** → Captions needed for video
- **Slow internet** → Need text alternatives for images

---

## 3. The Curb Cut Effect

In the 1970s, **curb cuts** (ramps on sidewalks) were designed for wheelchair users.

\`\`\`text
   Before                    After
   ┌─────┐                  ╱─────────╲
   │     │                 ╱           ╲
───┘     └───          ───╱             ╲───
  (Step)                  (Ramp)
  
  Designed for:          Actually used by:
  ♿ Wheelchairs          ♿ Wheelchairs
                         🛒 Shopping carts
                         👶 Strollers
                         🧳 Luggage
                         🛹 Skateboards
                         🚴 Bikes
                         👴 Elderly
\`\`\`

**Semantic HTML is the digital curb cut.** It helps:
- 🔊 Screen readers
- 🤖 Google search bots (SEO)
- 🗣️ Voice assistants (Siri/Alexa)
- 📱 Mobile browsers
- ⌨️ Keyboard power users

---

## 4. The Law: You Can Be Sued

Inaccessible websites are **illegal** in many countries:

| Country | Law | Penalty |
|:--------|:----|:--------|
| **USA** | ADA (Americans with Disabilities Act) | Lawsuits, fines up to $75,000+ |
| **EU** | European Accessibility Act | Fines, market exclusion |
| **UK** | Equality Act 2010 | Lawsuits, compensation orders |
| **Canada** | AODA, ACA | Fines up to $100,000/day |

### Real Lawsuits:

**Domino's Pizza (2019)** - A blind user sued because he couldn't order pizza via the app. Supreme Court ruled in favor of the user. Domino's faced millions in legal fees.

**Target (2008)** - Class action lawsuit for inaccessible website. Settlement: **$6 million** + full website remediation.

**Beyoncé's Website (2019)** - Sued for missing alt text, keyboard traps, and lack of captions.

> [!CAUTION]
> **Lawsuits in the US have increased 400%** between 2017-2022. You are not immune.

---

## 5. WCAG: The Rulebook

**WCAG (Web Content Accessibility Guidelines)** is the global standard. Version 2.1 is current, 2.2 is latest.

### The Four Principles (POUR):

| Principle | Meaning | Example |
|:----------|:--------|:--------|
| **P**erceivable | Users can perceive the content | Alt text for images, captions for videos |
| **O**perable | Users can operate the interface | Keyboard navigation, no seizure triggers |
| **U**nderstandable | Users can understand the content | Clear labels, error messages, consistent UI |
| **R**obust | Content works with assistive tech | Valid HTML, ARIA where needed |

### Conformance Levels:

\`\`\`text
Level A     →  Minimum (basic barriers removed)
             │
Level AA    →  Target (most sites should aim here)
             │
Level AAA   →  Highest (complex, sometimes impractical)
\`\`\`

> [!TIP]
> **Target Level AA.** It's what most laws require and covers the majority of users.

---

## 6. Quick Wins: Where to Start

### 1. Alt Text for Images
\`\`\`html
<!-- ❌ Bad -->
<img src="hero.jpg">

<!-- ✅ Good -->
<img src="hero.jpg" alt="Team working together in modern office">

<!-- ✅ Decorative (skip) -->
<img src="decorative-line.png" alt="">
\`\`\`

### 2. Semantic HTML
\`\`\`html
<!-- ❌ Bad (divitis) -->
<div class="nav">
    <div class="nav-item">Home</div>
</div>

<!-- ✅ Good -->
<nav>
    <a href="/">Home</a>
</nav>
\`\`\`

### 3. Form Labels
\`\`\`html
<!-- ❌ Bad -->
<input type="email" placeholder="Email">

<!-- ✅ Good -->
<label for="email">Email</label>
<input type="email" id="email">
\`\`\`

### 4. Sufficient Contrast
Text must have **4.5:1 contrast ratio** against background (AA).

\`\`\`text
❌ #999 on #fff = 2.85:1 (FAIL)
✅ #595959 on #fff = 7:1 (PASS)
\`\`\`

### 5. Focus Indicators
\`\`\`css
/* ❌ NEVER do this */
button:focus {
    outline: none;
}

/* ✅ Replace with custom focus */
button:focus {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}
\`\`\`

---

## 7. Testing Tools

| Tool | Purpose | URL |
|:-----|:--------|:----|
| **Lighthouse** | Built into Chrome DevTools | F12 → Lighthouse tab |
| **axe DevTools** | Browser extension for A11y testing | axe.deque.com |
| **WAVE** | Visual overlay of A11y issues | wave.webaim.org |
| **Color Contrast Checker** | Check text/background contrast | webaim.org/resources/contrastchecker |
| **NVDA** | Free screen reader for Windows | nvaccess.org |
| **VoiceOver** | Built into macOS/iOS | Settings → Accessibility |

---

## 8. The Accessibility Tree

Browsers build an **Accessibility Tree** from your HTML. Screen readers read this tree, not your visual layout.

\`\`\`text
Visual Rendering              Accessibility Tree
┌─────────────────────┐       ┌─────────────────────┐
│  ┌─────┐ ┌─────┐   │       │ document            │
│  │ Nav │ │Logo │   │  →    │ ├── navigation      │
│  └─────┘ └─────┘   │       │ │   ├── link "Home" │
│  ┌─────────────┐   │       │ │   └── link "About"│
│  │   Main      │   │       │ └── main            │
│  │            │   │       │     └── heading     │
│  └─────────────┘   │       │         "Welcome"   │
└─────────────────────┘       └─────────────────────┘
\`\`\`

**If you use semantic HTML, the tree is correct automatically.** If you use divs for everything, the tree is meaningless.

---

## Key Takeaways

1. **15% of users have disabilities** - You're losing customers
2. **Temporary/Situational disabilities affect everyone** - Including you
3. **It's the law** - Lawsuits are increasing dramatically
4. **WCAG AA is the target** - Start there
5. **Semantic HTML is 80% of the work** - Use the right tags
6. **Testing is easy** - Lighthouse is built into Chrome
7. **A11y improves SEO** - Same principles, different beneficiary

> [!TIP]
> **Start with the easy wins:** Alt text, proper headings, form labels, and focus styles. You'll fix 80% of issues with 20% of the effort.
`
};
