import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, SUBSCRIPTION_TIERS } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getCourseProgress } from '../data/courses/index';
import { courses } from '../data/curriculumStructure';
import Header from '../components/Header';
import {
    RiBookOpenLine, RiTrophyLine, RiAwardLine, RiFundsLine,
    RiEdit2Line, RiLogoutBoxRLine, RiSave3Line, RiCloseLine,
    RiVipCrownFill, RiMessage2Line, RiPhoneLine, RiShieldKeyholeLine,
    RiUser3Line
} from 'react-icons/ri';
import clsx from 'clsx';

const WHATSAPP_NUMBER = '6283875727384';

const TIER_BADGES = {
    free: { label: 'Free', color: 'bg-gray-500/10 text-gray-400 border-gray-500/20', desc: '3 demo courses' },
    beginner: { label: 'Beginner', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', desc: '5 courses' },
    intermediate: { label: 'Intermediate', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20', desc: '11 courses' },
    advanced: { label: 'Advanced', color: 'bg-red-500/10 text-red-400 border-red-500/20', desc: 'All 16 courses' },
    fullstack: { label: 'Fullstack', color: 'bg-green-500/10 text-green-400 border-green-500/20', desc: 'All 16 courses' },
    admin: { label: 'Admin', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', desc: 'Full access' }
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
        <div className="min-h-screen bg-[var(--bg-primary)]">
            <Header progress={completionRate} />
            <div className="max-w-5xl mx-auto px-6 pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Stats & Progress */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: RiBookOpenLine, label: 'Completed', value: completedCoursesCount },
                                { icon: RiTrophyLine, label: 'Lessons', value: totalItems },
                                { icon: RiFundsLine, label: 'Active', value: coursesInProgress.length },
                                { icon: RiAwardLine, label: 'Completion', value: `${completionRate}%` }
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="card-cyber p-4 flex flex-col items-center justify-center text-center">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center mb-3">
                                        <Icon className="text-[var(--accent-primary)]" size={18} />
                                    </div>
                                    <span className="text-2xl font-bold text-white font-mono">{value}</span>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-mono mt-1">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* In Progress */}
                        <div className="card-cyber p-6">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <RiFundsLine size={18} className="text-[var(--accent-primary)]" />
                                Active Modules
                            </h2>
                            {coursesInProgress.length > 0 ? (
                                <div className="space-y-4">
                                    {coursesInProgress.map(course => {
                                        const progress = getCourseProgress(course.id, completedItems);
                                        return (
                                            <div
                                                key={course.id}
                                                onClick={() => navigate(`/course/${course.id}`)}
                                                className="group p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-medium text-white text-sm group-hover:text-[var(--accent-primary)] transition-colors">{course.title}</h3>
                                                    <span className="text-xs font-mono text-[var(--accent-primary)]">{progress.percentage}%</span>
                                                </div>
                                                <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--accent-primary)] transition-all shadow-[0_0_10px_var(--accent-glow)]" style={{ width: `${progress.percentage}%` }} />
                                                </div>
                                                <div className="flex justify-between mt-2">
                                                    <p className="text-[10px] text-gray-500 font-mono">{progress.completed} / {progress.total} TASKS</p>
                                                    <p className="text-[10px] text-gray-500 font-mono uppercase">Resuming...</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500 text-sm">No active courses. Start a new module!</p>
                                    <button onClick={() => navigate('/dashboard')} className="mt-4 text-[var(--accent-primary)] text-sm hover:underline">Browse Curriculum</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Profile & Settings */}
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <div className="card-cyber p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)] opacity-5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                            <div className="text-center mb-6 relative z-10">
                                <div className="w-24 h-24 mx-auto rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                                    {user?.name?.charAt(0).toUpperCase() || <RiUser3Line size={32} />}
                                </div>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="text-center text-xl font-bold text-white bg-white/5 border-b border-white/20 focus:border-[var(--accent-primary)] focus:outline-none w-full py-1 rounded-t"
                                    />
                                ) : (
                                    <h1 className="text-xl font-bold text-white">{user?.name || 'Cadet'}</h1>
                                )}
                                <p className="text-sm text-gray-500 font-mono mt-1">{user?.email}</p>
                            </div>

                            <div className="flex gap-2 justify-center mb-6">
                                {isEditing ? (
                                    <>
                                        <button onClick={handleSave} className="flex-1 py-2 bg-[var(--accent-primary)] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-blue-600 transition-colors">
                                            Save
                                        </button>
                                        <button onClick={handleCancel} className="flex-1 py-2 bg-[var(--bg-primary)] text-gray-400 border border-[var(--border-subtle)] text-xs font-bold uppercase tracking-wider rounded-lg hover:text-white hover:border-gray-500 transition-colors">
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button onClick={() => setIsEditing(true)} className="flex-1 py-2 bg-[var(--bg-primary)] text-gray-300 border border-[var(--border-subtle)] text-xs font-bold uppercase tracking-wider rounded-lg hover:text-white hover:border-[var(--accent-primary)] transition-colors flex items-center justify-center gap-2">
                                        <RiEdit2Line size={12} /> Edit Profile
                                    </button>
                                )}
                            </div>

                            {isEditing && (
                                <div className="text-sm space-y-3 mb-6 animate-fade-in">
                                    <div className="flex items-center gap-3 bg-[var(--bg-primary)] p-3 rounded-lg border border-[var(--border-subtle)]">
                                        <RiPhoneLine className="text-gray-500" size={14} />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Phone Number"
                                            className="bg-transparent text-white w-full focus:outline-none placeholder-gray-600 font-mono text-xs"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 border-t border-[var(--border-subtle)]">
                                <button onClick={handleLogout} className="w-full py-2 flex items-center justify-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors text-xs font-bold uppercase tracking-wider">
                                    <RiLogoutBoxRLine size={14} /> Disconnect
                                </button>
                            </div>
                        </div>

                        {/* Subscription Card */}
                        <div className="card-cyber p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <RiVipCrownFill size={18} className="text-yellow-400" />
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Clearance</h3>
                            </div>

                            <div className={clsx("p-4 rounded-lg border mb-4 flex items-center justify-between", tierBadge.color)}>
                                <div>
                                    <span className="text-xs font-bold uppercase">{tierBadge.label}</span>
                                    <p className="text-[10px] opacity-70 mt-1">{tierBadge.desc}</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                            </div>

                            {subscriptionTier === 'free' && (
                                <button
                                    onClick={handleUpgrade}
                                    className="w-full py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
                                >
                                    Upgrade License <RiMessage2Line size={14} />
                                </button>
                            )}

                            {user?.subscription_date && (
                                <p className="text-[10px] text-gray-600 text-center mt-3 font-mono">
                                    AUTHORIZED SINCE {new Date(user.subscription_date).toLocaleDateString()}
                                </p>
                            )}
                        </div>

                        {/* Admin Link */}
                        <div className="text-center">
                            <button
                                onClick={() => navigate('/admin/access')}
                                className="text-[10px] text-gray-700 hover:text-gray-500 transition-colors font-mono uppercase tracking-widest flex items-center justify-center gap-2 mx-auto"
                            >
                                <RiShieldKeyholeLine size={10} /> Access Control
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
