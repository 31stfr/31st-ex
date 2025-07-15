import { ErrorData, MatchIndexes, ReactElementString } from '@/types/typesGlobal';
import { clsx, type ClassValue } from 'clsx';
import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { getSubstringIndexes, removeAccents } from './utilsString';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

// Try to extract error message
export const toErrorData = (error: unknown): ErrorData => {
    if (error instanceof Error) {
        return { message: error.message };
    } else if (typeof error === 'string') {
        return { message: error };
    } else {
        return { message: 'An unknown error occurred' };
    }
};

// Highlight matching text in an original string
const highlightMatches = (
    original: string,
    matches: MatchIndexes[],
    wrap: (key: string, text: string) => ReactElement
) => {
    const result: ReactElementString[] = [];

    let lastIndex = 0;
    matches.forEach((match, index) => {
        const key = `match-${index}`;

        // Adds unaffected text between two matches
        if (lastIndex < match.start) {
            result.push(original.slice(lastIndex, match.start));
        }

        // Adding highlighted text
        result.push(wrap(key, original.slice(match.start, match.end)));

        lastIndex = match.end;
    });

    // Added the rest of the text after the last match
    if (lastIndex < original.length) {
        result.push(original.slice(lastIndex));
    }

    return result;
};

// Search results highlighter
export const highlightSearchResults = (text: string, wordToMatch: string) => {
    const searchString = wordToMatch.trim();
    // Search string min length limit
    if (searchString?.length < 1) return text;

    const normalizedText = removeAccents(text.toLocaleLowerCase());
    const normalizedSearchString = removeAccents(searchString.toLocaleLowerCase());

    const matches = [...getSubstringIndexes(normalizedText, normalizedSearchString)];

    if (0 === matches.length) return text;

    return highlightMatches(text, matches, (key, matchedText) => {
        return (
            <span key={key} className="font-semibold text-rose-400">
                {matchedText}
            </span>
        );
    });
};
