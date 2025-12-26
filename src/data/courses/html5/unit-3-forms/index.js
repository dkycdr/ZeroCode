import { doc1FormAnatomy } from './01-doc-form-anatomy.js';
import { doc2InputEcosystem } from './02-doc-input-types.js';
import { doc3Validation } from './03-doc-validation.js';
import { doc4A11y } from './04-doc-accessibility.js';
import { labSignUp } from './05-lab-sign-up.js';
import { labPizzaOrder } from './06-lab-pizza-order.js';
import { labValidation } from './07-lab-validation-guards.js';
import { labPayment } from './08-lab-payment.js';
import { quizForms } from './09-quiz-forms.js';

export const unit3Forms = {
    id: 'html5-unit-3-forms',
    version: '1.1.0', // Content Refresh
    title: 'Unit 3: Data Collection & Forms',
    description: 'Learn to talk to servers. Master the art of Inputs, Validation, and Secure Data Transfer.',
    items: [
        doc1FormAnatomy,
        doc2InputEcosystem,
        doc3Validation,
        doc4A11y,
        labSignUp,
        labPizzaOrder,
        labValidation,
        labPayment,
        quizForms
    ]
};
