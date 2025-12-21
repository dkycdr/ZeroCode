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
        <div className="min-h-screen bg-[var(--bg-primary)] font-sans flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--accent-primary)]/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-20">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
                >
                    <RiArrowLeftLine size={16} />
                    Return to Base
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl relative z-10"
            >
                <div className="card-cyber p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]/80 backdrop-blur-xl max-h-[85vh] overflow-y-auto custom-scrollbar">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                                <VscCode className="w-8 h-8" sx={{ strokeWidth: 0.5 }} />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Initialize Protocol</h1>
                        <p className="text-gray-400 text-sm">Create your identity to access the system</p>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                            <p className="text-red-400 text-sm font-medium">{error}</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Operative Name
                            </label>
                            <div className="relative group">
                                <RiUser3Fill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Email Frequency
                            </label>
                            <div className="relative group">
                                <RiMailFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="operative@zerocode.dev"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    Passkey
                                </label>
                                <div className="relative group">
                                    <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-11 pr-10 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                        placeholder="Min 6 chars"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <RiEyeOffFill size={18} /> : <RiEyeFill size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    Verify Passkey
                                </label>
                                <div className="relative group">
                                    <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        className="w-full pl-11 pr-10 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                        placeholder="Repeat key"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showConfirmPassword ? <RiEyeOffFill size={18} /> : <RiEyeFill size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                required
                                className="w-4 h-4 mt-0.5 rounded border-gray-600 bg-[var(--bg-panel)] text-[var(--accent-primary)] focus:ring-offset-0 focus:ring-0"
                            />
                            <label className="text-xs text-gray-400">
                                I verify that I accept the <Link to="/terms" className="text-white hover:underline decoration-[var(--accent-primary)]">Terms of Service</Link> and <Link to="/privacy" className="text-white hover:underline decoration-[var(--accent-primary)]">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-white text-black rounded-xl font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                    Registering...
                                </>
                            ) : (
                                <>
                                    <RiUserAddFill size={18} />
                                    Create Identity
                                </>
                            )}
                        </button>
                    </form>

                    {/* Benefits reminder */}
                    <div className="mt-8 p-4 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <RiFlashlightFill size={16} className="text-[var(--accent-primary)]" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Free Access Level</span>
                        </div>
                        <ul className="text-xs text-gray-400 space-y-2 ml-1 font-mono">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-500 rounded-full"></div>3 demo modules (HTML, CSS, JS)</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-500 rounded-full"></div>Browser-based IDE access</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-500 rounded-full"></div>Real-time progression tracking</li>
                        </ul>
                    </div>

                    <p className="mt-8 text-center text-gray-500 text-sm">
                        Already an operative?{' '}
                        <Link to="/login" className="text-[var(--accent-primary)] hover:text-white transition-colors font-bold">
                            Authenticate →
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
