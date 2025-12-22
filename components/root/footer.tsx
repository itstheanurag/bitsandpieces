"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl font-black text-neutral-900 dark:text-white group"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-lg group-hover:scale-110 transition-transform"
                />
                Bits&Pieces
              </Link>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-sm text-base font-medium leading-relaxed">
                A premium collection of reusable components and design utilities
                for modern frontend engineers.
              </p>
            </div>

            <div className="flex gap-5">
              <a
                href="https://github.com/itsTheAnurag/BitsAndPieces"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/itstheanurag"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              Library
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/browse"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              Open Source
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/itsTheAnurag/BitsAndPieces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/contributing"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  Contributing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
            © {new Date().getFullYear()} BitsAndPieces. Crafted with precision
            for the community.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-none">
            <span>Built by</span>
            <a
              href="https://twitter.com/itsTheAnurag"
              className="text-neutral-900 dark:text-white hover:underline font-bold"
            >
              Anurag
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
