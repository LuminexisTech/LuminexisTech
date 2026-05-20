import clsx from "clsx";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "inverse";
};

export function Logo({ className, showWordmark = true, variant = "default" }: LogoProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2.5",
        variant === "inverse" ? "text-inverse-foreground" : "text-foreground",
        className,
      )}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="0.5" y="0.5" width="21" height="21" rx="4" stroke="currentColor" strokeWidth="1" />
        <path d="M11 5L12.2 10.2L17.5 11L12.2 11.8L11 17L9.8 11.8L4.5 11L9.8 10.2L11 5Z" fill="currentColor" />
      </svg>
      {showWordmark && (
        <span className="text-body font-semibold tracking-tight">Luminexis</span>
      )}
    </span>
  );
}
