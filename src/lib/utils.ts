import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headerConfig = {
  "Content-Type": "application/json",
  "x-request-id": "group2-malakas",
};

export const getToken = () => {
  const session = JSON.parse(sessionStorage.getItem("session") || "{}");
  console.log("session", session);
  return session?.user?.token;
};

export const getUserSession = () => {
  const session = JSON.parse(sessionStorage.getItem("session") || "{}");
  return session?.user?.data;
};

export const isUserAdmin = () => {
  const session = JSON.parse(sessionStorage.getItem("session") || "{}");
  return session?.user?.data?.access_level == "admin" ? true : false;
};
