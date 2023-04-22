import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { cn, Mode } from 'shared/lib/classNames/classNames';
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

const ANIMATION_DELAY = 300;

const Modal: React.FC<ModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className = '',
        children,
        lazy = false,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    // Нужны для плавного закрытия модалки
    const [isClosing, setIsClosing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsShown(true);
            }, 0);
        }
    }, [isOpen]);

    const modalMods: Mode = {
        [s.opened]: isShown,
        [s.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                setIsShown(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        // Делаем очистки
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(s.modal, modalMods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
