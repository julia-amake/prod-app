import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleCreate } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { NotificationButton } from '@/features/notificationButton';
import { UserDropdown } from '@/features/userDropdown';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo((props: NavbarProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const navigate = useNavigate();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onAddArticle = useCallback(() => {
        navigate(getRouteArticleCreate());
    }, [navigate]);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <HStack className={cn(s.navbarRedesigned, {}, [className])} as="header" gap="16">
                        <NotificationButton />
                        <UserDropdown setIsAuthModal={setIsAuthModal} />
                    </HStack>
                }
                off={
                    <header className={cn(s.navbar, {}, [className])}>
                        <HStack className={s.container} justify="between" align="center" gap="16">
                            <Button
                                label={t('Добавить статью')}
                                size={ButtonSize.M}
                                onClick={onAddArticle}
                                type="button"
                            />
                            <HStack align="center" gap="24">
                                <NotificationButton />
                                <UserDropdown setIsAuthModal={setIsAuthModal} />
                            </HStack>
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={cn(s.navbar, {}, [className])}>
            <HStack
                className={cn(s.container, {}, ['container', 'container_size_l'])}
                justify="end"
                align="center"
                gap="16"
            >
                <Button label={t('Войти')} size={ButtonSize.M} onClick={onOpenModal} type="button" />
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </HStack>
        </header>
    );
});

export default Navbar;
