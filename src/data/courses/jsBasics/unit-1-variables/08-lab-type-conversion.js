import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab8TypeConversion = {
    id: 'js-u1-lab-8-type-conversion',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Type Conversion',
    duration: '10 min',
    content: `
# Lab: Type Conversion

## Converting Between Types

Sometimes you need to convert data from one type to another.

---

## Common Conversions:

### String to Number:
\`\`\`javascript
Number("42")      // 42
parseInt("42")    // 42
parseFloat("3.14") // 3.14
\`\`\`

### Number to String:
\`\`\`javascript
String(42)        // "42"
(42).toString()   // "42"
\`\`\`

### Anything to Boolean:
\`\`\`javascript
Boolean(1)        // true
Boolean(0)        // false
Boolean("")       // false
Boolean("hello")  // true
\`\`\`
`,
    tasks: [
        {
            id: 1,
            description: 'Convert string to number: const num = Number(strNum)',
            completed: false,
            hint: 'Number() converts strings to numbers',
            regex: /const\s+num\s*=\s*Number\s*\(\s*strNum\s*\)/
        },
        {
            id: 2,
            description: 'Convert number to string: const str = String(realNum)',
            completed: false,
            hint: 'String() converts anything to a string',
            regex: /const\s+str\s*=\s*String\s*\(\s*realNum\s*\)/
        },
        {
            id: 3,
            description: 'Convert to boolean: const bool = Boolean(value)',
            completed: false,
            hint: 'Boolean() converts to true/false',
            regex: /const\s+bool\s*=\s*Boolean\s*\(\s*value\s*\)/
        },
        {
            id: 4,
            description: 'Parse integer: const int = parseInt(decimal)',
            completed: false,
            hint: 'parseInt() extracts the integer part',
            regex: /const\s+int\s*=\s*parseInt\s*\(\s*decimal\s*\)/
        }
    ],
    files: [
        {
            name: 'index.js',
            language: 'javascript',
            content: `// Type Conversion Lab

// Starter variables:
const strNum = "42";
const realNum = 99;
const value = "hello";
const decimal = "3.14159";

// Task 1: Convert strNum to a number


// Task 2: Convert realNum to a string


// Task 3: Convert value to a boolean


// Task 4: Parse decimal to an integer (should be 3)


// Log results with typeof
console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(int, typeof int);
`
        }
    ]
};
