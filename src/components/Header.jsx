import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { User, LogOut, Code2, Shield } from 'lucide-react';

export default function Header({ progress }) {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const clickTimer = useRef(null);

    // Hidden admin access - click logo 5 times quickly
    const handleLogoClick = (e) => {
        e.preventDefault();
        
        setClickCount(prev => prev + 1);
        
        // Reset after 2 seconds of no clicks
        clearTimeout(clickTimer.current);
        clickTimer.current = setTimeout(() => setClickCount(0), 2000);
        
        // 5 clicks = go to admin access
        if (clickCount >= 4) {
            setClickCount(0);
            if (isAdmin) {
                navigate('/admin');
            } else {
                navigate('/admin/access');
            }
        }
    };

    return (
        <header className="h-14 bg-[#0a0a0a] text-white flex items-center justify-between px-6 border-b border-white/10">
            {/* Logo */}
            <div className="flex items-center gap-8">
                <button onClick={handleLogoClick} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <Code2 size={18} className="text-white" />
                    </div>
                    <span className="text-lg font-semibold">ZeroCode</span>
                </button>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    <Link 
                        to="/dashboard" 
                        className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        Curriculum
                    </Link>
                    <Link 
                        to="/resources" 
                        className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        Library
                    </Link>
                    <Link 
                        to="/community" 
                        className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        Forum
                    </Link>
                    <Link 
                        to="/leaderboard" 
                        className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        Leaderboard
                    </Link>
                </nav>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                {/* Progress */}
                {progress !== undefined && (
                    <div className="hidden sm:flex items-center gap-3">
                        <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
                    </div>
                )}

                {/* User */}
                <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    {isAdmin && (
                        <button
                            onClick={() => navigate('/admin')}
                            className="p-2 rounded-lg text-yellow-400 hover:bg-yellow-500/10 transition-all"
                            title="Admin Dashboard"
                        >
                            <Shield size={16} />
                        </button>
                    )}
                    
                    <Link to="/profile" className="flex items-center gap-2">
                        <span className="text-sm text-gray-300 hidden sm:block">
                            {user?.name || user?.email?.split('@')[0] || 'User'}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <User size={16} className="text-gray-400" />
                        </div>
                    </Link>

                    <button
                        onClick={() => logout()}
                        className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                        title="Sign Out"
                    >
                        <LogOut size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
}
