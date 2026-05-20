import { cn } from "@/lib/cn";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
};

export function Container({ className, narrow, ...props }: ContainerProps) {
  return (
    <div className={cn(narrow ? "ds-container-narrow" : "ds-container", className)} {...props} />
  );
}
