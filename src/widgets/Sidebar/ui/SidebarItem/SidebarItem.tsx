import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { cn } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item: { path, title, Icon },
        collapsed,
    } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.SECONDARY}
            className={cn(s.link, { [s.collapsed]: collapsed }, [])}
        >
            <Icon className={cn(s.linkIcon, { [s.linkIcon_home]: path === RoutePath.main }, [])} />
            <span className={s.linkTitle}>{t(title)}</span>
        </AppLink>
    );
});

export default SidebarItem;
