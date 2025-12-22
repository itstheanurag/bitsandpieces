import React from "react";
import { motion } from "framer-motion";

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 3D Box 1 */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 perspective-1000"
      >
        <div className="relative w-full h-full preserve-3d">
          <div className="absolute inset-0 bg-zinc-200/40 dark:bg-zinc-800/40 border border-zinc-300 dark:border-zinc-700 transform translate-z-16"></div>
          <div className="absolute inset-0 bg-zinc-300/40 dark:bg-zinc-700/40 border border-zinc-400 dark:border-zinc-600 transform -translate-z-16"></div>
          <div className="absolute inset-0 bg-zinc-400/40 dark:bg-zinc-600/40 border border-zinc-500 dark:border-zinc-500 transform rotate-y-90 translate-z-16"></div>
          <div className="absolute inset-0 bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transform -rotate-y-90 translate-z-16"></div>
          <div className="absolute inset-0 bg-zinc-200/40 dark:bg-zinc-800/40 border border-zinc-300 dark:border-zinc-700 transform rotate-x-90 translate-z-16"></div>
          <div className="absolute inset-0 bg-zinc-400/40 dark:bg-zinc-600/40 border border-zinc-500 dark:border-zinc-500 transform -rotate-x-90 translate-z-16"></div>
        </div>
      </motion.div>

      {/* 3D Prism 2 */}
      <motion.div
        animate={{
          rotateX: [360, 0],
          rotateZ: [0, 360],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 perspective-1000"
      >
        <div className="relative w-full h-full preserve-3d opacity-60">
          <div className="absolute inset-0 bg-zinc-300/30 dark:bg-zinc-700/30 border border-zinc-400 dark:border-zinc-600 transform rotate-y-45"></div>
          <div className="absolute inset-0 bg-zinc-500/30 dark:bg-zinc-500/30 border border-zinc-600 dark:border-zinc-400 transform -rotate-y-45"></div>
        </div>
      </motion.div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-200/50 dark:bg-zinc-800/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-zinc-300/40 dark:bg-zinc-900/30 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default FloatingShapes;
