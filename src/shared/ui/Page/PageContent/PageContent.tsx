import React, { memo, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './PageContent.module.scss';

interface PageContentProps {
    children: ReactNode;
    className?: string;
}

export const PageContent = memo((props: PageContentProps) => {
    const {
        children,
        className = '',
    } = props;

    return (
        <div className={cn(s.outer, {}, [className])}>
            {children}
        </div>
    );
});
