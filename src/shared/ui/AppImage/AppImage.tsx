import React, {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    className?: string;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        src,
        alt = '',
        fallback,
        errorFallback,
        className = '',
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
            setHasError(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) return fallback;
    if (hasError && errorFallback) return errorFallback;

    return (
        <img src={src} className={className} alt={alt} {...otherProps} />
    );
});
