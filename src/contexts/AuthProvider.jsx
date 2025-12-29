import { createContext, useContext, useState, useEffect } from 'react';
import api from '../lib/api-client';
import { sql } from '../lib/neon'; // For dev mode fallback

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Subscription tier access levels
export const SUBSCRIPTION_TIERS = {
    free: {
        label: 'Free',
        courses: ['html5', 'css3', 'js-basics'], // Demo courses only
        color: 'gray'
    },
    beginner: {
        label: 'Beginner',
        courses: ['html5', 'css3', 'js-basics', 'git', 'tailwind'],
        color: 'blue'
    },
    intermediate: {
        label: 'Intermediate',
        courses: ['html5', 'css3', 'js-basics', 'git', 'tailwind', 'dom', 'js-es6', 'react', 'php', 'mysql', 'python'],
        color: 'purple'
    },
    advanced: {
        label: 'Advanced',
        courses: 'all',
        color: 'red'
    },
    fullstack: {
        label: 'Fullstack',
        courses: 'all',
        color: 'green'
    },
    admin: {
        label: 'Admin',
        courses: 'all',
        color: 'yellow'
    }
};

// Check if user can access a course
export const canAccessCourse = (userTier, courseId) => {
    if (!userTier) return false;

    const tier = SUBSCRIPTION_TIERS[userTier];
    if (!tier) return false;

    // Admin, fullstack, advanced have access to all
    if (tier.courses === 'all') return true;

    // Check if course is in allowed list
    return tier.courses.includes(courseId);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sessionUser = localStorage.getItem('zerocode_user');
        if (sessionUser) {
            try {
                setUser(JSON.parse(sessionUser));
            } catch (e) {
                localStorage.removeItem('zerocode_user');
            }
        }
        setLoading(false);
    }, []);

    const register = async (userData, password) => {
        try {
            const response = await api.auth.register(userData.email, password, userData.name);

            if (!response.success) {
                return { success: false, error: response.error };
            }

            // Note: User needs to verify email before logging in
            // Don't auto-login here, redirect to verification page instead
            return {
                success: true,
                message: 'Registration successful! Please check your email for verification code.',
                user: response.user
            };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: error.message || 'Registration failed' };
        }
    };

    const login = async (email, password) => {
        try {
            const response = await api.auth.login(email, password);

            if (!response.success) {
                return { success: false, error: response.error, code: response.code };
            }

            // Store user data (no token needed - using direct SQL for all features)
            localStorage.setItem('zerocode_user', JSON.stringify(response.user));
            setUser(response.user);

            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message || 'Login failed' };
        }
    };

    const logout = async () => {
        localStorage.removeItem('zerocode_user');
        setUser(null);
    };

    const updateUser = async (updates) => {
        try {
            const result = await sql`
                UPDATE users
                SET name = ${updates.name || user.name}, 
                    phone = ${updates.phone || user.phone || null},
                    avatar = ${updates.avatar || user.avatar || null},
                    border = ${updates.border || user.border || null}
                WHERE id = ${user.id}
                RETURNING id, email, name, phone, avatar, border, is_admin, subscription_tier, subscription_date, joined_date, created_at, streak_count, last_activity
            `;

            const updatedUser = result[0];
            localStorage.setItem('zerocode_user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            return { success: true };
        } catch (error) {
            console.error('Update error:', error);
            return { success: false, error: error.message };
        }
    };

    const refreshUser = async () => {
        if (!user?.id) return;

        try {
            const result = await sql`
                SELECT id, email, name, phone, avatar, border, is_admin, subscription_tier, subscription_date, joined_date, created_at, streak_count, last_activity
                FROM users WHERE id = ${user.id}
            `;

            if (result.length > 0) {
                localStorage.setItem('zerocode_user', JSON.stringify(result[0]));
                setUser(result[0]);
            }
        } catch (error) {
            console.error('Refresh error:', error);
        }
    };

    const verifyAdminCode = async (code) => {
        if (!user?.id) {
            return { success: false, error: 'Not logged in' };
        }

        try {
            const response = await api.auth.verifyAdminCode(code);

            if (!response.success) {
                return { success: false, error: response.error };
            }

            // Update local user state
            const updatedUser = {
                ...user,
                subscription_tier: 'admin',
                is_admin: true
            };

            localStorage.setItem('zerocode_user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            return { success: true };
        } catch (error) {
            console.error('Admin verification error:', error);
            return { success: false, error: error.message || 'Verification failed' };
        }
    };

    const getAllUsers = async (search = '') => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            let result;
            if (search) {
                const searchPattern = `%${search}%`;
                result = await sql`
                    SELECT id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
                    FROM users 
                    WHERE email ILIKE ${searchPattern} OR name ILIKE ${searchPattern}
                    ORDER BY joined_date DESC
                `;
            } else {
                result = await sql`
                    SELECT id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
                    FROM users 
                    ORDER BY joined_date DESC
                `;
            }
            return { success: true, users: result };
        } catch (error) {
            console.error('Error fetching users:', error);
            return { success: false, error: error.message };
        }
    };

    const updateUserSubscription = async (userId, newTier) => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            const isAdmin = newTier === 'admin';
            const result = await sql`
                UPDATE users
                SET subscription_tier = ${newTier}, 
                    subscription_date = CURRENT_TIMESTAMP, 
                    is_admin = ${isAdmin}
                WHERE id = ${userId}
                RETURNING id, email, name, subscription_tier, is_admin, subscription_date
            `;

            if (result.length === 0) {
                return { success: false, error: 'User not found' };
            }

            // If updating current logged-in user, refresh their session
            if (userId === user.id) {
                const refreshed = { ...user, ...result[0] };
                localStorage.setItem('zerocode_user', JSON.stringify(refreshed));
                setUser(refreshed);
            }

            return { success: true, user: result[0] };
        } catch (error) {
            console.error('Error updating subscription:', error);
            return { success: false, error: error.message };
        }
    };

    const loginWithGoogle = async (googleData) => {
        try {
            let googleUser;

            // Check if input is a JWT string (from legacy GoogleLogin) or Profile Object (from useGoogleLogin)
            if (typeof googleData === 'string') {
                // Decode JWT token to get user info
                const base64Url = googleData.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                googleUser = JSON.parse(jsonPayload);
            } else {
                // Assume it's already a profile object from UserInfo endpoint
                googleUser = googleData;
            }

            const { email, name, sub: googleId, picture } = googleUser;

            // Check if user exists
            let result = await sql`
                SELECT id, email, name, is_admin, subscription_tier, is_email_verified, joined_date, avatar
                FROM users WHERE email = ${email}
            `;

            let dbUser;
            if (result.length === 0) {
                // Create new user from Google
                const verificationCode = generateVerificationCode();
                const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

                const createResult = await sql`
                    INSERT INTO users (email, name, google_id, subscription_tier, email_verification_code, email_verification_expires, avatar, is_email_verified)
                    VALUES (${email}, ${name}, ${googleId}, 'free', ${verificationCode}, ${expiresAt}, ${picture}, true)
                    RETURNING id, email, name, is_admin, subscription_tier, is_email_verified, joined_date, avatar
                `;

                dbUser = createResult[0];

                // Auto-verify likely trusted, but logic kept as is in original for Google
            } else {
                dbUser = result[0];

                // Link Google ID if not present
                if (!dbUser.google_id) {
                    await sql`UPDATE users SET google_id = ${googleId} WHERE id = ${dbUser.id}`;
                }
            }

            localStorage.setItem('zerocode_user', JSON.stringify(dbUser));
            setUser(dbUser);

            // Update Streak
            await updateStreak(dbUser);

            return { success: true, user: dbUser };
        } catch (error) {
            console.error('Google login error:', error);
            return { success: false, error: error.message };
        }
    };

    const loginWithGithub = async (githubProfile) => {
        try {
            const { email, name, id: githubId, avatar_url, login } = githubProfile;
            const displayName = name || login;
            const primaryEmail = email; // Note: GitHub API might not return email if private, requires checking emails endpoint

            if (!primaryEmail && !githubId) {
                return { success: false, error: 'Could not retrieve email or ID from GitHub' };
            }

            // Check if user exists by GitHub ID first, then Email
            let result = await sql`
                SELECT id, email, name, is_admin, subscription_tier, is_email_verified, joined_date, avatar, github_id
                FROM users 
                WHERE github_id = ${String(githubId)} 
                OR (email = ${primaryEmail} AND email IS NOT NULL)
            `;

            let dbUser;
            if (result.length === 0) {
                // New User
                const verificationCode = generateVerificationCode();
                const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

                const createResult = await sql`
                    INSERT INTO users (email, name, github_id, subscription_tier, email_verification_code, email_verification_expires, avatar, is_email_verified)
                    VALUES (${primaryEmail || `github_${githubId}@placeholder.com`}, ${displayName}, ${String(githubId)}, 'free', ${verificationCode}, ${expiresAt}, ${avatar_url}, ${!!primaryEmail})
                    RETURNING id, email, name, is_admin, subscription_tier, is_email_verified, joined_date, avatar, github_id
                `;
                dbUser = createResult[0];

            } else {
                dbUser = result[0];

                // Link GitHub ID if missing
                if (!dbUser.github_id) {
                    await sql`UPDATE users SET github_id = ${String(githubId)} WHERE id = ${dbUser.id}`;
                    dbUser.github_id = String(githubId);
                }

                // Update Avatar if missing
                if (!dbUser.avatar && avatar_url) {
                    await sql`UPDATE users SET avatar = ${avatar_url} WHERE id = ${dbUser.id}`;
                    dbUser.avatar = avatar_url;
                }
            }

            localStorage.setItem('zerocode_user', JSON.stringify(dbUser));
            setUser(dbUser);

            // Update Streak
            await updateStreak(dbUser);

            return { success: true, user: dbUser };

        } catch (error) {
            console.error('GitHub login error:', error);
            return { success: false, error: error.message };
        }
    };

    const verifyEmail = async (email, code) => {
        try {
            const response = await api.auth.verifyEmail(email, code);

            if (!response.success) {
                return { success: false, error: response.error, code: response.code };
            }

            // Store user data with JWT token (auto-login after verification)
            const userWithToken = {
                ...response.user,
                token: response.token
            };

            localStorage.setItem('zerocode_user', JSON.stringify(userWithToken));
            setUser(userWithToken);

            return { success: true, message: response.message, user: response.user };
        } catch (error) {
            console.error('Verification error:', error);
            return { success: false, error: error.message || 'Verification failed' };
        }
    };

    const resendVerificationCode = async (email) => {
        try {
            const response = await api.auth.resendVerification(email);

            if (!response.success) {
                return { success: false, error: response.error };
            }

            return { success: true, message: response.message };
        } catch (error) {
            console.error('Resend error:', error);
            return { success: false, error: error.message || 'Failed to resend code' };
        }
    };

    const requestPasswordReset = async (email) => {
        try {
            const response = await api.auth.requestPasswordReset(email);

            if (!response.success) {
                return { success: false, error: response.error };
            }

            return { success: true, message: response.message };
        } catch (error) {
            console.error('Password reset request error:', error);
            return { success: false, error: error.message || 'Failed to request reset' };
        }
    };

    const resetPassword = async (email, code, newPassword) => {
        try {
            const response = await api.auth.resetPassword(email, code, newPassword);

            if (!response.success) {
                return { success: false, error: response.error };
            }

            return { success: true, message: response.message };
        } catch (error) {
            console.error('Password reset error:', error);
            return { success: false, error: error.message || 'Failed to reset password' };
        }
    };

    const getLeaderboard = async () => {
        const isDev = import.meta.env.DEV;

        // Helper function for direct SQL query
        const fetchFromDB = async () => {
            const result = await sql`
                SELECT id, name, email, points, courses_completed, avatar, border
                FROM users
                WHERE points > 0 OR courses_completed > 0
                ORDER BY points DESC, courses_completed DESC
                LIMIT 100
            `;

            let userRank = null;
            if (user?.id) {
                const userResult = await sql`
                    SELECT points, courses_completed
                    FROM users WHERE id = ${user.id}
                `;
                if (userResult.length > 0) {
                    const stats = userResult[0];
                    const rankResult = await sql`
                        SELECT COUNT(*) as rank FROM users
                        WHERE points > ${stats.points}
                        OR (points = ${stats.points} AND courses_completed > ${stats.courses_completed})
                    `;
                    userRank = {
                        rank: (rankResult[0]?.rank || 0) + 1,
                        points: stats.points || 0,
                        coursesCompleted: stats.courses_completed || 0
                    };
                }
            }

            return { success: true, leaderboard: result, userRank };
        };

        // In development, skip API and use direct SQL (no console errors)
        if (isDev) {
            try {
                return await fetchFromDB();
            } catch (error) {
                console.error('Leaderboard DB error:', error);
                return { success: false, error: error.message };
            }
        }

        // In production, use API endpoint
        try {
            const response = await api.leaderboard.getLeaderboard();
            if (!response.success) {
                throw new Error(response.error || 'API failed');
            }
            return {
                success: true,
                leaderboard: response.leaderboard,
                userRank: response.userRank
            };
        } catch (error) {
            console.error('Leaderboard API error:', error);
            // Fallback to DB in production too (just in case)
            try {
                return await fetchFromDB();
            } catch (dbError) {
                return { success: false, error: dbError.message };
            }
        }
    };

    const updateLeaderboardStats = async (points, coursesCompleted) => {
        // Stats are now updated through the progress API endpoints
        // This function is kept for backwards compatibility
        if (!user?.id) return { success: false, error: 'Not logged in' };

        // Stats update happens server-side when marking items complete
        // No direct update needed anymore
        return { success: true };
    };

    const updateStreak = async (targetUser = user) => {
        if (!targetUser?.id) return { success: false };

        try {
            const now = new Date();
            const today = now.toISOString().split('T')[0];

            // Get current streak data
            const [dbUser] = await sql`
                SELECT streak_count, last_activity AT TIME ZONE 'UTC' as last_activity
                FROM users WHERE id = ${targetUser.id}
            `;

            let newStreak = dbUser.streak_count || 0;
            const lastActivityDate = dbUser.last_activity
                ? new Date(dbUser.last_activity).toISOString().split('T')[0]
                : null;

            if (!lastActivityDate) {
                // First activity ever
                newStreak = 1;
            } else if (lastActivityDate === today) {
                // Already updated today, keep as is
                return { success: true, newStreak, lastActivity: dbUser.last_activity };
            } else {
                const yesterday = new Date(now);
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastActivityDate === yesterdayStr) {
                    // Continued streak
                    newStreak += 1;
                } else {
                    // Streak broken
                    newStreak = 1;
                }
            }

            await sql`
                UPDATE users
                SET streak_count = ${newStreak},
                    last_activity = CURRENT_TIMESTAMP
                WHERE id = ${targetUser.id}
            `;

            return { success: true, newStreak, lastActivity: now };
        } catch (error) {
            console.error('Error updating streak:', error);
            return { success: false, error: error.message };
        }
    };

    const getAdminAnalytics = async () => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            // Tier Distribution
            const tierDistribution = await sql`
                SELECT subscription_tier, COUNT(*) as count 
                FROM users 
                GROUP BY subscription_tier
            `;

            // Signup trend (last 7 days)
            const signupTrend = await sql`
                SELECT DATE(joined_date) as date, COUNT(*) as count 
                FROM users 
                WHERE joined_date > CURRENT_DATE - INTERVAL '7 days'
                GROUP BY DATE(joined_date)
                ORDER BY DATE(joined_date) ASC
            `;

            // Popular Courses
            const popularCourses = await sql`
                SELECT course_id, COUNT(*) as enrollments 
                FROM course_progress 
                GROUP BY course_id 
                ORDER BY enrollments DESC 
                LIMIT 5
            `;

            return {
                success: true,
                analytics: {
                    tierDistribution,
                    signupTrend,
                    popularCourses
                }
            };
        } catch (error) {
            console.error('Analytics error:', error);
            return { success: false, error: error.message };
        }
    };

    const getAdminActivity = async () => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            // Since we don't have a centralized logs table, we aggregate latest events
            const latestUsers = await sql`
                SELECT id, name, email, joined_date as timestamp, 'USER_JOINED' as type 
                FROM users 
                ORDER BY joined_date DESC 
                LIMIT 10
            `;

            const latestProgress = await sql`
                SELECT cp.id, u.name as user_name, cp.course_id, cp.updated_at as timestamp, 'COURSE_PROGRESS' as type 
                FROM course_progress cp
                JOIN users u ON cp.user_id = u.id
                ORDER BY cp.updated_at DESC 
                LIMIT 10
            `;

            const latestPosts = await sql`
                SELECT fp.id, u.name as user_name, fp.title, fp.created_at as timestamp, 'FORUM_POST' as type 
                FROM forum_posts fp
                JOIN users u ON fp.user_id = u.id
                ORDER BY fp.created_at DESC 
                LIMIT 10
            `;

            const combined = [...latestUsers, ...latestProgress, ...latestPosts]
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                .slice(0, 20);

            return { success: true, activity: combined };
        } catch (error) {
            console.error('Activity logs error:', error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        loading,
        register,
        login,
        logout,
        updateUser,
        refreshUser,
        signOut: logout,
        verifyAdminCode,
        getAllUsers,
        updateUserSubscription,
        loginWithGoogle,
        loginWithGithub,
        verifyEmail,
        resendVerificationCode,
        requestPasswordReset,
        resetPassword,
        getLeaderboard,
        updateLeaderboardStats,
        getAdminAnalytics,
        getAdminActivity,
        updateStreak,
        canAccessCourse: (courseId) => canAccessCourse(user?.subscription_tier, courseId),
        isAdmin: user?.is_admin || false,
        subscriptionTier: user?.subscription_tier || 'free',
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
