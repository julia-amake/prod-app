import React, { Suspense } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Preloader } from '@/shared/ui/Preloader';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className = '',
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={cn('', {}, [className])}
        >
            <Suspense fallback={<Preloader />}>
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
