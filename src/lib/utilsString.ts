import { MatchIndexes } from '@/types/typesGlobal';

export const getSubstringIndexes = function* (
    str: string,
    search: string
): Generator<MatchIndexes, void, unknown> {
    let i = 0;
    while (true) {
        const index = str.indexOf(search, i);
        if (-1 === index) return;

        yield {
            start: index,
            end: index + search.length,
        };
        i = index + 1;
    }
};

// Remove all accents from a string
// Good explanation here: https://www.30secondsofcode.org/js/s/remove-accents/
export const removeAccents = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
