import React from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Preloader.module.scss';

interface PreloaderProps {
    className?: string;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Preloader: React.FC<PreloaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={cn(s.preloader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
