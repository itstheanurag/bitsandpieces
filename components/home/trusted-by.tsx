import React from "react";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs, SiFramer, SiVercel } from "react-icons/si";

export const TrustedBy: React.FC = () => {
  return (
    <section className="border-b border-border/60 bg-secondary/30 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Powered by modern technologies
        </p>

        {/* Marquee Container */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 items-center flex-none animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Set 1 */}
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiNextdotjs className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">
                Next.js
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoReact className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">React</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoTailwindCss className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">
                Tailwind
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiFramer className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">Motion</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoTypescript className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">
                TypeScript
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiVercel className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">Vercel</span>
            </div>

            {/* Set 2 (Duplicate for seamless looping) */}
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiNextdotjs className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">
                Next.js
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoReact className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">React</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoTailwindCss className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">
                Tailwind
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiFramer className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">Motion</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <BiLogoTypescript className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tighter">
                TypeScript
              </span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 grayscale hover:grayscale-0 transition-all duration-300">
              <SiVercel className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
