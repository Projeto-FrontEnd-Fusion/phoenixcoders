import { ComponentProps, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: "flex items-center justify-center rounded-lg gap-2 font-semibold text-lg transition-colors ",
  variants: {
    variant: {
      primary:
        "bg-blue-1 text-blue-3 hover:bg-blue-hover active:bg-blue-pressed",
      secondary:
        "text-neutral-1 border border-neutral-1 hover:border-neutral-hover active:border-blue-1"
    },
    size: {
      default: "w-60 h-[60px]",
      full: "w-full h-[60px]"
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "default"
  }
});
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  }
);
Button.displayName = "Button";
