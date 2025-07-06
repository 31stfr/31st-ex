import { ErrorData } from '@/types/typesGlobal';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const toErrorData = (error: unknown): ErrorData => {
    if (error instanceof Error) {
        return { message: error.message };
    } else if (typeof error === 'string') {
        return { message: error };
    } else {
        return { message: 'An unknown error occurred' };
    }
};
