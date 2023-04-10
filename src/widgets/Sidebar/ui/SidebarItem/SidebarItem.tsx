import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkProps, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { cn } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack, VStack } from 'shared/ui/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item: {
            path, title, Icon, authOnly,
        },
        collapsed,
    } = props;

    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();

    const linkCustomProps: Omit<AppLinkProps, 'children'> = useMemo(() => ({
        to: path,
        theme: AppLinkTheme.SECONDARY,
    }), [path]);

    const Item = useMemo(() => (collapsed ? VStack : HStack), [collapsed]);

    if (authOnly && !isAuth) return null;

    return (
        <Item
            as={AppLink}
            customProps={linkCustomProps}
            className={cn(s.link, { [s.link_collapsed]: collapsed }, [])}
            align="center"
            fullWidth
        >
            <Icon className={cn(s.linkIcon, { [s.linkIcon_home]: path === RoutePath.main }, [])} />
            <span className={s.linkTitle}>{t(title)}</span>
        </Item>
    );
});

export default SidebarItem;
