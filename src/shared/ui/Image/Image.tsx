import React, { ImgHTMLAttributes, memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Image.module.scss';

type HTMLImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>,
    'type' | 'value' | 'placeholder' | 'onChange'>

interface ImageProps extends HTMLImageProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Image = memo((props: ImageProps) => {
    const {
        src,
        alt = '',
        className = '',
    } = props;

    return (
        <img
            src={src}
            className={cn(s.outer, {}, [className])}
            alt={alt}
        />
    );
});
