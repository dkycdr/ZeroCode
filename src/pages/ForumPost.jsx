import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';
import { sql } from '../lib/neon';
import {
    ArrowLeft, ThumbsUp, MessageCircle, Clock, User, Send, Trash2
} from 'lucide-react';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'general', label: 'General', color: 'text-blue-400 border-blue-400/30' },
    { id: 'html-css', label: 'HTML & CSS', color: 'text-orange-400 border-orange-400/30' },
    { id: 'javascript', label: 'JavaScript', color: 'text-yellow-400 border-yellow-400/30' },
    { id: 'react', label: 'React', color: 'text-cyan-400 border-cyan-400/30' },
    { id: 'backend', label: 'Backend', color: 'text-green-400 border-green-400/30' },
    { id: 'help', label: 'Help & Support', color: 'text-red-400 border-red-400/30' },
];

export default function ForumPost() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const { user, isAdmin } = useAuth();
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    const [post, setPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [replyContent, setReplyContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

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

    const handleLike = async () => {
        try {
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

    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    const getCategoryStyle = (categoryId) => {
        return CATEGORIES.find(c => c.id === categoryId)?.color || 'text-white border-white';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)]"></div>
            </div>
        );
    }

    if (!post) return null;

    const canDelete = isAdmin || post.user_id === user.id;

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto pt-20 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back */}
                    <button
                        onClick={() => navigate('/community')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-xs font-mono font-bold uppercase tracking-wider group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Feed
                    </button>

                    {/* Post */}
                    <div className="card-cyber p-8 mb-8 animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-6">
                            <span className={clsx(
                                "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border bg-transparent",
                                getCategoryStyle(post.category)
                            )}>
                                {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

                        <div className="prose prose-invert max-w-none mb-8 text-gray-300 leading-relaxed font-light">
                            {post.content.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-4 last:mb-0">{paragraph}</p>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]">
                            <div className="flex items-center gap-6 text-xs text-gray-500 font-mono tracking-tight">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-[var(--accent-primary)]">
                                        <User size={12} />
                                    </div>
                                    <span className="text-gray-400 font-bold">{post.author_name || post.author_email?.split('@')[0]}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} />
                                    <span>{formatDate(post.created_at)}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={handleLike}
                                    className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent-primary)] transition-colors group"
                                >
                                    <ThumbsUp size={16} className="group-hover:scale-110 transition-transform" />
                                    <span className="font-mono text-sm">{post.likes || 0}</span>
                                </button>
                                {canDelete && (
                                    <button
                                        onClick={handleDeletePost}
                                        className="text-gray-600 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Replies */}
                    <div className="mb-8">
                        <h2 className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-wider">
                            <MessageCircle size={16} />
                            Transmission Log ({replies.length})
                        </h2>

                        <div className="space-y-4">
                            {replies.map((reply, index) => (
                                <div
                                    key={reply.id}
                                    className="bg-[var(--bg-panel)] rounded-xl border border-[var(--border-subtle)] p-6 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.05}ms` }}
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#111] border border-[var(--border-subtle)] flex items-center justify-center text-gray-500">
                                                    <User size={12} />
                                                </div>
                                                <span className="text-sm font-bold text-white">{reply.author_name || reply.author_email?.split('@')[0]}</span>
                                                <span className="text-xs text-gray-600 font-mono">{formatDate(reply.created_at)}</span>
                                            </div>
                                            {(isAdmin || reply.user_id === user.id) && (
                                                <button
                                                    onClick={() => handleDeleteReply(reply.id)}
                                                    className="text-gray-600 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-gray-300 leading-relaxed text-sm pl-9">{reply.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reply Form */}
                    <form onSubmit={handleReply} className="card-cyber p-6 sticky bottom-6 z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]/90 backdrop-blur-md">
                        <textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Add your transmission..."
                            rows={2}
                            className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-primary)] resize-none mb-4 font-normal"
                            required
                        />
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600 font-mono">SECURE CHANNEL OPEN</span>
                            <button
                                type="submit"
                                disabled={submitting || !replyContent.trim()}
                                className="flex items-center gap-2 px-6 py-2 bg-[var(--accent-primary)] text-white rounded-lg font-bold uppercase tracking-wider text-xs hover:bg-blue-600 transition-colors disabled:opacity-50 shadow-[0_0_15px_var(--accent-glow)]"
                            >
                                <Send size={14} />
                                {submitting ? 'Sending...' : 'Transmit'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
