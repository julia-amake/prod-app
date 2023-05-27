import React, { CSSProperties } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    inline?: boolean;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className = '',
        width = 'auto',
        height = 'auto',
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderRadius = 32,
        inline = false,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        borderRadius,
        display: inline ? 'inline-block' : 'block',
    };

    return <div className={cn(s.outer, {}, [className])} style={styles} />;
};
