// Record здесь создает тип с ключом string и значением boolean | string
export type Mode = Record<string, boolean | string>

export function cn(
    cls: string,
    mods: Mode = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods).filter((key) => mods[key]),
    ].join(' ');
}
