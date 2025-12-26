import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labPayment = {
    id: 'html5-u3-lab-4-payment',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Payment Gateway',
    duration: '30 min',
    content: `
# Lab: The Payment Gateway

## The Boss Fight
Combine everything you've learned to build a Credit Card checkout form.

## Requirements
1. **Card Number**: inputmode="numeric", placeholder
2. **Expiry**: Month/Year selects
3. **CVV**: 3 digits with pattern validation
4. **Country**: Dropdown select with options

`,
    tasks: [
        {
            id: 1,
            description: 'Create a Card Number input with name="card"',
            completed: false,
            regex: /<input[\s\S]*?name="card"/i,
            hint: {
                concept: 'Card Input',
                strategy: 'Use inputmode="numeric" for mobile keyboard.',
                solution: '<input type="text" name="card" inputmode="numeric" placeholder="0000 0000 0000 0000">'
            }
        },
        {
            id: 2,
            description: 'Create a CVV input with pattern="[0-9]{3}"',
            completed: false,
            regex: /name="cvv"[\s\S]*?pattern="[0-9]{3}"/i,
            hint: {
                concept: 'CVV Validation',
                strategy: 'CVV is always 3 digits.',
                solution: '<input type="text" name="cvv" pattern="[0-9]{3}" maxlength="3">'
            }
        },
        {
            id: 3,
            description: 'Create a Country <select> with 3+ options',
            completed: false,
            regex: /<select[\s\S]*?name="country"[\s\S]*?>[\s\S]*?<option/i,
            hint: {
                concept: 'Select Dropdown',
                strategy: '<select> contains <option> elements.',
                solution: '<select name="country">\n    <option value="id">Indonesia</option>\n</select>'
            }
        },
        {
            id: 4,
            description: 'Add labels for all form inputs',
            completed: false,
            regex: /<label[\s\S]*?for="card"/i,
            hint: {
                concept: 'Accessible Labels',
                strategy: 'Every input needs a connected label.',
                solution: '<label for="card">Card Number</label>'
            }
        },
        {
            id: 5,
            description: 'Create expiry month select with options 01-12',
            completed: false,
            regex: /<select[\s\S]*?name="expiry_month"[\s\S]*?>[\s\S]*?<option/i,
            hint: {
                concept: 'Month Select',
                strategy: 'Use select for predefined choices.',
                solution: '<select name="expiry_month">\n    <option value="01">01</option>\n    ...\n</select>'
            }
        },
    ],
    files: [
        {
            name: 'checkout.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Secure Checkout</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>💳 Secure Checkout</h1>
    
    <form action="/pay" method="POST">
        
        <!-- ============================================
            CARD DETAILS
            - Card Number (inputmode="numeric")
            - Expiry Month/Year (selects)
            - CVV (3 digit pattern)
        ============================================ -->
        
        
        <!-- ============================================
            BILLING INFO
            - Country (select dropdown)
        ============================================ -->
        
        
        <button type="submit">Pay $99.00</button>
    </form>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: -apple-system, sans-serif; max-width: 450px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1a1a2e, #16213e); min-height: 100vh; color: #fff; }
form { background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); }
label { display: block; margin: 15px 0 5px; color: #00b4d8; font-size: 0.9em; }
input, select { width: 100%; padding: 12px; border: 1px solid #333; border-radius: 8px; background: #0f0f23; color: #fff; box-sizing: border-box; font-size: 1em; }
input:focus, select:focus { border-color: #00ff41; outline: none; }
button { width: 100%; margin-top: 25px; padding: 15px; background: linear-gradient(135deg, #00ff41, #00b4d8); color: #000; border: none; border-radius: 8px; font-weight: bold; font-size: 1.1em; cursor: pointer; }
.row { display: flex; gap: 15px; }
.row > * { flex: 1; }`
        }
    ]
};
