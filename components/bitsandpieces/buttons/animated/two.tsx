import * as React from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/bitsandpieces/buttons/variants";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

export interface AnimatedButtonTwoProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const AnimatedButtonTwo = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonTwoProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

AnimatedButtonTwo.displayName = "AnimatedButtonTwo";

export { AnimatedButtonTwo };