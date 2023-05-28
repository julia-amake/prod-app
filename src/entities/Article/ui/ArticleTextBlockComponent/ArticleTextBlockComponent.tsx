import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Heading as HeadingDeprecated,
    HeadingSize,
} from '@/shared/ui/deprecated/Heading';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockProps) => {
        const { block, className = '' } = props;

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div className={cn(s.outer, {}, [className])}>
                        {block.title && (
                            <Heading
                                content={block.title}
                                size="s"
                                className={cn(s.title, {
                                    [s.title_last]:
                                        block.paragraphs.length === 0,
                                })}
                            />
                        )}
                        {block.paragraphs.map((p) => (
                            <Text content={p} key={p} />
                        ))}
                    </div>
                }
                off={
                    <div className={cn(s.outer, {}, [className])}>
                        {block.title && (
                            <HeadingDeprecated
                                content={block.title}
                                size={HeadingSize.S}
                                className={cn(s.title, {
                                    [s.title_last]:
                                        block.paragraphs.length === 0,
                                })}
                            />
                        )}
                        {block.paragraphs.map((p) => (
                            <TextDeprecated content={p} key={p} />
                        ))}
                    </div>
                }
            />
        );
    },
);
