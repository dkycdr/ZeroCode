import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { Mail, Lock, Eye, EyeOff, LogIn, Code2, Sparkles, Zap, Target } from 'lucide-react';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

                    {/* Admin Login */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-[#0a0a0a] text-gray-500">Quick Access</span>
                            </div>
                        </div>
                        
                        <button
                            type="button"
                            onClick={handleAdminLogin}
                            disabled={isLoading}
                            className="mt-4 w-full py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <Zap size={18} />
                            Admin Access (Testing)
                        </button>
                        <p className="mt-2 text-xs text-center text-gray-500">
                            All courses unlocked
                        </p>
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
                            { number: '0', label: 'Cost' }
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
