import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import PreloaderIcon from 'shared/assets/icons/Preloader.svg';
import s from './Preloader.module.scss';

interface PreloaderProps {
    className?: string;
}

const Preloader: React.FC<PreloaderProps> = (props) => {
    const { className } = props;

    return (
        <PreloaderIcon
            className={cn(s.preloader, {}, [className])}
        />
    );
};

export default Preloader;
