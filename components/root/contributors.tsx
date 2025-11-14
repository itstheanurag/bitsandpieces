"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const contributors = [
  {
    name: "Anurag",
    avatar: "https://github.com/itsTheAnurag.png",
    href: "https://github.com/itsTheAnurag",
  },
  // Add more contributors here
];

export function Contributors() {
  return (
    <section className="py-24">
      <div className="container px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Our Contributors
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          Thanks to all the amazing people who have contributed to
          BitsAndPieces.
        </p>
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          {contributors.map((contributor) => (
            <motion.div
              key={contributor.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={contributor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={contributor.avatar}
                  alt={contributor.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
