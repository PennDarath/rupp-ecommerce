import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
const textVariants = cva("", {
  variants: {
    variant: {
      heading: "text-4xl font-black tracking-tight",
      subheading: "text-3xl font-extrabold tracking-tight",
      caption: "text-2xl ",
      title: "text-base font-semibold",
      body: "text-base",
      small: "text-sm",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type Props = {
  className?: string;
  variant?: VariantProps<typeof textVariants>["variant"];
} & React.ComponentProps<"p">;

export function Text({ className, variant, ...props }: Props) {
  return <p {...props} className={cn(textVariants({ variant }), className)} />;
}
