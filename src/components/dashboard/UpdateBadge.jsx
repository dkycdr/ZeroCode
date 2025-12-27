import React from 'react';
import { motion } from 'framer-motion';

const UpdateBadge = () => {
    return (
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full bg-yellow-500"
            />
            <span className="text-[10px] font-bold tracking-wider text-yellow-400 uppercase">
                Updated
            </span>
        </div>
    );
};

export default UpdateBadge;
