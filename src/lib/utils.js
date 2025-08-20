import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs) {
  // to combine string and variables for className
  return twMerge(clsx(inputs));
}

export function slugifyList(list) {
  // to slugify a list of strings. Example: ['John Smith', 'Alan Walker'] -> ['john-smith', 'alan-walker']
  return list.map((item) => (item ? item.replace(/\s+/g, "-").toLowerCase() : ""));
}
export function slugify(item) {
  // to slugify a string. Example: 'John Smith' -> 'john-smith'
  return item.replace(/\s+/g, "-").toLowerCase();
}
export function unslugify(item) {
  // To unslugify a string. Example: '/Work/Digital Marketing' -> 'Digital Marketing'
  const lastSlashIndex = item.lastIndexOf("/");

  if (lastSlashIndex !== -1) {
    item = item.substring(lastSlashIndex + 1); // Remove everything before the last /
  }

  return item.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function sendEmail(data) {
  // api call to send email
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message, { duration: 4000, closeButton: true });
      return 1;
    })
    .catch((err) => {
      toast.error("Something went wrong. Try Again Later");

      // alert(err);
    });
}
