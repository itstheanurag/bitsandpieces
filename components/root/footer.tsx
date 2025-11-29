"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 block"
            >
              Bits&Pieces
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xs mb-6">
              A collection of beautiful, reusable components built with modern
              web technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/itsTheAnurag/BitsAndPieces"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/itstheanurag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Project
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Community
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/itsTheAnurag/BitsAndPieces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <Link
                  href="/contributing"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} BitsAndPieces. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Built by{" "}
            <a
              href="https://twitter.com/itsTheAnurag"
              className="hover:underline"
            >
              Anurag
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
