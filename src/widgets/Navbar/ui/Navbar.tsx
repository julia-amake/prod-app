import React, { useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cn(s.navbar, {}, [className])}>
                <Button
                    size={ButtonSize.M}
                    onClick={onLogout}
                    type="button"
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={cn(s.navbar, {}, [className])}>
            <Button
                size={ButtonSize.M}
                onClick={onOpenModal}
                type="button"
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
