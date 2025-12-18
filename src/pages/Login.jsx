import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { Mail, Lock, Eye, EyeOff, LogIn, Code2, Sparkles, Zap, Target } from 'lucide-react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

export default function Login() {
    const navigate = useNavigate();
    const { login, loginWithGoogle } = useAuth();
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [googleClientId, setGoogleClientId] = useState('');

    useEffect(() => {
        // Get Google Client ID from environment
        setGoogleClientId(import.meta.env.VITE_GOOGLE_CLIENT_ID || '');
    }, []);

    const handleGoogleSuccess = async (credentialResponse) => {
        setError('');
        setIsLoading(true);

        try {
            const result = await loginWithGoogle(credentialResponse.credential);

            if (result.success) {
                if (result.needsVerification) {
                    // Redirect to email verification
                    navigate('/verify-email', { state: { email: result.user.email } });
                } else {
                    // Already verified, go to dashboard
                    navigate('/dashboard');
                }
            } else {
                setError(result.error || 'Google login failed');
            }
        } catch (err) {
            setError('An error occurred during Google login');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleError = () => {
        setError('Google login failed. Please try again.');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        try {
            const result = await login(formData.email, formData.password);

            if (result.success) {
                navigate('/dashboard');
            } else {
                setError(result.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAdminLogin = async () => {
        setError('');
        setIsLoading(true);

        const adminEmail = 'admin@zerocode.dev';
        const adminPassword = 'admin123';

        try {
            const loginResult = await login(adminEmail, adminPassword);
            
            if (loginResult.success) {
                navigate('/dashboard');
            } else {
                setError('Admin login failed: ' + (loginResult.error || 'Unknown error'));
            }
        } catch (err) {
            setError('Admin login failed');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-[#0a0a0a]">
            {/* Left Side - Form */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex items-center justify-center p-8 overflow-y-auto"
            >
                <div className="w-full max-w-md">
                    {/* Logo & Title */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        {/* Logo */}
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <Code2 className="w-10 h-10 text-white" strokeWidth={2} />
                            </div>
                        </div>
                        
                        {/* Brand Name */}
                        <h1 className="text-4xl font-bold text-white mb-2">
                            ZeroCode
                        </h1>
                        <p className="text-gray-400 text-base">Welcome back</p>
                    </motion.div>

                    {/* Error Message */}
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                        >
                            <p className="text-red-400 text-sm">{error}</p>
                        </motion.div>
                    )}

                    {/* Form */}
                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        onSubmit={handleSubmit} 
                        className="space-y-5"
                    >
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gray-300 transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gray-300 transition-colors" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-white/5 text-white focus:ring-white/20 focus:ring-2" />
                                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    Sign In
                                </>
                            )}
                        </button>
                    </motion.form>

                    {/* Google Login */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                        className="mt-8"
                    >
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-[#0a0a0a] text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {googleClientId && (
                            <GoogleOAuthProvider clientId={googleClientId}>
                                <div className="mt-4">
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleError}
                                        theme="dark"
                                        size="large"
                                        width="100%"
                                        text="signin_with"
                                    />
                                </div>
                            </GoogleOAuthProvider>
                        )}
                    </motion.div>



                    {/* Sign Up Link */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 text-center text-gray-400"
                    >
                        New to ZeroCode?{' '}
                        <Link to="/register" className="text-white hover:underline transition-all">
                            Create free account →
                        </Link>
                    </motion.p>
                </div>
            </motion.div>

            {/* Right Side - Hero */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden lg:flex flex-1 bg-[#111111] p-12 items-center justify-center relative border-l border-white/10 overflow-y-auto"
            >
                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="relative z-10 text-white max-w-xl"
                >
                    <h2 className="text-5xl font-bold mb-6 leading-tight">
                        Start Your
                        <br />
                        Coding Journey
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                        Master web development with interactive lessons designed for complete beginners. No experience required.
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4">
                        {[
                            { icon: Code2, text: '16 comprehensive courses' },
                            { icon: Target, text: 'Learn from absolute zero' },
                            { icon: Zap, text: 'Interactive coding environment' },
                            { icon: Sparkles, text: 'Track your progress' }
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                    <feature.icon size={20} className="text-white" strokeWidth={2} />
                                </div>
                                <span className="text-base text-gray-300">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mt-12 grid grid-cols-3 gap-6"
                    >
                        {[
                            { number: '16+', label: 'Courses' },
                            { number: '100+', label: 'Lessons' },
                            { number: '∞', label: 'Lifetime' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
