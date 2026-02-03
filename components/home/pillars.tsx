import Link from "next/link";
import { FiBox, FiLayers, FiLayout } from "react-icons/fi";

const pillars = [
  {
    id: "components",
    title: "Components",
    description:
      "Atomic UI building blocks: buttons, cards, inputs, toggles, and more.",
    icon: FiBox,
    href: "/docs/components",
    accent: "from-emerald-500/20 via-transparent to-transparent",
  },
  {
    id: "blocks",
    title: "Blocks",
    description:
      "Full sections: headers, pricing, testimonials, FAQs, and footers.",
    icon: FiLayers,
    href: "/docs",
    accent: "from-blue-500/20 via-transparent to-transparent",
  },
  {
    id: "templates",
    title: "Templates",
    description:
      "Complete, downloadable projects wired with layouts and flows.",
    icon: FiLayout,
    href: "/docs",
    accent: "from-purple-500/20 via-transparent to-transparent",
  },
];

export function Pillars() {
  return (
    <section className="relative py-16 lg:py-20" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Library Structure
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Built in three layers
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Stay consistent across the stack. Each layer uses the same visual
            grammar, so your product feels unified end-to-end.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              id={pillar.id}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.6)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border"
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${pillar.accent}`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/50">
                    <pillar.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {pillar.title}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-foreground">
                  Explore {pillar.title}
                  <span className="h-[2px] w-6 bg-foreground/60 transition-all duration-300 group-hover:w-10" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
