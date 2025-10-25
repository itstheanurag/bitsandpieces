import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "relative overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-orange-500 before:opacity-40 hover:before:opacity-50 transition-all duration-300",
        gradient:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white",
        "gradient-hover":
          "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white",
        pulsing: "bg-blue-500 text-white animate-pulse",
        shimmer:
          "relative overflow-hidden bg-gray-800 text-white before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent",
        glow: "bg-purple-500 text-white shadow-lg shadow-purple-500/50",
        "glass-dark":
          "bg-black/20 border border-white/10 backdrop-blur-sm text-white",
        "glass-light":
          "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
