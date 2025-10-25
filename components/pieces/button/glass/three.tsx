import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

export interface GlassButtonThreeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const GlassButtonThree = React.forwardRef<
  HTMLButtonElement,
  GlassButtonThreeProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

GlassButtonThree.displayName = "GlassButtonThree";

export { GlassButtonThree };
