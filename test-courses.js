import { courseContent } from './src/data/courses/index.js';

console.log('=== COURSE CONTENT TEST ===');
console.log('HTML5 course:', courseContent['html5']);
console.log('HTML5 units:', courseContent['html5']?.units);
console.log('HTML5 units length:', courseContent['html5']?.units?.length);
console.log('First unit:', courseContent['html5']?.units?.[0]);
console.log('First unit items:', courseContent['html5']?.units?.[0]?.items);
