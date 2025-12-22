import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { sql } from '../lib/neon';
import {
    ArrowLeft, ThumbsUp, MessageCircle, Clock, Send, Trash2, Edit2, X, TrendingUp, Zap, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'general', label: 'General', color: 'text-blue-400 border-blue-900/50' },
    { id: 'html-css', label: 'HTML & CSS', color: 'text-orange-400 border-orange-900/50' },
    { id: 'javascript', label: 'JavaScript', color: 'text-yellow-400 border-yellow-900/50' },
    { id: 'react', label: 'React', color: 'text-cyan-400 border-cyan-900/50' },
    { id: 'backend', label: 'Backend', color: 'text-green-400 border-green-900/50' },
    { id: 'help', label: 'Help', color: 'text-red-400 border-red-900/50' },
];

export default function ForumPost() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const { user, isAdmin } = useAuth();

    const [post, setPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [replyContent, setReplyContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Edit State
    const [isEditingPost, setIsEditingPost] = useState(false);
    const [editPostContent, setEditPostContent] = useState('');
    const [editPostTitle, setEditPostTitle] = useState('');

    // Reply Edit State (one at a time)
    const [editingReplyId, setEditingReplyId] = useState(null);
    const [editReplyContent, setEditReplyContent] = useState('');

    useEffect(() => {
        loadPost();
        loadReplies();
    }, [postId]);

    const loadPost = async () => {
        try {
            const result = await sql`
                SELECT p.*, u.name as author_name, u.email as author_email, u.avatar as author_avatar, u.subscription_tier as author_tier, u.created_at as author_joined
                FROM forum_posts p
                JOIN users u ON p.user_id = u.id
                WHERE p.id = ${postId}
            `;
            if (result.length > 0) {
                setPost(result[0]);
                setEditPostContent(result[0].content);
                setEditPostTitle(result[0].title);
            } else {
                navigate('/community');
            }
        } catch (error) {
            console.error('Error loading post:', error);
            navigate('/community');
        } finally {
            setLoading(false);
        }
    };

    const loadReplies = async () => {
        try {
            const result = await sql`
                SELECT r.*, u.name as author_name, u.email as author_email, u.avatar as author_avatar, u.subscription_tier as author_tier, u.created_at as author_joined
                FROM forum_replies r
                JOIN users u ON r.user_id = u.id
                WHERE r.post_id = ${postId}
                ORDER BY r.created_at ASC
            `;
            setReplies(result);
        } catch (error) {
            console.error('Error loading replies:', error);
        }
    };

    const handleReply = async (e) => {
        e.preventDefault();
        if (!replyContent.trim()) return;

        setSubmitting(true);
        try {
            await sql`
                INSERT INTO forum_replies (post_id, user_id, content)
                VALUES (${postId}, ${user.id}, ${replyContent})
            `;
            setReplyContent('');
            loadReplies();
        } catch (error) {
            console.error('Error posting reply:', error);
            alert('Failed to post reply');
        } finally {
            setSubmitting(false);
        }
    };

    const handleUpdatePost = async () => {
        try {
            await sql`
                UPDATE forum_posts 
                SET title = ${editPostTitle}, content = ${editPostContent}
                WHERE id = ${postId}
            `;
            setIsEditingPost(false);
            loadPost();
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to update post');
        }
    };

    const handleUpdateReply = async (replyId) => {
        try {
            await sql`
                UPDATE forum_replies
                SET content = ${editReplyContent}
                WHERE id = ${replyId}
            `;
            setEditingReplyId(null);
            loadReplies();
        } catch (error) {
            console.error('Error updating reply:', error);
            alert('Failed to update reply');
        }
    };

    const handleLike = async () => {
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
            loadPost();
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    const handleDeletePost = async () => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            await sql`DELETE FROM forum_replies WHERE post_id = ${postId}`;
            await sql`DELETE FROM forum_likes WHERE post_id = ${postId}`;
            await sql`DELETE FROM forum_posts WHERE id = ${postId}`;
            navigate('/community');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleDeleteReply = async (replyId) => {
        if (!confirm('Delete this reply?')) return;

        try {
            await sql`DELETE FROM forum_replies WHERE id = ${replyId}`;
            loadReplies();
        } catch (error) {
            console.error('Error deleting reply:', error);
        }
    };

    const renderContent = (content) => {
        const parts = content.split(/(@\w+)/g);
        return parts.map((part, i) =>
            part.startsWith('@')
                ? <span key={i} className="text-blue-400 font-bold bg-blue-400/10 px-1 rounded mx-0.5">{part}</span>
                : <span key={i}>{part}</span>
        );
    };

    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!post) return null;

    const canEditPost = post.user_id === user.id;
    const canDeletePost = isAdmin || post.user_id === user.id;

    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto px-4 py-8 relative">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                {/* Back Link */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/community')}
                    className="flex items-center gap-3 text-zinc-500 hover:text-white mb-10 transition-all text-xs font-black uppercase tracking-[0.2em] group"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                    Back to Intelligence Stream
                </motion.button>

                {/* Main Post Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900 shadow-2xl border border-white/5 rounded-[2.5rem] overflow-hidden mb-12"
                >
                    {/* Hero Header */}
                    <div className="p-8 md:p-12 border-b border-white/5 relative bg-gradient-to-b from-white/[0.02] to-transparent">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <span className={clsx(
                                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border",
                                    CATEGORIES.find(c => c.id === post.category)?.color || CATEGORIES[0].color
                                )}>
                                    {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                                </span>
                                <div className="h-px w-8 bg-white/10 hidden md:block"></div>
                                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                    <Clock size={12} />
                                    {formatDate(post.created_at)}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {canEditPost && !isEditingPost && (
                                    <button onClick={() => setIsEditingPost(true)} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all border border-white/5">
                                        <Edit2 size={16} />
                                    </button>
                                )}
                                {canDeletePost && (
                                    <button onClick={handleDeletePost} className="w-10 h-10 rounded-xl bg-red-500/5 flex items-center justify-center text-zinc-500 hover:text-red-400 transition-all border border-white/5">
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {isEditingPost ? (
                            <div className="space-y-6 animate-fade-in">
                                <input
                                    type="text"
                                    value={editPostTitle}
                                    onChange={(e) => setEditPostTitle(e.target.value)}
                                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-black text-white focus:border-indigo-500/50 outline-none transition-all"
                                />
                                <textarea
                                    value={editPostContent}
                                    onChange={(e) => setEditPostContent(e.target.value)}
                                    rows={8}
                                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl px-6 py-4 text-sm text-zinc-200 focus:border-indigo-500/50 outline-none transition-all font-medium leading-relaxed resize-none"
                                />
                                <div className="flex gap-4 justify-end">
                                    <button onClick={() => setIsEditingPost(false)} className="px-6 py-3 text-[10px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Cancel</button>
                                    <button onClick={handleUpdatePost} className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-zinc-200 transition-all">Save Intelligence Changes</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter">{post.title}</h1>
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 w-fit">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
                                        {post.author_avatar ? (
                                            <img src={post.author_avatar} className="w-full h-full object-cover" alt="" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-sm font-black bg-gradient-to-tr from-zinc-800 to-zinc-700">
                                                {post.author_name?.[0] || 'U'}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black text-white uppercase tracking-tight">{post.author_name}</span>
                                            <span className={clsx(
                                                "text-[8px] font-black px-2 py-0.5 rounded-sm border uppercase tracking-widest",
                                                post.author_tier === 'admin' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" :
                                                    post.author_tier === 'fullstack' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                                                        "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                                            )}>
                                                {post.author_tier || 'FREE'}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Author / Sector Controller</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Post Content Body */}
                    {!isEditingPost && (
                        <div className="p-8 md:p-12">
                            <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-lg font-medium selection:bg-indigo-500/30">
                                {post.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx} className="mb-6 last:mb-0">{renderContent(paragraph)}</p>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-white hover:bg-white/10 transition-all cursor-default">
                                    <TrendingUp size={14} className="text-zinc-500" />
                                    Community Intelligence Rating: {post.likes || 0}
                                </div>

                                <button
                                    onClick={handleLike}
                                    className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all shadow-xl active:scale-95 transition-all"
                                >
                                    <ThumbsUp size={16} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
                                    Endorse Wisdom
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Dynamic Replies Interface */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <h2 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-3">
                            <MessageCircle size={14} />
                            Transmission Logs ({replies.length})
                        </h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="space-y-6">
                        <AnimatePresence mode='popLayout'>
                            {replies.map((reply, idx) => {
                                const isEditingThisReply = editingReplyId === reply.id;
                                const canEditReply = reply.user_id === user.id;
                                const canDeleteReply = isAdmin || reply.user_id === user.id;

                                return (
                                    <motion.div
                                        key={reply.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="relative group bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-zinc-900/60 transition-all overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
                                                        {reply.author_avatar ? (
                                                            <img src={reply.author_avatar} className="w-full h-full object-cover" alt="" />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center text-xs font-black bg-gradient-to-tr from-zinc-800 to-zinc-700">
                                                                {reply.author_name?.[0] || 'U'}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-black text-white uppercase tracking-tight">{reply.author_name}</span>
                                                            <span className={clsx(
                                                                "text-[8px] font-black px-2 py-0.5 rounded-sm border uppercase tracking-widest",
                                                                reply.author_tier === 'admin' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" :
                                                                    reply.author_tier === 'fullstack' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                                                                        "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                                                            )}>
                                                                {reply.author_tier || 'FREE'}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] font-mono text-zinc-600 uppercase">{formatDate(reply.created_at)}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {canEditReply && !isEditingThisReply && (
                                                        <button
                                                            onClick={() => {
                                                                setEditingReplyId(reply.id);
                                                                setEditReplyContent(reply.content);
                                                            }}
                                                            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white border border-white/5 transition-all"
                                                        >
                                                            <Edit2 size={13} />
                                                        </button>
                                                    )}
                                                    {canDeleteReply && !isEditingThisReply && (
                                                        <button
                                                            onClick={() => handleDeleteReply(reply.id)}
                                                            className="w-8 h-8 rounded-lg bg-red-500/5 flex items-center justify-center text-zinc-500 hover:text-red-400 border border-white/5 transition-all"
                                                        >
                                                            <Trash2 size={13} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {isEditingThisReply ? (
                                                <div className="space-y-4 animate-fade-in">
                                                    <textarea
                                                        value={editReplyContent}
                                                        onChange={(e) => setEditReplyContent(e.target.value)}
                                                        rows={4}
                                                        className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-4 text-sm text-zinc-300 focus:border-indigo-500/50 outline-none transition-all resize-none"
                                                    />
                                                    <div className="flex gap-4 justify-end">
                                                        <button onClick={() => setEditingReplyId(null)} className="text-[10px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Cancel</button>
                                                        <button onClick={() => handleUpdateReply(reply.id)} className="px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase rounded-lg hover:bg-zinc-200 transition-all">Update Log</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-zinc-300 leading-relaxed text-base font-medium selection:bg-indigo-500/20">
                                                    {renderContent(reply.content)}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Protocol Reply Form */}
                <div className="fixed bottom-10 left-0 right-0 z-[50] px-4 pointer-events-none">
                    <motion.form
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        onSubmit={handleReply}
                        className="max-w-3xl mx-auto pointer-events-auto"
                    >
                        <div className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 p-3 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 hidden md:block">
                                {user.avatar ? (
                                    <img src={user.avatar} className="w-full h-full object-cover" alt="" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs font-black bg-zinc-800 text-zinc-500">
                                        {user.name?.[0]}
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                placeholder="CONTRIBUTE INTELLIGENCE... (SUPPORTs @MENTIONS)"
                                className="flex-1 bg-transparent px-4 py-3 text-[10px] font-black tracking-widest text-white placeholder-zinc-700 focus:outline-none uppercase"
                            />
                            <button
                                type="submit"
                                disabled={submitting || !replyContent.trim()}
                                className="bg-white text-black w-14 h-14 rounded-[1.8rem] flex items-center justify-center hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:bg-zinc-800 shadow-xl active:scale-90 shrink-0"
                            >
                                {submitting ? (
                                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                                ) : (
                                    <Send size={18} strokeWidth={3} />
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </AppLayout>
    );
}
