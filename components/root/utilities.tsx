import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

const UtilitiesSection = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
            Utility first. <br />
            <span className="text-zinc-400 dark:text-zinc-500">
              Interface second.
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            Nexus provides a powerful CSS utility engine built on top of
            Tailwind, allowing you to create complex layouts with zero custom
            CSS. Our color system is calibrated for perfect contrast and
            balance.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Dynamic spacing system",
              "Neural color palette",
              "Viewport-aware typography",
              "Fluid motion primitives",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100"></div>
                {item}
              </li>
            ))}
          </ul>
          <button className="group flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold hover:gap-4 transition-all">
            Explore Utilities <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/50 rounded-[3rem] -rotate-6 border border-zinc-200 dark:border-zinc-700"></div>
          <div className="absolute inset-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] shadow-2xl p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center px-4 overflow-hidden">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-[80%] h-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg"></div>
                <div className="w-[60%] h-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                <span>Utility Inspector</span>
                <span>Active</span>
              </div>
              <div className="p-4 bg-zinc-950 dark:bg-black rounded-2xl text-zinc-300 dark:text-zinc-400 font-mono text-sm leading-relaxed overflow-hidden">
                <span className="text-zinc-500">.nexus-surface</span> &#123;{" "}
                <br />
                &nbsp;&nbsp;background:{" "}
                <span className="text-zinc-100 dark:text-zinc-200">
                  zinc-50
                </span>
                ;<br />
                &nbsp;&nbsp;backdrop-filter:{" "}
                <span className="text-zinc-100 dark:text-zinc-200">
                  blur(12px)
                </span>
                ;<br />
                &nbsp;&nbsp;elevation:{" "}
                <span className="text-zinc-100 dark:text-zinc-200">
                  neutral-high
                </span>
                ;<br />
                &#125;
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UtilitiesSection;
