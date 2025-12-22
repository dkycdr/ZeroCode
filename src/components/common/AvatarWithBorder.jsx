import clsx from 'clsx';

export default function AvatarWithBorder({
    url,
    name,
    border = 'none',
    size = 'md', // sm, md, lg, xl
    className
}) {
    // Size mappings
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    const containerClass = sizeClasses[size] || sizeClasses.md;
    const isWarlord = border === 'warlord';
    const isGhost = border === 'ghost';
    const isOperator = border === 'operator';
    const isNeural = border === 'neural';
    const isScanner = border === 'scanner';
    const isCrimson = border === 'crimson';
    const isSynth = border === 'synth';

    return (
        <div className={clsx("relative flex-shrink-0 group", containerClass, className)}>

            {/* --- BORDER ANIMATIONS --- */}

            {isNeural && (
                <>
                    <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute -inset-1 rounded-full border border-t-cyan-400 border-r-transparent border-b-blue-500 border-l-transparent animate-[spin_3s_linear_infinite]" />
                </>
            )}

            {isScanner && (
                <>
                    <div className="absolute -inset-2 rounded-full border border-emerald-500/30 opacity-50" />
                    <div className="absolute -inset-2 rounded-full border-t-2 border-emerald-500 animate-[spin_4s_linear_infinite] opacity-80" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent animate-pulse" />
                </>
            )}

            {isCrimson && (
                <>
                    <div className="absolute -inset-1 bg-red-600/20 rounded-lg animate-pulse" />
                    <div className="absolute -inset-1 border border-red-500/50 rounded-lg transform rotate-3" />
                    <div className="absolute -inset-1 border border-red-500/50 rounded-lg transform -rotate-3" />
                </>
            )}

            {isSynth && (
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[spin_2s_linear_infinite] opacity-70 blur-sm" />
            )}

            {isWarlord && (
                <div
                    className="absolute inset-[-3px] bg-gradient-to-br from-yellow-600 to-red-600 clip-hex scale-105 opacity-50 blur-sm"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
            )}

            {isGhost && (
                <div className="absolute inset-[-2px] border border-purple-500/50 rounded-lg animate-pulse" />
            )}

            {isOperator && (
                <>
                    <div className="absolute -inset-1 border-l border-t border-emerald-500 rounded-tl w-2.5 h-2.5" />
                    <div className="absolute -inset-1 border-r border-b border-emerald-500 rounded-br w-2.5 h-2.5 right-0 bottom-0" />
                </>
            )}

            {/* --- AVATAR CONTAINER --- */}

            <div
                className={clsx(
                    "relative w-full h-full flex items-center justify-center overflow-hidden",
                    // Shape & Border
                    isWarlord ? "clip-hex bg-gradient-to-br from-yellow-500 to-red-600 p-[1.5px]" :
                        (isGhost ? "rounded-lg border border-purple-500" :
                            (isOperator ? "rounded border border-white/10" :
                                (isCrimson ? "rounded-lg bg-red-950/50 border border-red-500/50" :
                                    (isSynth ? "rounded-full p-[2px] bg-zinc-900" :
                                        (isScanner ? "rounded-full border border-emerald-500/50" : "rounded-full bg-zinc-800 border border-white/10")))))
                )}
                style={isWarlord ? { clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' } : {}}
            >
                {/* --- IMAGE / INITIALS --- */}

                <div
                    className={clsx(
                        "w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden",
                        isWarlord ? "clip-hex" : (isGhost || isCrimson ? "rounded-none" : "rounded-full")
                    )}
                    style={isWarlord ? { clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' } : {}}
                >
                    {url ? (
                        <img
                            src={url}
                            alt={name}
                            className={clsx(
                                "w-full h-full object-cover",
                                isGhost && "mix-blend-luminosity group-hover:mix-blend-normal transition-all",
                                isCrimson && "grayscale contrast-125 group-hover:grayscale-0 transition-all",
                                isScanner && "opacity-80 group-hover:opacity-100 transition-opacity"
                            )}
                        />
                    ) : (
                        <span className={clsx(
                            "font-bold text-white",
                            size === 'sm' ? "text-xs" :
                                (size === 'md' ? "text-sm" : "text-xl")
                        )}>
                            {name?.[0] || 'U'}
                        </span>
                    )}

                    {/* Ghost Scanline */}
                    {isGhost && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-50 pointer-events-none" />
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-purple-400 animate-[scanline_2s_linear_infinite]" />
                        </>
                    )}

                    {/* Scanner Grid */}
                    {isScanner && (
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20%_20%] pointer-events-none" />
                    )}
                </div>
            </div>
        </div>
    );
}
