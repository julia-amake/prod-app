import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';
import s from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className = '' } = props;

    return (
        <VStack
            fullWidth
            justify="end"
            className={cn(s.outer, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
