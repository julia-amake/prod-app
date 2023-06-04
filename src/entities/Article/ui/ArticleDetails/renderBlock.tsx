import React from 'react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleDividerBlockComponent } from '../ArticleDividerBlockComponent/ArticleDividerBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.DIVIDER:
            return <ArticleDividerBlockComponent key={block.id} />;
        default:
            return null;
    }
};

export default renderArticleBlock;
