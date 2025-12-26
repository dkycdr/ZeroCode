import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ProjectBrief = {
    id: 'tailwind-5-brief',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Blueprint: The SaaS Landing Challenge 🎯',
    duration: '10 min read',
    content: `
# Blueprint: The SaaS Landing Challenge 🎯

## Meet Your Client
**ZeroSaaS** is a Series A startup that just secured \$5M funding.
Their product is revolutionary, but their landing page looks like it was built in 2010.
You have **72 hours** to transform it into a conversion machine.

## Design Philosophy: "Premium Without Premium Price"
The founder says: *"I want people to think we're a \$100M company, not a garage startup."*

## Your Design System
*   **Brand Color**: Indigo (\`bg-indigo-600\`) — Trust, Technology, Innovation.
*   **Supporting**: Slate (\`text-slate-600\`) — Professional, Neutral.
*   **Typeface**: Inter (San Francisco style) — Modern, Readable.
*   **Spacing Rhythm**: Generous padding (\`py-20\`, \`gap-12\`) — Don't crowd the design.

## Non-Negotiable Requirements

### 1. Mobile-First Reality Check
**60% of traffic comes from mobile.** If it doesn't work on iPhone, it doesn't work.

### 2. Sticky Navigation
The nav must follow the user as they scroll. Use **Glassmorphism** (\`backdrop-blur\`) for that premium Apple-like feel.

### 3. Hero Section Psychology
*   **Mobile**: Stack everything. Text first, then hero image.
*   **Desktop**: Split 50/50. Text left, visual proof right.
*   **Goal**: User should understand *what this is* in 3 seconds.

### 4. Social Proof Grid
A 3-column feature grid. Each card should have:
*   Icon (not emoji — real design)
*   Bold headline
*   Short description
*   Hover effect that lifts the card

### 5. Pricing Table
3 tiers. The middle one ("Pro") must **visually pop**:
*   Slight scale (\`scale-105\`)
*   Different background
*   Ring border (\`ring-2 ring-indigo-500\`)

## Success Criteria
✅ Looks premium on iPhone SE (smallest screen)
✅ Scrolling feels smooth (60fps)
✅ The "Pro" plan jumps out visually
✅ CTA button screams "Click me!"
    `
};
