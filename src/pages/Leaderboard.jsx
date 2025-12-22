import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { RiTrophyFill, RiMedalFill, RiFlashlightFill, RiBookOpenFill, RiVipCrownFill } from 'react-icons/ri';
import AppLayout from '../components/layout/AppLayout';
import clsx from 'clsx';
import { useProgress } from '../contexts/ProgressProvider';
import { getOverallProgress } from '../data/curriculumStructure';

export default function Leaderboard() {
    const { user, getLeaderboard } = useAuth();
    const { completedCourses } = useProgress();
    const progress = getOverallProgress(completedCourses);

    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userRank, setUserRank] = useState(null);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const result = await getLeaderboard();

            if (result.success) {
                setLeaderboard(result.leaderboard);
                setUserRank(result.userRank);
            }
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        } finally {
            setLoading(false);
        }
    };

    const getMedalIcon = (rank) => {
        if (rank === 1) return <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)]"><RiVipCrownFill size={18} /></div>;
        if (rank === 2) return <div className="w-8 h-8 rounded-lg bg-gray-300/20 text-gray-300 border border-gray-300/30 flex items-center justify-center"><RiMedalFill size={18} /></div>;
        if (rank === 3) return <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 border border-orange-500/30 flex items-center justify-center"><RiMedalFill size={18} /></div>;
        return <span className="font-mono font-bold text-gray-500 w-8 text-center text-lg">#{rank}</span>;
    };

    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
                        <div className="bg-[#111] p-5 rounded-2xl border border-yellow-500/20 relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                            <RiTrophyFill className="w-10 h-10 text-yellow-500" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Global Leaderboard</h1>
                    <p className="text-gray-400 text-lg">Top operatives in the network</p>
                </div>

                {/* Your Rank Card */}
                {userRank && (
                    <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="card-cyber p-8 bg-[var(--bg-panel)] relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 flex items-center justify-center text-[var(--accent-primary)] shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold font-mono">#{userRank.rank}</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Current Ranking</p>
                                        <h2 className="text-xl font-bold text-white">Your Status</h2>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8 md:gap-12">
                                    <div className="text-right">
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Total Points</p>
                                        <div className="flex items-center justify-end gap-2 text-white">
                                            <RiFlashlightFill className="w-4 h-4 text-yellow-500" />
                                            <p className="text-2xl font-bold font-mono">{userRank.points}</p>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Modules Cleared</p>
                                        <div className="flex items-center justify-end gap-2 text-white">
                                            <RiBookOpenFill className="w-4 h-4 text-blue-500" />
                                            <p className="text-2xl font-bold font-mono">{userRank.coursesCompleted}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Leaderboard Table */}
                <div className="bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {loading ? (
                        <div className="p-20 text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
                            <p className="text-gray-500 font-mono text-sm">SYNCING DATA...</p>
                        </div>
                    ) : leaderboard.length === 0 ? (
                        <div className="p-20 text-center text-gray-500">
                            <p className="text-lg">No data available</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-[var(--border-subtle)] bg-[#050505]">
                                        <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Rank</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Operative</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Score</th>
                                        <th className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Progress</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[var(--border-subtle)]">
                                    {leaderboard.map((entry, index) => (
                                        <tr
                                            key={entry.id}
                                            className={clsx(
                                                "transition-colors group",
                                                entry.id === user?.id
                                                    ? "bg-[var(--accent-primary)]/5 hover:bg-[var(--accent-primary)]/10"
                                                    : "hover:bg-white/[0.02]"
                                            )}
                                        >
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-3">
                                                    {getMedalIcon(index + 1)}
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={clsx(
                                                        "w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold",
                                                        index < 3 ? "border-white/20 bg-white/10 text-white" : "border-[var(--border-subtle)] bg-transparent text-gray-500"
                                                    )}>
                                                        {entry.name?.charAt(0).toUpperCase() || entry.email.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className={clsx("font-medium", entry.id === user?.id ? "text-[var(--accent-primary)]" : "text-gray-200")}>
                                                            {entry.name || 'Anonymous'}
                                                        </p>
                                                        <p className="text-xs text-gray-600 font-mono truncate max-w-[150px]">{entry.email.split('@')[0]}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-2">
                                                    <RiFlashlightFill className="w-4 h-4 text-yellow-500" />
                                                    <span className="font-bold text-white font-mono">{entry.points.toLocaleString()}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-2">
                                                    <RiBookOpenFill className="w-4 h-4 text-blue-500" />
                                                    <span className="font-bold text-white font-mono">{entry.courses_completed}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
