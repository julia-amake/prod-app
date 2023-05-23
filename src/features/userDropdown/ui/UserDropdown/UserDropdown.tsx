import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '@/shared/assets/icons/Logout.svg';
import ProfileLine from '@/shared/assets/icons/ProfileLine.svg';
import Settings from '@/shared/assets/icons/Settings.svg';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/consts/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups/ui';
import { Dropdown } from '@/shared/ui/redesigned/Popups/ui';
import {
    getIsAdmin,
    getIsManager,
    getUserAuthData,
    userActions,
} from '@/entities/User';

interface UserDropdownProps {
    className?: string;
    setIsAuthModal: (value: boolean) => void;
}

export const UserDropdown = memo((props: UserDropdownProps) => {
    const { setIsAuthModal, className = '' } = props;

    const { t } = useTranslation();
    const isAdmin = useSelector(getIsAdmin);
    const isManager = useSelector(getIsManager);
    const showAdminPanel = isAdmin || isManager;
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch, setIsAuthModal]);

    if (!authData) return null;
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={className}
                    width="auto"
                    trigger={<Avatar size={48} src={authData.avatar} />}
                    items={[
                        ...(showAdminPanel
                            ? [
                                  {
                                      title: t('Панель управления'),
                                      icon: {
                                          element: Settings,
                                      },
                                      to: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            title: t('Мой профиль'),
                            icon: {
                                element: ProfileLine,
                            },
                            to: getRouteProfile(authData.id),
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
            }
            off={
                <DropdownDeprecated
                    className={className}
                    width="auto"
                    trigger={<Avatar size={40} src={authData.avatar} />}
                    items={[
                        ...(showAdminPanel
                            ? [
                                  {
                                      title: t('Панель управления'),
                                      icon: {
                                          element: Settings,
                                      },
                                      to: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            title: t('Мой профиль'),
                            icon: {
                                element: ProfileLine,
                            },
                            to: getRouteProfile(authData.id),
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
            }
        />
    );
});
