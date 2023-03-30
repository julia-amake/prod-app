import React, { MutableRefObject, ReactNode, useRef } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import s from './Page.module.scss';

interface PageProps {
    children: ReactNode;
    onScrollEnd?: () => void;
    className?: string;
}

export const Page = (props: PageProps) => {
    const {
        children,
        onScrollEnd,
        className = '',
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    return (
        <main
            ref={wrapperRef}
            className={cn(s.outer, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </main>
    );
};
