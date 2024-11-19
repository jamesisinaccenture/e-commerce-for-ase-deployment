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
  const session = JSON.parse(localStorage.getItem("session") || "{}");
  return session?.user?.token;
};

export const getUserSession = () => {
  const session = JSON.parse(localStorage.getItem("session") || "{}");
  return session?.user?.data;
};

export const isUserAdmin = () => {
  const session = JSON.parse(localStorage.getItem("session") || "{}");
  return session?.user?.data?.access_level == "admin" ? true : false;
};

export const imageToBlob = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        const blob = new Blob([reader.result as ArrayBuffer], {
          type: file.type,
        });
        resolve(blob);
      } else {
        reject(new Error("Failed to read file"));
      }
    };

    reader.onerror = (error) => reject(error);

    reader.readAsArrayBuffer(file);
  });
};

export const closeModal = () => {
  const close = document.getElementById("closeModal");

  if (close) close.click();
};
