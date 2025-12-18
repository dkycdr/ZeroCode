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
    { id: 'all', label: 'All Topics', color: 'bg-white/10 text-white' },
    { id: 'general', label: 'General', color: 'bg-blue-500/20 text-blue-400' },
    { id: 'html-css', label: 'HTML & CSS', color: 'bg-orange-500/20 text-orange-400' },
    { id: 'javascript', label: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400' },
    { id: 'react', label: 'React', color: 'bg-cyan-500/20 text-cyan-400' },
    { id: 'backend', label: 'Backend', color: 'bg-green-500/20 text-green-400' },
    { id: 'help', label: 'Help & Support', color: 'bg-red-500/20 text-red-400' },
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
        return CATEGORIES.find(c => c.id === categoryId)?.color || 'bg-white/10 text-white';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading forum...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-3">Forum</h1>
                            <p className="text-gray-400 text-lg">Ask questions, share knowledge, connect with others</p>
                        </div>
                        <button
                            onClick={() => setShowNewPost(true)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            <Plus size={18} />
                            New Post
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={clsx(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                    selectedCategory === cat.id
                                        ? "bg-white text-black"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Posts List */}
                    <div className="space-y-3">
                        {filteredPosts.length === 0 ? (
                            <div className="text-center py-12 bg-[#111111] rounded-xl border border-white/10">
                                <MessageSquare size={48} className="text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400 mb-2">No posts yet</p>
                                <p className="text-gray-500 text-sm">Be the first to start a discussion!</p>
                            </div>
                        ) : (
                            filteredPosts.map(post => (
                                <div
                                    key={post.id}
                                    onClick={() => navigate(`/forum/${post.id}`)}
                                    className="bg-[#111111] rounded-xl border border-white/10 p-5 hover:bg-[#161616] hover:border-white/20 transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={clsx(
                                                    "px-2 py-0.5 rounded text-xs font-medium",
                                                    getCategoryStyle(post.category)
                                                )}>
                                                    {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                                            
                                            {/* Preview */}
                                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.content}</p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1.5">
                                                    <User size={14} />
                                                    <span>{post.author_name || post.author_email?.split('@')[0]}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} />
                                                    <span>{formatDate(post.created_at)}</span>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}
                                                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                                                >
                                                    <ThumbsUp size={14} />
                                                    <span>{post.likes || 0}</span>
                                                </button>
                                                <div className="flex items-center gap-1.5">
                                                    <MessageCircle size={14} />
                                                    <span>{post.reply_count || 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight size={20} className="text-gray-600" />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>

            {/* New Post Modal */}
            {showNewPost && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#111111] rounded-xl border border-white/10 w-full max-w-lg">
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h2 className="text-lg font-semibold text-white">Create New Post</h2>
                            <button onClick={() => setShowNewPost(false)} className="text-gray-500 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreatePost} className="p-4 space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Category</label>
                                <select
                                    value={newPost.category}
                                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20"
                                >
                                    {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Title</label>
                                <input
                                    type="text"
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                    placeholder="What's your question or topic?"
                                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Content</label>
                                <textarea
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                    placeholder="Describe your question or share your thoughts..."
                                    rows={5}
                                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 resize-none"
                                    required
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowNewPost(false)}
                                    className="flex-1 px-4 py-2.5 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
                                >
                                    {submitting ? 'Posting...' : (
                                        <>
                                            <Send size={16} />
                                            Post
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
