import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
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

    return (
        <div
            className={cn(s.outer, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
