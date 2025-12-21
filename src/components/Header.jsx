import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { RiUser3Fill, RiLogoutBoxRLine, RiShieldKeyholeFill, RiMenu4Fill } from 'react-icons/ri';
import { VscCode } from 'react-icons/vsc';
import clsx from 'clsx';
import logo from '../assets/logo.png';

export default function Header({ progress }) {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
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

    const navLinks = [
        { path: '/dashboard', label: 'Curriculum' },
        { path: '/resources', label: 'Library' },
        { path: '/community', label: 'Forum' },
        { path: '/leaderboard', label: 'Leaderboard' },
        { path: '/features', label: 'Features' },
        { path: '/updates', label: 'Updates' }
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-[var(--border-subtle)]">
            <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                {/* Logo Section */}
                <div className="flex items-center gap-10">
                    <button onClick={handleLogoClick} className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[var(--accent-primary)] transition-all duration-300 shadow-lg shadow-black/20">
                            <img src={logo} alt="ZeroCode" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
                            ZeroCode
                        </span>
                    </button>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.filter(l => l.label !== 'Features').map(link => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent",
                                        isActive
                                            ? "bg-white/10 text-white border-white/10 shadow-sm"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-5">
                    {/* Progress Bar (Visible on larger screens) */}
                    {progress !== undefined && (
                        <div className="hidden lg:flex items-center gap-3">
                            <span className="text-xs font-mono text-gray-500">PROGRESS</span>
                            <div className="w-32 h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[var(--accent-primary)] transition-all duration-500 shadow-[0_0_10px_var(--accent-glow)]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-xs font-mono text-[var(--accent-primary)]">{Math.round(progress)}%</span>
                            <div className="h-4 w-[1px] bg-white/10 mx-2" />
                        </div>
                    )}

                    {/* User Actions */}
                    <div className="flex items-center gap-3">
                        {isAdmin && (
                            <button
                                onClick={() => navigate('/admin')}
                                className="p-2 rounded-lg text-yellow-400 hover:bg-yellow-500/10 transition-all border border-transparent hover:border-yellow-500/20"
                                title="Admin Dashboard"
                            >
                                <RiShieldKeyholeFill size={18} />
                            </button>
                        )}

                        <Link to="/profile" className="flex items-center gap-3 group">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-medium text-white group-hover:text-[var(--accent-primary)] transition-colors">
                                    {user?.name || user?.email?.split('@')[0] || 'User'}
                                </div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                                    {user?.role || 'Cadet'}
                                </div>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-[#27272a] border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-primary)] transition-colors">
                                <RiUser3Fill size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </Link>

                        <button
                            onClick={() => logout()}
                            className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all ml-1"
                            title="Sign Out"
                        >
                            <RiLogoutBoxRLine size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
