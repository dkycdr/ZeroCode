import { doc1MediaQueryBottleneck } from './01-doc-media-query-bottleneck.js';
import { doc2ContainmentContext } from './02-doc-containment-context.js';
import { doc3ContainerQueries } from './03-doc-container-queries.js';
import { doc4CqUnits } from './04-doc-cq-units.js';
import { lab1AdaptingCard } from './05-lab-adapting-card.js';
import { lab2FluidTypography } from './06-lab-fluid-typography.js';
import { lab3NamedContainers } from './07-lab-named-containers.js';
import { lab4DynamicGrid } from './08-lab-dynamic-grid.js';
import { quiz1ContainerQueries } from './09-quiz-container-logic.js';

export const unit12ContainerQueries = {
    id: 'css3-unit-12',
    version: '2.0.0',
    title: 'Modern Layouts: Container Queries',
    description: 'Deconstruct the viewport dependency. Engineer "Write Once, Run Anywhere" components that adapt to their parent context with mathematical precision.',
    items: [
        doc1MediaQueryBottleneck,
        doc2ContainmentContext,
        doc3ContainerQueries,
        doc4CqUnits,
        lab1AdaptingCard,
        lab2FluidTypography,
        lab3NamedContainers,
        lab4DynamicGrid,
        quiz1ContainerQueries
    ]
};
