import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import LogoSmall from '@/shared/assets/icons/LogoSmall.svg';
import LogoLarge from '@/shared/assets/icons/LogoLarge.svg';
import { HStack, VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import SidebarItem from '../SidebarItem/SidebarItem';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import s from './Sidebar.module.scss';
import { RoutePath } from '@/shared/consts/router';

interface SidebarProps {
    className?: string;
}

const customLogoProps:LinkProps = { to: RoutePath.main };

const Sidebar = memo((props: SidebarProps) => {
    const { className = '' } = props;
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () => (
            SidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            ))
        ),
        [SidebarItemsList, collapsed],
    );

    const Logo = useMemo(() => (collapsed ? LogoSmall : LogoLarge), [collapsed]);
    const Actions = useMemo(() => (collapsed ? VStack : HStack), [collapsed]);

    return (
        <VStack
            as="aside"
            className={cn(
                s.sidebar,
                { [s.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <HStack
                as={Link}
                className={cn(s.logo, { [s.logo_size_s]: collapsed, [s.logo_size_l]: !collapsed })}
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
                <ThemeSwitcher className={s.themeSwitcher} isInvertedColor />
                <LangSwitcher isShort={collapsed} />
            </Actions>
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
        </VStack>
    );
});

export default Sidebar;
