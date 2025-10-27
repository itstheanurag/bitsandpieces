"use client";

import { AnimatedButtonOne } from "@/components/pieces/button/animated/one";
import { AnimatedButtonTwo } from "@/components/pieces/button/animated/two";
import { AnimatedButtonThree } from "@/components/pieces/button/animated/three";

export function AnimatedButtonsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Animated Button 1
          </h2>
          <AnimatedButtonOne>Button 1</AnimatedButtonOne>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Animated Button 2
          </h2>
          <AnimatedButtonTwo>Button 2</AnimatedButtonTwo>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Animated Button 3
          </h2>
          <AnimatedButtonThree>Button 3</AnimatedButtonThree>
        </div>
      </div>
    </div>
  );
}
