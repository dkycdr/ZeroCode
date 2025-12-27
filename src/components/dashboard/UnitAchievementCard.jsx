import html2canvas from 'html2canvas';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    RiAwardFill,
    RiDownloadFill,
    RiCloseLine,
    RiTwitterXLine,
    RiLinkedinBoxFill,
    RiShieldStarLine,
    RiQrCodeLine,
    RiTerminalBoxFill,
    RiCpuLine,
    RiRadarLine,
    RiPulseLine,
    RiScan2Line,
    RiInformationLine,
    RiArrowRightSLine,
    RiCheckboxCircleFill,
    RiShareForwardFill,
    RiHistoryLine
} from 'react-icons/ri';
import {
    FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiPhp, SiVuedotjs, SiExpress
} from 'react-icons/si';
import { VscGlobe, VscCircuitBoard } from 'react-icons/vsc';
import { useRef, useState, useMemo } from 'react';
import RealisticDNA from '../RealisticDNA';
import { useProgress } from '../../contexts/ProgressProvider';

const COURSE_ICONS = {
    html5: <FaHtml5 />,
    css3: <FaCss3Alt />,
    git: <FaGitAlt />,
    tailwind: <SiTailwindcss />,
    'js-basics': <SiJavascript />,
    dom: <VscGlobe />,
    'js-es6': <SiJavascript />,
    php: <SiPhp />,
    mysql: <SiMysql />,
    python: <FaPython />,
    react: <FaReact />,
    typescript: <SiTypescript />,
    node: <FaNodeJs />,
    mongodb: <SiMongodb />,
    nextjs: <SiNextdotjs />,
    cicd: <VscCircuitBoard />,
    vue: <SiVuedotjs />,
    express: <SiExpress />,
    postgresql: <SiPostgresql />
};

const COURSE_DNA = {
    html5: { primary: '#E44D26', secondary: '#F16529' },
    css3: { primary: '#1572B6', secondary: '#33A9DC' },
    git: { primary: '#F05032', secondary: '#F05032' },
    tailwind: { primary: '#06B6D4', secondary: '#38BDF8' },
    'js-basics': { primary: '#F7DF1E', secondary: '#FFD600' },
    dom: { primary: '#A855F7', secondary: '#C084FC' },
    'js-es6': { primary: '#F7DF1E', secondary: '#FFD600' },
    php: { primary: '#777BB4', secondary: '#8993BE' },
    mysql: { primary: '#4479A1', secondary: '#00758F' },
    python: { primary: '#3776AB', secondary: '#FFD43B' },
    react: { primary: '#61DAFB', secondary: '#22D3EE' },
    typescript: { primary: '#3178C6', secondary: '#60A5FA' },
    node: { primary: '#339933', secondary: '#10B981' },
    mongodb: { primary: '#47A248', secondary: '#10B981' },
    nextjs: { primary: '#FFFFFF', secondary: '#A1A1AA' },
    cicd: { primary: '#71717A', secondary: '#D4D4D8' },
    vue: { primary: '#4FC08D', secondary: '#34D399' },
    express: { primary: '#FDE047', secondary: '#FEF08A' },
    postgresql: { primary: '#336791', secondary: '#60A5FA' }
};

const MicroReadout = ({ label, value, color }) => (
    <div className="flex flex-col gap-0.5 opacity-40 hover:opacity-100 transition-opacity cursor-default">
        <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-500">{label}</span>
        <span className="text-[9px] font-bold text-white uppercase" style={{ color }}>{value}</span>
    </div>
);

const TacticalButton = ({ icon: Icon, label, subLabel, onClick, color, primary = false }) => (
    <button
        onClick={onClick}
        className={`group relative flex-1 flex items-center gap-4 px-6 py-4 transition-all active:scale-[0.98] overflow-hidden 
            ${primary ? 'bg-white' : 'bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06]'}`}
    >
        {/* Button Glitch Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-scan" />
        </div>

        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${primary ? 'bg-black text-white' : 'bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10'}`}>
            <Icon size={20} />
        </div>

        <div className="flex flex-col items-start">
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${primary ? 'text-black' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {label}
            </span>
            <span className={`text-[8px] font-bold opacity-40 ${primary ? 'text-black' : 'text-zinc-600'}`}>
                {subLabel}
            </span>
        </div>

        {/* Tactical Corner Decal */}
        <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${primary ? 'border-black/10' : 'border-white/5'}`} />
    </button>
);

const CornerHUD = ({ side = 'tr', color }) => {
    const isTopRight = side === 'tr';

    return (
        <div className={`absolute ${isTopRight ? 'top-0 right-0' : 'bottom-0 right-0'} p-3 z-[100] pointer-events-none`}>
            {isTopRight ? (
                <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-1 h-3 items-center">
                        <div className="w-1 h-1 bg-white/20" />
                        <div className="w-1 h-1 bg-white/20" />
                        <div className="w-8 h-[2px]" style={{ backgroundColor: color }} />
                    </div>
                    <div className="text-[8px] font-black text-zinc-600 tracking-widest mt-1">S_ID:00{Math.floor(Math.random() * 99)}</div>
                </div>
            ) : (
                <div className="flex flex-col items-end gap-1">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20 mb-1" />
                    <div className="flex gap-1">
                        <div className="w-3 h-3 border border-white/10 rounded-sm" />
                        <div className="w-1 h-3 bg-white/5" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default function UnitAchievementCard({ unitData, onClose }) {
    const { userStats } = useProgress();
    const cardRef = useRef(null);

    const handleExport = async () => {
        if (!cardRef.current) return;
        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                logging: false
            });
            const link = document.createElement('a');
            link.download = `ZEROCODE_ACHIEVEMENT_${(unitData.courseId || 'UNIT').toUpperCase()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Export failed:', err);
        }
    };

    const handleShare = (platform) => {
        const text = `JUST MASTERED ${unitData.courseTitle || 'A NEW SKILL'} ON ZEROCODE! +100XP #ZeroCode #WebDev`;
        const url = 'https://zerocode.com'; // Placeholder

        if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (platform === 'linkedin') {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        }
    };

    // Mouse Tracking for Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);
    const layerX = useTransform(springX, [-0.5, 0.5], ["-12px", "12px"]);
    const layerY = useTransform(springY, [-0.5, 0.5], ["-12px", "12px"]);

    if (!unitData) return null;

    const { unitTitle, courseId, courseTitle, userName = 'OPERATIVE' } = unitData;
    const dna = COURSE_DNA[courseId] || COURSE_DNA['react'];
    const Icon = COURSE_ICONS[courseId] || <RiTerminalBoxFill />;
    const verifyId = `ZC.AUTH.${(courseId || 'UNI').substring(0, 3).toUpperCase()}.${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX / innerWidth) - 0.5);
        mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseMove={handleMouseMove}
                className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#010101]/95 backdrop-blur-3xl p-4 font-mono select-none overflow-hidden"
            >
                {/* Circuit Board Underlay Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10H10zM30 30h10v10H30zM50 50h10v10H50zM70 70h10v10H70zM90 90h10v10H90z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}
                />

                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                        perspective: 2500
                    }}
                    initial={{ scale: 0.9, opacity: 0, z: -300 }}
                    animate={{ scale: 1, opacity: 1, z: 0 }}
                    exit={{ scale: 0.9, opacity: 0, z: -100 }}
                    transition={{ type: "spring", damping: 30, stiffness: 70 }}
                    className="relative w-[90vw] max-w-[1400px] h-auto md:h-[700px]"
                >
                    {/* INDUSTRIAL SHELL FRAME (CLIP-PATH) */}
                    <motion.div
                        ref={cardRef}
                        style={{
                            x: layerX,
                            y: layerY,
                            transformZ: 30,
                            clipPath: 'polygon(0% 15px, 15px 0%, calc(100% - 40px) 0%, 100% 40px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0% calc(100% - 15px))'
                        }}
                        className="relative w-full h-full bg-[#080808] border border-white/10 shadow-[0_60px_100px_rgba(0,0,0,1)] flex flex-col items-stretch overflow-hidden group"
                    >
                        {/* Hardware Details Overlay */}
                        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-[100]" />
                        <div className="absolute top-0 right-10 w-20 h-1 bg-white/20 skew-x-[-45deg] z-[100]" />

                        {/* Top Hardware Frame */}
                        <div className="h-16 border-b border-white/5 flex items-center justify-between px-10 bg-white/[0.01] relative z-[90]">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-white/10 rounded-full flex items-center justify-center p-[2px]">
                                        <div className="w-full h-1/2 bg-emerald-500 rounded-full animate-pulse" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">HARDWARE.AUTHENTICATED</span>
                                </div>
                                <div className="hidden lg:flex items-center gap-8">
                                    <div className="h-6 w-px bg-white/5" />
                                    <MicroReadout label="NEURAL_STREAK" value={`${userStats.streak || 0}.STK`} color={dna.primary} />
                                    <MicroReadout label="TOTAL_UPGRADE" value={`${userStats.xp || 0}.XP`} />
                                    <MicroReadout label="U_AUTH" value={`LVL_${userStats.level || 1}`} />
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-zinc-500 hover:text-white group/close"
                            >
                                <RiCloseLine size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* HUD Decoration */}
                        <CornerHUD side="tr" color={dna.primary} />
                        <CornerHUD side="br" color={dna.secondary} />

                        {/* Main Body */}
                        <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5 relative z-50">

                            {/* DNA CHAMBER (VORTEX CORE REDESIGN) */}
                            <div className="w-full md:w-[60%] flex flex-col items-center justify-center p-8 relative bg-black/60">
                                {/* Ambient Panel Glow */}
                                <div
                                    className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at center, ${dna.primary} 0%, transparent 80%)` }}
                                />

                                {/* Neural Pulse Ring & DNA */}
                                <div className="absolute inset-0 z-0 pointer-events-none">
                                    <RealisticDNA color1={dna.primary} color2={dna.secondary} helixRadius={140} />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]/40" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_60%)] opacity-60" />
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-full h-full min-h-[400px]">
                                    {/* Photon Energy Ring (Rotating Backglow) */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[450px] h-[450px] rounded-full opacity-30 blur-xl pointer-events-none"
                                        style={{
                                            background: `conic-gradient(from 0deg, transparent, ${dna.primary}, transparent, ${dna.secondary}, transparent)`,
                                            border: `2px solid ${dna.primary}40`
                                        }}
                                    />

                                    {/* Secondary Static Aura */}
                                    <div
                                        className="absolute w-96 h-96 rounded-full blur-[80px] opacity-40 animate-pulse pointer-events-none"
                                        style={{ background: dna.primary }}
                                    />

                                    <motion.div
                                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="absolute -inset-20 border border-white/[0.05] rounded-full border-dashed"
                                    />

                                    <div
                                        className="w-[95%] aspect-square max-w-[420px] rounded-3xl flex items-center justify-center relative z-20 transition-all duration-1000 border-2 border-white/20 group/icon overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.9)]"
                                        style={{
                                            background: `radial-gradient(circle at center, ${dna.primary}40 0%, #000000 90%)`,
                                        }}
                                    >
                                        {/* Cinematic Stage Light */}
                                        <div
                                            className="absolute bottom-0 inset-x-0 h-3/4 opacity-70 blur-3xl pointer-events-none"
                                            style={{ background: `linear-gradient(to top, ${dna.primary}, transparent)` }}
                                        />

                                        {/* Scanning Hologram Line */}
                                        <motion.div
                                            animate={{ top: ['-10%', '110%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-x-0 h-0.5 z-30 opacity-60 pointer-events-none"
                                            style={{
                                                background: `linear-gradient(to right, transparent, white, transparent)`,
                                                boxShadow: `0 0 20px white`
                                            }}
                                        />

                                        {/* Inner Glow Pulse */}
                                        <motion.div
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute inset-0 pointer-events-none"
                                            style={{ background: `radial-gradient(circle at center, ${dna.primary} 0%, transparent 70%)` }}
                                        />

                                        <motion.div
                                            animate={{
                                                filter: [
                                                    `drop-shadow(0 0 30px ${dna.primary}) brightness(1.8) contrast(1.2)`,
                                                    `drop-shadow(0 0 60px ${dna.primary}) brightness(2.5) contrast(1.5)`,
                                                    `drop-shadow(0 0 30px ${dna.primary}) brightness(1.8) contrast(1.2)`
                                                ]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="text-[180px] leading-none transition-all duration-1000 relative z-10 flex items-center justify-center w-full h-full"
                                            style={{ color: 'white' }}
                                        >
                                            {Icon}
                                        </motion.div>

                                        {/* Interactive Glow (Hover) */}
                                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />

                                        {/* Status Tag */}
                                        <div className="absolute top-10 left-10 flex flex-col gap-1 z-20">
                                            <div className="w-3 h-3 rounded-full shadow-[0_0_15px_white] animate-ping absolute" style={{ backgroundColor: dna.primary }} />
                                            <div className="w-3 h-3 rounded-full relative z-10" style={{ backgroundColor: dna.primary }} />
                                            <div className="w-6 h-0.5 bg-white/40 mt-1" />
                                        </div>
                                    </div>

                                    {/* MASTERED BADGE - MOVED OUTSIDE CONTAINER */}
                                    <div className="absolute -bottom-6 bg-white text-black px-10 py-3 rounded-2xl text-[12px] font-black uppercase tracking-[1em] shadow-[0_15px_50px_rgba(255,255,255,0.4)] skew-x-[-10deg] z-40">
                                        MASTERED
                                    </div>
                                </div>

                                <div className="flex justify-between w-full px-4 mt-8 relative z-10 border-t border-white/5 pt-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[7px] text-zinc-600 font-black uppercase tracking-widest">VERIFIED_HASH</span>
                                        <span className="text-[10px] text-zinc-400 font-bold font-mono uppercase">{verifyId.split('.').pop()}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-[7px] text-zinc-600 font-black uppercase tracking-widest">SIGNAL_LOAD</span>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`w-1 h-2 rounded-full ${i < 4 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ACHIEVEMENT DATA READOUT */}
                            <div className="flex-1 p-10 md:p-16 flex flex-col justify-between bg-black/20">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <RiShieldStarLine size={18} style={{ color: dna.primary }} className="animate-pulse" />
                                            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-500">UNIT_PROTOCOL_FINALIZED</span>
                                        </div>
                                        <h1 className="text-5xl md:text-[84px] font-black text-white tracking-tighter uppercase leading-[0.8] italic drop-shadow-md">
                                            {unitTitle}
                                        </h1>
                                        <div className="flex items-center gap-4 py-3 border-y border-white/5">
                                            <RiHistoryLine className="text-zinc-600" />
                                            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.3em]">{courseTitle}</span>
                                            <div className="ml-auto flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                                <span className="text-[9px] font-black text-white px-2 py-0.5 bg-white/5 tracking-widest">SYNCED</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">AUTHORIZED_SUBJECT::</span>
                                            <span className="text-4xl font-black text-white tracking-widest uppercase truncate">{userName}</span>
                                        </div>

                                        <div className="flex gap-12">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[8px] font-black text-zinc-600 tracking-widest uppercase">NODE_UPGRADE</span>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-3xl font-black text-emerald-400 leading-none">+100.XP</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[8px] font-black text-zinc-600 tracking-widest uppercase">STABILITY</span>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-3xl font-black text-cyan-400 leading-none">{userStats.levelProgress || 0}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TACTICAL ACTION MATRIX */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-12">
                                    <TacticalButton
                                        primary
                                        icon={RiDownloadFill}
                                        label="INIT.EXPORT"
                                        subLabel="ARCHIVE.V7_FINAL"
                                        onClick={handleExport}
                                    />

                                    <div className="flex gap-3 flex-1 lg:flex-none">
                                        <TacticalButton
                                            icon={RiTwitterXLine}
                                            label="UPLINK.X"
                                            subLabel="BROADCAST_FEED"
                                            onClick={() => handleShare('twitter')}
                                        />
                                        <TacticalButton
                                            icon={RiLinkedinBoxFill}
                                            label="AUTH.LINK"
                                            subLabel="NETWORK_SYNC"
                                            onClick={() => handleShare('linkedin')}
                                        />
                                    </div>

                                    <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-white/5 opacity-40 hover:opacity-100 transition-opacity">
                                        <RiQrCodeLine size={40} className="text-white" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] font-black text-zinc-600 tracking-widest uppercase font-mono">SECURED::ZC_OS_V4</span>
                                            <span className="text-[7px] font-black text-white/50 uppercase tracking-tighter">ENCRYPTION: AES-256</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hardware Footer */}
                        <div className="h-12 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between px-10 text-[8px] font-black text-zinc-600 tracking-[0.4em] uppercase">
                            <div className="flex gap-12">
                                <div className="flex items-center gap-2">
                                    <RiScan2Line className="text-emerald-500 animate-pulse" />
                                    <span>SYSTEM_CORE: OK</span>
                                </div>
                                <div className="hidden sm:block">F_ID:: {Math.random().toString(36).substr(2, 8).toUpperCase()}</div>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-500">
                                <RiInformationLine className="text-amber-500/50" />
                                <span>TERM_CMD: ESC_TO_TERMINATE</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
