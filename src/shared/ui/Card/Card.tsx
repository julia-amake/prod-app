import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const {
        children,
        className = '',
        ...otherProps
    } = props;

    const { isHover, bindHover } = useHover();

    return (
        <div
            className={cn(s.outer, {}, [className])}
            {...otherProps}
            {...bindHover}
        >
            {children}
        </div>
    );
});
