"use client";

import { HeroSectionOne } from "@/components/pieces/hero/section-one";

export function HeroSectionOneDemo() {
  return (
    <HeroSectionOne
      badge={{
        label: "v1.0 Released",
        href: "#",
      }}
      title="Build Your Next Idea Faster"
      description="A collection of copy-paste and installable components to build your next idea faster."
      cta={{
        primary: {
          label: "Get Started",
          href: "#",
        },
        secondary: {
          label: "Learn More",
          href: "#",
        },
      }}
      logos={
        <div className="flex gap-8 items-center text-neutral-500 dark:text-neutral-600">
          <span>Logo1</span>
          <span>Logo2</span>
          <span>Logo3</span>
          <span>Logo4</span>
        </div>
      }
    />
  );
}
