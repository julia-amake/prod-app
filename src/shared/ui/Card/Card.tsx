import React, {
    ElementType, HTMLAttributes, memo, ReactNode,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType;
    to?: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const {
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
            className={cn(s.outer, {}, [className])}
            {...to ? { to, target } : {}}
            {...otherProps}
            {...bindHover}
        >
            {children}
        </Tag>
    );
});
