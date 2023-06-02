import React, { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider';
import s from './Page.module.scss';

interface PageProps extends TestProps {
    children: ReactNode;
    onScrollEnd?: () => void;
    className?: string;
}

export const Page = (props: PageProps) => {
    const {
        children,
        onScrollEnd,
        className = '',
        dataTestid = 'Page',
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition;
            return;
        }

        document.body.scrollIntoView({ behavior: 'smooth' });
    }, [pathname]);

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <main
                    data-testid={dataTestid}
                    className={cn(s.outerRedesigned, {}, [className])}
                    {...(onScrollEnd ? { onScroll: onScrollHandler } : {})}
                >
                    {children}
                    {onScrollEnd && <div ref={triggerRef} />}
                </main>
            }
            off={
                <main
                    data-testid={dataTestid}
                    ref={wrapperRef}
                    className={cn(s.outer, {}, [className])}
                    {...(onScrollEnd ? { onScroll: onScrollHandler } : {})}
                >
                    {children}
                    {onScrollEnd && <div ref={triggerRef} />}
                </main>
            }
        />
    );
};
