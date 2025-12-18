import { createContext, useContext, useState, useEffect } from 'react';
import { sql } from '../lib/neon';
import bcrypt from 'bcryptjs';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in (from localStorage session)
        const sessionUser = localStorage.getItem('pulse_user');
        if (sessionUser) {
            setUser(JSON.parse(sessionUser));
        }
        setLoading(false);
    }, []);

    const register = async (userData, password) => {
        try {
            // Hash password
            const passwordHash = await bcrypt.hash(password, 10);
            
            // Check if admin email
            const isAdmin = userData.email.toLowerCase().includes('admin');

            // Insert user into database
            const result = await sql`
                INSERT INTO users (email, password_hash, name, major, student_id, is_admin)
                VALUES (
                    ${userData.email},
                    ${passwordHash},
                    ${userData.name},
                    ${userData.major},
                    ${userData.studentId},
                    ${isAdmin}
                )
                RETURNING id, email, name, major, student_id, is_admin, joined_date
            `;

            const newUser = result[0];
            
            // Save to localStorage
            localStorage.setItem('pulse_user', JSON.stringify(newUser));
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
            // Get user from database
            const result = await sql`
                SELECT id, email, password_hash, name, major, student_id, is_admin, joined_date
                FROM users
                WHERE email = ${email}
            `;

            if (result.length === 0) {
                return { success: false, error: 'User not found' };
            }

            const dbUser = result[0];

            // Verify password
            const isValid = await bcrypt.compare(password, dbUser.password_hash);
            if (!isValid) {
                return { success: false, error: 'Invalid password' };
            }

            // Remove password_hash from user object
            const { password_hash, ...userWithoutPassword } = dbUser;

            // Save to localStorage
            localStorage.setItem('pulse_user', JSON.stringify(userWithoutPassword));
            setUser(userWithoutPassword);

            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        localStorage.removeItem('pulse_user');
        setUser(null);
    };

    const updateUser = async (updates) => {
        try {
            const result = await sql`
                UPDATE users
                SET 
                    name = ${updates.name || user.name},
                    major = ${updates.major || user.major},
                    student_id = ${updates.student_id || user.student_id}
                WHERE id = ${user.id}
                RETURNING id, email, name, major, student_id, is_admin, joined_date
            `;

            const updatedUser = result[0];
            localStorage.setItem('pulse_user', JSON.stringify(updatedUser));
            setUser(updatedUser);

            return { success: true };
        } catch (error) {
            console.error('Update error:', error);
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
        signOut: logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
