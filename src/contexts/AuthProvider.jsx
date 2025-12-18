import { createContext, useContext, useState, useEffect } from 'react';
import { sql } from '../lib/neon';
import bcrypt from 'bcryptjs';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Admin secret code - change this to your own secret!
const ADMIN_SECRET_CODE = 'ZEROCODE2024';

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
            const passwordHash = await bcrypt.hash(password, 10);

            const result = await sql`
                INSERT INTO users (email, password_hash, name, is_admin, subscription_tier)
                VALUES (${userData.email}, ${passwordHash}, ${userData.name}, false, 'free')
                RETURNING id, email, name, is_admin, subscription_tier, joined_date
            `;

            const newUser = result[0];
            localStorage.setItem('zerocode_user', JSON.stringify(newUser));
            setUser(newUser);

            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            if (error.message.includes('duplicate key')) {
                return { success: false, error: 'Email already registered' };
            }
            return { success: false, error: error.message };
        }
    };

    const login = async (email, password) => {
        try {
            const result = await sql`
                SELECT id, email, password_hash, name, phone, is_admin, subscription_tier, subscription_date, joined_date
                FROM users WHERE email = ${email}
            `;

            if (result.length === 0) {
                return { success: false, error: 'User not found' };
            }

            const dbUser = result[0];
            const isValid = await bcrypt.compare(password, dbUser.password_hash);
            if (!isValid) {
                return { success: false, error: 'Invalid password' };
            }

            const { password_hash, ...userWithoutPassword } = dbUser;
            localStorage.setItem('zerocode_user', JSON.stringify(userWithoutPassword));
            setUser(userWithoutPassword);

            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
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
                SET name = ${updates.name || user.name}, phone = ${updates.phone || user.phone || null}
                WHERE id = ${user.id}
                RETURNING id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
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
                SELECT id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
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
        if (code !== ADMIN_SECRET_CODE) {
            return { success: false, error: 'Invalid admin code' };
        }

        if (!user?.id) {
            return { success: false, error: 'Not logged in' };
        }

        try {
            const result = await sql`
                UPDATE users
                SET is_admin = true, subscription_tier = 'admin'
                WHERE id = ${user.id}
                RETURNING id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
            `;

            const updatedUser = result[0];
            localStorage.setItem('zerocode_user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const getAllUsers = async () => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            const result = await sql`
                SELECT id, email, name, phone, is_admin, subscription_tier, subscription_date, joined_date
                FROM users ORDER BY joined_date DESC
            `;
            return { success: true, users: result };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const updateUserSubscription = async (userId, newTier) => {
        if (!user?.is_admin) return { success: false, error: 'Unauthorized' };

        try {
            const result = await sql`
                UPDATE users
                SET subscription_tier = ${newTier}, subscription_date = CURRENT_TIMESTAMP, is_admin = ${newTier === 'admin'}
                WHERE id = ${userId}
                RETURNING id, email, name, subscription_tier
            `;
            return { success: true, user: result[0] };
        } catch (error) {
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
