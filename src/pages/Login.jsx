import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {
    RiMailFill, RiLockPasswordFill, RiEyeFill, RiEyeOffFill,
    RiLoginCircleFill, RiArrowLeftLine, RiGoogleFill
} from 'react-icons/ri';
import { VscCode } from 'react-icons/vsc';

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
        setGoogleClientId(import.meta.env.VITE_GOOGLE_CLIENT_ID || '');
    }, []);

    const handleGoogleSuccess = async (credentialResponse) => {
        setError('');
        setIsLoading(true);

        try {
            const result = await loginWithGoogle(credentialResponse.credential);

            if (result.success) {
                if (result.needsVerification) {
                    navigate('/verify-email', { state: { email: result.user.email } });
                } else {
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
                if (result.error === 'User not found' || result.error === 'Invalid password') {
                    setError('Invalid email or password');
                } else {
                    setError('Login failed. Please try again.');
                }
            }
        } catch (err) {
            setError('An error occurred during login');
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
                className="w-full max-w-md relative z-10"
            >
                <div className="card-cyber p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]/80 backdrop-blur-xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                                <VscCode className="w-8 h-8" strokeWidth={0.5} />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">System Access</h1>
                        <p className="text-gray-400 text-sm">Enter your credentials to continue</p>
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
                                Identification
                            </label>
                            <div className="relative group">
                                <RiMailFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="operative@zerocode.dev"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Access Key
                            </label>
                            <div className="relative group">
                                <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-11 pr-12 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600"
                                    placeholder="••••••••"
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

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-[var(--bg-panel)] text-[var(--accent-primary)] focus:ring-offset-0 focus:ring-0" />
                                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Keep session active</span>
                            </label>
                            <Link to="/forgot-password" className="text-xs text-[var(--accent-primary)] hover:text-blue-400 transition-colors font-medium">
                                Lost access key?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-[var(--accent-primary)] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-[0_0_20px_var(--accent-glow)] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Authenticating...
                                </>
                            ) : (
                                <>
                                    <RiLoginCircleFill size={18} />
                                    Authenticate
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[var(--border-subtle)]"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                                <span className="px-3 bg-[#0c0c0c] text-gray-600">Alternative Access</span>
                            </div>
                        </div>

                        {googleClientId && (
                            <GoogleOAuthProvider clientId={googleClientId}>
                                <div className="google-login-wrapper">
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleError}
                                        theme="filled_black"
                                        size="large"
                                        width="100%"
                                        text="signin_with"
                                        shape="pill"
                                    />
                                </div>
                            </GoogleOAuthProvider>
                        )}
                    </div>

                    <p className="mt-8 text-center text-gray-500 text-sm">
                        New operative?{' '}
                        <Link to="/register" className="text-white hover:text-[var(--accent-primary)] transition-colors font-bold">
                            Initialize Protocol →
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
