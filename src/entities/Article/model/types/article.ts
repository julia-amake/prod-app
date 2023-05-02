import { User } from '@/entities/User';

import { ArticleBlockType, ArticleType } from '../consts/consts';

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

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    image: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[];
    user: User;
}
