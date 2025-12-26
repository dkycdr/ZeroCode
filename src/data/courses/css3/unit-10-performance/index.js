import { doc1CriticalPath } from './01-doc-critical-path.js';
import { doc2LayoutPaintComposite } from './02-doc-layout-paint-composite.js';
import { doc3WillChange } from './03-doc-will-change.js';
import { doc4ContentVisibility } from './04-doc-content-visibility.js';
import { lab1GpuPromotion } from './05-lab-gpu-promotion.js';
import { lab2PreventingThrashing } from './06-lab-preventing-thrashing.js';
import { lab3ContainmentIsolation } from './07-lab-containment-isolation.js';
import { lab4AcceleratedOpacity } from './08-lab-accelerated-opacity.js';
import { quiz1Performance } from './09-quiz-performance.js';

export const unit10Performance = {
    id: 'css3-unit-10',
    version: '2.0.0',
    title: 'Performance: The Rendering Engine',
    description: 'Deconstruct the browser\'s rendering lifecycle. Master the metrics and advanced CSS properties required to build high-fidelity, 60 FPS interfaces.',
    items: [
        doc1CriticalPath,
        doc2LayoutPaintComposite,
        doc3WillChange,
        doc4ContentVisibility,
        lab1GpuPromotion,
        lab2PreventingThrashing,
        lab3ContainmentIsolation,
        lab4AcceleratedOpacity,
        quiz1Performance
    ]
};
