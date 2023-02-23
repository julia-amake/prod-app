import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={cn(s.loginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
