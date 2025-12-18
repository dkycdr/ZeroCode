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
        <div className="h-screen flex bg-gradient-to-br from-slate-50 to-slate-100">
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
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
                                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                                    <Code2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Brand Name */}
                        <h1 className="text-4xl font-black text-slate-900 mb-2">
                            Zero<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Code</span>
                        </h1>
                        <p className="text-slate-600 text-lg">Welcome back! Continue your journey</p>
                        <p className="text-slate-500 text-sm mt-1">From Zero to Hero 🚀</p>
                    </motion.div>

                    {/* Error Message */}
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
                        >
                            <p className="text-red-700 text-sm font-medium">{error}</p>
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
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-2" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
                                <div className="w-full border-t border-slate-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 font-medium">Quick Access</span>
                            </div>
                        </div>
                        
                        <button
                            type="button"
                            onClick={handleAdminLogin}
                            disabled={isLoading}
                            className="mt-4 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <Zap size={18} />
                            Admin Access (Testing)
                        </button>
                        <p className="mt-2 text-xs text-center text-slate-500">
                            All courses unlocked • Full access
                        </p>
                    </motion.div>

                    {/* Sign Up Link */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 text-center text-slate-600"
                    >
                        New to ZeroCode?{' '}
                        <Link to="/register" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
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
                className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-12 items-center justify-center relative overflow-y-auto"
            >
                {/* Animated Background Elements */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
                />
                
                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="relative z-10 text-white max-w-xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
                    >
                        <Sparkles size={16} className="text-yellow-300" />
                        <span className="text-sm font-semibold">Learn to Code from Absolute Zero</span>
                    </motion.div>

                    <h2 className="text-6xl font-black mb-6 leading-tight">
                        Start Your
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                            Coding Journey
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Master web development with interactive lessons designed for complete beginners. No experience required!
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4">
                        {[
                            { icon: Code2, text: '16 comprehensive courses', color: 'from-blue-400 to-cyan-400' },
                            { icon: Target, text: 'Learn from absolute zero', color: 'from-purple-400 to-pink-400' },
                            { icon: Zap, text: 'Interactive coding environment', color: 'from-yellow-400 to-orange-400' },
                            { icon: Sparkles, text: 'Track your progress', color: 'from-green-400 to-emerald-400' }
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                                    <feature.icon size={24} className="text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-lg font-medium">{feature.text}</span>
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
                                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                                <div className="text-sm text-blue-200">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
