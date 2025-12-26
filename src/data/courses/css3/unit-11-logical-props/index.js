import { doc1PhysicalVsLogical } from './01-doc-physical-vs-logical.js';
import { doc2BlockVsInline } from './02-doc-block-vs-inline.js';
import { doc3WritingModes } from './03-doc-writing-modes.js';
import { doc4LogicalShorthands } from './04-doc-logical-shorthands.js';
import { lab1ConvertingLogical } from './05-lab-converting-logical.js';
import { lab2VerticalRhythm } from './06-lab-vertical-rhythm.js';
import { lab3VerticalText } from './07-lab-vertical-text.js';
import { lab4LogicalBorders } from './08-lab-logical-borders.js';
import { quiz1Logical } from './09-quiz-logical.js';

export const unit11LogicalProps = {
    id: 'css3-unit-11',
    version: '2.0.0',
    title: 'Logical Properties: Global Architecture',
    description: 'Transition from physical coordinates to directional independence. Master writing modes and logical shorthands to build interfaces that scale effortlessly across global languages and orientations.',
    items: [
        doc1PhysicalVsLogical,
        doc2BlockVsInline,
        doc3WritingModes,
        doc4LogicalShorthands,
        lab1ConvertingLogical,
        lab2VerticalRhythm,
        lab3VerticalText,
        lab4LogicalBorders,
        quiz1Logical
    ]
};
