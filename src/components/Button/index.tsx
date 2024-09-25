import Link, { LinkProps } from "next/link";

import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "h-14 flex items-center justify-center rounded-lg gap-2 text-ParagraphLg font-semibold",
  variants: {
    variant: {
      primary:
        "bg-blue-1 text-blue-3 hover:bg-blue-hover active:bg-blue-pressed",
      secondary:
        "text-neutral-1 border border-neutral-1 hover:border-neutral-hover active:border-blue-1"
    },
    size: {
      default: "w-60",
      full: "w-96"
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "default"
  }
});
interface ButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {}
export const Button = ({ size, variant, ...props }: ButtonProps) => {
  return (
    <Link {...props} className={buttonVariants({ variant, size })}>
      Faça parte
    </Link>
  );
};
