import { GradientButtonOne } from "@/components/pieces/button/gradient/one";
import { GradientButtonThree } from "@/components/pieces/button/gradient/three";

export function GradientButtonsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Gradient Button 1
          </h2>
          <GradientButtonOne>Button 1</GradientButtonOne>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Gradient Button 3
          </h2>
          <GradientButtonThree>Button 3</GradientButtonThree>
        </div>
      </div>
    </div>
  );
}
