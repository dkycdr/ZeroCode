import { doc1WhyA11y } from './01-doc-why-a11y';
import { doc2AriaBasics } from './02-doc-aria-basics';
import { doc3KeyboardNav } from './03-doc-keyboard-nav';
import { lab4Audit } from './04-lab-audit-semantics';
import { lab5Contrast } from './05-lab-contrast-color';
import { lab6AriaToggle } from './06-lab-aria-toggle';
import { quizA11y } from './07-quiz-a11y';

export const unit6Accessibility = {
    id: 'html5-unit-6-accessibility',
    version: '2.0.0', // Updated for Ghost Progress Detection
    title: 'Unit 6: Accessibility Masterclass',
    description: 'Build for everyone. Master ARIA, Focus Management, Contrast compliance, and Semantic audits.',
    items: [
        doc1WhyA11y,
        doc2AriaBasics,
        doc3KeyboardNav,
        lab4Audit,
        lab5Contrast,
        lab6AriaToggle,
        quizA11y
    ]
};
