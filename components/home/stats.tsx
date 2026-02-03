import React from "react";

const stats = [
  { value: "2.5k+", label: "Community Members" },
  { value: "150+", label: "Components & Blocks" },
  { value: "100%", label: "Type Safe" },
  { value: "0", label: "Runtime Dependencies" },
];

export const Stats: React.FC = () => {
  return (
    <section className="border-b border-border/60 bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center rounded-2xl border border-border/70 bg-card/60 px-4 py-6 shadow-[0_10px_40px_-35px_rgba(0,0,0,0.6)]"
            >
              <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-1 transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground font-mono font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
