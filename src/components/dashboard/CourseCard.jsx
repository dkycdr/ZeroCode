import { RiCheckboxCircleFill, RiTimeLine, RiArrowRightLine, RiCodeBoxLine, RiLock2Line } from 'react-icons/ri';
import {
    FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiMysql, SiPhp, SiVuedotjs, SiExpress
} from 'react-icons/si';
import { VscGlobe, VscCircuitBoard } from 'react-icons/vsc';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

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

const COURSE_COLORS = {
    html5: 'text-orange-500',
    css3: 'text-blue-500',
    git: 'text-orange-600',
    tailwind: 'text-cyan-400',
    'js-basics': 'text-yellow-400',
    dom: 'text-purple-400',
    'js-es6': 'text-yellow-500',
    php: 'text-indigo-400',
    mysql: 'text-blue-400',
    python: 'text-blue-500',
    react: 'text-cyan-400',
    typescript: 'text-blue-600',
    node: 'text-green-500',
    mongodb: 'text-green-500',
    nextjs: 'text-white',
    cicd: 'text-gray-400',
    vue: 'text-emerald-400',
    express: 'text-yellow-300',
    postgresql: 'text-blue-600'
};

export default function CourseCard({ course, isCompleted, isLocked, hasAccess }) {
    const navigate = useNavigate();
    const Icon = COURSE_ICONS[course.id] || <RiCodeBoxLine />;
    const colorClass = COURSE_COLORS[course.id] || 'text-zinc-500';

    const getIconColor = (id) => COURSE_COLORS[id] || 'text-zinc-500';

    return (
        <div
            onClick={() => !isLocked && navigate(`/course/${course.id}`)}
            className={clsx(
                "group relative flex flex-col h-full transition-all duration-300 isolate",
                isLocked ? "cursor-not-allowed grayscale opacity-60" : "cursor-pointer hover:-translate-y-1"
            )}
        >
            {/* Main Card Shell */}
            <div
                className={clsx(
                    "relative flex-1 bg-[#121214] border border-white/5 overflow-hidden transition-all duration-300",
                    !isLocked && "group-hover:border-white/20 group-hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)] group-hover:bg-[#18181b]"
                )}
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"
                }}
            >
                {/* Colored Top Border (Tech Line) */}
                <div className={clsx("absolute top-0 left-0 w-full h-1 transition-all duration-500", !isLocked ? colorClass.replace('text-', 'bg-') : "bg-zinc-800", "opacity-50 group-hover:opacity-100")} />

                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

                {/* Giant Background Icon (Restored Overflow Effect) */}
                <div className={clsx(
                    "absolute -bottom-10 -right-10 text-[12rem] transition-all duration-700 pointer-events-none group-hover:scale-110 group-hover:opacity-[0.15] group-hover:-rotate-12 z-0",
                    colorClass,
                    // Use opacity only, no mix-blend if colors are dark, or screen if neon
                    "opacity-[0.1] mix-blend-screen"
                )}>
                    {Icon}
                </div>

                <div className="p-6 relative z-10 flex flex-col h-full">
                    {/* Header Row: Icon + Status */}
                    <div className="flex items-start justify-between mb-6">
                        {/* Tech Icon Box */}
                        <div className={clsx(
                            "w-12 h-12 flex items-center justify-center text-2xl relative border transition-all duration-300",
                            isLocked
                                ? "bg-black border-zinc-800 text-zinc-600"
                                : `bg-black border-white/10 group-hover:border-white/30 text-white shadow-lg`
                        )}>
                            {/* Inner colored glow for active */}
                            {!isLocked && <div className={clsx("absolute inset-0 opacity-20 blur-md group-hover:opacity-40 transition-opacity", colorClass.replace('text-', 'bg-'))} />}
                            <div className="relative z-10">{Icon}</div>

                            {/* Corner Accents */}
                            <div className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-white/30" />
                            <div className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-white/30" />
                        </div>

                        {/* Status Badge */}
                        {isCompleted ? (
                            <div className="flex items-center gap-1.5 text-[9px] font-black font-mono text-emerald-400 bg-emerald-950/20 px-2 py-1 border border-emerald-500/20">
                                <RiCheckboxCircleFill />
                                <span>MASTERED</span>
                            </div>
                        ) : isLocked ? (
                            <div className="flex items-center gap-1.5 text-[9px] font-black font-mono text-zinc-500 bg-zinc-900/50 px-2 py-1 border border-zinc-800">
                                <RiLock2Line />
                                <span>LOCKED</span>
                            </div>
                        ) : (
                            <div className={clsx(
                                "flex items-center gap-1.5 text-[9px] font-black font-mono px-2 py-1 border transition-all opacity-0 group-hover:opacity-100",
                                colorClass === 'text-white' ? "text-zinc-300 border-zinc-500" : `${colorClass} border-current opacity-50`
                            )}>
                                <span>ACCESS</span>
                                <RiArrowRightLine />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="mb-6 flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight line-clamp-1">
                            {course.title}
                        </h3>
                        {/* Tech Separator */}
                        <div className="w-8 h-0.5 bg-white/10 mb-3 group-hover:w-full group-hover:bg-white/20 transition-all duration-500" />

                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-mono">
                            {course.shortDesc}
                        </p>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <RiTimeLine className="text-zinc-600" />
                            <span>{course.duration}</span>
                        </div>
                        <span className="group-hover:text-white transition-colors">
                            ID_#{course.id.substring(0, 3).toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Decoration: Tab sticking out if unlocked */}
            {!isLocked && (
                <div className={clsx(
                    "absolute -right-1 top-6 w-1 h-8 transition-all duration-300 opacity-0 group-hover:opacity-100",
                    colorClass.replace('text-', 'bg-')
                )} />
            )}
        </div>
    );
}
