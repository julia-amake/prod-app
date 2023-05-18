import React, { ReactNode } from 'react';
import { cn, Mode } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Heading, HeadingSize } from '../Heading/Heading';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { Text } from '../Text/Text';
import s from './Modal.module.scss';

interface ModalProps {
    title?: string;
    subtitle?: string;
    isOpen?: boolean;
    className?: string;
    children?: ReactNode;
    onClose?: () => void;
    lazy?: boolean;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Modal: React.FC<ModalProps> = (props) => {
    const { title, subtitle, isOpen, onClose, className = '', children, lazy = false } = props;

    const { isShown, isMounted, isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const modalMods: Mode = {
        [s.opened]: isShown,
        [s.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;
    return (
        <Portal>
            <div className={cn(s.modal, modalMods, [className])}>
                <Overlay onClick={close} />
                <div className={s.content}>
                    {title && <Heading content={title} size={HeadingSize.S} className={s.title} />}
                    {subtitle && <Text content={subtitle} className={s.subtitle} />}
                    {children}
                </div>
            </div>
        </Portal>
    );
};
