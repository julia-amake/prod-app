import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getRouteMain } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    AppLink as AppLinkDeprecated,
    AppLinkProps,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item: { path, title, Icon, authOnly },
        collapsed,
    } = props;

    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();

    const linkCustomProps: Omit<AppLinkProps, 'children'> = useMemo(
        () => ({
            to: path,
            theme: AppLinkTheme.SECONDARY,
        }),
        [path],
    );

    const Item = useMemo(() => (collapsed ? VStack : HStack), [collapsed]);

    if (authOnly && !isAuth) return null;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    as={AppLink}
                    className={cn(
                        s.linkRedesigned,
                        { [s.link_collapsed]: collapsed },
                        [],
                    )}
                    align="center"
                    fullWidth
                    customProps={{
                        to: path,
                        variant: 'clear',
                        ...(!collapsed
                            ? { activeClassName: s.linkRedesignedActive }
                            : {}),
                    }}
                >
                    <Icon className={s.linkIconRedesigned} />
                    <span className={s.linkTitleRedesigned}>{t(title)}</span>
                </HStack>
            }
            off={
                <Item
                    as={AppLinkDeprecated}
                    customProps={linkCustomProps}
                    className={cn(
                        s.link,
                        { [s.link_collapsed]: collapsed },
                        [],
                    )}
                    align="center"
                    fullWidth
                >
                    <Icon
                        className={cn(
                            s.linkIcon,
                            { [s.linkIcon_home]: path === getRouteMain() },
                            [],
                        )}
                    />
                    <span className={s.linkTitle}>{t(title)}</span>
                </Item>
            }
        />
    );
});

export default SidebarItem;
