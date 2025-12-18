import { createContext, useContext, useState, useEffect } from 'react';
import { sql } from '../lib/neon';
import bcrypt from 'bcryptjs';
import { generateVerificationCode, sendVerificationEmail, sendWelcomeEmail } from '../lib/emailService';

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

    const loginWithGoogle = async (googleToken) => {
        try {
            // Decode JWT token to get user info
            const base64Url = googleToken.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            
            const googleUser = JSON.parse(jsonPayload);
            const { email, name, sub: googleId, picture } = googleUser;

            // Check if user exists
            let result = await sql`
                SELECT id, email, name, is_admin, subscription_tier, is_email_verified, joined_date
                FROM users WHERE email = ${email}
            `;

            let dbUser;
            if (result.length === 0) {
                // Create new user from Google
                const verificationCode = generateVerificationCode();
                const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

                const createResult = await sql`
                    INSERT INTO users (email, name, google_id, subscription_tier, email_verification_code, email_verification_expires)
                    VALUES (${email}, ${name}, ${googleId}, 'free', ${verificationCode}, ${expiresAt})
                    RETURNING id, email, name, is_admin, subscription_tier, is_email_verified, joined_date
                `;

                dbUser = createResult[0];

                // Send verification email
                await sendVerificationEmail(email, verificationCode);
            } else {
                dbUser = result[0];
                
                // If not verified, send new verification code
                if (!dbUser.is_email_verified) {
                    const verificationCode = generateVerificationCode();
                    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

                    await sql`
                        UPDATE users
                        SET email_verification_code = ${verificationCode}, email_verification_expires = ${expiresAt}
                        WHERE id = ${dbUser.id}
                    `;

                    await sendVerificationEmail(email, verificationCode);
                }
            }

            localStorage.setItem('zerocode_user', JSON.stringify(dbUser));
            setUser(dbUser);

            return { success: true, user: dbUser, needsVerification: !dbUser.is_email_verified };
        } catch (error) {
            console.error('Google login error:', error);
            return { success: false, error: error.message };
        }
    };

    const verifyEmail = async (email, code) => {
        try {
            const result = await sql`
                SELECT id, email_verification_code, email_verification_expires, is_email_verified
                FROM users WHERE email = ${email}
            `;

            if (result.length === 0) {
                return { success: false, error: 'User not found' };
            }

            const dbUser = result[0];

            // Check if already verified
            if (dbUser.is_email_verified) {
                return { success: true, message: 'Email already verified' };
            }

            // Check if code matches
            if (dbUser.email_verification_code !== code) {
                return { success: false, error: 'Invalid verification code' };
            }

            // Check if code expired
            if (new Date() > new Date(dbUser.email_verification_expires)) {
                return { success: false, error: 'Verification code expired' };
            }

            // Mark as verified
            const updateResult = await sql`
                UPDATE users
                SET is_email_verified = true, email_verification_code = NULL, email_verification_expires = NULL
                WHERE email = ${email}
                RETURNING id, email, name, is_admin, subscription_tier, is_email_verified, joined_date
            `;

            const verifiedUser = updateResult[0];
            localStorage.setItem('zerocode_user', JSON.stringify(verifiedUser));
            setUser(verifiedUser);

            // Send welcome email
            await sendWelcomeEmail(email, verifiedUser.name);

            return { success: true, user: verifiedUser };
        } catch (error) {
            console.error('Verification error:', error);
            return { success: false, error: error.message };
        }
    };

    const resendVerificationCode = async (email) => {
        try {
            const result = await sql`
                SELECT id, name FROM users WHERE email = ${email}
            `;

            if (result.length === 0) {
                return { success: false, error: 'User not found' };
            }

            const verificationCode = generateVerificationCode();
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

            await sql`
                UPDATE users
                SET email_verification_code = ${verificationCode}, email_verification_expires = ${expiresAt}
                WHERE email = ${email}
            `;

            await sendVerificationEmail(email, verificationCode);

            return { success: true, message: 'Verification code sent' };
        } catch (error) {
            console.error('Resend error:', error);
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
        verifyEmail,
        resendVerificationCode,
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
