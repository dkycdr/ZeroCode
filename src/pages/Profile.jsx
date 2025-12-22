import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth, SUBSCRIPTION_TIERS } from '../contexts/AuthProvider';
import { useProgress } from '../contexts/ProgressProvider';
import { getCourseProgress } from '../data/courses/index';
import { courses } from '../data/curriculumStructure';
import AppLayout from '../components/layout/AppLayout';
import {
    RiBookOpenLine, RiTrophyLine, RiAwardLine, RiFundsLine,
    RiEdit2Line, RiLogoutBoxRLine, RiSave3Line, RiCloseLine,
    RiVipCrownFill, RiMessage2Line, RiPhoneLine, RiShieldKeyholeLine,
    RiUser3Line, RiMailLine, RiCalendarLine, RiTimeLine,
    RiCheckLine
} from 'react-icons/ri';
import clsx from 'clsx';

const WHATSAPP_NUMBER = '6283875727384';

const TIER_STYLES = {
    free: { label: 'Explorer', gradient: 'from-zinc-500 to-zinc-400', glow: 'shadow-zinc-500/20' },
    beginner: { label: 'Scout', gradient: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/20' },
    intermediate: { label: 'Specialist', gradient: 'from-violet-500 to-purple-500', glow: 'shadow-purple-500/20' },
    advanced: { label: 'Elite', gradient: 'from-rose-500 to-red-500', glow: 'shadow-red-500/20' },
    fullstack: { label: 'Architect', gradient: 'from-emerald-400 to-teal-500', glow: 'shadow-emerald-500/20' },
    admin: { label: 'Administrator', gradient: 'from-amber-400 to-orange-500', glow: 'shadow-orange-500/20' }
};

const PRESET_AVATARS = [
    '/avatars/avatar_cyber.png',
    '/avatars/avatar_glass.png',
    '/avatars/avatar_pixel.png',
    '/avatars/avatar_visor.png'
];

export default function Profile() {
    const { user, logout, updateUser, subscriptionTier, isAdmin } = useAuth();
    const { completedCourses, completedItems, userStats } = useProgress(); // userStats from context
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        avatar: user?.avatar || ''
    });

    const handleLogout = () => { logout(); navigate('/login'); };
    const handleSave = async () => {
        const result = await updateUser(formData);
        if (result.success) {
            setIsEditing(false);
        } else {
            alert('Failed to save profile: ' + result.error);
        }
    };
    const handleCancel = () => {
        setFormData({
            name: user?.name || '',
            phone: user?.phone || '',
            avatar: user?.avatar || ''
        });
        setIsEditing(false);
    };

    const handleUpgrade = () => {
        const message = encodeURIComponent(
            `Hi ZeroCode! I want to upgrade my account.\n\nEmail: ${user?.email}\nName: ${user?.name}\nCurrent tier: ${subscriptionTier}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    // Calculate Stats
    const courseCatalog = Object.values(courses);
    const totalCourses = courseCatalog.length;
    const completedCoursesCount = completedCourses.length;
    const totalItems = completedItems.length;
    const completionRate = totalCourses > 0 ? Math.round((completedCoursesCount / totalCourses) * 100) : 0;
    const coursesInProgress = courseCatalog.filter(course => {
        const progress = getCourseProgress(course.id, completedItems);
        return progress.percentage > 0 && progress.percentage < 100;
    });

    const currentTier = TIER_STYLES[subscriptionTier] || TIER_STYLES.free;
    const joinDate = user?.created_at ? new Date(user.created_at).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) : 'Unknown';

    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">

                {/* Header Section */}
                <div className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden isolate">
                    {/* Background Bloom */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 brightness-150"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl -z-10"></div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Avatar */}
                        <div className="relative group">
                            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-1 shadow-2xl">
                                <div className="w-full h-full rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                                    {(formData.avatar || user?.avatar) ? (
                                        <img src={formData.avatar || user.avatar} className="w-full h-full object-cover" alt="" />
                                    ) : (
                                        <span className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                            {user?.name?.charAt(0) || 'U'}
                                        </span>
                                    )}
                                    {isEditing && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-xs text-white font-medium backdrop-blur-sm">
                                            Select Below
                                        </div>
                                    )}
                                </div>
                            </div>
                            {!isEditing && (
                                <button onClick={() => setIsEditing(true)} className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500 transition-all shadow-lg">
                                    <RiEdit2Line size={14} />
                                </button>
                            )}
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left space-y-2">
                            {isEditing ? (
                                <div className="space-y-4 max-w-lg">
                                    {/* Avatar Selection */}
                                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                        {PRESET_AVATARS.map((avatar, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setFormData({ ...formData, avatar })}
                                                className={clsx(
                                                    "relative flex-shrink-0 w-12 h-12 rounded-lg border-2 overflow-hidden transition-all",
                                                    formData.avatar === avatar ? "border-indigo-500 scale-110 shadow-lg shadow-indigo-500/20" : "border-zinc-700 opacity-60 hover:opacity-100"
                                                )}
                                            >
                                                <img src={avatar} className="w-full h-full object-cover" alt={`Avatar ${idx + 1}`} />
                                                {formData.avatar === avatar && (
                                                    <div className="absolute inset-0 bg-indigo-500/20 flex items-center justify-center">
                                                        <RiCheckLine className="text-white drop-shadow-md" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="space-y-3 max-w-sm">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="text-2xl font-bold text-white bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none w-full pb-1"
                                            placeholder="Display Name"
                                        />
                                        <div className="flex items-center gap-2 text-zinc-400 bg-black/20 px-3 py-2 rounded-lg border border-white/5">
                                            <RiPhoneLine size={14} />
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="bg-transparent text-sm focus:outline-none w-full"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <button onClick={handleSave} className="flex-1 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-500">Save</button>
                                        <button onClick={handleCancel} className="flex-1 py-1.5 bg-zinc-800 text-zinc-400 text-xs font-bold rounded-lg hover:bg-zinc-700">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <h1 className="text-3xl font-bold text-white">{user?.name || 'Cadet'}</h1>
                                        <span className={clsx(
                                            "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r text-white shadow-lg",
                                            currentTier.gradient,
                                            currentTier.glow
                                        )}>
                                            {currentTier.label}
                                        </span>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zinc-400">
                                        <div className="flex items-center gap-1.5">
                                            <RiMailLine /> {user?.email}
                                        </div>
                                        <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                                        <div className="flex items-center gap-1.5">
                                            <RiCalendarLine /> Joined {joinDate}
                                        </div>
                                        <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                                        <button onClick={() => setIsEditing(true)} className="text-indigo-400 hover:text-indigo-300 font-medium text-xs transition-colors">
                                            Edit Profile
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Quick Action */}
                        <div className="flex flex-col gap-2 min-w-[140px]">
                            {isAdmin && (
                                <button
                                    onClick={() => navigate('/admin')}
                                    className="px-4 py-2.5 rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 font-bold text-sm hover:bg-yellow-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <RiShieldKeyholeLine /> Admin Panel
                                </button>
                            )}
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2.5 rounded-xl border border-white/5 bg-zinc-800/50 text-red-400 font-bold text-sm hover:bg-red-500/10 hover:border-red-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                <RiLogoutBoxRLine /> Sign Out
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Stats & Learning */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Streak', value: `${userStats?.streak || 0} Days`, icon: RiFundsLine, color: 'text-orange-400', bg: 'bg-orange-500/5' },
                                { label: 'Focus', value: userStats?.focusTime || '0h', icon: RiTimeLine, color: 'text-emerald-400', bg: 'bg-emerald-500/5' },
                                { label: 'Completed', value: completedCoursesCount, icon: RiTrophyLine, color: 'text-amber-400', bg: 'bg-amber-500/5' },
                                { label: 'Completion', value: `${completionRate}%`, icon: RiAwardLine, color: 'text-blue-400', bg: 'bg-blue-500/5' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm"
                                >
                                    <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center mb-3", stat.bg)}>
                                        <stat.icon className={stat.color} size={18} />
                                    </div>
                                    <div className="text-xl font-bold text-white tracking-tight">{stat.value}</div>
                                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Activity / In Progress */}
                        <div>
                            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <RiBookOpenLine className="text-indigo-500" /> Continuing Education
                            </h2>

                            {coursesInProgress.length > 0 ? (
                                <div className="space-y-4">
                                    {coursesInProgress.map((course, idx) => {
                                        const progress = getCourseProgress(course.id, completedItems);
                                        return (
                                            <div
                                                key={course.id}
                                                onClick={() => navigate(`/course/${course.id}`)}
                                                className="group relative p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 hover:border-indigo-500/30 transition-all cursor-pointer overflow-hidden"
                                            >
                                                <div className="flex items-center justify-between mb-4 relative z-10">
                                                    <div>
                                                        <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{course.title}</h3>
                                                        <p className="text-xs text-zinc-500 mt-1">{progress.completed} of {progress.total} modules complete</p>
                                                    </div>
                                                    <span className="text-lg font-mono font-bold text-indigo-400">{progress.percentage}%</span>
                                                </div>

                                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden relative z-10">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${progress.percentage}%` }}
                                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                                    />
                                                </div>

                                                <div className="absolute right-0 top-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <RiArrowRightLine className="text-white/20" size={24} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 border-dashed text-center">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 mx-auto flex items-center justify-center mb-4">
                                        <RiBookOpenLine className="text-zinc-500" />
                                    </div>
                                    <h3 className="text-white font-medium">No Active Courses</h3>
                                    <p className="text-sm text-zinc-500 mt-1 mb-4">Jump back into the curriculum to start learning.</p>
                                    <button onClick={() => navigate('/dashboard')} className="text-indigo-400 text-sm font-bold hover:underline">
                                        Browse Catalog
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: License Card */}
                    <div className="space-y-6">
                        <div className="relative p-6 rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden group">
                            {/* Card Visuals */}
                            <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Access License</h3>
                                    <RiShieldKeyholeLine className="text-indigo-500" size={20} />
                                </div>

                                <div className="mb-8 text-center py-6 border-y border-white/5 relative">
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Current Plan</div>
                                    <div className={clsx("text-2xl font-black uppercase tracking-tight bg-gradient-to-br bg-clip-text text-transparent", currentTier.gradient)}>
                                        {currentTier.label}
                                    </div>
                                </div>

                                {subscriptionTier === 'free' ? (
                                    <div className="space-y-4">
                                        <p className="text-xs text-zinc-400 text-center leading-relaxed">
                                            Upgrade your license to unlock the full potential of ZeroCode.
                                        </p>
                                        <button
                                            onClick={handleUpgrade}
                                            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                        >
                                            <RiVipCrownFill size={16} /> Upgrade to Pro
                                        </button>
                                    </div>
                                ) : (
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <RiVipCrownFill size={14} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Pro Active</div>
                                            <div className="text-[10px] text-emerald-400/80">Valid until Forever</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional Info Box */}
                        <div className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5">
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Account Details</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">User ID</span>
                                    <span className="font-mono text-zinc-300">#{user?.id?.toString().padStart(6, '0')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Region</span>
                                    <span className="text-zinc-300">Global</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Version</span>
                                    <span className="font-mono text-zinc-300">v1.2.0-beta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function RiArrowRightLine(props) {
    return (
        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="currentColor"></path>
        </svg>
    )
}
