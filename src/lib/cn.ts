import { clsx, type ClassValue } from "clsx";

/** Merge class names (add tailwind-merge later if conflicts arise). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
