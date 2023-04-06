import React, {
    UIEvent, MutableRefObject, ReactNode, useRef,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import s from './Page.module.scss';

interface PageProps {
    header?: ReactNode;
    children: ReactNode;
    onScrollEnd?: () => void;
    className?: string;
}

export const Page = (props: PageProps) => {
    const {
        header,
        children,
        onScrollEnd,
        className = '',
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={cn(s.outer, {}, [className])}
            {...onScrollEnd ? { onScroll: onScrollHandler } : {}}
        >
            {header && (
                <div className={s.header}>
                    <div className="container container_size_l">
                        {header}
                    </div>
                </div>
            )}
            <div className={cn(s.content, {}, ['container container_size_m'])}>
                {children}
                {onScrollEnd && <div ref={triggerRef} />}
            </div>
        </main>
    );
};
