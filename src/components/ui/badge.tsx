import { cn } from "@/lib/cn";

const variants = {
  primary: "ds-pill-primary",
  muted: "ds-pill-muted",
  inverse: "ds-pill-inverse",
} as const;

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof variants;
};

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return <span className={cn(variants[variant], className)} {...props} />;
}
