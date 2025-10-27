"use client";

import { GlassButtonOne } from "@/components/pieces/button/glass/one";
import { GlassButtonTwo } from "@/components/pieces/button/glass/two";
import { GlassButtonThree } from "@/components/pieces/button/glass/three";

export function GlassButtonsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Glass Button 1
          </h2>
          <GlassButtonOne>Button 1</GlassButtonOne>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Glass Button 2
          </h2>
          <GlassButtonTwo>Button 2</GlassButtonTwo>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Glass Button 3
          </h2>
          <GlassButtonThree>Button 3</GlassButtonThree>
        </div>
      </div>
    </div>
  );
}
