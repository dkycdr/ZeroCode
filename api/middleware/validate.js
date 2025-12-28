/**
 * Input validation and sanitization middleware
 * Prevents SQL injection, XSS, and validates data formats
 */

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate email format
 */
export function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email.trim().toLowerCase());
}

/**
 * Password strength validation
 * Requirements: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number
 */
export function isValidPassword(password) {
    if (!password || typeof password !== 'string') return false;

    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return minLength && hasUppercase && hasLowercase && hasNumber;
}

/**
 * Get password strength feedback
 */
export function getPasswordFeedback(password) {
    const errors = [];

    if (!password || password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Sanitize string to prevent XSS
 */
export function sanitizeString(str) {
    if (!str || typeof str !== 'string') return '';

    return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .trim();
}

/**
 * Validate and sanitize user input object
 */
export function validateUserInput(data, schema) {
    const errors = {};
    const sanitized = {};

    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];

        // Required check
        if (rules.required && !value) {
            errors[field] = `${field} is required`;
            continue;
        }

        // Skip validation if not required and empty
        if (!rules.required && !value) {
            continue;
        }

        // Type validation
        if (rules.type === 'email') {
            if (!isValidEmail(value)) {
                errors[field] = 'Invalid email format';
                continue;
            }
            sanitized[field] = value.trim().toLowerCase();
        }

        else if (rules.type === 'password') {
            const feedback = getPasswordFeedback(value);
            if (!feedback.isValid) {
                errors[field] = feedback.errors.join(', ');
                continue;
            }
            sanitized[field] = value; // Don't sanitize passwords
        }

        else if (rules.type === 'string') {
            // Length validation
            if (rules.minLength && value.length < rules.minLength) {
                errors[field] = `${field} must be at least ${rules.minLength} characters`;
                continue;
            }
            if (rules.maxLength && value.length > rules.maxLength) {
                errors[field] = `${field} must be at most ${rules.maxLength} characters`;
                continue;
            }

            // Pattern validation
            if (rules.pattern && !rules.pattern.test(value)) {
                errors[field] = rules.patternError || `${field} format is invalid`;
                continue;
            }

            sanitized[field] = rules.sanitize !== false ? sanitizeString(value) : value.trim();
        }

        else if (rules.type === 'number') {
            const num = Number(value);
            if (isNaN(num)) {
                errors[field] = `${field} must be a number`;
                continue;
            }
            if (rules.min !== undefined && num < rules.min) {
                errors[field] = `${field} must be at least ${rules.min}`;
                continue;
            }
            if (rules.max !== undefined && num > rules.max) {
                errors[field] = `${field} must be at most ${rules.max}`;
                continue;
            }
            sanitized[field] = num;
        }

        else if (rules.type === 'boolean') {
            sanitized[field] = Boolean(value);
        }

        else if (rules.type === 'array') {
            if (!Array.isArray(value)) {
                errors[field] = `${field} must be an array`;
                continue;
            }
            sanitized[field] = value;
        }

        else {
            // Default: just trim
            sanitized[field] = typeof value === 'string' ? value.trim() : value;
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        data: sanitized
    };
}

/**
 * Common validation schemas
 */
export const schemas = {
    register: {
        email: { type: 'email', required: true },
        password: { type: 'password', required: true },
        name: { type: 'string', required: true, minLength: 2, maxLength: 100 }
    },

    login: {
        email: { type: 'email', required: true },
        password: { type: 'string', required: true }
    },

    verifyEmail: {
        email: { type: 'email', required: true },
        code: {
            type: 'string',
            required: true,
            pattern: /^\d{6}$/,
            patternError: 'Code must be 6 digits'
        }
    },

    resetPassword: {
        email: { type: 'email', required: true },
        code: { type: 'string', required: true, pattern: /^\d{6}$/ },
        newPassword: { type: 'password', required: true }
    },

    forumPost: {
        title: { type: 'string', required: true, minLength: 5, maxLength: 200 },
        content: { type: 'string', required: true, minLength: 10, maxLength: 10000 },
        category: { type: 'string', required: true }
    },

    note: {
        courseId: { type: 'string', required: true },
        itemId: { type: 'string', required: true },
        content: { type: 'string', required: true, maxLength: 10000 }
    }
};

/**
 * Validation middleware
 */
export function validate(schemaName) {
    return (handler) => {
        return async (req, res) => {
            const schema = schemas[schemaName];

            if (!schema) {
                console.error(`Unknown validation schema: ${schemaName}`);
                return handler(req, res);
            }

            const validation = validateUserInput(req.body, schema);

            if (!validation.isValid) {
                return res.status(400).json({
                    success: false,
                    error: 'Validation failed',
                    details: validation.errors
                });
            }

            // Replace request body with sanitized data
            req.body = validation.data;

            return handler(req, res);
        };
    };
}
