"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Anurag",
    role: "Creator & Lead Maintainer",
    avatar: "https://github.com/itsTheAnurag.png",
    socials: {
      github: "https://github.com/itsTheAnurag",
      twitter: "https://twitter.com/itsTheAnurag",
    },
  },
  // Add more team members here if needed
];

export function Team() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Meet the Team
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The passionate minds behind BitsAndPieces.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 p-8 text-center border border-neutral-200 dark:border-neutral-800 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg">
                <div className="mb-6 inline-block relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-neutral-200 dark:ring-neutral-800 group-hover:ring-neutral-300 dark:group-hover:ring-neutral-700 transition-all">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                  {member.role}
                </p>

                <div className="flex justify-center gap-4">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
