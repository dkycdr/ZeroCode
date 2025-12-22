import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useAuth } from '../contexts/AuthProvider';
import { sql } from '../lib/neon';
import {
    ArrowLeft, ThumbsUp, MessageCircle, Clock, Send, Trash2, Edit2, X
} from 'lucide-react';
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
                SELECT p.*, u.name as author_name, u.email as author_email
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
                SELECT r.*, u.name as author_name, u.email as author_email
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
            <div className="max-w-4xl mx-auto">
                {/* Back */}
                <button
                    onClick={() => navigate('/community')}
                    className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-xs font-medium group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Discussions
                </button>

                {/* Post */}
                <div className="bg-[#121214] border border-[#27272a] rounded-xl p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <span className={clsx(
                                "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border",
                                CATEGORIES.find(c => c.id === post.category)?.color || CATEGORIES[0].color
                            )}>
                                {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {canEditPost && !isEditingPost && (
                                <button onClick={() => setIsEditingPost(true)} className="text-gray-500 hover:text-white transition-colors">
                                    <Edit2 size={16} />
                                </button>
                            )}
                            {canDeletePost && (
                                <button onClick={handleDeletePost} className="text-gray-500 hover:text-red-400 transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    {isEditingPost ? (
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={editPostTitle}
                                onChange={(e) => setEditPostTitle(e.target.value)}
                                className="w-full bg-[#18181b] border border-[#27272a] rounded p-2 text-xl font-bold text-white focus:border-gray-500 outline-none"
                            />
                            <textarea
                                value={editPostContent}
                                onChange={(e) => setEditPostContent(e.target.value)}
                                rows={6}
                                className="w-full bg-[#18181b] border border-[#27272a] rounded p-2 text-sm text-gray-200 focus:border-gray-500 outline-none"
                            />
                            <div className="flex gap-2 justify-end">
                                <button onClick={() => setIsEditingPost(false)} className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white">Cancel</button>
                                <button onClick={handleUpdatePost} className="px-3 py-1.5 bg-white text-black text-xs font-bold rounded hover:bg-gray-200">Save Changes</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
                            <div className="prose prose-invert max-w-none mb-8 text-gray-300 leading-relaxed text-base">
                                {post.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx} className="mb-4 last:mb-0">{renderContent(paragraph)}</p>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-[#27272a]">
                        <div className="flex items-center gap-6 text-xs text-gray-500 font-medium tracking-tight">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-[10px] text-white font-bold">
                                    {post.author_name?.[0] || 'U'}
                                </div>
                                <span className="text-gray-400 font-bold">{post.author_name || post.author_email?.split('@')[0]}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} />
                                <span>{formatDate(post.created_at)}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleLike}
                            className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent-primary)] transition-colors group"
                        >
                            <ThumbsUp size={18} className="group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-sm">{post.likes || 0}</span>
                        </button>
                    </div>
                </div>

                {/* Replies */}
                <div className="mb-8">
                    <h2 className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-wider">
                        Discussion ({replies.length})
                    </h2>

                    <div className="space-y-4">
                        {replies.map((reply) => {
                            const isEditingThisReply = editingReplyId === reply.id;
                            const canEditReply = reply.user_id === user.id;
                            const canDeleteReply = isAdmin || reply.user_id === user.id;

                            return (
                                <div key={reply.id} className="bg-[#121214] rounded-lg border border-[#27272a] p-5">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#18181b] flex items-center justify-center text-[10px] text-gray-400 font-bold border border-[#27272a]">
                                                    {reply.author_name?.[0] || 'U'}
                                                </div>
                                                <span className="text-sm font-semibold text-white">{reply.author_name || reply.author_email?.split('@')[0]}</span>
                                                <span className="text-xs text-gray-600">{formatDate(reply.created_at)}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {canEditReply && !isEditingThisReply && (
                                                    <button
                                                        onClick={() => {
                                                            setEditingReplyId(reply.id);
                                                            setEditReplyContent(reply.content);
                                                        }}
                                                        className="text-gray-600 hover:text-white transition-colors"
                                                    >
                                                        <Edit2 size={13} />
                                                    </button>
                                                )}
                                                {canDeleteReply && !isEditingThisReply && (
                                                    <button
                                                        onClick={() => handleDeleteReply(reply.id)}
                                                        className="text-gray-600 hover:text-red-400 transition-colors"
                                                    >
                                                        <Trash2 size={13} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {isEditingThisReply ? (
                                            <div className="pl-9 space-y-3">
                                                <textarea
                                                    value={editReplyContent}
                                                    onChange={(e) => setEditReplyContent(e.target.value)}
                                                    rows={3}
                                                    className="w-full bg-[#18181b] border border-[#27272a] rounded p-2 text-sm text-gray-300 focus:border-gray-500 outline-none"
                                                />
                                                <div className="flex gap-2">
                                                    <button onClick={() => setEditingReplyId(null)} className="px-2 py-1 text-xs text-gray-500 hover:text-white">Cancel</button>
                                                    <button onClick={() => handleUpdateReply(reply.id)} className="px-2 py-1 bg-white text-black text-xs font-bold rounded">Save</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-gray-300 leading-relaxed text-sm pl-9">{renderContent(reply.content)}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Reply Form */}
                <form onSubmit={handleReply} className="sticky bottom-6 z-10">
                    <div className="bg-[#121214]/90 backdrop-blur-md border border-[#27272a] p-1.5 rounded-xl shadow-2xl flex items-center gap-2">
                        <input
                            type="text"
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Type a reply... Use @ to tag"
                            className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            disabled={submitting || !replyContent.trim()}
                            className="bg-white text-black p-2.5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:bg-gray-700"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
