import React, { memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    content: ReactNode;
    left?: ReactNode;
    right?: ReactNode;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { content, left, right, className = '' } = props;

    return (
        <div className={cn(s.outer, {}, [className])}>
            {left && <div className={s.left}>{left}</div>}
            <div className={s.content}>{content}</div>
            {right && <div className={s.right}>{right}</div>}
        </div>
    );
});
