import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import {
    RiUser3Fill, RiMailFill, RiLockPasswordFill, RiEyeFill,
    RiEyeOffFill, RiUserAddFill, RiArrowLeftLine, RiFlashlightFill
} from 'react-icons/ri';
import { VscCode } from 'react-icons/vsc';

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
        <div className="h-screen w-full flex bg-[#0a0a0a] overflow-hidden font-sans">
            {/* LEFT SIDE: Visuals & Benefits */}
            <div className="hidden lg:flex w-[55%] relative flex-col justify-center items-center overflow-hidden bg-black">
                {/* Visual Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen animate-pulse"></div>

                <div className="relative z-10 px-16 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                            Initialize<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Protocol.</span>
                        </h1>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                    <VscCode size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Elite Curriculum</h3>
                                    <p className="text-gray-400 text-sm">Access industry-standard missions designed to forge top-tier developers.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <div className="font-mono font-bold text-xs">{`</>`}</div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Terminal Access</h3>
                                    <p className="text-gray-400 text-sm">Execute Python, JS, and Shell commands directly in the browser.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="w-full lg:w-[45%] h-full flex flex-col relative bg-[var(--bg-primary)] border-l border-[#2d2d2d]">
                {/* Back Button */}
                <div className="absolute top-8 left-8 z-20">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider group"
                    >
                        <RiArrowLeftLine size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Base
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center p-8 sm:p-12 overflow-y-auto custom-scrollbar">
                    <div className="w-full max-w-md space-y-8">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                                <RiUserAddFill size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">New Operative</h2>
                        </div>

                        <div className="text-center lg:text-left">
                            <h2 className="hidden lg:block text-3xl font-bold text-white mb-2">Create Identity</h2>
                            <p className="text-gray-400 text-sm">Join the network and begin your training.</p>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                <p className="text-red-400 text-sm font-medium">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Grid to save vertical space */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Operative Name</label>
                                    <div className="relative group">
                                        <RiUser3Fill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-purple-400 focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Frequency</label>
                                    <div className="relative group">
                                        <RiMailFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-purple-400 focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
                                            placeholder="email@zerocode.dev"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Passkey</label>
                                    <div className="relative group">
                                        <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-full pl-11 pr-10 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-purple-400 focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
                                            placeholder="Min 6 chars"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Verify</label>
                                    <div className="relative group">
                                        <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={18} />
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            className="w-full pl-11 pr-10 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-purple-400 focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
                                            placeholder="Repeat key"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="w-4 h-4 mt-0.5 rounded border-gray-600 bg-[var(--bg-panel)] text-purple-500 focus:ring-offset-0 focus:ring-0"
                                />
                                <label className="text-xs text-gray-400">
                                    I verify that I accept the <Link to="/terms" className="text-white hover:underline decoration-purple-500">Terms of Service</Link> and <Link to="/privacy" className="text-white hover:underline decoration-purple-500">Privacy Policy</Link>.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-white text-black rounded-xl font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        <span>Initialzing...</span>
                                    </>
                                ) : (
                                    <>
                                        <RiUserAddFill size={18} />
                                        <span>Create Identity</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-gray-500 text-sm pt-4">
                            Already an operative?{' '}
                            <Link to="/login" className="text-purple-400 hover:text-white transition-colors font-bold">
                                Authenticate →
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
