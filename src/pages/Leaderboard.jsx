import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { RiTrophyFill, RiMedalFill, RiFlashlightFill, RiBookOpenFill, RiVipCrownFill, RiArrowRightLine } from 'react-icons/ri';
import AppLayout from '../components/layout/AppLayout';
import clsx from 'clsx';
import { useProgress } from '../contexts/ProgressProvider';
import AvatarWithBorder from '../components/common/AvatarWithBorder';


export default function Leaderboard() {
    const { user, getLeaderboard } = useAuth();
    const { userStats } = useProgress();

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

    const topThree = leaderboard.slice(0, 3);
    const remaining = leaderboard.slice(3);

    return (
        <AppLayout>
            <div className="max-w-6xl mx-auto space-y-12 pb-20 animate-fade-in">
                {/* CYBER HEADER */}
                <div className="relative rounded-sm bg-black border border-white/10 overflow-hidden isolate shadow-2xl">

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

                    <div className="relative z-10 px-8 py-12 text-center space-y-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center justify-center mb-2"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                                <div className="bg-[#050505] p-5 rounded-sm border border-cyan-500/30 relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                                    <RiTrophyFill className="w-10 h-10 text-cyan-400" />
                                </div>
                            </div>
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.2em] uppercase">Global_Leaderboard</h1>
                        <p className="text-cyan-500/60 font-mono text-sm tracking-widest">NETWORK_TOP_OPERATIVES_REALTIME_SYNC</p>
                    </div>
                </div>

                {/* ELITE PODIUM (TOP 3) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    {/* Rank 2 */}
                    {topThree[1] && (
                        <div className="order-2 md:order-1 h-full">
                            <PodiumCard entry={topThree[1]} rank={2} isCurrentUser={topThree[1].id === user?.id} />
                        </div>
                    )}

                    {/* Rank 1 */}
                    {topThree[0] && (
                        <div className="order-1 md:order-2">
                            <PodiumCard entry={topThree[0]} rank={1} isCurrentUser={topThree[0].id === user?.id} highlight />
                        </div>
                    )}

                    {/* Rank 3 */}
                    {topThree[2] && (
                        <div className="order-3 md:order-3 h-full">
                            <PodiumCard entry={topThree[2]} rank={3} isCurrentUser={topThree[2].id === user?.id} />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Panel: Your Status */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-zinc-900/50 border border-white/5 rounded-sm p-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
                            <h3 className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                Personal_Status
                            </h3>

                            {userRank ? (
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-sm border border-cyan-500/20 bg-black flex items-center justify-center overflow-hidden">
                                            <AvatarWithBorder
                                                url={user?.avatar}
                                                name={user?.name}
                                                border={user?.border}
                                                size="sm"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">{user?.name || 'Anonymous'}</p>
                                            <p className="text-cyan-500 font-mono text-xs uppercase opacity-70">Rank #{userRank.rank}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                        <div className="space-y-1">
                                            <p className="text-zinc-500 text-[9px] uppercase tracking-tighter">Total XP</p>
                                            <div className="flex items-center gap-2 text-white">
                                                <RiFlashlightFill className="text-yellow-500" size={14} />
                                                <span className="font-mono font-bold">{userRank.points.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-zinc-500 text-[9px] uppercase tracking-tighter">Modules</p>
                                            <div className="flex items-center gap-2 text-white">
                                                <RiBookOpenFill className="text-blue-500" size={14} />
                                                <span className="font-mono font-bold">{userRank.coursesCompleted}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="py-10 text-center">
                                    <p className="text-zinc-600 font-mono text-xs uppercase">No_Data_Sync_Required</p>
                                </div>
                            )}
                        </div>

                        {/* Network Stats */}
                        <div className="bg-black border border-zinc-800 p-6 rounded-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 font-mono">Network_Overview</h3>
                            <div className="space-y-4 font-mono text-[11px]">
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Active_Nodes:</span>
                                    <span className="text-white">ENCRYPTED</span>
                                </div>
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Sync_Status:</span>
                                    <span className="text-green-500">OPTIMAL</span>
                                </div>
                                <div className="flex justify-between items-center text-zinc-400">
                                    <span>Latency:</span>
                                    <span className="text-cyan-500">12ms</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Full List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-zinc-950/80 border border-white/10 rounded-sm overflow-hidden backdrop-blur-md">
                            <div className="px-8 py-5 border-b border-white/10 bg-zinc-900/30 flex justify-between items-center">
                                <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Global_Rankings</h3>
                                <div className="text-[8px] font-mono text-zinc-500 uppercase">Showing_Top_100</div>
                            </div>

                            <div className="divide-y divide-white/5 max-h-[800px] overflow-y-auto scrollbar-thin">
                                {loading ? (
                                    <div className="p-20 text-center space-y-4">
                                        <div className="relative w-12 h-12 mx-auto">
                                            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full" />
                                            <div className="absolute inset-0 border-t-2 border-cyan-500 rounded-full animate-spin" />
                                        </div>
                                        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Accessing_Encrypted_Data...</p>
                                    </div>
                                ) : (
                                    remaining.map((entry, index) => (
                                        <RankRow
                                            key={entry.id}
                                            entry={entry}
                                            rank={index + 4}
                                            isCurrentUser={entry.id === user?.id}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function PodiumCard({ entry, rank, isCurrentUser, highlight }) {
    const medalColors = {
        1: 'border-yellow-500 shadow-yellow-500/20',
        2: 'border-zinc-300 shadow-zinc-300/10',
        3: 'border-orange-500 shadow-orange-500/10'
    };

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: rank * 0.1 }}
            className={clsx(
                "relative group",
                highlight ? "scale-105 mb-4" : "scale-95 opacity-80"
            )}
        >
            <div className={clsx(
                "bg-[#050505] border p-1 pt-8 relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:bg-[#0a0a0a] group-hover:scale-[1.02]",
                medalColors[rank],
                highlight ? "border-2" : "border"
            )}>
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 p-3 opacity-10">
                    {rank === 1 ? <RiVipCrownFill size={64} /> : <RiMedalFill size={64} />}
                </div>
                {highlight && <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none" />}

                {/* Rank Tag */}
                <div className={clsx(
                    "absolute top-0 left-0 px-4 py-1.5 font-black font-mono text-sm skew-x-[-20deg] ml-[-10px] z-20",
                    rank === 1 ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.5)]" : "bg-zinc-800 text-zinc-300"
                )}>
                    RANK_{rank}
                </div>

                <div className="px-6 py-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                        <div className={clsx(
                            "absolute inset-0 rounded-full blur-2xl animate-pulse opacity-20",
                            rank === 1 ? "bg-yellow-500" : (rank === 2 ? "bg-blue-400" : "bg-orange-500")
                        )} />
                        <div className="w-24 h-24 relative z-10">
                            <AvatarWithBorder
                                url={entry.avatar}
                                name={entry.name}
                                border={entry.border}
                                size="custom"
                                className="w-full h-full shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h3 className={clsx(
                            "text-xl font-black uppercase tracking-tight truncate max-w-[200px]",
                            isCurrentUser ? "text-cyan-400" : "text-white"
                        )}>
                            {entry.name || 'Anonymous'}
                        </h3>
                        {isCurrentUser && (
                            <div className="inline-block px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 text-[8px] font-bold tracking-widest uppercase mb-1">
                                CURRENT_USER
                            </div>
                        )}
                        <p className="text-zinc-500 font-mono text-[10px] tracking-widest">{entry.email.split('@')[0].toUpperCase()}</p>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/5 w-full justify-between px-4 font-mono">
                        <div className="text-left">
                            <p className="text-[9px] text-zinc-600 uppercase">Points</p>
                            <div className="flex items-center gap-1.5 text-white">
                                <RiFlashlightFill className="text-yellow-500" size={14} />
                                <span className="font-bold">{entry.points.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[9px] text-zinc-600 uppercase">Modules</p>
                            <div className="flex items-center gap-1.5 text-white justify-end">
                                <RiBookOpenFill className="text-blue-500" size={14} />
                                <span className="font-bold">{entry.courses_completed}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function RankRow({ entry, rank, isCurrentUser }) {
    return (
        <div className={clsx(
            "group flex items-center gap-4 px-8 py-4 transition-all hover:bg-white/[0.02] border-l-2",
            isCurrentUser ? "bg-cyan-500/5 border-cyan-500" : "border-transparent"
        )}>
            {/* Rank */}
            <div className="w-12 font-black font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                #{rank.toString().padStart(2, '0')}
            </div>

            {/* User Info */}
            <div className="flex-1 flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-sm overflow-hidden shrink-0 border border-white/5 bg-zinc-900 group-hover:scale-110 transition-transform">
                    <AvatarWithBorder
                        url={entry.avatar}
                        name={entry.name}
                        border={entry.border}
                        size="xs"
                    />
                </div>
                <div className="min-w-0">
                    <h4 className={clsx(
                        "font-bold text-sm truncate uppercase tracking-tight",
                        isCurrentUser ? "text-cyan-400" : "text-zinc-200"
                    )}>
                        {entry.name || 'Anonymous'}
                    </h4>
                    <p className="text-[10px] text-zinc-600 font-mono truncate">{entry.email.split('@')[0]}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 font-mono">
                <div className="w-24 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-zinc-400 font-bold group-hover:text-white transition-colors">{entry.points.toLocaleString()}</span>
                        <RiFlashlightFill className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors" size={12} />
                    </div>
                </div>
                <div className="w-12 text-right hidden sm:block">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{entry.courses_completed}</span>
                        <RiBookOpenFill className="text-blue-500/30 group-hover:text-blue-500 transition-colors" size={12} />
                    </div>
                </div>
            </div>

            {/* Action/Chevron */}
            <div className="text-zinc-800 group-hover:text-cyan-500/50 transition-colors px-2">
                <RiArrowRightLine size={14} />
            </div>
        </div>
    );
}
