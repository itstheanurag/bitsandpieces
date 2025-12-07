"use client";

import { SpotlightCard } from "@/components/pieces/cards/spotlight";

export function CardsSpotlightDemo() {
  return (
    <div className="flex justify-center items-center p-10">
      <SpotlightCard className="max-w-sm mx-auto p-8 rounded-3xl" spotlightColor="rgba(0, 229, 255, 0.2)">
        <h1 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-4 relative z-50">
          Spotlight Card
        </h1>
        <p className="font-normal text-base text-neutral-600 dark:text-neutral-400 mb-4 relative z-50">
          This card has a spotlight effect that follows your mouse cursor. It works best in dark mode but is visible in light mode too.
        </p>
        <button className="border px-4 py-1 rounded-lg  border-neutral-500 text-neutral-500 dark:border-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors relative z-50">
          Action
        </button>
      </SpotlightCard>
    </div>
  );
}
