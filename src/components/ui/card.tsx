import { cn } from "@/lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div className={cn(interactive ? "ds-card-interactive" : "ds-card", className)} {...props} />
  );
}
