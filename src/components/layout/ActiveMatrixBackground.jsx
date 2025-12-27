import React from 'react';

export default function ActiveMatrixBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0a0f]">

            {/* 1. Base Dark Void with Deep Ambient Gradient (Not Pitch Black) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_#1a1a2e_0%,_#050505_100%)] opacity-80" />

            {/* 2. Animated Perspective Grid (Brighter & More Visible) */}
            <div className="absolute top-[40%] left-[-50%] w-[200%] h-[100%] perspective-[1000px] transform-gpu opacity-60">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9d_1px,transparent_1px),linear-gradient(to_bottom,#00ff9d_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_translateZ(-200px)] animate-grid-flow shadow-[0_0_20px_rgba(0,255,157,0.2)]" />
            </div>

            {/* 3. Deep Atmospheric Nebula (Cyan/Purple accents) */}
            <div className="absolute top-[-20%] left-0 w-[50vw] h-[50vw] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen" />

            {/* 4. Scanline Overlay (CRT Feel) */}
            <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiAvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDAsIDI1NSwgMTU3LCAwLjAzKSIgLz4KPC9zdmc+')] opacity-40 mix-blend-overlay" />

            {/* 5. Vignette (Focus Center) */}
            <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

            <style>{`
                @keyframes grid-flow {
                    0% { transform: rotateX(60deg) translateZ(-200px) translateY(0); }
                    100% { transform: rotateX(60deg) translateZ(-200px) translateY(4rem); }
                }
                .animate-grid-flow {
                    animation: grid-flow 3s linear infinite;
                }
            `}</style>
        </div>
    );
}
