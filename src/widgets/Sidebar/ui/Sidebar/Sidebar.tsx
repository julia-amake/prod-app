import React, { memo, useMemo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useSelector } from 'react-redux';
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
