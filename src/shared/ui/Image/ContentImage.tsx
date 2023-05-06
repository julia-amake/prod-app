import React, { ImgHTMLAttributes, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

import s from './Image.module.scss';

interface ContentImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    className?: string;
}

export const ContentImage = memo((props: ContentImageProps) => {
    const {
        src,
        alt = '',
        className = '',
    } = props;

    return (
        <AppImage
            src={src}
            className={cn(s.outer, {}, [className])}
            alt={alt}
            fallback={<Skeleton width="100%" height={360} className={className} />}
            errorFallback={<img src="/img/NoImageH.svg" className={cn(s.outer, {}, [className])} alt={alt} />}
        />
    );
});
