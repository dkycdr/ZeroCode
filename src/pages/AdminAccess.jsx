import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { Shield, ArrowLeft, Lock, Check, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function AdminAccess() {
    const navigate = useNavigate();
    const { user, verifyAdminCode, isAdmin } = useAuth();
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (isAdmin) {
            navigate('/admin');
        }
    }, [isAdmin, navigate]);

    if (isAdmin) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await verifyAdminCode(code);

        if (result.success) {
            setSuccess(true);
            setTimeout(() => {
                navigate('/admin');
            }, 1500);
        } else {
            setError(result.error || 'Invalid code');
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6 relative overflow-hidden font-sans selection:bg-[var(--accent-primary)]/30">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-primary)]/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30 animate-pulse delay-1000" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--accent-primary)] rounded-full opacity-20 animate-float" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-20 animate-float delay-500" />
                <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-[var(--accent-primary)] rounded-full opacity-10 animate-float delay-1000" />
            </div>

            <div className="w-full max-w-sm relative z-10 perspective-1000">
                {/* Back Link */}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="absolute -top-12 left-0 flex items-center gap-2 text-gray-500 hover:text-[var(--accent-primary)] transition-colors text-xs font-mono uppercase tracking-wider group opacity-0 animate-fade-in-down fill-mode-forwards delay-200"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Command
                </button>

                {/* Card */}
                <div className="relative bg-[var(--bg-panel)]/50 border border-[var(--border-subtle)] p-8 rounded-2xl backdrop-blur-xl shadow-2xl animate-scale-in">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

                    <div className="text-center mb-8 relative">
                        <div className="w-20 h-20 rounded-2xl bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_var(--accent-glow)] group">
                            <Shield size={36} className="text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Security Access</h1>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Level 5 Clearance Required</p>
                    </div>

                    {success ? (
                        <div className="text-center py-6 animate-fade-in-up">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-pulse-slow">
                                <Check size={32} className="text-green-400" />
                            </div>
                            <p className="text-green-400 font-bold text-lg mb-2">Access Granted</p>
                            <p className="text-sm text-gray-500 font-mono">Initializing admin protocols...</p>
                            <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 animate-loading-bar" />
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative z-10">
                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-400 text-sm animate-shake backdrop-blur-sm">
                                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="mb-8">
                                <label className="block text-xs text-gray-500 font-mono font-bold uppercase tracking-wider mb-2">Access Code</label>
                                <div className="relative group">
                                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors duration-300" />
                                    <input
                                        type="password"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-4 py-3.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-gray-700 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-black focus:shadow-[0_0_15px_var(--accent-glow)] font-mono tracking-[0.5em] text-center transition-all duration-300"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !code}
                                className={clsx(
                                    "w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 relative overflow-hidden group",
                                    loading || !code
                                        ? "bg-[var(--bg-primary)] text-gray-600 border border-[var(--border-subtle)] cursor-not-allowed"
                                        : "bg-[var(--accent-primary)] text-white hover:bg-blue-600 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
                                )}
                            >
                                {loading && (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                )}
                                <span>{loading ? 'Verifying...' : 'Verify Access'}</span>
                                {!loading && <Shield size={18} className={clsx("transition-transform duration-300", !code ? "" : "group-hover:rotate-12")} />}
                            </button>
                        </form>
                    )}
                </div>

                <div className="text-center mt-8 space-y-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xs text-gray-600 font-mono">
                        TERMINAL SESSION: <span className="text-gray-500">{user?.email || 'GUEST'}</span>
                    </p>
                    <p className="text-[10px] text-red-500/50 font-mono uppercase tracking-widest">
                        Unauthorized access is strictly prohibited
                    </p>
                </div>
            </div>
        </div>
    );
}
