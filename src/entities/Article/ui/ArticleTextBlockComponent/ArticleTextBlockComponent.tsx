import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockProps) => {
    const {
        block,
        className = '',
    } = props;

    return (
        <div className={cn(s.outer, {}, [className])}>
            {block.title && (
                <Heading
                    content={block.title}
                    size={HeadingSize.S}
                    className={cn(s.title, { [s.title_last]: block.paragraphs.length === 0 })}
                />
            )}
            {block.paragraphs.map((p) => (
                <Text content={p} key={p} />
            ))}
        </div>
    );
});
