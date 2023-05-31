import React, { ElementType, HTMLAttributes, memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType;
    to?: string;
    target?: string;
    children: ReactNode;
    className?: string;
    paddings?: 'none' | 'm' | 'l';
}

export const Card = memo((props: CardProps) => {
    const {
        paddings = 'm',
        children,
        className = '',
        as = 'div',
        to,
        target,
        ...otherProps
    } = props;

    const Tag = as;

    const { bindHover } = useHover();

    return (
        <Tag
            className={cn(
                s.outer,
                {
                    [s.outer_clickable]: !!to,
                },
                [s[`outer_paddings_${paddings}`], className],
            )}
            {...(to ? { to, target } : {})}
            {...otherProps}
            {...bindHover}
        >
            {children}
        </Tag>
    );
});
