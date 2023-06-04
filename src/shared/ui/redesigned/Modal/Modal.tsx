import React, { ReactNode, useEffect } from 'react';
import { BODY_MODAL_OPENED_CLASS_NAME } from '@/shared/consts/ui';
import { cn, Mode } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import {
    Heading as HeadingDeprecated,
    HeadingSize,
} from '../../deprecated/Heading/Heading';
import { Text as TextDeprecated } from '../../deprecated/Text/Text';
import { Card } from '../Card';
import { Heading } from '../Heading';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { Text } from '../Text';
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

export const Modal: React.FC<ModalProps> = (props) => {
    const {
        title,
        subtitle,
        isOpen,
        onClose,
        className = '',
        children,
        lazy = false,
    } = props;

    const { isShown, isMounted, isClosing, close } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const modalMods: Mode = {
        [s.opened]: isShown,
        [s.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(BODY_MODAL_OPENED_CLASS_NAME);
            return;
        }
        document.body.classList.remove(BODY_MODAL_OPENED_CLASS_NAME);
    }, [isOpen]);

    if (lazy && !isMounted) return null;
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Portal element={document.getElementById('app')}>
                    <div className={cn(s.modal, modalMods, [className])}>
                        <Overlay onClick={close} />
                        <Card className={s.redesigned_content} paddings="l">
                            {title && (
                                <Heading
                                    content={title}
                                    size="m"
                                    className={s.title}
                                    as="h3"
                                />
                            )}
                            {subtitle && (
                                <Text
                                    content={subtitle}
                                    className={s.subtitle}
                                />
                            )}
                            {children}
                        </Card>
                    </div>
                </Portal>
            }
            off={
                <Portal element={document.getElementById('app')}>
                    <div className={cn(s.modal, modalMods, [className])}>
                        <Overlay onClick={close} />
                        <div className={s.content}>
                            {title && (
                                <HeadingDeprecated
                                    content={title}
                                    size={HeadingSize.S}
                                    className={s.title}
                                    as="h3"
                                />
                            )}
                            {subtitle && (
                                <TextDeprecated
                                    content={subtitle}
                                    className={s.subtitle}
                                />
                            )}
                            {children}
                        </div>
                    </div>
                </Portal>
            }
        />
    );
};
