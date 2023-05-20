import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';
import LogoLarge from '@/shared/assets/icons/LogoLarge.svg';
import LogoSmall from '@/shared/assets/icons/LogoSmall.svg';
import { getRouteMain } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const customLogoProps: LinkProps = { to: getRouteMain() };

const Sidebar = memo((props: SidebarProps) => {
    const { className = '' } = props;
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [SidebarItemsList, collapsed],
    );

    const Logo = useMemo(
        () => (collapsed ? LogoSmall : LogoLarge),
        [collapsed],
    );
    const Actions = useMemo(() => (collapsed ? VStack : HStack), [collapsed]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack
                    as="aside"
                    className={cn(
                        s.sidebarRedesigned,
                        { [s.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                    data-testid="sidebar"
                >
                    <div className={s.logoWrapper}>
                        <AppLogo
                            size={collapsed ? 48 : 140}
                            withText={!collapsed}
                            className={s.logoRedesigned}
                        />
                    </div>
                    <VStack
                        as="nav"
                        align={collapsed ? 'center' : 'start'}
                        className={s.menu}
                        gap="8"
                    >
                        {itemsList}
                    </VStack>
                    <SidebarToggle
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
                    />
                    <Actions
                        className={s.actionsRedesigned}
                        justify="center"
                        align="center"
                        gap={collapsed ? 'none' : '16'}
                    >
                        <ThemeSwitcher
                            className={s.themeSwitcherRedesigned}
                            isInvertedColor
                        />
                        <LangSwitcher isShort={collapsed} />
                    </Actions>
                </VStack>
            }
            off={
                <VStack
                    as="aside"
                    className={cn(s.sidebar, { [s.collapsed]: collapsed }, [
                        className,
                    ])}
                    data-testid="sidebar"
                >
                    <HStack
                        as={Link}
                        className={cn(s.logo, {
                            [s.logo_size_s]: collapsed,
                            [s.logo_size_l]: !collapsed,
                        })}
                        align="center"
                        customProps={customLogoProps}
                    >
                        <Logo className={s.logo_pic} />
                    </HStack>
                    <VStack
                        as="nav"
                        align={collapsed ? 'center' : 'start'}
                        className={s.menu}
                    >
                        {itemsList}
                    </VStack>
                    <Actions
                        className={s.actions}
                        justify="center"
                        align="center"
                        gap={collapsed ? 'none' : '16'}
                    >
                        <ThemeSwitcher
                            className={s.themeSwitcher}
                            isInvertedColor
                        />
                        <LangSwitcher isShort={collapsed} />
                    </Actions>
                    <SidebarToggle
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
                    />
                </VStack>
            }
        />
    );
});

export default Sidebar;
