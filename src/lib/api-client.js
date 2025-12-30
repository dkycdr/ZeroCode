/**
 * API Client for secure backend communication
 * Uses consolidated API endpoints with query params for action routing
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

function getAuthToken() {
    const userStr = localStorage.getItem('zerocode_user');
    if (userStr) {
        try {
            return JSON.parse(userStr).token;
        } catch (e) {
            return null;
        }
    }
    return null;
}

async function apiRequest(endpoint, options = {}) {
    const token = getAuthToken();
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const url = `${API_BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, { ...options, headers });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
        return data;
    } catch (error) {
        console.error(`API failed: ${endpoint}`, error);
        throw error;
    }
}

/**
 * Auth API - consolidated endpoint with action param
 */
export const authAPI = {
    async register(email, password, name) {
        return apiRequest('/auth?action=register', {
            method: 'POST',
            body: JSON.stringify({ email, password, name })
        });
    },

    async login(email, password) {
        return apiRequest('/auth?action=login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    async verifyEmail(email, code) {
        return apiRequest('/auth?action=verify-email', {
            method: 'POST',
            body: JSON.stringify({ email, code })
        });
    },

    async resendVerification(email) {
        return apiRequest('/auth?action=resend-verification', {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    async requestPasswordReset(email) {
        return apiRequest('/auth?action=request-reset', {
            method: 'POST',
            body: JSON.stringify({ email })
        });
    },

    async resetPassword(email, code, newPassword) {
        return apiRequest('/auth?action=reset-password', {
            method: 'POST',
            body: JSON.stringify({ email, code, newPassword })
        });
    },

    async verifyAdminCode(adminCode, userId) {
        return apiRequest('/auth?action=verify-admin', {
            method: 'POST',
            body: JSON.stringify({ adminCode, userId })
        });
    }
};

/**
 * Progress API - consolidated endpoint
 */
export const progressAPI = {
    async loadProgress() {
        return apiRequest('/progress?action=load', { method: 'GET' });
    },

    async markComplete(itemId, courseId, unitId, contentType, quizScore = null, code = null) {
        return apiRequest('/progress?action=mark-complete', {
            method: 'POST',
            body: JSON.stringify({ itemId, courseId, unitId, contentType, quizScore, code })
        });
    },

    async updateStreak() {
        return apiRequest('/progress?action=update-streak', { method: 'POST' });
    },

    async getStats() {
        return apiRequest('/progress?action=load', { method: 'GET' });
    }
};

/**
 * AI Chat API - consolidated endpoint
 */
export const aiAPI = {
    async chat(message, context = null) {
        return apiRequest('/ai?action=chat', {
            method: 'POST',
            body: JSON.stringify({ message, context })
        });
    }
};

/**
 * Notes API - consolidated endpoint
 */
export const notesAPI = {
    async save(courseId, itemId, content) {
        return apiRequest('/notes?action=save', {
            method: 'POST',
            body: JSON.stringify({ courseId, itemId, content })
        });
    },

    async load(courseId = null) {
        const query = courseId ? `&courseId=${courseId}` : '';
        return apiRequest(`/notes?action=load${query}`, { method: 'GET' });
    }
};

/**
 * Leaderboard API (existing endpoint)
 */
export const leaderboardAPI = {
    async getLeaderboard() {
        return apiRequest('/leaderboard', { method: 'GET' });
    }
};

/**
 * Badges API - achievement system
 */
export const badgesAPI = {
    async load() {
        return apiRequest('/badges?action=load', { method: 'GET' });
    },
    async unlock(badgeId, xpBonus) {
        return apiRequest('/badges?action=unlock', {
            method: 'POST',
            body: JSON.stringify({ badgeId, xpBonus })
        });
    }
};

const api = { auth: authAPI, progress: progressAPI, ai: aiAPI, notes: notesAPI, leaderboard: leaderboardAPI, badges: badgesAPI };
export default api;
