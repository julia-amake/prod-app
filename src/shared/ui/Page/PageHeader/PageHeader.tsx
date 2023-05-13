import React, { ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './PageHeader.module.scss';

interface PageHeaderProps {
    children: ReactNode;
    className?: string;
}

export const PageHeader = (props: PageHeaderProps) => {
    const { children, className = '' } = props;

    return (
        <div className={cn(s.outer, {}, [className])}>
            <div className={s.container}>{children}</div>
        </div>
    );
};
