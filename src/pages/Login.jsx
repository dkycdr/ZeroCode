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
        <div className="h-screen w-full flex bg-[#0a0a0a] overflow-hidden font-sans">
            {/* LEFT SIDE: Visuals & Branding */}
            <div className="hidden lg:flex w-[55%] relative flex-col justify-center items-center overflow-hidden bg-black">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/20 blur-[150px] rounded-full mix-blend-screen animate-pulse"></div>

                {/* Content */}
                <div className="relative z-10 px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 rotate-3 transition-transform hover:rotate-6">
                            <VscCode className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                            Welcome back,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Operative.</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                            Access the neural network to continue your training progression. System status is nominal.
                        </p>
                    </motion.div>

                    {/* Stats or Decor */}
                    <div className="flex justify-center gap-8 mt-12 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-2xl font-bold text-white font-mono">15+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Modules</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white font-mono">99%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Uptime</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white font-mono">Elite</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Status</div>
                        </div>
                    </div>
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
                    <div className="w-full max-w-sm space-y-8">
                        {/* Mobile Header (Visible only on small screens) */}
                        <div className="lg:hidden text-center mb-8">
                            <div className="w-12 h-12 mx-auto bg-[var(--accent-primary)]/10 rounded-xl flex items-center justify-center mb-4 text-[var(--accent-primary)]">
                                <VscCode className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">System Access</h2>
                        </div>

                        <div className="text-center lg:text-left">
                            <h2 className="hidden lg:block text-3xl font-bold text-white mb-2">Identify Yourself</h2>
                            <p className="text-gray-400 text-sm">Enter your credentials to decrypt your workspace.</p>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                <p className="text-red-400 text-sm font-medium">{error}</p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <div className="relative group">
                                    <RiMailFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
                                        placeholder="operative@zerocode.dev"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Access Key</label>
                                    <Link to="/forgot-password" className="text-xs text-[var(--accent-primary)] hover:text-blue-400 transition-colors font-medium">
                                        Forgot key?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-11 pr-12 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl focus:border-[var(--accent-primary)] focus:bg-[var(--bg-primary)] focus:outline-none transition-all text-white placeholder-gray-600 font-medium"
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

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-[var(--accent-primary)] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 mt-4"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Granting Access...</span>
                                    </>
                                ) : (
                                    <>
                                        <RiLoginCircleFill size={18} />
                                        <span>Authenticate</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--border-subtle)]"></div></div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                                <span className="px-3 bg-[var(--bg-primary)] text-gray-600">Or Continue With</span>
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

                        <p className="text-center text-gray-500 text-sm pt-4">
                            New to the system?{' '}
                            <Link to="/register" className="text-white hover:text-[var(--accent-primary)] transition-colors font-bold">
                                Initialize Protocol →
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
