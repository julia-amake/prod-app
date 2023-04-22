import React, { memo, ReactNode } from 'react';
import { cn, Mode } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import s from './Drawer.module.scss';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right'

interface DrawerProps {
    position?: DrawerPosition;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    lazy?: boolean,
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        position = 'bottom',
        isOpen,
        onClose,
        children,
        lazy = false,
        className = '',
    } = props;

    const { theme } = useTheme();
    const {
        isShown,
        isMounted,
        isClosing,
        close,
    } = useModal({ isOpen, onClose, animationDelay: 300 });

    const mods: Mode = {
        [s.opened]: isShown,
        [s.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;
    return (
        <Portal>
            <div className={cn(s.outer, mods, [className, theme])}>
                <Overlay onClick={close} className={s.overlay} />
                <div className={cn(s.content, {}, [s[`content_${position}`]])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
