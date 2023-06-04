import React, { FC } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code as CodeRedesigned } from '@/shared/ui/redesigned/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
    props,
) => {
    const { block, className = '' } = props;
    const Code = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CodeRedesigned,
        off: () => CodeDeprecated,
    });
    return <Code content={block.code} className={cn(className)} />;
};
