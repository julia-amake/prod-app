import React, { CSSProperties } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    marginBottom?: string | number;
    marginRight?: string | number;
    inline?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className = '',
        width = 'auto',
        height = 'auto',
        marginBottom = 0,
        marginRight = 0,
        borderRadius = 32,
        inline = false,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        marginBottom,
        marginRight,
        borderRadius,
        display: inline ? 'inline-block' : 'block',
    };

    return (
        <div
            className={cn(s.outer, {}, [className])}
            style={styles}
        />
    );
};
