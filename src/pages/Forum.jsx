import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';
import { sql } from '../lib/neon';
import {
    MessageSquare, Plus, Search, ThumbsUp, MessageCircle,
    Clock, User, X, Send, ChevronRight, Hash, TrendingUp, Zap, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiFireLine, RiTimeLine, RiLineChartLine } from 'react-icons/ri';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'all', label: 'All', color: 'text-gray-400 border-gray-700' },
    { id: 'general', label: 'General', color: 'text-blue-400 border-blue-900/50' },
    { id: 'html-css', label: 'HTML & CSS', color: 'text-orange-400 border-orange-900/50' },
    { id: 'javascript', label: 'JavaScript', color: 'text-yellow-400 border-yellow-900/50' },
    { id: 'react', label: 'React', color: 'text-cyan-400 border-cyan-900/50' },
    { id: 'backend', label: 'Backend', color: 'text-green-400 border-green-900/50' },
    { id: 'help', label: 'Help', color: 'text-red-400 border-red-900/50' },
];

export default function Forum() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('latest'); // latest, top, active
    const [showNewPost, setShowNewPost] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', category: 'general' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchIntelligenceStream();
    }, [sortBy]);

    const fetchIntelligenceStream = async () => {
        console.log("FETCHING INTELLIGENCE STREAM - CACHE BUST v2 - THE RAW IS GONE");
        try {
            let result;
            if (sortBy === 'top') {
                result = await sql`
                    SELECT 
                        p.*,
                        u.name as author_name,
                        u.email as author_email,
                        u.avatar as author_avatar,
                        u.subscription_tier as author_tier,
                        u.created_at as author_joined,
                        (SELECT COUNT(*) FROM forum_replies WHERE post_id = p.id) as reply_count
                    FROM forum_posts p
                    JOIN users u ON p.user_id = u.id
                    ORDER BY p.likes DESC
                `;
            } else if (sortBy === 'active') {
                result = await sql`
                    SELECT 
                        p.*,
                        u.name as author_name,
                        u.email as author_email,
                        u.avatar as author_avatar,
                        u.subscription_tier as author_tier,
                        u.created_at as author_joined,
                        (SELECT COUNT(*) FROM forum_replies WHERE post_id = p.id) as reply_count
                    FROM forum_posts p
                    JOIN users u ON p.user_id = u.id
                    ORDER BY reply_count DESC
                `;
            } else {
                result = await sql`
                    SELECT 
                        p.*,
                        u.name as author_name,
                        u.email as author_email,
                        u.avatar as author_avatar,
                        u.subscription_tier as author_tier,
                        u.created_at as author_joined,
                        (SELECT COUNT(*) FROM forum_replies WHERE post_id = p.id) as reply_count
                    FROM forum_posts p
                    JOIN users u ON p.user_id = u.id
                    ORDER BY p.created_at DESC
                `;
            }
            setPosts(result);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();
        if (!newPost.title.trim() || !newPost.content.trim()) return;

        setSubmitting(true);
        try {
            await sql`
                INSERT INTO forum_posts (user_id, title, content, category)
                VALUES (${user.id}, ${newPost.title}, ${newPost.content}, ${newPost.category})
            `;
            setNewPost({ title: '', content: '', category: 'general' });
            setShowNewPost(false);
            fetchIntelligenceStream();
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        } finally {
            setSubmitting(false);
        }
    };

    const handleLike = async (postId) => {
        try {
            const existing = await sql`
                SELECT id FROM forum_likes WHERE post_id = ${postId} AND user_id = ${user.id}
            `;

            if (existing.length > 0) {
                await sql`DELETE FROM forum_likes WHERE post_id = ${postId} AND user_id = ${user.id}`;
                await sql`UPDATE forum_posts SET likes = likes - 1 WHERE id = ${postId}`;
            } else {
                await sql`INSERT INTO forum_likes (post_id, user_id) VALUES (${postId}, ${user.id})`;
                await sql`UPDATE forum_posts SET likes = likes + 1 WHERE id = ${postId}`;
            }
            fetchIntelligenceStream();
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (date) => {
        const d = new Date(date);
        const now = new Date();
        const diff = now - d;
        const mins = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (mins < 1) return 'Just now';
        if (mins < 60) return `${mins}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return d.toLocaleDateString();
    };

    // Helper to highlight mentions in preview (simple version)
    const renderPreview = (content) => {
        const truncated = content.length > 150 ? content.substring(0, 150) + '...' : content;
        const parts = truncated.split(/(@\w+)/g);
        return parts.map((part, i) =>
            part.startsWith('@')
                ? <span key={i} className="text-blue-400 font-medium">{part}</span>
                : <span key={i}>{part}</span>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Elite Header Section */}
                <div className="relative mb-16">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                                <TrendingUp size={12} />
                                Intelligence Hub
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                COMMUNITY <span className="text-indigo-400">DISCUSSIONS</span>
                            </h1>
                            <p className="text-zinc-500 font-mono text-sm max-w-xl">
                                Synchronize with elite developers, share architectural insights, and navigate the neural networks of code.
                            </p>

                            <div className="flex items-center gap-8 pt-4">
                                {[
                                    { label: 'Threads', value: posts.length, icon: <MessageSquare size={14} /> },
                                    { label: 'Intelligence', value: posts.reduce((acc, p) => acc + (p.likes || 0), 0), icon: <ThumbsUp size={14} /> },
                                    { label: 'Active', value: '2.4K', icon: <RiFireLine size={14} /> }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
                                            {stat.icon} {stat.label}
                                        </div>
                                        <div className="text-xl font-black text-white tabular-nums">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setShowNewPost(true)}
                            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] active:scale-95 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <Plus size={18} strokeWidth={3} />
                            Start Discussion
                        </button>
                    </div>
                </div>

                {/* Navigation & Filters */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    {/* Search Component */}
                    <div className="relative flex-1 group">
                        <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                        <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by keyword, @user, or #topic..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl text-sm text-white placeholder-zinc-600 shadow-2xl focus:outline-none focus:border-white/20 focus:bg-zinc-900 transition-all font-mono"
                        />
                    </div>

                    {/* Sorting Controls */}
                    <div className="flex bg-zinc-900/50 border border-white/5 p-1.5 rounded-2xl shadow-xl">
                        {[
                            { id: 'latest', label: 'Latest', icon: <RiTimeLine /> },
                            { id: 'top', label: 'Top Intelligence', icon: <Award /> },
                            { id: 'active', label: 'Hot Discussion', icon: <RiFireLine /> }
                        ].map(s => (
                            <button
                                key={s.id}
                                onClick={() => setSortBy(s.id)}
                                className={clsx(
                                    "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                    sortBy === s.id ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"
                                )}
                            >
                                {s.icon} {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categories Scroll */}
                <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={clsx(
                                "group relative px-6 py-4 rounded-2xl border transition-all whitespace-nowrap overflow-hidden",
                                selectedCategory === cat.id
                                    ? "bg-indigo-500/10 border-indigo-500/30 text-white"
                                    : "bg-zinc-900/30 border-white/5 text-zinc-500 hover:border-white/10"
                            )}
                        >
                            {selectedCategory === cat.id && (
                                <motion.div layoutId="cat-glow" className="absolute inset-0 bg-indigo-500/20 blur-xl"></motion.div>
                            )}
                            <div className="relative z-10 flex flex-col items-start gap-1">
                                <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">Sector</span>
                                <span className="text-xs font-bold uppercase tracking-tight">{cat.label}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Posts Dynamic Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-32 bg-zinc-900/20 border border-dashed border-white/5 rounded-3xl"
                            >
                                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                    <MessageSquare size={24} className="text-zinc-700" />
                                </div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tighter">Null Result Detected</h3>
                                <p className="text-zinc-500 text-sm font-mono mt-2 italic px-8 text-center max-w-sm">"The intelligence database yielded no results for the current filter parameters."</p>
                            </motion.div>
                        ) : (
                            filteredPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => navigate(`/forum/${post.id}`)}
                                    className="group relative bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] hover:bg-zinc-900/60 hover:border-indigo-500/30 transition-all cursor-pointer overflow-hidden shadow-2xl"
                                >
                                    {/* Gradient Accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>

                                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                        {/* Status Column */}
                                        <div className="hidden md:flex flex-col items-center justify-center gap-2 min-w-[60px] border-r border-white/5 pr-8">
                                            <div className="text-2xl font-black text-white tabular-nums">{post.likes || 0}</div>
                                            <div className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Intelligence</div>
                                            <div className="w-px h-8 bg-white/5 my-2"></div>
                                            <div className="text-xl font-bold text-zinc-500 tabular-nums">{post.reply_count || 0}</div>
                                            <div className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Reports</div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 border border-white/10 ring-2 ring-transparent group-hover:ring-indigo-500/30 transition-all">
                                                        {post.author_avatar ? (
                                                            <img src={post.author_avatar} className="w-full h-full object-cover" alt="" />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center text-xs font-black bg-gradient-to-tr from-zinc-800 to-zinc-700">
                                                                {post.author_name?.[0] || 'U'}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                                                {post.author_name}
                                                            </span>
                                                            <span className={clsx(
                                                                "text-[8px] font-black px-2 py-0.5 rounded-sm border uppercase tracking-widest",
                                                                post.author_tier === 'admin' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" :
                                                                    post.author_tier === 'fullstack' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                                                                        "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                                                            )}>
                                                                {post.author_tier || 'FREE'}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] font-mono text-zinc-600 flex items-center gap-1">
                                                            <Clock size={10} /> {formatDate(post.created_at)}
                                                        </span>
                                                    </div>
                                                </div>

                                                <span className={clsx(
                                                    "ml-auto text-[10px] px-3 py-1 rounded-full border uppercase tracking-widest font-black",
                                                    CATEGORIES.find(c => c.id === post.category)?.color || CATEGORIES[0].color
                                                )}>
                                                    #{CATEGORIES.find(c => c.id === post.category)?.label}
                                                </span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:translate-x-1 transition-transform inline-block">
                                                {post.title}
                                            </h3>

                                            <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                                                {post.content}
                                            </p>

                                            <div className="flex items-center gap-6 md:hidden">
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black text-white">
                                                    <ThumbsUp size={12} /> {post.likes || 0}
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black text-white">
                                                    <MessageCircle size={12} /> {post.reply_count || 0}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden lg:flex items-center">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all border border-white/10 shadow-xl">
                                                <ChevronRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>

                {/* Elite Create Post Modal */}
                <AnimatePresence>
                    {showNewPost && (
                        <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowNewPost(false)}
                                className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                                className="bg-zinc-900 border border-white/5 w-full max-w-2xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative z-10"
                            >
                                <div className="flex items-center justify-between p-8 border-b border-white/5">
                                    <div>
                                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Iniate Discussion</h2>
                                        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-1">Protocol: Public Intelligence Sharing</p>
                                    </div>
                                    <button onClick={() => setShowNewPost(false)} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-white/5">
                                        <X size={20} />
                                    </button>
                                </div>
                                <form onSubmit={handleCreatePost} className="p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Target Sector</label>
                                            <select
                                                value={newPost.category}
                                                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                                className="w-full px-5 py-4 bg-zinc-800/50 border border-white/5 rounded-2xl text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer"
                                            >
                                                {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                                                    <option key={cat.id} value={cat.id} className="bg-zinc-900">{cat.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Topic Identifier</label>
                                            <input
                                                type="text"
                                                value={newPost.title}
                                                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                                placeholder="Subject line..."
                                                className="w-full px-5 py-4 bg-zinc-800/50 border border-white/5 rounded-2xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all font-bold"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Intelligence Content</label>
                                        <textarea
                                            value={newPost.content}
                                            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                            placeholder="Broadcast your architectural insights... (Supports @mentions)"
                                            rows={8}
                                            className="w-full px-5 py-5 bg-zinc-800/50 border border-white/5 rounded-2xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none font-medium leading-relaxed"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPost(false)}
                                            className="px-8 py-4 text-[10px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Abort
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-zinc-200 transition-all disabled:opacity-50 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] active:scale-95 flex items-center gap-3"
                                        >
                                            {submitting ? (
                                                <>
                                                    <div className="w-3 h-3 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                                                    UPLOADING...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={14} strokeWidth={3} />
                                                    PUBLISH STREAM
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </AppLayout>
    );
}

