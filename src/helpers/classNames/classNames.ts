//Record здесь создает тип с ключом string и значением boolean | string
type Mode = Record<string, boolean | string>

export function cn(cls: string, mods: Mode, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}
