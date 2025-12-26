import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labPizzaOrder = {
    id: 'html5-u3-lab-2-pizza',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Pizza Builder (Radios & Checkboxes)',
    duration: '25 min',
    content: `
# Lab: The Pizza Builder

## The Scenario
You are coding the order form for "Boolean Pizza".
Users need to pick ONE size and MANY toppings.

## Logic Check
- **Size (Small/Medium/Large)**: Only one choice → **Radio Buttons**
- **Toppings**: Multiple choices → **Checkboxes**

## Key Rule
Radio buttons with the SAME name work as a group.

`,
    tasks: [
        {
            id: 1,
            description: 'Create a <fieldset> for Size options',
            completed: false,
            regex: /^<fieldset>[\s\S]*?name="size"[\s\S]*?<\/fieldset>$/i,
            hint: {
                concept: 'Fieldset Grouping',
                strategy: '<fieldset> groups related form controls.',
                solution: '<fieldset>\\n    <legend>Choose Size</legend>\\n    <!-- radios -->\\n</fieldset>'
            }
        },
        {
            id: 2,
            description: 'Create 3 radio buttons for Size with same name="size"',
            completed: false,
            regex: /type="radio"[\s\S]*?name="size"[\s\S]*?type="radio"[\s\S]*?name="size"/i,
            hint: {
                concept: 'Radio Buttons',
                strategy: 'Same name attribute = mutually exclusive choices.',
                solution: '<input type="radio" name="size" value="small" id="small">\\n<label for="small">Small</label>'
            }
        },
        {
            id: 3,
            description: 'Add a <legend> inside the Size fieldset',
            completed: false,
            regex: /<legend>[\s\S]*?<\/legend>/i,
            hint: {
                concept: 'Fieldset Legend',
                strategy: '<legend> provides a caption for the fieldset.',
                solution: '<legend>Choose Size</legend>'
            }
        },
        {
            id: 4,
            description: 'Create checkboxes for Toppings with name="toppings"',
            completed: false,
            regex: /type="checkbox"[\s\S]*?name="toppings"/i,
            hint: {
                concept: 'Checkboxes',
                strategy: 'Checkboxes allow multiple selections.',
                solution: '<input type="checkbox" name="toppings" value="cheese" id="cheese">'
            }
        },
        {
            id: 5,
            description: 'Create a second fieldset for Toppings',
            completed: false,
            regex: /<fieldset>[\s\S]*?toppings[\s\S]*?<\/fieldset>/i,
            hint: {
                concept: 'Grouped Controls',
                strategy: 'Each logical group gets its own fieldset.',
                solution: '<fieldset>\\n    <legend>Choose Toppings</legend>\\n    <!-- checkboxes -->\\n</fieldset>'
            }
        }
    ],
    files: [
        {
            name: 'order.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Boolean Pizza</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🍕 Boolean Pizza Order</h1>

    <form action="/order" method="POST">
        
        <!-- ============================================
            STEP 1: Size (Radio Buttons)
            - Use <fieldset> and <legend>
            - 3 radios with name="size"
        ============================================ -->
        
        
        <!-- ============================================
            STEP 2: Toppings (Checkboxes)
            - Use <fieldset> and <legend>
            - 3 checkboxes with name="toppings"
        ============================================ -->
        
        
        <button type="submit">Place Order</button>
    </form>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: -apple-system, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; background: #fff8e1; }
h1 { text-align: center; }
fieldset { margin: 20px 0; padding: 15px; border: 2px solid #ff6b35; border-radius: 8px; background: white; }
legend { font-weight: bold; color: #ff6b35; padding: 0 10px; }
label { display: block; margin: 8px 0; cursor: pointer; }
input[type="radio"], input[type="checkbox"] { margin-right: 10px; }
button { width: 100%; padding: 15px; background: #ff6b35; color: white; border: none; border-radius: 8px; font-size: 1.1em; cursor: pointer; }`
        }
    ]
};
