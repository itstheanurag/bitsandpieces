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

export function SectionDivider({
  color = "rgba(99,102,241,0.12)", // indigo-500 at low opacity
  stripeWidth = 1,
  gap = 4,
  height = 36,
  angle = 135,
  className = "",
}: SectionDividerProps) {
  const bg = `repeating-linear-gradient(${angle}deg, ${color} 0 ${stripeWidth}px, transparent ${stripeWidth}px ${
    stripeWidth + gap
  }px)`;

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        height,
        backgroundImage: bg,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
      aria-hidden
    />
  );
}

export default SectionDivider;
