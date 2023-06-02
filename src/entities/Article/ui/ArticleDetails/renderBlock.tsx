import React from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleDividerBlockComponent } from '../ArticleDividerBlockComponent/ArticleDividerBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './renderBlock.module.scss';

const renderBlock = (block: ArticleBlock, blocks: ArticleBlock[]) => {
    const mods = {
        [s.block_last]: blocks[blocks.length - 1] === block,
    };

    switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cn(s.block, mods)}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                    className={cn(s.block, mods)}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                    className={cn(s.block, mods)}
                />
            );
        case ArticleBlockType.DIVIDER:
            return (
                <ArticleDividerBlockComponent
                    key={block.id}
                    className={cn(s.block, mods)}
                />
            );
        default:
            return null;
    }
};

export default renderBlock;
