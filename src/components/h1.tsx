import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1 className={cn("text-5xl", className)} {...props} ref={ref}>
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";
