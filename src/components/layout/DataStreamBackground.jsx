import React from 'react';

export default function DataStreamBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020205]">

            {/* 1. Deep Base Gradient (Dark Blue/Teal Atmosphere) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050a10] to-[#000508]" />

            {/* 2. Vertical Data Lines (The 'Stream') */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,157,0.05)_1px,transparent_1px)] bg-[size:4rem_100%]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,157,0.1)_1px,transparent_1px)] bg-[size:100%_8rem] opacity-50 animate-data-pan" />
            </div>

            {/* 3. Floating 'Data Particles' (Subtle) */}
            <div className="absolute inset-0 opacity-30">
                {/* CSS Generated Particles for performance */}
                <div className="absolute top-0 left-[10%] w-px h-20 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-rain-drop-1" />
                <div className="absolute top-0 left-[30%] w-px h-32 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-rain-drop-2" />
                <div className="absolute top-0 left-[60%] w-px h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-rain-drop-3" />
                <div className="absolute top-0 left-[85%] w-px h-40 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-rain-drop-1" />
            </div>

            {/* 4. Atmospheric Nebula Glows */}
            <div className="absolute -top-[20%] left-0 w-[60vw] h-[60vw] bg-cyan-950/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute -bottom-[20%] right-0 w-[70vw] h-[70vw] bg-emerald-950/10 blur-[120px] rounded-full mix-blend-screen" />

            {/* 5. Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

            <style>{`
                @keyframes data-pan {
                    0% { transform: translateY(-8rem); }
                    100% { transform: translateY(0); }
                }
                .animate-data-pan {
                    animation: data-pan 4s linear infinite;
                }
                @keyframes rain-drop {
                    0% { transform: translateY(-100vh); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                .animate-rain-drop-1 { animation: rain-drop 3s linear infinite; animation-delay: 0s; }
                .animate-rain-drop-2 { animation: rain-drop 4s linear infinite; animation-delay: 1s; }
                .animate-rain-drop-3 { animation: rain-drop 3.5s linear infinite; animation-delay: 2s; }
            `}</style>
        </div>
    );
}
