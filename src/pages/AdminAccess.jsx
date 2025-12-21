import { useState } from 'react';
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

    // If already admin, redirect to admin dashboard
    if (isAdmin) {
        navigate('/admin');
        return null;
    }

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
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-primary)]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-20" />

            <div className="w-full max-w-sm relative z-10">
                {/* Back */}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-xs font-mono uppercase tracking-wider group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </button>

                {/* Card */}
                <div className="card-cyber p-8 hover:translate-y-0">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_var(--accent-glow)]">
                            <Shield size={32} className="text-[var(--accent-primary)]" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Admin Access</h1>
                        <p className="text-sm text-gray-500">Security Clearance Level 5 Required</p>
                    </div>

                    {success ? (
                        <div className="text-center py-8 animate-fade-in-up">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <Check size={32} className="text-green-400" />
                            </div>
                            <p className="text-green-400 font-bold text-lg mb-2">Access Granted</p>
                            <p className="text-sm text-gray-500 font-mono">Redirecting to command center...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-400 text-sm animate-shake">
                                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="mb-8">
                                <label className="block text-xs text-gray-500 font-mono font-bold uppercase tracking-wider mb-3">Admin Code</label>
                                <div className="relative group">
                                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" />
                                    <input
                                        type="password"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                                        placeholder="ENTER CODE"
                                        className="w-full pl-11 pr-4 py-3.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg text-white placeholder-gray-700 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-panel)] font-mono tracking-wider transition-all shadow-inner"
                                        autoFocus
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-primary)] scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left rounded-b-lg opacity-50" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !code}
                                className={clsx(
                                    "w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 relative overflow-hidden group",
                                    loading || !code
                                        ? "bg-[var(--bg-primary)] text-gray-600 border border-[var(--border-subtle)] cursor-not-allowed"
                                        : "bg-[var(--accent-primary)] text-white hover:bg-blue-600 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)]"
                                )}
                            >
                                {loading && (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                )}
                                <span>{loading ? 'Verifying...' : 'Verify Access'}</span>
                                {!loading && <Shield size={18} className={clsx("transition-transform", !code ? "" : "group-hover:scale-110")} />}
                            </button>
                        </form>
                    )}
                </div>

                <div className="text-center mt-8 space-y-2">
                    <p className="text-xs text-gray-600 font-mono">
                        TERMINAL SESSION: {user?.email}
                    </p>
                    <p className="text-[10px] text-gray-700 font-mono">
                        UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED
                    </p>
                </div>
            </div>
        </div>
    );
}
