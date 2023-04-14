import React, { memo, useCallback, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import Avatar from 'shared/ui/Avatar/Avatar';
import Logout from 'shared/assets/icons/Logout.svg';
import ProfileLine from 'shared/assets/icons/ProfileLine.svg';
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
    const navigate = useNavigate();

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

    const onAddArticle = useCallback(() => {
        navigate(RoutePath.article_create);
    }, [navigate]);

    if (authData) {
        return (
            <header className={cn(s.navbar, {}, [className])}>
                <HStack
                    className={s.container}
                    justify="between"
                    align="center"
                    gap="16"
                >
                    <Button
                        label={t('Добавить статью')}
                        size={ButtonSize.M}
                        onClick={onAddArticle}
                        type="button"
                    />
                    <Dropdown
                        width="auto"
                        trigger={<Avatar size={40} src={authData.avatar} />}
                        items={[
                            {
                                title: t('Мой профиль'),
                                icon: {
                                    element: ProfileLine,
                                },
                                to: RoutePath.profile + authData.id,
                            },
                            {
                                title: t('Выйти'),
                                icon: {
                                    element: Logout,
                                },
                                onClick: onLogout,
                            },
                        ]}
                    />
                </HStack>
            </header>
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
            </HStack>
        </header>
    );
});

export default Navbar;
