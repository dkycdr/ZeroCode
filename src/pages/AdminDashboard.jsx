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
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Dashboard</span>
                    </button>

                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                            <p className="text-gray-400">Manage user subscriptions</p>
                        </div>
                        <button
                            onClick={loadUsers}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <RefreshCw size={16} />
                            Refresh
                        </button>
                    </div>

                    {message && (
                        <div className={clsx(
                            "mb-6 px-4 py-3 rounded-lg flex items-center gap-2",
                            message.type === 'success' ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                        )}>
                            {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
                            {message.text}
                        </div>
                    )}

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Total Users', value: stats.total, icon: <Users size={18} /> },
                            { label: 'Free Users', value: stats.free, icon: <Users size={18} /> },
                            { label: 'Paid Users', value: stats.paid, icon: <Crown size={18} /> },
                            { label: 'Admins', value: stats.admin, icon: <Shield size={18} /> }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#111111] rounded-xl border border-white/10 p-4">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    {stat.icon}
                                    <span className="text-sm">{stat.label}</span>
                                </div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search by email or name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                            />
                        </div>
                        <div className="relative">
                            <select
                                value={filterTier}
                                onChange={(e) => setFilterTier(e.target.value)}
                                className="appearance-none pl-4 pr-10 py-2.5 bg-[#111111] border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20 cursor-pointer"
                            >
                                <option value="all">All Tiers</option>
                                {TIER_OPTIONS.map(t => (
                                    <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    <div className="bg-[#111111] rounded-xl border border-white/10 overflow-hidden">
                        {loading ? (
                            <div className="p-12 text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                                <p className="text-gray-400">Loading users...</p>
                            </div>
                        ) : filteredUsers.length === 0 ? (
                            <div className="p-12 text-center text-gray-500">No users found</div>
                        ) : (
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">User</th>
                                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Subscription</th>
                                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Joined</th>
                                        <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((u) => (
                                        <tr key={u.id} className="border-b border-white/5 last:border-b-0 hover:bg-white/5">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-white">{u.name}</div>
                                                <div className="text-sm text-gray-500">{u.email}</div>
                                                {u.phone && <div className="text-xs text-gray-600">{u.phone}</div>}
                                            </td>
                                            <td className="px-6 py-4">
                                                {editingUser === u.id ? (
                                                    <select
                                                        value={newTier}
                                                        onChange={(e) => setNewTier(e.target.value)}
                                                        className="px-3 py-1.5 bg-[#0a0a0a] border border-white/20 rounded-lg text-white text-sm focus:outline-none"
                                                        autoFocus
                                                    >
                                                        <option value="">Select tier...</option>
                                                        {TIER_OPTIONS.map(t => (
                                                            <option key={t.value} value={t.value}>{t.label}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <span className={clsx(
                                                        "inline-flex px-3 py-1 rounded-full text-xs font-medium border",
                                                        TIER_COLORS[u.subscription_tier] || TIER_COLORS.free
                                                    )}>
                                                        {SUBSCRIPTION_TIERS[u.subscription_tier]?.label || 'Free'}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {new Date(u.joined_date).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {editingUser === u.id ? (
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => handleUpdateTier(u.id)}
                                                            disabled={!newTier || updating}
                                                            className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            <Check size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => { setEditingUser(null); setNewTier(''); }}
                                                            className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => { setEditingUser(u.id); setNewTier(u.subscription_tier || 'free'); }}
                                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                                    >
                                                        Change Tier
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className="mt-8 p-6 bg-[#111111] rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-4">📋 How to Upgrade Users</h3>
                        <ol className="space-y-2 text-sm text-gray-400">
                            <li>1. User contacts you via WhatsApp to purchase a plan</li>
                            <li>2. User transfers payment to your account</li>
                            <li>3. Find the user in the table above</li>
                            <li>4. Click "Change Tier" and select the purchased plan</li>
                            <li>5. Click ✓ to save - user can immediately access courses!</li>
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    );
}
