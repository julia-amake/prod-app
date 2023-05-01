import React, { FC } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Image } from '@/shared/ui/Image';
import { ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
    const {
        block,
        className = '',
    } = props;

    return (
        <figure className={cn(s.outer, {}, [className])}>
            <Image src={block.src} alt={block.title || ''} />
            {block.title && <figcaption className={s.title}>{block.title}</figcaption>}
        </figure>
    );
};
