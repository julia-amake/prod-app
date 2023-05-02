import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './ArticleDividerBlockComponent.module.scss';

interface ArticleDividerBlockComponentProps {
    className?: string;
}

export const ArticleDividerBlockComponent: FC<ArticleDividerBlockComponentProps> = (props) => {
    const {
        className = '',
    } = props;

    return (
        <div className={cn(s.outer, {}, [className])} />
    );
};
