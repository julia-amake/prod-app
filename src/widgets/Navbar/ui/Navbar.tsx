import React, { memo, useCallback, useState } from 'react';
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

const Navbar = memo((props:NavbarProps) => {
    const { className = '' } = props;
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
        setIsAuthModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cn(s.navbar, {}, [className])}>
                <Button
                    label={t('Выйти')}
                    size={ButtonSize.M}
                    onClick={onLogout}
                    type="button"
                />
            </div>
        );
    }

    return (
        <div className={cn(s.navbar, {}, [className])}>
            <Button
                label={t('Войти')}
                size={ButtonSize.M}
                onClick={onOpenModal}
                type="button"
            />
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
});

export default Navbar;
