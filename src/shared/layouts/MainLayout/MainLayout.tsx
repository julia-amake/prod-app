import React, { ReactElement } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './MainLayout.module.scss';

interface MainLayoutProps {
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
    className?: string;
    id?: string;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { header, content, sidebar, toolbar, className = '', id } = props;

    return (
        <div className={cn(s.outer, {}, [className])} {...(id ? { id } : {})}>
            <div className={s.left}>{sidebar}</div>
            <div className={s.middle}>{content}</div>
            <div className={s.right}>
                <div className={s.header}>{header}</div>
                <div className={s.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
