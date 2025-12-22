import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import AvatarWithBorder from '../common/AvatarWithBorder';
import {
    RiDashboardLine,
    RiBookOpenLine,
    RiDiscussLine,
    RiTrophyLine,
    RiUser3Line,
    RiLogoutBoxRLine,
    RiShieldKeyholeLine,
    RiArrowDownSLine,
    RiRocketLine
} from 'react-icons/ri';
import clsx from 'clsx';
import logo from '../../assets/logo_z.png';

export default function TopNavbar() {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Admin access logic
    const [clickCount, setClickCount] = useState(0);
    const clickTimer = useRef(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogoClick = (e) => {
        e.preventDefault();
        setClickCount(prev => prev + 1);
        clearTimeout(clickTimer.current);
        clickTimer.current = setTimeout(() => setClickCount(0), 2000);

        if (clickCount >= 4) {
            setClickCount(0);
            navigate(isAdmin ? '/admin' : '/admin/access');
        } else {
            navigate('/dashboard');
        }
    };

    const navLinks = [
        { path: '/dashboard', label: 'Overview', icon: RiDashboardLine },
        { path: '/resources', label: 'Library', icon: RiBookOpenLine },
        { path: '/features', label: 'Features', icon: RiRocketLine },
        { path: '/community', label: 'Community', icon: RiDiscussLine },
        { path: '/leaderboard', label: 'Leaderboard', icon: RiTrophyLine },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo & Main Nav */}
                <div className="flex items-center gap-8">
                    <button onClick={handleLogoClick} className="flex items-center gap-3 group focus:outline-none">
                        <img
                            src={logo}
                            alt="ZeroCode"
                            className="w-10 h-10 transition-transform group-hover:scale-110"
                        />
                        <span className="font-black text-2xl tracking-tighter text-white group-hover:text-zinc-300 transition-colors uppercase">
                            ZeroCode
                        </span>
                    </button>

                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                                    )}
                                >
                                    <Icon size={16} className={isActive ? "text-indigo-400" : "text-zinc-500"} />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {isAdmin && (
                        <Link
                            to="/admin"
                            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider hover:bg-yellow-500/20 transition-colors"
                        >
                            <RiShieldKeyholeLine />
                            Admin
                        </Link>
                    )}

                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            onBlur={() => setTimeout(() => setIsProfileOpen(false), 200)}
                            className="flex items-center gap-3 group focus:outline-none"
                        >
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                                    {user?.name || 'User'}
                                </div>
                                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                                    {user?.role || 'Cadet'}
                                </div>
                            </div>
                            <AvatarWithBorder
                                url={user?.avatar}
                                name={user?.name}
                                border={user?.border}
                                size="md" // 9 is close to 10 (md) or 8 (sm). 9 = 2.25rem = 36px. md is 40px, sm is 32px. Let's use md but adjust class if needed, or rely on size prop. The component uses w-9 h-9 previously. I'll pass className="w-9 h-9" and size="custom" if needed, or just let it be md (w-10). Let's use md.
                                className="w-9 h-9"
                            />
                        </button>

                        {/* Dropdown */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden animate-fade-in-up origin-top-right">
                                <div className="p-1">
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                        <RiUser3Line size={16} className="text-zinc-500" />
                                        Profile
                                    </Link>
                                    <div className="h-px bg-white/5 my-1" />
                                    <button
                                        onClick={logout}
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                    >
                                        <RiLogoutBoxRLine size={16} />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
