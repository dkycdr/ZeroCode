import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { Shield, ArrowLeft, Lock, Check, AlertCircle } from 'lucide-react';

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
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
            <div className="w-full max-w-sm">
                {/* Back */}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-sm"
                >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </button>

                {/* Card */}
                <div className="bg-[#111] rounded-2xl border border-white/10 p-8">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                            <Shield size={24} className="text-yellow-400" />
                        </div>
                        <h1 className="text-xl font-bold text-white mb-2">Admin Access</h1>
                        <p className="text-sm text-gray-500">Enter the admin code to unlock admin features</p>
                    </div>

                    {success ? (
                        <div className="text-center py-8">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                <Check size={24} className="text-green-400" />
                            </div>
                            <p className="text-green-400 font-medium">Access granted!</p>
                            <p className="text-sm text-gray-500 mt-1">Redirecting to admin dashboard...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle size={16} />
                                    {error}
                                </div>
                            )}

                            <div className="mb-6">
                                <label className="block text-sm text-gray-400 mb-2">Admin Code</label>
                                <div className="relative">
                                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="password"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                                        placeholder="Enter code"
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/20 font-mono tracking-wider"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !code}
                                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                        Verifying...
                                    </>
                                ) : (
                                    <>
                                        <Shield size={16} />
                                        Verify Code
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                <p className="text-center text-xs text-gray-600 mt-6">
                    Logged in as {user?.email}
                </p>
            </div>
        </div>
    );
}
