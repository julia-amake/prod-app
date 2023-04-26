import {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface useModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

export const useModal = (props: useModalProps) => {
    const {
        isOpen = false,
        animationDelay = 300,
        onClose,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    // Нужны для плавного закрытия модалки
    const [isClosing, setIsClosing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                setIsShown(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsShown(true);
            }, 0);
        } else {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                setIsShown(false);
            }, animationDelay);
        }
    }, [animationDelay, close, isOpen]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

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

    return {
        isMounted,
        isClosing,
        isShown,
        close,
    };
};
