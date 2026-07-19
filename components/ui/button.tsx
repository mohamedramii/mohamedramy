import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-[transform,background-color,color,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "button-primary border-[var(--signal)] bg-[var(--signal)] px-6 text-[var(--ink)] hover:-translate-y-0.5 hover:bg-[var(--ivory)] hover:border-[var(--ivory)]",
        outline:
          "border-white/25 bg-white/[0.03] px-6 text-[var(--ivory)] hover:-translate-y-0.5 hover:border-[var(--signal)] hover:text-[var(--signal)]",
        ink:
          "border-[var(--ink)] bg-[var(--ink)] px-6 text-[var(--ivory)] hover:-translate-y-0.5 hover:bg-[var(--olive)] hover:border-[var(--olive)]",
        ghost:
          "border-transparent bg-transparent px-2 text-current hover:text-[var(--signal)]",
      },
      size: {
        default: "h-12",
        lg: "h-14 px-8 text-base",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
