import React, { memo, useMemo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useSelector } from 'react-redux';
import LogoSmall from 'shared/assets/icons/LogoSmall.svg';
import LogoLarge from 'shared/assets/icons/LogoLarge.svg';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

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

    return (
        <aside
            className={cn(
                s.sidebar,
                { [s.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <Link
                className={cn(s.logo, { [s.logo_size_s]: collapsed, [s.logo_size_l]: !collapsed })}
                to={RoutePath.main}
            >
                {collapsed ? (
                    <LogoSmall className={s.logo_pic} />
                ) : (
                    <LogoLarge className={s.logo_pic} />
                )}
            </Link>
            <nav className={s.menu}>
                {itemsList}
            </nav>
            <div className={s.actions}>
                <ThemeSwitcher className={s.themeSwitcher} isInvertedColor />
                <LangSwitcher isShort={collapsed} />
            </div>
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>
    );
});

export default Sidebar;
