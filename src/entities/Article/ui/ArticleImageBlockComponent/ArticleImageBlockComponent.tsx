import React, { FC } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { ContentImage } from '@/shared/ui/deprecated/Image';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
    props,
) => {
    const { block, className = '' } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <figure className={cn(s.outer, {}, [className])}>
                    <AppImage
                        className={s.redesigned_pic}
                        src={block.src}
                        alt={block.title}
                    />
                    {block.title && (
                        <Text
                            as="figcaption"
                            content={block.title}
                            margin="none"
                            size="s"
                            isCentered
                            className={s.redesigned_title}
                        />
                    )}
                </figure>
            }
            off={
                <figure className={cn(s.outer, {}, [className])}>
                    <ContentImage src={block.src} alt={block.title || ''} />
                    {block.title && (
                        <figcaption className={s.title}>
                            {block.title}
                        </figcaption>
                    )}
                </figure>
            }
        />
    );
};
