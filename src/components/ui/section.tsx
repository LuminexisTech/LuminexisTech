import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, ...props },
  ref,
) {
  return <section ref={ref} className={cn("ds-section", className)} {...props} />;
});
