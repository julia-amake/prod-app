import React, { FC } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
    props,
) => {
    const { block, className = '' } = props;

    return <Code content={block.code} className={cn(className)} />;
};
