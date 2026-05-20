import { cn } from "@/lib/cn";

/** Display: very thin. Section titles: light. Small headings: semibold. */
const displaySizes = {
  "2xl":
    "text-display-2xl sm:text-[2.75rem] lg:text-[2.625rem] font-extralight tracking-tight",
  xl: "text-display-xl font-extralight tracking-tight",
  lg: "text-display-lg font-light tracking-tight",
} as const;

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof displaySizes;
  /** Stronger weight for sub-headings (e.g. card titles) */
  emphasis?: "display" | "title";
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  emphasis = "display",
  className,
  ...props
}: HeadingProps) {
  const weight =
    emphasis === "title"
      ? size === "lg"
        ? "font-semibold"
        : "font-medium"
      : "";

  return (
    <Tag
      className={cn(
        "text-foreground",
        displaySizes[size],
        emphasis === "title" && weight,
        className,
      )}
      {...props}
    />
  );
}

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "body" | "body-lg" | "body-sm" | "muted" | "lead";
};

const textVariants = {
  body: "text-body font-normal leading-relaxed",
  "body-lg": "text-body-lg font-light leading-relaxed",
  "body-sm": "text-body-sm font-normal leading-relaxed",
  muted: "text-body-sm font-normal text-muted-foreground sm:text-body",
  lead: "text-body-lg font-light text-muted-foreground leading-relaxed",
} as const;

export function Text({ variant = "body", className, ...props }: TextProps) {
  return <p className={cn(textVariants[variant], className)} {...props} />;
}
