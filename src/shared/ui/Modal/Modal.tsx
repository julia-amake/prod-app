import React, { ReactNode } from 'react';
import { cn, Mode } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import s from './Modal.module.scss';

interface ModalProps {
    isOpen?: boolean;
    className?: string;
    children?: ReactNode;
    onClose?: () => void;
    lazy?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className = '',
        children,
        lazy = false,
    } = props;

    const {
        isShown, isMounted, isClosing, close,
    } = useModal({ isOpen, onClose, animationDelay: 300 });

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
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
