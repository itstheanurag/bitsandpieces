"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, Variants } from "motion/react";
import { FiCheck, FiCopy, FiArrowRight } from "react-icons/fi";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i bitsandpieces");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh] bg-background">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:bg-muted/60">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Introducing Bits&Pieces v0.1
              <FiArrowRight className="ml-1 h-3 w-3" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={fadeUpVariant}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Ship beautiful UI, <br className="hidden sm:block" /> faster than
              ever.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              A meticulously crafted collection of open-source React components,
              blocks, and templates designed for modern web applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-20"
          >
            <Link href="/docs" passHref>
              <Button
                size="lg"
                className="h-12 px-8 rounded-full text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                Start Building
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-md mx-auto relative group mt-10 z-10"
          >
            {/* Subtle floating effect for the terminal */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center bg-card border border-border/50 rounded-xl p-2 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex-1 flex items-center px-4 font-mono text-sm text-muted-foreground">
                  <span className="text-primary mr-2 select-none">$</span>
                  <span className="text-foreground">npm i bitsandpieces</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 sm:px-4 sm:py-2.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95 flex flex-col items-center justify-center relative min-w-[3rem] sm:min-w-[5rem]"
                >
                  {copied ? (
                    <FiCheck className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <>
                      <FiCopy className="w-4 h-4 sm:hidden" />
                      <span className="hidden sm:inline-block text-sm font-medium">
                        Copy
                      </span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
