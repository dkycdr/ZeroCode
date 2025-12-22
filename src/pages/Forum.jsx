import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';
import { sql } from '../lib/neon';
import {
    MessageSquare, Plus, Search, ThumbsUp, MessageCircle,
    Clock, User, X, Send, ChevronRight, Hash
} from 'lucide-react';
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
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Discussions</h1>
                        <p className="text-gray-500">Join the conversation with the ZeroCode community.</p>
                    </div>
                    <button
                        onClick={() => setShowNewPost(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors shadow-sm"
                    >
                        <Plus size={16} />
                        New Discussion
                    </button>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={clsx(
                                    "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap",
                                    selectedCategory === cat.id
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-gray-500 border-[#27272a] hover:text-gray-300 hover:border-gray-600"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="space-y-3">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-24 border border-dashed border-[#27272a] rounded-xl">
                            <MessageSquare size={32} className="text-gray-700 mx-auto mb-3" />
                            <p className="text-gray-500 text-sm">No discussions found.</p>
                        </div>
                    ) : (
                        filteredPosts.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => navigate(`/forum/${post.id}`)}
                                className="group bg-[#121214] border border-[#27272a] p-5 rounded-lg hover:border-gray-700 transition-colors cursor-pointer flex flex-col sm:flex-row gap-6"
                            >
                                {/* Vote Column */}
                                <div className="hidden sm:flex flex-col items-center gap-1 min-w-[40px] pt-1">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}
                                        className="text-gray-500 hover:text-[var(--accent-primary)] transition-colors"
                                    >
                                        <ThumbsUp size={16} />
                                    </button>
                                    <span className="text-xs font-mono font-medium text-gray-400">{post.likes || 0}</span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-[10px] text-white font-bold">
                                            {post.author_name?.[0] || 'U'}
                                        </span>
                                        <span className="text-xs text-gray-400 hover:text-white transition-colors">{post.author_name}</span>
                                        <span className="text-gray-600 text-[10px]">•</span>
                                        <span className="text-xs text-gray-600">{formatDate(post.created_at)}</span>

                                        <span className={clsx(
                                            "ml-auto text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider",
                                            CATEGORIES.find(c => c.id === post.category)?.color || CATEGORIES[0].color
                                        )}>
                                            {CATEGORIES.find(c => c.id === post.category)?.label}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-100 mb-1.5 group-hover:text-blue-400 transition-colors">{post.title}</h3>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {renderPreview(post.content)}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-gray-500 sm:hidden">
                                        <div className="flex items-center gap-1">
                                            <ThumbsUp size={12} />
                                            <span>{post.likes || 0}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle size={12} />
                                            <span>{post.reply_count || 0}</span>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 mt-2">
                                        <MessageCircle size={12} />
                                        <span>{post.reply_count || 0} replies</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Elegant Create Post Modal */}
                {showNewPost && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-[#09090b] rounded-xl border border-[#27272a] w-full max-w-lg shadow-2xl overflow-hidden">
                            <div className="flex items-center justify-between p-5 border-b border-[#27272a]">
                                <h2 className="text-sm font-semibold text-white">Start a Discussion</h2>
                                <button onClick={() => setShowNewPost(false)} className="text-gray-500 hover:text-white transition-colors">
                                    <X size={18} />
                                </button>
                            </div>
                            <form onSubmit={handleCreatePost} className="p-5 space-y-4">
                                <div>
                                    <select
                                        value={newPost.category}
                                        onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-gray-200 focus:outline-none focus:border-gray-500 transition-colors"
                                    >
                                        {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={newPost.title}
                                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                        placeholder="Title of your discussion"
                                        className="w-full px-4 py-2.5 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        value={newPost.content}
                                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                        placeholder="What's on your mind? Use @ to mention users..."
                                        rows={6}
                                        className="w-full px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gray-500 resize-none"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPost(false)}
                                        className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                                    >
                                        {submitting ? 'Publishing...' : 'Publish'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

