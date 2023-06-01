import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Preloader as PreloaderDeprecated } from '@/shared/ui/deprecated/Preloader';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Preloader } from '@/shared/ui/redesigned/Preloader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { isOpen, onClose, className = '' } = props;
    const { t } = useTranslation();

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Modal
                    title={t('Войти')}
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                    className={cn('', {}, [className])}
                >
                    <Suspense fallback={<Preloader />}>
                        <LoginForm onSuccess={onClose} />
                    </Suspense>
                </Modal>
            }
            off={
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                    className={cn('', {}, [className])}
                >
                    <Suspense fallback={<PreloaderDeprecated />}>
                        <LoginForm onSuccess={onClose} />
                    </Suspense>
                </Modal>
            }
        />
    );
};

export default LoginModal;
