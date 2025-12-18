import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check current session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                loadUserProfile(session.user.id);
            } else {
                setLoading(false);
            }
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                loadUserProfile(session.user.id);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const loadUserProfile = async (userId) => {
        try {
            const { data, error } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw error;
            setUser(data);
        } catch (error) {
            console.error('Error loading profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData, password) => {
        try {
            // 1. Sign up with Supabase Auth
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: userData.email,
                password: password,
            });

            if (authError) throw authError;
            if (!authData.user) throw new Error('No user returned from signup');

            // 2. Wait a bit for auth session to be established
            await new Promise(resolve => setTimeout(resolve, 500));

            // 3. Create user profile (using service role or with proper RLS)
            const { error: profileError } = await supabase
                .from('user_profiles')
                .insert([{
                    id: authData.user.id,
                    name: userData.name,
                    email: userData.email,
                    major: userData.major,
                    student_id: userData.studentId,
                    is_admin: userData.email.toLowerCase().includes('admin'),
                }]);

            if (profileError) {
                console.error('Profile creation error:', profileError);
                // If profile creation fails, still try to load user
                // Profile might have been created by trigger or other means
            }

            // 4. Load user profile
            await loadUserProfile(authData.user.id);

            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: error.message };
        }
    };

    const login = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            await loadUserProfile(data.user.id);
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    const updateUser = async (updates) => {
        try {
            const { error } = await supabase
                .from('user_profiles')
                .update(updates)
                .eq('id', user.id);

            if (error) throw error;

            setUser({ ...user, ...updates });
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
        // Legacy support
        signOut: logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
