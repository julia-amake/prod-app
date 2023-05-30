import { PositiveInteger } from '../tsUtils';

export function truncateString(
    str: string,
    maxSymbols: PositiveInteger<number>,
    hasEllipsis: boolean = true,
): string {
    if (str.length <= maxSymbols) return str;

    const re = /[&[A-Za-z0-9]+;|&;|<\s*\w.*?>|<\s*\/\s*\w\s*.*?>|<\s*br\s*>]/g;
    const cleanStr = str.replace(re, ' ');

    if (cleanStr.length <= maxSymbols) return str;

    let symbolsLength = 0;
    let symbolsCount = 0;

    let match;
    while (match !== null) {
        match = re.exec(str);
        if (!match || match.index >= maxSymbols) break;
        symbolsLength += re.lastIndex - match.index;
        symbolsCount += 1;
    }

    const truncated = str
        .slice(0, maxSymbols + symbolsLength - symbolsCount)
        .trim();
    return hasEllipsis ? `${truncated}…` : truncated;
}
