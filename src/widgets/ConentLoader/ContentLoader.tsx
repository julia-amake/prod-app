import React from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Preloader } from '@/shared/ui/deprecated/Preloader';
import { HStack } from '@/shared/ui/deprecated/Stack';
import s from './ContentLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const ContentLoader: React.FC<PageLoaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <HStack
            className={cn(s.wrapper, {}, [className])}
            align="center"
            justify="center"
        >
            <Preloader />
        </HStack>
    );
};

export default ContentLoader;
