import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugifyList(list) {
  return list.map((item) => (item ? item.replace(/\s+/g, "-").toLowerCase() : ""));
}
export function slugify(item) {
  return item.replace(/\s+/g, "-").toLowerCase();
}
