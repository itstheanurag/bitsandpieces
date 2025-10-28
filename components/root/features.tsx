"use client";

import { features } from "../examples/pieces/bento/BentoGridFourDemo";
import { BentoGridFour } from "../pieces/bento/grid-four";

export function Features() {
  return (
    <section className="py-12 dark:bg-neutral-900">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-12">
          Why BitsAndPieces?
        </h2>
        <div className="flex flex-col gap-8 bg-neutral-50 dark:bg-neutral-800 p-8 rounded-lg">
          <BentoGridFour features={features} />
        </div>
      </div>
    </section>
  );
}
