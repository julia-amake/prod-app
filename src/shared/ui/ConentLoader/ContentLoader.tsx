import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Preloader from 'shared/ui/Preloader/Preloader';
import s from './ContentLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const ContentLoader: React.FC<PageLoaderProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={cn(s.wrapper, {}, [className])}>
            <Preloader />
        </div>
    );
};

export default ContentLoader;
