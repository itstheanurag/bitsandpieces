"use client";

import { motion } from "framer-motion";
import { Star, Download, Users } from "lucide-react";

const stats = [
  {
    icon: <Star className="h-5 w-5" />,
    value: "12k+",
    label: "GitHub Stars",
  },
  {
    icon: <Download className="h-5 w-5" />,
    value: "450k+",
    label: "Weekly Downloads",
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: "200+",
    label: "Contributors",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 text-center"
            >
              <div className="p-2 rounded-full bg-background border border-border text-muted-foreground">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
