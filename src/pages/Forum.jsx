import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';
import { sql } from '../lib/neon';
import {
    MessageSquare, Plus, Search, ThumbsUp, MessageCircle,
    Clock, User, X, Send, ChevronRight, Tag
} from 'lucide-react';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'all', label: 'All Topics', color: 'text-white border-white' },
    { id: 'general', label: 'General', color: 'text-blue-400 border-blue-400/30' },
    { id: 'html-css', label: 'HTML & CSS', color: 'text-orange-400 border-orange-400/30' },
    { id: 'javascript', label: 'JavaScript', color: 'text-yellow-400 border-yellow-400/30' },
    { id: 'react', label: 'React', color: 'text-cyan-400 border-cyan-400/30' },
    { id: 'backend', label: 'Backend', color: 'text-green-400 border-green-400/30' },
    { id: 'help', label: 'Help & Support', color: 'text-red-400 border-red-400/30' },
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
    const [showNewPost, setShowNewPost] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', category: 'general' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const result = await sql`
                SELECT 
                    p.*,
                    u.name as author_name,
                    u.email as author_email,
                    (SELECT COUNT(*) FROM forum_replies WHERE post_id = p.id) as reply_count
                FROM forum_posts p
                JOIN users u ON p.user_id = u.id
                ORDER BY p.created_at DESC
            `;
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
            loadPosts();
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        } finally {
            setSubmitting(false);
        }
    };

    const handleLike = async (postId) => {
        try {
            // Check if already liked
            const existing = await sql`
                SELECT id FROM forum_likes WHERE post_id = ${postId} AND user_id = ${user.id}
            `;

            if (existing.length > 0) {
                // Unlike
                await sql`DELETE FROM forum_likes WHERE post_id = ${postId} AND user_id = ${user.id}`;
                await sql`UPDATE forum_posts SET likes = likes - 1 WHERE id = ${postId}`;
            } else {
                // Like
                await sql`INSERT INTO forum_likes (post_id, user_id) VALUES (${postId}, ${user.id})`;
                await sql`UPDATE forum_posts SET likes = likes + 1 WHERE id = ${postId}`;
            }
            loadPosts();
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

    const getCategoryStyle = (categoryId) => {
        return CATEGORIES.find(c => c.id === categoryId)?.color || 'text-white border-white';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
                    <p className="text-gray-400 font-mono text-sm">INITIALIZING LINK...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto pt-20 pb-20">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 animate-fade-in-up">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Community Feed</h1>
                            <p className="text-gray-400">Connect, discuss, and solve problems together.</p>
                        </div>
                        <button
                            onClick={() => setShowNewPost(true)}
                            className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-[0_0_15px_var(--accent-glow)] whitespace-nowrap"
                        >
                            <Plus size={18} />
                            Create Post
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                        <div className="relative flex-1 group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--accent-primary)] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[var(--bg-panel)] transition-all"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={clsx(
                                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all whitespace-nowrap border",
                                    selectedCategory === cat.id
                                        ? "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                        : "bg-transparent text-gray-400 border-[var(--border-subtle)] hover:border-gray-400 hover:text-gray-300"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Posts List */}
                    <div className="space-y-4">
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-20 bg-[var(--bg-panel)] rounded-xl border border-[var(--border-subtle)] border-dashed">
                                <MessageSquare size={48} className="text-gray-600 mx-auto mb-4 opacity-50" />
                                <p className="text-gray-400 font-medium text-lg">No active signals</p>
                                <p className="text-gray-600 text-sm mt-1">Be the first to transmit a message</p>
                            </div>
                        ) : (
                            filteredPosts.map((post, index) => (
                                <div
                                    key={post.id}
                                    onClick={() => navigate(`/forum/${post.id}`)}
                                    className="group card-cyber p-6 cursor-pointer animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.05}ms` }}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex-1 min-w-0">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={clsx(
                                                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border bg-transparent",
                                                    getCategoryStyle(post.category)
                                                )}>
                                                    {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors truncate">{post.title}</h3>

                                            {/* Preview */}
                                            <p className="text-gray-400 text-sm line-clamp-2 mb-5 font-normal leading-relaxed">{post.content}</p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-6 text-xs text-gray-500 font-mono tracking-tight">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-[var(--accent-primary)]">
                                                        <User size={10} />
                                                    </div>
                                                    <span className="text-gray-400">{post.author_name || post.author_email?.split('@')[0]}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={12} />
                                                    <span>{formatDate(post.created_at)}</span>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}
                                                    className="flex items-center gap-1.5 hover:text-[var(--accent-primary)] transition-colors"
                                                >
                                                    <ThumbsUp size={12} />
                                                    <span>{post.likes || 0}</span>
                                                </button>
                                                <div className="flex items-center gap-1.5">
                                                    <MessageCircle size={12} />
                                                    <span>{post.reply_count || 0} replies</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-gray-600 group-hover:text-white group-hover:border-[var(--accent-primary)] transition-all">
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>

            {/* New Post Modal */}
            {showNewPost && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[#0a0a0a] rounded-xl border border-[var(--border-subtle)] w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fade-in-up">
                        <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)]">
                            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                                <MessageSquare size={18} className="text-[var(--accent-primary)]" />
                                Initiate Transmission
                            </h2>
                            <button onClick={() => setShowNewPost(false)} className="text-gray-500 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreatePost} className="p-6 space-y-5">
                            <div>
                                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Frequency Channel</label>
                                <select
                                    value={newPost.category}
                                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)]"
                                >
                                    {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Subject</label>
                                <input
                                    type="text"
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                    placeholder="Enter topic..."
                                    className="w-full px-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-primary)]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Message Content</label>
                                <textarea
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                    placeholder="Type your message..."
                                    rows={5}
                                    className="w-full px-4 py-3 bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-primary)] resize-none"
                                    required
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowNewPost(false)}
                                    className="flex-1 px-4 py-3 bg-transparent text-gray-400 rounded-lg hover:text-white border border-transparent hover:border-[var(--border-subtle)] transition-all font-bold uppercase tracking-wider text-xs"
                                >
                                    Abort
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-blue-600 transition-all shadow-[0_0_15px_var(--accent-glow)] disabled:opacity-50 disabled:shadow-none"
                                >
                                    {submitting ? 'Transmitting...' : (
                                        <>
                                            <Send size={14} />
                                            Transmit
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
