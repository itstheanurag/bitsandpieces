import React from "react";

const testimonials = [
  {
    content:
      "Bits&Pieces saved us literally weeks of development time. The components are gorgeous out of the box and fully customizable.",
    author: "Sarah Jenkins",
    role: "Frontend Lead at TechCorp",
    avatar: "S",
  },
  {
    content:
      "I've tried many UI libraries, but none feel as premium. The dark mode is flawless, and the code quality is exceptional.",
    author: "David Chen",
    role: "Indie Hacker",
    avatar: "D",
  },
  {
    content:
      "We completely overhauled our SaaS platform's design in just 3 days using the templates provided here.",
    author: "Alex Rivera",
    role: "CTO at StartupInc",
    avatar: "A",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Loved by builders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what developers and founders
            are saying about Bits&Pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-border/60 dark:border-border bg-card shadow-sm dark:bg-card/90 transition-all duration-300 hover:shadow-md dark:hover:bg-card hover:border-border"
            >
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t.author}
                  </h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
