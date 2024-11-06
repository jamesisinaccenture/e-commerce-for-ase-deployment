import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headerConfig = {
  "Content-Type": "application/json",
  "x-request-id": "group2-malakas",
};
