import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Layers, Zap, Cpu, MousePointer2 } from "lucide-react";

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 px-6 max-w-7xl mx-auto hero-gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-8 uppercase tracking-widest">
            <Cpu className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
            Neural Component Engine
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[0.9]">
            NEXT GEN <br />
            <span className="text-zinc-300 dark:text-zinc-700">
              INTERFACES.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-medium">
            A high-performance toolkit for React developers who demand speed,
            accessibility, and pixel-perfect aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shimmer group shadow-2xl shadow-zinc-300 dark:shadow-zinc-950">
              Start Building
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
              View Components
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                      i + 20
                    }`}
                    alt="User"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              Trusted by{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                2,500+
              </span>{" "}
              teams worldwide
            </p>
          </div>
        </motion.div>

        {/* Right Side: Interactive 3D Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-1000 hidden lg:block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="preserve-3d w-full h-[500px] flex items-center justify-center"
          >
            {/* Main Stage Panel */}
            <div className="relative w-[400px] h-[400px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] shadow-2xl p-8 preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-[3rem] -z-10"></div>

              {/* Floating Element 1: Utility Inspector */}
              <motion.div
                animate={{ z: [20, 40, 20], y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[-40px] right-[-40px] w-56 p-4 glass-panel rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl preserve-3d"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
                    Utility: Flex-Center
                  </span>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-zinc-900 dark:bg-zinc-50"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Floating Element 2: 3D Button */}
              <motion.div
                animate={{ z: [30, 60, 30], x: [0, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 left-[-60px] preserve-3d"
              >
                <div className="px-6 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-3">
                  <MousePointer2 className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-tight">
                    Interactive Component
                  </span>
                </div>
              </motion.div>

              {/* Central Neural Core Icon */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-32 h-32 preserve-3d"
                >
                  {/* Neural Cube */}
                  <div className="relative w-full h-full preserve-3d">
                    <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 border border-zinc-200 dark:border-zinc-700 transform translate-z-16"></div>
                    <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-100/10 border border-zinc-200 dark:border-zinc-700 transform -translate-z-16"></div>
                    <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 border border-zinc-200 dark:border-zinc-700 transform rotate-y-90 translate-z-16"></div>
                    <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-100/10 border border-zinc-200 dark:border-zinc-700 transform -rotate-y-90 translate-z-16"></div>
                    <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-100/5 border border-zinc-200 dark:border-zinc-700 transform rotate-x-90 translate-z-16"></div>
                    <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-100/10 border border-zinc-200 dark:border-zinc-700 transform -rotate-x-90 translate-z-16"></div>
                    {/* Inner Core */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-8 bg-zinc-900 dark:bg-zinc-100 rounded-full blur-xl"
                    ></motion.div>
                  </div>
                </motion.div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Bits&Pieces
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                    v1.0.0-stable
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Grid - Bottom of Hero */}
      <div className="w-full mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Layers className="w-5 h-5" />,
            title: "Atomic Foundations",
            desc: "Strict design tokens for universal consistency.",
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "0ms Latency",
            desc: "Optimized for critical path rendering performance.",
          },
          {
            icon: <Cpu className="w-5 h-5" />,
            title: "Neural Assistance",
            desc: "Context-aware documentation with Gemini 3.",
          },
        ].map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + idx * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white dark:hover:bg-zinc-900"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-900 dark:text-zinc-100">
              {feat.icon}
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                {feat.title}
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {feat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
