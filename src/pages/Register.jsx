import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, Code2, Sparkles, Rocket, BookOpen, Zap } from 'lucide-react';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            setIsLoading(false);
            return;
        }

        try {
            const result = await register({
                name: formData.name,
                email: formData.email,
                studentId: 'N/A',
                major: 'Not specified'
            }, formData.password);

            if (result.success) {
                navigate('/dashboard');
            } else {
                setError(result.error || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen flex bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Left Side - Hero */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 items-center justify-center relative overflow-y-auto"
            >
                {/* Animated Background */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
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
                        <Rocket size={16} className="text-yellow-300" />
                        <span className="text-sm font-semibold">Start Your Journey Today</span>
                    </motion.div>

                    <h2 className="text-6xl font-black mb-6 leading-tight">
                        Join
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                            ZeroCode
                        </span>
                    </h2>
                    <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                        Start learning web development from absolute zero. No experience needed, just bring your curiosity!
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-4">
                        {[
                            { icon: Code2, text: 'Learn at your own pace', color: 'from-blue-400 to-cyan-400' },
                            { icon: BookOpen, text: 'Beginner-friendly content', color: 'from-purple-400 to-pink-400' },
                            { icon: Sparkles, text: 'Interactive exercises', color: 'from-yellow-400 to-orange-400' },
                            { icon: Rocket, text: 'Build real projects', color: 'from-green-400 to-emerald-400' }
                        ].map((benefit, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                                    <benefit.icon size={24} className="text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-lg font-medium">{benefit.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                    >
                        <p className="text-lg italic text-white/90 mb-3">
                            "The best time to start was yesterday. The second best time is now."
                        </p>
                        <p className="text-sm text-purple-200">- Every successful developer</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
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
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
                                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl">
                                    <Code2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Brand Name */}
                        <h1 className="text-4xl font-black text-slate-900 mb-2">
                            Create Your Account
                        </h1>
                        <p className="text-slate-600 text-lg">Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">ZeroCode</span> - it's free forever!</p>
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
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">Minimum 6 characters</p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 pt-2">
                            <input 
                                type="checkbox" 
                                required
                                className="w-5 h-5 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 focus:ring-2" 
                            />
                            <label className="text-sm text-slate-600">
                                I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-700 font-semibold">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 font-semibold">Privacy Policy</Link>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    <UserPlus size={20} />
                                    Create Free Account
                                </>
                            )}
                        </button>

                        {/* Benefits reminder */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap size={16} className="text-indigo-600" />
                                <span className="text-sm font-bold text-slate-900">What you get:</span>
                            </div>
                            <ul className="text-xs text-slate-600 space-y-1 ml-6">
                                <li>• 16 comprehensive courses</li>
                                <li>• Interactive coding environment</li>
                                <li>• Track your progress</li>
                                <li>• 100% free forever</li>
                            </ul>
                        </div>
                    </motion.form>

                    {/* Login Link */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 text-center text-slate-600"
                    >
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all">
                            Sign in →
                        </Link>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
