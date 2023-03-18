export enum ArticleBlockType {
    'TEXT' = 'TEXT',
    'CODE' = 'CODE',
    'IMAGE' = 'IMAGE',
    'DIVIDER' = 'DIVIDER'
}

export interface ArticleBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlock{
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBaseBlock{
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock{
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleDividerBlock extends ArticleBaseBlock{
    type: ArticleBlockType.DIVIDER;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock | ArticleDividerBlock;

export enum ArticleType {
    'IT' = 'IT',
    'SCIENCE' = 'SCIENCE',
    'ECONOMIC' = 'ECONOMIC'
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    image: string,
    views: number,
    createdAt: string,
    type: ArticleBlock[],
    blocks: ArticleType[]
}
