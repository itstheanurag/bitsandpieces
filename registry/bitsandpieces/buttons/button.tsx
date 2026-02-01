import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:duration-75",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--primary),white_20%),0_4px_0_0_color-mix(in_srgb,var(--primary),black_30%),0_6px_10px_0_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--primary),white_20%),0_6px_0_0_color-mix(in_srgb,var(--primary),black_30%),0_10px_15px_0_rgba(0,0,0,0.25)] active:translate-y-[2px] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--primary),white_20%),0_2px_0_0_color-mix(in_srgb,var(--primary),black_30%),0_4px_6px_0_rgba(0,0,0,0.2)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_0_0_color-mix(in_srgb,var(--secondary),white_10%),0_4px_0_0_color-mix(in_srgb,var(--secondary),black_15%),0_6px_10px_0_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_0_0_color-mix(in_srgb,var(--secondary),white_10%),0_6px_0_0_color-mix(in_srgb,var(--secondary),black_15%),0_10px_15px_0_rgba(0,0,0,0.15)] active:translate-y-[2px] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_0_0_color-mix(in_srgb,var(--secondary),white_10%),0_2px_0_0_color-mix(in_srgb,var(--secondary),black_15%),0_4px_6px_0_rgba(0,0,0,0.1)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--destructive),white_20%),0_4px_0_0_color-mix(in_srgb,var(--destructive),black_30%),0_6px_10px_0_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--destructive),white_20%),0_6px_0_0_color-mix(in_srgb,var(--destructive),black_30%),0_10px_15px_0_rgba(0,0,0,0.25)] active:translate-y-[2px] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_0_0_color-mix(in_srgb,var(--destructive),white_20%),0_2px_0_0_color-mix(in_srgb,var(--destructive),black_30%),0_4px_6px_0_rgba(0,0,0,0.2)]",
        outline:
          "bg-background text-foreground border border-border shadow-[0_4px_0_0_var(--border),0_6px_10px_0_rgba(0,0,0,0.05)] hover:-translate-y-[2px] hover:shadow-[0_6px_0_0_var(--border),0_10px_15px_0_rgba(0,0,0,0.08)] active:translate-y-[2px] active:shadow-[0_2px_0_0_var(--border),0_4px_6px_0_rgba(0,0,0,0.04)]",
        ghost:
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground active:scale-95 transition-all",
      },
      size: {
        default: "h-11 px-6 text-base",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const SideDepthButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
SideDepthButton.displayName = "SideDepthButton";

export { SideDepthButton, buttonVariants };
