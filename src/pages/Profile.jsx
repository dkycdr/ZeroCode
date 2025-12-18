import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, SUBSCRIPTION_TIERS } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getCourseProgress } from '../data/courses/index';
import { courses } from '../data/curriculumStructure';
import Header from '../components/Header';
import { BookOpen, Trophy, Award, TrendingUp, Edit2, LogOut, Save, X, Crown, MessageCircle, Phone, Shield } from 'lucide-react';
import clsx from 'clsx';

const WHATSAPP_NUMBER = '6283875727384';

const TIER_BADGES = {
    free: { label: 'Free', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', desc: '3 demo courses' },
    beginner: { label: 'Beginner', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', desc: '5 courses' },
    intermediate: { label: 'Intermediate', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', desc: '11 courses' },
    advanced: { label: 'Advanced', color: 'bg-red-500/20 text-red-400 border-red-500/30', desc: 'All 16 courses' },
    fullstack: { label: 'Fullstack', color: 'bg-green-500/20 text-green-400 border-green-500/30', desc: 'All 16 courses' },
    admin: { label: 'Admin', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', desc: 'Full access' }
};

export default function Profile() {
    const { user, logout, updateUser, subscriptionTier } = useAuth();
    const { completedCourses, completedItems } = useProgress();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || ''
    });

    const handleLogout = () => { logout(); navigate('/login'); };
    const handleSave = async () => {
        await updateUser(formData);
        setIsEditing(false);
    };
    const handleCancel = () => {
        setFormData({ name: user?.name || '', phone: user?.phone || '' });
        setIsEditing(false);
    };

    const handleUpgrade = () => {
        const message = encodeURIComponent(
            `Hi ZeroCode! I want to upgrade my account.\n\nEmail: ${user?.email}\nName: ${user?.name}\nCurrent tier: ${subscriptionTier}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    const courseCatalog = Object.values(courses);
    const totalCourses = courseCatalog.length;
    const completedCoursesCount = completedCourses.length;
    const totalItems = completedItems.length;
    const completionRate = totalCourses > 0 ? Math.round((completedCoursesCount / totalCourses) * 100) : 0;
    const coursesInProgress = courseCatalog.filter(course => {
        const progress = getCourseProgress(course.id, completedItems);
        return progress.percentage > 0 && progress.percentage < 100;
    });

    const tierBadge = TIER_BADGES[subscriptionTier] || TIER_BADGES.free;

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header />
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Profile Header */}
                <div className="bg-[#111111] rounded-xl border border-white/10 p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl font-bold">
                                {user?.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="text-xl font-bold text-white bg-transparent border-b border-white/30 focus:outline-none focus:border-white mb-1"
                                    />
                                ) : (
                                    <h1 className="text-xl font-bold text-white">{user?.name || 'User'}</h1>
                                )}
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {isEditing ? (
                                <>
                                    <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm rounded-lg font-medium hover:bg-gray-200">
                                        <Save size={14} />Save
                                    </button>
                                    <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white text-sm rounded-lg font-medium hover:bg-white/10 border border-white/10">
                                        <X size={14} />Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white text-sm rounded-lg font-medium hover:bg-white/10 border border-white/10">
                                        <Edit2 size={14} />Edit
                                    </button>
                                    <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 text-sm rounded-lg font-medium hover:bg-red-500/20 border border-red-500/20">
                                        <LogOut size={14} />Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                    {isEditing && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <Phone className="text-gray-500" size={16} />
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Phone number (optional)"
                                    className="flex-1 text-sm text-white bg-transparent border-b border-white/30 focus:outline-none focus:border-white placeholder-gray-600"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Subscription Card */}
                <div className="bg-[#111111] rounded-xl border border-white/10 p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Crown size={20} className="text-yellow-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="text-lg font-semibold text-white">Subscription</h2>
                                    <span className={clsx("px-2 py-0.5 rounded-full text-xs font-medium border", tierBadge.color)}>
                                        {tierBadge.label}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">{tierBadge.desc}</p>
                                {user?.subscription_date && (
                                    <p className="text-xs text-gray-600 mt-1">
                                        Since {new Date(user.subscription_date).toLocaleDateString()}
                                    </p>
                                )}
                            </div>
                        </div>
                        {subscriptionTier === 'free' && (
                            <button
                                onClick={handleUpgrade}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm rounded-lg font-medium hover:bg-gray-200"
                            >
                                <MessageCircle size={14} />
                                Upgrade
                            </button>
                        )}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                        { icon: BookOpen, label: 'Completed', value: completedCoursesCount },
                        { icon: Trophy, label: 'Lessons', value: totalItems },
                        { icon: TrendingUp, label: 'In Progress', value: coursesInProgress.length },
                        { icon: Award, label: 'Progress', value: `${completionRate}%` }
                    ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="bg-[#111111] rounded-xl border border-white/10 p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Icon className="text-gray-400" size={16} />
                                </div>
                                <span className="text-xl font-bold text-white">{value}</span>
                            </div>
                            <p className="text-xs text-gray-500">{label}</p>
                        </div>
                    ))}
                </div>

                {/* In Progress */}
                {coursesInProgress.length > 0 && (
                    <div className="bg-[#111111] rounded-xl border border-white/10 p-6 mb-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Continue Learning</h2>
                        <div className="space-y-3">
                            {coursesInProgress.map(course => {
                                const progress = getCourseProgress(course.id, completedItems);
                                return (
                                    <div
                                        key={course.id}
                                        onClick={() => navigate(`/course/${course.id}`)}
                                        className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-medium text-white text-sm">{course.title}</h3>
                                            <span className="text-xs font-medium text-white bg-white/10 px-2 py-0.5 rounded">{progress.percentage}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-white transition-all" style={{ width: `${progress.percentage}%` }} />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">{progress.completed} of {progress.total} completed</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Admin Access */}
                <div className="mt-8 pt-8 border-t border-white/5">
                    <button
                        onClick={() => navigate('/admin/access')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-400 text-xs transition-colors"
                    >
                        <Shield size={12} />
                        <span>Admin Access</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
