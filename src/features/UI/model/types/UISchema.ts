// string - page address, number - scroll position
export type ScrollSchema = OptionalRecord<string, number>

export interface UISchema {
    scroll: ScrollSchema;
}
