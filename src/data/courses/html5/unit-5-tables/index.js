import { doc1TablesBasics } from './01-doc-tables-basics.js';
import { doc2AccessibilityScope } from './02-doc-accessibility-scope.js';
import { doc3ResponsiveTables } from './03-doc-responsive-tables.js';
import { labSemanticData } from './04-lab-semantic-data.js';
import { lab5ColspanRowspan } from './05-lab-colspan-rowspan.js';
import { quizTables } from './06-quiz-tables.js';

export const unit5Tables = {
    id: 'html5-unit-5-tables',
    version: '3.0.0', // Major Expansion - Added Responsive Tables doc and Colspan/Rowspan Lab
    title: 'Unit 5: Tables & Data',
    description: 'Master HTML tables: structure, headers, footers, responsive patterns, cell merging, and accessibility best practices.',
    items: [
        doc1TablesBasics,
        doc2AccessibilityScope,
        doc3ResponsiveTables,
        labSemanticData,
        lab5ColspanRowspan,
        quizTables
    ]
};
