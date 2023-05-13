import React, { ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Heading, HeadingSize } from '../../Heading/Heading';
import s from './PageSection.module.scss';

interface PageSectionProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export const PageSection = (props: PageSectionProps) => {
    const {
        title,
        children,
        className = '',
        ...otherProps
    } = props;

    return (
        <div
            className={cn(s.outer, {}, [className])}
            {...otherProps}
        >
            {title && (
                <Heading
                    content={title}
                    className={s.title}
                    size={HeadingSize.S}
                />
            )}
            {children}
        </div>
    );
};
