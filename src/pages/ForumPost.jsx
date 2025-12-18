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
    { id: 'general', label: 'General', color: 'bg-blue-500/20 text-blue-400' },
    { id: 'html-css', label: 'HTML & CSS', color: 'bg-orange-500/20 text-orange-400' },
    { id: 'javascript', label: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400' },
    { id: 'react', label: 'React', color: 'bg-cyan-500/20 text-cyan-400' },
    { id: 'backend', label: 'Backend', color: 'bg-green-500/20 text-green-400' },
    { id: 'help', label: 'Help & Support', color: 'bg-red-500/20 text-red-400' },
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

    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { 
            year: 'numeric', month: 'short', day: 'numeric', 
            hour: '2-digit', minute: '2-digit' 
        });
    };

    const getCategoryStyle = (categoryId) => {
        return CATEGORIES.find(c => c.id === categoryId)?.color || 'bg-white/10 text-white';
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
        );
    }

    if (!post) return null;

    const canDelete = isAdmin || post.user_id === user.id;

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto">
                <div className="max-w-3xl mx-auto px-6 py-8">
                    {/* Back */}
                    <button
                        onClick={() => navigate('/community')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to Forum
                    </button>

                    {/* Post */}
                    <div className="bg-[#111111] rounded-xl border border-white/10 p-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className={clsx(
                                "px-2 py-0.5 rounded text-xs font-medium",
                                getCategoryStyle(post.category)
                            )}>
                                {CATEGORIES.find(c => c.id === post.category)?.label || post.category}
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-4">{post.title}</h1>
                        
                        <p className="text-gray-300 whitespace-pre-wrap mb-6">{post.content}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <User size={14} />
                                    <span>{post.author_name || post.author_email?.split('@')[0]}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    <span>{formatDate(post.created_at)}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleLike}
                                    className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors"
                                >
                                    <ThumbsUp size={16} />
                                    <span>{post.likes || 0}</span>
                                </button>
                                {canDelete && (
                                    <button
                                        onClick={handleDeletePost}
                                        className="text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Replies */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <MessageCircle size={18} />
                            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
                        </h2>

                        <div className="space-y-3">
                            {replies.map(reply => (
                                <div key={reply.id} className="bg-[#111111] rounded-xl border border-white/10 p-4">
                                    <p className="text-gray-300 whitespace-pre-wrap mb-3">{reply.content}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-3">
                                            <span>{reply.author_name || reply.author_email?.split('@')[0]}</span>
                                            <span>{formatDate(reply.created_at)}</span>
                                        </div>
                                        {(isAdmin || reply.user_id === user.id) && (
                                            <button
                                                onClick={() => handleDeleteReply(reply.id)}
                                                className="text-red-400 hover:text-red-300 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reply Form */}
                    <form onSubmit={handleReply} className="bg-[#111111] rounded-xl border border-white/10 p-4">
                        <textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Write a reply..."
                            rows={3}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 resize-none mb-3"
                            required
                        />
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={submitting || !replyContent.trim()}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
                            >
                                <Send size={16} />
                                {submitting ? 'Posting...' : 'Reply'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
