import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Blueprint = {
    id: 'css-unit15-doc-blueprint',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Mental Model: Atomic Design ⚛️',
    duration: '10 min read',
    content: `
# Mental Model: Atomic Design ⚛️

## 1. Stop thinking in "Pages"
Junior developers build "pages" (Home, About).
Senior developers build **Systems**.

We use **Atomic Design** (Methodology by Brad Frost):
1.  **Atoms**: Tiny UI bits (Button, Avatar Image, Icon).
2.  **Molecules**: Groups of atoms (Avatar + Name + Title = "User Header").
3.  **Organisms**: Complex sections (Profile Card = User Header + Bio + Stats + Follow Button).
4.  **Templates**: The layout grid where organisms live.

## 2. Visual Hierarchy
Your Profile Card isn't just a box. It's a container of hierarchy.

\`\`\`mermaid
graph TD
    Molecule[Card Container] --> Atom1[Avatar (Round)]
    Molecule --> Atom2[Name (Bold H2)]
    Molecule --> Atom3[Role (Small Text)]
    Molecule --> Atom4[Stats Row (Flex)]
    Molecule --> Atom5[Action Button (Primary Color)]
\`\`\`

## 3. The Plan
We will build this **Molecule** step-by-step, treating every part as a reusable component.
`
};
