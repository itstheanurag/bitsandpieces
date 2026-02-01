import React from "react";

const stats = [
  { value: "2.5k+", label: "Community Members" },
  { value: "150+", label: "Components & Blocks" },
  { value: "100%", label: "Type Safe" },
  { value: "0", label: "Runtime Dependencies" },
];

export const Stats: React.FC = () => {
  return (
    <section className="border-b border-border bg-secondary/30 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group cursor-default"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-1 transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground font-mono font-medium uppercase tracking-widest group-hover:text-foreground transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
