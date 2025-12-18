import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthProvider';
import { Trophy, Medal, Zap, BookOpen } from 'lucide-react';
import Header from '../components/Header';

export default function Leaderboard() {
    const { user, getLeaderboard } = useAuth();
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
        if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />;
        if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
        if (rank === 3) return <Medal className="w-6 h-6 text-orange-400" />;
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>;
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header />
            
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <Trophy className="w-8 h-8 text-yellow-400" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">Leaderboard</h1>
                    <p className="text-gray-400">Top learners on ZeroCode</p>
                </motion.div>

                {/* Your Rank Card */}
                {userRank && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 rounded-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Your Rank</p>
                                <h2 className="text-3xl font-bold text-white">#{userRank.rank}</h2>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Points</p>
                                        <p className="text-2xl font-bold text-white">{userRank.points}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Courses</p>
                                        <p className="text-2xl font-bold text-white">{userRank.coursesCompleted}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Leaderboard Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#111111] border border-white/10 rounded-lg overflow-hidden"
                >
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                        </div>
                    ) : leaderboard.length === 0 ? (
                        <div className="p-12 text-center text-gray-400">
                            No leaderboard data yet
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Points</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Courses</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaderboard.map((entry, index) => (
                                        <motion.tr
                                            key={entry.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                                                entry.id === user?.id ? 'bg-white/10' : ''
                                            }`}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {getMedalIcon(index + 1)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-white">{entry.name}</p>
                                                    <p className="text-sm text-gray-500">{entry.email}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-4 h-4 text-yellow-400" />
                                                    <span className="font-semibold text-white">{entry.points}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen className="w-4 h-4 text-blue-400" />
                                                    <span className="font-semibold text-white">{entry.courses_completed}</span>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
