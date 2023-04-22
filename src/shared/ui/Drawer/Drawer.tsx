import React, {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import s from './Drawer.module.scss';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right'

interface DrawerProps {
    position?: DrawerPosition;
    isOpen: boolean;
    onClose: (isOpen: boolean) => void;
    children: ReactNode;
    className?: string;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        position = 'bottom',
        isOpen,
        onClose,
        children,
        className = '',
    } = props;

    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        onClose?.(false);
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        // Делаем очистки
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={cn(s.outer, { [s.opened]: isOpen }, [className, theme])}>
                <Overlay onClick={closeHandler} />
                <div className={cn(s.content, {}, [s[`content_${position}`]])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
