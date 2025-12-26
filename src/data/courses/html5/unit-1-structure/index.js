import { doc1DocumentStructure } from './01-doc-document-structure';
import { doc2MetadataSeo } from './02-doc-metadata-seo';
import { doc3TextMechanics } from './03-doc-text-mechanics';
import { doc4ListsGrouping } from './04-doc-lists-grouping';
import { doc5NavigationPaths } from './05-doc-navigation-paths';
import { lab6Newsletter } from './06-lab-newsletter-layout';
import { lab7Wiki } from './07-lab-wiki-navigation';
import { quizStructure } from './08-quiz-structure';

export const unit1Structure = {
    id: 'html5-unit-1-structure',
    version: '2.0.0', // Updated Version to trigger Badge
    title: 'Unit 1: Structural Engineering',
    description: 'Move beyond basic tags. Master the DOM, SEO Metadata, Semantic Text, and the art of Navigational Paths.',
    items: [
        doc1DocumentStructure,
        doc2MetadataSeo,
        doc3TextMechanics,
        doc4ListsGrouping,
        doc5NavigationPaths,
        lab6Newsletter,
        lab7Wiki,
        quizStructure
    ]
};
