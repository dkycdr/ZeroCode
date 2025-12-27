import React from 'react';
import { motion } from 'framer-motion';

export default function NeonFogBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020205]">

            {/* 1. Deep Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-[#0a0510]" />

            {/* 2. Drifting Neon Fog Blobs */}
            <div className="absolute inset-0 opacity-40">
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.2, 0.9, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-blue-900/30 blur-[120px] mix-blend-screen"
                />
                <motion.div
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, 50, -30, 0],
                        scale: [1, 1.1, 0.8, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-900/20 blur-[100px] mix-blend-screen"
                />
                <motion.div
                    animate={{
                        x: [0, 30, -30, 0],
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-[20%] right-[30%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[90px] mix-blend-screen"
                />
            </div>

            {/* 3. Subtle Hex Mesh Overlay (Static) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMjBMMTAgMGgyMGwxMCAyMC0xMCAyMEgxMEwwIDIweiIvPjwvc3ZnPg==')] opacity-30" />

            {/* 4. Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_100%)]" />
        </div>
    );
}
