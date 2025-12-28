/**
 * API Client for secure backend communication
 * Replaces direct SQL imports with HTTP requests to backend API endpoints
 */

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Get authentication token from localStorage
 */
function getAuthToken() {
    const userStr = localStorage.getItem('zerocode_user');
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            return user.token;
        } catch (e) {
            return null;
        }
    }
    return null;
}

/**
 * Make authenticated API request
 */
async function apiRequest(endpoint, options = {}) {
    const token = getAuthToken();

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    // Add authorization header if token exists
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers
    };

    const url = `${API_BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }

        return data;
    } catch (error) {
        console.error(`API request failed: ${endpoint}`, error);
        throw error;
    }
}

/**
 * Authentication API endpoints
 */
export const authAPI = {
    async register(email, password, name) {
        return apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, name })
        });
    },

    async login(email, password) {
        return apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    async verifyEmail(email, code) {
        return apiRequest('/auth/verify-email', {
            method: 'POST',
            body: JSON.stringify({ email, code })
        });
    },

    async resendVerification(email) {
        return apiRequest('/auth/resend-verification', {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    async requestPasswordReset(email) {
        return apiRequest('/auth/request-reset', {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    async resetPassword(email, code, newPassword) {
        return apiRequest('/auth/reset-password', {
            method: 'POST',
            body: JSON.stringify({ email, code, newPassword })
        });
    },

    async verifyAdminCode(adminCode) {
        return apiRequest('/auth/verify-admin', {
            method: 'POST',
            body: JSON.stringify({ adminCode })
        });
    }
};

/**
 * Progress API endpoints
 */
export const progressAPI = {
    async loadProgress() {
        return apiRequest('/progress/load', {
            method: 'GET'
        });
    },

    async markComplete(itemId, courseId, unitId, contentType, quizScore = null, code = null) {
        return apiRequest('/progress/mark-complete', {
            method: 'POST',
            body: JSON.stringify({ itemId, courseId, unitId, contentType, quizScore, code })
        });
    },

    async updateStreak() {
        return apiRequest('/progress/update-streak', {
            method: 'POST'
        });
    },

    async getStats() {
        return apiRequest('/progress/get-stats', {
            method: 'GET'
        });
    }
};

/**
 * AI Chat API
 */
export const aiAPI = {
    async chat(message, context = null) {
        return apiRequest('/ai/chat', {
            method: 'POST',
            body: JSON.stringify({ message, context })
        });
    }
};

/**
 * Notes API
 */
export const notesAPI = {
    async save(courseId, itemId, content) {
        return apiRequest('/notes/save', {
            method: 'POST',
            body: JSON.stringify({ courseId, itemId, content })
        });
    },

    async load(courseId = null) {
        const query = courseId ? `?courseId=${courseId}` : '';
        return apiRequest(`/notes/load${query}`, {
            method: 'GET'
        });
    }
};

/**
 * Leaderboard API
 */
export const leaderboardAPI = {
    async getLeaderboard() {
        return apiRequest('/leaderboard', {
            method: 'GET'
        });
    }
};

/**
 * Export default API object
 */
const api = {
    auth: authAPI,
    progress: progressAPI,
    ai: aiAPI,
    notes: notesAPI,
    leaderboard: leaderboardAPI
};

export default api;
