"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/itstheanurag/bitsandpieces/contributors"
        );

        if (!res.ok) throw new Error("Failed to fetch contributors");

        const data = await res.json();
        setContributors(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  return (
    <section className="py-24">
      <div className="w-full px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Our Contributors
        </h2>

        <p className="mt-4 mx-auto max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          Thanks to all the amazing people who have contributed to
          BitsAndPieces.
        </p>

        {loading ? (
          <p className="mt-12 text-neutral-500">Loading contributors…</p>
        ) : (
          <div className="mt-12 flex justify-center flex-wrap gap-4">
            {contributors.map((contributor) => (
              <motion.div
                key={contributor.id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
