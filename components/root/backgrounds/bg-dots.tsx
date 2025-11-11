import React from "react";

type SectionDividerProps = {
  /** css color for the stripe (can be rgba for translucency) */
  color?: string;
  /** thickness of each stripe in px */
  stripeWidth?: number;
  /** gap (transparent space) between stripes in px */
  gap?: number;
  /** height of the divider in px (or use tailwind via className) */
  height?: number;
  /** angle in degrees (default 135) */
  angle?: number;
  className?: string;
};

export function BackgroundDots({
  color = "rgba(99,102,241,0.12)", // Fallback light-mode color
  stripeWidth = 1,
  gap = 4,
  height = 36,
  angle = 135,
  className = "",
}: SectionDividerProps) {
  // Use a CSS variable for dark mode support, with the 'color' prop as a fallback.
  const colorValue = `var(--divider-color, ${color})`;

  // The total width of one repeating unit (stripe + gap).
  const totalWidth = stripeWidth + gap;

  const bg = `repeating-linear-gradient(${angle}deg, ${colorValue} 0 ${stripeWidth}px, transparent ${stripeWidth}px ${totalWidth}px)`;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        height,
        backgroundImage: bg,
        // Set an explicit size to prevent anti-aliasing artifacts and
        // ensure the pattern is consistent across browsers and zoom levels.
        backgroundSize: `${totalWidth}px ${totalWidth}px`,
        backgroundRepeat: "repeat",
      }}
      aria-hidden
    />
  );
}

export default BackgroundDots;
