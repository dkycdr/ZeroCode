import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, SUBSCRIPTION_TIERS } from '../contexts/AuthProvider';
import Header from '../components/Header';
import { Users, Search, Check, X, Crown, Shield, ArrowLeft, RefreshCw, AlertCircle, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const TIER_COLORS = {
    free: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    beginner: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    intermediate: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
    fullstack: 'bg-green-500/20 text-green-400 border-green-500/30',
    admin: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
};

const TIER_OPTIONS = [
    { value: 'free', label: 'Free (Demo)' },
    { value: 'beginner', label: 'Beginner (50K)' },
    { value: 'intermediate', label: 'Intermediate (75K)' },
    { value: 'advanced', label: 'Advanced (80K)' },
    { value: 'fullstack', label: 'Fullstack (164K)' },
    { value: 'admin', label: 'Admin' }
];

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { isAdmin, getAllUsers, updateUserSubscription } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTier, setFilterTier] = useState('all');
    const [editingUser, setEditingUser] = useState(null);
    const [newTier, setNewTier] = useState('');
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!isAdmin) {
            navigate('/dashboard');
            return;
        }
        loadUsers();
    }, [isAdmin, navigate]);

    const loadUsers = async () => {
        setLoading(true);
        const result = await getAllUsers();
        if (result.success) {
            setUsers(result.users);
        }
        setLoading(false);
    };

    const handleUpdateTier = async (userId) => {
        if (!newTier) return;

        setUpdating(true);
        const result = await updateUserSubscription(userId, newTier);

        if (result.success) {
            setMessage({ type: 'success', text: `User upgraded to ${newTier}!` });
            setEditingUser(null);
            setNewTier('');
            loadUsers();
        } else {
            setMessage({ type: 'error', text: result.error });
        }
        setUpdating(false);

        setTimeout(() => setMessage(null), 3000);
    };

    const filteredUsers = users.filter(u => {
        const matchesSearch =
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTier = filterTier === 'all' || u.subscription_tier === filterTier;
        return matchesSearch && matchesTier;
    });

    const stats = {
        total: users.length,
        free: users.filter(u => u.subscription_tier === 'free').length,
        paid: users.filter(u => !['free', 'admin'].includes(u.subscription_tier)).length,
        admin: users.filter(u => u.subscription_tier === 'admin' || u.is_admin).length
    };

    if (!isAdmin) return null;

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-sans text-gray-100 flex flex-col">
            <Header />

            <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
                        <div>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent-primary)] mb-4 transition-colors text-xs font-mono uppercase tracking-wider group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Dashboard</span>
                            </button>
                            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                                <Shield className="text-[var(--accent-primary)]" size={32} />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    Command Center
                                </span>
                            </h1>
                            <p className="text-gray-400 mt-1 pl-11">Manage users, access levels, and subscriptions.</p>
                        </div>
                        <button
                            onClick={loadUsers}
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-lg text-gray-400 hover:text-white hover:border-[var(--accent-primary)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
                        >
                            <RefreshCw size={16} className={clsx({ "animate-spin": loading })} />
                            <span>Refresh Data</span>
                        </button>
                    </div>

                    {/* Notification Message */}
                    {message && (
                        <div className={clsx(
                            "px-4 py-3 rounded-lg flex items-center gap-3 border animate-slide-in",
                            message.type === 'success'
                                ? "bg-green-500/10 border-green-500/30 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                                : "bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        )}>
                            {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                            <span className="font-medium">{message.text}</span>
                        </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-100">
                        {[
                            { label: 'Total Users', value: stats.total, icon: <Users size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                            { label: 'Free Tier', value: stats.free, icon: <Users size={20} />, color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/20' },
                            { label: 'Premium', value: stats.paid, icon: <Crown size={20} />, color: 'text-[var(--accent-primary)]', bg: 'bg-[var(--accent-primary)]/10', border: 'border-[var(--accent-primary)]/20' },
                            { label: 'Admins', value: stats.admin, icon: <Shield size={20} />, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' }
                        ].map((stat, i) => (
                            <div key={i} className={`p-6 rounded-xl border ${stat.border} ${stat.bg} backdrop-blur-md relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {stat.icon}
                                </div>
                                <div className="relative z-10">
                                    <div className={`flex items-center gap-2 ${stat.color} mb-2 font-mono text-xs uppercase tracking-wider`}>
                                        {stat.icon}
                                        <span>{stat.label}</span>
                                    </div>
                                    <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filters & Actions */}
                    <div className="bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-2xl p-4 flex flex-col md:flex-row gap-4 shadow-xl animate-fade-in-up delay-200">
                        <div className="flex-1 relative group">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by email or name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[#000] focus:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
                            />
                        </div>
                        <div className="relative">
                            <select
                                value={filterTier}
                                onChange={(e) => setFilterTier(e.target.value)}
                                className="appearance-none pl-4 pr-10 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl text-white focus:outline-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_15px_var(--accent-glow)] cursor-pointer transition-all min-w-[180px]"
                            >
                                <option value="all">All Tiers</option>
                                {TIER_OPTIONS.map(t => (
                                    <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up delay-300">
                        {loading ? (
                            <div className="p-20 text-center flex flex-col items-center justify-center">
                                <div className="w-12 h-12 border-4 border-[var(--accent-primary)]/30 border-t-[var(--accent-primary)] rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-400 font-mono text-sm animate-pulse">Scanning database...</p>
                            </div>
                        ) : filteredUsers.length === 0 ? (
                            <div className="p-20 text-center text-gray-500">
                                <Search size={48} className="mx-auto mb-4 opacity-20" />
                                <p>No users found matching your criteria.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[var(--border-subtle)] bg-white/5">
                                            <th className="text-left px-6 py-4 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">User Identity</th>
                                            <th className="text-left px-6 py-4 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Access Level</th>
                                            <th className="text-left px-6 py-4 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Join Date</th>
                                            <th className="text-right px-6 py-4 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Controls</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[var(--border-subtle)]">
                                        {filteredUsers.map((u) => (
                                            <tr key={u.id} className="group hover:bg-[var(--accent-primary)]/5 transition-colors duration-200">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors">{u.name}</div>
                                                    <div className="text-sm text-gray-500">{u.email}</div>
                                                    {u.phone && <div className="text-xs text-gray-600 font-mono mt-0.5">{u.phone}</div>}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {editingUser === u.id ? (
                                                        <div className="relative animate-fade-in">
                                                            <select
                                                                value={newTier}
                                                                onChange={(e) => setNewTier(e.target.value)}
                                                                className="w-full px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_10px_var(--accent-glow)]"
                                                                autoFocus
                                                            >
                                                                <option value="">Select tier...</option>
                                                                {TIER_OPTIONS.map(t => (
                                                                    <option key={t.value} value={t.value}>{t.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <span className={clsx(
                                                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
                                                            TIER_COLORS[u.subscription_tier] || TIER_COLORS.free
                                                        )}>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_5px_currentColor]"></span>
                                                            {SUBSCRIPTION_TIERS[u.subscription_tier]?.label || 'Free'}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                                                    {new Date(u.joined_date).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    {editingUser === u.id ? (
                                                        <div className="flex items-center justify-end gap-2 animate-fade-in-left">
                                                            <button
                                                                onClick={() => handleUpdateTier(u.id)}
                                                                disabled={!newTier || updating}
                                                                className="p-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                                title="Save Changes"
                                                            >
                                                                <Check size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() => { setEditingUser(null); setNewTier(''); }}
                                                                className="p-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all"
                                                                title="Cancel"
                                                            >
                                                                <X size={16} />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={() => { setEditingUser(u.id); setNewTier(u.subscription_tier || 'free'); }}
                                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 transform hover:-translate-y-0.5"
                                                        >
                                                            Change Tier
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Pro Tip Section */}
                    <div className="p-6 bg-gradient-to-r from-[var(--bg-panel)] to-[var(--bg-primary)] rounded-2xl border border-[var(--border-subtle)] relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Shield size={100} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-[var(--accent-primary)]">⚡</span>
                            <span>Admin Protocols</span>
                        </h3>
                        <ol className="space-y-3 text-sm text-gray-400 font-mono relative z-10">
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] border border-white/10">01</span>
                                <span>Verify payment receipt from user via external channel.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] border border-white/10">02</span>
                                <span>Locate user via Email search function.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] border border-white/10">03</span>
                                <span>Modify subscription tier to match purchased plan.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] border border-white/10">04</span>
                                <span>Confirm upgrade. Access is granted instantaneously.</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    );
}
