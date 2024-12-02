import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const headerConfig = {
    'Content-Type': 'application/json',
    'x-request-id': 'group2-malakas',
};

export const getToken = () => {
    const token = localStorage.getItem('token') || '';

    return !token.length ? '' : JSON.parse(token);
};

export const getUserSession = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user;
};

export const isUserAdmin = () => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    return isAdmin;
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
                reject(new Error('Failed to read file'));
            }
        };

        reader.onerror = (error) => reject(error);

        reader.readAsArrayBuffer(file);
    });
};

export const closeModal = () => {
    const close = document.getElementById('closeModal');

    if (close) close.click();
};

export const formatPrice = (
    price: number,
    currency = 'USD',
    locale = 'en-US',
) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return formatter.format(price);
};

export const formatDate = (date: string, locale = 'en-US', options = {}) => {
    const formatter = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options,
    });

    return formatter.format(new Date(date));
};
